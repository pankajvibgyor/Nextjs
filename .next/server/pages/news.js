"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/news";
exports.ids = ["pages/news"];
exports.modules = {

/***/ "./pages/news/index.js":
/*!*****************************!*\
  !*** ./pages/news/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"E:\\\\Nextjs2\\\\my-app\\\\pages\\\\news\\\\index.js\";\n\n\n\nfunction NewsArticleList({\n  articles\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"List of News Atricles\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 6\n    }, this), articles.map(article => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: [article.id, article.title, \"|\", article.category]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 21\n        }, this)\n      }, article.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 17\n      }, this);\n    })]\n  }, void 0, true);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewsArticleList);\nasync function getServerSideProps() {\n  const response = await fetch(\"http://localhost:4000/news\");\n  const data = await response.json();\n  return {\n    props: {\n      articles: data\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsZUFBVCxDQUF5QjtBQUFDQyxFQUFBQTtBQUFELENBQXpCLEVBQW9DO0FBQ2hDLHNCQUNBO0FBQUEsNEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxFQUdJQSxRQUFRLENBQUNDLEdBQVQsQ0FBY0MsT0FBTyxJQUFFO0FBQ25CLDBCQUNJO0FBQUEsK0JBQ0k7QUFBQSxxQkFDS0EsT0FBTyxDQUFDQyxFQURiLEVBRUtELE9BQU8sQ0FBQ0UsS0FGYixPQUdLRixPQUFPLENBQUNHLFFBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FBVUgsT0FBTyxDQUFDQyxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFTSCxLQVZELENBSEo7QUFBQSxrQkFEQTtBQWtCSDs7QUFDRCxpRUFBZUosZUFBZjtBQUVPLGVBQWVPLGtCQUFmLEdBQW1DO0FBQ3RDLFFBQU1DLFFBQVEsR0FBRSxNQUFNQyxLQUFLLENBQUMsNEJBQUQsQ0FBM0I7QUFDQSxRQUFNQyxJQUFJLEdBQUUsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQWxCO0FBQ0EsU0FBTTtBQUNGQyxJQUFBQSxLQUFLLEVBQUM7QUFDRlgsTUFBQUEsUUFBUSxFQUFDUztBQURQO0FBREosR0FBTjtBQUtIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvbmV3cy9pbmRleC5qcz83YWEyIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIE5ld3NBcnRpY2xlTGlzdCh7YXJ0aWNsZXN9KXtcclxuICAgIHJldHVybihcclxuICAgIDw+XHJcbiAgICAgPGgxPkxpc3Qgb2YgTmV3cyBBdHJpY2xlczwvaDE+XHJcbiAgICB7XHJcbiAgICAgICAgYXJ0aWNsZXMubWFwKChhcnRpY2xlPT57XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXthcnRpY2xlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YXJ0aWNsZS50aXRsZX18XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG48Lz5cclxuKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NBcnRpY2xlTGlzdFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpe1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPWF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL25ld3NcIilcclxuICAgIGNvbnN0IGRhdGEgPWF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgYXJ0aWNsZXM6ZGF0YVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiTmV3c0FydGljbGVMaXN0IiwiYXJ0aWNsZXMiLCJtYXAiLCJhcnRpY2xlIiwiaWQiLCJ0aXRsZSIsImNhdGVnb3J5IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/news/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/news/index.js"));
module.exports = __webpack_exports__;

})();