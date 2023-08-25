import AppState from '../stores/AppState';

class NewProjectButton {
  render = () => {
    const container = document.createElement('button');
    container.className = 'new-project-button';
    container.innerText = '+ New Project';
    container.addEventListener('click', this.onClick);
    return container;
  };

  onClick = () => {
    AppState.newProjectModal.component.showModal();
  };
}

export default NewProjectButton;
