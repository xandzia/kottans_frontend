import App from './components/App';
import Login from './components/Login';
import Singup from './components/Singup';
import UserInfo from './components/UserInfo';
//import { authGuard } from './authGuard';

const routes = [
  {
    href: '',
    redirectTo: '/user',
  },
  {
    href: '/user',
    component: UserInfo,
//    onEnter: authGuard,
    onEnter: ( handleRedirect, { success } ) => {
        if (success != true) {
            handleRedirect('/login');
            return;
        } else 
        console.log(arguments)
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
