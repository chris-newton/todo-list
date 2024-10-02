import { loadProjectContainer } from "./projectContainer.js";

function load() {
    const svgPath = "../assets/calendar-today-outline.svg";
    const projectContainer = loadProjectContainer("Today", svgPath);
    const content = document.querySelector("#content");
    content.appendChild(projectContainer);
}

export const loadToday = load; 