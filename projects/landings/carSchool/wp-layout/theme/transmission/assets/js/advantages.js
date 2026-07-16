const advantagesSection = document.querySelector('.advantages');
const advantagesScheme = document.querySelector('.advantages__scheme');
const advantagesRails = document.querySelector('.advantages__rails');
const advantagesRailPath = advantagesRails?.querySelector('path');
const advantagesArm = document.querySelector('.advantages__arm');
const advantageCards = [...document.querySelectorAll('.advantages__card')];

if (
    advantagesSection
    && advantagesScheme
    && advantagesRails
    && advantagesRailPath
    && advantagesArm
    && advantageCards.length === 6
) {
    const compactAdvantages = window.matchMedia('(max-width: 767px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let armAnimation;
    let activeCard;
    let resizeFrame;

    const toTransform = ({ x, y }) => {
        const armWidth = advantagesArm.offsetWidth;
        const armHeight = advantagesArm.offsetHeight;

        return `translate3d(${x - armWidth / 2}px, ${y - armHeight / 2}px, 0)`;
    };

    const getLayout = () => {
        const schemeRect = advantagesScheme.getBoundingClientRect();
        const armWidth = advantagesArm.offsetWidth;
        const armHeight = advantagesArm.offsetHeight;
        const cardRects = advantageCards.map((card) => card.getBoundingClientRect());

        if (compactAdvantages.matches) {
            const railX = parseFloat(getComputedStyle(advantagesScheme).getPropertyValue('--rail-x'));

            return {
                compact: true,
                neutral: {
                    x: railX,
                    y: advantagesScheme.offsetHeight / 2,
                },
                targets: cardRects.map((rect) => ({
                    x: rect.left - schemeRect.left - armWidth / 2,
                    y: rect.top - schemeRect.top + rect.height / 2,
                })),
            };
        }

        const topRowBottom = Math.max(...cardRects.slice(0, 3).map((rect) => rect.bottom)) - schemeRect.top;
        const bottomRowTop = Math.min(...cardRects.slice(3).map((rect) => rect.top)) - schemeRect.top;
        const neutralY = (topRowBottom + bottomRowTop) / 2;
        const railXs = cardRects.slice(0, 3).map((rect) => (
            rect.left - schemeRect.left + rect.width / 2
        ));

        return {
            compact: false,
            neutral: {
                x: railXs[1],
                y: neutralY,
            },
            targets: cardRects.map((rect, index) => ({
                x: rect.left - schemeRect.left + rect.width / 2,
                y: index < 3
                    ? topRowBottom + armHeight / 2
                    : bottomRowTop - armHeight / 2,
            })),
            rails: {
                top: topRowBottom,
                height: bottomRowTop - topRowBottom,
                xs: railXs,
            },
        };
    };

    const syncDesktopRails = () => {
        const layout = getLayout();

        if (layout.compact) {
            return;
        }

        const { top, height, xs } = layout.rails;
        const middleY = height / 2;
        const path = [
            ...xs.map((x) => `M${x.toFixed(2)} 0V${height.toFixed(2)}`),
            `M${xs[0].toFixed(2)} ${middleY.toFixed(2)}H${xs[2].toFixed(2)}`,
        ].join(' ');

        advantagesRails.style.top = `${top}px`;
        advantagesRails.style.height = `${height}px`;
        advantagesRails.setAttribute('viewBox', `0 0 ${advantagesScheme.offsetWidth} ${height}`);
        advantagesRailPath.setAttribute('d', path);
    };

    const getCurrentPosition = () => {
        const schemeRect = advantagesScheme.getBoundingClientRect();
        const armRect = advantagesArm.getBoundingClientRect();

        return {
            x: armRect.left - schemeRect.left + armRect.width / 2,
            y: armRect.top - schemeRect.top + armRect.height / 2,
        };
    };

    const removeRepeatedPoints = (points) => points.filter((point, index) => {
        if (index === 0) {
            return true;
        }

        const previousPoint = points[index - 1];
        return Math.abs(point.x - previousPoint.x) > 1 || Math.abs(point.y - previousPoint.y) > 1;
    });

    const moveArm = (target, immediate = false, onComplete) => {
        const layout = getLayout();
        const start = advantagesSection.classList.contains('advantages--ready')
            ? getCurrentPosition()
            : layout.neutral;

        if (armAnimation) {
            armAnimation.cancel();
        }

        const middlePoints = layout.compact
            ? [
                { x: layout.neutral.x, y: start.y },
                { x: layout.neutral.x, y: target.y },
            ]
            : [
                { x: start.x, y: layout.neutral.y },
                { x: target.x, y: layout.neutral.y },
            ];

        const points = removeRepeatedPoints([start, ...middlePoints, target]);
        advantagesArm.style.transform = toTransform(target);

        if (immediate || reducedMotion.matches || points.length < 2) {
            if (!immediate) {
                onComplete?.();
            }
            return;
        }

        const distances = points.slice(1).map((point, index) => (
            Math.hypot(point.x - points[index].x, point.y - points[index].y)
        ));
        const totalDistance = distances.reduce((sum, distance) => sum + distance, 0);
        let travelledDistance = 0;

        const keyframes = points.map((point, index) => {
            if (index > 0) {
                travelledDistance += distances[index - 1];
            }

            return {
                transform: toTransform(point),
                offset: totalDistance ? travelledDistance / totalDistance : 1,
            };
        });

        armAnimation = advantagesArm.animate(keyframes, {
            duration: Math.min(900, Math.max(320, totalDistance * 1.5)),
            easing: 'ease-in-out',
        });

        if (onComplete) {
            armAnimation.addEventListener('finish', onComplete, { once: true });
        }
    };

    const wiggleInNeutral = () => {
        if (compactAdvantages.matches || reducedMotion.matches) {
            return;
        }

        const neutral = getLayout().neutral;
        const amplitude = 10;
        advantagesArm.style.transform = toTransform(neutral);

        armAnimation = advantagesArm.animate([
            { transform: toTransform(neutral), offset: 0 },
            { transform: toTransform({ x: neutral.x - amplitude, y: neutral.y }), offset: 0.2 },
            { transform: toTransform({ x: neutral.x + amplitude, y: neutral.y }), offset: 0.45 },
            { transform: toTransform({ x: neutral.x - amplitude * 0.65, y: neutral.y }), offset: 0.68 },
            { transform: toTransform({ x: neutral.x + amplitude * 0.45, y: neutral.y }), offset: 0.84 },
            { transform: toTransform(neutral), offset: 1 },
        ], {
            duration: 420,
            easing: 'ease-in-out',
        });
    };

    const resetAdvantages = (immediate = false) => {
        const shouldWiggle = Boolean(activeCard)
            && !immediate
            && !compactAdvantages.matches
            && !reducedMotion.matches;

        activeCard?.classList.remove('advantages__card--active');
        activeCard = undefined;
        moveArm(getLayout().neutral, immediate, shouldWiggle ? wiggleInNeutral : undefined);
    };

    const activateCard = (card) => {
        activeCard?.classList.remove('advantages__card--active');
        activeCard = card;
        activeCard.classList.add('advantages__card--active');

        const cardIndex = advantageCards.indexOf(card);
        moveArm(getLayout().targets[cardIndex]);
    };

    advantageCards.forEach((card) => {
        card.addEventListener('pointerenter', () => activateCard(card));
        card.addEventListener('focus', () => activateCard(card));
        card.addEventListener('click', () => activateCard(card));

        card.addEventListener('pointerleave', (event) => {
            if (event.pointerType === 'mouse' && !card.matches(':focus-visible')) {
                resetAdvantages();
            }
        });

        card.addEventListener('blur', () => {
            if (!card.matches(':hover')) {
                resetAdvantages();
            }
        });
    });

    const placeArmAfterResize = () => {
        cancelAnimationFrame(resizeFrame);
        resizeFrame = requestAnimationFrame(() => {
            syncDesktopRails();
            resetAdvantages(true);
        });
    };

    if ('ResizeObserver' in window) {
        const advantagesResizeObserver = new ResizeObserver(placeArmAfterResize);
        advantagesResizeObserver.observe(advantagesScheme);
    } else {
        window.addEventListener('resize', placeArmAfterResize);
    }

    compactAdvantages.addEventListener('change', placeArmAfterResize);
    syncDesktopRails();
    resetAdvantages(true);
    advantagesSection.classList.add('advantages--ready');
}
