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

document.querySelectorAll(".testimonials").forEach((sliderSection) => {
    const viewport = sliderSection.querySelector("[data-slider]");
    const track = viewport?.querySelector(".testimonials__list");
    const cards = track ? [...track.children] : [];
    const previousButton = sliderSection.querySelector("[data-slider-prev]");
    const nextButton = sliderSection.querySelector("[data-slider-next]");

    if (!viewport || !track || cards.length === 0 || !previousButton || !nextButton) {
        return;
    }

    let currentIndex = 0;
    const getVisibleCardCount = () => {
        const trackStyles = getComputedStyle(track);
        const gap = Number.parseFloat(trackStyles.columnGap) || 0;
        const cardWidth = cards[0].getBoundingClientRect().width;

        return Math.max(1, Math.floor((viewport.clientWidth + gap) / (cardWidth + gap)));
    };

    const getLastIndex = () => Math.max(0, cards.length - getVisibleCardCount());

    const renderSlider = () => {
        currentIndex = Math.min(currentIndex, getLastIndex());
        track.style.transform = `translate3d(-${cards[currentIndex].offsetLeft}px, 0, 0)`;
    };

    previousButton.addEventListener("click", () => {
        const lastIndex = getLastIndex();
        currentIndex = currentIndex <= 0 ? lastIndex : currentIndex - 1;
        renderSlider();
    });

    nextButton.addEventListener("click", () => {
        const lastIndex = getLastIndex();
        currentIndex = currentIndex >= lastIndex ? 0 : currentIndex + 1;
        renderSlider();
    });

    observeElementResize([viewport], renderSlider);
    renderSlider();
});
