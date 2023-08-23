import MenuTitle from './MenuTitle';

class Menu {
  menuTitle = new MenuTitle();

  render = () => {
    const container = document.createElement('div');
    container.className = 'menu';
    container.append(this.menuTitle.render());

    return container;
  };
}

export default Menu;
