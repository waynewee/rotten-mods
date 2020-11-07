webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/search.tsx":
/*!**************************!*\
  !*** ./pages/search.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/module */ \"./api/module.ts\");\n/* harmony import */ var _components_ModuleCompareModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ModuleCompareModal */ \"./components/ModuleCompareModal.tsx\");\n/* harmony import */ var _components_SectionTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SectionTitle */ \"./components/SectionTitle.tsx\");\n/* harmony import */ var _components_SearchModuleList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SearchModuleList */ \"./components/SearchModuleList.tsx\");\n/* harmony import */ var _components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SeeMoreButton */ \"./components/SeeMoreButton.tsx\");\n/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/colors */ \"./styles/colors.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ChesterSim/Desktop/NUS Computer Science/CS3219/cs3219-ay2021-s1-project-2020-s1-g01/frontend/pages/search.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Search = function Search(_ref) {\n  _s();\n\n  var _ref$initialSearchRes = _ref.initialSearchResults,\n      initialSearchResults = _ref$initialSearchRes === void 0 ? [] : _ref$initialSearchRes;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(initialSearchResults),\n      searchResults = _useState[0],\n      setSearchResults = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(20),\n      numberOfResults = _useState2[0],\n      setNumberOfResults = _useState2[1];\n\n  var searchTerm = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.search.searchTerm;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setNumberOfResults(10);\n  }, [searchTerm]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setSearchResults(initialSearchResults);\n  }, [initialSearchResults]);\n\n  var fetchMoreSearchResults = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var results;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _api_module__WEBPACK_IMPORTED_MODULE_4__[\"default\"].searchModule(searchTerm, numberOfResults);\n\n            case 2:\n              results = _context.sent;\n              console.log(\"NumberofResults:\", results);\n              console.log(\"Results:\", results);\n              setSearchResults(results);\n              setNumberOfResults(numberOfResults + 10);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchMoreSearchResults() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    title: \"Search results for \\\"\".concat(searchTerm, \"\\\"\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }), __jsx(_components_SearchModuleList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    modules: searchResults,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }), __jsx(_components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    fetchMoreData: fetchMoreSearchResults,\n    style: {\n      backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_9__[\"descriptionGreen\"]\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }), __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    title: \"Similar results to \\\"\".concat(searchTerm, \"\\\"\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }), __jsx(_components_SearchModuleList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    modules: [],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }), __jsx(_components_ModuleCompareModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Search, \"YbR/glLIDYcEpP5wvHrXEHTi9WU=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"]];\n});\n\n_c = Search;\n\nSearch.getInitialProps = /*#__PURE__*/function () {\n  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref3) {\n    var query, searchTerm, initialSearchResults;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            query = _ref3.query;\n            searchTerm = query.s;\n            _context2.prev = 2;\n            _context2.next = 5;\n            return _api_module__WEBPACK_IMPORTED_MODULE_4__[\"default\"].searchModule(searchTerm);\n\n          case 5:\n            initialSearchResults = _context2.sent;\n            return _context2.abrupt(\"return\", {\n              initialSearchResults: initialSearchResults\n            });\n\n          case 9:\n            _context2.prev = 9;\n            _context2.t0 = _context2[\"catch\"](2);\n            return _context2.abrupt(\"return\", {\n              initialSearchResults: []\n            });\n\n          case 12:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[2, 9]]);\n  }));\n\n  return function (_x) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLnRzeD83OWFiIl0sIm5hbWVzIjpbIlNlYXJjaCIsImluaXRpYWxTZWFyY2hSZXN1bHRzIiwidXNlU3RhdGUiLCJzZWFyY2hSZXN1bHRzIiwic2V0U2VhcmNoUmVzdWx0cyIsIm51bWJlck9mUmVzdWx0cyIsInNldE51bWJlck9mUmVzdWx0cyIsInNlYXJjaFRlcm0iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2VhcmNoIiwidXNlRWZmZWN0IiwiZmV0Y2hNb3JlU2VhcmNoUmVzdWx0cyIsIm1vZEFwaSIsInNlYXJjaE1vZHVsZSIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZENvbG9yIiwiZGVzY3JpcHRpb25HcmVlbiIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBbUM7QUFBQTs7QUFBQSxtQ0FBaENDLG9CQUFnQztBQUFBLE1BQWhDQSxvQkFBZ0Msc0NBQVQsRUFBUzs7QUFBQSxrQkFDN0JDLHNEQUFRLENBQUNELG9CQUFELENBRHFCO0FBQUEsTUFDaEVFLGFBRGdFO0FBQUEsTUFDakRDLGdCQURpRDs7QUFBQSxtQkFFekJGLHNEQUFRLENBQUMsRUFBRCxDQUZpQjtBQUFBLE1BRWhFRyxlQUZnRTtBQUFBLE1BRS9DQyxrQkFGK0M7O0FBR3ZFLE1BQU1DLFVBQVUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxNQUFOLENBQWFILFVBQXhCO0FBQUEsR0FBRCxDQUE5QjtBQUVBSSx5REFBUyxDQUFDLFlBQU07QUFDZEwsc0JBQWtCLENBQUMsRUFBRCxDQUFsQjtBQUNELEdBRlEsRUFFTixDQUFDQyxVQUFELENBRk0sQ0FBVDtBQUlBSSx5REFBUyxDQUFDLFlBQU07QUFDZFAsb0JBQWdCLENBQUNILG9CQUFELENBQWhCO0FBQ0QsR0FGUSxFQUVOLENBQUNBLG9CQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNVyxzQkFBc0I7QUFBQSxpTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVQQyxtREFBTSxDQUFDQyxZQUFQLENBQW9CUCxVQUFwQixFQUFnQ0YsZUFBaEMsQ0FGTzs7QUFBQTtBQUV2QlUscUJBRnVCO0FBRzdCQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NGLE9BQWhDO0FBQ0FDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixPQUF4QjtBQUNBWCw4QkFBZ0IsQ0FBQ1csT0FBRCxDQUFoQjtBQUNBVCxnQ0FBa0IsQ0FBQ0QsZUFBZSxHQUFHLEVBQW5CLENBQWxCOztBQU42QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUF0Qk8sc0JBQXNCO0FBQUE7QUFBQTtBQUFBLEtBQTVCOztBQVNBLFNBQ0UsbUVBQ0UsTUFBQyxnRUFBRDtBQUFjLFNBQUssaUNBQXlCTCxVQUF6QixPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLG9FQUFEO0FBQWtCLFdBQU8sRUFBRUosYUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxpRUFBRDtBQUNFLGlCQUFhLEVBQUVTLHNCQURqQjtBQUVFLFNBQUssRUFBRTtBQUFFTSxxQkFBZSxFQUFFQywrREFBZ0JBO0FBQW5DLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBT0UsTUFBQyxnRUFBRDtBQUFjLFNBQUssaUNBQXlCWixVQUF6QixPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRSxNQUFDLG9FQUFEO0FBQWtCLFdBQU8sRUFBRSxFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGO0FBYUQsQ0FuQ0Q7O0dBQU1QLE07VUFHZVEsdUQ7OztLQUhmUixNOztBQXFDTkEsTUFBTSxDQUFDb0IsZUFBUDtBQUFBLCtMQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsaUJBQVQsU0FBU0EsS0FBVDtBQUNqQmQsc0JBRGlCLEdBQ0pjLEtBQUssQ0FBQ0MsQ0FERjtBQUFBO0FBQUE7QUFBQSxtQkFHY1QsbURBQU0sQ0FBQ0MsWUFBUCxDQUFvQlAsVUFBcEIsQ0FIZDs7QUFBQTtBQUdmTixnQ0FIZTtBQUFBLDhDQUlkO0FBQUVBLGtDQUFvQixFQUFwQkE7QUFBRixhQUpjOztBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQU1kO0FBQUVBLGtDQUFvQixFQUFFO0FBQXhCLGFBTmM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBekI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVWVELHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc2VhcmNoLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgbW9kQXBpIGZyb20gXCIuLi9hcGkvbW9kdWxlXCI7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW1wb3J0IE1vZHVsZUNvbXBhcmVNb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2R1bGVDb21wYXJlTW9kYWxcIjtcbmltcG9ydCBTZWN0aW9uVGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvblRpdGxlXCI7XG5pbXBvcnQgU2VhcmNoTW9kdWxlTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hNb2R1bGVMaXN0XCI7XG5pbXBvcnQgU2VlTW9yZUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWVNb3JlQnV0dG9uXCI7XG5pbXBvcnQgeyBkZXNjcmlwdGlvbkdyZWVuIH0gZnJvbSBcIi4uL3N0eWxlcy9jb2xvcnNcIjtcblxuaW50ZXJmYWNlIFNlYXJjaFByb3BzIHtcbiAgaW5pdGlhbFNlYXJjaFJlc3VsdHM6IE1vZHVsZVtdO1xufVxuXG5jb25zdCBTZWFyY2g6IE5leHRQYWdlPFNlYXJjaFByb3BzPiA9ICh7IGluaXRpYWxTZWFyY2hSZXN1bHRzID0gW10gfSkgPT4ge1xuICBjb25zdCBbc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShpbml0aWFsU2VhcmNoUmVzdWx0cyk7XG4gIGNvbnN0IFtudW1iZXJPZlJlc3VsdHMsIHNldE51bWJlck9mUmVzdWx0c10gPSB1c2VTdGF0ZSgyMCk7XG4gIGNvbnN0IHNlYXJjaFRlcm0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNlYXJjaC5zZWFyY2hUZXJtKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE51bWJlck9mUmVzdWx0cygxMCk7XG4gIH0sIFtzZWFyY2hUZXJtXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTZWFyY2hSZXN1bHRzKGluaXRpYWxTZWFyY2hSZXN1bHRzKTtcbiAgfSwgW2luaXRpYWxTZWFyY2hSZXN1bHRzXSk7XG5cbiAgY29uc3QgZmV0Y2hNb3JlU2VhcmNoUmVzdWx0cyA9IGFzeW5jICgpID0+IHtcbiAgXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IG1vZEFwaS5zZWFyY2hNb2R1bGUoc2VhcmNoVGVybSwgbnVtYmVyT2ZSZXN1bHRzKTtcbiAgICBjb25zb2xlLmxvZyhcIk51bWJlcm9mUmVzdWx0czpcIiwgcmVzdWx0cyk7XG4gICAgY29uc29sZS5sb2coXCJSZXN1bHRzOlwiLCByZXN1bHRzKTtcbiAgICBzZXRTZWFyY2hSZXN1bHRzKHJlc3VsdHMpO1xuICAgIHNldE51bWJlck9mUmVzdWx0cyhudW1iZXJPZlJlc3VsdHMgKyAxMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT17YFNlYXJjaCByZXN1bHRzIGZvciBcIiR7c2VhcmNoVGVybX1cImB9IC8+XG4gICAgICA8U2VhcmNoTW9kdWxlTGlzdCBtb2R1bGVzPXtzZWFyY2hSZXN1bHRzfSAvPlxuICAgICAgPFNlZU1vcmVCdXR0b25cbiAgICAgICAgZmV0Y2hNb3JlRGF0YT17ZmV0Y2hNb3JlU2VhcmNoUmVzdWx0c31cbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBkZXNjcmlwdGlvbkdyZWVuIH19XG4gICAgICAvPlxuICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT17YFNpbWlsYXIgcmVzdWx0cyB0byBcIiR7c2VhcmNoVGVybX1cImB9IC8+XG4gICAgICA8U2VhcmNoTW9kdWxlTGlzdCBtb2R1bGVzPXtbXX0gLz5cbiAgICAgIDxNb2R1bGVDb21wYXJlTW9kYWwgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cblNlYXJjaC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IHNlYXJjaFRlcm0gPSBxdWVyeS5zO1xuICB0cnkge1xuICAgIGNvbnN0IGluaXRpYWxTZWFyY2hSZXN1bHRzID0gYXdhaXQgbW9kQXBpLnNlYXJjaE1vZHVsZShzZWFyY2hUZXJtKTtcbiAgICByZXR1cm4geyBpbml0aWFsU2VhcmNoUmVzdWx0cyB9O1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4geyBpbml0aWFsU2VhcmNoUmVzdWx0czogW10gfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/search.tsx\n");

/***/ })

})