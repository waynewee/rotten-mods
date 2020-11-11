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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0lvd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_CrossIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("uUid");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7koQ");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const FormModal = ({
  children,
  title,
  backgroundColor,
  isModalVisible,
  setModalVisibility,
  submitColor,
  onSubmit,
  submitText = "Submit"
}) => {
  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
    isOpen: isModalVisible,
    style: {
      overlay: styles.overlay,
      content: _objectSpread(_objectSpread({}, styles.content), {}, {
        backgroundColor
      })
    }
  }, __jsx("div", {
    style: styles.header
  }, __jsx("span", null, title), __jsx("div", {
    onClick: () => setModalVisibility(false)
  }, __jsx(_icons_CrossIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    style: styles.closeButton
  }))), children, __jsx("div", {
    style: _objectSpread(_objectSpread({}, styles.submitButton), {}, {
      backgroundColor: submitColor
    }),
    onClick: onSubmit
  }, submitText));
};

const styles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(232, 232, 232, 0.5)",
    zIndex: 10
  },
  content: {
    position: "static",
    width: 600,
    color: "#fff",
    borderRadius: 15,
    borderWidth: 0,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    padding: "30px 30px 20px 30px",
    zIndex: 11
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 25,
    marginBottom: 20
  },
  closeButton: {
    color: "#fff",
    transform: "scale(0.8)",
    cursor: "pointer"
  },
  submitButton: {
    width: "100%",
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    cursor: "pointer",
    textAlign: "center",
    padding: 7,
    borderRadius: 8
  }
};
/* harmony default export */ __webpack_exports__["a"] = (FormModal);

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
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

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

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
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7koQ":
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "EHoS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOG_USER_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOG_USER_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SEARCH_TERM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_MODULE_FOR_COMPARISON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DELETE_MODULE_FOR_COMPARISON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FIRST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_BOOKMARKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FETCH_PLANNED_MODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FETCH_PERSONAL_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FETCH_SCHOOLS; });
const LOG_USER_IN = "LOG_USER_IN";
const LOG_USER_OUT = "LOG_USER_OUT";
const SEARCH_TERM = "SEARCH_TERM";
const ADD_MODULE_FOR_COMPARISON = "ADD_MODULE_FOR_COMPARISON";
const DELETE_MODULE_FOR_COMPARISON = "DELETE_MODULE_FOR_COMPARISON";
const FIRST = "FIRST";
const SECOND = "SECOND";
const FETCH_BOOKMARKS = "FETCH_BOOKMARKS";
const FETCH_PLANNED_MODS = "FETCH_PLANNED_MODS";
const FETCH_PERSONAL_REVIEWS = "FETCH_PERSONAL_REVIEWS";
const FETCH_SCHOOLS = "FETCH_SCHOOLS";

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "HNwB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const {
  TextArea
} = antd__WEBPACK_IMPORTED_MODULE_1__["Input"];
const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];

const FormModalItem = ({
  type = "input",
  label,
  value,
  setValue,
  options,
  searchTerm,
  setSearchTerm
}) => {
  const {
    0: firstIsChecked,
    1: setFirstIsChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: secondIsChecked,
    1: setSecondIsChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: searchOptions,
    1: setSearchOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(options !== null && options !== void 0 ? options : []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setSearchOptions(options);
  }, [options]);

  const toggleCheckbox = index => event => {
    const newValue = parseInt(event.target.value) === 0 ? 1 : 0;
    const isChecked = newValue === 1;

    if (index === 1) {
      setFirstIsChecked(newValue);
      setValue([isChecked, value[1]]);
    } else {
      setSecondIsChecked(newValue);
      setValue([value[0], isChecked]);
    }
  };

  const renderInput = () => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    style: styles.input,
    value: value,
    onChange: e => setValue(e.target.value)
  });

  const renderTextArea = () => __jsx(TextArea, {
    style: styles.input,
    rows: 4,
    autoSize: {
      minRows: 4,
      maxRows: 4
    },
    value: value,
    onChange: e => setValue(e.target.value)
  });

  const renderText = () => __jsx("span", {
    style: styles.text
  }, value);

  const renderRate = () => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], {
    defaultValue: value,
    onChange: setValue
  });

  const renderDifficulty = () => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], {
    defaultValue: value,
    style: styles.rateObjects,
    onChange: setValue,
    character: ({
      index
    }) => {
      return __jsx("span", {
        style: {
          marginRight: 9
        }
      }, index + 1);
    }
  });

  const renderNumber = () => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
    style: styles.inputNumber,
    value: value,
    onChange: e => setValue(e)
  });

  const renderYear = () => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    style: styles.inputNumber,
    onChange: setValue,
    defaultValue: value
  }, __jsx(Option, {
    value: 1
  }, "1"), __jsx(Option, {
    value: 2
  }, "2"), __jsx(Option, {
    value: 3
  }, "3"), __jsx(Option, {
    value: 4
  }, "4"));

  const renderSemester = () => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    style: styles.inputNumber,
    onChange: setValue,
    defaultValue: value
  }, __jsx(Option, {
    value: 1
  }, "1"), __jsx(Option, {
    value: 2
  }, "2"));

  const renderSemesters = () => __jsx("div", {
    style: {
      display: "flex",
      alignItems: "center",
      height: 34
    }
  }, __jsx("div", null, __jsx("input", {
    id: "1",
    type: "checkbox",
    value: firstIsChecked,
    onChange: toggleCheckbox(1)
  }), __jsx("label", {
    style: styles.inputCheckboxLabel,
    htmlFor: "1"
  }, "1")), __jsx("div", null, __jsx("input", {
    id: "2",
    type: "checkbox",
    value: secondIsChecked,
    onChange: toggleCheckbox(2)
  }), __jsx("label", {
    style: styles.inputCheckboxLabel,
    htmlFor: "2"
  }, "2")));

  const renderAnnualYear = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const yearShortform = currentYear % 2000; // eg. 2020 => 20

    const currentSemester = currentMonth < 6 ? 2 : 1;
    const currentAYSecondYear = currentSemester === 1 ? yearShortform + 1 : yearShortform; // if current semester is 2, then the second year of the AY is the current year

    const yearMinusOne = currentAYSecondYear - 1;
    const yearMinusTwo = currentAYSecondYear - 2;
    const yearMinusThree = currentAYSecondYear - 3;
    const yearMinusFour = currentAYSecondYear - 4;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      style: styles.inputNumber,
      onChange: setValue,
      defaultValue: value
    }, __jsx(Option, {
      value: `${yearMinusOne}/${currentAYSecondYear}`
    }, "AY", yearMinusOne, "/", currentAYSecondYear), __jsx(Option, {
      value: `${yearMinusTwo}/${yearMinusOne}`
    }, "AY", yearMinusTwo, "/", yearMinusOne), __jsx(Option, {
      value: `${yearMinusThree}/${yearMinusTwo}`
    }, "AY", yearMinusThree, "/", yearMinusTwo), __jsx(Option, {
      value: `${yearMinusFour}/${yearMinusThree}`
    }, "AY", yearMinusFour, "/", yearMinusThree));
  };

  const renderUniversity = () => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    style: styles.inputNumber,
    onChange: setValue,
    defaultValue: value
  }, __jsx(Option, {
    value: "NUS"
  }, "NUS"), __jsx(Option, {
    value: "NTU"
  }, "NTU"), __jsx(Option, {
    value: "SMU"
  }, "SMU"));

  const renderAutoComplete = () => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"], {
    style: styles.input,
    options: searchOptions,
    onSelect: setValue,
    onSearch: searchText => setSearchOptions(options.filter(item => item.value.includes(searchText)))
  });

  const renderPrereq = () => {
    const removeCode = removedMod => {
      const filteredCodes = value.filter(mod => mod.id !== removedMod.id);
      setValue(filteredCodes);
    };

    const renderTags = () => {
      console.log(value);
      return value.map(mod => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
        closable: true,
        onClose: () => removeCode(mod),
        key: mod.id
      }, mod.value));
    };

    const addModule = code => {
      const modArr = searchOptions.filter(mod => mod.value === code);
      setValue(value.concat(modArr));
      setSearchTerm("");
    };

    const onChange = newSearchTerm => setSearchTerm(newSearchTerm);

    return __jsx("div", null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"], {
      style: styles.input,
      onSelect: addModule,
      options: searchOptions,
      value: searchTerm,
      onChange: onChange
    }), __jsx("div", {
      style: {
        marginTop: 10,
        maxWidth: 390
      }
    }, renderTags()));
  };

  const renderInputType = {
    "input": renderInput,
    "textarea": renderTextArea,
    "text": renderText,
    "rate": renderRate,
    "difficulty": renderDifficulty,
    "number": renderNumber,
    "year": renderYear,
    "semester": renderSemester,
    "semesters": renderSemesters,
    "annualYear": renderAnnualYear,
    "university": renderUniversity,
    "autocomplete": renderAutoComplete,
    "prereq": renderPrereq
  };
  return __jsx("div", {
    style: styles.labelContainer
  }, __jsx("label", {
    style: styles.label
  }, `${label}:`), renderInputType[type]());
};

