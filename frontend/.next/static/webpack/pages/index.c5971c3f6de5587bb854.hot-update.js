webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/home.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_HomeModuleList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomeModuleList */ \"./components/HomeModuleList.tsx\");\n/* harmony import */ var _components_SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SectionTitle */ \"./components/SectionTitle.tsx\");\n/* harmony import */ var _components_ModuleCompareModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ModuleCompareModal */ \"./components/ModuleCompareModal.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _api_recommendations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/recommendations */ \"./api/recommendations.ts\");\n/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/module */ \"./api/module.ts\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ChesterSim/Desktop/NUS Computer Science/CS3219/cs3219-ay2021-s1-project-2020-s1-g01/frontend/pages/home.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  _s();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref);\n\n  var isLoggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(function (state) {\n    return state.auth.isLoggedIn;\n  });\n  var userId = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(function (state) {\n    var _state$auth$user;\n\n    return (_state$auth$user = state.auth.user) === null || _state$auth$user === void 0 ? void 0 : _state$auth$user._id;\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      trendingModules = _useState[0],\n      setTrendingModules = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      popularModules = _useState2[0],\n      setPopularModules = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      recommendedModules = _useState3[0],\n      setRecommendedModules = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    fetchAllRecommendations();\n  }, [userId]);\n\n  var fetchAllRecommendations = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var backupModules, concatBackup, mostRatedModules, mostViewedModules, _recommendedModules;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _api_module__WEBPACK_IMPORTED_MODULE_9__[\"default\"].searchModule(\"\");\n\n            case 2:\n              backupModules = _context.sent;\n\n              concatBackup = function concatBackup(modulesToRecommend, setModulesMethod) {\n                if (modulesToRecommend.length < 3) {\n                  c;\n                }\n              };\n\n              _context.next = 6;\n              return _api_recommendations__WEBPACK_IMPORTED_MODULE_8__[\"default\"].getMostRatedModules();\n\n            case 6:\n              mostRatedModules = _context.sent;\n              setPopularModules(mostRatedModules.mods);\n              _context.next = 10;\n              return _api_recommendations__WEBPACK_IMPORTED_MODULE_8__[\"default\"].getMostViewedModules();\n\n            case 10:\n              mostViewedModules = _context.sent;\n              setTrendingModules(mostViewedModules.mods);\n              _context.prev = 12;\n              _context.next = 15;\n              return _api_recommendations__WEBPACK_IMPORTED_MODULE_8__[\"default\"].getRecommendedModules(userId);\n\n            case 15:\n              _recommendedModules = _context.sent;\n              setRecommendedModules(_recommendedModules.mods);\n              _context.next = 22;\n              break;\n\n            case 19:\n              _context.prev = 19;\n              _context.t0 = _context[\"catch\"](12);\n              console.log(\"User has insufficient activities to get recommended\");\n\n            case 22:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[12, 19]]);\n    }));\n\n    return function fetchAllRecommendations() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var renderRecommendedModules = function renderRecommendedModules() {\n    if (userId) {\n      if (recommendedModules.length > 0) {\n        console.log(\"Recommended:\", recommendedModules);\n        return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          title: \"Recommended For You\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }\n        }), __jsx(_components_HomeModuleList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          modules: recommendedModules,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }\n        }));\n      } else {\n        return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          title: \"Recommended For You\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }\n        }), __jsx(\"p\", {\n          style: {\n            textAlign: \"center\",\n            paddingTop: \"20px\"\n          },\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }\n        }, \"Sorry we do not have enough information about you to recommend modules for you!\"));\n      }\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_ModuleCompareModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }), __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Trending Modules\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }), __jsx(_components_HomeModuleList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    modules: trendingModules,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }), __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Popular Modules\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }), __jsx(_components_HomeModuleList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    modules: popularModules,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }), isLoggedIn && renderRecommendedModules());\n};\n\n_s(Home, \"StlPpzqT7HrJNURzMuVCVl+tjfU=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS50c3g/Mjg4ZSJdLCJuYW1lcyI6WyJIb21lIiwiaXNMb2dnZWRJbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhdXRoIiwidXNlcklkIiwidXNlciIsIl9pZCIsInVzZVN0YXRlIiwidHJlbmRpbmdNb2R1bGVzIiwic2V0VHJlbmRpbmdNb2R1bGVzIiwicG9wdWxhck1vZHVsZXMiLCJzZXRQb3B1bGFyTW9kdWxlcyIsInJlY29tbWVuZGVkTW9kdWxlcyIsInNldFJlY29tbWVuZGVkTW9kdWxlcyIsInVzZUVmZmVjdCIsImZldGNoQWxsUmVjb21tZW5kYXRpb25zIiwibW9kdWxlQXBpIiwic2VhcmNoTW9kdWxlIiwiYmFja3VwTW9kdWxlcyIsImNvbmNhdEJhY2t1cCIsIm1vZHVsZXNUb1JlY29tbWVuZCIsInNldE1vZHVsZXNNZXRob2QiLCJsZW5ndGgiLCJjIiwicmVjb21tZW5kYXRpb25BcGkiLCJnZXRNb3N0UmF0ZWRNb2R1bGVzIiwibW9zdFJhdGVkTW9kdWxlcyIsIm1vZHMiLCJnZXRNb3N0Vmlld2VkTW9kdWxlcyIsIm1vc3RWaWV3ZWRNb2R1bGVzIiwiZ2V0UmVjb21tZW5kZWRNb2R1bGVzIiwiY29uc29sZSIsImxvZyIsInJlbmRlclJlY29tbWVuZGVkTW9kdWxlcyIsInRleHRBbGlnbiIsInBhZGRpbmdUb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixPQUFRO0FBQUE7O0FBQUE7O0FBQzdCLE1BQU1DLFVBQVUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdILFVBQXRCO0FBQUEsR0FBRCxDQUE5QjtBQUNBLE1BQU1JLE1BQU0sR0FBR0gsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7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YyxTQUFLLEVBQUMsa0JBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsa0VBQUQ7QUFBZ0IsV0FBTyxFQUFFM0IsZUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQyxnRUFBRDtBQUFjLFNBQUssRUFBQyxpQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0UsTUFBQyxrRUFBRDtBQUFnQixXQUFPLEVBQUVFLGNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1HVixVQUFVLElBQUlpQyx3QkFBd0IsRUFOekMsQ0FERjtBQVVELENBdEVEOztHQUFNbEMsSTtVQUNlRSx1RCxFQUNKQSx1RDs7O0tBRlhGLEk7QUF3RVNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaG9tZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCBIb21lTW9kdWxlTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lTW9kdWxlTGlzdFwiO1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uVGl0bGVcIjtcbmltcG9ydCBNb2R1bGVDb21wYXJlTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kdWxlQ29tcGFyZU1vZGFsXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHJlY29tbWVuZGF0aW9uQXBpIGZyb20gXCIuLi9hcGkvcmVjb21tZW5kYXRpb25zXCI7XG5pbXBvcnQgbW9kdWxlQXBpIGZyb20gXCIuLi9hcGkvbW9kdWxlXCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoe30pID0+IHtcbiAgY29uc3QgaXNMb2dnZWRJbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC5pc0xvZ2dlZEluKTtcbiAgY29uc3QgdXNlcklkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLnVzZXI/Ll9pZCk7XG5cbiAgY29uc3QgW3RyZW5kaW5nTW9kdWxlcywgc2V0VHJlbmRpbmdNb2R1bGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3BvcHVsYXJNb2R1bGVzLCBzZXRQb3B1bGFyTW9kdWxlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZWNvbW1lbmRlZE1vZHVsZXMsIHNldFJlY29tbWVuZGVkTW9kdWxlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaEFsbFJlY29tbWVuZGF0aW9ucygpO1xuICB9LCBbdXNlcklkXSk7XG5cbiAgY29uc3QgZmV0Y2hBbGxSZWNvbW1lbmRhdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYmFja3VwTW9kdWxlcyA9IGF3YWl0IG1vZHVsZUFwaS5zZWFyY2hNb2R1bGUoXCJcIik7XG5cbiAgICBjb25zdCBjb25jYXRCYWNrdXAgPSAobW9kdWxlc1RvUmVjb21tZW5kLCBzZXRNb2R1bGVzTWV0aG9kKSA9PiB7XG4gICAgICBpZiAobW9kdWxlc1RvUmVjb21tZW5kLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgY1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1vc3RSYXRlZE1vZHVsZXMgPSBhd2FpdCByZWNvbW1lbmRhdGlvbkFwaS5nZXRNb3N0UmF0ZWRNb2R1bGVzKCk7XG4gICAgc2V0UG9wdWxhck1vZHVsZXMobW9zdFJhdGVkTW9kdWxlcy5tb2RzKTtcbiAgICBjb25zdCBtb3N0Vmlld2VkTW9kdWxlcyA9IGF3YWl0IHJlY29tbWVuZGF0aW9uQXBpLmdldE1vc3RWaWV3ZWRNb2R1bGVzKCk7XG4gICAgc2V0VHJlbmRpbmdNb2R1bGVzKG1vc3RWaWV3ZWRNb2R1bGVzLm1vZHMpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlY29tbWVuZGVkTW9kdWxlcyA9IGF3YWl0IHJlY29tbWVuZGF0aW9uQXBpLmdldFJlY29tbWVuZGVkTW9kdWxlcyhcbiAgICAgICAgdXNlcklkXG4gICAgICApO1xuICAgICAgc2V0UmVjb21tZW5kZWRNb2R1bGVzKHJlY29tbWVuZGVkTW9kdWxlcy5tb2RzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBoYXMgaW5zdWZmaWNpZW50IGFjdGl2aXRpZXMgdG8gZ2V0IHJlY29tbWVuZGVkXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJSZWNvbW1lbmRlZE1vZHVsZXMgPSAoKSA9PiB7XG4gICAgaWYgKHVzZXJJZCkge1xuICAgICAgaWYgKHJlY29tbWVuZGVkTW9kdWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjb21tZW5kZWQ6XCIsIHJlY29tbWVuZGVkTW9kdWxlcyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9XCJSZWNvbW1lbmRlZCBGb3IgWW91XCIgLz5cbiAgICAgICAgICAgIDxIb21lTW9kdWxlTGlzdCBtb2R1bGVzPXtyZWNvbW1lbmRlZE1vZHVsZXN9IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwiUmVjb21tZW5kZWQgRm9yIFlvdVwiIC8+XG4gICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIHBhZGRpbmdUb3A6IFwiMjBweFwiIH19PlxuICAgICAgICAgICAgICBTb3JyeSB3ZSBkbyBub3QgaGF2ZSBlbm91Z2ggaW5mb3JtYXRpb24gYWJvdXQgeW91IHRvIHJlY29tbWVuZFxuICAgICAgICAgICAgICBtb2R1bGVzIGZvciB5b3UhXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2R1bGVDb21wYXJlTW9kYWwgLz5cbiAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9XCJUcmVuZGluZyBNb2R1bGVzXCIgLz5cbiAgICAgIDxIb21lTW9kdWxlTGlzdCBtb2R1bGVzPXt0cmVuZGluZ01vZHVsZXN9IC8+XG4gICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwiUG9wdWxhciBNb2R1bGVzXCIgLz5cbiAgICAgIDxIb21lTW9kdWxlTGlzdCBtb2R1bGVzPXtwb3B1bGFyTW9kdWxlc30gLz5cbiAgICAgIHtpc0xvZ2dlZEluICYmIHJlbmRlclJlY29tbWVuZGVkTW9kdWxlcygpfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/home.tsx\n");

/***/ })

})