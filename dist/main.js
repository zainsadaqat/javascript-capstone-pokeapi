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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'pokemon-solid';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'pokemon-classic';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\n:root {\r\n  --main-bg-color: #fe0065;\r\n}\r\n\r\n@keyframes backgroundPositionBody {\r\n  from {\r\n    background-position: 0 0;\r\n  }\r\n\r\n  to {\r\n    background-position: 40% 10%;\r\n  }\r\n}\r\n\r\nbody {\r\n  font-family: 'pokemon-classic', sans-serif;\r\n  min-height: 100vh;\r\n  animation-duration: 20s;\r\n  animation-name: backgroundPositionBody;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n  transition-timing-function: linear;\r\n}\r\n\r\n.nav-link {\r\n  font-family: 'pokemon-solid', sans-serif;\r\n  font-size: 18px;\r\n  letter-spacing: 4px;\r\n  color: black !important;\r\n}\r\n\r\n.pokeball-logo {\r\n  width: 75px;\r\n  height: 75px;\r\n}\r\n\r\n.active {\r\n  text-decoration: underline;\r\n}\r\n\r\n.footer {\r\n  position: sticky;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n.card {\r\n  background-color: var(--main-bg-color);\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\r\n  padding: 20px;\r\n  margin: 20px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n@keyframes changeBackgroundColorBlue {\r\n  from {\r\n    background-color: #1eb8ff;\r\n  }\r\n\r\n  to {\r\n    background-color: #85fce8;\r\n  }\r\n}\r\n\r\n.big-blue-circle {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.7s;\r\n  animation-name: changeBackgroundColorBlue;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorRed {\r\n  from {\r\n    background-color: #ff1a1a;\r\n  }\r\n\r\n  to {\r\n    background-color: #ff9696;\r\n  }\r\n}\r\n\r\n.red-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorYellow {\r\n  from {\r\n    background-color: #fffb1a;\r\n  }\r\n\r\n  to {\r\n    background-color: #fdf4bd;\r\n  }\r\n}\r\n\r\n.yellow-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.5s;\r\n  animation-name: changeBackgroundColorYellow;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorGreen {\r\n  from {\r\n    background-color: #1aff2d;\r\n  }\r\n\r\n  to {\r\n    background-color: #a7ff96;\r\n  }\r\n}\r\n\r\n.green-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.9s;\r\n  animation-name: changeBackgroundColorGreen;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.card-header {\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.gray-box {\r\n  width: 250px;\r\n  height: 260px;\r\n  background-color: #e0e0e0;\r\n  border-radius: 0 0 0 40px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.small-red-circle {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 10px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.display-green {\r\n  width: 180px;\r\n  height: 180px;\r\n  background-color: #7ecc98;\r\n  border-radius: 0;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.medium-red-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 15px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.card-footer {\r\n  background-color: var(--main-bg-color);\r\n  border: none;\r\n}\r\n\r\n.name-pokemon {\r\n  height: 60px;\r\n  width: 210px;\r\n  background-color: #00cc5c;\r\n  border: solid 5px #000;\r\n}\r\n\r\n.gray-dark-circle-heart-button {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 30px;\r\n  border: 5px solid #000;\r\n  background-color: #424242;\r\n}\r\n\r\n.white-heart {\r\n  background-color: white;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin: 0 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 20px;\r\n}\r\n\r\n.white-heart::before,\r\n.white-heart::after {\r\n  content: \"\";\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  position: absolute;\r\n  width: 20px;\r\n}\r\n\r\n.white-heart::before {\r\n  top: -10px;\r\n  left: 0;\r\n}\r\n\r\n.white-heart::after {\r\n  left: 10px;\r\n  top: 0;\r\n}\r\n\r\n.red-heart {\r\n  background-color: red;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin: 0 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 20px;\r\n}\r\n\r\n.red-heart::before,\r\n.red-heart::after {\r\n  content: \"\";\r\n  background-color: red;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  position: absolute;\r\n  width: 20px;\r\n}\r\n\r\n.red-heart::before {\r\n  top: -10px;\r\n  left: 0;\r\n}\r\n\r\n.red-heart::after {\r\n  left: 10px;\r\n  top: 0;\r\n}\r\n\r\n.Comments-button {\r\n  width: 100%;\r\n  height: 60px;\r\n  border-radius: 30px;\r\n  border: 5px solid #000;\r\n  background-color: #424242;\r\n  color: white;\r\n}\r\n\r\n.modal-content {\r\n  border: solid 5px #000;\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.add-comment-heading {\r\n  margin-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.all-comments {\r\n  text-align: center;\r\n  font-size: 0.85rem;\r\n  color: white;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form > * {\r\n  margin-bottom: 1em;\r\n  padding: 1em;\r\n  border: 4px solid black;\r\n  border-radius: 6px;\r\n}\r\n\r\n.t-center {\r\n  text-align: center;\r\n  padding: 1.75em 0.5em;\r\n}\r\n\r\n.likes-box {\r\n  background-color: rgb(249, 238, 96);\r\n  border-radius: 0 0 0 40px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.pokemon-image {\r\n  width: 100%;\r\n}\r\n\r\n.pokemon-number {\r\n  background-color: rgb(0, 170, 247);\r\n  border-radius: 0 40px 0 0;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.spinner-center {\r\n  min-height: 640px;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.page-link,\r\n.page-link:hover {\r\n  border: solid 5px #000;\r\n  background-color: #424242;\r\n  color: white;\r\n}\r\n\r\n.nav-item {\r\n  background-color: var(--main-bg-color);\r\n  border: solid 5px #000;\r\n}\r\n\r\n.at {\r\n  font-family: \"Arial Black\", Gadget, sans-serif;\r\n}\r\n\r\n.comment-container {\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 100;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.modal-dialog {\r\n  border-radius: 15px;\r\n}\r\n\r\n.fs-close {\r\n  font-size: 90px !important;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,4BAA4B;EAC5B,2DAA2D;EAC3D,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;EAC9B,2DAA6D;EAC7D,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;EACT,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE;IACE,wBAAwB;EAC1B;;EAEA;IACE,4BAA4B;EAC9B;AACF;;AAEA;EACE,0CAA0C;EAC1C,iBAAiB;EACjB,uBAAuB;EACvB,sCAAsC;EACtC,mCAAmC;EACnC,8BAA8B;EAC9B,kCAAkC;AACpC;;AAEA;EACE,wCAAwC;EACxC,eAAe;EACf,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,sCAAsC;EACtC,mBAAmB;EACnB,yCAAyC;EACzC,aAAa;EACb,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,wBAAwB;EACxB,yCAAyC;EACzC,mCAAmC;EACnC,8BAA8B;AAChC;;AAEA;EACE;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,wBAAwB;EACxB,wCAAwC;EACxC,mCAAmC;EACnC,8BAA8B;AAChC;;AAEA;EACE;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,wBAAwB;EACxB,2CAA2C;EAC3C,mCAAmC;EACnC,8BAA8B;AAChC;;AAEA;EACE;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,wBAAwB;EACxB,0CAA0C;EAC1C,mCAAmC;EACnC,8BAA8B;AAChC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,wBAAwB;EACxB,wCAAwC;EACxC,mCAAmC;EACnC,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,wBAAwB;EACxB,wCAAwC;EACxC,mCAAmC;EACnC,8BAA8B;AAChC;;AAEA;EACE,sCAAsC;EACtC,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,yBAAyB;AAC3B;;AAEA;EACE,uBAAuB;EACvB,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,yBAAyB;EACzB,WAAW;AACb;;AAEA;;EAEE,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,UAAU;EACV,OAAO;AACT;;AAEA;EACE,UAAU;EACV,MAAM;AACR;;AAEA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,yBAAyB;EACzB,WAAW;AACb;;AAEA;;EAEE,WAAW;EACX,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,UAAU;EACV,OAAO;AACT;;AAEA;EACE,UAAU;EACV,MAAM;AACR;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,mCAAmC;EACnC,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kCAAkC;EAClC,yBAAyB;EACzB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;;EAEE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,sBAAsB;AACxB;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,MAAM;EACN,OAAO;EACP,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["@font-face {\r\n  font-family: 'pokemon-solid';\r\n  src: url('./assets/fonts/pokemon-solid.ttf') format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'pokemon-classic';\r\n  src: url('./assets/fonts/pokemon-classic.ttf') format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\n:root {\r\n  --main-bg-color: #fe0065;\r\n}\r\n\r\n@keyframes backgroundPositionBody {\r\n  from {\r\n    background-position: 0 0;\r\n  }\r\n\r\n  to {\r\n    background-position: 40% 10%;\r\n  }\r\n}\r\n\r\nbody {\r\n  font-family: 'pokemon-classic', sans-serif;\r\n  min-height: 100vh;\r\n  animation-duration: 20s;\r\n  animation-name: backgroundPositionBody;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n  transition-timing-function: linear;\r\n}\r\n\r\n.nav-link {\r\n  font-family: 'pokemon-solid', sans-serif;\r\n  font-size: 18px;\r\n  letter-spacing: 4px;\r\n  color: black !important;\r\n}\r\n\r\n.pokeball-logo {\r\n  width: 75px;\r\n  height: 75px;\r\n}\r\n\r\n.active {\r\n  text-decoration: underline;\r\n}\r\n\r\n.footer {\r\n  position: sticky;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n.card {\r\n  background-color: var(--main-bg-color);\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\r\n  padding: 20px;\r\n  margin: 20px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n@keyframes changeBackgroundColorBlue {\r\n  from {\r\n    background-color: #1eb8ff;\r\n  }\r\n\r\n  to {\r\n    background-color: #85fce8;\r\n  }\r\n}\r\n\r\n.big-blue-circle {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.7s;\r\n  animation-name: changeBackgroundColorBlue;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorRed {\r\n  from {\r\n    background-color: #ff1a1a;\r\n  }\r\n\r\n  to {\r\n    background-color: #ff9696;\r\n  }\r\n}\r\n\r\n.red-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorYellow {\r\n  from {\r\n    background-color: #fffb1a;\r\n  }\r\n\r\n  to {\r\n    background-color: #fdf4bd;\r\n  }\r\n}\r\n\r\n.yellow-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.5s;\r\n  animation-name: changeBackgroundColorYellow;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorGreen {\r\n  from {\r\n    background-color: #1aff2d;\r\n  }\r\n\r\n  to {\r\n    background-color: #a7ff96;\r\n  }\r\n}\r\n\r\n.green-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.9s;\r\n  animation-name: changeBackgroundColorGreen;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.card-header {\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.gray-box {\r\n  width: 250px;\r\n  height: 260px;\r\n  background-color: #e0e0e0;\r\n  border-radius: 0 0 0 40px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.small-red-circle {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 10px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.display-green {\r\n  width: 180px;\r\n  height: 180px;\r\n  background-color: #7ecc98;\r\n  border-radius: 0;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.medium-red-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 15px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.card-footer {\r\n  background-color: var(--main-bg-color);\r\n  border: none;\r\n}\r\n\r\n.name-pokemon {\r\n  height: 60px;\r\n  width: 210px;\r\n  background-color: #00cc5c;\r\n  border: solid 5px #000;\r\n}\r\n\r\n.gray-dark-circle-heart-button {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 30px;\r\n  border: 5px solid #000;\r\n  background-color: #424242;\r\n}\r\n\r\n.white-heart {\r\n  background-color: white;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin: 0 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 20px;\r\n}\r\n\r\n.white-heart::before,\r\n.white-heart::after {\r\n  content: \"\";\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  position: absolute;\r\n  width: 20px;\r\n}\r\n\r\n.white-heart::before {\r\n  top: -10px;\r\n  left: 0;\r\n}\r\n\r\n.white-heart::after {\r\n  left: 10px;\r\n  top: 0;\r\n}\r\n\r\n.red-heart {\r\n  background-color: red;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin: 0 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 20px;\r\n}\r\n\r\n.red-heart::before,\r\n.red-heart::after {\r\n  content: \"\";\r\n  background-color: red;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  position: absolute;\r\n  width: 20px;\r\n}\r\n\r\n.red-heart::before {\r\n  top: -10px;\r\n  left: 0;\r\n}\r\n\r\n.red-heart::after {\r\n  left: 10px;\r\n  top: 0;\r\n}\r\n\r\n.Comments-button {\r\n  width: 100%;\r\n  height: 60px;\r\n  border-radius: 30px;\r\n  border: 5px solid #000;\r\n  background-color: #424242;\r\n  color: white;\r\n}\r\n\r\n.modal-content {\r\n  border: solid 5px #000;\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.add-comment-heading {\r\n  margin-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.all-comments {\r\n  text-align: center;\r\n  font-size: 0.85rem;\r\n  color: white;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form > * {\r\n  margin-bottom: 1em;\r\n  padding: 1em;\r\n  border: 4px solid black;\r\n  border-radius: 6px;\r\n}\r\n\r\n.t-center {\r\n  text-align: center;\r\n  padding: 1.75em 0.5em;\r\n}\r\n\r\n.likes-box {\r\n  background-color: rgb(249, 238, 96);\r\n  border-radius: 0 0 0 40px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.pokemon-image {\r\n  width: 100%;\r\n}\r\n\r\n.pokemon-number {\r\n  background-color: rgb(0, 170, 247);\r\n  border-radius: 0 40px 0 0;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.spinner-center {\r\n  min-height: 640px;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.page-link,\r\n.page-link:hover {\r\n  border: solid 5px #000;\r\n  background-color: #424242;\r\n  color: white;\r\n}\r\n\r\n.nav-item {\r\n  background-color: var(--main-bg-color);\r\n  border: solid 5px #000;\r\n}\r\n\r\n.at {\r\n  font-family: \"Arial Black\", Gadget, sans-serif;\r\n}\r\n\r\n.comment-container {\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 100;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.modal-dialog {\r\n  border-radius: 15px;\r\n}\r\n\r\n.fs-close {\r\n  font-size: 90px !important;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/comments-handler.js":
/*!*********************************!*\
  !*** ./src/comments-handler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displaycomments": () => (/* binding */ displaycomments),
