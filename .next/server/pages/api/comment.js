"use strict";
(() => {
var exports = {};
exports.id = 74;
exports.ids = [74];
exports.modules = {

/***/ 1079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./data/coments.js
const comments = [{
  id: 1,
  text: "this is first comment"
}, {
  id: 2,
  text: "this is second comment"
}, {
  id: 3,
  text: "this is third comment"
}];
;// CONCATENATED MODULE: ./pages/api/comment/index.js

function handler(req, res) {
  if (req.method == 'GET') {
    res.status(200).json(comments);
  } else if (req.method === 'POST') {
    const comment = req.body.comment;
    console.log(comment);
    const newComment = {
      id: Date.now(),
      text: comment
    };
    console.log(newComment);
    comments.push(newComment);
    res.status(201).json(newComment);
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1079));
module.exports = __webpack_exports__;

})();