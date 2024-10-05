import { loadContent } from "./loadContent.js";
import { loadTaskModal } from "./taskModal.js";

import todaySVG from "../assets/calendar-today-outline.svg";

/* More DOM stuff in this one */

function setTabActive(button) {
    const tabs = document.querySelectorAll("#sidebar > ul> li");
    tabs.forEach((tab) => tab.classList.remove("active-tab"));
    
    const tab = button.parentElement;
    tab.classList.toggle("active-tab");
}

// adds new tab for a custom project
function appendTab(project) {
    const tabIcon = document.createElement("img");
    tabIcon.src = todaySVG; 

    const button = document.createElement("button");
    button.textContent = " " + project.name;
    button.prepend(tabIcon);
    button.addEventListener("click", () => {
        const content = document.querySelector("#content");
        content.replaceChildren();      
        const contentContainer = loadContent(project);
        content.appendChild(contentContainer); 
        setActiveTab(button); // set the sidebar tab to active
        loadTaskModal();
    });

    const li = document.createElement("li");
    li.appendChild(button);

    const customProjectsList = document.querySelector("#custom-projects");
    customProjectsList.appendChild(li);
}

export const setActiveTab = setTabActive;
export const addTab = appendTab;