"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(website)/post/[id]/comments/page",{

/***/ "(app-pages-browser)/./src/components/comments-list/component.tsx":
/*!****************************************************!*\
  !*** ./src/components/comments-list/component.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CommentsList: function() { return /* binding */ CommentsList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _comments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comments/component */ \"(app-pages-browser)/./src/components/comments/component.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immer */ \"(app-pages-browser)/./node_modules/immer/dist/immer.mjs\");\n/* harmony import */ var _hooks_error_handling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/error-handling */ \"(app-pages-browser)/./src/hooks/error-handling/index.ts\");\n/* __next_internal_client_entry_do_not_use__ CommentsList auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst initial_page_value = 1;\nfunction CommentsList(param) {\n    let { comments, id, onLoadMore } = param;\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initial_page_value);\n    const [lComments, setLComments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(comments);\n    const { errorValidation } = (0,_hooks_error_handling__WEBPACK_IMPORTED_MODULE_3__.useErrorHandling)();\n    const { ref, inView } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)();\n    const loadMoreComments = async ()=>{\n        if (comments.meta.pageCount > page) {\n            try {\n                const newData = await onLoadMore(id, 10, page + 1);\n                setLComments((0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(lComments, (draft)=>{\n                    draft.data.push(...newData.data);\n                    draft.meta = newData.meta;\n                }));\n                setPage((prevPage)=>prevPage + 1);\n            } catch (error) {\n                errorValidation(error);\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (comments.data) {\n            setPage(1);\n            setLComments((0,immer__WEBPACK_IMPORTED_MODULE_5__.produce)(comments, (draft)=>{\n                draft.data = [\n                    ...draft.data\n                ], draft.meta = draft.meta;\n            }));\n        }\n    }, [\n        comments.data\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (inView) {\n            loadMoreComments();\n        }\n    }, [\n        inView\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            lComments.data.map((comment, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comments_component__WEBPACK_IMPORTED_MODULE_1__.Comment, {\n                    data: comment\n                }, comment._id, false, {\n                    fileName: \"/home/marcelo/projects/myposts-frontend/src/components/comments-list/component.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)),\n            comments.meta.pageCount > page && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                ref: ref,\n                display: \"flex\",\n                justifyContent: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: \"Loading..\"\n                }, void 0, false, {\n                    fileName: \"/home/marcelo/projects/myposts-frontend/src/components/comments-list/component.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/marcelo/projects/myposts-frontend/src/components/comments-list/component.tsx\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CommentsList, \"LwCGdfIPTcJajShEvEyMOtdUWYM=\", false, function() {\n    return [\n        _hooks_error_handling__WEBPACK_IMPORTED_MODULE_3__.useErrorHandling,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = CommentsList;\n\nvar _c;\n$RefreshReg$(_c, \"CommentsList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2NvbW1lbnRzLWxpc3QvY29tcG9uZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFZ0Q7QUFDSjtBQUNZO0FBQ1I7QUFDaEI7QUFDMEI7QUFDMUQsTUFBTVEscUJBQXFCO0FBRTNCLFNBQVNDLGFBQWEsS0FRckI7UUFScUIsRUFDcEJDLFFBQVEsRUFDUkMsRUFBRSxFQUNGQyxVQUFVLEVBS1gsR0FScUI7O0lBU3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWiwrQ0FBUUEsQ0FBQ007SUFDakMsTUFBTSxDQUFDTyxXQUFXQyxhQUFhLEdBQUdkLCtDQUFRQSxDQUFDUTtJQUMzQyxNQUFNLEVBQUVPLGVBQWUsRUFBRSxHQUFHVix1RUFBZ0JBO0lBQzVDLE1BQU0sRUFBRVcsR0FBRyxFQUFFQyxNQUFNLEVBQUUsR0FBR2hCLHNFQUFTQTtJQUVqQyxNQUFNaUIsbUJBQW1CO1FBQ3ZCLElBQUksU0FBVUMsSUFBSSxDQUFDQyxTQUFTLEdBQWNULE1BQU07WUFDOUMsSUFBSTtnQkFDRixNQUFNVSxVQUF1QixNQUFNWCxXQUFXRCxJQUFJLElBQUlFLE9BQU87Z0JBQzdERyxhQUNFViw4Q0FBT0EsQ0FBQ1MsV0FBVyxDQUFDUztvQkFDbEJBLE1BQU1DLElBQUksQ0FBQ0MsSUFBSSxJQUFJSCxRQUFRRSxJQUFJO29CQUMvQkQsTUFBTUgsSUFBSSxHQUFHRSxRQUFRRixJQUFJO2dCQUMzQjtnQkFFRlAsUUFBUSxDQUFDYSxXQUFhQSxXQUFXO1lBQ25DLEVBQUUsT0FBT0MsT0FBWTtnQkFDbkJYLGdCQUFnQlc7WUFDbEI7UUFDRjtJQUNGO0lBRUEzQixnREFBU0EsQ0FBQztRQUNSLElBQUlTLFNBQVNlLElBQUksRUFBRTtZQUNqQlgsUUFBUTtZQUNSRSxhQUNFViw4Q0FBT0EsQ0FBQ0ksVUFBVSxDQUFDYztnQkFDaEJBLE1BQU1DLElBQUksR0FBRzt1QkFBSUQsTUFBTUMsSUFBSTtpQkFBQyxFQUFJRCxNQUFNSCxJQUFJLEdBQUdHLE1BQU1ILElBQUk7WUFDMUQ7UUFFSjtJQUNGLEdBQUc7UUFBQ1gsU0FBU2UsSUFBSTtLQUFDO0lBRWxCeEIsZ0RBQVNBLENBQUM7UUFDUixJQUFJa0IsUUFBUTtZQUNWQztRQUNGO0lBQ0YsR0FBRztRQUFDRDtLQUFPO0lBRVgscUJBQ0U7O1lBQ0dKLFVBQVVVLElBQUksQ0FBQ0ksR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUM1Qiw4REFBQy9CLHdEQUFPQTtvQkFBbUJ5QixNQUFNSzttQkFBbkJBLFFBQVFFLEdBQUc7Ozs7O1lBRXpCdEIsU0FBU1csSUFBSSxDQUFDQyxTQUFTLEdBQWNULHNCQUNyQyw4REFBQ1QsMEZBQUdBO2dCQUFDYyxLQUFLQTtnQkFBS2UsU0FBUTtnQkFBT0MsZ0JBQWU7MEJBQzNDLDRFQUFDN0IsMEZBQVVBOzhCQUFDOzs7Ozs7Ozs7Ozs7O0FBS3RCO0dBNURTSTs7UUFXcUJGLG1FQUFnQkE7UUFDcEJKLGtFQUFTQTs7O0tBWjFCTTtBQThEZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tZW50cy1saXN0L2NvbXBvbmVudC50c3g/ZWM3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IENvbW1lbnREYXRhIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tIFwiLi4vY29tbWVudHMvY29tcG9uZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XG5pbXBvcnQgeyBCb3gsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgcHJvZHVjZSB9IGZyb20gXCJpbW1lclwiO1xuaW1wb3J0IHsgdXNlRXJyb3JIYW5kbGluZyB9IGZyb20gXCJAL2hvb2tzL2Vycm9yLWhhbmRsaW5nXCI7XG5jb25zdCBpbml0aWFsX3BhZ2VfdmFsdWUgPSAxO1xuXG5mdW5jdGlvbiBDb21tZW50c0xpc3Qoe1xuICBjb21tZW50cyxcbiAgaWQsXG4gIG9uTG9hZE1vcmUsXG59OiB7XG4gIGNvbW1lbnRzOiBDb21tZW50RGF0YTtcbiAgaWQ6IHN0cmluZztcbiAgb25Mb2FkTW9yZTogKGlkOiBzdHJpbmcsIHNpemU6IG51bWJlciwgcGFnZTogbnVtYmVyKSA9PiBQcm9taXNlPENvbW1lbnREYXRhPjtcbn0pIHtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoaW5pdGlhbF9wYWdlX3ZhbHVlKTtcbiAgY29uc3QgW2xDb21tZW50cywgc2V0TENvbW1lbnRzXSA9IHVzZVN0YXRlKGNvbW1lbnRzKTtcbiAgY29uc3QgeyBlcnJvclZhbGlkYXRpb24gfSA9IHVzZUVycm9ySGFuZGxpbmcoKTtcbiAgY29uc3QgeyByZWYsIGluVmlldyB9ID0gdXNlSW5WaWV3KCk7XG5cbiAgY29uc3QgbG9hZE1vcmVDb21tZW50cyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoKGNvbW1lbnRzLm1ldGEucGFnZUNvdW50IGFzIG51bWJlcikgPiBwYWdlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBuZXdEYXRhOiBDb21tZW50RGF0YSA9IGF3YWl0IG9uTG9hZE1vcmUoaWQsIDEwLCBwYWdlICsgMSk7XG4gICAgICAgIHNldExDb21tZW50cyhcbiAgICAgICAgICBwcm9kdWNlKGxDb21tZW50cywgKGRyYWZ0KSA9PiB7XG4gICAgICAgICAgICBkcmFmdC5kYXRhLnB1c2goLi4ubmV3RGF0YS5kYXRhKTtcbiAgICAgICAgICAgIGRyYWZ0Lm1ldGEgPSBuZXdEYXRhLm1ldGE7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgc2V0UGFnZSgocHJldlBhZ2UpID0+IHByZXZQYWdlICsgMSk7XG4gICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGVycm9yVmFsaWRhdGlvbihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvbW1lbnRzLmRhdGEpIHtcbiAgICAgIHNldFBhZ2UoMSk7XG4gICAgICBzZXRMQ29tbWVudHMoXG4gICAgICAgIHByb2R1Y2UoY29tbWVudHMsIChkcmFmdCkgPT4ge1xuICAgICAgICAgIChkcmFmdC5kYXRhID0gWy4uLmRyYWZ0LmRhdGFdKSwgKGRyYWZ0Lm1ldGEgPSBkcmFmdC5tZXRhKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9LCBbY29tbWVudHMuZGF0YV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluVmlldykge1xuICAgICAgbG9hZE1vcmVDb21tZW50cygpO1xuICAgIH1cbiAgfSwgW2luVmlld10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsQ29tbWVudHMuZGF0YS5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PiAoXG4gICAgICAgIDxDb21tZW50IGtleT17Y29tbWVudC5faWR9IGRhdGE9e2NvbW1lbnR9IC8+XG4gICAgICApKX1cbiAgICAgIHsoY29tbWVudHMubWV0YS5wYWdlQ291bnQgYXMgbnVtYmVyKSA+IHBhZ2UgJiYgKFxuICAgICAgICA8Qm94IHJlZj17cmVmfSBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgPFR5cG9ncmFwaHk+TG9hZGluZy4uPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCB7IENvbW1lbnRzTGlzdCB9O1xuIl0sIm5hbWVzIjpbIkNvbW1lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUluVmlldyIsIkJveCIsIlR5cG9ncmFwaHkiLCJwcm9kdWNlIiwidXNlRXJyb3JIYW5kbGluZyIsImluaXRpYWxfcGFnZV92YWx1ZSIsIkNvbW1lbnRzTGlzdCIsImNvbW1lbnRzIiwiaWQiLCJvbkxvYWRNb3JlIiwicGFnZSIsInNldFBhZ2UiLCJsQ29tbWVudHMiLCJzZXRMQ29tbWVudHMiLCJlcnJvclZhbGlkYXRpb24iLCJyZWYiLCJpblZpZXciLCJsb2FkTW9yZUNvbW1lbnRzIiwibWV0YSIsInBhZ2VDb3VudCIsIm5ld0RhdGEiLCJkcmFmdCIsImRhdGEiLCJwdXNoIiwicHJldlBhZ2UiLCJlcnJvciIsIm1hcCIsImNvbW1lbnQiLCJpbmRleCIsIl9pZCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/comments-list/component.tsx\n"));

/***/ })

});