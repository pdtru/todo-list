import NewProjectModal from '../components/NewProjectModal';
import Projects from '../models/Projects';

class AppState {
  app;
  projects = new Projects();
  newProjectModal = new NewProjectModal();
}

export default new AppState();
