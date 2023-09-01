class Project {
  name;
  id;
  tasks = new Map();

  constructor(name, id = Date.now().toString()) {
    this.name = name;
    this.id = id;
  }

  deleteTask = (id) => {
    this.tasks.delete(id);
  };

  insertTask = (id, task) => {
    this.tasks.set(id, task);
  };
}

export default Project;
