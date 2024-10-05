class Task {
    constructor(projectName, title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectName = projectName;
    }

    setPriority(priority) {
        this.priority = priority;
    }
}

export default Task;