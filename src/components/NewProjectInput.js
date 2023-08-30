import Project from '../models/Project';
import AppState from '../stores/AppState';

class NewProjectInput {
  input;

  render = () => {
    const container = document.createElement('div');
    container.className = 'new-project-input-container';

    const text = document.createElement('p');
    text.className = 'new-project-text';
    text.innerText = '+';

    this.input = document.createElement('input');
    this.input.className = 'new-project-input';
    this.input.placeholder = 'Add New Project';

    container.append(text, this.input);

    this.input.addEventListener('keypress', (event) => {
      console.log(event);
      if (event.key === 'Enter') {
        this.onSubmit();
      }
    });

    return container;
  };

  onSubmit() {
    const project = new Project(this.input.value);
    AppState.projects.insertProject(project.id, project);
    AppState.app.render();
  }
}

export default NewProjectInput;
