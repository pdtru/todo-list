import MainTitle from './MainTitle';
import NewTaskButton from './NewTaskButton';

class Main {
  mainTitle = new MainTitle();
  newTaskButton = new NewTaskButton();
  render = () => {
    const container = document.createElement('div');
    container.className = 'main';
    container.append(this.mainTitle.render(), this.newTaskButton.render());
    return container;
  };
}

export default Main;
