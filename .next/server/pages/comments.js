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
exports.id = "pages/comments";
exports.ids = ["pages/comments"];
exports.modules = {

/***/ "./pages/comments/index.js":
/*!*********************************!*\
  !*** ./pages/comments/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"E:\\\\Nextjs2\\\\my-app\\\\pages\\\\comments\\\\index.js\";\n\n\n\nfunction index() {\n  const {\n    0: comments,\n    1: setComments\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const {\n    0: comment,\n    1: setComment\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n\n  const fetchComments = async () => {\n    const response = await fetch('/api/comment');\n    const data = await response.json();\n    setComments(data);\n  };\n\n  const submit = async () => {\n    const response = await fetch('api/comment', {\n      method: 'POST',\n      body: JSON.stringify({\n        comment\n      }),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    });\n    const data = await response.json();\n    console.log(data);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    style: {\n      textAlign: \"center\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n      type: \"text\",\n      value: comment,\n      onChange: e => setComment(e.target.value)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      onClick: submit,\n      children: \"Submit\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n      onClick: fetchComments,\n      children: \"Load comments\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }, this), comments.map(comment => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [comment.id, \" \", comment.text]\n      }, comment.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 21\n      }, this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21tZW50cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7O0FBQ0EsU0FBU0MsS0FBVCxHQUFpQjtBQUNiLFFBQUs7QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF1QkgsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBSztBQUFBLE9BQUNJLE9BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXFCTCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7O0FBRUEsUUFBTU0sYUFBYSxHQUFDLFlBQVM7QUFDekIsVUFBTUMsUUFBUSxHQUFDLE1BQU1DLEtBQUssQ0FBQyxjQUFELENBQTFCO0FBQ0EsVUFBTUMsSUFBSSxHQUFFLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFsQjtBQUNBUCxJQUFBQSxXQUFXLENBQUNNLElBQUQsQ0FBWDtBQUNILEdBSkQ7O0FBS0EsUUFBTUUsTUFBTSxHQUFDLFlBQVM7QUFDbEIsVUFBTUosUUFBUSxHQUFDLE1BQU1DLEtBQUssQ0FBQyxhQUFELEVBQWU7QUFDckNJLE1BQUFBLE1BQU0sRUFBQyxNQUQ4QjtBQUVyQ0MsTUFBQUEsSUFBSSxFQUFDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDWCxRQUFBQTtBQUFELE9BQWYsQ0FGZ0M7QUFHckNZLE1BQUFBLE9BQU8sRUFBQztBQUNKLHdCQUFlO0FBRFg7QUFINkIsS0FBZixDQUExQjtBQU9BLFVBQU1QLElBQUksR0FBRSxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbEI7QUFDQU8sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULElBQVo7QUFDSCxHQVZEOztBQVlGLHNCQUNFO0FBQUssU0FBSyxFQUFFO0FBQUNVLE1BQUFBLFNBQVMsRUFBQztBQUFYLEtBQVo7QUFBQSw0QkFDSTtBQUFPLFVBQUksRUFBQyxNQUFaO0FBQ0MsV0FBSyxFQUFFZixPQURSO0FBRUUsY0FBUSxFQUFHZ0IsQ0FBRCxJQUFLZixVQUFVLENBQUNlLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWO0FBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJO0FBQVEsYUFBTyxFQUFFWCxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKLGVBTUk7QUFBUSxhQUFPLEVBQUVMLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosRUFRUUosUUFBUSxDQUFDcUIsR0FBVCxDQUFhbkIsT0FBTyxJQUFFO0FBQ2xCLDBCQUNJO0FBQUEsbUJBQ0tBLE9BQU8sQ0FBQ29CLEVBRGIsT0FDa0JwQixPQUFPLENBQUNxQixJQUQxQjtBQUFBLFNBQVVyQixPQUFPLENBQUNvQixFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFLSCxLQU5ELENBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0FBRUQsaUVBQWV2QixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvY29tbWVudHMvaW5kZXguanM/MjU4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmZ1bmN0aW9uIGluZGV4KCkge1xyXG4gICAgY29uc3RbY29tbWVudHMsc2V0Q29tbWVudHNdPXVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3RbY29tbWVudCxzZXRDb21tZW50XT11c2VTdGF0ZSgnJylcclxuXHJcbiAgICBjb25zdCBmZXRjaENvbW1lbnRzPWFzeW5jKCk9PntcclxuICAgICAgICBjb25zdCByZXNwb25zZT1hd2FpdCBmZXRjaCgnL2FwaS9jb21tZW50JylcclxuICAgICAgICBjb25zdCBkYXRhID1hd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBzZXRDb21tZW50cyhkYXRhKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3VibWl0PWFzeW5jKCk9PntcclxuICAgICAgICBjb25zdCByZXNwb25zZT1hd2FpdCBmZXRjaCgnYXBpL2NvbW1lbnQnLHtcclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7Y29tbWVudH0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgZGF0YSA9YXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIn19PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICB2YWx1ZT17Y29tbWVudH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17ZmV0Y2hDb21tZW50c30+TG9hZCBjb21tZW50czwvYnV0dG9uPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29tbWVudHMubWFwKGNvbW1lbnQ9PntcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y29tbWVudC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb21tZW50LmlkfSB7Y29tbWVudC50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiaW5kZXgiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwiY29tbWVudCIsInNldENvbW1lbnQiLCJmZXRjaENvbW1lbnRzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwic3VibWl0IiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsInRleHRBbGlnbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImlkIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/comments/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/comments/index.js"));
module.exports = __webpack_exports__;

})();