import MainTitle from './MainTitle';
import NewTaskInput from './NewTaskInput';

class Main {
  mainTitle = new MainTitle();
  newTaskInput = new NewTaskInput();
  render = () => {
    const container = document.createElement('div');
    container.className = 'main';
    container.append(this.mainTitle.render(), this.newTaskInput.render());
    return container;
  };
}

export default Main;
