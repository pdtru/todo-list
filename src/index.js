import _ from 'lodash';
import './styles.css';
import Footer from './components/Footer';

const body = document.body;
const footer = new Footer();

const render = () => {
  body.append(footer.render());
};
render();
