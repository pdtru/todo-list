class Project {
  name;
  id = Date.now();
  tasks = new Map();

  constructor(name) {
    this.name = name;
  }

  deleteTask = (id) => {
    this.tasks.delete(id);
  };

  insertTask = (id, task) => {
    this.tasks.set(id, task);
  };
}

export default Project;
