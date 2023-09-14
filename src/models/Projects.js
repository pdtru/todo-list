import Cache from '../controllers/Cache';

class Projects {
  projects = new Map();

  initialize = () => {
    this.projects = Cache.getProjects();
  };

  deleteProject = (id) => {
    this.projects.delete(id);
  };

  insertProject = (id, project) => {
    this.projects.set(id, project);
  };
}

export default Projects;
