const marqueeStates = new WeakMap();

const observeElementResize = (elements, callback) => {
    let resizeFrame;
    const scheduleCallback = () => {
        cancelAnimationFrame(resizeFrame);
        resizeFrame = requestAnimationFrame(callback);
    };

    if (typeof ResizeObserver !== "undefined") {
        const resizeObserver = new ResizeObserver(scheduleCallback);
        elements.forEach((element) => resizeObserver.observe(element));
        return;
    }

    window.addEventListener("resize", scheduleCallback);
};

const buildMarquee = (marquee) => {
    const track = marquee.querySelector(".trusted__track");
    const group = track?.querySelector(".trusted__group");

    if (!track || !group) {
        return;
    }

    if (!marqueeStates.has(marquee)) {
        marqueeStates.set(
            marquee,
            [...group.children].map((item) => item.cloneNode(true)),
        );
    }

    const sourceItems = marqueeStates.get(marquee);
    const createSourceItems = () => sourceItems.map((item) => item.cloneNode(true));

    track.replaceChildren(group);
    group.replaceChildren(...createSourceItems());
    group.removeAttribute("aria-hidden");

    if (sourceItems.length === 0) {
        return;
    }

    while (group.scrollWidth < marquee.clientWidth) {
        group.append(...createSourceItems());
    }

    const clone = group.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.querySelectorAll("img").forEach((image) => image.setAttribute("alt", ""));
    track.append(clone);

    const styles = getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap) || 0;
    const shift = group.getBoundingClientRect().width + gap;
    const speed = Number.parseFloat(marquee.dataset.speed) || 44;

    marquee.style.setProperty("--marquee-shift", `${shift}px`);
    marquee.style.setProperty("--marquee-duration", `${shift / speed}s`);
};

const marqueeElements = document.querySelectorAll("[data-marquee]");

marqueeElements.forEach(buildMarquee);

if (marqueeElements.length > 0) {
    observeElementResize(marqueeElements, () => marqueeElements.forEach(buildMarquee));
}

const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

if (menuToggle && menu) {
    const setMenuState = (isOpen) => {
        menu.classList.toggle("header__nav--open", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
        document.body.classList.toggle("menu-open", isOpen);
    };

    menuToggle.addEventListener("click", () => {
        setMenuState(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            setMenuState(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
            setMenuState(false);
            menuToggle.focus();
        }
    });

    const desktopMedia = window.matchMedia("(min-width: 769px)");
    desktopMedia.addEventListener("change", ({ matches }) => {
        if (matches) {
            setMenuState(false);
        }
    });
}

const duplicateSlidesForLoop = (track, minimumSlides) => {
    const sourceSlides = [...track.children];

    if (sourceSlides.length === 0) {
        return;
    }

    while (track.children.length < minimumSlides) {
        const clones = sourceSlides.map((slide) => {
            const clone = slide.cloneNode(true);
            clone.setAttribute("aria-hidden", "true");
            clone.querySelectorAll("img").forEach((image) => image.setAttribute("alt", ""));
            return clone;
        });

        track.append(...clones);
    }
};

document.querySelectorAll(".testimonials").forEach((sliderSection) => {
    const slider = sliderSection.querySelector("[data-slider]");
    const track = slider?.querySelector(".swiper-wrapper");
    const previousButton = sliderSection.querySelector("[data-slider-prev]");
    const nextButton = sliderSection.querySelector("[data-slider-next]");

    if (!slider || !track || !previousButton || !nextButton || typeof Swiper === "undefined") {
        return;
    }

    const maximumVisibleSlides = 4;
    duplicateSlidesForLoop(track, maximumVisibleSlides + 1);

    const testimonialSlider = new Swiper(slider, {
        a11y: {
            enabled: true,
            nextSlideMessage: "Next testimonial",
            prevSlideMessage: "Previous testimonial",
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1.5,
            },
            769: {
                slidesPerView: 2,
            },
            1025: {
                slidesPerView: maximumVisibleSlides,
            },
        },
        grabCursor: true,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        loop: true,
        navigation: {
            addIcons: false,
            nextEl: nextButton,
            prevEl: previousButton,
        },
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 24,
        speed: 500,
    });

    const mobileAutoplayMedia = window.matchMedia("(max-width: 479px)");
    const reducedMotionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateAutoplay = () => {
        const shouldAutoplay = mobileAutoplayMedia.matches && !reducedMotionMedia.matches;

        if (shouldAutoplay && !testimonialSlider.autoplay.running) {
            testimonialSlider.autoplay.start();
        } else if (!shouldAutoplay && testimonialSlider.autoplay.running) {
            testimonialSlider.autoplay.stop();
        }
    };

    mobileAutoplayMedia.addEventListener("change", updateAutoplay);
    reducedMotionMedia.addEventListener("change", updateAutoplay);
    updateAutoplay();
});
