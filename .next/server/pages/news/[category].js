"use strict";
(() => {
var exports = {};
exports.id = 144;
exports.ids = [144];
exports.modules = {

/***/ 1773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function categoryList({
  articles,
  category
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
      children: ["Showing news for category ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
        children: category
      })]
    }), articles.map(article => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
          children: [article.id, article.title]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          children: article.description
        })]
      }, article.id);
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (categoryList);
async function getServerSideProps(context) {
  const {
    params,
    req,
    res,
    query
  } = context;
  console.log(query);
  console.log(req.headers.cookie);
  res.setHeader('Set-Cookie', ['name=Pankaj']);
  const {
    category
  } = params;
  const response = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await response.json();
  return {
    props: {
      articles: data,
      category
    }
  };
}

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1773));
module.exports = __webpack_exports__;

})();