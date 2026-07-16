window.PORTFOLIO_HUB_DATA = {
    categories: [
        { id: "all", label: "Все" },
        { id: "landings", label: "Лендинги" },
        { id: "multipage", label: "Многостраничные" },
        { id: "applications", label: "Приложения" },
        { id: "fullstack", label: "Fullstack" },
    ],

    // Для каждого проекта указывается ровно один адрес:
    // demoUrl — путь к проекту внутри хаба;
    // liveUrl — адрес опубликованной версии.
    projects: [
        {
            id: "transmission-driving-school",
            title: "Transmission Driving School",
            category: "landings",
            type: "WordPress landing",
            description:
                "Адаптивный сайт автошколы: от дизайна и верстки до кастомной WordPress-темы, плагина заявок и публикации на VPS.",
            stack: [
                "Photoshop",
                "HTML5",
                "CSS3",
                "JavaScript",
                "Swiper",
                "WordPress",
                "PHP",
                "ACF",
                "REST API",
            ],
            status: "live",
            demoUrl: "./projects/landings/carSchool/",
            // liveUrl — https://transmission-school.ru/
            // liveUrl — https://transmission-school.duckdns.org/
        },
    ],
};
