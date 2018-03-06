// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({12:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
    function Component(props) {
        _classCallCheck(this, Component);

        this.props = props || {};
        this.state = {};

        this.host = null;
    }

    _createClass(Component, [{
        key: 'updateState',
        value: function updateState(nextState) {
            this.state = Object.assign({}, this.state, nextState);
            this._render();
        }
    }, {
        key: 'update',
        value: function update(nextProps) {
            this.props = Object.assign({}, this.props, nextProps);
            return this._render();
        }
    }, {
        key: '_render',
        value: function _render() {
            var children = this.render();

            this.host.innerHTML = '';

            if (typeof children === 'string') {
                this.host.innerHTML = children;
            } else if (Array.isArray(children)) {
                var _host;

                (_host = this.host).append.apply(_host, _toConsumableArray(children));
            } else {
                this.host.append(children);
            }

            return this.host;
        }
    }, {
        key: 'render',
        value: function render() {}
    }]);

    return Component;
}();

exports.default = Component;
},{}],15:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bindAll = exports.bindAll = function bindAll(context) {
  for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    names[_key - 1] = arguments[_key];
  }

  names.forEach(function (name) {
    if (typeof context[name] === 'function') {
      context[name] = context[name].bind(context);
    } else {
      throw Error('Expected function ' + name + '. Instead received: ' + _typeof(context[name]));
    }
  });
};

var toHtml = exports.toHtml = function toHtml(string) {
  var template = document.createElement('template');
  template.innerHTML = string.trim();

  return template.content;
};
},{}],7:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import { isUrlParam, isEqualPaths, extractUrlParams } from '../utils';

//const ANY_PATH = '*';

var Router = function (_Component) {
  _inherits(Router, _Component);

  function Router(props) {
    _classCallCheck(this, Router);

    var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this, props));

    var _this$props = _this.props,
        routes = _this$props.routes,
        host = _this$props.host;


    _this.state = {
      routes: routes,
      currentRoute: null,
      currentComponent: null
    };

    _this.host = host;

    console.log(props);
    //    this.host = document.createElement('div');

    window.addEventListener('hashchange', function () {
      return _this.handleUrlChange(_this.path);
    });

    _this.handleUrlChange(_this.path);

    (0, _utils.bindAll)(_this, 'handleUrlChange');
    return _this;
  }

  _createClass(Router, [{
    key: 'handleUrlChange',
    value: function handleUrlChange(path) {
      var _this2 = this;

      var _state = this.state,
          routes = _state.routes,
          currentRoute = _state.currentRoute;

      var nextRoute = routes.find(function (_ref) {
        var href = _ref.href;
        return href === _this2.path;
      }
      //        isEqualPaths(href, url)
      );

      console.log('nextRoute', nextRoute);

      if (nextRoute) {
        this.updateState({
          activeComponent: new nextRoute.component(),
          currentRoute: nextRoute
        });
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

  }, {
    key: 'render',
    value: function render() {
      return this.state.activeComponent.update();
    }
  }, {
    key: 'path',
    get: function get() {
      return window.location.hash.slice(1);
    }
  }]);

  return Router;
}(_Component3.default);

exports.default = Router;
},{"./Component":12,"../utils":15}],14:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component = require('./Component');

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_Component).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Component":12}],9:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Facepalm = require('../Facepalm');

var _utils = require('../utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.host = document.createElement('form');
        _this.host.addEventListener('submit', _this.handleSubmit);
        (0, _utils.bindAll)(_this, 'handleSubmit');
        return _this;
    }

    _createClass(Login, [{
        key: 'handleSubmit',
        value: function handleSubmit() {
            event.preventDefault();

            var uname = event.target.elements[0].value.trim();
            var password = event.target.elements[1].value.trim();

            console.log('LOGIN', 'uname:', uname, 'password:', password);
            //        return [uname, password];
        }
    }, {
        key: 'render',
        value: function render() {
            //        const { uname, password } = this.props;
            return '\n      <figure class="imgcontainer">\n          <img src="img_avatar2.png" alt="Avatar" class="avatar">\n          <figcaption class="container">\n            <label for="uname"><b>Username</b></label>\n            <input type="text" placeholder="Enter Name" name="uname" required>\n\n            <label for="psw"><b>Password</b></label>\n            <input type="password" placeholder="Enter Password" name="psw" required>\n\n            <button type="submit" class="signupbtn" id="singUp">Sign Up</button>\n            <button type="submit" id="login">Login</button>\n          </figcaption>\n      </figure>';

            //  <div class="container" style="background-color:#f1f1f1">
            //    <button type="button" class="cancelbtn">Cancel</button>
            //    <span class="psw">Forgot <a href="#">password?</a></span>
            //  </div>`;
        }
    }]);

    return Login;
}(_Facepalm.Component);

exports.default = Login;
},{"../Facepalm":14,"../utils":15}],10:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Facepalm = require('../Facepalm');

var _utils = require('../utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Singup = function (_Component) {
    _inherits(Singup, _Component);

    function Singup(props) {
        _classCallCheck(this, Singup);

        var _this = _possibleConstructorReturn(this, (Singup.__proto__ || Object.getPrototypeOf(Singup)).call(this, props));

        _this.host = document.createElement('form');

        //       bindAll(this, '');
        return _this;
    }

    _createClass(Singup, [{
        key: 'render',
        value: function render() {

            return '\n    <p>Create an account</p>\n    <hr>\n      <figure class="imgcontainer">\n          <img src="img_avatar2.png" alt="Avatar" class="avatar">\n          <figcaption class="container">\n            <label for="uname"><b>Username</b></label>\n            <input type="text" placeholder="Enter Name" name="uname" required>\n\n            <label for="psw"><b>Password</b></label>\n            <input type="password" placeholder="Enter Password" name="psw" required>\n\n            <label for="psw-repeat"><b>Repeat Password</b></label>\n            <input type="password" placeholder="Repeat Password" name="psw-repeat" required>\n\n            <label for="email"><b>Email</b></label>\n            <input type="text" placeholder="Enter Email" name="email" required>\n\n            <button type="submit" class="signupbtn" id="singUp">Sign Up</button>\n          </figcaption>\n      </figure>';
        }
    }]);

    return Singup;
}(_Facepalm.Component);

exports.default = Singup;
},{"../Facepalm":14,"../utils":15}],4:[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Login = require('./components/Login');

var _Login2 = _interopRequireDefault(_Login);

var _Singup = require('./components/Singup');

var _Singup2 = _interopRequireDefault(_Singup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import App from './src/components/App';
var routes = [{
  href: '/',
  component: _Singup2.default
}, {
  href: '/login',
  component: _Login2.default
}];

exports.default = routes;
},{"./components/Login":9,"./components/Singup":10}],2:[function(require,module,exports) {
'use strict';

var _Router = require('./src/Facepalm/Router');

var _Router2 = _interopRequireDefault(_Router);

var _routes = require('./src/routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import App from './src/components/App';
var router = new _Router2.default({ host: document.getElementById('root'), routes: _routes2.default });
//const app = new App({ host: document.getElementById('root') });
//app.update();
},{"./src/Facepalm/Router":7,"./src/routes":4}],16:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '34885' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[16,2])
//# sourceMappingURL=/dist/route.map