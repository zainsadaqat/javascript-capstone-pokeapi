/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/pokemon-solid.ttf */ "./src/assets/fonts/pokemon-solid.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/pokemon-classic.ttf */ "./src/assets/fonts/pokemon-classic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'pokemon-solid';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'pokemon-classic';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\n:root {\r\n  --main-bg-color: #fe0065;\r\n}\r\n\r\nbody {\r\n  font-family: 'pokemon-classic', sans-serif;\r\n  background-color: var(--main-bg-color);\r\n  min-height: 100vh;\r\n}\r\n\r\n.nav-link {\r\n  font-family: 'pokemon-solid', sans-serif;\r\n  font-size: 18px;\r\n  letter-spacing: 4px;\r\n  color: black !important;\r\n}\r\n\r\n.pokeball-logo {\r\n  width: 75px;\r\n  height: 75px;\r\n}\r\n\r\n.active {\r\n  text-decoration: underline;\r\n}\r\n\r\n.footer {\r\n  position: sticky;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n.card {\r\n  background-color: var(--main-bg-color);\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\r\n  padding: 20px;\r\n  margin: 20px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n@keyframes changeBackgroundColorBlue {\r\n  from {\r\n    background-color: #1eb8ff;\r\n  }\r\n\r\n  to {\r\n    background-color: #85fce8;\r\n  }\r\n}\r\n\r\n.big-blue-circle {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.7s;\r\n  animation-name: changeBackgroundColorBlue;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorRed {\r\n  from {\r\n    background-color: #ff1a1a;\r\n  }\r\n\r\n  to {\r\n    background-color: #ff9696;\r\n  }\r\n}\r\n\r\n.red-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorYellow {\r\n  from {\r\n    background-color: #fffb1a;\r\n  }\r\n\r\n  to {\r\n    background-color: #fdf4bd;\r\n  }\r\n}\r\n\r\n.yellow-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.5s;\r\n  animation-name: changeBackgroundColorYellow;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorGreen {\r\n  from {\r\n    background-color: #1aff2d;\r\n  }\r\n\r\n  to {\r\n    background-color: #a7ff96;\r\n  }\r\n}\r\n\r\n.green-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.9s;\r\n  animation-name: changeBackgroundColorGreen;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.card-header {\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.gray-box {\r\n  width: 250px;\r\n  height: 260px;\r\n  background-color: #e0e0e0;\r\n  border-radius: 0 0 0 40px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.small-red-circle {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 10px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.display-green {\r\n  width: 180px;\r\n  height: 180px;\r\n  background-color: #7ecc98;\r\n  border-radius: 0;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.medium-red-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 15px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.card-footer {\r\n  background-color: var(--main-bg-color);\r\n  border: none;\r\n}\r\n\r\n.name-pokemon {\r\n  height: 60px;\r\n  width: 210px;\r\n  background-color: #00cc5c;\r\n  border: solid 5px #000;\r\n}\r\n\r\n.gray-dark-circle-heart-button {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 30px;\r\n  border: 5px solid #000;\r\n  background-color: #424242;\r\n}\r\n\r\n.white-heart {\r\n  background-color: white;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin: 0 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 20px;\r\n}\r\n\r\n.white-heart::before,\r\n.white-heart::after {\r\n  content: \"\";\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  position: absolute;\r\n  width: 20px;\r\n}\r\n\r\n.white-heart::before {\r\n  top: -10px;\r\n  left: 0;\r\n}\r\n\r\n.white-heart::after {\r\n  left: 10px;\r\n  top: 0;\r\n}\r\n\r\n.red-heart {\r\n  background-color: red;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin: 0 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 20px;\r\n}\r\n\r\n.red-heart::before,\r\n.red-heart::after {\r\n  content: \"\";\r\n  background-color: red;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  position: absolute;\r\n  width: 20px;\r\n}\r\n\r\n.red-heart::before {\r\n  top: -10px;\r\n  left: 0;\r\n}\r\n\r\n.red-heart::after {\r\n  left: 10px;\r\n  top: 0;\r\n}\r\n\r\n.Comments-button {\r\n  width: 100%;\r\n  height: 60px;\r\n  border-radius: 30px;\r\n  border: 5px solid #000;\r\n  background-color: #424242;\r\n  color: white;\r\n}\r\n\r\n.modal-content {\r\n  border: solid 5px #000;\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.total-comments,\r\n.add-comment-heading {\r\n  text-align: center;\r\n  color: #bebebe;\r\n  margin: 30px 0;\r\n}\r\n\r\n.add-comment-heading {\r\n  margin-top: 50px;\r\n}\r\n\r\n.all-comments {\r\n  text-align: center;\r\n  font-size: 0.85rem;\r\n  color: white;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form > * {\r\n  margin-bottom: 1em;\r\n  padding: 1em;\r\n  border: 4px solid black;\r\n  border-radius: 6px;\r\n}\r\n\r\n.t-center {\r\n  text-align: center;\r\n  padding: 1.75em 0.5em;\r\n}\r\n\r\n.likes-box {\r\n  background-color: rgb(249, 238, 96);\r\n  border-radius: 0 0 0 40px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.pokemon-image {\r\n  width: 100%;\r\n}\r\n\r\n.pokemon-number {\r\n  background-color: rgb(0, 170, 247);\r\n  border-radius: 0 40px 0 0;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.spinner-center {\r\n  min-height: 640px;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.page-link,\r\n.page-link:hover {\r\n  border: solid 5px #000;\r\n  background-color: #424242;\r\n  color: white;\r\n}\r\n\r\n.nav-item {\r\n  background-color: var(--main-bg-color);\r\n  border: solid 5px #000;\r\n}\r\n\r\n.at {\r\n  font-family: \"Arial Black\", Gadget, sans-serif;\r\n}\r\n\r\n.comment-container {\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 100;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'pokemon-solid';\r\n  src: url('./assets/fonts/pokemon-solid.ttf') format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'pokemon-classic';\r\n  src: url('./assets/fonts/pokemon-classic.ttf') format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\n:root {\r\n  --main-bg-color: #fe0065;\r\n}\r\n\r\nbody {\r\n  font-family: 'pokemon-classic', sans-serif;\r\n  background-color: var(--main-bg-color);\r\n  min-height: 100vh;\r\n}\r\n\r\n.nav-link {\r\n  font-family: 'pokemon-solid', sans-serif;\r\n  font-size: 18px;\r\n  letter-spacing: 4px;\r\n  color: black !important;\r\n}\r\n\r\n.pokeball-logo {\r\n  width: 75px;\r\n  height: 75px;\r\n}\r\n\r\n.active {\r\n  text-decoration: underline;\r\n}\r\n\r\n.footer {\r\n  position: sticky;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n.card {\r\n  background-color: var(--main-bg-color);\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\r\n  padding: 20px;\r\n  margin: 20px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n@keyframes changeBackgroundColorBlue {\r\n  from {\r\n    background-color: #1eb8ff;\r\n  }\r\n\r\n  to {\r\n    background-color: #85fce8;\r\n  }\r\n}\r\n\r\n.big-blue-circle {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.7s;\r\n  animation-name: changeBackgroundColorBlue;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorRed {\r\n  from {\r\n    background-color: #ff1a1a;\r\n  }\r\n\r\n  to {\r\n    background-color: #ff9696;\r\n  }\r\n}\r\n\r\n.red-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorYellow {\r\n  from {\r\n    background-color: #fffb1a;\r\n  }\r\n\r\n  to {\r\n    background-color: #fdf4bd;\r\n  }\r\n}\r\n\r\n.yellow-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.5s;\r\n  animation-name: changeBackgroundColorYellow;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorGreen {\r\n  from {\r\n    background-color: #1aff2d;\r\n  }\r\n\r\n  to {\r\n    background-color: #a7ff96;\r\n  }\r\n}\r\n\r\n.green-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.9s;\r\n  animation-name: changeBackgroundColorGreen;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.card-header {\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.gray-box {\r\n  width: 250px;\r\n  height: 260px;\r\n  background-color: #e0e0e0;\r\n  border-radius: 0 0 0 40px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.small-red-circle {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 10px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.display-green {\r\n  width: 180px;\r\n  height: 180px;\r\n  background-color: #7ecc98;\r\n  border-radius: 0;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.medium-red-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 15px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.card-footer {\r\n  background-color: var(--main-bg-color);\r\n  border: none;\r\n}\r\n\r\n.name-pokemon {\r\n  height: 60px;\r\n  width: 210px;\r\n  background-color: #00cc5c;\r\n  border: solid 5px #000;\r\n}\r\n\r\n.gray-dark-circle-heart-button {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 30px;\r\n  border: 5px solid #000;\r\n  background-color: #424242;\r\n}\r\n\r\n.white-heart {\r\n  background-color: white;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin: 0 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 20px;\r\n}\r\n\r\n.white-heart::before,\r\n.white-heart::after {\r\n  content: \"\";\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  position: absolute;\r\n  width: 20px;\r\n}\r\n\r\n.white-heart::before {\r\n  top: -10px;\r\n  left: 0;\r\n}\r\n\r\n.white-heart::after {\r\n  left: 10px;\r\n  top: 0;\r\n}\r\n\r\n.red-heart {\r\n  background-color: red;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin: 0 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 20px;\r\n}\r\n\r\n.red-heart::before,\r\n.red-heart::after {\r\n  content: \"\";\r\n  background-color: red;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  position: absolute;\r\n  width: 20px;\r\n}\r\n\r\n.red-heart::before {\r\n  top: -10px;\r\n  left: 0;\r\n}\r\n\r\n.red-heart::after {\r\n  left: 10px;\r\n  top: 0;\r\n}\r\n\r\n.Comments-button {\r\n  width: 100%;\r\n  height: 60px;\r\n  border-radius: 30px;\r\n  border: 5px solid #000;\r\n  background-color: #424242;\r\n  color: white;\r\n}\r\n\r\n.modal-content {\r\n  border: solid 5px #000;\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.total-comments,\r\n.add-comment-heading {\r\n  text-align: center;\r\n  color: #bebebe;\r\n  margin: 30px 0;\r\n}\r\n\r\n.add-comment-heading {\r\n  margin-top: 50px;\r\n}\r\n\r\n.all-comments {\r\n  text-align: center;\r\n  font-size: 0.85rem;\r\n  color: white;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form > * {\r\n  margin-bottom: 1em;\r\n  padding: 1em;\r\n  border: 4px solid black;\r\n  border-radius: 6px;\r\n}\r\n\r\n.t-center {\r\n  text-align: center;\r\n  padding: 1.75em 0.5em;\r\n}\r\n\r\n.likes-box {\r\n  background-color: rgb(249, 238, 96);\r\n  border-radius: 0 0 0 40px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.pokemon-image {\r\n  width: 100%;\r\n}\r\n\r\n.pokemon-number {\r\n  background-color: rgb(0, 170, 247);\r\n  border-radius: 0 40px 0 0;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.spinner-center {\r\n  min-height: 640px;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.page-link,\r\n.page-link:hover {\r\n  border: solid 5px #000;\r\n  background-color: #424242;\r\n  color: white;\r\n}\r\n\r\n.nav-item {\r\n  background-color: var(--main-bg-color);\r\n  border: solid 5px #000;\r\n}\r\n\r\n.at {\r\n  font-family: \"Arial Black\", Gadget, sans-serif;\r\n}\r\n\r\n.comment-container {\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 100;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/add-new-like.js":
/*!*****************************!*\
  !*** ./src/add-new-like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable linebreak-style */
/* eslint-disable no-return-await */
const addNewLike = async (itemId) => {
  const pokemonLikes = document.getElementById(`${itemId}_pokemonLikes`);
  pokemonLikes.textContent = parseInt(pokemonLikes.textContent, 10) + 1;
  const colorHeart = document.getElementById(`${itemId}_colorHeart`);
  colorHeart.classList.remove('white-heart');
  colorHeart.classList.add('red-heart');
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/euJcQ410fgo2CbYVuqO8/likes/', {
    method: 'POST',
    body: JSON.stringify({ item_id: itemId }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewLike);


/***/ }),

