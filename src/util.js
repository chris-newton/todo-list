import { loadProject } from "./loadProject.js";
import { loadTaskModal } from "./taskModal.js";

function setTabActive(button) {
    const tabs = document.querySelectorAll("#sidebar > ul> li");
    tabs.forEach((tab) => tab.classList.remove("active-tab"));
    
    const tab = button.parentElement;
    tab.classList.toggle("active-tab");
}

// adds new tab for a custom project
function appendTab(project) {
    const image = document.createElement("img");
    image.src = "../assets/calendar-today-outline.svg";

    const button = document.createElement("button");
    button.appendChild(image);
    button.textContent += project.name;
    button.addEventListener("click", () => {
        const content = document.querySelector("#content");
        content.replaceChildren();      
        const contentContainer = loadProject(project);
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