class Cache {
  storageAvailable = (type) => {
    let storage;
    try {
      storage = window[type];
      const x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  };

  saveProject = (project) => {
    if (this.storageAvailable('localStorage')) {
      localStorage.setItem(project.id, JSON.stringify(project));
    }
  };

  saveProjects = (projects) => {
    if (this.storageAvailable('localStorage')) {
      localStorage.setItem(
        'projects',
        JSON.stringify(Array.from(projects.keys()))
      );
    }
  };

  saveTasks = () => {};

  deleteProject = (projectId) => {
    if (this.storageAvailable('localStorage')) {
      localStorage.removeItem(projectId);
    }
  };

  getProjects = () => {
    const json = localStorage.getItem('projects');
    if (json) {
      const projectIds = JSON.parse(json);
      const projects = new Map();
      for (let i = 0; i < projectIds.length; i++) {
        const currentProjectJson = localStorage.getItem(projectIds[i]);
        const currentProject = JSON.parse(currentProjectJson);
        projects.set(currentProject.id, currentProject);
      }
      return projects;
    }
    return new Map();
  };
}

export default new Cache();
