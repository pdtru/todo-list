class Task {
  id;
  name;
  description;
  dueDate;
  priority;
  completed = false;

  constructor(
    name,
    description = '',
    dueDate = '',
    priority = '',
    id = Date.now().toString()
  ) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = id;
  }

  toggleComplete = () => {
    this.completed = !this.completed;
  };
}

export default Task;
