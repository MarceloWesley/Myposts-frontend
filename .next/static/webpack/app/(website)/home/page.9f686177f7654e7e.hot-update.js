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

/***/ "(app-pages-browser)/./src/components/create-post-desktop/component.tsx":
/*!**********************************************************!*\
  !*** ./src/components/create-post-desktop/component.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreatePostDesktop: function() { return /* binding */ CreatePostDesktop; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Box_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,useMediaQuery,useTheme!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/styles/useTheme.js\");\n/* harmony import */ var _barrel_optimize_names_Box_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,useMediaQuery,useTheme!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js\");\n/* harmony import */ var _barrel_optimize_names_Box_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,useMediaQuery,useTheme!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _button_contained__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/contained */ \"(app-pages-browser)/./src/components/button/contained/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _create_post_mobile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-post-mobile/component */ \"(app-pages-browser)/./src/components/create-post-mobile/component.tsx\");\n/* __next_internal_client_entry_do_not_use__ CreatePostDesktop auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction CreatePostDesktop() {\n    _s();\n    const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const theme = (0,_barrel_optimize_names_Box_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const result = (0,_barrel_optimize_names_Box_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(theme.breakpoints.down(\"tablet\"));\n    const handleAddPost = ()=>{\n        setOpen((prev)=>!prev);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (result !== true) {\n            setIsMobile(false);\n        } else {\n            setIsMobile(true);\n        }\n    }, [\n        result\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    display: \"flex\",\n                    justifyContent: \"flex-end\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_contained__WEBPACK_IMPORTED_MODULE_1__.ButtonContained, {\n                        onClick: handleAddPost,\n                        children: \"Criar Post\"\n                    }, void 0, false, {\n                        fileName: \"/home/marcelo/projects/myposts-frontend/src/components/create-post-desktop/component.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/marcelo/projects/myposts-frontend/src/components/create-post-desktop/component.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_create_post_mobile_component__WEBPACK_IMPORTED_MODULE_3__.CreatePostMobile, {\n                    open: open,\n                    onOpen: handleAddPost\n                }, void 0, false, {\n                    fileName: \"/home/marcelo/projects/myposts-frontend/src/components/create-post-desktop/component.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n}\n_s(CreatePostDesktop, \"CJhiRwvCqe0suzC21pNynR5MiWU=\", false, function() {\n    return [\n        _barrel_optimize_names_Box_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _barrel_optimize_names_Box_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = CreatePostDesktop;\nvar _c;\n$RefreshReg$(_c, \"CreatePostDesktop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZS1wb3N0LWRlc2t0b3AvY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUM2RDtBQUNQO0FBQ1Y7QUFDdUI7QUFFNUQsU0FBU087O0lBQ2QsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFVO0lBQ2xELE1BQU0sQ0FBQ0ssTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNTyxRQUFRViwwR0FBUUE7SUFDdEIsTUFBTVcsU0FBU1osMEdBQWFBLENBQUNXLE1BQU1FLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDO0lBRXBELE1BQU1DLGdCQUFnQjtRQUNwQkwsUUFBUSxDQUFDTSxPQUFTLENBQUNBO0lBQ3JCO0lBRUFiLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVMsV0FBVyxNQUFNO1lBQ25CSixZQUFZO1FBQ2QsT0FBTztZQUNMQSxZQUFZO1FBQ2Q7SUFDRixHQUFHO1FBQUNJO0tBQU87SUFFWCxxQkFDRTtrQkFDRyxDQUFDTCwwQkFDQTs7OEJBQ0UsOERBQUNSLHNHQUFHQTtvQkFBQ2tCLFNBQVE7b0JBQU9DLGdCQUFlOzhCQUNqQyw0RUFBQ2hCLDhEQUFlQTt3QkFBQ2lCLFNBQVNKO2tDQUFlOzs7Ozs7Ozs7Ozs4QkFJM0MsOERBQUNWLDJFQUFnQkE7b0JBQUNJLE1BQU1BO29CQUFNVyxRQUFRTDs7Ozs7Ozs7O0FBS2hEO0dBaENnQlQ7O1FBR0FMLHNHQUFRQTtRQUNQRCxzR0FBYUE7OztLQUpkTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jcmVhdGUtcG9zdC1kZXNrdG9wL2NvbXBvbmVudC50c3g/N2E1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IEJveCwgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgQnV0dG9uQ29udGFpbmVkIH0gZnJvbSBcIi4uL2J1dHRvbi9jb250YWluZWRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENyZWF0ZVBvc3RNb2JpbGUgfSBmcm9tIFwiLi4vY3JlYXRlLXBvc3QtbW9iaWxlL2NvbXBvbmVudFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ3JlYXRlUG9zdERlc2t0b3AoKSB7XG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCByZXN1bHQgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJ0YWJsZXRcIikpO1xuXG4gIGNvbnN0IGhhbmRsZUFkZFBvc3QgPSAoKSA9PiB7XG4gICAgc2V0T3BlbigocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgc2V0SXNNb2JpbGUoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc01vYmlsZSh0cnVlKTtcbiAgICB9XG4gIH0sIFtyZXN1bHRdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7IWlzTW9iaWxlICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgPEJ1dHRvbkNvbnRhaW5lZCBvbkNsaWNrPXtoYW5kbGVBZGRQb3N0fT5cbiAgICAgICAgICAgICAgQ3JpYXIgUG9zdFxuICAgICAgICAgICAgPC9CdXR0b25Db250YWluZWQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPENyZWF0ZVBvc3RNb2JpbGUgb3Blbj17b3Blbn0gb25PcGVuPXtoYW5kbGVBZGRQb3N0fSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQm94IiwidXNlTWVkaWFRdWVyeSIsInVzZVRoZW1lIiwiQnV0dG9uQ29udGFpbmVkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDcmVhdGVQb3N0TW9iaWxlIiwiQ3JlYXRlUG9zdERlc2t0b3AiLCJpc01vYmlsZSIsInNldElzTW9iaWxlIiwib3BlbiIsInNldE9wZW4iLCJ0aGVtZSIsInJlc3VsdCIsImJyZWFrcG9pbnRzIiwiZG93biIsImhhbmRsZUFkZFBvc3QiLCJwcmV2IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Iiwib25DbGljayIsIm9uT3BlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/create-post-desktop/component.tsx\n"));

/***/ })

});