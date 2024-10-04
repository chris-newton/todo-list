function loadHeader(project) {
    const projectHeader = document.createElement("div");
    projectHeader.id = "project-header";
    const nameIcon = document.createElement("img");
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
   
    const taskGrid = document.createElement("div");
    taskGrid.id = "project-grid";
    const dummyTask1 = document.createElement("div");
    dummyTask1.textContent = "dummy task 1        description          due date";
    const dummyTask2 = document.createElement("div");
    dummyTask2.textContent = "dummy task 2        description          due date";
    taskGrid.append(dummyTask1, dummyTask2);
    
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

export const loadProject = load;