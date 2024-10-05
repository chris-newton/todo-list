function createRow(task) {
    const taskRow = document.createElement("div");
    taskRow.classList.add("task-row");

    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.classList.add("task-row-checkbox");
    const checkBoxIcon = document.createElement("img");
    checkBoxIcon.src = "../assets/checkbox-blank-outline.svg";
    checkBox.appendChild(checkBoxIcon);
    
    const details = document.createElement("div");
    details.classList.add("task-row-details");
    const title = document.createElement("h4");
    title.textContent = task.title;
    const description = document.createElement("p");
    description.textContent = task.description;
    details.append(title, description);
    
    const meta = document.createElement("div");
    meta.classList.add("task-row-meta");
    const dueDate = document.createElement("span");
    dueDate.textContent = task.dueDate;
    const priority = document.createElement("span");
    priority.textContent = task.priority;
    const project = document.createElement("span");
    project.textContent = task.project;

    const removeButton = document.createElement("button");
    const removeSvg = document.createElement("img");
    removeSvg.src = "../assets/delete.svg"; 
    removeButton.appendChild(removeSvg);
    removeButton.addEventListener("click", () => {}); // TODO: rmeove button functionality
    
    const editButton = document.createElement("button");
    const editSvg = document.createElement("img");
    editSvg.src = "../assets/pencil.svg"; 
    editButton.appendChild(editSvg);
    editButton.addEventListener("click", () => {}); // TODO: rmeove button functionality
    
    meta.append(priority, dueDate, project);

    taskRow.append(checkBox, details, meta);
    return taskRow;
}

export const createTaskRow = createRow;