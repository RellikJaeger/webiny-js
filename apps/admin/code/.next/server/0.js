exports.ids = [0];
exports.modules = {

/***/ "./components/NetworkError.tsx":
/*!*************************************!*\
  !*** ./components/NetworkError.tsx ***!
  \*************************************/
/*! exports provided: NetworkError, GET_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkError", function() { return NetworkError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ERROR", function() { return GET_ERROR; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _webiny_ui_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @webiny/ui/Alert */ "@webiny/ui/Alert");
/* harmony import */ var _webiny_ui_Alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webiny_ui_Alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _webiny_ui_Elevation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @webiny/ui/Elevation */ "@webiny/ui/Elevation");
/* harmony import */ var _webiny_ui_Elevation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webiny_ui_Elevation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\webiny\\webiny-v5\\apps\\admin\\code\\components\\NetworkError.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const GET_ERROR = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
    {
        networkError
    }
`;
const errorStyle = Object(emotion__WEBPACK_IMPORTED_MODULE_5__["css"])({
  margin: 50,
  padding: "15px 25px 5px 25px",
  boxSizing: "border-box"
});
const Code = _emotion_styled__WEBPACK_IMPORTED_MODULE_6___default()("span")({
  padding: "2px 5px",
  margin: "0 2px",
  borderRadius: "5px",
  color: "var(--webiny-theme-color-on-primary)",
  backgroundColor: "var(--webiny-theme-color-primary)"
});
const Paragraph = _emotion_styled__WEBPACK_IMPORTED_MODULE_6___default()("span")({
  lineHeight: 1.8
});

const NetworkError = ({
  children
}) => {
  const {
    data
  } = Object(react_apollo__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_ERROR, {
    fetchPolicy: "cache-only"
  });

  if (!process.env.REACT_APP_GRAPHQL_API_URL && false) {
    return __jsx(_webiny_ui_Elevation__WEBPACK_IMPORTED_MODULE_4__["Elevation"], {
      className: errorStyle,
      z: 2,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }, __jsx(_webiny_ui_Alert__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
      type: "danger",
      title: "GraphQL API is unavailable",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, __jsx(Paragraph, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, "Looks like you've deployed your apps before deploying an API for them.", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    }), "Make sure you deploy a matching API environment before deploying your apps by running", __jsx(Code, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 25
      }
    }, "yarn webiny deploy api --env=your-env"), ". This is necessary for your apps to be built correctly.", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }
    }), "Once your API is deployed, deploy your apps by running", __jsx(Code, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }, "yarn webiny deploy apps --env=your-env"), "."), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }), __jsx(Paragraph, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, "For step by step instructions on deploying your apps, visit our", " ", __jsx("a", {
      target: "_blank",
      rel: "noreferrer",
      href: "https://docs.webiny.com/docs/get-started/going-live",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 25
      }
    }, "Going Live guide"), ".")));
  }

  if (!process.env.REACT_APP_GRAPHQL_API_URL && true) {
    return __jsx(_webiny_ui_Elevation__WEBPACK_IMPORTED_MODULE_4__["Elevation"], {
      className: errorStyle,
      z: 2,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }, __jsx(_webiny_ui_Alert__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
      type: "danger",
      title: "GraphQL API is unavailable",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }, __jsx(Paragraph, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }
    }, "Looks like you've started your app before deploying an API for it.", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }), "Make sure you deploy a ", __jsx(Code, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 48
      }
    }, "local"), " environment of your API by running", __jsx(Code, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 25
      }
    }, "yarn webiny deploy api --env=local"), ". This is necessary to run local React apps.", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 25
      }
    }), "Once your API is deployed, restart this app via your terminal by running", " ", __jsx(Code, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 25
      }
    }, "yarn start"), " again."), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }
    }), __jsx(Paragraph, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 21
      }
    }, "For step by step instructions on getting started with Webiny, visit our", " ", __jsx("a", {
      target: "_blank",
      rel: "noreferrer",
      href: "https://docs.webiny.com/docs/get-started/quick-start",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 25
      }
    }, "Quick Start guide"), ".")));
  }

  return data && data.networkError ? __jsx(_webiny_ui_Elevation__WEBPACK_IMPORTED_MODULE_4__["Elevation"], {
    className: errorStyle,
    z: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx(_webiny_ui_Alert__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    type: "danger",
    title: "GraphQL API is unavailable",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(Paragraph, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, "Your API seems to be unavailable!", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }), "Make sure your API is working by visiting", " ", __jsx("a", {
    href: process.env.REACT_APP_GRAPHQL_API_URL,
    target: "_blank",
    rel: "noreferrer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  }, process.env.REACT_APP_GRAPHQL_API_URL), ".", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }), "If you've recently deployed your API, please allow ", __jsx(Code, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 76
    }
  }, "~10 minutes"), " ", "for your API URL to become available."))) : children;
};



/***/ }),

/***/ "./components/Telemetry.tsx":
/*!**********************************!*\
  !*** ./components/Telemetry.tsx ***!
  \**********************************/
/*! exports provided: Telemetry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Telemetry", function() { return Telemetry; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _webiny_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @webiny/react-router */ "@webiny/react-router");
/* harmony import */ var _webiny_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_webiny_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _webiny_tracking_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @webiny/tracking/react */ "@webiny/tracking/react");
/* harmony import */ var _webiny_tracking_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_webiny_tracking_react__WEBPACK_IMPORTED_MODULE_2__);



const Telemetry = () => {
  const router = Object(_webiny_react_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_webiny_tracking_react__WEBPACK_IMPORTED_MODULE_2__["sendEvent"])("pageview", {
      url: router.location.pathname,
      domain: window.location.origin
    });
    return router.history.listen(location => {
      Object(_webiny_tracking_react__WEBPACK_IMPORTED_MODULE_2__["sendEvent"])("pageview", {
        url: location.pathname,
        domain: window.location.origin
      });
    });
  }, []);
  return null;
};

/***/ }),

/***/ "./components/admin.tsx":
/*!******************************!*\
  !*** ./components/admin.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _webiny_app_contexts_Ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @webiny/app/contexts/Ui */ "@webiny/app/contexts/Ui");
/* harmony import */ var _webiny_app_contexts_Ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_webiny_app_contexts_Ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _webiny_app_components_Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @webiny/app/components/Routes */ "@webiny/app/components/Routes");
/* harmony import */ var _webiny_app_components_Routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webiny_app_components_Routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _webiny_app_i18n_contexts_I18N__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @webiny/app-i18n/contexts/I18N */ "@webiny/app-i18n/contexts/I18N");
/* harmony import */ var _webiny_app_i18n_contexts_I18N__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webiny_app_i18n_contexts_I18N__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _webiny_app_security__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @webiny/app-security */ "@webiny/app-security");
/* harmony import */ var _webiny_app_security__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_webiny_app_security__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _webiny_ui_Progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @webiny/ui/Progress */ "@webiny/ui/Progress");
/* harmony import */ var _webiny_ui_Progress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_webiny_ui_Progress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _webiny_app_admin_components_AppInstaller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @webiny/app-admin/components/AppInstaller */ "@webiny/app-admin/components/AppInstaller");
/* harmony import */ var _webiny_app_admin_components_AppInstaller__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_webiny_app_admin_components_AppInstaller__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _webiny_app_page_builder_contexts_PageBuilder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @webiny/app-page-builder/contexts/PageBuilder */ "@webiny/app-page-builder/contexts/PageBuilder");
/* harmony import */ var _webiny_app_page_builder_contexts_PageBuilder__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_webiny_app_page_builder_contexts_PageBuilder__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _webiny_react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @webiny/react-router */ "@webiny/react-router");
/* harmony import */ var _webiny_react_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_webiny_react_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _webiny_app_plugin_security_cognito_Authentication__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @webiny/app-plugin-security-cognito/Authentication */ "@webiny/app-plugin-security-cognito/Authentication");
/* harmony import */ var _webiny_app_plugin_security_cognito_Authentication__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_webiny_app_plugin_security_cognito_Authentication__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _apolloClient__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./apolloClient */ "./components/apolloClient.ts");
/* harmony import */ var _NetworkError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NetworkError */ "./components/NetworkError.tsx");
/* harmony import */ var _Telemetry__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Telemetry */ "./components/Telemetry.tsx");
/* harmony import */ var _getIdentityData__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./getIdentityData */ "./components/getIdentityData.ts");
var _jsxFileName = "D:\\webiny\\webiny-v5\\apps\\admin\\code\\components\\admin.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







 // TODO: import { CmsProvider } from "@webiny/app-headless-cms/admin/contexts/Cms";







 // import "cross-fetch/polyfill";
// import "core-js/stable";
// import "regenerator-runtime/runtime";
// Import styles which include custom theme styles
// import "./App.scss";

const App = () => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"], {
  client: Object(_apolloClient__WEBPACK_IMPORTED_MODULE_11__["createApolloClient"])(),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}, __jsx(_webiny_app_security__WEBPACK_IMPORTED_MODULE_5__["SecurityProvider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }
}, __jsx(_NetworkError__WEBPACK_IMPORTED_MODULE_12__["NetworkError"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 13
  }
}, __jsx(_webiny_react_router__WEBPACK_IMPORTED_MODULE_9__["BrowserRouter"], {
  basename: process.env.PUBLIC_URL,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 17
  }
}, __jsx(_Telemetry__WEBPACK_IMPORTED_MODULE_13__["Telemetry"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 21
  }
}), __jsx(_webiny_app_contexts_Ui__WEBPACK_IMPORTED_MODULE_2__["UiProvider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 21
  }
}, __jsx(_webiny_app_i18n_contexts_I18N__WEBPACK_IMPORTED_MODULE_4__["I18NProvider"], {
  loader: __jsx(_webiny_ui_Progress__WEBPACK_IMPORTED_MODULE_6__["CircularProgress"], {
    label: "Loading locales...",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 47
    }
  }),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 25
  }
}, __jsx(_webiny_app_admin_components_AppInstaller__WEBPACK_IMPORTED_MODULE_7__["AppInstaller"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 29
  }
}, __jsx(_webiny_app_plugin_security_cognito_Authentication__WEBPACK_IMPORTED_MODULE_10__["Authentication"], {
  getIdentityData: _getIdentityData__WEBPACK_IMPORTED_MODULE_14__["getIdentityData"],
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 33
  }
}, __jsx(_webiny_app_page_builder_contexts_PageBuilder__WEBPACK_IMPORTED_MODULE_8__["PageBuilderProvider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 37
  }
}, __jsx(_webiny_app_components_Routes__WEBPACK_IMPORTED_MODULE_3__["Routes"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 41
  }
}))))))))));

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/apolloClient.ts":
/*!************************************!*\
  !*** ./components/apolloClient.ts ***!
  \************************************/
/*! exports provided: createApolloClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApolloClient", function() { return createApolloClient; });
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link */ "apollo-link");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link_batch_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-batch-http */ "apollo-link-batch-http");
/* harmony import */ var apollo_link_batch_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_batch_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-error */ "apollo-link-error");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link_error__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _webiny_app_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @webiny/app/graphql */ "@webiny/app/graphql");
/* harmony import */ var _webiny_app_graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_webiny_app_graphql__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _webiny_plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @webiny/plugins */ "@webiny/plugins");
/* harmony import */ var _webiny_plugins__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_webiny_plugins__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _NetworkError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NetworkError */ "./components/NetworkError.tsx");








const createApolloClient = () => {
  return new apollo_client__WEBPACK_IMPORTED_MODULE_0___default.a({
    link: apollo_link__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"].from([
    /**
     * This link will store information about the error into Apollo Cache. We then use it within `NetworkError`
     * component to render useful information and directions on how to proceed.
     */
    new apollo_link_error__WEBPACK_IMPORTED_MODULE_3__["ErrorLink"](({
      networkError,
      operation
    }) => {
      if (networkError) {
        const {
          cache
        } = operation.getContext();
        cache.writeQuery({
          query: _NetworkError__WEBPACK_IMPORTED_MODULE_7__["GET_ERROR"],
          data: {
            networkError: "UNAVAILABLE"
          }
        });
      }
    }),
    /**
     * This link removes `__typename` from the variables being sent to the API.
     */
    Object(_webiny_app_graphql__WEBPACK_IMPORTED_MODULE_5__["createOmitTypenameLink"])(),
    /**
     * This allows you to register links using plugins. For example, "app-plugin-security-cognito" package
     * adds an authorization header to each request by registering an "apollo-link" plugin.
     */
    ..._webiny_plugins__WEBPACK_IMPORTED_MODULE_6__["plugins"].byType("apollo-link").map(pl => pl.createLink()),
    /**
     * This batches requests made to the API to pack multiple requests into a single HTTP request.
     */
    new apollo_link_batch_http__WEBPACK_IMPORTED_MODULE_2__["BatchHttpLink"]({
      uri: process.env.REACT_APP_GRAPHQL_API_URL
    })]),
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]({
      addTypename: true,
      dataIdFromObject: obj => obj.id || null
    })
  });
};

/***/ }),

/***/ "./components/getIdentityData.ts":
/*!***************************************!*\
  !*** ./components/getIdentityData.ts ***!
  \***************************************/
/*! exports provided: getIdentityData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIdentityData", function() { return getIdentityData; });
/* harmony import */ var _webiny_app_security_user_management_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @webiny/app-security-user-management/graphql */ "@webiny/app-security-user-management/graphql");
/* harmony import */ var _webiny_app_security_user_management_graphql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_webiny_app_security_user_management_graphql__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * `getIdentityData` is a function that has to return information about the identity (a user within Webiny).
 * ========================================================================================
 * This function will be executed after Cognito (or any other identity provider you may use) validates the credentials
 * and obtains a valid JWT. Since JWT doesn't contain all the necessary information about a user, we need to perform the
 * "login" mutation, which doesn't really do anything except fetches the user's information our app needs (like permissions, avatar, etc.)
 *
 * Using this "login" mutation you can return custom data relevant to the business logic of your app.
 * The `payload` argument contains the whole JWT token so you can conditionally perform different mutations depending on
 * the information contained within the JWT.
 */

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

const getIdentityData = async ({
  client,
  payload
}) => {
  const {
    data
  } = await client.mutate({
    mutation: _webiny_app_security_user_management_graphql__WEBPACK_IMPORTED_MODULE_0__["LOGIN"]
  });
  const identity = data.security.login.data;
  return _objectSpread(_objectSpread({}, identity), {}, {
    avatar: identity.avatar ? identity.avatar : {
      src: identity.gravatar
    }
  });
};

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05ldHdvcmtFcnJvci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UZWxlbWV0cnkudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYWRtaW4udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXBvbGxvQ2xpZW50LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2V0SWRlbnRpdHlEYXRhLnRzIl0sIm5hbWVzIjpbIkdFVF9FUlJPUiIsImdxbCIsImVycm9yU3R5bGUiLCJjc3MiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwiQ29kZSIsInN0eWxlZCIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiUGFyYWdyYXBoIiwibGluZUhlaWdodCIsIk5ldHdvcmtFcnJvciIsImNoaWxkcmVuIiwiZGF0YSIsInVzZVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX0dSQVBIUUxfQVBJX1VSTCIsIm5ldHdvcmtFcnJvciIsIlRlbGVtZXRyeSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInNlbmRFdmVudCIsInVybCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJkb21haW4iLCJ3aW5kb3ciLCJvcmlnaW4iLCJoaXN0b3J5IiwibGlzdGVuIiwiQXBwIiwiY3JlYXRlQXBvbGxvQ2xpZW50IiwiUFVCTElDX1VSTCIsImdldElkZW50aXR5RGF0YSIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJBcG9sbG9MaW5rIiwiZnJvbSIsIkVycm9yTGluayIsIm9wZXJhdGlvbiIsImNhY2hlIiwiZ2V0Q29udGV4dCIsIndyaXRlUXVlcnkiLCJxdWVyeSIsImNyZWF0ZU9taXRUeXBlbmFtZUxpbmsiLCJwbHVnaW5zIiwiYnlUeXBlIiwibWFwIiwicGwiLCJjcmVhdGVMaW5rIiwiQmF0Y2hIdHRwTGluayIsInVyaSIsIkluTWVtb3J5Q2FjaGUiLCJhZGRUeXBlbmFtZSIsImRhdGFJZEZyb21PYmplY3QiLCJvYmoiLCJpZCIsImNsaWVudCIsInBheWxvYWQiLCJtdXRhdGUiLCJtdXRhdGlvbiIsIkxPR0lOIiwiaWRlbnRpdHkiLCJzZWN1cml0eSIsImxvZ2luIiwiYXZhdGFyIiwic3JjIiwiZ3JhdmF0YXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyxrREFBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxDQUpBO0FBTUEsTUFBTUMsVUFBVSxHQUFHQyxtREFBRyxDQUFDO0FBQ25CQyxRQUFNLEVBQUUsRUFEVztBQUVuQkMsU0FBTyxFQUFFLG9CQUZVO0FBR25CQyxXQUFTLEVBQUU7QUFIUSxDQUFELENBQXRCO0FBTUEsTUFBTUMsSUFBSSxHQUFHQyxzREFBTSxDQUFDLE1BQUQsQ0FBTixDQUFlO0FBQ3hCSCxTQUFPLEVBQUUsU0FEZTtBQUV4QkQsUUFBTSxFQUFFLE9BRmdCO0FBR3hCSyxjQUFZLEVBQUUsS0FIVTtBQUl4QkMsT0FBSyxFQUFFLHNDQUppQjtBQUt4QkMsaUJBQWUsRUFBRTtBQUxPLENBQWYsQ0FBYjtBQVFBLE1BQU1DLFNBQVMsR0FBR0osc0RBQU0sQ0FBQyxNQUFELENBQU4sQ0FBZTtBQUM3QkssWUFBVSxFQUFFO0FBRGlCLENBQWYsQ0FBbEI7O0FBSUEsTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQ25DLFFBQU07QUFBRUM7QUFBRixNQUFXQyw2REFBUSxDQUFDakIsU0FBRCxFQUFZO0FBQUVrQixlQUFXLEVBQUU7QUFBZixHQUFaLENBQXpCOztBQUVBLE1BQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHlCQUFiLFNBQUosRUFBcUY7QUFDakYsV0FDSSxNQUFDLDhEQUFEO0FBQVcsZUFBUyxFQUFFbkIsVUFBdEI7QUFBa0MsT0FBQyxF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QUNDLEVBQUosSUFBVTtBQUZkLEtBQWxCO0FBL0JhLEdBQWpCLENBQVA7QUFvQ0gsQ0FyQ00sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RQO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFDTyxNQUFNdkIsZUFBZSxHQUFHLE9BQU87QUFBRXdCLFFBQUY7QUFBVUM7QUFBVixDQUFQLEtBQStCO0FBQzFELFFBQU07QUFBRWhEO0FBQUYsTUFBVyxNQUFNK0MsTUFBTSxDQUFDRSxNQUFQLENBQWM7QUFBRUMsWUFBUSxFQUFFQyxrRkFBS0E7QUFBakIsR0FBZCxDQUF2QjtBQUNBLFFBQU1DLFFBQVEsR0FBR3BELElBQUksQ0FBQ3FELFFBQUwsQ0FBY0MsS0FBZCxDQUFvQnRELElBQXJDO0FBRUEseUNBQ09vRCxRQURQO0FBRUlHLFVBQU0sRUFBRUgsUUFBUSxDQUFDRyxNQUFULEdBQWtCSCxRQUFRLENBQUNHLE1BQTNCLEdBQW9DO0FBQUVDLFNBQUcsRUFBRUosUUFBUSxDQUFDSztBQUFoQjtBQUZoRDtBQUlILENBUk0sQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwiQHdlYmlueS91aS9BbGVydFwiO1xuaW1wb3J0IHsgRWxldmF0aW9uIH0gZnJvbSBcIkB3ZWJpbnkvdWkvRWxldmF0aW9uXCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiZW1vdGlvblwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmNvbnN0IEdFVF9FUlJPUiA9IGdxbGBcbiAgICB7XG4gICAgICAgIG5ldHdvcmtFcnJvclxuICAgIH1cbmA7XG5cbmNvbnN0IGVycm9yU3R5bGUgPSBjc3Moe1xuICAgIG1hcmdpbjogNTAsXG4gICAgcGFkZGluZzogXCIxNXB4IDI1cHggNXB4IDI1cHhcIixcbiAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiXG59KTtcblxuY29uc3QgQ29kZSA9IHN0eWxlZChcInNwYW5cIikoe1xuICAgIHBhZGRpbmc6IFwiMnB4IDVweFwiLFxuICAgIG1hcmdpbjogXCIwIDJweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBjb2xvcjogXCJ2YXIoLS13ZWJpbnktdGhlbWUtY29sb3Itb24tcHJpbWFyeSlcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidmFyKC0td2ViaW55LXRoZW1lLWNvbG9yLXByaW1hcnkpXCJcbn0pO1xuXG5jb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQoXCJzcGFuXCIpKHtcbiAgICBsaW5lSGVpZ2h0OiAxLjhcbn0pO1xuXG5jb25zdCBOZXR3b3JrRXJyb3IgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShHRVRfRVJST1IsIHsgZmV0Y2hQb2xpY3k6IFwiY2FjaGUtb25seVwiIH0pO1xuXG4gICAgaWYgKCFwcm9jZXNzLmVudi5SRUFDVF9BUFBfR1JBUEhRTF9BUElfVVJMICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEVsZXZhdGlvbiBjbGFzc05hbWU9e2Vycm9yU3R5bGV9IHo9ezJ9PlxuICAgICAgICAgICAgICAgIDxBbGVydCB0eXBlPXtcImRhbmdlclwifSB0aXRsZT17XCJHcmFwaFFMIEFQSSBpcyB1bmF2YWlsYWJsZVwifT5cbiAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvb2tzIGxpa2UgeW91JiMzOTt2ZSBkZXBsb3llZCB5b3VyIGFwcHMgYmVmb3JlIGRlcGxveWluZyBhbiBBUEkgZm9yIHRoZW0uXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1ha2Ugc3VyZSB5b3UgZGVwbG95IGEgbWF0Y2hpbmcgQVBJIGVudmlyb25tZW50IGJlZm9yZSBkZXBsb3lpbmcgeW91ciBhcHBzXG4gICAgICAgICAgICAgICAgICAgICAgICBieSBydW5uaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29kZT55YXJuIHdlYmlueSBkZXBsb3kgYXBpIC0tZW52PXlvdXItZW52PC9Db2RlPi4gVGhpcyBpcyBuZWNlc3NhcnkgZm9yXG4gICAgICAgICAgICAgICAgICAgICAgICB5b3VyIGFwcHMgdG8gYmUgYnVpbHQgY29ycmVjdGx5LlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBPbmNlIHlvdXIgQVBJIGlzIGRlcGxveWVkLCBkZXBsb3kgeW91ciBhcHBzIGJ5IHJ1bm5pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2RlPnlhcm4gd2ViaW55IGRlcGxveSBhcHBzIC0tZW52PXlvdXItZW52PC9Db2RlPi5cbiAgICAgICAgICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgICAgICAgICAgICAgICAgRm9yIHN0ZXAgYnkgc3RlcCBpbnN0cnVjdGlvbnMgb24gZGVwbG95aW5nIHlvdXIgYXBwcywgdmlzaXQgb3Vye1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9e1wiX2JsYW5rXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPXtcIm5vcmVmZXJyZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcImh0dHBzOi8vZG9jcy53ZWJpbnkuY29tL2RvY3MvZ2V0LXN0YXJ0ZWQvZ29pbmctbGl2ZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvaW5nIExpdmUgZ3VpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5cbiAgICAgICAgICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICAgIDwvRWxldmF0aW9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmICghcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0dSQVBIUUxfQVBJX1VSTCAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RWxldmF0aW9uIGNsYXNzTmFtZT17ZXJyb3JTdHlsZX0gej17Mn0+XG4gICAgICAgICAgICAgICAgPEFsZXJ0IHR5cGU9e1wiZGFuZ2VyXCJ9IHRpdGxlPXtcIkdyYXBoUUwgQVBJIGlzIHVuYXZhaWxhYmxlXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9va3MgbGlrZSB5b3UmIzM5O3ZlIHN0YXJ0ZWQgeW91ciBhcHAgYmVmb3JlIGRlcGxveWluZyBhbiBBUEkgZm9yIGl0LlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBNYWtlIHN1cmUgeW91IGRlcGxveSBhIDxDb2RlPmxvY2FsPC9Db2RlPiBlbnZpcm9ubWVudCBvZiB5b3VyIEFQSSBieSBydW5uaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29kZT55YXJuIHdlYmlueSBkZXBsb3kgYXBpIC0tZW52PWxvY2FsPC9Db2RlPi4gVGhpcyBpcyBuZWNlc3NhcnkgdG8gcnVuXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbCBSZWFjdCBhcHBzLlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBPbmNlIHlvdXIgQVBJIGlzIGRlcGxveWVkLCByZXN0YXJ0IHRoaXMgYXBwIHZpYSB5b3VyIHRlcm1pbmFsIGJ5IHJ1bm5pbmd7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29kZT55YXJuIHN0YXJ0PC9Db2RlPiBhZ2Fpbi5cbiAgICAgICAgICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgICAgICAgICAgICAgICAgRm9yIHN0ZXAgYnkgc3RlcCBpbnN0cnVjdGlvbnMgb24gZ2V0dGluZyBzdGFydGVkIHdpdGggV2ViaW55LCB2aXNpdCBvdXJ7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD17XCJfYmxhbmtcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9e1wibm9yZWZlcnJlclwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1wiaHR0cHM6Ly9kb2NzLndlYmlueS5jb20vZG9jcy9nZXQtc3RhcnRlZC9xdWljay1zdGFydFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1aWNrIFN0YXJ0IGd1aWRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAuXG4gICAgICAgICAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgICAgICAgIDwvQWxlcnQ+XG4gICAgICAgICAgICA8L0VsZXZhdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YSAmJiBkYXRhLm5ldHdvcmtFcnJvciA/IChcbiAgICAgICAgPEVsZXZhdGlvbiBjbGFzc05hbWU9e2Vycm9yU3R5bGV9IHo9ezJ9PlxuICAgICAgICAgICAgPEFsZXJ0IHR5cGU9e1wiZGFuZ2VyXCJ9IHRpdGxlPXtcIkdyYXBoUUwgQVBJIGlzIHVuYXZhaWxhYmxlXCJ9PlxuICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgICAgICAgICAgIFlvdXIgQVBJIHNlZW1zIHRvIGJlIHVuYXZhaWxhYmxlIVxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgTWFrZSBzdXJlIHlvdXIgQVBJIGlzIHdvcmtpbmcgYnkgdmlzaXRpbmd7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5SRUFDVF9BUFBfR1JBUEhRTF9BUElfVVJMfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXtcIl9ibGFua1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPXtcIm5vcmVmZXJyZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2Nlc3MuZW52LlJFQUNUX0FQUF9HUkFQSFFMX0FQSV9VUkx9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgLlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgSWYgeW91JiMzOTt2ZSByZWNlbnRseSBkZXBsb3llZCB5b3VyIEFQSSwgcGxlYXNlIGFsbG93IDxDb2RlPlxuICAgICAgICAgICAgICAgICAgICAgICAgfjEwIG1pbnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgPC9Db2RlPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgZm9yIHlvdXIgQVBJIFVSTCB0byBiZWNvbWUgYXZhaWxhYmxlLlxuICAgICAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgPC9FbGV2YXRpb24+XG4gICAgKSA6IChcbiAgICAgICAgY2hpbGRyZW5cbiAgICApO1xufTtcblxuZXhwb3J0IHsgTmV0d29ya0Vycm9yLCBHRVRfRVJST1IgfTtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIkB3ZWJpbnkvcmVhY3Qtcm91dGVyXCI7XG5pbXBvcnQgeyBzZW5kRXZlbnQgfSBmcm9tIFwiQHdlYmlueS90cmFja2luZy9yZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgVGVsZW1ldHJ5ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2VuZEV2ZW50KFwicGFnZXZpZXdcIiwge1xuICAgICAgICAgICAgdXJsOiByb3V0ZXIubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgICBkb21haW46IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJvdXRlci5oaXN0b3J5Lmxpc3Rlbihsb2NhdGlvbiA9PiB7XG4gICAgICAgICAgICBzZW5kRXZlbnQoXCJwYWdldmlld1wiLCB7XG4gICAgICAgICAgICAgICAgdXJsOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgICBkb21haW46IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xyXG5pbXBvcnQgeyBVaVByb3ZpZGVyIH0gZnJvbSBcIkB3ZWJpbnkvYXBwL2NvbnRleHRzL1VpXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAd2ViaW55L2FwcC9jb21wb25lbnRzL1JvdXRlc1wiO1xyXG5pbXBvcnQgeyBJMThOUHJvdmlkZXIgfSBmcm9tIFwiQHdlYmlueS9hcHAtaTE4bi9jb250ZXh0cy9JMThOXCI7XHJcbmltcG9ydCB7IFNlY3VyaXR5UHJvdmlkZXIgfSBmcm9tIFwiQHdlYmlueS9hcHAtc2VjdXJpdHlcIjtcclxuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzcyB9IGZyb20gXCJAd2ViaW55L3VpL1Byb2dyZXNzXCI7XHJcbmltcG9ydCB7IEFwcEluc3RhbGxlciB9IGZyb20gXCJAd2ViaW55L2FwcC1hZG1pbi9jb21wb25lbnRzL0FwcEluc3RhbGxlclwiO1xyXG4vLyBUT0RPOiBpbXBvcnQgeyBDbXNQcm92aWRlciB9IGZyb20gXCJAd2ViaW55L2FwcC1oZWFkbGVzcy1jbXMvYWRtaW4vY29udGV4dHMvQ21zXCI7XHJcbmltcG9ydCB7IFBhZ2VCdWlsZGVyUHJvdmlkZXIgfSBmcm9tIFwiQHdlYmlueS9hcHAtcGFnZS1idWlsZGVyL2NvbnRleHRzL1BhZ2VCdWlsZGVyXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tIFwiQHdlYmlueS9yZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb24gfSBmcm9tIFwiQHdlYmlueS9hcHAtcGx1Z2luLXNlY3VyaXR5LWNvZ25pdG8vQXV0aGVudGljYXRpb25cIjtcclxuaW1wb3J0IHsgY3JlYXRlQXBvbGxvQ2xpZW50IH0gZnJvbSBcIi4vYXBvbGxvQ2xpZW50XCI7XHJcbmltcG9ydCB7IE5ldHdvcmtFcnJvciB9IGZyb20gXCIuL05ldHdvcmtFcnJvclwiO1xyXG5pbXBvcnQgeyBUZWxlbWV0cnkgfSBmcm9tIFwiLi9UZWxlbWV0cnlcIjtcclxuaW1wb3J0IHsgZ2V0SWRlbnRpdHlEYXRhIH0gZnJvbSBcIi4vZ2V0SWRlbnRpdHlEYXRhXCI7XHJcblxyXG4vLyBpbXBvcnQgXCJjcm9zcy1mZXRjaC9wb2x5ZmlsbFwiO1xyXG4vLyBpbXBvcnQgXCJjb3JlLWpzL3N0YWJsZVwiO1xyXG4vLyBpbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcclxuXHJcbi8vIEltcG9ydCBzdHlsZXMgd2hpY2ggaW5jbHVkZSBjdXN0b20gdGhlbWUgc3R5bGVzXHJcbi8vIGltcG9ydCBcIi4vQXBwLnNjc3NcIjtcclxuXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiAoXHJcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjcmVhdGVBcG9sbG9DbGllbnQoKX0+XHJcbiAgICAgICAgey8qXHJcbiAgICAgICAgICAgIDxTZWN1cml0eVByb3ZpZGVyPiBpcyBhIGdlbmVyaWMgcHJvdmlkZXIgb2YgaWRlbnRpdHkgaW5mb3JtYXRpb24uIDNyZCBwYXJ0eSBpZGVudGl0eSBwcm92aWRlcnMgKGxpa2UgQ29nbml0byxcclxuICAgICAgICAgICAgT2t0YSwgQXV0aDApIHdpbGwgaGFuZGxlIHRoZSBhdXRoZW50aWNhdGlvbiwgYW5kIHNldCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVzZXIgaW50byB0aGlzIHByb3ZpZGVyLFxyXG4gICAgICAgICAgICBzbyBvdGhlciBwYXJ0cyBvZiB0aGUgc3lzdGVtIGhhdmUgYSBjZW50cmFsaXplZCBwbGFjZSB0byBmZXRjaCB1c2VyIGluZm9ybWF0aW9uIGZyb20uXHJcbiAgICAgICAgKi99XHJcbiAgICAgICAgPFNlY3VyaXR5UHJvdmlkZXI+XHJcbiAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgPE5ldHdvcmtFcnJvcj4gcmVuZGVycyBuZXR3b3JrIGVycm9yIGluZm9ybWF0aW9uIHdoZW4gdGhlcmUgYXJlIHByb2JsZW1zIGNvbW11bmljYXRpbmcgd2l0aCB5b3VyIEdyYXBoUUwgQVBJLlxyXG4gICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgPE5ldHdvcmtFcnJvcj5cclxuICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPiBpcyBhbiBlbmhhbmNlZCB2ZXJzaW9uIG9mIFwicmVhY3Qtcm91dGVyXCIgdG8gYWRkIHNvbWUgY2FwYWJpbGl0aWVzIHNwZWNpZmljIHRvIFdlYmlueS5cclxuICAgICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAgICAgPEJyb3dzZXJSb3V0ZXIgYmFzZW5hbWU9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHRoZSBXZWJpbnkgdGVsZW1ldHJ5IHN5c3RlbSwgZm9yIG1vcmUgaW5mb3JtYXRpb24gcGxlYXNlIHZpc2l0OiBodHRwczovL2RvY3Mud2ViaW55LmNvbS9kb2NzL3dlYmlueS10ZWxlbWV0cnlcclxuICAgICAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgICAgICA8VGVsZW1ldHJ5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxVaVByb3ZpZGVyPiBpcyBhIGNlbnRyYWxpemVkIHN0YXRlIGhhbmRsZXIgZm9yIFVJIHJlbGF0ZWQgdGhpbmdzLiBXaGVuIHlvdSBuZWVkIHRvIHJlbmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLCBzbmFja2JhcnMsIGhhbmRsZSBkYXJrIG1vZGUsIHlvdSBjYW4gdXNlIHRoZSBcInVzZVVpKClcIiBob29rIHRvIHNldC91bnNldCBVSSBpbmZvcm1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRob3V0IGxvc2luZyB0aGUgc3RhdGUgb24gcm91dGUgdHJhbnNpdGlvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5PVEU6IHdlIGRvIG5vdCByZWNvbW1lbmQgdXNpbmcgdGhpcyBwcm92aWRlciBmb3IgeW91IGFwcGxpY2F0aW9uIGRhdGEsIGl0J3MganVzdCBhIGhlbHBlciBzdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyIHRvIGhhbmRsZSBVSSBlYXNpZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPFVpUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE5Qcm92aWRlcj4gbG9hZHMgc3lzdGVtIGxvY2FsZXMuIFdlYmlueSBzdXBwb3J0cyBtdWx0aS1sYW5ndWFnZSBjb250ZW50IGFuZCBsYW5ndWFnZS1iYXNlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnMsIHNvIHdlIGFsd2F5cyBuZWVkIHRvIGtub3cgYWxsIGxvY2FsZXMgdG8gYmUgYWJsZSB0byByZW5kZXIgbGFuZ3VhZ2Ugc2VsZWN0b3JzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHNlbmQgdGhlIHByb3BlciBsb2NhbGUgY29kZSB0byB0aGUgR3JhcGhRTCBBUEkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8STE4TlByb3ZpZGVyIGxvYWRlcj17PENpcmN1bGFyUHJvZ3Jlc3MgbGFiZWw9e1wiTG9hZGluZyBsb2NhbGVzLi4uXCJ9IC8+fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBJbnN0YWxsZXI+IGNoZWNrcyBhbmQgcnVucyBhcHAgaW5zdGFsbGVycyByZWdpc3RlcmVkIHZpYSBcImFkbWluLWluc3RhbGxhdGlvblwiIHBsdWdpbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVxdWlyZXMgXCJhcHAtaW5zdGFsbGVyLXNlY3VyaXR5XCIgcGx1Z2luIGNvbmZpZ3VyZWQgaW4gXCIuL3BsdWdpbnMvc2VjdXJpdHkudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIHJlbmRlciBsb2dpbiBmb3IgcHJvdGVjdGVkIGluc3RhbGxlcnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBJbnN0YWxsZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9uY2UgYWxsIGluc3RhbGxlcnMgYXJlIGV4ZWN1dGVkLCA8QXV0aGVudGljYXRpb24+IGlzIG1vdW50ZWQgdG8gY2hlY2sgdGhlIGlkZW50aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBwcm9tcHQgZm9yIGxvZ2luLCBpZiBuZWNlc3NhcnkuIE9uY2UgbG9nZ2VkIGluLCBpdCBzZXRzIHRoZSBpZGVudGl0eSBkYXRhIGludG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIDxTZWN1cml0eVByb3ZpZGVyPi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0aGVudGljYXRpb24gZ2V0SWRlbnRpdHlEYXRhPXtnZXRJZGVudGl0eURhdGF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdlQnVpbGRlclByb3ZpZGVyPiBoYW5kbGVzIFwicGItdGhlbWVcIiBwbHVnaW5zIGFuZCBjb21iaW5lcyB0aGVtIGludG8gYSBzaW5nbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGhlbWVcIiBvYmplY3QuIFlvdSBjYW4gYnVpbGQgeW91ciB0aGVtZSB1c2luZyBtdWx0aXBsZSBcInBiLXRoZW1lXCIgcGx1Z2lucyBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW4gYWNjZXNzIGlzIHVzaW5nIFwidXNlUGFnZUJ1aWxkZXIoKVwiIGhvb2suXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnZUJ1aWxkZXJQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbXNQcm92aWRlcj4gaGFuZGxlcyBDTVMgZW52aXJvbm1lbnRzIGFuZCBwcm92aWRlcyBhbiBBcG9sbG8gQ2xpZW50IGluc3RhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCBwb2ludHMgdG8gdGhlIC9tYW5hZ2UgR3JhcGhRTCBBUEkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxDbXNQcm92aWRlcj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVzLz4gaXMgYSBoZWxwZXIgY29tcG9uZW50IHRoYXQgbG9hZHMgYWxsIFwicm91dGVcIiBwbHVnaW5zLCBzb3J0cyB0aGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIHRoZSBjb3JyZWN0IFwicGF0aFwiIG9yZGVyIGFuZCByZW5kZXJzIHVzaW5nIHRoZSA8U3dpdGNoPiBjb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvIG9ubHkgdGhlIG1hdGNoaW5nIHJvdXRlIGlzIHJlbmRlcmVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9DbXNQcm92aWRlcj4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYWdlQnVpbGRlclByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXV0aGVudGljYXRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FwcEluc3RhbGxlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JMThOUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9VaVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICA8L05ldHdvcmtFcnJvcj5cclxuICAgICAgICA8L1NlY3VyaXR5UHJvdmlkZXI+XHJcbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgQXBvbGxvQ2xpZW50IGZyb20gXCJhcG9sbG8tY2xpZW50XCI7XG5pbXBvcnQgeyBBcG9sbG9MaW5rIH0gZnJvbSBcImFwb2xsby1saW5rXCI7XG5pbXBvcnQgeyBCYXRjaEh0dHBMaW5rIH0gZnJvbSBcImFwb2xsby1saW5rLWJhdGNoLWh0dHBcIjtcbmltcG9ydCB7IEVycm9yTGluayB9IGZyb20gXCJhcG9sbG8tbGluay1lcnJvclwiO1xuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gXCJhcG9sbG8tY2FjaGUtaW5tZW1vcnlcIjtcbmltcG9ydCB7IGNyZWF0ZU9taXRUeXBlbmFtZUxpbmsgfSBmcm9tIFwiQHdlYmlueS9hcHAvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgcGx1Z2lucyB9IGZyb20gXCJAd2ViaW55L3BsdWdpbnNcIjtcbmltcG9ydCB7IEdFVF9FUlJPUiB9IGZyb20gXCIuL05ldHdvcmtFcnJvclwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQXBvbGxvQ2xpZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgICAgbGluazogQXBvbGxvTGluay5mcm9tKFtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhpcyBsaW5rIHdpbGwgc3RvcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVycm9yIGludG8gQXBvbGxvIENhY2hlLiBXZSB0aGVuIHVzZSBpdCB3aXRoaW4gYE5ldHdvcmtFcnJvcmBcbiAgICAgICAgICAgICAqIGNvbXBvbmVudCB0byByZW5kZXIgdXNlZnVsIGluZm9ybWF0aW9uIGFuZCBkaXJlY3Rpb25zIG9uIGhvdyB0byBwcm9jZWVkLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBuZXcgRXJyb3JMaW5rKCh7IG5ldHdvcmtFcnJvciwgb3BlcmF0aW9uIH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgY2FjaGUgfSA9IG9wZXJhdGlvbi5nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlLndyaXRlUXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnk6IEdFVF9FUlJPUixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3I6IFwiVU5BVkFJTEFCTEVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhpcyBsaW5rIHJlbW92ZXMgYF9fdHlwZW5hbWVgIGZyb20gdGhlIHZhcmlhYmxlcyBiZWluZyBzZW50IHRvIHRoZSBBUEkuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNyZWF0ZU9taXRUeXBlbmFtZUxpbmsoKSxcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhpcyBhbGxvd3MgeW91IHRvIHJlZ2lzdGVyIGxpbmtzIHVzaW5nIHBsdWdpbnMuIEZvciBleGFtcGxlLCBcImFwcC1wbHVnaW4tc2VjdXJpdHktY29nbml0b1wiIHBhY2thZ2VcbiAgICAgICAgICAgICAqIGFkZHMgYW4gYXV0aG9yaXphdGlvbiBoZWFkZXIgdG8gZWFjaCByZXF1ZXN0IGJ5IHJlZ2lzdGVyaW5nIGFuIFwiYXBvbGxvLWxpbmtcIiBwbHVnaW4uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC4uLnBsdWdpbnMuYnlUeXBlKFwiYXBvbGxvLWxpbmtcIikubWFwKHBsID0+IHBsLmNyZWF0ZUxpbmsoKSksXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFRoaXMgYmF0Y2hlcyByZXF1ZXN0cyBtYWRlIHRvIHRoZSBBUEkgdG8gcGFjayBtdWx0aXBsZSByZXF1ZXN0cyBpbnRvIGEgc2luZ2xlIEhUVFAgcmVxdWVzdC5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbmV3IEJhdGNoSHR0cExpbmsoeyB1cmk6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9HUkFQSFFMX0FQSV9VUkwgfSlcbiAgICAgICAgXSksXG4gICAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XG4gICAgICAgICAgICBhZGRUeXBlbmFtZTogdHJ1ZSxcbiAgICAgICAgICAgIGRhdGFJZEZyb21PYmplY3Q6IG9iaiA9PiBvYmouaWQgfHwgbnVsbFxuICAgICAgICB9KVxuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IExPR0lOIH0gZnJvbSBcIkB3ZWJpbnkvYXBwLXNlY3VyaXR5LXVzZXItbWFuYWdlbWVudC9ncmFwaHFsXCI7XG5cbi8qKlxuICogYGdldElkZW50aXR5RGF0YWAgaXMgYSBmdW5jdGlvbiB0aGF0IGhhcyB0byByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGlkZW50aXR5IChhIHVzZXIgd2l0aGluIFdlYmlueSkuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgYWZ0ZXIgQ29nbml0byAob3IgYW55IG90aGVyIGlkZW50aXR5IHByb3ZpZGVyIHlvdSBtYXkgdXNlKSB2YWxpZGF0ZXMgdGhlIGNyZWRlbnRpYWxzXG4gKiBhbmQgb2J0YWlucyBhIHZhbGlkIEpXVC4gU2luY2UgSldUIGRvZXNuJ3QgY29udGFpbiBhbGwgdGhlIG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiBhYm91dCBhIHVzZXIsIHdlIG5lZWQgdG8gcGVyZm9ybSB0aGVcbiAqIFwibG9naW5cIiBtdXRhdGlvbiwgd2hpY2ggZG9lc24ndCByZWFsbHkgZG8gYW55dGhpbmcgZXhjZXB0IGZldGNoZXMgdGhlIHVzZXIncyBpbmZvcm1hdGlvbiBvdXIgYXBwIG5lZWRzIChsaWtlIHBlcm1pc3Npb25zLCBhdmF0YXIsIGV0Yy4pXG4gKlxuICogVXNpbmcgdGhpcyBcImxvZ2luXCIgbXV0YXRpb24geW91IGNhbiByZXR1cm4gY3VzdG9tIGRhdGEgcmVsZXZhbnQgdG8gdGhlIGJ1c2luZXNzIGxvZ2ljIG9mIHlvdXIgYXBwLlxuICogVGhlIGBwYXlsb2FkYCBhcmd1bWVudCBjb250YWlucyB0aGUgd2hvbGUgSldUIHRva2VuIHNvIHlvdSBjYW4gY29uZGl0aW9uYWxseSBwZXJmb3JtIGRpZmZlcmVudCBtdXRhdGlvbnMgZGVwZW5kaW5nIG9uXG4gKiB0aGUgaW5mb3JtYXRpb24gY29udGFpbmVkIHdpdGhpbiB0aGUgSldULlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cbmV4cG9ydCBjb25zdCBnZXRJZGVudGl0eURhdGEgPSBhc3luYyAoeyBjbGllbnQsIHBheWxvYWQgfSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50Lm11dGF0ZSh7IG11dGF0aW9uOiBMT0dJTiB9KTtcbiAgICBjb25zdCBpZGVudGl0eSA9IGRhdGEuc2VjdXJpdHkubG9naW4uZGF0YTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLmlkZW50aXR5LFxuICAgICAgICBhdmF0YXI6IGlkZW50aXR5LmF2YXRhciA/IGlkZW50aXR5LmF2YXRhciA6IHsgc3JjOiBpZGVudGl0eS5ncmF2YXRhciB9XG4gICAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9