import Project from './project.js';

class Projects {
    constructor() {
        this.builtinProjects = [
            new Project("Today", '../assets/calendar-today-outline.svg'),
            new Project("Week", '../assets/calendar-week-outline.svg'),
            new Project("Month", '../assets/calendar-month-outline.svg'),
            new Project("Completed", '../assets/calendar-check-outline.svg'),
            new Project("All", '../assets/calendar-blank-multiple.svg')
        ]
        this.customProjects = []
    }

    getBuiltinProject(idx) {
        if (idx < 0 || idx >= this.builtinProjects.length) {
            throw "index for builtinProjects out of range";
        }
        return this.builtinProjects[idx];
    }

    getCustomProject(idx) {
        if (idx < 0 || idx >= this.customProjects.length) {
            throw "index for customProjects out of range";
        }
        return this.customProjects[idx];
    }

    addProject(project) {
        this.customProjects.push(project);
    }

    removeProject(project) {
        this.customProjects.pop(this.projects.indexOf(project));
    }
}

export default Projects;