module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/next/dist/pages/_document.js":
/*!*********************************************************************!*\
  !*** D:/webiny/webiny-v5/node_modules/next/dist/pages/_document.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "../next-server/server/get-page-files");

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "../../../node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}

function getDocumentFiles(buildManifest, pathname) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = dedupe(dynamicImports.filter(f => f.file.endsWith('.css'))).map(f => f.file);

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    const cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);
      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    });
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    var _this$props$nonce;

    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props['data-react-helmet'];

        if (!isReactHelmet) {
          var _child$props2;

          if ((child == null ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
          } else if ((child == null ? void 0 : child.type) === 'meta' && (child == null ? void 0 : (_child$props2 = child.props) == null ? void 0 : _child$props2.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  false ? undefined : this.getCssLinks(files), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(files), this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    const {
      dynamicImports,
      assetPrefix,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!bundle.file.endsWith('.js') || files.allFiles.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: !isDevelopment,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts(files) {
    var _buildManifest$lowPri;

    const {
      assetPrefix,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        async: !isDevelopment,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      buildManifest,
      devOnlyCacheBusterQueryString
    } = this.context;
    return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), disableRuntimeJS ? null : this.getDynamicChunks(files), disableRuntimeJS ? null : this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "../../../node_modules/next/dist/server/htmlescape.js":
/*!***********************************************************************!*\
  !*** D:/webiny/webiny-v5/node_modules/next/dist/server/htmlescape.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/get-page-files.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ 2:
/*!***************************************!*\
  !*** multi next/dist/pages/_document ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next/dist/pages/_document */"../../../node_modules/next/dist/pages/_document.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19kb2N1bWVudC50c3giLCJ3ZWJwYWNrOi8vL0Q6L3dlYmlueS93ZWJpbnktdjUvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zZXJ2ZXIvaHRtbGVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc2VydmVyXCIiXSwibmFtZXMiOlsiZmlsZXMiLCJrZXB0IiwiYnVuZGxlIiwicHJvY2VzcyIsInNoYXJlZEZpbGVzIiwicGFnZUZpbGVzIiwiYWxsRmlsZXMiLCJDb21wb25lbnQiLCJlbmhhbmNlQXBwIiwiQXBwIiwicHJvcHMiLCJjdHgiLCJzdHlsZXMiLCJyZW5kZXIiLCJEb2N1bWVudCIsImhlYWRUYWdzTWlkZGxld2FyZSIsIkRvY3VtZW50Q29tcG9uZW50Q29udGV4dCIsImRvY0NvbXBvbmVudHNSZW5kZXJlZCIsImluQW1wTW9kZSIsImdldENzc0xpbmtzIiwiY3NzRmlsZXMiLCJmIiwidW5tYW5nZWRGaWxlcyIsImR5bmFtaWNDc3NGaWxlcyIsImRlZHVwZSIsImR5bmFtaWNJbXBvcnRzIiwiZXhpc3RpbmciLCJjc3NMaW5rRWxlbWVudHMiLCJmaWxlIiwiaXNTaGFyZWRGaWxlIiwiaXNVbm1hbmFnZWRGaWxlIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyIsImdldFByZWxvYWREeW5hbWljQ2h1bmtzIiwiZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50IiwiZ2V0UHJlbG9hZE1haW5MaW5rcyIsInByZWxvYWRGaWxlcyIsIm1ha2VTdHlsZXNoZWV0SW5lcnQiLCJSZWFjdCIsImMiLCJPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMiLCJ1cmwiLCJuZXdQcm9wcyIsImRpc2FibGVSdW50aW1lSlMiLCJ1bnN0YWJsZV9ydW50aW1lSlMiLCJjaGlsZHJlbiIsImNoaWxkIiwiaXNSZWFjdEhlbG1ldCIsImNvbnNvbGUiLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiaGVhZCIsImJhZFByb3AiLCJ0eXBlIiwiT2JqZWN0IiwicHJvcCIsIl9fTkVYVF9EQVRBX18iLCJwYWdlIiwiY3VyU3R5bGVzIiwiQXJyYXkiLCJoYXNTdHlsZXMiLCJlbCIsImdldERvY3VtZW50RmlsZXMiLCJfX2h0bWwiLCJjYW5vbmljYWxCYXNlIiwic3R5bGUiLCJnZXRBbXBQYXRoIiwiaGVhZFRhZ3MiLCJIZWFkIiwiY29udGV4dFR5cGUiLCJwcm9wVHlwZXMiLCJub25jZSIsIlByb3BUeXBlcyIsImNyb3NzT3JpZ2luIiwiQU1QX1JFTkRFUl9UQVJHRVQiLCJnZXREeW5hbWljQ2h1bmtzIiwibW9kZXJuUHJvcHMiLCJnZXRTY3JpcHRzIiwibm9ybWFsU2NyaXB0cyIsImxvd1ByaW9yaXR5U2NyaXB0cyIsImJ1aWxkTWFuaWZlc3QiLCJnZXRQb2x5ZmlsbFNjcmlwdHMiLCJwb2x5ZmlsbCIsImRhdGEiLCJKU09OIiwiZXJyIiwiYW1wRGV2RmlsZXMiLCJOZXh0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LGFBQVcsRUFBRUQsbUJBRkk7QUFBQSxDQUhSZTtBQUFBQSxVLENBV0pDLGlCQVhJRCxHQVlULDBUQVpTQTs7QUFvUGIscUNBQTZEO0FBQzNELFNBQU9FLE9BQU8sSUFBSyxHQUFFQyxNQUFPLEdBQUVBLE1BQU0sQ0FBTkEsc0JBQTZCLEdBQTNEO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDanhCWSx3QkFBd0Isa0RBQWtEO0FBQ3ZGO0FBQ0EscUJBQXFCLGlGQUFpRix3Q0FBd0MsbUNBQW1DO0FBQ2pMLHNDOzs7Ozs7Ozs7OztBQ0hBLG1FOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLDJFOzs7Ozs7Ozs7OztBQ0FBLGtFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL19kb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZsdXNoIGZyb20gJ3N0eWxlZC1qc3gvc2VydmVyJ1xuaW1wb3J0IHtcbiAgQU1QX1JFTkRFUl9UQVJHRVQsXG4gIE9QVElNSVpFRF9GT05UX1BST1ZJREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cydcbmltcG9ydCB7IERvY3VtZW50Q29udGV4dCBhcyBEb2N1bWVudENvbXBvbmVudENvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dCdcbmltcG9ydCB7XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7XG4gIEJ1aWxkTWFuaWZlc3QsXG4gIGdldFBhZ2VGaWxlcyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgY2xlYW5BbXBQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzJ1xuaW1wb3J0IHsgaHRtbEVzY2FwZUpzb25TdHJpbmcgfSBmcm9tICcuLi9zZXJ2ZXIvaHRtbGVzY2FwZSdcblxuZXhwb3J0IHsgRG9jdW1lbnRDb250ZXh0LCBEb2N1bWVudEluaXRpYWxQcm9wcywgRG9jdW1lbnRQcm9wcyB9XG5cbmV4cG9ydCB0eXBlIE9yaWdpblByb3BzID0ge1xuICBub25jZT86IHN0cmluZ1xuICBjcm9zc09yaWdpbj86IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBkZWR1cGU8VCBleHRlbmRzIHsgZmlsZTogc3RyaW5nIH0+KGJ1bmRsZXM6IFRbXSk6IFRbXSB7XG4gIGNvbnN0IGZpbGVzID0gbmV3IFNldDxzdHJpbmc+KClcbiAgY29uc3Qga2VwdDogVFtdID0gW11cblxuICBmb3IgKGNvbnN0IGJ1bmRsZSBvZiBidW5kbGVzKSB7XG4gICAgaWYgKGZpbGVzLmhhcyhidW5kbGUuZmlsZSkpIGNvbnRpbnVlXG4gICAgZmlsZXMuYWRkKGJ1bmRsZS5maWxlKVxuICAgIGtlcHQucHVzaChidW5kbGUpXG4gIH1cbiAgcmV0dXJuIGtlcHRcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKSB7XG4gICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwuanMkLywgJy5tb2R1bGUuanMnKVxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbnR5cGUgRG9jdW1lbnRGaWxlcyA9IHtcbiAgc2hhcmVkRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdXG4gIHBhZ2VGaWxlczogcmVhZG9ubHkgc3RyaW5nW11cbiAgYWxsRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdXG59XG5cbmZ1bmN0aW9uIGdldERvY3VtZW50RmlsZXMoXG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3QsXG4gIHBhdGhuYW1lOiBzdHJpbmdcbik6IERvY3VtZW50RmlsZXMge1xuICBjb25zdCBzaGFyZWRGaWxlczogcmVhZG9ubHkgc3RyaW5nW10gPSBnZXRQYWdlRmlsZXMoYnVpbGRNYW5pZmVzdCwgJy9fYXBwJylcbiAgY29uc3QgcGFnZUZpbGVzOiByZWFkb25seSBzdHJpbmdbXSA9IGdldFBhZ2VGaWxlcyhidWlsZE1hbmlmZXN0LCBwYXRobmFtZSlcblxuICByZXR1cm4ge1xuICAgIHNoYXJlZEZpbGVzLFxuICAgIHBhZ2VGaWxlcyxcbiAgICBhbGxGaWxlczogWy4uLm5ldyBTZXQoWy4uLnNoYXJlZEZpbGVzLCAuLi5wYWdlRmlsZXNdKV0sXG4gIH1cbn1cblxuLyoqXG4gKiBgRG9jdW1lbnRgIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBpbml0aWFsIGBkb2N1bWVudGAgbWFya3VwIGFuZCByZW5kZXJzIG9ubHkgb24gdGhlIHNlcnZlciBzaWRlLlxuICogQ29tbW9ubHkgdXNlZCBmb3IgaW1wbGVtZW50aW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZyBmb3IgYGNzcy1pbi1qc2AgbGlicmFyaWVzLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudDxQID0ge30+IGV4dGVuZHMgQ29tcG9uZW50PERvY3VtZW50UHJvcHMgJiBQPiB7XG4gIHN0YXRpYyBoZWFkVGFnc01pZGRsZXdhcmUgPSBwcm9jZXNzLmVudi5fX05FWFRfUExVR0lOU1xuICAgID8gaW1wb3J0KFxuICAgICAgICAvLyBAdHMtaWdub3JlIGxvYWRlciBzeW50YXhcbiAgICAgICAgJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWhlYWQtdGFncy1zZXJ2ZXIhJ1xuICAgICAgKVxuICAgIDogKCkgPT4gW11cblxuICAvKipcbiAgICogYGdldEluaXRpYWxQcm9wc2AgaG9vayByZXR1cm5zIHRoZSBjb250ZXh0IG9iamVjdCB3aXRoIHRoZSBhZGRpdGlvbiBvZiBgcmVuZGVyUGFnZWAuXG4gICAqIGByZW5kZXJQYWdlYCBjYWxsYmFjayBleGVjdXRlcyBgUmVhY3RgIHJlbmRlcmluZyBsb2dpYyBzeW5jaHJvbm91c2x5IHRvIHN1cHBvcnQgc2VydmVyLXJlbmRlcmluZyB3cmFwcGVyc1xuICAgKi9cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhcbiAgICBjdHg6IERvY3VtZW50Q29udGV4dFxuICApOiBQcm9taXNlPERvY3VtZW50SW5pdGlhbFByb3BzPiB7XG4gICAgY29uc3QgZW5oYW5jZUFwcCA9IChBcHA6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIChwcm9wczogYW55KSA9PiA8QXBwIHsuLi5wcm9wc30gLz5cbiAgICB9XG5cbiAgICBjb25zdCB7IGh0bWwsIGhlYWQgfSA9IGF3YWl0IGN0eC5yZW5kZXJQYWdlKHsgZW5oYW5jZUFwcCB9KVxuICAgIGNvbnN0IHN0eWxlcyA9IFsuLi5mbHVzaCgpXVxuICAgIHJldHVybiB7IGh0bWwsIGhlYWQsIHN0eWxlcyB9XG4gIH1cblxuICBzdGF0aWMgcmVuZGVyRG9jdW1lbnQ8UD4oXG4gICAgRG9jdW1lbnRDb21wb25lbnQ6IG5ldyAoKSA9PiBEb2N1bWVudDxQPixcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wcyAmIFBcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgPERvY3VtZW50Q29tcG9uZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17cHJvcHN9PlxuICAgICAgICA8RG9jdW1lbnRDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgPC9Eb2N1bWVudENvbXBvbmVudENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbD5cbiAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIdG1sKFxuICBwcm9wczogUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8XG4gICAgUmVhY3QuSHRtbEhUTUxBdHRyaWJ1dGVzPEhUTUxIdG1sRWxlbWVudD4sXG4gICAgSFRNTEh0bWxFbGVtZW50XG4gID5cbikge1xuICBjb25zdCB7IGluQW1wTW9kZSwgZG9jQ29tcG9uZW50c1JlbmRlcmVkLCBsb2NhbGUgfSA9IHVzZUNvbnRleHQoXG4gICAgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG4gIClcblxuICBkb2NDb21wb25lbnRzUmVuZGVyZWQuSHRtbCA9IHRydWVcblxuICByZXR1cm4gKFxuICAgIDxodG1sXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBsYW5nPXtwcm9wcy5sYW5nIHx8IGxvY2FsZSB8fCB1bmRlZmluZWR9XG4gICAgICBhbXA9e2luQW1wTW9kZSA/ICcnIDogdW5kZWZpbmVkfVxuICAgICAgZGF0YS1hbXBkZXZtb2RlPXtcbiAgICAgICAgaW5BbXBNb2RlICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAnJyA6IHVuZGVmaW5lZFxuICAgICAgfVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGNsYXNzIEhlYWQgZXh0ZW5kcyBDb21wb25lbnQ8XG4gIE9yaWdpblByb3BzICZcbiAgICBSZWFjdC5EZXRhaWxlZEhUTUxQcm9wczxcbiAgICAgIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxIZWFkRWxlbWVudD4sXG4gICAgICBIVE1MSGVhZEVsZW1lbnRcbiAgICA+XG4+IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBub25jZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcm9zc09yaWdpbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIGNvbnRleHQhOiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0PlxuXG4gIGdldENzc0xpbmtzKGZpbGVzOiBEb2N1bWVudEZpbGVzKTogSlNYLkVsZW1lbnRbXSB8IG51bGwge1xuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgICBkeW5hbWljSW1wb3J0cyxcbiAgICB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3QgY3NzRmlsZXMgPSBmaWxlcy5hbGxGaWxlcy5maWx0ZXIoKGYpID0+IGYuZW5kc1dpdGgoJy5jc3MnKSlcbiAgICBjb25zdCBzaGFyZWRGaWxlczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KGZpbGVzLnNoYXJlZEZpbGVzKVxuXG4gICAgLy8gVW5tYW5hZ2VkIGZpbGVzIGFyZSBDU1MgZmlsZXMgdGhhdCB3aWxsIGJlIGhhbmRsZWQgZGlyZWN0bHkgYnkgdGhlXG4gICAgLy8gd2VicGFjayBydW50aW1lIChgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5gKS5cbiAgICBsZXQgdW5tYW5nZWRGaWxlczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KFtdKVxuICAgIGxldCBkeW5hbWljQ3NzRmlsZXMgPSBkZWR1cGUoXG4gICAgICBkeW5hbWljSW1wb3J0cy5maWx0ZXIoKGYpID0+IGYuZmlsZS5lbmRzV2l0aCgnLmNzcycpKVxuICAgICkubWFwKChmKSA9PiBmLmZpbGUpXG4gICAgaWYgKGR5bmFtaWNDc3NGaWxlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gbmV3IFNldChjc3NGaWxlcylcbiAgICAgIGR5bmFtaWNDc3NGaWxlcyA9IGR5bmFtaWNDc3NGaWxlcy5maWx0ZXIoXG4gICAgICAgIChmKSA9PiAhKGV4aXN0aW5nLmhhcyhmKSB8fCBzaGFyZWRGaWxlcy5oYXMoZikpXG4gICAgICApXG4gICAgICB1bm1hbmdlZEZpbGVzID0gbmV3IFNldChkeW5hbWljQ3NzRmlsZXMpXG4gICAgICBjc3NGaWxlcy5wdXNoKC4uLmR5bmFtaWNDc3NGaWxlcylcbiAgICB9XG5cbiAgICBjb25zdCBjc3NMaW5rRWxlbWVudHM6IEpTWC5FbGVtZW50W10gPSBbXVxuICAgIGNzc0ZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGNvbnN0IGlzU2hhcmVkRmlsZSA9IHNoYXJlZEZpbGVzLmhhcyhmaWxlKVxuICAgICAgY29uc3QgaXNVbm1hbmFnZWRGaWxlID0gdW5tYW5nZWRGaWxlcy5oYXMoZmlsZSlcbiAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17YCR7ZmlsZX0tcHJlbG9hZGB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGFzPVwic3R5bGVcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz4sXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YS1uLWc9e2lzVW5tYW5hZ2VkRmlsZSA/IHVuZGVmaW5lZCA6IGlzU2hhcmVkRmlsZSA/ICcnIDogdW5kZWZpbmVkfVxuICAgICAgICAgIGRhdGEtbi1wPXtpc1VubWFuYWdlZEZpbGUgPyB1bmRlZmluZWQgOiBpc1NoYXJlZEZpbGUgPyB1bmRlZmluZWQgOiAnJ31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICAgIHJldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoID09PSAwID8gbnVsbCA6IGNzc0xpbmtFbGVtZW50c1xuICB9XG5cbiAgZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZHluYW1pY0ltcG9ydHMsXG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiAoXG4gICAgICBkZWR1cGUoZHluYW1pY0ltcG9ydHMpXG4gICAgICAgIC5tYXAoKGJ1bmRsZSkgPT4ge1xuICAgICAgICAgIC8vIGBkeW5hbWljSW1wb3J0c2Agd2lsbCBjb250YWluIGJvdGggYC5qc2AgYW5kIGAubW9kdWxlLmpzYCB3aGVuIHRoZVxuICAgICAgICAgIC8vIGZlYXR1cmUgaXMgZW5hYmxlZC4gVGhpcyBjbGF1c2Ugd2lsbCBmaWx0ZXIgZG93biB0byB0aGUgbW9kZXJuXG4gICAgICAgICAgLy8gdmFyaWFudHMgb25seS5cbiAgICAgICAgICBpZiAoIWJ1bmRsZS5maWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAga2V5PXtidW5kbGUuZmlsZX1cbiAgICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgIGJ1bmRsZS5maWxlXG4gICAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICAvLyBGaWx0ZXIgb3V0IG51bGxlZCBzY3JpcHRzXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICApXG4gIH1cblxuICBnZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzOiBEb2N1bWVudEZpbGVzKTogSlNYLkVsZW1lbnRbXSB8IG51bGwge1xuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXgsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBwcmVsb2FkRmlsZXMgPSBmaWxlcy5hbGxGaWxlcy5maWx0ZXIoKGZpbGU6IHN0cmluZykgPT4ge1xuICAgICAgLy8gYGR5bmFtaWNJbXBvcnRzYCB3aWxsIGNvbnRhaW4gYm90aCBgLmpzYCBhbmQgYC5tb2R1bGUuanNgIHdoZW5cbiAgICAgIC8vIHRoZSBmZWF0dXJlIGlzIGVuYWJsZWQuIFRoaXMgY2xhdXNlIHdpbGwgZmlsdGVyIGRvd24gdG8gdGhlXG4gICAgICAvLyBtb2Rlcm4gdmFyaWFudHMgb25seS5cbiAgICAgIHJldHVybiBmaWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpXG4gICAgfSlcblxuICAgIHJldHVybiAhcHJlbG9hZEZpbGVzLmxlbmd0aFxuICAgICAgPyBudWxsXG4gICAgICA6IHByZWxvYWRGaWxlcy5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgfVxuXG4gIG1ha2VTdHlsZXNoZWV0SW5lcnQobm9kZTogUmVhY3ROb2RlKTogUmVhY3ROb2RlIHtcbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKG5vZGUsIChjOiBhbnkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgYy50eXBlID09PSAnbGluaycgJiZcbiAgICAgICAgYy5wcm9wc1snaHJlZiddICYmXG4gICAgICAgIE9QVElNSVpFRF9GT05UX1BST1ZJREVSUy5zb21lKCh1cmwpID0+IGMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybCkpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7IC4uLihjLnByb3BzIHx8IHt9KSB9XG4gICAgICAgIG5ld1Byb3BzWydkYXRhLWhyZWYnXSA9IG5ld1Byb3BzWydocmVmJ11cbiAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZFxuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsIG5ld1Byb3BzKVxuICAgICAgfSBlbHNlIGlmIChjLnByb3BzICYmIGMucHJvcHNbJ2NoaWxkcmVuJ10pIHtcbiAgICAgICAgYy5wcm9wc1snY2hpbGRyZW4nXSA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjLnByb3BzWydjaGlsZHJlbiddKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlcyxcbiAgICAgIGFtcFBhdGgsXG4gICAgICBpbkFtcE1vZGUsXG4gICAgICBoeWJyaWRBbXAsXG4gICAgICBjYW5vbmljYWxCYXNlLFxuICAgICAgX19ORVhUX0RBVEFfXyxcbiAgICAgIGRhbmdlcm91c0FzUGF0aCxcbiAgICAgIGhlYWRUYWdzLFxuICAgICAgdW5zdGFibGVfcnVudGltZUpTLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuXG4gICAgdGhpcy5jb250ZXh0LmRvY0NvbXBvbmVudHNSZW5kZXJlZC5IZWFkID0gdHJ1ZVxuXG4gICAgbGV0IHsgaGVhZCB9ID0gdGhpcy5jb250ZXh0XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIC8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUmVhY3RIZWxtZXQgPSBjaGlsZD8ucHJvcHM/LlsnZGF0YS1yZWFjdC1oZWxtZXQnXVxuICAgICAgICBpZiAoIWlzUmVhY3RIZWxtZXQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQ/LnR5cGUgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvbm8tZG9jdW1lbnQtdGl0bGVcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBjaGlsZD8udHlwZSA9PT0gJ21ldGEnICYmXG4gICAgICAgICAgICBjaGlsZD8ucHJvcHM/Lm5hbWUgPT09ICd2aWV3cG9ydCdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgXCJXYXJuaW5nOiB2aWV3cG9ydCBtZXRhIHRhZ3Mgc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uby1kb2N1bWVudC12aWV3cG9ydC1tZXRhXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnV2FybmluZzogYEhlYWRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL25leHQuanMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmICFpbkFtcE1vZGUpIHtcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNoaWxkcmVuKVxuICAgIH1cblxuICAgIGxldCBoYXNBbXBodG1sUmVsID0gZmFsc2VcbiAgICBsZXQgaGFzQ2Fub25pY2FsUmVsID0gZmFsc2VcblxuICAgIC8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbiAgICBoZWFkID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGhlYWQgfHwgW10sIChjaGlsZCkgPT4ge1xuICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuIGNoaWxkXG4gICAgICBjb25zdCB7IHR5cGUsIHByb3BzIH0gPSBjaGlsZFxuICAgICAgaWYgKGluQW1wTW9kZSkge1xuICAgICAgICBsZXQgYmFkUHJvcDogc3RyaW5nID0gJydcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ21ldGEnICYmIHByb3BzLm5hbWUgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgICAgICBiYWRQcm9wID0gJ25hbWU9XCJ2aWV3cG9ydFwiJ1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdjYW5vbmljYWwnKSB7XG4gICAgICAgICAgaGFzQ2Fub25pY2FsUmVsID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzY3JpcHQnKSB7XG4gICAgICAgICAgLy8gb25seSBibG9jayBpZlxuICAgICAgICAgIC8vIDEuIGl0IGhhcyBhIHNyYyBhbmQgaXNuJ3QgcG9pbnRpbmcgdG8gYW1wcHJvamVjdCdzIENETlxuICAgICAgICAgIC8vIDIuIGl0IGlzIHVzaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIHdpdGhvdXQgYSB0eXBlIG9yXG4gICAgICAgICAgLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChwcm9wcy5zcmMgJiYgcHJvcHMuc3JjLmluZGV4T2YoJ2FtcHByb2plY3QnKSA8IC0xKSB8fFxuICAgICAgICAgICAgKHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICYmXG4gICAgICAgICAgICAgICghcHJvcHMudHlwZSB8fCBwcm9wcy50eXBlID09PSAndGV4dC9qYXZhc2NyaXB0JykpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBiYWRQcm9wID0gJzxzY3JpcHQnXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICAgICAgICBiYWRQcm9wICs9IGAgJHtwcm9wfT1cIiR7cHJvcHNbcHJvcF19XCJgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYmFkUHJvcCArPSAnLz4nXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJhZFByb3ApIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvY29uZmxpY3RpbmctYW1wLXRhZ2BcbiAgICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm9uLWFtcCBtb2RlXG4gICAgICAgIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnYW1waHRtbCcpIHtcbiAgICAgICAgICBoYXNBbXBodG1sUmVsID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9KVxuXG4gICAgLy8gdHJ5IHRvIHBhcnNlIHN0eWxlcyBmcm9tIGZyYWdtZW50IGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgY29uc3QgY3VyU3R5bGVzOiBSZWFjdC5SZWFjdEVsZW1lbnRbXSA9IEFycmF5LmlzQXJyYXkoc3R5bGVzKVxuICAgICAgPyAoc3R5bGVzIGFzIFJlYWN0LlJlYWN0RWxlbWVudFtdKVxuICAgICAgOiBbXVxuICAgIGlmIChcbiAgICAgIGluQW1wTW9kZSAmJlxuICAgICAgc3R5bGVzICYmXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIHN0eWxlcy5wcm9wcyAmJlxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBBcnJheS5pc0FycmF5KHN0eWxlcy5wcm9wcy5jaGlsZHJlbilcbiAgICApIHtcbiAgICAgIGNvbnN0IGhhc1N0eWxlcyA9IChlbDogUmVhY3QuUmVhY3RFbGVtZW50KSA9PlxuICAgICAgICBlbD8ucHJvcHM/LmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPy5fX2h0bWxcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgc3R5bGVzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWwpID0+IGhhc1N0eWxlcyhlbCkgJiYgY3VyU3R5bGVzLnB1c2goZWwpKVxuICAgICAgICB9IGVsc2UgaWYgKGhhc1N0eWxlcyhjaGlsZCkpIHtcbiAgICAgICAgICBjdXJTdHlsZXMucHVzaChjaGlsZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlczogRG9jdW1lbnRGaWxlcyA9IGdldERvY3VtZW50RmlsZXMoXG4gICAgICB0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCxcbiAgICAgIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2VcbiAgICApXG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAge3RoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5Om5vbmV9YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bm9zY3JpcHRcbiAgICAgICAgICAgICAgZGF0YS1uZXh0LWhpZGUtZm91Y1xuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGU9e2luQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpibG9ja31gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtoZWFkfVxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJuZXh0LWhlYWQtY291bnRcIlxuICAgICAgICAgIGNvbnRlbnQ9e1JlYWN0LkNoaWxkcmVuLmNvdW50KGhlYWQgfHwgW10pLnRvU3RyaW5nKCl9XG4gICAgICAgIC8+XG4gICAgICAgIHtpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHshaGFzQ2Fub25pY2FsUmVsICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJjYW5vbmljYWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBjbGVhbkFtcFBhdGgoZGFuZ2Vyb3VzQXNQYXRoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogaHR0cHM6Ly93d3cuYW1wcHJvamVjdC5vcmcvZG9jcy9mdW5kYW1lbnRhbHMvb3B0aW1pemVfYW1wI29wdGltaXplLXRoZS1hbXAtcnVudGltZS1sb2FkaW5nICovfVxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7LyogQWRkIGN1c3RvbSBzdHlsZXMgYmVmb3JlIEFNUCBzdHlsZXMgdG8gcHJldmVudCBhY2NpZGVudGFsIG92ZXJyaWRlcyAqL31cbiAgICAgICAgICAgIHtzdHlsZXMgJiYgKFxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtY3VzdG9tPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBjdXJTdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3R5bGUpID0+IHN0eWxlLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbClcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywgJycpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywgJycpLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGFtcC1ib2lsZXJwbGF0ZT1cIlwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IGBib2R5ey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7LW1vei1hbmltYXRpb246bm9uZTstbXMtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9YCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIiAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7IWluQW1wTW9kZSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHshaGFzQW1waHRtbFJlbCAmJiBoeWJyaWRBbXAgJiYgKFxuICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgIHJlbD1cImFtcGh0bWxcIlxuICAgICAgICAgICAgICAgIGhyZWY9e2Nhbm9uaWNhbEJhc2UgKyBnZXRBbXBQYXRoKGFtcFBhdGgsIGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3Byb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UU1xuICAgICAgICAgICAgICA/IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydCh0aGlzLmdldENzc0xpbmtzKGZpbGVzKSlcbiAgICAgICAgICAgICAgOiB0aGlzLmdldENzc0xpbmtzKGZpbGVzKX1cbiAgICAgICAgICAgIDxub3NjcmlwdCBkYXRhLW4tY3NzPXt0aGlzLnByb3BzLm5vbmNlID8/ICcnfSAvPlxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFByZWxvYWRNYWluTGlua3MoZmlsZXMpfVxuICAgICAgICAgICAge3RoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICAgICAgLy8gdGhpcyBlbGVtZW50IGlzIHVzZWQgdG8gbW91bnQgZGV2ZWxvcG1lbnQgc3R5bGVzIHNvIHRoZVxuICAgICAgICAgICAgICAvLyBvcmRlcmluZyBtYXRjaGVzIHByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgLy8gKGJ5IGRlZmF1bHQsIHN0eWxlLWxvYWRlciBpbmplY3RzIGF0IHRoZSBib3R0b20gb2YgPGhlYWQgLz4pXG4gICAgICAgICAgICAgIDxub3NjcmlwdCBpZD1cIl9fbmV4dF9jc3NfX0RPX05PVF9VU0VfX1wiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3N0eWxlcyB8fCBudWxsfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIC4uLihoZWFkVGFncyB8fCBbXSkpfVxuICAgICAgPC9oZWFkPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3QgeyBpbkFtcE1vZGUsIGh0bWwsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCB9ID0gdXNlQ29udGV4dChcbiAgICBEb2N1bWVudENvbXBvbmVudENvbnRleHRcbiAgKVxuXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5NYWluID0gdHJ1ZVxuXG4gIGlmIChpbkFtcE1vZGUpIHJldHVybiA8PntBTVBfUkVOREVSX1RBUkdFVH08Lz5cbiAgcmV0dXJuIDxkaXYgaWQ9XCJfX25leHRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0gLz5cbn1cblxuZXhwb3J0IGNsYXNzIE5leHRTY3JpcHQgZXh0ZW5kcyBDb21wb25lbnQ8T3JpZ2luUHJvcHM+IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBub25jZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcm9zc09yaWdpbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIGNvbnRleHQhOiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0PlxuXG4gIC8vIFNvdXJjZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vc2FtdGhvci82NGIxMTRlNGE0ZjUzOTkxNWE5NWI5MWZmZDM0MGFjY1xuICBzdGF0aWMgc2FmYXJpTm9tb2R1bGVGaXggPVxuICAgICchZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudCx0PWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZighKFwibm9Nb2R1bGVcImluIHQpJiZcIm9uYmVmb3JlbG9hZFwiaW4gdCl7dmFyIG49ITE7ZS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlbG9hZFwiLGZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0PT09dCluPSEwO2Vsc2UgaWYoIWUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcIm5vbW9kdWxlXCIpfHwhbilyZXR1cm47ZS5wcmV2ZW50RGVmYXVsdCgpfSwhMCksdC50eXBlPVwibW9kdWxlXCIsdC5zcmM9XCIuXCIsZS5oZWFkLmFwcGVuZENoaWxkKHQpLHQucmVtb3ZlKCl9fSgpOydcblxuICBnZXREeW5hbWljQ2h1bmtzKGZpbGVzOiBEb2N1bWVudEZpbGVzKSB7XG4gICAgY29uc3Qge1xuICAgICAgZHluYW1pY0ltcG9ydHMsXG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGlzRGV2ZWxvcG1lbnQsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICByZXR1cm4gZGVkdXBlKGR5bmFtaWNJbXBvcnRzKS5tYXAoKGJ1bmRsZSkgPT4ge1xuICAgICAgbGV0IG1vZGVyblByb3BzID0ge31cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKSB7XG4gICAgICAgIG1vZGVyblByb3BzID0gYnVuZGxlLmZpbGUuZW5kc1dpdGgoJy5tb2R1bGUuanMnKVxuICAgICAgICAgID8geyB0eXBlOiAnbW9kdWxlJyB9XG4gICAgICAgICAgOiB7IG5vTW9kdWxlOiB0cnVlIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFidW5kbGUuZmlsZS5lbmRzV2l0aCgnLmpzJykgfHwgZmlsZXMuYWxsRmlsZXMuaW5jbHVkZXMoYnVuZGxlLmZpbGUpKVxuICAgICAgICByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmM9eyFpc0RldmVsb3BtZW50fVxuICAgICAgICAgIGtleT17YnVuZGxlLmZpbGV9XG4gICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBidW5kbGUuZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgICB7Li4ubW9kZXJuUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGdldFNjcmlwdHMoZmlsZXM6IERvY3VtZW50RmlsZXMpIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGJ1aWxkTWFuaWZlc3QsXG4gICAgICBpc0RldmVsb3BtZW50LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgY29uc3Qgbm9ybWFsU2NyaXB0cyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZSkgPT4gZmlsZS5lbmRzV2l0aCgnLmpzJykpXG4gICAgY29uc3QgbG93UHJpb3JpdHlTY3JpcHRzID0gYnVpbGRNYW5pZmVzdC5sb3dQcmlvcml0eUZpbGVzPy5maWx0ZXIoKGZpbGUpID0+XG4gICAgICBmaWxlLmVuZHNXaXRoKCcuanMnKVxuICAgIClcblxuICAgIHJldHVybiBbLi4ubm9ybWFsU2NyaXB0cywgLi4ubG93UHJpb3JpdHlTY3JpcHRzXS5tYXAoKGZpbGUpID0+IHtcbiAgICAgIGxldCBtb2Rlcm5Qcm9wcyA9IHt9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCkge1xuICAgICAgICBtb2Rlcm5Qcm9wcyA9IGZpbGUuZW5kc1dpdGgoJy5tb2R1bGUuanMnKVxuICAgICAgICAgID8geyB0eXBlOiAnbW9kdWxlJyB9XG4gICAgICAgICAgOiB7IG5vTW9kdWxlOiB0cnVlIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBhc3luYz17IWlzRGV2ZWxvcG1lbnR9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAgIHsuLi5tb2Rlcm5Qcm9wc31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZ2V0UG9seWZpbGxTY3JpcHRzKCkge1xuICAgIC8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuICAgIC8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgYnVpbGRNYW5pZmVzdCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiBidWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXNcbiAgICAgIC5maWx0ZXIoXG4gICAgICAgIChwb2x5ZmlsbCkgPT5cbiAgICAgICAgICBwb2x5ZmlsbC5lbmRzV2l0aCgnLmpzJykgJiYgIXBvbHlmaWxsLmVuZHNXaXRoKCcubW9kdWxlLmpzJylcbiAgICAgIClcbiAgICAgIC5tYXAoKHBvbHlmaWxsKSA9PiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBrZXk9e3BvbHlmaWxsfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgICBub01vZHVsZT17dHJ1ZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgLz5cbiAgICAgICkpXG4gIH1cblxuICBzdGF0aWMgZ2V0SW5saW5lU2NyaXB0U291cmNlKGRvY3VtZW50UHJvcHM6IFJlYWRvbmx5PERvY3VtZW50UHJvcHM+KTogc3RyaW5nIHtcbiAgICBjb25zdCB7IF9fTkVYVF9EQVRBX18gfSA9IGRvY3VtZW50UHJvcHNcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KF9fTkVYVF9EQVRBX18pXG4gICAgICByZXR1cm4gaHRtbEVzY2FwZUpzb25TdHJpbmcoZGF0YSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIubWVzc2FnZS5pbmRleE9mKCdjaXJjdWxhciBzdHJ1Y3R1cmUnKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYENpcmN1bGFyIHN0cnVjdHVyZSBpbiBcImdldEluaXRpYWxQcm9wc1wiIHJlc3VsdCBvZiBwYWdlIFwiJHtfX05FWFRfREFUQV9fLnBhZ2V9XCIuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2NpcmN1bGFyLXN0cnVjdHVyZWBcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgaW5BbXBNb2RlLFxuICAgICAgYnVpbGRNYW5pZmVzdCxcbiAgICAgIHVuc3RhYmxlX3J1bnRpbWVKUyxcbiAgICAgIGRvY0NvbXBvbmVudHNSZW5kZXJlZCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuXG4gICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLk5leHRTY3JpcHQgPSB0cnVlXG5cbiAgICBpZiAoaW5BbXBNb2RlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBhbXBEZXZGaWxlcyA9IFtcbiAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5kZXZGaWxlcyxcbiAgICAgICAgLi4uYnVpbGRNYW5pZmVzdC5hbXBEZXZGaWxlcyxcbiAgICAgIF1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiAoXG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGlkPVwiX19ORVhUX0RBVEFfX1wiXG4gICAgICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0KSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2FtcERldkZpbGVzLm1hcCgoZmlsZSkgPT4gKFxuICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICAgIHNyYz17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZmlsZX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnV2FybmluZzogYE5leHRTY3JpcHRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL25leHQuanMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlczogRG9jdW1lbnRGaWxlcyA9IGdldERvY3VtZW50RmlsZXMoXG4gICAgICB0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCxcbiAgICAgIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2VcbiAgICApXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiBidWlsZE1hbmlmZXN0LmRldkZpbGVzXG4gICAgICAgICAgPyBidWlsZE1hbmlmZXN0LmRldkZpbGVzLm1hcCgoZmlsZTogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICAgICAgKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9XG4gICAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICA6IG51bGx9XG4gICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IChcbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBpZD1cIl9fTkVYVF9EQVRBX19cIlxuICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7cHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCAmJiAhZGlzYWJsZVJ1bnRpbWVKUyA/IChcbiAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub01vZHVsZT17dHJ1ZX1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgIF9faHRtbDogTmV4dFNjcmlwdC5zYWZhcmlOb21vZHVsZUZpeCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpfVxuICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiB0aGlzLmdldER5bmFtaWNDaHVua3MoZmlsZXMpfVxuICAgICAgICB7ZGlzYWJsZVJ1bnRpbWVKUyA/IG51bGwgOiB0aGlzLmdldFNjcmlwdHMoZmlsZXMpfVxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFtcFBhdGgoYW1wUGF0aDogc3RyaW5nLCBhc1BhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBhbXBQYXRoIHx8IGAke2FzUGF0aH0ke2FzUGF0aC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nfWFtcD0xYFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5odG1sRXNjYXBlSnNvblN0cmluZz1odG1sRXNjYXBlSnNvblN0cmluZzsvLyBUaGlzIHV0aWxpdHkgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZVxuLy8gTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZS9ibG9iLzA1MjdjYTcxNTZhNTI0ZDI1NjEwMWJiMzEwYTlmOTcwZjYzMDc4YWQvTElDRU5TRVxuY29uc3QgRVNDQVBFX0xPT0tVUD17JyYnOidcXFxcdTAwMjYnLCc+JzonXFxcXHUwMDNlJywnPCc6J1xcXFx1MDAzYycsJ1xcdTIwMjgnOidcXFxcdTIwMjgnLCdcXHUyMDI5JzonXFxcXHUyMDI5J307Y29uc3QgRVNDQVBFX1JFR0VYPS9bJj48XFx1MjAyOFxcdTIwMjldL2c7ZnVuY3Rpb24gaHRtbEVzY2FwZUpzb25TdHJpbmcoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoRVNDQVBFX1JFR0VYLG1hdGNoPT5FU0NBUEVfTE9PS1VQW21hdGNoXSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aHRtbGVzY2FwZS5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9