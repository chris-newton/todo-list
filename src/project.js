class Project {
    constructor(projectName, svgPath) {
        this.name = projectName;
        this.iconPath = svgPath;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);

        console.log("once");
    }

    removeTask(task) {
        const idx = this.tasks.indexOf(task);
        this.tasks.splice(idx, 1);
    }
}

export default Project;