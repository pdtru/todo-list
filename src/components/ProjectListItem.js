class ProjectListItem {
  constructor(project) {
    this.project = project;
  }

  render = () => {
    const container = document.createElement('div');
    const name = document.createElement('p');
    name.innerText = this.project.name;
    container.append(name);

    return container;
  };
}

export default ProjectListItem;