const styles = {
  labelContainer: {
    display: "flex",
    marginBottom: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  label: {
    width: 150,
    marginTop: 5
  },
  input: {
    width: 390,
    maxWidth: 390
  },
  text: {
    marginTop: 5
  },
  rateObjects: {// color: "#000",
  },
  inputNumber: {
    width: 100
  },
  inputCheckboxLabel: {
    margin: "0px 20px 0px 10px",
    fontSize: 15
  }
};
/* harmony default export */ __webpack_exports__["a"] = (FormModalItem);

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Lc87":
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "Mzm7":
/***/ (function(module, exports) {



/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QlD1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rOcY");


const baseUrl = `${_config__WEBPACK_IMPORTED_MODULE_1__[/* serverDomain */ "a"]}/api/course`;

const getCourse = async courseId => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${baseUrl}/${courseId}`);
  return response.data;
};

const getAllCourses = async () => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${baseUrl}`);
  return response.data;
};

const addCourse = async courseName => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl, {
    "name": courseName
  }, {
    withCredentials: true
  });
  return response.data;
};

/* harmony default export */ __webpack_exports__["a"] = ({
  getCourse,
  addCourse,
  getAllCourses
});

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _utils = __webpack_require__("kYf9");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return _react.default.cloneElement(child, childProps);
}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/store.ts + 6 modules
var store = __webpack_require__("iEce");

// EXTERNAL MODULE: ./utils/authentication.ts + 2 modules
var authentication = __webpack_require__("nX5i");

// EXTERNAL MODULE: ./utils/helpers.ts + 1 modules
var helpers = __webpack_require__("ye7r");

// EXTERNAL MODULE: ./api/school.ts
var api_school = __webpack_require__("sG7I");

// EXTERNAL MODULE: ./redux/constants.js
var constants = __webpack_require__("EHoS");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__("7koQ");
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./styles/antd.less
var antd = __webpack_require__("Mzm7");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./styles/colors.js
var colors = __webpack_require__("xwfA");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// CONCATENATED MODULE: ./components/LoginModal.tsx

var __jsx = external_react_default.a.createElement;





const LoginModal = toggles => {
  const onFormFinish = loginValues => {
    authentication["a" /* default */].logIn(loginValues).then(() => {
      external_antd_["message"].success("Successfully Logged in!");
    }).catch(() => {
      external_antd_["message"].error("The email address or password provided is invalid!");
    });
  };

  return __jsx(external_react_default.a.Fragment, null, __jsx(external_antd_["Modal"], {
    visible: true,
    title: __jsx("div", {
      style: {
        textAlign: "center"
      }
    }, "LOGIN"),
    centered: true,
    onCancel: () => toggles.toggles.toggleLoginModal(),
    footer: null
  }, __jsx(external_antd_["Form"], {
    name: "normal_login",
    className: "login-form",
    initialValues: {},
    onFinish: onFormFinish
  }, __jsx(external_antd_["Form"].Item, {
    name: "emailaddress",
    rules: [{
      required: true,
      message: "Please enter an email address!"
    }]
  }, __jsx(external_antd_["Input"], {
    prefix: __jsx(icons_["MailOutlined"], null),
    placeholder: "Email Address"
  })), __jsx(external_antd_["Form"].Item, {
    name: "password",
    rules: [{
      required: true,
      message: "Please enter a password!"
    }]
  }, __jsx(external_antd_["Input"], {
    prefix: __jsx(icons_["LockOutlined"], null),
    type: "password",
    placeholder: "Password"
  })), __jsx(external_antd_["Form"].Item, null, __jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    style: styles.loginFormButton
  }, "LOG IN"))), __jsx(external_antd_["Divider"], null), __jsx("div", {
    style: {
      textAlign: "center"
    }
  }, "Dont have an account? Sign Up", " ", __jsx("a", {
    onClick: () => toggles.toggles.switchModals()
  }, " here"))));
};

const styles = {
  loginFormButton: {
    width: "100%",
    backgroundColor: "#2D538C"
  }
};
/* harmony default export */ var components_LoginModal = (LoginModal);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/SignupModal.tsx

var SignupModal_jsx = external_react_default.a.createElement;








