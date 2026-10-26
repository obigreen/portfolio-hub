window.PORTFOLIO_HUB_DATA = {
    categories: [
        { id: 'all', label: 'Все' },
        { id: 'landings', label: 'Лендинги' },
        { id: 'multipage', label: 'Многостраничные' },
        { id: 'applications', label: 'Приложения' },
        { id: 'fullstack', label: 'Fullstack' },
    ],

    // Для каждого проекта указывается ровно один адрес:
    // demoUrl — путь к проекту внутри хаба;
    // liveUrl — адрес опубликованной версии.
    projects: [
        {
            id: 'transmission-driving-school',
            title: 'Transmission Driving School',
            categories: ['landings', 'fullstack'],
            type: 'WordPress landing',
            description:
                'Адаптивный сайт автошколы: от дизайна и верстки до кастомной WordPress-темы, плагина заявок и публикации на VPS.',
            stack: [
                'Photoshop',
                'HTML5',
                'CSS3',
                'JavaScript',
                'Swiper',
                'WordPress',
                'PHP',
                'ACF',
                'REST API',
            ],
            status: 'live',
            demoUrl: './projects/landings/carSchool/',
            // liveUrl — https://transmission-school.ru/
            // liveUrl — https://transmission-school.duckdns.org/
        },

        {
            id: 'vitaCall',
            title: 'vitaCall',
            categories: ['landings'],
            type: 'Custom landing',
            description:
                'Адаптивный рекрутинговый лендинг, разработанный с нуля по текстовому ТЗ, с интерактивной анкетой и отправкой заявок в Telegram.',
            stack: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'Swiper',
                'PHP',
                'Telegram Bot API',
            ],
            status: 'live',
            demoUrl: './projects/landings/vitaCall/',
            // liveUrl — https://vitacall.ru/
        },

        {
            id: 'shadient',
            title: 'Shadient.co',
            categories: ['landings', 'multipage'],
            type: 'Multipage landing',
            description:
                'Адаптивный figma lending',
            stack: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'Swiper',
                'PHP',
                'Telegram Bot API',
            ],
            status: 'live',
            demoUrl: './projects/multipage/shadient/',
            // liveUrl — https://some.com/
        },

        {
            id: 'slimRush',
            title: 'Slim Rush',
            categories: ['landings'],
            type: 'Fullscreen slider landing',
            description:
                'Адаптивный слайдер-лендинг с полноэкранными секциями и анимациями.',
            stack: [
                'HTML5',
                'CSS3',
                'SCSS',
                'JavaScript',
                'jQuery',
                'GSAP',
                'Swiper',
                'Gulp',
            ],
            status: 'live',
            demoUrl: './projects/landings/slimRush/',
            // liveUrl — https://some.com/
        },
    ],
};
