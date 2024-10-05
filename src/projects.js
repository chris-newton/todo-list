import Project from './project.js';

import todaySVG from '../assets/calendar-today-outline.svg';
import weekSVG from '../assets/calendar-week-outline.svg';
import monthSVG from '../assets/calendar-month-outline.svg';
import completedSVG from '../assets/calendar-check-outline.svg';
import allSVG from '../assets/calendar-blank-multiple.svg';

// global variable
// holds all projects and manages adding/removing projects
// only user-defined (custom) projects can be added/removed
class Projects {
    constructor() {
        this.builtinProjects = [
            new Project("Today", todaySVG),
            new Project("Week", weekSVG),
            new Project("Month", monthSVG),
            new Project("Completed", completedSVG),
            new Project("All", allSVG)
        ]
        this.builtinNames = ["Today", "Week", "Month", "Completed", "All"];
        this.customProjects = [];
    }

    // returns the project matching projectName
    getProject(projectName) {
        if (this.builtinNames.includes(projectName)) {
            return this.getBuiltinProject(projectName);
        } else {
            return this.getCustomProject(projectName);
        }
    }

    getBuiltinProject(projectName) {
        const proj = this.builtinProjects.find((p) => p.name === projectName);
        if (!proj) {
            throw "Projects.getBuiltinProject(): project not found";
        }
        return proj;
    }

    getCustomProject(projectName) {
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