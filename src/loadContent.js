import { createTaskRow } from "./taskRow";

function loadHeader(project) {
    const projectHeader = document.createElement("div");
    projectHeader.id = "project-header";
    const nameIcon = document.createElement("img");
    nameIcon.classList.add("header-icon"); 
    nameIcon.src = project.iconPath;
    const name = document.createElement("h2");
    name.textContent = project.name;
    projectHeader.append(nameIcon, name);
    return projectHeader;
}

function loadBody(project) {
    const projectContent = document.createElement("div");
    projectContent.id = "project-content";
     
    const addItemButton = document.createElement("button");
    addItemButton.id = "add-item-button";
    addItemButton.style.backgroundImage = "/assets/plus.svg";
    addItemButton.textContent = "Add a task";

    addItemButton.addEventListener("click", () => {
        const addTaskModal = document.querySelector("#add-task-modal");
        addTaskModal.showModal();
    }); 
    
    const taskGrid = document.createElement("div");
    taskGrid.id = "task-grid";
   
    project.tasks.forEach((task) => {
        const row = createTaskRow(task);
        taskGrid.appendChild(row);
    });

    projectContent.append(addItemButton, taskGrid);
    
    const projectBody = document.createElement("div");
    projectBody.id = "project-body";
    projectBody.append(projectContent);

    return projectBody;
}

// loads an empty project container of standard layout
function load(project) {
    const header = loadHeader(project);
    const body = loadBody(project);
    const contentContainer = document.createElement("div");
    contentContainer.id = "content-container";
    contentContainer.append(header, body);

    return contentContainer;
}

export const loadContent = load;