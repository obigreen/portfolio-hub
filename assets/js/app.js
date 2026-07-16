const hubData = window.PORTFOLIO_HUB_DATA;
const filtersContainer = document.querySelector("[data-filters]");
const projectsList = document.querySelector("[data-projects-list]");
const emptyState = document.querySelector("[data-empty-state]");
const filterResult = document.querySelector("[data-filter-result]");
const projectCount = document.querySelector("[data-project-count]");
const categoryCount = document.querySelector("[data-category-count]");

if (!hubData || !filtersContainer || !projectsList) {
    throw new Error("Portfolio Hub data or root elements are missing.");
}

let activeCategory = "all";

const createElement = (tagName, className, textContent) => {
    const element = document.createElement(tagName);

    if (className) {
        element.className = className;
    }

    if (textContent) {
        element.textContent = textContent;
    }

    return element;
};

const getProjectUrl = (project) => {
    const hasDemoUrl =
        typeof project.demoUrl === "string" && project.demoUrl.trim() !== "";
    const hasLiveUrl =
        typeof project.liveUrl === "string" && project.liveUrl.trim() !== "";

    if (hasDemoUrl === hasLiveUrl) {
        throw new Error(
            `Project "${project.id}" must define exactly one URL: demoUrl or liveUrl.`
        );
    }

    return hasLiveUrl ? project.liveUrl : project.demoUrl;
};

const createProjectRow = (project) => {
    const article = createElement("article", "project-row");

    const heading = createElement("div", "project-row__heading");
    heading.append(
        createElement("p", "project-row__type", project.type),
        createElement("h2", "project-row__title", project.title)
    );

    const content = createElement("div", "project-row__content");
    content.append(
        createElement("p", "project-row__description", project.description)
    );

    const stack = createElement("ul", "project-row__stack");
    project.stack.forEach((technology) => {
        stack.append(createElement("li", "", technology));
    });
    content.append(stack);

    const link = createElement("a", "project-row__link", "Открыть ↗");
    link.href = getProjectUrl(project);
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    article.append(heading, content, link);

    return article;
};

const getVisibleProjects = () => {
    if (activeCategory === "all") {
        return hubData.projects;
    }

    return hubData.projects.filter((project) => project.category === activeCategory);
};

const renderProjects = () => {
    const visibleProjects = getVisibleProjects();
    projectsList.replaceChildren(...visibleProjects.map(createProjectRow));

    emptyState.hidden = visibleProjects.length > 0;
    projectsList.hidden = visibleProjects.length === 0;

    if (filterResult) {
        filterResult.textContent = `Показано: ${visibleProjects.length}`;
    }
};

const renderFilters = () => {
    const filterButtons = hubData.categories.map((category) => {
        const button = createElement("button", "filter", category.label);
        button.type = "button";
        button.setAttribute("aria-pressed", String(category.id === activeCategory));

        button.addEventListener("click", () => {
            activeCategory = category.id;

            filtersContainer.querySelectorAll(".filter").forEach((filterButton) => {
                filterButton.setAttribute(
                    "aria-pressed",
                    String(filterButton === button)
                );
            });

            renderProjects();
        });

        return button;
    });

    filtersContainer.replaceChildren(...filterButtons);
};

projectCount.textContent = String(hubData.projects.length);
categoryCount.textContent = String(
    hubData.categories.filter((category) => category.id !== "all").length
);

renderFilters();
renderProjects();