/* harmony export */   "sendComment": () => (/* binding */ sendComment),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */

const displaycomments = (comments) => {
  let eachComment = `<h2 class="mb-2"><span id="totalComments">${comments.length}</span> Comments</h2>
  <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Comment</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
  `;
  comments.forEach((comment, index) => {
    eachComment += `
    <tr>
      <th>${index + 1}</th>
      <td>${comment.username}</td>
      <td>${comment.comment}</td>
      <td>${comment.creation_date}</td>
    </tr>
    `;
  });
  eachComment += `
  </tbody>
  </table>`;
  return eachComment;
};
const getComments = async (itemId, commentsContainer) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sOH39XWa9gMFVPLXHU2G/comments?item_id=${itemId}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      commentsContainer.innerHTML = displaycomments(JSON.parse(result));
    });
};

const sendComment = async (itemId, username, comment, commentsContainer) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sOH39XWa9gMFVPLXHU2G/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item_id: itemId,
      username,
      comment,
    }),
    redirect: 'follow',
  }).then((res) => {
    return res.text();
  }).then(() => {
    getComments(itemId, commentsContainer);
  });
};

/* const displayComments = (comments) => {
   */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);


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
/* harmony import */ var _comments_handler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments-handler.js */ "./src/comments-handler.js");
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
      showPopUpBtn.id = 'showPopUpBtn';
      showPopUpBtn.textContent = 'Comments';

      pokemonContainer.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-12" id="pokedexContainer">
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

            <button type="button" class="Comments-button mt-3" data-bs-toggle="modal" data-bs-target="#popUpContainer${pokemon.index}" id="openComments">
            Comments
            </button>

            <div class="modal fade rounded-3" tabindex="-1" aria-labelledby="popUpContainerLabel${pokemon.index}" aria-hidden="true" id="popUpContainer${pokemon.index}">
            <div class="modal-dialog modal-xl rounded-3">
              <div class="modal-content">
                <div class="modal-header border-bottom border-dark border-5">
                  <div class="d-flex">
                    <div class="big-blue-circle me-3 mb-3"></div>
                    <div class="red-circle me-2"></div>
                    <div class="yellow-circle me-2"></div>
                    <div class="green-circle me-2"></div>
                  </div>
                  <div class="d-flex">
                    <button type="button" class="btn close me-3" data-bs-dismiss="modal">
                      <ion-icon class="fs-close" name="close"></ion-icon>
                    </button>
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
                        <div class=" display-green d-flex justify-content-center align-items-center" id="${pokemon.index}PokemonImageComment">
                        </div>
                      </div>
                      <div class="d-flex justify-content-between px-4">
                        <div class="medium-red-circle m-1"></div>
                        <ion-icon name="menu-sharp" class="fs-1"></ion-icon>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 class="add-comment-heading">Add a comment</h3>
                    <div id="commentsForm">

                    <form class="form" id="form" onsubmit="return false">
                      <input type="hidden" name="pokemonId" value="${pokemon.index}" id="pokemonId">
                      <input type="text" placeholder="Your name" id="username" />
                      <textarea name="comment" id="comment" cols="20" rows="10" placeholder="Your insights"></textarea>
                      <input type="submit" value="Comment" class="btn btn-dark disabled" id="submitComment">
                    </form>

                    <div class="d-flex flex-column justify-content-center align-items-center" id="displayComments">
                    </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;

      const spriteContainer = document.getElementById(`${pokemon.index}PokemonImageMain`);
      const spriteContainerComments = document.getElementById(`${pokemon.index}PokemonImageComment`);
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
      spriteContainerComments.appendChild(sprite.cloneNode(true));
    });

    (0,_display_likes_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  };

  const previous = document.getElementById('previous');
  const next = document.getElementById('next');

  displayPage(page);

  const updateButtons = () => {
    pokemonContainer.querySelectorAll('form').forEach((form) => {
      form.elements.username.addEventListener('input', () => {
        if (form.elements.username.value !== '' && form.elements.comment.value !== '') {
          form.elements.submitComment.classList.remove('disabled');
        } else {
          form.elements.submitComment.classList.add('disabled');
        }
      });

      form.elements.comment.addEventListener('input', () => {
        if (form.elements.username.value !== '' && form.elements.comment.value !== '') {
          form.elements.submitComment.classList.remove('disabled');
        } else {
          form.elements.submitComment.classList.add('disabled');
        }
      });
      form.elements.submitComment.disabled = false;
      form.elements.submitComment.addEventListener(('click'), () => {
        (0,_comments_handler_js__WEBPACK_IMPORTED_MODULE_2__.sendComment)(form.elements.pokemonId.value,
          form.elements.username.value,
          form.elements.comment.value,
          form.parentNode.childNodes[3]);
      });
    });

    pokemonContainer.childNodes.forEach((pokedexContainer) => {
      pokedexContainer.addEventListener('click', (event) => {
        if (event.target.id === 'openComments') {
          (0,_comments_handler_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pokedexContainer.querySelector('#pokemonId').value, pokedexContainer.querySelector('#displayComments'));
        }
      });
    });
  };

  updateButtons();

  previous.addEventListener('click', () => {
    if (page > 1) {
      page -= 1;
      displayPage(page);
      (0,_display_likes_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      addLikesListener();
      updateButtons();
    }
  });

  next.addEventListener('click', () => {
    if (page < indexerPokedex.length / 30) {
      page += 1;
      displayPage(page);
      (0,_display_likes_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      addLikesListener();
      updateButtons();
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
/* harmony import */ var _comments_handler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments-handler.js */ "./src/comments-handler.js");
/* harmony import */ var _display_pokemon_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display-pokemon-list.js */ "./src/display-pokemon-list.js");
/* harmony import */ var _display_likes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display-likes.js */ "./src/display-likes.js");
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */







const body = document.querySelector('body');

body.style.backgroundImage = `url(${_assets_img_pokemon_pattern_png__WEBPACK_IMPORTED_MODULE_2__})`;

const pokeballLogo = document.getElementById('pokeballLogo');
const allComments = document.querySelector('.all-comments');
const singleComment = document.createElement('p');
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

const btnConsole = document.getElementById('showPopUpBtn');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFB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O0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsVUFBVSwwREFBUTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUFhO0FBQ2I7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL3NyYy9hZGQtbmV3LWxpa2UuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vc3JjL2NvbW1lbnRzLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vc3JjL2Rpc3BsYXktbGlrZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vc3JjL2Rpc3BsYXktcG9rZW1vbi1saXN0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvcG9rZW1vbi1zb2xpZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9wb2tlbW9uLWNsYXNzaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdwb2tlbW9uLXNvbGlkJztcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdwb2tlbW9uLWNsYXNzaWMnO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tbWFpbi1iZy1jb2xvcjogI2ZlMDA2NTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBiYWNrZ3JvdW5kUG9zaXRpb25Cb2R5IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQwJSAxMCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdwb2tlbW9uLWNsYXNzaWMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDIwcztcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBiYWNrZ3JvdW5kUG9zaXRpb25Cb2R5O1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgZm9udC1mYW1pbHk6ICdwb2tlbW9uLXNvbGlkJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiA0cHg7XFxyXFxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2ViYWxsLWxvZ28ge1xcclxcbiAgd2lkdGg6IDc1cHg7XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZUJhY2tncm91bmRDb2xvckJsdWUge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZWI4ZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NWZjZTg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5iaWctYmx1ZS1jaXJjbGUge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUJhY2tncm91bmRDb2xvckJsdWU7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JSZWQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjFhMWE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjk2OTY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5yZWQtY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yUmVkO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY2hhbmdlQmFja2dyb3VuZENvbG9yWWVsbG93IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYjFhO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmNGJkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ueWVsbG93LWNpcmNsZSB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUJhY2tncm91bmRDb2xvclllbGxvdztcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZUJhY2tncm91bmRDb2xvckdyZWVuIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFmZjJkO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdmZjk2O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ3JlZW4tY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuOXM7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yR3JlZW47XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JheS1ib3gge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgaGVpZ2h0OiAyNjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCA0MHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNtYWxsLXJlZC1jaXJjbGUge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JSZWQ7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktZ3JlZW4ge1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgaGVpZ2h0OiAxODBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZWNjOTg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGl1bS1yZWQtY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yUmVkO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtcG9rZW1vbiB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB3aWR0aDogMjEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYzVjO1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyYXktZGFyay1jaXJjbGUtaGVhcnQtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2hpdGUtaGVhcnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2hpdGUtaGVhcnQ6OmJlZm9yZSxcXHJcXG4ud2hpdGUtaGVhcnQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndoaXRlLWhlYXJ0OjpiZWZvcmUge1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi53aGl0ZS1oZWFydDo6YWZ0ZXIge1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1oZWFydCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWhlYXJ0OjpiZWZvcmUsXFxyXFxuLnJlZC1oZWFydDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1oZWFydDo6YmVmb3JlIHtcXHJcXG4gIHRvcDogLTEwcHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWhlYXJ0OjphZnRlciB7XFxyXFxuICBsZWZ0OiAxMHB4O1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uQ29tbWVudHMtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudC1oZWFkaW5nIHtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hbGwtY29tbWVudHMge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gPiAqIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udC1jZW50ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMS43NWVtIDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtYm94IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDIzOCwgOTYpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNDBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbi1udW1iZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE3MCwgMjQ3KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgNDBweCAwIDA7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3Bpbm5lci1jZW50ZXIge1xcclxcbiAgbWluLWhlaWdodDogNjQwcHg7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtbGluayxcXHJcXG4ucGFnZS1saW5rOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogc29saWQgNXB4ICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYXQge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJBcmlhbCBCbGFja1xcXCIsIEdhZGdldCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWRpYWxvZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZnMtY2xvc2Uge1xcclxcbiAgZm9udC1zaXplOiA5MHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsMkRBQTJEO0VBQzNELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsMkRBQTZEO0VBQzdELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7QUFDRjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHNDQUFz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QUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAncG9rZW1vbi1zb2xpZCc7XFxyXFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvcG9rZW1vbi1zb2xpZC50dGYnKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdwb2tlbW9uLWNsYXNzaWMnO1xcclxcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL3Bva2Vtb24tY2xhc3NpYy50dGYnKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLW1haW4tYmctY29sb3I6ICNmZTAwNjU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYmFja2dyb3VuZFBvc2l0aW9uQm9keSB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MCUgMTAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAncG9rZW1vbi1jbGFzc2ljJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyMHM7XFxyXFxuICBhbmltYXRpb24tbmFtZTogYmFja2dyb3VuZFBvc2l0aW9uQm9keTtcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAncG9rZW1vbi1zb2xpZCcsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xcclxcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5wb2tlYmFsbC1sb2dvIHtcXHJcXG4gIHdpZHRoOiA3NXB4O1xcclxcbiAgaGVpZ2h0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAyMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JCbHVlIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWViOGZmO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVmY2U4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYmlnLWJsdWUtY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43cztcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JCbHVlO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY2hhbmdlQmFja2dyb3VuZENvbG9yUmVkIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxYTFhO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5Njk2O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWNpcmNsZSB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUJhY2tncm91bmRDb2xvclJlZDtcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZUJhY2tncm91bmRDb2xvclllbGxvdyB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmIxYTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjRiZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnllbGxvdy1jaXJjbGUge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JZZWxsb3c7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JHcmVlbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhZmYyZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E3ZmY5NjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmdyZWVuLWNpcmNsZSB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjlzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUJhY2tncm91bmRDb2xvckdyZWVuO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyYXktYm94IHtcXHJcXG4gIHdpZHRoOiAyNTBweDtcXHJcXG4gIGhlaWdodDogMjYwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNDBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5zbWFsbC1yZWQtY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yUmVkO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWdyZWVuIHtcXHJcXG4gIHdpZHRoOiAxODBweDtcXHJcXG4gIGhlaWdodDogMTgwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2VjYzk4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5tZWRpdW0tcmVkLWNpcmNsZSB7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUJhY2tncm91bmRDb2xvclJlZDtcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLXBva2Vtb24ge1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgd2lkdGg6IDIxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2M1YztcXHJcXG4gIGJvcmRlcjogc29saWQgNXB4ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5ncmF5LWRhcmstY2lyY2xlLWhlYXJ0LWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcXHJcXG59XFxyXFxuXFxyXFxuLndoaXRlLWhlYXJ0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgbWFyZ2luOiAwIDZweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndoaXRlLWhlYXJ0OjpiZWZvcmUsXFxyXFxuLndoaXRlLWhlYXJ0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi53aGl0ZS1oZWFydDo6YmVmb3JlIHtcXHJcXG4gIHRvcDogLTEwcHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ud2hpdGUtaGVhcnQ6OmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5yZWQtaGVhcnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgbWFyZ2luOiAwIDZweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1oZWFydDo6YmVmb3JlLFxcclxcbi5yZWQtaGVhcnQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWQtaGVhcnQ6OmJlZm9yZSB7XFxyXFxuICB0b3A6IC0xMHB4O1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1oZWFydDo6YWZ0ZXIge1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLkNvbW1lbnRzLWJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggIzAwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQtaGVhZGluZyB7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLWNvbW1lbnRzIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtID4gKiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnQtY2VudGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEuNzVlbSAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWJveCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyMzgsIDk2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDQwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbi1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24tbnVtYmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNzAsIDI0Nyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDQwcHggMCAwO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwaW5uZXItY2VudGVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDY0MHB4O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWxpbmssXFxyXFxuLnBhZ2UtbGluazpob3ZlciB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmF0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQXJpYWwgQmxhY2tcXFwiLCBHYWRnZXQsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1kaWFsb2cge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZzLWNsb3NlIHtcXHJcXG4gIGZvbnQtc2l6ZTogOTBweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hd2FpdCAqL1xyXG5jb25zdCBhZGROZXdMaWtlID0gYXN5bmMgKGl0ZW1JZCkgPT4ge1xyXG4gIGNvbnN0IHBva2Vtb25MaWtlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l0ZW1JZH1fcG9rZW1vbkxpa2VzYCk7XHJcbiAgcG9rZW1vbkxpa2VzLnRleHRDb250ZW50ID0gcGFyc2VJbnQocG9rZW1vbkxpa2VzLnRleHRDb250ZW50LCAxMCkgKyAxO1xyXG4gIGNvbnN0IGNvbG9ySGVhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpdGVtSWR9X2NvbG9ySGVhcnRgKTtcclxuICBjb2xvckhlYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ3doaXRlLWhlYXJ0Jyk7XHJcbiAgY29sb3JIZWFydC5jbGFzc0xpc3QuYWRkKCdyZWQtaGVhcnQnKTtcclxuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZXVKY1E0MTBmZ28yQ2JZVnVxTzgvbGlrZXMvJywge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGl0ZW1JZCB9KSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGROZXdMaWtlO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBsaW5lYnJlYWstc3R5bGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgYXJyb3ctYm9keS1zdHlsZSAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3BsYXljb21tZW50cyA9IChjb21tZW50cykgPT4ge1xyXG4gIGxldCBlYWNoQ29tbWVudCA9IGA8aDIgY2xhc3M9XCJtYi0yXCI+PHNwYW4gaWQ9XCJ0b3RhbENvbW1lbnRzXCI+JHtjb21tZW50cy5sZW5ndGh9PC9zcGFuPiBDb21tZW50czwvaDI+XHJcbiAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtZGFyayB0YWJsZS1zdHJpcGVkXCI+XHJcbiAgPHRoZWFkPlxyXG4gICAgPHRyPlxyXG4gICAgICA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD5cclxuICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TmFtZTwvdGg+XHJcbiAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNvbW1lbnQ8L3RoPlxyXG4gICAgICA8dGggc2NvcGU9XCJjb2xcIj5EYXRlPC90aD5cclxuICAgIDwvdHI+XHJcbiAgPC90aGVhZD5cclxuICA8dGJvZHk+XHJcbiAgYDtcclxuICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50LCBpbmRleCkgPT4ge1xyXG4gICAgZWFjaENvbW1lbnQgKz0gYFxyXG4gICAgPHRyPlxyXG4gICAgICA8dGg+JHtpbmRleCArIDF9PC90aD5cclxuICAgICAgPHRkPiR7Y29tbWVudC51c2VybmFtZX08L3RkPlxyXG4gICAgICA8dGQ+JHtjb21tZW50LmNvbW1lbnR9PC90ZD5cclxuICAgICAgPHRkPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfTwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gICAgYDtcclxuICB9KTtcclxuICBlYWNoQ29tbWVudCArPSBgXHJcbiAgPC90Ym9keT5cclxuICA8L3RhYmxlPmA7XHJcbiAgcmV0dXJuIGVhY2hDb21tZW50O1xyXG59O1xyXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpdGVtSWQsIGNvbW1lbnRzQ29udGFpbmVyKSA9PiB7XHJcbiAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxyXG4gIH07XHJcblxyXG4gIGF3YWl0IGZldGNoKGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9zT0gzOVhXYTlnTUZWUExYSFUyRy9jb21tZW50cz9pdGVtX2lkPSR7aXRlbUlkfWAsIHJlcXVlc3RPcHRpb25zKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXHJcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGNvbW1lbnRzQ29udGFpbmVyLmlubmVySFRNTCA9IGRpc3BsYXljb21tZW50cyhKU09OLnBhcnNlKHJlc3VsdCkpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VuZENvbW1lbnQgPSBhc3luYyAoaXRlbUlkLCB1c2VybmFtZSwgY29tbWVudCwgY29tbWVudHNDb250YWluZXIpID0+IHtcclxuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvc09IMzlYV2E5Z01GVlBMWEhVMkcvY29tbWVudHMnLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICBpdGVtX2lkOiBpdGVtSWQsXHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBjb21tZW50LFxyXG4gICAgfSksXHJcbiAgICByZWRpcmVjdDogJ2ZvbGxvdycsXHJcbiAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICByZXR1cm4gcmVzLnRleHQoKTtcclxuICB9KS50aGVuKCgpID0+IHtcclxuICAgIGdldENvbW1lbnRzKGl0ZW1JZCwgY29tbWVudHNDb250YWluZXIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuLyogY29uc3QgZGlzcGxheUNvbW1lbnRzID0gKGNvbW1lbnRzKSA9PiB7XHJcbiAgICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRDb21tZW50cztcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hd2FpdCAqL1xyXG5cclxuaW1wb3J0IHsgZGlzcGxheUxpa2VzIH0gZnJvbSAnLi9kaXNwbGF5LXBva2Vtb24tbGlzdC5qcyc7XHJcblxyXG5jb25zdCByZWNpZXZlZExpa2VzID0gYXN5bmMgKCkgPT4gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2V1SmNRNDEwZmdvMkNiWVZ1cU84L2xpa2VzLycsIHtcclxuICBtZXRob2Q6ICdHRVQnLFxyXG59KVxyXG4gIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgLnRoZW4oKGpzb24pID0+IGRpc3BsYXlMaWtlcyhqc29uKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWNpZXZlZExpa2VzOyIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgYXJyYXktY2FsbGJhY2stcmV0dXJuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcblxyXG5pbXBvcnQgYWRkTmV3TGlrZSBmcm9tICcuL2FkZC1uZXctbGlrZS5qcyc7XHJcbmltcG9ydCByZWNpZXZlZExpa2VzIGZyb20gJy4vZGlzcGxheS1saWtlcy5qcyc7XHJcbmltcG9ydCBnZXRDb21tZW50cywgeyBzZW5kQ29tbWVudCB9IGZyb20gJy4vY29tbWVudHMtaGFuZGxlci5qcyc7XHJcblxyXG5jb25zdCBwb2tlbW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bva2Vtb25Db250YWluZXInKTtcclxuY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGlubmVyJyk7XHJcblxyXG5jb25zdCBnZXROdW1iZXJBbGxQb2tlbW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXROdW1iZXJBbGxQb2tlbW9ucycpO1xyXG5cclxuY29uc3Qgb2Zmc2V0ID0gMTtcclxuY29uc3QgbGltaXQgPSA4O1xyXG5cclxubGV0IHBva2Vtb247XHJcblxyXG5jb25zdCBmZXRjaFBva2Vtb25zID0gYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IGZldGNoKCdodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/b2Zmc2V0PTAmbGltaXQ9MTUwMCcpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNyZWF0ZVBva2Vtb24oZGF0YSk7XHJcbiAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICB9KS50aGVuKCgpID0+IGFkZExpa2VzTGlzdGVuZXIoKSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpbmRleGVyKHBva2VkZXgpIHtcclxuICBwb2tlZGV4LnJlc3VsdHMuZm9yRWFjaCgocG9rZW1vbiwgaW5kZXgpID0+IHtcclxuICAgIHBva2Vtb24uaW5kZXggPSBpbmRleCArIDE7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHBva2VkZXgucmVzdWx0cztcclxufVxyXG5cclxuZnVuY3Rpb24gU2V0UG9rZW1vbkNvdW50KHRvdGFsKSB7XHJcbiAgY29uc3QgZ2V0TnVtYmVyQWxsUG9rZW1vbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0TnVtYmVyQWxsUG9rZW1vbnMnKTtcclxuICBnZXROdW1iZXJBbGxQb2tlbW9ucy50ZXh0Q29udGVudCA9IHRvdGFsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQb2tlbW9uKHBva2VkZXgpIHtcclxuICBsZXQgcGFnZSA9IDE7XHJcbiAgY29uc3QgaW5kZXhlclBva2VkZXggPSBpbmRleGVyKHBva2VkZXgpO1xyXG5cclxuICBTZXRQb2tlbW9uQ291bnQoaW5kZXhlclBva2VkZXgubGVuZ3RoKTtcclxuXHJcbiAgY29uc3QgZGlzcGxheVBhZ2UgPSAocGFnZSkgPT4ge1xyXG4gICAgcG9rZW1vbkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBjb25zdCBlbmQgPSBwYWdlICogMzA7XHJcbiAgICBjb25zdCBzdGFydCA9IGVuZCAtIDMwO1xyXG4gICAgaW5kZXhlclBva2VkZXguZmlsdGVyKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgIGlmIChpID49IHN0YXJ0ICYmIGkgPCBlbmQpIHtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgfVxyXG4gICAgfSkuZm9yRWFjaCgocG9rZW1vbikgPT4ge1xyXG4gICAgICBjb25zdCBzaG93UG9wVXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgc2hvd1BvcFVwQnRuLmNsYXNzTGlzdC5hZGQoJ0NvbW1lbnRzLWJ1dHRvbicsICdtdC0zJyk7XHJcbiAgICAgIHNob3dQb3BVcEJ0bi5pZCA9ICdzaG93UG9wVXBCdG4nO1xyXG4gICAgICBzaG93UG9wVXBCdG4udGV4dENvbnRlbnQgPSAnQ29tbWVudHMnO1xyXG5cclxuICAgICAgcG9rZW1vbkNvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTEyXCIgaWQ9XCJwb2tlZGV4Q29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBkLWZsZXggYm9yZGVyLWJvdHRvbSBib3JkZXItNSBib3JkZXItZGFya1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmlnLWJsdWUtY2lyY2xlIG1lLTMgbWItM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVkLWNpcmNsZSBtZS0yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5ZWxsb3ctY2lyY2xlIG1lLTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyZWVuLWNpcmNsZSBtZS0yXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyYXktYm94XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic21hbGwtcmVkLWNpcmNsZSBtLTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbWFsbC1yZWQtY2lyY2xlIG0tMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXktZ3JlZW4gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgaWQ9XCIke3Bva2Vtb24uaW5kZXh9UG9rZW1vbkltYWdlTWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBweC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaXVtLXJlZC1jaXJjbGUgbS0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cIm1lbnUtc2hhcnBcIiBjbGFzcz1cImZzLTFcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWUtcG9rZW1vbiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHBzLTNcIj4ke3Bva2Vtb24ubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImxpa2UtYnRuIGdyYXktZGFyay1jaXJjbGUtaGVhcnQtYnV0dG9uIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiIGRhdGEtcG9rZW1vbi1pZD0ke3Bva2Vtb24uaW5kZXh9IGlkPVwiJHtwb2tlbW9uLmluZGV4fV9saWtlQnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIiR7cG9rZW1vbi5pbmRleH1fY29sb3JIZWFydFwiIGNsYXNzPVwid2hpdGUtaGVhcnQgYm9yZGVyLTVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG10LTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9rZW1vbi1udW1iZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwcy0yIHBlLTNcIj4jJHtwb2tlbW9uLmluZGV4fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaWtlcy1ib3ggZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwcy0zXCI+PHNwYW4gY2xhc3M9XCJwZS0yXCIgaWQ9XCIke3Bva2Vtb24uaW5kZXh9X3Bva2Vtb25MaWtlc1wiPjA8L3NwYW4+TGlrZXM8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIkNvbW1lbnRzLWJ1dHRvbiBtdC0zXCIgZGF0YS1icy10b2dnbGU9XCJtb2RhbFwiIGRhdGEtYnMtdGFyZ2V0PVwiI3BvcFVwQ29udGFpbmVyJHtwb2tlbW9uLmluZGV4fVwiIGlkPVwib3BlbkNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgIENvbW1lbnRzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGUgcm91bmRlZC0zXCIgdGFiaW5kZXg9XCItMVwiIGFyaWEtbGFiZWxsZWRieT1cInBvcFVwQ29udGFpbmVyTGFiZWwke3Bva2Vtb24uaW5kZXh9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgaWQ9XCJwb3BVcENvbnRhaW5lciR7cG9rZW1vbi5pbmRleH1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC14bCByb3VuZGVkLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIGJvcmRlci01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmlnLWJsdWUtY2lyY2xlIG1lLTMgbWItM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWQtY2lyY2xlIG1lLTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieWVsbG93LWNpcmNsZSBtZS0yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyZWVuLWNpcmNsZSBtZS0yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gY2xvc2UgbWUtM1wiIGRhdGEtYnMtZGlzbWlzcz1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW9uLWljb24gY2xhc3M9XCJmcy1jbG9zZVwiIG5hbWU9XCJjbG9zZVwiPjwvaW9uLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JheS1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic21hbGwtcmVkLWNpcmNsZSBtLTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNtYWxsLXJlZC1jaXJjbGUgbS0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiIGRpc3BsYXktZ3JlZW4gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgaWQ9XCIke3Bva2Vtb24uaW5kZXh9UG9rZW1vbkltYWdlQ29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBweC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpdW0tcmVkLWNpcmNsZSBtLTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJtZW51LXNoYXJwXCIgY2xhc3M9XCJmcy0xXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJhZGQtY29tbWVudC1oZWFkaW5nXCI+QWRkIGEgY29tbWVudDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbW1lbnRzRm9ybVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIiBpZD1cImZvcm1cIiBvbnN1Ym1pdD1cInJldHVybiBmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicG9rZW1vbklkXCIgdmFsdWU9XCIke3Bva2Vtb24uaW5kZXh9XCIgaWQ9XCJwb2tlbW9uSWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgaWQ9XCJ1c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImNvbW1lbnRcIiBpZD1cImNvbW1lbnRcIiBjb2xzPVwiMjBcIiByb3dzPVwiMTBcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNvbW1lbnRcIiBjbGFzcz1cImJ0biBidG4tZGFyayBkaXNhYmxlZFwiIGlkPVwic3VibWl0Q29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiIGlkPVwiZGlzcGxheUNvbW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuXHJcbiAgICAgIGNvbnN0IHNwcml0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Bva2Vtb24uaW5kZXh9UG9rZW1vbkltYWdlTWFpbmApO1xyXG4gICAgICBjb25zdCBzcHJpdGVDb250YWluZXJDb21tZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Bva2Vtb24uaW5kZXh9UG9rZW1vbkltYWdlQ29tbWVudGApO1xyXG4gICAgICBjb25zdCBzcHJpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgc3ByaXRlLmNsYXNzTmFtZSA9ICdwb2tlbW9uLWltYWdlJztcclxuICAgICAgc3ByaXRlLmFsdCA9ICdwb2tlbW9uLWltYWdlJztcclxuXHJcbiAgICAgIGNvbnN0IGltYWdlRXhpc3RzID0gKGltYWdlVXJsKSA9PiB7XHJcbiAgICAgICAgbGV0IGFucyA9ICdodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvMGQvYjEvMGMvMGRiMTBjMWRkMzI4YTI5MTc3YWJiZDhkOTkyYTM3MGYuZ2lmJztcclxuICAgICAgICBjb25zdCBodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgaHR0cC5vcGVuKCdIRUFEJywgaW1hZ2VVcmwsIGZhbHNlKTtcclxuICAgICAgICBodHRwLnNlbmQoKTtcclxuICAgICAgICBpZiAoaHR0cC5zdGF0dXMgIT09IDQwNCkge1xyXG4gICAgICAgICAgYW5zID0gaW1hZ2VVcmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbnM7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgaW1hZ2VQb2tlbW9uO1xyXG5cclxuICAgICAgaWYgKHBva2Vtb24uaW5kZXggPD0gODk4KSB7XHJcbiAgICAgICAgaW1hZ2VQb2tlbW9uID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi8ke3Bva2Vtb24uaW5kZXh9LnBuZ2A7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW1hZ2VQb2tlbW9uID0gYGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi8ke3Bva2Vtb24uaW5kZXggKyA5MTAyfS5wbmdgO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzcHJpdGUuc3JjID0gaW1hZ2VFeGlzdHMoaW1hZ2VQb2tlbW9uKTtcclxuXHJcbiAgICAgIHNwcml0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzcHJpdGUpO1xyXG4gICAgICBzcHJpdGVDb250YWluZXJDb21tZW50cy5hcHBlbmRDaGlsZChzcHJpdGUuY2xvbmVOb2RlKHRydWUpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlY2lldmVkTGlrZXMoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmV2aW91cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aW91cycpO1xyXG4gIGNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG5cclxuICBkaXNwbGF5UGFnZShwYWdlKTtcclxuXHJcbiAgY29uc3QgdXBkYXRlQnV0dG9ucyA9ICgpID0+IHtcclxuICAgIHBva2Vtb25Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpLmZvckVhY2goKGZvcm0pID0+IHtcclxuICAgICAgZm9ybS5lbGVtZW50cy51c2VybmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICBpZiAoZm9ybS5lbGVtZW50cy51c2VybmFtZS52YWx1ZSAhPT0gJycgJiYgZm9ybS5lbGVtZW50cy5jb21tZW50LnZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgZm9ybS5lbGVtZW50cy5zdWJtaXRDb21tZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvcm0uZWxlbWVudHMuc3VibWl0Q29tbWVudC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmb3JtLmVsZW1lbnRzLmNvbW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvcm0uZWxlbWVudHMudXNlcm5hbWUudmFsdWUgIT09ICcnICYmIGZvcm0uZWxlbWVudHMuY29tbWVudC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICAgIGZvcm0uZWxlbWVudHMuc3VibWl0Q29tbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmb3JtLmVsZW1lbnRzLnN1Ym1pdENvbW1lbnQuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3JtLmVsZW1lbnRzLnN1Ym1pdENvbW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgZm9ybS5lbGVtZW50cy5zdWJtaXRDb21tZW50LmFkZEV2ZW50TGlzdGVuZXIoKCdjbGljaycpLCAoKSA9PiB7XHJcbiAgICAgICAgc2VuZENvbW1lbnQoZm9ybS5lbGVtZW50cy5wb2tlbW9uSWQudmFsdWUsXHJcbiAgICAgICAgICBmb3JtLmVsZW1lbnRzLnVzZXJuYW1lLnZhbHVlLFxyXG4gICAgICAgICAgZm9ybS5lbGVtZW50cy5jb21tZW50LnZhbHVlLFxyXG4gICAgICAgICAgZm9ybS5wYXJlbnROb2RlLmNoaWxkTm9kZXNbM10pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHBva2Vtb25Db250YWluZXIuY2hpbGROb2Rlcy5mb3JFYWNoKChwb2tlZGV4Q29udGFpbmVyKSA9PiB7XHJcbiAgICAgIHBva2VkZXhDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnb3BlbkNvbW1lbnRzJykge1xyXG4gICAgICAgICAgZ2V0Q29tbWVudHMocG9rZWRleENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjcG9rZW1vbklkJykudmFsdWUsIHBva2VkZXhDb250YWluZXIucXVlcnlTZWxlY3RvcignI2Rpc3BsYXlDb21tZW50cycpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXBkYXRlQnV0dG9ucygpO1xyXG5cclxuICBwcmV2aW91cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChwYWdlID4gMSkge1xyXG4gICAgICBwYWdlIC09IDE7XHJcbiAgICAgIGRpc3BsYXlQYWdlKHBhZ2UpO1xyXG4gICAgICByZWNpZXZlZExpa2VzKCk7XHJcbiAgICAgIGFkZExpa2VzTGlzdGVuZXIoKTtcclxuICAgICAgdXBkYXRlQnV0dG9ucygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKHBhZ2UgPCBpbmRleGVyUG9rZWRleC5sZW5ndGggLyAzMCkge1xyXG4gICAgICBwYWdlICs9IDE7XHJcbiAgICAgIGRpc3BsYXlQYWdlKHBhZ2UpO1xyXG4gICAgICByZWNpZXZlZExpa2VzKCk7XHJcbiAgICAgIGFkZExpa2VzTGlzdGVuZXIoKTtcclxuICAgICAgdXBkYXRlQnV0dG9ucygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TGlrZXMobGlrZXMpIHtcclxuICBsaWtlcy5mb3JFYWNoKChsaWtlKSA9PiB7XHJcbiAgICBjb25zdCBwb2tlbW9uTGlrZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtsaWtlLml0ZW1faWR9X3Bva2Vtb25MaWtlc2ApO1xyXG4gICAgaWYgKHBva2Vtb25MaWtlcykge1xyXG4gICAgICBwb2tlbW9uTGlrZXMudGV4dENvbnRlbnQgPSBsaWtlLmxpa2VzO1xyXG4gICAgICBjb25zdCBjb2xvckhlYXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bGlrZS5pdGVtX2lkfV9jb2xvckhlYXJ0YCk7XHJcbiAgICAgIGNvbG9ySGVhcnQuY2xhc3NMaXN0LnJlbW92ZSgnd2hpdGUtaGVhcnQnKTtcclxuICAgICAgY29sb3JIZWFydC5jbGFzc0xpc3QuYWRkKCdyZWQtaGVhcnQnKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTGlrZXNMaXN0ZW5lcihwYWdlKSB7XHJcbiAgY29uc3QgbGlrZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZS1idG4nKTtcclxuICBsaWtlQnV0dG9ucy5mb3JFYWNoKChsaWtlQnV0dG9uKSA9PiB7XHJcbiAgICBsaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBhZGROZXdMaWtlKHBhcnNlSW50KGxpa2VCdXR0b24uZGF0YXNldC5wb2tlbW9uSWQsIDEwKSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBmZXRjaFBva2Vtb25zLCBkaXNwbGF5TGlrZXMsIFNldFBva2Vtb25Db3VudCwgaW5kZXhlcixcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHBva2ViYWxsIGZyb20gJy4vYXNzZXRzL2ltZy9wb2tlYmFsbC1sb2dvLnBuZyc7XHJcbmltcG9ydCBiZ0ltYWdlIGZyb20gJy4vYXNzZXRzL2ltZy9wb2tlbW9uIHBhdHRlcm4ucG5nJztcclxuaW1wb3J0IGdldENvbW1lbnRzIGZyb20gJy4vY29tbWVudHMtaGFuZGxlci5qcyc7XHJcbmltcG9ydCB7IGZldGNoUG9rZW1vbnMgfSBmcm9tICcuL2Rpc3BsYXktcG9rZW1vbi1saXN0LmpzJztcclxuaW1wb3J0IHJlY2lldmVkTGlrZXMgZnJvbSAnLi9kaXNwbGF5LWxpa2VzLmpzJztcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcblxyXG5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiZ0ltYWdlfSlgO1xyXG5cclxuY29uc3QgcG9rZWJhbGxMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bva2ViYWxsTG9nbycpO1xyXG5jb25zdCBhbGxDb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY29tbWVudHMnKTtcclxuY29uc3Qgc2luZ2xlQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuY29uc3QgcG9rZW1vbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlbW9uQ29udGFpbmVyJyk7XHJcblxyXG5sZXQgb2Zmc2V0O1xyXG5sZXQgbGltaXQ7XHJcblxyXG4vLyBhZGQgaWNvbiB0byB0aGUgcGFnZVxyXG5jb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG5saW5rLnJlbCA9ICdpY29uJztcclxubGluay5ocmVmID0gcG9rZWJhbGw7XHJcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XHJcblxyXG5jb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuaW1nLnNyYyA9IHBva2ViYWxsO1xyXG5pbWcuYWx0ID0gJ1Bva2ViYWxsJztcclxuaW1nLmNsYXNzTGlzdC5hZGQoJ3Bva2ViYWxsLWxvZ28nKTtcclxucG9rZWJhbGxMb2dvLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG5mZXRjaFBva2Vtb25zKChvZmZzZXQgPSAxKSwgKGxpbWl0ID0gOCkpO1xyXG5cclxuY29uc3QgYnRuQ29uc29sZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93UG9wVXBCdG4nKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9