const SignupModal = toggles => {
  const {
    0: inputUniversityValues,
    1: setUniversityInputValues
  } = Object(external_react_["useState"])([{
    schoolId: "",
    schoolName: ""
  }]);
  const {
    0: inputCourses,
    1: setInputCourses
  } = Object(external_react_["useState"])([{
    courseId: "",
    courseName: ""
  }]);
  const {
    0: newSchoolName,
    1: setSchoolName
  } = Object(external_react_["useState"])("");
  const {
    0: newCourseName,
    1: setCourseName
  } = Object(external_react_["useState"])("");
  Object(external_react_["useEffect"])(() => {
    populateSchools();
    populateCourses();
  }, []);

  const populateSchools = () => {
    external_axios_default()({
      method: "get",
      url: "/school",
      baseURL: "http://localhost:8080/api"
    }).then(function (response) {
      const schoolsInDatabase = response.data.map(obj => {
        const universityValue = {
          schoolId: "",
          schoolName: ""
        };
        universityValue.schoolId = obj._id;
        universityValue.schoolName = obj.name;
        return universityValue;
      });
      setUniversityInputValues(schoolsInDatabase);
      console.log("Now uni has these values");
    }).then(function (error) {
      console.log(error);
    });
  };

  const populateCourses = () => {
    external_axios_default()({
      method: "get",
      url: "/course",
      baseURL: "http://localhost:8080/api"
    }).then(function (response) {
      const coursesInDatabase = response.data.map(obj => {
        const course = {
          courseId: "",
          courseName: ""
        };
        course.courseId = obj._id;
        course.courseName = obj.name;
        return course;
      });
      setInputCourses(coursesInDatabase);
    }).then(function (error) {
      console.log(error);
    });
  };

  const onFormFinish = signUpValues => {
    authentication["a" /* default */].signUp(signUpValues).then(function (response) {
      external_antd_["message"].success("Successfully Signed Up");
      toggles.toggles.switchModals();
    }).catch(error => {
      external_antd_["message"].error("This user has already been created. Do you mean to sign in?");
    });
  };

  const onUniversityChange = event => {
    setSchoolName(event.target.value);
  };

  const onCourseChange = event => {
    setCourseName(event.target.value);
  }; // const addUniversityItem = () => {
  //   setSchoolName("");
  //   if (
  //     newSchoolName.trim() !== "" &&
  //     !inputUniversityValues.some((e) => e.schoolName === newSchoolName)
  //   ) {
  //     console.log("adduniItem");
  //     setUniversityInputValues([
  //       ...inputUniversityValues,
  //       { schoolId: "userCreated", schoolName: newSchoolName },
  //     ]);
  //   }
  // };
  // const addCourseItem = () => {
  //   console.log("adduniItem");
  //   setCourseName("");
  //   if (
  //     newCourseName.trim() !== "" &&
  //     !inputCourses.some((e) => e.courseName === newCourseName)
  //   ) {
  //     setInputCourses([
  //       ...inputCourses,
  //       { courseId: "userCreated", courseName: newCourseName },
  //     ]);
  //   }
  // };


  const validateEmail = email => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.edu$/;
    return regex.test(email);
  };

  return SignupModal_jsx(external_react_default.a.Fragment, null, SignupModal_jsx(external_antd_["Modal"], {
    visible: true,
    title: SignupModal_jsx("div", {
      style: {
        textAlign: "center"
      }
    }, " SIGNUP "),
    centered: true,
    onCancel: toggles.toggles.toggleSignupModal,
    footer: null
  }, SignupModal_jsx(external_antd_["Form"], {
    name: "normal_signup",
    className: "signup-form",
    initialValues: {},
    onFinish: onFormFinish
  }, SignupModal_jsx(external_antd_["Form"].Item, {
    name: "fullname",
    rules: [{
      required: true,
      message: "Please enter your full name!"
    }]
  }, SignupModal_jsx(external_antd_["Input"], {
    prefix: SignupModal_jsx(icons_["UserOutlined"], null),
    placeholder: "Full Name"
  })), SignupModal_jsx(external_antd_["Form"].Item, {
    name: "emailaddress",
    rules: [{
      required: true,
      message: "Please enter an email address!"
    }, {
      validator: (_, value) => {
        if (!validateEmail(value)) {
          return Promise.reject("Only .edu email address are allowed to sign up");
        } else {
          return Promise.resolve();
        }
      }
    }]
  }, SignupModal_jsx(external_antd_["Input"], {
    prefix: SignupModal_jsx(icons_["MailOutlined"], null),
    placeholder: "Email Address"
  })), SignupModal_jsx(external_antd_["Form"].Item, {
    name: "userpassword",
    rules: [{
      required: true,
      message: "Please enter a password!"
    }]
  }, SignupModal_jsx(external_antd_["Input"], {
    prefix: SignupModal_jsx(icons_["LockOutlined"], null),
    type: "password",
    placeholder: "Password"
  })), SignupModal_jsx(external_antd_["Form"].Item, null, SignupModal_jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    style: SignupModal_styles.loginFormButton
  }, "SIGN UP"))), SignupModal_jsx(external_antd_["Divider"], null), SignupModal_jsx("div", {
    style: {
      textAlign: "center"
    }
  }, "Already have an account? Log in", " ", SignupModal_jsx("a", {
    onClick: () => toggles.toggles.switchModals()
  }, " here"))));
};

const SignupModal_styles = {
  loginFormButton: {
    width: "100%",
    backgroundColor: colors["a" /* codeBlue */]
  }
};
/* harmony default export */ var components_SignupModal = (SignupModal);
// EXTERNAL MODULE: ./components/Button.tsx
var Button = __webpack_require__("xQut");

// EXTERNAL MODULE: ./api/course.ts
var api_course = __webpack_require__("QlD1");

// EXTERNAL MODULE: ./components/FormModal.tsx
var FormModal = __webpack_require__("0lvd");

// EXTERNAL MODULE: ./components/FormModalItem.tsx
var FormModalItem = __webpack_require__("HNwB");

// CONCATENATED MODULE: ./components/AddCourseModal.tsx

var AddCourseModal_jsx = external_react_default.a.createElement;







const AddCourseModal = ({
  isModalVisible,
  setModalVisibility
}) => {
  const {
    0: course,
    1: setCourse
  } = Object(external_react_["useState"])("");

  const onSubmit = () => {
    api_course["a" /* default */].addCourse(course);
    external_antd_["message"].success(`The course ${course} has been added successfully!`);
  };

  return AddCourseModal_jsx(FormModal["a" /* default */], {
    backgroundColor: colors["a" /* codeBlue */],
    submitColor: "#3E59B9",
    title: "Add Course",
    isModalVisible: isModalVisible,
    setModalVisibility: setModalVisibility,
    onSubmit: onSubmit
  }, AddCourseModal_jsx(FormModalItem["a" /* default */], {
    label: "Course Name",
    type: "input",
    value: course,
    setValue: setCourse
  }));
};

const AddCourseModal_styles = {
  loginFormButton: {
    width: "100%",
    backgroundColor: "#2D538C"
  }
};
/* harmony default export */ var components_AddCourseModal = (AddCourseModal);
// CONCATENATED MODULE: ./components/AddSchoolModal.tsx

var AddSchoolModal_jsx = external_react_default.a.createElement;







