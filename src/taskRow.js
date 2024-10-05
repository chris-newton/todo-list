import { projects } from './projects.js';
import { loadContent } from './loadContent.js';

import deleteSVG from "../assets/delete.svg";
import pencilSVG from "../assets/pencil.svg";
import uncheckedSVG from "../assets/checkbox-blank-outline.svg";

function createRow(task) {
    const taskRow = document.createElement("div");
    taskRow.classList.add("task-row");

    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.classList.add("task-row-checkbox");
    const checkBoxIcon = document.createElement("img");
    checkBoxIcon.src = uncheckedSVG; 
    checkBox.appendChild(checkBoxIcon);
    checkBox.addEventListener("click", () => {
        checkBox.classList.toggle("checked");
        taskRow.classList.toggle("completed");
    });
    
    const details = document.createElement("div");
    details.classList.add("task-row-details");
    const title = document.createElement("h4");
    title.textContent = task.title;
    const description = document.createElement("p");
    description.textContent = task.description;
    details.append(title, description);
    
    const meta = document.createElement("div");
    meta.classList.add("task-row-meta");
    const priority = document.createElement("span");
    priority.classList.add("priority");
    priority.textContent = task.priority;
    const dueDate = document.createElement("span");
    dueDate.classList.add("due-date");
    dueDate.textContent = task.dueDate;
    const project = document.createElement("span");
    project.classList.add("project");
    project.textContent = task.projectName;
    const removeButton = document.createElement("button");
    const removeIcon = document.createElement("img");
    removeIcon.src = deleteSVG; 
    removeButton.appendChild(removeIcon);
    removeButton.addEventListener("click", () => {
        let thisProject = projects.getProject(task.projectName);
        thisProject.removeTask(task);
        
        const content = document.querySelector("#content");
        const contentContainer = loadContent(thisProject);
        content.replaceChildren();
        content.appendChild(contentContainer); 
    });

    const editButton = document.createElement("button");
    const editIcon = document.createElement("img");
    editIcon.src = pencilSVG; 
    editButton.appendChild(editIcon);
    editButton.addEventListener("click", () => {
    }); 

    const buttons = document.createElement("div");
    buttons.classList.add("edit-task-buttons");
    buttons.append(editButton, removeButton);
    meta.append(priority, dueDate, project);

    const contentContainer = document.createElement("div");
    contentContainer.classList.add("task-content-container");
    contentContainer.append(details, meta);

    taskRow.append(checkBox, contentContainer, buttons);
    return taskRow;
}

export const createTaskRow = createRow;