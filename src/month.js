import { loadContent } from "./loadContent.js";

function load() {
    const svgPath = "assets/calendar-month-outline.svg";
    const projectContainer = loadContent("Month", svgPath);
    const content = document.querySelector("#content");
    content.appendChild(projectContainer);
}

export const loadMonth = load; 