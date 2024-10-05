import Task from './task.js';
import { projects } from './projects.js';
import { loadContent } from './loadContent.js';

function loadModal() {
    const addTaskModal = document.querySelector("#add-task-modal");
    const bg = document.querySelector("#task-modal-bg");
    
    bg.addEventListener('click', (e) => {
        if (e.target.id === 'add-task-modal') {
            addTaskModal.close();
        }
    });
    
    const close = document.querySelector("#close-task-modal");
    close.addEventListener("click", () => {
        addTaskModal.close();
    });

    const taskForm = document.querySelector("#add-task-form");
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        const task = new Task(...Object.values(formProps));

        let thisProject;
        const builtinNames = ["Today", "Week", "Month", "Completed", "All"];
        
        if (builtinNames.includes(task.projectName)) {
            thisProject = projects.getBuiltinProject(task.projectName);
        } else {
            thisProject = projects.getCustomProject(task.projectName);
        }

        thisProject.addTask(task);

        const content = document.querySelector("#content");
        content.replaceChildren();
        const contentContainer = loadContent(thisProject);
        content.appendChild(contentContainer); 

        addTaskModal.close();
    });
}

export const loadTaskModal = loadModal;