const AddSchoolModal = ({
  isModalVisible,
  setModalVisibility
}) => {
  const {
    0: school,
    1: setSchool
  } = Object(external_react_["useState"])("");

  const onSubmit = () => {
    api_school["a" /* default */].addSchool(school);
    external_antd_["message"].success(`The school ${school} has been added successfully!`);
  };

  return AddSchoolModal_jsx(FormModal["a" /* default */], {
    backgroundColor: colors["a" /* codeBlue */],
    submitColor: "#3E59B9",
    title: "Add School",
    isModalVisible: isModalVisible,
    setModalVisibility: setModalVisibility,
    onSubmit: onSubmit
  }, AddSchoolModal_jsx(FormModalItem["a" /* default */], {
    label: "School Name",
    type: "input",
    value: school,
    setValue: setSchool
  }));
};

const AddSchoolModal_styles = {
  loginFormButton: {
    width: "100%",
    backgroundColor: "#2D538C"
  }
};
/* harmony default export */ var components_AddSchoolModal = (AddSchoolModal);
// EXTERNAL MODULE: ./api/module.ts
var api_module = __webpack_require__("xQNW");

// CONCATENATED MODULE: ./components/AddModuleModal.tsx

var AddModuleModal_jsx = external_react_default.a.createElement;








const AddModuleModal = ({
  isModalVisible,
  setModalVisibility
}) => {
  const {
    0: code,
    1: setCode
  } = Object(external_react_["useState"])("");
  const {
    0: title,
    1: setTitle
  } = Object(external_react_["useState"])("");
  const {
    0: description,
    1: setDescription
  } = Object(external_react_["useState"])("");
  const {
    0: university,
    1: setUniversity
  } = Object(external_react_["useState"])("");
  const {
    0: credit,
    1: setCredit
  } = Object(external_react_["useState"])(4);
  const {
    0: semesters,
    1: setSemesters
  } = Object(external_react_["useState"])([false, false]);
  const {
    0: workload,
    1: setWorkload
  } = Object(external_react_["useState"])(10);
  const {
    0: modulePrereqs,
    1: setModulePrereqs
  } = Object(external_react_["useState"])([]);
  const {
    0: allModules,
    1: setAllModules
  } = Object(external_react_["useState"])([]);
  const {
    0: prereqSearchTerm,
    1: setPrereqSearchTerm
  } = Object(external_react_["useState"])("");
  const schools = Object(external_react_redux_["useSelector"])(state => state.schools);
  const schoolsAutocompleteOptions = schools.map(school => ({
    value: school.name
  }));
  Object(external_react_["useEffect"])(() => {
    getAllModules();
  }, [prereqSearchTerm]);

  const getAllModules = async () => {
    const modules = await api_module["a" /* default */].searchModule(prereqSearchTerm, 20);
    const moduleCodes = modules.map(mod => ({
      value: mod.code,
      id: mod._id
    }));
    setAllModules(moduleCodes);
  };

  const onSubmit = () => {
    var _schools$find;

    if (!validateForm()) {
      return;
    }

    const schoolId = (_schools$find = schools.find(school => school.name === university)) === null || _schools$find === void 0 ? void 0 : _schools$find._id;
    console.log(allModules);
    const prereqs = modulePrereqs.map(mod => mod.id);
    const semester = semesters.reduce((acc, sem, index) => {
      if (sem) acc.push(index + 1);
      return acc;
    }, []);
    const newModule = {
      code,
      title,
      schoolId,
      semester,
      description,
      credit,
      workload,
      prereqs
    };
    api_module["a" /* default */].addModule(newModule);
    setModalVisibility(false);
    resetState();
    external_antd_["message"].success(`Successfully added module ${code}`);
  };

  const validateForm = () => {
    return code && title && university && description && credit && workload;
  };

  const resetState = () => {
    setCode("");
    setTitle("");
    setDescription("");
    setUniversity("");
    setCredit(4);
    setSemesters([false, false]);
    setWorkload(10);
    setModulePrereqs([]);
  };

  return AddModuleModal_jsx(FormModal["a" /* default */], {
    backgroundColor: colors["a" /* codeBlue */],
    submitColor: "#3E59B9",
    title: "Add Module",
    isModalVisible: isModalVisible,
    setModalVisibility: setModalVisibility,
    onSubmit: onSubmit
  }, AddModuleModal_jsx(FormModalItem["a" /* default */], {
    label: "Module Code",
    type: "input",
    value: code,
    setValue: setCode
  }), AddModuleModal_jsx(FormModalItem["a" /* default */], {
    label: "Title",
    type: "input",
    value: title,
    setValue: setTitle
  }), AddModuleModal_jsx(FormModalItem["a" /* default */], {
    label: "Description",
    type: "textarea",
    value: description,
    setValue: setDescription
  }), AddModuleModal_jsx(FormModalItem["a" /* default */], {
    label: "University",
    type: "autocomplete",
    options: schoolsAutocompleteOptions,
    value: university,
    setValue: setUniversity
  }), AddModuleModal_jsx(FormModalItem["a" /* default */], {
    label: "Workload/Week",
    type: "number",
    value: workload,
    setValue: setWorkload
  }), AddModuleModal_jsx(FormModalItem["a" /* default */], {
    label: "Credit",
    type: "number",
    value: credit,
    setValue: setCredit
  }), AddModuleModal_jsx(FormModalItem["a" /* default */], {
    label: "Semester",
    type: "semesters",
    value: semesters,
    setValue: setSemesters
  }), AddModuleModal_jsx(FormModalItem["a" /* default */], {
    label: "Pre-requisites",
    type: "prereq",
    value: modulePrereqs,
    setValue: setModulePrereqs,
    options: allModules,
    searchTerm: prereqSearchTerm,
    setSearchTerm: setPrereqSearchTerm
  }));
};

/* harmony default export */ var components_AddModuleModal = (AddModuleModal);
// CONCATENATED MODULE: ./components/ProfileButton.tsx

var ProfileButton_jsx = external_react_default.a.createElement;














