const projectPage = document.querySelector("[data-project-page]");

if (projectPage) {
    const projectSlug = new URLSearchParams(window.location.search).get("project");
    const projectContent = projectPage.querySelector("[data-project-content]");
    const backLink = projectPage.querySelector("[data-project-back]");

    const setText = (selector, value) => {
        const element = projectPage.querySelector(selector);

        if (element) {
            element.textContent = value;
        }
    };

    const createListItem = (className, text) => {
        const item = document.createElement("li");
        item.className = className;
        item.textContent = text;
        return item;
    };

    const renderProject = (project) => {
        setText("[data-project-category]", project.category);
        setText("[data-project-title]", project.title);
        setText("[data-project-summary]", project.summary);
        setText("[data-project-overview]", project.overview);
        setText("[data-project-fact-category]", project.category);
        setText("[data-project-timeline]", project.timeline);
        setText("[data-project-challenge]", project.challenge);
        setText("[data-project-solution]", project.solution);

        const deliverables = projectPage.querySelector("[data-project-deliverables]");
        const results = projectPage.querySelector("[data-project-results]");
        const media = projectPage.querySelector("[data-project-media]");
        const description = document.querySelector('meta[name="description"]');

        deliverables?.replaceChildren(
            ...project.deliverables.map((item) => createListItem("case-study__deliverable", item)),
        );

        results?.replaceChildren(
            ...project.results.map((result, index) => {
                const item = document.createElement("li");
                const number = document.createElement("span");
                const text = document.createElement("p");

                item.className = "case-study__result";
                number.className = "case-study__result-number";
                number.textContent = String(index + 1).padStart(2, "0");
                number.setAttribute("aria-hidden", "true");
                text.className = "case-study__result-text";
                text.textContent = result;
                item.append(number, text);
                return item;
            }),
        );

        if (media) {
            media.setAttribute("aria-label", `${project.title} project preview`);

            if (/^#[\da-f]{6}$/i.test(project.accent)) {
                media.style.setProperty("--project-accent", project.accent);
            }
        }

        document.title = `${project.title} — Shadient.co`;

        if (description) {
            description.content = project.summary;
        }

        projectContent.hidden = false;
        projectPage.dataset.projectState = "ready";
        projectPage.setAttribute("aria-busy", "false");
    };

    const renderMissingProject = () => {
        setText("[data-project-category]", "Case study");
        setText("[data-project-title]", "Project not found");
        setText(
            "[data-project-summary]",
            "The requested case study is unavailable. Return to our work and choose another project.",
        );

        if (backLink) {
            backLink.href = "index.html#resources";
            backLink.textContent = "View our work";
        }

        projectContent.hidden = true;
        document.title = "Project Not Found — Shadient.co";
        projectPage.dataset.projectState = "error";
        projectPage.setAttribute("aria-busy", "false");
    };

    const loadProject = async () => {
        if (!projectSlug) {
            renderMissingProject();
            return;
        }

        try {
            const response = await fetch("data/projects.json", {
                headers: { Accept: "application/json" },
            });

            if (!response.ok) {
                throw new Error("Project data could not be loaded");
            }

            const data = await response.json();
            const project = data.projects?.find(({ slug }) => slug === projectSlug);

            if (!project) {
                renderMissingProject();
                return;
            }

            renderProject(project);
        } catch {
            renderMissingProject();
        }
    };

    loadProject();
}
