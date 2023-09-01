import Project from '../models/Project';
import Task from '../models/Task';

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

  /**
   * @param {Map<string, Project>} projects
   */
  saveProjects = (projects) => {
    if (this.storageAvailable('localStorage')) {
      localStorage.setItem(
        'projects',
        JSON.stringify(Array.from(projects.keys()))
      );

      projects.forEach((project) => this.saveProject(project));
    }
  };

  /**
   *
   * @param {Project} project
   */
  saveProject = (project) => {
    if (this.storageAvailable('localStorage')) {
      const projectJSON = {
        ...project,
        tasks: Array.from(project.tasks.keys()),
      };

      this.saveTasks(project.tasks);

      localStorage.setItem(project.id, JSON.stringify(projectJSON));
    }
  };

  /**
   *
   * @param {Map<string, Task>} tasks

   */
  saveTasks = (tasks) => {
    tasks.forEach((task) => this.saveTask(task));
  };

  /**
   *
   * @param {Task} task
   */
  saveTask = (task) => {
    if (this.storageAvailable('localStorage')) {
      localStorage.setItem(task.id, JSON.stringify(task));
    }
  };

  /**
   *
   * @returns {Map<string, Project>}
   */
  getProjects = () => {
    const json = localStorage.getItem('projects');
    if (json) {
      const projectIds = JSON.parse(json);

      const projects = new Map();

      for (let i = 0; i < projectIds.length; i++) {
        const project = this.getProject(projectIds[i]);
        projects.set(project.id, project);
      }

      return projects;
    }

    return new Map();
  };

  /**
   *
   * @param {string} id
   * @return {Project}
   */
  getProject = (id) => {
    const json = localStorage.getItem(id);
    const projectTemp = JSON.parse(json);

    const project = new Project(projectTemp.name, projectTemp.id);
    project.tasks = this.getTasks(projectTemp.tasks);
    return project;
  };

  /**
   *
   * @param {Project} project
   */
  deleteProject = (project) => {
    if (this.storageAvailable('localStorage')) {
      localStorage.removeItem(project.id);
      this.deleteTasks(Array.from(project.tasks.keys()));
    }
  };

  /**
   *
   * @param {string[]} tasks
   */
  deleteTasks = (tasks) => {
    tasks.forEach((task) => this.deleteTask(task));
  };

  /**
   *
   * @param {string} id
   */
  deleteTask = (id) => {
    localStorage.removeItem(id);
  };

  /**
   *
   * @param {string[]} tasks
   * @returns {Map<string, Task>}
   */
  getTasks = (tasks) => {
    const taskMap = new Map();

    for (let i = 0; i < tasks.length; i++) {
      const task = this.getTask(tasks[i]);
      console.log(task);
      taskMap.set(task.id, task);
    }

    return taskMap;
  };

  /**
   *
   * @param {string} id
   * @returns {Task}
   */
  getTask = (id) => {
    const json = localStorage.getItem(id);
    const taskTemp = JSON.parse(json);
    const task = new Task(
      taskTemp.name,
      taskTemp.description,
      taskTemp.dueDate,
      taskTemp.priority,
      taskTemp.id
    );
    return task;
  };
}

export default new Cache();
