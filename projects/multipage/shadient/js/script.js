const marqueeStates = new WeakMap();

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
    let resizeFrame;

    const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(resizeFrame);
        resizeFrame = requestAnimationFrame(() => marqueeElements.forEach(buildMarquee));
    });

    marqueeElements.forEach((marquee) => resizeObserver.observe(marquee));
}
