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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("PxXr");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "PxXr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./api/module.ts
var api_module = __webpack_require__("xQNW");

// EXTERNAL MODULE: ./api/review.ts
var review = __webpack_require__("jBY8");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/Button.tsx
var Button = __webpack_require__("xQut");

// EXTERNAL MODULE: ./styles/colors.js
var colors = __webpack_require__("xwfA");

// CONCATENATED MODULE: ./components/ModuleInfoComparison.tsx

var __jsx = external_react_default.a.createElement;




const ModuleInfoComparison = ({
  firstModule,
  secondModule
}) => {
  const router = Object(router_["useRouter"])();

  const navigateToModuleReviewPage = modId => {
    router.push({
      pathname: "/module-review",
      query: {
        id: modId
      }
    });
  };

  return __jsx("div", {
    style: styles.container
  }, __jsx("div", {
    style: styles.moduleInfoContainer
  }, __jsx(Button["a" /* default */], {
    style: styles.moduleCode,
    onClick: () => navigateToModuleReviewPage(firstModule._id)
  }, firstModule.code), __jsx(Button["a" /* default */], {
    style: styles.moduleCode,
    onClick: () => navigateToModuleReviewPage(secondModule._id)
  }, secondModule.code), __jsx("div", {
    style: styles.vsContainer
  }, "vs")), __jsx("div", {
    style: styles.moduleInfoContainer
  }, __jsx("div", {
    style: styles.moduleInfo
  }, __jsx("div", {
    style: styles.moduleTitle
  }, firstModule.title), __jsx("div", {
    style: styles.moduleDescription
  }, firstModule.description || "This module does not have any description.")), __jsx("div", {
    style: styles.moduleInfo
  }, __jsx("div", {
    style: styles.moduleTitle
  }, secondModule.title), __jsx("div", {
    style: styles.moduleDescription
  }, secondModule.description || "This module does not have any description."))));
};

const styles = {
  container: {
    width: "100%",
    color: "#fff",
    paddingTop: 40
  },
  moduleInfoContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: 20
  },
  moduleCode: {
    height: 60,
    width: 140,
    backgroundColor: colors["a" /* codeBlue */],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
    fontSize: 22,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)"
  },
  vsContainer: {
    position: "absolute",
    color: "#CFCFCF",
    fontSize: 20,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  moduleInfo: {
    width: 500,
    backgroundColor: colors["e" /* descriptionGreen */],
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    padding: 20,
    borderRadius: 15,
    textAlign: "justify",
    margin: "0px 10px"
  },
  moduleTitle: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 1,
    marginBottom: 5
  },
  moduleDescription: {
    fontSize: 11
  }
};
/* harmony default export */ var components_ModuleInfoComparison = (ModuleInfoComparison);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/MetaCompareRow.tsx

var MetaCompareRow_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const MetaCompareRow = ({
  title,
  firstMeta,
  secondMeta
}) => {
  return MetaCompareRow_jsx("div", {
    style: MetaCompareRow_styles.container
  }, MetaCompareRow_jsx("div", {
    style: _objectSpread(_objectSpread({}, MetaCompareRow_styles.metaContainer), {}, {
      borderWidth: "0px 1px 0px 0px"
    })
  }, firstMeta), MetaCompareRow_jsx("div", {
    style: _objectSpread(_objectSpread({}, MetaCompareRow_styles.metaContainer), {}, {
      borderWidth: "0px 0px 0px 1px"
    })
  }, secondMeta), MetaCompareRow_jsx("div", {
    style: MetaCompareRow_styles.titleContainer
  }, MetaCompareRow_jsx("div", {
    style: MetaCompareRow_styles.title
  }, title)));
};

