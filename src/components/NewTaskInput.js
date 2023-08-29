import Task from '../models/Task';
import AppState from '../stores/AppState';

class NewTaskInput {
  input;

  render = () => {
    const container = document.createElement('div');
    container.className = 'new-task-input-container';

    const text = document.createElement('p');
    text.className = 'new-task-text';
    text.innerText = '+';

    this.input = document.createElement('input');
    this.input.className = 'new-task-input';
    this.input.placeholder = 'Add New Task';

    container.append(text, this.input);

    this.input.addEventListener('keypress', (event) => {
      console.log(event);
      if (event.key === 'Enter') {
        this.onSubmit();
      }
    });

    return container;
  };

  onSubmit = () => {
    const task = new Task(this.input.value);
    AppState.currentProject.insertTask(task.id, task);
    AppState.app.render();
  };
}

export default NewTaskInput;
