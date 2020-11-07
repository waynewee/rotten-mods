webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/search.tsx":
/*!**************************!*\
  !*** ./pages/search.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/module */ \"./api/module.ts\");\n/* harmony import */ var _components_ModuleCompareModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ModuleCompareModal */ \"./components/ModuleCompareModal.tsx\");\n/* harmony import */ var _components_SectionTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SectionTitle */ \"./components/SectionTitle.tsx\");\n/* harmony import */ var _components_SearchModuleList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SearchModuleList */ \"./components/SearchModuleList.tsx\");\n/* harmony import */ var _components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SeeMoreButton */ \"./components/SeeMoreButton.tsx\");\n/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/colors */ \"./styles/colors.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ChesterSim/Desktop/NUS Computer Science/CS3219/cs3219-ay2021-s1-project-2020-s1-g01/frontend/pages/search.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Search = function Search(_ref) {\n  _s();\n\n  var _ref$initialSearchRes = _ref.initialSearchResults,\n      initialSearchResults = _ref$initialSearchRes === void 0 ? [] : _ref$initialSearchRes;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(initialSearchResults),\n      searchResults = _useState[0],\n      setSearchResults = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(20),\n      numberOfResults = _useState2[0],\n      setNumberOfResults = _useState2[1];\n\n  var searchTerm = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.search.searchTerm;\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setNumberOfResults(10);\n  }, [searchTerm]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setSearchResults(initialSearchResults);\n  }, [initialSearchResults]);\n\n  var fetchMoreSearchResults = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var results;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setNumberOfResults(numberOfResults + 10);\n              _context.next = 3;\n              return _api_module__WEBPACK_IMPORTED_MODULE_4__[\"default\"].searchModule(searchTerm, numberOfResults);\n\n            case 3:\n              results = _context.sent;\n              console.log(\"NumberofResults:\", numberOfResults);\n              console.log(\"Results:\", results);\n              setSearchResults(results);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchMoreSearchResults() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    title: \"Search results for \\\"\".concat(searchTerm, \"\\\"\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(_components_SearchModuleList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    modules: searchResults,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }), __jsx(_components_SeeMoreButton__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    fetchMoreData: fetchMoreSearchResults,\n    style: {\n      backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_9__[\"descriptionGreen\"]\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }), __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    title: \"Similar results to \\\"\".concat(searchTerm, \"\\\"\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }), __jsx(_components_SearchModuleList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    modules: [],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }), __jsx(_components_ModuleCompareModal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Search, \"YbR/glLIDYcEpP5wvHrXEHTi9WU=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"]];\n});\n\n_c = Search;\n\nSearch.getInitialProps = /*#__PURE__*/function () {\n  var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref3) {\n    var query, searchTerm, initialSearchResults;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            query = _ref3.query;\n            searchTerm = query.s;\n            _context2.prev = 2;\n            _context2.next = 5;\n            return _api_module__WEBPACK_IMPORTED_MODULE_4__[\"default\"].searchModule(searchTerm);\n\n          case 5:\n            initialSearchResults = _context2.sent;\n            return _context2.abrupt(\"return\", {\n              initialSearchResults: initialSearchResults\n            });\n\n          case 9:\n            _context2.prev = 9;\n            _context2.t0 = _context2[\"catch\"](2);\n            return _context2.abrupt(\"return\", {\n              initialSearchResults: []\n            });\n\n          case 12:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[2, 9]]);\n  }));\n\n  return function (_x) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLnRzeD83OWFiIl0sIm5hbWVzIjpbIlNlYXJjaCIsImluaXRpYWxTZWFyY2hSZXN1bHRzIiwidXNlU3RhdGUiLCJzZWFyY2hSZXN1bHRzIiwic2V0U2VhcmNoUmVzdWx0cyIsIm51bWJlck9mUmVzdWx0cyIsInNldE51bWJlck9mUmVzdWx0cyIsInNlYXJjaFRlcm0iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2VhcmNoIiwidXNlRWZmZWN0IiwiZmV0Y2hNb3JlU2VhcmNoUmVzdWx0cyIsIm1vZEFwaSIsInNlYXJjaE1vZHVsZSIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwiYmFja2dyb3VuZENvbG9yIiwiZGVzY3JpcHRpb25HcmVlbiIsImdldEluaXRpYWxQcm9wcyIsInF1ZXJ5IiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsTUFBNkIsR0FBRyxTQUFoQ0EsTUFBZ0MsT0FBbUM7QUFBQTs7QUFBQSxtQ0FBaENDLG9CQUFnQztBQUFBLE1BQWhDQSxvQkFBZ0Msc0NBQVQsRUFBUzs7QUFBQSxrQkFDN0JDLHNEQUFRLENBQUNELG9CQUFELENBRHFCO0FBQUEsTUFDaEVFLGFBRGdFO0FBQUEsTUFDakRDLGdCQURpRDs7QUFBQSxtQkFFekJGLHNEQUFRLENBQUMsRUFBRCxDQUZpQjtBQUFBLE1BRWhFRyxlQUZnRTtBQUFBLE1BRS9DQyxrQkFGK0M7O0FBR3ZFLE1BQU1DLFVBQVUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxNQUFOLENBQWFILFVBQXhCO0FBQUEsR0FBRCxDQUE5QjtBQUVBSSx5REFBUyxDQUFDLFlBQU07QUFDZEwsc0JBQWtCLENBQUMsRUFBRCxDQUFsQjtBQUNELEdBRlEsRUFFTixDQUFDQyxVQUFELENBRk0sQ0FBVDtBQUlBSSx5REFBUyxDQUFDLFlBQU07QUFDZFAsb0JBQWdCLENBQUNILG9CQUFELENBQWhCO0FBQ0QsR0FGUSxFQUVOLENBQUNBLG9CQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNVyxzQkFBc0I7QUFBQSxpTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDN0JOLGdDQUFrQixDQUFDRCxlQUFlLEdBQUcsRUFBbkIsQ0FBbEI7QUFENkI7QUFBQSxxQkFFUFEsbURBQU0sQ0FBQ0MsWUFBUCxDQUFvQlAsVUFBcEIsRUFBZ0NGLGVBQWhDLENBRk87O0FBQUE7QUFFdkJVLHFCQUZ1QjtBQUc3QkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDWixlQUFoQztBQUNBVyxxQkFBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkYsT0FBeEI7QUFDQVgsOEJBQWdCLENBQUNXLE9BQUQsQ0FBaEI7O0FBTDZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQXRCSCxzQkFBc0I7QUFBQTtBQUFBO0FBQUEsS0FBNUI7O0FBUUEsU0FDRSxtRUFDRSxNQUFDLGdFQUFEO0FBQWMsU0FBSyxpQ0FBeUJMLFVBQXpCLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsb0VBQUQ7QUFBa0IsV0FBTyxFQUFFSixhQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLGlFQUFEO0FBQ0UsaUJBQWEsRUFBRVMsc0JBRGpCO0FBRUUsU0FBSyxFQUFFO0FBQUVNLHFCQUFlLEVBQUVDLCtEQUFnQkE7QUFBbkMsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFPRSxNQUFDLGdFQUFEO0FBQWMsU0FBSyxpQ0FBeUJaLFVBQXpCLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQVFFLE1BQUMsb0VBQUQ7QUFBa0IsV0FBTyxFQUFFLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBREY7QUFhRCxDQWxDRDs7R0FBTVAsTTtVQUdlUSx1RDs7O0tBSGZSLE07O0FBb0NOQSxNQUFNLENBQUNvQixlQUFQO0FBQUEsK0xBQXlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxpQkFBVCxTQUFTQSxLQUFUO0FBQ2pCZCxzQkFEaUIsR0FDSmMsS0FBSyxDQUFDQyxDQURGO0FBQUE7QUFBQTtBQUFBLG1CQUdjVCxtREFBTSxDQUFDQyxZQUFQLENBQW9CUCxVQUFwQixDQUhkOztBQUFBO0FBR2ZOLGdDQUhlO0FBQUEsOENBSWQ7QUFBRUEsa0NBQW9CLEVBQXBCQTtBQUFGLGFBSmM7O0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBTWQ7QUFBRUEsa0NBQW9CLEVBQUU7QUFBeEIsYUFOYzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF6Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVZUQscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBtb2RBcGkgZnJvbSBcIi4uL2FwaS9tb2R1bGVcIjtcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbXBvcnQgTW9kdWxlQ29tcGFyZU1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL01vZHVsZUNvbXBhcmVNb2RhbFwiO1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uVGl0bGVcIjtcbmltcG9ydCBTZWFyY2hNb2R1bGVMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaE1vZHVsZUxpc3RcIjtcbmltcG9ydCBTZWVNb3JlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlZU1vcmVCdXR0b25cIjtcbmltcG9ydCB7IGRlc2NyaXB0aW9uR3JlZW4gfSBmcm9tIFwiLi4vc3R5bGVzL2NvbG9yc1wiO1xuXG5pbnRlcmZhY2UgU2VhcmNoUHJvcHMge1xuICBpbml0aWFsU2VhcmNoUmVzdWx0czogTW9kdWxlW107XG59XG5cbmNvbnN0IFNlYXJjaDogTmV4dFBhZ2U8U2VhcmNoUHJvcHM+ID0gKHsgaW5pdGlhbFNlYXJjaFJlc3VsdHMgPSBbXSB9KSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hSZXN1bHRzLCBzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKGluaXRpYWxTZWFyY2hSZXN1bHRzKTtcbiAgY29uc3QgW251bWJlck9mUmVzdWx0cywgc2V0TnVtYmVyT2ZSZXN1bHRzXSA9IHVzZVN0YXRlKDIwKTtcbiAgY29uc3Qgc2VhcmNoVGVybSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2VhcmNoLnNlYXJjaFRlcm0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TnVtYmVyT2ZSZXN1bHRzKDEwKTtcbiAgfSwgW3NlYXJjaFRlcm1dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlYXJjaFJlc3VsdHMoaW5pdGlhbFNlYXJjaFJlc3VsdHMpO1xuICB9LCBbaW5pdGlhbFNlYXJjaFJlc3VsdHNdKTtcblxuICBjb25zdCBmZXRjaE1vcmVTZWFyY2hSZXN1bHRzID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldE51bWJlck9mUmVzdWx0cyhudW1iZXJPZlJlc3VsdHMgKyAxMCk7XG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IG1vZEFwaS5zZWFyY2hNb2R1bGUoc2VhcmNoVGVybSwgbnVtYmVyT2ZSZXN1bHRzKTtcbiAgICBjb25zb2xlLmxvZyhcIk51bWJlcm9mUmVzdWx0czpcIiwgbnVtYmVyT2ZSZXN1bHRzKTtcbiAgICBjb25zb2xlLmxvZyhcIlJlc3VsdHM6XCIsIHJlc3VsdHMpO1xuICAgIHNldFNlYXJjaFJlc3VsdHMocmVzdWx0cyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT17YFNlYXJjaCByZXN1bHRzIGZvciBcIiR7c2VhcmNoVGVybX1cImB9IC8+XG4gICAgICA8U2VhcmNoTW9kdWxlTGlzdCBtb2R1bGVzPXtzZWFyY2hSZXN1bHRzfSAvPlxuICAgICAgPFNlZU1vcmVCdXR0b25cbiAgICAgICAgZmV0Y2hNb3JlRGF0YT17ZmV0Y2hNb3JlU2VhcmNoUmVzdWx0c31cbiAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBkZXNjcmlwdGlvbkdyZWVuIH19XG4gICAgICAvPlxuICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT17YFNpbWlsYXIgcmVzdWx0cyB0byBcIiR7c2VhcmNoVGVybX1cImB9IC8+XG4gICAgICA8U2VhcmNoTW9kdWxlTGlzdCBtb2R1bGVzPXtbXX0gLz5cbiAgICAgIDxNb2R1bGVDb21wYXJlTW9kYWwgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cblNlYXJjaC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IHNlYXJjaFRlcm0gPSBxdWVyeS5zO1xuICB0cnkge1xuICAgIGNvbnN0IGluaXRpYWxTZWFyY2hSZXN1bHRzID0gYXdhaXQgbW9kQXBpLnNlYXJjaE1vZHVsZShzZWFyY2hUZXJtKTtcbiAgICByZXR1cm4geyBpbml0aWFsU2VhcmNoUmVzdWx0cyB9O1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4geyBpbml0aWFsU2VhcmNoUmVzdWx0czogW10gfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/search.tsx\n");

/***/ })

})