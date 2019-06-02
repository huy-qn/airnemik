module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "rebass");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/huyqn/Documents/Github/5c4b-landing-page/pages/index.js";








var Airtable = __webpack_require__(/*! airtable */ "airtable");

var base = new Airtable({
  apiKey: "keyltww2PuILRs0l9"
}).base("appSXfFw3xeIvJQcr");
var FormSchema = yup__WEBPACK_IMPORTED_MODULE_6__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().email("Invalid email").required("Required"),
  zipCode: yup__WEBPACK_IMPORTED_MODULE_6__["number"]().integer("Invalid").required("Required")
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"])({
  fontFamily: "'Inconsolata', monospace",
  fontSize: "18px",
  lineHeight: "180%",
  color: "#333"
});
var Tagline = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"])({
  fontFamily: "'Anton', sans-serif",
  fontWeight: "normal",
  fontSize: "60px",
  lineHeight: "160%",
  color: "#111",
  margin: "0"
});
var FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"])({
  borderRadius: "4px"
});
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"])({
  fontSize: "20px"
});
var FormInput = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(formik__WEBPACK_IMPORTED_MODULE_4__["Field"])({
  fontFamily: "'Inconsolata', monospace",
  display: "block",
  border: "solid 2px gray",
  fontSize: "20px",
  borderRadius: "4px",
  outline: "none"
}, styled_system__WEBPACK_IMPORTED_MODULE_3__["space"], styled_system__WEBPACK_IMPORTED_MODULE_3__["width"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"])({
  backgroundColor: "blue",
  fontFamily: "'Inconsolata', monospace",
  fontSize: "22px",
  borderRadius: "100px",
  border: "none",
  color: "white",
  fontWeight: "bold"
});

var IndexPage = function IndexPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Anton|Inconsolata&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "h1",
    my: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "5 Ch\xE2u 4 B\u1EC3")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: [1 / 2],
    p: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tagline, {
    as: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "C\u1EA9m nang sinh t\u1ED3n cho ng\u01B0\u1EDDi Vi\u1EC7t xa x\u1EE9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph, {
    as: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "H\u1EA7u nh\u01B0 b\u1EA5t c\u1EE9 ng\u01B0\u1EDDi Vi\u1EC7t Nam n\xE0o l\u1EA7n \u0111\u1EA7u ti\xEAn \u0111\u1EB7t ch\xE2n l\xEAn m\u1ED9t \u0111\u1EA5t n\u01B0\u1EDBc m\u1EDBi, sinh s\u1ED1ng, \u0111\u1EC1u g\u1EB7p ph\u1EA3i c\xE1c v\u1EA5n \u0111\u1EC1 c\u01A1 b\u1EA3n gi\u1ED1ng nhau. \u0110i h\u1ECDc, \u0111i l\xE0m, th\xF4ng d\u1ECBch, nh\xE0 \u1EDF, \u0111i l\u1EA1i, v\xE2n v\xE2n v\xE0 v\xE2n v\xE2n. 5 Ch\xE2u 4 B\u1EC3 \u0111\u01B0\u1EE3c t\u1EA1o ra \u0111\u1EC3 gi\xFAp gi\u1EA3i quy\u1EBFt c\xE1c v\u1EA5n \u0111\u1EC1 n\xE0y!", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: 1 / 2,
    p: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormWrapper, {
    p: 3,
    bg: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
    initialValues: {
      zipCode: "",
      email: ""
    },
    validationSchema: FormSchema,
    onSubmit: function onSubmit(values) {
      base("Table 1").create({
        email: values.email,
        "ZIP code": values.zipCode
      }, function (err, record) {
        if (err) {
          console.error(err);
          return;
        }

        console.log(record.getId());
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "zip-code",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "ZIP code"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormInput, {
      name: "zipCode",
      type: "number",
      width: 2 / 3,
      p: 3,
      placeholder: "nh\u1EADp ZIP code n\u01A1i b\u1EA1n \u0111ang s\u1ED1ng",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"], {
      name: "zipCode",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, function (msg) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, msg);
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      mt: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormInput, {
      width: 2 / 3,
      name: "email",
      type: "email",
      p: 3,
      placeholder: "nh\u1EADp email c\u1EE7a b\u1EA1n",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"], {
      name: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, function (msg) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, msg);
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
      width: 3 / 4,
      p: 3,
      mt: 4,
      as: "button",
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, "T\xF4i mu\u1ED1n tham Gia"));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/huyqn/Documents/Github/5c4b-landing-page/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "airtable":
/*!***************************!*\
  !*** external "airtable" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("airtable");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rebass":
/*!*************************!*\
  !*** external "rebass" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rebass");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map