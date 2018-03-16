import Component from './Component';
import { bindAll, isEqualPaths, extractUrlParams } from '../utils';
import { AUTH_SERVICE } from '../auth/login.service';

class Router extends Component {
  constructor(props) {
    super(props);
      
      const { routes, host } = this.props;

      this.state = {
          routes,
          currentRoute: null,
          currentComponent: null,
          access: null,
      };
      
    this.host = host;
      
    bindAll(this, 'handleUrlChange');
//    bindAll(this, 'handleLogin');

    window.addEventListener('hashchange', () =>
      this.handleUrlChange(this.path)
    );

    this.handleUrlChange(this.path);
      
  }

  get path() {
    return window.location.hash.slice(1);
  }

  handleUrlChange(path) {
    const { routes, currentRoute } = this.state;
    let a = AUTH_SERVICE.isAuthorized();
      
    const nextRoute = routes.find(({ href }) =>
        isEqualPaths(href, this.path),
//            href === this.path
    );
            
      if(nextRoute && nextRoute !== currentRoute) {
          
          if (nextRoute.onEnter) {
             nextRoute.onEnter(this.handleRedirect, a);
          }
          if (nextRoute.redirectTo) {
            return this.handleRedirect(nextRoute.redirectTo);
          }
          
          this.updateState({
              activeComponent: new nextRoute.component(),
              currentRoute: nextRoute,
          })
      }
  }

  handleRedirect(url) {
    window.location.hash = url;
  }
    
//  handleLogin(success) {
//    this.updateState({ success });
//      this.state.access = success;
//  }
    
  render() {
    const { activeComponent, currentRoute, access } = this.state;
      
    return activeComponent.update({
        params: extractUrlParams(currentRoute.href, this.path),
//        user: this.handleLogin,
//        access: access,
    });
  }
}

export default Router;

