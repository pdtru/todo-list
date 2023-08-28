import Project from '../models/Project';
import AppState from '../stores/AppState';

class NewProjectModal {
  component;
  nameInput;
  submitButton;

  render = () => {
    const container = document.createElement('dialog');
    container.className = 'new-project-modal';
    const inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';

    this.nameInput = document.createElement('input');
    this.nameInput.className = 'new-project-input';
    this.nameInput.placeholder = '+ New Project';

    this.submitButton = document.createElement('button');
    this.submitButton.innerText = 'Add';

    inputContainer.append(this.nameInput, this.submitButton);
    container.append(inputContainer);

    this.component = container;
    this.component.addEventListener('click', (e) => {
      const dialogDimensions = this.component.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        this.component.close();
      }
    });

    this.nameInput.addEventListener('keypress', (event) => {
      console.log(event);
      if (event.key === 'Enter') {
        this.onSubmit();
      }
    });
    this.submitButton.addEventListener('click', this.onSubmit);

    return container;
  };

  onSubmit = () => {
    const project = new Project(this.nameInput.value);
    AppState.projects.insertProject(project.id, project);
    AppState.app.render();
  };
}

export default NewProjectModal;
