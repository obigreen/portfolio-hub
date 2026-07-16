const stagesViewport = document.querySelector('.stages__viewport');
const stagesScrollbar = document.querySelector('.stages__scrollbar');
const stagesScrollbarThumb = document.querySelector('.stages__scrollbar-thumb');

if (stagesViewport && stagesScrollbar && stagesScrollbarThumb) {
    let dragStartX = 0;
    let dragStartScrollLeft = 0;

    const updateStagesScrollbar = () => {
        const visibleRatio = Math.min(1, stagesViewport.clientWidth / stagesViewport.scrollWidth);
        const thumbWidth = stagesScrollbar.clientWidth * visibleRatio;
        const maxScrollLeft = stagesViewport.scrollWidth - stagesViewport.clientWidth;
        const maxThumbOffset = stagesScrollbar.clientWidth - thumbWidth;
        const scrollProgress = maxScrollLeft > 0 ? stagesViewport.scrollLeft / maxScrollLeft : 0;

        stagesScrollbarThumb.style.width = `${thumbWidth}px`;
        stagesScrollbarThumb.style.transform = `translateX(${maxThumbOffset * scrollProgress}px)`;
    };

    stagesScrollbarThumb.addEventListener('pointerdown', (event) => {
        dragStartX = event.clientX;
        dragStartScrollLeft = stagesViewport.scrollLeft;
        stagesScrollbarThumb.setPointerCapture(event.pointerId);
    });

    stagesScrollbarThumb.addEventListener('pointermove', (event) => {
        if (!stagesScrollbarThumb.hasPointerCapture(event.pointerId)) {
            return;
        }

        const maxThumbOffset = stagesScrollbar.clientWidth - stagesScrollbarThumb.offsetWidth;
        const maxScrollLeft = stagesViewport.scrollWidth - stagesViewport.clientWidth;

        if (maxThumbOffset <= 0) {
            return;
        }

        const pointerOffset = event.clientX - dragStartX;
        stagesViewport.scrollLeft = dragStartScrollLeft + pointerOffset * (maxScrollLeft / maxThumbOffset);
    });

    stagesScrollbar.addEventListener('pointerdown', (event) => {
        if (event.target === stagesScrollbarThumb) {
            return;
        }

        const scrollbarRect = stagesScrollbar.getBoundingClientRect();
        const clickPosition = event.clientX - scrollbarRect.left - stagesScrollbarThumb.offsetWidth / 2;
        const maxThumbOffset = stagesScrollbar.clientWidth - stagesScrollbarThumb.offsetWidth;
        const maxScrollLeft = stagesViewport.scrollWidth - stagesViewport.clientWidth;
        const progress = maxThumbOffset > 0
            ? Math.min(1, Math.max(0, clickPosition / maxThumbOffset))
            : 0;

        stagesViewport.scrollTo({
            left: maxScrollLeft * progress,
            behavior: 'smooth',
        });
    });

    stagesViewport.addEventListener('scroll', updateStagesScrollbar, { passive: true });

    if ('ResizeObserver' in window) {
        const stagesResizeObserver = new ResizeObserver(updateStagesScrollbar);
        stagesResizeObserver.observe(stagesViewport);
    } else {
        window.addEventListener('resize', updateStagesScrollbar);
    }

    updateStagesScrollbar();
}
