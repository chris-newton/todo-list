import './style.css';
import Project from './project.js';
import { loadProject } from './loadProject.js';
import { setActiveTab } from './util.js';
import { loadProjectModal } from './projectModal.js';

const content = document.querySelector("#content");
const homeButton = document.querySelector("#go-to-home");
const todayButton = document.querySelector("#go-to-today");
homeButton.addEventListener("click", (e) => {
    content.replaceChildren();      // TODO: replace with existing object when implemented
    const svgPath = '../assets/calendar-today-outline.svg';
    const contentContainer = loadProject(new Project("Today", svgPath));
    content.appendChild(contentContainer); 
    setActiveTab(todayButton); // set the sidebar tab to active
});

todayButton.addEventListener("click", (e) => {
    content.replaceChildren();
    const svgPath = '../assets/calendar-today-outline.svg';
    const contentContainer = loadProject(new Project("Today", svgPath));
    content.appendChild(contentContainer); 
    setActiveTab(todayButton); // set the sidebar tab to active
});

const thisWeekButton = document.querySelector("#go-to-week");
thisWeekButton.addEventListener("click", (e) => {
    content.replaceChildren();
    const svgPath = '../assets/calendar-week-outline.svg';
    const contentContainer = loadProject(new Project("Week", svgPath));
    content.appendChild(contentContainer); 
    setActiveTab(thisWeekButton);
});

const thisMonthButton = document.querySelector("#go-to-month");
thisMonthButton.addEventListener("click", (e) => {
    content.replaceChildren();
    const svgPath = '../assets/calendar-month-outline.svg';
    const contentContainer = loadProject(new Project("Month", svgPath));
    content.appendChild(contentContainer); 
    setActiveTab(thisMonthButton); 
});

loadProjectModal();
loadProject(new Project("Today", '../assets/calendar-today-outline.svg'));
setActiveTab(document.querySelector("#go-to-today"));