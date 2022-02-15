"use strict";
(() => {
var exports = {};
exports.id = 848;
exports.ids = [848];
exports.modules = {

/***/ 4773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);




function Post({
  post
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
      children: [post.id, " ", post.title]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      children: post.body
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);
async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map(post => {
    return {
      params: {
        postid: `${post.id}`
      }
    };
  });
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps(context) {
  const {
    params
  } = context;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`);
  const data = await response.json();
  return {
    props: {
      post: data
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
var __webpack_exports__ = (__webpack_exec__(4773));
module.exports = __webpack_exports__;

})();