import './style.css';
import Projects from "./projects.js";
import Project from './project.js';
import { loadProject } from './loadProject.js';
import { setActiveTab } from './util.js';
import { loadProjectModal } from './projectModal.js';
import { loadTaskModal } from './taskModal.js';

const projects = new Projects(); // initialized with built-in projects 
// load home page (today page)
const contentContainer = loadProject(projects.getBuiltinProject(0));
const content = document.querySelector("#content");
content.appendChild(contentContainer); 
setActiveTab(document.querySelector("#go-to-today"));

loadProjectModal(projects);
loadTaskModal();

const homeButton = document.querySelector("#go-to-home");
const todayButton = document.querySelector("#go-to-today");

homeButton.addEventListener("click", (e) => {
    content.replaceChildren();      
    const contentContainer = loadProject(projects.getBuiltinProject(0));
    content.appendChild(contentContainer); 
    setActiveTab(todayButton); 
    loadTaskModal();
});

todayButton.addEventListener("click", (e) => {
    content.replaceChildren();
    const contentContainer = loadProject(projects.getBuiltinProject(0));
    content.appendChild(contentContainer); 
    setActiveTab(todayButton); // set the sidebar tab to active
    loadTaskModal();
});

const thisWeekButton = document.querySelector("#go-to-week");
thisWeekButton.addEventListener("click", (e) => {
    content.replaceChildren();
    const contentContainer = loadProject(projects.getBuiltinProject(1));
    content.appendChild(contentContainer); 
    setActiveTab(thisWeekButton);
    loadTaskModal();
});

const thisMonthButton = document.querySelector("#go-to-month");
thisMonthButton.addEventListener("click", (e) => {
    content.replaceChildren();
    const contentContainer = loadProject(projects.getBuiltinProject(2));
    content.appendChild(contentContainer); 
    setActiveTab(thisMonthButton); 
    loadTaskModal();
});

const completedButton = document.querySelector("#go-to-completed");
completedButton.addEventListener("click", (e) => {
    content.replaceChildren();
    const contentContainer = loadProject(projects.getBuiltinProject(3));
    content.appendChild(contentContainer); 
    setActiveTab(completedButton); 
    loadTaskModal();
});

const allButton = document.querySelector("#go-to-all");
allButton.addEventListener("click", (e) => {
    content.replaceChildren();
    const contentContainer = loadProject(projects.getBuiltinProject(4));
    content.appendChild(contentContainer); 
    setActiveTab(allButton); 
    loadTaskModal();
});
