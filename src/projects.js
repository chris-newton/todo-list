import Project from './project.js';

// global variable
// holds all projects and manages adding/removing projects
// only user-defined (custom) projects can be added/removed
class Projects {
    constructor() {
        this.builtinProjects = [
            new Project("Today", '../assets/calendar-today-outline.svg'),
            new Project("Week", '../assets/calendar-week-outline.svg'),
            new Project("Month", '../assets/calendar-month-outline.svg'),
            new Project("Completed", '../assets/calendar-check-outline.svg'),
            new Project("All", '../assets/calendar-blank-multiple.svg')
        ]
        this.customProjects = [];
    }

    getBuiltinProject(projectName) {
        const proj = this.builtinProjects.find((p) => p.name === projectName);
        if (!proj) {
            throw "Projects.getBuiltinProject(): project not found";
        }
        return proj;
    }

    getCustomProject(projectName) {
        console.log(projectName)
        const proj = this.customProjects.find((p) => p.name === projectName);
        if (!proj) {
            throw "Projects.getCustomProject(): project not found";
        }
        return proj;
    }

    addCustomProject(project) {
        this.customProjects.push(project);
    }

    removeProject(project) {
        this.customProjects.pop(this.projects.indexOf(project));
    }
}

export let projects = new Projects();