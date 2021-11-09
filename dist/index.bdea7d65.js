// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2HtCd":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "222e65dabdea7d65";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7PGg5":[function(require,module,exports) {
var _header = require("../components/header");
var _title = require("../components/title");
var _container = require("../components/container");
var _shortText = require("../components/short-text");
var _subTitle = require("../components/sub-title");
var _richText = require("../components/rich-text");
var _anotherText = require("../components/another-text");
var _menu = require("../components/menu");
var _footer = require("../components/footer");
(function() {
    _header.init();
    _title.init();
    _shortText.init();
    _container.init();
    _subTitle.init();
    _richText.init();
    _anotherText.init();
    _menu.init();
    _footer.init();
})();

},{"../components/header":"S0ZdL","../components/title":"cMLRH","../components/container":"gpcIq","../components/short-text":"efN9i","../components/sub-title":"a353N","../components/rich-text":"e6OQe","../components/another-text":"aBadw","../components/menu":"ayjoG","../components/footer":"fUsmM"}],"S0ZdL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class HeaderEl extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            let shadow = this.attachShadow({
                mode: "open"
            });
            let divEl = document.createElement('div');
            let pEl = document.createElement('p');
            let style = document.createElement('style');
            pEl.textContent = 'Header';
            divEl.className = 'header-style';
            pEl.className = 'p-style';
            style.textContent = `
            *{
                box-sizing:border-box;
            }

            body{
                margin: 0;
                padding: 0;
            }

            .header-style{
            background-color: #FF8282;
            height: 60px;
            padding: 17px;
            }

            .p-style{
            text-align: center;
            font-size: 22px;
            margin: 0px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;

            }
            `;
            shadow.appendChild(style);
            shadow.appendChild(divEl);
            divEl.appendChild(pEl);
        }
    }
    customElements.define("custom-header", HeaderEl);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cMLRH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class TitleEl extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            let shadow = this.attachShadow({
                mode: "open"
            });
            let titleEl = document.createElement('h1');
            let style = document.createElement('style');
            titleEl.textContent = 'Titulo de esta pagina';
            titleEl.className = 'title-style';
            style.textContent = `
           
            .title-style{
            text-align: start;
            font-size: 52px;
            margin: 0px;
            padding:0px;
            font-family: 'Poppins', sans-serif;
            font-weight: bold;

            }
            `;
            shadow.appendChild(style);
            shadow.appendChild(titleEl);
        }
    }
    customElements.define("custom-title", TitleEl);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"gpcIq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class ContainerEl extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            let shadow = this.attachShadow({
                mode: "open"
            });
            let ContainerEl = document.createElement('div');
            let style = document.createElement('style');
            ContainerEl.className = 'container-style';
            style.textContent = `
           
            .container-style{
            margin: 0px;
            padding:40px 30px;
            max-width:600px

            }

            @media (min-width: 600px) {
                .container-style {
                  margin: 0 auto;
                }
              }

            `;
            shadow.appendChild(style);
            shadow.appendChild(ContainerEl);
            while(this.children)ContainerEl.appendChild(this.firstChild);
        // if (this.children){
        //     for (let index = 0; index < this.children.length; index++) {
        //     }
        //     // for (const child of this.children) {
        //     // ContainerEl.appendChild(child);
        //     // }
        // }
        }
    }
    customElements.define("custom-container", ContainerEl);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"efN9i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class TextEl extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            let shadow = this.attachShadow({
                mode: "open"
            });
            let TextEl = document.createElement('p');
            let style = document.createElement('style');
            TextEl.textContent = 'Esta página sin dudas es la mejor';
            TextEl.className = 'text-style';
            style.textContent = `
           
            .text-style{
            text-align: start;
            font-size: 18px;
            margin: 0px;
            padding:20px 0px;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;

            }
            `;
            shadow.appendChild(style);
            shadow.appendChild(TextEl);
        }
    }
    customElements.define("custom-shortext", TextEl);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"a353N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class SubTitleEl extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            let shadow = this.attachShadow({
                mode: "open"
            });
            let SubTitleEl = document.createElement('h2');
            let style = document.createElement('style');
            SubTitleEl.textContent = 'Subtítulo';
            SubTitleEl.className = 'subtitle-style';
            style.textContent = `
           
            .subtitle-style{
            text-align: start;
            font-size: 38px;
            margin: 0px;
            padding:30px 0px;
            font-family: 'Poppins', sans-serif;
            font-weight: bold;

            }
            `;
            shadow.appendChild(style);
            shadow.appendChild(SubTitleEl);
        }
    }
    customElements.define("custom-subtitle", SubTitleEl);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"e6OQe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class TextEl extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            let shadow = this.attachShadow({
                mode: "open"
            });
            let TextEl = document.createElement('p');
            let style = document.createElement('style');
            TextEl.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?';
            TextEl.className = 'text-style';
            style.textContent = `
           
            .text-style{
            text-align: start;
            font-size: 18px;
            margin: 0px;
            padding:30px 0px;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;

            }
            `;
            shadow.appendChild(style);
            shadow.appendChild(TextEl);
        }
    }
    customElements.define("custom-richtext", TextEl);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aBadw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class TextEl extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            let shadow = this.attachShadow({
                mode: "open"
            });
            let TextEl = document.createElement('p');
            let style = document.createElement('style');
            TextEl.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
            TextEl.className = 'text-style';
            style.textContent = `
           
            .text-style{
            text-align: center;
            font-size: 22px;
            margin: 0px;
            padding:100px 0px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;

            }
            `;
            shadow.appendChild(style);
            shadow.appendChild(TextEl);
        }
    }
    customElements.define("custom-anothertext", TextEl);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ayjoG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class MenuEl extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            let shadow = this.attachShadow({
                mode: "open"
            });
            let style = document.createElement('style');
            let labelEl = document.createElement('label');
            labelEl.setAttribute('for', 'text');
            labelEl.className = 'label-style';
            labelEl.textContent = 'Nombre';
            let inputEl = document.createElement('input');
            inputEl.className = 'input-style';
            inputEl.type = 'text';
            inputEl.id = 'text';
            inputEl.placeholder = 'Ingresá tu nombre';
            let buttonEl = document.createElement('div');
            buttonEl.className = 'button-style';
            buttonEl.textContent = 'Button';
            let secondButtonEl = document.createElement('div');
            secondButtonEl.className = 'second-button-style';
            secondButtonEl.textContent = 'Volver';
            style.textContent = `
           
            .label-style{
            text-align:start;
            font-size: 18px;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;

            }
            .input-style{
                
            text-align:start;
            font-size: 18px;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            width:100%;
            padding: 17px 13px;
            box-sizing: border-box;


            }

            .button-style{
            background-color:#9CBBE9;
            width:100%;
            margin: 15px 0px;
            padding: 15px 0px;
            text-align:center;
            font-size: 22px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            }

            .second-button-style{
            background-color:white;
            color:black;
            width:100%;
            margin: 60px 0px;
            padding: 15px 0px;
            text-align:center;
            font-size: 22px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            border: 2px solid black;
            }


            `;
            shadow.appendChild(style);
            shadow.appendChild(labelEl);
            shadow.appendChild(inputEl);
            shadow.appendChild(buttonEl);
            shadow.appendChild(secondButtonEl);
        }
    }
    customElements.define("custom-menu", MenuEl);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fUsmM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init() {
    class FooterEl extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            let shadow = this.attachShadow({
                mode: "open"
            });
            let divEl = document.createElement('div');
            let pEl = document.createElement('p');
            let style = document.createElement('style');
            pEl.textContent = 'Footer';
            divEl.className = 'footer-style';
            pEl.className = 'p-style';
            style.textContent = `
            *{
                box-sizing:border-box;
            }

            body{
                margin: 0;
                padding: 0;
            }

            .footer-style{
            background-color: #FFA0EA;
            height: 233px;
            padding: 17px;
            display: flex;
            align-items: center;
            justify-content: center;

            }

            .p-style{
            text-align: center;
            font-size: 22px;
            margin: 0px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;

            }
            `;
            shadow.appendChild(style);
            shadow.appendChild(divEl);
            divEl.appendChild(pEl);
        }
    }
    customElements.define("custom-footer", FooterEl);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["2HtCd","7PGg5"], "7PGg5", "parcelRequirefd5b")

//# sourceMappingURL=index.bdea7d65.js.map
