import ProjectHeader from './ProjectHeader';
import ProjectListItem from './ProjectListItem';
import AppState from '../stores/AppState';
import NewProjectInput from './NewProjectInput';

class Projects {
  projectHeader = new ProjectHeader();
  newProjectInput = new NewProjectInput();

  render = () => {
    const container = document.createElement('div');
    container.className = 'projects';
    container.append(this.projectHeader.render());

    for (const project of AppState.projects.projects.values()) {
      const projectListItem = new ProjectListItem(project);
      container.append(projectListItem.render());
    }
    container.append(this.newProjectInput.render());
    return container;
  };
}

export default Projects;
