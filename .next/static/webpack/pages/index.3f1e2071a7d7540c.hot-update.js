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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Alert; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Alert(props) {\n    //const [myState, setMyState] = useState('');\n    var HandleInputChange = function(event) {\n        var value = event.target.value;\n        //setMyState(value)\n        var setInputValue = props.setInputValue;\n        setInputValue(value);\n        console.log(\"change\", value);\n    };\n    var HandleClick = function(event) {\n        event.preventDefault();\n        console.log(\"clicked\", \"gammmel verdi\");\n        //alert(props.inputValue);\n        props.setInputValue(props.inputValue, \"ny verdi\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: HandleClick,\n                children: \"Trykk p\\xe5 meg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SSC_S\\\\Desktop\\\\My-App\\\\components\\\\Alert.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                id: \"myState\",\n                value: props.inputValue,\n                type: \"text\",\n                onChange: HandleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\SSC_S\\\\Desktop\\\\My-App\\\\components\\\\Alert.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Alert;\n;\nvar _c;\n$RefreshReg$(_c, \"Alert\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FsZXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFZixTQUFTQyxLQUFLLENBQUNDLEtBQUssRUFBRTtJQUNqQyw2Q0FBNkM7SUFFN0MsSUFBTUMsaUJBQWlCLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO1FBQ2pDLElBQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNELEtBQUs7UUFDaEMsbUJBQW1CO1FBQ25CLElBQU1FLGFBQWEsR0FBR0wsS0FBSyxDQUFDSyxhQUFhO1FBQ3pDQSxhQUFhLENBQUNGLEtBQUssQ0FBQztRQUVwQkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxFQUFDSixLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBR0QsSUFBTUssV0FBVyxHQUFHTixTQUFBQSxLQUFLLEVBQUk7UUFDekJBLEtBQUssQ0FBQ08sY0FBYyxFQUFFLENBQUM7UUFDdkJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBQyxlQUFlLENBQUMsQ0FBQztRQUN2QywwQkFBMEI7UUFDMUJQLEtBQUssQ0FBQ0ssYUFBYSxDQUFDTCxLQUFLLENBQUNVLFVBQVUsRUFBQyxVQUFVLENBQUM7SUFDcEQsQ0FBQztJQUlELHFCQUNJOzswQkFDQSw4REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFSixXQUFXOzBCQUFFLGlCQUFZOzs7OztvQkFBUzswQkFDbkQsOERBQUNLLE9BQUs7Z0JBQUNDLEVBQUUsRUFBQyxTQUFTO2dCQUFDWCxLQUFLLEVBQUVILEtBQUssQ0FBQ1UsVUFBVTtnQkFBRUssSUFBSSxFQUFDLE1BQU07Z0JBQUNDLFFBQVEsRUFBRWYsaUJBQWlCOzs7OztvQkFBVzs7b0JBQzVGLENBQ047QUFBQSxDQUFDO0FBM0JrQkYsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FsZXJ0LmpzP2Y0NGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGVydChwcm9wcykge1xyXG4gICAgLy9jb25zdCBbbXlTdGF0ZSwgc2V0TXlTdGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgSGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAvL3NldE15U3RhdGUodmFsdWUpXHJcbiAgICAgICAgY29uc3Qgc2V0SW5wdXRWYWx1ZSA9IHByb3BzLnNldElucHV0VmFsdWVcclxuICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbHVlKVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZVwiLHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGNvbnN0IEhhbmRsZUNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIsXCJnYW1tbWVsIHZlcmRpXCIpOyBcclxuICAgICAgICAvL2FsZXJ0KHByb3BzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgIHByb3BzLnNldElucHV0VmFsdWUocHJvcHMuaW5wdXRWYWx1ZSxcIm55IHZlcmRpXCIpXHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17SGFuZGxlQ2xpY2t9PlRyeWtrIHDDpSBtZWc8L2J1dHRvbj5cclxuICAgICAgICA8aW5wdXQgaWQ9J215U3RhdGUnIHZhbHVlPXtwcm9wcy5pbnB1dFZhbHVlfSB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtIYW5kbGVJbnB1dENoYW5nZX0gPjwvaW5wdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApfTsiXSwibmFtZXMiOlsiUmVhY3QiLCJBbGVydCIsInByb3BzIiwiSGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwidGFyZ2V0Iiwic2V0SW5wdXRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJIYW5kbGVDbGljayIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRWYWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbnB1dCIsImlkIiwidHlwZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Alert.js\n"));

/***/ })

});