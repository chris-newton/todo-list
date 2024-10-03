function loadModal() {
    const addProjectModal = document.querySelector("#add-project-modal");
    const closeButton = document.querySelector("#close-project-modal");
    const modalBg = document.querySelector(".modal-bg");

    const addProjectButton = document.querySelector("#add-project");
    addProjectButton.addEventListener("click", () => {
        addProjectModal.showModal();
    });

    modalBg.addEventListener('click', (e) => {
        if (e.target.id === 'add-project-modal') {
            addProjectModal.close();
        }
    });

    closeButton.addEventListener('click', (e) => {
        addProjectModal.close();
    });

    const addProjectForm = document.querySelector("#add-project-form");
    addProjectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // get book form data
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        const name = formProps["project-name"];
        const project = document.createElement("div");
        const title = document.createElement("h1");
        
        title.textContent = name; 
        project.appendChild(title);

        const customProjectsList = document.querySelector("#custom-projects");
        customProjectsList.appendChild(project);
        addProjectModal.close();
    });
}

export const loadProjectModal = loadModal;