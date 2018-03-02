import App from './App';
import { parallax } from './utils/parallax';

window.onload = parallax();
let app = new App(document.getElementById('header'));
app.render();
