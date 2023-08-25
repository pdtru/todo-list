class Task {
  id = Date.now();
  title;
  description;
  dueDate;
  priority;
  completed = false;

  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  toggleComplete = () => {
    this.completed = !this.completed;
  };
}

export default Task;
