import ProjectHeader from './ProjectHeader';

class Projects {
  projectHeader = new ProjectHeader();

  render = () => {
    const container = document.createElement('div');
    container.className = 'projects';
    container.append(this.projectHeader.render());

    return container;
  };
}

export default Projects;
