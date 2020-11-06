webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/home.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_HomeModuleList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomeModuleList */ \"./components/HomeModuleList.tsx\");\n/* harmony import */ var _components_SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SectionTitle */ \"./components/SectionTitle.tsx\");\n/* harmony import */ var _components_ModuleCompareModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ModuleCompareModal */ \"./components/ModuleCompareModal.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _api_recommendations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api/recommendations */ \"./api/recommendations.ts\");\n/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api/module */ \"./api/module.ts\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ChesterSim/Desktop/NUS Computer Science/CS3219/cs3219-ay2021-s1-project-2020-s1-g01/frontend/pages/home.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  _s();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref);\n\n  var isLoggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(function (state) {\n    return state.auth.isLoggedIn;\n  });\n  var userId = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(function (state) {\n    var _state$auth$user;\n\n    return (_state$auth$user = state.auth.user) === null || _state$auth$user === void 0 ? void 0 : _state$auth$user._id;\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      trendingModules = _useState[0],\n      setTrendingModules = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      popularModules = _useState2[0],\n      setPopularModules = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      recommendedModules = _useState3[0],\n      setRecommendedModules = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    fetchAllRecommendations();\n  }, [userId]);\n  var concatBackupModules = (modulesToConcat, backupModules);\n\n  var fetchAllRecommendations = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var backupModules, mostRatedModules, mostViewedModules, _recommendedModules;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _api_module__WEBPACK_IMPORTED_MODULE_9__[\"default\"].searchModule(\"\");\n\n            case 2:\n              backupModules = _context.sent;\n              _context.next = 5;\n              return _api_recommendations__WEBPACK_IMPORTED_MODULE_8__[\"default\"].getMostRatedModules();\n\n            case 5:\n              mostRatedModules = _context.sent;\n              setPopularModules(mostRatedModules.mods);\n              _context.next = 9;\n              return _api_recommendations__WEBPACK_IMPORTED_MODULE_8__[\"default\"].getMostViewedModules();\n\n            case 9:\n              mostViewedModules = _context.sent;\n              setTrendingModules(mostViewedModules.mods);\n              _context.prev = 11;\n              _context.next = 14;\n              return _api_recommendations__WEBPACK_IMPORTED_MODULE_8__[\"default\"].getRecommendedModules(userId);\n\n            case 14:\n              _recommendedModules = _context.sent;\n              setRecommendedModules(_recommendedModules.mods);\n              _context.next = 21;\n              break;\n\n            case 18:\n              _context.prev = 18;\n              _context.t0 = _context[\"catch\"](11);\n              console.log(\"User has insufficient activities to get recommended\");\n\n            case 21:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[11, 18]]);\n    }));\n\n    return function fetchAllRecommendations() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var renderRecommendedModules = function renderRecommendedModules() {\n    if (userId) {\n      if (recommendedModules.length > 0) {\n        console.log(\"Recommended:\", recommendedModules);\n        return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          title: \"Recommended For You\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }\n        }), __jsx(_components_HomeModuleList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          modules: recommendedModules,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }\n        }));\n      } else {\n        return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          title: \"Recommended For You\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }\n        }), __jsx(\"p\", {\n          style: {\n            textAlign: \"center\",\n            paddingTop: \"20px\"\n          },\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 13\n          }\n        }, \"Sorry we do not have enough information about you to recommend modules for you!\"));\n      }\n    }\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_ModuleCompareModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }), __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Trending Modules\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }\n  }), __jsx(_components_HomeModuleList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    modules: trendingModules,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }), __jsx(_components_SectionTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    title: \"Popular Modules\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }), __jsx(_components_HomeModuleList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    modules: popularModules,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }\n  }), isLoggedIn && renderRecommendedModules());\n};\n\n_s(Home, \"StlPpzqT7HrJNURzMuVCVl+tjfU=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZS50c3g/Mjg4ZSJdLCJuYW1lcyI6WyJIb21lIiwiaXNMb2dnZWRJbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhdXRoIiwidXNlcklkIiwidXNlciIsIl9pZCIsInVzZVN0YXRlIiwidHJlbmRpbmdNb2R1bGVzIiwic2V0VHJlbmRpbmdNb2R1bGVzIiwicG9wdWxhck1vZHVsZXMiLCJzZXRQb3B1bGFyTW9kdWxlcyIsInJlY29tbWVuZGVkTW9kdWxlcyIsInNldFJlY29tbWVuZGVkTW9kdWxlcyIsInVzZUVmZmVjdCIsImZldGNoQWxsUmVjb21tZW5kYXRpb25zIiwiY29uY2F0QmFja3VwTW9kdWxlcyIsIm1vZHVsZXNUb0NvbmNhdCIsImJhY2t1cE1vZHVsZXMiLCJtb2R1bGVBcGkiLCJzZWFyY2hNb2R1bGUiLCJyZWNvbW1lbmRhdGlvbkFwaSIsImdldE1vc3RSYXRlZE1vZHVsZXMiLCJtb3N0UmF0ZWRNb2R1bGVzIiwibW9kcyIsImdldE1vc3RWaWV3ZWRNb2R1bGVzIiwibW9zdFZpZXdlZE1vZHVsZXMiLCJnZXRSZWNvbW1lbmRlZE1vZHVsZXMiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyUmVjb21tZW5kZWRNb2R1bGVzIiwibGVuZ3RoIiwidGV4dEFsaWduIiwicGFkZGluZ1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxJQUFjLEdBQUcsU0FBakJBLElBQWlCLE9BQVE7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsVUFBVSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0gsVUFBdEI7QUFBQSxHQUFELENBQTlCO0FBQ0EsTUFBTUksTUFBTSxHQUFHSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSwrQkFBV0EsS0FBSyxD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QUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQyxnRUFBRDtBQUFjLFNBQUssRUFBQyxpQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBS0UsTUFBQyxrRUFBRDtBQUFnQixXQUFPLEVBQUVFLGNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1HVixVQUFVLElBQUk4Qix3QkFBd0IsRUFOekMsQ0FERjtBQVVELENBakVEOztHQUFNL0IsSTtVQUNlRSx1RCxFQUNKQSx1RDs7O0tBRlhGLEk7QUFtRVNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaG9tZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5cbmltcG9ydCBIb21lTW9kdWxlTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lTW9kdWxlTGlzdFwiO1xuaW1wb3J0IFNlY3Rpb25UaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uVGl0bGVcIjtcbmltcG9ydCBNb2R1bGVDb21wYXJlTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kdWxlQ29tcGFyZU1vZGFsXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHJlY29tbWVuZGF0aW9uQXBpIGZyb20gXCIuLi9hcGkvcmVjb21tZW5kYXRpb25zXCI7XG5pbXBvcnQgbW9kdWxlQXBpIGZyb20gXCIuLi9hcGkvbW9kdWxlXCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoe30pID0+IHtcbiAgY29uc3QgaXNMb2dnZWRJbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC5pc0xvZ2dlZEluKTtcbiAgY29uc3QgdXNlcklkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLnVzZXI/Ll9pZCk7XG5cbiAgY29uc3QgW3RyZW5kaW5nTW9kdWxlcywgc2V0VHJlbmRpbmdNb2R1bGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3BvcHVsYXJNb2R1bGVzLCBzZXRQb3B1bGFyTW9kdWxlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZWNvbW1lbmRlZE1vZHVsZXMsIHNldFJlY29tbWVuZGVkTW9kdWxlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaEFsbFJlY29tbWVuZGF0aW9ucygpO1xuICB9LCBbdXNlcklkXSk7XG5cbiAgY29uc3QgY29uY2F0QmFja3VwTW9kdWxlcyA9IChtb2R1bGVzVG9Db25jYXQsIGJhY2t1cE1vZHVsZXMpXG5cbiAgY29uc3QgZmV0Y2hBbGxSZWNvbW1lbmRhdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYmFja3VwTW9kdWxlcyA9IGF3YWl0IG1vZHVsZUFwaS5zZWFyY2hNb2R1bGUoXCJcIik7XG4gICAgY29uc3QgbW9zdFJhdGVkTW9kdWxlcyA9IGF3YWl0IHJlY29tbWVuZGF0aW9uQXBpLmdldE1vc3RSYXRlZE1vZHVsZXMoKTtcbiAgICBzZXRQb3B1bGFyTW9kdWxlcyhtb3N0UmF0ZWRNb2R1bGVzLm1vZHMpO1xuICAgIGNvbnN0IG1vc3RWaWV3ZWRNb2R1bGVzID0gYXdhaXQgcmVjb21tZW5kYXRpb25BcGkuZ2V0TW9zdFZpZXdlZE1vZHVsZXMoKTtcbiAgICBzZXRUcmVuZGluZ01vZHVsZXMobW9zdFZpZXdlZE1vZHVsZXMubW9kcyk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVjb21tZW5kZWRNb2R1bGVzID0gYXdhaXQgcmVjb21tZW5kYXRpb25BcGkuZ2V0UmVjb21tZW5kZWRNb2R1bGVzKFxuICAgICAgICB1c2VySWRcbiAgICAgICk7XG4gICAgICBzZXRSZWNvbW1lbmRlZE1vZHVsZXMocmVjb21tZW5kZWRNb2R1bGVzLm1vZHMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coXCJVc2VyIGhhcyBpbnN1ZmZpY2llbnQgYWN0aXZpdGllcyB0byBnZXQgcmVjb21tZW5kZWRcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclJlY29tbWVuZGVkTW9kdWxlcyA9ICgpID0+IHtcbiAgICBpZiAodXNlcklkKSB7XG4gICAgICBpZiAocmVjb21tZW5kZWRNb2R1bGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNvbW1lbmRlZDpcIiwgcmVjb21tZW5kZWRNb2R1bGVzKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT1cIlJlY29tbWVuZGVkIEZvciBZb3VcIiAvPlxuICAgICAgICAgICAgPEhvbWVNb2R1bGVMaXN0IG1vZHVsZXM9e3JlY29tbWVuZGVkTW9kdWxlc30gLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9XCJSZWNvbW1lbmRlZCBGb3IgWW91XCIgLz5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZ1RvcDogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgIFNvcnJ5IHdlIGRvIG5vdCBoYXZlIGVub3VnaCBpbmZvcm1hdGlvbiBhYm91dCB5b3UgdG8gcmVjb21tZW5kXG4gICAgICAgICAgICAgIG1vZHVsZXMgZm9yIHlvdSFcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vZHVsZUNvbXBhcmVNb2RhbCAvPlxuICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT1cIlRyZW5kaW5nIE1vZHVsZXNcIiAvPlxuICAgICAgPEhvbWVNb2R1bGVMaXN0IG1vZHVsZXM9e3RyZW5kaW5nTW9kdWxlc30gLz5cbiAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9XCJQb3B1bGFyIE1vZHVsZXNcIiAvPlxuICAgICAgPEhvbWVNb2R1bGVMaXN0IG1vZHVsZXM9e3BvcHVsYXJNb2R1bGVzfSAvPlxuICAgICAge2lzTG9nZ2VkSW4gJiYgcmVuZGVyUmVjb21tZW5kZWRNb2R1bGVzKCl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home.tsx\n");

/***/ })

})