const ProfileButton = () => {
  const {
    0: loginModalVisible,
    1: setLoginModalVisible
  } = Object(external_react_["useState"])(false);
  const {
    0: signupModalVisible,
    1: setSignupModalVisible
  } = Object(external_react_["useState"])(false);
  const {
    0: addCourseModalVisible,
    1: setAddCourseModalVisible
  } = Object(external_react_["useState"])(false);
  const {
    0: addSchoolModalVisible,
    1: setAddSchoolModalVisible
  } = Object(external_react_["useState"])(false);
  const {
    0: addModuleModalVisible,
    1: setModuleModalVisible
  } = Object(external_react_["useState"])(false);
  const isLoggedIn = Object(external_react_redux_["useSelector"])(state => state.auth.isLoggedIn);
  const user = Object(external_react_redux_["useSelector"])(state => state.auth.user);
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    if (isLoggedIn) {
      setLoginModalVisible(false);
    }
  }), [isLoggedIn];

  const toggleLoginModal = () => {
    setLoginModalVisible(!loginModalVisible);
  };

  const toggleSignupModal = () => {
    setSignupModalVisible(!signupModalVisible);
  };

  const switchModals = () => {
    setSignupModalVisible(!signupModalVisible);
    setLoginModalVisible(!loginModalVisible);
  };

  const navigateToProfilePage = () => {
    router.push({
      pathname: "/profile"
    });
  };

  const logoutUser = () => {
    authentication["a" /* default */].logOut();
    router.push({
      pathname: "/home"
    });
  };

  const userMenu = ProfileButton_jsx(external_antd_["Menu"], null, ProfileButton_jsx(external_antd_["Menu"].Item, {
    key: "1"
  }, ProfileButton_jsx(external_antd_["Button"], {
    type: "text",
    onClick: navigateToProfilePage
  }, "Profile")), ProfileButton_jsx(external_antd_["Menu"].Item, {
    key: "2"
  }, ProfileButton_jsx(external_antd_["Button"], {
    type: "text",
    onClick: logoutUser
  }, "Log Out")));

  const addMenu = ProfileButton_jsx(external_antd_["Menu"], null, ProfileButton_jsx(external_antd_["Menu"].Item, {
    key: "1"
  }, ProfileButton_jsx(external_antd_["Button"], {
    type: "text",
    onClick: () => {
      setAddCourseModalVisible(true);
    }
  }, "Add Course")), ProfileButton_jsx(external_antd_["Menu"].Item, {
    key: "2"
  }, ProfileButton_jsx(external_antd_["Button"], {
    type: "text",
    onClick: () => {
      setAddSchoolModalVisible(true);
    }
  }, "Add School")), ProfileButton_jsx(external_antd_["Menu"].Item, {
    key: "3"
  }, ProfileButton_jsx(external_antd_["Button"], {
    type: "text",
    onClick: () => {
      setModuleModalVisible(true);
    }
  }, "Add Module")));

  return ProfileButton_jsx(external_react_default.a.Fragment, null, isLoggedIn ? ProfileButton_jsx(external_react_default.a.Fragment, null, ProfileButton_jsx(external_antd_["Dropdown"], {
    overlay: addMenu,
    placement: "bottomCenter"
  }, ProfileButton_jsx(external_antd_["Button"], {
    style: ProfileButton_styles.addModuleButton
  }, "Add")), ProfileButton_jsx(external_antd_["Dropdown"], {
    overlay: userMenu,
    placement: "bottomLeft"
  }, ProfileButton_jsx(external_antd_["Button"], {
    style: ProfileButton_styles.userButton
  }, user.fullName))) : ProfileButton_jsx(Button["a" /* default */], {
    style: ProfileButton_styles.loginButton,
    onClick: toggleLoginModal
  }, "Log In"), loginModalVisible && !isLoggedIn ? ProfileButton_jsx(components_LoginModal, {
    toggles: {
      toggleLoginModal,
      switchModals
    }
  }) : null, signupModalVisible ? ProfileButton_jsx(components_SignupModal, {
    toggles: {
      toggleSignupModal,
      switchModals
    }
  }) : null, ProfileButton_jsx(components_AddCourseModal, {
    isModalVisible: addCourseModalVisible,
    setModalVisibility: setAddCourseModalVisible
  }), ProfileButton_jsx(components_AddSchoolModal, {
    isModalVisible: addSchoolModalVisible,
    setModalVisibility: setAddSchoolModalVisible
  }), ProfileButton_jsx(components_AddModuleModal, {
    isModalVisible: addModuleModalVisible,
    setModalVisibility: setModuleModalVisible
  }));
};

const ProfileButton_styles = {
  userButton: {
    display: "flex",
    alignItems: "center",
    margin: "0px 10px",
    padding: 20,
    backgroundColor: colors["h" /* reviewBlue */],
    color: "#fff",
    borderRadius: 8
  },
  userName: {
    alignItems: "flex-end",
    paddingLeft: "10px",
    margin: 0,
    fontSize: 15
  },
  loginButton: {
    display: "flex",
    alignItems: "center",
    margin: "0px 10px",
    padding: 10,
    backgroundColor: colors["h" /* reviewBlue */],
    color: "#fff",
    borderRadius: 8
  },
  addModuleButton: {
    display: "flex",
    alignItems: "center",
    margin: "0px 10px",
    padding: 20,
    backgroundColor: colors["a" /* codeBlue */],
    color: "#fff",
    borderRadius: 8
  }
};
/* harmony default export */ var components_ProfileButton = (ProfileButton);
// CONCATENATED MODULE: ./redux/actions/search.ts

const fetchSchoolAction = searchTerm => {
  return {
    type: constants["j" /* SEARCH_TERM */],
    payload: searchTerm
  };
};
// CONCATENATED MODULE: ./components/Navbar.tsx

var Navbar_jsx = external_react_default.a.createElement;








const {
  Search
} = external_antd_["Input"];

const Navbar = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();

  const submitSearch = searchTerm => {
    dispatch(fetchSchoolAction(searchTerm));
    router.push({
      pathname: "/search",
      query: {
        s: searchTerm
      }
    });
  };

  return Navbar_jsx("div", {
    style: Navbar_styles.container
  }, Navbar_jsx(link_default.a, {
    href: "/"
  }, Navbar_jsx("div", {
    style: Navbar_styles.logo
  }, Navbar_jsx("img", {
    src: "/RottenMods.png",
    alt: "RottenMods Logo",
    height: "30"
  }))), Navbar_jsx("div", {
    style: Navbar_styles.searchContainer
  }, Navbar_jsx(Search, {
    placeholder: "Search for modules",
    onSearch: value => submitSearch(value),
    style: Navbar_styles.searchBar
  })), Navbar_jsx("div", {
    style: Navbar_styles.actionsContainer
  }, Navbar_jsx(components_ProfileButton, null)));
};

const Navbar_styles = {
  loginFormButton: {
    width: "100%",
    backgroundColor: colors["a" /* codeBlue */]
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "70px",
    padding: "30px 0px",
    justifyContent: "space-between",
    alignItems: "baseline",
    position: "sticky"
  },
  logo: {
    flex: 1,
    cursor: "pointer"
  },
  searchContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  },
  searchBar: {
    width: 200
  },
  actionsContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end"
  },
  addModuleButton: {
    display: "flex",
    alignItems: "center",
    margin: "0px 10px",
    padding: 10,
    backgroundColor: colors["a" /* codeBlue */],
    color: "#fff",
    borderRadius: 8
  }
};
/* harmony default export */ var components_Navbar = (Navbar);
// CONCATENATED MODULE: ./pages/_app.tsx

var _app_jsx = external_react_default.a.createElement;











