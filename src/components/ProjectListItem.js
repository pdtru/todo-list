import AppState from '../stores/AppState';

class ProjectListItem {
  constructor(project) {
    this.project = project;
  }

  render = () => {
    const container = document.createElement('div');
    container.className = 'project-list-item';

    const name = document.createElement('p');
    name.innerText = this.project.name;

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.className = 'delete-project-button';
    deleteProjectButton.innerText = '×';

    if (this.project.id == AppState.currentProject.id) {
      container.classList.add('current-project-list-item');
      deleteProjectButton.classList.add('current-delete-project-button');
    }

    container.append(name, deleteProjectButton);
    container.addEventListener('click', this.projectOnClick);
    deleteProjectButton.addEventListener('click', this.buttonOnCLick);

    return container;
  };

  projectOnClick = () => {
    AppState.currentProject = this.project;
    AppState.app.render();
  };

  buttonOnCLick = () => {
    AppState.projects.deleteProject(this.project.id);
    this.project.name = '';
    AppState.app.render();
  };
}

export default ProjectListItem;
