class Task {
  id = Date.now();
  name;
  description;
  dueDate;
  priority;
  completed = false;

  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  toggleComplete = () => {
    this.completed = !this.completed;
  };
}

export default Task;
