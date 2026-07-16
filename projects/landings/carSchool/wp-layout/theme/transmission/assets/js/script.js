const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.site-header__toggle');
const menuLinks = [...document.querySelectorAll('.site-header__menu a')];
const hero = document.querySelector('.hero');
const heroTrack = document.querySelector('.hero__track');
const heroContentTrack = document.querySelector('.hero__content-track');
const heroSlides = [...document.querySelectorAll('.hero__slide')];
const heroContentSlides = [...document.querySelectorAll('.hero__content-slide')];
const HERO_WIDTH = 1920;
const isMobile = () => window.matchMedia('(max-width: 620px)').matches;

const activeScrollLocks = new Set();
let lockedScrollPosition = 0;

const updatePageScrollLock = () => {
    const shouldLock = activeScrollLocks.size > 0;
    const isLocked = document.body.classList.contains('page-scroll-locked');

    if (shouldLock && !isLocked) {
        lockedScrollPosition = window.scrollY;

        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        document.documentElement.classList.add('page-scroll-locked');
        document.body.classList.add('page-scroll-locked');
        document.body.style.top = `-${lockedScrollPosition}px`;
        document.body.style.paddingRight = scrollbarWidth > 0 ? `${scrollbarWidth}px` : '';
    }

    if (!shouldLock && isLocked) {
        const previousScrollBehavior = document.documentElement.style.scrollBehavior;

        document.documentElement.classList.remove('page-scroll-locked');
        document.body.classList.remove('page-scroll-locked');
        document.body.style.top = '';
        document.body.style.paddingRight = '';

        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo(0, lockedScrollPosition);

        window.requestAnimationFrame(() => {
            document.documentElement.style.scrollBehavior = previousScrollBehavior;
        });
    }
};

window.pageScrollLock = {
    lock(key) {
        activeScrollLocks.add(key);
        updatePageScrollLock();
    },
    unlock(key) {
        activeScrollLocks.delete(key);
        updatePageScrollLock();
    },
};

// menu
if (header && menuToggle) {
    const closeMenu = (restoreFocus = false) => {
        header.classList.remove('site-header--open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Открыть меню');
        window.pageScrollLock.unlock('mobile-menu');

        if (restoreFocus) {
            menuToggle.focus();
        }
    };

    menuToggle.addEventListener('click', () => {
        const isOpen = header.classList.toggle('site-header--open');

        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');

        if (isOpen) {
            window.pageScrollLock.lock('mobile-menu');
        } else {
            window.pageScrollLock.unlock('mobile-menu');
        }
    });

    menuLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            closeMenu();

            window.requestAnimationFrame(() => {
                window.location.hash = link.hash;
            });
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && header.classList.contains('site-header--open')) {
            closeMenu(true);
        }
    });

    window.addEventListener('resize', () => {
        if (window.matchMedia('(min-width: 901px)').matches) {
            closeMenu();
        }
    });
}

// hero slider
if (heroTrack && heroSlides.length > 1) {
    let activeSlide = 0;

    const moveHeroSlider = () => {
        if (isMobile()) {
            heroTrack.style.transform = 'none';
            heroContentTrack.style.transform = 'none';
            return;
        }

        heroSlides.forEach((slide, index) => {
            slide.classList.toggle('hero__slide--active', index === activeSlide);
        });

        const offset = Math.min(0, (hero.clientWidth - HERO_WIDTH) / 2);

        heroTrack.style.transform = `translateX(${offset - activeSlide * HERO_WIDTH}px)`;
        heroContentTrack.style.transform = `translateX(-${activeSlide * 100}%)`;
    };

    const setActiveSlide = (nextSlide) => {
        heroContentSlides[activeSlide].classList.remove('hero__content-slide--active');

        activeSlide = nextSlide;

        heroContentSlides[activeSlide].classList.add('hero__content-slide--active');
        moveHeroSlider();
    };

    setInterval(() => {
        setActiveSlide((activeSlide + 1) % heroSlides.length);
    }, 4500);

    window.addEventListener('resize', moveHeroSlider);
    moveHeroSlider();
}
