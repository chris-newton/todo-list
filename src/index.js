import './style.css';
import { loadToday } from './today.js';
import { loadWeek } from './week.js';
import { loadMonth } from './month.js';
import { wipeContent } from './wipe.js';
import { setActiveTab } from './util.js';

const homeButton = document.querySelector("#go-to-home");
homeButton.addEventListener("click", (e) => {
    wipeContent();
    loadToday();
    const button = document.querySelector("#go-to-today");
    setActiveTab(button); // set the tab of the clicked button to active
});

const todayButton = document.querySelector("#go-to-today");
todayButton.addEventListener("click", (e) => {
    wipeContent();
    loadToday();
    const button = e.target;
    setActiveTab(button); // set the tab of the clicked button to active
});

const thisWeekButton = document.querySelector("#go-to-week");
thisWeekButton.addEventListener("click", (e) => {
    const button = e.target;
    wipeContent();
    loadWeek();
    setActiveTab(button); // set the tab of the clicked button to active
});

const thisMonthButton = document.querySelector("#go-to-month");
thisMonthButton.addEventListener("click", (e) => {
    const button = e.target;
    wipeContent();
    loadMonth();
    setActiveTab(button); // set the tab of the clicked button to active
});

const addProjectButton = document.querySelector("#add-project");
addProjectButton.addEventListener("click", () => {
    const addProjectModal = document.querySelector("#add-project-modal");
    addProjectModal.showModal();

    const closeButton = document.querySelector("#close-project-modal");
    closeButton.addEventListener("click", () => addProjectModal.close());
});

const addProjectModal = document.querySelector("#add-project-modal");
const modalBg = document.querySelector(".modal-bg");
modalBg.addEventListener('click', (event) => {
    if (event.target.id === 'add-project-modal') {
        addProjectModal.close();
    }
});

loadToday();
setActiveTab(document.querySelector("#go-to-today"));
