"use strict";
(() => {
var exports = {};
exports.id = 695;
exports.ids = [695];
exports.modules = {

/***/ 8896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






function Events({
  eventList
}) {
  const {
    0: events,
    1: setEvents
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(eventList);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  const fetchSportsEvents = async () => {
    const response = await fetch(`http://localhost:4000/events?category=bollywood`);
    const data = await response.json();
    setEvents(data);
    router.push('/events?category=sports', undefined, {
      shallow: true
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
      onClick: fetchSportsEvents,
      children: "Bollywood Events"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("h1", {
      children: "List of event"
    }), events.map(event => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h2", {
          children: [event.id, " ", event.title, " |", event.category]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
          children: event.description
        })]
      }, event.id);
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Events);
async function getServerSideProps(context) {
  const {
    query
  } = context;
  const {
    category
  } = query;
  const queryString = category ? 'category=bollywood' : '';
  const response = await fetch(`http://localhost:4000/events${queryString}`);
  const data = await response.json();
  return {
    props: {
      eventList: data
    }
  };
}

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8896));
module.exports = __webpack_exports__;

})();