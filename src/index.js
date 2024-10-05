import './style.css';
import { projects } from "./projects.js";
import { loadContent } from './loadContent.js';
import { setActiveTab } from './util.js';
import { loadProjectModal } from './projectModal.js';
import { loadTaskModal } from './taskModal.js';

// load home page (today page)
const contentContainer = loadContent(projects.getBuiltinProject("Today"));
const content = document.querySelector("#content");
content.appendChild(contentContainer); 
setActiveTab(document.querySelector("#go-to-today"));

loadProjectModal(projects);
loadTaskModal();

const homeButton = document.querySelector("#go-to-home");
const todayButton = document.querySelector("#go-to-today");

homeButton.addEventListener("click", (e) => {
    content.replaceChildren();
    const contentContainer = loadContent(projects.getBuiltinProject("Today"));
    content.appendChild(contentContainer); 
    setActiveTab(todayButton); 
});

todayButton.addEventListener("click", (e) => {
    content.replaceChildren();
    const contentContainer = loadContent(projects.getBuiltinProject("Today"));
    content.appendChild(contentContainer); 
    setActiveTab(todayButton); // set the sidebar tab to active
});

const thisWeekButton = document.querySelector("#go-to-week");
thisWeekButton.addEventListener("click", (e) => {
    content.replaceChildren();
    const contentContainer = loadContent(projects.getBuiltinProject("Week"));
    content.appendChild(contentContainer); 
    setActiveTab(thisWeekButton);
});

const thisMonthButton = document.querySelector("#go-to-month");
thisMonthButton.addEventListener("click", (e) => {
    content.replaceChildren();
    const contentContainer = loadContent(projects.getBuiltinProject("Month"));
    content.appendChild(contentContainer); 
    setActiveTab(thisMonthButton); 
});

const completedButton = document.querySelector("#go-to-completed");
completedButton.addEventListener("click", (e) => {
    content.replaceChildren();
    const contentContainer = loadContent(projects.getBuiltinProject("Completed"));
    content.appendChild(contentContainer); 
    setActiveTab(completedButton); 
});

const allButton = document.querySelector("#go-to-all");
allButton.addEventListener("click", (e) => {
    content.replaceChildren();
    const contentContainer = loadContent(projects.getBuiltinProject("All"));
    content.appendChild(contentContainer); 
    setActiveTab(allButton); 
});
