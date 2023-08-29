class NewProjectInput {
  render = () => {
    const container = document.createElement('div');
    container.className = 'new-project-input-container';

    const text = document.createElement('p');
    text.className = 'new-project-text';
    text.innerText = '+';

    const input = document.createElement('input');
    input.className = 'new-project-input';
    input.placeholder = 'Add New Task';

    container.append(text, input);

    return container;
  };
}
