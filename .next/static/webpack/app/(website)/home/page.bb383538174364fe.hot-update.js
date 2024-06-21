"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(website)/home/page",{

/***/ "(app-pages-browser)/./src/actions/get-All-Posts/action.ts":
/*!*********************************************!*\
  !*** ./src/actions/get-All-Posts/action.ts ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetAllPosts: function() { return /* binding */ GetAllPosts; }
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ "(app-pages-browser)/./node_modules/next/dist/client/app-call-server.js");
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");



function __build_action__(action, args) {
  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ {"14d12d0414af57b079c760653a39d47c3f6c2515":"GetAllPosts"} */ var GetAllPosts = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("14d12d0414af57b079c760653a39d47c3f6c2515");




;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/components/posts-list/component.tsx":
/*!*************************************************!*\
  !*** ./src/components/posts-list/component.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostsList: function() { return /* binding */ PostsList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts/component */ \"(app-pages-browser)/./src/components/posts/component.tsx\");\n/* harmony import */ var _actions_get_All_Posts_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/actions/get-All-Posts/action */ \"(app-pages-browser)/./src/actions/get-All-Posts/action.ts\");\n/* __next_internal_client_entry_do_not_use__ PostsList auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst NUMBER_OF_USERS_TO_FETCH = 10;\nasync function PostsList(param) {\n    let { posts } = param;\n    _s();\n    const [offset, setOffset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(NUMBER_OF_USERS_TO_FETCH);\n    const [lPosts, setLPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts.data);\n    const loadMoreUsers = async ()=>{\n        const apiUsers = await (0,_actions_get_All_Posts_action__WEBPACK_IMPORTED_MODULE_3__.GetAllPosts)(offset);\n        setLPosts([\n            ...lPosts,\n            ...apiUsers\n        ]);\n        setOffset(offset + NUMBER_OF_USERS_TO_FETCH);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: lPosts.map((post, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_posts_component__WEBPACK_IMPORTED_MODULE_2__.Post, {\n                data: post\n            }, post._id, false, {\n                fileName: \"/home/marcelo/projects/myposts-frontend/src/components/posts-list/component.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this))\n    }, void 0, false);\n}\n_s(PostsList, \"9RcRB1pxhf9i9bQe7VgomxQUJXQ=\");\n_c = PostsList;\n\nvar _c;\n$RefreshReg$(_c, \"PostsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Bvc3RzLWxpc3QvY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNpQztBQUNTO0FBRW1CO0FBRTdELE1BQU1HLDJCQUEyQjtBQUNqQyxlQUFlQyxVQUFVLEtBQThCO1FBQTlCLEVBQUVDLEtBQUssRUFBdUIsR0FBOUI7O0lBQ3ZCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQ0c7SUFDckMsTUFBTSxDQUFDSyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDSyxNQUFNSyxJQUFJO0lBRS9DLE1BQU1DLGdCQUFnQjtRQUNwQixNQUFNQyxXQUFXLE1BQU1WLDBFQUFXQSxDQUFDSTtRQUNuQ0csVUFBVTtlQUFJRDtlQUFXSTtTQUFTO1FBQ2xDTCxVQUFVRCxTQUFTSDtJQUNyQjtJQUVBLHFCQUNFO2tCQUNHSyxPQUFPSyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2pCLDhEQUFDZCxrREFBSUE7Z0JBQWdCUyxNQUFNSTtlQUFoQkEsS0FBS0UsR0FBRzs7Ozs7O0FBSTNCO0dBakJlWjtLQUFBQTtBQW1CTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9wb3N0cy1saXN0L2NvbXBvbmVudC50c3g/OGQ2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBQb3N0IH0gZnJvbSBcIi4uL3Bvc3RzL2NvbXBvbmVudFwiO1xuaW1wb3J0IHsgUG9zdERhdGEgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgR2V0QWxsUG9zdHMgfSBmcm9tIFwiQC9hY3Rpb25zL2dldC1BbGwtUG9zdHMvYWN0aW9uXCI7XG5cbmNvbnN0IE5VTUJFUl9PRl9VU0VSU19UT19GRVRDSCA9IDEwO1xuYXN5bmMgZnVuY3Rpb24gUG9zdHNMaXN0KHsgcG9zdHMgfTogeyBwb3N0czogUG9zdERhdGEgfSkge1xuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGUoTlVNQkVSX09GX1VTRVJTX1RPX0ZFVENIKTtcbiAgY29uc3QgW2xQb3N0cywgc2V0TFBvc3RzXSA9IHVzZVN0YXRlKHBvc3RzLmRhdGEpO1xuXG4gIGNvbnN0IGxvYWRNb3JlVXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYXBpVXNlcnMgPSBhd2FpdCBHZXRBbGxQb3N0cyhvZmZzZXQpO1xuICAgIHNldExQb3N0cyhbLi4ubFBvc3RzLCAuLi5hcGlVc2Vyc10pO1xuICAgIHNldE9mZnNldChvZmZzZXQgKyBOVU1CRVJfT0ZfVVNFUlNfVE9fRkVUQ0gpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsUG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuICAgICAgICA8UG9zdCBrZXk9e3Bvc3QuX2lkfSBkYXRhPXtwb3N0fSAvPlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCB7IFBvc3RzTGlzdCB9O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUG9zdCIsIkdldEFsbFBvc3RzIiwiTlVNQkVSX09GX1VTRVJTX1RPX0ZFVENIIiwiUG9zdHNMaXN0IiwicG9zdHMiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJsUG9zdHMiLCJzZXRMUG9zdHMiLCJkYXRhIiwibG9hZE1vcmVVc2VycyIsImFwaVVzZXJzIiwibWFwIiwicG9zdCIsImluZGV4IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/posts-list/component.tsx\n"));

/***/ })

});