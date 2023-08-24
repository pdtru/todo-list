import Main from './Main';
import Menu from './Menu';

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
