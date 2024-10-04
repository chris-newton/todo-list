function loadModal() {
    const addTaskModal = document.querySelector("#add-task-modal");
    const addTaskButton = document.querySelector("#add-item-button");
    const bg = document.querySelector("#task-modal-bg");
    
    addTaskButton.addEventListener("click", () => {
        addTaskModal.showModal();
    });

    bg.addEventListener('click', (e) => {
        if (e.target.id === 'add-task-modal') {
            addTaskModal.close();
        }
    });
    
    const close = document.querySelector("#close-task-modal");
    close.addEventListener("click", () => {
        addTaskModal.close();
    });
}

export const loadTaskModal = loadModal;