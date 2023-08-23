import Main from './Main/Main';
import Menu from './Menu/Menu';

class MainContainer {
  menu = new Menu();
  main = new Main();

  render = () => {
    const container = document.createElement('div');
    container.className = 'main-container';
    container.append(this.menu.render(), this.main.render());

    return container;
  };
}

export default MainContainer;
