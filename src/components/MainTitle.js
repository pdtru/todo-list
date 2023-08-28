import AppState from '../stores/AppState';

class MainTitle {
  render = () => {
    const container = document.createElement('div');
    container.className = 'main-title';
    container.innerText = AppState.currentProject.name;

    return container;
  };
}

export default MainTitle;