const ReduxApp = ({
  Component,
  pageProps
}) => {
  external_react_modal_default.a.setAppElement("#body");
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const userId = Object(external_react_redux_["useSelector"])(state => {
    var _state$auth$user;

    return (_state$auth$user = state.auth.user) === null || _state$auth$user === void 0 ? void 0 : _state$auth$user._id;
  });
  Object(external_react_["useEffect"])(() => {
    attemptLogin();
    fetchAllSchools();
  }, []); // Fetch all personal modules if user is logged in

  Object(external_react_["useEffect"])(() => {
    if (userId) {
      Object(helpers["c" /* updatePersonalBookmarks */])(userId);
      Object(helpers["d" /* updatePersonalReviews */])(userId);
      Object(helpers["e" /* updatedPersonalPlannedModules */])(userId);
    }
  }, [userId]);
  /**
   *  Attempt login if login details are stored
   */

  const attemptLogin = () => {
    const email = window.localStorage.getItem("ROTTENMODS_EMAIL");
    const password = window.localStorage.getItem("ROTTENMODS_PASSWORD");

    if (email && password) {
      authentication["a" /* default */].logIn({
        emailaddress: email,
        password
      });
    }
  };
  /**
   * Fetch all available schools
   */


  const fetchAllSchools = async () => {
    const schools = await api_school["a" /* default */].searchSchools("");
    dispatch({
      type: constants["f" /* FETCH_SCHOOLS */],
      payload: schools
    });
  };

  return _app_jsx(external_react_default.a.Fragment, null, _app_jsx(head_default.a, null, _app_jsx("title", null, "RottenMods")), _app_jsx("div", {
    id: "body",
    style: _app_styles.layout
  }, _app_jsx("div", {
    style: _app_styles.container
  }, _app_jsx(components_Navbar, null), _app_jsx(Component, pageProps))));
};

const _app_styles = {
  layout: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    padding: "0px 80px 80px 80px",
    width: "100vw",
    maxWidth: 1280,
    overflowX: "hidden"
  }
};
/* harmony default export */ var _app = __webpack_exports__["default"] = (store["b" /* wrapper */].withRedux(ReduxApp));

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Lc87");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rOcY");



const baseUrl = `${_config__WEBPACK_IMPORTED_MODULE_2__[/* serverDomain */ "a"]}/api/bookmark`;

const getBookmarks = async userId => {
  const query = query_string__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
    userId
  });
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${baseUrl}/?${query}`, {
    withCredentials: true
  });
  return response.data;
};

const addBookmark = async (userId, modId) => {
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${baseUrl}`, {
    userId,
    modId
  }, {
    withCredentials: true
  });
};

const deleteBookmark = async bookmarkId => {
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${baseUrl}/${bookmarkId}`, {
    withCredentials: true
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  getBookmarks,
  addBookmark,
  deleteBookmark
});

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _querystring = __webpack_require__("3WeD");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _normalizeTrailingSlash = __webpack_require__("X24+");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (false) {}

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "iEce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ store; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ wrapper; });

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: ./redux/constants.js
var constants = __webpack_require__("EHoS");

// CONCATENATED MODULE: ./redux/reducers/authReducer.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  isLoggedIn: false,
  user: {
    _id: "",
    fullName: "",
    yearOfStudy: 1,
    courseName: "",
    password: "",
    email: "",
    schoolName: ""
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants["h" /* LOG_USER_IN */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggedIn: true,
        user: action.payload
      });

    case constants["i" /* LOG_USER_OUT */]:
      return {
        initialState
      };

    default:
      return state;
  }
};

/* harmony default export */ var reducers_authReducer = (authReducer);
// CONCATENATED MODULE: ./redux/reducers/searchReducer.ts
function searchReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function searchReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { searchReducer_ownKeys(Object(source), true).forEach(function (key) { searchReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { searchReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function searchReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const searchReducer_initialState = {
  searchTerm: ""
};

const searchReducer = (state = searchReducer_initialState, action) => {
  switch (action.type) {
    case constants["j" /* SEARCH_TERM */]:
      return searchReducer_objectSpread(searchReducer_objectSpread({}, state), {}, {
        searchTerm: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_searchReducer = (searchReducer);
// CONCATENATED MODULE: ./redux/reducers/compareReducer.ts
function compareReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function compareReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { compareReducer_ownKeys(Object(source), true).forEach(function (key) { compareReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { compareReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function compareReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const compareReducer_initialState = {
  firstModuleId: "",
  firstModuleCode: "",
  secondModuleId: "",
  secondModuleCode: ""
};

const compareReducer = (state = compareReducer_initialState, action) => {
  switch (action.type) {
    case constants["a" /* ADD_MODULE_FOR_COMPARISON */]:
      const {
        id,
        code
      } = action.payload; // if modules to compare are the same, return state

      if (state.firstModuleId == id) {
        return state;
      }

      if (!state.firstModuleId) {
        return compareReducer_objectSpread(compareReducer_objectSpread({}, state), {}, {
          firstModuleId: id,
          firstModuleCode: code
        });
      }

      return compareReducer_objectSpread(compareReducer_objectSpread({}, state), {}, {
        secondModuleId: id,
        secondModuleCode: code
      });

    case constants["b" /* DELETE_MODULE_FOR_COMPARISON */]:
      if (action.payload == constants["g" /* FIRST */]) {
        return compareReducer_objectSpread(compareReducer_objectSpread({}, state), {}, {
          firstModuleId: "",
          firstModuleCode: ""
        });
      } else if (action.payload == constants["k" /* SECOND */]) {
        return compareReducer_objectSpread(compareReducer_objectSpread({}, state), {}, {
          secondModuleId: "",
          secondModuleCode: ""
        });
      } else {
        return state;
      }

    default:
      return state;
  }
};

/* harmony default export */ var reducers_compareReducer = (compareReducer);
// CONCATENATED MODULE: ./redux/reducers/personalModulesReducer.ts
function personalModulesReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function personalModulesReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { personalModulesReducer_ownKeys(Object(source), true).forEach(function (key) { personalModulesReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { personalModulesReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function personalModulesReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const personalModulesReducer_initialState = {
  bookmarks: [],
  plannedMods: [],
  reviews: []
};

const personalModulesReducer = (state = personalModulesReducer_initialState, action) => {
  switch (action.type) {
    case constants["c" /* FETCH_BOOKMARKS */]:
      return personalModulesReducer_objectSpread(personalModulesReducer_objectSpread({}, state), {}, {
        bookmarks: action.payload
      });

    case constants["e" /* FETCH_PLANNED_MODS */]:
      return personalModulesReducer_objectSpread(personalModulesReducer_objectSpread({}, state), {}, {
        plannedMods: action.payload
      });

    case constants["d" /* FETCH_PERSONAL_REVIEWS */]:
      return personalModulesReducer_objectSpread(personalModulesReducer_objectSpread({}, state), {}, {
        reviews: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_personalModulesReducer = (personalModulesReducer);
// CONCATENATED MODULE: ./redux/reducers/schoolsReducer.ts

const schoolsReducer_initialState = [];

const schoolsReducer = (state = schoolsReducer_initialState, action) => {
  switch (action.type) {
    case constants["f" /* FETCH_SCHOOLS */]:
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ var reducers_schoolsReducer = (schoolsReducer);
// CONCATENATED MODULE: ./redux/reducers/index.ts







const reducer = (state, action) => {
  if (action.type === 'LOG_USER_OUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

const appReducer = Object(external_redux_["combineReducers"])({
  auth: reducers_authReducer,
  search: reducers_searchReducer,
  compare: reducers_compareReducer,
  personalModules: reducers_personalModulesReducer,
  schools: reducers_schoolsReducer
});
/* harmony default export */ var reducers = (reducer);
// CONCATENATED MODULE: ./redux/store.ts



const store = Object(external_redux_["createStore"])(reducers);

const makeStore = context => store;

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(makeStore, {
  debug: true
});

/***/ }),

/***/ "jBY8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Lc87");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rOcY");



const reviewBaseUrl = `${_config__WEBPACK_IMPORTED_MODULE_2__[/* serverDomain */ "a"]}/api/review`;
const ratingBaseUrl = `${_config__WEBPACK_IMPORTED_MODULE_2__[/* serverDomain */ "a"]}/api/rating`;

const getReviewsOfModule = async (modId, limit = 10, page = 1) => {
  const query = query_string__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
    modId
  });
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${reviewBaseUrl}/?${query}`);
  return response.data;
};

