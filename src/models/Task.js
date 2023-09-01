class Task {
  id;
  name;
  description;
  dueDate;
  priority;
  completed;

  constructor(
    name,
    description = '',
    dueDate = '',
    priority = '',
    id = Date.now().toString(),
    completed = false
  ) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = id;
    this.completed = completed;
  }

  toggleComplete = () => {
    this.completed = !this.completed;
  };
}

export default Task;
