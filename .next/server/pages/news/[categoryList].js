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
exports.id = "pages/news/[categoryList]";
exports.ids = ["pages/news/[categoryList]"];
exports.modules = {

/***/ "./pages/news/[categoryList].js":
/*!**************************************!*\
  !*** ./pages/news/[categoryList].js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"E:\\\\Nextjs2\\\\my-app\\\\pages\\\\news\\\\[categoryList].js\";\n\n\nfunction categoryList({\n  articles,\n  category\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: [\"Showing news for category \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n        children: category\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 4,\n        columnNumber: 39\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 9\n    }, this), articles.map(article => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: [article.id, article.title]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: article.desription\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 25\n        }, this)]\n      }, article.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 21\n      }, this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoryList);\nasync function getServerSideProps(context) {\n  const {\n    params\n  } = context;\n  const {\n    category\n  } = params;\n  const response = await fetch(`http://localhost:4000/news?category=${category}`);\n  const data = await response.json();\n  return {\n    props: {\n      articles: data,\n      category: category\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzL1tjYXRlZ29yeUxpc3RdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxZQUFULENBQXNCO0FBQUNDLEVBQUFBLFFBQUQ7QUFBVUMsRUFBQUE7QUFBVixDQUF0QixFQUEyQztBQUN6QyxzQkFDRTtBQUFBLDRCQUNJO0FBQUEsNERBQThCO0FBQUEsa0JBQUlBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUdRRCxRQUFRLENBQUNFLEdBQVQsQ0FBYUMsT0FBTyxJQUFFO0FBQ2xCLDBCQUNJO0FBQUEsZ0NBQ0k7QUFBQSxxQkFDS0EsT0FBTyxDQUFDQyxFQURiLEVBQ2lCRCxPQUFPLENBQUNFLEtBRHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUlJO0FBQUEsb0JBQUlGLE9BQU8sQ0FBQ0c7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUEsU0FBV0gsT0FBTyxDQUFDQyxFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFRSCxLQVRELENBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7O0FBRUQsaUVBQWVMLFlBQWY7QUFFTyxlQUFlUSxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMEM7QUFDN0MsUUFBTTtBQUFDQyxJQUFBQTtBQUFELE1BQVVELE9BQWhCO0FBQ0EsUUFBTTtBQUFDUCxJQUFBQTtBQUFELE1BQVdRLE1BQWpCO0FBQ0EsUUFBTUMsUUFBUSxHQUFDLE1BQU1DLEtBQUssQ0FBRSx1Q0FBc0NWLFFBQVMsRUFBakQsQ0FBMUI7QUFDQyxRQUFNVyxJQUFJLEdBQUUsTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQWxCO0FBQ0EsU0FBTztBQUNIQyxJQUFBQSxLQUFLLEVBQUM7QUFDRmQsTUFBQUEsUUFBUSxFQUFDWSxJQURQO0FBRUZYLE1BQUFBLFFBQVEsRUFBQ0E7QUFGUDtBQURILEdBQVA7QUFPSiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL25ld3MvW2NhdGVnb3J5TGlzdF0uanM/MjEzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjYXRlZ29yeUxpc3Qoe2FydGljbGVzLGNhdGVnb3J5fSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5TaG93aW5nIG5ld3MgZm9yIGNhdGVnb3J5IDxpPntjYXRlZ29yeX08L2k+PC9oMT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFydGljbGVzLm1hcChhcnRpY2xlPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXkgPXthcnRpY2xlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FydGljbGUuaWR9e2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnthcnRpY2xlLmRlc3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGVnb3J5TGlzdFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcclxuICAgIGNvbnN0IHtwYXJhbXN9PSBjb250ZXh0XHJcbiAgICBjb25zdCB7Y2F0ZWdvcnl9PXBhcmFtc1xyXG4gICAgY29uc3QgcmVzcG9uc2U9YXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9uZXdzP2NhdGVnb3J5PSR7Y2F0ZWdvcnl9YClcclxuICAgICBjb25zdCBkYXRhID1hd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICByZXR1cm4ge1xyXG4gICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgICBhcnRpY2xlczpkYXRhLFxyXG4gICAgICAgICAgICAgY2F0ZWdvcnk6Y2F0ZWdvcnksXHJcblxyXG4gICAgICAgICB9LFxyXG4gICAgIH1cclxufSJdLCJuYW1lcyI6WyJjYXRlZ29yeUxpc3QiLCJhcnRpY2xlcyIsImNhdGVnb3J5IiwibWFwIiwiYXJ0aWNsZSIsImlkIiwidGl0bGUiLCJkZXNyaXB0aW9uIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInBhcmFtcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/news/[categoryList].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/news/[categoryList].js"));
module.exports = __webpack_exports__;

})();