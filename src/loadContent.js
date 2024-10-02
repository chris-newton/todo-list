// loads an empty project container of standard layout
function loadContainer(projectName, svgPath) {
    const projectHeader = document.createElement("div");
    projectHeader.id = "project-header";

    const nameIcon = document.createElement("img");
    nameIcon.src = svgPath;
    const name = document.createElement("h2");
    name.textContent = projectName;

    projectHeader.append(nameIcon, name);

    const contentContainer = document.createElement("div");
    contentContainer.id = "content-container";
    const projectBody = document.createElement("div");
    projectBody.id = "project-body";
    
    const addItemButton = document.createElement("button");
    addItemButton.id = "add-item-button";
    addItemButton.style.backgroundImage = "/assets/plus.svg";
    addItemButton.textContent = "Add a task";
    
    const taskGrid = document.createElement("div");
    taskGrid.id = "project-grid";
    const dummyTask1 = document.createElement("div");
    dummyTask1.textContent = "dummy task 1        description          due date";
    const dummyTask2 = document.createElement("div");
    dummyTask2.textContent = "dummy task 2        description          due date";
    taskGrid.append(dummyTask1, dummyTask2);
    
    const projectContainer = document.createElement("div");
    projectContainer.id = "project-container";
    
    projectContainer.append(addItemButton, taskGrid);
    projectBody.append(projectContainer);
    contentContainer.append(projectHeader, projectBody);
    
    return contentContainer;
}

export const loadContent = loadContainer;