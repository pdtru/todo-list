class NewTaskButton {
  render = () => {
    const container = document.createElement('div');
    container.className = 'new-task-button';
    container.innerText = '+ Add New Task';

    return container;
  };
}

export default NewTaskButton;
