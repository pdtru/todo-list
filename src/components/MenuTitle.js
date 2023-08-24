class MenuTitle {
  render = () => {
    const container = document.createElement('div');
    container.className = 'menu-title';
    container.innerText = 'Todo.';

    return container;
  };
}

export default MenuTitle;