const MetaCompareRow_styles = {
  container: {
    display: "flex",
    margin: "0px 20px",
    borderStyle: "solid",
    borderWidth: "2px 0px 0px 0px",
    borderColor: "#CFCFCF",
    position: "relative"
  },
  metaContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    borderStyle: "solid",
    borderColor: "#CFCFCF",
    fontSize: 20
  },
  titleContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  title: {
    backgroundColor: colors["c" /* compareOrange */],
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    padding: 10,
    color: "#fff",
    borderRadius: 10,
    width: 200,
    textAlign: "center"
  }
};
/* harmony default export */ var components_MetaCompareRow = (MetaCompareRow);
// CONCATENATED MODULE: ./components/ModuleMetaComparison.tsx

var ModuleMetaComparison_jsx = external_react_default.a.createElement;



const ModuleMetaComparison = ({
  firstModule,
  secondModule
}) => {
  var _schools$find, _firstRatings$difficu, _firstRatings$star, _schools$find2, _secondRatings$diffic, _secondRatings$star;

  const schools = Object(external_react_redux_["useSelector"])(state => state.schools);
  const {
    workload: firstModuleHours = 10,
    rating: firstRatings,
    schoolId: firstSchoolId,
    semester: firstSemester,
    credit: firstCredit = 4
  } = firstModule;
  const {
    workload: secondModuleHours = 10,
    rating: secondRatings,
    schoolId: secondSchoolId,
    semester: secondSemester,
    credit: secondCredit = 4
  } = secondModule;
  const firstUniversity = (_schools$find = schools.find(school => school._id === firstSchoolId)) === null || _schools$find === void 0 ? void 0 : _schools$find.name;
  const firstDifficulty = (firstRatings === null || firstRatings === void 0 ? void 0 : (_firstRatings$difficu = firstRatings.difficulty) === null || _firstRatings$difficu === void 0 ? void 0 : _firstRatings$difficu.value) || 3;
  const firstStar = (firstRatings === null || firstRatings === void 0 ? void 0 : (_firstRatings$star = firstRatings.star) === null || _firstRatings$star === void 0 ? void 0 : _firstRatings$star.value) || 3;
  const secondUniversity = (_schools$find2 = schools.find(school => school._id === secondSchoolId)) === null || _schools$find2 === void 0 ? void 0 : _schools$find2.name;
  const secondDifficulty = (secondRatings === null || secondRatings === void 0 ? void 0 : (_secondRatings$diffic = secondRatings.difficulty) === null || _secondRatings$diffic === void 0 ? void 0 : _secondRatings$diffic.value) || 3;
  const secondStar = (secondRatings === null || secondRatings === void 0 ? void 0 : (_secondRatings$star = secondRatings.star) === null || _secondRatings$star === void 0 ? void 0 : _secondRatings$star.value) || 3;
  return ModuleMetaComparison_jsx(external_react_default.a.Fragment, null, ModuleMetaComparison_jsx(components_MetaCompareRow, {
    title: "Expected Workload/Week",
    firstMeta: `${firstModuleHours}`,
    secondMeta: `${secondModuleHours}`
  }), ModuleMetaComparison_jsx(components_MetaCompareRow, {
    title: "Difficulty",
    firstMeta: `${firstDifficulty.toFixed(1)}/5`,
    secondMeta: `${secondDifficulty.toFixed(1)}/5`
  }), ModuleMetaComparison_jsx(components_MetaCompareRow, {
    title: "Ratings",
    firstMeta: `${firstStar.toFixed(1)}`,
    secondMeta: `${secondStar.toFixed(1)}`
  }), ModuleMetaComparison_jsx(components_MetaCompareRow, {
    title: "Semester(s) offered",
    firstMeta: `${firstSemester.sort().join(", ")}`,
    secondMeta: `${secondSemester.sort().join(", ")}`
  }), ModuleMetaComparison_jsx(components_MetaCompareRow, {
    title: "Credits",
    firstMeta: `${firstCredit}`,
    secondMeta: `${secondCredit}`
  }), ModuleMetaComparison_jsx(components_MetaCompareRow, {
    title: "University",
    firstMeta: firstUniversity,
    secondMeta: secondUniversity
  }), ModuleMetaComparison_jsx(components_MetaCompareRow, {
    title: "Reviews",
    firstMeta: "",
    secondMeta: ""
  }));
};

