import Cache from '../controllers/Cache';
import AppState from '../stores/AppState';

class ProjectListItem {
  constructor(project) {
    this.project = project;
  }

  render = () => {
    const container = document.createElement('div');
    container.className = 'project-list-item';

    const nameContainer = document.createElement('div');
    nameContainer.className = 'project-name-container';

    const name = document.createElement('p');
    name.innerText = this.project.name;
    nameContainer.append(name);

    const deleteProjectButtonContainer = document.createElement('div');
    deleteProjectButtonContainer.className = 'delete-project-button-container';

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.className = 'delete-project-button';
    deleteProjectButton.innerText = '×';

    deleteProjectButtonContainer.append(deleteProjectButton);

    if (
      AppState.currentProject &&
      this.project.id == AppState.currentProject.id
    ) {
      container.classList.add('current-project-list-item');
      deleteProjectButton.classList.add('current-delete-project-button');
    }

    container.append(nameContainer, deleteProjectButtonContainer);
    nameContainer.addEventListener('click', this.projectOnClick);
    deleteProjectButton.onclick = this.buttonOnClick;

    return container;
  };

  projectOnClick = () => {
    AppState.currentProject = this.project;
    AppState.app.render();
  };

  buttonOnClick = () => {
    AppState.projects.deleteProject(this.project.id);
    Cache.saveProjects(AppState.projects.projects);
    Cache.deleteProject(this.project);
    if (
      AppState.currentProject &&
      AppState.currentProject.id == this.project.id
    )
      AppState.currentProject = null;
    AppState.app.render();
  };
}

export default ProjectListItem;
