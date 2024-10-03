class Project {
    constructor(projectName, svgPath) {
        this.name = projectName;
        this.iconPath = svgPath;
        this.tasks = []
    }

    addTask(task) {
        this.tasks.append(task);
    }
}

export default Project;