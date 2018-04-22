import App from './components/App';
import NoAuth from './components/NoAuth';
import Login from './components/Login';
import PizzaCreate from './components/PizzaCreate';
import Signup from './components/Signup';
import UserInfo from './components/UserInfo';
//import { AUTH_SERVICE } from './store/login.service';


const routes = [
  {
    href: '/pizzas',
    component: NoAuth,
  },
  {
    href: '/createpizza',
    component: PizzaCreate,
  },
  {
    href: '',
    component: App,
    onEnter: ( handleRedirect, auth ) => {
        if (auth != true) {
            handleRedirect('/pizzas');
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
    href: '/signup',
    component: Signup,
  },
];

export default routes;