const getReviewsOfUser = async userId => {
  const query = query_string__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
    userId
  });
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${reviewBaseUrl}/?${query}`, {
    withCredentials: true
  });
  return response.data;
};

const addReviewOfModule = async body => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(reviewBaseUrl, body, {
    withCredentials: true
  });
  return response.status;
};

const updateReviewOfModule = async (body, reviewId) => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${reviewBaseUrl}/${reviewId}`, body, {
    withCredentials: true
  });
  return response.status;
};

const addRating = async (value, type, userId, subId, sub) => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(ratingBaseUrl, {
    type,
    userId,
    subId,
    value,
    sub
  }, {
    withCredentials: true
  });
  return response.status;
};

const getRatingById = async id => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${ratingBaseUrl}/${id}`);
  return response.data;
};

const getRating = async (subscriberType, subscriberId, userId, ratingType) => {
  const query = query_string__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
    sub: subscriberType,
    subId: subscriberId,
    userId,
    type: ratingType
  });
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${ratingBaseUrl}/?${query}`);
  return response.data;
};

const updateRating = async (value, type, userId, subId, sub, ratingId) => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${ratingBaseUrl}/${ratingId}`, {
    sub,
    subId,
    userId,
    type,
    value
  }, {
    withCredentials: true
  });
  return response.data;
};

const deleteRating = async id => {
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${ratingBaseUrl}/${id}`, {
    withCredentials: true
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  getReviewsOfModule,
  getReviewsOfUser,
  addReviewOfModule,
  addRating,
  getRatingById,
  getRating,
  updateRating,
  updateReviewOfModule,
  deleteRating
});

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nX5i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./redux/constants.js
var constants = __webpack_require__("EHoS");

// CONCATENATED MODULE: ./redux/actions/auth.ts

const logInAction = user => {
  return {
    type: constants["h" /* LOG_USER_IN */],
    payload: user
  };
};
const logOutAction = () => {
  return {
    type: constants["i" /* LOG_USER_OUT */]
  };
};
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");

// CONCATENATED MODULE: ./api/auth.ts


const loginBaseUrl = `${config["a" /* serverDomain */]}/api/login`;
const logoutBaseUrl = `${config["a" /* serverDomain */]}/api/logout`;
const userBaseUrl = `${config["a" /* serverDomain */]}/api/user`;

const logIn = async (email, password) => {
  const response = await external_axios_default.a.post(loginBaseUrl, {
    email,
    password
  });
  return response.data;
};

const logOut = async () => {
  const response = await external_axios_default.a.post(logoutBaseUrl);
  return response;
};

const signUp = async (name, email, password) => {
  const response = await external_axios_default.a.post(userBaseUrl, {
    name,
    email,
    password
  }, {
    withCredentials: true
  });
  return response.data;
};

/* harmony default export */ var auth = ({
  logIn,
  signUp,
  logOut
});
// EXTERNAL MODULE: ./api/course.ts
var api_course = __webpack_require__("QlD1");

// EXTERNAL MODULE: ./api/school.ts
var school = __webpack_require__("sG7I");

// EXTERNAL MODULE: ./redux/store.ts + 6 modules
var store = __webpack_require__("iEce");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./utils/authentication.ts







async function authentication_signUp(values) {
  const {
    fullname,
    emailaddress,
    userpassword,
    university,
    course,
    yearofstudy
  } = values; // let createUserConfig = {
  //     method: 'post',
  //     url: 'http://localhost:8080/api/user',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     data: {
  //         "name": values.fullname,
  //         "email": values.emailaddress,
  //         "password": values.userpassword,
  //         "schoolId": values.university,
  //         "courseId": values.course,
  //         "currentYear": values.yearofstudy
  //     }
  // };
  // let createSchoolConfig = {
  //     method: 'post',
  //     url: 'http://localhost:8080/api/school',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     data: {
  //         "name": values.fullname,
  //     }
  // };
  // let createCourseConfig = {
  //     method: 'post',
  //     url: 'http://localhost:8080/api/course',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     data: {
  //         "name": values.fullname,
  //     }
  // };
  // if schoolId is user created, then create a new school in the system

  if (course !== "userCreated" && university !== "userCreated") {
    const data = await auth.signUp(fullname, emailaddress, userpassword).catch(error => {
      throw error;
    });

    if (data) {
      console.log("sign up success");
    }
  }
}

async function authentication_logIn(values) {
  const {
    emailaddress,
    password
  } = values;
  const data = await auth.logIn(emailaddress, password).catch(error => {
    throw error;
  });

  if (data) {
    const {
      name,
      currentYear,
      courseId,
      _id,
      schoolId
    } = data;
    let courseData = null;
    let schoolData = null;

    if (courseId) {
      courseData = await api_course["a" /* default */].getCourse(courseId);
    }

    if (schoolId) {
      schoolData = await school["a" /* default */].getSchool(schoolId);
    }

    const user = {
      fullName: name,
      email: emailaddress,
      password: password,
      yearOfStudy: currentYear ? currentYear : null,
      courseName: courseData ? courseData.name : null,
      schoolName: schoolData ? schoolData.name : null,
      _id
    };
    window.localStorage.setItem("ROTTENMODS_EMAIL", emailaddress);
    window.localStorage.setItem("ROTTENMODS_PASSWORD", password);
    store["a" /* store */].dispatch(logInAction(user));
  }
}

