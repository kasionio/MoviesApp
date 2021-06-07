import dataStore from './data/dataStore';
import renderApp from './framework/render';
import getListOfGenres from './data/movieDbAPI';
import App from './components/App';

//if (module.hot) {
//  module.hot.accept();
//}

window.dataStore = dataStore;

getListOfGenres().then(() => renderApp(App, document.getElementById('app-root')));