/* harmony default export */ var components_ModuleMetaComparison = (ModuleMetaComparison);
// EXTERNAL MODULE: ./components/ReviewList.tsx + 9 modules
var ReviewList = __webpack_require__("zmtl");

// CONCATENATED MODULE: ./components/ModuleReviewsComparison.tsx

var ModuleReviewsComparison_jsx = external_react_default.a.createElement;

function ModuleReviewsComparison_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ModuleReviewsComparison_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ModuleReviewsComparison_ownKeys(Object(source), true).forEach(function (key) { ModuleReviewsComparison_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ModuleReviewsComparison_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ModuleReviewsComparison_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const ModuleReviewsComparison = ({
  firstModuleReviews,
  secondModuleReviews
}) => {
  return ModuleReviewsComparison_jsx("div", {
    style: ModuleReviewsComparison_styles.container
  }, ModuleReviewsComparison_jsx("div", {
    style: ModuleReviewsComparison_objectSpread(ModuleReviewsComparison_objectSpread({}, ModuleReviewsComparison_styles.reviewsContainer), {}, {
      borderWidth: "0px 1px 0px 0px"
    })
  }, ModuleReviewsComparison_jsx(ReviewList["a" /* default */], {
    reviews: firstModuleReviews,
    showActions: false,
    updateReviews: () => {}
  })), ModuleReviewsComparison_jsx("div", {
    style: ModuleReviewsComparison_objectSpread(ModuleReviewsComparison_objectSpread({}, ModuleReviewsComparison_styles.reviewsContainer), {}, {
      borderWidth: "0px 0px 0px 1px"
    })
  }, ModuleReviewsComparison_jsx(ReviewList["a" /* default */], {
    reviews: secondModuleReviews,
    showActions: false,
    updateReviews: () => {}
  })));
};

const ModuleReviewsComparison_styles = {
  container: {
    display: "flex"
  },
  reviewsContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "#CFCFCF",
    padding: 20
  }
};
/* harmony default export */ var components_ModuleReviewsComparison = (ModuleReviewsComparison);
// CONCATENATED MODULE: ./pages/module-comparison.tsx

var module_comparison_jsx = external_react_default.a.createElement;






const ModuleComparison = ({
  firstModule,
  secondModule,
  firstModuleReviews,
  secondModuleReviews
}) => {
  return module_comparison_jsx(external_react_default.a.Fragment, null, module_comparison_jsx(components_ModuleInfoComparison, {
    firstModule: firstModule,
    secondModule: secondModule
  }), module_comparison_jsx(components_ModuleMetaComparison, {
    firstModule: firstModule,
    secondModule: secondModule
  }), module_comparison_jsx(components_ModuleReviewsComparison, {
    firstModuleReviews: firstModuleReviews,
    secondModuleReviews: secondModuleReviews
  }));
};

ModuleComparison.getInitialProps = async ({
  query
}) => {
  const firstModule = await api_module["a" /* default */].getModule(query.firstModuleId);
  const secondModule = await api_module["a" /* default */].getModule(query.secondModuleId);
  const firstModuleReviews = await review["a" /* default */].getReviewsOfModule(firstModule._id);
  const secondModuleReviews = await review["a" /* default */].getReviewsOfModule(secondModule._id);
  return {
    firstModule,
    secondModule,
    firstModuleReviews,
    secondModuleReviews
  };
};

/* harmony default export */ var module_comparison = __webpack_exports__["default"] = (ModuleComparison);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

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
    studyCourse: ""
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

/***/ "w5JA":
/***/ (function(module, exports) {

module.exports = {
	"commentModal": "commentModal___lxxH9"
};

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

/***/ "zmtl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__("Lc87");
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_);

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");

// CONCATENATED MODULE: ./api/comment.ts



const baseUrl = `${config["a" /* serverDomain */]}/api/reply`;

const addComment = async (userId, text, reviewId) => {
  await external_axios_default.a.post(baseUrl, {
    userId,
    text,
    reviewId
  }, {
    withCredentials: true
  });
};

const getCommentsOfReview = async reviewId => {
  const query = external_query_string_default.a.stringify({
    reviewId
  });
  const response = await external_axios_default.a.get(`${baseUrl}/?${query}`);
  return response.data;
};

/* harmony default export */ var api_comment = ({
  addComment,
  getCommentsOfReview
});
// CONCATENATED MODULE: ./api/reaction.ts



const reaction_baseUrl = `${config["a" /* serverDomain */]}/api/reaction`;

const addReaction = async (sub, subId, userId, type) => {
  await external_axios_default.a.post(reaction_baseUrl, {
    sub,
    subId,
    userId,
    type
  }, {
    withCredentials: true
  });
};

const getReaction = async (sub, subId, userId, type) => {
  const query = external_query_string_default.a.stringify({
    sub,
    subId,
    userId,
    type
  });
  const response = await external_axios_default.a.get(`${reaction_baseUrl}/?${query}`);
  return response.data;
};

const deleteReaction = async reactionId => {
  await external_axios_default.a.delete(`${reaction_baseUrl}/${reactionId}`);
};

/* harmony default export */ var api_reaction = ({
  addReaction,
  getReaction,
  deleteReaction
});
// EXTERNAL MODULE: ./utils/helpers.ts + 1 modules
var helpers = __webpack_require__("ye7r");

// EXTERNAL MODULE: ./components/FormModal.tsx
var FormModal = __webpack_require__("0lvd");

// EXTERNAL MODULE: ./components/FormModalItem.tsx
var FormModalItem = __webpack_require__("HNwB");

// EXTERNAL MODULE: ./styles/colors.js
var colors = __webpack_require__("xwfA");

// CONCATENATED MODULE: ./components/AddCommentModal.tsx

var __jsx = external_react_default.a.createElement;







const AddCommentModal = ({
  isModalVisible,
  setModalVisibility,
  reviewId,
  fetchComments
}) => {
  const {
    0: comment,
    1: setComment
  } = Object(external_react_["useState"])("");
  const {
    0: submitText,
    1: setSubmitText
  } = Object(external_react_["useState"])("Submit");
  const {
    0: submitColor,
    1: setSubmitColor
  } = Object(external_react_["useState"])(colors["i" /* submitBlue */]);
  const userId = Object(external_react_redux_["useSelector"])(state => {
    var _state$auth$user;

    return (_state$auth$user = state.auth.user) === null || _state$auth$user === void 0 ? void 0 : _state$auth$user._id;
  });

  const onSubmit = async () => {
    if (!validateForm()) {
      setSubmitText("You did not comment anything. Once done click this button!");
      setSubmitColor(colors["d" /* crossRed */]);
      return;
    }

    await api_comment.addComment(userId, comment, reviewId);
    setComment("");
    setSubmitText("Submit");
    setSubmitColor(colors["i" /* submitBlue */]);
    setModalVisibility(false);
    fetchComments();
  };

  const validateForm = () => comment !== "";

  const closeModal = isToClose => {
    setModalVisibility(isToClose);
    setSubmitColor(colors["i" /* submitBlue */]);
    setSubmitText("Submit");
  };

  return __jsx(FormModal["a" /* default */], {
    title: "Add Comment",
    backgroundColor: colors["b" /* commentBlue */],
    isModalVisible: isModalVisible,
    setModalVisibility: closeModal,
    submitColor: submitColor,
    onSubmit: onSubmit,
    submitText: submitText
  }, __jsx(FormModalItem["a" /* default */], {
    label: "Comment",
    type: "textarea",
    value: comment,
    setValue: setComment
  }));
};

/* harmony default export */ var components_AddCommentModal = (AddCommentModal);
// EXTERNAL MODULE: ./components/Button.tsx
var Button = __webpack_require__("xQut");

// EXTERNAL MODULE: ./styles/styles.module.css
var styles_module = __webpack_require__("w5JA");
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: ./api/user.ts


const user_baseUrl = `${config["a" /* serverDomain */]}/api/user`;

const getUser = async userId => {
  const response = await external_axios_default.a.get(`${user_baseUrl}/${userId}`);
  return response.data;
};

/* harmony default export */ var api_user = ({
  getUser
});
// CONCATENATED MODULE: ./components/CommentCard.tsx

var CommentCard_jsx = external_react_default.a.createElement;




const CommentCard = ({
  comment
}) => {
  const {
    0: name,
    1: setName
  } = Object(external_react_["useState"])("");
  Object(external_react_["useEffect"])(() => {
    getUserName();
  }, []);

  const getUserName = async () => {
    const user = await api_user.getUser(comment.userId);
    setName(user.name);
  };

  return CommentCard_jsx("div", {
    style: styles.container
  }, CommentCard_jsx("div", {
    style: styles.header
  }, name), CommentCard_jsx("div", {
    style: styles.comment
  }, comment.text));
};

const styles = {
  container: {
    backgroundColor: colors["b" /* commentBlue */],
    borderRadius: 10,
    width: "100%",
    padding: 15,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    marginTop: 20
  },
  header: {
    marginBottom: 10
  },
  comment: {}
};
/* harmony default export */ var components_CommentCard = (CommentCard);
// EXTERNAL MODULE: ./icons/CrossIcon.tsx
var CrossIcon = __webpack_require__("uUid");

// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__("7koQ");
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);

// CONCATENATED MODULE: ./components/CommentsModal.tsx

var CommentsModal_jsx = external_react_default.a.createElement;






const CommentsModal = ({
  comments,
  isModalVisible,
  setModalVisibility
}) => {
  const renderComments = () => comments.map((comment, index) => {
    return CommentsModal_jsx(components_CommentCard, {
      comment: comment,
      key: index
    });
  });

  const renderNoCommentsFeedback = () => CommentsModal_jsx(external_react_default.a.Fragment, null, "No comments yet. You can be the first!");

  return CommentsModal_jsx(external_react_modal_default.a, {
    isOpen: isModalVisible,
    style: {
      overlay: CommentsModal_styles.overlay,
      content: CommentsModal_styles.content
    }
  }, CommentsModal_jsx("div", {
    style: CommentsModal_styles.header
  }, CommentsModal_jsx("span", null, "Comments"), CommentsModal_jsx("div", {
    onClick: () => setModalVisibility(false)
  }, CommentsModal_jsx(CrossIcon["a" /* default */], {
    style: CommentsModal_styles.closeButton
  }))), CommentsModal_jsx("div", {
    className: styles_module_default.a.commentModal,
    style: {
      maxHeight: "70vh",
      overflowY: "scroll",
      padding: 10
    }
  }, comments.length === 0 ? renderNoCommentsFeedback() : renderComments()));
};

const CommentsModal_styles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(232, 232, 232, 0.5)"
  },
  content: {
    position: "static",
    width: 600,
    color: "#fff",
    borderRadius: 15,
    borderWidth: 0,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    padding: "30px 30px 20px 30px",
    backgroundColor: colors["h" /* reviewBlue */]
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 25,
    marginBottom: 10,
    padding: "0px 10px"
  },
  closeButton: {
    color: "#fff",
    transform: "scale(0.8)",
    cursor: "pointer"
  }
};
/* harmony default export */ var components_CommentsModal = (CommentsModal);
// CONCATENATED MODULE: ./icons/CommentOutlinedIcon.tsx

