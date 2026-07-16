const requestModal = document.querySelector('#request-modal');
const requestDialog = requestModal?.querySelector('.request-modal__dialog');
const requestForm = document.querySelector('#request-form');
const requestOpenButtons = [...document.querySelectorAll('[data-request-open]')];
const requestCloseButtons = requestModal
    ? [...requestModal.querySelectorAll('[data-request-close]')]
    : [];
const personNamePattern = /^[A-Za-zА-Яа-яЁё]+(?:[ '\u2019-][A-Za-zА-Яа-яЁё]+)*$/u;
const phoneCharactersPattern = /^\+?[\d\s()-]+$/u;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u;
const telegramPattern = /^@?[A-Za-z][A-Za-z0-9_]{4,31}$/u;

if (requestModal && requestDialog && requestForm) {
    let lastFocusedElement = null;
    let closeTimer = null;
    const validatedControls = [
        requestForm.elements.first_name,
        requestForm.elements.last_name,
        requestForm.elements.phone,
        requestForm.elements.email,
        requestForm.elements.telegram,
        requestForm.elements.privacy_consent,
    ].filter(Boolean);

    const getField = (control) => control.closest('.request-field');

    const showFieldError = (control, message) => {
        const field = getField(control);
        if (!field) {
            return;
        }

        const errorElement = field.querySelector('.request-field__error');
        field.classList.add('request-field--invalid');
        control.setAttribute('aria-invalid', 'true');
        if (errorElement) {
            errorElement.textContent = message;
        }
    };

    const clearFieldError = (control) => {
        const field = getField(control);

        if (!field) {
            return;
        }

        const errorElement = field.querySelector('.request-field__error');
        field.classList.remove('request-field--invalid');
        control.removeAttribute('aria-invalid');
        if (errorElement) {
            errorElement.textContent = '';
        }
    };

    const validateControl = (control) => {
        const value = typeof control.value === 'string' ? control.value.trim() : '';

        if (control.name === 'first_name' || control.name === 'last_name') {
            const fieldName = control.name === 'first_name' ? 'имя' : 'фамилию';

            if (!value) {
                showFieldError(control, `Введите ${fieldName}.`);
                return false;
            }

            if (value.length < 2) {
                showFieldError(control, `Введите ${fieldName} полностью.`);
                return false;
            }

            if (!personNamePattern.test(value)) {
                showFieldError(control, 'Используйте только буквы, пробел, дефис или апостроф.');
                return false;
            }
        }

        if (control.name === 'phone') {
            if (!value) {
                showFieldError(control, 'Введите номер телефона.');
                return false;
            }

            if (!phoneCharactersPattern.test(value)) {
                showFieldError(control, 'Номер содержит недопустимые символы.');
                return false;
            }

            const phoneDigits = value.replace(/\D/g, '');
            if (phoneDigits.length < 10 || phoneDigits.length > 15) {
                showFieldError(control, 'Введите номер длиной от 10 до 15 цифр.');
                return false;
            }
        }

        if (control.name === 'email') {
            if (!value) {
                showFieldError(control, 'Введите электронную почту.');
                return false;
            }

            if (!emailPattern.test(value)) {
                showFieldError(control, 'Введите корректный адрес электронной почты.');
                return false;
            }
        }

        if (control.name === 'telegram' && value) {
            if (!telegramPattern.test(value)) {
                showFieldError(control, 'Введите username от 5 до 32 символов: буквы, цифры и _.');
                return false;
            }
        }

        if (control.name === 'privacy_consent' && !control.checked) {
            showFieldError(control, 'Подтвердите согласие на обработку персональных данных.');
            return false;
        }

        clearFieldError(control);
        return true;
    };

    const getFocusableElements = () => {
        const focusableSelector = [
            'a[href]',
            'button:not([disabled])',
            'input:not([disabled]):not([type="hidden"]):not([tabindex="-1"])',
            'select:not([disabled])',
            'textarea:not([disabled])',
            '[tabindex]:not([tabindex="-1"])',
        ].join(',');

        return [...requestDialog.querySelectorAll(focusableSelector)];
    };

    const trapFocus = (event) => {
        if (event.key !== 'Tab') {
            return;
        }

        const focusableElements = getFocusableElements();

        if (!focusableElements.length) {
            event.preventDefault();
            requestDialog.focus();
            return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && (document.activeElement === firstElement || document.activeElement === requestDialog)) {
            event.preventDefault();
            lastElement.focus();
        }

        if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    };

    const openRequestModal = (trigger) => {
        window.clearTimeout(closeTimer);
        lastFocusedElement = trigger;
        requestModal.hidden = false;

        window.requestAnimationFrame(() => {
            requestModal.classList.add('request-modal--open');
        });

        window.pageScrollLock?.lock('request-modal');
        requestDialog.focus();
    };

    const closeRequestModal = () => {
        if (requestModal.hidden) {
            return;
        }

        requestModal.classList.remove('request-modal--open');
        window.pageScrollLock?.unlock('request-modal');
        closeTimer = window.setTimeout(() => {
            requestModal.hidden = true;
        }, 250);

        if (lastFocusedElement instanceof HTMLElement) {
            lastFocusedElement.focus({preventScroll: true});
        }
    };

    requestOpenButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            openRequestModal(button);
        });
    });

    requestCloseButtons.forEach((button) => {
        button.addEventListener('click', closeRequestModal);
    });

    requestModal.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeRequestModal();
            return;
        }

        trapFocus(event);
    });

    validatedControls.forEach((control) => {
        control.addEventListener('blur', () => {
            validateControl(control);
        });

        control.addEventListener('input', () => {
            const field = getField(control);

            if (field?.classList.contains('request-field--invalid')) {
                validateControl(control);
            }

            requestForm.querySelector('.request-form__status').textContent = '';
        });
    });

    requestForm.elements.privacy_consent?.addEventListener('change', (event) => {
        validateControl(event.currentTarget);
    });

    requestForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const statusElement = requestForm.querySelector('.request-form__status');

        if (requestForm.elements.website.value.trim()) {
            return;
        }

        const validationResults = validatedControls.map((control) => validateControl(control));
        const firstInvalidIndex = validationResults.findIndex((isValid) => !isValid);

        if (firstInvalidIndex !== -1) {
            statusElement.className = 'request-form__status request-form__status--error';
            statusElement.textContent = 'Проверьте выделенные поля.';
            validatedControls[firstInvalidIndex].focus();
            return;
        }

        const formData = new FormData(requestForm);
        const requestData = Object.fromEntries(formData.entries());
        const endpointUrl = window.transmissionLeadsData?.endpointUrl;

        if (!endpointUrl) {
            if (window.transmissionStaticDemo !== true) {
                statusElement.className = 'request-form__status request-form__status--error';
                statusElement.textContent = 'Не удалось подготовить отправку формы.';
                return;
            }

            const staticRequestData = { ...requestData };
            delete staticRequestData.website;

            requestForm.dispatchEvent(
                new CustomEvent('request-form:validated', {
                    bubbles: true,
                    detail: staticRequestData,
                })
            );

            statusElement.className = 'request-form__status request-form__status--success';
            statusElement.textContent = 'Данные заполнены корректно и готовы к отправке.';
            return;
        }

        const submitButton = requestForm.querySelector('.request-form__submit');
        submitButton.disabled = true;

        statusElement.className = 'request-form__status';
        statusElement.textContent = 'Отправляем заявку…';

        try {
            // Отправляем JSON в endpoint плагина.
            const response = await fetch(endpointUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },

                body: JSON.stringify(requestData),
            });

            // WordPress должен вернуть JSON. Даже если вернул ошибку — не ломаем JS.
            const responseData = await response.json().catch(() => ({}));

            // Обрабатываем серверные ошибки: например, неверный email или rate limit.
            if (!response.ok) {
                const serverErrors = responseData?.data?.fields ?? {};

                Object.entries(serverErrors).forEach(([fieldName, message]) => {
                    const control = requestForm.elements[fieldName];

                    if (control instanceof HTMLElement && typeof message === 'string') {
                        showFieldError(control, message);
                    }
                });

                throw new Error(
                    responseData?.message ?? 'Не удалось отправить заявку. Попробуйте позже.'
                );
            }
            // Успешный ответ 201: только теперь показываем реальный успех.
            statusElement.className = 'request-form__status request-form__status--success';
            statusElement.textContent = responseData.message ?? 'Заявка успешно отправлена.';

            // Очищаем форму и старые сообщения об ошибках.
            requestForm.reset();
            validatedControls.forEach((control) => clearFieldError(control));

        } catch (error) {
            // Ошибка сети или ответ сервера с кодом 4xx/5xx.
            statusElement.className = 'request-form__status request-form__status--error';
            statusElement.textContent = error instanceof Error
                ? error.message
                : 'Не удалось отправить заявку. Попробуйте позже.';
        } finally {
            // Этот блок сработает и при успехе, и при любой ошибке.
            submitButton.disabled = false;
        }
    });
}
