"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Alert.js":
/*!*****************************!*\
  !*** ./components/Alert.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Alert; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Alert(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), myState = ref[0], setMyState = ref[1];\n    var HandleInputChange = function(event) {\n        var value = event.target.value;\n        setMyState(value);\n        var setInputValue = props.setInputValue;\n        setInputValue();\n        console.log(\"change\", value);\n    };\n    var HandleClick = function() {\n        console.log(\"clicked\", myState);\n        alert(myState);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: HandleClick,\n                children: \"Trykk p\\xe5 meg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SSC_S\\\\Desktop\\\\My-App\\\\components\\\\Alert.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"myState\",\n                value: myState,\n                type: \"text\",\n                onChange: HandleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SSC_S\\\\Desktop\\\\My-App\\\\components\\\\Alert.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Alert, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = Alert;\n;\nvar _c;\n$RefreshReg$(_c, \"Alert\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsZXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQXNDO0FBRXZCLFNBQVNFLEtBQUssQ0FBQ0MsS0FBSyxFQUFFOztJQUNqQyxJQUE4QkYsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFuQ0csT0FBTyxHQUFnQkgsR0FBWSxHQUE1QixFQUFFSSxVQUFVLEdBQUlKLEdBQVksR0FBaEI7SUFFMUIsSUFBTUssaUJBQWlCLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO1FBQ2pDLElBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNELEtBQUs7UUFDaENILFVBQVUsQ0FBQ0csS0FBSyxDQUFDO1FBQ2pCLElBQU1FLGFBQWEsR0FBR1AsS0FBSyxDQUFDTyxhQUFhO1FBQ3pDQSxhQUFhLEVBQUU7UUFFZkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFDSixLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBR0QsSUFBTUssV0FBVyxHQUFHLFdBQU07UUFDdEJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBQ1IsT0FBTyxDQUFDLENBQUM7UUFDL0JVLEtBQUssQ0FBQ1YsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUlELHFCQUNJOzswQkFDQSw4REFBQ1csUUFBTTtnQkFBQ0MsT0FBTyxFQUFFSCxXQUFXOzBCQUFFLGlCQUFZOzs7OztvQkFBUzswQkFDbkQsOERBQUNJLE9BQUs7Z0JBQUNDLEVBQUUsRUFBQyxTQUFTO2dCQUFDVixLQUFLLEVBQUVKLE9BQU87Z0JBQUVlLElBQUksRUFBQyxNQUFNO2dCQUFDQyxRQUFRLEVBQUVkLGlCQUFpQjs7Ozs7b0JBQVc7O29CQUVuRixDQUNOO0FBQUEsQ0FBQztHQTFCa0JKLEtBQUs7QUFBTEEsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FsZXJ0LmpzP2Y0NGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsZXJ0KHByb3BzKSB7XHJcbiAgICBjb25zdCBbbXlTdGF0ZSwgc2V0TXlTdGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgSGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXRNeVN0YXRlKHZhbHVlKVxyXG4gICAgICAgIGNvbnN0IHNldElucHV0VmFsdWUgPSBwcm9wcy5zZXRJbnB1dFZhbHVlXHJcbiAgICAgICAgc2V0SW5wdXRWYWx1ZSgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VcIix2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBIYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIixteVN0YXRlKTsgXHJcbiAgICAgICAgYWxlcnQobXlTdGF0ZSk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17SGFuZGxlQ2xpY2t9PlRyeWtrIHDDpSBtZWc8L2J1dHRvbj5cclxuICAgICAgICA8aW5wdXQgaWQ9J215U3RhdGUnIHZhbHVlPXtteVN0YXRlfSB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtIYW5kbGVJbnB1dENoYW5nZX0gPjwvaW5wdXQ+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKX07Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBbGVydCIsInByb3BzIiwibXlTdGF0ZSIsInNldE15U3RhdGUiLCJIYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJzZXRJbnB1dFZhbHVlIiwiY29uc29sZSIsImxvZyIsIkhhbmRsZUNsaWNrIiwiYWxlcnQiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Alert.js\n"));

/***/ })

});