webpackHotUpdate_N_E("pages/module-review",{

/***/ "./components/ReviewCard.tsx":
/*!***********************************!*\
  !*** ./components/ReviewCard.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _api_comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/comment */ \"./api/comment.ts\");\n/* harmony import */ var _api_reaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/reaction */ \"./api/reaction.ts\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helpers */ \"./utils/helpers.ts\");\n/* harmony import */ var _AddCommentModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddCommentModal */ \"./components/AddCommentModal.tsx\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Button */ \"./components/Button.tsx\");\n/* harmony import */ var _CommentsModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CommentsModal */ \"./components/CommentsModal.tsx\");\n/* harmony import */ var _icons_CommentOutlinedIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icons/CommentOutlinedIcon */ \"./icons/CommentOutlinedIcon.tsx\");\n/* harmony import */ var _icons_LikeOutlinedIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../icons/LikeOutlinedIcon */ \"./icons/LikeOutlinedIcon.tsx\");\n/* harmony import */ var _styles_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/colors */ \"./styles/colors.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ChesterSim/Desktop/NUS Computer Science/CS3219/cs3219-ay2021-s1-project-2020-s1-g01/frontend/components/ReviewCard.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ReviewCard = function ReviewCard(_ref) {\n  _s();\n\n  var _reaction$like$count, _reaction$like;\n\n  var review = _ref.review,\n      updateReviews = _ref.updateReviews,\n      _ref$showActions = _ref.showActions,\n      showActions = _ref$showActions === void 0 ? true : _ref$showActions;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isCommentsModalVisible = _useState[0],\n      setCommentsModalVisibility = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isAddCommentModalVisible = _useState2[0],\n      setAddCommentModalVisibility = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      comments = _useState3[0],\n      setComments = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      userLikeReactionId = _useState4[0],\n      setUserLikeReactionId = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(3),\n      difficulty = _useState5[0],\n      setDifficulty = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(3),\n      star = _useState6[0],\n      setStar = _useState6[1];\n\n  var isLoggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.auth.isLoggedIn;\n  });\n  var userId = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    var _state$auth$user;\n\n    return (_state$auth$user = state.auth.user) === null || _state$auth$user === void 0 ? void 0 : _state$auth$user._id;\n  });\n  var user = review.user,\n      text = review.text,\n      acadYearTaken = review.acadYearTaken,\n      semesterTaken = review.semesterTaken,\n      reaction = review.reaction,\n      _id = review._id,\n      ratingIds = review.ratingIds;\n  var name = user === null || user === void 0 ? void 0 : user.name;\n  var like = (_reaction$like$count = reaction === null || reaction === void 0 ? void 0 : (_reaction$like = reaction.like) === null || _reaction$like === void 0 ? void 0 : _reaction$like.count) !== null && _reaction$like$count !== void 0 ? _reaction$like$count : 0;\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    fetchComments();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    checkIsLikedByUser();\n  }, [userId]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__[\"fetchRatings\"])(ratingIds, setStar, setDifficulty);\n  }, [ratingIds]);\n\n  var fetchComments = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var fetchedComments;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _api_comment__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getCommentsOfReview(_id);\n\n            case 2:\n              fetchedComments = _context.sent;\n              setComments(fetchedComments);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchComments() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var checkIsLikedByUser = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n      var likeReaction;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return _api_reaction__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getReaction(\"review\", _id, userId, \"like\");\n\n            case 3:\n              likeReaction = _context2.sent;\n              setUserLikeReactionId(likeReaction._id);\n              _context2.next = 10;\n              break;\n\n            case 7:\n              _context2.prev = 7;\n              _context2.t0 = _context2[\"catch\"](0);\n              setUserLikeReactionId(\"\");\n\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 7]]);\n    }));\n\n    return function checkIsLikedByUser() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var onLikeReview = /*#__PURE__*/function () {\n    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              if (isLoggedIn) {\n                _context3.next = 3;\n                break;\n              }\n\n              Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__[\"triggerRequireLoginMessage\"])();\n              return _context3.abrupt(\"return\");\n\n            case 3:\n              if (userLikeReactionId) {\n                _context3.next = 8;\n                break;\n              }\n\n              _context3.next = 6;\n              return _api_reaction__WEBPACK_IMPORTED_MODULE_6__[\"default\"].addReaction(\"review\", _id, userId, \"like\");\n\n            case 6:\n              _context3.next = 12;\n              break;\n\n            case 8:\n              _context3.next = 10;\n              return _api_reaction__WEBPACK_IMPORTED_MODULE_6__[\"default\"].deleteReaction(userLikeReactionId);\n\n            case 10:\n              updateReviews();\n              checkIsLikedByUser();\n\n            case 12:\n              updateReviews();\n              checkIsLikedByUser();\n\n            case 14:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function onLikeReview() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  var toggleCommentModalVisibility = function toggleCommentModalVisibility() {\n    if (!isLoggedIn) {\n      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__[\"triggerRequireLoginMessage\"])();\n    } else {\n      setAddCommentModalVisibility(true);\n    }\n  };\n\n  return __jsx(\"div\", {\n    style: styles.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: styles.header,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: styles.userInformation,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 11\n    }\n  }, name), __jsx(\"span\", {\n    style: styles.divider,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 11\n    }\n  }, \"|\"), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 11\n    }\n  }, \"AY\", acadYearTaken, \", Sem \", semesterTaken), __jsx(\"span\", {\n    style: styles.divider,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  }, \"|\"), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 11\n    }\n  }, \"Difficulty: \", difficulty.toFixed(1)), __jsx(\"span\", {\n    style: styles.divider,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 11\n    }\n  }, \"|\"), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  }, \"Rating: \", star.toFixed(1))), showActions && __jsx(\"div\", {\n    style: styles.actionsBar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    style: styles.action,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 13\n    }\n  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    onClick: onLikeReview,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 15\n    }\n  }, __jsx(_icons_LikeOutlinedIcon__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    style: _objectSpread(_objectSpread({}, styles.icon), {}, {\n      color: userLikeReactionId ? _styles_colors__WEBPACK_IMPORTED_MODULE_13__[\"ratingsYellow\"] : \"#fff\"\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 17\n    }\n  })), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 15\n    }\n  }, \"\".concat(like, \" Likes\"))), __jsx(\"span\", {\n    style: {\n      margin: \"0px 10px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 13\n    }\n  }, \"|\"), __jsx(\"div\", {\n    style: styles.action,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 13\n    }\n  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    onClick: toggleCommentModalVisibility,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 15\n    }\n  }, __jsx(_icons_CommentOutlinedIcon__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    style: styles.icon,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 17\n    }\n  })), __jsx(_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    onClick: function onClick() {\n      return setCommentsModalVisibility(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 15\n    }\n  }, \"\".concat(comments.length, \" Comments\"))))), __jsx(\"div\", {\n    style: styles.review,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 7\n    }\n  }, text), __jsx(_AddCommentModal__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    fetchComments: fetchComments,\n    reviewId: _id,\n    isModalVisible: isAddCommentModalVisible,\n    setModalVisibility: setAddCommentModalVisibility,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 7\n    }\n  }), __jsx(_CommentsModal__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    comments: comments,\n    isModalVisible: isCommentsModalVisible,\n    setModalVisibility: setCommentsModalVisibility,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ReviewCard, \"CsyZ93fhnHA95ulvgKi6KyuLqL8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"]];\n});\n\n_c = ReviewCard;\nvar styles = {\n  container: {\n    padding: 30,\n    backgroundColor: _styles_colors__WEBPACK_IMPORTED_MODULE_13__[\"reviewBlue\"],\n    color: \"#fff\",\n    borderRadius: 15,\n    boxShadow: \"0px 8px 8px rgba(0, 0, 0, 0.25)\",\n    marginBottom: 15,\n    width: \"100%\"\n  },\n  header: {\n    display: \"flex\",\n    justifyContent: \"space-between\"\n  },\n  userInformation: {\n    display: \"flex\",\n    flexWrap: \"wrap\"\n  },\n  actionsBar: {\n    display: \"flex\"\n  },\n  action: {\n    display: \"flex\",\n    justifyContent: \"center\"\n  },\n  icon: {\n    height: 20,\n    marginRight: 10\n  },\n  review: {\n    marginTop: 10,\n    textAlign: \"justify\"\n  },\n  divider: {\n    margin: \"0px 10px\"\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"ReviewCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXZpZXdDYXJkLnRzeD85M2FmIl0sIm5hbWVzIjpbIlJldmlld0NhcmQiLCJyZXZpZXciLCJ1cGRhdGVSZXZpZXdzIiwic2hvd0FjdGlvbnMiLCJ1c2VTdGF0ZSIsImlzQ29tbWVudHNNb2RhbFZpc2libGUiLCJzZXRDb21tZW50c01vZGFsVmlzaWJpbGl0eSIsImlzQWRkQ29tbWVudE1vZGFsVmlzaWJsZSIsInNldEFkZENvbW1lbnRNb2RhbFZpc2liaWxpdHkiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwidXNlckxpa2VSZWFjdGlvbklkIiwic2V0VXNlckxpa2VSZWFjdGlvbklkIiwiZGlmZmljdWx0eSIsInNldERpZmZpY3VsdHkiLCJzdGFyIiwic2V0U3RhciIsImlzTG9nZ2VkSW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiYXV0aCIsInVzZXJJZCIsInVzZXIiLCJfaWQiLCJ0ZXh0IiwiYWNhZFllYXJUYWtlbiIsInNlbWVzdGVyVGFrZW4iLCJyZWFjdGlvbiIsInJhdGluZ0lkcyIsIm5hbWUiLCJsaWtlIiwiY291bnQiLCJ1c2VFZmZlY3QiLCJmZXRjaENvbW1lbnRzIiwiY2hlY2tJc0xpa2VkQnlVc2VyIiwiZmV0Y2hSYXRpbmdzIiwiY29tbWVudEFwaSIsImdldENvbW1lbnRzT2ZSZXZpZXciLCJmZXRjaGVkQ29tbWVudHMiLCJyZWFjdGlvbkFwaSIsImdldFJlYWN0aW9uIiwibGlrZVJlYWN0aW9uIiwib25MaWtlUmV2aWV3IiwidHJpZ2dlclJlcXVpcmVMb2dpbk1lc3NhZ2UiLCJhZGRSZWFjdGlvbiIsImRlbGV0ZVJlYWN0aW9uIiwidG9nZ2xlQ29tbWVudE1vZGFsVmlzaWJpbGl0eSIsInN0eWxlcyIsImNvbnRhaW5lciIsImhlYWRlciIsInVzZXJJbmZvcm1hdGlvbiIsImRpdmlkZXIiLCJ0b0ZpeGVkIiwiYWN0aW9uc0JhciIsImFjdGlvbiIsImljb24iLCJjb2xvciIsInJhdGluZ3NZZWxsb3ciLCJtYXJnaW4iLCJsZW5ndGgiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwicmV2aWV3Qmx1ZSIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1hcmdpbkJvdHRvbSIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJoZWlnaHQiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVFBLElBQU1BLFVBQXFDLEdBQUcsU0FBeENBLFVBQXdDLE9BSXhDO0FBQUE7O0FBQUE7O0FBQUEsTUFISkMsTUFHSSxRQUhKQSxNQUdJO0FBQUEsTUFGSkMsYUFFSSxRQUZKQSxhQUVJO0FBQUEsOEJBREpDLFdBQ0k7QUFBQSxNQURKQSxXQUNJLGlDQURVLElBQ1Y7O0FBQUEsa0JBQ3lEQyxzREFBUSxDQUFDLEtBQUQsQ0FEakU7QUFBQSxNQUNHQyxzQkFESDtBQUFBLE1BQzJCQywwQkFEM0I7O0FBQUEsbUJBRTZERixzREFBUSxDQUN2RSxLQUR1RSxDQUZyRTtBQUFBLE1BRUdHLHdCQUZIO0FBQUEsTUFFNkJDLDRCQUY3Qjs7QUFBQSxtQkFLNEJKLHNEQUFRLENBQUMsRUFBRCxDQUxwQztBQUFBLE1BS0dLLFFBTEg7QUFBQSxNQUthQyxXQUxiOztBQUFBLG1CQU1nRE4sc0RBQVEsQ0FBQyxFQUFELENBTnhEO0FBQUEsTUFNR08sa0JBTkg7QUFBQSxNQU11QkMscUJBTnZCOztBQUFBLG1CQU9nQ1Isc0RBQVEsQ0FBQyxDQUFELENBUHhDO0FBQUEsTUFPR1MsVUFQSDtBQUFBLE1BT2VDLGFBUGY7O0FBQUEsbUJBUW9CVixzREFBUSxDQUFDLENBQUQsQ0FSNUI7QUFBQSxNQVFHVyxJQVJIO0FBQUEsTUFRU0MsT0FSVDs7QUFVSixNQUFNQyxVQUFVLEdBQUdD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R0FWSztBQWNibEIsaUJBQWUsRUFBRTtBQUNmaUIsV0FBTyxFQUFFLE1BRE07QUFFZkUsWUFBUSxFQUFFO0FBRkssR0FkSjtBQWtCYmhCLFlBQVUsRUFBRTtBQUNWYyxXQUFPLEVBQUU7QUFEQyxHQWxCQztBQXFCYmIsUUFBTSxFQUFFO0FBQ05hLFdBQU8sRUFBRSxNQURIO0FBRU5DLGtCQUFjLEVBQUU7QUFGVixHQXJCSztBQXlCYmIsTUFBSSxFQUFFO0FBQ0plLFVBQU0sRUFBRSxFQURKO0FBRUpDLGVBQVcsRUFBRTtBQUZULEdBekJPO0FBNkJidEUsUUFBTSxFQUFFO0FBQ051RSxhQUFTLEVBQUUsRUFETDtBQUVOQyxhQUFTLEVBQUU7QUFGTCxHQTdCSztBQWlDYnRCLFNBQU8sRUFBRTtBQUNQTyxVQUFNLEVBQUU7QUFERDtBQWpDSSxDQUFmO0FBc0NlMUQseUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jldmlld0NhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IFJldmlldyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IGNvbW1lbnRBcGkgZnJvbSBcIi4uL2FwaS9jb21tZW50XCI7XG5pbXBvcnQgcmVhY3Rpb25BcGkgZnJvbSBcIi4uL2FwaS9yZWFjdGlvblwiO1xuaW1wb3J0IHJldmlld0FwaSBmcm9tIFwiLi4vYXBpL3Jldmlld1wiO1xuaW1wb3J0IHsgdHJpZ2dlclJlcXVpcmVMb2dpbk1lc3NhZ2UsIGZldGNoUmF0aW5ncyB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJzXCI7XG5cbmltcG9ydCBBZGRDb21tZW50TW9kYWwgZnJvbSBcIi4vQWRkQ29tbWVudE1vZGFsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IENvbW1lbnRNb2RhbCBmcm9tIFwiLi9Db21tZW50c01vZGFsXCI7XG5pbXBvcnQgQ29tbWVudE91dGxpbmVkSWNvbiBmcm9tIFwiLi4vaWNvbnMvQ29tbWVudE91dGxpbmVkSWNvblwiO1xuaW1wb3J0IExpa2VPdXRsaW5lZEljb24gZnJvbSBcIi4uL2ljb25zL0xpa2VPdXRsaW5lZEljb25cIjtcbmltcG9ydCB7IHJldmlld0JsdWUsIHJhdGluZ3NZZWxsb3cgfSBmcm9tIFwiLi4vc3R5bGVzL2NvbG9yc1wiO1xuXG5pbnRlcmZhY2UgUmV2aWV3Q2FyZFByb3BzIHtcbiAgcmV2aWV3OiBSZXZpZXc7XG4gIHVwZGF0ZVJldmlld3M6ICgpID0+IHZvaWQ7XG4gIHNob3dBY3Rpb25zPzogYm9vbGVhbjtcbn1cblxuY29uc3QgUmV2aWV3Q2FyZDogUmVhY3QuRkM8UmV2aWV3Q2FyZFByb3BzPiA9ICh7XG4gIHJldmlldyxcbiAgdXBkYXRlUmV2aWV3cyxcbiAgc2hvd0FjdGlvbnMgPSB0cnVlLFxufSkgPT4ge1xuICBjb25zdCBbaXNDb21tZW50c01vZGFsVmlzaWJsZSwgc2V0Q29tbWVudHNNb2RhbFZpc2liaWxpdHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNBZGRDb21tZW50TW9kYWxWaXNpYmxlLCBzZXRBZGRDb21tZW50TW9kYWxWaXNpYmlsaXR5XSA9IHVzZVN0YXRlKFxuICAgIGZhbHNlXG4gICk7XG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdXNlckxpa2VSZWFjdGlvbklkLCBzZXRVc2VyTGlrZVJlYWN0aW9uSWRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkaWZmaWN1bHR5LCBzZXREaWZmaWN1bHR5XSA9IHVzZVN0YXRlKDMpO1xuICBjb25zdCBbc3Rhciwgc2V0U3Rhcl0gPSB1c2VTdGF0ZSgzKTtcblxuICBjb25zdCBpc0xvZ2dlZEluID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLmlzTG9nZ2VkSW4pO1xuICBjb25zdCB1c2VySWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgudXNlcj8uX2lkKTtcblxuICBjb25zdCB7XG4gICAgdXNlcixcbiAgICB0ZXh0LFxuICAgIGFjYWRZZWFyVGFrZW4sXG4gICAgc2VtZXN0ZXJUYWtlbixcbiAgICByZWFjdGlvbixcbiAgICBfaWQsXG4gICAgcmF0aW5nSWRzLFxuICB9ID0gcmV2aWV3O1xuICBjb25zdCBuYW1lID0gdXNlcj8ubmFtZTtcbiAgY29uc3QgbGlrZSA9IHJlYWN0aW9uPy5saWtlPy5jb3VudCA/PyAwO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hDb21tZW50cygpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjaGVja0lzTGlrZWRCeVVzZXIoKTtcbiAgfSwgW3VzZXJJZF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hSYXRpbmdzKHJhdGluZ0lkcywgc2V0U3Rhciwgc2V0RGlmZmljdWx0eSk7XG4gIH0sIFtyYXRpbmdJZHNdKTtcblxuICBjb25zdCBmZXRjaENvbW1lbnRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoZWRDb21tZW50cyA9IGF3YWl0IGNvbW1lbnRBcGkuZ2V0Q29tbWVudHNPZlJldmlldyhfaWQpO1xuICAgIHNldENvbW1lbnRzKGZldGNoZWRDb21tZW50cyk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tJc0xpa2VkQnlVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsaWtlUmVhY3Rpb24gPSBhd2FpdCByZWFjdGlvbkFwaS5nZXRSZWFjdGlvbihcbiAgICAgICAgXCJyZXZpZXdcIixcbiAgICAgICAgX2lkLFxuICAgICAgICB1c2VySWQsXG4gICAgICAgIFwibGlrZVwiXG4gICAgICApO1xuICAgICAgc2V0VXNlckxpa2VSZWFjdGlvbklkKGxpa2VSZWFjdGlvbi5faWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0VXNlckxpa2VSZWFjdGlvbklkKFwiXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkxpa2VSZXZpZXcgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFpc0xvZ2dlZEluKSB7XG4gICAgICB0cmlnZ2VyUmVxdWlyZUxvZ2luTWVzc2FnZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdXNlckxpa2VSZWFjdGlvbklkKSB7XG4gICAgICBhd2FpdCByZWFjdGlvbkFwaS5hZGRSZWFjdGlvbihcInJldmlld1wiLCBfaWQsIHVzZXJJZCwgXCJsaWtlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCByZWFjdGlvbkFwaS5kZWxldGVSZWFjdGlvbih1c2VyTGlrZVJlYWN0aW9uSWQpO1xuICAgICAgdXBkYXRlUmV2aWV3cygpO1xuICAgICAgY2hlY2tJc0xpa2VkQnlVc2VyKCk7XG4gICAgfVxuICAgIHVwZGF0ZVJldmlld3MoKTtcbiAgICBjaGVja0lzTGlrZWRCeVVzZXIoKTtcblxuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUNvbW1lbnRNb2RhbFZpc2liaWxpdHkgPSAoKSA9PiB7XG4gICAgaWYgKCFpc0xvZ2dlZEluKSB7XG4gICAgICB0cmlnZ2VyUmVxdWlyZUxvZ2luTWVzc2FnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRBZGRDb21tZW50TW9kYWxWaXNpYmlsaXR5KHRydWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy51c2VySW5mb3JtYXRpb259PlxuICAgICAgICAgIDxzcGFuPntuYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLmRpdmlkZXJ9Pnw8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBBWXthY2FkWWVhclRha2VufSwgU2VtIHtzZW1lc3RlclRha2VufVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLmRpdmlkZXJ9Pnw8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+RGlmZmljdWx0eToge2RpZmZpY3VsdHkudG9GaXhlZCgxKX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5kaXZpZGVyfT58PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlJhdGluZzoge3N0YXIudG9GaXhlZCgxKX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2hvd0FjdGlvbnMgJiYgKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5hY3Rpb25zQmFyfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5hY3Rpb259PlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uTGlrZVJldmlld30+XG4gICAgICAgICAgICAgICAgPExpa2VPdXRsaW5lZEljb25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlcy5pY29uLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdXNlckxpa2VSZWFjdGlvbklkID8gcmF0aW5nc1llbGxvdyA6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPHNwYW4+e2Ake2xpa2V9IExpa2VzYH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbjogXCIwcHggMTBweFwiIH19Pnw8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYWN0aW9ufT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVDb21tZW50TW9kYWxWaXNpYmlsaXR5fT5cbiAgICAgICAgICAgICAgICA8Q29tbWVudE91dGxpbmVkSWNvbiBzdHlsZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvbW1lbnRzTW9kYWxWaXNpYmlsaXR5KHRydWUpfT5cbiAgICAgICAgICAgICAgICB7YCR7Y29tbWVudHMubGVuZ3RofSBDb21tZW50c2B9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5yZXZpZXd9Pnt0ZXh0fTwvZGl2PlxuICAgICAgPEFkZENvbW1lbnRNb2RhbFxuICAgICAgICBmZXRjaENvbW1lbnRzPXtmZXRjaENvbW1lbnRzfVxuICAgICAgICByZXZpZXdJZD17X2lkfVxuICAgICAgICBpc01vZGFsVmlzaWJsZT17aXNBZGRDb21tZW50TW9kYWxWaXNpYmxlfVxuICAgICAgICBzZXRNb2RhbFZpc2liaWxpdHk9e3NldEFkZENvbW1lbnRNb2RhbFZpc2liaWxpdHl9XG4gICAgICAvPlxuICAgICAgPENvbW1lbnRNb2RhbFxuICAgICAgICBjb21tZW50cz17Y29tbWVudHN9XG4gICAgICAgIGlzTW9kYWxWaXNpYmxlPXtpc0NvbW1lbnRzTW9kYWxWaXNpYmxlfVxuICAgICAgICBzZXRNb2RhbFZpc2liaWxpdHk9e3NldENvbW1lbnRzTW9kYWxWaXNpYmlsaXR5fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgcGFkZGluZzogMzAsXG4gICAgYmFja2dyb3VuZENvbG9yOiByZXZpZXdCbHVlLFxuICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICBib3JkZXJSYWRpdXM6IDE1LFxuICAgIGJveFNoYWRvdzogXCIwcHggOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjUpXCIsXG4gICAgbWFyZ2luQm90dG9tOiAxNSxcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgfSxcbiAgdXNlckluZm9ybWF0aW9uOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleFdyYXA6IFwid3JhcFwiIGFzIFwid3JhcFwiLFxuICB9LFxuICBhY3Rpb25zQmFyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gIH0sXG4gIGFjdGlvbjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICB9LFxuICBpY29uOiB7XG4gICAgaGVpZ2h0OiAyMCxcbiAgICBtYXJnaW5SaWdodDogMTAsXG4gIH0sXG4gIHJldmlldzoge1xuICAgIG1hcmdpblRvcDogMTAsXG4gICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIiBhcyBcImp1c3RpZnlcIixcbiAgfSxcbiAgZGl2aWRlcjoge1xuICAgIG1hcmdpbjogXCIwcHggMTBweFwiLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3Q2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ReviewCard.tsx\n");

/***/ })

})