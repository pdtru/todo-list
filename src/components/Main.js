import MainTitle from './MainTitle';
import NewTaskInput from './NewTaskInput';
import Tasks from './Tasks';

class Main {
  mainTitle = new MainTitle();
  newTaskInput = new NewTaskInput();
  tasks = new Tasks();

  render = () => {
    const container = document.createElement('div');
    container.className = 'main';
    container.append(
      this.mainTitle.render(),
      this.newTaskInput.render(),
      this.tasks.render()
    );
    return container;
  };
}

export default Main;
