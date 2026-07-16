const categoryTabs = Array.from(document.querySelectorAll('.categories__tab'));
const categoryPanel = document.querySelector('.categories__card');
const categoriesScriptUrl = document.currentScript?.src;
const fallbackAssetsUrl = categoriesScriptUrl
    ? new URL('../', categoriesScriptUrl).href.replace(/\/$/, '')
    : '';
const themeAssetsUrl = window.transmissionData?.assetsUrl ?? fallbackAssetsUrl;

if (categoryTabs.length && categoryPanel) {
    const categoryDescription = document.querySelector('.categories__description-text');
    const categoryLetter = document.querySelector('.categories__card-letter');
    const categoryBadge = document.querySelector('.categories__card-badge');
    const categoryValue = document.querySelector('.categories__price-value');
    const categoryProgram = document.querySelector('.categories__program');

    const baseProgram = [
        'Прохождение теории онлайн или очно',
        'Расходы на бензин и ГСМ',
        'Все внутренние экзамены в автошколе',
        'Подготовка пакета документов для сдачи экзаменов в ГИБДД',
        'Сопровождение на экзаменах в ГИБДД с куратором автошколы',
    ];

    const categories = {
        a: {
            letter: 'A',
            badge: null,
            price: '18.000',
            description: 'Мотоциклы с рабочим объемом двигателя более 125 см³.',
            background: 'category-a.png',
            program: [baseProgram[0], '18 часов практической езды', ...baseProgram.slice(1)],
        },
        'b-mkpp': {
            letter: 'B',
            badge: {
                type: 'image',
                src: `${themeAssetsUrl}/img/categories/mkpp.png`,
                alt: 'Механическая коробка передач',
            },
            price: '24.000',
            description: 'Легковой автомобиль с ручным переключением скоростей до 3.5 т.',
            background: 'category-b-mkpp.png',
            program: [baseProgram[0], '19 часов практической езды', ...baseProgram.slice(1)],
        },
        'b-akpp': {
            letter: 'B',
            badge: {
                type: 'image',
                src: `${themeAssetsUrl}/img/categories/akpp.png`,
                alt: 'Автоматическая коробка передач',
            },
            price: '26.000',
            description: 'Легковой автомобиль с автоматической коробкой передач до 3.5 т.',
            background: 'category-b-akpp.png',
            program: [baseProgram[0], '19 часов практической езды', ...baseProgram.slice(1)],
        },
        c: {
            letter: 'C',
            badge: null,
            price: '28.000',
            description: 'Грузовой автомобиль разрешенной массой свыше 3.5 т.',
            background: 'category-c.png',
            program: [baseProgram[0], '24 часа практической езды', ...baseProgram.slice(1)],
        },
        d: {
            letter: 'D',
            badge: null,
            price: '30.000',
            description: 'Автобусы, предназначенные для перевозки более восьми пассажиров.',
            background: 'category-d.png',
            program: [baseProgram[0], '30 часов практической езды', ...baseProgram.slice(1)],
        },
        de: {
            letter: 'E',
            badge: { type: 'text', value: 'D' },
            price: '34.000',
            description: 'Автобус категории D с прицепом разрешенной массой свыше 750 кг.',
            background: 'category-de.png',
            program: [baseProgram[0], 'Практические занятия с прицепом', ...baseProgram.slice(1)],
        },
        be: {
            letter: 'E',
            badge: { type: 'text', value: 'B' },
            price: '26.000',
            description: 'Легковой автомобиль категории B с прицепом массой свыше 750 кг.',
            background: 'category-be.png',
            program: [baseProgram[0], 'Практические занятия с прицепом', ...baseProgram.slice(1)],
        },
        ce: {
            letter: 'E',
            badge: { type: 'text', value: 'C' },
            price: '32.000',
            description: 'Грузовой автомобиль категории C с прицепом массой свыше 750 кг.',
            background: 'category-ce.png',
            program: [baseProgram[0], 'Практические занятия с прицепом', ...baseProgram.slice(1)],
        },
    };

    const updateBadge = (badge) => {
        categoryBadge.replaceChildren();
        categoryBadge.hidden = !badge;

        if (!badge) {
            return;
        }

        if (badge.type === 'image') {
            const badgeImage = document.createElement('img');
            badgeImage.src = badge.src;
            badgeImage.alt = badge.alt;
            categoryBadge.append(badgeImage);
            return;
        }

        categoryBadge.textContent = badge.value;
    };

    const updateProgram = (items) => {
        const programItems = items.map((item) => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            return listItem;
        });

        categoryProgram.replaceChildren(...programItems);
    };

    const selectCategory = (tab) => {
        const category = categories[tab.dataset.category];

        if (!category) {
            return;
        }

        categoryTabs.forEach((categoryTab) => {
            const isActive = categoryTab === tab;
            categoryTab.classList.toggle('categories__tab--active', isActive);
            categoryTab.setAttribute('aria-selected', String(isActive));
            categoryTab.tabIndex = isActive ? 0 : -1;
        });

        categoryDescription.textContent = category.description;
        categoryLetter.textContent = category.letter;
        categoryValue.textContent = category.price;
        categoryPanel.style.setProperty(
            '--category-bg',
            `url("${themeAssetsUrl}/img/categories/${category.background}")`
        );
        categoryPanel.setAttribute('aria-labelledby', tab.id);
        categoryPanel.querySelector('.categories__card-category')
            .setAttribute('aria-label', `Категория ${category.letter}`);

        updateBadge(category.badge);
        updateProgram(category.program);
    };

    categoryTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => selectCategory(tab));

        tab.addEventListener('keydown', (event) => {
            let nextIndex = index;

            if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                nextIndex = (index + 1) % categoryTabs.length;
            } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                nextIndex = (index - 1 + categoryTabs.length) % categoryTabs.length;
            } else if (event.key === 'Home') {
                nextIndex = 0;
            } else if (event.key === 'End') {
                nextIndex = categoryTabs.length - 1;
            } else {
                return;
            }

            event.preventDefault();
            categoryTabs[nextIndex].focus();
            selectCategory(categoryTabs[nextIndex]);
        });
    });
}
