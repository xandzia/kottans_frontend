import App from './components/App';
import Login from './components/Login';
import Singup from './components/Singup';
import UserInfo from './components/UserInfo';
import { authGuard } from './authGuard';

const routes = [
  {
    href: '',
    redirectTo: '/user',
  },
  {
    href: '/user',
    component: UserInfo,
    onEnter: authGuard,
  },
//  {
//    href: '/user/:id',
//    component: App,
//    onEnter: ( handleRedirect, { userName } ) => {
//        if (userName != 'anna') {
//            handleRedirect('login');
//            return false;
//        } else 
////            handleRedirect('');
//            return;
////        console.log(arguments)
//    },
//  },
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