var CommentOutlinedIcon_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function CommentOutlinedIcon(props) {
  return CommentOutlinedIcon_jsx("svg", _extends({
    "aria-hidden": "true",
    "data-prefix": "far",
    "data-icon": "comments",
    className: "comments-regular_svg__svg-inline--fa comments-regular_svg__fa-comments comments-regular_svg__fa-w-18",
    viewBox: "0 0 576 512"
  }, props), CommentOutlinedIcon_jsx("path", {
    fill: "currentColor",
    d: "M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"
  }));
}

/* harmony default export */ var icons_CommentOutlinedIcon = (CommentOutlinedIcon);
// CONCATENATED MODULE: ./icons/LikeOutlinedIcon.tsx

var LikeOutlinedIcon_jsx = external_react_default.a.createElement;

function LikeOutlinedIcon_extends() { LikeOutlinedIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return LikeOutlinedIcon_extends.apply(this, arguments); }

function LikeOutlinedIcon(props) {
  return LikeOutlinedIcon_jsx("svg", LikeOutlinedIcon_extends({
    "aria-hidden": "true",
    "data-prefix": "far",
    "data-icon": "thumbs-up",
    className: "thumbs-up-regular_svg__svg-inline--fa thumbs-up-regular_svg__fa-thumbs-up thumbs-up-regular_svg__fa-w-16",
    viewBox: "0 0 512 512"
  }, props), LikeOutlinedIcon_jsx("path", {
    fill: "currentColor",
    d: "M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"
  }));
}

