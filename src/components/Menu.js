import MenuTitle from './MenuTitle';
import Projects from './Projects';

class Menu {
  menuTitle = new MenuTitle();
  projects = new Projects();

  render = () => {
    const container = document.createElement('div');
    container.className = 'menu';
    container.append(this.menuTitle.render(), this.projects.render());

    return container;
  };
}

export default Menu;
