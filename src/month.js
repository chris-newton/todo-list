import { loadProjectContainer } from "./projectContainer.js";

function load() {
    const projectContainer = loadProjectContainer("Month");
    const content = document.querySelector("#content");
    content.appendChild(projectContainer);
}

export const loadMonth = load; 