import ProjectHeader from './ProjectHeader';
import ProjectListItem from './ProjectListItem';
import AppState from '../stores/AppState';

class Projects {
  projectHeader = new ProjectHeader();

  render = () => {
    const container = document.createElement('div');
    container.className = 'projects';
    container.append(this.projectHeader.render());

    for (const project of AppState.projects.projects.values()) {
      const projectListItem = new ProjectListItem(project);
      container.append(projectListItem.render());
    }
    return container;
  };
}

export default Projects;
