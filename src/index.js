import _ from 'lodash';
import './styles.css';
import favicon from '/src/assets/images/logo.png?v=2';
import AppState from './stores/AppState';

function setFavicons(favImg) {
  let headTitle = document.querySelector('head');
  let setFavicon = document.createElement('link');
  setFavicon.setAttribute('rel', 'shortcut icon');
  setFavicon.setAttribute('href', favImg);
  headTitle.appendChild(setFavicon);
}
setFavicons(favicon);

AppState.projects.initialize();
AppState.app.render();
