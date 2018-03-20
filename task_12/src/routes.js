import App from './components/App';
import Login from './components/Login';
import Singup from './components/Singup';
import UserInfo from './components/UserInfo';
//import { AUTH_SERVICE } from './store/login.service';


const routes = [
  {
    href: '',
    component: App,
    onEnter: ( handleRedirect, auth ) => {
        if (auth != true) {
            handleRedirect('/login');
            return;
        } else 
            return false;
    },
  },
  {
    href: '/user',
    component: UserInfo,
    onEnter: ( handleRedirect, auth ) => {
        if (auth != true) {
            handleRedirect('/login');
            return;
        } else 
//        console.log(arguments)
            return false;
    },
  },
  {
    href: '/login',
    component: Login,
  },
  {
    href: '/singup',
    component: Singup,
  },
];

export default routes;
