import ProjectTitle from './ProjectTitle';

class ProjectHeader {
  projectTitle = new ProjectTitle();

  render = () => {
    const container = document.createElement('div');
    container.className = 'project-header';
    container.append(this.projectTitle.render());

    return container;
  };
}

export default ProjectHeader;
