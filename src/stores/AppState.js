import App from '../components/App';
import NewProjectModal from '../components/NewProjectModal';
import Projects from '../models/Projects';

class AppState {
  constructor() {
    this.app = new App();
    this.newProjectModal = new NewProjectModal();
    this.currentProject;
    this.projects = new Projects();
  }
}

export default new AppState();
