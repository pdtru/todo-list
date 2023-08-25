import AppState from '../stores/AppState';
import MainContainer from './MainContainer';
import Footer from './Footer';

class App {
  body = document.body;
  mainContainer = new MainContainer();
  footer = new Footer();

  render = () => {
    this.body.innerHTML = '';
    this.body.append(
      this.mainContainer.render(),
      AppState.newProjectModal.render(),
      this.footer.render()
    );
  };
}

export default App;