/***/ "./src/display-comments.js":
/*!*********************************!*\
  !*** ./src/display-comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayComments = (pokemon) => {
  const commentContainer = document.createElement('div');
  commentContainer.classList.add('comment-container');
  commentContainer.innerHTML = `
          <div class="" id="${pokemon.index}popUpContainer" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header border-bottom border-dark border-5">
                  <div class="d-flex">
                    <div class="big-blue-circle me-3 mb-3"></div>
                    <div class="red-circle me-2"></div>
                    <div class="yellow-circle me-2"></div>
                    <div class="green-circle me-2"></div>
                  </div>
                  <div class="d-flex">
                    <button type="button" class="btn-close fs-1 me-4" id="closePopUp"></button>
                  </div>
                </div>
                <div class="modal-body">
                  <div class="d-flex justify-content-center">
                    <div class="gray-box">
                      <div class="d-flex justify-content-center">
                        <div class="small-red-circle m-1"></div>
                        <div class="small-red-circle m-1"></div>
                      </div>
                      <div class="d-flex justify-content-center">
                        <div class=" display-green d-flex justify-content-center align-items-center" id="${pokemon.index}PokemonImageMain">
                        </div>
                      </div>
                      <div class="d-flex justify-content-between px-4">
                        <div class="medium-red-circle m-1"></div>
                        <ion-icon name="menu-sharp" class="fs-1"></ion-icon>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 class="total-comments">Comments (2)</h3>
                    <section class="all-comments"></section>
                  </div>
                  <div>
                    <h3 class="add-comment-heading">Add a comment</h3>
                    <form action="#" class="form" id="form">
                      <input type="text" placeholder="Your name" id="username" />
                      <textarea name="comment" id="comment" cols="20" rows="10" placeholder="Your insights"></textarea>
                      <input type="submit" value="Comment" class="btn btn-primary"/>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;

  document.body.appendChild(commentContainer);

  const closePopUp = document.getElementById('closePopUp');
  closePopUp.addEventListener('click', () => {
    document.body.removeChild(commentContainer);
  });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);

/***/ }),

