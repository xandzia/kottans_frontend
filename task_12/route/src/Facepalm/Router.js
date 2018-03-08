import Component from './Component';
import { bindAll, isEqualPaths, extractUrlParams } from '../utils';

class Router extends Component {
  constructor(props) {
    super(props);
      
      const { routes, host } = this.props;

      this.state = {
          routes,
          currentRoute: null,
          currentComponent: null,
          userName: null,
          password: null,
      };
      
    this.host = host;
      
      console.log('props-Router', props);

    window.addEventListener('hashchange', () =>
      this.handleUrlChange(this.path)
    );

    this.handleUrlChange(this.path);
      
    bindAll(this, 'handleUrlChange', 'handleRedirect');
  }

  get path() {
    return window.location.hash.slice(1);
  }

  handleUrlChange(path) {
    const { routes, currentRoute } = this.state;
      
    let nextRoute = routes.find(({ href }) =>
        isEqualPaths(href, this.path),
//            href === this.path
    );
            
      if(nextRoute && nextRoute !== currentRoute) {
          if (nextRoute.onEnter) {
             return this.handleOnEnter(nextRoute);
          }
          if (!!nextRoute.redirectTo) {
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

//  handleOnEnter(userName) {
//      this.updateState({ userName });
//  }
    
  render() {
      const { activeComponent, currentRoute } = this.state;
      
    return activeComponent.update({
        params: extractUrlParams(currentRoute.href, this.path),
//        userName: this.handleOnEnter,
    });
  }
}

export default Router;