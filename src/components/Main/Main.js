import MainTitle from './MainTitle';

class Main {
  mainTitle = new MainTitle();
  render = () => {
    const container = document.createElement('div');
    container.className = 'main';
    container.append(this.mainTitle.render());
    return container;
  };
}

export default Main;
