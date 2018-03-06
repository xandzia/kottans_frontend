import Component from './Component';
import { bindAll } from '../utils';

//import { isUrlParam, isEqualPaths, extractUrlParams } from '../utils';

//const ANY_PATH = '*';

class Router extends Component {
  constructor(props) {
    super(props);
      
      const { routes, host } = this.props;

    this.state = {
      routes,
      currentRoute: null,
      currentComponent: null,
    };
      
    this.host = host;
      
      console.log(props);
//    this.host = document.createElement('div');

    window.addEventListener('hashchange', () =>
      this.handleUrlChange(this.path)
    );

    this.handleUrlChange(this.path);
      
    bindAll(this, 'handleUrlChange');
  }

  get path() {
    return window.location.hash.slice(1);
  }

  handleUrlChange(path) {
    const { routes, currentRoute } = this.state;
    let nextRoute = routes.find(({ href }) =>
            href === this.path
//        isEqualPaths(href, url)
    );
      
      console.log('nextRoute', nextRoute);
      
      if(nextRoute) {
          this.updateState({
              activeComponent: new nextRoute.component(),
              currentRoute: nextRoute,
          })
      }
//    if (!nextRoute) {
//      nextRoute = routes.find(({ href }) => href === ANY_PATH); //looking for any route
//    }

//    if (nextRoute && activeRoute !== nextRoute) {
//      if (!!nextRoute.redirectTo) {
//        return this.handleRedirect(nextRoute.redirectTo);
//      }

//      if (!!nextRoute.onEnter) {
//        return this.handleOnEnter(nextRoute, url);
//      }
//
//      this.applyRoute(nextRoute, url);
//    }
  }

//  handleRedirect(url) {
//    window.location.hash = url;
//  }
//
//  handleOnEnter(nextRoute, url) {
//    const { href } = nextRoute;
//    const params = extractUrlParams(href, url);
//
//    nextRoute.onEnter(params, this.handleRedirect, nextRoute);
//  }
//
//  applyRoute(route, url) {
//    const { href, component: Component } = route;
//    const { activeComponent } = this.state;
//
//    const componentInstance = new Component({
//      params: extractUrlParams(href, this.path),
//      replace: this.handleRedirect,
//    });
//
//    if (activeComponent) {
//      activeComponent.unmount();
//    }
//
//    this.updateState({
//      activeRoute: route,
//      activeComponent: componentInstance,
//    });
//  }
//
  render() {
    return this.state.activeComponent.update();
  }
}

export default Router;