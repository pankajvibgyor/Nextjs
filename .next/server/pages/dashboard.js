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
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"E:\\\\Nextjs2\\\\my-app\\\\pages\\\\dashboard.js\";\n\n\n\nfunction Dashboard() {\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const {\n    0: dashboardData,\n    1: setDashboardData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    async function fetchDashboardData() {\n      const response = await fetch('http://localhost:4000/dashboard');\n      const data = await response.json();\n      setDashboardData(data);\n      setIsLoading(false);\n    }\n\n    fetchDashboardData();\n  }, []);\n\n  if (isLoading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n      children: \"loading....\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 16\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n      children: \"Dashboard\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n      children: [\"Posts -\", dashboardData.posts]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n      children: [\"Posts -\", dashboardData.likes]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n      children: [\"Posts -\", dashboardData.follower]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n      children: [\"Posts -\", dashboardData.following]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7OztBQUNBLFNBQVNFLFNBQVQsR0FBcUI7QUFDakIsUUFBSztBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQXlCSiwrQ0FBUSxDQUFDLElBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssYUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBaUNOLCtDQUFRLENBQUMsSUFBRCxDQUEvQztBQUNBQyxFQUFBQSxnREFBUyxDQUFDLE1BQUk7QUFDVixtQkFBZU0sa0JBQWYsR0FBbUM7QUFDL0IsWUFBTUMsUUFBUSxHQUFDLE1BQU1DLEtBQUssQ0FBQyxpQ0FBRCxDQUExQjtBQUNBLFlBQU1DLElBQUksR0FBQyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBakI7QUFDQUwsTUFBQUEsZ0JBQWdCLENBQUNJLElBQUQsQ0FBaEI7QUFDQU4sTUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNIOztBQUNERyxJQUFBQSxrQkFBa0I7QUFDckIsR0FSUSxFQVFQLEVBUk8sQ0FBVDs7QUFTQSxNQUFHSixTQUFILEVBQ0E7QUFDSSx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0g7O0FBQ0gsc0JBQ0U7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSw0QkFBWUUsYUFBYSxDQUFDTyxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQUEsNEJBQVlQLGFBQWEsQ0FBQ1EsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEosZUFJSTtBQUFBLDRCQUFZUixhQUFhLENBQUNTLFFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBS0k7QUFBQSw0QkFBWVQsYUFBYSxDQUFDVSxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVdEOztBQUVELGlFQUFlYixTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvZGFzaGJvYXJkLmpzPzBlNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XHJcbiAgICBjb25zdFtpc0xvYWRpbmcsc2V0SXNMb2FkaW5nXT11c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgW2Rhc2hib2FyZERhdGEsc2V0RGFzaGJvYXJkRGF0YV09dXNlU3RhdGUobnVsbClcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGFzaGJvYXJkRGF0YSgpe1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZT1hd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2Rhc2hib2FyZCcpXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGE9YXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIHNldERhc2hib2FyZERhdGEoZGF0YSlcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaERhc2hib2FyZERhdGEoKVxyXG4gICAgfSxbXSlcclxuICAgIGlmKGlzTG9hZGluZylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gPGgyPmxvYWRpbmcuLi4uPC9oMj5cclxuICAgIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+RGFzaGJvYXJkPC9oMj5cclxuICAgICAgICA8aDI+UG9zdHMgLXtkYXNoYm9hcmREYXRhLnBvc3RzfTwvaDI+ICAgICAgICAgICBcclxuICAgICAgICA8aDI+UG9zdHMgLXtkYXNoYm9hcmREYXRhLmxpa2VzfTwvaDI+ICAgICAgICAgICBcclxuICAgICAgICA8aDI+UG9zdHMgLXtkYXNoYm9hcmREYXRhLmZvbGxvd2VyfTwvaDI+ICAgICAgICAgICBcclxuICAgICAgICA8aDI+UG9zdHMgLXtkYXNoYm9hcmREYXRhLmZvbGxvd2luZ308L2gyPiAgICAgICAgICAgXHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGFzaGJvYXJkIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZGFzaGJvYXJkRGF0YSIsInNldERhc2hib2FyZERhdGEiLCJmZXRjaERhc2hib2FyZERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwb3N0cyIsImxpa2VzIiwiZm9sbG93ZXIiLCJmb2xsb3dpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/dashboard.js"));
module.exports = __webpack_exports__;

})();