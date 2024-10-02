import { loadProjectContainer } from "./projectContainer.js";

function load() {
    const projectContainer = loadProjectContainer("Week");
    const content = document.querySelector("#content");
    content.appendChild(projectContainer);
}

export const loadWeek = load; 