//import App from './src/components/App';
import Login from './components/Login';
import Singup from './components/Singup';

const routes = [
  {
    href: '/',
    component: Singup,
  },
  {
    href: '/login',
    component: Login,
  },
];

export default routes;
