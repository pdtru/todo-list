class ProjectTitle {
  render = () => {
    const container = document.createElement('div');
    container.className = 'project-title';
    container.innerText = 'PROJECTS';

    return container;
  };
}

export default ProjectTitle;
