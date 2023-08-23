import _ from 'lodash';
import './styles.css';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import favicon from '/src/assets/images/logo.png?v=2';

function setFavicons(favImg) {
  let headTitle = document.querySelector('head');
  let setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel', 'shortcut icon');
  setFavicon.setAttribute('href', favImg);
  headTitle.appendChild(setFavicon);
}
setFavicons(favicon);

const body = document.body;
const mainContainer = new MainContainer();
const footer = new Footer();

const render = () => {
  body.append(mainContainer.render(), footer.render());
};
render();