/* harmony default export */ var icons_LikeOutlinedIcon = (LikeOutlinedIcon);
// CONCATENATED MODULE: ./components/ReviewCard.tsx

var ReviewCard_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const ReviewCard = ({
  review,
  updateReviews,
  showActions = true
}) => {
  var _reaction$like$count, _reaction$like;

  console.log("review", review);
  const {
    0: isCommentsModalVisible,
    1: setCommentsModalVisibility
  } = Object(external_react_["useState"])(false);
  const {
    0: isAddCommentModalVisible,
    1: setAddCommentModalVisibility
  } = Object(external_react_["useState"])(false);
  const {
    0: comments,
    1: setComments
  } = Object(external_react_["useState"])([]);
  const {
    0: userLikeReactionId,
    1: setUserLikeReactionId
  } = Object(external_react_["useState"])("");
  const {
    0: difficulty,
    1: setDifficulty
  } = Object(external_react_["useState"])(3);
  const {
    0: star,
    1: setStar
  } = Object(external_react_["useState"])(3);
  const isLoggedIn = Object(external_react_redux_["useSelector"])(state => state.auth.isLoggedIn);
  const userId = Object(external_react_redux_["useSelector"])(state => {
    var _state$auth$user;

    return (_state$auth$user = state.auth.user) === null || _state$auth$user === void 0 ? void 0 : _state$auth$user._id;
  });
  const {
    user,
    text,
    acadYearTaken,
    semesterTaken,
    reaction,
    _id,
    ratingIds
  } = review;
  const name = user === null || user === void 0 ? void 0 : user.name;
  const like = (_reaction$like$count = reaction === null || reaction === void 0 ? void 0 : (_reaction$like = reaction.like) === null || _reaction$like === void 0 ? void 0 : _reaction$like.count) !== null && _reaction$like$count !== void 0 ? _reaction$like$count : 0;
  Object(external_react_["useEffect"])(() => {
    fetchComments();
    checkIsLikedByUser();
  }, []);
  Object(external_react_["useEffect"])(() => {
    Object(helpers["a" /* fetchRatings */])(ratingIds, setStar, setDifficulty);
  }, [ratingIds]);

  const fetchComments = async () => {
    const fetchedComments = await api_comment.getCommentsOfReview(_id);
    setComments(fetchedComments);
  };

  const checkIsLikedByUser = async () => {
    try {
      const likeReaction = await api_reaction.getReaction("review", _id, userId, "like");
      setUserLikeReactionId(likeReaction._id);
    } catch (err) {
      setUserLikeReactionId("");
    }
  };

  const onLikeReview = async () => {
    if (!isLoggedIn) {
      Object(helpers["b" /* triggerRequireLoginMessage */])();
      return;
    }

    if (!userLikeReactionId) {
      await api_reaction.addReaction("review", _id, userId, "like");
      updateReviews();
      checkIsLikedByUser();
    } else {
      await api_reaction.deleteReaction(userLikeReactionId);
      updateReviews();
      checkIsLikedByUser();
    }
  };

  const toggleCommentModalVisibility = () => {
    if (!isLoggedIn) {
      Object(helpers["b" /* triggerRequireLoginMessage */])();
    } else {
      setAddCommentModalVisibility(true);
    }
  };

  return ReviewCard_jsx("div", {
    style: ReviewCard_styles.container
  }, ReviewCard_jsx("div", {
    style: ReviewCard_styles.header
  }, ReviewCard_jsx("div", {
    style: ReviewCard_styles.userInformation
  }, ReviewCard_jsx("span", null, name), ReviewCard_jsx("span", {
    style: ReviewCard_styles.divider
  }, "|"), ReviewCard_jsx("span", null, "AY", acadYearTaken, ", Sem ", semesterTaken), ReviewCard_jsx("span", {
    style: ReviewCard_styles.divider
  }, "|"), ReviewCard_jsx("span", null, "Difficulty: ", difficulty.toFixed(1)), ReviewCard_jsx("span", {
    style: ReviewCard_styles.divider
  }, "|"), ReviewCard_jsx("span", null, "Rating: ", star.toFixed(1))), showActions && ReviewCard_jsx("div", {
    style: ReviewCard_styles.actionsBar
  }, ReviewCard_jsx("div", {
    style: ReviewCard_styles.action
  }, ReviewCard_jsx(Button["a" /* default */], {
    onClick: onLikeReview
  }, ReviewCard_jsx(icons_LikeOutlinedIcon, {
    style: _objectSpread(_objectSpread({}, ReviewCard_styles.icon), {}, {
      color: userLikeReactionId ? colors["g" /* ratingsYellow */] : "#fff"
    })
  })), ReviewCard_jsx("span", null, `${like} Likes`)), ReviewCard_jsx("span", {
    style: {
      margin: "0px 10px"
    }
  }, "|"), ReviewCard_jsx("div", {
    style: ReviewCard_styles.action
  }, ReviewCard_jsx(Button["a" /* default */], {
    onClick: toggleCommentModalVisibility
  }, ReviewCard_jsx(icons_CommentOutlinedIcon, {
    style: ReviewCard_styles.icon
  })), ReviewCard_jsx(Button["a" /* default */], {
    onClick: () => setCommentsModalVisibility(true)
  }, `${comments.length} Comments`)))), ReviewCard_jsx("div", {
    style: ReviewCard_styles.review
  }, text), ReviewCard_jsx(components_AddCommentModal, {
    fetchComments: fetchComments,
    reviewId: _id,
    isModalVisible: isAddCommentModalVisible,
    setModalVisibility: setAddCommentModalVisibility
  }), ReviewCard_jsx(components_CommentsModal, {
    comments: comments,
    isModalVisible: isCommentsModalVisible,
    setModalVisibility: setCommentsModalVisibility
  }));
};

