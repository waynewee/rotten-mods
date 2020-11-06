webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/home.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_HomeModuleList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomeModuleList */ \"./components/HomeModuleList.tsx\");\n/* harmony import */ var _components_SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SectionTitle */ \"./components/SectionTitle.tsx\");\n/* harmony import */ var _components_ModuleCompareModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ModuleCompareModal */ \"./components/ModuleCompareModal.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _api_recommendations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/recommendations */ \"./api/recommendations.ts\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ChesterSim/Desktop/NUS Computer Science/CS3219/cs3219-ay2021-s1-project-2020-s1-g01/frontend/pages/home.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  _s();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref);\n\n  var isLoggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(function (state) {\n    return state.auth.isLoggedIn;\n  });\n  var userId = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(function (state) {\n    var _state$auth$user;\n\n    return (_state$auth$user = state.auth.user) === null || _state$auth$user === void 0 ? void 0 : _state$auth$user._id;\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      trendingModules = _useState[0],\n      setTrendingModules = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      popularModules = _useState2[0],\n      setPopularModules = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      recommendedModules = _useState3[0],\n      setRecommendedModules = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    fetchAllRecommendations();\n  }, [userId]);\n\n  var fetchAllRecommendations = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var backupModules, mostRatedModules, mostViewedModules, _recommendedModules;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return moduleApi.search;\n\n            case 2:\n              backupModules = _context.sent;\n              _context.next = 5;\n              return _api_recommendations__WEBPACK_IMPORTED_MODULE_8__[\"default\"].getMostRatedModules();\n\n            case 5:\n              mostRatedModules = _context.sent;\n              setPopularModules(mostRatedModules.mods);\n              _context.next = 9;\n              return _api_recommendations__WEBPACK_IMPORTED_MODULE_8__[\"default\"].getMostViewedModules();\n\n            case 9:\n              mostViewedModules = _context.sent;\n              setTrendingModules(mostViewedModules.mods);\n              _context.prev = 11;\n              _context.next = 14;\n              return _api_recommendations__WEBPACK_IMPORTED_MODULE_8__[\"default\"].getRecommendedModules(userId);\n\n            case 14:\n              _recommendedModules = _context.sent;\n              setRecommendedModules(_recommendedModules.mods);\n              _context.next = 21;\n              break;\n\n            case 18:\n              _context.prev = 18;\n              _context.t0 = _context[\"catch\"](11);\n              console.log(\"User has insufficient activities to get recommended\");\n\n            case 21:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[11, 18]]);\n    }));\n\n    return function fetchAllRecommendations() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var renderRecommendedModules = function renderRecommendedModules() {\n    if (userId) {\n      if (recommendedModules.length > 0) {\n        console.log(\"Recommended:\", recommendedModules);\n        return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          title: \"Recommended For You\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }\n        }), __jsx(_components_HomeModuleList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          modules: recommendedModules,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }\n        }));\n      } else {\n        return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          title: \"Recommended For You\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }\n        }), __jsx(\"p\", {\n          style: {\n            textAlign: \"center\",\n            paddingTop: \"20px\"\n          },\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 13\n          }\n        }, \"Sorry we do not have enough information about you to recommend modules for you!\"));\n      }\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_ModuleCompareModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }), __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Trending Modules\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }), __jsx(_components_HomeModuleList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    modules: trendingModules,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }), __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Popular Modules\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }), __jsx(_components_HomeModuleList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    modules: popularModules,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }), isLoggedIn && renderRecommendedModules());\n};\n\n_s(Home, \"StlPpzqT7HrJNURzMuVCVl+tjfU=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS50c3g/Mjg4ZSJdLCJuYW1lcyI6WyJIb21lIiwiaXNMb2dnZWRJbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhdXRoIiwidXNlcklkIiwidXNlciIsIl9pZCIsInVzZVN0YXRlIiwidHJlbmRpbmdNb2R1bGVzIiwic2V0VHJlbmRpbmdNb2R1bGVzIiwicG9wdWxhck1vZHVsZXMiLCJzZXRQb3B1bGFyTW9kdWxlcyIsInJlY29tbWVuZGVkTW9kdWxlcyIsInNldFJlY29tbWVuZGVkTW9kdWxlcyIsInVzZUVmZmVjdCIsImZldGNoQWxsUmVjb21tZW5kYXRpb25zIiwibW9kdWxlQXBpIiwic2VhcmNoIiwiYmFja3VwTW9kdWxlcyIsInJlY29tbWVuZGF0aW9uQXBpIiwiZ2V0TW9zdFJhdGVkTW9kdWxlcyIsIm1vc3RSYXRlZE1vZHVsZXMiLCJtb2RzIiwiZ2V0TW9zdFZpZXdlZE1vZHVsZXMiLCJtb3N0Vmlld2VkTW9kdWxlcyIsImdldFJlY29tbWVuZGVkTW9kdWxlcyIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJSZWNvbW1lbmRlZE1vZHVsZXMiLCJsZW5ndGgiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsT0FBUTtBQUFBOztBQUFBOztBQUM3QixNQUFNQyxVQUFVLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSCxVQUF0QjtBQUFBLEdBQUQsQ0FBOUI7QUFDQSxNQUFNSSxNQUFNLEdBQUdILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLCtCQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0UsSUFBdEIscURBQVcsaUJBQWlCQyxHQUE1QjtBQUFBLEdBQUQs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QUFPLEVBQUVFLGNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1HVixVQUFVLElBQUk0Qix3QkFBd0IsRUFOekMsQ0FERjtBQVVELENBL0REOztHQUFNN0IsSTtVQUNlRSx1RCxFQUNKQSx1RDs7O0tBRlhGLEk7QUFpRVNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaG9tZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCBIb21lTW9kdWxlTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lTW9kdWxlTGlzdFwiO1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uVGl0bGVcIjtcbmltcG9ydCBNb2R1bGVDb21wYXJlTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kdWxlQ29tcGFyZU1vZGFsXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHJlY29tbWVuZGF0aW9uQXBpIGZyb20gXCIuLi9hcGkvcmVjb21tZW5kYXRpb25zXCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoe30pID0+IHtcbiAgY29uc3QgaXNMb2dnZWRJbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC5pc0xvZ2dlZEluKTtcbiAgY29uc3QgdXNlcklkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLnVzZXI/Ll9pZCk7XG5cbiAgY29uc3QgW3RyZW5kaW5nTW9kdWxlcywgc2V0VHJlbmRpbmdNb2R1bGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3BvcHVsYXJNb2R1bGVzLCBzZXRQb3B1bGFyTW9kdWxlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZWNvbW1lbmRlZE1vZHVsZXMsIHNldFJlY29tbWVuZGVkTW9kdWxlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaEFsbFJlY29tbWVuZGF0aW9ucygpO1xuICB9LCBbdXNlcklkXSk7XG5cbiAgY29uc3QgZmV0Y2hBbGxSZWNvbW1lbmRhdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYmFja3VwTW9kdWxlcyA9IGF3YWl0IG1vZHVsZUFwaS5zZWFyY2hcbiAgICBjb25zdCBtb3N0UmF0ZWRNb2R1bGVzID0gYXdhaXQgcmVjb21tZW5kYXRpb25BcGkuZ2V0TW9zdFJhdGVkTW9kdWxlcygpO1xuICAgIHNldFBvcHVsYXJNb2R1bGVzKG1vc3RSYXRlZE1vZHVsZXMubW9kcyk7XG4gICAgY29uc3QgbW9zdFZpZXdlZE1vZHVsZXMgPSBhd2FpdCByZWNvbW1lbmRhdGlvbkFwaS5nZXRNb3N0Vmlld2VkTW9kdWxlcygpO1xuICAgIHNldFRyZW5kaW5nTW9kdWxlcyhtb3N0Vmlld2VkTW9kdWxlcy5tb2RzKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWNvbW1lbmRlZE1vZHVsZXMgPSBhd2FpdCByZWNvbW1lbmRhdGlvbkFwaS5nZXRSZWNvbW1lbmRlZE1vZHVsZXMoXG4gICAgICAgIHVzZXJJZFxuICAgICAgKTtcbiAgICAgIHNldFJlY29tbWVuZGVkTW9kdWxlcyhyZWNvbW1lbmRlZE1vZHVsZXMubW9kcyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlVzZXIgaGFzIGluc3VmZmljaWVudCBhY3Rpdml0aWVzIHRvIGdldCByZWNvbW1lbmRlZFwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUmVjb21tZW5kZWRNb2R1bGVzID0gKCkgPT4ge1xuICAgIGlmICh1c2VySWQpIHtcbiAgICAgIGlmIChyZWNvbW1lbmRlZE1vZHVsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY29tbWVuZGVkOlwiLCByZWNvbW1lbmRlZE1vZHVsZXMpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwiUmVjb21tZW5kZWQgRm9yIFlvdVwiIC8+XG4gICAgICAgICAgICA8SG9tZU1vZHVsZUxpc3QgbW9kdWxlcz17cmVjb21tZW5kZWRNb2R1bGVzfSAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT1cIlJlY29tbWVuZGVkIEZvciBZb3VcIiAvPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nVG9wOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgU29ycnkgd2UgZG8gbm90IGhhdmUgZW5vdWdoIGluZm9ybWF0aW9uIGFib3V0IHlvdSB0byByZWNvbW1lbmRcbiAgICAgICAgICAgICAgbW9kdWxlcyBmb3IgeW91IVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TW9kdWxlQ29tcGFyZU1vZGFsIC8+XG4gICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwiVHJlbmRpbmcgTW9kdWxlc1wiIC8+XG4gICAgICA8SG9tZU1vZHVsZUxpc3QgbW9kdWxlcz17dHJlbmRpbmdNb2R1bGVzfSAvPlxuICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT1cIlBvcHVsYXIgTW9kdWxlc1wiIC8+XG4gICAgICA8SG9tZU1vZHVsZUxpc3QgbW9kdWxlcz17cG9wdWxhck1vZHVsZXN9IC8+XG4gICAgICB7aXNMb2dnZWRJbiAmJiByZW5kZXJSZWNvbW1lbmRlZE1vZHVsZXMoKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.tsx\n");

/***/ })

})