/***/ "./src/display-likes.js":
/*!******************************!*\
  !*** ./src/display-likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display_pokemon_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-pokemon-list.js */ "./src/display-pokemon-list.js");
/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-return-assign */
/* eslint-disable no-return-await */



const recievedLikes = async () => await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/euJcQ410fgo2CbYVuqO8/likes/', {
  method: 'GET',
})
  .then((res) => res.json())
  .then((json) => (0,_display_pokemon_list_js__WEBPACK_IMPORTED_MODULE_0__.displayLikes)(json));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (recievedLikes);

/***/ }),

/***/ "./src/display-pokemon-list.js":
/*!*************************************!*\
  !*** ./src/display-pokemon-list.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchPokemons": () => (/* binding */ fetchPokemons),
/* harmony export */   "displayLikes": () => (/* binding */ displayLikes),
/* harmony export */   "SetPokemonCount": () => (/* binding */ SetPokemonCount),
/* harmony export */   "indexer": () => (/* binding */ indexer)
/* harmony export */ });
/* harmony import */ var _add_new_like_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-like.js */ "./src/add-new-like.js");
/* harmony import */ var _display_likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-likes.js */ "./src/display-likes.js");
/* harmony import */ var _display_comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display-comments.js */ "./src/display-comments.js");
/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */





const pokemonContainer = document.getElementById('pokemonContainer');
const spinner = document.getElementById('spinner');

const getNumberAllPokemons = document.getElementById('getNumberAllPokemons');

const offset = 1;
const limit = 8;

let pokemon;

const fetchPokemons = async () => {
  await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1500')
    .then((response) => response.json())
    .then((data) => {
      createPokemon(data);
      spinner.classList.add('d-none');
    }).then(() => addLikesListener());
};

function indexer(pokedex) {
  pokedex.results.forEach((pokemon, index) => {
    pokemon.index = index + 1;
  });
  return pokedex.results;
}

function SetPokemonCount(total) {
  const getNumberAllPokemons = document.getElementById('getNumberAllPokemons');
  getNumberAllPokemons.textContent = total;
}

function createPokemon(pokedex) {
  let page = 1;
  const indexerPokedex = indexer(pokedex);

  SetPokemonCount(indexerPokedex.length);

  const displayPage = (page) => {
    pokemonContainer.innerHTML = '';

    const end = page * 30;
    const start = end - 30;
    indexerPokedex.filter((item, i) => {
      if (i >= start && i < end) {
        return item;
      }
    }).forEach((pokemon) => {
      const showPopUpBtn = document.createElement('button');
      showPopUpBtn.classList.add('Comments-button', 'mt-3');
      showPopUpBtn.textContent = 'Comments';
      
      showPopUpBtn.addEventListener('click', () => {
        console.log(pokemon);
      });

      pokemonContainer.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card">
          <div class="card-header d-flex border-bottom border-5 border-dark">
            <div class="big-blue-circle me-3 mb-3"></div>
            <div class="red-circle me-2"></div>
            <div class="yellow-circle me-2"></div>
            <div class="green-circle me-2"></div>
          </div>
          <div class="card-body d-flex justify-content-center">
            <div class="gray-box">
              <div class="d-flex justify-content-center">
                <div class="small-red-circle m-1"></div>
                <div class="small-red-circle m-1"></div>
              </div>
              <div class="d-flex justify-content-center">
                <div class="display-green d-flex justify-content-center align-items-center" id="${pokemon.index}PokemonImageMain">
                </div>
              </div>
              <div class="d-flex justify-content-between px-4">
                <div class="medium-red-circle m-1"></div>
                <ion-icon name="menu-sharp" class="fs-1"></ion-icon>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <div class="name-pokemon d-flex align-items-center ps-3">${pokemon.name}</div>
              <button type="button" class="like-btn gray-dark-circle-heart-button d-flex justify-content-center align-items-center" data-pokemon-id=${pokemon.index} id="${pokemon.index}_likeButton">
                <span id="${pokemon.index}_colorHeart" class="white-heart border-5"></span>
              </button>
            </div>
            <div class="d-flex justify-content-between mt-3">
              <div class="pokemon-number d-flex align-items-center ps-2 pe-3">#${pokemon.index}</div>
              <div class="likes-box d-flex align-items-center ps-3"><span class="pe-2" id="${pokemon.index}_pokemonLikes">0</span>Likes</div>
            </div>

            ${showPopUpBtn.outerHTML}

          </div>
        </div>
      </div>
    </div>
      `;

      const spriteContainer = document.getElementById(`${pokemon.index}PokemonImageMain`);
      const sprite = document.createElement('img');
      sprite.className = 'pokemon-image';
      sprite.alt = 'pokemon-image';

      const imageExists = (imageUrl) => {
        let ans = 'https://i.pinimg.com/originals/0d/b1/0c/0db10c1dd328a29177abbd8d992a370f.gif';
        const http = new XMLHttpRequest();
        http.open('HEAD', imageUrl, false);
        http.send();
        if (http.status !== 404) {
          ans = imageUrl;
        }
        return ans;
      };

      let imagePokemon;

      if (pokemon.index <= 898) {
        imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png`;
      } else {
        imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index + 9102}.png`;
      }

      sprite.src = imageExists(imagePokemon);

      spriteContainer.appendChild(sprite);
    });

    (0,_display_likes_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  };

  const previous = document.getElementById('previous');
  const next = document.getElementById('next');

  displayPage(page);

  previous.addEventListener('click', () => {
    if (page > 1) {
      page -= 1;
      displayPage(page);
      (0,_display_likes_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      addLikesListener();
    }
  });

  next.addEventListener('click', () => {
    if (page < indexerPokedex.length / 30) {
      page += 1;
      displayPage(page);
      (0,_display_likes_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      addLikesListener();
    }
  });
}

function displayLikes(likes) {
  likes.forEach((like) => {
    const pokemonLikes = document.getElementById(`${like.item_id}_pokemonLikes`);
    if (pokemonLikes) {
      pokemonLikes.textContent = like.likes;
      const colorHeart = document.getElementById(`${like.item_id}_colorHeart`);
      colorHeart.classList.remove('white-heart');
      colorHeart.classList.add('red-heart');
    }
  });
}

function addLikesListener(page) {
  const likeButtons = document.querySelectorAll('.like-btn');
  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', () => {
      (0,_add_new_like_js__WEBPACK_IMPORTED_MODULE_0__["default"])(parseInt(likeButton.dataset.pokemonId, 10));
    });
  });
}



/***/ }),

/***/ "./src/get-comments.js":
/*!*****************************!*\
  !*** ./src/get-comments.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable linebreak-style */
const ID = 'sOH39XWa9gMFVPLXHU2G';
const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${ID}/comments`;

const getComments = async (itemId) => {
  const fetchComments = `${URL}?item_id=item${itemId}`;
  const response = await fetch(fetchComments, {
    method: 'GET',
  });
  const list = await response.json();
  return list;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);


/***/ }),

/***/ "./src/assets/fonts/pokemon-classic.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/pokemon-classic.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b405427a72cc3786ceb.ttf";

/***/ }),

/***/ "./src/assets/fonts/pokemon-solid.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/pokemon-solid.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d60be1f7ff5fcc21fc1.ttf";

/***/ }),

/***/ "./src/assets/img/pokeball-logo.png":
/*!******************************************!*\
  !*** ./src/assets/img/pokeball-logo.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a835fb9ba399394db72d.png";

/***/ }),

/***/ "./src/assets/img/pokemon pattern.png":
/*!********************************************!*\
  !*** ./src/assets/img/pokemon pattern.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1b510e604327fa1a587.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_img_pokeball_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/pokeball-logo.png */ "./src/assets/img/pokeball-logo.png");
/* harmony import */ var _assets_img_pokemon_pattern_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/img/pokemon pattern.png */ "./src/assets/img/pokemon pattern.png");
/* harmony import */ var _get_comments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-comments.js */ "./src/get-comments.js");
/* harmony import */ var _display_pokemon_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display-pokemon-list.js */ "./src/display-pokemon-list.js");
/* harmony import */ var _display_likes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display-likes.js */ "./src/display-likes.js");
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */







const body = document.querySelector('body');

body.style.backgroundImage = `url(${_assets_img_pokemon_pattern_png__WEBPACK_IMPORTED_MODULE_2__})`;

const pokeballLogo = document.getElementById('pokeballLogo');
const allComments = document.querySelector('.all-comments');
const singleComment = document.createElement('p');

const getAllComments = async () => {
  const response = await (0,_get_comments_js__WEBPACK_IMPORTED_MODULE_3__["default"])(1);
  response.forEach((resp) => {
    singleComment.innerHTML = `${resp.creation_date} ${resp.username}: ${resp.comment}`;
    // allComments.appendChild(singleComment);
  });
};

getAllComments();

const pokemonContainer = document.getElementById('pokemonContainer');

let offset;
let limit;

// add icon to the page
const link = document.createElement('link');
link.rel = 'icon';
link.href = _assets_img_pokeball_logo_png__WEBPACK_IMPORTED_MODULE_1__;
document.head.appendChild(link);

const img = document.createElement('img');
img.src = _assets_img_pokeball_logo_png__WEBPACK_IMPORTED_MODULE_1__;
img.alt = 'Pokeball';
img.classList.add('pokeball-logo');
pokeballLogo.appendChild(img);

(0,_display_pokemon_list_js__WEBPACK_IMPORTED_MODULE_4__.fetchPokemons)((offset = 1), (limit = 8));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFh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OztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ3FCO0FBQ2lDO0FBQ0M7QUFDWDtBQUNjO0FBQ1g7QUFDL0M7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDREQUFPLENBQUM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDREQUFXO0FBQ3BDO0FBQ0EsaUNBQWlDLG9CQUFvQixFQUFFLGNBQWMsSUFBSSxhQUFhO0FBQ3RGO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsVUFBVSwwREFBUTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vc3JjL2FkZC1uZXctbGlrZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9zcmMvZGlzcGxheS1jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9zcmMvZGlzcGxheS1saWtlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9zcmMvZGlzcGxheS1wb2tlbW9uLWxpc3QuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vc3JjL2dldC1jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL3Bva2Vtb24tc29saWQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvcG9rZW1vbi1jbGFzc2ljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAncG9rZW1vbi1zb2xpZCc7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAncG9rZW1vbi1jbGFzc2ljJztcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLW1haW4tYmctY29sb3I6ICNmZTAwNjU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdwb2tlbW9uLWNsYXNzaWMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAncG9rZW1vbi1zb2xpZCcsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xcclxcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5wb2tlYmFsbC1sb2dvIHtcXHJcXG4gIHdpZHRoOiA3NXB4O1xcclxcbiAgaGVpZ2h0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JCbHVlIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWViOGZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVmY2U4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYmlnLWJsdWUtY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43cztcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JCbHVlO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY2hhbmdlQmFja2dyb3VuZENvbG9yUmVkIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxYTFhO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5Njk2O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWNpcmNsZSB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUJhY2tncm91bmRDb2xvclJlZDtcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZUJhY2tncm91bmRDb2xvclllbGxvdyB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmIxYTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjRiZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnllbGxvdy1jaXJjbGUge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JZZWxsb3c7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JHcmVlbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhZmYyZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E3ZmY5NjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmdyZWVuLWNpcmNsZSB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjlzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUJhY2tncm91bmRDb2xvckdyZWVuO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyYXktYm94IHtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIGhlaWdodDogMjYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNDBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5zbWFsbC1yZWQtY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yUmVkO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWdyZWVuIHtcXHJcXG4gIHdpZHRoOiAxODBweDtcXHJcXG4gIGhlaWdodDogMTgwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2VjYzk4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5tZWRpdW0tcmVkLWNpcmNsZSB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUJhY2tncm91bmRDb2xvclJlZDtcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLXBva2Vtb24ge1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgd2lkdGg6IDIxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2M1YztcXHJcXG4gIGJvcmRlcjogc29saWQgNXB4ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5ncmF5LWRhcmstY2lyY2xlLWhlYXJ0LWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcXHJcXG59XFxyXFxuXFxyXFxuLndoaXRlLWhlYXJ0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgbWFyZ2luOiAwIDZweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndoaXRlLWhlYXJ0OjpiZWZvcmUsXFxyXFxuLndoaXRlLWhlYXJ0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi53aGl0ZS1oZWFydDo6YmVmb3JlIHtcXHJcXG4gIHRvcDogLTEwcHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ud2hpdGUtaGVhcnQ6OmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5yZWQtaGVhcnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgbWFyZ2luOiAwIDZweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1oZWFydDo6YmVmb3JlLFxcclxcbi5yZWQtaGVhcnQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWQtaGVhcnQ6OmJlZm9yZSB7XFxyXFxuICB0b3A6IC0xMHB4O1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1oZWFydDo6YWZ0ZXIge1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLkNvbW1lbnRzLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggIzAwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4udG90YWwtY29tbWVudHMsXFxyXFxuLmFkZC1jb21tZW50LWhlYWRpbmcge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICNiZWJlYmU7XFxyXFxuICBtYXJnaW46IDMwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb21tZW50LWhlYWRpbmcge1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFsbC1jb21tZW50cyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDAuODVyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSA+ICoge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi50LWNlbnRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxLjc1ZW0gMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1ib3gge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMjM4LCA5Nik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCA0MHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24taW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uLW51bWJlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTcwLCAyNDcpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCA0MHB4IDAgMDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5zcGlubmVyLWNlbnRlciB7XFxyXFxuICBtaW4taGVpZ2h0OiA2NDBweDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1saW5rLFxcclxcbi5wYWdlLWxpbms6aG92ZXIge1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggIzAwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogc29saWQgNXB4ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5hdCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkFyaWFsIEJsYWNrXFxcIiwgR2FkZ2V0LCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLDJEQUEyRDtFQUMzRCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDJEQUE2RDtFQUM3RCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxzQ0FBc0M7RUFDdEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsV0FB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QUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNDQUFzQztBQUN4Qzs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdwb2tlbW9uLXNvbGlkJztcXHJcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9wb2tlbW9uLXNvbGlkLnR0ZicpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ3Bva2Vtb24tY2xhc3NpYyc7XFxyXFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvcG9rZW1vbi1jbGFzc2ljLnR0ZicpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tbWFpbi1iZy1jb2xvcjogI2ZlMDA2NTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ3Bva2Vtb24tY2xhc3NpYycsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgZm9udC1mYW1pbHk6ICdwb2tlbW9uLXNvbGlkJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxyXFxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2ViYWxsLWxvZ28ge1xcclxcbiAgd2lkdGg6IDc1cHg7XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZUJhY2tncm91bmRDb2xvckJsdWUge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZWI4ZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NWZjZTg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5iaWctYmx1ZS1jaXJjbGUge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUJhY2tncm91bmRDb2xvckJsdWU7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JSZWQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjFhMWE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjk2OTY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5yZWQtY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yUmVkO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY2hhbmdlQmFja2dyb3VuZENvbG9yWWVsbG93IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYjFhO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmNGJkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ueWVsbG93LWNpcmNsZSB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUJhY2tncm91bmRDb2xvclllbGxvdztcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZUJhY2tncm91bmRDb2xvckdyZWVuIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFmZjJkO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdmZjk2O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ3JlZW4tY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuOXM7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yR3JlZW47XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JheS1ib3gge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgaGVpZ2h0OiAyNjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCA0MHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNtYWxsLXJlZC1jaXJjbGUge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JSZWQ7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktZ3JlZW4ge1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgaGVpZ2h0OiAxODBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZWNjOTg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGl1bS1yZWQtY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yUmVkO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtcG9rZW1vbiB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB3aWR0aDogMjEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYzVjO1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyYXktZGFyay1jaXJjbGUtaGVhcnQtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2hpdGUtaGVhcnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2hpdGUtaGVhcnQ6OmJlZm9yZSxcXHJcXG4ud2hpdGUtaGVhcnQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndoaXRlLWhlYXJ0OjpiZWZvcmUge1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi53aGl0ZS1oZWFydDo6YWZ0ZXIge1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1oZWFydCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWhlYXJ0OjpiZWZvcmUsXFxyXFxuLnJlZC1oZWFydDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1oZWFydDo6YmVmb3JlIHtcXHJcXG4gIHRvcDogLTEwcHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWhlYXJ0OjphZnRlciB7XFxyXFxuICBsZWZ0OiAxMHB4O1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uQ29tbWVudHMtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50b3RhbC1jb21tZW50cyxcXHJcXG4uYWRkLWNvbW1lbnQtaGVhZGluZyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2JlYmViZTtcXHJcXG4gIG1hcmdpbjogMzBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQtaGVhZGluZyB7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLWNvbW1lbnRzIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtID4gKiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnQtY2VudGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEuNzVlbSAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWJveCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyMzgsIDk2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDQwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbi1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24tbnVtYmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNzAsIDI0Nyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDQwcHggMCAwO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwaW5uZXItY2VudGVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDY0MHB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWxpbmssXFxyXFxuLnBhZ2UtbGluazpob3ZlciB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmF0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJpYWwgQmxhY2tcXFwiLCBHYWRnZXQsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcmV0dXJuLWF3YWl0ICovXHJcbmNvbnN0IGFkZE5ld0xpa2UgPSBhc3luYyAoaXRlbUlkKSA9PiB7XHJcbiAgY29uc3QgcG9rZW1vbkxpa2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aXRlbUlkfV9wb2tlbW9uTGlrZXNgKTtcclxuICBwb2tlbW9uTGlrZXMudGV4dENvbnRlbnQgPSBwYXJzZUludChwb2tlbW9uTGlrZXMudGV4dENvbnRlbnQsIDEwKSArIDE7XHJcbiAgY29uc3QgY29sb3JIZWFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l0ZW1JZH1fY29sb3JIZWFydGApO1xyXG4gIGNvbG9ySGVhcnQuY2xhc3NMaXN0LnJlbW92ZSgnd2hpdGUtaGVhcnQnKTtcclxuICBjb2xvckhlYXJ0LmNsYXNzTGlzdC5hZGQoJ3JlZC1oZWFydCcpO1xyXG4gIGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9ldUpjUTQxMGZnbzJDYllWdXFPOC9saWtlcy8nLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogaXRlbUlkIH0pLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZE5ld0xpa2U7XHJcbiIsImNvbnN0IGRpc3BsYXlDb21tZW50cyA9IChwb2tlbW9uKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tbWVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21tZW50LWNvbnRhaW5lcicpO1xuICBjb21tZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCIgaWQ9XCIke3Bva2Vtb24uaW5kZXh9cG9wVXBDb250YWluZXJcIiB0YWJpbmRleD1cIi0xXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIGJvcmRlci01XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiaWctYmx1ZS1jaXJjbGUgbWUtMyBtYi0zXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWQtY2lyY2xlIG1lLTJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInllbGxvdy1jaXJjbGUgbWUtMlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JlZW4tY2lyY2xlIG1lLTJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1jbG9zZSBmcy0xIG1lLTRcIiBpZD1cImNsb3NlUG9wVXBcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyYXktYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic21hbGwtcmVkLWNpcmNsZSBtLTFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbWFsbC1yZWQtY2lyY2xlIG0tMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiBkaXNwbGF5LWdyZWVuIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiIGlkPVwiJHtwb2tlbW9uLmluZGV4fVBva2Vtb25JbWFnZU1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gcHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGl1bS1yZWQtY2lyY2xlIG0tMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJtZW51LXNoYXJwXCIgY2xhc3M9XCJmcy0xXCI+PC9pb24taWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRvdGFsLWNvbW1lbnRzXCI+Q29tbWVudHMgKDIpPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJhbGwtY29tbWVudHNcIj48L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkZC1jb21tZW50LWhlYWRpbmdcIj5BZGQgYSBjb21tZW50PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiI1wiIGNsYXNzPVwiZm9ybVwiIGlkPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgaWQ9XCJ1c2VybmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJjb21tZW50XCIgaWQ9XCJjb21tZW50XCIgY29scz1cIjIwXCIgcm93cz1cIjEwXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRzXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ29tbWVudFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIGA7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21tZW50Q29udGFpbmVyKTtcblxuICBjb25zdCBjbG9zZVBvcFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlUG9wVXAnKTtcbiAgY2xvc2VQb3BVcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbW1lbnRDb250YWluZXIpO1xuICB9KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29tbWVudHM7IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hd2FpdCAqL1xyXG5cclxuaW1wb3J0IHsgZGlzcGxheUxpa2VzIH0gZnJvbSAnLi9kaXNwbGF5LXBva2Vtb24tbGlzdC5qcyc7XHJcblxyXG5jb25zdCByZWNpZXZlZExpa2VzID0gYXN5bmMgKCkgPT4gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2V1SmNRNDEwZmdvMkNiWVZ1cU84L2xpa2VzLycsIHtcclxuICBtZXRob2Q6ICdHRVQnLFxyXG59KVxyXG4gIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgLnRoZW4oKGpzb24pID0+IGRpc3BsYXlMaWtlcyhqc29uKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWNpZXZlZExpa2VzOyIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcblxyXG5pbXBvcnQgYWRkTmV3TGlrZSBmcm9tICcuL2FkZC1uZXctbGlrZS5qcyc7XHJcbmltcG9ydCByZWNpZXZlZExpa2VzIGZyb20gJy4vZGlzcGxheS1saWtlcy5qcyc7XHJcbmltcG9ydCBkaXNwbGF5Q29tbWVudHMgZnJvbSAnLi9kaXNwbGF5LWNvbW1lbnRzLmpzJztcclxuXHJcbmNvbnN0IHBva2Vtb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZW1vbkNvbnRhaW5lcicpO1xyXG5jb25zdCBzcGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwaW5uZXInKTtcclxuXHJcbmNvbnN0IGdldE51bWJlckFsbFBva2Vtb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dldE51bWJlckFsbFBva2Vtb25zJyk7XHJcblxyXG5jb25zdCBvZmZzZXQgPSAxO1xyXG5jb25zdCBsaW1pdCA9IDg7XHJcblxyXG5sZXQgcG9rZW1vbjtcclxuXHJcbmNvbnN0IGZldGNoUG9rZW1vbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9vZmZzZXQ9MCZsaW1pdD0xNTAwJylcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY3JlYXRlUG9rZW1vbihkYXRhKTtcclxuICAgICAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgIH0pLnRoZW4oKCkgPT4gYWRkTGlrZXNMaXN0ZW5lcigpKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGluZGV4ZXIocG9rZWRleCkge1xyXG4gIHBva2VkZXgucmVzdWx0cy5mb3JFYWNoKChwb2tlbW9uLCBpbmRleCkgPT4ge1xyXG4gICAgcG9rZW1vbi5pbmRleCA9IGluZGV4ICsgMTtcclxuICB9KTtcclxuICByZXR1cm4gcG9rZWRleC5yZXN1bHRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZXRQb2tlbW9uQ291bnQodG90YWwpIHtcclxuICBjb25zdCBnZXROdW1iZXJBbGxQb2tlbW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXROdW1iZXJBbGxQb2tlbW9ucycpO1xyXG4gIGdldE51bWJlckFsbFBva2Vtb25zLnRleHRDb250ZW50ID0gdG90YWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBva2Vtb24ocG9rZWRleCkge1xyXG4gIGxldCBwYWdlID0gMTtcclxuICBjb25zdCBpbmRleGVyUG9rZWRleCA9IGluZGV4ZXIocG9rZWRleCk7XHJcblxyXG4gIFNldFBva2Vtb25Db3VudChpbmRleGVyUG9rZWRleC5sZW5ndGgpO1xyXG5cclxuICBjb25zdCBkaXNwbGF5UGFnZSA9IChwYWdlKSA9PiB7XHJcbiAgICBwb2tlbW9uQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IGVuZCA9IHBhZ2UgKiAzMDtcclxuICAgIGNvbnN0IHN0YXJ0ID0gZW5kIC0gMzA7XHJcbiAgICBpbmRleGVyUG9rZWRleC5maWx0ZXIoKGl0ZW0sIGkpID0+IHtcclxuICAgICAgaWYgKGkgPj0gc3RhcnQgJiYgaSA8IGVuZCkge1xyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICB9XHJcbiAgICB9KS5mb3JFYWNoKChwb2tlbW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNob3dQb3BVcEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICBzaG93UG9wVXBCdG4uY2xhc3NMaXN0LmFkZCgnQ29tbWVudHMtYnV0dG9uJywgJ210LTMnKTtcclxuICAgICAgc2hvd1BvcFVwQnRuLnRleHRDb250ZW50ID0gJ0NvbW1lbnRzJztcclxuICAgICAgXHJcbiAgICAgIHNob3dQb3BVcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwb2tlbW9uKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBwb2tlbW9uQ29udGFpbmVyLmlubmVySFRNTCArPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyIGQtZmxleCBib3JkZXItYm90dG9tIGJvcmRlci01IGJvcmRlci1kYXJrXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiaWctYmx1ZS1jaXJjbGUgbWUtMyBtYi0zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWQtY2lyY2xlIG1lLTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInllbGxvdy1jaXJjbGUgbWUtMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JlZW4tY2lyY2xlIG1lLTJcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JheS1ib3hcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbWFsbC1yZWQtY2lyY2xlIG0tMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNtYWxsLXJlZC1jaXJjbGUgbS0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheS1ncmVlbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIiBpZD1cIiR7cG9rZW1vbi5pbmRleH1Qb2tlbW9uSW1hZ2VNYWluXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpdW0tcmVkLWNpcmNsZSBtLTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibWVudS1zaGFycFwiIGNsYXNzPVwiZnMtMVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lLXBva2Vtb24gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwcy0zXCI+JHtwb2tlbW9uLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJsaWtlLWJ0biBncmF5LWRhcmstY2lyY2xlLWhlYXJ0LWJ1dHRvbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIiBkYXRhLXBva2Vtb24taWQ9JHtwb2tlbW9uLmluZGV4fSBpZD1cIiR7cG9rZW1vbi5pbmRleH1fbGlrZUJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCIke3Bva2Vtb24uaW5kZXh9X2NvbG9ySGVhcnRcIiBjbGFzcz1cIndoaXRlLWhlYXJ0IGJvcmRlci01XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBva2Vtb24tbnVtYmVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHMtMiBwZS0zXCI+IyR7cG9rZW1vbi5pbmRleH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlrZXMtYm94IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHMtM1wiPjxzcGFuIGNsYXNzPVwicGUtMlwiIGlkPVwiJHtwb2tlbW9uLmluZGV4fV9wb2tlbW9uTGlrZXNcIj4wPC9zcGFuPkxpa2VzPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgJHtzaG93UG9wVXBCdG4ub3V0ZXJIVE1MfVxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG5cclxuICAgICAgY29uc3Qgc3ByaXRlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cG9rZW1vbi5pbmRleH1Qb2tlbW9uSW1hZ2VNYWluYCk7XHJcbiAgICAgIGNvbnN0IHNwcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICBzcHJpdGUuY2xhc3NOYW1lID0gJ3Bva2Vtb24taW1hZ2UnO1xyXG4gICAgICBzcHJpdGUuYWx0ID0gJ3Bva2Vtb24taW1hZ2UnO1xyXG5cclxuICAgICAgY29uc3QgaW1hZ2VFeGlzdHMgPSAoaW1hZ2VVcmwpID0+IHtcclxuICAgICAgICBsZXQgYW5zID0gJ2h0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy8wZC9iMS8wYy8wZGIxMGMxZGQzMjhhMjkxNzdhYmJkOGQ5OTJhMzcwZi5naWYnO1xyXG4gICAgICAgIGNvbnN0IGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICBodHRwLm9wZW4oJ0hFQUQnLCBpbWFnZVVybCwgZmFsc2UpO1xyXG4gICAgICAgIGh0dHAuc2VuZCgpO1xyXG4gICAgICAgIGlmIChodHRwLnN0YXR1cyAhPT0gNDA0KSB7XHJcbiAgICAgICAgICBhbnMgPSBpbWFnZVVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFucztcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCBpbWFnZVBva2Vtb247XHJcblxyXG4gICAgICBpZiAocG9rZW1vbi5pbmRleCA8PSA4OTgpIHtcclxuICAgICAgICBpbWFnZVBva2Vtb24gPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uLyR7cG9rZW1vbi5pbmRleH0ucG5nYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbWFnZVBva2Vtb24gPSBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uLyR7cG9rZW1vbi5pbmRleCArIDkxMDJ9LnBuZ2A7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwcml0ZS5zcmMgPSBpbWFnZUV4aXN0cyhpbWFnZVBva2Vtb24pO1xyXG5cclxuICAgICAgc3ByaXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwcml0ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZWNpZXZlZExpa2VzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJldmlvdXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlvdXMnKTtcclxuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcclxuXHJcbiAgZGlzcGxheVBhZ2UocGFnZSk7XHJcblxyXG4gIHByZXZpb3VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKHBhZ2UgPiAxKSB7XHJcbiAgICAgIHBhZ2UgLT0gMTtcclxuICAgICAgZGlzcGxheVBhZ2UocGFnZSk7XHJcbiAgICAgIHJlY2lldmVkTGlrZXMoKTtcclxuICAgICAgYWRkTGlrZXNMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKHBhZ2UgPCBpbmRleGVyUG9rZWRleC5sZW5ndGggLyAzMCkge1xyXG4gICAgICBwYWdlICs9IDE7XHJcbiAgICAgIGRpc3BsYXlQYWdlKHBhZ2UpO1xyXG4gICAgICByZWNpZXZlZExpa2VzKCk7XHJcbiAgICAgIGFkZExpa2VzTGlzdGVuZXIoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUxpa2VzKGxpa2VzKSB7XHJcbiAgbGlrZXMuZm9yRWFjaCgobGlrZSkgPT4ge1xyXG4gICAgY29uc3QgcG9rZW1vbkxpa2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bGlrZS5pdGVtX2lkfV9wb2tlbW9uTGlrZXNgKTtcclxuICAgIGlmIChwb2tlbW9uTGlrZXMpIHtcclxuICAgICAgcG9rZW1vbkxpa2VzLnRleHRDb250ZW50ID0gbGlrZS5saWtlcztcclxuICAgICAgY29uc3QgY29sb3JIZWFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2xpa2UuaXRlbV9pZH1fY29sb3JIZWFydGApO1xyXG4gICAgICBjb2xvckhlYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ3doaXRlLWhlYXJ0Jyk7XHJcbiAgICAgIGNvbG9ySGVhcnQuY2xhc3NMaXN0LmFkZCgncmVkLWhlYXJ0Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZExpa2VzTGlzdGVuZXIocGFnZSkge1xyXG4gIGNvbnN0IGxpa2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2UtYnRuJyk7XHJcbiAgbGlrZUJ1dHRvbnMuZm9yRWFjaCgobGlrZUJ1dHRvbikgPT4ge1xyXG4gICAgbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgYWRkTmV3TGlrZShwYXJzZUludChsaWtlQnV0dG9uLmRhdGFzZXQucG9rZW1vbklkLCAxMCkpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgZmV0Y2hQb2tlbW9ucywgZGlzcGxheUxpa2VzLCBTZXRQb2tlbW9uQ291bnQsIGluZGV4ZXIsXHJcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbmNvbnN0IElEID0gJ3NPSDM5WFdhOWdNRlZQTFhIVTJHJztcclxuY29uc3QgVVJMID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7SUR9L2NvbW1lbnRzYDtcclxuXHJcbmNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xyXG4gIGNvbnN0IGZldGNoQ29tbWVudHMgPSBgJHtVUkx9P2l0ZW1faWQ9aXRlbSR7aXRlbUlkfWA7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmZXRjaENvbW1lbnRzLCB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGxpc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgcmV0dXJuIGxpc3Q7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRDb21tZW50cztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBwb2tlYmFsbCBmcm9tICcuL2Fzc2V0cy9pbWcvcG9rZWJhbGwtbG9nby5wbmcnO1xyXG5pbXBvcnQgYmdJbWFnZSBmcm9tICcuL2Fzc2V0cy9pbWcvcG9rZW1vbiBwYXR0ZXJuLnBuZyc7XHJcbmltcG9ydCBnZXRDb21tZW50cyBmcm9tICcuL2dldC1jb21tZW50cy5qcyc7XHJcbmltcG9ydCB7IGZldGNoUG9rZW1vbnMgfSBmcm9tICcuL2Rpc3BsYXktcG9rZW1vbi1saXN0LmpzJztcclxuaW1wb3J0IHJlY2lldmVkTGlrZXMgZnJvbSAnLi9kaXNwbGF5LWxpa2VzLmpzJztcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiZ0ltYWdlfSlgO1xyXG5cclxuY29uc3QgcG9rZWJhbGxMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bva2ViYWxsTG9nbycpO1xyXG5jb25zdCBhbGxDb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY29tbWVudHMnKTtcclxuY29uc3Qgc2luZ2xlQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbmNvbnN0IGdldEFsbENvbW1lbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0Q29tbWVudHMoMSk7XHJcbiAgcmVzcG9uc2UuZm9yRWFjaCgocmVzcCkgPT4ge1xyXG4gICAgc2luZ2xlQ29tbWVudC5pbm5lckhUTUwgPSBgJHtyZXNwLmNyZWF0aW9uX2RhdGV9ICR7cmVzcC51c2VybmFtZX06ICR7cmVzcC5jb21tZW50fWA7XHJcbiAgICAvLyBhbGxDb21tZW50cy5hcHBlbmRDaGlsZChzaW5nbGVDb21tZW50KTtcclxuICB9KTtcclxufTtcclxuXHJcbmdldEFsbENvbW1lbnRzKCk7XHJcblxyXG5jb25zdCBwb2tlbW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bva2Vtb25Db250YWluZXInKTtcclxuXHJcbmxldCBvZmZzZXQ7XHJcbmxldCBsaW1pdDtcclxuXHJcbi8vIGFkZCBpY29uIHRvIHRoZSBwYWdlXHJcbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbmxpbmsucmVsID0gJ2ljb24nO1xyXG5saW5rLmhyZWYgPSBwb2tlYmFsbDtcclxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHJcbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5pbWcuc3JjID0gcG9rZWJhbGw7XHJcbmltZy5hbHQgPSAnUG9rZWJhbGwnO1xyXG5pbWcuY2xhc3NMaXN0LmFkZCgncG9rZWJhbGwtbG9nbycpO1xyXG5wb2tlYmFsbExvZ28uYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbmZldGNoUG9rZW1vbnMoKG9mZnNldCA9IDEpLCAobGltaXQgPSA4KSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==