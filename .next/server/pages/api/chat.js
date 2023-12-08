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
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "(api)/./src/pages/api/chat.ts":
/*!*******************************!*\
  !*** ./src/pages/api/chat.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ChatHandler)\n/* harmony export */ });\nfunction ChatHandler(req, res) {\n    if (req.method === \"POST\") {\n        const message = req.body;\n        res?.socket?.server?.io?.emit(\"message\", message);\n        res.status(201).json(message);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2NoYXQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUdlLFNBQVNBLFlBQ3RCQyxHQUFtQixFQUNuQkMsR0FBNEIsRUFDNUI7SUFDQSxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNQyxVQUFVSCxJQUFJSSxJQUFJO1FBQ3hCSCxLQUFLSSxRQUFRQyxRQUFRQyxJQUFJQyxLQUFLLFdBQVdMO1FBQ3pDRixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUDtJQUN2QixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXQtYXBwLy4vc3JjL3BhZ2VzL2FwaS9jaGF0LnRzPzcyOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlc3BvbnNlU2VydmVySU8gfSBmcm9tIFwiLi4vLi4vdHlwZXMvbmV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdEhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZVNlcnZlcklPXHJcbikge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IHJlcS5ib2R5O1xyXG4gICAgcmVzPy5zb2NrZXQ/LnNlcnZlcj8uaW8/LmVtaXQoXCJtZXNzYWdlXCIsIG1lc3NhZ2UpO1xyXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24obWVzc2FnZSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDaGF0SGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm1lc3NhZ2UiLCJib2R5Iiwic29ja2V0Iiwic2VydmVyIiwiaW8iLCJlbWl0Iiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/chat.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/chat.ts"));
module.exports = __webpack_exports__;

})();