const ReviewCard_styles = {
  container: {
    padding: 30,
    backgroundColor: colors["h" /* reviewBlue */],
    color: "#fff",
    borderRadius: 15,
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)",
    marginBottom: 15,
    width: "100%"
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  },
  userInformation: {
    display: "flex",
    flexWrap: "wrap"
  },
  actionsBar: {
    display: "flex"
  },
  action: {
    display: "flex",
    justifyContent: "center"
  },
  icon: {
    height: 20,
    marginRight: 10
  },
  review: {
    marginTop: 10,
    textAlign: "justify"
  },
  divider: {
    margin: "0px 10px"
  }
};
/* harmony default export */ var components_ReviewCard = (ReviewCard);
// CONCATENATED MODULE: ./components/ReviewList.tsx

var ReviewList_jsx = external_react_default.a.createElement;


const ReviewList = ({
  reviews = [],
  updateReviews,
  showActions
}) => {
  const renderReviews = () => reviews.map(review => {
    return ReviewList_jsx(components_ReviewCard, {
      review: review,
      key: review._id,
      updateReviews: updateReviews,
      showActions: showActions
    });
  });

  return ReviewList_jsx(external_react_default.a.Fragment, null, reviews.length !== 0 ? renderReviews() : ReviewList_jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 50
    }
  }, "There are no reviews yet!"));
};

/* harmony default export */ var components_ReviewList = __webpack_exports__["a"] = (ReviewList);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });