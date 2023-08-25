class Projects {
  projects = new Map();

  deleteProject = (id) => {
    this.projects.delete(id);
  };

  insertProject = (id, project) => {
    this.projects.set(id, project);
  };
}

export default Projects;
