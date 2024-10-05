import { addTab } from './util.js';
import Project from './project.js';

import todaySVG from '../assets/calendar-today-outline.svg';

function loadModal(projects) {
    const addProjectModal = document.querySelector("#add-project-modal");
    const closeButton = document.querySelector("#close-project-modal");
    const bg = document.querySelector("#project-modal-bg");
    const addProjectButton = document.querySelector("#add-project");
    
    addProjectButton.addEventListener("click", () => {
        addProjectModal.showModal();
    });

    bg.addEventListener('click', (e) => {
        if (e.target.id === 'add-project-modal') {
            addProjectModal.close();
        }
    });

    closeButton.addEventListener('click', (e) => {
        addProjectModal.close();
    });

    // submitting the form triggers creation of a new custom project
    // and a new content pane to be rendered
    const addProjectForm = document.querySelector("#add-project-form");
    addProjectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // get book form data
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        const name = formProps["project-name"];
       
        const project = new Project(name, todaySVG);
        projects.addCustomProject(project); // add to projects array
        addTab(project); // add button to sidebar
        // add new project choice to task modal 
        const projectOption = document.createElement("option");
        projectOption.value = project.name;
        projectOption.textContent = project.name;
        const projectsList = document.querySelector("#projects-list");
        projectsList.appendChild(projectOption); 
        addProjectModal.close();
    });
}

export const loadProjectModal = loadModal;