import NewProjectButton from './NewProjectButton';
import ProjectTitle from './ProjectTitle';

class ProjectHeader {
  projectTitle = new ProjectTitle();
  addProjectButton = new NewProjectButton();

  render = () => {
    const container = document.createElement('div');
    container.className = 'project-header';
    container.append(
      this.projectTitle.render(),
      this.addProjectButton.render()
    );

    return container;
  };
}

export default ProjectHeader;
