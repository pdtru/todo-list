import AppState from '../stores/AppState';
import TaskListItem from './TaskListItem';

class Tasks {
  render = () => {
    const container = document.createElement('div');
    container.className = 'tasks';

    for (const task of AppState.currentProject.tasks.values()) {
      const taskListItem = new TaskListItem(task);
      container.append(taskListItem.render());
    }
    return container;
  };
}

export default Tasks;