async function authentication_logOut() {
  const response = await auth.logOut().catch(error => {
    throw error;
  });
  window.localStorage.removeItem("ROTTENMODS_EMAIL");
  window.localStorage.removeItem("ROTTENMODS_PASSWORD");
  external_antd_["message"].success("Successfully Logged Out!");
  store["a" /* store */].dispatch(logOutAction());
}

;
/* harmony default export */ var authentication = __webpack_exports__["a"] = ({
  signUp: authentication_signUp,
  logIn: authentication_logIn,
  logOut: authentication_logOut
});

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rOcY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return serverDomain; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.withCredentials = true;
const serverDomain = false ? undefined : ""; // TODO: add deployed server's domain

/***/ }),

/***/ "sG7I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Lc87");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rOcY");



const baseUrl = `${_config__WEBPACK_IMPORTED_MODULE_2__[/* serverDomain */ "a"]}/api/school`;

const searchSchools = async searchTerm => {
  const query = query_string__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
    s: searchTerm,
    page: 1,
    limit: 100
  });
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${baseUrl}/?${query}`);
  return response.data;
};

const getAllSchools = async () => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${baseUrl}`);
  return response.data;
};

const getSchool = async schoolId => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${baseUrl}/${schoolId}`);
  return response.data;
};

const addSchool = async schoolName => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl, {
    "name": schoolName
  }, {
    withCredentials: true
  });
  console.log(response);
  return response.data;
};

/* harmony default export */ __webpack_exports__["a"] = ({
  searchSchools,
  addSchool,
  getSchool,
  getAllSchools
});

/***/ }),

/***/ "uUid":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function CrossIcon(props) {
  return __jsx("svg", _extends({
    width: 32,
    height: 32,
    fill: "none"
  }, props), __jsx("path", {
    stroke: "currentColor",
    strokeWidth: 2,
    d: "M7.778 23.334L23.335 7.778M7.778 7.778l15.557 15.557"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (CrossIcon);

/***/ }),

/***/ "xQNW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Lc87");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rOcY");



const baseUrl = `${_config__WEBPACK_IMPORTED_MODULE_2__[/* serverDomain */ "a"]}/api/mod`;

const getModule = async id => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${baseUrl}/${id}`);
  return response.data;
};

const searchModule = async (searchTerm, limit = 10, page = 1) => {
  const query = {
    searchTerm,
    page,
    limit
  };
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${baseUrl}?${query_string__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(query)}`);
  return response.data;
};

const addModule = async module => {
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl, module, {
    withCredentials: true
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  getModule,
  searchModule,
  addModule
});

/***/ }),

/***/ "xQut":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Button = ({
  children,
  onClick,
  style = {}
}) => {
  return __jsx("div", {
    onClick: onClick,
    style: _objectSpread({
      cursor: "pointer"
    }, style)
  }, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xwfA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return reviewBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return codeBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return descriptionGreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return compareOrange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ratingsYellow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return commentBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return crossRed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return submitBlue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return plannedModGreen; });
const reviewBlue = "#7497CC";
const codeBlue = "#2D538C";
const descriptionGreen = "#9CB6BA";
const compareOrange = "#F2A966";
const ratingsYellow = "#F2E143";
const commentBlue = "#69BBCD";
const crossRed = "#DD7676";
const submitBlue = "#3E59B9";
const plannedModGreen = "#76CCB7";

/***/ }),

/***/ "yRN5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Lc87");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rOcY");



const baseUrl = `${_config__WEBPACK_IMPORTED_MODULE_2__[/* serverDomain */ "a"]}/api/planned-mod`;

const addPlannedMod = async (userId, modId, semester) => {
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(baseUrl, {
    userId,
    modId,
    semester
  }, {
    withCredentials: true
  });
};

const updatePlannedMod = async (plannedModId, userId, modId, semester) => {
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${baseUrl}/${plannedModId}`, {
    userId,
    modId,
    semester
  }, {
    withCredentials: true
  });
};

const removePlannedMod = async plannedModId => {
  await axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${baseUrl}/${plannedModId}`, {
    withCredentials: true
  });
};

const fetchPlannedMods = async userId => {
  const query = query_string__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
    userId
  });
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${baseUrl}/?${query}`, {
    withCredentials: true
  });
  return response.data;
};

/* harmony default export */ __webpack_exports__["a"] = ({
  addPlannedMod,
  removePlannedMod,
  fetchPlannedMods,
  updatePlannedMod
});

/***/ }),

/***/ "ye7r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ updatePersonalBookmarks; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ updatedPersonalPlannedModules; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ updatePersonalReviews; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ triggerRequireLoginMessage; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ fetchRatings; });

// EXTERNAL MODULE: ./api/bookmark.ts
var bookmark = __webpack_require__("elgY");

// EXTERNAL MODULE: ./api/planned-mod.ts
var planned_mod = __webpack_require__("yRN5");

// EXTERNAL MODULE: ./api/review.ts
var review = __webpack_require__("jBY8");

// EXTERNAL MODULE: ./redux/store.ts + 6 modules
var store = __webpack_require__("iEce");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./redux/constants.js
var constants = __webpack_require__("EHoS");

// CONCATENATED MODULE: ./redux/actions/personal-modules.ts

const fetchBookmarksAction = data => {
  return {
    type: constants["c" /* FETCH_BOOKMARKS */],
    payload: data
  };
};
const fetchPlannedModsAction = data => {
  return {
    type: constants["e" /* FETCH_PLANNED_MODS */],
    payload: data
  };
};
const fetchPersonalReviewsAction = data => {
  return {
    type: constants["d" /* FETCH_PERSONAL_REVIEWS */],
    payload: data
  };
};
// CONCATENATED MODULE: ./utils/helpers.ts






const updatePersonalBookmarks = async userId => {
  if (!userId) return;
  const data = await bookmark["a" /* default */].getBookmarks(userId);
  store["a" /* store */].dispatch(fetchBookmarksAction(data));
};
const updatedPersonalPlannedModules = async userId => {
  if (!userId) return;
  const data = await planned_mod["a" /* default */].fetchPlannedMods(userId);
  store["a" /* store */].dispatch(fetchPlannedModsAction(data));
};
const updatePersonalReviews = async userId => {
  if (!userId) return;
  const data = await review["a" /* default */].getReviewsOfUser(userId);
  store["a" /* store */].dispatch(fetchPersonalReviewsAction(data));
};
const triggerRequireLoginMessage = () => {
  external_antd_["message"].warning("You need to login first!");
};
const fetchRatings = (ratingIds, setStar, setDifficulty) => {
  ratingIds.forEach(async id => {
    const rating = await review["a" /* default */].getRatingById(id);

    if (rating.type == "star") {
      setStar(rating.value);
    } else if (rating.type == "difficulty") {
      setDifficulty(rating.value);
    }
  });
};

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });