webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.js");
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rebass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/huyqn/Documents/Github/5c4b-landing-page/pages/index.js";






var FormSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().email("Invalid email").required("Required"),
  zipcode: yup__WEBPACK_IMPORTED_MODULE_5__["number"]().required("Required")
});
var Wrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"])({
  fontFamily: "'Inconsolata', monospace",
  fontSize: "18px",
  lineHeight: "180%",
  color: "#333"
});
var Tagline = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"])({
  fontFamily: "'Anton', sans-serif",
  fontWeight: "normal",
  fontSize: "60px",
  lineHeight: "160%",
  color: "#111",
  margin: "0"
});
var FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"])({
  borderRadius: "4px"
});
var Paragraph = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"])({
  fontSize: "20px"
});
var FormInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"])({
  fontFamily: "'Inconsolata', monospace",
  display: "block",
  border: "solid 2px gray",
  fontSize: "20px",
  borderRadius: "4px",
  outline: "none"
});
var Button = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"])({
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
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Anton|Inconsolata&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "h1",
    my: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "5 Ch\xE2u 4 B\u1EC3")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: [1 / 2],
    p: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tagline, {
    as: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "C\u1EA9m nang sinh t\u1ED3n cho ng\u01B0\u1EDDi Vi\u1EC7t xa x\u1EE9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Paragraph, {
    as: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "H\u1EA7u nh\u01B0 b\u1EA5t c\u1EE9 ng\u01B0\u1EDDi Vi\u1EC7t Nam n\xE0o l\u1EA7n \u0111\u1EA7u ti\xEAn \u0111\u1EB7t ch\xE2n l\xEAn m\u1ED9t \u0111\u1EA5t n\u01B0\u1EDBc m\u1EDBi, sinh s\u1ED1ng, \u0111\u1EC1u g\u1EB7p ph\u1EA3i c\xE1c v\u1EA5n \u0111\u1EC1 c\u01A1 b\u1EA3n gi\u1ED1ng nhau. \u0110i h\u1ECDc, \u0111i l\xE0m, th\xF4ng d\u1ECBch, nh\xE0 \u1EDF, \u0111i l\u1EA1i, v\xE2n v\xE2n v\xE0 v\xE2n v\xE2n. 5 Ch\xE2u 4 B\u1EC3 \u0111\u01B0\u1EE3c t\u1EA1o ra \u0111\u1EC3 gi\xFAp gi\u1EA3i quy\u1EBFt c\xE1c v\u1EA5n \u0111\u1EC1 n\xE0y!", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    width: 1 / 2,
    p: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormWrapper, {
    as: "form",
    p: 3,
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "zip-code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "ZIP code"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormInput, {
    name: "zip-code",
    width: 1,
    p: 3,
    as: "input",
    type: "number",
    placeholder: "nh\u1EADp ZIP code n\u01A1i b\u1EA1n \u0111ang s\u1ED1ng",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rebass__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mt: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormInput, {
    name: "email",
    width: 1,
    p: 3,
    as: "input",
    type: "email",
    placeholder: "nh\u1EADp email c\u1EE7a b\u1EA1n",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    width: 1,
    p: 2,
    my: 3,
    as: "button",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "T\xF4i Mu\u1ED1n Tham Gia"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.83ff3bef961f575db804.hot-update.js.map