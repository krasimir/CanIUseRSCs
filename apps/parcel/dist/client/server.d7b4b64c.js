// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$import(url) {  url = importMap[url] || url;  return import(distDir + url);}newRequire.load = $parcel$import;function $parcel$extendImportMap(map) {  Object.assign(importMap, map);}newRequire.extendImportMap = $parcel$extendImportMap;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });
    }
  }
})({"7Ry4E":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "cad30dd21abb2224";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "94cc8ec3d7b4b64c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"l1uZA":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("89e0c814e3c49308");

},{"89e0c814e3c49308":"a79ur"}],"a79ur":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react-server-dom-parcel-client.edge.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    function _defineProperty(obj, key, value) {
        a: if ("object" == typeof key && key) {
            var e = key[Symbol.toPrimitive];
            if (void 0 !== e) {
                key = e.call(key, "string");
                if ("object" != typeof key) break a;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            key = String(key);
        }
        key = "symbol" == typeof key ? key : key + "";
        key in obj ? Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : obj[key] = value;
        return obj;
    }
    function resolveServerReference(bundlerConfig, ref) {
        var idx = ref.lastIndexOf("#"), id = ref.slice(0, idx);
        idx = ref.slice(idx + 1);
        bundlerConfig = bundlerConfig[id];
        if (!bundlerConfig) throw Error("Invalid server action: " + ref);
        return [
            id,
            idx,
            bundlerConfig
        ];
    }
    function preloadModule(metadata) {
        metadata[3] && module.bundle.extendImportMap(metadata[3]);
        return 0 === metadata[2].length ? null : Promise.all(metadata[2].map(function(url) {
            return module.bundle.load(url);
        }));
    }
    function requireModule(metadata) {
        return module.bundle.root(metadata[0])[metadata[1]];
    }
    function prepareDestinationWithChunks(moduleLoading, bundles, nonce) {
        for(moduleLoading = 0; moduleLoading < bundles.length; moduleLoading++){
            var JSCompiler_temp_const = ReactDOMSharedInternals.d;
            JSCompiler_temp_const.M.call(JSCompiler_temp_const, module.bundle.publicUrl + bundles[moduleLoading], {
                crossOrigin: void 0,
                nonce: nonce
            });
        }
    }
    function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function isObjectPrototype(object) {
        if (!object) return !1;
        var ObjectPrototype = Object.prototype;
        if (object === ObjectPrototype) return !0;
        if (getPrototypeOf(object)) return !1;
        object = Object.getOwnPropertyNames(object);
        for(var i = 0; i < object.length; i++)if (!(object[i] in ObjectPrototype)) return !1;
        return !0;
    }
    function isSimpleObject(object) {
        if (!isObjectPrototype(getPrototypeOf(object))) return !1;
        for(var names = Object.getOwnPropertyNames(object), i = 0; i < names.length; i++){
            var descriptor = Object.getOwnPropertyDescriptor(object, names[i]);
            if (!descriptor || !descriptor.enumerable && ("key" !== names[i] && "ref" !== names[i] || "function" !== typeof descriptor.get)) return !1;
        }
        return !0;
    }
    function objectName(object) {
        return Object.prototype.toString.call(object).replace(/^\[object (.*)\]$/, function(m, p0) {
            return p0;
        });
    }
    function describeKeyForErrorMessage(key) {
        var encodedKey = JSON.stringify(key);
        return '"' + key + '"' === encodedKey ? key : encodedKey;
    }
    function describeValueForErrorMessage(value) {
        switch(typeof value){
            case "string":
                return JSON.stringify(10 >= value.length ? value : value.slice(0, 10) + "...");
            case "object":
                if (isArrayImpl(value)) return "[...]";
                if (null !== value && value.$$typeof === CLIENT_REFERENCE_TAG) return "client";
                value = objectName(value);
                return "Object" === value ? "{...}" : value;
            case "function":
                return value.$$typeof === CLIENT_REFERENCE_TAG ? "client" : (value = value.displayName || value.name) ? "function " + value : "function";
            default:
                return String(value);
        }
    }
    function describeElementType(type) {
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeElementType(type.render);
            case REACT_MEMO_TYPE:
                return describeElementType(type.type);
            case REACT_LAZY_TYPE:
                var payload = type._payload;
                type = type._init;
                try {
                    return describeElementType(type(payload));
                } catch (x) {}
        }
        return "";
    }
    function describeObjectForErrorMessage(objectOrArray, expandedName) {
        var objKind = objectName(objectOrArray);
        if ("Object" !== objKind && "Array" !== objKind) return objKind;
        var start = -1, length = 0;
        if (isArrayImpl(objectOrArray)) {
            if (jsxChildrenParents.has(objectOrArray)) {
                var type = jsxChildrenParents.get(objectOrArray);
                objKind = "<" + describeElementType(type) + ">";
                for(var i = 0; i < objectOrArray.length; i++){
                    var value = objectOrArray[i];
                    value = "string" === typeof value ? value : "object" === typeof value && null !== value ? "{" + describeObjectForErrorMessage(value) + "}" : "{" + describeValueForErrorMessage(value) + "}";
                    "" + i === expandedName ? (start = objKind.length, length = value.length, objKind += value) : objKind = 15 > value.length && 40 > objKind.length + value.length ? objKind + value : objKind + "{...}";
                }
                objKind += "</" + describeElementType(type) + ">";
            } else {
                objKind = "[";
                for(type = 0; type < objectOrArray.length; type++)0 < type && (objKind += ", "), i = objectOrArray[type], i = "object" === typeof i && null !== i ? describeObjectForErrorMessage(i) : describeValueForErrorMessage(i), "" + type === expandedName ? (start = objKind.length, length = i.length, objKind += i) : objKind = 10 > i.length && 40 > objKind.length + i.length ? objKind + i : objKind + "...";
                objKind += "]";
            }
        } else if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE) objKind = "<" + describeElementType(objectOrArray.type) + "/>";
        else {
            if (objectOrArray.$$typeof === CLIENT_REFERENCE_TAG) return "client";
            if (jsxPropsParents.has(objectOrArray)) {
                objKind = jsxPropsParents.get(objectOrArray);
                objKind = "<" + (describeElementType(objKind) || "...");
                type = Object.keys(objectOrArray);
                for(i = 0; i < type.length; i++){
                    objKind += " ";
                    value = type[i];
                    objKind += describeKeyForErrorMessage(value) + "=";
                    var _value2 = objectOrArray[value];
                    var _substr2 = value === expandedName && "object" === typeof _value2 && null !== _value2 ? describeObjectForErrorMessage(_value2) : describeValueForErrorMessage(_value2);
                    "string" !== typeof _value2 && (_substr2 = "{" + _substr2 + "}");
                    value === expandedName ? (start = objKind.length, length = _substr2.length, objKind += _substr2) : objKind = 10 > _substr2.length && 40 > objKind.length + _substr2.length ? objKind + _substr2 : objKind + "...";
                }
                objKind += ">";
            } else {
                objKind = "{";
                type = Object.keys(objectOrArray);
                for(i = 0; i < type.length; i++)0 < i && (objKind += ", "), value = type[i], objKind += describeKeyForErrorMessage(value) + ": ", _value2 = objectOrArray[value], _value2 = "object" === typeof _value2 && null !== _value2 ? describeObjectForErrorMessage(_value2) : describeValueForErrorMessage(_value2), value === expandedName ? (start = objKind.length, length = _value2.length, objKind += _value2) : objKind = 10 > _value2.length && 40 > objKind.length + _value2.length ? objKind + _value2 : objKind + "...";
                objKind += "}";
            }
        }
        return void 0 === expandedName ? objKind : -1 < start && 0 < length ? (objectOrArray = " ".repeat(start) + "^".repeat(length), "\n  " + objKind + "\n  " + objectOrArray) : "\n  " + objKind;
    }
    function serializeNumber(number) {
        return Number.isFinite(number) ? 0 === number && -Infinity === 1 / number ? "$-0" : number : Infinity === number ? "$Infinity" : -Infinity === number ? "$-Infinity" : "$NaN";
    }
    function processReply(root, formFieldPrefix, temporaryReferences, resolve, reject) {
        function serializeTypedArray(tag, typedArray) {
            typedArray = new Blob([
                new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength)
            ]);
            var blobId = nextPartId++;
            null === formData && (formData = new FormData());
            formData.append(formFieldPrefix + blobId, typedArray);
            return "$" + tag + blobId.toString(16);
        }
        function serializeBinaryReader(reader) {
            function progress(entry) {
                entry.done ? (entry = nextPartId++, data.append(formFieldPrefix + entry, new Blob(buffer)), data.append(formFieldPrefix + streamId, '"$o' + entry.toString(16) + '"'), data.append(formFieldPrefix + streamId, "C"), pendingParts--, 0 === pendingParts && resolve(data)) : (buffer.push(entry.value), reader.read(new Uint8Array(1024)).then(progress, reject));
            }
            null === formData && (formData = new FormData());
            var data = formData;
            pendingParts++;
            var streamId = nextPartId++, buffer = [];
            reader.read(new Uint8Array(1024)).then(progress, reject);
            return "$r" + streamId.toString(16);
        }
        function serializeReader(reader) {
            function progress(entry) {
                if (entry.done) data.append(formFieldPrefix + streamId, "C"), pendingParts--, 0 === pendingParts && resolve(data);
                else try {
                    var partJSON = JSON.stringify(entry.value, resolveToJSON);
                    data.append(formFieldPrefix + streamId, partJSON);
                    reader.read().then(progress, reject);
                } catch (x) {
                    reject(x);
                }
            }
            null === formData && (formData = new FormData());
            var data = formData;
            pendingParts++;
            var streamId = nextPartId++;
            reader.read().then(progress, reject);
            return "$R" + streamId.toString(16);
        }
        function serializeReadableStream(stream) {
            try {
                var binaryReader = stream.getReader({
                    mode: "byob"
                });
            } catch (x) {
                return serializeReader(stream.getReader());
            }
            return serializeBinaryReader(binaryReader);
        }
        function serializeAsyncIterable(iterable, iterator) {
            function progress(entry) {
                if (entry.done) {
                    if (void 0 === entry.value) data.append(formFieldPrefix + streamId, "C");
                    else try {
                        var partJSON = JSON.stringify(entry.value, resolveToJSON);
                        data.append(formFieldPrefix + streamId, "C" + partJSON);
                    } catch (x) {
                        reject(x);
                        return;
                    }
                    pendingParts--;
                    0 === pendingParts && resolve(data);
                } else try {
                    var _partJSON = JSON.stringify(entry.value, resolveToJSON);
                    data.append(formFieldPrefix + streamId, _partJSON);
                    iterator.next().then(progress, reject);
                } catch (x$0) {
                    reject(x$0);
                }
            }
            null === formData && (formData = new FormData());
            var data = formData;
            pendingParts++;
            var streamId = nextPartId++;
            iterable = iterable === iterator;
            iterator.next().then(progress, reject);
            return "$" + (iterable ? "x" : "X") + streamId.toString(16);
        }
        function resolveToJSON(key, value) {
            var originalValue = this[key];
            "object" !== typeof originalValue || originalValue === value || originalValue instanceof Date || ("Object" !== objectName(originalValue) ? console.error("Only plain objects can be passed to Server Functions from the Client. %s objects are not supported.%s", objectName(originalValue), describeObjectForErrorMessage(this, key)) : console.error("Only plain objects can be passed to Server Functions from the Client. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props.%s", describeObjectForErrorMessage(this, key)));
            if (null === value) return null;
            if ("object" === typeof value) {
                switch(value.$$typeof){
                    case REACT_ELEMENT_TYPE:
                        if (void 0 !== temporaryReferences && -1 === key.indexOf(":")) {
                            var parentReference = writtenObjects.get(this);
                            if (void 0 !== parentReference) return temporaryReferences.set(parentReference + ":" + key, value), "$T";
                        }
                        throw Error("React Element cannot be passed to Server Functions from the Client without a temporary reference set. Pass a TemporaryReferenceSet to the options." + describeObjectForErrorMessage(this, key));
                    case REACT_LAZY_TYPE:
                        originalValue = value._payload;
                        var init = value._init;
                        null === formData && (formData = new FormData());
                        pendingParts++;
                        try {
                            parentReference = init(originalValue);
                            var lazyId = nextPartId++, partJSON = serializeModel(parentReference, lazyId);
                            formData.append(formFieldPrefix + lazyId, partJSON);
                            return "$" + lazyId.toString(16);
                        } catch (x) {
                            if ("object" === typeof x && null !== x && "function" === typeof x.then) {
                                pendingParts++;
                                var _lazyId = nextPartId++;
                                parentReference = function() {
                                    try {
                                        var _partJSON2 = serializeModel(value, _lazyId), _data = formData;
                                        _data.append(formFieldPrefix + _lazyId, _partJSON2);
                                        pendingParts--;
                                        0 === pendingParts && resolve(_data);
                                    } catch (reason) {
                                        reject(reason);
                                    }
                                };
                                x.then(parentReference, parentReference);
                                return "$" + _lazyId.toString(16);
                            }
                            reject(x);
                            return null;
                        } finally{
                            pendingParts--;
                        }
                }
                if ("function" === typeof value.then) {
                    null === formData && (formData = new FormData());
                    pendingParts++;
                    var promiseId = nextPartId++;
                    value.then(function(partValue) {
                        try {
                            var _partJSON3 = serializeModel(partValue, promiseId);
                            partValue = formData;
                            partValue.append(formFieldPrefix + promiseId, _partJSON3);
                            pendingParts--;
                            0 === pendingParts && resolve(partValue);
                        } catch (reason) {
                            reject(reason);
                        }
                    }, reject);
                    return "$@" + promiseId.toString(16);
                }
                parentReference = writtenObjects.get(value);
                if (void 0 !== parentReference) {
                    if (modelRoot === value) modelRoot = null;
                    else return parentReference;
                } else -1 === key.indexOf(":") && (parentReference = writtenObjects.get(this), void 0 !== parentReference && (parentReference = parentReference + ":" + key, writtenObjects.set(value, parentReference), void 0 !== temporaryReferences && temporaryReferences.set(parentReference, value)));
                if (isArrayImpl(value)) return value;
                if (value instanceof FormData) {
                    null === formData && (formData = new FormData());
                    var _data3 = formData;
                    key = nextPartId++;
                    var prefix = formFieldPrefix + key + "_";
                    value.forEach(function(originalValue, originalKey) {
                        _data3.append(prefix + originalKey, originalValue);
                    });
                    return "$K" + key.toString(16);
                }
                if (value instanceof Map) return key = nextPartId++, parentReference = serializeModel(Array.from(value), key), null === formData && (formData = new FormData()), formData.append(formFieldPrefix + key, parentReference), "$Q" + key.toString(16);
                if (value instanceof Set) return key = nextPartId++, parentReference = serializeModel(Array.from(value), key), null === formData && (formData = new FormData()), formData.append(formFieldPrefix + key, parentReference), "$W" + key.toString(16);
                if (value instanceof ArrayBuffer) return key = new Blob([
                    value
                ]), parentReference = nextPartId++, null === formData && (formData = new FormData()), formData.append(formFieldPrefix + parentReference, key), "$A" + parentReference.toString(16);
                if (value instanceof Int8Array) return serializeTypedArray("O", value);
                if (value instanceof Uint8Array) return serializeTypedArray("o", value);
                if (value instanceof Uint8ClampedArray) return serializeTypedArray("U", value);
                if (value instanceof Int16Array) return serializeTypedArray("S", value);
                if (value instanceof Uint16Array) return serializeTypedArray("s", value);
                if (value instanceof Int32Array) return serializeTypedArray("L", value);
                if (value instanceof Uint32Array) return serializeTypedArray("l", value);
                if (value instanceof Float32Array) return serializeTypedArray("G", value);
                if (value instanceof Float64Array) return serializeTypedArray("g", value);
                if (value instanceof BigInt64Array) return serializeTypedArray("M", value);
                if (value instanceof BigUint64Array) return serializeTypedArray("m", value);
                if (value instanceof DataView) return serializeTypedArray("V", value);
                if ("function" === typeof Blob && value instanceof Blob) return null === formData && (formData = new FormData()), key = nextPartId++, formData.append(formFieldPrefix + key, value), "$B" + key.toString(16);
                if (parentReference = getIteratorFn(value)) return parentReference = parentReference.call(value), parentReference === value ? (key = nextPartId++, parentReference = serializeModel(Array.from(parentReference), key), null === formData && (formData = new FormData()), formData.append(formFieldPrefix + key, parentReference), "$i" + key.toString(16)) : Array.from(parentReference);
                if ("function" === typeof ReadableStream && value instanceof ReadableStream) return serializeReadableStream(value);
                parentReference = value[ASYNC_ITERATOR];
                if ("function" === typeof parentReference) return serializeAsyncIterable(value, parentReference.call(value));
                parentReference = getPrototypeOf(value);
                if (parentReference !== ObjectPrototype && (null === parentReference || null !== getPrototypeOf(parentReference))) {
                    if (void 0 === temporaryReferences) throw Error("Only plain objects, and a few built-ins, can be passed to Server Functions. Classes or null prototypes are not supported." + describeObjectForErrorMessage(this, key));
                    return "$T";
                }
                value.$$typeof === REACT_CONTEXT_TYPE ? console.error("React Context Providers cannot be passed to Server Functions from the Client.%s", describeObjectForErrorMessage(this, key)) : "Object" !== objectName(value) ? console.error("Only plain objects can be passed to Server Functions from the Client. %s objects are not supported.%s", objectName(value), describeObjectForErrorMessage(this, key)) : isSimpleObject(value) ? Object.getOwnPropertySymbols && (parentReference = Object.getOwnPropertySymbols(value), 0 < parentReference.length && console.error("Only plain objects can be passed to Server Functions from the Client. Objects with symbol properties like %s are not supported.%s", parentReference[0].description, describeObjectForErrorMessage(this, key))) : console.error("Only plain objects can be passed to Server Functions from the Client. Classes or other objects with methods are not supported.%s", describeObjectForErrorMessage(this, key));
                return value;
            }
            if ("string" === typeof value) {
                if ("Z" === value[value.length - 1] && this[key] instanceof Date) return "$D" + value;
                key = "$" === value[0] ? "$" + value : value;
                return key;
            }
            if ("boolean" === typeof value) return value;
            if ("number" === typeof value) return serializeNumber(value);
            if ("undefined" === typeof value) return "$undefined";
            if ("function" === typeof value) {
                parentReference = knownServerReferences.get(value);
                if (void 0 !== parentReference) return key = JSON.stringify({
                    id: parentReference.id,
                    bound: parentReference.bound
                }, resolveToJSON), null === formData && (formData = new FormData()), parentReference = nextPartId++, formData.set(formFieldPrefix + parentReference, key), "$F" + parentReference.toString(16);
                if (void 0 !== temporaryReferences && -1 === key.indexOf(":") && (parentReference = writtenObjects.get(this), void 0 !== parentReference)) return temporaryReferences.set(parentReference + ":" + key, value), "$T";
                throw Error("Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.");
            }
            if ("symbol" === typeof value) {
                if (void 0 !== temporaryReferences && -1 === key.indexOf(":") && (parentReference = writtenObjects.get(this), void 0 !== parentReference)) return temporaryReferences.set(parentReference + ":" + key, value), "$T";
                throw Error("Symbols cannot be passed to a Server Function without a temporary reference set. Pass a TemporaryReferenceSet to the options." + describeObjectForErrorMessage(this, key));
            }
            if ("bigint" === typeof value) return "$n" + value.toString(10);
            throw Error("Type " + typeof value + " is not supported as an argument to a Server Function.");
        }
        function serializeModel(model, id) {
            "object" === typeof model && null !== model && (id = "$" + id.toString(16), writtenObjects.set(model, id), void 0 !== temporaryReferences && temporaryReferences.set(id, model));
            modelRoot = model;
            return JSON.stringify(model, resolveToJSON);
        }
        var nextPartId = 1, pendingParts = 0, formData = null, writtenObjects = new WeakMap(), modelRoot = root, json = serializeModel(root, 0);
        null === formData ? resolve(json) : (formData.set(formFieldPrefix + "0", json), 0 === pendingParts && resolve(formData));
        return function() {
            0 < pendingParts && (pendingParts = 0, null === formData ? resolve(json) : resolve(formData));
        };
    }
    function encodeFormData(reference) {
        var resolve, reject, thenable = new Promise(function(res, rej) {
            resolve = res;
            reject = rej;
        });
        processReply(reference, "", void 0, function(body) {
            if ("string" === typeof body) {
                var data = new FormData();
                data.append("0", body);
                body = data;
            }
            thenable.status = "fulfilled";
            thenable.value = body;
            resolve(body);
        }, function(e) {
            thenable.status = "rejected";
            thenable.reason = e;
            reject(e);
        });
        return thenable;
    }
    function defaultEncodeFormAction(identifierPrefix) {
        var referenceClosure = knownServerReferences.get(this);
        if (!referenceClosure) throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");
        var data = null;
        if (null !== referenceClosure.bound) {
            data = boundCache.get(referenceClosure);
            data || (data = encodeFormData({
                id: referenceClosure.id,
                bound: referenceClosure.bound
            }), boundCache.set(referenceClosure, data));
            if ("rejected" === data.status) throw data.reason;
            if ("fulfilled" !== data.status) throw data;
            referenceClosure = data.value;
            var prefixedData = new FormData();
            referenceClosure.forEach(function(value, key) {
                prefixedData.append("$ACTION_" + identifierPrefix + ":" + key, value);
            });
            data = prefixedData;
            referenceClosure = "$ACTION_REF_" + identifierPrefix;
        } else referenceClosure = "$ACTION_ID_" + referenceClosure.id;
        return {
            name: referenceClosure,
            method: "POST",
            encType: "multipart/form-data",
            data: data
        };
    }
    function isSignatureEqual(referenceId, numberOfBoundArgs) {
        var referenceClosure = knownServerReferences.get(this);
        if (!referenceClosure) throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");
        if (referenceClosure.id !== referenceId) return !1;
        var boundPromise = referenceClosure.bound;
        if (null === boundPromise) return 0 === numberOfBoundArgs;
        switch(boundPromise.status){
            case "fulfilled":
                return boundPromise.value.length === numberOfBoundArgs;
            case "pending":
                throw boundPromise;
            case "rejected":
                throw boundPromise.reason;
            default:
                throw "string" !== typeof boundPromise.status && (boundPromise.status = "pending", boundPromise.then(function(boundArgs) {
                    boundPromise.status = "fulfilled";
                    boundPromise.value = boundArgs;
                }, function(error) {
                    boundPromise.status = "rejected";
                    boundPromise.reason = error;
                })), boundPromise;
        }
    }
    function createFakeServerFunction(name, filename, sourceMap, line, col, environmentName, innerFunction) {
        name || (name = "<anonymous>");
        var encodedName = JSON.stringify(name);
        1 >= line ? (line = encodedName.length + 7, col = "s=>({" + encodedName + " ".repeat(col < line ? 0 : col - line) + ":(...args) => s(...args)})\n/* This module is a proxy to a Server Action. Turn on Source Maps to see the server source. */") : col = "/* This module is a proxy to a Server Action. Turn on Source Maps to see the server source. */" + "\n".repeat(line - 2) + "server=>({" + encodedName + ":\n" + " ".repeat(1 > col ? 0 : col - 1) + "(...args) => server(...args)})";
        filename.startsWith("/") && (filename = "file://" + filename);
        sourceMap ? (col += "\n//# sourceURL=rsc://React/" + encodeURIComponent(environmentName) + "/" + filename + "?s" + fakeServerFunctionIdx++, col += "\n//# sourceMappingURL=" + sourceMap) : filename && (col += "\n//# sourceURL=" + filename);
        try {
            return (0, eval)(col)(innerFunction)[name];
        } catch (x) {
            return innerFunction;
        }
    }
    function registerBoundServerReference(reference, id, bound, encodeFormAction) {
        knownServerReferences.has(reference) || (knownServerReferences.set(reference, {
            id: id,
            originalBind: reference.bind,
            bound: bound
        }), Object.defineProperties(reference, {
            $$FORM_ACTION: {
                value: void 0 === encodeFormAction ? defaultEncodeFormAction : function() {
                    var referenceClosure = knownServerReferences.get(this);
                    if (!referenceClosure) throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");
                    var boundPromise = referenceClosure.bound;
                    null === boundPromise && (boundPromise = Promise.resolve([]));
                    return encodeFormAction(referenceClosure.id, boundPromise);
                }
            },
            $$IS_SIGNATURE_EQUAL: {
                value: isSignatureEqual
            },
            bind: {
                value: bind
            }
        }));
    }
    function bind() {
        var referenceClosure = knownServerReferences.get(this);
        if (!referenceClosure) return FunctionBind.apply(this, arguments);
        var newFn = referenceClosure.originalBind.apply(this, arguments);
        null != arguments[0] && console.error('Cannot bind "this" of a Server Action. Pass null or undefined as the first argument to .bind().');
        var args = ArraySlice.call(arguments, 1), boundPromise = null;
        boundPromise = null !== referenceClosure.bound ? Promise.resolve(referenceClosure.bound).then(function(boundArgs) {
            return boundArgs.concat(args);
        }) : Promise.resolve(args);
        knownServerReferences.set(newFn, {
            id: referenceClosure.id,
            originalBind: newFn.bind,
            bound: boundPromise
        });
        Object.defineProperties(newFn, {
            $$FORM_ACTION: {
                value: this.$$FORM_ACTION
            },
            $$IS_SIGNATURE_EQUAL: {
                value: isSignatureEqual
            },
            bind: {
                value: bind
            }
        });
        return newFn;
    }
    function createBoundServerReference(metaData, callServer, encodeFormAction, findSourceMapURL) {
        function action() {
            var args = Array.prototype.slice.call(arguments);
            return bound ? "fulfilled" === bound.status ? callServer(id, bound.value.concat(args)) : Promise.resolve(bound).then(function(boundArgs) {
                return callServer(id, boundArgs.concat(args));
            }) : callServer(id, args);
        }
        var id = metaData.id, bound = metaData.bound, location = metaData.location;
        if (location) {
            var functionName = metaData.name || "", filename = location[1], line = location[2];
            location = location[3];
            metaData = metaData.env || "Server";
            findSourceMapURL = null == findSourceMapURL ? null : findSourceMapURL(filename, metaData);
            action = createFakeServerFunction(functionName, filename, findSourceMapURL, line, location, metaData, action);
        }
        registerBoundServerReference(action, id, bound, encodeFormAction);
        return action;
    }
    function parseStackLocation(error) {
        error = error.stack;
        error.startsWith("Error: react-stack-top-frame\n") && (error = error.slice(29));
        var endOfFirst = error.indexOf("\n");
        if (-1 !== endOfFirst) {
            var endOfSecond = error.indexOf("\n", endOfFirst + 1);
            endOfFirst = -1 === endOfSecond ? error.slice(endOfFirst + 1) : error.slice(endOfFirst + 1, endOfSecond);
        } else endOfFirst = error;
        error = v8FrameRegExp.exec(endOfFirst);
        if (!error && (error = jscSpiderMonkeyFrameRegExp.exec(endOfFirst), !error)) return null;
        endOfFirst = error[1] || "";
        "<anonymous>" === endOfFirst && (endOfFirst = "");
        endOfSecond = error[2] || error[5] || "";
        "<anonymous>" === endOfSecond && (endOfSecond = "");
        return [
            endOfFirst,
            endOfSecond,
            +(error[3] || error[6]),
            +(error[4] || error[7])
        ];
    }
    function createServerReference$1(id, callServer, encodeFormAction, findSourceMapURL, functionName) {
        function action() {
            var args = Array.prototype.slice.call(arguments);
            return callServer(id, args);
        }
        var location = parseStackLocation(Error("react-stack-top-frame"));
        if (null !== location) {
            var filename = location[1], line = location[2];
            location = location[3];
            findSourceMapURL = null == findSourceMapURL ? null : findSourceMapURL(filename, "Client");
            action = createFakeServerFunction(functionName || "", filename, findSourceMapURL, line, location, "Client", action);
        }
        registerBoundServerReference(action, id, null, encodeFormAction);
        return action;
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function prepareStackTrace(error, structuredStackTrace) {
        error = (error.name || "Error") + ": " + (error.message || "");
        for(var i = 0; i < structuredStackTrace.length; i++)error += "\n    at " + structuredStackTrace[i].toString();
        return error;
    }
    function ReactPromise(status, value, reason, response) {
        this.status = status;
        this.value = value;
        this.reason = reason;
        this._response = response;
        this._debugInfo = null;
    }
    function readChunk(chunk) {
        switch(chunk.status){
            case "resolved_model":
                initializeModelChunk(chunk);
                break;
            case "resolved_module":
                initializeModuleChunk(chunk);
        }
        switch(chunk.status){
            case "fulfilled":
                return chunk.value;
            case "pending":
            case "blocked":
                throw chunk;
            default:
                throw chunk.reason;
        }
    }
    function createPendingChunk(response) {
        return new ReactPromise("pending", null, null, response);
    }
    function wakeChunk(listeners, value) {
        for(var i = 0; i < listeners.length; i++)(0, listeners[i])(value);
    }
    function wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners) {
        switch(chunk.status){
            case "fulfilled":
                wakeChunk(resolveListeners, chunk.value);
                break;
            case "pending":
            case "blocked":
                if (chunk.value) for(var i = 0; i < resolveListeners.length; i++)chunk.value.push(resolveListeners[i]);
                else chunk.value = resolveListeners;
                if (chunk.reason) {
                    if (rejectListeners) for(resolveListeners = 0; resolveListeners < rejectListeners.length; resolveListeners++)chunk.reason.push(rejectListeners[resolveListeners]);
                } else chunk.reason = rejectListeners;
                break;
            case "rejected":
                rejectListeners && wakeChunk(rejectListeners, chunk.reason);
        }
    }
    function triggerErrorOnChunk(chunk, error) {
        if ("pending" !== chunk.status && "blocked" !== chunk.status) chunk.reason.error(error);
        else {
            var listeners = chunk.reason;
            chunk.status = "rejected";
            chunk.reason = error;
            null !== listeners && wakeChunk(listeners, error);
        }
    }
    function createResolvedIteratorResultChunk(response, value, done) {
        return new ReactPromise("resolved_model", (done ? '{"done":true,"value":' : '{"done":false,"value":') + value + "}", null, response);
    }
    function resolveIteratorResultChunk(chunk, value, done) {
        resolveModelChunk(chunk, (done ? '{"done":true,"value":' : '{"done":false,"value":') + value + "}");
    }
    function resolveModelChunk(chunk, value) {
        if ("pending" !== chunk.status) chunk.reason.enqueueModel(value);
        else {
            var resolveListeners = chunk.value, rejectListeners = chunk.reason;
            chunk.status = "resolved_model";
            chunk.value = value;
            null !== resolveListeners && (initializeModelChunk(chunk), wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners));
        }
    }
    function resolveModuleChunk(chunk, value) {
        if ("pending" === chunk.status || "blocked" === chunk.status) {
            var resolveListeners = chunk.value, rejectListeners = chunk.reason;
            chunk.status = "resolved_module";
            chunk.value = value;
            null !== resolveListeners && (initializeModuleChunk(chunk), wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners));
        }
    }
    function initializeModelChunk(chunk) {
        var prevHandler = initializingHandler;
        initializingHandler = null;
        var resolvedModel = chunk.value;
        chunk.status = "blocked";
        chunk.value = null;
        chunk.reason = null;
        try {
            var value = JSON.parse(resolvedModel, chunk._response._fromJSON), resolveListeners = chunk.value;
            null !== resolveListeners && (chunk.value = null, chunk.reason = null, wakeChunk(resolveListeners, value));
            if (null !== initializingHandler) {
                if (initializingHandler.errored) throw initializingHandler.value;
                if (0 < initializingHandler.deps) {
                    initializingHandler.value = value;
                    initializingHandler.chunk = chunk;
                    return;
                }
            }
            chunk.status = "fulfilled";
            chunk.value = value;
        } catch (error) {
            chunk.status = "rejected", chunk.reason = error;
        } finally{
            initializingHandler = prevHandler;
        }
    }
    function initializeModuleChunk(chunk) {
        try {
            var value = requireModule(chunk.value);
            chunk.status = "fulfilled";
            chunk.value = value;
        } catch (error) {
            chunk.status = "rejected", chunk.reason = error;
        }
    }
    function reportGlobalError(response, error) {
        response._closed = !0;
        response._closedReason = error;
        response._chunks.forEach(function(chunk) {
            "pending" === chunk.status && triggerErrorOnChunk(chunk, error);
        });
    }
    function nullRefGetter() {
        return null;
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("function" === typeof type) return '"use client"';
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return type._init === readChunk ? '"use client"' : "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function createLazyChunkWrapper(chunk) {
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: chunk,
            _init: readChunk
        };
        chunk = chunk._debugInfo || (chunk._debugInfo = []);
        lazyType._debugInfo = chunk;
        return lazyType;
    }
    function getChunk(response, id) {
        var chunks = response._chunks, chunk = chunks.get(id);
        chunk || (chunk = response._closed ? new ReactPromise("rejected", null, response._closedReason, response) : createPendingChunk(response), chunks.set(id, chunk));
        return chunk;
    }
    function waitForReference(referencedChunk, parentObject, key, response, map, path) {
        function fulfill(value) {
            for(var i = 1; i < path.length; i++){
                for(; value.$$typeof === REACT_LAZY_TYPE;)if (value = value._payload, value === handler.chunk) value = handler.value;
                else if ("fulfilled" === value.status) value = value.value;
                else {
                    path.splice(0, i - 1);
                    value.then(fulfill, reject);
                    return;
                }
                value = value[path[i]];
            }
            i = map(response, value, parentObject, key);
            parentObject[key] = i;
            "" === key && null === handler.value && (handler.value = i);
            if (parentObject[0] === REACT_ELEMENT_TYPE && "object" === typeof handler.value && null !== handler.value && handler.value.$$typeof === REACT_ELEMENT_TYPE) switch(value = handler.value, key){
                case "3":
                    value.props = i;
                    break;
                case "4":
                    value._owner = i;
            }
            handler.deps--;
            0 === handler.deps && (i = handler.chunk, null !== i && "blocked" === i.status && (value = i.value, i.status = "fulfilled", i.value = handler.value, null !== value && wakeChunk(value, handler.value)));
        }
        function reject(error) {
            if (!handler.errored) {
                var blockedValue = handler.value;
                handler.errored = !0;
                handler.value = error;
                var chunk = handler.chunk;
                if (null !== chunk && "blocked" === chunk.status) {
                    if ("object" === typeof blockedValue && null !== blockedValue && blockedValue.$$typeof === REACT_ELEMENT_TYPE) {
                        var erroredComponent = {
                            name: getComponentNameFromType(blockedValue.type) || "",
                            owner: blockedValue._owner
                        };
                        erroredComponent.debugStack = blockedValue._debugStack;
                        supportsCreateTask && (erroredComponent.debugTask = blockedValue._debugTask);
                        (chunk._debugInfo || (chunk._debugInfo = [])).push(erroredComponent);
                    }
                    triggerErrorOnChunk(chunk, error);
                }
            }
        }
        if (initializingHandler) {
            var handler = initializingHandler;
            handler.deps++;
        } else handler = initializingHandler = {
            parent: null,
            chunk: null,
            value: null,
            deps: 1,
            errored: !1
        };
        referencedChunk.then(fulfill, reject);
        return null;
    }
    function loadServerReference(response, metaData, parentObject, key) {
        if (!response._serverReferenceConfig) return createBoundServerReference(metaData, response._callServer, response._encodeFormAction, response._debugFindSourceMapURL);
        var serverReference = resolveServerReference(response._serverReferenceConfig, metaData.id), promise = preloadModule(serverReference);
        if (promise) metaData.bound && (promise = Promise.all([
            promise,
            metaData.bound
        ]));
        else if (metaData.bound) promise = Promise.resolve(metaData.bound);
        else return promise = requireModule(serverReference), registerBoundServerReference(promise, metaData.id, metaData.bound, response._encodeFormAction), promise;
        if (initializingHandler) {
            var handler = initializingHandler;
            handler.deps++;
        } else handler = initializingHandler = {
            parent: null,
            chunk: null,
            value: null,
            deps: 1,
            errored: !1
        };
        promise.then(function() {
            var resolvedValue = requireModule(serverReference);
            if (metaData.bound) {
                var boundArgs = metaData.bound.value.slice(0);
                boundArgs.unshift(null);
                resolvedValue = resolvedValue.bind.apply(resolvedValue, boundArgs);
            }
            registerBoundServerReference(resolvedValue, metaData.id, metaData.bound, response._encodeFormAction);
            parentObject[key] = resolvedValue;
            "" === key && null === handler.value && (handler.value = resolvedValue);
            if (parentObject[0] === REACT_ELEMENT_TYPE && "object" === typeof handler.value && null !== handler.value && handler.value.$$typeof === REACT_ELEMENT_TYPE) switch(boundArgs = handler.value, key){
                case "3":
                    boundArgs.props = resolvedValue;
                    break;
                case "4":
                    boundArgs._owner = resolvedValue;
            }
            handler.deps--;
            0 === handler.deps && (resolvedValue = handler.chunk, null !== resolvedValue && "blocked" === resolvedValue.status && (boundArgs = resolvedValue.value, resolvedValue.status = "fulfilled", resolvedValue.value = handler.value, null !== boundArgs && wakeChunk(boundArgs, handler.value)));
        }, function(error) {
            if (!handler.errored) {
                var blockedValue = handler.value;
                handler.errored = !0;
                handler.value = error;
                var chunk = handler.chunk;
                if (null !== chunk && "blocked" === chunk.status) {
                    if ("object" === typeof blockedValue && null !== blockedValue && blockedValue.$$typeof === REACT_ELEMENT_TYPE) {
                        var erroredComponent = {
                            name: getComponentNameFromType(blockedValue.type) || "",
                            owner: blockedValue._owner
                        };
                        erroredComponent.debugStack = blockedValue._debugStack;
                        supportsCreateTask && (erroredComponent.debugTask = blockedValue._debugTask);
                        (chunk._debugInfo || (chunk._debugInfo = [])).push(erroredComponent);
                    }
                    triggerErrorOnChunk(chunk, error);
                }
            }
        });
        return null;
    }
    function getOutlinedModel(response, reference, parentObject, key, map) {
        reference = reference.split(":");
        var id = parseInt(reference[0], 16);
        id = getChunk(response, id);
        switch(id.status){
            case "resolved_model":
                initializeModelChunk(id);
                break;
            case "resolved_module":
                initializeModuleChunk(id);
        }
        switch(id.status){
            case "fulfilled":
                for(var value = id.value, i = 1; i < reference.length; i++){
                    for(; value.$$typeof === REACT_LAZY_TYPE;)if (value = value._payload, "fulfilled" === value.status) value = value.value;
                    else return waitForReference(value, parentObject, key, response, map, reference.slice(i - 1));
                    value = value[reference[i]];
                }
                response = map(response, value, parentObject, key);
                id._debugInfo && ("object" !== typeof response || null === response || !isArrayImpl(response) && "function" !== typeof response[ASYNC_ITERATOR] && response.$$typeof !== REACT_ELEMENT_TYPE || response._debugInfo || Object.defineProperty(response, "_debugInfo", {
                    configurable: !1,
                    enumerable: !1,
                    writable: !0,
                    value: id._debugInfo
                }));
                return response;
            case "pending":
            case "blocked":
                return waitForReference(id, parentObject, key, response, map, reference);
            default:
                return initializingHandler ? (initializingHandler.errored = !0, initializingHandler.value = id.reason) : initializingHandler = {
                    parent: null,
                    chunk: null,
                    value: id.reason,
                    deps: 0,
                    errored: !0
                }, null;
        }
    }
    function createMap(response, model) {
        return new Map(model);
    }
    function createSet(response, model) {
        return new Set(model);
    }
    function createBlob(response, model) {
        return new Blob(model.slice(1), {
            type: model[0]
        });
    }
    function createFormData(response, model) {
        response = new FormData();
        for(var i = 0; i < model.length; i++)response.append(model[i][0], model[i][1]);
        return response;
    }
    function extractIterator(response, model) {
        return model[Symbol.iterator]();
    }
    function createModel(response, model) {
        return model;
    }
    function parseModelString(response, parentObject, key, value) {
        if ("$" === value[0]) {
            if ("$" === value) return null !== initializingHandler && "0" === key && (initializingHandler = {
                parent: initializingHandler,
                chunk: null,
                value: null,
                deps: 0,
                errored: !1
            }), REACT_ELEMENT_TYPE;
            switch(value[1]){
                case "$":
                    return value.slice(1);
                case "L":
                    return parentObject = parseInt(value.slice(2), 16), response = getChunk(response, parentObject), createLazyChunkWrapper(response);
                case "@":
                    if (2 === value.length) return new Promise(function() {});
                    parentObject = parseInt(value.slice(2), 16);
                    return getChunk(response, parentObject);
                case "S":
                    return Symbol.for(value.slice(2));
                case "F":
                    return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, loadServerReference);
                case "T":
                    parentObject = "$" + value.slice(2);
                    response = response._tempRefs;
                    if (null == response) throw Error("Missing a temporary reference set but the RSC response returned a temporary reference. Pass a temporaryReference option with the set that was used with the reply.");
                    return response.get(parentObject);
                case "Q":
                    return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, createMap);
                case "W":
                    return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, createSet);
                case "B":
                    return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, createBlob);
                case "K":
                    return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, createFormData);
                case "Z":
                    return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, resolveErrorDev);
                case "i":
                    return value = value.slice(2), getOutlinedModel(response, value, parentObject, key, extractIterator);
                case "I":
                    return Infinity;
                case "-":
                    return "$-0" === value ? -0 : -Infinity;
                case "N":
                    return NaN;
                case "u":
                    return;
                case "D":
                    return new Date(Date.parse(value.slice(2)));
                case "n":
                    return BigInt(value.slice(2));
                case "E":
                    try {
                        return (0, eval)(value.slice(2));
                    } catch (x) {
                        return function() {};
                    }
                case "Y":
                    return Object.defineProperty(parentObject, key, {
                        get: function() {
                            return "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.";
                        },
                        enumerable: !0,
                        configurable: !1
                    }), null;
                default:
                    return value = value.slice(1), getOutlinedModel(response, value, parentObject, key, createModel);
            }
        }
        return value;
    }
    function missingCall() {
        throw Error('Trying to call a function from "use server" but the callServer option was not implemented in your router runtime.');
    }
    function ResponseInstance(bundlerConfig, serverReferenceConfig, moduleLoading, callServer, encodeFormAction, nonce, temporaryReferences, findSourceMapURL, replayConsole, environmentName) {
        var chunks = new Map();
        this._bundlerConfig = bundlerConfig;
        this._serverReferenceConfig = serverReferenceConfig;
        this._moduleLoading = moduleLoading;
        this._callServer = void 0 !== callServer ? callServer : missingCall;
        this._encodeFormAction = encodeFormAction;
        this._nonce = nonce;
        this._chunks = chunks;
        this._stringDecoder = new TextDecoder();
        this._fromJSON = null;
        this._rowLength = this._rowTag = this._rowID = this._rowState = 0;
        this._buffer = [];
        this._closed = !1;
        this._closedReason = null;
        this._tempRefs = temporaryReferences;
        this._debugRootOwner = bundlerConfig = void 0 === ReactSharedInteralsServer || null === ReactSharedInteralsServer.A ? null : ReactSharedInteralsServer.A.getOwner();
        this._debugRootStack = null !== bundlerConfig ? Error("react-stack-top-frame") : null;
        environmentName = void 0 === environmentName ? "Server" : environmentName;
        supportsCreateTask && (this._debugRootTask = console.createTask('"use ' + environmentName.toLowerCase() + '"'));
        this._debugFindSourceMapURL = findSourceMapURL;
        this._replayConsole = replayConsole;
        this._rootEnvironmentName = environmentName;
        this._fromJSON = createFromJSONCallback(this);
    }
    function resolveModel(response, id, model) {
        var chunks = response._chunks, chunk = chunks.get(id);
        chunk ? resolveModelChunk(chunk, model) : chunks.set(id, new ReactPromise("resolved_model", model, null, response));
    }
    function resolveText(response, id, text) {
        var chunks = response._chunks, chunk = chunks.get(id);
        chunk && "pending" !== chunk.status ? chunk.reason.enqueueValue(text) : chunks.set(id, new ReactPromise("fulfilled", text, null, response));
    }
    function resolveBuffer(response, id, buffer) {
        var chunks = response._chunks, chunk = chunks.get(id);
        chunk && "pending" !== chunk.status ? chunk.reason.enqueueValue(buffer) : chunks.set(id, new ReactPromise("fulfilled", buffer, null, response));
    }
    function resolveModule(response, id, model) {
        var chunks = response._chunks, chunk = chunks.get(id), clientReferenceMetadata = JSON.parse(model, response._fromJSON);
        prepareDestinationWithChunks(response._moduleLoading, clientReferenceMetadata[2], response._nonce);
        if (model = preloadModule(clientReferenceMetadata)) {
            if (chunk) {
                var blockedChunk = chunk;
                blockedChunk.status = "blocked";
            } else blockedChunk = new ReactPromise("blocked", null, null, response), chunks.set(id, blockedChunk);
            model.then(function() {
                return resolveModuleChunk(blockedChunk, clientReferenceMetadata);
            }, function(error) {
                return triggerErrorOnChunk(blockedChunk, error);
            });
        } else chunk ? resolveModuleChunk(chunk, clientReferenceMetadata) : chunks.set(id, new ReactPromise("resolved_module", clientReferenceMetadata, null, response));
    }
    function resolveStream(response, id, stream, controller) {
        var chunks = response._chunks, chunk = chunks.get(id);
        chunk ? "pending" === chunk.status && (response = chunk.value, chunk.status = "fulfilled", chunk.value = stream, chunk.reason = controller, null !== response && wakeChunk(response, chunk.value)) : chunks.set(id, new ReactPromise("fulfilled", stream, controller, response));
    }
    function startReadableStream(response, id, type) {
        var controller = null;
        type = new ReadableStream({
            type: type,
            start: function(c) {
                controller = c;
            }
        });
        var previousBlockedChunk = null;
        resolveStream(response, id, type, {
            enqueueValue: function(value) {
                null === previousBlockedChunk ? controller.enqueue(value) : previousBlockedChunk.then(function() {
                    controller.enqueue(value);
                });
            },
            enqueueModel: function(json) {
                if (null === previousBlockedChunk) {
                    var chunk = new ReactPromise("resolved_model", json, null, response);
                    initializeModelChunk(chunk);
                    "fulfilled" === chunk.status ? controller.enqueue(chunk.value) : (chunk.then(function(v) {
                        return controller.enqueue(v);
                    }, function(e) {
                        return controller.error(e);
                    }), previousBlockedChunk = chunk);
                } else {
                    chunk = previousBlockedChunk;
                    var _chunk3 = createPendingChunk(response);
                    _chunk3.then(function(v) {
                        return controller.enqueue(v);
                    }, function(e) {
                        return controller.error(e);
                    });
                    previousBlockedChunk = _chunk3;
                    chunk.then(function() {
                        previousBlockedChunk === _chunk3 && (previousBlockedChunk = null);
                        resolveModelChunk(_chunk3, json);
                    });
                }
            },
            close: function() {
                if (null === previousBlockedChunk) controller.close();
                else {
                    var blockedChunk = previousBlockedChunk;
                    previousBlockedChunk = null;
                    blockedChunk.then(function() {
                        return controller.close();
                    });
                }
            },
            error: function(error) {
                if (null === previousBlockedChunk) controller.error(error);
                else {
                    var blockedChunk = previousBlockedChunk;
                    previousBlockedChunk = null;
                    blockedChunk.then(function() {
                        return controller.error(error);
                    });
                }
            }
        });
    }
    function asyncIterator() {
        return this;
    }
    function createIterator(next) {
        next = {
            next: next
        };
        next[ASYNC_ITERATOR] = asyncIterator;
        return next;
    }
    function startAsyncIterable(response, id, iterator) {
        var buffer = [], closed = !1, nextWriteIndex = 0, iterable = _defineProperty({}, ASYNC_ITERATOR, function() {
            var nextReadIndex = 0;
            return createIterator(function(arg) {
                if (void 0 !== arg) throw Error("Values cannot be passed to next() of AsyncIterables passed to Client Components.");
                if (nextReadIndex === buffer.length) {
                    if (closed) return new ReactPromise("fulfilled", {
                        done: !0,
                        value: void 0
                    }, null, response);
                    buffer[nextReadIndex] = createPendingChunk(response);
                }
                return buffer[nextReadIndex++];
            });
        });
        resolveStream(response, id, iterator ? iterable[ASYNC_ITERATOR]() : iterable, {
            enqueueValue: function(value) {
                if (nextWriteIndex === buffer.length) buffer[nextWriteIndex] = new ReactPromise("fulfilled", {
                    done: !1,
                    value: value
                }, null, response);
                else {
                    var chunk = buffer[nextWriteIndex], resolveListeners = chunk.value, rejectListeners = chunk.reason;
                    chunk.status = "fulfilled";
                    chunk.value = {
                        done: !1,
                        value: value
                    };
                    null !== resolveListeners && wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners);
                }
                nextWriteIndex++;
            },
            enqueueModel: function(value) {
                nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !1) : resolveIteratorResultChunk(buffer[nextWriteIndex], value, !1);
                nextWriteIndex++;
            },
            close: function(value) {
                closed = !0;
                nextWriteIndex === buffer.length ? buffer[nextWriteIndex] = createResolvedIteratorResultChunk(response, value, !0) : resolveIteratorResultChunk(buffer[nextWriteIndex], value, !0);
                for(nextWriteIndex++; nextWriteIndex < buffer.length;)resolveIteratorResultChunk(buffer[nextWriteIndex++], '"$undefined"', !0);
            },
            error: function(error) {
                closed = !0;
                for(nextWriteIndex === buffer.length && (buffer[nextWriteIndex] = createPendingChunk(response)); nextWriteIndex < buffer.length;)triggerErrorOnChunk(buffer[nextWriteIndex++], error);
            }
        });
    }
    function stopStream(response, id, row) {
        (response = response._chunks.get(id)) && "fulfilled" === response.status && response.reason.close("" === row ? '"$undefined"' : row);
    }
    function resolveErrorDev(response, errorInfo) {
        var name = errorInfo.name, env = errorInfo.env;
        errorInfo = buildFakeCallStack(response, errorInfo.stack, env, Error.bind(null, errorInfo.message || "An error occurred in the Server Components render but no message was provided"));
        response = getRootTask(response, env);
        response = null != response ? response.run(errorInfo) : errorInfo();
        response.name = name;
        response.environmentName = env;
        return response;
    }
    function resolveHint(response, code, model) {
        response = JSON.parse(model, response._fromJSON);
        model = ReactDOMSharedInternals.d;
        switch(code){
            case "D":
                model.D(response);
                break;
            case "C":
                "string" === typeof response ? model.C(response) : model.C(response[0], response[1]);
                break;
            case "L":
                code = response[0];
                var as = response[1];
                3 === response.length ? model.L(code, as, response[2]) : model.L(code, as);
                break;
            case "m":
                "string" === typeof response ? model.m(response) : model.m(response[0], response[1]);
                break;
            case "X":
                "string" === typeof response ? model.X(response) : model.X(response[0], response[1]);
                break;
            case "S":
                "string" === typeof response ? model.S(response) : model.S(response[0], 0 === response[1] ? void 0 : response[1], 3 === response.length ? response[2] : void 0);
                break;
            case "M":
                "string" === typeof response ? model.M(response) : model.M(response[0], response[1]);
        }
    }
    function createFakeFunction(name, filename, sourceMap, line, col, environmentName) {
        name || (name = "<anonymous>");
        var encodedName = JSON.stringify(name);
        1 >= line ? (line = encodedName.length + 7, col = "({" + encodedName + ":_=>" + " ".repeat(col < line ? 0 : col - line) + "_()})\n/* This module was rendered by a Server Component. Turn on Source Maps to see the server source. */") : col = "/* This module was rendered by a Server Component. Turn on Source Maps to see the server source. */" + "\n".repeat(line - 2) + "({" + encodedName + ":_=>\n" + " ".repeat(1 > col ? 0 : col - 1) + "_()})";
        filename.startsWith("/") && (filename = "file://" + filename);
        sourceMap ? (col += "\n//# sourceURL=rsc://React/" + encodeURIComponent(environmentName) + "/" + encodeURI(filename) + "?" + fakeFunctionIdx++, col += "\n//# sourceMappingURL=" + sourceMap) : col = filename ? col + ("\n//# sourceURL=" + encodeURI(filename)) : col + "\n//# sourceURL=<anonymous>";
        try {
            var fn = (0, eval)(col)[name];
        } catch (x) {
            fn = function(_) {
                return _();
            };
        }
        return fn;
    }
    function buildFakeCallStack(response, stack, environmentName, innerCall) {
        for(var i = 0; i < stack.length; i++){
            var frame = stack[i], frameKey = frame.join("-") + "-" + environmentName, fn = fakeFunctionCache.get(frameKey);
            if (void 0 === fn) {
                fn = frame[0];
                var filename = frame[1], line = frame[2];
                frame = frame[3];
                var findSourceMapURL = response._debugFindSourceMapURL;
                findSourceMapURL = findSourceMapURL ? findSourceMapURL(filename, environmentName) : null;
                fn = createFakeFunction(fn, filename, findSourceMapURL, line, frame, environmentName);
                fakeFunctionCache.set(frameKey, fn);
            }
            innerCall = fn.bind(null, innerCall);
        }
        return innerCall;
    }
    function getRootTask(response, childEnvironmentName) {
        var rootTask = response._debugRootTask;
        return rootTask ? response._rootEnvironmentName !== childEnvironmentName ? (response = console.createTask.bind(console, '"use ' + childEnvironmentName.toLowerCase() + '"'), rootTask.run(response)) : rootTask : null;
    }
    function initializeFakeTask(response, debugInfo, childEnvironmentName) {
        if (!supportsCreateTask || null == debugInfo.stack) return null;
        var stack = debugInfo.stack, env = null == debugInfo.env ? response._rootEnvironmentName : debugInfo.env;
        if (env !== childEnvironmentName) return debugInfo = null == debugInfo.owner ? null : initializeFakeTask(response, debugInfo.owner, env), buildFakeTask(response, debugInfo, stack, '"use ' + childEnvironmentName.toLowerCase() + '"', env);
        childEnvironmentName = debugInfo.debugTask;
        if (void 0 !== childEnvironmentName) return childEnvironmentName;
        childEnvironmentName = null == debugInfo.owner ? null : initializeFakeTask(response, debugInfo.owner, env);
        return debugInfo.debugTask = buildFakeTask(response, childEnvironmentName, stack, "<" + (debugInfo.name || "...") + ">", env);
    }
    function buildFakeTask(response, ownerTask, stack, taskName, env) {
        taskName = console.createTask.bind(console, taskName);
        stack = buildFakeCallStack(response, stack, env, taskName);
        return null === ownerTask ? (response = getRootTask(response, env), null != response ? response.run(stack) : stack()) : ownerTask.run(stack);
    }
    function fakeJSXCallSite() {
        return Error("react-stack-top-frame");
    }
    function initializeFakeStack(response, debugInfo) {
        void 0 === debugInfo.debugStack && (null != debugInfo.stack && (debugInfo.debugStack = createFakeJSXCallStackInDEV(response, debugInfo.stack, null == debugInfo.env ? "" : debugInfo.env)), null != debugInfo.owner && initializeFakeStack(response, debugInfo.owner));
    }
    function resolveDebugInfo(response, id, debugInfo) {
        var env = void 0 === debugInfo.env ? response._rootEnvironmentName : debugInfo.env;
        void 0 !== debugInfo.stack && initializeFakeTask(response, debugInfo, env);
        null === debugInfo.owner && null != response._debugRootOwner ? (debugInfo.owner = response._debugRootOwner, debugInfo.debugStack = response._debugRootStack) : void 0 !== debugInfo.stack && initializeFakeStack(response, debugInfo);
        response = getChunk(response, id);
        (response._debugInfo || (response._debugInfo = [])).push(debugInfo);
    }
    function getCurrentStackInDEV() {
        var owner = currentOwnerInDEV;
        if (null === owner) return "";
        try {
            var info = "";
            if (owner.owner || "string" !== typeof owner.name) {
                for(; owner;){
                    var ownerStack = owner.debugStack;
                    if (null != ownerStack) {
                        if (owner = owner.owner) {
                            var JSCompiler_temp_const = info;
                            var error = ownerStack, prevPrepareStackTrace = Error.prepareStackTrace;
                            Error.prepareStackTrace = prepareStackTrace;
                            var stack = error.stack;
                            Error.prepareStackTrace = prevPrepareStackTrace;
                            stack.startsWith("Error: react-stack-top-frame\n") && (stack = stack.slice(29));
                            var idx = stack.indexOf("\n");
                            -1 !== idx && (stack = stack.slice(idx + 1));
                            idx = stack.indexOf("react_stack_bottom_frame");
                            -1 !== idx && (idx = stack.lastIndexOf("\n", idx));
                            var JSCompiler_inline_result = -1 !== idx ? stack = stack.slice(0, idx) : "";
                            info = JSCompiler_temp_const + ("\n" + JSCompiler_inline_result);
                        }
                    } else break;
                }
                var JSCompiler_inline_result$jscomp$0 = info;
            } else {
                JSCompiler_temp_const = owner.name;
                if (void 0 === prefix) try {
                    throw Error();
                } catch (x) {
                    prefix = (error = x.stack.trim().match(/\n( *(at )?)/)) && error[1] || "", suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
                }
                JSCompiler_inline_result$jscomp$0 = "\n" + prefix + JSCompiler_temp_const + suffix;
            }
        } catch (x) {
            JSCompiler_inline_result$jscomp$0 = "\nError generating stack: " + x.message + "\n" + x.stack;
        }
        return JSCompiler_inline_result$jscomp$0;
    }
    function resolveConsoleEntry(response, value) {
        if (response._replayConsole) {
            var payload = JSON.parse(value, response._fromJSON);
            value = payload[0];
            var stackTrace = payload[1], owner = payload[2], env = payload[3];
            payload = payload.slice(4);
            replayConsoleWithCallStackInDEV(response, value, stackTrace, owner, env, payload);
        }
    }
    function mergeBuffer(buffer, lastChunk) {
        for(var l = buffer.length, byteLength = lastChunk.length, i = 0; i < l; i++)byteLength += buffer[i].byteLength;
        byteLength = new Uint8Array(byteLength);
        for(var _i2 = i = 0; _i2 < l; _i2++){
            var chunk = buffer[_i2];
            byteLength.set(chunk, i);
            i += chunk.byteLength;
        }
        byteLength.set(lastChunk, i);
        return byteLength;
    }
    function resolveTypedArray(response, id, buffer, lastChunk, constructor, bytesPerElement) {
        buffer = 0 === buffer.length && 0 === lastChunk.byteOffset % bytesPerElement ? lastChunk : mergeBuffer(buffer, lastChunk);
        constructor = new constructor(buffer.buffer, buffer.byteOffset, buffer.byteLength / bytesPerElement);
        resolveBuffer(response, id, constructor);
    }
    function processFullBinaryRow(response, id, tag, buffer, chunk) {
        switch(tag){
            case 65:
                resolveBuffer(response, id, mergeBuffer(buffer, chunk).buffer);
                return;
            case 79:
                resolveTypedArray(response, id, buffer, chunk, Int8Array, 1);
                return;
            case 111:
                resolveBuffer(response, id, 0 === buffer.length ? chunk : mergeBuffer(buffer, chunk));
                return;
            case 85:
                resolveTypedArray(response, id, buffer, chunk, Uint8ClampedArray, 1);
                return;
            case 83:
                resolveTypedArray(response, id, buffer, chunk, Int16Array, 2);
                return;
            case 115:
                resolveTypedArray(response, id, buffer, chunk, Uint16Array, 2);
                return;
            case 76:
                resolveTypedArray(response, id, buffer, chunk, Int32Array, 4);
                return;
            case 108:
                resolveTypedArray(response, id, buffer, chunk, Uint32Array, 4);
                return;
            case 71:
                resolveTypedArray(response, id, buffer, chunk, Float32Array, 4);
                return;
            case 103:
                resolveTypedArray(response, id, buffer, chunk, Float64Array, 8);
                return;
            case 77:
                resolveTypedArray(response, id, buffer, chunk, BigInt64Array, 8);
                return;
            case 109:
                resolveTypedArray(response, id, buffer, chunk, BigUint64Array, 8);
                return;
            case 86:
                resolveTypedArray(response, id, buffer, chunk, DataView, 1);
                return;
        }
        for(var stringDecoder = response._stringDecoder, row = "", i = 0; i < buffer.length; i++)row += stringDecoder.decode(buffer[i], decoderOptions);
        row += stringDecoder.decode(chunk);
        processFullStringRow(response, id, tag, row);
    }
    function processFullStringRow(response, id, tag, row) {
        switch(tag){
            case 73:
                resolveModule(response, id, row);
                break;
            case 72:
                resolveHint(response, row[0], row.slice(1));
                break;
            case 69:
                row = JSON.parse(row);
                tag = resolveErrorDev(response, row);
                tag.digest = row.digest;
                row = response._chunks;
                var chunk = row.get(id);
                chunk ? triggerErrorOnChunk(chunk, tag) : row.set(id, new ReactPromise("rejected", null, tag, response));
                break;
            case 84:
                resolveText(response, id, row);
                break;
            case 78:
            case 68:
                tag = new ReactPromise("resolved_model", row, null, response);
                initializeModelChunk(tag);
                "fulfilled" === tag.status ? resolveDebugInfo(response, id, tag.value) : tag.then(function(v) {
                    return resolveDebugInfo(response, id, v);
                }, function() {});
                break;
            case 87:
                resolveConsoleEntry(response, row);
                break;
            case 82:
                startReadableStream(response, id, void 0);
                break;
            case 114:
                startReadableStream(response, id, "bytes");
                break;
            case 88:
                startAsyncIterable(response, id, !1);
                break;
            case 120:
                startAsyncIterable(response, id, !0);
                break;
            case 67:
                stopStream(response, id, row);
                break;
            default:
                resolveModel(response, id, row);
        }
    }
    function createFromJSONCallback(response) {
        return function(key, value) {
            if ("string" === typeof value) return parseModelString(response, this, key, value);
            if ("object" === typeof value && null !== value) {
                if (value[0] === REACT_ELEMENT_TYPE) {
                    var type = value[1];
                    key = value[4];
                    var stack = value[5], validated = value[6];
                    value = {
                        $$typeof: REACT_ELEMENT_TYPE,
                        type: type,
                        key: value[2],
                        props: value[3],
                        _owner: null === key ? response._debugRootOwner : key
                    };
                    Object.defineProperty(value, "ref", {
                        enumerable: !1,
                        get: nullRefGetter
                    });
                    value._store = {};
                    Object.defineProperty(value._store, "validated", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !0,
                        value: validated
                    });
                    Object.defineProperty(value, "_debugInfo", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !0,
                        value: null
                    });
                    validated = response._rootEnvironmentName;
                    null !== key && null != key.env && (validated = key.env);
                    var normalizedStackTrace = null;
                    null === key && null != response._debugRootStack ? normalizedStackTrace = response._debugRootStack : null !== stack && (normalizedStackTrace = createFakeJSXCallStackInDEV(response, stack, validated));
                    Object.defineProperty(value, "_debugStack", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !0,
                        value: normalizedStackTrace
                    });
                    normalizedStackTrace = null;
                    supportsCreateTask && null !== stack && (type = console.createTask.bind(console, getTaskName(type)), stack = buildFakeCallStack(response, stack, validated, type), type = null === key ? null : initializeFakeTask(response, key, validated), null === type ? (type = response._debugRootTask, normalizedStackTrace = null != type ? type.run(stack) : stack()) : normalizedStackTrace = type.run(stack));
                    Object.defineProperty(value, "_debugTask", {
                        configurable: !1,
                        enumerable: !1,
                        writable: !0,
                        value: normalizedStackTrace
                    });
                    null !== key && initializeFakeStack(response, key);
                    null !== initializingHandler ? (stack = initializingHandler, initializingHandler = stack.parent, stack.errored ? (key = new ReactPromise("rejected", null, stack.value, response), stack = {
                        name: getComponentNameFromType(value.type) || "",
                        owner: value._owner
                    }, stack.debugStack = value._debugStack, supportsCreateTask && (stack.debugTask = value._debugTask), key._debugInfo = [
                        stack
                    ], value = createLazyChunkWrapper(key)) : 0 < stack.deps && (key = new ReactPromise("blocked", null, null, response), stack.value = value, stack.chunk = key, value = Object.freeze.bind(Object, value.props), key.then(value, value), value = createLazyChunkWrapper(key))) : Object.freeze(value.props);
                }
                return value;
            }
            return value;
        };
    }
    function findSourceMapURL(filename, environmentName) {
        var devServer = module.bundle.devServer;
        if (null != devServer) {
            var qs = new URLSearchParams();
            qs.set("filename", filename);
            qs.set("env", environmentName);
            return devServer + "/__parcel_source_map?" + qs.toString();
        }
        return null;
    }
    function noServerCall() {
        throw Error("Server Functions cannot be called during initial render. This would create a fetch waterfall. Try to use a Server Component to pass data to Client Components instead.");
    }
    function createResponseFromOptions(options) {
        return new ResponseInstance(null, null, null, noServerCall, options ? options.encodeFormAction : void 0, options && "string" === typeof options.nonce ? options.nonce : void 0, options && options.temporaryReferences ? options.temporaryReferences : void 0, findSourceMapURL, options ? !0 === options.replayConsoleLogs : !1, options && options.environmentName ? options.environmentName : void 0);
    }
    function startReadingFromStream(response, stream) {
        function progress(_ref) {
            var value = _ref.value;
            if (_ref.done) reportGlobalError(response, Error("Connection closed."));
            else {
                var i = 0, rowState = response._rowState;
                _ref = response._rowID;
                for(var rowTag = response._rowTag, rowLength = response._rowLength, buffer = response._buffer, chunkLength = value.length; i < chunkLength;){
                    var lastIdx = -1;
                    switch(rowState){
                        case 0:
                            lastIdx = value[i++];
                            58 === lastIdx ? rowState = 1 : _ref = _ref << 4 | (96 < lastIdx ? lastIdx - 87 : lastIdx - 48);
                            continue;
                        case 1:
                            rowState = value[i];
                            84 === rowState || 65 === rowState || 79 === rowState || 111 === rowState || 85 === rowState || 83 === rowState || 115 === rowState || 76 === rowState || 108 === rowState || 71 === rowState || 103 === rowState || 77 === rowState || 109 === rowState || 86 === rowState ? (rowTag = rowState, rowState = 2, i++) : 64 < rowState && 91 > rowState || 35 === rowState || 114 === rowState || 120 === rowState ? (rowTag = rowState, rowState = 3, i++) : (rowTag = 0, rowState = 3);
                            continue;
                        case 2:
                            lastIdx = value[i++];
                            44 === lastIdx ? rowState = 4 : rowLength = rowLength << 4 | (96 < lastIdx ? lastIdx - 87 : lastIdx - 48);
                            continue;
                        case 3:
                            lastIdx = value.indexOf(10, i);
                            break;
                        case 4:
                            lastIdx = i + rowLength, lastIdx > value.length && (lastIdx = -1);
                    }
                    var offset = value.byteOffset + i;
                    if (-1 < lastIdx) rowLength = new Uint8Array(value.buffer, offset, lastIdx - i), processFullBinaryRow(response, _ref, rowTag, buffer, rowLength), i = lastIdx, 3 === rowState && i++, rowLength = _ref = rowTag = rowState = 0, buffer.length = 0;
                    else {
                        value = new Uint8Array(value.buffer, offset, value.byteLength - i);
                        buffer.push(value);
                        rowLength -= value.byteLength;
                        break;
                    }
                }
                response._rowState = rowState;
                response._rowID = _ref;
                response._rowTag = rowTag;
                response._rowLength = rowLength;
                return reader.read().then(progress).catch(error);
            }
        }
        function error(e) {
            reportGlobalError(response, e);
        }
        var reader = stream.getReader();
        reader.read().then(progress).catch(error);
    }
    var ReactDOM = require("54ffcdcaeedc217c"), React = require("31191879e9fd101a"), decoderOptions = {
        stream: !0
    }, bind$1 = Function.prototype.bind, ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, ASYNC_ITERATOR = Symbol.asyncIterator, isArrayImpl = Array.isArray, getPrototypeOf = Object.getPrototypeOf, jsxPropsParents = new WeakMap(), jsxChildrenParents = new WeakMap(), CLIENT_REFERENCE_TAG = Symbol.for("react.client.reference"), ObjectPrototype = Object.prototype, knownServerReferences = new WeakMap(), boundCache = new WeakMap(), fakeServerFunctionIdx = 0, FunctionBind = Function.prototype.bind, ArraySlice = Array.prototype.slice, v8FrameRegExp = /^ {3} at (?:(.+) \((.+):(\d+):(\d+)\)|(?:async )?(.+):(\d+):(\d+))$/, jscSpiderMonkeyFrameRegExp = /(?:(.*)@)?(.*):(\d+):(\d+)/, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), prefix, suffix;
    new ("function" === typeof WeakMap ? WeakMap : Map)();
    var ReactSharedInteralsServer = React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE || ReactSharedInteralsServer;
    ReactPromise.prototype = Object.create(Promise.prototype);
    ReactPromise.prototype.then = function(resolve, reject) {
        switch(this.status){
            case "resolved_model":
                initializeModelChunk(this);
                break;
            case "resolved_module":
                initializeModuleChunk(this);
        }
        switch(this.status){
            case "fulfilled":
                resolve(this.value);
                break;
            case "pending":
            case "blocked":
                resolve && (null === this.value && (this.value = []), this.value.push(resolve));
                reject && (null === this.reason && (this.reason = []), this.reason.push(reject));
                break;
            default:
                reject && reject(this.reason);
        }
    };
    var initializingHandler = null, supportsCreateTask = !!console.createTask, fakeFunctionCache = new Map(), fakeFunctionIdx = 0, createFakeJSXCallStack = {
        react_stack_bottom_frame: function(response, stack, environmentName) {
            return buildFakeCallStack(response, stack, environmentName, fakeJSXCallSite)();
        }
    }, createFakeJSXCallStackInDEV = createFakeJSXCallStack.react_stack_bottom_frame.bind(createFakeJSXCallStack), currentOwnerInDEV = null, replayConsoleWithCallStack = {
        react_stack_bottom_frame: function(response, methodName, stackTrace, owner, env, args) {
            var prevStack = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = getCurrentStackInDEV;
            currentOwnerInDEV = null === owner ? response._debugRootOwner : owner;
            try {
                a: {
                    var offset = 0;
                    switch(methodName){
                        case "dir":
                        case "dirxml":
                        case "groupEnd":
                        case "table":
                            var JSCompiler_inline_result = bind$1.apply(console[methodName], [
                                console
                            ].concat(args));
                            break a;
                        case "assert":
                            offset = 1;
                    }
                    var newArgs = args.slice(0);
                    "string" === typeof newArgs[offset] ? newArgs.splice(offset, 1, "\u001b[0m\u001b[7m%c%s\u001b[0m%c " + newArgs[offset], "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + env + " ", "") : newArgs.splice(offset, 0, "\u001b[0m\u001b[7m%c%s\u001b[0m%c ", "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + env + " ", "");
                    newArgs.unshift(console);
                    JSCompiler_inline_result = bind$1.apply(console[methodName], newArgs);
                }
                var callStack = buildFakeCallStack(response, stackTrace, env, JSCompiler_inline_result);
                if (null != owner) {
                    var task = initializeFakeTask(response, owner, env);
                    initializeFakeStack(response, owner);
                    if (null !== task) {
                        task.run(callStack);
                        return;
                    }
                }
                var rootTask = getRootTask(response, env);
                null != rootTask ? rootTask.run(callStack) : callStack();
            } finally{
                currentOwnerInDEV = null, ReactSharedInternals.getCurrentStack = prevStack;
            }
        }
    }, replayConsoleWithCallStackInDEV = replayConsoleWithCallStack.react_stack_bottom_frame.bind(replayConsoleWithCallStack);
    exports.createFromFetch = function(promiseForResponse, options) {
        var response = createResponseFromOptions(options);
        promiseForResponse.then(function(r) {
            startReadingFromStream(response, r.body);
        }, function(e) {
            reportGlobalError(response, e);
        });
        return getChunk(response, 0);
    };
    exports.createFromReadableStream = function(stream, options) {
        options = createResponseFromOptions(options);
        startReadingFromStream(options, stream);
        return getChunk(options, 0);
    };
    exports.createServerReference = function(id, exportName) {
        return createServerReference$1(id + "#" + exportName, noServerCall, void 0, findSourceMapURL, exportName);
    };
    exports.createTemporaryReferenceSet = function() {
        return new Map();
    };
    exports.encodeReply = function(value, options) {
        return new Promise(function(resolve, reject) {
            var abort = processReply(value, "", options && options.temporaryReferences ? options.temporaryReferences : void 0, resolve, reject);
            if (options && options.signal) {
                var signal = options.signal;
                if (signal.aborted) abort(signal.reason);
                else {
                    var listener = function() {
                        abort(signal.reason);
                        signal.removeEventListener("abort", listener);
                    };
                    signal.addEventListener("abort", listener);
                }
            }
        });
    };
    exports.registerServerReference = function(reference, id, encodeFormAction) {
        registerBoundServerReference(reference, id, null, encodeFormAction);
        return reference;
    };
})();

},{"54ffcdcaeedc217c":"btIan","31191879e9fd101a":"h4Eti"}],"lv1pT":[function(require,module,exports,__globalThis) {
'use strict';
var b;
var l;
b = require("87c9d0eb2ef6a2a0");
l = require("d3c7efca83cba21b");
exports.version = b.version;
exports.renderToReadableStream = b.renderToReadableStream;
exports.renderToString = l.renderToString;
exports.renderToStaticMarkup = l.renderToStaticMarkup;
if (b.resume) exports.resume = b.resume;

},{"87c9d0eb2ef6a2a0":"1bmbO","d3c7efca83cba21b":"aKl0w"}],"1bmbO":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react-dom-server.edge.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /*


 JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)

 Copyright (c) 2011 Gary Court
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/ "use strict";
(function() {
    function styleReplacer(match, prefix, s, suffix) {
        return "" + prefix + ("s" === s ? "\\73 " : "\\53 ") + suffix;
    }
    function scriptReplacer(match, prefix, s, suffix) {
        return "" + prefix + ("s" === s ? "\\u0073" : "\\u0053") + suffix;
    }
    function objectName(object) {
        return Object.prototype.toString.call(object).replace(/^\[object (.*)\]$/, function(m, p0) {
            return p0;
        });
    }
    function describeKeyForErrorMessage(key) {
        var encodedKey = JSON.stringify(key);
        return '"' + key + '"' === encodedKey ? key : encodedKey;
    }
    function describeValueForErrorMessage(value) {
        switch(typeof value){
            case "string":
                return JSON.stringify(10 >= value.length ? value : value.slice(0, 10) + "...");
            case "object":
                if (isArrayImpl(value)) return "[...]";
                if (null !== value && value.$$typeof === CLIENT_REFERENCE_TAG) return "client";
                value = objectName(value);
                return "Object" === value ? "{...}" : value;
            case "function":
                return value.$$typeof === CLIENT_REFERENCE_TAG ? "client" : (value = value.displayName || value.name) ? "function " + value : "function";
            default:
                return String(value);
        }
    }
    function describeElementType(type) {
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeElementType(type.render);
            case REACT_MEMO_TYPE:
                return describeElementType(type.type);
            case REACT_LAZY_TYPE:
                var payload = type._payload;
                type = type._init;
                try {
                    return describeElementType(type(payload));
                } catch (x) {}
        }
        return "";
    }
    function describeObjectForErrorMessage(objectOrArray, expandedName) {
        var objKind = objectName(objectOrArray);
        if ("Object" !== objKind && "Array" !== objKind) return objKind;
        var start = -1, length = 0;
        if (isArrayImpl(objectOrArray)) {
            if (jsxChildrenParents.has(objectOrArray)) {
                var type = jsxChildrenParents.get(objectOrArray);
                objKind = "<" + describeElementType(type) + ">";
                for(var i = 0; i < objectOrArray.length; i++){
                    var value = objectOrArray[i];
                    value = "string" === typeof value ? value : "object" === typeof value && null !== value ? "{" + describeObjectForErrorMessage(value) + "}" : "{" + describeValueForErrorMessage(value) + "}";
                    "" + i === expandedName ? (start = objKind.length, length = value.length, objKind += value) : objKind = 15 > value.length && 40 > objKind.length + value.length ? objKind + value : objKind + "{...}";
                }
                objKind += "</" + describeElementType(type) + ">";
            } else {
                objKind = "[";
                for(type = 0; type < objectOrArray.length; type++)0 < type && (objKind += ", "), i = objectOrArray[type], i = "object" === typeof i && null !== i ? describeObjectForErrorMessage(i) : describeValueForErrorMessage(i), "" + type === expandedName ? (start = objKind.length, length = i.length, objKind += i) : objKind = 10 > i.length && 40 > objKind.length + i.length ? objKind + i : objKind + "...";
                objKind += "]";
            }
        } else if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE) objKind = "<" + describeElementType(objectOrArray.type) + "/>";
        else {
            if (objectOrArray.$$typeof === CLIENT_REFERENCE_TAG) return "client";
            if (jsxPropsParents.has(objectOrArray)) {
                objKind = jsxPropsParents.get(objectOrArray);
                objKind = "<" + (describeElementType(objKind) || "...");
                type = Object.keys(objectOrArray);
                for(i = 0; i < type.length; i++){
                    objKind += " ";
                    value = type[i];
                    objKind += describeKeyForErrorMessage(value) + "=";
                    var _value2 = objectOrArray[value];
                    var _substr2 = value === expandedName && "object" === typeof _value2 && null !== _value2 ? describeObjectForErrorMessage(_value2) : describeValueForErrorMessage(_value2);
                    "string" !== typeof _value2 && (_substr2 = "{" + _substr2 + "}");
                    value === expandedName ? (start = objKind.length, length = _substr2.length, objKind += _substr2) : objKind = 10 > _substr2.length && 40 > objKind.length + _substr2.length ? objKind + _substr2 : objKind + "...";
                }
                objKind += ">";
            } else {
                objKind = "{";
                type = Object.keys(objectOrArray);
                for(i = 0; i < type.length; i++)0 < i && (objKind += ", "), value = type[i], objKind += describeKeyForErrorMessage(value) + ": ", _value2 = objectOrArray[value], _value2 = "object" === typeof _value2 && null !== _value2 ? describeObjectForErrorMessage(_value2) : describeValueForErrorMessage(_value2), value === expandedName ? (start = objKind.length, length = _value2.length, objKind += _value2) : objKind = 10 > _value2.length && 40 > objKind.length + _value2.length ? objKind + _value2 : objKind + "...";
                objKind += "}";
            }
        }
        return void 0 === expandedName ? objKind : -1 < start && 0 < length ? (objectOrArray = " ".repeat(start) + "^".repeat(length), "\n  " + objKind + "\n  " + objectOrArray) : "\n  " + objKind;
    }
    function murmurhash3_32_gc(key, seed) {
        var remainder = key.length & 3;
        var bytes = key.length - remainder;
        var h1 = seed;
        for(seed = 0; seed < bytes;){
            var k1 = key.charCodeAt(seed) & 255 | (key.charCodeAt(++seed) & 255) << 8 | (key.charCodeAt(++seed) & 255) << 16 | (key.charCodeAt(++seed) & 255) << 24;
            ++seed;
            k1 = 3432918353 * (k1 & 65535) + ((3432918353 * (k1 >>> 16) & 65535) << 16) & 4294967295;
            k1 = k1 << 15 | k1 >>> 17;
            k1 = 461845907 * (k1 & 65535) + ((461845907 * (k1 >>> 16) & 65535) << 16) & 4294967295;
            h1 ^= k1;
            h1 = h1 << 13 | h1 >>> 19;
            h1 = 5 * (h1 & 65535) + ((5 * (h1 >>> 16) & 65535) << 16) & 4294967295;
            h1 = (h1 & 65535) + 27492 + (((h1 >>> 16) + 58964 & 65535) << 16);
        }
        k1 = 0;
        switch(remainder){
            case 3:
                k1 ^= (key.charCodeAt(seed + 2) & 255) << 16;
            case 2:
                k1 ^= (key.charCodeAt(seed + 1) & 255) << 8;
            case 1:
                k1 ^= key.charCodeAt(seed) & 255, k1 = 3432918353 * (k1 & 65535) + ((3432918353 * (k1 >>> 16) & 65535) << 16) & 4294967295, k1 = k1 << 15 | k1 >>> 17, h1 ^= 461845907 * (k1 & 65535) + ((461845907 * (k1 >>> 16) & 65535) << 16) & 4294967295;
        }
        h1 ^= key.length;
        h1 ^= h1 >>> 16;
        h1 = 2246822507 * (h1 & 65535) + ((2246822507 * (h1 >>> 16) & 65535) << 16) & 4294967295;
        h1 ^= h1 >>> 13;
        h1 = 3266489909 * (h1 & 65535) + ((3266489909 * (h1 >>> 16) & 65535) << 16) & 4294967295;
        return (h1 ^ h1 >>> 16) >>> 0;
    }
    function handleErrorInNextTick(error) {
        setTimeout(function() {
            throw error;
        });
    }
    function writeChunk(destination, chunk) {
        if (0 !== chunk.byteLength) {
            if (2048 < chunk.byteLength) 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = new Uint8Array(2048), writtenBytes = 0), destination.enqueue(chunk);
            else {
                var allowableBytes = currentView.length - writtenBytes;
                allowableBytes < chunk.byteLength && (0 === allowableBytes ? destination.enqueue(currentView) : (currentView.set(chunk.subarray(0, allowableBytes), writtenBytes), destination.enqueue(currentView), chunk = chunk.subarray(allowableBytes)), currentView = new Uint8Array(2048), writtenBytes = 0);
                currentView.set(chunk, writtenBytes);
                writtenBytes += chunk.byteLength;
            }
        }
    }
    function writeChunkAndReturn(destination, chunk) {
        writeChunk(destination, chunk);
        return !0;
    }
    function completeWriting(destination) {
        currentView && 0 < writtenBytes && (destination.enqueue(new Uint8Array(currentView.buffer, 0, writtenBytes)), currentView = null, writtenBytes = 0);
    }
    function stringToChunk(content) {
        return textEncoder.encode(content);
    }
    function stringToPrecomputedChunk(content) {
        content = textEncoder.encode(content);
        2048 < content.byteLength && console.error("precomputed chunks must be smaller than the view size configured for this host. This is a bug in React.");
        return content;
    }
    function closeWithError(destination, error) {
        "function" === typeof destination.error ? destination.error(error) : destination.close();
    }
    function typeName(value) {
        return "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
    }
    function willCoercionThrow(value) {
        try {
            return testStringCoercion(value), !1;
        } catch (e) {
            return !0;
        }
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkAttributeStringCoercion(value, attributeName) {
        if (willCoercionThrow(value)) return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.", attributeName, typeName(value)), testStringCoercion(value);
    }
    function checkCSSPropertyStringCoercion(value, propName) {
        if (willCoercionThrow(value)) return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.", propName, typeName(value)), testStringCoercion(value);
    }
    function checkHtmlStringCoercion(value) {
        if (willCoercionThrow(value)) return console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.", typeName(value)), testStringCoercion(value);
    }
    function isAttributeNameSafe(attributeName) {
        if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) return !0;
        if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return !1;
        if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) return validatedAttributeNameCache[attributeName] = !0;
        illegalAttributeNameCache[attributeName] = !0;
        console.error("Invalid attribute name: `%s`", attributeName);
        return !1;
    }
    function checkControlledValueProps(tagName, props) {
        hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || null == props.value || ("select" === tagName ? console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`.") : console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."));
        props.onChange || props.readOnly || props.disabled || null == props.checked || console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function validateProperty$1(tagName, name) {
        if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) return !0;
        if (rARIACamel$1.test(name)) {
            tagName = "aria-" + name.slice(4).toLowerCase();
            tagName = ariaProperties.hasOwnProperty(tagName) ? tagName : null;
            if (null == tagName) return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name), warnedProperties$1[name] = !0;
            if (name !== tagName) return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, tagName), warnedProperties$1[name] = !0;
        }
        if (rARIA$1.test(name)) {
            tagName = name.toLowerCase();
            tagName = ariaProperties.hasOwnProperty(tagName) ? tagName : null;
            if (null == tagName) return warnedProperties$1[name] = !0, !1;
            name !== tagName && (console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, tagName), warnedProperties$1[name] = !0);
        }
        return !0;
    }
    function validateProperties$2(type, props) {
        var invalidProps = [], key;
        for(key in props)validateProperty$1(type, key) || invalidProps.push(key);
        props = invalidProps.map(function(prop) {
            return "`" + prop + "`";
        }).join(", ");
        1 === invalidProps.length ? console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", props, type) : 1 < invalidProps.length && console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", props, type);
    }
    function validateProperty(tagName, name, value, eventRegistry) {
        if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) return !0;
        var lowerCasedName = name.toLowerCase();
        if ("onfocusin" === lowerCasedName || "onfocusout" === lowerCasedName) return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), warnedProperties[name] = !0;
        if ("function" === typeof value && ("form" === tagName && "action" === name || "input" === tagName && "formAction" === name || "button" === tagName && "formAction" === name)) return !0;
        if (null != eventRegistry) {
            tagName = eventRegistry.possibleRegistrationNames;
            if (eventRegistry.registrationNameDependencies.hasOwnProperty(name)) return !0;
            eventRegistry = tagName.hasOwnProperty(lowerCasedName) ? tagName[lowerCasedName] : null;
            if (null != eventRegistry) return console.error("Invalid event handler property `%s`. Did you mean `%s`?", name, eventRegistry), warnedProperties[name] = !0;
            if (EVENT_NAME_REGEX.test(name)) return console.error("Unknown event handler property `%s`. It will be ignored.", name), warnedProperties[name] = !0;
        } else if (EVENT_NAME_REGEX.test(name)) return INVALID_EVENT_NAME_REGEX.test(name) && console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name), warnedProperties[name] = !0;
        if (rARIA.test(name) || rARIACamel.test(name)) return !0;
        if ("innerhtml" === lowerCasedName) return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), warnedProperties[name] = !0;
        if ("aria" === lowerCasedName) return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), warnedProperties[name] = !0;
        if ("is" === lowerCasedName && null !== value && void 0 !== value && "string" !== typeof value) return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value), warnedProperties[name] = !0;
        if ("number" === typeof value && isNaN(value)) return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name), warnedProperties[name] = !0;
        if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
            if (lowerCasedName = possibleStandardNames[lowerCasedName], lowerCasedName !== name) return console.error("Invalid DOM property `%s`. Did you mean `%s`?", name, lowerCasedName), warnedProperties[name] = !0;
        } else if (name !== lowerCasedName) return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName), warnedProperties[name] = !0;
        switch(name){
            case "dangerouslySetInnerHTML":
            case "children":
            case "style":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                return !0;
            case "innerText":
            case "textContent":
                return !0;
        }
        switch(typeof value){
            case "boolean":
                switch(name){
                    case "autoFocus":
                    case "checked":
                    case "multiple":
                    case "muted":
                    case "selected":
                    case "contentEditable":
                    case "spellCheck":
                    case "draggable":
                    case "value":
                    case "autoReverse":
                    case "externalResourcesRequired":
                    case "focusable":
                    case "preserveAlpha":
                    case "allowFullScreen":
                    case "async":
                    case "autoPlay":
                    case "controls":
                    case "default":
                    case "defer":
                    case "disabled":
                    case "disablePictureInPicture":
                    case "disableRemotePlayback":
                    case "formNoValidate":
                    case "hidden":
                    case "loop":
                    case "noModule":
                    case "noValidate":
                    case "open":
                    case "playsInline":
                    case "readOnly":
                    case "required":
                    case "reversed":
                    case "scoped":
                    case "seamless":
                    case "itemScope":
                    case "capture":
                    case "download":
                    case "inert":
                        return !0;
                    default:
                        lowerCasedName = name.toLowerCase().slice(0, 5);
                        if ("data-" === lowerCasedName || "aria-" === lowerCasedName) return !0;
                        value ? console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name) : console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
                        return warnedProperties[name] = !0;
                }
            case "function":
            case "symbol":
                return warnedProperties[name] = !0, !1;
            case "string":
                if ("false" === value || "true" === value) {
                    switch(name){
                        case "checked":
                        case "selected":
                        case "multiple":
                        case "muted":
                        case "allowFullScreen":
                        case "async":
                        case "autoPlay":
                        case "controls":
                        case "default":
                        case "defer":
                        case "disabled":
                        case "disablePictureInPicture":
                        case "disableRemotePlayback":
                        case "formNoValidate":
                        case "hidden":
                        case "loop":
                        case "noModule":
                        case "noValidate":
                        case "open":
                        case "playsInline":
                        case "readOnly":
                        case "required":
                        case "reversed":
                        case "scoped":
                        case "seamless":
                        case "itemScope":
                        case "inert":
                            break;
                        default:
                            return !0;
                    }
                    console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, "false" === value ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
                    warnedProperties[name] = !0;
                }
        }
        return !0;
    }
    function warnUnknownProperties(type, props, eventRegistry) {
        var unknownProps = [], key;
        for(key in props)validateProperty(type, key, props[key], eventRegistry) || unknownProps.push(key);
        props = unknownProps.map(function(prop) {
            return "`" + prop + "`";
        }).join(", ");
        1 === unknownProps.length ? console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ", props, type) : 1 < unknownProps.length && console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ", props, type);
    }
    function camelize(string) {
        return string.replace(hyphenPattern, function(_, character) {
            return character.toUpperCase();
        });
    }
    function escapeTextForBrowser(text) {
        if ("boolean" === typeof text || "number" === typeof text || "bigint" === typeof text) return "" + text;
        checkHtmlStringCoercion(text);
        text = "" + text;
        var match = matchHtmlRegExp.exec(text);
        if (match) {
            var html = "", index, lastIndex = 0;
            for(index = match.index; index < text.length; index++){
                switch(text.charCodeAt(index)){
                    case 34:
                        match = "&quot;";
                        break;
                    case 38:
                        match = "&amp;";
                        break;
                    case 39:
                        match = "&#x27;";
                        break;
                    case 60:
                        match = "&lt;";
                        break;
                    case 62:
                        match = "&gt;";
                        break;
                    default:
                        continue;
                }
                lastIndex !== index && (html += text.slice(lastIndex, index));
                lastIndex = index + 1;
                html += match;
            }
            text = lastIndex !== index ? html + text.slice(lastIndex, index) : html;
        }
        return text;
    }
    function sanitizeURL(url) {
        return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
    }
    function escapeEntireInlineScriptContent(scriptText) {
        checkHtmlStringCoercion(scriptText);
        return ("" + scriptText).replace(scriptRegex, scriptReplacer);
    }
    function createRenderState(resumableState, nonce, externalRuntimeConfig, importMap, onHeaders, maxHeadersLength) {
        var inlineScriptWithNonce = void 0 === nonce ? startInlineScript : stringToPrecomputedChunk('<script nonce="' + escapeTextForBrowser(nonce) + '">'), idPrefix = resumableState.idPrefix;
        externalRuntimeConfig = [];
        var bootstrapScriptContent = resumableState.bootstrapScriptContent, bootstrapScripts = resumableState.bootstrapScripts, bootstrapModules = resumableState.bootstrapModules;
        void 0 !== bootstrapScriptContent && externalRuntimeConfig.push(inlineScriptWithNonce, stringToChunk(escapeEntireInlineScriptContent(bootstrapScriptContent)), endInlineScript);
        bootstrapScriptContent = [];
        void 0 !== importMap && (bootstrapScriptContent.push(importMapScriptStart), bootstrapScriptContent.push(stringToChunk(escapeEntireInlineScriptContent(JSON.stringify(importMap)))), bootstrapScriptContent.push(importMapScriptEnd));
        onHeaders && "number" === typeof maxHeadersLength && 0 >= maxHeadersLength && console.error("React expected a positive non-zero `maxHeadersLength` option but found %s instead. When using the `onHeaders` option you may supply an optional `maxHeadersLength` option as well however, when setting this value to zero or less no headers will be captured.", 0 === maxHeadersLength ? "zero" : maxHeadersLength);
        importMap = onHeaders ? {
            preconnects: "",
            fontPreloads: "",
            highImagePreloads: "",
            remainingCapacity: 2 + ("number" === typeof maxHeadersLength ? maxHeadersLength : 2e3)
        } : null;
        onHeaders = {
            placeholderPrefix: stringToPrecomputedChunk(idPrefix + "P:"),
            segmentPrefix: stringToPrecomputedChunk(idPrefix + "S:"),
            boundaryPrefix: stringToPrecomputedChunk(idPrefix + "B:"),
            startInlineScript: inlineScriptWithNonce,
            preamble: createPreambleState(),
            externalRuntimeScript: null,
            bootstrapChunks: externalRuntimeConfig,
            importMapChunks: bootstrapScriptContent,
            onHeaders: onHeaders,
            headers: importMap,
            resets: {
                font: {},
                dns: {},
                connect: {
                    default: {},
                    anonymous: {},
                    credentials: {}
                },
                image: {},
                style: {}
            },
            charsetChunks: [],
            viewportChunks: [],
            hoistableChunks: [],
            preconnects: new Set(),
            fontPreloads: new Set(),
            highImagePreloads: new Set(),
            styles: new Map(),
            bootstrapScripts: new Set(),
            scripts: new Set(),
            bulkPreloads: new Set(),
            preloads: {
                images: new Map(),
                stylesheets: new Map(),
                scripts: new Map(),
                moduleScripts: new Map()
            },
            nonce: nonce,
            hoistableState: null,
            stylesToHoist: !1
        };
        if (void 0 !== bootstrapScripts) for(importMap = 0; importMap < bootstrapScripts.length; importMap++){
            maxHeadersLength = bootstrapScripts[importMap];
            bootstrapScriptContent = idPrefix = void 0;
            var props = {
                rel: "preload",
                as: "script",
                fetchPriority: "low",
                nonce: nonce
            };
            "string" === typeof maxHeadersLength ? props.href = inlineScriptWithNonce = maxHeadersLength : (props.href = inlineScriptWithNonce = maxHeadersLength.src, props.integrity = bootstrapScriptContent = "string" === typeof maxHeadersLength.integrity ? maxHeadersLength.integrity : void 0, props.crossOrigin = idPrefix = "string" === typeof maxHeadersLength || null == maxHeadersLength.crossOrigin ? void 0 : "use-credentials" === maxHeadersLength.crossOrigin ? "use-credentials" : "");
            preloadBootstrapScriptOrModule(resumableState, onHeaders, inlineScriptWithNonce, props);
            externalRuntimeConfig.push(startScriptSrc, stringToChunk(escapeTextForBrowser(inlineScriptWithNonce)));
            nonce && externalRuntimeConfig.push(scriptNonce, stringToChunk(escapeTextForBrowser(nonce)));
            "string" === typeof bootstrapScriptContent && externalRuntimeConfig.push(scriptIntegirty, stringToChunk(escapeTextForBrowser(bootstrapScriptContent)));
            "string" === typeof idPrefix && externalRuntimeConfig.push(scriptCrossOrigin, stringToChunk(escapeTextForBrowser(idPrefix)));
            externalRuntimeConfig.push(endAsyncScript);
        }
        if (void 0 !== bootstrapModules) for(bootstrapScripts = 0; bootstrapScripts < bootstrapModules.length; bootstrapScripts++)importMap = bootstrapModules[bootstrapScripts], idPrefix = inlineScriptWithNonce = void 0, bootstrapScriptContent = {
            rel: "modulepreload",
            fetchPriority: "low",
            nonce: nonce
        }, "string" === typeof importMap ? bootstrapScriptContent.href = maxHeadersLength = importMap : (bootstrapScriptContent.href = maxHeadersLength = importMap.src, bootstrapScriptContent.integrity = idPrefix = "string" === typeof importMap.integrity ? importMap.integrity : void 0, bootstrapScriptContent.crossOrigin = inlineScriptWithNonce = "string" === typeof importMap || null == importMap.crossOrigin ? void 0 : "use-credentials" === importMap.crossOrigin ? "use-credentials" : ""), preloadBootstrapScriptOrModule(resumableState, onHeaders, maxHeadersLength, bootstrapScriptContent), externalRuntimeConfig.push(startModuleSrc, stringToChunk(escapeTextForBrowser(maxHeadersLength))), nonce && externalRuntimeConfig.push(scriptNonce, stringToChunk(escapeTextForBrowser(nonce))), "string" === typeof idPrefix && externalRuntimeConfig.push(scriptIntegirty, stringToChunk(escapeTextForBrowser(idPrefix))), "string" === typeof inlineScriptWithNonce && externalRuntimeConfig.push(scriptCrossOrigin, stringToChunk(escapeTextForBrowser(inlineScriptWithNonce))), externalRuntimeConfig.push(endAsyncScript);
        return onHeaders;
    }
    function createResumableState(identifierPrefix, externalRuntimeConfig, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
        return {
            idPrefix: void 0 === identifierPrefix ? "" : identifierPrefix,
            nextFormID: 0,
            streamingFormat: 0,
            bootstrapScriptContent: bootstrapScriptContent,
            bootstrapScripts: bootstrapScripts,
            bootstrapModules: bootstrapModules,
            instructions: NothingSent,
            hasBody: !1,
            hasHtml: !1,
            unknownResources: {},
            dnsResources: {},
            connectResources: {
                default: {},
                anonymous: {},
                credentials: {}
            },
            imageResources: {},
            styleResources: {},
            scriptResources: {},
            moduleUnknownResources: {},
            moduleScriptResources: {}
        };
    }
    function createPreambleState() {
        return {
            htmlChunks: null,
            headChunks: null,
            bodyChunks: null,
            contribution: NoContribution
        };
    }
    function createFormatContext(insertionMode, selectedValue, tagScope) {
        return {
            insertionMode: insertionMode,
            selectedValue: selectedValue,
            tagScope: tagScope
        };
    }
    function createRootFormatContext(namespaceURI) {
        return createFormatContext("http://www.w3.org/2000/svg" === namespaceURI ? SVG_MODE : "http://www.w3.org/1998/Math/MathML" === namespaceURI ? MATHML_MODE : ROOT_HTML_MODE, null, 0);
    }
    function getChildFormatContext(parentContext, type, props) {
        switch(type){
            case "noscript":
                return createFormatContext(HTML_MODE, null, parentContext.tagScope | 1);
            case "select":
                return createFormatContext(HTML_MODE, null != props.value ? props.value : props.defaultValue, parentContext.tagScope);
            case "svg":
                return createFormatContext(SVG_MODE, null, parentContext.tagScope);
            case "picture":
                return createFormatContext(HTML_MODE, null, parentContext.tagScope | 2);
            case "math":
                return createFormatContext(MATHML_MODE, null, parentContext.tagScope);
            case "foreignObject":
                return createFormatContext(HTML_MODE, null, parentContext.tagScope);
            case "table":
                return createFormatContext(HTML_TABLE_MODE, null, parentContext.tagScope);
            case "thead":
            case "tbody":
            case "tfoot":
                return createFormatContext(HTML_TABLE_BODY_MODE, null, parentContext.tagScope);
            case "colgroup":
                return createFormatContext(HTML_COLGROUP_MODE, null, parentContext.tagScope);
            case "tr":
                return createFormatContext(HTML_TABLE_ROW_MODE, null, parentContext.tagScope);
            case "head":
                if (parentContext.insertionMode < HTML_MODE) return createFormatContext(HTML_HEAD_MODE, null, parentContext.tagScope);
                break;
            case "html":
                if (parentContext.insertionMode === ROOT_HTML_MODE) return createFormatContext(HTML_HTML_MODE, null, parentContext.tagScope);
        }
        return parentContext.insertionMode >= HTML_TABLE_MODE || parentContext.insertionMode < HTML_MODE ? createFormatContext(HTML_MODE, null, parentContext.tagScope) : parentContext;
    }
    function pushTextInstance(target, text, renderState, textEmbedded) {
        if ("" === text) return textEmbedded;
        textEmbedded && target.push(textSeparator);
        target.push(stringToChunk(escapeTextForBrowser(text)));
        return !0;
    }
    function pushStyleAttribute(target, style) {
        if ("object" !== typeof style) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
        var isFirst = !0, styleName;
        for(styleName in style)if (hasOwnProperty.call(style, styleName)) {
            var styleValue = style[styleName];
            if (null != styleValue && "boolean" !== typeof styleValue && "" !== styleValue) {
                if (0 === styleName.indexOf("--")) {
                    var nameChunk = stringToChunk(escapeTextForBrowser(styleName));
                    checkCSSPropertyStringCoercion(styleValue, styleName);
                    styleValue = stringToChunk(escapeTextForBrowser(("" + styleValue).trim()));
                } else {
                    nameChunk = styleName;
                    var value = styleValue;
                    if (-1 < nameChunk.indexOf("-")) {
                        var name = nameChunk;
                        warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name] || (warnedStyleNames[name] = !0, console.error("Unsupported style property %s. Did you mean %s?", name, camelize(name.replace(msPattern$1, "ms-"))));
                    } else if (badVendoredStyleNamePattern.test(nameChunk)) name = nameChunk, warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name] || (warnedStyleNames[name] = !0, console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1)));
                    else if (badStyleValueWithSemicolonPattern.test(value)) {
                        name = nameChunk;
                        var value$jscomp$0 = value;
                        warnedStyleValues.hasOwnProperty(value$jscomp$0) && warnedStyleValues[value$jscomp$0] || (warnedStyleValues[value$jscomp$0] = !0, console.error('Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.', name, value$jscomp$0.replace(badStyleValueWithSemicolonPattern, "")));
                    }
                    "number" === typeof value && (isNaN(value) ? warnedForNaNValue || (warnedForNaNValue = !0, console.error("`NaN` is an invalid value for the `%s` css style property.", nameChunk)) : isFinite(value) || warnedForInfinityValue || (warnedForInfinityValue = !0, console.error("`Infinity` is an invalid value for the `%s` css style property.", nameChunk)));
                    nameChunk = styleName;
                    value = styleNameCache.get(nameChunk);
                    void 0 !== value ? nameChunk = value : (value = stringToPrecomputedChunk(escapeTextForBrowser(nameChunk.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-"))), styleNameCache.set(nameChunk, value), nameChunk = value);
                    "number" === typeof styleValue ? styleValue = 0 === styleValue || unitlessNumbers.has(styleName) ? stringToChunk("" + styleValue) : stringToChunk(styleValue + "px") : (checkCSSPropertyStringCoercion(styleValue, styleName), styleValue = stringToChunk(escapeTextForBrowser(("" + styleValue).trim())));
                }
                isFirst ? (isFirst = !1, target.push(styleAttributeStart, nameChunk, styleAssign, styleValue)) : target.push(styleSeparator, nameChunk, styleAssign, styleValue);
            }
        }
        isFirst || target.push(attributeEnd);
    }
    function pushBooleanAttribute(target, name, value) {
        value && "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, stringToChunk(name), attributeEmptyString);
    }
    function pushStringAttribute(target, name, value) {
        "function" !== typeof value && "symbol" !== typeof value && "boolean" !== typeof value && target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
    }
    function pushAdditionalFormField(value, key) {
        this.push(startHiddenInputChunk);
        validateAdditionalFormField(value);
        pushStringAttribute(this, "name", key);
        pushStringAttribute(this, "value", value);
        this.push(endOfStartTagSelfClosing);
    }
    function validateAdditionalFormField(value) {
        if ("string" !== typeof value) throw Error("File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration.");
    }
    function getCustomFormFields(resumableState, formAction) {
        if ("function" === typeof formAction.$$FORM_ACTION) {
            var id = resumableState.nextFormID++;
            resumableState = resumableState.idPrefix + id;
            try {
                var customFields = formAction.$$FORM_ACTION(resumableState);
                if (customFields) {
                    var formData = customFields.data;
                    null != formData && formData.forEach(validateAdditionalFormField);
                }
                return customFields;
            } catch (x) {
                if ("object" === typeof x && null !== x && "function" === typeof x.then) throw x;
                console.error("Failed to serialize an action for progressive enhancement:\n%s", x);
            }
        }
        return null;
    }
    function pushFormActionAttribute(target, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name) {
        var formData = null;
        if ("function" === typeof formAction) {
            null === name || didWarnFormActionName || (didWarnFormActionName = !0, console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'));
            null === formEncType && null === formMethod || didWarnFormActionMethod || (didWarnFormActionMethod = !0, console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."));
            null === formTarget || didWarnFormActionTarget || (didWarnFormActionTarget = !0, console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."));
            var customFields = getCustomFormFields(resumableState, formAction);
            null !== customFields ? (name = customFields.name, formAction = customFields.action || "", formEncType = customFields.encType, formMethod = customFields.method, formTarget = customFields.target, formData = customFields.data) : (target.push(attributeSeparator, stringToChunk("formAction"), attributeAssign, actionJavaScriptURL, attributeEnd), formTarget = formMethod = formEncType = formAction = name = null, injectFormReplayingRuntime(resumableState, renderState));
        }
        null != name && pushAttribute(target, "name", name);
        null != formAction && pushAttribute(target, "formAction", formAction);
        null != formEncType && pushAttribute(target, "formEncType", formEncType);
        null != formMethod && pushAttribute(target, "formMethod", formMethod);
        null != formTarget && pushAttribute(target, "formTarget", formTarget);
        return formData;
    }
    function pushAttribute(target, name, value) {
        switch(name){
            case "className":
                pushStringAttribute(target, "class", value);
                break;
            case "tabIndex":
                pushStringAttribute(target, "tabindex", value);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                pushStringAttribute(target, name, value);
                break;
            case "style":
                pushStyleAttribute(target, value);
                break;
            case "src":
            case "href":
                if ("" === value) {
                    "src" === name ? console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', name, name) : console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', name, name);
                    break;
                }
            case "action":
            case "formAction":
                if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) break;
                checkAttributeStringCoercion(value, name);
                value = sanitizeURL("" + value);
                target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                break;
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "ref":
                break;
            case "autoFocus":
            case "multiple":
            case "muted":
                pushBooleanAttribute(target, name.toLowerCase(), value);
                break;
            case "xlinkHref":
                if ("function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) break;
                checkAttributeStringCoercion(value, name);
                value = sanitizeURL("" + value);
                target.push(attributeSeparator, stringToChunk("xlink:href"), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                break;
            case "inert":
                "" !== value || didWarnForNewBooleanPropsWithEmptyValue[name] || (didWarnForNewBooleanPropsWithEmptyValue[name] = !0, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", name));
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                value && "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, stringToChunk(name), attributeEmptyString);
                break;
            case "capture":
            case "download":
                !0 === value ? target.push(attributeSeparator, stringToChunk(name), attributeEmptyString) : !1 !== value && "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                "function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value && target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                break;
            case "rowSpan":
            case "start":
                "function" === typeof value || "symbol" === typeof value || isNaN(value) || target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                break;
            case "xlinkActuate":
                pushStringAttribute(target, "xlink:actuate", value);
                break;
            case "xlinkArcrole":
                pushStringAttribute(target, "xlink:arcrole", value);
                break;
            case "xlinkRole":
                pushStringAttribute(target, "xlink:role", value);
                break;
            case "xlinkShow":
                pushStringAttribute(target, "xlink:show", value);
                break;
            case "xlinkTitle":
                pushStringAttribute(target, "xlink:title", value);
                break;
            case "xlinkType":
                pushStringAttribute(target, "xlink:type", value);
                break;
            case "xmlBase":
                pushStringAttribute(target, "xml:base", value);
                break;
            case "xmlLang":
                pushStringAttribute(target, "xml:lang", value);
                break;
            case "xmlSpace":
                pushStringAttribute(target, "xml:space", value);
                break;
            default:
                if (!(2 < name.length) || "o" !== name[0] && "O" !== name[0] || "n" !== name[1] && "N" !== name[1]) {
                    if (name = aliases.get(name) || name, isAttributeNameSafe(name)) {
                        switch(typeof value){
                            case "function":
                            case "symbol":
                                return;
                            case "boolean":
                                var prefix = name.toLowerCase().slice(0, 5);
                                if ("data-" !== prefix && "aria-" !== prefix) return;
                        }
                        target.push(attributeSeparator, stringToChunk(name), attributeAssign, stringToChunk(escapeTextForBrowser(value)), attributeEnd);
                    }
                }
        }
    }
    function pushInnerHTML(target, innerHTML, children) {
        if (null != innerHTML) {
            if (null != children) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if ("object" !== typeof innerHTML || !("__html" in innerHTML)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
            innerHTML = innerHTML.__html;
            null !== innerHTML && void 0 !== innerHTML && (checkHtmlStringCoercion(innerHTML), target.push(stringToChunk("" + innerHTML)));
        }
    }
    function checkSelectProp(props, propName) {
        var value = props[propName];
        null != value && (value = isArrayImpl(value), props.multiple && !value ? console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName) : !props.multiple && value && console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName));
    }
    function flattenOptionChildren(children) {
        var content = "";
        React.Children.forEach(children, function(child) {
            null != child && (content += child, didWarnInvalidOptionChildren || "string" === typeof child || "number" === typeof child || "bigint" === typeof child || (didWarnInvalidOptionChildren = !0, console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
        });
        return content;
    }
    function injectFormReplayingRuntime(resumableState, renderState) {
        (resumableState.instructions & 16) === NothingSent && (resumableState.instructions |= 16, renderState.bootstrapChunks.unshift(renderState.startInlineScript, formReplayingRuntimeScript, endInlineScript));
    }
    function pushLinkImpl(target, props) {
        target.push(startChunkForTag("link"));
        for(var propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                case "dangerouslySetInnerHTML":
                    throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTagSelfClosing);
        return null;
    }
    function escapeStyleTextContent(styleText) {
        checkHtmlStringCoercion(styleText);
        return ("" + styleText).replace(styleRegex, styleReplacer);
    }
    function pushSelfClosing(target, props, tag) {
        target.push(startChunkForTag(tag));
        for(var propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                case "dangerouslySetInnerHTML":
                    throw Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTagSelfClosing);
        return null;
    }
    function pushTitleImpl(target, props) {
        target.push(startChunkForTag("title"));
        var children = null, innerHTML = null, propKey;
        for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                    children = propValue;
                    break;
                case "dangerouslySetInnerHTML":
                    innerHTML = propValue;
                    break;
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTag);
        props = Array.isArray(children) ? 2 > children.length ? children[0] : null : children;
        "function" !== typeof props && "symbol" !== typeof props && null !== props && void 0 !== props && target.push(stringToChunk(escapeTextForBrowser("" + props)));
        pushInnerHTML(target, innerHTML, children);
        target.push(endChunkForTag("title"));
        return null;
    }
    function pushScriptImpl(target, props) {
        target.push(startChunkForTag("script"));
        var children = null, innerHTML = null, propKey;
        for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                    children = propValue;
                    break;
                case "dangerouslySetInnerHTML":
                    innerHTML = propValue;
                    break;
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTag);
        null != children && "string" !== typeof children && (props = "number" === typeof children ? "a number for children" : Array.isArray(children) ? "an array for children" : "something unexpected for children", console.error("A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.", props));
        pushInnerHTML(target, innerHTML, children);
        "string" === typeof children && target.push(stringToChunk(escapeEntireInlineScriptContent(children)));
        target.push(endChunkForTag("script"));
        return null;
    }
    function pushStartSingletonElement(target, props, tag) {
        target.push(startChunkForTag(tag));
        var innerHTML = tag = null, propKey;
        for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                    tag = propValue;
                    break;
                case "dangerouslySetInnerHTML":
                    innerHTML = propValue;
                    break;
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, tag);
        return tag;
    }
    function pushStartGenericElement(target, props, tag) {
        target.push(startChunkForTag(tag));
        var innerHTML = tag = null, propKey;
        for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                    tag = propValue;
                    break;
                case "dangerouslySetInnerHTML":
                    innerHTML = propValue;
                    break;
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, tag);
        return "string" === typeof tag ? (target.push(stringToChunk(escapeTextForBrowser(tag))), null) : tag;
    }
    function startChunkForTag(tag) {
        var tagStartChunk = validatedTagCache.get(tag);
        if (void 0 === tagStartChunk) {
            if (!VALID_TAG_REGEX.test(tag)) throw Error("Invalid tag: " + tag);
            tagStartChunk = stringToPrecomputedChunk("<" + tag);
            validatedTagCache.set(tag, tagStartChunk);
        }
        return tagStartChunk;
    }
    function pushStartInstance(target$jscomp$0, type, props, resumableState, renderState, preambleState, hoistableState, formatContext, textEmbedded, isFallback) {
        validateProperties$2(type, props);
        "input" !== type && "textarea" !== type && "select" !== type || null == props || null !== props.value || didWarnValueNull || (didWarnValueNull = !0, "select" === type && props.multiple ? console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type) : console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type));
        b: if (-1 === type.indexOf("-")) var JSCompiler_inline_result = !1;
        else switch(type){
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                JSCompiler_inline_result = !1;
                break b;
            default:
                JSCompiler_inline_result = !0;
        }
        JSCompiler_inline_result || "string" === typeof props.is || warnUnknownProperties(type, props, null);
        !props.suppressContentEditableWarning && props.contentEditable && null != props.children && console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
        formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE && -1 === type.indexOf("-") && type.toLowerCase() !== type && console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
        switch(type){
            case "div":
            case "span":
            case "svg":
            case "path":
                break;
            case "a":
                target$jscomp$0.push(startChunkForTag("a"));
                var children = null, innerHTML = null, propKey;
                for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (null != propValue) switch(propKey){
                        case "children":
                            children = propValue;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML = propValue;
                            break;
                        case "href":
                            "" === propValue ? pushStringAttribute(target$jscomp$0, "href", "") : pushAttribute(target$jscomp$0, propKey, propValue);
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey, propValue);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                pushInnerHTML(target$jscomp$0, innerHTML, children);
                if ("string" === typeof children) {
                    target$jscomp$0.push(stringToChunk(escapeTextForBrowser(children)));
                    var JSCompiler_inline_result$jscomp$0 = null;
                } else JSCompiler_inline_result$jscomp$0 = children;
                return JSCompiler_inline_result$jscomp$0;
            case "g":
            case "p":
            case "li":
                break;
            case "select":
                checkControlledValueProps("select", props);
                checkSelectProp(props, "value");
                checkSelectProp(props, "defaultValue");
                void 0 === props.value || void 0 === props.defaultValue || didWarnDefaultSelectValue || (console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"), didWarnDefaultSelectValue = !0);
                target$jscomp$0.push(startChunkForTag("select"));
                var children$jscomp$0 = null, innerHTML$jscomp$0 = null, propKey$jscomp$0;
                for(propKey$jscomp$0 in props)if (hasOwnProperty.call(props, propKey$jscomp$0)) {
                    var propValue$jscomp$0 = props[propKey$jscomp$0];
                    if (null != propValue$jscomp$0) switch(propKey$jscomp$0){
                        case "children":
                            children$jscomp$0 = propValue$jscomp$0;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$0 = propValue$jscomp$0;
                            break;
                        case "defaultValue":
                        case "value":
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$0, propValue$jscomp$0);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$0, children$jscomp$0);
                return children$jscomp$0;
            case "option":
                var selectedValue = formatContext.selectedValue;
                target$jscomp$0.push(startChunkForTag("option"));
                var children$jscomp$1 = null, value = null, selected = null, innerHTML$jscomp$1 = null, propKey$jscomp$1;
                for(propKey$jscomp$1 in props)if (hasOwnProperty.call(props, propKey$jscomp$1)) {
                    var propValue$jscomp$1 = props[propKey$jscomp$1];
                    if (null != propValue$jscomp$1) switch(propKey$jscomp$1){
                        case "children":
                            children$jscomp$1 = propValue$jscomp$1;
                            break;
                        case "selected":
                            selected = propValue$jscomp$1;
                            didWarnSelectedSetOnOption || (console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), didWarnSelectedSetOnOption = !0);
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$1 = propValue$jscomp$1;
                            break;
                        case "value":
                            value = propValue$jscomp$1;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$1, propValue$jscomp$1);
                    }
                }
                if (null != selectedValue) {
                    if (null !== value) {
                        checkAttributeStringCoercion(value, "value");
                        var stringValue = "" + value;
                    } else null === innerHTML$jscomp$1 || didWarnInvalidOptionInnerHTML || (didWarnInvalidOptionInnerHTML = !0, console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")), stringValue = flattenOptionChildren(children$jscomp$1);
                    if (isArrayImpl(selectedValue)) {
                        for(var i = 0; i < selectedValue.length; i++)if (checkAttributeStringCoercion(selectedValue[i], "value"), "" + selectedValue[i] === stringValue) {
                            target$jscomp$0.push(selectedMarkerAttribute);
                            break;
                        }
                    } else checkAttributeStringCoercion(selectedValue, "select.value"), "" + selectedValue === stringValue && target$jscomp$0.push(selectedMarkerAttribute);
                } else selected && target$jscomp$0.push(selectedMarkerAttribute);
                target$jscomp$0.push(endOfStartTag);
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$1, children$jscomp$1);
                return children$jscomp$1;
            case "textarea":
                checkControlledValueProps("textarea", props);
                void 0 === props.value || void 0 === props.defaultValue || didWarnDefaultTextareaValue || (console.error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"), didWarnDefaultTextareaValue = !0);
                target$jscomp$0.push(startChunkForTag("textarea"));
                var value$jscomp$0 = null, defaultValue = null, children$jscomp$2 = null, propKey$jscomp$2;
                for(propKey$jscomp$2 in props)if (hasOwnProperty.call(props, propKey$jscomp$2)) {
                    var propValue$jscomp$2 = props[propKey$jscomp$2];
                    if (null != propValue$jscomp$2) switch(propKey$jscomp$2){
                        case "children":
                            children$jscomp$2 = propValue$jscomp$2;
                            break;
                        case "value":
                            value$jscomp$0 = propValue$jscomp$2;
                            break;
                        case "defaultValue":
                            defaultValue = propValue$jscomp$2;
                            break;
                        case "dangerouslySetInnerHTML":
                            throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$2, propValue$jscomp$2);
                    }
                }
                null === value$jscomp$0 && null !== defaultValue && (value$jscomp$0 = defaultValue);
                target$jscomp$0.push(endOfStartTag);
                if (null != children$jscomp$2) {
                    console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
                    if (null != value$jscomp$0) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
                    if (isArrayImpl(children$jscomp$2)) {
                        if (1 < children$jscomp$2.length) throw Error("<textarea> can only have at most one child.");
                        checkHtmlStringCoercion(children$jscomp$2[0]);
                        value$jscomp$0 = "" + children$jscomp$2[0];
                    }
                    checkHtmlStringCoercion(children$jscomp$2);
                    value$jscomp$0 = "" + children$jscomp$2;
                }
                "string" === typeof value$jscomp$0 && "\n" === value$jscomp$0[0] && target$jscomp$0.push(leadingNewline);
                null !== value$jscomp$0 && (checkAttributeStringCoercion(value$jscomp$0, "value"), target$jscomp$0.push(stringToChunk(escapeTextForBrowser("" + value$jscomp$0))));
                return null;
            case "input":
                checkControlledValueProps("input", props);
                target$jscomp$0.push(startChunkForTag("input"));
                var name = null, formAction = null, formEncType = null, formMethod = null, formTarget = null, value$jscomp$1 = null, defaultValue$jscomp$0 = null, checked = null, defaultChecked = null, propKey$jscomp$3;
                for(propKey$jscomp$3 in props)if (hasOwnProperty.call(props, propKey$jscomp$3)) {
                    var propValue$jscomp$3 = props[propKey$jscomp$3];
                    if (null != propValue$jscomp$3) switch(propKey$jscomp$3){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                        case "name":
                            name = propValue$jscomp$3;
                            break;
                        case "formAction":
                            formAction = propValue$jscomp$3;
                            break;
                        case "formEncType":
                            formEncType = propValue$jscomp$3;
                            break;
                        case "formMethod":
                            formMethod = propValue$jscomp$3;
                            break;
                        case "formTarget":
                            formTarget = propValue$jscomp$3;
                            break;
                        case "defaultChecked":
                            defaultChecked = propValue$jscomp$3;
                            break;
                        case "defaultValue":
                            defaultValue$jscomp$0 = propValue$jscomp$3;
                            break;
                        case "checked":
                            checked = propValue$jscomp$3;
                            break;
                        case "value":
                            value$jscomp$1 = propValue$jscomp$3;
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$3, propValue$jscomp$3);
                    }
                }
                null === formAction || "image" === props.type || "submit" === props.type || didWarnFormActionType || (didWarnFormActionType = !0, console.error('An input can only specify a formAction along with type="submit" or type="image".'));
                var formData = pushFormActionAttribute(target$jscomp$0, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name);
                null === checked || null === defaultChecked || didWarnDefaultChecked || (console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", props.type), didWarnDefaultChecked = !0);
                null === value$jscomp$1 || null === defaultValue$jscomp$0 || didWarnDefaultInputValue || (console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", props.type), didWarnDefaultInputValue = !0);
                null !== checked ? pushBooleanAttribute(target$jscomp$0, "checked", checked) : null !== defaultChecked && pushBooleanAttribute(target$jscomp$0, "checked", defaultChecked);
                null !== value$jscomp$1 ? pushAttribute(target$jscomp$0, "value", value$jscomp$1) : null !== defaultValue$jscomp$0 && pushAttribute(target$jscomp$0, "value", defaultValue$jscomp$0);
                target$jscomp$0.push(endOfStartTagSelfClosing);
                null != formData && formData.forEach(pushAdditionalFormField, target$jscomp$0);
                return null;
            case "button":
                target$jscomp$0.push(startChunkForTag("button"));
                var children$jscomp$3 = null, innerHTML$jscomp$2 = null, name$jscomp$0 = null, formAction$jscomp$0 = null, formEncType$jscomp$0 = null, formMethod$jscomp$0 = null, formTarget$jscomp$0 = null, propKey$jscomp$4;
                for(propKey$jscomp$4 in props)if (hasOwnProperty.call(props, propKey$jscomp$4)) {
                    var propValue$jscomp$4 = props[propKey$jscomp$4];
                    if (null != propValue$jscomp$4) switch(propKey$jscomp$4){
                        case "children":
                            children$jscomp$3 = propValue$jscomp$4;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$2 = propValue$jscomp$4;
                            break;
                        case "name":
                            name$jscomp$0 = propValue$jscomp$4;
                            break;
                        case "formAction":
                            formAction$jscomp$0 = propValue$jscomp$4;
                            break;
                        case "formEncType":
                            formEncType$jscomp$0 = propValue$jscomp$4;
                            break;
                        case "formMethod":
                            formMethod$jscomp$0 = propValue$jscomp$4;
                            break;
                        case "formTarget":
                            formTarget$jscomp$0 = propValue$jscomp$4;
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$4, propValue$jscomp$4);
                    }
                }
                null === formAction$jscomp$0 || null == props.type || "submit" === props.type || didWarnFormActionType || (didWarnFormActionType = !0, console.error('A button can only specify a formAction along with type="submit" or no type.'));
                var formData$jscomp$0 = pushFormActionAttribute(target$jscomp$0, resumableState, renderState, formAction$jscomp$0, formEncType$jscomp$0, formMethod$jscomp$0, formTarget$jscomp$0, name$jscomp$0);
                target$jscomp$0.push(endOfStartTag);
                null != formData$jscomp$0 && formData$jscomp$0.forEach(pushAdditionalFormField, target$jscomp$0);
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$2, children$jscomp$3);
                if ("string" === typeof children$jscomp$3) {
                    target$jscomp$0.push(stringToChunk(escapeTextForBrowser(children$jscomp$3)));
                    var JSCompiler_inline_result$jscomp$1 = null;
                } else JSCompiler_inline_result$jscomp$1 = children$jscomp$3;
                return JSCompiler_inline_result$jscomp$1;
            case "form":
                target$jscomp$0.push(startChunkForTag("form"));
                var children$jscomp$4 = null, innerHTML$jscomp$3 = null, formAction$jscomp$1 = null, formEncType$jscomp$1 = null, formMethod$jscomp$1 = null, formTarget$jscomp$1 = null, propKey$jscomp$5;
                for(propKey$jscomp$5 in props)if (hasOwnProperty.call(props, propKey$jscomp$5)) {
                    var propValue$jscomp$5 = props[propKey$jscomp$5];
                    if (null != propValue$jscomp$5) switch(propKey$jscomp$5){
                        case "children":
                            children$jscomp$4 = propValue$jscomp$5;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$3 = propValue$jscomp$5;
                            break;
                        case "action":
                            formAction$jscomp$1 = propValue$jscomp$5;
                            break;
                        case "encType":
                            formEncType$jscomp$1 = propValue$jscomp$5;
                            break;
                        case "method":
                            formMethod$jscomp$1 = propValue$jscomp$5;
                            break;
                        case "target":
                            formTarget$jscomp$1 = propValue$jscomp$5;
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$5, propValue$jscomp$5);
                    }
                }
                var formData$jscomp$1 = null, formActionName = null;
                if ("function" === typeof formAction$jscomp$1) {
                    null === formEncType$jscomp$1 && null === formMethod$jscomp$1 || didWarnFormActionMethod || (didWarnFormActionMethod = !0, console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."));
                    null === formTarget$jscomp$1 || didWarnFormActionTarget || (didWarnFormActionTarget = !0, console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."));
                    var customFields = getCustomFormFields(resumableState, formAction$jscomp$1);
                    null !== customFields ? (formAction$jscomp$1 = customFields.action || "", formEncType$jscomp$1 = customFields.encType, formMethod$jscomp$1 = customFields.method, formTarget$jscomp$1 = customFields.target, formData$jscomp$1 = customFields.data, formActionName = customFields.name) : (target$jscomp$0.push(attributeSeparator, stringToChunk("action"), attributeAssign, actionJavaScriptURL, attributeEnd), formTarget$jscomp$1 = formMethod$jscomp$1 = formEncType$jscomp$1 = formAction$jscomp$1 = null, injectFormReplayingRuntime(resumableState, renderState));
                }
                null != formAction$jscomp$1 && pushAttribute(target$jscomp$0, "action", formAction$jscomp$1);
                null != formEncType$jscomp$1 && pushAttribute(target$jscomp$0, "encType", formEncType$jscomp$1);
                null != formMethod$jscomp$1 && pushAttribute(target$jscomp$0, "method", formMethod$jscomp$1);
                null != formTarget$jscomp$1 && pushAttribute(target$jscomp$0, "target", formTarget$jscomp$1);
                target$jscomp$0.push(endOfStartTag);
                null !== formActionName && (target$jscomp$0.push(startHiddenInputChunk), pushStringAttribute(target$jscomp$0, "name", formActionName), target$jscomp$0.push(endOfStartTagSelfClosing), null != formData$jscomp$1 && formData$jscomp$1.forEach(pushAdditionalFormField, target$jscomp$0));
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$3, children$jscomp$4);
                if ("string" === typeof children$jscomp$4) {
                    target$jscomp$0.push(stringToChunk(escapeTextForBrowser(children$jscomp$4)));
                    var JSCompiler_inline_result$jscomp$2 = null;
                } else JSCompiler_inline_result$jscomp$2 = children$jscomp$4;
                return JSCompiler_inline_result$jscomp$2;
            case "menuitem":
                target$jscomp$0.push(startChunkForTag("menuitem"));
                for(var propKey$jscomp$6 in props)if (hasOwnProperty.call(props, propKey$jscomp$6)) {
                    var propValue$jscomp$6 = props[propKey$jscomp$6];
                    if (null != propValue$jscomp$6) switch(propKey$jscomp$6){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$6, propValue$jscomp$6);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                return null;
            case "object":
                target$jscomp$0.push(startChunkForTag("object"));
                var children$jscomp$5 = null, innerHTML$jscomp$4 = null, propKey$jscomp$7;
                for(propKey$jscomp$7 in props)if (hasOwnProperty.call(props, propKey$jscomp$7)) {
                    var propValue$jscomp$7 = props[propKey$jscomp$7];
                    if (null != propValue$jscomp$7) switch(propKey$jscomp$7){
                        case "children":
                            children$jscomp$5 = propValue$jscomp$7;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$4 = propValue$jscomp$7;
                            break;
                        case "data":
                            checkAttributeStringCoercion(propValue$jscomp$7, "data");
                            var sanitizedValue = sanitizeURL("" + propValue$jscomp$7);
                            if ("" === sanitizedValue) {
                                console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', propKey$jscomp$7, propKey$jscomp$7);
                                break;
                            }
                            target$jscomp$0.push(attributeSeparator, stringToChunk("data"), attributeAssign, stringToChunk(escapeTextForBrowser(sanitizedValue)), attributeEnd);
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$7, propValue$jscomp$7);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$4, children$jscomp$5);
                if ("string" === typeof children$jscomp$5) {
                    target$jscomp$0.push(stringToChunk(escapeTextForBrowser(children$jscomp$5)));
                    var JSCompiler_inline_result$jscomp$3 = null;
                } else JSCompiler_inline_result$jscomp$3 = children$jscomp$5;
                return JSCompiler_inline_result$jscomp$3;
            case "title":
                var insertionMode = formatContext.insertionMode, noscriptTagInScope = !!(formatContext.tagScope & 1);
                if (hasOwnProperty.call(props, "children")) {
                    var children$jscomp$6 = props.children, child = Array.isArray(children$jscomp$6) ? 2 > children$jscomp$6.length ? children$jscomp$6[0] : null : children$jscomp$6;
                    Array.isArray(children$jscomp$6) && 1 < children$jscomp$6.length ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be common to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.", children$jscomp$6.length) : "function" === typeof child || "symbol" === typeof child ? console.error("React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.", "function" === typeof child ? "a Function" : "a Sybmol") : child && child.toString === ({}).toString && (null != child.$$typeof ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML.") : console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>."));
                }
                if (insertionMode === SVG_MODE || noscriptTagInScope || null != props.itemProp) var JSCompiler_inline_result$jscomp$4 = pushTitleImpl(target$jscomp$0, props);
                else isFallback ? JSCompiler_inline_result$jscomp$4 = null : (pushTitleImpl(renderState.hoistableChunks, props), JSCompiler_inline_result$jscomp$4 = void 0);
                return JSCompiler_inline_result$jscomp$4;
            case "link":
                var rel = props.rel, href = props.href, precedence = props.precedence;
                if (formatContext.insertionMode === SVG_MODE || formatContext.tagScope & 1 || null != props.itemProp || "string" !== typeof rel || "string" !== typeof href || "" === href) {
                    "stylesheet" === rel && "string" === typeof props.precedence && ("string" === typeof href && href || console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.', null === href ? "`null`" : void 0 === href ? "`undefined`" : "" === href ? "an empty string" : 'something with type "' + typeof href + '"'));
                    pushLinkImpl(target$jscomp$0, props);
                    var JSCompiler_inline_result$jscomp$5 = null;
                } else if ("stylesheet" === props.rel) {
                    if ("string" !== typeof precedence || null != props.disabled || props.onLoad || props.onError) {
                        if ("string" === typeof precedence) {
                            if (null != props.disabled) console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.');
                            else if (props.onLoad || props.onError) {
                                var propDescription = props.onLoad && props.onError ? "`onLoad` and `onError` props" : props.onLoad ? "`onLoad` prop" : "`onError` prop";
                                console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.', propDescription, propDescription);
                            }
                        }
                        JSCompiler_inline_result$jscomp$5 = pushLinkImpl(target$jscomp$0, props);
                    } else {
                        var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : void 0;
                        if (resourceState !== EXISTS) {
                            resumableState.styleResources[href] = EXISTS;
                            styleQueue || (styleQueue = {
                                precedence: stringToChunk(escapeTextForBrowser(precedence)),
                                rules: [],
                                hrefs: [],
                                sheets: new Map()
                            }, renderState.styles.set(precedence, styleQueue));
                            var resource = {
                                state: PENDING$1,
                                props: assign({}, props, {
                                    "data-precedence": props.precedence,
                                    precedence: null
                                })
                            };
                            if (resourceState) {
                                2 === resourceState.length && adoptPreloadCredentials(resource.props, resourceState);
                                var preloadResource = renderState.preloads.stylesheets.get(href);
                                preloadResource && 0 < preloadResource.length ? preloadResource.length = 0 : resource.state = PRELOADED;
                            }
                            styleQueue.sheets.set(href, resource);
                            hoistableState && hoistableState.stylesheets.add(resource);
                        } else if (styleQueue) {
                            var _resource = styleQueue.sheets.get(href);
                            _resource && hoistableState && hoistableState.stylesheets.add(_resource);
                        }
                        textEmbedded && target$jscomp$0.push(textSeparator);
                        JSCompiler_inline_result$jscomp$5 = null;
                    }
                } else props.onLoad || props.onError ? JSCompiler_inline_result$jscomp$5 = pushLinkImpl(target$jscomp$0, props) : (textEmbedded && target$jscomp$0.push(textSeparator), JSCompiler_inline_result$jscomp$5 = isFallback ? null : pushLinkImpl(renderState.hoistableChunks, props));
                return JSCompiler_inline_result$jscomp$5;
            case "script":
                var asyncProp = props.async;
                if ("string" !== typeof props.src || !props.src || !asyncProp || "function" === typeof asyncProp || "symbol" === typeof asyncProp || props.onLoad || props.onError || formatContext.insertionMode === SVG_MODE || formatContext.tagScope & 1 || null != props.itemProp) var JSCompiler_inline_result$jscomp$6 = pushScriptImpl(target$jscomp$0, props);
                else {
                    var key = props.src;
                    if ("module" === props.type) {
                        var resources = resumableState.moduleScriptResources;
                        var preloads = renderState.preloads.moduleScripts;
                    } else resources = resumableState.scriptResources, preloads = renderState.preloads.scripts;
                    var resourceState$jscomp$0 = resources.hasOwnProperty(key) ? resources[key] : void 0;
                    if (resourceState$jscomp$0 !== EXISTS) {
                        resources[key] = EXISTS;
                        var scriptProps = props;
                        if (resourceState$jscomp$0) {
                            2 === resourceState$jscomp$0.length && (scriptProps = assign({}, props), adoptPreloadCredentials(scriptProps, resourceState$jscomp$0));
                            var preloadResource$jscomp$0 = preloads.get(key);
                            preloadResource$jscomp$0 && (preloadResource$jscomp$0.length = 0);
                        }
                        var resource$jscomp$0 = [];
                        renderState.scripts.add(resource$jscomp$0);
                        pushScriptImpl(resource$jscomp$0, scriptProps);
                    }
                    textEmbedded && target$jscomp$0.push(textSeparator);
                    JSCompiler_inline_result$jscomp$6 = null;
                }
                return JSCompiler_inline_result$jscomp$6;
            case "style":
                var insertionMode$jscomp$0 = formatContext.insertionMode, noscriptTagInScope$jscomp$0 = !!(formatContext.tagScope & 1);
                if (hasOwnProperty.call(props, "children")) {
                    var children$jscomp$7 = props.children, child$jscomp$0 = Array.isArray(children$jscomp$7) ? 2 > children$jscomp$7.length ? children$jscomp$7[0] : null : children$jscomp$7;
                    ("function" === typeof child$jscomp$0 || "symbol" === typeof child$jscomp$0 || Array.isArray(child$jscomp$0)) && console.error("React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.", "function" === typeof child$jscomp$0 ? "a Function" : "symbol" === typeof child$jscomp$0 ? "a Sybmol" : "an Array");
                }
                var precedence$jscomp$0 = props.precedence, href$jscomp$0 = props.href;
                if (insertionMode$jscomp$0 === SVG_MODE || noscriptTagInScope$jscomp$0 || null != props.itemProp || "string" !== typeof precedence$jscomp$0 || "string" !== typeof href$jscomp$0 || "" === href$jscomp$0) {
                    target$jscomp$0.push(startChunkForTag("style"));
                    var children$jscomp$8 = null, innerHTML$jscomp$5 = null, propKey$jscomp$8;
                    for(propKey$jscomp$8 in props)if (hasOwnProperty.call(props, propKey$jscomp$8)) {
                        var propValue$jscomp$8 = props[propKey$jscomp$8];
                        if (null != propValue$jscomp$8) switch(propKey$jscomp$8){
                            case "children":
                                children$jscomp$8 = propValue$jscomp$8;
                                break;
                            case "dangerouslySetInnerHTML":
                                innerHTML$jscomp$5 = propValue$jscomp$8;
                                break;
                            default:
                                pushAttribute(target$jscomp$0, propKey$jscomp$8, propValue$jscomp$8);
                        }
                    }
                    target$jscomp$0.push(endOfStartTag);
                    var child$jscomp$1 = Array.isArray(children$jscomp$8) ? 2 > children$jscomp$8.length ? children$jscomp$8[0] : null : children$jscomp$8;
                    "function" !== typeof child$jscomp$1 && "symbol" !== typeof child$jscomp$1 && null !== child$jscomp$1 && void 0 !== child$jscomp$1 && target$jscomp$0.push(stringToChunk(escapeStyleTextContent(child$jscomp$1)));
                    pushInnerHTML(target$jscomp$0, innerHTML$jscomp$5, children$jscomp$8);
                    target$jscomp$0.push(endChunkForTag("style"));
                    var JSCompiler_inline_result$jscomp$7 = null;
                } else {
                    href$jscomp$0.includes(" ") && console.error('React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is "%s".', href$jscomp$0);
                    var styleQueue$jscomp$0 = renderState.styles.get(precedence$jscomp$0), resourceState$jscomp$1 = resumableState.styleResources.hasOwnProperty(href$jscomp$0) ? resumableState.styleResources[href$jscomp$0] : void 0;
                    if (resourceState$jscomp$1 !== EXISTS) {
                        resumableState.styleResources[href$jscomp$0] = EXISTS;
                        resourceState$jscomp$1 && console.error('React encountered a hoistable style tag for the same href as a preload: "%s". When using a style tag to inline styles you should not also preload it as a stylsheet.', href$jscomp$0);
                        styleQueue$jscomp$0 ? styleQueue$jscomp$0.hrefs.push(stringToChunk(escapeTextForBrowser(href$jscomp$0))) : (styleQueue$jscomp$0 = {
                            precedence: stringToChunk(escapeTextForBrowser(precedence$jscomp$0)),
                            rules: [],
                            hrefs: [
                                stringToChunk(escapeTextForBrowser(href$jscomp$0))
                            ],
                            sheets: new Map()
                        }, renderState.styles.set(precedence$jscomp$0, styleQueue$jscomp$0));
                        var target = styleQueue$jscomp$0.rules, children$jscomp$9 = null, innerHTML$jscomp$6 = null, propKey$jscomp$9;
                        for(propKey$jscomp$9 in props)if (hasOwnProperty.call(props, propKey$jscomp$9)) {
                            var propValue$jscomp$9 = props[propKey$jscomp$9];
                            if (null != propValue$jscomp$9) switch(propKey$jscomp$9){
                                case "children":
                                    children$jscomp$9 = propValue$jscomp$9;
                                    break;
                                case "dangerouslySetInnerHTML":
                                    innerHTML$jscomp$6 = propValue$jscomp$9;
                            }
                        }
                        var child$jscomp$2 = Array.isArray(children$jscomp$9) ? 2 > children$jscomp$9.length ? children$jscomp$9[0] : null : children$jscomp$9;
                        "function" !== typeof child$jscomp$2 && "symbol" !== typeof child$jscomp$2 && null !== child$jscomp$2 && void 0 !== child$jscomp$2 && target.push(stringToChunk(escapeStyleTextContent(child$jscomp$2)));
                        pushInnerHTML(target, innerHTML$jscomp$6, children$jscomp$9);
                    }
                    styleQueue$jscomp$0 && hoistableState && hoistableState.styles.add(styleQueue$jscomp$0);
                    textEmbedded && target$jscomp$0.push(textSeparator);
                    JSCompiler_inline_result$jscomp$7 = void 0;
                }
                return JSCompiler_inline_result$jscomp$7;
            case "meta":
                if (formatContext.insertionMode === SVG_MODE || formatContext.tagScope & 1 || null != props.itemProp) var JSCompiler_inline_result$jscomp$8 = pushSelfClosing(target$jscomp$0, props, "meta");
                else textEmbedded && target$jscomp$0.push(textSeparator), JSCompiler_inline_result$jscomp$8 = isFallback ? null : "string" === typeof props.charSet ? pushSelfClosing(renderState.charsetChunks, props, "meta") : "viewport" === props.name ? pushSelfClosing(renderState.viewportChunks, props, "meta") : pushSelfClosing(renderState.hoistableChunks, props, "meta");
                return JSCompiler_inline_result$jscomp$8;
            case "listing":
            case "pre":
                target$jscomp$0.push(startChunkForTag(type));
                var children$jscomp$10 = null, innerHTML$jscomp$7 = null, propKey$jscomp$10;
                for(propKey$jscomp$10 in props)if (hasOwnProperty.call(props, propKey$jscomp$10)) {
                    var propValue$jscomp$10 = props[propKey$jscomp$10];
                    if (null != propValue$jscomp$10) switch(propKey$jscomp$10){
                        case "children":
                            children$jscomp$10 = propValue$jscomp$10;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$7 = propValue$jscomp$10;
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$10, propValue$jscomp$10);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                if (null != innerHTML$jscomp$7) {
                    if (null != children$jscomp$10) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
                    if ("object" !== typeof innerHTML$jscomp$7 || !("__html" in innerHTML$jscomp$7)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
                    var html = innerHTML$jscomp$7.__html;
                    null !== html && void 0 !== html && ("string" === typeof html && 0 < html.length && "\n" === html[0] ? target$jscomp$0.push(leadingNewline, stringToChunk(html)) : (checkHtmlStringCoercion(html), target$jscomp$0.push(stringToChunk("" + html))));
                }
                "string" === typeof children$jscomp$10 && "\n" === children$jscomp$10[0] && target$jscomp$0.push(leadingNewline);
                return children$jscomp$10;
            case "img":
                var src = props.src, srcSet = props.srcSet;
                if (!("lazy" === props.loading || !src && !srcSet || "string" !== typeof src && null != src || "string" !== typeof srcSet && null != srcSet) && "low" !== props.fetchPriority && !1 === !!(formatContext.tagScope & 3) && ("string" !== typeof src || ":" !== src[4] || "d" !== src[0] && "D" !== src[0] || "a" !== src[1] && "A" !== src[1] || "t" !== src[2] && "T" !== src[2] || "a" !== src[3] && "A" !== src[3]) && ("string" !== typeof srcSet || ":" !== srcSet[4] || "d" !== srcSet[0] && "D" !== srcSet[0] || "a" !== srcSet[1] && "A" !== srcSet[1] || "t" !== srcSet[2] && "T" !== srcSet[2] || "a" !== srcSet[3] && "A" !== srcSet[3])) {
                    var sizes = "string" === typeof props.sizes ? props.sizes : void 0, key$jscomp$0 = srcSet ? srcSet + "\n" + (sizes || "") : src, promotablePreloads = renderState.preloads.images, resource$jscomp$1 = promotablePreloads.get(key$jscomp$0);
                    if (resource$jscomp$1) {
                        if ("high" === props.fetchPriority || 10 > renderState.highImagePreloads.size) promotablePreloads.delete(key$jscomp$0), renderState.highImagePreloads.add(resource$jscomp$1);
                    } else if (!resumableState.imageResources.hasOwnProperty(key$jscomp$0)) {
                        resumableState.imageResources[key$jscomp$0] = PRELOAD_NO_CREDS;
                        var input = props.crossOrigin;
                        var crossOrigin = "string" === typeof input ? "use-credentials" === input ? input : "" : void 0;
                        var headers = renderState.headers, header;
                        headers && 0 < headers.remainingCapacity && "string" !== typeof props.srcSet && ("high" === props.fetchPriority || 500 > headers.highImagePreloads.length) && (header = getPreloadAsHeader(src, "image", {
                            imageSrcSet: props.srcSet,
                            imageSizes: props.sizes,
                            crossOrigin: crossOrigin,
                            integrity: props.integrity,
                            nonce: props.nonce,
                            type: props.type,
                            fetchPriority: props.fetchPriority,
                            referrerPolicy: props.refererPolicy
                        }), 0 <= (headers.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key$jscomp$0] = PRELOAD_NO_CREDS, headers.highImagePreloads && (headers.highImagePreloads += ", "), headers.highImagePreloads += header) : (resource$jscomp$1 = [], pushLinkImpl(resource$jscomp$1, {
                            rel: "preload",
                            as: "image",
                            href: srcSet ? void 0 : src,
                            imageSrcSet: srcSet,
                            imageSizes: sizes,
                            crossOrigin: crossOrigin,
                            integrity: props.integrity,
                            type: props.type,
                            fetchPriority: props.fetchPriority,
                            referrerPolicy: props.referrerPolicy
                        }), "high" === props.fetchPriority || 10 > renderState.highImagePreloads.size ? renderState.highImagePreloads.add(resource$jscomp$1) : (renderState.bulkPreloads.add(resource$jscomp$1), promotablePreloads.set(key$jscomp$0, resource$jscomp$1)));
                    }
                }
                return pushSelfClosing(target$jscomp$0, props, "img");
            case "base":
            case "area":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "param":
            case "source":
            case "track":
            case "wbr":
                return pushSelfClosing(target$jscomp$0, props, type);
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                break;
            case "head":
                if (formatContext.insertionMode < HTML_MODE) {
                    var preamble = preambleState || renderState.preamble;
                    if (preamble.headChunks) throw Error("The `<head>` tag may only be rendered once.");
                    preamble.headChunks = [];
                    var JSCompiler_inline_result$jscomp$9 = pushStartSingletonElement(preamble.headChunks, props, "head");
                } else JSCompiler_inline_result$jscomp$9 = pushStartGenericElement(target$jscomp$0, props, "head");
                return JSCompiler_inline_result$jscomp$9;
            case "body":
                if (formatContext.insertionMode < HTML_MODE) {
                    var preamble$jscomp$0 = preambleState || renderState.preamble;
                    if (preamble$jscomp$0.bodyChunks) throw Error("The `<body>` tag may only be rendered once.");
                    preamble$jscomp$0.bodyChunks = [];
                    var JSCompiler_inline_result$jscomp$10 = pushStartSingletonElement(preamble$jscomp$0.bodyChunks, props, "body");
                } else JSCompiler_inline_result$jscomp$10 = pushStartGenericElement(target$jscomp$0, props, "body");
                return JSCompiler_inline_result$jscomp$10;
            case "html":
                if (formatContext.insertionMode === ROOT_HTML_MODE) {
                    var preamble$jscomp$1 = preambleState || renderState.preamble;
                    if (preamble$jscomp$1.htmlChunks) throw Error("The `<html>` tag may only be rendered once.");
                    preamble$jscomp$1.htmlChunks = [
                        doctypeChunk
                    ];
                    var JSCompiler_inline_result$jscomp$11 = pushStartSingletonElement(preamble$jscomp$1.htmlChunks, props, "html");
                } else JSCompiler_inline_result$jscomp$11 = pushStartGenericElement(target$jscomp$0, props, "html");
                return JSCompiler_inline_result$jscomp$11;
            default:
                if (-1 !== type.indexOf("-")) {
                    target$jscomp$0.push(startChunkForTag(type));
                    var children$jscomp$11 = null, innerHTML$jscomp$8 = null, propKey$jscomp$11;
                    for(propKey$jscomp$11 in props)if (hasOwnProperty.call(props, propKey$jscomp$11)) {
                        var propValue$jscomp$11 = props[propKey$jscomp$11];
                        if (null != propValue$jscomp$11) {
                            var attributeName = propKey$jscomp$11;
                            switch(propKey$jscomp$11){
                                case "children":
                                    children$jscomp$11 = propValue$jscomp$11;
                                    break;
                                case "dangerouslySetInnerHTML":
                                    innerHTML$jscomp$8 = propValue$jscomp$11;
                                    break;
                                case "style":
                                    pushStyleAttribute(target$jscomp$0, propValue$jscomp$11);
                                    break;
                                case "suppressContentEditableWarning":
                                case "suppressHydrationWarning":
                                case "ref":
                                    break;
                                case "className":
                                    attributeName = "class";
                                default:
                                    if (isAttributeNameSafe(propKey$jscomp$11) && "function" !== typeof propValue$jscomp$11 && "symbol" !== typeof propValue$jscomp$11 && !1 !== propValue$jscomp$11) {
                                        if (!0 === propValue$jscomp$11) propValue$jscomp$11 = "";
                                        else if ("object" === typeof propValue$jscomp$11) continue;
                                        target$jscomp$0.push(attributeSeparator, stringToChunk(attributeName), attributeAssign, stringToChunk(escapeTextForBrowser(propValue$jscomp$11)), attributeEnd);
                                    }
                            }
                        }
                    }
                    target$jscomp$0.push(endOfStartTag);
                    pushInnerHTML(target$jscomp$0, innerHTML$jscomp$8, children$jscomp$11);
                    return children$jscomp$11;
                }
        }
        return pushStartGenericElement(target$jscomp$0, props, type);
    }
    function endChunkForTag(tag) {
        var chunk = endTagCache.get(tag);
        void 0 === chunk && (chunk = stringToPrecomputedChunk("</" + tag + ">"), endTagCache.set(tag, chunk));
        return chunk;
    }
    function hoistPreambleState(renderState, preambleState) {
        renderState = renderState.preamble;
        null === renderState.htmlChunks && preambleState.htmlChunks && (renderState.htmlChunks = preambleState.htmlChunks, preambleState.contribution |= 1);
        null === renderState.headChunks && preambleState.headChunks && (renderState.headChunks = preambleState.headChunks, preambleState.contribution |= 4);
        null === renderState.bodyChunks && preambleState.bodyChunks && (renderState.bodyChunks = preambleState.bodyChunks, preambleState.contribution |= 2);
    }
    function writeBootstrap(destination, renderState) {
        renderState = renderState.bootstrapChunks;
        for(var i = 0; i < renderState.length - 1; i++)writeChunk(destination, renderState[i]);
        return i < renderState.length ? (i = renderState[i], renderState.length = 0, writeChunkAndReturn(destination, i)) : !0;
    }
    function writeStartPendingSuspenseBoundary(destination, renderState, id) {
        writeChunk(destination, startPendingSuspenseBoundary1);
        if (null === id) throw Error("An ID must have been assigned before we can complete the boundary.");
        writeChunk(destination, renderState.boundaryPrefix);
        writeChunk(destination, stringToChunk(id.toString(16)));
        return writeChunkAndReturn(destination, startPendingSuspenseBoundary2);
    }
    function writePreambleContribution(destination, preambleState) {
        preambleState = preambleState.contribution;
        preambleState !== NoContribution && (writeChunk(destination, boundaryPreambleContributionChunkStart), writeChunk(destination, stringToChunk("" + preambleState)), writeChunk(destination, boundaryPreambleContributionChunkEnd));
    }
    function writeStartSegment(destination, renderState, formatContext, id) {
        switch(formatContext.insertionMode){
            case ROOT_HTML_MODE:
            case HTML_HTML_MODE:
            case HTML_HEAD_MODE:
            case HTML_MODE:
                return writeChunk(destination, startSegmentHTML), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentHTML2);
            case SVG_MODE:
                return writeChunk(destination, startSegmentSVG), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentSVG2);
            case MATHML_MODE:
                return writeChunk(destination, startSegmentMathML), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentMathML2);
            case HTML_TABLE_MODE:
                return writeChunk(destination, startSegmentTable), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentTable2);
            case HTML_TABLE_BODY_MODE:
                return writeChunk(destination, startSegmentTableBody), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentTableBody2);
            case HTML_TABLE_ROW_MODE:
                return writeChunk(destination, startSegmentTableRow), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentTableRow2);
            case HTML_COLGROUP_MODE:
                return writeChunk(destination, startSegmentColGroup), writeChunk(destination, renderState.segmentPrefix), writeChunk(destination, stringToChunk(id.toString(16))), writeChunkAndReturn(destination, startSegmentColGroup2);
            default:
                throw Error("Unknown insertion mode. This is a bug in React.");
        }
    }
    function writeEndSegment(destination, formatContext) {
        switch(formatContext.insertionMode){
            case ROOT_HTML_MODE:
            case HTML_HTML_MODE:
            case HTML_HEAD_MODE:
            case HTML_MODE:
                return writeChunkAndReturn(destination, endSegmentHTML);
            case SVG_MODE:
                return writeChunkAndReturn(destination, endSegmentSVG);
            case MATHML_MODE:
                return writeChunkAndReturn(destination, endSegmentMathML);
            case HTML_TABLE_MODE:
                return writeChunkAndReturn(destination, endSegmentTable);
            case HTML_TABLE_BODY_MODE:
                return writeChunkAndReturn(destination, endSegmentTableBody);
            case HTML_TABLE_ROW_MODE:
                return writeChunkAndReturn(destination, endSegmentTableRow);
            case HTML_COLGROUP_MODE:
                return writeChunkAndReturn(destination, endSegmentColGroup);
            default:
                throw Error("Unknown insertion mode. This is a bug in React.");
        }
    }
    function escapeJSStringsForInstructionScripts(input) {
        return JSON.stringify(input).replace(regexForJSStringsInInstructionScripts, function(match) {
            switch(match){
                case "<":
                    return "\\u003c";
                case "\u2028":
                    return "\\u2028";
                case "\u2029":
                    return "\\u2029";
                default:
                    throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
            }
        });
    }
    function escapeJSObjectForInstructionScripts(input) {
        return JSON.stringify(input).replace(regexForJSStringsInScripts, function(match) {
            switch(match){
                case "&":
                    return "\\u0026";
                case ">":
                    return "\\u003e";
                case "<":
                    return "\\u003c";
                case "\u2028":
                    return "\\u2028";
                case "\u2029":
                    return "\\u2029";
                default:
                    throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
            }
        });
    }
    function flushStyleTagsLateForBoundary(styleQueue) {
        var rules = styleQueue.rules, hrefs = styleQueue.hrefs;
        0 < rules.length && 0 === hrefs.length && console.error("React expected to have at least one href for an a hoistable style but found none. This is a bug in React.");
        var i = 0;
        if (hrefs.length) {
            writeChunk(this, lateStyleTagResourceOpen1);
            writeChunk(this, styleQueue.precedence);
            for(writeChunk(this, lateStyleTagResourceOpen2); i < hrefs.length - 1; i++)writeChunk(this, hrefs[i]), writeChunk(this, spaceSeparator);
            writeChunk(this, hrefs[i]);
            writeChunk(this, lateStyleTagResourceOpen3);
            for(i = 0; i < rules.length; i++)writeChunk(this, rules[i]);
            destinationHasCapacity = writeChunkAndReturn(this, lateStyleTagTemplateClose);
            currentlyRenderingBoundaryHasStylesToHoist = !0;
            rules.length = 0;
            hrefs.length = 0;
        }
    }
    function hasStylesToHoist(stylesheet) {
        return stylesheet.state !== PREAMBLE ? currentlyRenderingBoundaryHasStylesToHoist = !0 : !1;
    }
    function writeHoistablesForBoundary(destination, hoistableState, renderState) {
        currentlyRenderingBoundaryHasStylesToHoist = !1;
        destinationHasCapacity = !0;
        hoistableState.styles.forEach(flushStyleTagsLateForBoundary, destination);
        hoistableState.stylesheets.forEach(hasStylesToHoist);
        currentlyRenderingBoundaryHasStylesToHoist && (renderState.stylesToHoist = !0);
        return destinationHasCapacity;
    }
    function flushResource(resource) {
        for(var i = 0; i < resource.length; i++)writeChunk(this, resource[i]);
        resource.length = 0;
    }
    function flushStyleInPreamble(stylesheet) {
        pushLinkImpl(stylesheetFlushingQueue, stylesheet.props);
        for(var i = 0; i < stylesheetFlushingQueue.length; i++)writeChunk(this, stylesheetFlushingQueue[i]);
        stylesheetFlushingQueue.length = 0;
        stylesheet.state = PREAMBLE;
    }
    function flushStylesInPreamble(styleQueue) {
        var hasStylesheets = 0 < styleQueue.sheets.size;
        styleQueue.sheets.forEach(flushStyleInPreamble, this);
        styleQueue.sheets.clear();
        var rules = styleQueue.rules, hrefs = styleQueue.hrefs;
        if (!hasStylesheets || hrefs.length) {
            writeChunk(this, styleTagResourceOpen1);
            writeChunk(this, styleQueue.precedence);
            styleQueue = 0;
            if (hrefs.length) {
                for(writeChunk(this, styleTagResourceOpen2); styleQueue < hrefs.length - 1; styleQueue++)writeChunk(this, hrefs[styleQueue]), writeChunk(this, spaceSeparator);
                writeChunk(this, hrefs[styleQueue]);
            }
            writeChunk(this, styleTagResourceOpen3);
            for(styleQueue = 0; styleQueue < rules.length; styleQueue++)writeChunk(this, rules[styleQueue]);
            writeChunk(this, styleTagResourceClose);
            rules.length = 0;
            hrefs.length = 0;
        }
    }
    function preloadLateStyle(stylesheet) {
        if (stylesheet.state === PENDING$1) {
            stylesheet.state = PRELOADED;
            var props = stylesheet.props;
            pushLinkImpl(stylesheetFlushingQueue, {
                rel: "preload",
                as: "style",
                href: stylesheet.props.href,
                crossOrigin: props.crossOrigin,
                fetchPriority: props.fetchPriority,
                integrity: props.integrity,
                media: props.media,
                hrefLang: props.hrefLang,
                referrerPolicy: props.referrerPolicy
            });
            for(stylesheet = 0; stylesheet < stylesheetFlushingQueue.length; stylesheet++)writeChunk(this, stylesheetFlushingQueue[stylesheet]);
            stylesheetFlushingQueue.length = 0;
        }
    }
    function preloadLateStyles(styleQueue) {
        styleQueue.sheets.forEach(preloadLateStyle, this);
        styleQueue.sheets.clear();
    }
    function writeStyleResourceDependenciesInJS(destination, hoistableState) {
        writeChunk(destination, arrayFirstOpenBracket);
        var nextArrayOpenBrackChunk = arrayFirstOpenBracket;
        hoistableState.stylesheets.forEach(function(resource) {
            if (resource.state !== PREAMBLE) {
                if (resource.state === LATE) writeChunk(destination, nextArrayOpenBrackChunk), resource = resource.props.href, checkAttributeStringCoercion(resource, "href"), writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts("" + resource))), writeChunk(destination, arrayCloseBracket), nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
                else {
                    writeChunk(destination, nextArrayOpenBrackChunk);
                    var precedence = resource.props["data-precedence"], props = resource.props, coercedHref = sanitizeURL("" + resource.props.href);
                    writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(coercedHref)));
                    checkAttributeStringCoercion(precedence, "precedence");
                    precedence = "" + precedence;
                    writeChunk(destination, arrayInterstitial);
                    writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(precedence)));
                    for(var propKey in props)if (hasOwnProperty.call(props, propKey) && (precedence = props[propKey], null != precedence)) switch(propKey){
                        case "href":
                        case "rel":
                        case "precedence":
                        case "data-precedence":
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                        default:
                            writeStyleResourceAttributeInJS(destination, propKey, precedence);
                    }
                    writeChunk(destination, arrayCloseBracket);
                    nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
                    resource.state = LATE;
                }
            }
        });
        writeChunk(destination, arrayCloseBracket);
    }
    function writeStyleResourceAttributeInJS(destination, name, value) {
        var attributeName = name.toLowerCase();
        switch(typeof value){
            case "function":
            case "symbol":
                return;
        }
        switch(name){
            case "innerHTML":
            case "dangerouslySetInnerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "style":
            case "ref":
                return;
            case "className":
                attributeName = "class";
                checkAttributeStringCoercion(value, attributeName);
                name = "" + value;
                break;
            case "hidden":
                if (!1 === value) return;
                name = "";
                break;
            case "src":
            case "href":
                value = sanitizeURL(value);
                checkAttributeStringCoercion(value, attributeName);
                name = "" + value;
                break;
            default:
                if (2 < name.length && ("o" === name[0] || "O" === name[0]) && ("n" === name[1] || "N" === name[1]) || !isAttributeNameSafe(name)) return;
                checkAttributeStringCoercion(value, attributeName);
                name = "" + value;
        }
        writeChunk(destination, arrayInterstitial);
        writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(attributeName)));
        writeChunk(destination, arrayInterstitial);
        writeChunk(destination, stringToChunk(escapeJSObjectForInstructionScripts(name)));
    }
    function createHoistableState() {
        return {
            styles: new Set(),
            stylesheets: new Set()
        };
    }
    function preloadBootstrapScriptOrModule(resumableState, renderState, href, props) {
        (resumableState.scriptResources.hasOwnProperty(href) || resumableState.moduleScriptResources.hasOwnProperty(href)) && console.error('Internal React Error: React expected bootstrap script or module with src "%s" to not have been preloaded already. please file an issue', href);
        resumableState.scriptResources[href] = EXISTS;
        resumableState.moduleScriptResources[href] = EXISTS;
        resumableState = [];
        pushLinkImpl(resumableState, props);
        renderState.bootstrapScripts.add(resumableState);
    }
    function adoptPreloadCredentials(target, preloadState) {
        null == target.crossOrigin && (target.crossOrigin = preloadState[0]);
        null == target.integrity && (target.integrity = preloadState[1]);
    }
    function getPreloadAsHeader(href, as, params) {
        href = escapeHrefForLinkHeaderURLContext(href);
        as = escapeStringForLinkHeaderQuotedParamValueContext(as, "as");
        as = "<" + href + '>; rel=preload; as="' + as + '"';
        for(var paramName in params)hasOwnProperty.call(params, paramName) && (href = params[paramName], "string" === typeof href && (as += "; " + paramName.toLowerCase() + '="' + escapeStringForLinkHeaderQuotedParamValueContext(href, paramName) + '"'));
        return as;
    }
    function escapeHrefForLinkHeaderURLContext(hrefInput) {
        checkAttributeStringCoercion(hrefInput, "href");
        return ("" + hrefInput).replace(regexForHrefInLinkHeaderURLContext, escapeHrefForLinkHeaderURLContextReplacer);
    }
    function escapeHrefForLinkHeaderURLContextReplacer(match) {
        switch(match){
            case "<":
                return "%3C";
            case ">":
                return "%3E";
            case "\n":
                return "%0A";
            case "\r":
                return "%0D";
            default:
                throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
    }
    function escapeStringForLinkHeaderQuotedParamValueContext(value, name) {
        willCoercionThrow(value) && (console.error("The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.", name, typeName(value)), testStringCoercion(value));
        return ("" + value).replace(regexForLinkHeaderQuotedParamValueContext, escapeStringForLinkHeaderQuotedParamValueContextReplacer);
    }
    function escapeStringForLinkHeaderQuotedParamValueContextReplacer(match) {
        switch(match){
            case '"':
                return "%22";
            case "'":
                return "%27";
            case ";":
                return "%3B";
            case ",":
                return "%2C";
            case "\n":
                return "%0A";
            case "\r":
                return "%0D";
            default:
                throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
    }
    function hoistStyleQueueDependency(styleQueue) {
        this.styles.add(styleQueue);
    }
    function hoistStylesheetDependency(stylesheet) {
        this.stylesheets.add(stylesheet);
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function popToNearestCommonAncestor(prev, next) {
        if (prev !== next) {
            prev.context._currentValue = prev.parentValue;
            prev = prev.parent;
            var parentNext = next.parent;
            if (null === prev) {
                if (null !== parentNext) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
            } else {
                if (null === parentNext) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
                popToNearestCommonAncestor(prev, parentNext);
            }
            next.context._currentValue = next.value;
        }
    }
    function popAllPrevious(prev) {
        prev.context._currentValue = prev.parentValue;
        prev = prev.parent;
        null !== prev && popAllPrevious(prev);
    }
    function pushAllNext(next) {
        var parentNext = next.parent;
        null !== parentNext && pushAllNext(parentNext);
        next.context._currentValue = next.value;
    }
    function popPreviousToCommonLevel(prev, next) {
        prev.context._currentValue = prev.parentValue;
        prev = prev.parent;
        if (null === prev) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        prev.depth === next.depth ? popToNearestCommonAncestor(prev, next) : popPreviousToCommonLevel(prev, next);
    }
    function popNextToCommonLevel(prev, next) {
        var parentNext = next.parent;
        if (null === parentNext) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        prev.depth === parentNext.depth ? popToNearestCommonAncestor(prev, parentNext) : popNextToCommonLevel(prev, parentNext);
        next.context._currentValue = next.value;
    }
    function switchContext(newSnapshot) {
        var prev = currentActiveSnapshot;
        prev !== newSnapshot && (null === prev ? pushAllNext(newSnapshot) : null === newSnapshot ? popAllPrevious(prev) : prev.depth === newSnapshot.depth ? popToNearestCommonAncestor(prev, newSnapshot) : prev.depth > newSnapshot.depth ? popPreviousToCommonLevel(prev, newSnapshot) : popNextToCommonLevel(prev, newSnapshot), currentActiveSnapshot = newSnapshot);
    }
    function warnOnInvalidCallback(callback) {
        if (null !== callback && "function" !== typeof callback) {
            var key = String(callback);
            didWarnOnInvalidCallback.has(key) || (didWarnOnInvalidCallback.add(key), console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", callback));
        }
    }
    function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && getComponentNameFromType(publicInstance) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnAboutNoopUpdateForComponent[warningKey] || (console.error("Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", callerName, publicInstance), didWarnAboutNoopUpdateForComponent[warningKey] = !0);
    }
    function pushTreeContext(baseContext, totalChildren, index) {
        var baseIdWithLeadingBit = baseContext.id;
        baseContext = baseContext.overflow;
        var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
        baseIdWithLeadingBit &= ~(1 << baseLength);
        index += 1;
        var length = 32 - clz32(totalChildren) + baseLength;
        if (30 < length) {
            var numberOfOverflowBits = baseLength - baseLength % 5;
            length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
            baseIdWithLeadingBit >>= numberOfOverflowBits;
            baseLength -= numberOfOverflowBits;
            return {
                id: 1 << 32 - clz32(totalChildren) + baseLength | index << baseLength | baseIdWithLeadingBit,
                overflow: length + baseContext
            };
        }
        return {
            id: 1 << length | index << baseLength | baseIdWithLeadingBit,
            overflow: baseContext
        };
    }
    function clz32Fallback(x) {
        x >>>= 0;
        return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
    }
    function noop$2() {}
    function trackUsedThenable(thenableState, thenable, index) {
        index = thenableState[index];
        void 0 === index ? thenableState.push(thenable) : index !== thenable && (thenable.then(noop$2, noop$2), thenable = index);
        switch(thenable.status){
            case "fulfilled":
                return thenable.value;
            case "rejected":
                throw thenable.reason;
            default:
                "string" === typeof thenable.status ? thenable.then(noop$2, noop$2) : (thenableState = thenable, thenableState.status = "pending", thenableState.then(function(fulfilledValue) {
                    if ("pending" === thenable.status) {
                        var fulfilledThenable = thenable;
                        fulfilledThenable.status = "fulfilled";
                        fulfilledThenable.value = fulfilledValue;
                    }
                }, function(error) {
                    if ("pending" === thenable.status) {
                        var rejectedThenable = thenable;
                        rejectedThenable.status = "rejected";
                        rejectedThenable.reason = error;
                    }
                }));
                switch(thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenable.reason;
                }
                suspendedThenable = thenable;
                throw SuspenseException;
        }
    }
    function getSuspendedThenable() {
        if (null === suspendedThenable) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
        var thenable = suspendedThenable;
        suspendedThenable = null;
        return thenable;
    }
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function resolveCurrentlyRenderingComponent() {
        if (null === currentlyRenderingComponent) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        isInHookUserCodeInDev && console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks");
        return currentlyRenderingComponent;
    }
    function createHook() {
        if (0 < numberOfReRenders) throw Error("Rendered more hooks than during the previous render");
        return {
            memoizedState: null,
            queue: null,
            next: null
        };
    }
    function createWorkInProgressHook() {
        null === workInProgressHook ? null === firstWorkInProgressHook ? (isReRender = !1, firstWorkInProgressHook = workInProgressHook = createHook()) : (isReRender = !0, workInProgressHook = firstWorkInProgressHook) : null === workInProgressHook.next ? (isReRender = !1, workInProgressHook = workInProgressHook.next = createHook()) : (isReRender = !0, workInProgressHook = workInProgressHook.next);
        return workInProgressHook;
    }
    function getThenableStateAfterSuspending() {
        var state = thenableState;
        thenableState = null;
        return state;
    }
    function resetHooksState() {
        isInHookUserCodeInDev = !1;
        currentlyRenderingKeyPath = currentlyRenderingRequest = currentlyRenderingTask = currentlyRenderingComponent = null;
        didScheduleRenderPhaseUpdate = !1;
        firstWorkInProgressHook = null;
        numberOfReRenders = 0;
        workInProgressHook = renderPhaseUpdates = null;
    }
    function readContext(context) {
        isInHookUserCodeInDev && console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        return context._currentValue;
    }
    function basicStateReducer(state, action) {
        return "function" === typeof action ? action(state) : action;
    }
    function useReducer(reducer, initialArg, init) {
        reducer !== basicStateReducer && (currentHookNameInDev = "useReducer");
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        if (isReRender) {
            init = workInProgressHook.queue;
            initialArg = init.dispatch;
            if (null !== renderPhaseUpdates) {
                var firstRenderPhaseUpdate = renderPhaseUpdates.get(init);
                if (void 0 !== firstRenderPhaseUpdate) {
                    renderPhaseUpdates.delete(init);
                    init = workInProgressHook.memoizedState;
                    do {
                        var action = firstRenderPhaseUpdate.action;
                        isInHookUserCodeInDev = !0;
                        init = reducer(init, action);
                        isInHookUserCodeInDev = !1;
                        firstRenderPhaseUpdate = firstRenderPhaseUpdate.next;
                    }while (null !== firstRenderPhaseUpdate);
                    workInProgressHook.memoizedState = init;
                    return [
                        init,
                        initialArg
                    ];
                }
            }
            return [
                workInProgressHook.memoizedState,
                initialArg
            ];
        }
        isInHookUserCodeInDev = !0;
        reducer = reducer === basicStateReducer ? "function" === typeof initialArg ? initialArg() : initialArg : void 0 !== init ? init(initialArg) : initialArg;
        isInHookUserCodeInDev = !1;
        workInProgressHook.memoizedState = reducer;
        reducer = workInProgressHook.queue = {
            last: null,
            dispatch: null
        };
        reducer = reducer.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, reducer);
        return [
            workInProgressHook.memoizedState,
            reducer
        ];
    }
    function useMemo(nextCreate, deps) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        if (null !== workInProgressHook) {
            var prevState = workInProgressHook.memoizedState;
            if (null !== prevState && null !== deps) {
                a: {
                    var JSCompiler_inline_result = prevState[1];
                    if (null === JSCompiler_inline_result) console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev), JSCompiler_inline_result = !1;
                    else {
                        deps.length !== JSCompiler_inline_result.length && console.error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + deps.join(", ") + "]", "[" + JSCompiler_inline_result.join(", ") + "]");
                        for(var i = 0; i < JSCompiler_inline_result.length && i < deps.length; i++)if (!objectIs(deps[i], JSCompiler_inline_result[i])) {
                            JSCompiler_inline_result = !1;
                            break a;
                        }
                        JSCompiler_inline_result = !0;
                    }
                }
                if (JSCompiler_inline_result) return prevState[0];
            }
        }
        isInHookUserCodeInDev = !0;
        nextCreate = nextCreate();
        isInHookUserCodeInDev = !1;
        workInProgressHook.memoizedState = [
            nextCreate,
            deps
        ];
        return nextCreate;
    }
    function dispatchAction(componentIdentity, queue, action) {
        if (25 <= numberOfReRenders) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        if (componentIdentity === currentlyRenderingComponent) {
            if (didScheduleRenderPhaseUpdate = !0, componentIdentity = {
                action: action,
                next: null
            }, null === renderPhaseUpdates && (renderPhaseUpdates = new Map()), action = renderPhaseUpdates.get(queue), void 0 === action) renderPhaseUpdates.set(queue, componentIdentity);
            else {
                for(queue = action; null !== queue.next;)queue = queue.next;
                queue.next = componentIdentity;
            }
        }
    }
    function unsupportedStartTransition() {
        throw Error("startTransition cannot be called during server rendering.");
    }
    function unsupportedSetOptimisticState() {
        throw Error("Cannot update optimistic state while rendering.");
    }
    function useActionState(action, initialState, permalink) {
        resolveCurrentlyRenderingComponent();
        var actionStateHookIndex = actionStateCounter++, request = currentlyRenderingRequest;
        if ("function" === typeof action.$$FORM_ACTION) {
            var nextPostbackStateKey = null, componentKeyPath = currentlyRenderingKeyPath;
            request = request.formState;
            var isSignatureEqual = action.$$IS_SIGNATURE_EQUAL;
            if (null !== request && "function" === typeof isSignatureEqual) {
                var postbackKey = request[1];
                isSignatureEqual.call(action, request[2], request[3]) && (nextPostbackStateKey = void 0 !== permalink ? "p" + permalink : "k" + murmurhash3_32_gc(JSON.stringify([
                    componentKeyPath,
                    null,
                    actionStateHookIndex
                ]), 0), postbackKey === nextPostbackStateKey && (actionStateMatchingIndex = actionStateHookIndex, initialState = request[0]));
            }
            var boundAction = action.bind(null, initialState);
            action = function(payload) {
                boundAction(payload);
            };
            "function" === typeof boundAction.$$FORM_ACTION && (action.$$FORM_ACTION = function(prefix) {
                prefix = boundAction.$$FORM_ACTION(prefix);
                void 0 !== permalink && (checkAttributeStringCoercion(permalink, "target"), permalink += "", prefix.action = permalink);
                var formData = prefix.data;
                formData && (null === nextPostbackStateKey && (nextPostbackStateKey = void 0 !== permalink ? "p" + permalink : "k" + murmurhash3_32_gc(JSON.stringify([
                    componentKeyPath,
                    null,
                    actionStateHookIndex
                ]), 0)), formData.append("$ACTION_KEY", nextPostbackStateKey));
                return prefix;
            });
            return [
                initialState,
                action,
                !1
            ];
        }
        var _boundAction = action.bind(null, initialState);
        return [
            initialState,
            function(payload) {
                _boundAction(payload);
            },
            !1
        ];
    }
    function unwrapThenable(thenable) {
        var index = thenableIndexCounter;
        thenableIndexCounter += 1;
        null === thenableState && (thenableState = []);
        return trackUsedThenable(thenableState, thenable, index);
    }
    function unsupportedRefresh() {
        throw Error("Cache cannot be refreshed during server rendering.");
    }
    function noop$1() {}
    function disabledLog() {}
    function disableLogs() {
        if (0 === disabledDepth) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
                configurable: !0,
                enumerable: !0,
                value: disabledLog,
                writable: !0
            };
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
            var props = {
                configurable: !0,
                enumerable: !0,
                writable: !0
            };
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        }
        0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function prepareStackTrace(error, structuredStackTrace) {
        error = (error.name || "Error") + ": " + (error.message || "");
        for(var i = 0; i < structuredStackTrace.length; i++)error += "\n    at " + structuredStackTrace[i].toString();
        return error;
    }
    function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix) try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = !0;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = prepareStackTrace;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
            var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (construct) {
                            var Fake = function() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function() {
                                    throw Error();
                                }
                            });
                            if ("object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    var control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x$0) {
                                    control = x$0;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x$1) {
                                control = x$1;
                            }
                            (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
                        }
                    } catch (sample) {
                        if (sample && control && "string" === typeof sample.stack) return [
                            sample.stack,
                            control.stack
                        ];
                    }
                    return [
                        null,
                        null
                    ];
                }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
                var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
                for(_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");)namePropDescriptor++;
                for(; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");)_RunInRootFrame$Deter++;
                if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for(namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];)_RunInRootFrame$Deter--;
                for(; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                        do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                            var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                            fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                            "function" === typeof fn && componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                        while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                    }
                    break;
                }
            }
        } finally{
            reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
    }
    function formatOwnerStack(error) {
        var prevPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = prepareStackTrace;
        error = error.stack;
        Error.prepareStackTrace = prevPrepareStackTrace;
        error.startsWith("Error: react-stack-top-frame\n") && (error = error.slice(29));
        prevPrepareStackTrace = error.indexOf("\n");
        -1 !== prevPrepareStackTrace && (error = error.slice(prevPrepareStackTrace + 1));
        prevPrepareStackTrace = error.indexOf("react_stack_bottom_frame");
        -1 !== prevPrepareStackTrace && (prevPrepareStackTrace = error.lastIndexOf("\n", prevPrepareStackTrace));
        if (-1 !== prevPrepareStackTrace) error = error.slice(0, prevPrepareStackTrace);
        else return "";
        return error;
    }
    function describeComponentStackByType(type) {
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        if ("function" === typeof type) return type.prototype && type.prototype.isReactComponent ? describeNativeComponentFrame(type, !0) : describeNativeComponentFrame(type, !1);
        if ("object" === typeof type && null !== type) {
            switch(type.$$typeof){
                case REACT_FORWARD_REF_TYPE:
                    return describeNativeComponentFrame(type.render, !1);
                case REACT_MEMO_TYPE:
                    return describeNativeComponentFrame(type.type, !1);
                case REACT_LAZY_TYPE:
                    var lazyComponent = type, payload = lazyComponent._payload;
                    lazyComponent = lazyComponent._init;
                    try {
                        type = lazyComponent(payload);
                    } catch (x) {
                        return describeBuiltInComponentFrame("Lazy");
                    }
                    return describeComponentStackByType(type);
            }
            if ("string" === typeof type.name) return payload = type.env, describeBuiltInComponentFrame(type.name + (payload ? " [" + payload + "]" : ""));
        }
        switch(type){
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
        }
        return "";
    }
    function defaultErrorHandler(error) {
        if ("object" === typeof error && null !== error && "string" === typeof error.environmentName) {
            var JSCompiler_inline_result = error.environmentName;
            error = [
                error
            ].slice(0);
            "string" === typeof error[0] ? error.splice(0, 1, "\u001b[0m\u001b[7m%c%s\u001b[0m%c " + error[0], "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + JSCompiler_inline_result + " ", "") : error.splice(0, 0, "\u001b[0m\u001b[7m%c%s\u001b[0m%c ", "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", " " + JSCompiler_inline_result + " ", "");
            error.unshift(console);
            JSCompiler_inline_result = bind.apply(console.error, error);
            JSCompiler_inline_result();
        } else console.error(error);
        return null;
    }
    function noop() {}
    function RequestInstance(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState) {
        var abortSet = new Set();
        this.destination = null;
        this.flushScheduled = !1;
        this.resumableState = resumableState;
        this.renderState = renderState;
        this.rootFormatContext = rootFormatContext;
        this.progressiveChunkSize = void 0 === progressiveChunkSize ? 12800 : progressiveChunkSize;
        this.status = 10;
        this.fatalError = null;
        this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0;
        this.completedPreambleSegments = this.completedRootSegment = null;
        this.abortableTasks = abortSet;
        this.pingedTasks = [];
        this.clientRenderedBoundaries = [];
        this.completedBoundaries = [];
        this.partialBoundaries = [];
        this.trackedPostpones = null;
        this.onError = void 0 === onError ? defaultErrorHandler : onError;
        this.onPostpone = void 0 === onPostpone ? noop : onPostpone;
        this.onAllReady = void 0 === onAllReady ? noop : onAllReady;
        this.onShellReady = void 0 === onShellReady ? noop : onShellReady;
        this.onShellError = void 0 === onShellError ? noop : onShellError;
        this.onFatalError = void 0 === onFatalError ? noop : onFatalError;
        this.formState = void 0 === formState ? null : formState;
        this.didWarnForKey = null;
    }
    function createRequest(children, resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState) {
        var now = getCurrentTime();
        1e3 < now - lastResetTime && (ReactSharedInternals.recentlyCreatedOwnerStacks = 0, lastResetTime = now);
        resumableState = new RequestInstance(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState);
        renderState = createPendingSegment(resumableState, 0, null, rootFormatContext, !1, !1);
        renderState.parentFlushed = !0;
        children = createRenderTask(resumableState, null, children, -1, null, renderState, null, null, resumableState.abortableTasks, null, rootFormatContext, null, emptyTreeContext, null, !1, emptyContextObject, null);
        pushComponentStack(children);
        resumableState.pingedTasks.push(children);
        return resumableState;
    }
    function createPrerenderRequest(children, resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone) {
        children = createRequest(children, resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, void 0);
        children.trackedPostpones = {
            workingMap: new Map(),
            rootNodes: [],
            rootSlots: null
        };
        return children;
    }
    function resolveRequest() {
        if (currentRequest) return currentRequest;
        if (supportsRequestStorage) {
            var store = requestStorage.getStore();
            if (store) return store;
        }
        return null;
    }
    function pingTask(request, task) {
        request.pingedTasks.push(task);
        1 === request.pingedTasks.length && (request.flushScheduled = null !== request.destination, null !== request.trackedPostpones || 10 === request.status ? scheduleMicrotask(function() {
            return performWork(request);
        }) : setTimeout(function() {
            return performWork(request);
        }, 0));
    }
    function createSuspenseBoundary(request, fallbackAbortableTasks, contentPreamble, fallbackPreamble) {
        return {
            status: PENDING,
            rootSegmentID: -1,
            parentFlushed: !1,
            pendingTasks: 0,
            completedSegments: [],
            byteSize: 0,
            fallbackAbortableTasks: fallbackAbortableTasks,
            errorDigest: null,
            contentState: createHoistableState(),
            fallbackState: createHoistableState(),
            contentPreamble: contentPreamble,
            fallbackPreamble: fallbackPreamble,
            trackedContentKeyPath: null,
            trackedFallbackNode: null,
            errorMessage: null,
            errorStack: null,
            errorComponentStack: null
        };
    }
    function createRenderTask(request, thenableState, node, childIndex, blockedBoundary, blockedSegment, blockedPreamble, hoistableState, abortSet, keyPath, formatContext, context, treeContext, componentStack, isFallback, legacyContext, debugTask) {
        request.allPendingTasks++;
        null === blockedBoundary ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
        var task = {
            replay: null,
            node: node,
            childIndex: childIndex,
            ping: function() {
                return pingTask(request, task);
            },
            blockedBoundary: blockedBoundary,
            blockedSegment: blockedSegment,
            blockedPreamble: blockedPreamble,
            hoistableState: hoistableState,
            abortSet: abortSet,
            keyPath: keyPath,
            formatContext: formatContext,
            context: context,
            treeContext: treeContext,
            componentStack: componentStack,
            thenableState: thenableState,
            isFallback: isFallback
        };
        task.debugTask = debugTask;
        abortSet.add(task);
        return task;
    }
    function createReplayTask(request, thenableState, replay, node, childIndex, blockedBoundary, hoistableState, abortSet, keyPath, formatContext, context, treeContext, componentStack, isFallback, legacyContext, debugTask) {
        request.allPendingTasks++;
        null === blockedBoundary ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
        replay.pendingTasks++;
        var task = {
            replay: replay,
            node: node,
            childIndex: childIndex,
            ping: function() {
                return pingTask(request, task);
            },
            blockedBoundary: blockedBoundary,
            blockedSegment: null,
            blockedPreamble: null,
            hoistableState: hoistableState,
            abortSet: abortSet,
            keyPath: keyPath,
            formatContext: formatContext,
            context: context,
            treeContext: treeContext,
            componentStack: componentStack,
            thenableState: thenableState,
            isFallback: isFallback
        };
        task.debugTask = debugTask;
        abortSet.add(task);
        return task;
    }
    function createPendingSegment(request, index, boundary, parentFormatContext, lastPushedText, textEmbedded) {
        return {
            status: PENDING,
            parentFlushed: !1,
            id: -1,
            index: index,
            chunks: [],
            children: [],
            preambleChildren: [],
            parentFormatContext: parentFormatContext,
            boundary: boundary,
            lastPushedText: lastPushedText,
            textEmbedded: textEmbedded
        };
    }
    function getCurrentStackInDEV() {
        if (null === currentTaskInDEV || null === currentTaskInDEV.componentStack) return "";
        var componentStack = currentTaskInDEV.componentStack;
        try {
            var info = "";
            if ("string" === typeof componentStack.type) info += describeBuiltInComponentFrame(componentStack.type);
            else if ("function" === typeof componentStack.type) {
                if (!componentStack.owner) {
                    var JSCompiler_temp_const = info, fn = componentStack.type, name = fn ? fn.displayName || fn.name : "";
                    var JSCompiler_inline_result = name ? describeBuiltInComponentFrame(name) : "";
                    info = JSCompiler_temp_const + JSCompiler_inline_result;
                }
            } else componentStack.owner || (info += describeComponentStackByType(componentStack.type));
            for(; componentStack;)JSCompiler_temp_const = null, null != componentStack.debugStack ? JSCompiler_temp_const = formatOwnerStack(componentStack.debugStack) : (JSCompiler_inline_result = componentStack, null != JSCompiler_inline_result.stack && (JSCompiler_temp_const = "string" !== typeof JSCompiler_inline_result.stack ? JSCompiler_inline_result.stack = formatOwnerStack(JSCompiler_inline_result.stack) : JSCompiler_inline_result.stack)), (componentStack = componentStack.owner) && JSCompiler_temp_const && (info += "\n" + JSCompiler_temp_const);
            var JSCompiler_inline_result$jscomp$0 = info;
        } catch (x) {
            JSCompiler_inline_result$jscomp$0 = "\nError generating stack: " + x.message + "\n" + x.stack;
        }
        return JSCompiler_inline_result$jscomp$0;
    }
    function pushServerComponentStack(task, debugInfo) {
        if (null != debugInfo) for(var i = 0; i < debugInfo.length; i++){
            var componentInfo = debugInfo[i];
            "string" === typeof componentInfo.name && void 0 !== componentInfo.debugStack && (task.componentStack = {
                parent: task.componentStack,
                type: componentInfo,
                owner: componentInfo.owner,
                stack: componentInfo.debugStack
            }, task.debugTask = componentInfo.debugTask);
        }
    }
    function pushComponentStack(task) {
        var node = task.node;
        if ("object" === typeof node && null !== node) switch(node.$$typeof){
            case REACT_ELEMENT_TYPE:
                var type = node.type, owner = node._owner, stack = node._debugStack;
                pushServerComponentStack(task, node._debugInfo);
                task.debugTask = node._debugTask;
                task.componentStack = {
                    parent: task.componentStack,
                    type: type,
                    owner: owner,
                    stack: stack
                };
                break;
            case REACT_LAZY_TYPE:
                pushServerComponentStack(task, node._debugInfo);
                break;
            default:
                "function" === typeof node.then && pushServerComponentStack(task, node._debugInfo);
        }
    }
    function getThrownInfo(node$jscomp$0) {
        var errorInfo = {};
        node$jscomp$0 && Object.defineProperty(errorInfo, "componentStack", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                try {
                    var info = "", node = node$jscomp$0;
                    do info += describeComponentStackByType(node.type), node = node.parent;
                    while (node);
                    var stack = info;
                } catch (x) {
                    stack = "\nError generating stack: " + x.message + "\n" + x.stack;
                }
                Object.defineProperty(errorInfo, "componentStack", {
                    value: stack
                });
                return stack;
            }
        });
        return errorInfo;
    }
    function encodeErrorForBoundary(boundary, digest, error, thrownInfo, wasAborted) {
        boundary.errorDigest = digest;
        error instanceof Error ? (digest = String(error.message), error = String(error.stack)) : (digest = "object" === typeof error && null !== error ? describeObjectForErrorMessage(error) : String(error), error = null);
        wasAborted = wasAborted ? "Switched to client rendering because the server rendering aborted due to:\n\n" : "Switched to client rendering because the server rendering errored:\n\n";
        boundary.errorMessage = wasAborted + digest;
        boundary.errorStack = null !== error ? wasAborted + error : null;
        boundary.errorComponentStack = thrownInfo.componentStack;
    }
    function logRecoverableError(request, error, errorInfo, debugTask) {
        request = request.onError;
        error = debugTask ? debugTask.run(request.bind(null, error, errorInfo)) : request(error, errorInfo);
        if (null != error && "string" !== typeof error) console.error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "%s" instead', typeof error);
        else return error;
    }
    function fatalError(request, error, errorInfo, debugTask) {
        errorInfo = request.onShellError;
        var onFatalError = request.onFatalError;
        debugTask ? (debugTask.run(errorInfo.bind(null, error)), debugTask.run(onFatalError.bind(null, error))) : (errorInfo(error), onFatalError(error));
        null !== request.destination ? (request.status = CLOSED, closeWithError(request.destination, error)) : (request.status = 13, request.fatalError = error);
    }
    function renderWithHooks(request, task, keyPath, Component, props, secondArg) {
        var prevThenableState = task.thenableState;
        task.thenableState = null;
        currentlyRenderingComponent = {};
        currentlyRenderingTask = task;
        currentlyRenderingRequest = request;
        currentlyRenderingKeyPath = keyPath;
        isInHookUserCodeInDev = !1;
        actionStateCounter = localIdCounter = 0;
        actionStateMatchingIndex = -1;
        thenableIndexCounter = 0;
        thenableState = prevThenableState;
        for(request = callComponentInDEV(Component, props, secondArg); didScheduleRenderPhaseUpdate;)didScheduleRenderPhaseUpdate = !1, actionStateCounter = localIdCounter = 0, actionStateMatchingIndex = -1, thenableIndexCounter = 0, numberOfReRenders += 1, workInProgressHook = null, request = Component(props, secondArg);
        resetHooksState();
        return request;
    }
    function finishFunctionComponent(request, task, keyPath, children, hasId, actionStateCount, actionStateMatchingIndex) {
        var didEmitActionStateMarkers = !1;
        if (0 !== actionStateCount && null !== request.formState) {
            var segment = task.blockedSegment;
            if (null !== segment) {
                didEmitActionStateMarkers = !0;
                segment = segment.chunks;
                for(var i = 0; i < actionStateCount; i++)i === actionStateMatchingIndex ? segment.push(formStateMarkerIsMatching) : segment.push(formStateMarkerIsNotMatching);
            }
        }
        actionStateCount = task.keyPath;
        task.keyPath = keyPath;
        hasId ? (keyPath = task.treeContext, task.treeContext = pushTreeContext(keyPath, 1, 0), renderNode(request, task, children, -1), task.treeContext = keyPath) : didEmitActionStateMarkers ? renderNode(request, task, children, -1) : renderNodeDestructive(request, task, children, -1);
        task.keyPath = actionStateCount;
    }
    function renderElement(request, task, keyPath, type, props, ref) {
        if ("function" === typeof type) {
            if (type.prototype && type.prototype.isReactComponent) {
                var newProps = props;
                if ("ref" in props) {
                    newProps = {};
                    for(var propName in props)"ref" !== propName && (newProps[propName] = props[propName]);
                }
                var defaultProps = type.defaultProps;
                if (defaultProps) {
                    newProps === props && (newProps = assign({}, newProps, props));
                    for(var _propName in defaultProps)void 0 === newProps[_propName] && (newProps[_propName] = defaultProps[_propName]);
                }
                var resolvedProps = newProps;
                var context = emptyContextObject, contextType = type.contextType;
                if ("contextType" in type && null !== contextType && (void 0 === contextType || contextType.$$typeof !== REACT_CONTEXT_TYPE) && !didWarnAboutInvalidateContextType.has(type)) {
                    didWarnAboutInvalidateContextType.add(type);
                    var addendum = void 0 === contextType ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : "object" !== typeof contextType ? " However, it is set to a " + typeof contextType + "." : contextType.$$typeof === REACT_CONSUMER_TYPE ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
                    console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(type) || "Component", addendum);
                }
                "object" === typeof contextType && null !== contextType && (context = contextType._currentValue);
                var instance = new type(resolvedProps, context);
                if ("function" === typeof type.getDerivedStateFromProps && (null === instance.state || void 0 === instance.state)) {
                    var componentName = getComponentNameFromType(type) || "Component";
                    didWarnAboutUninitializedState.has(componentName) || (didWarnAboutUninitializedState.add(componentName), console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, null === instance.state ? "null" : "undefined", componentName));
                }
                if ("function" === typeof type.getDerivedStateFromProps || "function" === typeof instance.getSnapshotBeforeUpdate) {
                    var foundWillMountName = null, foundWillReceivePropsName = null, foundWillUpdateName = null;
                    "function" === typeof instance.componentWillMount && !0 !== instance.componentWillMount.__suppressDeprecationWarning ? foundWillMountName = "componentWillMount" : "function" === typeof instance.UNSAFE_componentWillMount && (foundWillMountName = "UNSAFE_componentWillMount");
                    "function" === typeof instance.componentWillReceiveProps && !0 !== instance.componentWillReceiveProps.__suppressDeprecationWarning ? foundWillReceivePropsName = "componentWillReceiveProps" : "function" === typeof instance.UNSAFE_componentWillReceiveProps && (foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps");
                    "function" === typeof instance.componentWillUpdate && !0 !== instance.componentWillUpdate.__suppressDeprecationWarning ? foundWillUpdateName = "componentWillUpdate" : "function" === typeof instance.UNSAFE_componentWillUpdate && (foundWillUpdateName = "UNSAFE_componentWillUpdate");
                    if (null !== foundWillMountName || null !== foundWillReceivePropsName || null !== foundWillUpdateName) {
                        var _componentName = getComponentNameFromType(type) || "Component", newApiName = "function" === typeof type.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                        didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName) || (didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName), console.error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://react.dev/link/unsafe-component-lifecycles", _componentName, newApiName, null !== foundWillMountName ? "\n  " + foundWillMountName : "", null !== foundWillReceivePropsName ? "\n  " + foundWillReceivePropsName : "", null !== foundWillUpdateName ? "\n  " + foundWillUpdateName : ""));
                    }
                }
                var name = getComponentNameFromType(type) || "Component";
                instance.render || (type.prototype && "function" === typeof type.prototype.render ? console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?", name) : console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.", name));
                !instance.getInitialState || instance.getInitialState.isReactClassApproved || instance.state || console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
                instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved && console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
                instance.contextType && console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
                type.childContextTypes && !didWarnAboutChildContextTypes.has(type) && (didWarnAboutChildContextTypes.add(type), console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)", name));
                type.contextTypes && !didWarnAboutContextTypes$1.has(type) && (didWarnAboutContextTypes$1.add(type), console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)", name));
                "function" === typeof instance.componentShouldUpdate && console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
                type.prototype && type.prototype.isPureReactComponent && "undefined" !== typeof instance.shouldComponentUpdate && console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(type) || "A pure component");
                "function" === typeof instance.componentDidUnmount && console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
                "function" === typeof instance.componentDidReceiveProps && console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
                "function" === typeof instance.componentWillRecieveProps && console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
                "function" === typeof instance.UNSAFE_componentWillRecieveProps && console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
                var hasMutatedProps = instance.props !== resolvedProps;
                void 0 !== instance.props && hasMutatedProps && console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name);
                instance.defaultProps && console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
                "function" !== typeof instance.getSnapshotBeforeUpdate || "function" === typeof instance.componentDidUpdate || didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(type) || (didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(type), console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(type)));
                "function" === typeof instance.getDerivedStateFromProps && console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
                "function" === typeof instance.getDerivedStateFromError && console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
                "function" === typeof type.getSnapshotBeforeUpdate && console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
                var state = instance.state;
                state && ("object" !== typeof state || isArrayImpl(state)) && console.error("%s.state: must be set to an object or null", name);
                "function" === typeof instance.getChildContext && "object" !== typeof type.childContextTypes && console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
                var initialState = void 0 !== instance.state ? instance.state : null;
                instance.updater = classComponentUpdater;
                instance.props = resolvedProps;
                instance.state = initialState;
                var internalInstance = {
                    queue: [],
                    replace: !1
                };
                instance._reactInternals = internalInstance;
                var contextType$jscomp$0 = type.contextType;
                instance.context = "object" === typeof contextType$jscomp$0 && null !== contextType$jscomp$0 ? contextType$jscomp$0._currentValue : emptyContextObject;
                if (instance.state === resolvedProps) {
                    var componentName$jscomp$0 = getComponentNameFromType(type) || "Component";
                    didWarnAboutDirectlyAssigningPropsToState.has(componentName$jscomp$0) || (didWarnAboutDirectlyAssigningPropsToState.add(componentName$jscomp$0), console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName$jscomp$0));
                }
                var getDerivedStateFromProps = type.getDerivedStateFromProps;
                if ("function" === typeof getDerivedStateFromProps) {
                    var partialState = getDerivedStateFromProps(resolvedProps, initialState);
                    if (void 0 === partialState) {
                        var componentName$jscomp$1 = getComponentNameFromType(type) || "Component";
                        didWarnAboutUndefinedDerivedState.has(componentName$jscomp$1) || (didWarnAboutUndefinedDerivedState.add(componentName$jscomp$1), console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName$jscomp$1));
                    }
                    var JSCompiler_inline_result = null === partialState || void 0 === partialState ? initialState : assign({}, initialState, partialState);
                    instance.state = JSCompiler_inline_result;
                }
                if ("function" !== typeof type.getDerivedStateFromProps && "function" !== typeof instance.getSnapshotBeforeUpdate && ("function" === typeof instance.UNSAFE_componentWillMount || "function" === typeof instance.componentWillMount)) {
                    var oldState = instance.state;
                    if ("function" === typeof instance.componentWillMount) {
                        if (!0 !== instance.componentWillMount.__suppressDeprecationWarning) {
                            var componentName$jscomp$2 = getComponentNameFromType(type) || "Unknown";
                            didWarnAboutDeprecatedWillMount[componentName$jscomp$2] || (console.warn("componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s", componentName$jscomp$2), didWarnAboutDeprecatedWillMount[componentName$jscomp$2] = !0);
                        }
                        instance.componentWillMount();
                    }
                    "function" === typeof instance.UNSAFE_componentWillMount && instance.UNSAFE_componentWillMount();
                    oldState !== instance.state && (console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType(type) || "Component"), classComponentUpdater.enqueueReplaceState(instance, instance.state, null));
                    if (null !== internalInstance.queue && 0 < internalInstance.queue.length) {
                        var oldQueue = internalInstance.queue, oldReplace = internalInstance.replace;
                        internalInstance.queue = null;
                        internalInstance.replace = !1;
                        if (oldReplace && 1 === oldQueue.length) instance.state = oldQueue[0];
                        else {
                            for(var nextState = oldReplace ? oldQueue[0] : instance.state, dontMutate = !0, i = oldReplace ? 1 : 0; i < oldQueue.length; i++){
                                var partial = oldQueue[i], partialState$jscomp$0 = "function" === typeof partial ? partial.call(instance, nextState, resolvedProps, void 0) : partial;
                                null != partialState$jscomp$0 && (dontMutate ? (dontMutate = !1, nextState = assign({}, nextState, partialState$jscomp$0)) : assign(nextState, partialState$jscomp$0));
                            }
                            instance.state = nextState;
                        }
                    } else internalInstance.queue = null;
                }
                var nextChildren = callRenderInDEV(instance);
                if (12 === request.status) throw null;
                instance.props !== resolvedProps && (didWarnAboutReassigningProps || console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType(type) || "a component"), didWarnAboutReassigningProps = !0);
                var prevKeyPath = task.keyPath;
                task.keyPath = keyPath;
                renderNodeDestructive(request, task, nextChildren, -1);
                task.keyPath = prevKeyPath;
            } else {
                if (type.prototype && "function" === typeof type.prototype.render) {
                    var componentName$jscomp$3 = getComponentNameFromType(type) || "Unknown";
                    didWarnAboutBadClass[componentName$jscomp$3] || (console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName$jscomp$3, componentName$jscomp$3), didWarnAboutBadClass[componentName$jscomp$3] = !0);
                }
                var value = renderWithHooks(request, task, keyPath, type, props, void 0);
                if (12 === request.status) throw null;
                var hasId = 0 !== localIdCounter, actionStateCount = actionStateCounter, actionStateMatchingIndex$jscomp$0 = actionStateMatchingIndex;
                if (type.contextTypes) {
                    var _componentName$jscomp$0 = getComponentNameFromType(type) || "Unknown";
                    didWarnAboutContextTypes[_componentName$jscomp$0] || (didWarnAboutContextTypes[_componentName$jscomp$0] = !0, console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)", _componentName$jscomp$0));
                }
                type && type.childContextTypes && console.error("childContextTypes cannot be defined on a function component.\n  %s.childContextTypes = ...", type.displayName || type.name || "Component");
                if ("function" === typeof type.getDerivedStateFromProps) {
                    var _componentName2 = getComponentNameFromType(type) || "Unknown";
                    didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2] || (console.error("%s: Function components do not support getDerivedStateFromProps.", _componentName2), didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2] = !0);
                }
                if ("object" === typeof type.contextType && null !== type.contextType) {
                    var _componentName3 = getComponentNameFromType(type) || "Unknown";
                    didWarnAboutContextTypeOnFunctionComponent[_componentName3] || (console.error("%s: Function components do not support contextType.", _componentName3), didWarnAboutContextTypeOnFunctionComponent[_componentName3] = !0);
                }
                finishFunctionComponent(request, task, keyPath, value, hasId, actionStateCount, actionStateMatchingIndex$jscomp$0);
            }
        } else if ("string" === typeof type) {
            var segment = task.blockedSegment;
            if (null === segment) {
                var children = props.children, prevContext = task.formatContext, prevKeyPath$jscomp$0 = task.keyPath;
                task.formatContext = getChildFormatContext(prevContext, type, props);
                task.keyPath = keyPath;
                renderNode(request, task, children, -1);
                task.formatContext = prevContext;
                task.keyPath = prevKeyPath$jscomp$0;
            } else {
                var _children = pushStartInstance(segment.chunks, type, props, request.resumableState, request.renderState, task.blockedPreamble, task.hoistableState, task.formatContext, segment.lastPushedText, task.isFallback);
                segment.lastPushedText = !1;
                var _prevContext = task.formatContext, _prevKeyPath2 = task.keyPath;
                task.keyPath = keyPath;
                if ((task.formatContext = getChildFormatContext(_prevContext, type, props)).insertionMode === HTML_HEAD_MODE) {
                    var preambleSegment = createPendingSegment(request, 0, null, task.formatContext, !1, !1);
                    segment.preambleChildren.push(preambleSegment);
                    var preambleTask = createRenderTask(request, null, _children, -1, task.blockedBoundary, preambleSegment, task.blockedPreamble, task.hoistableState, request.abortableTasks, task.keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback, emptyContextObject, task.debugTask);
                    pushComponentStack(preambleTask);
                    request.pingedTasks.push(preambleTask);
                } else renderNode(request, task, _children, -1);
                task.formatContext = _prevContext;
                task.keyPath = _prevKeyPath2;
                a: {
                    var target = segment.chunks, resumableState = request.resumableState;
                    switch(type){
                        case "title":
                        case "style":
                        case "script":
                        case "area":
                        case "base":
                        case "br":
                        case "col":
                        case "embed":
                        case "hr":
                        case "img":
                        case "input":
                        case "keygen":
                        case "link":
                        case "meta":
                        case "param":
                        case "source":
                        case "track":
                        case "wbr":
                            break a;
                        case "body":
                            if (_prevContext.insertionMode <= HTML_HTML_MODE) {
                                resumableState.hasBody = !0;
                                break a;
                            }
                            break;
                        case "html":
                            if (_prevContext.insertionMode === ROOT_HTML_MODE) {
                                resumableState.hasHtml = !0;
                                break a;
                            }
                            break;
                        case "head":
                            if (_prevContext.insertionMode <= HTML_HTML_MODE) break a;
                    }
                    target.push(endChunkForTag(type));
                }
                segment.lastPushedText = !1;
            }
        } else {
            switch(type){
                case REACT_LEGACY_HIDDEN_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_FRAGMENT_TYPE:
                    var prevKeyPath$jscomp$1 = task.keyPath;
                    task.keyPath = keyPath;
                    renderNodeDestructive(request, task, props.children, -1);
                    task.keyPath = prevKeyPath$jscomp$1;
                    return;
                case REACT_ACTIVITY_TYPE:
                    if ("hidden" !== props.mode) {
                        var prevKeyPath$jscomp$2 = task.keyPath;
                        task.keyPath = keyPath;
                        renderNodeDestructive(request, task, props.children, -1);
                        task.keyPath = prevKeyPath$jscomp$2;
                    }
                    return;
                case REACT_SUSPENSE_LIST_TYPE:
                    var _prevKeyPath3 = task.keyPath;
                    task.keyPath = keyPath;
                    renderNodeDestructive(request, task, props.children, -1);
                    task.keyPath = _prevKeyPath3;
                    return;
                case REACT_VIEW_TRANSITION_TYPE:
                case REACT_SCOPE_TYPE:
                    throw Error("ReactDOMServer does not yet support scope components.");
                case REACT_SUSPENSE_TYPE:
                    a: if (null !== task.replay) {
                        var _prevKeyPath = task.keyPath;
                        task.keyPath = keyPath;
                        var _content = props.children;
                        try {
                            renderNode(request, task, _content, -1);
                        } finally{
                            task.keyPath = _prevKeyPath;
                        }
                    } else {
                        var prevKeyPath$jscomp$3 = task.keyPath, parentBoundary = task.blockedBoundary, parentPreamble = task.blockedPreamble, parentHoistableState = task.hoistableState, parentSegment = task.blockedSegment, fallback = props.fallback, content = props.children, fallbackAbortSet = new Set();
                        var newBoundary = task.formatContext.insertionMode < HTML_MODE ? createSuspenseBoundary(request, fallbackAbortSet, createPreambleState(), createPreambleState()) : createSuspenseBoundary(request, fallbackAbortSet, null, null);
                        null !== request.trackedPostpones && (newBoundary.trackedContentKeyPath = keyPath);
                        var boundarySegment = createPendingSegment(request, parentSegment.chunks.length, newBoundary, task.formatContext, !1, !1);
                        parentSegment.children.push(boundarySegment);
                        parentSegment.lastPushedText = !1;
                        var contentRootSegment = createPendingSegment(request, 0, null, task.formatContext, !1, !1);
                        contentRootSegment.parentFlushed = !0;
                        if (null !== request.trackedPostpones) {
                            var fallbackKeyPath = [
                                keyPath[0],
                                "Suspense Fallback",
                                keyPath[2]
                            ], fallbackReplayNode = [
                                fallbackKeyPath[1],
                                fallbackKeyPath[2],
                                [],
                                null
                            ];
                            request.trackedPostpones.workingMap.set(fallbackKeyPath, fallbackReplayNode);
                            newBoundary.trackedFallbackNode = fallbackReplayNode;
                            task.blockedSegment = boundarySegment;
                            task.blockedPreamble = newBoundary.fallbackPreamble;
                            task.keyPath = fallbackKeyPath;
                            boundarySegment.status = 6;
                            try {
                                renderNode(request, task, fallback, -1), boundarySegment.lastPushedText && boundarySegment.textEmbedded && boundarySegment.chunks.push(textSeparator), boundarySegment.status = COMPLETED;
                            } catch (thrownValue) {
                                throw boundarySegment.status = 12 === request.status ? 3 : 4, thrownValue;
                            } finally{
                                task.blockedSegment = parentSegment, task.blockedPreamble = parentPreamble, task.keyPath = prevKeyPath$jscomp$3;
                            }
                            var suspendedPrimaryTask = createRenderTask(request, null, content, -1, newBoundary, contentRootSegment, newBoundary.contentPreamble, newBoundary.contentState, task.abortSet, keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback, emptyContextObject, task.debugTask);
                            pushComponentStack(suspendedPrimaryTask);
                            request.pingedTasks.push(suspendedPrimaryTask);
                        } else {
                            task.blockedBoundary = newBoundary;
                            task.blockedPreamble = newBoundary.contentPreamble;
                            task.hoistableState = newBoundary.contentState;
                            task.blockedSegment = contentRootSegment;
                            task.keyPath = keyPath;
                            contentRootSegment.status = 6;
                            try {
                                if (renderNode(request, task, content, -1), contentRootSegment.lastPushedText && contentRootSegment.textEmbedded && contentRootSegment.chunks.push(textSeparator), contentRootSegment.status = COMPLETED, queueCompletedSegment(newBoundary, contentRootSegment), 0 === newBoundary.pendingTasks && newBoundary.status === PENDING) {
                                    newBoundary.status = COMPLETED;
                                    0 === request.pendingRootTasks && task.blockedPreamble && preparePreamble(request);
                                    break a;
                                }
                            } catch (thrownValue$2) {
                                newBoundary.status = CLIENT_RENDERED;
                                if (12 === request.status) {
                                    contentRootSegment.status = 3;
                                    var error = request.fatalError;
                                } else contentRootSegment.status = 4, error = thrownValue$2;
                                var thrownInfo = getThrownInfo(task.componentStack);
                                var errorDigest = logRecoverableError(request, error, thrownInfo, task.debugTask);
                                encodeErrorForBoundary(newBoundary, errorDigest, error, thrownInfo, !1);
                                untrackBoundary(request, newBoundary);
                            } finally{
                                task.blockedBoundary = parentBoundary, task.blockedPreamble = parentPreamble, task.hoistableState = parentHoistableState, task.blockedSegment = parentSegment, task.keyPath = prevKeyPath$jscomp$3;
                            }
                            var suspendedFallbackTask = createRenderTask(request, null, fallback, -1, parentBoundary, boundarySegment, newBoundary.fallbackPreamble, newBoundary.fallbackState, fallbackAbortSet, [
                                keyPath[0],
                                "Suspense Fallback",
                                keyPath[2]
                            ], task.formatContext, task.context, task.treeContext, task.componentStack, !0, emptyContextObject, task.debugTask);
                            pushComponentStack(suspendedFallbackTask);
                            request.pingedTasks.push(suspendedFallbackTask);
                        }
                    }
                    return;
            }
            if ("object" === typeof type && null !== type) switch(type.$$typeof){
                case REACT_FORWARD_REF_TYPE:
                    if ("ref" in props) {
                        var propsWithoutRef = {};
                        for(var key in props)"ref" !== key && (propsWithoutRef[key] = props[key]);
                    } else propsWithoutRef = props;
                    var children$jscomp$0 = renderWithHooks(request, task, keyPath, type.render, propsWithoutRef, ref);
                    finishFunctionComponent(request, task, keyPath, children$jscomp$0, 0 !== localIdCounter, actionStateCounter, actionStateMatchingIndex);
                    return;
                case REACT_MEMO_TYPE:
                    renderElement(request, task, keyPath, type.type, props, ref);
                    return;
                case REACT_PROVIDER_TYPE:
                case REACT_CONTEXT_TYPE:
                    var value$jscomp$0 = props.value, children$jscomp$1 = props.children;
                    var prevSnapshot = task.context;
                    var prevKeyPath$jscomp$4 = task.keyPath;
                    var prevValue = type._currentValue;
                    type._currentValue = value$jscomp$0;
                    void 0 !== type._currentRenderer && null !== type._currentRenderer && type._currentRenderer !== rendererSigil && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
                    type._currentRenderer = rendererSigil;
                    var prevNode = currentActiveSnapshot, newNode = {
                        parent: prevNode,
                        depth: null === prevNode ? 0 : prevNode.depth + 1,
                        context: type,
                        parentValue: prevValue,
                        value: value$jscomp$0
                    };
                    currentActiveSnapshot = newNode;
                    task.context = newNode;
                    task.keyPath = keyPath;
                    renderNodeDestructive(request, task, children$jscomp$1, -1);
                    var prevSnapshot$jscomp$0 = currentActiveSnapshot;
                    if (null === prevSnapshot$jscomp$0) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
                    prevSnapshot$jscomp$0.context !== type && console.error("The parent context is not the expected context. This is probably a bug in React.");
                    prevSnapshot$jscomp$0.context._currentValue = prevSnapshot$jscomp$0.parentValue;
                    void 0 !== type._currentRenderer && null !== type._currentRenderer && type._currentRenderer !== rendererSigil && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
                    type._currentRenderer = rendererSigil;
                    var JSCompiler_inline_result$jscomp$0 = currentActiveSnapshot = prevSnapshot$jscomp$0.parent;
                    task.context = JSCompiler_inline_result$jscomp$0;
                    task.keyPath = prevKeyPath$jscomp$4;
                    prevSnapshot !== task.context && console.error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
                    return;
                case REACT_CONSUMER_TYPE:
                    var context$jscomp$0 = type._context, render = props.children;
                    "function" !== typeof render && console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
                    var newChildren = render(context$jscomp$0._currentValue), prevKeyPath$jscomp$5 = task.keyPath;
                    task.keyPath = keyPath;
                    renderNodeDestructive(request, task, newChildren, -1);
                    task.keyPath = prevKeyPath$jscomp$5;
                    return;
                case REACT_LAZY_TYPE:
                    var Component = callLazyInitInDEV(type);
                    if (12 === request.status) throw null;
                    renderElement(request, task, keyPath, Component, props, ref);
                    return;
            }
            var info = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == type ? type : typeof type) + "." + info));
        }
    }
    function resumeNode(request, task, segmentId, node, childIndex) {
        var prevReplay = task.replay, blockedBoundary = task.blockedBoundary, resumedSegment = createPendingSegment(request, 0, null, task.formatContext, !1, !1);
        resumedSegment.id = segmentId;
        resumedSegment.parentFlushed = !0;
        try {
            task.replay = null, task.blockedSegment = resumedSegment, renderNode(request, task, node, childIndex), resumedSegment.status = COMPLETED, null === blockedBoundary ? request.completedRootSegment = resumedSegment : (queueCompletedSegment(blockedBoundary, resumedSegment), blockedBoundary.parentFlushed && request.partialBoundaries.push(blockedBoundary));
        } finally{
            task.replay = prevReplay, task.blockedSegment = null;
        }
    }
    function replayElement(request, task, keyPath, name, keyOrIndex, childIndex, type, props, ref, replay) {
        childIndex = replay.nodes;
        for(var i = 0; i < childIndex.length; i++){
            var node = childIndex[i];
            if (keyOrIndex === node[1]) {
                if (4 === node.length) {
                    if (null !== name && name !== node[0]) throw Error("Expected the resume to render <" + node[0] + "> in this slot but instead it rendered <" + name + ">. The tree doesn't match so React will fallback to client rendering.");
                    var childNodes = node[2];
                    node = node[3];
                    name = task.node;
                    task.replay = {
                        nodes: childNodes,
                        slots: node,
                        pendingTasks: 1
                    };
                    try {
                        renderElement(request, task, keyPath, type, props, ref);
                        if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                        task.replay.pendingTasks--;
                    } catch (x) {
                        if ("object" === typeof x && null !== x && (x === SuspenseException || "function" === typeof x.then)) throw task.node === name && (task.replay = replay), x;
                        task.replay.pendingTasks--;
                        type = getThrownInfo(task.componentStack);
                        props = request;
                        request = task.blockedBoundary;
                        keyPath = x;
                        ref = node;
                        node = logRecoverableError(props, keyPath, type, task.debugTask);
                        abortRemainingReplayNodes(props, request, childNodes, ref, keyPath, node, type, !1);
                    }
                    task.replay = replay;
                } else {
                    if (type !== REACT_SUSPENSE_TYPE) throw Error("Expected the resume to render <Suspense> in this slot but instead it rendered <" + (getComponentNameFromType(type) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering.");
                    a: {
                        replay = void 0;
                        type = node[5];
                        ref = node[2];
                        name = node[3];
                        keyOrIndex = null === node[4] ? [] : node[4][2];
                        node = null === node[4] ? null : node[4][3];
                        var prevKeyPath = task.keyPath, previousReplaySet = task.replay, parentBoundary = task.blockedBoundary, parentHoistableState = task.hoistableState, content = props.children, fallback = props.fallback, fallbackAbortSet = new Set();
                        props = task.formatContext.insertionMode < HTML_MODE ? createSuspenseBoundary(request, fallbackAbortSet, createPreambleState(), createPreambleState()) : createSuspenseBoundary(request, fallbackAbortSet, null, null);
                        props.parentFlushed = !0;
                        props.rootSegmentID = type;
                        task.blockedBoundary = props;
                        task.hoistableState = props.contentState;
                        task.keyPath = keyPath;
                        task.replay = {
                            nodes: ref,
                            slots: name,
                            pendingTasks: 1
                        };
                        try {
                            renderNode(request, task, content, -1);
                            if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                            task.replay.pendingTasks--;
                            if (0 === props.pendingTasks && props.status === PENDING) {
                                props.status = COMPLETED;
                                request.completedBoundaries.push(props);
                                break a;
                            }
                        } catch (error) {
                            props.status = CLIENT_RENDERED, childNodes = getThrownInfo(task.componentStack), replay = logRecoverableError(request, error, childNodes, task.debugTask), encodeErrorForBoundary(props, replay, error, childNodes, !1), task.replay.pendingTasks--, request.clientRenderedBoundaries.push(props);
                        } finally{
                            task.blockedBoundary = parentBoundary, task.hoistableState = parentHoistableState, task.replay = previousReplaySet, task.keyPath = prevKeyPath;
                        }
                        props = createReplayTask(request, null, {
                            nodes: keyOrIndex,
                            slots: node,
                            pendingTasks: 0
                        }, fallback, -1, parentBoundary, props.fallbackState, fallbackAbortSet, [
                            keyPath[0],
                            "Suspense Fallback",
                            keyPath[2]
                        ], task.formatContext, task.context, task.treeContext, task.componentStack, !0, emptyContextObject, task.debugTask);
                        pushComponentStack(props);
                        request.pingedTasks.push(props);
                    }
                }
                childIndex.splice(i, 1);
                break;
            }
        }
    }
    function renderNodeDestructive(request, task, node, childIndex) {
        null !== task.replay && "number" === typeof task.replay.slots ? resumeNode(request, task, task.replay.slots, node, childIndex) : (task.node = node, task.childIndex = childIndex, node = task.componentStack, childIndex = task.debugTask, pushComponentStack(task), retryNode(request, task), task.componentStack = node, task.debugTask = childIndex);
    }
    function retryNode(request, task) {
        var node = task.node, childIndex = task.childIndex;
        if (null !== node) {
            if ("object" === typeof node) {
                switch(node.$$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = node.type, key = node.key;
                        node = node.props;
                        var refProp = node.ref;
                        refProp = void 0 !== refProp ? refProp : null;
                        var debugTask = task.debugTask, name = getComponentNameFromType(type);
                        key = null == key ? -1 === childIndex ? 0 : childIndex : key;
                        var keyPath = [
                            task.keyPath,
                            name,
                            key
                        ];
                        null !== task.replay ? debugTask ? debugTask.run(replayElement.bind(null, request, task, keyPath, name, key, childIndex, type, node, refProp, task.replay)) : replayElement(request, task, keyPath, name, key, childIndex, type, node, refProp, task.replay) : debugTask ? debugTask.run(renderElement.bind(null, request, task, keyPath, type, node, refProp)) : renderElement(request, task, keyPath, type, node, refProp);
                        return;
                    case REACT_PORTAL_TYPE:
                        throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
                    case REACT_LAZY_TYPE:
                        node = callLazyInitInDEV(node);
                        if (12 === request.status) throw null;
                        renderNodeDestructive(request, task, node, childIndex);
                        return;
                }
                if (isArrayImpl(node)) {
                    renderChildrenArray(request, task, node, childIndex);
                    return;
                }
                null === node || "object" !== typeof node ? key = null : (type = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], key = "function" === typeof type ? type : null);
                if (key && (type = key.call(node))) {
                    if (type === node) {
                        if (-1 !== childIndex || null === task.componentStack || "function" !== typeof task.componentStack.type || "[object GeneratorFunction]" !== Object.prototype.toString.call(task.componentStack.type) || "[object Generator]" !== Object.prototype.toString.call(type)) didWarnAboutGenerators || console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."), didWarnAboutGenerators = !0;
                    } else node.entries !== key || didWarnAboutMaps || (console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0);
                    node = type.next();
                    if (!node.done) {
                        key = [];
                        do key.push(node.value), node = type.next();
                        while (!node.done);
                        renderChildrenArray(request, task, key, childIndex);
                    }
                    return;
                }
                if ("function" === typeof node.then) return task.thenableState = null, renderNodeDestructive(request, task, unwrapThenable(node), childIndex);
                if (node.$$typeof === REACT_CONTEXT_TYPE) return renderNodeDestructive(request, task, node._currentValue, childIndex);
                request = Object.prototype.toString.call(node);
                throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === request ? "object with keys {" + Object.keys(node).join(", ") + "}" : request) + "). If you meant to render a collection of children, use an array instead.");
            }
            "string" === typeof node ? (task = task.blockedSegment, null !== task && (task.lastPushedText = pushTextInstance(task.chunks, node, request.renderState, task.lastPushedText))) : "number" === typeof node || "bigint" === typeof node ? (task = task.blockedSegment, null !== task && (task.lastPushedText = pushTextInstance(task.chunks, "" + node, request.renderState, task.lastPushedText))) : ("function" === typeof node && (request = node.displayName || node.name || "Component", console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.", request, request)), "symbol" === typeof node && console.error("Symbols are not valid as a React child.\n  %s", String(node)));
        }
    }
    function renderChildrenArray(request, task, children, childIndex) {
        var prevKeyPath = task.keyPath, previousComponentStack = task.componentStack;
        var previousDebugTask = task.debugTask;
        pushServerComponentStack(task, task.node._debugInfo);
        if (-1 !== childIndex && (task.keyPath = [
            task.keyPath,
            "Fragment",
            childIndex
        ], null !== task.replay)) {
            for(var replay = task.replay, replayNodes = replay.nodes, j = 0; j < replayNodes.length; j++){
                var node = replayNodes[j];
                if (node[1] === childIndex) {
                    childIndex = node[2];
                    node = node[3];
                    task.replay = {
                        nodes: childIndex,
                        slots: node,
                        pendingTasks: 1
                    };
                    try {
                        renderChildrenArray(request, task, children, -1);
                        if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                        task.replay.pendingTasks--;
                    } catch (x) {
                        if ("object" === typeof x && null !== x && (x === SuspenseException || "function" === typeof x.then)) throw x;
                        task.replay.pendingTasks--;
                        var thrownInfo = getThrownInfo(task.componentStack);
                        children = task.blockedBoundary;
                        var error = x, resumeSlots = node;
                        node = logRecoverableError(request, error, thrownInfo, task.debugTask);
                        abortRemainingReplayNodes(request, children, childIndex, resumeSlots, error, node, thrownInfo, !1);
                    }
                    task.replay = replay;
                    replayNodes.splice(j, 1);
                    break;
                }
            }
            task.keyPath = prevKeyPath;
            task.componentStack = previousComponentStack;
            task.debugTask = previousDebugTask;
            return;
        }
        replay = task.treeContext;
        replayNodes = children.length;
        if (null !== task.replay && (j = task.replay.slots, null !== j && "object" === typeof j)) {
            for(childIndex = 0; childIndex < replayNodes; childIndex++)node = children[childIndex], task.treeContext = pushTreeContext(replay, replayNodes, childIndex), error = j[childIndex], "number" === typeof error ? (resumeNode(request, task, error, node, childIndex), delete j[childIndex]) : renderNode(request, task, node, childIndex);
            task.treeContext = replay;
            task.keyPath = prevKeyPath;
            task.componentStack = previousComponentStack;
            task.debugTask = previousDebugTask;
            return;
        }
        for(j = 0; j < replayNodes; j++){
            childIndex = children[j];
            resumeSlots = request;
            node = task;
            error = childIndex;
            if (null !== error && "object" === typeof error && (error.$$typeof === REACT_ELEMENT_TYPE || error.$$typeof === REACT_PORTAL_TYPE) && error._store && (!error._store.validated && null == error.key || 2 === error._store.validated)) {
                if ("object" !== typeof error._store) throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
                error._store.validated = 1;
                thrownInfo = resumeSlots.didWarnForKey;
                null == thrownInfo && (thrownInfo = resumeSlots.didWarnForKey = new WeakSet());
                resumeSlots = node.componentStack;
                if (null !== resumeSlots && !thrownInfo.has(resumeSlots)) {
                    thrownInfo.add(resumeSlots);
                    var componentName = getComponentNameFromType(error.type);
                    thrownInfo = error._owner;
                    var parentOwner = resumeSlots.owner;
                    resumeSlots = "";
                    if (parentOwner && "undefined" !== typeof parentOwner.type) {
                        var name = getComponentNameFromType(parentOwner.type);
                        name && (resumeSlots = "\n\nCheck the render method of `" + name + "`.");
                    }
                    resumeSlots || componentName && (resumeSlots = "\n\nCheck the top-level render call using <" + componentName + ">.");
                    componentName = "";
                    null != thrownInfo && parentOwner !== thrownInfo && (parentOwner = null, "undefined" !== typeof thrownInfo.type ? parentOwner = getComponentNameFromType(thrownInfo.type) : "string" === typeof thrownInfo.name && (parentOwner = thrownInfo.name), parentOwner && (componentName = " It was passed a child from " + parentOwner + "."));
                    thrownInfo = node.componentStack;
                    node.componentStack = {
                        parent: node.componentStack,
                        type: error.type,
                        owner: error._owner,
                        stack: error._debugStack
                    };
                    console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', resumeSlots, componentName);
                    node.componentStack = thrownInfo;
                }
            }
            task.treeContext = pushTreeContext(replay, replayNodes, j);
            renderNode(request, task, childIndex, j);
        }
        task.treeContext = replay;
        task.keyPath = prevKeyPath;
        task.componentStack = previousComponentStack;
        task.debugTask = previousDebugTask;
    }
    function untrackBoundary(request, boundary) {
        request = request.trackedPostpones;
        null !== request && (boundary = boundary.trackedContentKeyPath, null !== boundary && (boundary = request.workingMap.get(boundary), void 0 !== boundary && (boundary.length = 4, boundary[2] = [], boundary[3] = null)));
    }
    function spawnNewSuspendedReplayTask(request, task, thenableState) {
        return createReplayTask(request, thenableState, task.replay, task.node, task.childIndex, task.blockedBoundary, task.hoistableState, task.abortSet, task.keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback, emptyContextObject, task.debugTask);
    }
    function spawnNewSuspendedRenderTask(request, task, thenableState) {
        var segment = task.blockedSegment, newSegment = createPendingSegment(request, segment.chunks.length, null, task.formatContext, segment.lastPushedText, !0);
        segment.children.push(newSegment);
        segment.lastPushedText = !1;
        return createRenderTask(request, thenableState, task.node, task.childIndex, task.blockedBoundary, newSegment, task.blockedPreamble, task.hoistableState, task.abortSet, task.keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback, emptyContextObject, task.debugTask);
    }
    function renderNode(request, task, node, childIndex) {
        var previousFormatContext = task.formatContext, previousContext = task.context, previousKeyPath = task.keyPath, previousTreeContext = task.treeContext, previousComponentStack = task.componentStack, previousDebugTask = task.debugTask, segment = task.blockedSegment;
        if (null === segment) try {
            return renderNodeDestructive(request, task, node, childIndex);
        } catch (thrownValue) {
            if (resetHooksState(), node = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue, "object" === typeof node && null !== node) {
                if ("function" === typeof node.then) {
                    childIndex = getThenableStateAfterSuspending();
                    request = spawnNewSuspendedReplayTask(request, task, childIndex).ping;
                    node.then(request, request);
                    task.formatContext = previousFormatContext;
                    task.context = previousContext;
                    task.keyPath = previousKeyPath;
                    task.treeContext = previousTreeContext;
                    task.componentStack = previousComponentStack;
                    task.debugTask = previousDebugTask;
                    switchContext(previousContext);
                    return;
                }
                if ("Maximum call stack size exceeded" === node.message) {
                    node = getThenableStateAfterSuspending();
                    node = spawnNewSuspendedReplayTask(request, task, node);
                    request.pingedTasks.push(node);
                    task.formatContext = previousFormatContext;
                    task.context = previousContext;
                    task.keyPath = previousKeyPath;
                    task.treeContext = previousTreeContext;
                    task.componentStack = previousComponentStack;
                    task.debugTask = previousDebugTask;
                    switchContext(previousContext);
                    return;
                }
            }
        }
        else {
            var childrenLength = segment.children.length, chunkLength = segment.chunks.length;
            try {
                return renderNodeDestructive(request, task, node, childIndex);
            } catch (thrownValue$3) {
                if (resetHooksState(), segment.children.length = childrenLength, segment.chunks.length = chunkLength, node = thrownValue$3 === SuspenseException ? getSuspendedThenable() : thrownValue$3, "object" === typeof node && null !== node) {
                    if ("function" === typeof node.then) {
                        childIndex = getThenableStateAfterSuspending();
                        request = spawnNewSuspendedRenderTask(request, task, childIndex).ping;
                        node.then(request, request);
                        task.formatContext = previousFormatContext;
                        task.context = previousContext;
                        task.keyPath = previousKeyPath;
                        task.treeContext = previousTreeContext;
                        task.componentStack = previousComponentStack;
                        task.debugTask = previousDebugTask;
                        switchContext(previousContext);
                        return;
                    }
                    if ("Maximum call stack size exceeded" === node.message) {
                        node = getThenableStateAfterSuspending();
                        node = spawnNewSuspendedRenderTask(request, task, node);
                        request.pingedTasks.push(node);
                        task.formatContext = previousFormatContext;
                        task.context = previousContext;
                        task.keyPath = previousKeyPath;
                        task.treeContext = previousTreeContext;
                        task.componentStack = previousComponentStack;
                        task.debugTask = previousDebugTask;
                        switchContext(previousContext);
                        return;
                    }
                }
            }
        }
        task.formatContext = previousFormatContext;
        task.context = previousContext;
        task.keyPath = previousKeyPath;
        task.treeContext = previousTreeContext;
        switchContext(previousContext);
        throw node;
    }
    function abortTaskSoft(task) {
        var boundary = task.blockedBoundary;
        task = task.blockedSegment;
        null !== task && (task.status = 3, finishedTask(this, boundary, task));
    }
    function abortRemainingReplayNodes(request$jscomp$0, boundary, nodes, slots, error$jscomp$0, errorDigest$jscomp$0, errorInfo$jscomp$0, aborted) {
        for(var i = 0; i < nodes.length; i++){
            var node = nodes[i];
            if (4 === node.length) abortRemainingReplayNodes(request$jscomp$0, boundary, node[2], node[3], error$jscomp$0, errorDigest$jscomp$0, errorInfo$jscomp$0, aborted);
            else {
                var request = request$jscomp$0;
                node = node[5];
                var error = error$jscomp$0, errorDigest = errorDigest$jscomp$0, errorInfo = errorInfo$jscomp$0, wasAborted = aborted, resumedBoundary = createSuspenseBoundary(request, new Set(), null, null);
                resumedBoundary.parentFlushed = !0;
                resumedBoundary.rootSegmentID = node;
                resumedBoundary.status = CLIENT_RENDERED;
                encodeErrorForBoundary(resumedBoundary, errorDigest, error, errorInfo, wasAborted);
                resumedBoundary.parentFlushed && request.clientRenderedBoundaries.push(resumedBoundary);
            }
        }
        nodes.length = 0;
        if (null !== slots) {
            if (null === boundary) throw Error("We should not have any resumable nodes in the shell. This is a bug in React.");
            boundary.status !== CLIENT_RENDERED && (boundary.status = CLIENT_RENDERED, encodeErrorForBoundary(boundary, errorDigest$jscomp$0, error$jscomp$0, errorInfo$jscomp$0, aborted), boundary.parentFlushed && request$jscomp$0.clientRenderedBoundaries.push(boundary));
            if ("object" === typeof slots) for(var index in slots)delete slots[index];
        }
    }
    function abortTask(task, request, error) {
        var boundary = task.blockedBoundary, segment = task.blockedSegment;
        if (null !== segment) {
            if (6 === segment.status) return;
            segment.status = 3;
        }
        segment = getThrownInfo(task.componentStack);
        if (null === boundary) {
            if (13 !== request.status && request.status !== CLOSED) {
                boundary = task.replay;
                if (null === boundary) {
                    logRecoverableError(request, error, segment, null);
                    fatalError(request, error, segment, null);
                    return;
                }
                boundary.pendingTasks--;
                0 === boundary.pendingTasks && 0 < boundary.nodes.length && (task = logRecoverableError(request, error, segment, null), abortRemainingReplayNodes(request, null, boundary.nodes, boundary.slots, error, task, segment, !0));
                request.pendingRootTasks--;
                0 === request.pendingRootTasks && completeShell(request);
            }
        } else boundary.pendingTasks--, boundary.status !== CLIENT_RENDERED && (boundary.status = CLIENT_RENDERED, task = logRecoverableError(request, error, segment, null), boundary.status = CLIENT_RENDERED, encodeErrorForBoundary(boundary, task, error, segment, !0), untrackBoundary(request, boundary), boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary)), boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
            return abortTask(fallbackTask, request, error);
        }), boundary.fallbackAbortableTasks.clear();
        request.allPendingTasks--;
        0 === request.allPendingTasks && completeAll(request);
    }
    function safelyEmitEarlyPreloads(request, shellComplete) {
        try {
            var renderState = request.renderState, onHeaders = renderState.onHeaders;
            if (onHeaders) {
                var headers = renderState.headers;
                if (headers) {
                    renderState.headers = null;
                    var linkHeader = headers.preconnects;
                    headers.fontPreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.fontPreloads);
                    headers.highImagePreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.highImagePreloads);
                    if (!shellComplete) {
                        var queueIter = renderState.styles.values(), queueStep = queueIter.next();
                        b: for(; 0 < headers.remainingCapacity && !queueStep.done; queueStep = queueIter.next())for(var sheetIter = queueStep.value.sheets.values(), sheetStep = sheetIter.next(); 0 < headers.remainingCapacity && !sheetStep.done; sheetStep = sheetIter.next()){
                            var sheet = sheetStep.value, props = sheet.props, key = props.href, props$jscomp$0 = sheet.props;
                            var header = getPreloadAsHeader(props$jscomp$0.href, "style", {
                                crossOrigin: props$jscomp$0.crossOrigin,
                                integrity: props$jscomp$0.integrity,
                                nonce: props$jscomp$0.nonce,
                                type: props$jscomp$0.type,
                                fetchPriority: props$jscomp$0.fetchPriority,
                                referrerPolicy: props$jscomp$0.referrerPolicy,
                                media: props$jscomp$0.media
                            });
                            if (0 <= (headers.remainingCapacity -= header.length + 2)) renderState.resets.style[key] = PRELOAD_NO_CREDS, linkHeader && (linkHeader += ", "), linkHeader += header, renderState.resets.style[key] = "string" === typeof props.crossOrigin || "string" === typeof props.integrity ? [
                                props.crossOrigin,
                                props.integrity
                            ] : PRELOAD_NO_CREDS;
                            else break b;
                        }
                    }
                    linkHeader ? onHeaders({
                        Link: linkHeader
                    }) : onHeaders({});
                }
            }
        } catch (error) {
            logRecoverableError(request, error, {}, null);
        }
    }
    function completeShell(request) {
        null === request.trackedPostpones && safelyEmitEarlyPreloads(request, !0);
        null === request.trackedPostpones && preparePreamble(request);
        request.onShellError = noop;
        request = request.onShellReady;
        request();
    }
    function completeAll(request) {
        safelyEmitEarlyPreloads(request, null === request.trackedPostpones ? !0 : null === request.completedRootSegment || request.completedRootSegment.status !== POSTPONED);
        preparePreamble(request);
        request = request.onAllReady;
        request();
    }
    function queueCompletedSegment(boundary, segment) {
        if (0 === segment.chunks.length && 1 === segment.children.length && null === segment.children[0].boundary && -1 === segment.children[0].id) {
            var childSegment = segment.children[0];
            childSegment.id = segment.id;
            childSegment.parentFlushed = !0;
            childSegment.status === COMPLETED && queueCompletedSegment(boundary, childSegment);
        } else boundary.completedSegments.push(segment);
    }
    function finishedTask(request, boundary, segment) {
        if (null === boundary) {
            if (null !== segment && segment.parentFlushed) {
                if (null !== request.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
                request.completedRootSegment = segment;
            }
            request.pendingRootTasks--;
            0 === request.pendingRootTasks && completeShell(request);
        } else boundary.pendingTasks--, boundary.status !== CLIENT_RENDERED && (0 === boundary.pendingTasks ? (boundary.status === PENDING && (boundary.status = COMPLETED), null !== segment && segment.parentFlushed && segment.status === COMPLETED && queueCompletedSegment(boundary, segment), boundary.parentFlushed && request.completedBoundaries.push(boundary), boundary.status === COMPLETED && (boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request), boundary.fallbackAbortableTasks.clear(), 0 === request.pendingRootTasks && null === request.trackedPostpones && null !== boundary.contentPreamble && preparePreamble(request))) : null !== segment && segment.parentFlushed && segment.status === COMPLETED && (queueCompletedSegment(boundary, segment), 1 === boundary.completedSegments.length && boundary.parentFlushed && request.partialBoundaries.push(boundary)));
        request.allPendingTasks--;
        0 === request.allPendingTasks && completeAll(request);
    }
    function performWork(request$jscomp$2) {
        if (request$jscomp$2.status !== CLOSED && 13 !== request$jscomp$2.status) {
            var prevContext = currentActiveSnapshot, prevDispatcher = ReactSharedInternals.H;
            ReactSharedInternals.H = HooksDispatcher;
            var prevAsyncDispatcher = ReactSharedInternals.A;
            ReactSharedInternals.A = DefaultAsyncDispatcher;
            var prevRequest = currentRequest;
            currentRequest = request$jscomp$2;
            var prevGetCurrentStackImpl = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = getCurrentStackInDEV;
            var prevResumableState = currentResumableState;
            currentResumableState = request$jscomp$2.resumableState;
            try {
                var pingedTasks = request$jscomp$2.pingedTasks, i;
                for(i = 0; i < pingedTasks.length; i++){
                    var request = request$jscomp$2, task = pingedTasks[i], segment = task.blockedSegment;
                    if (null === segment) {
                        var prevTaskInDEV = void 0, request$jscomp$0 = request;
                        request = task;
                        if (0 !== request.replay.pendingTasks) {
                            switchContext(request.context);
                            prevTaskInDEV = currentTaskInDEV;
                            currentTaskInDEV = request;
                            try {
                                "number" === typeof request.replay.slots ? resumeNode(request$jscomp$0, request, request.replay.slots, request.node, request.childIndex) : retryNode(request$jscomp$0, request);
                                if (1 === request.replay.pendingTasks && 0 < request.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                                request.replay.pendingTasks--;
                                request.abortSet.delete(request);
                                finishedTask(request$jscomp$0, request.blockedBoundary, null);
                            } catch (thrownValue) {
                                resetHooksState();
                                var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
                                if ("object" === typeof x && null !== x && "function" === typeof x.then) {
                                    var ping = request.ping;
                                    x.then(ping, ping);
                                    request.thenableState = getThenableStateAfterSuspending();
                                } else {
                                    request.replay.pendingTasks--;
                                    request.abortSet.delete(request);
                                    var errorInfo = getThrownInfo(request.componentStack), errorDigest = void 0, request$jscomp$1 = request$jscomp$0, boundary = request.blockedBoundary, error$jscomp$0 = 12 === request$jscomp$0.status ? request$jscomp$0.fatalError : x, errorInfo$jscomp$0 = errorInfo, replayNodes = request.replay.nodes, resumeSlots = request.replay.slots;
                                    errorDigest = logRecoverableError(request$jscomp$1, error$jscomp$0, errorInfo$jscomp$0, request.debugTask);
                                    abortRemainingReplayNodes(request$jscomp$1, boundary, replayNodes, resumeSlots, error$jscomp$0, errorDigest, errorInfo$jscomp$0, !1);
                                    request$jscomp$0.pendingRootTasks--;
                                    0 === request$jscomp$0.pendingRootTasks && completeShell(request$jscomp$0);
                                    request$jscomp$0.allPendingTasks--;
                                    0 === request$jscomp$0.allPendingTasks && completeAll(request$jscomp$0);
                                }
                            } finally{
                                currentTaskInDEV = prevTaskInDEV;
                            }
                        }
                    } else if (request$jscomp$0 = prevTaskInDEV = void 0, errorDigest = task, request$jscomp$1 = segment, request$jscomp$1.status === PENDING) {
                        request$jscomp$1.status = 6;
                        switchContext(errorDigest.context);
                        request$jscomp$0 = currentTaskInDEV;
                        currentTaskInDEV = errorDigest;
                        var childrenLength = request$jscomp$1.children.length, chunkLength = request$jscomp$1.chunks.length;
                        try {
                            retryNode(request, errorDigest), request$jscomp$1.lastPushedText && request$jscomp$1.textEmbedded && request$jscomp$1.chunks.push(textSeparator), errorDigest.abortSet.delete(errorDigest), request$jscomp$1.status = COMPLETED, finishedTask(request, errorDigest.blockedBoundary, request$jscomp$1);
                        } catch (thrownValue) {
                            resetHooksState();
                            request$jscomp$1.children.length = childrenLength;
                            request$jscomp$1.chunks.length = chunkLength;
                            var x$jscomp$0 = thrownValue === SuspenseException ? getSuspendedThenable() : 12 === request.status ? request.fatalError : thrownValue;
                            if ("object" === typeof x$jscomp$0 && null !== x$jscomp$0 && "function" === typeof x$jscomp$0.then) {
                                request$jscomp$1.status = PENDING;
                                errorDigest.thenableState = getThenableStateAfterSuspending();
                                var ping$jscomp$0 = errorDigest.ping;
                                x$jscomp$0.then(ping$jscomp$0, ping$jscomp$0);
                            } else {
                                var errorInfo$jscomp$1 = getThrownInfo(errorDigest.componentStack);
                                errorDigest.abortSet.delete(errorDigest);
                                request$jscomp$1.status = 4;
                                var boundary$jscomp$0 = errorDigest.blockedBoundary, debugTask = errorDigest.debugTask;
                                prevTaskInDEV = logRecoverableError(request, x$jscomp$0, errorInfo$jscomp$1, debugTask);
                                null === boundary$jscomp$0 ? fatalError(request, x$jscomp$0, errorInfo$jscomp$1, debugTask) : (boundary$jscomp$0.pendingTasks--, boundary$jscomp$0.status !== CLIENT_RENDERED && (boundary$jscomp$0.status = CLIENT_RENDERED, encodeErrorForBoundary(boundary$jscomp$0, prevTaskInDEV, x$jscomp$0, errorInfo$jscomp$1, !1), untrackBoundary(request, boundary$jscomp$0), boundary$jscomp$0.parentFlushed && request.clientRenderedBoundaries.push(boundary$jscomp$0), 0 === request.pendingRootTasks && null === request.trackedPostpones && null !== boundary$jscomp$0.contentPreamble && preparePreamble(request)));
                                request.allPendingTasks--;
                                0 === request.allPendingTasks && completeAll(request);
                            }
                        } finally{
                            currentTaskInDEV = request$jscomp$0;
                        }
                    }
                }
                pingedTasks.splice(0, i);
                null !== request$jscomp$2.destination && flushCompletedQueues(request$jscomp$2, request$jscomp$2.destination);
            } catch (error) {
                pingedTasks = {}, logRecoverableError(request$jscomp$2, error, pingedTasks, null), fatalError(request$jscomp$2, error, pingedTasks, null);
            } finally{
                currentResumableState = prevResumableState, ReactSharedInternals.H = prevDispatcher, ReactSharedInternals.A = prevAsyncDispatcher, ReactSharedInternals.getCurrentStack = prevGetCurrentStackImpl, prevDispatcher === HooksDispatcher && switchContext(prevContext), currentRequest = prevRequest;
            }
        }
    }
    function preparePreambleFromSubtree(request, segment, collectedPreambleSegments) {
        segment.preambleChildren.length && collectedPreambleSegments.push(segment.preambleChildren);
        for(var pendingPreambles = !1, i = 0; i < segment.children.length; i++)pendingPreambles = preparePreambleFromSegment(request, segment.children[i], collectedPreambleSegments) || pendingPreambles;
        return pendingPreambles;
    }
    function preparePreambleFromSegment(request, segment, collectedPreambleSegments) {
        var boundary = segment.boundary;
        if (null === boundary) return preparePreambleFromSubtree(request, segment, collectedPreambleSegments);
        var preamble = boundary.contentPreamble, fallbackPreamble = boundary.fallbackPreamble;
        if (null === preamble || null === fallbackPreamble) return !1;
        switch(boundary.status){
            case COMPLETED:
                hoistPreambleState(request.renderState, preamble);
                segment = boundary.completedSegments[0];
                if (!segment) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
                return preparePreambleFromSubtree(request, segment, collectedPreambleSegments);
            case POSTPONED:
                if (null !== request.trackedPostpones) return !0;
            case CLIENT_RENDERED:
                if (segment.status === COMPLETED) return hoistPreambleState(request.renderState, fallbackPreamble), preparePreambleFromSubtree(request, segment, collectedPreambleSegments);
            default:
                return !0;
        }
    }
    function preparePreamble(request) {
        if (request.completedRootSegment && null === request.completedPreambleSegments) {
            var collectedPreambleSegments = [], hasPendingPreambles = preparePreambleFromSegment(request, request.completedRootSegment, collectedPreambleSegments), preamble = request.renderState.preamble;
            if (!1 === hasPendingPreambles || preamble.headChunks && preamble.bodyChunks) request.completedPreambleSegments = collectedPreambleSegments;
        }
    }
    function flushSubtree(request, destination, segment, hoistableState) {
        segment.parentFlushed = !0;
        switch(segment.status){
            case PENDING:
                segment.id = request.nextSegmentId++;
            case POSTPONED:
                return hoistableState = segment.id, segment.lastPushedText = !1, segment.textEmbedded = !1, request = request.renderState, writeChunk(destination, placeholder1), writeChunk(destination, request.placeholderPrefix), request = stringToChunk(hoistableState.toString(16)), writeChunk(destination, request), writeChunkAndReturn(destination, placeholder2);
            case COMPLETED:
                segment.status = FLUSHED;
                var r = !0, chunks = segment.chunks, chunkIdx = 0;
                segment = segment.children;
                for(var childIdx = 0; childIdx < segment.length; childIdx++){
                    for(r = segment[childIdx]; chunkIdx < r.index; chunkIdx++)writeChunk(destination, chunks[chunkIdx]);
                    r = flushSegment(request, destination, r, hoistableState);
                }
                for(; chunkIdx < chunks.length - 1; chunkIdx++)writeChunk(destination, chunks[chunkIdx]);
                chunkIdx < chunks.length && (r = writeChunkAndReturn(destination, chunks[chunkIdx]));
                return r;
            default:
                throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
        }
    }
    function flushSegment(request, destination, segment, hoistableState) {
        var boundary = segment.boundary;
        if (null === boundary) return flushSubtree(request, destination, segment, hoistableState);
        boundary.parentFlushed = !0;
        if (boundary.status === CLIENT_RENDERED) {
            var errorDigest = boundary.errorDigest, errorMessage = boundary.errorMessage, errorStack = boundary.errorStack, errorComponentStack = boundary.errorComponentStack;
            writeChunkAndReturn(destination, startClientRenderedSuspenseBoundary);
            writeChunk(destination, clientRenderedSuspenseBoundaryError1);
            errorDigest && (writeChunk(destination, clientRenderedSuspenseBoundaryError1A), writeChunk(destination, stringToChunk(escapeTextForBrowser(errorDigest))), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial));
            errorMessage && (writeChunk(destination, clientRenderedSuspenseBoundaryError1B), writeChunk(destination, stringToChunk(escapeTextForBrowser(errorMessage))), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial));
            errorStack && (writeChunk(destination, clientRenderedSuspenseBoundaryError1C), writeChunk(destination, stringToChunk(escapeTextForBrowser(errorStack))), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial));
            errorComponentStack && (writeChunk(destination, clientRenderedSuspenseBoundaryError1D), writeChunk(destination, stringToChunk(escapeTextForBrowser(errorComponentStack))), writeChunk(destination, clientRenderedSuspenseBoundaryErrorAttrInterstitial));
            writeChunkAndReturn(destination, clientRenderedSuspenseBoundaryError2);
            flushSubtree(request, destination, segment, hoistableState);
            (request = boundary.fallbackPreamble) && writePreambleContribution(destination, request);
            return writeChunkAndReturn(destination, endSuspenseBoundary);
        }
        if (boundary.status !== COMPLETED) return boundary.status === PENDING && (boundary.rootSegmentID = request.nextSegmentId++), 0 < boundary.completedSegments.length && request.partialBoundaries.push(boundary), writeStartPendingSuspenseBoundary(destination, request.renderState, boundary.rootSegmentID), hoistableState && (boundary = boundary.fallbackState, boundary.styles.forEach(hoistStyleQueueDependency, hoistableState), boundary.stylesheets.forEach(hoistStylesheetDependency, hoistableState)), flushSubtree(request, destination, segment, hoistableState), writeChunkAndReturn(destination, endSuspenseBoundary);
        if (boundary.byteSize > request.progressiveChunkSize) return boundary.rootSegmentID = request.nextSegmentId++, request.completedBoundaries.push(boundary), writeStartPendingSuspenseBoundary(destination, request.renderState, boundary.rootSegmentID), flushSubtree(request, destination, segment, hoistableState), writeChunkAndReturn(destination, endSuspenseBoundary);
        hoistableState && (segment = boundary.contentState, segment.styles.forEach(hoistStyleQueueDependency, hoistableState), segment.stylesheets.forEach(hoistStylesheetDependency, hoistableState));
        writeChunkAndReturn(destination, startCompletedSuspenseBoundary);
        segment = boundary.completedSegments;
        if (1 !== segment.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        flushSegment(request, destination, segment[0], hoistableState);
        (request = boundary.contentPreamble) && writePreambleContribution(destination, request);
        return writeChunkAndReturn(destination, endSuspenseBoundary);
    }
    function flushSegmentContainer(request, destination, segment, hoistableState) {
        writeStartSegment(destination, request.renderState, segment.parentFormatContext, segment.id);
        flushSegment(request, destination, segment, hoistableState);
        return writeEndSegment(destination, segment.parentFormatContext);
    }
    function flushCompletedBoundary(request, destination, boundary) {
        for(var completedSegments = boundary.completedSegments, i = 0; i < completedSegments.length; i++)flushPartiallyCompletedSegment(request, destination, boundary, completedSegments[i]);
        completedSegments.length = 0;
        writeHoistablesForBoundary(destination, boundary.contentState, request.renderState);
        completedSegments = request.resumableState;
        request = request.renderState;
        i = boundary.rootSegmentID;
        boundary = boundary.contentState;
        var requiresStyleInsertion = request.stylesToHoist;
        request.stylesToHoist = !1;
        writeChunk(destination, request.startInlineScript);
        requiresStyleInsertion ? (completedSegments.instructions & SentCompleteBoundaryFunction) === NothingSent ? (completedSegments.instructions = completedSegments.instructions | SentStyleInsertionFunction | SentCompleteBoundaryFunction, writeChunk(destination, completeBoundaryWithStylesScript1FullBoth)) : (completedSegments.instructions & SentStyleInsertionFunction) === NothingSent ? (completedSegments.instructions |= SentStyleInsertionFunction, writeChunk(destination, completeBoundaryWithStylesScript1FullPartial)) : writeChunk(destination, completeBoundaryWithStylesScript1Partial) : (completedSegments.instructions & SentCompleteBoundaryFunction) === NothingSent ? (completedSegments.instructions |= SentCompleteBoundaryFunction, writeChunk(destination, completeBoundaryScript1Full)) : writeChunk(destination, completeBoundaryScript1Partial);
        completedSegments = stringToChunk(i.toString(16));
        writeChunk(destination, request.boundaryPrefix);
        writeChunk(destination, completedSegments);
        writeChunk(destination, completeBoundaryScript2);
        writeChunk(destination, request.segmentPrefix);
        writeChunk(destination, completedSegments);
        requiresStyleInsertion ? (writeChunk(destination, completeBoundaryScript3a), writeStyleResourceDependenciesInJS(destination, boundary)) : writeChunk(destination, completeBoundaryScript3b);
        boundary = writeChunkAndReturn(destination, completeBoundaryScriptEnd);
        return writeBootstrap(destination, request) && boundary;
    }
    function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
        if (segment.status === FLUSHED) return !0;
        var hoistableState = boundary.contentState, segmentID = segment.id;
        if (-1 === segmentID) {
            if (-1 === (segment.id = boundary.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
            return flushSegmentContainer(request, destination, segment, hoistableState);
        }
        if (segmentID === boundary.rootSegmentID) return flushSegmentContainer(request, destination, segment, hoistableState);
        flushSegmentContainer(request, destination, segment, hoistableState);
        boundary = request.resumableState;
        request = request.renderState;
        writeChunk(destination, request.startInlineScript);
        (boundary.instructions & SentCompleteSegmentFunction) === NothingSent ? (boundary.instructions |= SentCompleteSegmentFunction, writeChunk(destination, completeSegmentScript1Full)) : writeChunk(destination, completeSegmentScript1Partial);
        writeChunk(destination, request.segmentPrefix);
        segmentID = stringToChunk(segmentID.toString(16));
        writeChunk(destination, segmentID);
        writeChunk(destination, completeSegmentScript2);
        writeChunk(destination, request.placeholderPrefix);
        writeChunk(destination, segmentID);
        destination = writeChunkAndReturn(destination, completeSegmentScriptEnd);
        return destination;
    }
    function flushCompletedQueues(request, destination) {
        currentView = new Uint8Array(2048);
        writtenBytes = 0;
        try {
            if (!(0 < request.pendingRootTasks)) {
                var i, completedRootSegment = request.completedRootSegment;
                if (null !== completedRootSegment) {
                    if (completedRootSegment.status === POSTPONED) return;
                    var completedPreambleSegments = request.completedPreambleSegments;
                    if (null === completedPreambleSegments) return;
                    var renderState = request.renderState, preamble = renderState.preamble, htmlChunks = preamble.htmlChunks, headChunks = preamble.headChunks, i$jscomp$0;
                    if (htmlChunks) {
                        for(i$jscomp$0 = 0; i$jscomp$0 < htmlChunks.length; i$jscomp$0++)writeChunk(destination, htmlChunks[i$jscomp$0]);
                        if (headChunks) for(i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++)writeChunk(destination, headChunks[i$jscomp$0]);
                        else writeChunk(destination, startChunkForTag("head")), writeChunk(destination, endOfStartTag);
                    } else if (headChunks) for(i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++)writeChunk(destination, headChunks[i$jscomp$0]);
                    var charsetChunks = renderState.charsetChunks;
                    for(i$jscomp$0 = 0; i$jscomp$0 < charsetChunks.length; i$jscomp$0++)writeChunk(destination, charsetChunks[i$jscomp$0]);
                    charsetChunks.length = 0;
                    renderState.preconnects.forEach(flushResource, destination);
                    renderState.preconnects.clear();
                    var viewportChunks = renderState.viewportChunks;
                    for(i$jscomp$0 = 0; i$jscomp$0 < viewportChunks.length; i$jscomp$0++)writeChunk(destination, viewportChunks[i$jscomp$0]);
                    viewportChunks.length = 0;
                    renderState.fontPreloads.forEach(flushResource, destination);
                    renderState.fontPreloads.clear();
                    renderState.highImagePreloads.forEach(flushResource, destination);
                    renderState.highImagePreloads.clear();
                    renderState.styles.forEach(flushStylesInPreamble, destination);
                    var importMapChunks = renderState.importMapChunks;
                    for(i$jscomp$0 = 0; i$jscomp$0 < importMapChunks.length; i$jscomp$0++)writeChunk(destination, importMapChunks[i$jscomp$0]);
                    importMapChunks.length = 0;
                    renderState.bootstrapScripts.forEach(flushResource, destination);
                    renderState.scripts.forEach(flushResource, destination);
                    renderState.scripts.clear();
                    renderState.bulkPreloads.forEach(flushResource, destination);
                    renderState.bulkPreloads.clear();
                    var hoistableChunks = renderState.hoistableChunks;
                    for(i$jscomp$0 = 0; i$jscomp$0 < hoistableChunks.length; i$jscomp$0++)writeChunk(destination, hoistableChunks[i$jscomp$0]);
                    for(renderState = hoistableChunks.length = 0; renderState < completedPreambleSegments.length; renderState++){
                        var segments = completedPreambleSegments[renderState];
                        for(preamble = 0; preamble < segments.length; preamble++)flushSegment(request, destination, segments[preamble], null);
                    }
                    var preamble$jscomp$0 = request.renderState.preamble, headChunks$jscomp$0 = preamble$jscomp$0.headChunks;
                    (preamble$jscomp$0.htmlChunks || headChunks$jscomp$0) && writeChunk(destination, endChunkForTag("head"));
                    var bodyChunks = preamble$jscomp$0.bodyChunks;
                    if (bodyChunks) for(completedPreambleSegments = 0; completedPreambleSegments < bodyChunks.length; completedPreambleSegments++)writeChunk(destination, bodyChunks[completedPreambleSegments]);
                    flushSegment(request, destination, completedRootSegment, null);
                    request.completedRootSegment = null;
                    writeBootstrap(destination, request.renderState);
                }
                var renderState$jscomp$0 = request.renderState;
                completedRootSegment = 0;
                var viewportChunks$jscomp$0 = renderState$jscomp$0.viewportChunks;
                for(completedRootSegment = 0; completedRootSegment < viewportChunks$jscomp$0.length; completedRootSegment++)writeChunk(destination, viewportChunks$jscomp$0[completedRootSegment]);
                viewportChunks$jscomp$0.length = 0;
                renderState$jscomp$0.preconnects.forEach(flushResource, destination);
                renderState$jscomp$0.preconnects.clear();
                renderState$jscomp$0.fontPreloads.forEach(flushResource, destination);
                renderState$jscomp$0.fontPreloads.clear();
                renderState$jscomp$0.highImagePreloads.forEach(flushResource, destination);
                renderState$jscomp$0.highImagePreloads.clear();
                renderState$jscomp$0.styles.forEach(preloadLateStyles, destination);
                renderState$jscomp$0.scripts.forEach(flushResource, destination);
                renderState$jscomp$0.scripts.clear();
                renderState$jscomp$0.bulkPreloads.forEach(flushResource, destination);
                renderState$jscomp$0.bulkPreloads.clear();
                var hoistableChunks$jscomp$0 = renderState$jscomp$0.hoistableChunks;
                for(completedRootSegment = 0; completedRootSegment < hoistableChunks$jscomp$0.length; completedRootSegment++)writeChunk(destination, hoistableChunks$jscomp$0[completedRootSegment]);
                hoistableChunks$jscomp$0.length = 0;
                var clientRenderedBoundaries = request.clientRenderedBoundaries;
                for(i = 0; i < clientRenderedBoundaries.length; i++){
                    var boundary = clientRenderedBoundaries[i];
                    renderState$jscomp$0 = destination;
                    var resumableState = request.resumableState, renderState$jscomp$1 = request.renderState, id = boundary.rootSegmentID, errorDigest = boundary.errorDigest, errorMessage = boundary.errorMessage, errorStack = boundary.errorStack, errorComponentStack = boundary.errorComponentStack;
                    writeChunk(renderState$jscomp$0, renderState$jscomp$1.startInlineScript);
                    (resumableState.instructions & SentClientRenderFunction) === NothingSent ? (resumableState.instructions |= SentClientRenderFunction, writeChunk(renderState$jscomp$0, clientRenderScript1Full)) : writeChunk(renderState$jscomp$0, clientRenderScript1Partial);
                    writeChunk(renderState$jscomp$0, renderState$jscomp$1.boundaryPrefix);
                    writeChunk(renderState$jscomp$0, stringToChunk(id.toString(16)));
                    writeChunk(renderState$jscomp$0, clientRenderScript1A);
                    if (errorDigest || errorMessage || errorStack || errorComponentStack) writeChunk(renderState$jscomp$0, clientRenderErrorScriptArgInterstitial), writeChunk(renderState$jscomp$0, stringToChunk(escapeJSStringsForInstructionScripts(errorDigest || "")));
                    if (errorMessage || errorStack || errorComponentStack) writeChunk(renderState$jscomp$0, clientRenderErrorScriptArgInterstitial), writeChunk(renderState$jscomp$0, stringToChunk(escapeJSStringsForInstructionScripts(errorMessage || "")));
                    if (errorStack || errorComponentStack) writeChunk(renderState$jscomp$0, clientRenderErrorScriptArgInterstitial), writeChunk(renderState$jscomp$0, stringToChunk(escapeJSStringsForInstructionScripts(errorStack || "")));
                    errorComponentStack && (writeChunk(renderState$jscomp$0, clientRenderErrorScriptArgInterstitial), writeChunk(renderState$jscomp$0, stringToChunk(escapeJSStringsForInstructionScripts(errorComponentStack))));
                    var JSCompiler_inline_result = writeChunkAndReturn(renderState$jscomp$0, clientRenderScriptEnd);
                    if (!JSCompiler_inline_result) {
                        request.destination = null;
                        i++;
                        clientRenderedBoundaries.splice(0, i);
                        return;
                    }
                }
                clientRenderedBoundaries.splice(0, i);
                var completedBoundaries = request.completedBoundaries;
                for(i = 0; i < completedBoundaries.length; i++)if (!flushCompletedBoundary(request, destination, completedBoundaries[i])) {
                    request.destination = null;
                    i++;
                    completedBoundaries.splice(0, i);
                    return;
                }
                completedBoundaries.splice(0, i);
                completeWriting(destination);
                currentView = new Uint8Array(2048);
                writtenBytes = 0;
                var partialBoundaries = request.partialBoundaries;
                for(i = 0; i < partialBoundaries.length; i++){
                    a: {
                        clientRenderedBoundaries = request;
                        boundary = destination;
                        var boundary$jscomp$0 = partialBoundaries[i], completedSegments = boundary$jscomp$0.completedSegments;
                        for(JSCompiler_inline_result = 0; JSCompiler_inline_result < completedSegments.length; JSCompiler_inline_result++)if (!flushPartiallyCompletedSegment(clientRenderedBoundaries, boundary, boundary$jscomp$0, completedSegments[JSCompiler_inline_result])) {
                            JSCompiler_inline_result++;
                            completedSegments.splice(0, JSCompiler_inline_result);
                            var JSCompiler_inline_result$jscomp$0 = !1;
                            break a;
                        }
                        completedSegments.splice(0, JSCompiler_inline_result);
                        JSCompiler_inline_result$jscomp$0 = writeHoistablesForBoundary(boundary, boundary$jscomp$0.contentState, clientRenderedBoundaries.renderState);
                    }
                    if (!JSCompiler_inline_result$jscomp$0) {
                        request.destination = null;
                        i++;
                        partialBoundaries.splice(0, i);
                        return;
                    }
                }
                partialBoundaries.splice(0, i);
                var largeBoundaries = request.completedBoundaries;
                for(i = 0; i < largeBoundaries.length; i++)if (!flushCompletedBoundary(request, destination, largeBoundaries[i])) {
                    request.destination = null;
                    i++;
                    largeBoundaries.splice(0, i);
                    return;
                }
                largeBoundaries.splice(0, i);
            }
        } finally{
            0 === request.allPendingTasks && 0 === request.pingedTasks.length && 0 === request.clientRenderedBoundaries.length && 0 === request.completedBoundaries.length ? (request.flushScheduled = !1, i = request.resumableState, i.hasBody && writeChunk(destination, endChunkForTag("body")), i.hasHtml && writeChunk(destination, endChunkForTag("html")), completeWriting(destination), 0 !== request.abortableTasks.size && console.error("There was still abortable task at the root when we closed. This is a bug in React."), request.status = CLOSED, destination.close(), request.destination = null) : completeWriting(destination);
        }
    }
    function startWork(request) {
        request.flushScheduled = null !== request.destination;
        supportsRequestStorage ? scheduleMicrotask(function() {
            return requestStorage.run(request, performWork, request);
        }) : scheduleMicrotask(function() {
            return performWork(request);
        });
        setTimeout(function() {
            10 === request.status && (request.status = 11);
            null === request.trackedPostpones && (supportsRequestStorage ? requestStorage.run(request, enqueueEarlyPreloadsAfterInitialWork, request) : enqueueEarlyPreloadsAfterInitialWork(request));
        }, 0);
    }
    function enqueueEarlyPreloadsAfterInitialWork(request) {
        safelyEmitEarlyPreloads(request, 0 === request.pendingRootTasks);
    }
    function enqueueFlush(request) {
        !1 === request.flushScheduled && 0 === request.pingedTasks.length && null !== request.destination && (request.flushScheduled = !0, setTimeout(function() {
            var destination = request.destination;
            destination ? flushCompletedQueues(request, destination) : request.flushScheduled = !1;
        }, 0));
    }
    function startFlowing(request, destination) {
        if (13 === request.status) request.status = CLOSED, closeWithError(destination, request.fatalError);
        else if (request.status !== CLOSED && null === request.destination) {
            request.destination = destination;
            try {
                flushCompletedQueues(request, destination);
            } catch (error) {
                destination = {}, logRecoverableError(request, error, destination, null), fatalError(request, error, destination, null);
            }
        }
    }
    function abort(request, reason) {
        if (11 === request.status || 10 === request.status) request.status = 12;
        try {
            var abortableTasks = request.abortableTasks;
            if (0 < abortableTasks.size) {
                var error = void 0 === reason ? Error("The render was aborted by the server without a reason.") : "object" === typeof reason && null !== reason && "function" === typeof reason.then ? Error("The render was aborted by the server with a promise.") : reason;
                request.fatalError = error;
                abortableTasks.forEach(function(task) {
                    return abortTask(task, request, error);
                });
                abortableTasks.clear();
            }
            null !== request.destination && flushCompletedQueues(request, request.destination);
        } catch (error$4) {
            reason = {}, logRecoverableError(request, error$4, reason, null), fatalError(request, error$4, reason, null);
        }
    }
    function ensureCorrectIsomorphicReactVersion() {
        var isomorphicReactPackageVersion = React.version;
        if ("19.1.1" !== isomorphicReactPackageVersion) throw Error('Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:\n  - react:      ' + (isomorphicReactPackageVersion + "\n  - react-dom:  19.1.1\nLearn more: https://react.dev/warnings/version-mismatch"));
    }
    var React = require("95aa664704567d86"), ReactDOM = require("d42e2588ae6303f1"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_PROVIDER_TYPE = Symbol.for("react.provider"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_SCOPE_TYPE = Symbol.for("react.scope"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden"), REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, isArrayImpl = Array.isArray, jsxPropsParents = new WeakMap(), jsxChildrenParents = new WeakMap(), CLIENT_REFERENCE_TAG = Symbol.for("react.client.reference"), LocalPromise = Promise, scheduleMicrotask = "function" === typeof queueMicrotask ? queueMicrotask : function(callback) {
        LocalPromise.resolve(null).then(callback).catch(handleErrorInNextTick);
    }, currentView = null, writtenBytes = 0, textEncoder = new TextEncoder(), assign = Object.assign, hasOwnProperty = Object.prototype.hasOwnProperty, VALID_ATTRIBUTE_NAME_REGEX = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), illegalAttributeNameCache = {}, validatedAttributeNameCache = {}, unitlessNumbers = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")), aliases = new Map([
        [
            "acceptCharset",
            "accept-charset"
        ],
        [
            "htmlFor",
            "for"
        ],
        [
            "httpEquiv",
            "http-equiv"
        ],
        [
            "crossOrigin",
            "crossorigin"
        ],
        [
            "accentHeight",
            "accent-height"
        ],
        [
            "alignmentBaseline",
            "alignment-baseline"
        ],
        [
            "arabicForm",
            "arabic-form"
        ],
        [
            "baselineShift",
            "baseline-shift"
        ],
        [
            "capHeight",
            "cap-height"
        ],
        [
            "clipPath",
            "clip-path"
        ],
        [
            "clipRule",
            "clip-rule"
        ],
        [
            "colorInterpolation",
            "color-interpolation"
        ],
        [
            "colorInterpolationFilters",
            "color-interpolation-filters"
        ],
        [
            "colorProfile",
            "color-profile"
        ],
        [
            "colorRendering",
            "color-rendering"
        ],
        [
            "dominantBaseline",
            "dominant-baseline"
        ],
        [
            "enableBackground",
            "enable-background"
        ],
        [
            "fillOpacity",
            "fill-opacity"
        ],
        [
            "fillRule",
            "fill-rule"
        ],
        [
            "floodColor",
            "flood-color"
        ],
        [
            "floodOpacity",
            "flood-opacity"
        ],
        [
            "fontFamily",
            "font-family"
        ],
        [
            "fontSize",
            "font-size"
        ],
        [
            "fontSizeAdjust",
            "font-size-adjust"
        ],
        [
            "fontStretch",
            "font-stretch"
        ],
        [
            "fontStyle",
            "font-style"
        ],
        [
            "fontVariant",
            "font-variant"
        ],
        [
            "fontWeight",
            "font-weight"
        ],
        [
            "glyphName",
            "glyph-name"
        ],
        [
            "glyphOrientationHorizontal",
            "glyph-orientation-horizontal"
        ],
        [
            "glyphOrientationVertical",
            "glyph-orientation-vertical"
        ],
        [
            "horizAdvX",
            "horiz-adv-x"
        ],
        [
            "horizOriginX",
            "horiz-origin-x"
        ],
        [
            "imageRendering",
            "image-rendering"
        ],
        [
            "letterSpacing",
            "letter-spacing"
        ],
        [
            "lightingColor",
            "lighting-color"
        ],
        [
            "markerEnd",
            "marker-end"
        ],
        [
            "markerMid",
            "marker-mid"
        ],
        [
            "markerStart",
            "marker-start"
        ],
        [
            "overlinePosition",
            "overline-position"
        ],
        [
            "overlineThickness",
            "overline-thickness"
        ],
        [
            "paintOrder",
            "paint-order"
        ],
        [
            "panose-1",
            "panose-1"
        ],
        [
            "pointerEvents",
            "pointer-events"
        ],
        [
            "renderingIntent",
            "rendering-intent"
        ],
        [
            "shapeRendering",
            "shape-rendering"
        ],
        [
            "stopColor",
            "stop-color"
        ],
        [
            "stopOpacity",
            "stop-opacity"
        ],
        [
            "strikethroughPosition",
            "strikethrough-position"
        ],
        [
            "strikethroughThickness",
            "strikethrough-thickness"
        ],
        [
            "strokeDasharray",
            "stroke-dasharray"
        ],
        [
            "strokeDashoffset",
            "stroke-dashoffset"
        ],
        [
            "strokeLinecap",
            "stroke-linecap"
        ],
        [
            "strokeLinejoin",
            "stroke-linejoin"
        ],
        [
            "strokeMiterlimit",
            "stroke-miterlimit"
        ],
        [
            "strokeOpacity",
            "stroke-opacity"
        ],
        [
            "strokeWidth",
            "stroke-width"
        ],
        [
            "textAnchor",
            "text-anchor"
        ],
        [
            "textDecoration",
            "text-decoration"
        ],
        [
            "textRendering",
            "text-rendering"
        ],
        [
            "transformOrigin",
            "transform-origin"
        ],
        [
            "underlinePosition",
            "underline-position"
        ],
        [
            "underlineThickness",
            "underline-thickness"
        ],
        [
            "unicodeBidi",
            "unicode-bidi"
        ],
        [
            "unicodeRange",
            "unicode-range"
        ],
        [
            "unitsPerEm",
            "units-per-em"
        ],
        [
            "vAlphabetic",
            "v-alphabetic"
        ],
        [
            "vHanging",
            "v-hanging"
        ],
        [
            "vIdeographic",
            "v-ideographic"
        ],
        [
            "vMathematical",
            "v-mathematical"
        ],
        [
            "vectorEffect",
            "vector-effect"
        ],
        [
            "vertAdvY",
            "vert-adv-y"
        ],
        [
            "vertOriginX",
            "vert-origin-x"
        ],
        [
            "vertOriginY",
            "vert-origin-y"
        ],
        [
            "wordSpacing",
            "word-spacing"
        ],
        [
            "writingMode",
            "writing-mode"
        ],
        [
            "xmlnsXlink",
            "xmlns:xlink"
        ],
        [
            "xHeight",
            "x-height"
        ]
    ]), hasReadOnlyValue = {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0
    }, ariaProperties = {
        "aria-current": 0,
        "aria-description": 0,
        "aria-details": 0,
        "aria-disabled": 0,
        "aria-hidden": 0,
        "aria-invalid": 0,
        "aria-keyshortcuts": 0,
        "aria-label": 0,
        "aria-roledescription": 0,
        "aria-autocomplete": 0,
        "aria-checked": 0,
        "aria-expanded": 0,
        "aria-haspopup": 0,
        "aria-level": 0,
        "aria-modal": 0,
        "aria-multiline": 0,
        "aria-multiselectable": 0,
        "aria-orientation": 0,
        "aria-placeholder": 0,
        "aria-pressed": 0,
        "aria-readonly": 0,
        "aria-required": 0,
        "aria-selected": 0,
        "aria-sort": 0,
        "aria-valuemax": 0,
        "aria-valuemin": 0,
        "aria-valuenow": 0,
        "aria-valuetext": 0,
        "aria-atomic": 0,
        "aria-busy": 0,
        "aria-live": 0,
        "aria-relevant": 0,
        "aria-dropeffect": 0,
        "aria-grabbed": 0,
        "aria-activedescendant": 0,
        "aria-colcount": 0,
        "aria-colindex": 0,
        "aria-colspan": 0,
        "aria-controls": 0,
        "aria-describedby": 0,
        "aria-errormessage": 0,
        "aria-flowto": 0,
        "aria-labelledby": 0,
        "aria-owns": 0,
        "aria-posinset": 0,
        "aria-rowcount": 0,
        "aria-rowindex": 0,
        "aria-rowspan": 0,
        "aria-setsize": 0
    }, warnedProperties$1 = {}, rARIA$1 = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), rARIACamel$1 = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), didWarnValueNull = !1, possibleStandardNames = {
        accept: "accept",
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        alt: "alt",
        as: "as",
        async: "async",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        capture: "capture",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charSet",
        checked: "checked",
        children: "children",
        cite: "cite",
        class: "className",
        classid: "classID",
        classname: "className",
        cols: "cols",
        colspan: "colSpan",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        controlslist: "controlsList",
        coords: "coords",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback",
        download: "download",
        draggable: "draggable",
        enctype: "encType",
        enterkeyhint: "enterKeyHint",
        fetchpriority: "fetchPriority",
        for: "htmlFor",
        form: "form",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        headers: "headers",
        height: "height",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        imagesizes: "imageSizes",
        imagesrcset: "imageSrcSet",
        inert: "inert",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        integrity: "integrity",
        is: "is",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        low: "low",
        manifest: "manifest",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        nomodule: "noModule",
        nonce: "nonce",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        placeholder: "placeholder",
        playsinline: "playsInline",
        poster: "poster",
        preload: "preload",
        profile: "profile",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rel: "rel",
        required: "required",
        reversed: "reversed",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        start: "start",
        step: "step",
        style: "style",
        summary: "summary",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        type: "type",
        usemap: "useMap",
        value: "value",
        width: "width",
        wmode: "wmode",
        wrap: "wrap",
        about: "about",
        accentheight: "accentHeight",
        "accent-height": "accentHeight",
        accumulate: "accumulate",
        additive: "additive",
        alignmentbaseline: "alignmentBaseline",
        "alignment-baseline": "alignmentBaseline",
        allowreorder: "allowReorder",
        alphabetic: "alphabetic",
        amplitude: "amplitude",
        arabicform: "arabicForm",
        "arabic-form": "arabicForm",
        ascent: "ascent",
        attributename: "attributeName",
        attributetype: "attributeType",
        autoreverse: "autoReverse",
        azimuth: "azimuth",
        basefrequency: "baseFrequency",
        baselineshift: "baselineShift",
        "baseline-shift": "baselineShift",
        baseprofile: "baseProfile",
        bbox: "bbox",
        begin: "begin",
        bias: "bias",
        by: "by",
        calcmode: "calcMode",
        capheight: "capHeight",
        "cap-height": "capHeight",
        clip: "clip",
        clippath: "clipPath",
        "clip-path": "clipPath",
        clippathunits: "clipPathUnits",
        cliprule: "clipRule",
        "clip-rule": "clipRule",
        color: "color",
        colorinterpolation: "colorInterpolation",
        "color-interpolation": "colorInterpolation",
        colorinterpolationfilters: "colorInterpolationFilters",
        "color-interpolation-filters": "colorInterpolationFilters",
        colorprofile: "colorProfile",
        "color-profile": "colorProfile",
        colorrendering: "colorRendering",
        "color-rendering": "colorRendering",
        contentscripttype: "contentScriptType",
        contentstyletype: "contentStyleType",
        cursor: "cursor",
        cx: "cx",
        cy: "cy",
        d: "d",
        datatype: "datatype",
        decelerate: "decelerate",
        descent: "descent",
        diffuseconstant: "diffuseConstant",
        direction: "direction",
        display: "display",
        divisor: "divisor",
        dominantbaseline: "dominantBaseline",
        "dominant-baseline": "dominantBaseline",
        dur: "dur",
        dx: "dx",
        dy: "dy",
        edgemode: "edgeMode",
        elevation: "elevation",
        enablebackground: "enableBackground",
        "enable-background": "enableBackground",
        end: "end",
        exponent: "exponent",
        externalresourcesrequired: "externalResourcesRequired",
        fill: "fill",
        fillopacity: "fillOpacity",
        "fill-opacity": "fillOpacity",
        fillrule: "fillRule",
        "fill-rule": "fillRule",
        filter: "filter",
        filterres: "filterRes",
        filterunits: "filterUnits",
        floodopacity: "floodOpacity",
        "flood-opacity": "floodOpacity",
        floodcolor: "floodColor",
        "flood-color": "floodColor",
        focusable: "focusable",
        fontfamily: "fontFamily",
        "font-family": "fontFamily",
        fontsize: "fontSize",
        "font-size": "fontSize",
        fontsizeadjust: "fontSizeAdjust",
        "font-size-adjust": "fontSizeAdjust",
        fontstretch: "fontStretch",
        "font-stretch": "fontStretch",
        fontstyle: "fontStyle",
        "font-style": "fontStyle",
        fontvariant: "fontVariant",
        "font-variant": "fontVariant",
        fontweight: "fontWeight",
        "font-weight": "fontWeight",
        format: "format",
        from: "from",
        fx: "fx",
        fy: "fy",
        g1: "g1",
        g2: "g2",
        glyphname: "glyphName",
        "glyph-name": "glyphName",
        glyphorientationhorizontal: "glyphOrientationHorizontal",
        "glyph-orientation-horizontal": "glyphOrientationHorizontal",
        glyphorientationvertical: "glyphOrientationVertical",
        "glyph-orientation-vertical": "glyphOrientationVertical",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        hanging: "hanging",
        horizadvx: "horizAdvX",
        "horiz-adv-x": "horizAdvX",
        horizoriginx: "horizOriginX",
        "horiz-origin-x": "horizOriginX",
        ideographic: "ideographic",
        imagerendering: "imageRendering",
        "image-rendering": "imageRendering",
        in2: "in2",
        in: "in",
        inlist: "inlist",
        intercept: "intercept",
        k1: "k1",
        k2: "k2",
        k3: "k3",
        k4: "k4",
        k: "k",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        kerning: "kerning",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        letterspacing: "letterSpacing",
        "letter-spacing": "letterSpacing",
        lightingcolor: "lightingColor",
        "lighting-color": "lightingColor",
        limitingconeangle: "limitingConeAngle",
        local: "local",
        markerend: "markerEnd",
        "marker-end": "markerEnd",
        markerheight: "markerHeight",
        markermid: "markerMid",
        "marker-mid": "markerMid",
        markerstart: "markerStart",
        "marker-start": "markerStart",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        mask: "mask",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        mathematical: "mathematical",
        mode: "mode",
        numoctaves: "numOctaves",
        offset: "offset",
        opacity: "opacity",
        operator: "operator",
        order: "order",
        orient: "orient",
        orientation: "orientation",
        origin: "origin",
        overflow: "overflow",
        overlineposition: "overlinePosition",
        "overline-position": "overlinePosition",
        overlinethickness: "overlineThickness",
        "overline-thickness": "overlineThickness",
        paintorder: "paintOrder",
        "paint-order": "paintOrder",
        panose1: "panose1",
        "panose-1": "panose1",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointerevents: "pointerEvents",
        "pointer-events": "pointerEvents",
        points: "points",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        popover: "popover",
        popovertarget: "popoverTarget",
        popovertargetaction: "popoverTargetAction",
        prefix: "prefix",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        property: "property",
        r: "r",
        radius: "radius",
        refx: "refX",
        refy: "refY",
        renderingintent: "renderingIntent",
        "rendering-intent": "renderingIntent",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        resource: "resource",
        restart: "restart",
        result: "result",
        results: "results",
        rotate: "rotate",
        rx: "rx",
        ry: "ry",
        scale: "scale",
        security: "security",
        seed: "seed",
        shaperendering: "shapeRendering",
        "shape-rendering": "shapeRendering",
        slope: "slope",
        spacing: "spacing",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        speed: "speed",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stemh: "stemh",
        stemv: "stemv",
        stitchtiles: "stitchTiles",
        stopcolor: "stopColor",
        "stop-color": "stopColor",
        stopopacity: "stopOpacity",
        "stop-opacity": "stopOpacity",
        strikethroughposition: "strikethroughPosition",
        "strikethrough-position": "strikethroughPosition",
        strikethroughthickness: "strikethroughThickness",
        "strikethrough-thickness": "strikethroughThickness",
        string: "string",
        stroke: "stroke",
        strokedasharray: "strokeDasharray",
        "stroke-dasharray": "strokeDasharray",
        strokedashoffset: "strokeDashoffset",
        "stroke-dashoffset": "strokeDashoffset",
        strokelinecap: "strokeLinecap",
        "stroke-linecap": "strokeLinecap",
        strokelinejoin: "strokeLinejoin",
        "stroke-linejoin": "strokeLinejoin",
        strokemiterlimit: "strokeMiterlimit",
        "stroke-miterlimit": "strokeMiterlimit",
        strokewidth: "strokeWidth",
        "stroke-width": "strokeWidth",
        strokeopacity: "strokeOpacity",
        "stroke-opacity": "strokeOpacity",
        suppresscontenteditablewarning: "suppressContentEditableWarning",
        suppresshydrationwarning: "suppressHydrationWarning",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textanchor: "textAnchor",
        "text-anchor": "textAnchor",
        textdecoration: "textDecoration",
        "text-decoration": "textDecoration",
        textlength: "textLength",
        textrendering: "textRendering",
        "text-rendering": "textRendering",
        to: "to",
        transform: "transform",
        transformorigin: "transformOrigin",
        "transform-origin": "transformOrigin",
        typeof: "typeof",
        u1: "u1",
        u2: "u2",
        underlineposition: "underlinePosition",
        "underline-position": "underlinePosition",
        underlinethickness: "underlineThickness",
        "underline-thickness": "underlineThickness",
        unicode: "unicode",
        unicodebidi: "unicodeBidi",
        "unicode-bidi": "unicodeBidi",
        unicoderange: "unicodeRange",
        "unicode-range": "unicodeRange",
        unitsperem: "unitsPerEm",
        "units-per-em": "unitsPerEm",
        unselectable: "unselectable",
        valphabetic: "vAlphabetic",
        "v-alphabetic": "vAlphabetic",
        values: "values",
        vectoreffect: "vectorEffect",
        "vector-effect": "vectorEffect",
        version: "version",
        vertadvy: "vertAdvY",
        "vert-adv-y": "vertAdvY",
        vertoriginx: "vertOriginX",
        "vert-origin-x": "vertOriginX",
        vertoriginy: "vertOriginY",
        "vert-origin-y": "vertOriginY",
        vhanging: "vHanging",
        "v-hanging": "vHanging",
        videographic: "vIdeographic",
        "v-ideographic": "vIdeographic",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        visibility: "visibility",
        vmathematical: "vMathematical",
        "v-mathematical": "vMathematical",
        vocab: "vocab",
        widths: "widths",
        wordspacing: "wordSpacing",
        "word-spacing": "wordSpacing",
        writingmode: "writingMode",
        "writing-mode": "writingMode",
        x1: "x1",
        x2: "x2",
        x: "x",
        xchannelselector: "xChannelSelector",
        xheight: "xHeight",
        "x-height": "xHeight",
        xlinkactuate: "xlinkActuate",
        "xlink:actuate": "xlinkActuate",
        xlinkarcrole: "xlinkArcrole",
        "xlink:arcrole": "xlinkArcrole",
        xlinkhref: "xlinkHref",
        "xlink:href": "xlinkHref",
        xlinkrole: "xlinkRole",
        "xlink:role": "xlinkRole",
        xlinkshow: "xlinkShow",
        "xlink:show": "xlinkShow",
        xlinktitle: "xlinkTitle",
        "xlink:title": "xlinkTitle",
        xlinktype: "xlinkType",
        "xlink:type": "xlinkType",
        xmlbase: "xmlBase",
        "xml:base": "xmlBase",
        xmllang: "xmlLang",
        "xml:lang": "xmlLang",
        xmlns: "xmlns",
        "xml:space": "xmlSpace",
        xmlnsxlink: "xmlnsXlink",
        "xmlns:xlink": "xmlnsXlink",
        xmlspace: "xmlSpace",
        y1: "y1",
        y2: "y2",
        y: "y",
        ychannelselector: "yChannelSelector",
        z: "z",
        zoomandpan: "zoomAndPan"
    }, warnedProperties = {}, EVENT_NAME_REGEX = /^on./, INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/, rARIA = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), rARIACamel = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/, msPattern$1 = /^-ms-/, hyphenPattern = /-(.)/g, badStyleValueWithSemicolonPattern = /;\s*$/, warnedStyleNames = {}, warnedStyleValues = {}, warnedForNaNValue = !1, warnedForInfinityValue = !1, matchHtmlRegExp = /["'&<>]/, uppercasePattern = /([A-Z])/g, msPattern = /^ms-/, isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, NotPending = Object.freeze({
        pending: !1,
        data: null,
        method: null,
        action: null
    }), previousDispatcher = ReactDOMSharedInternals.d;
    ReactDOMSharedInternals.d = {
        f: previousDispatcher.f,
        r: previousDispatcher.r,
        D: function(href) {
            var request = resolveRequest();
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if ("string" === typeof href && href) {
                    if (!resumableState.dnsResources.hasOwnProperty(href)) {
                        resumableState.dnsResources[href] = EXISTS;
                        resumableState = renderState.headers;
                        var header, JSCompiler_temp;
                        if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity) JSCompiler_temp = (header = "<" + escapeHrefForLinkHeaderURLContext(href) + ">; rel=dns-prefetch", 0 <= (resumableState.remainingCapacity -= header.length + 2));
                        JSCompiler_temp ? (renderState.resets.dns[href] = EXISTS, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (header = [], pushLinkImpl(header, {
                            href: href,
                            rel: "dns-prefetch"
                        }), renderState.preconnects.add(header));
                    }
                    enqueueFlush(request);
                }
            } else previousDispatcher.D(href);
        },
        C: function(href, crossOrigin) {
            var request = resolveRequest();
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if ("string" === typeof href && href) {
                    var bucket = "use-credentials" === crossOrigin ? "credentials" : "string" === typeof crossOrigin ? "anonymous" : "default";
                    if (!resumableState.connectResources[bucket].hasOwnProperty(href)) {
                        resumableState.connectResources[bucket][href] = EXISTS;
                        resumableState = renderState.headers;
                        var header, JSCompiler_temp;
                        if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity) {
                            JSCompiler_temp = "<" + escapeHrefForLinkHeaderURLContext(href) + ">; rel=preconnect";
                            if ("string" === typeof crossOrigin) {
                                var escapedCrossOrigin = escapeStringForLinkHeaderQuotedParamValueContext(crossOrigin, "crossOrigin");
                                JSCompiler_temp += '; crossorigin="' + escapedCrossOrigin + '"';
                            }
                            JSCompiler_temp = (header = JSCompiler_temp, 0 <= (resumableState.remainingCapacity -= header.length + 2));
                        }
                        JSCompiler_temp ? (renderState.resets.connect[bucket][href] = EXISTS, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (bucket = [], pushLinkImpl(bucket, {
                            rel: "preconnect",
                            href: href,
                            crossOrigin: crossOrigin
                        }), renderState.preconnects.add(bucket));
                    }
                    enqueueFlush(request);
                }
            } else previousDispatcher.C(href, crossOrigin);
        },
        L: function(href, as, options) {
            var request = resolveRequest();
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (as && href) {
                    switch(as){
                        case "image":
                            if (options) {
                                var imageSrcSet = options.imageSrcSet;
                                var imageSizes = options.imageSizes;
                                var fetchPriority = options.fetchPriority;
                            }
                            var key = imageSrcSet ? imageSrcSet + "\n" + (imageSizes || "") : href;
                            if (resumableState.imageResources.hasOwnProperty(key)) return;
                            resumableState.imageResources[key] = PRELOAD_NO_CREDS;
                            resumableState = renderState.headers;
                            var header;
                            resumableState && 0 < resumableState.remainingCapacity && "string" !== typeof imageSrcSet && "high" === fetchPriority && (header = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key] = PRELOAD_NO_CREDS, resumableState.highImagePreloads && (resumableState.highImagePreloads += ", "), resumableState.highImagePreloads += header) : (resumableState = [], pushLinkImpl(resumableState, assign({
                                rel: "preload",
                                href: imageSrcSet ? void 0 : href,
                                as: as
                            }, options)), "high" === fetchPriority ? renderState.highImagePreloads.add(resumableState) : (renderState.bulkPreloads.add(resumableState), renderState.preloads.images.set(key, resumableState)));
                            break;
                        case "style":
                            if (resumableState.styleResources.hasOwnProperty(href)) return;
                            imageSrcSet = [];
                            pushLinkImpl(imageSrcSet, assign({
                                rel: "preload",
                                href: href,
                                as: as
                            }, options));
                            resumableState.styleResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [
                                options.crossOrigin,
                                options.integrity
                            ];
                            renderState.preloads.stylesheets.set(href, imageSrcSet);
                            renderState.bulkPreloads.add(imageSrcSet);
                            break;
                        case "script":
                            if (resumableState.scriptResources.hasOwnProperty(href)) return;
                            imageSrcSet = [];
                            renderState.preloads.scripts.set(href, imageSrcSet);
                            renderState.bulkPreloads.add(imageSrcSet);
                            pushLinkImpl(imageSrcSet, assign({
                                rel: "preload",
                                href: href,
                                as: as
                            }, options));
                            resumableState.scriptResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [
                                options.crossOrigin,
                                options.integrity
                            ];
                            break;
                        default:
                            if (resumableState.unknownResources.hasOwnProperty(as)) {
                                if (imageSrcSet = resumableState.unknownResources[as], imageSrcSet.hasOwnProperty(href)) return;
                            } else imageSrcSet = {}, resumableState.unknownResources[as] = imageSrcSet;
                            imageSrcSet[href] = PRELOAD_NO_CREDS;
                            if ((resumableState = renderState.headers) && 0 < resumableState.remainingCapacity && "font" === as && (key = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= key.length + 2))) renderState.resets.font[href] = PRELOAD_NO_CREDS, resumableState.fontPreloads && (resumableState.fontPreloads += ", "), resumableState.fontPreloads += key;
                            else switch(resumableState = [], href = assign({
                                rel: "preload",
                                href: href,
                                as: as
                            }, options), pushLinkImpl(resumableState, href), as){
                                case "font":
                                    renderState.fontPreloads.add(resumableState);
                                    break;
                                default:
                                    renderState.bulkPreloads.add(resumableState);
                            }
                    }
                    enqueueFlush(request);
                }
            } else previousDispatcher.L(href, as, options);
        },
        m: function(href, options) {
            var request = resolveRequest();
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (href) {
                    var as = options && "string" === typeof options.as ? options.as : "script";
                    switch(as){
                        case "script":
                            if (resumableState.moduleScriptResources.hasOwnProperty(href)) return;
                            as = [];
                            resumableState.moduleScriptResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [
                                options.crossOrigin,
                                options.integrity
                            ];
                            renderState.preloads.moduleScripts.set(href, as);
                            break;
                        default:
                            if (resumableState.moduleUnknownResources.hasOwnProperty(as)) {
                                var resources = resumableState.unknownResources[as];
                                if (resources.hasOwnProperty(href)) return;
                            } else resources = {}, resumableState.moduleUnknownResources[as] = resources;
                            as = [];
                            resources[href] = PRELOAD_NO_CREDS;
                    }
                    pushLinkImpl(as, assign({
                        rel: "modulepreload",
                        href: href
                    }, options));
                    renderState.bulkPreloads.add(as);
                    enqueueFlush(request);
                }
            } else previousDispatcher.m(href, options);
        },
        X: function(src, options) {
            var request = resolveRequest();
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (src) {
                    var resourceState = resumableState.scriptResources.hasOwnProperty(src) ? resumableState.scriptResources[src] : void 0;
                    resourceState !== EXISTS && (resumableState.scriptResources[src] = EXISTS, options = assign({
                        src: src,
                        async: !0
                    }, options), resourceState && (2 === resourceState.length && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.scripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
                }
            } else previousDispatcher.X(src, options);
        },
        S: function(href, precedence, options) {
            var request = resolveRequest();
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (href) {
                    precedence = precedence || "default";
                    var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : void 0;
                    resourceState !== EXISTS && (resumableState.styleResources[href] = EXISTS, styleQueue || (styleQueue = {
                        precedence: stringToChunk(escapeTextForBrowser(precedence)),
                        rules: [],
                        hrefs: [],
                        sheets: new Map()
                    }, renderState.styles.set(precedence, styleQueue)), precedence = {
                        state: PENDING$1,
                        props: assign({
                            rel: "stylesheet",
                            href: href,
                            "data-precedence": precedence
                        }, options)
                    }, resourceState && (2 === resourceState.length && adoptPreloadCredentials(precedence.props, resourceState), (renderState = renderState.preloads.stylesheets.get(href)) && 0 < renderState.length ? renderState.length = 0 : precedence.state = PRELOADED), styleQueue.sheets.set(href, precedence), enqueueFlush(request));
                }
            } else previousDispatcher.S(href, precedence, options);
        },
        M: function(src, options) {
            var request = resolveRequest();
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (src) {
                    var resourceState = resumableState.moduleScriptResources.hasOwnProperty(src) ? resumableState.moduleScriptResources[src] : void 0;
                    resourceState !== EXISTS && (resumableState.moduleScriptResources[src] = EXISTS, options = assign({
                        src: src,
                        type: "module",
                        async: !0
                    }, options), resourceState && (2 === resourceState.length && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.moduleScripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
                }
            } else previousDispatcher.M(src, options);
        }
    };
    var NothingSent = 0, SentCompleteSegmentFunction = 1, SentCompleteBoundaryFunction = 2, SentClientRenderFunction = 4, SentStyleInsertionFunction = 8, EXISTS = null, PRELOAD_NO_CREDS = [];
    Object.freeze(PRELOAD_NO_CREDS);
    stringToPrecomputedChunk('"></template>');
    var startInlineScript = stringToPrecomputedChunk("<script>"), endInlineScript = stringToPrecomputedChunk("\x3c/script>"), startScriptSrc = stringToPrecomputedChunk('<script src="'), startModuleSrc = stringToPrecomputedChunk('<script type="module" src="'), scriptNonce = stringToPrecomputedChunk('" nonce="'), scriptIntegirty = stringToPrecomputedChunk('" integrity="'), scriptCrossOrigin = stringToPrecomputedChunk('" crossorigin="'), endAsyncScript = stringToPrecomputedChunk('" async="">\x3c/script>'), scriptRegex = /(<\/|<)(s)(cript)/gi, importMapScriptStart = stringToPrecomputedChunk('<script type="importmap">'), importMapScriptEnd = stringToPrecomputedChunk("\x3c/script>");
    var didWarnForNewBooleanPropsWithEmptyValue = {};
    var NoContribution = 0, ROOT_HTML_MODE = 0, HTML_HTML_MODE = 1, HTML_MODE = 2, HTML_HEAD_MODE = 3, SVG_MODE = 4, MATHML_MODE = 5, HTML_TABLE_MODE = 6, HTML_TABLE_BODY_MODE = 7, HTML_TABLE_ROW_MODE = 8, HTML_COLGROUP_MODE = 9, textSeparator = stringToPrecomputedChunk("\x3c!-- --\x3e"), styleNameCache = new Map(), styleAttributeStart = stringToPrecomputedChunk(' style="'), styleAssign = stringToPrecomputedChunk(":"), styleSeparator = stringToPrecomputedChunk(";"), attributeSeparator = stringToPrecomputedChunk(" "), attributeAssign = stringToPrecomputedChunk('="'), attributeEnd = stringToPrecomputedChunk('"'), attributeEmptyString = stringToPrecomputedChunk('=""'), actionJavaScriptURL = stringToPrecomputedChunk(escapeTextForBrowser("javascript:throw new Error('React form unexpectedly submitted.')")), startHiddenInputChunk = stringToPrecomputedChunk('<input type="hidden"'), endOfStartTag = stringToPrecomputedChunk(">"), endOfStartTagSelfClosing = stringToPrecomputedChunk("/>"), didWarnDefaultInputValue = !1, didWarnDefaultChecked = !1, didWarnDefaultSelectValue = !1, didWarnDefaultTextareaValue = !1, didWarnInvalidOptionChildren = !1, didWarnInvalidOptionInnerHTML = !1, didWarnSelectedSetOnOption = !1, didWarnFormActionType = !1, didWarnFormActionName = !1, didWarnFormActionTarget = !1, didWarnFormActionMethod = !1, selectedMarkerAttribute = stringToPrecomputedChunk(' selected=""'), formReplayingRuntimeScript = stringToPrecomputedChunk('addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error(\'React form unexpectedly submitted.\')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});'), formStateMarkerIsMatching = stringToPrecomputedChunk("\x3c!--F!--\x3e"), formStateMarkerIsNotMatching = stringToPrecomputedChunk("\x3c!--F--\x3e"), styleRegex = /(<\/|<)(s)(tyle)/gi, leadingNewline = stringToPrecomputedChunk("\n"), VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, validatedTagCache = new Map(), doctypeChunk = stringToPrecomputedChunk("<!DOCTYPE html>"), endTagCache = new Map(), placeholder1 = stringToPrecomputedChunk('<template id="'), placeholder2 = stringToPrecomputedChunk('"></template>'), startCompletedSuspenseBoundary = stringToPrecomputedChunk("\x3c!--$--\x3e"), startPendingSuspenseBoundary1 = stringToPrecomputedChunk('\x3c!--$?--\x3e<template id="'), startPendingSuspenseBoundary2 = stringToPrecomputedChunk('"></template>'), startClientRenderedSuspenseBoundary = stringToPrecomputedChunk("\x3c!--$!--\x3e"), endSuspenseBoundary = stringToPrecomputedChunk("\x3c!--/$--\x3e"), clientRenderedSuspenseBoundaryError1 = stringToPrecomputedChunk("<template"), clientRenderedSuspenseBoundaryErrorAttrInterstitial = stringToPrecomputedChunk('"'), clientRenderedSuspenseBoundaryError1A = stringToPrecomputedChunk(' data-dgst="'), clientRenderedSuspenseBoundaryError1B = stringToPrecomputedChunk(' data-msg="'), clientRenderedSuspenseBoundaryError1C = stringToPrecomputedChunk(' data-stck="'), clientRenderedSuspenseBoundaryError1D = stringToPrecomputedChunk(' data-cstck="'), clientRenderedSuspenseBoundaryError2 = stringToPrecomputedChunk("></template>"), boundaryPreambleContributionChunkStart = stringToPrecomputedChunk("\x3c!--"), boundaryPreambleContributionChunkEnd = stringToPrecomputedChunk("--\x3e"), startSegmentHTML = stringToPrecomputedChunk('<div hidden id="'), startSegmentHTML2 = stringToPrecomputedChunk('">'), endSegmentHTML = stringToPrecomputedChunk("</div>"), startSegmentSVG = stringToPrecomputedChunk('<svg aria-hidden="true" style="display:none" id="'), startSegmentSVG2 = stringToPrecomputedChunk('">'), endSegmentSVG = stringToPrecomputedChunk("</svg>"), startSegmentMathML = stringToPrecomputedChunk('<math aria-hidden="true" style="display:none" id="'), startSegmentMathML2 = stringToPrecomputedChunk('">'), endSegmentMathML = stringToPrecomputedChunk("</math>"), startSegmentTable = stringToPrecomputedChunk('<table hidden id="'), startSegmentTable2 = stringToPrecomputedChunk('">'), endSegmentTable = stringToPrecomputedChunk("</table>"), startSegmentTableBody = stringToPrecomputedChunk('<table hidden><tbody id="'), startSegmentTableBody2 = stringToPrecomputedChunk('">'), endSegmentTableBody = stringToPrecomputedChunk("</tbody></table>"), startSegmentTableRow = stringToPrecomputedChunk('<table hidden><tr id="'), startSegmentTableRow2 = stringToPrecomputedChunk('">'), endSegmentTableRow = stringToPrecomputedChunk("</tr></table>"), startSegmentColGroup = stringToPrecomputedChunk('<table hidden><colgroup id="'), startSegmentColGroup2 = stringToPrecomputedChunk('">'), endSegmentColGroup = stringToPrecomputedChunk("</colgroup></table>"), completeSegmentScript1Full = stringToPrecomputedChunk('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), completeSegmentScript1Partial = stringToPrecomputedChunk('$RS("'), completeSegmentScript2 = stringToPrecomputedChunk('","'), completeSegmentScriptEnd = stringToPrecomputedChunk('")\x3c/script>');
    stringToPrecomputedChunk('<template data-rsi="" data-sid="');
    stringToPrecomputedChunk('" data-pid="');
    var completeBoundaryScript1Full = stringToPrecomputedChunk('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("'), completeBoundaryScript1Partial = stringToPrecomputedChunk('$RC("'), completeBoundaryWithStylesScript1FullBoth = stringToPrecomputedChunk('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("'), completeBoundaryWithStylesScript1FullPartial = stringToPrecomputedChunk('$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("'), completeBoundaryWithStylesScript1Partial = stringToPrecomputedChunk('$RR("'), completeBoundaryScript2 = stringToPrecomputedChunk('","'), completeBoundaryScript3a = stringToPrecomputedChunk('",'), completeBoundaryScript3b = stringToPrecomputedChunk('"'), completeBoundaryScriptEnd = stringToPrecomputedChunk(")\x3c/script>");
    stringToPrecomputedChunk('<template data-rci="" data-bid="');
    stringToPrecomputedChunk('<template data-rri="" data-bid="');
    stringToPrecomputedChunk('" data-sid="');
    stringToPrecomputedChunk('" data-sty="');
    var clientRenderScript1Full = stringToPrecomputedChunk('$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'), clientRenderScript1Partial = stringToPrecomputedChunk('$RX("'), clientRenderScript1A = stringToPrecomputedChunk('"'), clientRenderErrorScriptArgInterstitial = stringToPrecomputedChunk(","), clientRenderScriptEnd = stringToPrecomputedChunk(")\x3c/script>");
    stringToPrecomputedChunk('<template data-rxi="" data-bid="');
    stringToPrecomputedChunk('" data-dgst="');
    stringToPrecomputedChunk('" data-msg="');
    stringToPrecomputedChunk('" data-stck="');
    stringToPrecomputedChunk('" data-cstck="');
    var regexForJSStringsInInstructionScripts = /[<\u2028\u2029]/g, regexForJSStringsInScripts = /[&><\u2028\u2029]/g, lateStyleTagResourceOpen1 = stringToPrecomputedChunk('<style media="not all" data-precedence="'), lateStyleTagResourceOpen2 = stringToPrecomputedChunk('" data-href="'), lateStyleTagResourceOpen3 = stringToPrecomputedChunk('">'), lateStyleTagTemplateClose = stringToPrecomputedChunk("</style>"), currentlyRenderingBoundaryHasStylesToHoist = !1, destinationHasCapacity = !0, stylesheetFlushingQueue = [], styleTagResourceOpen1 = stringToPrecomputedChunk('<style data-precedence="'), styleTagResourceOpen2 = stringToPrecomputedChunk('" data-href="'), spaceSeparator = stringToPrecomputedChunk(" "), styleTagResourceOpen3 = stringToPrecomputedChunk('">'), styleTagResourceClose = stringToPrecomputedChunk("</style>"), arrayFirstOpenBracket = stringToPrecomputedChunk("["), arraySubsequentOpenBracket = stringToPrecomputedChunk(",["), arrayInterstitial = stringToPrecomputedChunk(","), arrayCloseBracket = stringToPrecomputedChunk("]"), PENDING$1 = 0, PRELOADED = 1, PREAMBLE = 2, LATE = 3, regexForHrefInLinkHeaderURLContext = /[<>\r\n]/g, regexForLinkHeaderQuotedParamValueContext = /["';,\r\n]/g, bind = Function.prototype.bind, supportsRequestStorage = "function" === typeof AsyncLocalStorage, requestStorage = supportsRequestStorage ? new AsyncLocalStorage() : null, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), emptyContextObject = {};
    Object.freeze(emptyContextObject);
    var rendererSigil = {};
    var currentActiveSnapshot = null, didWarnAboutNoopUpdateForComponent = {}, didWarnAboutDeprecatedWillMount = {};
    var didWarnAboutUninitializedState = new Set();
    var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
    var didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
    var didWarnAboutDirectlyAssigningPropsToState = new Set();
    var didWarnAboutUndefinedDerivedState = new Set();
    var didWarnAboutContextTypes$1 = new Set();
    var didWarnAboutChildContextTypes = new Set();
    var didWarnAboutInvalidateContextType = new Set();
    var didWarnOnInvalidCallback = new Set();
    var classComponentUpdater = {
        enqueueSetState: function(inst, payload, callback) {
            var internals = inst._reactInternals;
            null === internals.queue ? warnNoop(inst, "setState") : (internals.queue.push(payload), void 0 !== callback && null !== callback && warnOnInvalidCallback(callback));
        },
        enqueueReplaceState: function(inst, payload, callback) {
            inst = inst._reactInternals;
            inst.replace = !0;
            inst.queue = [
                payload
            ];
            void 0 !== callback && null !== callback && warnOnInvalidCallback(callback);
        },
        enqueueForceUpdate: function(inst, callback) {
            null === inst._reactInternals.queue ? warnNoop(inst, "forceUpdate") : void 0 !== callback && null !== callback && warnOnInvalidCallback(callback);
        }
    }, emptyTreeContext = {
        id: 1,
        overflow: ""
    }, clz32 = Math.clz32 ? Math.clz32 : clz32Fallback, log = Math.log, LN2 = Math.LN2, SuspenseException = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."), suspendedThenable = null, objectIs = "function" === typeof Object.is ? Object.is : is, currentlyRenderingComponent = null, currentlyRenderingTask = null, currentlyRenderingRequest = null, currentlyRenderingKeyPath = null, firstWorkInProgressHook = null, workInProgressHook = null, isReRender = !1, didScheduleRenderPhaseUpdate = !1, localIdCounter = 0, actionStateCounter = 0, actionStateMatchingIndex = -1, thenableIndexCounter = 0, thenableState = null, renderPhaseUpdates = null, numberOfReRenders = 0, isInHookUserCodeInDev = !1, currentHookNameInDev, HooksDispatcher = {
        readContext: readContext,
        use: function(usable) {
            if (null !== usable && "object" === typeof usable) {
                if ("function" === typeof usable.then) return unwrapThenable(usable);
                if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
            }
            throw Error("An unsupported type was passed to use(): " + String(usable));
        },
        useContext: function(context) {
            currentHookNameInDev = "useContext";
            resolveCurrentlyRenderingComponent();
            return context._currentValue;
        },
        useMemo: useMemo,
        useReducer: useReducer,
        useRef: function(initialValue) {
            currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
            workInProgressHook = createWorkInProgressHook();
            var previousRef = workInProgressHook.memoizedState;
            return null === previousRef ? (initialValue = {
                current: initialValue
            }, Object.seal(initialValue), workInProgressHook.memoizedState = initialValue) : previousRef;
        },
        useState: function(initialState) {
            currentHookNameInDev = "useState";
            return useReducer(basicStateReducer, initialState);
        },
        useInsertionEffect: noop$1,
        useLayoutEffect: noop$1,
        useCallback: function(callback, deps) {
            return useMemo(function() {
                return callback;
            }, deps);
        },
        useImperativeHandle: noop$1,
        useEffect: noop$1,
        useDebugValue: noop$1,
        useDeferredValue: function(value, initialValue) {
            resolveCurrentlyRenderingComponent();
            return void 0 !== initialValue ? initialValue : value;
        },
        useTransition: function() {
            resolveCurrentlyRenderingComponent();
            return [
                !1,
                unsupportedStartTransition
            ];
        },
        useId: function() {
            var treeId = currentlyRenderingTask.treeContext;
            var overflow = treeId.overflow;
            treeId = treeId.id;
            treeId = (treeId & ~(1 << 32 - clz32(treeId) - 1)).toString(32) + overflow;
            var resumableState = currentResumableState;
            if (null === resumableState) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
            overflow = localIdCounter++;
            treeId = "\u00ab" + resumableState.idPrefix + "R" + treeId;
            0 < overflow && (treeId += "H" + overflow.toString(32));
            return treeId + "\u00bb";
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
            if (void 0 === getServerSnapshot) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
            return getServerSnapshot();
        },
        useOptimistic: function(passthrough) {
            resolveCurrentlyRenderingComponent();
            return [
                passthrough,
                unsupportedSetOptimisticState
            ];
        },
        useActionState: useActionState,
        useFormState: useActionState,
        useHostTransitionStatus: function() {
            resolveCurrentlyRenderingComponent();
            return NotPending;
        },
        useMemoCache: function(size) {
            for(var data = Array(size), i = 0; i < size; i++)data[i] = REACT_MEMO_CACHE_SENTINEL;
            return data;
        },
        useCacheRefresh: function() {
            return unsupportedRefresh;
        }
    }, currentResumableState = null, currentTaskInDEV = null, DefaultAsyncDispatcher = {
        getCacheForType: function() {
            throw Error("Not implemented.");
        },
        getOwner: function() {
            return null === currentTaskInDEV ? null : currentTaskInDEV.componentStack;
        }
    }, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix, suffix, reentry = !1;
    var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
    var callComponent = {
        react_stack_bottom_frame: function(Component, props, secondArg) {
            return Component(props, secondArg);
        }
    }, callComponentInDEV = callComponent.react_stack_bottom_frame.bind(callComponent), callRender = {
        react_stack_bottom_frame: function(instance) {
            return instance.render();
        }
    }, callRenderInDEV = callRender.react_stack_bottom_frame.bind(callRender), callLazyInit = {
        react_stack_bottom_frame: function(lazy) {
            var init = lazy._init;
            return init(lazy._payload);
        }
    }, callLazyInitInDEV = callLazyInit.react_stack_bottom_frame.bind(callLazyInit), lastResetTime = 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        var getCurrentTime = function() {
            return localPerformance.now();
        };
    } else {
        var localDate = Date;
        getCurrentTime = function() {
            return localDate.now();
        };
    }
    var CLIENT_RENDERED = 4, PENDING = 0, COMPLETED = 1, FLUSHED = 2, POSTPONED = 5, CLOSED = 14, currentRequest = null, didWarnAboutBadClass = {}, didWarnAboutContextTypes = {}, didWarnAboutContextTypeOnFunctionComponent = {}, didWarnAboutGetDerivedStateOnFunctionComponent = {}, didWarnAboutReassigningProps = !1, didWarnAboutGenerators = !1, didWarnAboutMaps = !1;
    ensureCorrectIsomorphicReactVersion();
    ensureCorrectIsomorphicReactVersion();
    exports.prerender = function(children, options) {
        return new Promise(function(resolve, reject) {
            var onHeaders = options ? options.onHeaders : void 0, onHeadersImpl;
            onHeaders && (onHeadersImpl = function(headersDescriptor) {
                onHeaders(new Headers(headersDescriptor));
            });
            var resources = createResumableState(options ? options.identifierPrefix : void 0, options ? options.unstable_externalRuntimeSrc : void 0, options ? options.bootstrapScriptContent : void 0, options ? options.bootstrapScripts : void 0, options ? options.bootstrapModules : void 0), request = createPrerenderRequest(children, resources, createRenderState(resources, void 0, options ? options.unstable_externalRuntimeSrc : void 0, options ? options.importMap : void 0, onHeadersImpl, options ? options.maxHeadersLength : void 0), createRootFormatContext(options ? options.namespaceURI : void 0), options ? options.progressiveChunkSize : void 0, options ? options.onError : void 0, function() {
                var result = {
                    prelude: new ReadableStream({
                        type: "bytes",
                        pull: function(controller) {
                            startFlowing(request, controller);
                        },
                        cancel: function(reason) {
                            request.destination = null;
                            abort(request, reason);
                        }
                    }, {
                        highWaterMark: 0
                    })
                };
                resolve(result);
            }, void 0, void 0, reject, options ? options.onPostpone : void 0);
            if (options && options.signal) {
                var signal = options.signal;
                if (signal.aborted) abort(request, signal.reason);
                else {
                    var listener = function() {
                        abort(request, signal.reason);
                        signal.removeEventListener("abort", listener);
                    };
                    signal.addEventListener("abort", listener);
                }
            }
            startWork(request);
        });
    };
    exports.renderToReadableStream = function(children, options) {
        return new Promise(function(resolve, reject) {
            var onFatalError, onAllReady, allReady = new Promise(function(res, rej) {
                onAllReady = res;
                onFatalError = rej;
            }), onHeaders = options ? options.onHeaders : void 0, onHeadersImpl;
            onHeaders && (onHeadersImpl = function(headersDescriptor) {
                onHeaders(new Headers(headersDescriptor));
            });
            var resumableState = createResumableState(options ? options.identifierPrefix : void 0, options ? options.unstable_externalRuntimeSrc : void 0, options ? options.bootstrapScriptContent : void 0, options ? options.bootstrapScripts : void 0, options ? options.bootstrapModules : void 0), request = createRequest(children, resumableState, createRenderState(resumableState, options ? options.nonce : void 0, options ? options.unstable_externalRuntimeSrc : void 0, options ? options.importMap : void 0, onHeadersImpl, options ? options.maxHeadersLength : void 0), createRootFormatContext(options ? options.namespaceURI : void 0), options ? options.progressiveChunkSize : void 0, options ? options.onError : void 0, onAllReady, function() {
                var stream = new ReadableStream({
                    type: "bytes",
                    pull: function(controller) {
                        startFlowing(request, controller);
                    },
                    cancel: function(reason) {
                        request.destination = null;
                        abort(request, reason);
                    }
                }, {
                    highWaterMark: 0
                });
                stream.allReady = allReady;
                resolve(stream);
            }, function(error) {
                allReady.catch(function() {});
                reject(error);
            }, onFatalError, options ? options.onPostpone : void 0, options ? options.formState : void 0);
            if (options && options.signal) {
                var signal = options.signal;
                if (signal.aborted) abort(request, signal.reason);
                else {
                    var listener = function() {
                        abort(request, signal.reason);
                        signal.removeEventListener("abort", listener);
                    };
                    signal.addEventListener("abort", listener);
                }
            }
            startWork(request);
        });
    };
    exports.version = "19.1.1";
})();

},{"95aa664704567d86":"h4Eti","d42e2588ae6303f1":"btIan"}],"aKl0w":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /*


 JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)

 Copyright (c) 2011 Gary Court
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/ "use strict";
(function() {
    function styleReplacer(match, prefix, s, suffix) {
        return "" + prefix + ("s" === s ? "\\73 " : "\\53 ") + suffix;
    }
    function scriptReplacer(match, prefix, s, suffix) {
        return "" + prefix + ("s" === s ? "\\u0073" : "\\u0053") + suffix;
    }
    function objectName(object) {
        return Object.prototype.toString.call(object).replace(/^\[object (.*)\]$/, function(m, p0) {
            return p0;
        });
    }
    function describeKeyForErrorMessage(key) {
        var encodedKey = JSON.stringify(key);
        return '"' + key + '"' === encodedKey ? key : encodedKey;
    }
    function describeValueForErrorMessage(value) {
        switch(typeof value){
            case "string":
                return JSON.stringify(10 >= value.length ? value : value.slice(0, 10) + "...");
            case "object":
                if (isArrayImpl(value)) return "[...]";
                if (null !== value && value.$$typeof === CLIENT_REFERENCE_TAG) return "client";
                value = objectName(value);
                return "Object" === value ? "{...}" : value;
            case "function":
                return value.$$typeof === CLIENT_REFERENCE_TAG ? "client" : (value = value.displayName || value.name) ? "function " + value : "function";
            default:
                return String(value);
        }
    }
    function describeElementType(type) {
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeElementType(type.render);
            case REACT_MEMO_TYPE:
                return describeElementType(type.type);
            case REACT_LAZY_TYPE:
                var payload = type._payload;
                type = type._init;
                try {
                    return describeElementType(type(payload));
                } catch (x) {}
        }
        return "";
    }
    function describeObjectForErrorMessage(objectOrArray, expandedName) {
        var objKind = objectName(objectOrArray);
        if ("Object" !== objKind && "Array" !== objKind) return objKind;
        var start = -1, length = 0;
        if (isArrayImpl(objectOrArray)) {
            if (jsxChildrenParents.has(objectOrArray)) {
                var type = jsxChildrenParents.get(objectOrArray);
                objKind = "<" + describeElementType(type) + ">";
                for(var i = 0; i < objectOrArray.length; i++){
                    var value = objectOrArray[i];
                    value = "string" === typeof value ? value : "object" === typeof value && null !== value ? "{" + describeObjectForErrorMessage(value) + "}" : "{" + describeValueForErrorMessage(value) + "}";
                    "" + i === expandedName ? (start = objKind.length, length = value.length, objKind += value) : objKind = 15 > value.length && 40 > objKind.length + value.length ? objKind + value : objKind + "{...}";
                }
                objKind += "</" + describeElementType(type) + ">";
            } else {
                objKind = "[";
                for(type = 0; type < objectOrArray.length; type++)0 < type && (objKind += ", "), i = objectOrArray[type], i = "object" === typeof i && null !== i ? describeObjectForErrorMessage(i) : describeValueForErrorMessage(i), "" + type === expandedName ? (start = objKind.length, length = i.length, objKind += i) : objKind = 10 > i.length && 40 > objKind.length + i.length ? objKind + i : objKind + "...";
                objKind += "]";
            }
        } else if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE) objKind = "<" + describeElementType(objectOrArray.type) + "/>";
        else {
            if (objectOrArray.$$typeof === CLIENT_REFERENCE_TAG) return "client";
            if (jsxPropsParents.has(objectOrArray)) {
                objKind = jsxPropsParents.get(objectOrArray);
                objKind = "<" + (describeElementType(objKind) || "...");
                type = Object.keys(objectOrArray);
                for(i = 0; i < type.length; i++){
                    objKind += " ";
                    value = type[i];
                    objKind += describeKeyForErrorMessage(value) + "=";
                    var _value2 = objectOrArray[value];
                    var _substr2 = value === expandedName && "object" === typeof _value2 && null !== _value2 ? describeObjectForErrorMessage(_value2) : describeValueForErrorMessage(_value2);
                    "string" !== typeof _value2 && (_substr2 = "{" + _substr2 + "}");
                    value === expandedName ? (start = objKind.length, length = _substr2.length, objKind += _substr2) : objKind = 10 > _substr2.length && 40 > objKind.length + _substr2.length ? objKind + _substr2 : objKind + "...";
                }
                objKind += ">";
            } else {
                objKind = "{";
                type = Object.keys(objectOrArray);
                for(i = 0; i < type.length; i++)0 < i && (objKind += ", "), value = type[i], objKind += describeKeyForErrorMessage(value) + ": ", _value2 = objectOrArray[value], _value2 = "object" === typeof _value2 && null !== _value2 ? describeObjectForErrorMessage(_value2) : describeValueForErrorMessage(_value2), value === expandedName ? (start = objKind.length, length = _value2.length, objKind += _value2) : objKind = 10 > _value2.length && 40 > objKind.length + _value2.length ? objKind + _value2 : objKind + "...";
                objKind += "}";
            }
        }
        return void 0 === expandedName ? objKind : -1 < start && 0 < length ? (objectOrArray = " ".repeat(start) + "^".repeat(length), "\n  " + objKind + "\n  " + objectOrArray) : "\n  " + objKind;
    }
    function murmurhash3_32_gc(key, seed) {
        var remainder = key.length & 3;
        var bytes = key.length - remainder;
        var h1 = seed;
        for(seed = 0; seed < bytes;){
            var k1 = key.charCodeAt(seed) & 255 | (key.charCodeAt(++seed) & 255) << 8 | (key.charCodeAt(++seed) & 255) << 16 | (key.charCodeAt(++seed) & 255) << 24;
            ++seed;
            k1 = 3432918353 * (k1 & 65535) + ((3432918353 * (k1 >>> 16) & 65535) << 16) & 4294967295;
            k1 = k1 << 15 | k1 >>> 17;
            k1 = 461845907 * (k1 & 65535) + ((461845907 * (k1 >>> 16) & 65535) << 16) & 4294967295;
            h1 ^= k1;
            h1 = h1 << 13 | h1 >>> 19;
            h1 = 5 * (h1 & 65535) + ((5 * (h1 >>> 16) & 65535) << 16) & 4294967295;
            h1 = (h1 & 65535) + 27492 + (((h1 >>> 16) + 58964 & 65535) << 16);
        }
        k1 = 0;
        switch(remainder){
            case 3:
                k1 ^= (key.charCodeAt(seed + 2) & 255) << 16;
            case 2:
                k1 ^= (key.charCodeAt(seed + 1) & 255) << 8;
            case 1:
                k1 ^= key.charCodeAt(seed) & 255, k1 = 3432918353 * (k1 & 65535) + ((3432918353 * (k1 >>> 16) & 65535) << 16) & 4294967295, k1 = k1 << 15 | k1 >>> 17, h1 ^= 461845907 * (k1 & 65535) + ((461845907 * (k1 >>> 16) & 65535) << 16) & 4294967295;
        }
        h1 ^= key.length;
        h1 ^= h1 >>> 16;
        h1 = 2246822507 * (h1 & 65535) + ((2246822507 * (h1 >>> 16) & 65535) << 16) & 4294967295;
        h1 ^= h1 >>> 13;
        h1 = 3266489909 * (h1 & 65535) + ((3266489909 * (h1 >>> 16) & 65535) << 16) & 4294967295;
        return (h1 ^ h1 >>> 16) >>> 0;
    }
    function typeName(value) {
        return "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
    }
    function willCoercionThrow(value) {
        try {
            return testStringCoercion(value), !1;
        } catch (e) {
            return !0;
        }
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkAttributeStringCoercion(value, attributeName) {
        if (willCoercionThrow(value)) return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.", attributeName, typeName(value)), testStringCoercion(value);
    }
    function checkCSSPropertyStringCoercion(value, propName) {
        if (willCoercionThrow(value)) return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.", propName, typeName(value)), testStringCoercion(value);
    }
    function checkHtmlStringCoercion(value) {
        if (willCoercionThrow(value)) return console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.", typeName(value)), testStringCoercion(value);
    }
    function isAttributeNameSafe(attributeName) {
        if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) return !0;
        if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return !1;
        if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) return validatedAttributeNameCache[attributeName] = !0;
        illegalAttributeNameCache[attributeName] = !0;
        console.error("Invalid attribute name: `%s`", attributeName);
        return !1;
    }
    function checkControlledValueProps(tagName, props) {
        hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || null == props.value || ("select" === tagName ? console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`.") : console.error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."));
        props.onChange || props.readOnly || props.disabled || null == props.checked || console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function validateProperty$1(tagName, name) {
        if (hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) return !0;
        if (rARIACamel$1.test(name)) {
            tagName = "aria-" + name.slice(4).toLowerCase();
            tagName = ariaProperties.hasOwnProperty(tagName) ? tagName : null;
            if (null == tagName) return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", name), warnedProperties$1[name] = !0;
            if (name !== tagName) return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?", name, tagName), warnedProperties$1[name] = !0;
        }
        if (rARIA$1.test(name)) {
            tagName = name.toLowerCase();
            tagName = ariaProperties.hasOwnProperty(tagName) ? tagName : null;
            if (null == tagName) return warnedProperties$1[name] = !0, !1;
            name !== tagName && (console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?", name, tagName), warnedProperties$1[name] = !0);
        }
        return !0;
    }
    function validateProperties$2(type, props) {
        var invalidProps = [], key;
        for(key in props)validateProperty$1(type, key) || invalidProps.push(key);
        props = invalidProps.map(function(prop) {
            return "`" + prop + "`";
        }).join(", ");
        1 === invalidProps.length ? console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", props, type) : 1 < invalidProps.length && console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", props, type);
    }
    function validateProperty(tagName, name, value, eventRegistry) {
        if (hasOwnProperty.call(warnedProperties, name) && warnedProperties[name]) return !0;
        var lowerCasedName = name.toLowerCase();
        if ("onfocusin" === lowerCasedName || "onfocusout" === lowerCasedName) return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), warnedProperties[name] = !0;
        if ("function" === typeof value && ("form" === tagName && "action" === name || "input" === tagName && "formAction" === name || "button" === tagName && "formAction" === name)) return !0;
        if (null != eventRegistry) {
            tagName = eventRegistry.possibleRegistrationNames;
            if (eventRegistry.registrationNameDependencies.hasOwnProperty(name)) return !0;
            eventRegistry = tagName.hasOwnProperty(lowerCasedName) ? tagName[lowerCasedName] : null;
            if (null != eventRegistry) return console.error("Invalid event handler property `%s`. Did you mean `%s`?", name, eventRegistry), warnedProperties[name] = !0;
            if (EVENT_NAME_REGEX.test(name)) return console.error("Unknown event handler property `%s`. It will be ignored.", name), warnedProperties[name] = !0;
        } else if (EVENT_NAME_REGEX.test(name)) return INVALID_EVENT_NAME_REGEX.test(name) && console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", name), warnedProperties[name] = !0;
        if (rARIA.test(name) || rARIACamel.test(name)) return !0;
        if ("innerhtml" === lowerCasedName) return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), warnedProperties[name] = !0;
        if ("aria" === lowerCasedName) return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), warnedProperties[name] = !0;
        if ("is" === lowerCasedName && null !== value && void 0 !== value && "string" !== typeof value) return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof value), warnedProperties[name] = !0;
        if ("number" === typeof value && isNaN(value)) return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", name), warnedProperties[name] = !0;
        if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
            if (lowerCasedName = possibleStandardNames[lowerCasedName], lowerCasedName !== name) return console.error("Invalid DOM property `%s`. Did you mean `%s`?", name, lowerCasedName), warnedProperties[name] = !0;
        } else if (name !== lowerCasedName) return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", name, lowerCasedName), warnedProperties[name] = !0;
        switch(name){
            case "dangerouslySetInnerHTML":
            case "children":
            case "style":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                return !0;
            case "innerText":
            case "textContent":
                return !0;
        }
        switch(typeof value){
            case "boolean":
                switch(name){
                    case "autoFocus":
                    case "checked":
                    case "multiple":
                    case "muted":
                    case "selected":
                    case "contentEditable":
                    case "spellCheck":
                    case "draggable":
                    case "value":
                    case "autoReverse":
                    case "externalResourcesRequired":
                    case "focusable":
                    case "preserveAlpha":
                    case "allowFullScreen":
                    case "async":
                    case "autoPlay":
                    case "controls":
                    case "default":
                    case "defer":
                    case "disabled":
                    case "disablePictureInPicture":
                    case "disableRemotePlayback":
                    case "formNoValidate":
                    case "hidden":
                    case "loop":
                    case "noModule":
                    case "noValidate":
                    case "open":
                    case "playsInline":
                    case "readOnly":
                    case "required":
                    case "reversed":
                    case "scoped":
                    case "seamless":
                    case "itemScope":
                    case "capture":
                    case "download":
                    case "inert":
                        return !0;
                    default:
                        lowerCasedName = name.toLowerCase().slice(0, 5);
                        if ("data-" === lowerCasedName || "aria-" === lowerCasedName) return !0;
                        value ? console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', value, name, name, value, name) : console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
                        return warnedProperties[name] = !0;
                }
            case "function":
            case "symbol":
                return warnedProperties[name] = !0, !1;
            case "string":
                if ("false" === value || "true" === value) {
                    switch(name){
                        case "checked":
                        case "selected":
                        case "multiple":
                        case "muted":
                        case "allowFullScreen":
                        case "async":
                        case "autoPlay":
                        case "controls":
                        case "default":
                        case "defer":
                        case "disabled":
                        case "disablePictureInPicture":
                        case "disableRemotePlayback":
                        case "formNoValidate":
                        case "hidden":
                        case "loop":
                        case "noModule":
                        case "noValidate":
                        case "open":
                        case "playsInline":
                        case "readOnly":
                        case "required":
                        case "reversed":
                        case "scoped":
                        case "seamless":
                        case "itemScope":
                        case "inert":
                            break;
                        default:
                            return !0;
                    }
                    console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", value, name, "false" === value ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
                    warnedProperties[name] = !0;
                }
        }
        return !0;
    }
    function warnUnknownProperties(type, props, eventRegistry) {
        var unknownProps = [], key;
        for(key in props)validateProperty(type, key, props[key], eventRegistry) || unknownProps.push(key);
        props = unknownProps.map(function(prop) {
            return "`" + prop + "`";
        }).join(", ");
        1 === unknownProps.length ? console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ", props, type) : 1 < unknownProps.length && console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ", props, type);
    }
    function camelize(string) {
        return string.replace(hyphenPattern, function(_, character) {
            return character.toUpperCase();
        });
    }
    function escapeTextForBrowser(text) {
        if ("boolean" === typeof text || "number" === typeof text || "bigint" === typeof text) return "" + text;
        checkHtmlStringCoercion(text);
        text = "" + text;
        var match = matchHtmlRegExp.exec(text);
        if (match) {
            var html = "", index, lastIndex = 0;
            for(index = match.index; index < text.length; index++){
                switch(text.charCodeAt(index)){
                    case 34:
                        match = "&quot;";
                        break;
                    case 38:
                        match = "&amp;";
                        break;
                    case 39:
                        match = "&#x27;";
                        break;
                    case 60:
                        match = "&lt;";
                        break;
                    case 62:
                        match = "&gt;";
                        break;
                    default:
                        continue;
                }
                lastIndex !== index && (html += text.slice(lastIndex, index));
                lastIndex = index + 1;
                html += match;
            }
            text = lastIndex !== index ? html + text.slice(lastIndex, index) : html;
        }
        return text;
    }
    function sanitizeURL(url) {
        return isJavaScriptProtocol.test("" + url) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : url;
    }
    function escapeEntireInlineScriptContent(scriptText) {
        checkHtmlStringCoercion(scriptText);
        return ("" + scriptText).replace(scriptRegex, scriptReplacer);
    }
    function createResumableState(identifierPrefix, externalRuntimeConfig, bootstrapScriptContent, bootstrapScripts, bootstrapModules) {
        return {
            idPrefix: void 0 === identifierPrefix ? "" : identifierPrefix,
            nextFormID: 0,
            streamingFormat: 0,
            bootstrapScriptContent: bootstrapScriptContent,
            bootstrapScripts: bootstrapScripts,
            bootstrapModules: bootstrapModules,
            instructions: NothingSent,
            hasBody: !1,
            hasHtml: !1,
            unknownResources: {},
            dnsResources: {},
            connectResources: {
                default: {},
                anonymous: {},
                credentials: {}
            },
            imageResources: {},
            styleResources: {},
            scriptResources: {},
            moduleUnknownResources: {},
            moduleScriptResources: {}
        };
    }
    function createPreambleState() {
        return {
            htmlChunks: null,
            headChunks: null,
            bodyChunks: null,
            contribution: NoContribution
        };
    }
    function createFormatContext(insertionMode, selectedValue, tagScope) {
        return {
            insertionMode: insertionMode,
            selectedValue: selectedValue,
            tagScope: tagScope
        };
    }
    function getChildFormatContext(parentContext, type, props) {
        switch(type){
            case "noscript":
                return createFormatContext(HTML_MODE, null, parentContext.tagScope | 1);
            case "select":
                return createFormatContext(HTML_MODE, null != props.value ? props.value : props.defaultValue, parentContext.tagScope);
            case "svg":
                return createFormatContext(SVG_MODE, null, parentContext.tagScope);
            case "picture":
                return createFormatContext(HTML_MODE, null, parentContext.tagScope | 2);
            case "math":
                return createFormatContext(MATHML_MODE, null, parentContext.tagScope);
            case "foreignObject":
                return createFormatContext(HTML_MODE, null, parentContext.tagScope);
            case "table":
                return createFormatContext(HTML_TABLE_MODE, null, parentContext.tagScope);
            case "thead":
            case "tbody":
            case "tfoot":
                return createFormatContext(HTML_TABLE_BODY_MODE, null, parentContext.tagScope);
            case "colgroup":
                return createFormatContext(HTML_COLGROUP_MODE, null, parentContext.tagScope);
            case "tr":
                return createFormatContext(HTML_TABLE_ROW_MODE, null, parentContext.tagScope);
            case "head":
                if (parentContext.insertionMode < HTML_MODE) return createFormatContext(HTML_HEAD_MODE, null, parentContext.tagScope);
                break;
            case "html":
                if (parentContext.insertionMode === ROOT_HTML_MODE) return createFormatContext(HTML_HTML_MODE, null, parentContext.tagScope);
        }
        return parentContext.insertionMode >= HTML_TABLE_MODE || parentContext.insertionMode < HTML_MODE ? createFormatContext(HTML_MODE, null, parentContext.tagScope) : parentContext;
    }
    function pushStyleAttribute(target, style) {
        if ("object" !== typeof style) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
        var isFirst = !0, styleName;
        for(styleName in style)if (hasOwnProperty.call(style, styleName)) {
            var styleValue = style[styleName];
            if (null != styleValue && "boolean" !== typeof styleValue && "" !== styleValue) {
                if (0 === styleName.indexOf("--")) {
                    var nameChunk = escapeTextForBrowser(styleName);
                    checkCSSPropertyStringCoercion(styleValue, styleName);
                    styleValue = escapeTextForBrowser(("" + styleValue).trim());
                } else {
                    nameChunk = styleName;
                    var value = styleValue;
                    if (-1 < nameChunk.indexOf("-")) {
                        var name = nameChunk;
                        warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name] || (warnedStyleNames[name] = !0, console.error("Unsupported style property %s. Did you mean %s?", name, camelize(name.replace(msPattern$1, "ms-"))));
                    } else if (badVendoredStyleNamePattern.test(nameChunk)) name = nameChunk, warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name] || (warnedStyleNames[name] = !0, console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?", name, name.charAt(0).toUpperCase() + name.slice(1)));
                    else if (badStyleValueWithSemicolonPattern.test(value)) {
                        name = nameChunk;
                        var value$jscomp$0 = value;
                        warnedStyleValues.hasOwnProperty(value$jscomp$0) && warnedStyleValues[value$jscomp$0] || (warnedStyleValues[value$jscomp$0] = !0, console.error('Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.', name, value$jscomp$0.replace(badStyleValueWithSemicolonPattern, "")));
                    }
                    "number" === typeof value && (isNaN(value) ? warnedForNaNValue || (warnedForNaNValue = !0, console.error("`NaN` is an invalid value for the `%s` css style property.", nameChunk)) : isFinite(value) || warnedForInfinityValue || (warnedForInfinityValue = !0, console.error("`Infinity` is an invalid value for the `%s` css style property.", nameChunk)));
                    nameChunk = styleName;
                    value = styleNameCache.get(nameChunk);
                    void 0 !== value ? nameChunk = value : (value = escapeTextForBrowser(nameChunk.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-")), styleNameCache.set(nameChunk, value), nameChunk = value);
                    "number" === typeof styleValue ? styleValue = 0 === styleValue || unitlessNumbers.has(styleName) ? "" + styleValue : styleValue + "px" : (checkCSSPropertyStringCoercion(styleValue, styleName), styleValue = escapeTextForBrowser(("" + styleValue).trim()));
                }
                isFirst ? (isFirst = !1, target.push(styleAttributeStart, nameChunk, styleAssign, styleValue)) : target.push(styleSeparator, nameChunk, styleAssign, styleValue);
            }
        }
        isFirst || target.push(attributeEnd);
    }
    function pushBooleanAttribute(target, name, value) {
        value && "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, name, attributeEmptyString);
    }
    function pushStringAttribute(target, name, value) {
        "function" !== typeof value && "symbol" !== typeof value && "boolean" !== typeof value && target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
    }
    function pushAdditionalFormField(value, key) {
        this.push('<input type="hidden"');
        validateAdditionalFormField(value);
        pushStringAttribute(this, "name", key);
        pushStringAttribute(this, "value", value);
        this.push(endOfStartTagSelfClosing);
    }
    function validateAdditionalFormField(value) {
        if ("string" !== typeof value) throw Error("File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration.");
    }
    function getCustomFormFields(resumableState, formAction) {
        if ("function" === typeof formAction.$$FORM_ACTION) {
            var id = resumableState.nextFormID++;
            resumableState = resumableState.idPrefix + id;
            try {
                var customFields = formAction.$$FORM_ACTION(resumableState);
                if (customFields) {
                    var formData = customFields.data;
                    null != formData && formData.forEach(validateAdditionalFormField);
                }
                return customFields;
            } catch (x) {
                if ("object" === typeof x && null !== x && "function" === typeof x.then) throw x;
                console.error("Failed to serialize an action for progressive enhancement:\n%s", x);
            }
        }
        return null;
    }
    function pushFormActionAttribute(target, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name) {
        var formData = null;
        if ("function" === typeof formAction) {
            null === name || didWarnFormActionName || (didWarnFormActionName = !0, console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'));
            null === formEncType && null === formMethod || didWarnFormActionMethod || (didWarnFormActionMethod = !0, console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."));
            null === formTarget || didWarnFormActionTarget || (didWarnFormActionTarget = !0, console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."));
            var customFields = getCustomFormFields(resumableState, formAction);
            null !== customFields ? (name = customFields.name, formAction = customFields.action || "", formEncType = customFields.encType, formMethod = customFields.method, formTarget = customFields.target, formData = customFields.data) : (target.push(attributeSeparator, "formAction", attributeAssign, actionJavaScriptURL, attributeEnd), formTarget = formMethod = formEncType = formAction = name = null, injectFormReplayingRuntime(resumableState, renderState));
        }
        null != name && pushAttribute(target, "name", name);
        null != formAction && pushAttribute(target, "formAction", formAction);
        null != formEncType && pushAttribute(target, "formEncType", formEncType);
        null != formMethod && pushAttribute(target, "formMethod", formMethod);
        null != formTarget && pushAttribute(target, "formTarget", formTarget);
        return formData;
    }
    function pushAttribute(target, name, value) {
        switch(name){
            case "className":
                pushStringAttribute(target, "class", value);
                break;
            case "tabIndex":
                pushStringAttribute(target, "tabindex", value);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                pushStringAttribute(target, name, value);
                break;
            case "style":
                pushStyleAttribute(target, value);
                break;
            case "src":
            case "href":
                if ("" === value) {
                    "src" === name ? console.error('An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', name, name) : console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', name, name);
                    break;
                }
            case "action":
            case "formAction":
                if (null == value || "function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) break;
                checkAttributeStringCoercion(value, name);
                value = sanitizeURL("" + value);
                target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
                break;
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "ref":
                break;
            case "autoFocus":
            case "multiple":
            case "muted":
                pushBooleanAttribute(target, name.toLowerCase(), value);
                break;
            case "xlinkHref":
                if ("function" === typeof value || "symbol" === typeof value || "boolean" === typeof value) break;
                checkAttributeStringCoercion(value, name);
                value = sanitizeURL("" + value);
                target.push(attributeSeparator, "xlink:href", attributeAssign, escapeTextForBrowser(value), attributeEnd);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
                break;
            case "inert":
                "" !== value || didWarnForNewBooleanPropsWithEmptyValue[name] || (didWarnForNewBooleanPropsWithEmptyValue[name] = !0, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", name));
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                value && "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, name, attributeEmptyString);
                break;
            case "capture":
            case "download":
                !0 === value ? target.push(attributeSeparator, name, attributeEmptyString) : !1 !== value && "function" !== typeof value && "symbol" !== typeof value && target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                "function" !== typeof value && "symbol" !== typeof value && !isNaN(value) && 1 <= value && target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
                break;
            case "rowSpan":
            case "start":
                "function" === typeof value || "symbol" === typeof value || isNaN(value) || target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
                break;
            case "xlinkActuate":
                pushStringAttribute(target, "xlink:actuate", value);
                break;
            case "xlinkArcrole":
                pushStringAttribute(target, "xlink:arcrole", value);
                break;
            case "xlinkRole":
                pushStringAttribute(target, "xlink:role", value);
                break;
            case "xlinkShow":
                pushStringAttribute(target, "xlink:show", value);
                break;
            case "xlinkTitle":
                pushStringAttribute(target, "xlink:title", value);
                break;
            case "xlinkType":
                pushStringAttribute(target, "xlink:type", value);
                break;
            case "xmlBase":
                pushStringAttribute(target, "xml:base", value);
                break;
            case "xmlLang":
                pushStringAttribute(target, "xml:lang", value);
                break;
            case "xmlSpace":
                pushStringAttribute(target, "xml:space", value);
                break;
            default:
                if (!(2 < name.length) || "o" !== name[0] && "O" !== name[0] || "n" !== name[1] && "N" !== name[1]) {
                    if (name = aliases.get(name) || name, isAttributeNameSafe(name)) {
                        switch(typeof value){
                            case "function":
                            case "symbol":
                                return;
                            case "boolean":
                                var prefix = name.toLowerCase().slice(0, 5);
                                if ("data-" !== prefix && "aria-" !== prefix) return;
                        }
                        target.push(attributeSeparator, name, attributeAssign, escapeTextForBrowser(value), attributeEnd);
                    }
                }
        }
    }
    function pushInnerHTML(target, innerHTML, children) {
        if (null != innerHTML) {
            if (null != children) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if ("object" !== typeof innerHTML || !("__html" in innerHTML)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
            innerHTML = innerHTML.__html;
            null !== innerHTML && void 0 !== innerHTML && (checkHtmlStringCoercion(innerHTML), target.push("" + innerHTML));
        }
    }
    function checkSelectProp(props, propName) {
        var value = props[propName];
        null != value && (value = isArrayImpl(value), props.multiple && !value ? console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.", propName) : !props.multiple && value && console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", propName));
    }
    function flattenOptionChildren(children) {
        var content = "";
        React.Children.forEach(children, function(child) {
            null != child && (content += child, didWarnInvalidOptionChildren || "string" === typeof child || "number" === typeof child || "bigint" === typeof child || (didWarnInvalidOptionChildren = !0, console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
        });
        return content;
    }
    function injectFormReplayingRuntime(resumableState, renderState) {
        (resumableState.instructions & 16) === NothingSent && (resumableState.instructions |= 16, renderState.bootstrapChunks.unshift(renderState.startInlineScript, formReplayingRuntimeScript, "\x3c/script>"));
    }
    function pushLinkImpl(target, props) {
        target.push(startChunkForTag("link"));
        for(var propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                case "dangerouslySetInnerHTML":
                    throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTagSelfClosing);
        return null;
    }
    function escapeStyleTextContent(styleText) {
        checkHtmlStringCoercion(styleText);
        return ("" + styleText).replace(styleRegex, styleReplacer);
    }
    function pushSelfClosing(target, props, tag) {
        target.push(startChunkForTag(tag));
        for(var propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                case "dangerouslySetInnerHTML":
                    throw Error(tag + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTagSelfClosing);
        return null;
    }
    function pushTitleImpl(target, props) {
        target.push(startChunkForTag("title"));
        var children = null, innerHTML = null, propKey;
        for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                    children = propValue;
                    break;
                case "dangerouslySetInnerHTML":
                    innerHTML = propValue;
                    break;
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTag);
        props = Array.isArray(children) ? 2 > children.length ? children[0] : null : children;
        "function" !== typeof props && "symbol" !== typeof props && null !== props && void 0 !== props && target.push(escapeTextForBrowser("" + props));
        pushInnerHTML(target, innerHTML, children);
        target.push(endChunkForTag("title"));
        return null;
    }
    function pushScriptImpl(target, props) {
        target.push(startChunkForTag("script"));
        var children = null, innerHTML = null, propKey;
        for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                    children = propValue;
                    break;
                case "dangerouslySetInnerHTML":
                    innerHTML = propValue;
                    break;
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTag);
        null != children && "string" !== typeof children && (props = "number" === typeof children ? "a number for children" : Array.isArray(children) ? "an array for children" : "something unexpected for children", console.error("A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.", props));
        pushInnerHTML(target, innerHTML, children);
        "string" === typeof children && target.push(escapeEntireInlineScriptContent(children));
        target.push(endChunkForTag("script"));
        return null;
    }
    function pushStartSingletonElement(target, props, tag) {
        target.push(startChunkForTag(tag));
        var innerHTML = tag = null, propKey;
        for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                    tag = propValue;
                    break;
                case "dangerouslySetInnerHTML":
                    innerHTML = propValue;
                    break;
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, tag);
        return tag;
    }
    function pushStartGenericElement(target, props, tag) {
        target.push(startChunkForTag(tag));
        var innerHTML = tag = null, propKey;
        for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
            var propValue = props[propKey];
            if (null != propValue) switch(propKey){
                case "children":
                    tag = propValue;
                    break;
                case "dangerouslySetInnerHTML":
                    innerHTML = propValue;
                    break;
                default:
                    pushAttribute(target, propKey, propValue);
            }
        }
        target.push(endOfStartTag);
        pushInnerHTML(target, innerHTML, tag);
        return "string" === typeof tag ? (target.push(escapeTextForBrowser(tag)), null) : tag;
    }
    function startChunkForTag(tag) {
        var tagStartChunk = validatedTagCache.get(tag);
        if (void 0 === tagStartChunk) {
            if (!VALID_TAG_REGEX.test(tag)) throw Error("Invalid tag: " + tag);
            tagStartChunk = "<" + tag;
            validatedTagCache.set(tag, tagStartChunk);
        }
        return tagStartChunk;
    }
    function pushStartInstance(target$jscomp$0, type, props, resumableState, renderState, preambleState, hoistableState, formatContext, textEmbedded, isFallback) {
        validateProperties$2(type, props);
        "input" !== type && "textarea" !== type && "select" !== type || null == props || null !== props.value || didWarnValueNull || (didWarnValueNull = !0, "select" === type && props.multiple ? console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", type) : console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", type));
        b: if (-1 === type.indexOf("-")) var JSCompiler_inline_result = !1;
        else switch(type){
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                JSCompiler_inline_result = !1;
                break b;
            default:
                JSCompiler_inline_result = !0;
        }
        JSCompiler_inline_result || "string" === typeof props.is || warnUnknownProperties(type, props, null);
        !props.suppressContentEditableWarning && props.contentEditable && null != props.children && console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
        formatContext.insertionMode !== SVG_MODE && formatContext.insertionMode !== MATHML_MODE && -1 === type.indexOf("-") && type.toLowerCase() !== type && console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", type);
        switch(type){
            case "div":
            case "span":
            case "svg":
            case "path":
                break;
            case "a":
                target$jscomp$0.push(startChunkForTag("a"));
                var children = null, innerHTML = null, propKey;
                for(propKey in props)if (hasOwnProperty.call(props, propKey)) {
                    var propValue = props[propKey];
                    if (null != propValue) switch(propKey){
                        case "children":
                            children = propValue;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML = propValue;
                            break;
                        case "href":
                            "" === propValue ? pushStringAttribute(target$jscomp$0, "href", "") : pushAttribute(target$jscomp$0, propKey, propValue);
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey, propValue);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                pushInnerHTML(target$jscomp$0, innerHTML, children);
                if ("string" === typeof children) {
                    target$jscomp$0.push(escapeTextForBrowser(children));
                    var JSCompiler_inline_result$jscomp$0 = null;
                } else JSCompiler_inline_result$jscomp$0 = children;
                return JSCompiler_inline_result$jscomp$0;
            case "g":
            case "p":
            case "li":
                break;
            case "select":
                checkControlledValueProps("select", props);
                checkSelectProp(props, "value");
                checkSelectProp(props, "defaultValue");
                void 0 === props.value || void 0 === props.defaultValue || didWarnDefaultSelectValue || (console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"), didWarnDefaultSelectValue = !0);
                target$jscomp$0.push(startChunkForTag("select"));
                var children$jscomp$0 = null, innerHTML$jscomp$0 = null, propKey$jscomp$0;
                for(propKey$jscomp$0 in props)if (hasOwnProperty.call(props, propKey$jscomp$0)) {
                    var propValue$jscomp$0 = props[propKey$jscomp$0];
                    if (null != propValue$jscomp$0) switch(propKey$jscomp$0){
                        case "children":
                            children$jscomp$0 = propValue$jscomp$0;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$0 = propValue$jscomp$0;
                            break;
                        case "defaultValue":
                        case "value":
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$0, propValue$jscomp$0);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$0, children$jscomp$0);
                return children$jscomp$0;
            case "option":
                var selectedValue = formatContext.selectedValue;
                target$jscomp$0.push(startChunkForTag("option"));
                var children$jscomp$1 = null, value = null, selected = null, innerHTML$jscomp$1 = null, propKey$jscomp$1;
                for(propKey$jscomp$1 in props)if (hasOwnProperty.call(props, propKey$jscomp$1)) {
                    var propValue$jscomp$1 = props[propKey$jscomp$1];
                    if (null != propValue$jscomp$1) switch(propKey$jscomp$1){
                        case "children":
                            children$jscomp$1 = propValue$jscomp$1;
                            break;
                        case "selected":
                            selected = propValue$jscomp$1;
                            didWarnSelectedSetOnOption || (console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), didWarnSelectedSetOnOption = !0);
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$1 = propValue$jscomp$1;
                            break;
                        case "value":
                            value = propValue$jscomp$1;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$1, propValue$jscomp$1);
                    }
                }
                if (null != selectedValue) {
                    if (null !== value) {
                        checkAttributeStringCoercion(value, "value");
                        var stringValue = "" + value;
                    } else null === innerHTML$jscomp$1 || didWarnInvalidOptionInnerHTML || (didWarnInvalidOptionInnerHTML = !0, console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")), stringValue = flattenOptionChildren(children$jscomp$1);
                    if (isArrayImpl(selectedValue)) {
                        for(var i = 0; i < selectedValue.length; i++)if (checkAttributeStringCoercion(selectedValue[i], "value"), "" + selectedValue[i] === stringValue) {
                            target$jscomp$0.push(' selected=""');
                            break;
                        }
                    } else checkAttributeStringCoercion(selectedValue, "select.value"), "" + selectedValue === stringValue && target$jscomp$0.push(' selected=""');
                } else selected && target$jscomp$0.push(' selected=""');
                target$jscomp$0.push(endOfStartTag);
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$1, children$jscomp$1);
                return children$jscomp$1;
            case "textarea":
                checkControlledValueProps("textarea", props);
                void 0 === props.value || void 0 === props.defaultValue || didWarnDefaultTextareaValue || (console.error("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"), didWarnDefaultTextareaValue = !0);
                target$jscomp$0.push(startChunkForTag("textarea"));
                var value$jscomp$0 = null, defaultValue = null, children$jscomp$2 = null, propKey$jscomp$2;
                for(propKey$jscomp$2 in props)if (hasOwnProperty.call(props, propKey$jscomp$2)) {
                    var propValue$jscomp$2 = props[propKey$jscomp$2];
                    if (null != propValue$jscomp$2) switch(propKey$jscomp$2){
                        case "children":
                            children$jscomp$2 = propValue$jscomp$2;
                            break;
                        case "value":
                            value$jscomp$0 = propValue$jscomp$2;
                            break;
                        case "defaultValue":
                            defaultValue = propValue$jscomp$2;
                            break;
                        case "dangerouslySetInnerHTML":
                            throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$2, propValue$jscomp$2);
                    }
                }
                null === value$jscomp$0 && null !== defaultValue && (value$jscomp$0 = defaultValue);
                target$jscomp$0.push(endOfStartTag);
                if (null != children$jscomp$2) {
                    console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
                    if (null != value$jscomp$0) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
                    if (isArrayImpl(children$jscomp$2)) {
                        if (1 < children$jscomp$2.length) throw Error("<textarea> can only have at most one child.");
                        checkHtmlStringCoercion(children$jscomp$2[0]);
                        value$jscomp$0 = "" + children$jscomp$2[0];
                    }
                    checkHtmlStringCoercion(children$jscomp$2);
                    value$jscomp$0 = "" + children$jscomp$2;
                }
                "string" === typeof value$jscomp$0 && "\n" === value$jscomp$0[0] && target$jscomp$0.push(leadingNewline);
                null !== value$jscomp$0 && (checkAttributeStringCoercion(value$jscomp$0, "value"), target$jscomp$0.push(escapeTextForBrowser("" + value$jscomp$0)));
                return null;
            case "input":
                checkControlledValueProps("input", props);
                target$jscomp$0.push(startChunkForTag("input"));
                var name = null, formAction = null, formEncType = null, formMethod = null, formTarget = null, value$jscomp$1 = null, defaultValue$jscomp$0 = null, checked = null, defaultChecked = null, propKey$jscomp$3;
                for(propKey$jscomp$3 in props)if (hasOwnProperty.call(props, propKey$jscomp$3)) {
                    var propValue$jscomp$3 = props[propKey$jscomp$3];
                    if (null != propValue$jscomp$3) switch(propKey$jscomp$3){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                        case "name":
                            name = propValue$jscomp$3;
                            break;
                        case "formAction":
                            formAction = propValue$jscomp$3;
                            break;
                        case "formEncType":
                            formEncType = propValue$jscomp$3;
                            break;
                        case "formMethod":
                            formMethod = propValue$jscomp$3;
                            break;
                        case "formTarget":
                            formTarget = propValue$jscomp$3;
                            break;
                        case "defaultChecked":
                            defaultChecked = propValue$jscomp$3;
                            break;
                        case "defaultValue":
                            defaultValue$jscomp$0 = propValue$jscomp$3;
                            break;
                        case "checked":
                            checked = propValue$jscomp$3;
                            break;
                        case "value":
                            value$jscomp$1 = propValue$jscomp$3;
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$3, propValue$jscomp$3);
                    }
                }
                null === formAction || "image" === props.type || "submit" === props.type || didWarnFormActionType || (didWarnFormActionType = !0, console.error('An input can only specify a formAction along with type="submit" or type="image".'));
                var formData = pushFormActionAttribute(target$jscomp$0, resumableState, renderState, formAction, formEncType, formMethod, formTarget, name);
                null === checked || null === defaultChecked || didWarnDefaultChecked || (console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", props.type), didWarnDefaultChecked = !0);
                null === value$jscomp$1 || null === defaultValue$jscomp$0 || didWarnDefaultInputValue || (console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", "A component", props.type), didWarnDefaultInputValue = !0);
                null !== checked ? pushBooleanAttribute(target$jscomp$0, "checked", checked) : null !== defaultChecked && pushBooleanAttribute(target$jscomp$0, "checked", defaultChecked);
                null !== value$jscomp$1 ? pushAttribute(target$jscomp$0, "value", value$jscomp$1) : null !== defaultValue$jscomp$0 && pushAttribute(target$jscomp$0, "value", defaultValue$jscomp$0);
                target$jscomp$0.push(endOfStartTagSelfClosing);
                null != formData && formData.forEach(pushAdditionalFormField, target$jscomp$0);
                return null;
            case "button":
                target$jscomp$0.push(startChunkForTag("button"));
                var children$jscomp$3 = null, innerHTML$jscomp$2 = null, name$jscomp$0 = null, formAction$jscomp$0 = null, formEncType$jscomp$0 = null, formMethod$jscomp$0 = null, formTarget$jscomp$0 = null, propKey$jscomp$4;
                for(propKey$jscomp$4 in props)if (hasOwnProperty.call(props, propKey$jscomp$4)) {
                    var propValue$jscomp$4 = props[propKey$jscomp$4];
                    if (null != propValue$jscomp$4) switch(propKey$jscomp$4){
                        case "children":
                            children$jscomp$3 = propValue$jscomp$4;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$2 = propValue$jscomp$4;
                            break;
                        case "name":
                            name$jscomp$0 = propValue$jscomp$4;
                            break;
                        case "formAction":
                            formAction$jscomp$0 = propValue$jscomp$4;
                            break;
                        case "formEncType":
                            formEncType$jscomp$0 = propValue$jscomp$4;
                            break;
                        case "formMethod":
                            formMethod$jscomp$0 = propValue$jscomp$4;
                            break;
                        case "formTarget":
                            formTarget$jscomp$0 = propValue$jscomp$4;
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$4, propValue$jscomp$4);
                    }
                }
                null === formAction$jscomp$0 || null == props.type || "submit" === props.type || didWarnFormActionType || (didWarnFormActionType = !0, console.error('A button can only specify a formAction along with type="submit" or no type.'));
                var formData$jscomp$0 = pushFormActionAttribute(target$jscomp$0, resumableState, renderState, formAction$jscomp$0, formEncType$jscomp$0, formMethod$jscomp$0, formTarget$jscomp$0, name$jscomp$0);
                target$jscomp$0.push(endOfStartTag);
                null != formData$jscomp$0 && formData$jscomp$0.forEach(pushAdditionalFormField, target$jscomp$0);
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$2, children$jscomp$3);
                if ("string" === typeof children$jscomp$3) {
                    target$jscomp$0.push(escapeTextForBrowser(children$jscomp$3));
                    var JSCompiler_inline_result$jscomp$1 = null;
                } else JSCompiler_inline_result$jscomp$1 = children$jscomp$3;
                return JSCompiler_inline_result$jscomp$1;
            case "form":
                target$jscomp$0.push(startChunkForTag("form"));
                var children$jscomp$4 = null, innerHTML$jscomp$3 = null, formAction$jscomp$1 = null, formEncType$jscomp$1 = null, formMethod$jscomp$1 = null, formTarget$jscomp$1 = null, propKey$jscomp$5;
                for(propKey$jscomp$5 in props)if (hasOwnProperty.call(props, propKey$jscomp$5)) {
                    var propValue$jscomp$5 = props[propKey$jscomp$5];
                    if (null != propValue$jscomp$5) switch(propKey$jscomp$5){
                        case "children":
                            children$jscomp$4 = propValue$jscomp$5;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$3 = propValue$jscomp$5;
                            break;
                        case "action":
                            formAction$jscomp$1 = propValue$jscomp$5;
                            break;
                        case "encType":
                            formEncType$jscomp$1 = propValue$jscomp$5;
                            break;
                        case "method":
                            formMethod$jscomp$1 = propValue$jscomp$5;
                            break;
                        case "target":
                            formTarget$jscomp$1 = propValue$jscomp$5;
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$5, propValue$jscomp$5);
                    }
                }
                var formData$jscomp$1 = null, formActionName = null;
                if ("function" === typeof formAction$jscomp$1) {
                    null === formEncType$jscomp$1 && null === formMethod$jscomp$1 || didWarnFormActionMethod || (didWarnFormActionMethod = !0, console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."));
                    null === formTarget$jscomp$1 || didWarnFormActionTarget || (didWarnFormActionTarget = !0, console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."));
                    var customFields = getCustomFormFields(resumableState, formAction$jscomp$1);
                    null !== customFields ? (formAction$jscomp$1 = customFields.action || "", formEncType$jscomp$1 = customFields.encType, formMethod$jscomp$1 = customFields.method, formTarget$jscomp$1 = customFields.target, formData$jscomp$1 = customFields.data, formActionName = customFields.name) : (target$jscomp$0.push(attributeSeparator, "action", attributeAssign, actionJavaScriptURL, attributeEnd), formTarget$jscomp$1 = formMethod$jscomp$1 = formEncType$jscomp$1 = formAction$jscomp$1 = null, injectFormReplayingRuntime(resumableState, renderState));
                }
                null != formAction$jscomp$1 && pushAttribute(target$jscomp$0, "action", formAction$jscomp$1);
                null != formEncType$jscomp$1 && pushAttribute(target$jscomp$0, "encType", formEncType$jscomp$1);
                null != formMethod$jscomp$1 && pushAttribute(target$jscomp$0, "method", formMethod$jscomp$1);
                null != formTarget$jscomp$1 && pushAttribute(target$jscomp$0, "target", formTarget$jscomp$1);
                target$jscomp$0.push(endOfStartTag);
                null !== formActionName && (target$jscomp$0.push('<input type="hidden"'), pushStringAttribute(target$jscomp$0, "name", formActionName), target$jscomp$0.push(endOfStartTagSelfClosing), null != formData$jscomp$1 && formData$jscomp$1.forEach(pushAdditionalFormField, target$jscomp$0));
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$3, children$jscomp$4);
                if ("string" === typeof children$jscomp$4) {
                    target$jscomp$0.push(escapeTextForBrowser(children$jscomp$4));
                    var JSCompiler_inline_result$jscomp$2 = null;
                } else JSCompiler_inline_result$jscomp$2 = children$jscomp$4;
                return JSCompiler_inline_result$jscomp$2;
            case "menuitem":
                target$jscomp$0.push(startChunkForTag("menuitem"));
                for(var propKey$jscomp$6 in props)if (hasOwnProperty.call(props, propKey$jscomp$6)) {
                    var propValue$jscomp$6 = props[propKey$jscomp$6];
                    if (null != propValue$jscomp$6) switch(propKey$jscomp$6){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$6, propValue$jscomp$6);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                return null;
            case "object":
                target$jscomp$0.push(startChunkForTag("object"));
                var children$jscomp$5 = null, innerHTML$jscomp$4 = null, propKey$jscomp$7;
                for(propKey$jscomp$7 in props)if (hasOwnProperty.call(props, propKey$jscomp$7)) {
                    var propValue$jscomp$7 = props[propKey$jscomp$7];
                    if (null != propValue$jscomp$7) switch(propKey$jscomp$7){
                        case "children":
                            children$jscomp$5 = propValue$jscomp$7;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$4 = propValue$jscomp$7;
                            break;
                        case "data":
                            checkAttributeStringCoercion(propValue$jscomp$7, "data");
                            var sanitizedValue = sanitizeURL("" + propValue$jscomp$7);
                            if ("" === sanitizedValue) {
                                console.error('An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.', propKey$jscomp$7, propKey$jscomp$7);
                                break;
                            }
                            target$jscomp$0.push(attributeSeparator, "data", attributeAssign, escapeTextForBrowser(sanitizedValue), attributeEnd);
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$7, propValue$jscomp$7);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                pushInnerHTML(target$jscomp$0, innerHTML$jscomp$4, children$jscomp$5);
                if ("string" === typeof children$jscomp$5) {
                    target$jscomp$0.push(escapeTextForBrowser(children$jscomp$5));
                    var JSCompiler_inline_result$jscomp$3 = null;
                } else JSCompiler_inline_result$jscomp$3 = children$jscomp$5;
                return JSCompiler_inline_result$jscomp$3;
            case "title":
                var insertionMode = formatContext.insertionMode, noscriptTagInScope = !!(formatContext.tagScope & 1);
                if (hasOwnProperty.call(props, "children")) {
                    var children$jscomp$6 = props.children, child = Array.isArray(children$jscomp$6) ? 2 > children$jscomp$6.length ? children$jscomp$6[0] : null : children$jscomp$6;
                    Array.isArray(children$jscomp$6) && 1 < children$jscomp$6.length ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be common to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.", children$jscomp$6.length) : "function" === typeof child || "symbol" === typeof child ? console.error("React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.", "function" === typeof child ? "a Function" : "a Sybmol") : child && child.toString === ({}).toString && (null != child.$$typeof ? console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML.") : console.error("React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>."));
                }
                if (insertionMode === SVG_MODE || noscriptTagInScope || null != props.itemProp) var JSCompiler_inline_result$jscomp$4 = pushTitleImpl(target$jscomp$0, props);
                else isFallback ? JSCompiler_inline_result$jscomp$4 = null : (pushTitleImpl(renderState.hoistableChunks, props), JSCompiler_inline_result$jscomp$4 = void 0);
                return JSCompiler_inline_result$jscomp$4;
            case "link":
                var rel = props.rel, href = props.href, precedence = props.precedence;
                if (formatContext.insertionMode === SVG_MODE || formatContext.tagScope & 1 || null != props.itemProp || "string" !== typeof rel || "string" !== typeof href || "" === href) {
                    "stylesheet" === rel && "string" === typeof props.precedence && ("string" === typeof href && href || console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.', null === href ? "`null`" : void 0 === href ? "`undefined`" : "" === href ? "an empty string" : 'something with type "' + typeof href + '"'));
                    pushLinkImpl(target$jscomp$0, props);
                    var JSCompiler_inline_result$jscomp$5 = null;
                } else if ("stylesheet" === props.rel) {
                    if ("string" !== typeof precedence || null != props.disabled || props.onLoad || props.onError) {
                        if ("string" === typeof precedence) {
                            if (null != props.disabled) console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.');
                            else if (props.onLoad || props.onError) {
                                var propDescription = props.onLoad && props.onError ? "`onLoad` and `onError` props" : props.onLoad ? "`onLoad` prop" : "`onError` prop";
                                console.error('React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.', propDescription, propDescription);
                            }
                        }
                        JSCompiler_inline_result$jscomp$5 = pushLinkImpl(target$jscomp$0, props);
                    } else {
                        var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : void 0;
                        if (resourceState !== EXISTS) {
                            resumableState.styleResources[href] = EXISTS;
                            styleQueue || (styleQueue = {
                                precedence: escapeTextForBrowser(precedence),
                                rules: [],
                                hrefs: [],
                                sheets: new Map()
                            }, renderState.styles.set(precedence, styleQueue));
                            var resource = {
                                state: PENDING$1,
                                props: assign({}, props, {
                                    "data-precedence": props.precedence,
                                    precedence: null
                                })
                            };
                            if (resourceState) {
                                2 === resourceState.length && adoptPreloadCredentials(resource.props, resourceState);
                                var preloadResource = renderState.preloads.stylesheets.get(href);
                                preloadResource && 0 < preloadResource.length ? preloadResource.length = 0 : resource.state = PRELOADED;
                            }
                            styleQueue.sheets.set(href, resource);
                            hoistableState && hoistableState.stylesheets.add(resource);
                        } else if (styleQueue) {
                            var _resource = styleQueue.sheets.get(href);
                            _resource && hoistableState && hoistableState.stylesheets.add(_resource);
                        }
                        textEmbedded && target$jscomp$0.push("\x3c!-- --\x3e");
                        JSCompiler_inline_result$jscomp$5 = null;
                    }
                } else props.onLoad || props.onError ? JSCompiler_inline_result$jscomp$5 = pushLinkImpl(target$jscomp$0, props) : (textEmbedded && target$jscomp$0.push("\x3c!-- --\x3e"), JSCompiler_inline_result$jscomp$5 = isFallback ? null : pushLinkImpl(renderState.hoistableChunks, props));
                return JSCompiler_inline_result$jscomp$5;
            case "script":
                var asyncProp = props.async;
                if ("string" !== typeof props.src || !props.src || !asyncProp || "function" === typeof asyncProp || "symbol" === typeof asyncProp || props.onLoad || props.onError || formatContext.insertionMode === SVG_MODE || formatContext.tagScope & 1 || null != props.itemProp) var JSCompiler_inline_result$jscomp$6 = pushScriptImpl(target$jscomp$0, props);
                else {
                    var key = props.src;
                    if ("module" === props.type) {
                        var resources = resumableState.moduleScriptResources;
                        var preloads = renderState.preloads.moduleScripts;
                    } else resources = resumableState.scriptResources, preloads = renderState.preloads.scripts;
                    var resourceState$jscomp$0 = resources.hasOwnProperty(key) ? resources[key] : void 0;
                    if (resourceState$jscomp$0 !== EXISTS) {
                        resources[key] = EXISTS;
                        var scriptProps = props;
                        if (resourceState$jscomp$0) {
                            2 === resourceState$jscomp$0.length && (scriptProps = assign({}, props), adoptPreloadCredentials(scriptProps, resourceState$jscomp$0));
                            var preloadResource$jscomp$0 = preloads.get(key);
                            preloadResource$jscomp$0 && (preloadResource$jscomp$0.length = 0);
                        }
                        var resource$jscomp$0 = [];
                        renderState.scripts.add(resource$jscomp$0);
                        pushScriptImpl(resource$jscomp$0, scriptProps);
                    }
                    textEmbedded && target$jscomp$0.push("\x3c!-- --\x3e");
                    JSCompiler_inline_result$jscomp$6 = null;
                }
                return JSCompiler_inline_result$jscomp$6;
            case "style":
                var insertionMode$jscomp$0 = formatContext.insertionMode, noscriptTagInScope$jscomp$0 = !!(formatContext.tagScope & 1);
                if (hasOwnProperty.call(props, "children")) {
                    var children$jscomp$7 = props.children, child$jscomp$0 = Array.isArray(children$jscomp$7) ? 2 > children$jscomp$7.length ? children$jscomp$7[0] : null : children$jscomp$7;
                    ("function" === typeof child$jscomp$0 || "symbol" === typeof child$jscomp$0 || Array.isArray(child$jscomp$0)) && console.error("React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.", "function" === typeof child$jscomp$0 ? "a Function" : "symbol" === typeof child$jscomp$0 ? "a Sybmol" : "an Array");
                }
                var precedence$jscomp$0 = props.precedence, href$jscomp$0 = props.href;
                if (insertionMode$jscomp$0 === SVG_MODE || noscriptTagInScope$jscomp$0 || null != props.itemProp || "string" !== typeof precedence$jscomp$0 || "string" !== typeof href$jscomp$0 || "" === href$jscomp$0) {
                    target$jscomp$0.push(startChunkForTag("style"));
                    var children$jscomp$8 = null, innerHTML$jscomp$5 = null, propKey$jscomp$8;
                    for(propKey$jscomp$8 in props)if (hasOwnProperty.call(props, propKey$jscomp$8)) {
                        var propValue$jscomp$8 = props[propKey$jscomp$8];
                        if (null != propValue$jscomp$8) switch(propKey$jscomp$8){
                            case "children":
                                children$jscomp$8 = propValue$jscomp$8;
                                break;
                            case "dangerouslySetInnerHTML":
                                innerHTML$jscomp$5 = propValue$jscomp$8;
                                break;
                            default:
                                pushAttribute(target$jscomp$0, propKey$jscomp$8, propValue$jscomp$8);
                        }
                    }
                    target$jscomp$0.push(endOfStartTag);
                    var child$jscomp$1 = Array.isArray(children$jscomp$8) ? 2 > children$jscomp$8.length ? children$jscomp$8[0] : null : children$jscomp$8;
                    "function" !== typeof child$jscomp$1 && "symbol" !== typeof child$jscomp$1 && null !== child$jscomp$1 && void 0 !== child$jscomp$1 && target$jscomp$0.push(escapeStyleTextContent(child$jscomp$1));
                    pushInnerHTML(target$jscomp$0, innerHTML$jscomp$5, children$jscomp$8);
                    target$jscomp$0.push(endChunkForTag("style"));
                    var JSCompiler_inline_result$jscomp$7 = null;
                } else {
                    href$jscomp$0.includes(" ") && console.error('React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is "%s".', href$jscomp$0);
                    var styleQueue$jscomp$0 = renderState.styles.get(precedence$jscomp$0), resourceState$jscomp$1 = resumableState.styleResources.hasOwnProperty(href$jscomp$0) ? resumableState.styleResources[href$jscomp$0] : void 0;
                    if (resourceState$jscomp$1 !== EXISTS) {
                        resumableState.styleResources[href$jscomp$0] = EXISTS;
                        resourceState$jscomp$1 && console.error('React encountered a hoistable style tag for the same href as a preload: "%s". When using a style tag to inline styles you should not also preload it as a stylsheet.', href$jscomp$0);
                        styleQueue$jscomp$0 ? styleQueue$jscomp$0.hrefs.push(escapeTextForBrowser(href$jscomp$0)) : (styleQueue$jscomp$0 = {
                            precedence: escapeTextForBrowser(precedence$jscomp$0),
                            rules: [],
                            hrefs: [
                                escapeTextForBrowser(href$jscomp$0)
                            ],
                            sheets: new Map()
                        }, renderState.styles.set(precedence$jscomp$0, styleQueue$jscomp$0));
                        var target = styleQueue$jscomp$0.rules, children$jscomp$9 = null, innerHTML$jscomp$6 = null, propKey$jscomp$9;
                        for(propKey$jscomp$9 in props)if (hasOwnProperty.call(props, propKey$jscomp$9)) {
                            var propValue$jscomp$9 = props[propKey$jscomp$9];
                            if (null != propValue$jscomp$9) switch(propKey$jscomp$9){
                                case "children":
                                    children$jscomp$9 = propValue$jscomp$9;
                                    break;
                                case "dangerouslySetInnerHTML":
                                    innerHTML$jscomp$6 = propValue$jscomp$9;
                            }
                        }
                        var child$jscomp$2 = Array.isArray(children$jscomp$9) ? 2 > children$jscomp$9.length ? children$jscomp$9[0] : null : children$jscomp$9;
                        "function" !== typeof child$jscomp$2 && "symbol" !== typeof child$jscomp$2 && null !== child$jscomp$2 && void 0 !== child$jscomp$2 && target.push(escapeStyleTextContent(child$jscomp$2));
                        pushInnerHTML(target, innerHTML$jscomp$6, children$jscomp$9);
                    }
                    styleQueue$jscomp$0 && hoistableState && hoistableState.styles.add(styleQueue$jscomp$0);
                    textEmbedded && target$jscomp$0.push("\x3c!-- --\x3e");
                    JSCompiler_inline_result$jscomp$7 = void 0;
                }
                return JSCompiler_inline_result$jscomp$7;
            case "meta":
                if (formatContext.insertionMode === SVG_MODE || formatContext.tagScope & 1 || null != props.itemProp) var JSCompiler_inline_result$jscomp$8 = pushSelfClosing(target$jscomp$0, props, "meta");
                else textEmbedded && target$jscomp$0.push("\x3c!-- --\x3e"), JSCompiler_inline_result$jscomp$8 = isFallback ? null : "string" === typeof props.charSet ? pushSelfClosing(renderState.charsetChunks, props, "meta") : "viewport" === props.name ? pushSelfClosing(renderState.viewportChunks, props, "meta") : pushSelfClosing(renderState.hoistableChunks, props, "meta");
                return JSCompiler_inline_result$jscomp$8;
            case "listing":
            case "pre":
                target$jscomp$0.push(startChunkForTag(type));
                var children$jscomp$10 = null, innerHTML$jscomp$7 = null, propKey$jscomp$10;
                for(propKey$jscomp$10 in props)if (hasOwnProperty.call(props, propKey$jscomp$10)) {
                    var propValue$jscomp$10 = props[propKey$jscomp$10];
                    if (null != propValue$jscomp$10) switch(propKey$jscomp$10){
                        case "children":
                            children$jscomp$10 = propValue$jscomp$10;
                            break;
                        case "dangerouslySetInnerHTML":
                            innerHTML$jscomp$7 = propValue$jscomp$10;
                            break;
                        default:
                            pushAttribute(target$jscomp$0, propKey$jscomp$10, propValue$jscomp$10);
                    }
                }
                target$jscomp$0.push(endOfStartTag);
                if (null != innerHTML$jscomp$7) {
                    if (null != children$jscomp$10) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
                    if ("object" !== typeof innerHTML$jscomp$7 || !("__html" in innerHTML$jscomp$7)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
                    var html = innerHTML$jscomp$7.__html;
                    null !== html && void 0 !== html && ("string" === typeof html && 0 < html.length && "\n" === html[0] ? target$jscomp$0.push(leadingNewline, html) : (checkHtmlStringCoercion(html), target$jscomp$0.push("" + html)));
                }
                "string" === typeof children$jscomp$10 && "\n" === children$jscomp$10[0] && target$jscomp$0.push(leadingNewline);
                return children$jscomp$10;
            case "img":
                var src = props.src, srcSet = props.srcSet;
                if (!("lazy" === props.loading || !src && !srcSet || "string" !== typeof src && null != src || "string" !== typeof srcSet && null != srcSet) && "low" !== props.fetchPriority && !1 === !!(formatContext.tagScope & 3) && ("string" !== typeof src || ":" !== src[4] || "d" !== src[0] && "D" !== src[0] || "a" !== src[1] && "A" !== src[1] || "t" !== src[2] && "T" !== src[2] || "a" !== src[3] && "A" !== src[3]) && ("string" !== typeof srcSet || ":" !== srcSet[4] || "d" !== srcSet[0] && "D" !== srcSet[0] || "a" !== srcSet[1] && "A" !== srcSet[1] || "t" !== srcSet[2] && "T" !== srcSet[2] || "a" !== srcSet[3] && "A" !== srcSet[3])) {
                    var sizes = "string" === typeof props.sizes ? props.sizes : void 0, key$jscomp$0 = srcSet ? srcSet + "\n" + (sizes || "") : src, promotablePreloads = renderState.preloads.images, resource$jscomp$1 = promotablePreloads.get(key$jscomp$0);
                    if (resource$jscomp$1) {
                        if ("high" === props.fetchPriority || 10 > renderState.highImagePreloads.size) promotablePreloads.delete(key$jscomp$0), renderState.highImagePreloads.add(resource$jscomp$1);
                    } else if (!resumableState.imageResources.hasOwnProperty(key$jscomp$0)) {
                        resumableState.imageResources[key$jscomp$0] = PRELOAD_NO_CREDS;
                        var input = props.crossOrigin;
                        var crossOrigin = "string" === typeof input ? "use-credentials" === input ? input : "" : void 0;
                        var headers = renderState.headers, header;
                        headers && 0 < headers.remainingCapacity && "string" !== typeof props.srcSet && ("high" === props.fetchPriority || 500 > headers.highImagePreloads.length) && (header = getPreloadAsHeader(src, "image", {
                            imageSrcSet: props.srcSet,
                            imageSizes: props.sizes,
                            crossOrigin: crossOrigin,
                            integrity: props.integrity,
                            nonce: props.nonce,
                            type: props.type,
                            fetchPriority: props.fetchPriority,
                            referrerPolicy: props.refererPolicy
                        }), 0 <= (headers.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key$jscomp$0] = PRELOAD_NO_CREDS, headers.highImagePreloads && (headers.highImagePreloads += ", "), headers.highImagePreloads += header) : (resource$jscomp$1 = [], pushLinkImpl(resource$jscomp$1, {
                            rel: "preload",
                            as: "image",
                            href: srcSet ? void 0 : src,
                            imageSrcSet: srcSet,
                            imageSizes: sizes,
                            crossOrigin: crossOrigin,
                            integrity: props.integrity,
                            type: props.type,
                            fetchPriority: props.fetchPriority,
                            referrerPolicy: props.referrerPolicy
                        }), "high" === props.fetchPriority || 10 > renderState.highImagePreloads.size ? renderState.highImagePreloads.add(resource$jscomp$1) : (renderState.bulkPreloads.add(resource$jscomp$1), promotablePreloads.set(key$jscomp$0, resource$jscomp$1)));
                    }
                }
                return pushSelfClosing(target$jscomp$0, props, "img");
            case "base":
            case "area":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "param":
            case "source":
            case "track":
            case "wbr":
                return pushSelfClosing(target$jscomp$0, props, type);
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                break;
            case "head":
                if (formatContext.insertionMode < HTML_MODE) {
                    var preamble = preambleState || renderState.preamble;
                    if (preamble.headChunks) throw Error("The `<head>` tag may only be rendered once.");
                    preamble.headChunks = [];
                    var JSCompiler_inline_result$jscomp$9 = pushStartSingletonElement(preamble.headChunks, props, "head");
                } else JSCompiler_inline_result$jscomp$9 = pushStartGenericElement(target$jscomp$0, props, "head");
                return JSCompiler_inline_result$jscomp$9;
            case "body":
                if (formatContext.insertionMode < HTML_MODE) {
                    var preamble$jscomp$0 = preambleState || renderState.preamble;
                    if (preamble$jscomp$0.bodyChunks) throw Error("The `<body>` tag may only be rendered once.");
                    preamble$jscomp$0.bodyChunks = [];
                    var JSCompiler_inline_result$jscomp$10 = pushStartSingletonElement(preamble$jscomp$0.bodyChunks, props, "body");
                } else JSCompiler_inline_result$jscomp$10 = pushStartGenericElement(target$jscomp$0, props, "body");
                return JSCompiler_inline_result$jscomp$10;
            case "html":
                if (formatContext.insertionMode === ROOT_HTML_MODE) {
                    var preamble$jscomp$1 = preambleState || renderState.preamble;
                    if (preamble$jscomp$1.htmlChunks) throw Error("The `<html>` tag may only be rendered once.");
                    preamble$jscomp$1.htmlChunks = [
                        doctypeChunk
                    ];
                    var JSCompiler_inline_result$jscomp$11 = pushStartSingletonElement(preamble$jscomp$1.htmlChunks, props, "html");
                } else JSCompiler_inline_result$jscomp$11 = pushStartGenericElement(target$jscomp$0, props, "html");
                return JSCompiler_inline_result$jscomp$11;
            default:
                if (-1 !== type.indexOf("-")) {
                    target$jscomp$0.push(startChunkForTag(type));
                    var children$jscomp$11 = null, innerHTML$jscomp$8 = null, propKey$jscomp$11;
                    for(propKey$jscomp$11 in props)if (hasOwnProperty.call(props, propKey$jscomp$11)) {
                        var propValue$jscomp$11 = props[propKey$jscomp$11];
                        if (null != propValue$jscomp$11) {
                            var attributeName = propKey$jscomp$11;
                            switch(propKey$jscomp$11){
                                case "children":
                                    children$jscomp$11 = propValue$jscomp$11;
                                    break;
                                case "dangerouslySetInnerHTML":
                                    innerHTML$jscomp$8 = propValue$jscomp$11;
                                    break;
                                case "style":
                                    pushStyleAttribute(target$jscomp$0, propValue$jscomp$11);
                                    break;
                                case "suppressContentEditableWarning":
                                case "suppressHydrationWarning":
                                case "ref":
                                    break;
                                case "className":
                                    attributeName = "class";
                                default:
                                    if (isAttributeNameSafe(propKey$jscomp$11) && "function" !== typeof propValue$jscomp$11 && "symbol" !== typeof propValue$jscomp$11 && !1 !== propValue$jscomp$11) {
                                        if (!0 === propValue$jscomp$11) propValue$jscomp$11 = "";
                                        else if ("object" === typeof propValue$jscomp$11) continue;
                                        target$jscomp$0.push(attributeSeparator, attributeName, attributeAssign, escapeTextForBrowser(propValue$jscomp$11), attributeEnd);
                                    }
                            }
                        }
                    }
                    target$jscomp$0.push(endOfStartTag);
                    pushInnerHTML(target$jscomp$0, innerHTML$jscomp$8, children$jscomp$11);
                    return children$jscomp$11;
                }
        }
        return pushStartGenericElement(target$jscomp$0, props, type);
    }
    function endChunkForTag(tag) {
        var chunk = endTagCache.get(tag);
        void 0 === chunk && (chunk = "</" + tag + ">", endTagCache.set(tag, chunk));
        return chunk;
    }
    function hoistPreambleState(renderState, preambleState) {
        renderState = renderState.preamble;
        null === renderState.htmlChunks && preambleState.htmlChunks && (renderState.htmlChunks = preambleState.htmlChunks, preambleState.contribution |= 1);
        null === renderState.headChunks && preambleState.headChunks && (renderState.headChunks = preambleState.headChunks, preambleState.contribution |= 4);
        null === renderState.bodyChunks && preambleState.bodyChunks && (renderState.bodyChunks = preambleState.bodyChunks, preambleState.contribution |= 2);
    }
    function writeBootstrap(destination, renderState) {
        renderState = renderState.bootstrapChunks;
        for(var i = 0; i < renderState.length - 1; i++)destination.push(renderState[i]);
        return i < renderState.length ? (i = renderState[i], renderState.length = 0, destination.push(i)) : !0;
    }
    function writeStartPendingSuspenseBoundary(destination, renderState, id) {
        destination.push(startPendingSuspenseBoundary1);
        if (null === id) throw Error("An ID must have been assigned before we can complete the boundary.");
        destination.push(renderState.boundaryPrefix);
        renderState = id.toString(16);
        destination.push(renderState);
        return destination.push(startPendingSuspenseBoundary2);
    }
    function writePreambleContribution(destination, preambleState) {
        preambleState = preambleState.contribution;
        preambleState !== NoContribution && (destination.push(boundaryPreambleContributionChunkStart), destination.push("" + preambleState), destination.push(boundaryPreambleContributionChunkEnd));
    }
    function writeStartSegment(destination, renderState, formatContext, id) {
        switch(formatContext.insertionMode){
            case ROOT_HTML_MODE:
            case HTML_HTML_MODE:
            case HTML_HEAD_MODE:
            case HTML_MODE:
                return destination.push(startSegmentHTML), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentHTML2);
            case SVG_MODE:
                return destination.push(startSegmentSVG), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentSVG2);
            case MATHML_MODE:
                return destination.push(startSegmentMathML), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentMathML2);
            case HTML_TABLE_MODE:
                return destination.push(startSegmentTable), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentTable2);
            case HTML_TABLE_BODY_MODE:
                return destination.push(startSegmentTableBody), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentTableBody2);
            case HTML_TABLE_ROW_MODE:
                return destination.push(startSegmentTableRow), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentTableRow2);
            case HTML_COLGROUP_MODE:
                return destination.push(startSegmentColGroup), destination.push(renderState.segmentPrefix), renderState = id.toString(16), destination.push(renderState), destination.push(startSegmentColGroup2);
            default:
                throw Error("Unknown insertion mode. This is a bug in React.");
        }
    }
    function writeEndSegment(destination, formatContext) {
        switch(formatContext.insertionMode){
            case ROOT_HTML_MODE:
            case HTML_HTML_MODE:
            case HTML_HEAD_MODE:
            case HTML_MODE:
                return destination.push(endSegmentHTML);
            case SVG_MODE:
                return destination.push(endSegmentSVG);
            case MATHML_MODE:
                return destination.push(endSegmentMathML);
            case HTML_TABLE_MODE:
                return destination.push(endSegmentTable);
            case HTML_TABLE_BODY_MODE:
                return destination.push(endSegmentTableBody);
            case HTML_TABLE_ROW_MODE:
                return destination.push(endSegmentTableRow);
            case HTML_COLGROUP_MODE:
                return destination.push(endSegmentColGroup);
            default:
                throw Error("Unknown insertion mode. This is a bug in React.");
        }
    }
    function escapeJSStringsForInstructionScripts(input) {
        return JSON.stringify(input).replace(regexForJSStringsInInstructionScripts, function(match) {
            switch(match){
                case "<":
                    return "\\u003c";
                case "\u2028":
                    return "\\u2028";
                case "\u2029":
                    return "\\u2029";
                default:
                    throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
            }
        });
    }
    function escapeJSObjectForInstructionScripts(input) {
        return JSON.stringify(input).replace(regexForJSStringsInScripts, function(match) {
            switch(match){
                case "&":
                    return "\\u0026";
                case ">":
                    return "\\u003e";
                case "<":
                    return "\\u003c";
                case "\u2028":
                    return "\\u2028";
                case "\u2029":
                    return "\\u2029";
                default:
                    throw Error("escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
            }
        });
    }
    function flushStyleTagsLateForBoundary(styleQueue) {
        var rules = styleQueue.rules, hrefs = styleQueue.hrefs;
        0 < rules.length && 0 === hrefs.length && console.error("React expected to have at least one href for an a hoistable style but found none. This is a bug in React.");
        var i = 0;
        if (hrefs.length) {
            this.push(lateStyleTagResourceOpen1);
            this.push(styleQueue.precedence);
            for(this.push(lateStyleTagResourceOpen2); i < hrefs.length - 1; i++)this.push(hrefs[i]), this.push(spaceSeparator);
            this.push(hrefs[i]);
            this.push(lateStyleTagResourceOpen3);
            for(i = 0; i < rules.length; i++)this.push(rules[i]);
            destinationHasCapacity = this.push(lateStyleTagTemplateClose);
            currentlyRenderingBoundaryHasStylesToHoist = !0;
            rules.length = 0;
            hrefs.length = 0;
        }
    }
    function hasStylesToHoist(stylesheet) {
        return stylesheet.state !== PREAMBLE ? currentlyRenderingBoundaryHasStylesToHoist = !0 : !1;
    }
    function writeHoistablesForBoundary(destination, hoistableState, renderState) {
        currentlyRenderingBoundaryHasStylesToHoist = !1;
        destinationHasCapacity = !0;
        hoistableState.styles.forEach(flushStyleTagsLateForBoundary, destination);
        hoistableState.stylesheets.forEach(hasStylesToHoist);
        currentlyRenderingBoundaryHasStylesToHoist && (renderState.stylesToHoist = !0);
        return destinationHasCapacity;
    }
    function flushResource(resource) {
        for(var i = 0; i < resource.length; i++)this.push(resource[i]);
        resource.length = 0;
    }
    function flushStyleInPreamble(stylesheet) {
        pushLinkImpl(stylesheetFlushingQueue, stylesheet.props);
        for(var i = 0; i < stylesheetFlushingQueue.length; i++)this.push(stylesheetFlushingQueue[i]);
        stylesheetFlushingQueue.length = 0;
        stylesheet.state = PREAMBLE;
    }
    function flushStylesInPreamble(styleQueue) {
        var hasStylesheets = 0 < styleQueue.sheets.size;
        styleQueue.sheets.forEach(flushStyleInPreamble, this);
        styleQueue.sheets.clear();
        var rules = styleQueue.rules, hrefs = styleQueue.hrefs;
        if (!hasStylesheets || hrefs.length) {
            this.push(styleTagResourceOpen1);
            this.push(styleQueue.precedence);
            styleQueue = 0;
            if (hrefs.length) {
                for(this.push(styleTagResourceOpen2); styleQueue < hrefs.length - 1; styleQueue++)this.push(hrefs[styleQueue]), this.push(spaceSeparator);
                this.push(hrefs[styleQueue]);
            }
            this.push(styleTagResourceOpen3);
            for(styleQueue = 0; styleQueue < rules.length; styleQueue++)this.push(rules[styleQueue]);
            this.push(styleTagResourceClose);
            rules.length = 0;
            hrefs.length = 0;
        }
    }
    function preloadLateStyle(stylesheet) {
        if (stylesheet.state === PENDING$1) {
            stylesheet.state = PRELOADED;
            var props = stylesheet.props;
            pushLinkImpl(stylesheetFlushingQueue, {
                rel: "preload",
                as: "style",
                href: stylesheet.props.href,
                crossOrigin: props.crossOrigin,
                fetchPriority: props.fetchPriority,
                integrity: props.integrity,
                media: props.media,
                hrefLang: props.hrefLang,
                referrerPolicy: props.referrerPolicy
            });
            for(stylesheet = 0; stylesheet < stylesheetFlushingQueue.length; stylesheet++)this.push(stylesheetFlushingQueue[stylesheet]);
            stylesheetFlushingQueue.length = 0;
        }
    }
    function preloadLateStyles(styleQueue) {
        styleQueue.sheets.forEach(preloadLateStyle, this);
        styleQueue.sheets.clear();
    }
    function writeStyleResourceDependenciesInJS(destination, hoistableState) {
        destination.push(arrayFirstOpenBracket);
        var nextArrayOpenBrackChunk = arrayFirstOpenBracket;
        hoistableState.stylesheets.forEach(function(resource) {
            if (resource.state !== PREAMBLE) {
                if (resource.state === LATE) destination.push(nextArrayOpenBrackChunk), resource = resource.props.href, checkAttributeStringCoercion(resource, "href"), resource = escapeJSObjectForInstructionScripts("" + resource), destination.push(resource), destination.push(arrayCloseBracket), nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
                else {
                    destination.push(nextArrayOpenBrackChunk);
                    var precedence = resource.props["data-precedence"], props = resource.props, coercedHref = sanitizeURL("" + resource.props.href);
                    coercedHref = escapeJSObjectForInstructionScripts(coercedHref);
                    destination.push(coercedHref);
                    checkAttributeStringCoercion(precedence, "precedence");
                    precedence = "" + precedence;
                    destination.push(arrayInterstitial);
                    precedence = escapeJSObjectForInstructionScripts(precedence);
                    destination.push(precedence);
                    for(var propKey in props)if (hasOwnProperty.call(props, propKey) && (precedence = props[propKey], null != precedence)) switch(propKey){
                        case "href":
                        case "rel":
                        case "precedence":
                        case "data-precedence":
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error("link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
                        default:
                            writeStyleResourceAttributeInJS(destination, propKey, precedence);
                    }
                    destination.push(arrayCloseBracket);
                    nextArrayOpenBrackChunk = arraySubsequentOpenBracket;
                    resource.state = LATE;
                }
            }
        });
        destination.push(arrayCloseBracket);
    }
    function writeStyleResourceAttributeInJS(destination, name, value) {
        var attributeName = name.toLowerCase();
        switch(typeof value){
            case "function":
            case "symbol":
                return;
        }
        switch(name){
            case "innerHTML":
            case "dangerouslySetInnerHTML":
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "style":
            case "ref":
                return;
            case "className":
                attributeName = "class";
                checkAttributeStringCoercion(value, attributeName);
                name = "" + value;
                break;
            case "hidden":
                if (!1 === value) return;
                name = "";
                break;
            case "src":
            case "href":
                value = sanitizeURL(value);
                checkAttributeStringCoercion(value, attributeName);
                name = "" + value;
                break;
            default:
                if (2 < name.length && ("o" === name[0] || "O" === name[0]) && ("n" === name[1] || "N" === name[1]) || !isAttributeNameSafe(name)) return;
                checkAttributeStringCoercion(value, attributeName);
                name = "" + value;
        }
        destination.push(arrayInterstitial);
        attributeName = escapeJSObjectForInstructionScripts(attributeName);
        destination.push(attributeName);
        destination.push(arrayInterstitial);
        attributeName = escapeJSObjectForInstructionScripts(name);
        destination.push(attributeName);
    }
    function createHoistableState() {
        return {
            styles: new Set(),
            stylesheets: new Set()
        };
    }
    function preloadBootstrapScriptOrModule(resumableState, renderState, href, props) {
        (resumableState.scriptResources.hasOwnProperty(href) || resumableState.moduleScriptResources.hasOwnProperty(href)) && console.error('Internal React Error: React expected bootstrap script or module with src "%s" to not have been preloaded already. please file an issue', href);
        resumableState.scriptResources[href] = EXISTS;
        resumableState.moduleScriptResources[href] = EXISTS;
        resumableState = [];
        pushLinkImpl(resumableState, props);
        renderState.bootstrapScripts.add(resumableState);
    }
    function adoptPreloadCredentials(target, preloadState) {
        null == target.crossOrigin && (target.crossOrigin = preloadState[0]);
        null == target.integrity && (target.integrity = preloadState[1]);
    }
    function getPreloadAsHeader(href, as, params) {
        href = escapeHrefForLinkHeaderURLContext(href);
        as = escapeStringForLinkHeaderQuotedParamValueContext(as, "as");
        as = "<" + href + '>; rel=preload; as="' + as + '"';
        for(var paramName in params)hasOwnProperty.call(params, paramName) && (href = params[paramName], "string" === typeof href && (as += "; " + paramName.toLowerCase() + '="' + escapeStringForLinkHeaderQuotedParamValueContext(href, paramName) + '"'));
        return as;
    }
    function escapeHrefForLinkHeaderURLContext(hrefInput) {
        checkAttributeStringCoercion(hrefInput, "href");
        return ("" + hrefInput).replace(regexForHrefInLinkHeaderURLContext, escapeHrefForLinkHeaderURLContextReplacer);
    }
    function escapeHrefForLinkHeaderURLContextReplacer(match) {
        switch(match){
            case "<":
                return "%3C";
            case ">":
                return "%3E";
            case "\n":
                return "%0A";
            case "\r":
                return "%0D";
            default:
                throw Error("escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
    }
    function escapeStringForLinkHeaderQuotedParamValueContext(value, name) {
        willCoercionThrow(value) && (console.error("The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.", name, typeName(value)), testStringCoercion(value));
        return ("" + value).replace(regexForLinkHeaderQuotedParamValueContext, escapeStringForLinkHeaderQuotedParamValueContextReplacer);
    }
    function escapeStringForLinkHeaderQuotedParamValueContextReplacer(match) {
        switch(match){
            case '"':
                return "%22";
            case "'":
                return "%27";
            case ";":
                return "%3B";
            case ",":
                return "%2C";
            case "\n":
                return "%0A";
            case "\r":
                return "%0D";
            default:
                throw Error("escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
    }
    function hoistStyleQueueDependency(styleQueue) {
        this.styles.add(styleQueue);
    }
    function hoistStylesheetDependency(stylesheet) {
        this.stylesheets.add(stylesheet);
    }
    function createRenderState(resumableState, generateStaticMarkup) {
        var idPrefix = resumableState.idPrefix, bootstrapChunks = [], bootstrapScriptContent = resumableState.bootstrapScriptContent, bootstrapScripts = resumableState.bootstrapScripts, bootstrapModules = resumableState.bootstrapModules;
        void 0 !== bootstrapScriptContent && bootstrapChunks.push("<script>", escapeEntireInlineScriptContent(bootstrapScriptContent), "\x3c/script>");
        idPrefix = {
            placeholderPrefix: idPrefix + "P:",
            segmentPrefix: idPrefix + "S:",
            boundaryPrefix: idPrefix + "B:",
            startInlineScript: "<script>",
            preamble: createPreambleState(),
            externalRuntimeScript: null,
            bootstrapChunks: bootstrapChunks,
            importMapChunks: [],
            onHeaders: void 0,
            headers: null,
            resets: {
                font: {},
                dns: {},
                connect: {
                    default: {},
                    anonymous: {},
                    credentials: {}
                },
                image: {},
                style: {}
            },
            charsetChunks: [],
            viewportChunks: [],
            hoistableChunks: [],
            preconnects: new Set(),
            fontPreloads: new Set(),
            highImagePreloads: new Set(),
            styles: new Map(),
            bootstrapScripts: new Set(),
            scripts: new Set(),
            bulkPreloads: new Set(),
            preloads: {
                images: new Map(),
                stylesheets: new Map(),
                scripts: new Map(),
                moduleScripts: new Map()
            },
            nonce: void 0,
            hoistableState: null,
            stylesToHoist: !1
        };
        if (void 0 !== bootstrapScripts) for(bootstrapScriptContent = 0; bootstrapScriptContent < bootstrapScripts.length; bootstrapScriptContent++){
            var scriptConfig = bootstrapScripts[bootstrapScriptContent], src, crossOrigin = void 0, integrity = void 0, props = {
                rel: "preload",
                as: "script",
                fetchPriority: "low",
                nonce: void 0
            };
            "string" === typeof scriptConfig ? props.href = src = scriptConfig : (props.href = src = scriptConfig.src, props.integrity = integrity = "string" === typeof scriptConfig.integrity ? scriptConfig.integrity : void 0, props.crossOrigin = crossOrigin = "string" === typeof scriptConfig || null == scriptConfig.crossOrigin ? void 0 : "use-credentials" === scriptConfig.crossOrigin ? "use-credentials" : "");
            preloadBootstrapScriptOrModule(resumableState, idPrefix, src, props);
            bootstrapChunks.push('<script src="', escapeTextForBrowser(src));
            "string" === typeof integrity && bootstrapChunks.push('" integrity="', escapeTextForBrowser(integrity));
            "string" === typeof crossOrigin && bootstrapChunks.push('" crossorigin="', escapeTextForBrowser(crossOrigin));
            bootstrapChunks.push('" async="">\x3c/script>');
        }
        if (void 0 !== bootstrapModules) for(bootstrapScripts = 0; bootstrapScripts < bootstrapModules.length; bootstrapScripts++)bootstrapScriptContent = bootstrapModules[bootstrapScripts], crossOrigin = src = void 0, integrity = {
            rel: "modulepreload",
            fetchPriority: "low",
            nonce: void 0
        }, "string" === typeof bootstrapScriptContent ? integrity.href = scriptConfig = bootstrapScriptContent : (integrity.href = scriptConfig = bootstrapScriptContent.src, integrity.integrity = crossOrigin = "string" === typeof bootstrapScriptContent.integrity ? bootstrapScriptContent.integrity : void 0, integrity.crossOrigin = src = "string" === typeof bootstrapScriptContent || null == bootstrapScriptContent.crossOrigin ? void 0 : "use-credentials" === bootstrapScriptContent.crossOrigin ? "use-credentials" : ""), preloadBootstrapScriptOrModule(resumableState, idPrefix, scriptConfig, integrity), bootstrapChunks.push('<script type="module" src="', escapeTextForBrowser(scriptConfig)), "string" === typeof crossOrigin && bootstrapChunks.push('" integrity="', escapeTextForBrowser(crossOrigin)), "string" === typeof src && bootstrapChunks.push('" crossorigin="', escapeTextForBrowser(src)), bootstrapChunks.push('" async="">\x3c/script>');
        return {
            placeholderPrefix: idPrefix.placeholderPrefix,
            segmentPrefix: idPrefix.segmentPrefix,
            boundaryPrefix: idPrefix.boundaryPrefix,
            startInlineScript: idPrefix.startInlineScript,
            preamble: idPrefix.preamble,
            externalRuntimeScript: idPrefix.externalRuntimeScript,
            bootstrapChunks: idPrefix.bootstrapChunks,
            importMapChunks: idPrefix.importMapChunks,
            onHeaders: idPrefix.onHeaders,
            headers: idPrefix.headers,
            resets: idPrefix.resets,
            charsetChunks: idPrefix.charsetChunks,
            viewportChunks: idPrefix.viewportChunks,
            hoistableChunks: idPrefix.hoistableChunks,
            preconnects: idPrefix.preconnects,
            fontPreloads: idPrefix.fontPreloads,
            highImagePreloads: idPrefix.highImagePreloads,
            styles: idPrefix.styles,
            bootstrapScripts: idPrefix.bootstrapScripts,
            scripts: idPrefix.scripts,
            bulkPreloads: idPrefix.bulkPreloads,
            preloads: idPrefix.preloads,
            stylesToHoist: idPrefix.stylesToHoist,
            generateStaticMarkup: generateStaticMarkup
        };
    }
    function pushTextInstance(target, text, renderState, textEmbedded) {
        if (renderState.generateStaticMarkup) return target.push(escapeTextForBrowser(text)), !1;
        "" === text ? target = textEmbedded : (textEmbedded && target.push("\x3c!-- --\x3e"), target.push(escapeTextForBrowser(text)), target = !0);
        return target;
    }
    function pushSegmentFinale(target, renderState, lastPushedText, textEmbedded) {
        renderState.generateStaticMarkup || lastPushedText && textEmbedded && target.push("\x3c!-- --\x3e");
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function popToNearestCommonAncestor(prev, next) {
        if (prev !== next) {
            prev.context._currentValue2 = prev.parentValue;
            prev = prev.parent;
            var parentNext = next.parent;
            if (null === prev) {
                if (null !== parentNext) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
            } else {
                if (null === parentNext) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
                popToNearestCommonAncestor(prev, parentNext);
            }
            next.context._currentValue2 = next.value;
        }
    }
    function popAllPrevious(prev) {
        prev.context._currentValue2 = prev.parentValue;
        prev = prev.parent;
        null !== prev && popAllPrevious(prev);
    }
    function pushAllNext(next) {
        var parentNext = next.parent;
        null !== parentNext && pushAllNext(parentNext);
        next.context._currentValue2 = next.value;
    }
    function popPreviousToCommonLevel(prev, next) {
        prev.context._currentValue2 = prev.parentValue;
        prev = prev.parent;
        if (null === prev) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        prev.depth === next.depth ? popToNearestCommonAncestor(prev, next) : popPreviousToCommonLevel(prev, next);
    }
    function popNextToCommonLevel(prev, next) {
        var parentNext = next.parent;
        if (null === parentNext) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
        prev.depth === parentNext.depth ? popToNearestCommonAncestor(prev, parentNext) : popNextToCommonLevel(prev, parentNext);
        next.context._currentValue2 = next.value;
    }
    function switchContext(newSnapshot) {
        var prev = currentActiveSnapshot;
        prev !== newSnapshot && (null === prev ? pushAllNext(newSnapshot) : null === newSnapshot ? popAllPrevious(prev) : prev.depth === newSnapshot.depth ? popToNearestCommonAncestor(prev, newSnapshot) : prev.depth > newSnapshot.depth ? popPreviousToCommonLevel(prev, newSnapshot) : popNextToCommonLevel(prev, newSnapshot), currentActiveSnapshot = newSnapshot);
    }
    function warnOnInvalidCallback(callback) {
        if (null !== callback && "function" !== typeof callback) {
            var key = String(callback);
            didWarnOnInvalidCallback.has(key) || (didWarnOnInvalidCallback.add(key), console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", callback));
        }
    }
    function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && getComponentNameFromType(publicInstance) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnAboutNoopUpdateForComponent[warningKey] || (console.error("Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.\n\nPlease check the code for the %s component.", callerName, publicInstance), didWarnAboutNoopUpdateForComponent[warningKey] = !0);
    }
    function pushTreeContext(baseContext, totalChildren, index) {
        var baseIdWithLeadingBit = baseContext.id;
        baseContext = baseContext.overflow;
        var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
        baseIdWithLeadingBit &= ~(1 << baseLength);
        index += 1;
        var length = 32 - clz32(totalChildren) + baseLength;
        if (30 < length) {
            var numberOfOverflowBits = baseLength - baseLength % 5;
            length = (baseIdWithLeadingBit & (1 << numberOfOverflowBits) - 1).toString(32);
            baseIdWithLeadingBit >>= numberOfOverflowBits;
            baseLength -= numberOfOverflowBits;
            return {
                id: 1 << 32 - clz32(totalChildren) + baseLength | index << baseLength | baseIdWithLeadingBit,
                overflow: length + baseContext
            };
        }
        return {
            id: 1 << length | index << baseLength | baseIdWithLeadingBit,
            overflow: baseContext
        };
    }
    function clz32Fallback(x) {
        x >>>= 0;
        return 0 === x ? 32 : 31 - (log(x) / LN2 | 0) | 0;
    }
    function noop$2() {}
    function trackUsedThenable(thenableState, thenable, index) {
        index = thenableState[index];
        void 0 === index ? thenableState.push(thenable) : index !== thenable && (thenable.then(noop$2, noop$2), thenable = index);
        switch(thenable.status){
            case "fulfilled":
                return thenable.value;
            case "rejected":
                throw thenable.reason;
            default:
                "string" === typeof thenable.status ? thenable.then(noop$2, noop$2) : (thenableState = thenable, thenableState.status = "pending", thenableState.then(function(fulfilledValue) {
                    if ("pending" === thenable.status) {
                        var fulfilledThenable = thenable;
                        fulfilledThenable.status = "fulfilled";
                        fulfilledThenable.value = fulfilledValue;
                    }
                }, function(error) {
                    if ("pending" === thenable.status) {
                        var rejectedThenable = thenable;
                        rejectedThenable.status = "rejected";
                        rejectedThenable.reason = error;
                    }
                }));
                switch(thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenable.reason;
                }
                suspendedThenable = thenable;
                throw SuspenseException;
        }
    }
    function getSuspendedThenable() {
        if (null === suspendedThenable) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
        var thenable = suspendedThenable;
        suspendedThenable = null;
        return thenable;
    }
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function resolveCurrentlyRenderingComponent() {
        if (null === currentlyRenderingComponent) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        isInHookUserCodeInDev && console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks");
        return currentlyRenderingComponent;
    }
    function createHook() {
        if (0 < numberOfReRenders) throw Error("Rendered more hooks than during the previous render");
        return {
            memoizedState: null,
            queue: null,
            next: null
        };
    }
    function createWorkInProgressHook() {
        null === workInProgressHook ? null === firstWorkInProgressHook ? (isReRender = !1, firstWorkInProgressHook = workInProgressHook = createHook()) : (isReRender = !0, workInProgressHook = firstWorkInProgressHook) : null === workInProgressHook.next ? (isReRender = !1, workInProgressHook = workInProgressHook.next = createHook()) : (isReRender = !0, workInProgressHook = workInProgressHook.next);
        return workInProgressHook;
    }
    function getThenableStateAfterSuspending() {
        var state = thenableState;
        thenableState = null;
        return state;
    }
    function resetHooksState() {
        isInHookUserCodeInDev = !1;
        currentlyRenderingKeyPath = currentlyRenderingRequest = currentlyRenderingTask = currentlyRenderingComponent = null;
        didScheduleRenderPhaseUpdate = !1;
        firstWorkInProgressHook = null;
        numberOfReRenders = 0;
        workInProgressHook = renderPhaseUpdates = null;
    }
    function readContext(context) {
        isInHookUserCodeInDev && console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
        return context._currentValue2;
    }
    function basicStateReducer(state, action) {
        return "function" === typeof action ? action(state) : action;
    }
    function useReducer(reducer, initialArg, init) {
        reducer !== basicStateReducer && (currentHookNameInDev = "useReducer");
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        if (isReRender) {
            init = workInProgressHook.queue;
            initialArg = init.dispatch;
            if (null !== renderPhaseUpdates) {
                var firstRenderPhaseUpdate = renderPhaseUpdates.get(init);
                if (void 0 !== firstRenderPhaseUpdate) {
                    renderPhaseUpdates.delete(init);
                    init = workInProgressHook.memoizedState;
                    do {
                        var action = firstRenderPhaseUpdate.action;
                        isInHookUserCodeInDev = !0;
                        init = reducer(init, action);
                        isInHookUserCodeInDev = !1;
                        firstRenderPhaseUpdate = firstRenderPhaseUpdate.next;
                    }while (null !== firstRenderPhaseUpdate);
                    workInProgressHook.memoizedState = init;
                    return [
                        init,
                        initialArg
                    ];
                }
            }
            return [
                workInProgressHook.memoizedState,
                initialArg
            ];
        }
        isInHookUserCodeInDev = !0;
        reducer = reducer === basicStateReducer ? "function" === typeof initialArg ? initialArg() : initialArg : void 0 !== init ? init(initialArg) : initialArg;
        isInHookUserCodeInDev = !1;
        workInProgressHook.memoizedState = reducer;
        reducer = workInProgressHook.queue = {
            last: null,
            dispatch: null
        };
        reducer = reducer.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, reducer);
        return [
            workInProgressHook.memoizedState,
            reducer
        ];
    }
    function useMemo(nextCreate, deps) {
        currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
        workInProgressHook = createWorkInProgressHook();
        deps = void 0 === deps ? null : deps;
        if (null !== workInProgressHook) {
            var prevState = workInProgressHook.memoizedState;
            if (null !== prevState && null !== deps) {
                a: {
                    var JSCompiler_inline_result = prevState[1];
                    if (null === JSCompiler_inline_result) console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", currentHookNameInDev), JSCompiler_inline_result = !1;
                    else {
                        deps.length !== JSCompiler_inline_result.length && console.error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", currentHookNameInDev, "[" + deps.join(", ") + "]", "[" + JSCompiler_inline_result.join(", ") + "]");
                        for(var i = 0; i < JSCompiler_inline_result.length && i < deps.length; i++)if (!objectIs(deps[i], JSCompiler_inline_result[i])) {
                            JSCompiler_inline_result = !1;
                            break a;
                        }
                        JSCompiler_inline_result = !0;
                    }
                }
                if (JSCompiler_inline_result) return prevState[0];
            }
        }
        isInHookUserCodeInDev = !0;
        nextCreate = nextCreate();
        isInHookUserCodeInDev = !1;
        workInProgressHook.memoizedState = [
            nextCreate,
            deps
        ];
        return nextCreate;
    }
    function dispatchAction(componentIdentity, queue, action) {
        if (25 <= numberOfReRenders) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
        if (componentIdentity === currentlyRenderingComponent) {
            if (didScheduleRenderPhaseUpdate = !0, componentIdentity = {
                action: action,
                next: null
            }, null === renderPhaseUpdates && (renderPhaseUpdates = new Map()), action = renderPhaseUpdates.get(queue), void 0 === action) renderPhaseUpdates.set(queue, componentIdentity);
            else {
                for(queue = action; null !== queue.next;)queue = queue.next;
                queue.next = componentIdentity;
            }
        }
    }
    function unsupportedStartTransition() {
        throw Error("startTransition cannot be called during server rendering.");
    }
    function unsupportedSetOptimisticState() {
        throw Error("Cannot update optimistic state while rendering.");
    }
    function useActionState(action, initialState, permalink) {
        resolveCurrentlyRenderingComponent();
        var actionStateHookIndex = actionStateCounter++, request = currentlyRenderingRequest;
        if ("function" === typeof action.$$FORM_ACTION) {
            var nextPostbackStateKey = null, componentKeyPath = currentlyRenderingKeyPath;
            request = request.formState;
            var isSignatureEqual = action.$$IS_SIGNATURE_EQUAL;
            if (null !== request && "function" === typeof isSignatureEqual) {
                var postbackKey = request[1];
                isSignatureEqual.call(action, request[2], request[3]) && (nextPostbackStateKey = void 0 !== permalink ? "p" + permalink : "k" + murmurhash3_32_gc(JSON.stringify([
                    componentKeyPath,
                    null,
                    actionStateHookIndex
                ]), 0), postbackKey === nextPostbackStateKey && (actionStateMatchingIndex = actionStateHookIndex, initialState = request[0]));
            }
            var boundAction = action.bind(null, initialState);
            action = function(payload) {
                boundAction(payload);
            };
            "function" === typeof boundAction.$$FORM_ACTION && (action.$$FORM_ACTION = function(prefix) {
                prefix = boundAction.$$FORM_ACTION(prefix);
                void 0 !== permalink && (checkAttributeStringCoercion(permalink, "target"), permalink += "", prefix.action = permalink);
                var formData = prefix.data;
                formData && (null === nextPostbackStateKey && (nextPostbackStateKey = void 0 !== permalink ? "p" + permalink : "k" + murmurhash3_32_gc(JSON.stringify([
                    componentKeyPath,
                    null,
                    actionStateHookIndex
                ]), 0)), formData.append("$ACTION_KEY", nextPostbackStateKey));
                return prefix;
            });
            return [
                initialState,
                action,
                !1
            ];
        }
        var _boundAction = action.bind(null, initialState);
        return [
            initialState,
            function(payload) {
                _boundAction(payload);
            },
            !1
        ];
    }
    function unwrapThenable(thenable) {
        var index = thenableIndexCounter;
        thenableIndexCounter += 1;
        null === thenableState && (thenableState = []);
        return trackUsedThenable(thenableState, thenable, index);
    }
    function unsupportedRefresh() {
        throw Error("Cache cannot be refreshed during server rendering.");
    }
    function noop$1() {}
    function disabledLog() {}
    function disableLogs() {
        if (0 === disabledDepth) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
                configurable: !0,
                enumerable: !0,
                value: disabledLog,
                writable: !0
            };
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
            var props = {
                configurable: !0,
                enumerable: !0,
                writable: !0
            };
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        }
        0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix) try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = !0;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
            var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (construct) {
                            var Fake = function() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function() {
                                    throw Error();
                                }
                            });
                            if ("object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    var control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x$0) {
                                    control = x$0;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x$1) {
                                control = x$1;
                            }
                            (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
                        }
                    } catch (sample) {
                        if (sample && control && "string" === typeof sample.stack) return [
                            sample.stack,
                            control.stack
                        ];
                    }
                    return [
                        null,
                        null
                    ];
                }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
                var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
                for(_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");)namePropDescriptor++;
                for(; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");)_RunInRootFrame$Deter++;
                if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for(namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];)_RunInRootFrame$Deter--;
                for(; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                        do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                            var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                            fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                            "function" === typeof fn && componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                        while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                    }
                    break;
                }
            }
        } finally{
            reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
    }
    function formatOwnerStack(error) {
        var prevPrepareStackTrace = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        error = error.stack;
        Error.prepareStackTrace = prevPrepareStackTrace;
        error.startsWith("Error: react-stack-top-frame\n") && (error = error.slice(29));
        prevPrepareStackTrace = error.indexOf("\n");
        -1 !== prevPrepareStackTrace && (error = error.slice(prevPrepareStackTrace + 1));
        prevPrepareStackTrace = error.indexOf("react_stack_bottom_frame");
        -1 !== prevPrepareStackTrace && (prevPrepareStackTrace = error.lastIndexOf("\n", prevPrepareStackTrace));
        if (-1 !== prevPrepareStackTrace) error = error.slice(0, prevPrepareStackTrace);
        else return "";
        return error;
    }
    function describeComponentStackByType(type) {
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        if ("function" === typeof type) return type.prototype && type.prototype.isReactComponent ? describeNativeComponentFrame(type, !0) : describeNativeComponentFrame(type, !1);
        if ("object" === typeof type && null !== type) {
            switch(type.$$typeof){
                case REACT_FORWARD_REF_TYPE:
                    return describeNativeComponentFrame(type.render, !1);
                case REACT_MEMO_TYPE:
                    return describeNativeComponentFrame(type.type, !1);
                case REACT_LAZY_TYPE:
                    var lazyComponent = type, payload = lazyComponent._payload;
                    lazyComponent = lazyComponent._init;
                    try {
                        type = lazyComponent(payload);
                    } catch (x) {
                        return describeBuiltInComponentFrame("Lazy");
                    }
                    return describeComponentStackByType(type);
            }
            if ("string" === typeof type.name) return payload = type.env, describeBuiltInComponentFrame(type.name + (payload ? " [" + payload + "]" : ""));
        }
        switch(type){
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
        }
        return "";
    }
    function defaultErrorHandler(error) {
        if ("object" === typeof error && null !== error && "string" === typeof error.environmentName) {
            var JSCompiler_inline_result = error.environmentName;
            error = [
                error
            ].slice(0);
            "string" === typeof error[0] ? error.splice(0, 1, "[%s] " + error[0], " " + JSCompiler_inline_result + " ") : error.splice(0, 0, "[%s] ", " " + JSCompiler_inline_result + " ");
            error.unshift(console);
            JSCompiler_inline_result = bind.apply(console.error, error);
            JSCompiler_inline_result();
        } else console.error(error);
        return null;
    }
    function noop() {}
    function RequestInstance(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState) {
        var abortSet = new Set();
        this.destination = null;
        this.flushScheduled = !1;
        this.resumableState = resumableState;
        this.renderState = renderState;
        this.rootFormatContext = rootFormatContext;
        this.progressiveChunkSize = void 0 === progressiveChunkSize ? 12800 : progressiveChunkSize;
        this.status = 10;
        this.fatalError = null;
        this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0;
        this.completedPreambleSegments = this.completedRootSegment = null;
        this.abortableTasks = abortSet;
        this.pingedTasks = [];
        this.clientRenderedBoundaries = [];
        this.completedBoundaries = [];
        this.partialBoundaries = [];
        this.trackedPostpones = null;
        this.onError = void 0 === onError ? defaultErrorHandler : onError;
        this.onPostpone = void 0 === onPostpone ? noop : onPostpone;
        this.onAllReady = void 0 === onAllReady ? noop : onAllReady;
        this.onShellReady = void 0 === onShellReady ? noop : onShellReady;
        this.onShellError = void 0 === onShellError ? noop : onShellError;
        this.onFatalError = void 0 === onFatalError ? noop : onFatalError;
        this.formState = void 0 === formState ? null : formState;
        this.didWarnForKey = null;
    }
    function createRequest(children, resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState) {
        var now = getCurrentTime();
        1e3 < now - lastResetTime && (ReactSharedInternals.recentlyCreatedOwnerStacks = 0, lastResetTime = now);
        resumableState = new RequestInstance(resumableState, renderState, rootFormatContext, progressiveChunkSize, onError, onAllReady, onShellReady, onShellError, onFatalError, onPostpone, formState);
        renderState = createPendingSegment(resumableState, 0, null, rootFormatContext, !1, !1);
        renderState.parentFlushed = !0;
        children = createRenderTask(resumableState, null, children, -1, null, renderState, null, null, resumableState.abortableTasks, null, rootFormatContext, null, emptyTreeContext, null, !1, emptyContextObject, null);
        pushComponentStack(children);
        resumableState.pingedTasks.push(children);
        return resumableState;
    }
    function pingTask(request, task) {
        request.pingedTasks.push(task);
        1 === request.pingedTasks.length && (request.flushScheduled = null !== request.destination, performWork(request));
    }
    function createSuspenseBoundary(request, fallbackAbortableTasks, contentPreamble, fallbackPreamble) {
        return {
            status: PENDING,
            rootSegmentID: -1,
            parentFlushed: !1,
            pendingTasks: 0,
            completedSegments: [],
            byteSize: 0,
            fallbackAbortableTasks: fallbackAbortableTasks,
            errorDigest: null,
            contentState: createHoistableState(),
            fallbackState: createHoistableState(),
            contentPreamble: contentPreamble,
            fallbackPreamble: fallbackPreamble,
            trackedContentKeyPath: null,
            trackedFallbackNode: null,
            errorMessage: null,
            errorStack: null,
            errorComponentStack: null
        };
    }
    function createRenderTask(request, thenableState, node, childIndex, blockedBoundary, blockedSegment, blockedPreamble, hoistableState, abortSet, keyPath, formatContext, context, treeContext, componentStack, isFallback, legacyContext, debugTask) {
        request.allPendingTasks++;
        null === blockedBoundary ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
        var task = {
            replay: null,
            node: node,
            childIndex: childIndex,
            ping: function() {
                return pingTask(request, task);
            },
            blockedBoundary: blockedBoundary,
            blockedSegment: blockedSegment,
            blockedPreamble: blockedPreamble,
            hoistableState: hoistableState,
            abortSet: abortSet,
            keyPath: keyPath,
            formatContext: formatContext,
            context: context,
            treeContext: treeContext,
            componentStack: componentStack,
            thenableState: thenableState,
            isFallback: isFallback
        };
        task.debugTask = debugTask;
        abortSet.add(task);
        return task;
    }
    function createReplayTask(request, thenableState, replay, node, childIndex, blockedBoundary, hoistableState, abortSet, keyPath, formatContext, context, treeContext, componentStack, isFallback, legacyContext, debugTask) {
        request.allPendingTasks++;
        null === blockedBoundary ? request.pendingRootTasks++ : blockedBoundary.pendingTasks++;
        replay.pendingTasks++;
        var task = {
            replay: replay,
            node: node,
            childIndex: childIndex,
            ping: function() {
                return pingTask(request, task);
            },
            blockedBoundary: blockedBoundary,
            blockedSegment: null,
            blockedPreamble: null,
            hoistableState: hoistableState,
            abortSet: abortSet,
            keyPath: keyPath,
            formatContext: formatContext,
            context: context,
            treeContext: treeContext,
            componentStack: componentStack,
            thenableState: thenableState,
            isFallback: isFallback
        };
        task.debugTask = debugTask;
        abortSet.add(task);
        return task;
    }
    function createPendingSegment(request, index, boundary, parentFormatContext, lastPushedText, textEmbedded) {
        return {
            status: PENDING,
            parentFlushed: !1,
            id: -1,
            index: index,
            chunks: [],
            children: [],
            preambleChildren: [],
            parentFormatContext: parentFormatContext,
            boundary: boundary,
            lastPushedText: lastPushedText,
            textEmbedded: textEmbedded
        };
    }
    function getCurrentStackInDEV() {
        if (null === currentTaskInDEV || null === currentTaskInDEV.componentStack) return "";
        var componentStack = currentTaskInDEV.componentStack;
        try {
            var info = "";
            if ("string" === typeof componentStack.type) info += describeBuiltInComponentFrame(componentStack.type);
            else if ("function" === typeof componentStack.type) {
                if (!componentStack.owner) {
                    var JSCompiler_temp_const = info, fn = componentStack.type, name = fn ? fn.displayName || fn.name : "";
                    var JSCompiler_inline_result = name ? describeBuiltInComponentFrame(name) : "";
                    info = JSCompiler_temp_const + JSCompiler_inline_result;
                }
            } else componentStack.owner || (info += describeComponentStackByType(componentStack.type));
            for(; componentStack;)JSCompiler_temp_const = null, null != componentStack.debugStack ? JSCompiler_temp_const = formatOwnerStack(componentStack.debugStack) : (JSCompiler_inline_result = componentStack, null != JSCompiler_inline_result.stack && (JSCompiler_temp_const = "string" !== typeof JSCompiler_inline_result.stack ? JSCompiler_inline_result.stack = formatOwnerStack(JSCompiler_inline_result.stack) : JSCompiler_inline_result.stack)), (componentStack = componentStack.owner) && JSCompiler_temp_const && (info += "\n" + JSCompiler_temp_const);
            var JSCompiler_inline_result$jscomp$0 = info;
        } catch (x) {
            JSCompiler_inline_result$jscomp$0 = "\nError generating stack: " + x.message + "\n" + x.stack;
        }
        return JSCompiler_inline_result$jscomp$0;
    }
    function pushServerComponentStack(task, debugInfo) {
        if (null != debugInfo) for(var i = 0; i < debugInfo.length; i++){
            var componentInfo = debugInfo[i];
            "string" === typeof componentInfo.name && void 0 !== componentInfo.debugStack && (task.componentStack = {
                parent: task.componentStack,
                type: componentInfo,
                owner: componentInfo.owner,
                stack: componentInfo.debugStack
            }, task.debugTask = componentInfo.debugTask);
        }
    }
    function pushComponentStack(task) {
        var node = task.node;
        if ("object" === typeof node && null !== node) switch(node.$$typeof){
            case REACT_ELEMENT_TYPE:
                var type = node.type, owner = node._owner, stack = node._debugStack;
                pushServerComponentStack(task, node._debugInfo);
                task.debugTask = node._debugTask;
                task.componentStack = {
                    parent: task.componentStack,
                    type: type,
                    owner: owner,
                    stack: stack
                };
                break;
            case REACT_LAZY_TYPE:
                pushServerComponentStack(task, node._debugInfo);
                break;
            default:
                "function" === typeof node.then && pushServerComponentStack(task, node._debugInfo);
        }
    }
    function getThrownInfo(node$jscomp$0) {
        var errorInfo = {};
        node$jscomp$0 && Object.defineProperty(errorInfo, "componentStack", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                try {
                    var info = "", node = node$jscomp$0;
                    do info += describeComponentStackByType(node.type), node = node.parent;
                    while (node);
                    var stack = info;
                } catch (x) {
                    stack = "\nError generating stack: " + x.message + "\n" + x.stack;
                }
                Object.defineProperty(errorInfo, "componentStack", {
                    value: stack
                });
                return stack;
            }
        });
        return errorInfo;
    }
    function encodeErrorForBoundary(boundary, digest, error, thrownInfo, wasAborted) {
        boundary.errorDigest = digest;
        error instanceof Error ? (digest = String(error.message), error = String(error.stack)) : (digest = "object" === typeof error && null !== error ? describeObjectForErrorMessage(error) : String(error), error = null);
        wasAborted = wasAborted ? "Switched to client rendering because the server rendering aborted due to:\n\n" : "Switched to client rendering because the server rendering errored:\n\n";
        boundary.errorMessage = wasAborted + digest;
        boundary.errorStack = null !== error ? wasAborted + error : null;
        boundary.errorComponentStack = thrownInfo.componentStack;
    }
    function logRecoverableError(request, error, errorInfo, debugTask) {
        request = request.onError;
        error = debugTask ? debugTask.run(request.bind(null, error, errorInfo)) : request(error, errorInfo);
        if (null != error && "string" !== typeof error) console.error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "%s" instead', typeof error);
        else return error;
    }
    function fatalError(request, error, errorInfo, debugTask) {
        errorInfo = request.onShellError;
        var onFatalError = request.onFatalError;
        debugTask ? (debugTask.run(errorInfo.bind(null, error)), debugTask.run(onFatalError.bind(null, error))) : (errorInfo(error), onFatalError(error));
        null !== request.destination ? (request.status = CLOSED, request.destination.destroy(error)) : (request.status = 13, request.fatalError = error);
    }
    function renderWithHooks(request, task, keyPath, Component, props, secondArg) {
        var prevThenableState = task.thenableState;
        task.thenableState = null;
        currentlyRenderingComponent = {};
        currentlyRenderingTask = task;
        currentlyRenderingRequest = request;
        currentlyRenderingKeyPath = keyPath;
        isInHookUserCodeInDev = !1;
        actionStateCounter = localIdCounter = 0;
        actionStateMatchingIndex = -1;
        thenableIndexCounter = 0;
        thenableState = prevThenableState;
        for(request = callComponentInDEV(Component, props, secondArg); didScheduleRenderPhaseUpdate;)didScheduleRenderPhaseUpdate = !1, actionStateCounter = localIdCounter = 0, actionStateMatchingIndex = -1, thenableIndexCounter = 0, numberOfReRenders += 1, workInProgressHook = null, request = Component(props, secondArg);
        resetHooksState();
        return request;
    }
    function finishFunctionComponent(request, task, keyPath, children, hasId, actionStateCount, actionStateMatchingIndex) {
        var didEmitActionStateMarkers = !1;
        if (0 !== actionStateCount && null !== request.formState) {
            var segment = task.blockedSegment;
            if (null !== segment) {
                didEmitActionStateMarkers = !0;
                segment = segment.chunks;
                for(var i = 0; i < actionStateCount; i++)i === actionStateMatchingIndex ? segment.push("\x3c!--F!--\x3e") : segment.push("\x3c!--F--\x3e");
            }
        }
        actionStateCount = task.keyPath;
        task.keyPath = keyPath;
        hasId ? (keyPath = task.treeContext, task.treeContext = pushTreeContext(keyPath, 1, 0), renderNode(request, task, children, -1), task.treeContext = keyPath) : didEmitActionStateMarkers ? renderNode(request, task, children, -1) : renderNodeDestructive(request, task, children, -1);
        task.keyPath = actionStateCount;
    }
    function renderElement(request, task, keyPath, type, props, ref) {
        if ("function" === typeof type) {
            if (type.prototype && type.prototype.isReactComponent) {
                var newProps = props;
                if ("ref" in props) {
                    newProps = {};
                    for(var propName in props)"ref" !== propName && (newProps[propName] = props[propName]);
                }
                var defaultProps = type.defaultProps;
                if (defaultProps) {
                    newProps === props && (newProps = assign({}, newProps, props));
                    for(var _propName in defaultProps)void 0 === newProps[_propName] && (newProps[_propName] = defaultProps[_propName]);
                }
                var resolvedProps = newProps;
                var context = emptyContextObject, contextType = type.contextType;
                if ("contextType" in type && null !== contextType && (void 0 === contextType || contextType.$$typeof !== REACT_CONTEXT_TYPE) && !didWarnAboutInvalidateContextType.has(type)) {
                    didWarnAboutInvalidateContextType.add(type);
                    var addendum = void 0 === contextType ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : "object" !== typeof contextType ? " However, it is set to a " + typeof contextType + "." : contextType.$$typeof === REACT_CONSUMER_TYPE ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(contextType).join(", ") + "}.";
                    console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", getComponentNameFromType(type) || "Component", addendum);
                }
                "object" === typeof contextType && null !== contextType && (context = contextType._currentValue2);
                var instance = new type(resolvedProps, context);
                if ("function" === typeof type.getDerivedStateFromProps && (null === instance.state || void 0 === instance.state)) {
                    var componentName = getComponentNameFromType(type) || "Component";
                    didWarnAboutUninitializedState.has(componentName) || (didWarnAboutUninitializedState.add(componentName), console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", componentName, null === instance.state ? "null" : "undefined", componentName));
                }
                if ("function" === typeof type.getDerivedStateFromProps || "function" === typeof instance.getSnapshotBeforeUpdate) {
                    var foundWillMountName = null, foundWillReceivePropsName = null, foundWillUpdateName = null;
                    "function" === typeof instance.componentWillMount && !0 !== instance.componentWillMount.__suppressDeprecationWarning ? foundWillMountName = "componentWillMount" : "function" === typeof instance.UNSAFE_componentWillMount && (foundWillMountName = "UNSAFE_componentWillMount");
                    "function" === typeof instance.componentWillReceiveProps && !0 !== instance.componentWillReceiveProps.__suppressDeprecationWarning ? foundWillReceivePropsName = "componentWillReceiveProps" : "function" === typeof instance.UNSAFE_componentWillReceiveProps && (foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps");
                    "function" === typeof instance.componentWillUpdate && !0 !== instance.componentWillUpdate.__suppressDeprecationWarning ? foundWillUpdateName = "componentWillUpdate" : "function" === typeof instance.UNSAFE_componentWillUpdate && (foundWillUpdateName = "UNSAFE_componentWillUpdate");
                    if (null !== foundWillMountName || null !== foundWillReceivePropsName || null !== foundWillUpdateName) {
                        var _componentName = getComponentNameFromType(type) || "Component", newApiName = "function" === typeof type.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                        didWarnAboutLegacyLifecyclesAndDerivedState.has(_componentName) || (didWarnAboutLegacyLifecyclesAndDerivedState.add(_componentName), console.error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://react.dev/link/unsafe-component-lifecycles", _componentName, newApiName, null !== foundWillMountName ? "\n  " + foundWillMountName : "", null !== foundWillReceivePropsName ? "\n  " + foundWillReceivePropsName : "", null !== foundWillUpdateName ? "\n  " + foundWillUpdateName : ""));
                    }
                }
                var name = getComponentNameFromType(type) || "Component";
                instance.render || (type.prototype && "function" === typeof type.prototype.render ? console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?", name) : console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.", name));
                !instance.getInitialState || instance.getInitialState.isReactClassApproved || instance.state || console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", name);
                instance.getDefaultProps && !instance.getDefaultProps.isReactClassApproved && console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", name);
                instance.contextType && console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", name);
                type.childContextTypes && !didWarnAboutChildContextTypes.has(type) && (didWarnAboutChildContextTypes.add(type), console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)", name));
                type.contextTypes && !didWarnAboutContextTypes$1.has(type) && (didWarnAboutContextTypes$1.add(type), console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)", name));
                "function" === typeof instance.componentShouldUpdate && console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", name);
                type.prototype && type.prototype.isPureReactComponent && "undefined" !== typeof instance.shouldComponentUpdate && console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", getComponentNameFromType(type) || "A pure component");
                "function" === typeof instance.componentDidUnmount && console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", name);
                "function" === typeof instance.componentDidReceiveProps && console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", name);
                "function" === typeof instance.componentWillRecieveProps && console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", name);
                "function" === typeof instance.UNSAFE_componentWillRecieveProps && console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", name);
                var hasMutatedProps = instance.props !== resolvedProps;
                void 0 !== instance.props && hasMutatedProps && console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", name);
                instance.defaultProps && console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", name, name);
                "function" !== typeof instance.getSnapshotBeforeUpdate || "function" === typeof instance.componentDidUpdate || didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.has(type) || (didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate.add(type), console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", getComponentNameFromType(type)));
                "function" === typeof instance.getDerivedStateFromProps && console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
                "function" === typeof instance.getDerivedStateFromError && console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", name);
                "function" === typeof type.getSnapshotBeforeUpdate && console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", name);
                var state = instance.state;
                state && ("object" !== typeof state || isArrayImpl(state)) && console.error("%s.state: must be set to an object or null", name);
                "function" === typeof instance.getChildContext && "object" !== typeof type.childContextTypes && console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", name);
                var initialState = void 0 !== instance.state ? instance.state : null;
                instance.updater = classComponentUpdater;
                instance.props = resolvedProps;
                instance.state = initialState;
                var internalInstance = {
                    queue: [],
                    replace: !1
                };
                instance._reactInternals = internalInstance;
                var contextType$jscomp$0 = type.contextType;
                instance.context = "object" === typeof contextType$jscomp$0 && null !== contextType$jscomp$0 ? contextType$jscomp$0._currentValue2 : emptyContextObject;
                if (instance.state === resolvedProps) {
                    var componentName$jscomp$0 = getComponentNameFromType(type) || "Component";
                    didWarnAboutDirectlyAssigningPropsToState.has(componentName$jscomp$0) || (didWarnAboutDirectlyAssigningPropsToState.add(componentName$jscomp$0), console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", componentName$jscomp$0));
                }
                var getDerivedStateFromProps = type.getDerivedStateFromProps;
                if ("function" === typeof getDerivedStateFromProps) {
                    var partialState = getDerivedStateFromProps(resolvedProps, initialState);
                    if (void 0 === partialState) {
                        var componentName$jscomp$1 = getComponentNameFromType(type) || "Component";
                        didWarnAboutUndefinedDerivedState.has(componentName$jscomp$1) || (didWarnAboutUndefinedDerivedState.add(componentName$jscomp$1), console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", componentName$jscomp$1));
                    }
                    var JSCompiler_inline_result = null === partialState || void 0 === partialState ? initialState : assign({}, initialState, partialState);
                    instance.state = JSCompiler_inline_result;
                }
                if ("function" !== typeof type.getDerivedStateFromProps && "function" !== typeof instance.getSnapshotBeforeUpdate && ("function" === typeof instance.UNSAFE_componentWillMount || "function" === typeof instance.componentWillMount)) {
                    var oldState = instance.state;
                    if ("function" === typeof instance.componentWillMount) {
                        if (!0 !== instance.componentWillMount.__suppressDeprecationWarning) {
                            var componentName$jscomp$2 = getComponentNameFromType(type) || "Unknown";
                            didWarnAboutDeprecatedWillMount[componentName$jscomp$2] || (console.warn("componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.\n\nPlease update the following components: %s", componentName$jscomp$2), didWarnAboutDeprecatedWillMount[componentName$jscomp$2] = !0);
                        }
                        instance.componentWillMount();
                    }
                    "function" === typeof instance.UNSAFE_componentWillMount && instance.UNSAFE_componentWillMount();
                    oldState !== instance.state && (console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", getComponentNameFromType(type) || "Component"), classComponentUpdater.enqueueReplaceState(instance, instance.state, null));
                    if (null !== internalInstance.queue && 0 < internalInstance.queue.length) {
                        var oldQueue = internalInstance.queue, oldReplace = internalInstance.replace;
                        internalInstance.queue = null;
                        internalInstance.replace = !1;
                        if (oldReplace && 1 === oldQueue.length) instance.state = oldQueue[0];
                        else {
                            for(var nextState = oldReplace ? oldQueue[0] : instance.state, dontMutate = !0, i = oldReplace ? 1 : 0; i < oldQueue.length; i++){
                                var partial = oldQueue[i], partialState$jscomp$0 = "function" === typeof partial ? partial.call(instance, nextState, resolvedProps, void 0) : partial;
                                null != partialState$jscomp$0 && (dontMutate ? (dontMutate = !1, nextState = assign({}, nextState, partialState$jscomp$0)) : assign(nextState, partialState$jscomp$0));
                            }
                            instance.state = nextState;
                        }
                    } else internalInstance.queue = null;
                }
                var nextChildren = callRenderInDEV(instance);
                if (12 === request.status) throw null;
                instance.props !== resolvedProps && (didWarnAboutReassigningProps || console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", getComponentNameFromType(type) || "a component"), didWarnAboutReassigningProps = !0);
                var prevKeyPath = task.keyPath;
                task.keyPath = keyPath;
                renderNodeDestructive(request, task, nextChildren, -1);
                task.keyPath = prevKeyPath;
            } else {
                if (type.prototype && "function" === typeof type.prototype.render) {
                    var componentName$jscomp$3 = getComponentNameFromType(type) || "Unknown";
                    didWarnAboutBadClass[componentName$jscomp$3] || (console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", componentName$jscomp$3, componentName$jscomp$3), didWarnAboutBadClass[componentName$jscomp$3] = !0);
                }
                var value = renderWithHooks(request, task, keyPath, type, props, void 0);
                if (12 === request.status) throw null;
                var hasId = 0 !== localIdCounter, actionStateCount = actionStateCounter, actionStateMatchingIndex$jscomp$0 = actionStateMatchingIndex;
                if (type.contextTypes) {
                    var _componentName$jscomp$0 = getComponentNameFromType(type) || "Unknown";
                    didWarnAboutContextTypes[_componentName$jscomp$0] || (didWarnAboutContextTypes[_componentName$jscomp$0] = !0, console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)", _componentName$jscomp$0));
                }
                type && type.childContextTypes && console.error("childContextTypes cannot be defined on a function component.\n  %s.childContextTypes = ...", type.displayName || type.name || "Component");
                if ("function" === typeof type.getDerivedStateFromProps) {
                    var _componentName2 = getComponentNameFromType(type) || "Unknown";
                    didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2] || (console.error("%s: Function components do not support getDerivedStateFromProps.", _componentName2), didWarnAboutGetDerivedStateOnFunctionComponent[_componentName2] = !0);
                }
                if ("object" === typeof type.contextType && null !== type.contextType) {
                    var _componentName3 = getComponentNameFromType(type) || "Unknown";
                    didWarnAboutContextTypeOnFunctionComponent[_componentName3] || (console.error("%s: Function components do not support contextType.", _componentName3), didWarnAboutContextTypeOnFunctionComponent[_componentName3] = !0);
                }
                finishFunctionComponent(request, task, keyPath, value, hasId, actionStateCount, actionStateMatchingIndex$jscomp$0);
            }
        } else if ("string" === typeof type) {
            var segment = task.blockedSegment;
            if (null === segment) {
                var children = props.children, prevContext = task.formatContext, prevKeyPath$jscomp$0 = task.keyPath;
                task.formatContext = getChildFormatContext(prevContext, type, props);
                task.keyPath = keyPath;
                renderNode(request, task, children, -1);
                task.formatContext = prevContext;
                task.keyPath = prevKeyPath$jscomp$0;
            } else {
                var _children = pushStartInstance(segment.chunks, type, props, request.resumableState, request.renderState, task.blockedPreamble, task.hoistableState, task.formatContext, segment.lastPushedText, task.isFallback);
                segment.lastPushedText = !1;
                var _prevContext = task.formatContext, _prevKeyPath2 = task.keyPath;
                task.keyPath = keyPath;
                if ((task.formatContext = getChildFormatContext(_prevContext, type, props)).insertionMode === HTML_HEAD_MODE) {
                    var preambleSegment = createPendingSegment(request, 0, null, task.formatContext, !1, !1);
                    segment.preambleChildren.push(preambleSegment);
                    var preambleTask = createRenderTask(request, null, _children, -1, task.blockedBoundary, preambleSegment, task.blockedPreamble, task.hoistableState, request.abortableTasks, task.keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback, emptyContextObject, task.debugTask);
                    pushComponentStack(preambleTask);
                    request.pingedTasks.push(preambleTask);
                } else renderNode(request, task, _children, -1);
                task.formatContext = _prevContext;
                task.keyPath = _prevKeyPath2;
                a: {
                    var target = segment.chunks, resumableState = request.resumableState;
                    switch(type){
                        case "title":
                        case "style":
                        case "script":
                        case "area":
                        case "base":
                        case "br":
                        case "col":
                        case "embed":
                        case "hr":
                        case "img":
                        case "input":
                        case "keygen":
                        case "link":
                        case "meta":
                        case "param":
                        case "source":
                        case "track":
                        case "wbr":
                            break a;
                        case "body":
                            if (_prevContext.insertionMode <= HTML_HTML_MODE) {
                                resumableState.hasBody = !0;
                                break a;
                            }
                            break;
                        case "html":
                            if (_prevContext.insertionMode === ROOT_HTML_MODE) {
                                resumableState.hasHtml = !0;
                                break a;
                            }
                            break;
                        case "head":
                            if (_prevContext.insertionMode <= HTML_HTML_MODE) break a;
                    }
                    target.push(endChunkForTag(type));
                }
                segment.lastPushedText = !1;
            }
        } else {
            switch(type){
                case REACT_LEGACY_HIDDEN_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_FRAGMENT_TYPE:
                    var prevKeyPath$jscomp$1 = task.keyPath;
                    task.keyPath = keyPath;
                    renderNodeDestructive(request, task, props.children, -1);
                    task.keyPath = prevKeyPath$jscomp$1;
                    return;
                case REACT_ACTIVITY_TYPE:
                    if ("hidden" !== props.mode) {
                        var prevKeyPath$jscomp$2 = task.keyPath;
                        task.keyPath = keyPath;
                        renderNodeDestructive(request, task, props.children, -1);
                        task.keyPath = prevKeyPath$jscomp$2;
                    }
                    return;
                case REACT_SUSPENSE_LIST_TYPE:
                    var _prevKeyPath3 = task.keyPath;
                    task.keyPath = keyPath;
                    renderNodeDestructive(request, task, props.children, -1);
                    task.keyPath = _prevKeyPath3;
                    return;
                case REACT_VIEW_TRANSITION_TYPE:
                case REACT_SCOPE_TYPE:
                    throw Error("ReactDOMServer does not yet support scope components.");
                case REACT_SUSPENSE_TYPE:
                    a: if (null !== task.replay) {
                        var _prevKeyPath = task.keyPath;
                        task.keyPath = keyPath;
                        var _content = props.children;
                        try {
                            renderNode(request, task, _content, -1);
                        } finally{
                            task.keyPath = _prevKeyPath;
                        }
                    } else {
                        var prevKeyPath$jscomp$3 = task.keyPath, parentBoundary = task.blockedBoundary, parentPreamble = task.blockedPreamble, parentHoistableState = task.hoistableState, parentSegment = task.blockedSegment, fallback = props.fallback, content = props.children, fallbackAbortSet = new Set();
                        var newBoundary = task.formatContext.insertionMode < HTML_MODE ? createSuspenseBoundary(request, fallbackAbortSet, createPreambleState(), createPreambleState()) : createSuspenseBoundary(request, fallbackAbortSet, null, null);
                        null !== request.trackedPostpones && (newBoundary.trackedContentKeyPath = keyPath);
                        var boundarySegment = createPendingSegment(request, parentSegment.chunks.length, newBoundary, task.formatContext, !1, !1);
                        parentSegment.children.push(boundarySegment);
                        parentSegment.lastPushedText = !1;
                        var contentRootSegment = createPendingSegment(request, 0, null, task.formatContext, !1, !1);
                        contentRootSegment.parentFlushed = !0;
                        if (null !== request.trackedPostpones) {
                            var fallbackKeyPath = [
                                keyPath[0],
                                "Suspense Fallback",
                                keyPath[2]
                            ], fallbackReplayNode = [
                                fallbackKeyPath[1],
                                fallbackKeyPath[2],
                                [],
                                null
                            ];
                            request.trackedPostpones.workingMap.set(fallbackKeyPath, fallbackReplayNode);
                            newBoundary.trackedFallbackNode = fallbackReplayNode;
                            task.blockedSegment = boundarySegment;
                            task.blockedPreamble = newBoundary.fallbackPreamble;
                            task.keyPath = fallbackKeyPath;
                            boundarySegment.status = 6;
                            try {
                                renderNode(request, task, fallback, -1), pushSegmentFinale(boundarySegment.chunks, request.renderState, boundarySegment.lastPushedText, boundarySegment.textEmbedded), boundarySegment.status = COMPLETED;
                            } catch (thrownValue) {
                                throw boundarySegment.status = 12 === request.status ? 3 : 4, thrownValue;
                            } finally{
                                task.blockedSegment = parentSegment, task.blockedPreamble = parentPreamble, task.keyPath = prevKeyPath$jscomp$3;
                            }
                            var suspendedPrimaryTask = createRenderTask(request, null, content, -1, newBoundary, contentRootSegment, newBoundary.contentPreamble, newBoundary.contentState, task.abortSet, keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback, emptyContextObject, task.debugTask);
                            pushComponentStack(suspendedPrimaryTask);
                            request.pingedTasks.push(suspendedPrimaryTask);
                        } else {
                            task.blockedBoundary = newBoundary;
                            task.blockedPreamble = newBoundary.contentPreamble;
                            task.hoistableState = newBoundary.contentState;
                            task.blockedSegment = contentRootSegment;
                            task.keyPath = keyPath;
                            contentRootSegment.status = 6;
                            try {
                                if (renderNode(request, task, content, -1), pushSegmentFinale(contentRootSegment.chunks, request.renderState, contentRootSegment.lastPushedText, contentRootSegment.textEmbedded), contentRootSegment.status = COMPLETED, queueCompletedSegment(newBoundary, contentRootSegment), 0 === newBoundary.pendingTasks && newBoundary.status === PENDING) {
                                    newBoundary.status = COMPLETED;
                                    0 === request.pendingRootTasks && task.blockedPreamble && preparePreamble(request);
                                    break a;
                                }
                            } catch (thrownValue$2) {
                                newBoundary.status = CLIENT_RENDERED;
                                if (12 === request.status) {
                                    contentRootSegment.status = 3;
                                    var error = request.fatalError;
                                } else contentRootSegment.status = 4, error = thrownValue$2;
                                var thrownInfo = getThrownInfo(task.componentStack);
                                var errorDigest = logRecoverableError(request, error, thrownInfo, task.debugTask);
                                encodeErrorForBoundary(newBoundary, errorDigest, error, thrownInfo, !1);
                                untrackBoundary(request, newBoundary);
                            } finally{
                                task.blockedBoundary = parentBoundary, task.blockedPreamble = parentPreamble, task.hoistableState = parentHoistableState, task.blockedSegment = parentSegment, task.keyPath = prevKeyPath$jscomp$3;
                            }
                            var suspendedFallbackTask = createRenderTask(request, null, fallback, -1, parentBoundary, boundarySegment, newBoundary.fallbackPreamble, newBoundary.fallbackState, fallbackAbortSet, [
                                keyPath[0],
                                "Suspense Fallback",
                                keyPath[2]
                            ], task.formatContext, task.context, task.treeContext, task.componentStack, !0, emptyContextObject, task.debugTask);
                            pushComponentStack(suspendedFallbackTask);
                            request.pingedTasks.push(suspendedFallbackTask);
                        }
                    }
                    return;
            }
            if ("object" === typeof type && null !== type) switch(type.$$typeof){
                case REACT_FORWARD_REF_TYPE:
                    if ("ref" in props) {
                        var propsWithoutRef = {};
                        for(var key in props)"ref" !== key && (propsWithoutRef[key] = props[key]);
                    } else propsWithoutRef = props;
                    var children$jscomp$0 = renderWithHooks(request, task, keyPath, type.render, propsWithoutRef, ref);
                    finishFunctionComponent(request, task, keyPath, children$jscomp$0, 0 !== localIdCounter, actionStateCounter, actionStateMatchingIndex);
                    return;
                case REACT_MEMO_TYPE:
                    renderElement(request, task, keyPath, type.type, props, ref);
                    return;
                case REACT_PROVIDER_TYPE:
                case REACT_CONTEXT_TYPE:
                    var value$jscomp$0 = props.value, children$jscomp$1 = props.children;
                    var prevSnapshot = task.context;
                    var prevKeyPath$jscomp$4 = task.keyPath;
                    var prevValue = type._currentValue2;
                    type._currentValue2 = value$jscomp$0;
                    void 0 !== type._currentRenderer2 && null !== type._currentRenderer2 && type._currentRenderer2 !== rendererSigil && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
                    type._currentRenderer2 = rendererSigil;
                    var prevNode = currentActiveSnapshot, newNode = {
                        parent: prevNode,
                        depth: null === prevNode ? 0 : prevNode.depth + 1,
                        context: type,
                        parentValue: prevValue,
                        value: value$jscomp$0
                    };
                    currentActiveSnapshot = newNode;
                    task.context = newNode;
                    task.keyPath = keyPath;
                    renderNodeDestructive(request, task, children$jscomp$1, -1);
                    var prevSnapshot$jscomp$0 = currentActiveSnapshot;
                    if (null === prevSnapshot$jscomp$0) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
                    prevSnapshot$jscomp$0.context !== type && console.error("The parent context is not the expected context. This is probably a bug in React.");
                    prevSnapshot$jscomp$0.context._currentValue2 = prevSnapshot$jscomp$0.parentValue;
                    void 0 !== type._currentRenderer2 && null !== type._currentRenderer2 && type._currentRenderer2 !== rendererSigil && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.");
                    type._currentRenderer2 = rendererSigil;
                    var JSCompiler_inline_result$jscomp$0 = currentActiveSnapshot = prevSnapshot$jscomp$0.parent;
                    task.context = JSCompiler_inline_result$jscomp$0;
                    task.keyPath = prevKeyPath$jscomp$4;
                    prevSnapshot !== task.context && console.error("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
                    return;
                case REACT_CONSUMER_TYPE:
                    var context$jscomp$0 = type._context, render = props.children;
                    "function" !== typeof render && console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
                    var newChildren = render(context$jscomp$0._currentValue2), prevKeyPath$jscomp$5 = task.keyPath;
                    task.keyPath = keyPath;
                    renderNodeDestructive(request, task, newChildren, -1);
                    task.keyPath = prevKeyPath$jscomp$5;
                    return;
                case REACT_LAZY_TYPE:
                    var Component = callLazyInitInDEV(type);
                    if (12 === request.status) throw null;
                    renderElement(request, task, keyPath, Component, props, ref);
                    return;
            }
            var info = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == type ? type : typeof type) + "." + info));
        }
    }
    function resumeNode(request, task, segmentId, node, childIndex) {
        var prevReplay = task.replay, blockedBoundary = task.blockedBoundary, resumedSegment = createPendingSegment(request, 0, null, task.formatContext, !1, !1);
        resumedSegment.id = segmentId;
        resumedSegment.parentFlushed = !0;
        try {
            task.replay = null, task.blockedSegment = resumedSegment, renderNode(request, task, node, childIndex), resumedSegment.status = COMPLETED, null === blockedBoundary ? request.completedRootSegment = resumedSegment : (queueCompletedSegment(blockedBoundary, resumedSegment), blockedBoundary.parentFlushed && request.partialBoundaries.push(blockedBoundary));
        } finally{
            task.replay = prevReplay, task.blockedSegment = null;
        }
    }
    function replayElement(request, task, keyPath, name, keyOrIndex, childIndex, type, props, ref, replay) {
        childIndex = replay.nodes;
        for(var i = 0; i < childIndex.length; i++){
            var node = childIndex[i];
            if (keyOrIndex === node[1]) {
                if (4 === node.length) {
                    if (null !== name && name !== node[0]) throw Error("Expected the resume to render <" + node[0] + "> in this slot but instead it rendered <" + name + ">. The tree doesn't match so React will fallback to client rendering.");
                    var childNodes = node[2];
                    node = node[3];
                    name = task.node;
                    task.replay = {
                        nodes: childNodes,
                        slots: node,
                        pendingTasks: 1
                    };
                    try {
                        renderElement(request, task, keyPath, type, props, ref);
                        if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                        task.replay.pendingTasks--;
                    } catch (x) {
                        if ("object" === typeof x && null !== x && (x === SuspenseException || "function" === typeof x.then)) throw task.node === name && (task.replay = replay), x;
                        task.replay.pendingTasks--;
                        type = getThrownInfo(task.componentStack);
                        props = request;
                        request = task.blockedBoundary;
                        keyPath = x;
                        ref = node;
                        node = logRecoverableError(props, keyPath, type, task.debugTask);
                        abortRemainingReplayNodes(props, request, childNodes, ref, keyPath, node, type, !1);
                    }
                    task.replay = replay;
                } else {
                    if (type !== REACT_SUSPENSE_TYPE) throw Error("Expected the resume to render <Suspense> in this slot but instead it rendered <" + (getComponentNameFromType(type) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering.");
                    a: {
                        replay = void 0;
                        type = node[5];
                        ref = node[2];
                        name = node[3];
                        keyOrIndex = null === node[4] ? [] : node[4][2];
                        node = null === node[4] ? null : node[4][3];
                        var prevKeyPath = task.keyPath, previousReplaySet = task.replay, parentBoundary = task.blockedBoundary, parentHoistableState = task.hoistableState, content = props.children, fallback = props.fallback, fallbackAbortSet = new Set();
                        props = task.formatContext.insertionMode < HTML_MODE ? createSuspenseBoundary(request, fallbackAbortSet, createPreambleState(), createPreambleState()) : createSuspenseBoundary(request, fallbackAbortSet, null, null);
                        props.parentFlushed = !0;
                        props.rootSegmentID = type;
                        task.blockedBoundary = props;
                        task.hoistableState = props.contentState;
                        task.keyPath = keyPath;
                        task.replay = {
                            nodes: ref,
                            slots: name,
                            pendingTasks: 1
                        };
                        try {
                            renderNode(request, task, content, -1);
                            if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                            task.replay.pendingTasks--;
                            if (0 === props.pendingTasks && props.status === PENDING) {
                                props.status = COMPLETED;
                                request.completedBoundaries.push(props);
                                break a;
                            }
                        } catch (error) {
                            props.status = CLIENT_RENDERED, childNodes = getThrownInfo(task.componentStack), replay = logRecoverableError(request, error, childNodes, task.debugTask), encodeErrorForBoundary(props, replay, error, childNodes, !1), task.replay.pendingTasks--, request.clientRenderedBoundaries.push(props);
                        } finally{
                            task.blockedBoundary = parentBoundary, task.hoistableState = parentHoistableState, task.replay = previousReplaySet, task.keyPath = prevKeyPath;
                        }
                        props = createReplayTask(request, null, {
                            nodes: keyOrIndex,
                            slots: node,
                            pendingTasks: 0
                        }, fallback, -1, parentBoundary, props.fallbackState, fallbackAbortSet, [
                            keyPath[0],
                            "Suspense Fallback",
                            keyPath[2]
                        ], task.formatContext, task.context, task.treeContext, task.componentStack, !0, emptyContextObject, task.debugTask);
                        pushComponentStack(props);
                        request.pingedTasks.push(props);
                    }
                }
                childIndex.splice(i, 1);
                break;
            }
        }
    }
    function renderNodeDestructive(request, task, node, childIndex) {
        null !== task.replay && "number" === typeof task.replay.slots ? resumeNode(request, task, task.replay.slots, node, childIndex) : (task.node = node, task.childIndex = childIndex, node = task.componentStack, childIndex = task.debugTask, pushComponentStack(task), retryNode(request, task), task.componentStack = node, task.debugTask = childIndex);
    }
    function retryNode(request, task) {
        var node = task.node, childIndex = task.childIndex;
        if (null !== node) {
            if ("object" === typeof node) {
                switch(node.$$typeof){
                    case REACT_ELEMENT_TYPE:
                        var type = node.type, key = node.key;
                        node = node.props;
                        var refProp = node.ref;
                        refProp = void 0 !== refProp ? refProp : null;
                        var debugTask = task.debugTask, name = getComponentNameFromType(type);
                        key = null == key ? -1 === childIndex ? 0 : childIndex : key;
                        var keyPath = [
                            task.keyPath,
                            name,
                            key
                        ];
                        null !== task.replay ? debugTask ? debugTask.run(replayElement.bind(null, request, task, keyPath, name, key, childIndex, type, node, refProp, task.replay)) : replayElement(request, task, keyPath, name, key, childIndex, type, node, refProp, task.replay) : debugTask ? debugTask.run(renderElement.bind(null, request, task, keyPath, type, node, refProp)) : renderElement(request, task, keyPath, type, node, refProp);
                        return;
                    case REACT_PORTAL_TYPE:
                        throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
                    case REACT_LAZY_TYPE:
                        node = callLazyInitInDEV(node);
                        if (12 === request.status) throw null;
                        renderNodeDestructive(request, task, node, childIndex);
                        return;
                }
                if (isArrayImpl(node)) {
                    renderChildrenArray(request, task, node, childIndex);
                    return;
                }
                null === node || "object" !== typeof node ? key = null : (type = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], key = "function" === typeof type ? type : null);
                if (key && (type = key.call(node))) {
                    if (type === node) {
                        if (-1 !== childIndex || null === task.componentStack || "function" !== typeof task.componentStack.type || "[object GeneratorFunction]" !== Object.prototype.toString.call(task.componentStack.type) || "[object Generator]" !== Object.prototype.toString.call(type)) didWarnAboutGenerators || console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."), didWarnAboutGenerators = !0;
                    } else node.entries !== key || didWarnAboutMaps || (console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0);
                    node = type.next();
                    if (!node.done) {
                        key = [];
                        do key.push(node.value), node = type.next();
                        while (!node.done);
                        renderChildrenArray(request, task, key, childIndex);
                    }
                    return;
                }
                if ("function" === typeof node.then) return task.thenableState = null, renderNodeDestructive(request, task, unwrapThenable(node), childIndex);
                if (node.$$typeof === REACT_CONTEXT_TYPE) return renderNodeDestructive(request, task, node._currentValue2, childIndex);
                request = Object.prototype.toString.call(node);
                throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === request ? "object with keys {" + Object.keys(node).join(", ") + "}" : request) + "). If you meant to render a collection of children, use an array instead.");
            }
            "string" === typeof node ? (task = task.blockedSegment, null !== task && (task.lastPushedText = pushTextInstance(task.chunks, node, request.renderState, task.lastPushedText))) : "number" === typeof node || "bigint" === typeof node ? (task = task.blockedSegment, null !== task && (task.lastPushedText = pushTextInstance(task.chunks, "" + node, request.renderState, task.lastPushedText))) : ("function" === typeof node && (request = node.displayName || node.name || "Component", console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.", request, request)), "symbol" === typeof node && console.error("Symbols are not valid as a React child.\n  %s", String(node)));
        }
    }
    function renderChildrenArray(request, task, children, childIndex) {
        var prevKeyPath = task.keyPath, previousComponentStack = task.componentStack;
        var previousDebugTask = task.debugTask;
        pushServerComponentStack(task, task.node._debugInfo);
        if (-1 !== childIndex && (task.keyPath = [
            task.keyPath,
            "Fragment",
            childIndex
        ], null !== task.replay)) {
            for(var replay = task.replay, replayNodes = replay.nodes, j = 0; j < replayNodes.length; j++){
                var node = replayNodes[j];
                if (node[1] === childIndex) {
                    childIndex = node[2];
                    node = node[3];
                    task.replay = {
                        nodes: childIndex,
                        slots: node,
                        pendingTasks: 1
                    };
                    try {
                        renderChildrenArray(request, task, children, -1);
                        if (1 === task.replay.pendingTasks && 0 < task.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                        task.replay.pendingTasks--;
                    } catch (x) {
                        if ("object" === typeof x && null !== x && (x === SuspenseException || "function" === typeof x.then)) throw x;
                        task.replay.pendingTasks--;
                        var thrownInfo = getThrownInfo(task.componentStack);
                        children = task.blockedBoundary;
                        var error = x, resumeSlots = node;
                        node = logRecoverableError(request, error, thrownInfo, task.debugTask);
                        abortRemainingReplayNodes(request, children, childIndex, resumeSlots, error, node, thrownInfo, !1);
                    }
                    task.replay = replay;
                    replayNodes.splice(j, 1);
                    break;
                }
            }
            task.keyPath = prevKeyPath;
            task.componentStack = previousComponentStack;
            task.debugTask = previousDebugTask;
            return;
        }
        replay = task.treeContext;
        replayNodes = children.length;
        if (null !== task.replay && (j = task.replay.slots, null !== j && "object" === typeof j)) {
            for(childIndex = 0; childIndex < replayNodes; childIndex++)node = children[childIndex], task.treeContext = pushTreeContext(replay, replayNodes, childIndex), error = j[childIndex], "number" === typeof error ? (resumeNode(request, task, error, node, childIndex), delete j[childIndex]) : renderNode(request, task, node, childIndex);
            task.treeContext = replay;
            task.keyPath = prevKeyPath;
            task.componentStack = previousComponentStack;
            task.debugTask = previousDebugTask;
            return;
        }
        for(j = 0; j < replayNodes; j++){
            childIndex = children[j];
            resumeSlots = request;
            node = task;
            error = childIndex;
            if (null !== error && "object" === typeof error && (error.$$typeof === REACT_ELEMENT_TYPE || error.$$typeof === REACT_PORTAL_TYPE) && error._store && (!error._store.validated && null == error.key || 2 === error._store.validated)) {
                if ("object" !== typeof error._store) throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
                error._store.validated = 1;
                thrownInfo = resumeSlots.didWarnForKey;
                null == thrownInfo && (thrownInfo = resumeSlots.didWarnForKey = new WeakSet());
                resumeSlots = node.componentStack;
                if (null !== resumeSlots && !thrownInfo.has(resumeSlots)) {
                    thrownInfo.add(resumeSlots);
                    var componentName = getComponentNameFromType(error.type);
                    thrownInfo = error._owner;
                    var parentOwner = resumeSlots.owner;
                    resumeSlots = "";
                    if (parentOwner && "undefined" !== typeof parentOwner.type) {
                        var name = getComponentNameFromType(parentOwner.type);
                        name && (resumeSlots = "\n\nCheck the render method of `" + name + "`.");
                    }
                    resumeSlots || componentName && (resumeSlots = "\n\nCheck the top-level render call using <" + componentName + ">.");
                    componentName = "";
                    null != thrownInfo && parentOwner !== thrownInfo && (parentOwner = null, "undefined" !== typeof thrownInfo.type ? parentOwner = getComponentNameFromType(thrownInfo.type) : "string" === typeof thrownInfo.name && (parentOwner = thrownInfo.name), parentOwner && (componentName = " It was passed a child from " + parentOwner + "."));
                    thrownInfo = node.componentStack;
                    node.componentStack = {
                        parent: node.componentStack,
                        type: error.type,
                        owner: error._owner,
                        stack: error._debugStack
                    };
                    console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', resumeSlots, componentName);
                    node.componentStack = thrownInfo;
                }
            }
            task.treeContext = pushTreeContext(replay, replayNodes, j);
            renderNode(request, task, childIndex, j);
        }
        task.treeContext = replay;
        task.keyPath = prevKeyPath;
        task.componentStack = previousComponentStack;
        task.debugTask = previousDebugTask;
    }
    function untrackBoundary(request, boundary) {
        request = request.trackedPostpones;
        null !== request && (boundary = boundary.trackedContentKeyPath, null !== boundary && (boundary = request.workingMap.get(boundary), void 0 !== boundary && (boundary.length = 4, boundary[2] = [], boundary[3] = null)));
    }
    function spawnNewSuspendedReplayTask(request, task, thenableState) {
        return createReplayTask(request, thenableState, task.replay, task.node, task.childIndex, task.blockedBoundary, task.hoistableState, task.abortSet, task.keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback, emptyContextObject, task.debugTask);
    }
    function spawnNewSuspendedRenderTask(request, task, thenableState) {
        var segment = task.blockedSegment, newSegment = createPendingSegment(request, segment.chunks.length, null, task.formatContext, segment.lastPushedText, !0);
        segment.children.push(newSegment);
        segment.lastPushedText = !1;
        return createRenderTask(request, thenableState, task.node, task.childIndex, task.blockedBoundary, newSegment, task.blockedPreamble, task.hoistableState, task.abortSet, task.keyPath, task.formatContext, task.context, task.treeContext, task.componentStack, task.isFallback, emptyContextObject, task.debugTask);
    }
    function renderNode(request, task, node, childIndex) {
        var previousFormatContext = task.formatContext, previousContext = task.context, previousKeyPath = task.keyPath, previousTreeContext = task.treeContext, previousComponentStack = task.componentStack, previousDebugTask = task.debugTask, segment = task.blockedSegment;
        if (null === segment) try {
            return renderNodeDestructive(request, task, node, childIndex);
        } catch (thrownValue) {
            if (resetHooksState(), node = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue, "object" === typeof node && null !== node) {
                if ("function" === typeof node.then) {
                    childIndex = getThenableStateAfterSuspending();
                    request = spawnNewSuspendedReplayTask(request, task, childIndex).ping;
                    node.then(request, request);
                    task.formatContext = previousFormatContext;
                    task.context = previousContext;
                    task.keyPath = previousKeyPath;
                    task.treeContext = previousTreeContext;
                    task.componentStack = previousComponentStack;
                    task.debugTask = previousDebugTask;
                    switchContext(previousContext);
                    return;
                }
                if ("Maximum call stack size exceeded" === node.message) {
                    node = getThenableStateAfterSuspending();
                    node = spawnNewSuspendedReplayTask(request, task, node);
                    request.pingedTasks.push(node);
                    task.formatContext = previousFormatContext;
                    task.context = previousContext;
                    task.keyPath = previousKeyPath;
                    task.treeContext = previousTreeContext;
                    task.componentStack = previousComponentStack;
                    task.debugTask = previousDebugTask;
                    switchContext(previousContext);
                    return;
                }
            }
        }
        else {
            var childrenLength = segment.children.length, chunkLength = segment.chunks.length;
            try {
                return renderNodeDestructive(request, task, node, childIndex);
            } catch (thrownValue$3) {
                if (resetHooksState(), segment.children.length = childrenLength, segment.chunks.length = chunkLength, node = thrownValue$3 === SuspenseException ? getSuspendedThenable() : thrownValue$3, "object" === typeof node && null !== node) {
                    if ("function" === typeof node.then) {
                        childIndex = getThenableStateAfterSuspending();
                        request = spawnNewSuspendedRenderTask(request, task, childIndex).ping;
                        node.then(request, request);
                        task.formatContext = previousFormatContext;
                        task.context = previousContext;
                        task.keyPath = previousKeyPath;
                        task.treeContext = previousTreeContext;
                        task.componentStack = previousComponentStack;
                        task.debugTask = previousDebugTask;
                        switchContext(previousContext);
                        return;
                    }
                    if ("Maximum call stack size exceeded" === node.message) {
                        node = getThenableStateAfterSuspending();
                        node = spawnNewSuspendedRenderTask(request, task, node);
                        request.pingedTasks.push(node);
                        task.formatContext = previousFormatContext;
                        task.context = previousContext;
                        task.keyPath = previousKeyPath;
                        task.treeContext = previousTreeContext;
                        task.componentStack = previousComponentStack;
                        task.debugTask = previousDebugTask;
                        switchContext(previousContext);
                        return;
                    }
                }
            }
        }
        task.formatContext = previousFormatContext;
        task.context = previousContext;
        task.keyPath = previousKeyPath;
        task.treeContext = previousTreeContext;
        switchContext(previousContext);
        throw node;
    }
    function abortTaskSoft(task) {
        var boundary = task.blockedBoundary;
        task = task.blockedSegment;
        null !== task && (task.status = 3, finishedTask(this, boundary, task));
    }
    function abortRemainingReplayNodes(request$jscomp$0, boundary, nodes, slots, error$jscomp$0, errorDigest$jscomp$0, errorInfo$jscomp$0, aborted) {
        for(var i = 0; i < nodes.length; i++){
            var node = nodes[i];
            if (4 === node.length) abortRemainingReplayNodes(request$jscomp$0, boundary, node[2], node[3], error$jscomp$0, errorDigest$jscomp$0, errorInfo$jscomp$0, aborted);
            else {
                var request = request$jscomp$0;
                node = node[5];
                var error = error$jscomp$0, errorDigest = errorDigest$jscomp$0, errorInfo = errorInfo$jscomp$0, wasAborted = aborted, resumedBoundary = createSuspenseBoundary(request, new Set(), null, null);
                resumedBoundary.parentFlushed = !0;
                resumedBoundary.rootSegmentID = node;
                resumedBoundary.status = CLIENT_RENDERED;
                encodeErrorForBoundary(resumedBoundary, errorDigest, error, errorInfo, wasAborted);
                resumedBoundary.parentFlushed && request.clientRenderedBoundaries.push(resumedBoundary);
            }
        }
        nodes.length = 0;
        if (null !== slots) {
            if (null === boundary) throw Error("We should not have any resumable nodes in the shell. This is a bug in React.");
            boundary.status !== CLIENT_RENDERED && (boundary.status = CLIENT_RENDERED, encodeErrorForBoundary(boundary, errorDigest$jscomp$0, error$jscomp$0, errorInfo$jscomp$0, aborted), boundary.parentFlushed && request$jscomp$0.clientRenderedBoundaries.push(boundary));
            if ("object" === typeof slots) for(var index in slots)delete slots[index];
        }
    }
    function abortTask(task, request, error) {
        var boundary = task.blockedBoundary, segment = task.blockedSegment;
        if (null !== segment) {
            if (6 === segment.status) return;
            segment.status = 3;
        }
        segment = getThrownInfo(task.componentStack);
        if (null === boundary) {
            if (13 !== request.status && request.status !== CLOSED) {
                boundary = task.replay;
                if (null === boundary) {
                    logRecoverableError(request, error, segment, null);
                    fatalError(request, error, segment, null);
                    return;
                }
                boundary.pendingTasks--;
                0 === boundary.pendingTasks && 0 < boundary.nodes.length && (task = logRecoverableError(request, error, segment, null), abortRemainingReplayNodes(request, null, boundary.nodes, boundary.slots, error, task, segment, !0));
                request.pendingRootTasks--;
                0 === request.pendingRootTasks && completeShell(request);
            }
        } else boundary.pendingTasks--, boundary.status !== CLIENT_RENDERED && (boundary.status = CLIENT_RENDERED, task = logRecoverableError(request, error, segment, null), boundary.status = CLIENT_RENDERED, encodeErrorForBoundary(boundary, task, error, segment, !0), untrackBoundary(request, boundary), boundary.parentFlushed && request.clientRenderedBoundaries.push(boundary)), boundary.fallbackAbortableTasks.forEach(function(fallbackTask) {
            return abortTask(fallbackTask, request, error);
        }), boundary.fallbackAbortableTasks.clear();
        request.allPendingTasks--;
        0 === request.allPendingTasks && completeAll(request);
    }
    function safelyEmitEarlyPreloads(request, shellComplete) {
        try {
            var renderState = request.renderState, onHeaders = renderState.onHeaders;
            if (onHeaders) {
                var headers = renderState.headers;
                if (headers) {
                    renderState.headers = null;
                    var linkHeader = headers.preconnects;
                    headers.fontPreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.fontPreloads);
                    headers.highImagePreloads && (linkHeader && (linkHeader += ", "), linkHeader += headers.highImagePreloads);
                    if (!shellComplete) {
                        var queueIter = renderState.styles.values(), queueStep = queueIter.next();
                        b: for(; 0 < headers.remainingCapacity && !queueStep.done; queueStep = queueIter.next())for(var sheetIter = queueStep.value.sheets.values(), sheetStep = sheetIter.next(); 0 < headers.remainingCapacity && !sheetStep.done; sheetStep = sheetIter.next()){
                            var sheet = sheetStep.value, props = sheet.props, key = props.href, props$jscomp$0 = sheet.props;
                            var header = getPreloadAsHeader(props$jscomp$0.href, "style", {
                                crossOrigin: props$jscomp$0.crossOrigin,
                                integrity: props$jscomp$0.integrity,
                                nonce: props$jscomp$0.nonce,
                                type: props$jscomp$0.type,
                                fetchPriority: props$jscomp$0.fetchPriority,
                                referrerPolicy: props$jscomp$0.referrerPolicy,
                                media: props$jscomp$0.media
                            });
                            if (0 <= (headers.remainingCapacity -= header.length + 2)) renderState.resets.style[key] = PRELOAD_NO_CREDS, linkHeader && (linkHeader += ", "), linkHeader += header, renderState.resets.style[key] = "string" === typeof props.crossOrigin || "string" === typeof props.integrity ? [
                                props.crossOrigin,
                                props.integrity
                            ] : PRELOAD_NO_CREDS;
                            else break b;
                        }
                    }
                    linkHeader ? onHeaders({
                        Link: linkHeader
                    }) : onHeaders({});
                }
            }
        } catch (error) {
            logRecoverableError(request, error, {}, null);
        }
    }
    function completeShell(request) {
        null === request.trackedPostpones && safelyEmitEarlyPreloads(request, !0);
        null === request.trackedPostpones && preparePreamble(request);
        request.onShellError = noop;
        request = request.onShellReady;
        request();
    }
    function completeAll(request) {
        safelyEmitEarlyPreloads(request, null === request.trackedPostpones ? !0 : null === request.completedRootSegment || request.completedRootSegment.status !== POSTPONED);
        preparePreamble(request);
        request = request.onAllReady;
        request();
    }
    function queueCompletedSegment(boundary, segment) {
        if (0 === segment.chunks.length && 1 === segment.children.length && null === segment.children[0].boundary && -1 === segment.children[0].id) {
            var childSegment = segment.children[0];
            childSegment.id = segment.id;
            childSegment.parentFlushed = !0;
            childSegment.status === COMPLETED && queueCompletedSegment(boundary, childSegment);
        } else boundary.completedSegments.push(segment);
    }
    function finishedTask(request, boundary, segment) {
        if (null === boundary) {
            if (null !== segment && segment.parentFlushed) {
                if (null !== request.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
                request.completedRootSegment = segment;
            }
            request.pendingRootTasks--;
            0 === request.pendingRootTasks && completeShell(request);
        } else boundary.pendingTasks--, boundary.status !== CLIENT_RENDERED && (0 === boundary.pendingTasks ? (boundary.status === PENDING && (boundary.status = COMPLETED), null !== segment && segment.parentFlushed && segment.status === COMPLETED && queueCompletedSegment(boundary, segment), boundary.parentFlushed && request.completedBoundaries.push(boundary), boundary.status === COMPLETED && (boundary.fallbackAbortableTasks.forEach(abortTaskSoft, request), boundary.fallbackAbortableTasks.clear(), 0 === request.pendingRootTasks && null === request.trackedPostpones && null !== boundary.contentPreamble && preparePreamble(request))) : null !== segment && segment.parentFlushed && segment.status === COMPLETED && (queueCompletedSegment(boundary, segment), 1 === boundary.completedSegments.length && boundary.parentFlushed && request.partialBoundaries.push(boundary)));
        request.allPendingTasks--;
        0 === request.allPendingTasks && completeAll(request);
    }
    function performWork(request$jscomp$2) {
        if (request$jscomp$2.status !== CLOSED && 13 !== request$jscomp$2.status) {
            var prevContext = currentActiveSnapshot, prevDispatcher = ReactSharedInternals.H;
            ReactSharedInternals.H = HooksDispatcher;
            var prevAsyncDispatcher = ReactSharedInternals.A;
            ReactSharedInternals.A = DefaultAsyncDispatcher;
            var prevRequest = currentRequest;
            currentRequest = request$jscomp$2;
            var prevGetCurrentStackImpl = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = getCurrentStackInDEV;
            var prevResumableState = currentResumableState;
            currentResumableState = request$jscomp$2.resumableState;
            try {
                var pingedTasks = request$jscomp$2.pingedTasks, i;
                for(i = 0; i < pingedTasks.length; i++){
                    var request = request$jscomp$2, task = pingedTasks[i], segment = task.blockedSegment;
                    if (null === segment) {
                        var prevTaskInDEV = void 0, request$jscomp$0 = request;
                        request = task;
                        if (0 !== request.replay.pendingTasks) {
                            switchContext(request.context);
                            prevTaskInDEV = currentTaskInDEV;
                            currentTaskInDEV = request;
                            try {
                                "number" === typeof request.replay.slots ? resumeNode(request$jscomp$0, request, request.replay.slots, request.node, request.childIndex) : retryNode(request$jscomp$0, request);
                                if (1 === request.replay.pendingTasks && 0 < request.replay.nodes.length) throw Error("Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering.");
                                request.replay.pendingTasks--;
                                request.abortSet.delete(request);
                                finishedTask(request$jscomp$0, request.blockedBoundary, null);
                            } catch (thrownValue) {
                                resetHooksState();
                                var x = thrownValue === SuspenseException ? getSuspendedThenable() : thrownValue;
                                if ("object" === typeof x && null !== x && "function" === typeof x.then) {
                                    var ping = request.ping;
                                    x.then(ping, ping);
                                    request.thenableState = getThenableStateAfterSuspending();
                                } else {
                                    request.replay.pendingTasks--;
                                    request.abortSet.delete(request);
                                    var errorInfo = getThrownInfo(request.componentStack), errorDigest = void 0, request$jscomp$1 = request$jscomp$0, boundary = request.blockedBoundary, error$jscomp$0 = 12 === request$jscomp$0.status ? request$jscomp$0.fatalError : x, errorInfo$jscomp$0 = errorInfo, replayNodes = request.replay.nodes, resumeSlots = request.replay.slots;
                                    errorDigest = logRecoverableError(request$jscomp$1, error$jscomp$0, errorInfo$jscomp$0, request.debugTask);
                                    abortRemainingReplayNodes(request$jscomp$1, boundary, replayNodes, resumeSlots, error$jscomp$0, errorDigest, errorInfo$jscomp$0, !1);
                                    request$jscomp$0.pendingRootTasks--;
                                    0 === request$jscomp$0.pendingRootTasks && completeShell(request$jscomp$0);
                                    request$jscomp$0.allPendingTasks--;
                                    0 === request$jscomp$0.allPendingTasks && completeAll(request$jscomp$0);
                                }
                            } finally{
                                currentTaskInDEV = prevTaskInDEV;
                            }
                        }
                    } else if (request$jscomp$0 = prevTaskInDEV = void 0, errorDigest = task, request$jscomp$1 = segment, request$jscomp$1.status === PENDING) {
                        request$jscomp$1.status = 6;
                        switchContext(errorDigest.context);
                        request$jscomp$0 = currentTaskInDEV;
                        currentTaskInDEV = errorDigest;
                        var childrenLength = request$jscomp$1.children.length, chunkLength = request$jscomp$1.chunks.length;
                        try {
                            retryNode(request, errorDigest), pushSegmentFinale(request$jscomp$1.chunks, request.renderState, request$jscomp$1.lastPushedText, request$jscomp$1.textEmbedded), errorDigest.abortSet.delete(errorDigest), request$jscomp$1.status = COMPLETED, finishedTask(request, errorDigest.blockedBoundary, request$jscomp$1);
                        } catch (thrownValue) {
                            resetHooksState();
                            request$jscomp$1.children.length = childrenLength;
                            request$jscomp$1.chunks.length = chunkLength;
                            var x$jscomp$0 = thrownValue === SuspenseException ? getSuspendedThenable() : 12 === request.status ? request.fatalError : thrownValue;
                            if ("object" === typeof x$jscomp$0 && null !== x$jscomp$0 && "function" === typeof x$jscomp$0.then) {
                                request$jscomp$1.status = PENDING;
                                errorDigest.thenableState = getThenableStateAfterSuspending();
                                var ping$jscomp$0 = errorDigest.ping;
                                x$jscomp$0.then(ping$jscomp$0, ping$jscomp$0);
                            } else {
                                var errorInfo$jscomp$1 = getThrownInfo(errorDigest.componentStack);
                                errorDigest.abortSet.delete(errorDigest);
                                request$jscomp$1.status = 4;
                                var boundary$jscomp$0 = errorDigest.blockedBoundary, debugTask = errorDigest.debugTask;
                                prevTaskInDEV = logRecoverableError(request, x$jscomp$0, errorInfo$jscomp$1, debugTask);
                                null === boundary$jscomp$0 ? fatalError(request, x$jscomp$0, errorInfo$jscomp$1, debugTask) : (boundary$jscomp$0.pendingTasks--, boundary$jscomp$0.status !== CLIENT_RENDERED && (boundary$jscomp$0.status = CLIENT_RENDERED, encodeErrorForBoundary(boundary$jscomp$0, prevTaskInDEV, x$jscomp$0, errorInfo$jscomp$1, !1), untrackBoundary(request, boundary$jscomp$0), boundary$jscomp$0.parentFlushed && request.clientRenderedBoundaries.push(boundary$jscomp$0), 0 === request.pendingRootTasks && null === request.trackedPostpones && null !== boundary$jscomp$0.contentPreamble && preparePreamble(request)));
                                request.allPendingTasks--;
                                0 === request.allPendingTasks && completeAll(request);
                            }
                        } finally{
                            currentTaskInDEV = request$jscomp$0;
                        }
                    }
                }
                pingedTasks.splice(0, i);
                null !== request$jscomp$2.destination && flushCompletedQueues(request$jscomp$2, request$jscomp$2.destination);
            } catch (error) {
                pingedTasks = {}, logRecoverableError(request$jscomp$2, error, pingedTasks, null), fatalError(request$jscomp$2, error, pingedTasks, null);
            } finally{
                currentResumableState = prevResumableState, ReactSharedInternals.H = prevDispatcher, ReactSharedInternals.A = prevAsyncDispatcher, ReactSharedInternals.getCurrentStack = prevGetCurrentStackImpl, prevDispatcher === HooksDispatcher && switchContext(prevContext), currentRequest = prevRequest;
            }
        }
    }
    function preparePreambleFromSubtree(request, segment, collectedPreambleSegments) {
        segment.preambleChildren.length && collectedPreambleSegments.push(segment.preambleChildren);
        for(var pendingPreambles = !1, i = 0; i < segment.children.length; i++)pendingPreambles = preparePreambleFromSegment(request, segment.children[i], collectedPreambleSegments) || pendingPreambles;
        return pendingPreambles;
    }
    function preparePreambleFromSegment(request, segment, collectedPreambleSegments) {
        var boundary = segment.boundary;
        if (null === boundary) return preparePreambleFromSubtree(request, segment, collectedPreambleSegments);
        var preamble = boundary.contentPreamble, fallbackPreamble = boundary.fallbackPreamble;
        if (null === preamble || null === fallbackPreamble) return !1;
        switch(boundary.status){
            case COMPLETED:
                hoistPreambleState(request.renderState, preamble);
                segment = boundary.completedSegments[0];
                if (!segment) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
                return preparePreambleFromSubtree(request, segment, collectedPreambleSegments);
            case POSTPONED:
                if (null !== request.trackedPostpones) return !0;
            case CLIENT_RENDERED:
                if (segment.status === COMPLETED) return hoistPreambleState(request.renderState, fallbackPreamble), preparePreambleFromSubtree(request, segment, collectedPreambleSegments);
            default:
                return !0;
        }
    }
    function preparePreamble(request) {
        if (request.completedRootSegment && null === request.completedPreambleSegments) {
            var collectedPreambleSegments = [], hasPendingPreambles = preparePreambleFromSegment(request, request.completedRootSegment, collectedPreambleSegments), preamble = request.renderState.preamble;
            if (!1 === hasPendingPreambles || preamble.headChunks && preamble.bodyChunks) request.completedPreambleSegments = collectedPreambleSegments;
        }
    }
    function flushSubtree(request, destination, segment, hoistableState) {
        segment.parentFlushed = !0;
        switch(segment.status){
            case PENDING:
                segment.id = request.nextSegmentId++;
            case POSTPONED:
                return hoistableState = segment.id, segment.lastPushedText = !1, segment.textEmbedded = !1, request = request.renderState, destination.push(placeholder1), destination.push(request.placeholderPrefix), request = hoistableState.toString(16), destination.push(request), destination.push(placeholder2);
            case COMPLETED:
                segment.status = FLUSHED;
                var r = !0, chunks = segment.chunks, chunkIdx = 0;
                segment = segment.children;
                for(var childIdx = 0; childIdx < segment.length; childIdx++){
                    for(r = segment[childIdx]; chunkIdx < r.index; chunkIdx++)destination.push(chunks[chunkIdx]);
                    r = flushSegment(request, destination, r, hoistableState);
                }
                for(; chunkIdx < chunks.length - 1; chunkIdx++)destination.push(chunks[chunkIdx]);
                chunkIdx < chunks.length && (r = destination.push(chunks[chunkIdx]));
                return r;
            default:
                throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
        }
    }
    function flushSegment(request, destination, segment, hoistableState) {
        var boundary = segment.boundary;
        if (null === boundary) return flushSubtree(request, destination, segment, hoistableState);
        boundary.parentFlushed = !0;
        if (boundary.status === CLIENT_RENDERED) {
            if (!request.renderState.generateStaticMarkup) {
                var errorDigest = boundary.errorDigest, errorMessage = boundary.errorMessage, errorStack = boundary.errorStack, errorComponentStack = boundary.errorComponentStack;
                destination.push(startClientRenderedSuspenseBoundary);
                destination.push(clientRenderedSuspenseBoundaryError1);
                errorDigest && (destination.push(clientRenderedSuspenseBoundaryError1A), errorDigest = escapeTextForBrowser(errorDigest), destination.push(errorDigest), destination.push(clientRenderedSuspenseBoundaryErrorAttrInterstitial));
                errorMessage && (destination.push(clientRenderedSuspenseBoundaryError1B), errorMessage = escapeTextForBrowser(errorMessage), destination.push(errorMessage), destination.push(clientRenderedSuspenseBoundaryErrorAttrInterstitial));
                errorStack && (destination.push(clientRenderedSuspenseBoundaryError1C), errorStack = escapeTextForBrowser(errorStack), destination.push(errorStack), destination.push(clientRenderedSuspenseBoundaryErrorAttrInterstitial));
                errorComponentStack && (destination.push(clientRenderedSuspenseBoundaryError1D), errorComponentStack = escapeTextForBrowser(errorComponentStack), destination.push(errorComponentStack), destination.push(clientRenderedSuspenseBoundaryErrorAttrInterstitial));
                destination.push(clientRenderedSuspenseBoundaryError2);
            }
            flushSubtree(request, destination, segment, hoistableState);
            request.renderState.generateStaticMarkup ? destination = !0 : ((request = boundary.fallbackPreamble) && writePreambleContribution(destination, request), destination = destination.push(endSuspenseBoundary));
            return destination;
        }
        if (boundary.status !== COMPLETED) return boundary.status === PENDING && (boundary.rootSegmentID = request.nextSegmentId++), 0 < boundary.completedSegments.length && request.partialBoundaries.push(boundary), writeStartPendingSuspenseBoundary(destination, request.renderState, boundary.rootSegmentID), hoistableState && (boundary = boundary.fallbackState, boundary.styles.forEach(hoistStyleQueueDependency, hoistableState), boundary.stylesheets.forEach(hoistStylesheetDependency, hoistableState)), flushSubtree(request, destination, segment, hoistableState), destination.push(endSuspenseBoundary);
        if (boundary.byteSize > request.progressiveChunkSize) return boundary.rootSegmentID = request.nextSegmentId++, request.completedBoundaries.push(boundary), writeStartPendingSuspenseBoundary(destination, request.renderState, boundary.rootSegmentID), flushSubtree(request, destination, segment, hoistableState), destination.push(endSuspenseBoundary);
        hoistableState && (segment = boundary.contentState, segment.styles.forEach(hoistStyleQueueDependency, hoistableState), segment.stylesheets.forEach(hoistStylesheetDependency, hoistableState));
        request.renderState.generateStaticMarkup || destination.push(startCompletedSuspenseBoundary);
        segment = boundary.completedSegments;
        if (1 !== segment.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        flushSegment(request, destination, segment[0], hoistableState);
        request.renderState.generateStaticMarkup ? destination = !0 : ((request = boundary.contentPreamble) && writePreambleContribution(destination, request), destination = destination.push(endSuspenseBoundary));
        return destination;
    }
    function flushSegmentContainer(request, destination, segment, hoistableState) {
        writeStartSegment(destination, request.renderState, segment.parentFormatContext, segment.id);
        flushSegment(request, destination, segment, hoistableState);
        return writeEndSegment(destination, segment.parentFormatContext);
    }
    function flushCompletedBoundary(request, destination, boundary) {
        for(var completedSegments = boundary.completedSegments, i = 0; i < completedSegments.length; i++)flushPartiallyCompletedSegment(request, destination, boundary, completedSegments[i]);
        completedSegments.length = 0;
        writeHoistablesForBoundary(destination, boundary.contentState, request.renderState);
        completedSegments = request.resumableState;
        request = request.renderState;
        i = boundary.rootSegmentID;
        boundary = boundary.contentState;
        var requiresStyleInsertion = request.stylesToHoist;
        request.stylesToHoist = !1;
        destination.push(request.startInlineScript);
        requiresStyleInsertion ? (completedSegments.instructions & SentCompleteBoundaryFunction) === NothingSent ? (completedSegments.instructions = completedSegments.instructions | SentStyleInsertionFunction | SentCompleteBoundaryFunction, destination.push(completeBoundaryWithStylesScript1FullBoth)) : (completedSegments.instructions & SentStyleInsertionFunction) === NothingSent ? (completedSegments.instructions |= SentStyleInsertionFunction, destination.push(completeBoundaryWithStylesScript1FullPartial)) : destination.push(completeBoundaryWithStylesScript1Partial) : (completedSegments.instructions & SentCompleteBoundaryFunction) === NothingSent ? (completedSegments.instructions |= SentCompleteBoundaryFunction, destination.push(completeBoundaryScript1Full)) : destination.push(completeBoundaryScript1Partial);
        completedSegments = i.toString(16);
        destination.push(request.boundaryPrefix);
        destination.push(completedSegments);
        destination.push(completeBoundaryScript2);
        destination.push(request.segmentPrefix);
        destination.push(completedSegments);
        requiresStyleInsertion ? (destination.push(completeBoundaryScript3a), writeStyleResourceDependenciesInJS(destination, boundary)) : destination.push(completeBoundaryScript3b);
        boundary = destination.push(completeBoundaryScriptEnd);
        return writeBootstrap(destination, request) && boundary;
    }
    function flushPartiallyCompletedSegment(request, destination, boundary, segment) {
        if (segment.status === FLUSHED) return !0;
        var hoistableState = boundary.contentState, segmentID = segment.id;
        if (-1 === segmentID) {
            if (-1 === (segment.id = boundary.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
            return flushSegmentContainer(request, destination, segment, hoistableState);
        }
        if (segmentID === boundary.rootSegmentID) return flushSegmentContainer(request, destination, segment, hoistableState);
        flushSegmentContainer(request, destination, segment, hoistableState);
        boundary = request.resumableState;
        request = request.renderState;
        destination.push(request.startInlineScript);
        (boundary.instructions & SentCompleteSegmentFunction) === NothingSent ? (boundary.instructions |= SentCompleteSegmentFunction, destination.push(completeSegmentScript1Full)) : destination.push(completeSegmentScript1Partial);
        destination.push(request.segmentPrefix);
        segmentID = segmentID.toString(16);
        destination.push(segmentID);
        destination.push(completeSegmentScript2);
        destination.push(request.placeholderPrefix);
        destination.push(segmentID);
        destination = destination.push(completeSegmentScriptEnd);
        return destination;
    }
    function flushCompletedQueues(request, destination) {
        try {
            if (!(0 < request.pendingRootTasks)) {
                var i, completedRootSegment = request.completedRootSegment;
                if (null !== completedRootSegment) {
                    if (completedRootSegment.status === POSTPONED) return;
                    var completedPreambleSegments = request.completedPreambleSegments;
                    if (null === completedPreambleSegments) return;
                    var renderState = request.renderState, preamble = renderState.preamble, htmlChunks = preamble.htmlChunks, headChunks = preamble.headChunks, i$jscomp$0;
                    if (htmlChunks) {
                        for(i$jscomp$0 = 0; i$jscomp$0 < htmlChunks.length; i$jscomp$0++)destination.push(htmlChunks[i$jscomp$0]);
                        if (headChunks) for(i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++)destination.push(headChunks[i$jscomp$0]);
                        else {
                            var chunk = startChunkForTag("head");
                            destination.push(chunk);
                            destination.push(endOfStartTag);
                        }
                    } else if (headChunks) for(i$jscomp$0 = 0; i$jscomp$0 < headChunks.length; i$jscomp$0++)destination.push(headChunks[i$jscomp$0]);
                    var charsetChunks = renderState.charsetChunks;
                    for(i$jscomp$0 = 0; i$jscomp$0 < charsetChunks.length; i$jscomp$0++)destination.push(charsetChunks[i$jscomp$0]);
                    charsetChunks.length = 0;
                    renderState.preconnects.forEach(flushResource, destination);
                    renderState.preconnects.clear();
                    var viewportChunks = renderState.viewportChunks;
                    for(i$jscomp$0 = 0; i$jscomp$0 < viewportChunks.length; i$jscomp$0++)destination.push(viewportChunks[i$jscomp$0]);
                    viewportChunks.length = 0;
                    renderState.fontPreloads.forEach(flushResource, destination);
                    renderState.fontPreloads.clear();
                    renderState.highImagePreloads.forEach(flushResource, destination);
                    renderState.highImagePreloads.clear();
                    renderState.styles.forEach(flushStylesInPreamble, destination);
                    var importMapChunks = renderState.importMapChunks;
                    for(i$jscomp$0 = 0; i$jscomp$0 < importMapChunks.length; i$jscomp$0++)destination.push(importMapChunks[i$jscomp$0]);
                    importMapChunks.length = 0;
                    renderState.bootstrapScripts.forEach(flushResource, destination);
                    renderState.scripts.forEach(flushResource, destination);
                    renderState.scripts.clear();
                    renderState.bulkPreloads.forEach(flushResource, destination);
                    renderState.bulkPreloads.clear();
                    var hoistableChunks = renderState.hoistableChunks;
                    for(i$jscomp$0 = 0; i$jscomp$0 < hoistableChunks.length; i$jscomp$0++)destination.push(hoistableChunks[i$jscomp$0]);
                    for(renderState = hoistableChunks.length = 0; renderState < completedPreambleSegments.length; renderState++){
                        var segments = completedPreambleSegments[renderState];
                        for(preamble = 0; preamble < segments.length; preamble++)flushSegment(request, destination, segments[preamble], null);
                    }
                    var preamble$jscomp$0 = request.renderState.preamble, headChunks$jscomp$0 = preamble$jscomp$0.headChunks;
                    if (preamble$jscomp$0.htmlChunks || headChunks$jscomp$0) {
                        var chunk$jscomp$0 = endChunkForTag("head");
                        destination.push(chunk$jscomp$0);
                    }
                    var bodyChunks = preamble$jscomp$0.bodyChunks;
                    if (bodyChunks) for(completedPreambleSegments = 0; completedPreambleSegments < bodyChunks.length; completedPreambleSegments++)destination.push(bodyChunks[completedPreambleSegments]);
                    flushSegment(request, destination, completedRootSegment, null);
                    request.completedRootSegment = null;
                    writeBootstrap(destination, request.renderState);
                }
                var renderState$jscomp$0 = request.renderState;
                completedRootSegment = 0;
                var viewportChunks$jscomp$0 = renderState$jscomp$0.viewportChunks;
                for(completedRootSegment = 0; completedRootSegment < viewportChunks$jscomp$0.length; completedRootSegment++)destination.push(viewportChunks$jscomp$0[completedRootSegment]);
                viewportChunks$jscomp$0.length = 0;
                renderState$jscomp$0.preconnects.forEach(flushResource, destination);
                renderState$jscomp$0.preconnects.clear();
                renderState$jscomp$0.fontPreloads.forEach(flushResource, destination);
                renderState$jscomp$0.fontPreloads.clear();
                renderState$jscomp$0.highImagePreloads.forEach(flushResource, destination);
                renderState$jscomp$0.highImagePreloads.clear();
                renderState$jscomp$0.styles.forEach(preloadLateStyles, destination);
                renderState$jscomp$0.scripts.forEach(flushResource, destination);
                renderState$jscomp$0.scripts.clear();
                renderState$jscomp$0.bulkPreloads.forEach(flushResource, destination);
                renderState$jscomp$0.bulkPreloads.clear();
                var hoistableChunks$jscomp$0 = renderState$jscomp$0.hoistableChunks;
                for(completedRootSegment = 0; completedRootSegment < hoistableChunks$jscomp$0.length; completedRootSegment++)destination.push(hoistableChunks$jscomp$0[completedRootSegment]);
                hoistableChunks$jscomp$0.length = 0;
                var clientRenderedBoundaries = request.clientRenderedBoundaries;
                for(i = 0; i < clientRenderedBoundaries.length; i++){
                    var boundary = clientRenderedBoundaries[i];
                    renderState$jscomp$0 = destination;
                    var resumableState = request.resumableState, renderState$jscomp$1 = request.renderState, id = boundary.rootSegmentID, errorDigest = boundary.errorDigest, errorMessage = boundary.errorMessage, errorStack = boundary.errorStack, errorComponentStack = boundary.errorComponentStack;
                    renderState$jscomp$0.push(renderState$jscomp$1.startInlineScript);
                    (resumableState.instructions & SentClientRenderFunction) === NothingSent ? (resumableState.instructions |= SentClientRenderFunction, renderState$jscomp$0.push(clientRenderScript1Full)) : renderState$jscomp$0.push(clientRenderScript1Partial);
                    renderState$jscomp$0.push(renderState$jscomp$1.boundaryPrefix);
                    var chunk$jscomp$1 = id.toString(16);
                    renderState$jscomp$0.push(chunk$jscomp$1);
                    renderState$jscomp$0.push(clientRenderScript1A);
                    if (errorDigest || errorMessage || errorStack || errorComponentStack) {
                        renderState$jscomp$0.push(clientRenderErrorScriptArgInterstitial);
                        var chunk$jscomp$2 = escapeJSStringsForInstructionScripts(errorDigest || "");
                        renderState$jscomp$0.push(chunk$jscomp$2);
                    }
                    if (errorMessage || errorStack || errorComponentStack) {
                        renderState$jscomp$0.push(clientRenderErrorScriptArgInterstitial);
                        var chunk$jscomp$3 = escapeJSStringsForInstructionScripts(errorMessage || "");
                        renderState$jscomp$0.push(chunk$jscomp$3);
                    }
                    if (errorStack || errorComponentStack) {
                        renderState$jscomp$0.push(clientRenderErrorScriptArgInterstitial);
                        var chunk$jscomp$4 = escapeJSStringsForInstructionScripts(errorStack || "");
                        renderState$jscomp$0.push(chunk$jscomp$4);
                    }
                    if (errorComponentStack) {
                        renderState$jscomp$0.push(clientRenderErrorScriptArgInterstitial);
                        var chunk$jscomp$5 = escapeJSStringsForInstructionScripts(errorComponentStack);
                        renderState$jscomp$0.push(chunk$jscomp$5);
                    }
                    var JSCompiler_inline_result = renderState$jscomp$0.push(clientRenderScriptEnd);
                    if (!JSCompiler_inline_result) {
                        request.destination = null;
                        i++;
                        clientRenderedBoundaries.splice(0, i);
                        return;
                    }
                }
                clientRenderedBoundaries.splice(0, i);
                var completedBoundaries = request.completedBoundaries;
                for(i = 0; i < completedBoundaries.length; i++)if (!flushCompletedBoundary(request, destination, completedBoundaries[i])) {
                    request.destination = null;
                    i++;
                    completedBoundaries.splice(0, i);
                    return;
                }
                completedBoundaries.splice(0, i);
                var partialBoundaries = request.partialBoundaries;
                for(i = 0; i < partialBoundaries.length; i++){
                    a: {
                        clientRenderedBoundaries = request;
                        boundary = destination;
                        var boundary$jscomp$0 = partialBoundaries[i], completedSegments = boundary$jscomp$0.completedSegments;
                        for(JSCompiler_inline_result = 0; JSCompiler_inline_result < completedSegments.length; JSCompiler_inline_result++)if (!flushPartiallyCompletedSegment(clientRenderedBoundaries, boundary, boundary$jscomp$0, completedSegments[JSCompiler_inline_result])) {
                            JSCompiler_inline_result++;
                            completedSegments.splice(0, JSCompiler_inline_result);
                            var JSCompiler_inline_result$jscomp$0 = !1;
                            break a;
                        }
                        completedSegments.splice(0, JSCompiler_inline_result);
                        JSCompiler_inline_result$jscomp$0 = writeHoistablesForBoundary(boundary, boundary$jscomp$0.contentState, clientRenderedBoundaries.renderState);
                    }
                    if (!JSCompiler_inline_result$jscomp$0) {
                        request.destination = null;
                        i++;
                        partialBoundaries.splice(0, i);
                        return;
                    }
                }
                partialBoundaries.splice(0, i);
                var largeBoundaries = request.completedBoundaries;
                for(i = 0; i < largeBoundaries.length; i++)if (!flushCompletedBoundary(request, destination, largeBoundaries[i])) {
                    request.destination = null;
                    i++;
                    largeBoundaries.splice(0, i);
                    return;
                }
                largeBoundaries.splice(0, i);
            }
        } finally{
            0 === request.allPendingTasks && 0 === request.pingedTasks.length && 0 === request.clientRenderedBoundaries.length && 0 === request.completedBoundaries.length && (request.flushScheduled = !1, i = request.resumableState, i.hasBody && (partialBoundaries = endChunkForTag("body"), destination.push(partialBoundaries)), i.hasHtml && (i = endChunkForTag("html"), destination.push(i)), 0 !== request.abortableTasks.size && console.error("There was still abortable task at the root when we closed. This is a bug in React."), request.status = CLOSED, destination.push(null), request.destination = null);
        }
    }
    function startWork(request) {
        request.flushScheduled = null !== request.destination;
        performWork(request);
        10 === request.status && (request.status = 11);
        null === request.trackedPostpones && safelyEmitEarlyPreloads(request, 0 === request.pendingRootTasks);
    }
    function enqueueFlush(request) {
        if (!1 === request.flushScheduled && 0 === request.pingedTasks.length && null !== request.destination) {
            request.flushScheduled = !0;
            var destination = request.destination;
            destination ? flushCompletedQueues(request, destination) : request.flushScheduled = !1;
        }
    }
    function startFlowing(request, destination) {
        if (13 === request.status) request.status = CLOSED, destination.destroy(request.fatalError);
        else if (request.status !== CLOSED && null === request.destination) {
            request.destination = destination;
            try {
                flushCompletedQueues(request, destination);
            } catch (error) {
                destination = {}, logRecoverableError(request, error, destination, null), fatalError(request, error, destination, null);
            }
        }
    }
    function abort(request, reason) {
        if (11 === request.status || 10 === request.status) request.status = 12;
        try {
            var abortableTasks = request.abortableTasks;
            if (0 < abortableTasks.size) {
                var error = void 0 === reason ? Error("The render was aborted by the server without a reason.") : "object" === typeof reason && null !== reason && "function" === typeof reason.then ? Error("The render was aborted by the server with a promise.") : reason;
                request.fatalError = error;
                abortableTasks.forEach(function(task) {
                    return abortTask(task, request, error);
                });
                abortableTasks.clear();
            }
            null !== request.destination && flushCompletedQueues(request, request.destination);
        } catch (error$4) {
            reason = {}, logRecoverableError(request, error$4, reason, null), fatalError(request, error$4, reason, null);
        }
    }
    function onError() {}
    function renderToStringImpl(children, options, generateStaticMarkup, abortReason) {
        var didFatal = !1, fatalError = null, result = "", readyToStream = !1;
        options = createResumableState(options ? options.identifierPrefix : void 0);
        children = createRequest(children, options, createRenderState(options, generateStaticMarkup), createFormatContext(ROOT_HTML_MODE, null, 0), Infinity, onError, void 0, function() {
            readyToStream = !0;
        }, void 0, void 0, void 0);
        startWork(children);
        abort(children, abortReason);
        startFlowing(children, {
            push: function(chunk) {
                null !== chunk && (result += chunk);
                return !0;
            },
            destroy: function(error) {
                didFatal = !0;
                fatalError = error;
            }
        });
        if (didFatal && fatalError !== abortReason) throw fatalError;
        if (!readyToStream) throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
        return result;
    }
    var React = require("d3f816476090dd4d"), ReactDOM = require("c148eaa60bb723ef"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_PROVIDER_TYPE = Symbol.for("react.provider"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_SCOPE_TYPE = Symbol.for("react.scope"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden"), REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, isArrayImpl = Array.isArray, jsxPropsParents = new WeakMap(), jsxChildrenParents = new WeakMap(), CLIENT_REFERENCE_TAG = Symbol.for("react.client.reference"), assign = Object.assign, hasOwnProperty = Object.prototype.hasOwnProperty, VALID_ATTRIBUTE_NAME_REGEX = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), illegalAttributeNameCache = {}, validatedAttributeNameCache = {}, unitlessNumbers = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")), aliases = new Map([
        [
            "acceptCharset",
            "accept-charset"
        ],
        [
            "htmlFor",
            "for"
        ],
        [
            "httpEquiv",
            "http-equiv"
        ],
        [
            "crossOrigin",
            "crossorigin"
        ],
        [
            "accentHeight",
            "accent-height"
        ],
        [
            "alignmentBaseline",
            "alignment-baseline"
        ],
        [
            "arabicForm",
            "arabic-form"
        ],
        [
            "baselineShift",
            "baseline-shift"
        ],
        [
            "capHeight",
            "cap-height"
        ],
        [
            "clipPath",
            "clip-path"
        ],
        [
            "clipRule",
            "clip-rule"
        ],
        [
            "colorInterpolation",
            "color-interpolation"
        ],
        [
            "colorInterpolationFilters",
            "color-interpolation-filters"
        ],
        [
            "colorProfile",
            "color-profile"
        ],
        [
            "colorRendering",
            "color-rendering"
        ],
        [
            "dominantBaseline",
            "dominant-baseline"
        ],
        [
            "enableBackground",
            "enable-background"
        ],
        [
            "fillOpacity",
            "fill-opacity"
        ],
        [
            "fillRule",
            "fill-rule"
        ],
        [
            "floodColor",
            "flood-color"
        ],
        [
            "floodOpacity",
            "flood-opacity"
        ],
        [
            "fontFamily",
            "font-family"
        ],
        [
            "fontSize",
            "font-size"
        ],
        [
            "fontSizeAdjust",
            "font-size-adjust"
        ],
        [
            "fontStretch",
            "font-stretch"
        ],
        [
            "fontStyle",
            "font-style"
        ],
        [
            "fontVariant",
            "font-variant"
        ],
        [
            "fontWeight",
            "font-weight"
        ],
        [
            "glyphName",
            "glyph-name"
        ],
        [
            "glyphOrientationHorizontal",
            "glyph-orientation-horizontal"
        ],
        [
            "glyphOrientationVertical",
            "glyph-orientation-vertical"
        ],
        [
            "horizAdvX",
            "horiz-adv-x"
        ],
        [
            "horizOriginX",
            "horiz-origin-x"
        ],
        [
            "imageRendering",
            "image-rendering"
        ],
        [
            "letterSpacing",
            "letter-spacing"
        ],
        [
            "lightingColor",
            "lighting-color"
        ],
        [
            "markerEnd",
            "marker-end"
        ],
        [
            "markerMid",
            "marker-mid"
        ],
        [
            "markerStart",
            "marker-start"
        ],
        [
            "overlinePosition",
            "overline-position"
        ],
        [
            "overlineThickness",
            "overline-thickness"
        ],
        [
            "paintOrder",
            "paint-order"
        ],
        [
            "panose-1",
            "panose-1"
        ],
        [
            "pointerEvents",
            "pointer-events"
        ],
        [
            "renderingIntent",
            "rendering-intent"
        ],
        [
            "shapeRendering",
            "shape-rendering"
        ],
        [
            "stopColor",
            "stop-color"
        ],
        [
            "stopOpacity",
            "stop-opacity"
        ],
        [
            "strikethroughPosition",
            "strikethrough-position"
        ],
        [
            "strikethroughThickness",
            "strikethrough-thickness"
        ],
        [
            "strokeDasharray",
            "stroke-dasharray"
        ],
        [
            "strokeDashoffset",
            "stroke-dashoffset"
        ],
        [
            "strokeLinecap",
            "stroke-linecap"
        ],
        [
            "strokeLinejoin",
            "stroke-linejoin"
        ],
        [
            "strokeMiterlimit",
            "stroke-miterlimit"
        ],
        [
            "strokeOpacity",
            "stroke-opacity"
        ],
        [
            "strokeWidth",
            "stroke-width"
        ],
        [
            "textAnchor",
            "text-anchor"
        ],
        [
            "textDecoration",
            "text-decoration"
        ],
        [
            "textRendering",
            "text-rendering"
        ],
        [
            "transformOrigin",
            "transform-origin"
        ],
        [
            "underlinePosition",
            "underline-position"
        ],
        [
            "underlineThickness",
            "underline-thickness"
        ],
        [
            "unicodeBidi",
            "unicode-bidi"
        ],
        [
            "unicodeRange",
            "unicode-range"
        ],
        [
            "unitsPerEm",
            "units-per-em"
        ],
        [
            "vAlphabetic",
            "v-alphabetic"
        ],
        [
            "vHanging",
            "v-hanging"
        ],
        [
            "vIdeographic",
            "v-ideographic"
        ],
        [
            "vMathematical",
            "v-mathematical"
        ],
        [
            "vectorEffect",
            "vector-effect"
        ],
        [
            "vertAdvY",
            "vert-adv-y"
        ],
        [
            "vertOriginX",
            "vert-origin-x"
        ],
        [
            "vertOriginY",
            "vert-origin-y"
        ],
        [
            "wordSpacing",
            "word-spacing"
        ],
        [
            "writingMode",
            "writing-mode"
        ],
        [
            "xmlnsXlink",
            "xmlns:xlink"
        ],
        [
            "xHeight",
            "x-height"
        ]
    ]), hasReadOnlyValue = {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0
    }, ariaProperties = {
        "aria-current": 0,
        "aria-description": 0,
        "aria-details": 0,
        "aria-disabled": 0,
        "aria-hidden": 0,
        "aria-invalid": 0,
        "aria-keyshortcuts": 0,
        "aria-label": 0,
        "aria-roledescription": 0,
        "aria-autocomplete": 0,
        "aria-checked": 0,
        "aria-expanded": 0,
        "aria-haspopup": 0,
        "aria-level": 0,
        "aria-modal": 0,
        "aria-multiline": 0,
        "aria-multiselectable": 0,
        "aria-orientation": 0,
        "aria-placeholder": 0,
        "aria-pressed": 0,
        "aria-readonly": 0,
        "aria-required": 0,
        "aria-selected": 0,
        "aria-sort": 0,
        "aria-valuemax": 0,
        "aria-valuemin": 0,
        "aria-valuenow": 0,
        "aria-valuetext": 0,
        "aria-atomic": 0,
        "aria-busy": 0,
        "aria-live": 0,
        "aria-relevant": 0,
        "aria-dropeffect": 0,
        "aria-grabbed": 0,
        "aria-activedescendant": 0,
        "aria-colcount": 0,
        "aria-colindex": 0,
        "aria-colspan": 0,
        "aria-controls": 0,
        "aria-describedby": 0,
        "aria-errormessage": 0,
        "aria-flowto": 0,
        "aria-labelledby": 0,
        "aria-owns": 0,
        "aria-posinset": 0,
        "aria-rowcount": 0,
        "aria-rowindex": 0,
        "aria-rowspan": 0,
        "aria-setsize": 0
    }, warnedProperties$1 = {}, rARIA$1 = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), rARIACamel$1 = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), didWarnValueNull = !1, possibleStandardNames = {
        accept: "accept",
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        alt: "alt",
        as: "as",
        async: "async",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        capture: "capture",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charSet",
        checked: "checked",
        children: "children",
        cite: "cite",
        class: "className",
        classid: "classID",
        classname: "className",
        cols: "cols",
        colspan: "colSpan",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        controlslist: "controlsList",
        coords: "coords",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback",
        download: "download",
        draggable: "draggable",
        enctype: "encType",
        enterkeyhint: "enterKeyHint",
        fetchpriority: "fetchPriority",
        for: "htmlFor",
        form: "form",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        headers: "headers",
        height: "height",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        imagesizes: "imageSizes",
        imagesrcset: "imageSrcSet",
        inert: "inert",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        integrity: "integrity",
        is: "is",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        low: "low",
        manifest: "manifest",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        nomodule: "noModule",
        nonce: "nonce",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        placeholder: "placeholder",
        playsinline: "playsInline",
        poster: "poster",
        preload: "preload",
        profile: "profile",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rel: "rel",
        required: "required",
        reversed: "reversed",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        start: "start",
        step: "step",
        style: "style",
        summary: "summary",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        type: "type",
        usemap: "useMap",
        value: "value",
        width: "width",
        wmode: "wmode",
        wrap: "wrap",
        about: "about",
        accentheight: "accentHeight",
        "accent-height": "accentHeight",
        accumulate: "accumulate",
        additive: "additive",
        alignmentbaseline: "alignmentBaseline",
        "alignment-baseline": "alignmentBaseline",
        allowreorder: "allowReorder",
        alphabetic: "alphabetic",
        amplitude: "amplitude",
        arabicform: "arabicForm",
        "arabic-form": "arabicForm",
        ascent: "ascent",
        attributename: "attributeName",
        attributetype: "attributeType",
        autoreverse: "autoReverse",
        azimuth: "azimuth",
        basefrequency: "baseFrequency",
        baselineshift: "baselineShift",
        "baseline-shift": "baselineShift",
        baseprofile: "baseProfile",
        bbox: "bbox",
        begin: "begin",
        bias: "bias",
        by: "by",
        calcmode: "calcMode",
        capheight: "capHeight",
        "cap-height": "capHeight",
        clip: "clip",
        clippath: "clipPath",
        "clip-path": "clipPath",
        clippathunits: "clipPathUnits",
        cliprule: "clipRule",
        "clip-rule": "clipRule",
        color: "color",
        colorinterpolation: "colorInterpolation",
        "color-interpolation": "colorInterpolation",
        colorinterpolationfilters: "colorInterpolationFilters",
        "color-interpolation-filters": "colorInterpolationFilters",
        colorprofile: "colorProfile",
        "color-profile": "colorProfile",
        colorrendering: "colorRendering",
        "color-rendering": "colorRendering",
        contentscripttype: "contentScriptType",
        contentstyletype: "contentStyleType",
        cursor: "cursor",
        cx: "cx",
        cy: "cy",
        d: "d",
        datatype: "datatype",
        decelerate: "decelerate",
        descent: "descent",
        diffuseconstant: "diffuseConstant",
        direction: "direction",
        display: "display",
        divisor: "divisor",
        dominantbaseline: "dominantBaseline",
        "dominant-baseline": "dominantBaseline",
        dur: "dur",
        dx: "dx",
        dy: "dy",
        edgemode: "edgeMode",
        elevation: "elevation",
        enablebackground: "enableBackground",
        "enable-background": "enableBackground",
        end: "end",
        exponent: "exponent",
        externalresourcesrequired: "externalResourcesRequired",
        fill: "fill",
        fillopacity: "fillOpacity",
        "fill-opacity": "fillOpacity",
        fillrule: "fillRule",
        "fill-rule": "fillRule",
        filter: "filter",
        filterres: "filterRes",
        filterunits: "filterUnits",
        floodopacity: "floodOpacity",
        "flood-opacity": "floodOpacity",
        floodcolor: "floodColor",
        "flood-color": "floodColor",
        focusable: "focusable",
        fontfamily: "fontFamily",
        "font-family": "fontFamily",
        fontsize: "fontSize",
        "font-size": "fontSize",
        fontsizeadjust: "fontSizeAdjust",
        "font-size-adjust": "fontSizeAdjust",
        fontstretch: "fontStretch",
        "font-stretch": "fontStretch",
        fontstyle: "fontStyle",
        "font-style": "fontStyle",
        fontvariant: "fontVariant",
        "font-variant": "fontVariant",
        fontweight: "fontWeight",
        "font-weight": "fontWeight",
        format: "format",
        from: "from",
        fx: "fx",
        fy: "fy",
        g1: "g1",
        g2: "g2",
        glyphname: "glyphName",
        "glyph-name": "glyphName",
        glyphorientationhorizontal: "glyphOrientationHorizontal",
        "glyph-orientation-horizontal": "glyphOrientationHorizontal",
        glyphorientationvertical: "glyphOrientationVertical",
        "glyph-orientation-vertical": "glyphOrientationVertical",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        hanging: "hanging",
        horizadvx: "horizAdvX",
        "horiz-adv-x": "horizAdvX",
        horizoriginx: "horizOriginX",
        "horiz-origin-x": "horizOriginX",
        ideographic: "ideographic",
        imagerendering: "imageRendering",
        "image-rendering": "imageRendering",
        in2: "in2",
        in: "in",
        inlist: "inlist",
        intercept: "intercept",
        k1: "k1",
        k2: "k2",
        k3: "k3",
        k4: "k4",
        k: "k",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        kerning: "kerning",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        letterspacing: "letterSpacing",
        "letter-spacing": "letterSpacing",
        lightingcolor: "lightingColor",
        "lighting-color": "lightingColor",
        limitingconeangle: "limitingConeAngle",
        local: "local",
        markerend: "markerEnd",
        "marker-end": "markerEnd",
        markerheight: "markerHeight",
        markermid: "markerMid",
        "marker-mid": "markerMid",
        markerstart: "markerStart",
        "marker-start": "markerStart",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        mask: "mask",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        mathematical: "mathematical",
        mode: "mode",
        numoctaves: "numOctaves",
        offset: "offset",
        opacity: "opacity",
        operator: "operator",
        order: "order",
        orient: "orient",
        orientation: "orientation",
        origin: "origin",
        overflow: "overflow",
        overlineposition: "overlinePosition",
        "overline-position": "overlinePosition",
        overlinethickness: "overlineThickness",
        "overline-thickness": "overlineThickness",
        paintorder: "paintOrder",
        "paint-order": "paintOrder",
        panose1: "panose1",
        "panose-1": "panose1",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointerevents: "pointerEvents",
        "pointer-events": "pointerEvents",
        points: "points",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        popover: "popover",
        popovertarget: "popoverTarget",
        popovertargetaction: "popoverTargetAction",
        prefix: "prefix",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        property: "property",
        r: "r",
        radius: "radius",
        refx: "refX",
        refy: "refY",
        renderingintent: "renderingIntent",
        "rendering-intent": "renderingIntent",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        resource: "resource",
        restart: "restart",
        result: "result",
        results: "results",
        rotate: "rotate",
        rx: "rx",
        ry: "ry",
        scale: "scale",
        security: "security",
        seed: "seed",
        shaperendering: "shapeRendering",
        "shape-rendering": "shapeRendering",
        slope: "slope",
        spacing: "spacing",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        speed: "speed",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stemh: "stemh",
        stemv: "stemv",
        stitchtiles: "stitchTiles",
        stopcolor: "stopColor",
        "stop-color": "stopColor",
        stopopacity: "stopOpacity",
        "stop-opacity": "stopOpacity",
        strikethroughposition: "strikethroughPosition",
        "strikethrough-position": "strikethroughPosition",
        strikethroughthickness: "strikethroughThickness",
        "strikethrough-thickness": "strikethroughThickness",
        string: "string",
        stroke: "stroke",
        strokedasharray: "strokeDasharray",
        "stroke-dasharray": "strokeDasharray",
        strokedashoffset: "strokeDashoffset",
        "stroke-dashoffset": "strokeDashoffset",
        strokelinecap: "strokeLinecap",
        "stroke-linecap": "strokeLinecap",
        strokelinejoin: "strokeLinejoin",
        "stroke-linejoin": "strokeLinejoin",
        strokemiterlimit: "strokeMiterlimit",
        "stroke-miterlimit": "strokeMiterlimit",
        strokewidth: "strokeWidth",
        "stroke-width": "strokeWidth",
        strokeopacity: "strokeOpacity",
        "stroke-opacity": "strokeOpacity",
        suppresscontenteditablewarning: "suppressContentEditableWarning",
        suppresshydrationwarning: "suppressHydrationWarning",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textanchor: "textAnchor",
        "text-anchor": "textAnchor",
        textdecoration: "textDecoration",
        "text-decoration": "textDecoration",
        textlength: "textLength",
        textrendering: "textRendering",
        "text-rendering": "textRendering",
        to: "to",
        transform: "transform",
        transformorigin: "transformOrigin",
        "transform-origin": "transformOrigin",
        typeof: "typeof",
        u1: "u1",
        u2: "u2",
        underlineposition: "underlinePosition",
        "underline-position": "underlinePosition",
        underlinethickness: "underlineThickness",
        "underline-thickness": "underlineThickness",
        unicode: "unicode",
        unicodebidi: "unicodeBidi",
        "unicode-bidi": "unicodeBidi",
        unicoderange: "unicodeRange",
        "unicode-range": "unicodeRange",
        unitsperem: "unitsPerEm",
        "units-per-em": "unitsPerEm",
        unselectable: "unselectable",
        valphabetic: "vAlphabetic",
        "v-alphabetic": "vAlphabetic",
        values: "values",
        vectoreffect: "vectorEffect",
        "vector-effect": "vectorEffect",
        version: "version",
        vertadvy: "vertAdvY",
        "vert-adv-y": "vertAdvY",
        vertoriginx: "vertOriginX",
        "vert-origin-x": "vertOriginX",
        vertoriginy: "vertOriginY",
        "vert-origin-y": "vertOriginY",
        vhanging: "vHanging",
        "v-hanging": "vHanging",
        videographic: "vIdeographic",
        "v-ideographic": "vIdeographic",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        visibility: "visibility",
        vmathematical: "vMathematical",
        "v-mathematical": "vMathematical",
        vocab: "vocab",
        widths: "widths",
        wordspacing: "wordSpacing",
        "word-spacing": "wordSpacing",
        writingmode: "writingMode",
        "writing-mode": "writingMode",
        x1: "x1",
        x2: "x2",
        x: "x",
        xchannelselector: "xChannelSelector",
        xheight: "xHeight",
        "x-height": "xHeight",
        xlinkactuate: "xlinkActuate",
        "xlink:actuate": "xlinkActuate",
        xlinkarcrole: "xlinkArcrole",
        "xlink:arcrole": "xlinkArcrole",
        xlinkhref: "xlinkHref",
        "xlink:href": "xlinkHref",
        xlinkrole: "xlinkRole",
        "xlink:role": "xlinkRole",
        xlinkshow: "xlinkShow",
        "xlink:show": "xlinkShow",
        xlinktitle: "xlinkTitle",
        "xlink:title": "xlinkTitle",
        xlinktype: "xlinkType",
        "xlink:type": "xlinkType",
        xmlbase: "xmlBase",
        "xml:base": "xmlBase",
        xmllang: "xmlLang",
        "xml:lang": "xmlLang",
        xmlns: "xmlns",
        "xml:space": "xmlSpace",
        xmlnsxlink: "xmlnsXlink",
        "xmlns:xlink": "xmlnsXlink",
        xmlspace: "xmlSpace",
        y1: "y1",
        y2: "y2",
        y: "y",
        ychannelselector: "yChannelSelector",
        z: "z",
        zoomandpan: "zoomAndPan"
    }, warnedProperties = {}, EVENT_NAME_REGEX = /^on./, INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/, rARIA = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), rARIACamel = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/, msPattern$1 = /^-ms-/, hyphenPattern = /-(.)/g, badStyleValueWithSemicolonPattern = /;\s*$/, warnedStyleNames = {}, warnedStyleValues = {}, warnedForNaNValue = !1, warnedForInfinityValue = !1, matchHtmlRegExp = /["'&<>]/, uppercasePattern = /([A-Z])/g, msPattern = /^ms-/, isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ReactDOMSharedInternals = ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, NotPending = Object.freeze({
        pending: !1,
        data: null,
        method: null,
        action: null
    }), previousDispatcher = ReactDOMSharedInternals.d;
    ReactDOMSharedInternals.d = {
        f: previousDispatcher.f,
        r: previousDispatcher.r,
        D: function(href) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if ("string" === typeof href && href) {
                    if (!resumableState.dnsResources.hasOwnProperty(href)) {
                        resumableState.dnsResources[href] = EXISTS;
                        resumableState = renderState.headers;
                        var header, JSCompiler_temp;
                        if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity) JSCompiler_temp = (header = "<" + escapeHrefForLinkHeaderURLContext(href) + ">; rel=dns-prefetch", 0 <= (resumableState.remainingCapacity -= header.length + 2));
                        JSCompiler_temp ? (renderState.resets.dns[href] = EXISTS, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (header = [], pushLinkImpl(header, {
                            href: href,
                            rel: "dns-prefetch"
                        }), renderState.preconnects.add(header));
                    }
                    enqueueFlush(request);
                }
            } else previousDispatcher.D(href);
        },
        C: function(href, crossOrigin) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if ("string" === typeof href && href) {
                    var bucket = "use-credentials" === crossOrigin ? "credentials" : "string" === typeof crossOrigin ? "anonymous" : "default";
                    if (!resumableState.connectResources[bucket].hasOwnProperty(href)) {
                        resumableState.connectResources[bucket][href] = EXISTS;
                        resumableState = renderState.headers;
                        var header, JSCompiler_temp;
                        if (JSCompiler_temp = resumableState && 0 < resumableState.remainingCapacity) {
                            JSCompiler_temp = "<" + escapeHrefForLinkHeaderURLContext(href) + ">; rel=preconnect";
                            if ("string" === typeof crossOrigin) {
                                var escapedCrossOrigin = escapeStringForLinkHeaderQuotedParamValueContext(crossOrigin, "crossOrigin");
                                JSCompiler_temp += '; crossorigin="' + escapedCrossOrigin + '"';
                            }
                            JSCompiler_temp = (header = JSCompiler_temp, 0 <= (resumableState.remainingCapacity -= header.length + 2));
                        }
                        JSCompiler_temp ? (renderState.resets.connect[bucket][href] = EXISTS, resumableState.preconnects && (resumableState.preconnects += ", "), resumableState.preconnects += header) : (bucket = [], pushLinkImpl(bucket, {
                            rel: "preconnect",
                            href: href,
                            crossOrigin: crossOrigin
                        }), renderState.preconnects.add(bucket));
                    }
                    enqueueFlush(request);
                }
            } else previousDispatcher.C(href, crossOrigin);
        },
        L: function(href, as, options) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (as && href) {
                    switch(as){
                        case "image":
                            if (options) {
                                var imageSrcSet = options.imageSrcSet;
                                var imageSizes = options.imageSizes;
                                var fetchPriority = options.fetchPriority;
                            }
                            var key = imageSrcSet ? imageSrcSet + "\n" + (imageSizes || "") : href;
                            if (resumableState.imageResources.hasOwnProperty(key)) return;
                            resumableState.imageResources[key] = PRELOAD_NO_CREDS;
                            resumableState = renderState.headers;
                            var header;
                            resumableState && 0 < resumableState.remainingCapacity && "string" !== typeof imageSrcSet && "high" === fetchPriority && (header = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= header.length + 2)) ? (renderState.resets.image[key] = PRELOAD_NO_CREDS, resumableState.highImagePreloads && (resumableState.highImagePreloads += ", "), resumableState.highImagePreloads += header) : (resumableState = [], pushLinkImpl(resumableState, assign({
                                rel: "preload",
                                href: imageSrcSet ? void 0 : href,
                                as: as
                            }, options)), "high" === fetchPriority ? renderState.highImagePreloads.add(resumableState) : (renderState.bulkPreloads.add(resumableState), renderState.preloads.images.set(key, resumableState)));
                            break;
                        case "style":
                            if (resumableState.styleResources.hasOwnProperty(href)) return;
                            imageSrcSet = [];
                            pushLinkImpl(imageSrcSet, assign({
                                rel: "preload",
                                href: href,
                                as: as
                            }, options));
                            resumableState.styleResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [
                                options.crossOrigin,
                                options.integrity
                            ];
                            renderState.preloads.stylesheets.set(href, imageSrcSet);
                            renderState.bulkPreloads.add(imageSrcSet);
                            break;
                        case "script":
                            if (resumableState.scriptResources.hasOwnProperty(href)) return;
                            imageSrcSet = [];
                            renderState.preloads.scripts.set(href, imageSrcSet);
                            renderState.bulkPreloads.add(imageSrcSet);
                            pushLinkImpl(imageSrcSet, assign({
                                rel: "preload",
                                href: href,
                                as: as
                            }, options));
                            resumableState.scriptResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [
                                options.crossOrigin,
                                options.integrity
                            ];
                            break;
                        default:
                            if (resumableState.unknownResources.hasOwnProperty(as)) {
                                if (imageSrcSet = resumableState.unknownResources[as], imageSrcSet.hasOwnProperty(href)) return;
                            } else imageSrcSet = {}, resumableState.unknownResources[as] = imageSrcSet;
                            imageSrcSet[href] = PRELOAD_NO_CREDS;
                            if ((resumableState = renderState.headers) && 0 < resumableState.remainingCapacity && "font" === as && (key = getPreloadAsHeader(href, as, options), 0 <= (resumableState.remainingCapacity -= key.length + 2))) renderState.resets.font[href] = PRELOAD_NO_CREDS, resumableState.fontPreloads && (resumableState.fontPreloads += ", "), resumableState.fontPreloads += key;
                            else switch(resumableState = [], href = assign({
                                rel: "preload",
                                href: href,
                                as: as
                            }, options), pushLinkImpl(resumableState, href), as){
                                case "font":
                                    renderState.fontPreloads.add(resumableState);
                                    break;
                                default:
                                    renderState.bulkPreloads.add(resumableState);
                            }
                    }
                    enqueueFlush(request);
                }
            } else previousDispatcher.L(href, as, options);
        },
        m: function(href, options) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (href) {
                    var as = options && "string" === typeof options.as ? options.as : "script";
                    switch(as){
                        case "script":
                            if (resumableState.moduleScriptResources.hasOwnProperty(href)) return;
                            as = [];
                            resumableState.moduleScriptResources[href] = !options || "string" !== typeof options.crossOrigin && "string" !== typeof options.integrity ? PRELOAD_NO_CREDS : [
                                options.crossOrigin,
                                options.integrity
                            ];
                            renderState.preloads.moduleScripts.set(href, as);
                            break;
                        default:
                            if (resumableState.moduleUnknownResources.hasOwnProperty(as)) {
                                var resources = resumableState.unknownResources[as];
                                if (resources.hasOwnProperty(href)) return;
                            } else resources = {}, resumableState.moduleUnknownResources[as] = resources;
                            as = [];
                            resources[href] = PRELOAD_NO_CREDS;
                    }
                    pushLinkImpl(as, assign({
                        rel: "modulepreload",
                        href: href
                    }, options));
                    renderState.bulkPreloads.add(as);
                    enqueueFlush(request);
                }
            } else previousDispatcher.m(href, options);
        },
        X: function(src, options) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (src) {
                    var resourceState = resumableState.scriptResources.hasOwnProperty(src) ? resumableState.scriptResources[src] : void 0;
                    resourceState !== EXISTS && (resumableState.scriptResources[src] = EXISTS, options = assign({
                        src: src,
                        async: !0
                    }, options), resourceState && (2 === resourceState.length && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.scripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
                }
            } else previousDispatcher.X(src, options);
        },
        S: function(href, precedence, options) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (href) {
                    precedence = precedence || "default";
                    var styleQueue = renderState.styles.get(precedence), resourceState = resumableState.styleResources.hasOwnProperty(href) ? resumableState.styleResources[href] : void 0;
                    resourceState !== EXISTS && (resumableState.styleResources[href] = EXISTS, styleQueue || (styleQueue = {
                        precedence: escapeTextForBrowser(precedence),
                        rules: [],
                        hrefs: [],
                        sheets: new Map()
                    }, renderState.styles.set(precedence, styleQueue)), precedence = {
                        state: PENDING$1,
                        props: assign({
                            rel: "stylesheet",
                            href: href,
                            "data-precedence": precedence
                        }, options)
                    }, resourceState && (2 === resourceState.length && adoptPreloadCredentials(precedence.props, resourceState), (renderState = renderState.preloads.stylesheets.get(href)) && 0 < renderState.length ? renderState.length = 0 : precedence.state = PRELOADED), styleQueue.sheets.set(href, precedence), enqueueFlush(request));
                }
            } else previousDispatcher.S(href, precedence, options);
        },
        M: function(src, options) {
            var request = currentRequest ? currentRequest : null;
            if (request) {
                var resumableState = request.resumableState, renderState = request.renderState;
                if (src) {
                    var resourceState = resumableState.moduleScriptResources.hasOwnProperty(src) ? resumableState.moduleScriptResources[src] : void 0;
                    resourceState !== EXISTS && (resumableState.moduleScriptResources[src] = EXISTS, options = assign({
                        src: src,
                        type: "module",
                        async: !0
                    }, options), resourceState && (2 === resourceState.length && adoptPreloadCredentials(options, resourceState), src = renderState.preloads.moduleScripts.get(src)) && (src.length = 0), src = [], renderState.scripts.add(src), pushScriptImpl(src, options), enqueueFlush(request));
                }
            } else previousDispatcher.M(src, options);
        }
    };
    var NothingSent = 0, SentCompleteSegmentFunction = 1, SentCompleteBoundaryFunction = 2, SentClientRenderFunction = 4, SentStyleInsertionFunction = 8, EXISTS = null, PRELOAD_NO_CREDS = [];
    Object.freeze(PRELOAD_NO_CREDS);
    var scriptRegex = /(<\/|<)(s)(cript)/gi;
    var didWarnForNewBooleanPropsWithEmptyValue = {};
    var NoContribution = 0, ROOT_HTML_MODE = 0, HTML_HTML_MODE = 1, HTML_MODE = 2, HTML_HEAD_MODE = 3, SVG_MODE = 4, MATHML_MODE = 5, HTML_TABLE_MODE = 6, HTML_TABLE_BODY_MODE = 7, HTML_TABLE_ROW_MODE = 8, HTML_COLGROUP_MODE = 9, styleNameCache = new Map(), styleAttributeStart = ' style="', styleAssign = ":", styleSeparator = ";", attributeSeparator = " ", attributeAssign = '="', attributeEnd = '"', attributeEmptyString = '=""', actionJavaScriptURL = escapeTextForBrowser("javascript:throw new Error('React form unexpectedly submitted.')"), endOfStartTag = ">", endOfStartTagSelfClosing = "/>", didWarnDefaultInputValue = !1, didWarnDefaultChecked = !1, didWarnDefaultSelectValue = !1, didWarnDefaultTextareaValue = !1, didWarnInvalidOptionChildren = !1, didWarnInvalidOptionInnerHTML = !1, didWarnSelectedSetOnOption = !1, didWarnFormActionType = !1, didWarnFormActionName = !1, didWarnFormActionTarget = !1, didWarnFormActionMethod = !1, formReplayingRuntimeScript = 'addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error(\'React form unexpectedly submitted.\')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});', styleRegex = /(<\/|<)(s)(tyle)/gi, leadingNewline = "\n", VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, validatedTagCache = new Map(), endTagCache = new Map(), placeholder1 = '<template id="', placeholder2 = '"></template>', startCompletedSuspenseBoundary = "\x3c!--$--\x3e", startPendingSuspenseBoundary1 = '\x3c!--$?--\x3e<template id="', startPendingSuspenseBoundary2 = '"></template>', startClientRenderedSuspenseBoundary = "\x3c!--$!--\x3e", endSuspenseBoundary = "\x3c!--/$--\x3e", clientRenderedSuspenseBoundaryError1 = "<template", clientRenderedSuspenseBoundaryErrorAttrInterstitial = '"', clientRenderedSuspenseBoundaryError1A = ' data-dgst="', clientRenderedSuspenseBoundaryError1B = ' data-msg="', clientRenderedSuspenseBoundaryError1C = ' data-stck="', clientRenderedSuspenseBoundaryError1D = ' data-cstck="', clientRenderedSuspenseBoundaryError2 = "></template>", boundaryPreambleContributionChunkStart = "\x3c!--", boundaryPreambleContributionChunkEnd = "--\x3e", startSegmentHTML = '<div hidden id="', startSegmentHTML2 = '">', endSegmentHTML = "</div>", startSegmentSVG = '<svg aria-hidden="true" style="display:none" id="', startSegmentSVG2 = '">', endSegmentSVG = "</svg>", startSegmentMathML = '<math aria-hidden="true" style="display:none" id="', startSegmentMathML2 = '">', endSegmentMathML = "</math>", startSegmentTable = '<table hidden id="', startSegmentTable2 = '">', endSegmentTable = "</table>", startSegmentTableBody = '<table hidden><tbody id="', startSegmentTableBody2 = '">', endSegmentTableBody = "</tbody></table>", startSegmentTableRow = '<table hidden><tr id="', startSegmentTableRow2 = '">', endSegmentTableRow = "</tr></table>", startSegmentColGroup = '<table hidden><colgroup id="', startSegmentColGroup2 = '">', endSegmentColGroup = "</colgroup></table>", completeSegmentScript1Full = '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("', completeSegmentScript1Partial = '$RS("', completeSegmentScript2 = '","', completeSegmentScriptEnd = '")\x3c/script>', completeBoundaryScript1Full = '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("', completeBoundaryScript1Partial = '$RC("', completeBoundaryWithStylesScript1FullBoth = '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("', completeBoundaryWithStylesScript1FullPartial = '$RM=new Map;\n$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=\nd;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,\nt,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("', completeBoundaryWithStylesScript1Partial = '$RR("', completeBoundaryScript2 = '","', completeBoundaryScript3a = '",', completeBoundaryScript3b = '"', completeBoundaryScriptEnd = ")\x3c/script>", clientRenderScript1Full = '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("', clientRenderScript1Partial = '$RX("', clientRenderScript1A = '"', clientRenderErrorScriptArgInterstitial = ",", clientRenderScriptEnd = ")\x3c/script>", regexForJSStringsInInstructionScripts = /[<\u2028\u2029]/g, regexForJSStringsInScripts = /[&><\u2028\u2029]/g, lateStyleTagResourceOpen1 = '<style media="not all" data-precedence="', lateStyleTagResourceOpen2 = '" data-href="', lateStyleTagResourceOpen3 = '">', lateStyleTagTemplateClose = "</style>", currentlyRenderingBoundaryHasStylesToHoist = !1, destinationHasCapacity = !0, stylesheetFlushingQueue = [], styleTagResourceOpen1 = '<style data-precedence="', styleTagResourceOpen2 = '" data-href="', spaceSeparator = " ", styleTagResourceOpen3 = '">', styleTagResourceClose = "</style>", arrayFirstOpenBracket = "[", arraySubsequentOpenBracket = ",[", arrayInterstitial = ",", arrayCloseBracket = "]", PENDING$1 = 0, PRELOADED = 1, PREAMBLE = 2, LATE = 3, regexForHrefInLinkHeaderURLContext = /[<>\r\n]/g, regexForLinkHeaderQuotedParamValueContext = /["';,\r\n]/g, doctypeChunk = "", bind = Function.prototype.bind, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), emptyContextObject = {};
    Object.freeze(emptyContextObject);
    var rendererSigil = {};
    var currentActiveSnapshot = null, didWarnAboutNoopUpdateForComponent = {}, didWarnAboutDeprecatedWillMount = {};
    var didWarnAboutUninitializedState = new Set();
    var didWarnAboutGetSnapshotBeforeUpdateWithoutDidUpdate = new Set();
    var didWarnAboutLegacyLifecyclesAndDerivedState = new Set();
    var didWarnAboutDirectlyAssigningPropsToState = new Set();
    var didWarnAboutUndefinedDerivedState = new Set();
    var didWarnAboutContextTypes$1 = new Set();
    var didWarnAboutChildContextTypes = new Set();
    var didWarnAboutInvalidateContextType = new Set();
    var didWarnOnInvalidCallback = new Set();
    var classComponentUpdater = {
        enqueueSetState: function(inst, payload, callback) {
            var internals = inst._reactInternals;
            null === internals.queue ? warnNoop(inst, "setState") : (internals.queue.push(payload), void 0 !== callback && null !== callback && warnOnInvalidCallback(callback));
        },
        enqueueReplaceState: function(inst, payload, callback) {
            inst = inst._reactInternals;
            inst.replace = !0;
            inst.queue = [
                payload
            ];
            void 0 !== callback && null !== callback && warnOnInvalidCallback(callback);
        },
        enqueueForceUpdate: function(inst, callback) {
            null === inst._reactInternals.queue ? warnNoop(inst, "forceUpdate") : void 0 !== callback && null !== callback && warnOnInvalidCallback(callback);
        }
    }, emptyTreeContext = {
        id: 1,
        overflow: ""
    }, clz32 = Math.clz32 ? Math.clz32 : clz32Fallback, log = Math.log, LN2 = Math.LN2, SuspenseException = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."), suspendedThenable = null, objectIs = "function" === typeof Object.is ? Object.is : is, currentlyRenderingComponent = null, currentlyRenderingTask = null, currentlyRenderingRequest = null, currentlyRenderingKeyPath = null, firstWorkInProgressHook = null, workInProgressHook = null, isReRender = !1, didScheduleRenderPhaseUpdate = !1, localIdCounter = 0, actionStateCounter = 0, actionStateMatchingIndex = -1, thenableIndexCounter = 0, thenableState = null, renderPhaseUpdates = null, numberOfReRenders = 0, isInHookUserCodeInDev = !1, currentHookNameInDev, HooksDispatcher = {
        readContext: readContext,
        use: function(usable) {
            if (null !== usable && "object" === typeof usable) {
                if ("function" === typeof usable.then) return unwrapThenable(usable);
                if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
            }
            throw Error("An unsupported type was passed to use(): " + String(usable));
        },
        useContext: function(context) {
            currentHookNameInDev = "useContext";
            resolveCurrentlyRenderingComponent();
            return context._currentValue2;
        },
        useMemo: useMemo,
        useReducer: useReducer,
        useRef: function(initialValue) {
            currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
            workInProgressHook = createWorkInProgressHook();
            var previousRef = workInProgressHook.memoizedState;
            return null === previousRef ? (initialValue = {
                current: initialValue
            }, Object.seal(initialValue), workInProgressHook.memoizedState = initialValue) : previousRef;
        },
        useState: function(initialState) {
            currentHookNameInDev = "useState";
            return useReducer(basicStateReducer, initialState);
        },
        useInsertionEffect: noop$1,
        useLayoutEffect: noop$1,
        useCallback: function(callback, deps) {
            return useMemo(function() {
                return callback;
            }, deps);
        },
        useImperativeHandle: noop$1,
        useEffect: noop$1,
        useDebugValue: noop$1,
        useDeferredValue: function(value, initialValue) {
            resolveCurrentlyRenderingComponent();
            return void 0 !== initialValue ? initialValue : value;
        },
        useTransition: function() {
            resolveCurrentlyRenderingComponent();
            return [
                !1,
                unsupportedStartTransition
            ];
        },
        useId: function() {
            var treeId = currentlyRenderingTask.treeContext;
            var overflow = treeId.overflow;
            treeId = treeId.id;
            treeId = (treeId & ~(1 << 32 - clz32(treeId) - 1)).toString(32) + overflow;
            var resumableState = currentResumableState;
            if (null === resumableState) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
            overflow = localIdCounter++;
            treeId = "\u00ab" + resumableState.idPrefix + "R" + treeId;
            0 < overflow && (treeId += "H" + overflow.toString(32));
            return treeId + "\u00bb";
        },
        useSyncExternalStore: function(subscribe, getSnapshot, getServerSnapshot) {
            if (void 0 === getServerSnapshot) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
            return getServerSnapshot();
        },
        useOptimistic: function(passthrough) {
            resolveCurrentlyRenderingComponent();
            return [
                passthrough,
                unsupportedSetOptimisticState
            ];
        },
        useActionState: useActionState,
        useFormState: useActionState,
        useHostTransitionStatus: function() {
            resolveCurrentlyRenderingComponent();
            return NotPending;
        },
        useMemoCache: function(size) {
            for(var data = Array(size), i = 0; i < size; i++)data[i] = REACT_MEMO_CACHE_SENTINEL;
            return data;
        },
        useCacheRefresh: function() {
            return unsupportedRefresh;
        }
    }, currentResumableState = null, currentTaskInDEV = null, DefaultAsyncDispatcher = {
        getCacheForType: function() {
            throw Error("Not implemented.");
        },
        getOwner: function() {
            return null === currentTaskInDEV ? null : currentTaskInDEV.componentStack;
        }
    }, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix, suffix, reentry = !1;
    var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
    var callComponent = {
        react_stack_bottom_frame: function(Component, props, secondArg) {
            return Component(props, secondArg);
        }
    }, callComponentInDEV = callComponent.react_stack_bottom_frame.bind(callComponent), callRender = {
        react_stack_bottom_frame: function(instance) {
            return instance.render();
        }
    }, callRenderInDEV = callRender.react_stack_bottom_frame.bind(callRender), callLazyInit = {
        react_stack_bottom_frame: function(lazy) {
            var init = lazy._init;
            return init(lazy._payload);
        }
    }, callLazyInitInDEV = callLazyInit.react_stack_bottom_frame.bind(callLazyInit), lastResetTime = 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        var getCurrentTime = function() {
            return localPerformance.now();
        };
    } else {
        var localDate = Date;
        getCurrentTime = function() {
            return localDate.now();
        };
    }
    var CLIENT_RENDERED = 4, PENDING = 0, COMPLETED = 1, FLUSHED = 2, POSTPONED = 5, CLOSED = 14, currentRequest = null, didWarnAboutBadClass = {}, didWarnAboutContextTypes = {}, didWarnAboutContextTypeOnFunctionComponent = {}, didWarnAboutGetDerivedStateOnFunctionComponent = {}, didWarnAboutReassigningProps = !1, didWarnAboutGenerators = !1, didWarnAboutMaps = !1;
    exports.renderToStaticMarkup = function(children, options) {
        return renderToStringImpl(children, options, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    };
    exports.renderToString = function(children, options) {
        return renderToStringImpl(children, options, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    };
    exports.version = "19.1.1";
})();

},{"d3f816476090dd4d":"h4Eti","c148eaa60bb723ef":"btIan"}]},["7Ry4E"], null, "parcelRequireedff", {}, "../", "/", "http://localhost:1234")

//# sourceMappingURL=server.d7b4b64c.js.map
