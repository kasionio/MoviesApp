import dataStore from './data/dataStore';
import renderApp from './framework/render';
import filter from './data/movieData';
import getListOfGenres from './data/movieDbAPI';
import App from './components/App';

if (module.hot) {
  module.hot.accept();
}

window.dataStore = dataStore;

window.renderApp = renderApp;
window.filter = filter;

getListOfGenres().then(() => renderApp(App, document.getElementById('app-root')));
