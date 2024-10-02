import { loadContent } from "./loadContent.js";

function load() {
    const svgPath = "./assets/calendar-today-outline.svg";
    const projectContainer = loadContent("Today", svgPath);
    const content = document.querySelector("#content");
    content.appendChild(projectContainer);
}

export const loadToday = load; 