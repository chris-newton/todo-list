import { loadContent } from "./loadContent.js";

function load() {
    const svgPath = "assets/calendar-week-outline.svg";
    const projectContainer = loadContent("Week", svgPath);
    const content = document.querySelector("#content");
    content.appendChild(projectContainer);
}

export const loadWeek = load; 