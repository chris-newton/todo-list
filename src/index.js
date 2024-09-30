import './style.css';
import { loadToday } from './today.js';
import { loadWeek } from './week.js';
import { wipeContent } from './wipe.js';

const todayButton = document.querySelector("#go-to-today");
todayButton.addEventListener("click", () => {
    wipeContent();
    loadToday();
});

const thisWeekButton = document.querySelector("#go-to-week");
thisWeekButton.addEventListener("click", () => {
    wipeContent();
    loadWeek();
});