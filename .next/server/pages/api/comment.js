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
exports.id = "pages/api/comment";
exports.ids = ["pages/api/comment"];
exports.modules = {

/***/ "(api)/./data/coments.js":
/*!*************************!*\
  !*** ./data/coments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"comments\": () => (/* binding */ comments)\n/* harmony export */ });\nconst comments = [{\n  id: 1,\n  text: \"this is first comment\"\n}, {\n  id: 2,\n  text: \"this is second comment\"\n}, {\n  id: 3,\n  text: \"this is third comment\"\n}];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhL2NvbWVudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFFBQVEsR0FBQyxDQUNsQjtBQUNJQyxFQUFBQSxFQUFFLEVBQUMsQ0FEUDtBQUVJQyxFQUFBQSxJQUFJLEVBQUM7QUFGVCxDQURrQixFQUtsQjtBQUNJRCxFQUFBQSxFQUFFLEVBQUMsQ0FEUDtBQUVJQyxFQUFBQSxJQUFJLEVBQUM7QUFGVCxDQUxrQixFQVNsQjtBQUNJRCxFQUFBQSxFQUFFLEVBQUMsQ0FEUDtBQUVJQyxFQUFBQSxJQUFJLEVBQUM7QUFGVCxDQVRrQixDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vZGF0YS9jb21lbnRzLmpzPzFmOWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbW1lbnRzPVtcclxuICAgIHtcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIHRleHQ6XCJ0aGlzIGlzIGZpcnN0IGNvbW1lbnRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDoyLFxyXG4gICAgICAgIHRleHQ6XCJ0aGlzIGlzIHNlY29uZCBjb21tZW50XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6MyxcclxuICAgICAgICB0ZXh0OlwidGhpcyBpcyB0aGlyZCBjb21tZW50XCJcclxuICAgIH0sXHJcbl1cclxuIl0sIm5hbWVzIjpbImNvbW1lbnRzIiwiaWQiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./data/coments.js\n");

/***/ }),

/***/ "(api)/./pages/api/comment/index.js":
/*!************************************!*\
  !*** ./pages/api/comment/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _data_coments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/coments */ \"(api)/./data/coments.js\");\n\nfunction handler(req, res) {\n  if (req.method == 'GET') {\n    res.status(200).json(_data_coments__WEBPACK_IMPORTED_MODULE_0__.comments);\n  } else if (req.method === 'POST') {\n    const comment = req.body.comment;\n    console.log(comment);\n    const newComment = {\n      id: Date.now(),\n      text: comment\n    };\n    console.log(newComment);\n    _data_coments__WEBPACK_IMPORTED_MODULE_0__.comments.push(newComment);\n    res.status(201).json(newComment);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ2UsU0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBcUJDLEdBQXJCLEVBQXlCO0FBQ3BDLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixJQUFZLEtBQWYsRUFBcUI7QUFDckJELElBQUFBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCTixtREFBckI7QUFDQyxHQUZELE1BR0ssSUFBR0UsR0FBRyxDQUFDRSxNQUFKLEtBQWMsTUFBakIsRUFBd0I7QUFDekIsVUFBTUcsT0FBTyxHQUFDTCxHQUFHLENBQUNNLElBQUosQ0FBU0QsT0FBdkI7QUFDQUUsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILE9BQVo7QUFDQSxVQUFNSSxVQUFVLEdBQUM7QUFDakJDLE1BQUFBLEVBQUUsRUFBQ0MsSUFBSSxDQUFDQyxHQUFMLEVBRGM7QUFFakJDLE1BQUFBLElBQUksRUFBQ1I7QUFGWSxLQUFqQjtBQUtKRSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBWjtBQUNBWCxJQUFBQSx3REFBQSxDQUFjVyxVQUFkO0FBQ0FSLElBQUFBLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSyxVQUFyQjtBQUNIO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9hcGkvY29tbWVudC9pbmRleC5qcz9kZGZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tbWVudHN9IGZyb20gJy4uLy4uLy4uL2RhdGEvY29tZW50cydcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcclxuICAgIGlmKHJlcS5tZXRob2Q9PSdHRVQnKXtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNvbW1lbnRzKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihyZXEubWV0aG9kID09PSdQT1NUJyl7XHJcbiAgICAgICAgY29uc3QgY29tbWVudD1yZXEuYm9keS5jb21tZW50XHJcbiAgICAgICAgY29uc29sZS5sb2coY29tbWVudClcclxuICAgICAgICBjb25zdCBuZXdDb21tZW50PXsgICAgICBcclxuICAgICAgICBpZDpEYXRlLm5vdygpLFxyXG4gICAgICAgIHRleHQ6Y29tbWVudCxcclxuXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhuZXdDb21tZW50KVxyXG4gICAgY29tbWVudHMucHVzaChuZXdDb21tZW50KVxyXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24obmV3Q29tbWVudClcclxufVxyXG5cclxufSJdLCJuYW1lcyI6WyJjb21tZW50cyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiY29tbWVudCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwibmV3Q29tbWVudCIsImlkIiwiRGF0ZSIsIm5vdyIsInRleHQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/comment/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comment/index.js"));
module.exports = __webpack_exports__;

})();