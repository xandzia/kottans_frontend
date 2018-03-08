import App from './components/App';
import Login from './components/Login';
import Singup from './components/Singup';

const routes = [
  {
    href: '',
    component: App,
    redirectTo: 'login',
//    onEnter: (handleRedirect) => {
//        if (true) {
//            handleRedirect('/login');
//        }
////        return false;
//        console.log(arguments)
//    },
  },
  {
    href: 'user/:id',
    component: App,
//    onEnter: ( handleRedirect, { userName } ) => {
//        if (userName === 'a') {
//            handleRedirect('user/:id');
//        }
//        return false;
////        console.log(arguments)
//    },
  },
  {
    href: 'login',
    component: Login,
  },
  {
    href: 'singup',
    component: Singup,
  },
];

export default routes;
