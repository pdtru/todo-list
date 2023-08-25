import Project from '../models/Project';
import AppState from '../stores/AppState';

class NewProjectModal {
  component;
  nameInput;
  submitButton;

  render = () => {
    const container = document.createElement('dialog');
    container.setAttribute('data-modal', true);
    this.nameInput = document.createElement('input');
    this.submitButton = document.createElement('button');
    this.submitButton.innerText = 'Add';
    container.append(this.nameInput, this.submitButton);
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
