class NewTaskInput {
  render = () => {
    const container = document.createElement('div');
    container.className = 'new-task-input-container';

    const text = document.createElement('p');
    text.className = 'new-task-text';
    text.innerText = '+';

    const input = document.createElement('input');
    input.className = 'new-task-input';
    input.placeholder = 'Add New Task';

    container.append(text, input);

    return container;
  };
}

export default NewTaskInput;
