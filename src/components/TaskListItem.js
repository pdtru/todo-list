import AppState from '../stores/AppState';

class TaskListItem {
  constructor(task) {
    this.task = task;
  }

  render = () => {
    const container = document.createElement('div');
    container.className = 'task-list-item';

    const name = document.createElement('p');
    name.innerText = this.task.name;

    const deleteTaskButton = document.createElement('button');
    deleteTaskButton.className = 'delete-task-button';
    deleteTaskButton.innerText = '×';

    container.append(name, deleteTaskButton);
    container.addEventListener('click', this.taskOnClick);
    deleteTaskButton.onclick = this.buttonOnClick;

    return container;
  };

  taskOnClick = () => {
    AppState.currentTask = this.task;
    AppState.app.render();
  };

  buttonOnClick = () => {
    AppState.currentProject.deleteTask(this.task.id);
    AppState.app.render();
  };
}

export default TaskListItem;
