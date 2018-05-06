import Component from './Component';
import { bindAll, isEqualPaths, extractUrlParams } from '../utils';
import { AUTH_SERVICE } from '../api/login.service';

class Router extends Component {
    constructor(props) {
        super(props);

        const {
            routes,
            host
        } = this.props;

        this.state = {
            routes,
            currentRoute: null,
            currentComponent: null,
        };

        this.host = host;

        bindAll(this, 'handleUrlChange');

        window.addEventListener('hashchange', () =>
            this.handleUrlChange(this.path)
        );

        this.handleUrlChange(this.path);

    }

    get path() {
        return window.location.hash.slice(1);
    }

    handleUrlChange(path) {
        const {
            routes,
            currentRoute
        } = this.state;
        let auth = AUTH_SERVICE.isAuthorized();

        const nextRoute = routes.find(({
                href
            }) =>
            isEqualPaths(href, this.path),
        );

        if (nextRoute && nextRoute !== currentRoute) {

            if (nextRoute.onEnter) {
                nextRoute.onEnter(this.handleRedirect, auth);
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

    render() {
        const {
            activeComponent,
            currentRoute,
        } = this.state;

        return activeComponent.update({
            params: extractUrlParams(currentRoute.href, this.path),
        });
    }
}

export default Router;