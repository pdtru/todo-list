import Cache from '../controllers/Cache';
import AppState from '../stores/AppState';

class TaskListItem {
  constructor(task) {
    this.task = task;
  }

  render = () => {
    const container = document.createElement('div');
    container.className = 'task-list-item';

    const nameContainer = document.createElement('div');
    nameContainer.className = 'task-name-container';

    const checkBox = document.createElement('input');
    checkBox.className = 'task-checkbox';
    checkBox.type = 'checkbox';
    checkBox.checked = this.task.completed;
    checkBox.onclick = this.checkBoxOnClick;

    const name = document.createElement('p');
    name.className = 'task-name';
    name.onclick = this.checkBoxOnClick;
    name.innerText = this.task.name;

    if (this.task.completed) {
      name.classList.add('completed-task-name');
    }

    nameContainer.append(checkBox, name);

    const deleteTaskButton = document.createElement('button');
    deleteTaskButton.className = 'delete-task-button';
    deleteTaskButton.innerText = '×';

    container.append(nameContainer, deleteTaskButton);
    container.addEventListener('click', this.taskOnClick);
    deleteTaskButton.onclick = this.buttonOnClick;

    return container;
  };

  taskOnClick = () => {
    AppState.currentTask = this.task;
    AppState.app.render();
  };

  checkBoxOnClick = () => {
    this.task.toggleComplete();
    Cache.saveProject(AppState.currentProject);
    AppState.app.render();
  };

  buttonOnClick = () => {
    AppState.currentProject.deleteTask(this.task.id);
    Cache.deleteTask(this.task.id);
    Cache.saveProject(AppState.currentProject);
    AppState.app.render();
  };
}

export default TaskListItem;
