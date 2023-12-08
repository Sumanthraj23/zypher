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
exports.id = "pages/api/socket";
exports.ids = ["pages/api/socket"];
exports.modules = {

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("socket.io");;

/***/ }),

/***/ "(api)/./src/pages/api/socket.ts":
/*!*********************************!*\
  !*** ./src/pages/api/socket.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SocketHandler)\n/* harmony export */ });\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ \"socket.io\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io__WEBPACK_IMPORTED_MODULE_0__]);\nsocket_io__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction SocketHandler(req, res) {\n    if (!res.socket.server.io) {\n        console.log(\"oyasumi\");\n        const httpServer = res.socket.server;\n        const io = new socket_io__WEBPACK_IMPORTED_MODULE_0__.Server(httpServer, {\n            path: \"/api/socket\"\n        });\n        res.socket.server.io = io;\n    }\n    res.end();\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NvY2tldC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUcrQztBQUVoQyxTQUFTRSxjQUN0QkMsR0FBbUIsRUFDbkJDLEdBQTRCLEVBQzVCO0lBQ0EsSUFBSSxDQUFDQSxJQUFJQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsRUFBRSxFQUFFO1FBQ3pCQyxRQUFRQyxHQUFHLENBQUM7UUFFWixNQUFNQyxhQUF3Qk4sSUFBSUMsTUFBTSxDQUFDQyxNQUFNO1FBQy9DLE1BQU1DLEtBQUssSUFBSU4sNkNBQVFBLENBQUNTLFlBQVk7WUFBRUMsTUFBTTtRQUFjO1FBQzFEUCxJQUFJQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsRUFBRSxHQUFHQTtJQUN6QixDQUFDO0lBQ0RILElBQUlRLEdBQUc7QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdC1hcHAvLi9zcmMvcGFnZXMvYXBpL3NvY2tldC50cz8zMzMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXNwb25zZVNlcnZlcklPIH0gZnJvbSBcIi4uLy4uL3R5cGVzL25leHRcIjtcclxuaW1wb3J0IHsgU2VydmVyIGFzIE5ldFNlcnZlciB9IGZyb20gXCJodHRwXCI7XHJcbmltcG9ydCB7IFNlcnZlciBhcyBTZXJ2ZXJJTyB9IGZyb20gXCJzb2NrZXQuaW9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvY2tldEhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZVNlcnZlcklPXHJcbikge1xyXG4gIGlmICghcmVzLnNvY2tldC5zZXJ2ZXIuaW8pIHtcclxuICAgIGNvbnNvbGUubG9nKFwib3lhc3VtaVwiKTtcclxuXHJcbiAgICBjb25zdCBodHRwU2VydmVyOiBOZXRTZXJ2ZXIgPSByZXMuc29ja2V0LnNlcnZlciBhcyBhbnk7XHJcbiAgICBjb25zdCBpbyA9IG5ldyBTZXJ2ZXJJTyhodHRwU2VydmVyLCB7IHBhdGg6IFwiL2FwaS9zb2NrZXRcIiB9KTtcclxuICAgIHJlcy5zb2NrZXQuc2VydmVyLmlvID0gaW87XHJcbiAgfVxyXG4gIHJlcy5lbmQoKTtcclxufVxyXG4iXSwibmFtZXMiOlsiU2VydmVyIiwiU2VydmVySU8iLCJTb2NrZXRIYW5kbGVyIiwicmVxIiwicmVzIiwic29ja2V0Iiwic2VydmVyIiwiaW8iLCJjb25zb2xlIiwibG9nIiwiaHR0cFNlcnZlciIsInBhdGgiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/socket.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/socket.ts"));
module.exports = __webpack_exports__;

})();