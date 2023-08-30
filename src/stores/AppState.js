import App from '../components/App';
import Projects from '../models/Projects';

class AppState {
  constructor() {
    this.app = new App();
    this.currentProject;
    this.projects = new Projects();
    this.currentTask;
  }
}

export default new AppState();
