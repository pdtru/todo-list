import AppState from '../stores/AppState';
import Project from './Project';

class Projects {
  projects = new Map();

  initialize = () => {
    const currentProject = new Project('Today');
    this.projects.set(currentProject.id, currentProject);
    AppState.currentProject = currentProject;
  };

  deleteProject = (id) => {
    this.projects.delete(id);
  };

  insertProject = (id, project) => {
    this.projects.set(id, project);
  };
}

export default Projects;
