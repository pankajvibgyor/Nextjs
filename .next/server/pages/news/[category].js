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
exports.id = "pages/news/[category]";
exports.ids = ["pages/news/[category]"];
exports.modules = {

/***/ "./pages/news/[category].js":
/*!**********************************!*\
  !*** ./pages/news/[category].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"E:\\\\Nextjs2\\\\my-app\\\\pages\\\\news\\\\[category].js\";\n\n\nfunction categoryList({\n  articles,\n  category\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: [\"Showing news for category \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n        children: category\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 4,\n        columnNumber: 39\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 9\n    }, this), articles.map(article => {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n          children: [article.id, article.title]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 25\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: article.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 25\n        }, this)]\n      }, article.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 21\n      }, this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoryList);\nasync function getServerSideProps(context) {\n  const {\n    params,\n    req,\n    res,\n    query\n  } = context;\n  console.log(query);\n  console.log(req.headers.cookie);\n  res.setHeader('Set-Cookie', ['name=Pankaj']);\n  const {\n    category\n  } = params;\n  const response = await fetch(`http://localhost:4000/news?category=${category}`);\n  const data = await response.json();\n  return {\n    props: {\n      articles: data,\n      category\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXdzL1tjYXRlZ29yeV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFNBQVNBLFlBQVQsQ0FBc0I7QUFBQ0MsRUFBQUEsUUFBRDtBQUFVQyxFQUFBQTtBQUFWLENBQXRCLEVBQTJDO0FBQ3pDLHNCQUNFO0FBQUEsNEJBQ0k7QUFBQSw0REFBOEI7QUFBQSxrQkFBSUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBR1FELFFBQVEsQ0FBQ0UsR0FBVCxDQUFhQyxPQUFPLElBQUU7QUFDbEIsMEJBQ0k7QUFBQSxnQ0FDSTtBQUFBLHFCQUNLQSxPQUFPLENBQUNDLEVBRGIsRUFDaUJELE9BQU8sQ0FBQ0UsS0FEekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUk7QUFBQSxvQkFBSUYsT0FBTyxDQUFDRztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSko7QUFBQSxTQUFXSCxPQUFPLENBQUNDLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQVFILEtBVEQsQ0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtCRDs7QUFFRCxpRUFBZUwsWUFBZjtBQUVPLGVBQWVRLGtCQUFmLENBQWtDQyxPQUFsQyxFQUEwQztBQUM3QyxRQUFNO0FBQUNDLElBQUFBLE1BQUQ7QUFBUUMsSUFBQUEsR0FBUjtBQUFZQyxJQUFBQSxHQUFaO0FBQWdCQyxJQUFBQTtBQUFoQixNQUF3QkosT0FBOUI7QUFDQUssRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEdBQUcsQ0FBQ0ssT0FBSixDQUFZQyxNQUF4QjtBQUNBTCxFQUFBQSxHQUFHLENBQUNNLFNBQUosQ0FBYyxZQUFkLEVBQTJCLENBQUMsYUFBRCxDQUEzQjtBQUNBLFFBQU07QUFBQ2hCLElBQUFBO0FBQUQsTUFBV1EsTUFBakI7QUFDQSxRQUFNUyxRQUFRLEdBQUMsTUFBTUMsS0FBSyxDQUFFLHVDQUFzQ2xCLFFBQVMsRUFBakQsQ0FBMUI7QUFDQyxRQUFNbUIsSUFBSSxHQUFFLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFsQjtBQUNBLFNBQU87QUFDSEMsSUFBQUEsS0FBSyxFQUFDO0FBQ0Z0QixNQUFBQSxRQUFRLEVBQUNvQixJQURQO0FBRUZuQixNQUFBQTtBQUZFO0FBREgsR0FBUDtBQU9KIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvbmV3cy9bY2F0ZWdvcnldLmpzP2M3OGMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2F0ZWdvcnlMaXN0KHthcnRpY2xlcyxjYXRlZ29yeX0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDE+U2hvd2luZyBuZXdzIGZvciBjYXRlZ29yeSA8aT57Y2F0ZWdvcnl9PC9pPjwvaDE+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhcnRpY2xlcy5tYXAoYXJ0aWNsZT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5ID17YXJ0aWNsZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlLmlkfXthcnRpY2xlLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0ZWdvcnlMaXN0XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpe1xyXG4gICAgY29uc3Qge3BhcmFtcyxyZXEscmVzLHF1ZXJ5fT0gY29udGV4dFxyXG4gICAgY29uc29sZS5sb2cocXVlcnkpXHJcbiAgICBjb25zb2xlLmxvZyhyZXEuaGVhZGVycy5jb29raWUpXHJcbiAgICByZXMuc2V0SGVhZGVyKCdTZXQtQ29va2llJyxbJ25hbWU9UGFua2FqJ10pXHJcbiAgICBjb25zdCB7Y2F0ZWdvcnl9PXBhcmFtc1xyXG4gICAgY29uc3QgcmVzcG9uc2U9YXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9uZXdzP2NhdGVnb3J5PSR7Y2F0ZWdvcnl9YClcclxuICAgICBjb25zdCBkYXRhID1hd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICByZXR1cm4ge1xyXG4gICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgICBhcnRpY2xlczpkYXRhLFxyXG4gICAgICAgICAgICAgY2F0ZWdvcnksXHJcblxyXG4gICAgICAgICB9LFxyXG4gICAgIH1cclxufSJdLCJuYW1lcyI6WyJjYXRlZ29yeUxpc3QiLCJhcnRpY2xlcyIsImNhdGVnb3J5IiwibWFwIiwiYXJ0aWNsZSIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJoZWFkZXJzIiwiY29va2llIiwic2V0SGVhZGVyIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/news/[category].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/news/[category].js"));
module.exports = __webpack_exports__;

})();