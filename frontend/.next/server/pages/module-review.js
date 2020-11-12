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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("im0w");


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
  setSearchTerm,
  minNum
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
    onChange: e => setValue(e),
    min: minNum
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
  }, options ? options.map(option => __jsx(Option, {
    value: option
  }, option)) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Option, {
    value: 1
  }, "1"), __jsx(Option, {
    value: 2
  }, "2"), __jsx(Option, {
    value: 3
  }, "3"), __jsx(Option, {
    value: 4
  }, "4")));

  const renderSemesters = () => __jsx("div", {
    style: {
      display: "flex",
      alignItems: "center",
      height: 34
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    style: {
      color: "white"
    },
    onChange: () => setValue(1)
  }, "1"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    style: {
      color: "white"
    },
    onChange: () => setValue(2)
  }, "2"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    style: {
      color: "white"
    },
    onChange: () => setValue(3)
  }, "3"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
    style: {
      color: "white"
    },
    onChange: () => setValue(4)
  }, "4"));

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
    defaultValue: value,
    onSearch: searchText => setSearchOptions(options.filter(item => item.value.toLowerCase().includes(searchText.toLowerCase())))
  });

  const renderPrereq = () => {
    const removeCode = removedMod => {
      const filteredCodes = value.filter(mod => mod.id !== removedMod.id);
      setValue(filteredCodes);
    };

    const renderTags = () => {
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
    input: renderInput,
    textarea: renderTextArea,
    text: renderText,
    rate: renderRate,
    difficulty: renderDifficulty,
    number: renderNumber,
    year: renderYear,
    semester: renderSemester,
    semesters: renderSemesters,
    annualYear: renderAnnualYear,
    university: renderUniversity,
    autocomplete: renderAutoComplete,
    prereq: renderPrereq
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
{
  /* <div>
        <input
          id="1"
          type="checkbox"
          value={firstIsChecked}
          onChange={toggleCheckbox(1)}
        />
        <label style={styles.inputCheckboxLabel} htmlFor="1">
          1
        </label>
      </div>
      <div>
        <input
          id="2"
          type="checkbox"
          value={secondIsChecked}
          onChange={toggleCheckbox(2)}
        />
        <label style={styles.inputCheckboxLabel} htmlFor="2">
          2
        </label>
      </div>
      <div>
        <input
          id="3"
          type="checkbox"
          value={secondIsChecked}
          onChange={toggleCheckbox(3)}
        />
        <label style={styles.inputCheckboxLabel} htmlFor="3">
          3
        </label>
      </div>
      <div>
        <input
          id="4"
          type="checkbox"
          value={secondIsChecked}
          onChange={toggleCheckbox(4)}
        />
        <label style={styles.inputCheckboxLabel} htmlFor="4">
          4
        </label>
      </div> */
}

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Lc87":
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "Q3Rx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function BookmarkIcon(props) {
  return __jsx("svg", _extends({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "bookmark",
    className: "bookmark-solid_svg__svg-inline--fa bookmark-solid_svg__fa-bookmark bookmark-solid_svg__fa-w-12",
    viewBox: "0 0 384 512"
  }, props), __jsx("path", {
    fill: "currentColor",
    d: "M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (BookmarkIcon);

/***/ }),

/***/ "Vfi8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function PenIcon(props) {
  return __jsx("svg", _extends({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "pen-alt",
    className: "pen-alt-solid_svg__svg-inline--fa pen-alt-solid_svg__fa-pen-alt pen-alt-solid_svg__fa-w-16",
    viewBox: "0 0 512 512"
  }, props), __jsx("path", {
    fill: "currentColor",
    d: "M497.94 74.17l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.75 18.75-49.15 0-67.91zm-246.8-20.53c-15.62-15.62-40.94-15.62-56.56 0L75.8 172.43c-6.25 6.25-6.25 16.38 0 22.62l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l101.82-101.82 22.63 22.62L93.95 290.03A327.038 327.038 0 00.17 485.11l-.03.23c-1.7 15.28 11.21 28.2 26.49 26.51a327.02 327.02 0 00195.34-93.8l196.79-196.79-82.77-82.77-84.85-84.85z"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (PenIcon);

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
      return initialState;

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

/***/ "im0w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./api/module.ts
var api_module = __webpack_require__("xQNW");

// EXTERNAL MODULE: ./api/review.ts
var review = __webpack_require__("jBY8");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__("Lc87");
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_);

// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__("rOcY");

// CONCATENATED MODULE: ./api/event.ts



const baseUrl = `${config["a" /* serverDomain */]}/api/event`;

const addEvent = async (userId, sub, subId, type) => {
  const response = await external_axios_default.a.post(baseUrl, {
    userId,
    sub,
    subId,
    type
  });
  return response.data;
};

const getEvent = async (subscriberType, subscriberId, userId, eventType) => {
  const query = external_query_string_default.a.stringify({
    sub: subscriberType,
    subId: subscriberId,
    userId,
    type: eventType
  });
  const response = await external_axios_default.a.get(`${baseUrl}/?${query}`);
  return response.data;
};

const deleteEvent = async (subscriberType, subscriberId, userId, eventType) => {
  await external_axios_default.a.delete(baseUrl, {
    params: {
      sub: subscriberType,
      subId: subscriberId,
      userId,
      type: eventType
    }
  });
};

/* harmony default export */ var api_event = ({
  addEvent,
  getEvent,
  deleteEvent
});
// EXTERNAL MODULE: ./utils/helpers.ts + 1 modules
var helpers = __webpack_require__("ye7r");

// EXTERNAL MODULE: ./components/FormModal.tsx
var FormModal = __webpack_require__("0lvd");

// EXTERNAL MODULE: ./components/FormModalItem.tsx
var FormModalItem = __webpack_require__("HNwB");

// EXTERNAL MODULE: ./styles/colors.js
var colors = __webpack_require__("xwfA");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./components/AddReviewModal.tsx

var __jsx = external_react_default.a.createElement;








const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();
const yearShortform = currentYear % 2000; // eg. 2021 => 21

const currentSemester = currentMonth < 6 ? 2 : 1;
const currentAYSecondYear = currentSemester === 1 ? yearShortform + 1 : yearShortform;
const yearMinusOne = currentAYSecondYear - 1;
const initialReviewState = {
  text: "",
  ratingIds: [],
  workload: 10,
  semesterTaken: "",
  acadYearTaken: `${yearMinusOne}/${currentAYSecondYear}`
};

const AddReviewModal = ({
  code,
  module,
  updateReviews,
  updateModule,
  isModalVisible,
  setModalVisibility,
  reviewByUser,
  ratingsByUser
}) => {
  const initialReview = reviewByUser !== null && reviewByUser !== void 0 ? reviewByUser : initialReviewState;
  const {
    0: text,
    1: setText
  } = Object(external_react_["useState"])(initialReview.text);
  const {
    0: difficulty,
    1: setDifficulty
  } = Object(external_react_["useState"])(3);
  const {
    0: ratings,
    1: setRatings
  } = Object(external_react_["useState"])(3);
  const {
    0: semester,
    1: setSemester
  } = Object(external_react_["useState"])(initialReview.semesterTaken);
  const {
    0: year,
    1: setYear
  } = Object(external_react_["useState"])(initialReview.acadYearTaken);
  const userId = Object(external_react_redux_["useSelector"])(state => {
    var _state$auth$user;

    return (_state$auth$user = state.auth.user) === null || _state$auth$user === void 0 ? void 0 : _state$auth$user._id;
  });
  console.log(module);
  Object(external_react_["useEffect"])(() => {
    const ratingIds = reviewByUser === null || reviewByUser === void 0 ? void 0 : reviewByUser.ratingIds;

    if ((ratingIds === null || ratingIds === void 0 ? void 0 : ratingIds.length) > 0) {
      Object(helpers["a" /* fetchRatings */])(ratingIds, setRatings, setDifficulty);
    }
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (reviewByUser) {
      setText(reviewByUser.text); // setDifficulty()
      // setRatings()

      setSemester(reviewByUser.semesterTaken);
      setYear(reviewByUser.acadYearTaken);
    }
  }, [reviewByUser]);

  const onSubmit = async () => {
    if (!validateForm()) {
      external_antd_["message"].error("You need to fill in all fields!");
      return;
    }

    const requestBody = {
      text,
      semesterTaken: semester,
      acadYearTaken: year,
      modId: module._id,
      userId,
      ratings: [{
        type: "difficulty",
        value: difficulty
      }, {
        type: "star",
        value: ratings
      }]
    };

    if (reviewByUser) {
      await review["a" /* default */].updateReviewOfModule(requestBody, reviewByUser._id);
      updateReviews(); // update ratings
    } else {
      if (ratingsByUser) {
        await review["a" /* default */].deleteRating(ratingsByUser._id);
      }

      await review["a" /* default */].addReviewOfModule(requestBody);
    }

    setModalVisibility(false);
    updateReviews();
    updateModule();
  };

  const validateForm = () => ratings !== 0 && difficulty !== 0 && text.trim() !== "";

  const closeModal = isToClose => {
    setModalVisibility(isToClose);
  };

  return __jsx(FormModal["a" /* default */], {
    backgroundColor: colors["h" /* reviewBlue */],
    submitColor: colors["i" /* submitBlue */],
    title: `${reviewByUser ? "Edit" : "Add"} Review`,
    isModalVisible: isModalVisible,
    setModalVisibility: closeModal,
    onSubmit: onSubmit
  }, __jsx(FormModalItem["a" /* default */], {
    label: "Module Code",
    type: "text",
    value: code
  }), __jsx(FormModalItem["a" /* default */], {
    label: "Review",
    type: "textarea",
    value: text,
    setValue: setText
  }), __jsx(FormModalItem["a" /* default */], {
    label: "Year Taken",
    type: "annualYear",
    value: year,
    setValue: setYear
  }), __jsx(FormModalItem["a" /* default */], {
    label: "Semester Taken",
    type: "semester",
    value: semester,
    options: module.semester,
    setValue: setSemester
  }), __jsx(FormModalItem["a" /* default */], {
    label: "Difficulty",
    type: "difficulty",
    value: difficulty,
    setValue: setDifficulty
  }), __jsx(FormModalItem["a" /* default */], {
    label: "Ratings",
    type: "rate",
    value: ratings,
    setValue: setRatings
  }));
};

/* harmony default export */ var components_AddReviewModal = (AddReviewModal);
// CONCATENATED MODULE: ./components/AddRatingsModal.tsx

var AddRatingsModal_jsx = external_react_default.a.createElement;








const AddRatingsModal = ({
  code,
  modId,
  ratingsByUser,
  isModalVisible,
  setModalVisibility,
  updateModule,
  checkIsRatedByUser
}) => {
  var _ratingsByUser$value;

  const userId = Object(external_react_redux_["useSelector"])(state => {
    var _state$auth$user;

    return (_state$auth$user = state.auth.user) === null || _state$auth$user === void 0 ? void 0 : _state$auth$user._id;
  });
  const {
    0: ratings,
    1: setRatings
  } = Object(external_react_["useState"])((_ratingsByUser$value = ratingsByUser === null || ratingsByUser === void 0 ? void 0 : ratingsByUser.value) !== null && _ratingsByUser$value !== void 0 ? _ratingsByUser$value : 3);
  const {
    0: submitText,
    1: setSubmitText
  } = Object(external_react_["useState"])("Submit");
  const {
    0: submitColor,
    1: setSubmitColor
  } = Object(external_react_["useState"])(colors["i" /* submitBlue */]);
  Object(external_react_["useEffect"])(() => {
    var _ratingsByUser$value2;

    setRatings((_ratingsByUser$value2 = ratingsByUser === null || ratingsByUser === void 0 ? void 0 : ratingsByUser.value) !== null && _ratingsByUser$value2 !== void 0 ? _ratingsByUser$value2 : 0);
  }, [ratingsByUser]);

  const onSubmit = async () => {
    if (!validateForm()) {
      external_antd_["message"].error("You need to rate the module first!");
      return;
    }

    if (ratingsByUser) {
      await review["a" /* default */].updateRating(ratings, "star", userId, modId, "mod", ratingsByUser._id);
    } else {
      await review["a" /* default */].addRating(ratings, "star", userId, modId, "mod");
    }

    checkIsRatedByUser();
    updateModule();
    setModalVisibility(false);
  };

  const validateForm = () => ratings !== 0;

  const closeModal = isToClose => {
    setModalVisibility(isToClose);
    setSubmitColor(colors["i" /* submitBlue */]);
    setSubmitText("Submit");
  };

  return AddRatingsModal_jsx(FormModal["a" /* default */], {
    backgroundColor: colors["h" /* reviewBlue */],
    submitColor: submitColor,
    title: "Rate the Module",
    isModalVisible: isModalVisible,
    setModalVisibility: closeModal,
    onSubmit: onSubmit,
    submitText: submitText
  }, AddRatingsModal_jsx(FormModalItem["a" /* default */], {
    label: "Module Code",
    type: "text",
    value: code
  }), AddRatingsModal_jsx(FormModalItem["a" /* default */], {
    label: "Ratings",
    type: "rate",
    value: ratings,
    setValue: setRatings
  }));
};

/* harmony default export */ var components_AddRatingsModal = (AddRatingsModal);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: ./api/bookmark.ts
var bookmark = __webpack_require__("elgY");

// EXTERNAL MODULE: ./api/planned-mod.ts
var planned_mod = __webpack_require__("yRN5");

// CONCATENATED MODULE: ./components/ModuleSmallDetail.tsx

var ModuleSmallDetail_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ModuleSmallDetail = ({
  Icon,
  text,
  iconStyle
}) => {
  return ModuleSmallDetail_jsx("div", {
    style: styles.container
  }, ModuleSmallDetail_jsx("div", {
    style: styles.iconContainer
  }, ModuleSmallDetail_jsx(Icon, {
    style: _objectSpread({
      height: 20
    }, iconStyle)
  })), ModuleSmallDetail_jsx("span", {
    style: styles.text
  }, text));
};

const styles = {
  container: {
    display: "flex",
    marginLeft: 20,
    padding: "10px 0px"
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    width: 26
  },
  text: {
    marginLeft: 10,
    color: "#838383",
    textOverflow: "ellipsis"
  }
};
/* harmony default export */ var components_ModuleSmallDetail = (ModuleSmallDetail);
// CONCATENATED MODULE: ./icons/UserClockIcon.tsx

var UserClockIcon_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function UserClockIcon(props) {
  return UserClockIcon_jsx("svg", _extends({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "user-clock",
    className: "user-clock-solid_svg__svg-inline--fa user-clock-solid_svg__fa-user-clock user-clock-solid_svg__fa-w-20",
    viewBox: "0 0 640 512"
  }, props), UserClockIcon_jsx("path", {
    fill: "currentColor",
    d: "M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z"
  }));
}

/* harmony default export */ var icons_UserClockIcon = (UserClockIcon);
// CONCATENATED MODULE: ./icons/CoinsFilledIcon.tsx

var CoinsFilledIcon_jsx = external_react_default.a.createElement;

function CoinsFilledIcon_extends() { CoinsFilledIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CoinsFilledIcon_extends.apply(this, arguments); }

function CoinsFilledIcon(props) {
  return CoinsFilledIcon_jsx("svg", CoinsFilledIcon_extends({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "coins",
    className: "coins-solid_svg__svg-inline--fa coins-solid_svg__fa-coins coins-solid_svg__fa-w-16",
    viewBox: "0 0 512 512"
  }, props), CoinsFilledIcon_jsx("path", {
    fill: "currentColor",
    d: "M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"
  }));
}

/* harmony default export */ var icons_CoinsFilledIcon = (CoinsFilledIcon);
// CONCATENATED MODULE: ./icons/HourGlassHalfFilledIcon.tsx

var HourGlassHalfFilledIcon_jsx = external_react_default.a.createElement;

function HourGlassHalfFilledIcon_extends() { HourGlassHalfFilledIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return HourGlassHalfFilledIcon_extends.apply(this, arguments); }

function HourGlassHalfFilledIcon(props) {
  return HourGlassHalfFilledIcon_jsx("svg", HourGlassHalfFilledIcon_extends({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "hourglass-half",
    className: "hourglass-half-solid_svg__svg-inline--fa hourglass-half-solid_svg__fa-hourglass-half hourglass-half-solid_svg__fa-w-12",
    viewBox: "0 0 384 512"
  }, props), HourGlassHalfFilledIcon_jsx("path", {
    fill: "currentColor",
    d: "M360 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24zm-75.078 384H99.08c17.059-46.797 52.096-80 92.92-80 40.821 0 75.862 33.196 92.922 80zm.019-256H99.078C91.988 108.548 88 86.748 88 64h208c0 22.805-3.987 44.587-11.059 64z"
  }));
}

/* harmony default export */ var icons_HourGlassHalfFilledIcon = (HourGlassHalfFilledIcon);
// CONCATENATED MODULE: ./icons/LayerGroupIcon.tsx

var LayerGroupIcon_jsx = external_react_default.a.createElement;

function LayerGroupIcon_extends() { LayerGroupIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return LayerGroupIcon_extends.apply(this, arguments); }

function LayerGroupIcon(props) {
  return LayerGroupIcon_jsx("svg", LayerGroupIcon_extends({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "layer-group",
    className: "layer-group-solid_svg__svg-inline--fa layer-group-solid_svg__fa-layer-group layer-group-solid_svg__fa-w-16",
    viewBox: "0 0 512 512"
  }, props), LayerGroupIcon_jsx("path", {
    fill: "currentColor",
    d: "M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 00-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"
  }));
}

/* harmony default export */ var icons_LayerGroupIcon = (LayerGroupIcon);
// EXTERNAL MODULE: ./icons/StarFilledIcon.tsx
var StarFilledIcon = __webpack_require__("j1SK");

// CONCATENATED MODULE: ./icons/StarOutlinedIcon.tsx

var StarOutlinedIcon_jsx = external_react_default.a.createElement;

function StarOutlinedIcon_extends() { StarOutlinedIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return StarOutlinedIcon_extends.apply(this, arguments); }

const HollowStarIcon = props => {
  return StarOutlinedIcon_jsx("svg", StarOutlinedIcon_extends({
    "aria-hidden": "true",
    "data-prefix": "far",
    "data-icon": "star",
    className: "star-regular_svg__svg-inline--fa star-regular_svg__fa-star star-regular_svg__fa-w-18",
    viewBox: "0 0 576 512"
  }, props), StarOutlinedIcon_jsx("path", {
    fill: "currentColor",
    d: "M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
  }));
};

/* harmony default export */ var StarOutlinedIcon = (HollowStarIcon);
// CONCATENATED MODULE: ./icons/UniversityIcon.tsx

var UniversityIcon_jsx = external_react_default.a.createElement;

function UniversityIcon_extends() { UniversityIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return UniversityIcon_extends.apply(this, arguments); }

function UniversityIcon(props) {
  return UniversityIcon_jsx("svg", UniversityIcon_extends({
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "university",
    className: "university-solid_svg__svg-inline--fa university-solid_svg__fa-university university-solid_svg__fa-w-16",
    viewBox: "0 0 512 512"
  }, props), UniversityIcon_jsx("path", {
    fill: "currentColor",
    d: "M496 128v16a8 8 0 01-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 01-8-8v-16a8 8 0 014.941-7.392l232-88a7.996 7.996 0 016.118 0l232 88A8 8 0 01496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 008 8h464a8 8 0 008-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"
  }));
}

/* harmony default export */ var icons_UniversityIcon = (UniversityIcon);
// EXTERNAL MODULE: ./icons/BookmarkFilledIcon.tsx
var BookmarkFilledIcon = __webpack_require__("Q3Rx");

// CONCATENATED MODULE: ./icons/BookmarkOutlinedIcon.tsx

var BookmarkOutlinedIcon_jsx = external_react_default.a.createElement;

function BookmarkOutlinedIcon_extends() { BookmarkOutlinedIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return BookmarkOutlinedIcon_extends.apply(this, arguments); }

function BookmarkOutlinedIcon(props) {
  return BookmarkOutlinedIcon_jsx("svg", BookmarkOutlinedIcon_extends({
    "aria-hidden": "true",
    "data-prefix": "far",
    "data-icon": "bookmark",
    className: "bookmark-regular_svg__svg-inline--fa bookmark-regular_svg__fa-bookmark bookmark-regular_svg__fa-w-12",
    viewBox: "0 0 384 512"
  }, props), BookmarkOutlinedIcon_jsx("path", {
    fill: "currentColor",
    d: "M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 016-6h276c3.314 0 6 2.683 6 5.996V428.43z"
  }));
}

/* harmony default export */ var icons_BookmarkOutlinedIcon = (BookmarkOutlinedIcon);
// CONCATENATED MODULE: ./icons/CheckboxOutlinedIcon.tsx

var CheckboxOutlinedIcon_jsx = external_react_default.a.createElement;

function CheckboxOutlinedIcon_extends() { CheckboxOutlinedIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CheckboxOutlinedIcon_extends.apply(this, arguments); }

function CheckboxOutlinedIcon(props) {
  return CheckboxOutlinedIcon_jsx("svg", CheckboxOutlinedIcon_extends({
    "aria-hidden": "true",
    "data-prefix": "far",
    "data-icon": "check-square",
    className: "check-square-regular_svg__svg-inline--fa check-square-regular_svg__fa-check-square check-square-regular_svg__fa-w-14",
    viewBox: "0 0 448 512"
  }, props), CheckboxOutlinedIcon_jsx("path", {
    fill: "currentColor",
    d: "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"
  }));
}

/* harmony default export */ var icons_CheckboxOutlinedIcon = (CheckboxOutlinedIcon);
// EXTERNAL MODULE: ./icons/PenFilledIcon.tsx
var PenFilledIcon = __webpack_require__("Vfi8");

// EXTERNAL MODULE: ./components/Button.tsx
var Button = __webpack_require__("xQut");

// CONCATENATED MODULE: ./components/AddPlannedModModal.tsx

var AddPlannedModModal_jsx = external_react_default.a.createElement;







const AddPlannedModModal = ({
  userId,
  modId,
  plannedModId,
  isModalVisible,
  setModalVisibility
}) => {
  const {
    0: year,
    1: setYear
  } = Object(external_react_["useState"])(1);
  const {
    0: semester,
    1: setSemester
  } = Object(external_react_["useState"])(1);

  const onSubmit = async () => {
    const numberOfSemesters = (year - 1) * 2 + semester;

    if (plannedModId) {
      // Exists already, so update it instead
      await planned_mod["a" /* default */].updatePlannedMod(plannedModId, userId, modId, numberOfSemesters);
    } else {
      await planned_mod["a" /* default */].addPlannedMod(userId, modId, numberOfSemesters);
    }

    Object(helpers["e" /* updatedPersonalPlannedModules */])(userId);
    setModalVisibility(false);
  };

  return AddPlannedModModal_jsx(FormModal["a" /* default */], {
    title: "Add to Study Planner",
    backgroundColor: colors["f" /* plannedModGreen */],
    isModalVisible: isModalVisible,
    setModalVisibility: setModalVisibility,
    submitColor: colors["i" /* submitBlue */],
    onSubmit: onSubmit
  }, AddPlannedModModal_jsx(FormModalItem["a" /* default */], {
    label: "Year",
    type: "year",
    value: year,
    setValue: setYear
  }), AddPlannedModModal_jsx(FormModalItem["a" /* default */], {
    label: "Semester",
    type: "semester",
    value: semester,
    setValue: setSemester
  }));
};

/* harmony default export */ var components_AddPlannedModModal = (AddPlannedModModal);
// CONCATENATED MODULE: ./components/ModuleInformation.tsx

var ModuleInformation_jsx = external_react_default.a.createElement;

function ModuleInformation_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ModuleInformation_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ModuleInformation_ownKeys(Object(source), true).forEach(function (key) { ModuleInformation_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ModuleInformation_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ModuleInformation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























const ModuleInformation = ({
  module,
  setAddReviewModalVisibility,
  setAddRatingsModalVisibility,
  reviewByUser
}) => {
  var _useSelector$find, _useSelector$find2, _schools$find, _rating$difficulty, _rating$star;

  const {
    0: isAddPlannedModModalVisible,
    1: setAddPlannedModModalVisibility
  } = Object(external_react_["useState"])(false);
  const userId = Object(external_react_redux_["useSelector"])(state => {
    var _state$auth$user;

    return (_state$auth$user = state.auth.user) === null || _state$auth$user === void 0 ? void 0 : _state$auth$user._id;
  });
  const bookmarkId = (_useSelector$find = Object(external_react_redux_["useSelector"])(state => state.personalModules.bookmarks).find(bookmark => bookmark.modId === (module === null || module === void 0 ? void 0 : module._id))) === null || _useSelector$find === void 0 ? void 0 : _useSelector$find._id;
  const plannedModId = (_useSelector$find2 = Object(external_react_redux_["useSelector"])(state => state.personalModules.plannedMods).find(plannedMod => plannedMod.modId === (module === null || module === void 0 ? void 0 : module._id))) === null || _useSelector$find2 === void 0 ? void 0 : _useSelector$find2._id;
  const schools = Object(external_react_redux_["useSelector"])(state => state.schools);
  const isLoggedIn = Object(external_react_redux_["useSelector"])(state => state.auth.isLoggedIn);
  const {
    code,
    workload = 10,
    rating,
    schoolId,
    description,
    title,
    credit = 4,
    semester = [1, 2],
    prereqs,
    _id
  } = module;
  const university = (_schools$find = schools.find(school => school._id === schoolId)) === null || _schools$find === void 0 ? void 0 : _schools$find.name;
  const difficulty = (rating === null || rating === void 0 ? void 0 : (_rating$difficulty = rating.difficulty) === null || _rating$difficulty === void 0 ? void 0 : _rating$difficulty.value) || 0;
  const star = (rating === null || rating === void 0 ? void 0 : (_rating$star = rating.star) === null || _rating$star === void 0 ? void 0 : _rating$star.value) || 0;

  const toggleBookmark = async () => {
    if (!isLoggedIn) {
      Object(helpers["b" /* triggerRequireLoginMessage */])();
      return;
    }

    if (!bookmarkId) {
      await bookmark["a" /* default */].addBookmark(userId, _id);
    } else {
      await bookmark["a" /* default */].deleteBookmark(bookmarkId);
    }

    Object(helpers["c" /* updatePersonalBookmarks */])(userId);
  };

  const togglePlanner = async () => {
    if (!isLoggedIn) {
      Object(helpers["b" /* triggerRequireLoginMessage */])();
      return;
    }

    if (!plannedModId) {
      setAddPlannedModModalVisibility(true);
    } else {
      await planned_mod["a" /* default */].removePlannedMod(plannedModId);
      Object(helpers["e" /* updatedPersonalPlannedModules */])(userId);
    }
  };

  const toggleAddRatingsModal = () => {
    if (!isLoggedIn) {
      Object(helpers["b" /* triggerRequireLoginMessage */])();
      return;
    }

    if (reviewByUser) {
      external_antd_["message"].error("You have posted a Review before. Edit your Review instead!");
      return;
    }

    setAddRatingsModalVisibility(true);
  };

  const toggleAddReviewModal = () => {
    if (!isLoggedIn) {
      Object(helpers["b" /* triggerRequireLoginMessage */])();
      return;
    }

    setAddReviewModalVisibility(true);
  };

  return ModuleInformation_jsx("div", {
    style: ModuleInformation_styles.container
  }, ModuleInformation_jsx("div", {
    style: ModuleInformation_styles.moduleMeta
  }, ModuleInformation_jsx("div", {
    style: ModuleInformation_styles.moduleInformation
  }, ModuleInformation_jsx("div", {
    style: ModuleInformation_styles.moduleCode
  }, code), ModuleInformation_jsx("div", {
    style: ModuleInformation_styles.moduleSmallDetailsColumn
  }, ModuleInformation_jsx(components_ModuleSmallDetail, {
    Icon: icons_UniversityIcon,
    text: `University: ${university !== null && university !== void 0 ? university : "-"}`,
    iconStyle: ModuleInformation_styles.iconStyle
  }), ModuleInformation_jsx(components_ModuleSmallDetail, {
    Icon: icons_HourGlassHalfFilledIcon,
    text: `Semester(s) offered: ${semester.sort().join(", ") || "-"}`,
    iconStyle: ModuleInformation_styles.iconStyle
  })), ModuleInformation_jsx("div", {
    style: ModuleInformation_styles.moduleSmallDetailsColumn
  }, ModuleInformation_jsx(components_ModuleSmallDetail, {
    Icon: icons_CoinsFilledIcon,
    text: `Credit: ${credit}`,
    iconStyle: ModuleInformation_styles.iconStyle
  }), ModuleInformation_jsx(components_ModuleSmallDetail, {
    Icon: icons_UserClockIcon,
    text: `Workload/Week: ${workload} hours`,
    iconStyle: ModuleInformation_styles.iconStyle
  })), ModuleInformation_jsx("div", {
    style: ModuleInformation_styles.moduleSmallDetailsColumn
  }, ModuleInformation_jsx(components_ModuleSmallDetail, {
    Icon: icons_CheckboxOutlinedIcon,
    text: `Pre-reqs: ${prereqs.join(", ") || "None"}`,
    iconStyle: ModuleInformation_styles.iconStyle
  }), ModuleInformation_jsx(components_ModuleSmallDetail, {
    Icon: icons_LayerGroupIcon,
    text: `Difficulty: ${difficulty.toFixed(1) == "0.0" ? "-" : difficulty.toFixed(1)}/5`,
    iconStyle: ModuleInformation_styles.iconStyle
  }))), ModuleInformation_jsx("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignContent: "center",
      height: "100%",
      fontSize: 14
    }
  }, ModuleInformation_jsx("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      padding: "10px 10px 10px 0px",
      width: "100%",
      color: "#838383"
    }
  }, ModuleInformation_jsx("div", null, ModuleInformation_jsx(StarFilledIcon["a" /* default */], {
    style: {
      height: 20,
      color: colors["g" /* ratingsYellow */],
      margin: "0px 10px"
    }
  })), `${star.toFixed(1)}`), ModuleInformation_jsx("div", {
    style: ModuleInformation_styles.actionsBar
  }, ModuleInformation_jsx(Button["a" /* default */], {
    onClick: togglePlanner
  }, plannedModId ? ModuleInformation_jsx(icons_["BookFilled"], {
    style: ModuleInformation_objectSpread(ModuleInformation_objectSpread({}, ModuleInformation_styles.actionIcon), {}, {
      color: "#76CCB7",
      fontSize: 25
    })
  }) : ModuleInformation_jsx(icons_["BookOutlined"], {
    style: ModuleInformation_objectSpread(ModuleInformation_objectSpread({}, ModuleInformation_styles.actionIcon), {}, {
      color: "#76CCB7",
      fontSize: 25
    })
  })), ModuleInformation_jsx(Button["a" /* default */], {
    onClick: toggleBookmark
  }, bookmarkId ? ModuleInformation_jsx(BookmarkFilledIcon["a" /* default */], {
    style: ModuleInformation_objectSpread(ModuleInformation_objectSpread({}, ModuleInformation_styles.actionIcon), {}, {
      color: "#289FA7"
    })
  }) : ModuleInformation_jsx(icons_BookmarkOutlinedIcon, {
    style: ModuleInformation_objectSpread(ModuleInformation_objectSpread({}, ModuleInformation_styles.actionIcon), {}, {
      color: "#289FA7"
    })
  })), ModuleInformation_jsx(Button["a" /* default */], {
    onClick: toggleAddRatingsModal
  }, ModuleInformation_jsx(StarOutlinedIcon, {
    style: ModuleInformation_objectSpread(ModuleInformation_objectSpread({}, ModuleInformation_styles.actionIcon), {}, {
      color: colors["g" /* ratingsYellow */]
    })
  })), ModuleInformation_jsx(Button["a" /* default */], {
    onClick: toggleAddReviewModal
  }, ModuleInformation_jsx(PenFilledIcon["a" /* default */], {
    style: ModuleInformation_objectSpread(ModuleInformation_objectSpread({}, ModuleInformation_styles.actionIcon), {}, {
      color: "#7497CC"
    })
  }))))), ModuleInformation_jsx("div", {
    style: ModuleInformation_styles.infoContainer
  }, ModuleInformation_jsx("div", {
    style: ModuleInformation_styles.moduleTitle
  }, title), ModuleInformation_jsx("div", {
    style: ModuleInformation_styles.moduleDescription
  }, description)), ModuleInformation_jsx(components_AddPlannedModModal, {
    isModalVisible: isAddPlannedModModalVisible,
    setModalVisibility: setAddPlannedModModalVisibility,
    modId: _id,
    userId: userId,
    plannedModId: plannedModId
  }));
};

const ModuleInformation_styles = {
  container: {
    fontFamily: "Roboto",
    marginTop: 30
  },
  moduleMeta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80
  },
  moduleInformation: {
    display: "flex",
    justifyContent: "flex-start"
  },
  moduleCode: {
    backgroundColor: colors["a" /* codeBlue */],
    height: 80,
    borderRadius: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "26px",
    color: "white",
    padding: "0px 30px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  },
  moduleSmallDetailsColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  actionsBar: {
    display: "flex"
  },
  actionIcon: {
    height: 25,
    margin: "0px 10px"
  },
  infoContainer: {
    backgroundColor: colors["e" /* descriptionGreen */],
    marginTop: 10,
    borderRadius: 15,
    padding: "20px 30px 30px 30px",
    color: "#fff",
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.25)"
  },
  moduleTitle: {
    fontSize: 30,
    fontWeight: "bold"
  },
  moduleDescription: {
    textAlign: "justify",
    fontWeight: 300
  },
  iconStyle: {
    color: "#B9B9B9"
  }
};
/* harmony default export */ var components_ModuleInformation = (ModuleInformation);
// EXTERNAL MODULE: ./components/ReviewList.tsx + 8 modules
var ReviewList = __webpack_require__("zmtl");

// EXTERNAL MODULE: ./components/SeeMoreButton.tsx
var SeeMoreButton = __webpack_require__("3Pwz");

// CONCATENATED MODULE: ./pages/module-review.tsx

var module_review_jsx = external_react_default.a.createElement;














const compareNewest = (firstReview, secondReview) => {
  const firstReviewCreatedAtDate = new Date(firstReview.createdAt);
  const secondReviewCreatedAtDate = new Date(secondReview.createdAt);
  return firstReviewCreatedAtDate < secondReviewCreatedAtDate ? 1 : -1;
};

const ModuleReviewPage = ({
  initialModule,
  reviews
}) => {
  const {
    0: module,
    1: setModule
  } = Object(external_react_["useState"])(initialModule);
  const {
    0: reviewsList,
    1: setReviewsList
  } = Object(external_react_["useState"])(reviews);
  const {
    0: numberOfReviews,
    1: setNumberOfReviews
  } = Object(external_react_["useState"])(20);
  const {
    0: isAddReviewModalVisible,
    1: setAddReviewModalVisibility
  } = Object(external_react_["useState"])(false);
  const {
    0: isAddRatingsModalVisible,
    1: setAddRatingsModalVisibility
  } = Object(external_react_["useState"])(false);
  const {
    0: ratingsByUser,
    1: setRatingsByUser
  } = Object(external_react_["useState"])(null);
  const {
    0: currentSort,
    1: setCurrentSort
  } = Object(external_react_["useState"])("Latest");
  const userId = Object(external_react_redux_["useSelector"])(state => {
    var _state$auth$user;

    return (_state$auth$user = state.auth.user) === null || _state$auth$user === void 0 ? void 0 : _state$auth$user._id;
  });
  const reviewByUser = reviewsList.find(review => review.userId === userId);
  Object(external_react_["useEffect"])(() => {
    checkIsRatedByUser();
    api_event.addEvent(userId, "mod", module._id, "view");
  }, []);

  const updateReviews = async () => {
    const newReviews = await review["a" /* default */].getReviewsOfModule(module._id);

    if (currentSort === "Latest") {
      newReviews.sort(compareNewest);
    } else if (currentSort === "Oldest") {
      newReviews.sort(compareOldest);
    } else if (currentSort === "Most Likes") {
      newReviews.sort(compareLikes);
    }

    setReviewsList(newReviews);
  };

  const updateModule = async () => {
    const updatedModule = await api_module["a" /* default */].getModule(module._id);
    updatedModule.prereqs = module.prereqs;
    setModule(updatedModule);
  };

  const checkIsRatedByUser = async () => {
    try {
      const rating = await review["a" /* default */].getRating("mod", module._id, userId, "star");
      setRatingsByUser(rating);
    } catch (err) {
      setRatingsByUser(null);
    }
  };

  const compareOldest = (firstReview, secondReview) => {
    const firstReviewCreatedAtDate = new Date(firstReview.createdAt);
    const secondReviewCreatedAtDate = new Date(secondReview.createdAt);
    return firstReviewCreatedAtDate > secondReviewCreatedAtDate ? 1 : -1;
  };

  const compareLikes = (firstReview, secondReview) => {
    var _firstReview$reaction, _firstReview$reaction2, _firstReview$reaction3, _secondReview$reactio, _secondReview$reactio2, _secondReview$reactio3;

    const firstReviewLikes = (_firstReview$reaction = (_firstReview$reaction2 = firstReview.reaction) === null || _firstReview$reaction2 === void 0 ? void 0 : (_firstReview$reaction3 = _firstReview$reaction2.like) === null || _firstReview$reaction3 === void 0 ? void 0 : _firstReview$reaction3.count) !== null && _firstReview$reaction !== void 0 ? _firstReview$reaction : 0;
    const secondReviewLikes = (_secondReview$reactio = (_secondReview$reactio2 = secondReview.reaction) === null || _secondReview$reactio2 === void 0 ? void 0 : (_secondReview$reactio3 = _secondReview$reactio2.like) === null || _secondReview$reactio3 === void 0 ? void 0 : _secondReview$reactio3.count) !== null && _secondReview$reactio !== void 0 ? _secondReview$reactio : 0;
    return secondReviewLikes - firstReviewLikes;
  };

  const sortReviews = (compareFunction, sortType) => {
    setCurrentSort(sortType);
    const cloneReviews = reviewsList.concat([]);
    cloneReviews.sort(compareFunction);
    setReviewsList(cloneReviews);
  };

  const fetchMoreReviews = async () => {
    const moreReviews = await review["a" /* default */].getReviewsOfModule(module._id);
    setReviewsList(moreReviews);
    setNumberOfReviews(numberOfReviews + 10);
  };

  const menu = module_review_jsx(external_antd_["Menu"], null, module_review_jsx(external_antd_["Menu"].Item, null, module_review_jsx(Button["a" /* default */], {
    onClick: () => sortReviews(compareNewest, "Latest")
  }, "Latest")), module_review_jsx(external_antd_["Menu"].Item, null, module_review_jsx(Button["a" /* default */], {
    onClick: () => sortReviews(compareOldest, "Oldest")
  }, "Oldest")), module_review_jsx(external_antd_["Menu"].Item, null, module_review_jsx(Button["a" /* default */], {
    onClick: () => sortReviews(compareLikes, "Most Likes")
  }, "Most Likes")));

  const renderPage = () => {
    return module ? module_review_jsx(external_react_default.a.Fragment, null, module_review_jsx(components_ModuleInformation, {
      module: module,
      setAddReviewModalVisibility: setAddReviewModalVisibility,
      setAddRatingsModalVisibility: setAddRatingsModalVisibility,
      reviewByUser: reviewByUser
    }), module_review_jsx("div", {
      style: module_review_styles.reviewsHeader
    }, module_review_jsx("span", {
      style: module_review_styles.reviewsHeaderTitle
    }, "Reviews"), module_review_jsx(external_antd_["Dropdown"], {
      overlay: menu
    }, module_review_jsx("div", {
      style: {
        marginRight: 20
      }
    }, module_review_jsx("a", {
      style: {
        color: "#595959",
        marginRight: 6,
        fontSize: 18
      }
    }, currentSort), module_review_jsx(icons_["DownOutlined"], null)))), module_review_jsx(ReviewList["a" /* default */], {
      updateReviews: updateReviews,
      reviews: reviewsList
    }), reviewsList.length >= 10 && module_review_jsx(SeeMoreButton["a" /* default */], {
      fetchMoreData: fetchMoreReviews
    }), module_review_jsx(components_AddReviewModal, {
      code: module.code,
      module: module,
      updateReviews: updateReviews,
      isModalVisible: isAddReviewModalVisible,
      setModalVisibility: setAddReviewModalVisibility,
      reviewByUser: reviewByUser,
      updateModule: updateModule,
      ratingsByUser: ratingsByUser
    }), module_review_jsx(components_AddRatingsModal, {
      code: module.code,
      modId: module._id,
      isModalVisible: isAddRatingsModalVisible,
      setModalVisibility: setAddRatingsModalVisibility,
      ratingsByUser: ratingsByUser,
      updateModule: updateModule,
      checkIsRatedByUser: checkIsRatedByUser
    })) : module_review_jsx("div", {
      style: module_review_styles.moduleNotFoundPage
    }, module_review_jsx("span", {
      style: {}
    }, "Module not found!"));
  };

  return renderPage();
};

const module_review_styles = {
  reviewsHeader: {
    height: "8vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 10px",
    fontFamily: "Mukta",
    color: "#838383"
  },
  reviewsHeaderTitle: {
    fontSize: "26px"
  },
  moduleNotFoundPage: {
    display: "flex",
    height: "80vh",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
};

ModuleReviewPage.getInitialProps = async ({
  query
}) => {
  const moduleId = query.id;

  try {
    const initialModule = await api_module["a" /* default */].getModule(moduleId);
    const prereqs = await Promise.all(initialModule.prereqs.map(async prereqId => {
      const mod = await api_module["a" /* default */].getModule(prereqId);
      return mod.code;
    }));
    initialModule.prereqs = prereqs;
    const reviews = await review["a" /* default */].getReviewsOfModule(initialModule._id, 10);
    reviews.sort(compareNewest);
    return {
      initialModule,
      reviews
    };
  } catch (err) {
    return {
      initialModule: null,
      reviews: []
    };
  }
};

/* harmony default export */ var module_review = __webpack_exports__["default"] = (ModuleReviewPage);

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

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "ph7Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rOcY");


const baseUrl = `${_config__WEBPACK_IMPORTED_MODULE_1__[/* serverDomain */ "a"]}/api/user`;

const getUser = async userId => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${baseUrl}/${userId}`);
  return response.data;
};

const updateUser = async (newUserDetails, userId) => {
  console.log("the user received is");
  console.log(newUserDetails);
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${baseUrl}/${userId}`, newUserDetails, {
    withCredentials: true
  });
  console.log("the update response");
  console.log(response);
  return response.data;
};

/* harmony default export */ __webpack_exports__["a"] = ({
  getUser,
  updateUser
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

const searchModule = async (searchTerm, limit = 10, page = 1, schoolId = "", semester = "", credit = "") => {
  const query = {
    searchTerm,
    page,
    limit,
    schoolId,
    semester,
    credit
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
  const mappedModCode = data.map(mod => {
    mod.code = mod.mod.code;
    return mod;
  });
  store["a" /* store */].dispatch(fetchPlannedModsAction(mappedModCode));
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

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

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
      external_antd_["message"].error("The comment field cannot be empty!");
      return;
    }

    await api_comment.addComment(userId, comment, reviewId);
    setComment("");
    setSubmitText("Submit");
    setSubmitColor(colors["i" /* submitBlue */]);
    setModalVisibility(false);
    fetchComments();
  };

  const validateForm = () => comment.trim() !== "";

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

// EXTERNAL MODULE: ./api/user.ts
var api_user = __webpack_require__("ph7Q");

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
    const user = await api_user["a" /* default */].getUser(comment.userId);
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
  }, []);
  Object(external_react_["useEffect"])(() => {
    checkIsLikedByUser();
  }, [userId]);
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