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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/DtW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./icons/ArrowRightIcon.tsx

var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ArrowRightIcon(props) {
  return __jsx("svg", _extends({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "arrow-right",
    className: "arrow-right-solid_svg__svg-inline--fa arrow-right-solid_svg__fa-arrow-right arrow-right-solid_svg__fa-w-14",
    viewBox: "0 0 448 512"
  }, props), __jsx("path", {
    fill: "currentColor",
    d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
  }));
}

/* harmony default export */ var icons_ArrowRightIcon = (ArrowRightIcon);
// EXTERNAL MODULE: ./redux/constants.js
var constants = __webpack_require__("EHoS");

// EXTERNAL MODULE: ./styles/colors.js
var colors = __webpack_require__("xwfA");

// CONCATENATED MODULE: ./components/ModuleCompareCode.tsx

var ModuleCompareCode_jsx = external_react_default.a.createElement;




const ModuleCompareCode = ({
  code,
  order
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const onDelete = () => {
    dispatch({
      type: constants["b" /* DELETE_MODULE_FOR_COMPARISON */],
      payload: order
    });
  };

  const renderModuleCode = () => ModuleCompareCode_jsx("div", {
    style: styles.container
  }, code, ModuleCompareCode_jsx("div", {
    style: styles.deleteButton,
    onClick: onDelete
  }, "x"));

  const renderEmpty = () => ModuleCompareCode_jsx("div", {
    style: styles.emptyContainer
  });

  return code ? renderModuleCode() : renderEmpty();
};

const styles = {
  container: {
    position: "relative",
    height: 45,
    width: 100,
    backgroundColor: colors["a" /* codeBlue */],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    fontSize: 20
  },
  deleteButton: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: colors["d" /* crossRed */],
    height: 20,
    width: 20,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    cursor: "pointer"
  },
  emptyContainer: {
    height: 45,
    width: 100,
    border: "dashed #000",
    borderWidth: 1,
    borderRadius: 10
  }
};
/* harmony default export */ var components_ModuleCompareCode = (ModuleCompareCode);
// CONCATENATED MODULE: ./components/ModuleCompareModal.tsx

var ModuleCompareModal_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ModuleCompareModal = () => {
  const router = Object(router_["useRouter"])();
  const firstModuleId = Object(external_react_redux_["useSelector"])(state => state.compare.firstModuleId);
  const firstModuleCode = Object(external_react_redux_["useSelector"])(state => state.compare.firstModuleCode);
  const secondModuleId = Object(external_react_redux_["useSelector"])(state => state.compare.secondModuleId);
  const secondModuleCode = Object(external_react_redux_["useSelector"])(state => state.compare.secondModuleCode);
  const hasModuleToCompare = firstModuleId || secondModuleId ? "visible" : "hidden";

  const navigateToModuleComparisonPage = () => {
    if (firstModuleId && secondModuleId) {
      router.push({
        pathname: "/module-comparison",
        query: {
          firstModuleId,
          secondModuleId
        }
      });
    }
  };

  return ModuleCompareModal_jsx("div", {
    style: _objectSpread({
      visibility: hasModuleToCompare
    }, ModuleCompareModal_styles.container)
  }, ModuleCompareModal_jsx("div", {
    style: ModuleCompareModal_styles.modalContainer
  }, ModuleCompareModal_jsx("div", {
    style: ModuleCompareModal_styles.modulesContainer
  }, ModuleCompareModal_jsx(components_ModuleCompareCode, {
    code: firstModuleCode,
    order: constants["g" /* FIRST */]
  }), "vs", ModuleCompareModal_jsx(components_ModuleCompareCode, {
    code: secondModuleCode,
    order: constants["k" /* SECOND */]
  })), ModuleCompareModal_jsx("div", {
    style: ModuleCompareModal_styles.actionContainer,
    onClick: navigateToModuleComparisonPage
  }, ModuleCompareModal_jsx(icons_ArrowRightIcon, {
    style: ModuleCompareModal_styles.arrowIcon
  }))));
};

const ModuleCompareModal_styles = {
  container: {
    position: "fixed",
    bottom: "30px",
    left: 0,
    right: 0,
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    color: "#fff"
  },
  modalContainer: {
    width: 360,
    height: 70,
    backgroundColor: colors["c" /* compareOrange */],
    borderRadius: 12,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    display: "flex"
  },
  modulesContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 20px",
    fontSize: 20
  },
  actionContainer: {
    width: 40,
    height: "100%",
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  },
  arrowIcon: {
    height: 25
  }
};
/* harmony default export */ var components_ModuleCompareModal = __webpack_exports__["a"] = (ModuleCompareModal);

/***/ }),

/***/ "3Pwz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xQut");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xwfA");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const SeeMoreButton = ({
  style,
  fetchMoreData
}) => {
  return __jsx("div", {
    style: styles.seeMoreButtonContainer
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    onClick: fetchMoreData,
    style: _objectSpread(_objectSpread({}, styles.seeMoreButton), style)
  }, "See More"));
};

const styles = {
  seeMoreButtonContainer: {
    display: "flex",
    justifyContent: "center"
  },
  seeMoreButton: {
    backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_2__[/* reviewBlue */ "h"],
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    padding: 12,
    borderRadius: 10,
    color: "#fff"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (SeeMoreButton);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("easm");


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

/***/ "Lc87":
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "WPNV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/constants.js
var constants = __webpack_require__("EHoS");

// EXTERNAL MODULE: ./icons/StarFilledIcon.tsx
var StarFilledIcon = __webpack_require__("j1SK");

// EXTERNAL MODULE: ./styles/colors.js
var colors = __webpack_require__("xwfA");

// CONCATENATED MODULE: ./components/SearchModuleListCard.tsx

var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SearchModuleListCard = ({
  module
}) => {
  var _rating$star;

  const router = Object(router_["useRouter"])();
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    code,
    title,
    description,
    _id,
    rating
  } = module;
  const star = (rating === null || rating === void 0 ? void 0 : (_rating$star = rating.star) === null || _rating$star === void 0 ? void 0 : _rating$star.value) || 0;

  const navigateToModuleReviewPage = () => {
    router.push({
      pathname: "/module-review",
      query: {
        id: _id
      }
    });
  };

  const onCompare = () => {
    dispatch({
      type: constants["a" /* ADD_MODULE_FOR_COMPARISON */],
      payload: {
        id: _id,
        code
      }
    });
  };

  return __jsx("div", {
    style: styles.container
  }, __jsx("div", {
    style: _objectSpread(_objectSpread({}, styles.moduleCode), {}, {
      fontSize: `${code.length < 8 ? 23 : 18}px`
    }),
    onClick: navigateToModuleReviewPage
  }, code), __jsx("div", {
    style: styles.infoContainer,
    onClick: navigateToModuleReviewPage
  }, __jsx("div", {
    style: styles.moduleInfoContainer
  }, __jsx("div", {
    style: styles.moduleTitle
  }, title), __jsx("div", {
    style: styles.moduleDescription
  }, description)), __jsx("div", {
    style: styles.reviewStarContainer
  }, __jsx(StarFilledIcon["a" /* default */], {
    style: styles.starIcon
  }), __jsx("span", {
    style: styles.reviewNumber
  }, star.toFixed(1)))), __jsx("div", {
    style: styles.compareButton,
    onClick: onCompare
  }, "vs"));
};

const styles = {
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
    color: "#fff",
    fontFamily: "Roboto",
    margin: "10px 0px 30px 0px",
    padding: "0px 20px",
    cursor: "pointer"
  },
  moduleCode: {
    backgroundColor: colors["a" /* codeBlue */],
    height: 70,
    width: 120,
    position: "absolute",
    // workaround for TS bug
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "23px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    zIndex: 1
  },
  compareButton: {
    position: "absolute",
    right: 50,
    top: -20,
    bottom: 65,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: colors["c" /* compareOrange */],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    cursor: "pointer",
    zIndex: 1,
    fontSize: 18
  },
  infoContainer: {
    backgroundColor: colors["e" /* descriptionGreen */],
    display: "flex",
    justifyContent: "space-between",
    borderRadius: 15,
    marginLeft: 60,
    padding: "25px 20px 25px 60px",
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    width: "100%"
  },
  moduleInfoContainer: {
    padding: "0px 30px"
  },
  moduleTitle: {
    fontSize: 30,
    fontWeight: "bold"
  },
  moduleDescription: {
    textAlign: "justify",
    fontWeight: 300
  },
  reviewStarContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
  starIcon: {
    height: 30,
    color: colors["g" /* ratingsYellow */]
  },
  reviewNumber: {
    marginTop: 15,
    fontSize: 20
  }
};
/* harmony default export */ var components_SearchModuleListCard = (SearchModuleListCard);
// CONCATENATED MODULE: ./components/SearchModuleList.tsx

var SearchModuleList_jsx = external_react_default.a.createElement;

