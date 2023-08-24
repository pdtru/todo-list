class AddProjectButton {
  render = () => {
    const container = document.createElement('button');
    container.className = 'add-project-button';
    container.innerText = '+ New Project';

    return container;
  };
}

export default AddProjectButton;
