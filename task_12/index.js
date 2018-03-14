import App from './src/components/App';
import Router from './src/Facepalm/Router';
import routes from './src/routes';

const router = new Router({ host: document.getElementById('root'), routes })
//const app = new App({ host: document.getElementById('root') });
//app.update();