const dummyData = [{
  code: "CS3219",
  title: "Software Engineering Principles and Patterns",
  description: "This module provides an in-depth, hands-on experience in key aspects of software engineering that accompany the development of software. Based on proven principles and best practices, this module focuses on software architectural design from the perspective of the software process. It covers techniques for requirement elicitation and specification that provide sound base for architectural design. The module covers design decision exploration as well as patterns that explicate principles and best practices in replicable form.",
  rating: {
    difficulty: {
      count: 5,
      value: 5
    },
    star: {
      count: 4.8,
      value: 3.9
    }
  },
  workload: 10,
  schoolId: "NUS",
  _id: "5f98f92ff079a408f5c98b06",
  credit: 1290,
  semester: [2, 22, 2],
  prereqs: ["testing"]
}, {
  code: "CS3203",
  title: "Software Engineering Project",
  description: "This module provides students with hands-on experience in working in project groups through a complete SDLC to develop a well-designed, well-tested, large-scaled software system. The students will apply the current best software engineering practices on the analysis, design, implementation, and testing of software system. Through the project, students will practise analysis of user’s needs, formulation of computing requirements to meet the user’s needs, modelling and design of the computer systems according to the requirements, evaluation of the design, efficient implementation of software components, system integration, software version control, and rigorous testing.",
  workload: 20,
  schoolId: "NUS",
  _id: "5f98f92ff079a408f5c98b01",
  rating: {
    difficulty: {
      count: 5,
      value: 5
    },
    star: {
      count: 4.7,
      value: 4.7
    }
  },
  credit: 1290,
  semester: [2, 22, 2],
  prereqs: ["testing"]
}, {
  code: "CS2103T",
  title: "Software Engineering",
  description: "This module introduces the necessary conceptual and analytical tools for systematic and rigorous development of software systems. It covers four main areas of software development, namely object-oriented system analysis, object-oriented system modelling and design, implementation, and testing, with emphasis on system modelling and design and implementation of software modules that work cooperatively to fulfill the requirements of the system. Tools and techniques for software development, such as Unified Modelling Language (UML), program specification, and testing methods, will be taught. Major software engineering issues such as modularisation criteria, program correctness, and software quality will also be covered.",
  rating: {
    difficulty: {
      count: 4.5,
      value: 4.5
    },
    star: {
      count: 4.3,
      value: 4.3
    }
  },
  workload: 10,
  schoolId: "NUS",
  _id: "5f98f92ff079a408f5c98af3",
  credit: 1290,
  semester: [2, 22, 2],
  prereqs: ["testing"]
}];

const SearchModuleList = ({
  modules = dummyData
}) => {
  const renderModuleListItems = modules => {
    return modules.map((module, index) => {
      return SearchModuleList_jsx(components_SearchModuleListCard, {
        module: module,
        key: index
      });
    });
  };

  return SearchModuleList_jsx(external_react_default.a.Fragment, null, renderModuleListItems(modules));
};

/* harmony default export */ var components_SearchModuleList = __webpack_exports__["a"] = (SearchModuleList);

/***/ }),

/***/ "ZGPg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SectionTitle = ({
  title
}) => {
  return __jsx("div", {
    style: styles.container
  }, title);
};

const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "8vh",
    fontSize: "1.5em",
    color: "#838383",
    fontFamily: "Mukta"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (SectionTitle);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "easm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xQNW");
/* harmony import */ var _components_ModuleCompareModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/DtW");
/* harmony import */ var _components_SectionTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ZGPg");
/* harmony import */ var _components_SearchModuleList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("WPNV");
/* harmony import */ var _components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("3Pwz");
/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("xwfA");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Search = ({
  initialSearchResults = []
}) => {
  const {
    0: searchResults,
    1: setSearchResults
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialSearchResults);
  const {
    0: numberOfResults,
    1: setNumberOfResults
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(11); // the presence of that 11th result is an indicator that there are more than 10 results

  const searchTerm = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.search.searchTerm);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setNumberOfResults(10);
  }, [searchTerm]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setSearchResults(initialSearchResults);
  }, [initialSearchResults]);

  const fetchMoreSearchResults = async () => {
    const results = await _api_module__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].searchModule(searchTerm, numberOfResults + 10);
    setSearchResults(results);
    setNumberOfResults(numberOfResults + 10);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    title: `Search results for "${searchTerm}"`
  }), __jsx(_components_SearchModuleList__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    modules: searchResults.slice(0, numberOfResults - 1)
  }), searchResults.length == numberOfResults && __jsx(_components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    fetchMoreData: fetchMoreSearchResults,
    style: {
      backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_7__[/* descriptionGreen */ "e"]
    }
  }), __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    title: `Similar results to "${searchTerm}"`
  }), __jsx(_components_SearchModuleList__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    modules: []
  }), __jsx(_components_ModuleCompareModal__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null));
};

Search.getInitialProps = async ({
  query
}) => {
  const searchTerm = query.s;

  try {
    const initialSearchResults = await _api_module__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].searchModule(searchTerm);
    return {
      initialSearchResults
    };
  } catch (err) {
    return {
      initialSearchResults: []
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "j1SK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function StarSolid(props) {
  return __jsx("svg", _extends({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "star",
    className: "star-solid_svg__svg-inline--fa star-solid_svg__fa-star star-solid_svg__fa-w-18",
    viewBox: "0 0 576 512"
  }, props), __jsx("path", {
    fill: "currentColor",
    d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (StarSolid);

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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });