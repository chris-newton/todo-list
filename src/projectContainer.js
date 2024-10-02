// loads an empty project container of standard layout
function loadContainer(projectName, svgPath) {
    const nameIcon = document.createElement("img");
    nameIcon.src = svgPath;
    const name = document.createElement("h2");
    name.textContent = projectName;
    const title = document.createElement("div");
    title.append(nameIcon, name);

    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");
    projectContainer.appendChild(title);
    
    return projectContainer;
}

export const loadProjectContainer = loadContainer;