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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n  font-family: 'pokemon-solid';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'pokemon-classic';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\n:root {\r\n  --main-bg-color: #fe0065;\r\n}\r\n\r\nbody {\r\n  font-family: 'pokemon-classic', sans-serif;\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.nav-link {\r\n  font-family: 'pokemon-solid', sans-serif;\r\n  font-size: 18px;\r\n  letter-spacing: 4px;\r\n}\r\n\r\n.pokeball-logo {\r\n  width: 75px;\r\n  height: 75px;\r\n}\r\n\r\n.active {\r\n  text-decoration: underline;\r\n}\r\n\r\n.footer {\r\n  position: sticky;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n.card {\r\n  background-color: var(--main-bg-color);\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\r\n  padding: 20px;\r\n  margin: 20px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n@keyframes changeBackgroundColorBlue {\r\n  from {\r\n    background-color: #1eb8ff;\r\n  }\r\n\r\n  to {\r\n    background-color: #85fce8;\r\n  }\r\n}\r\n\r\n.big-blue-circle {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.7s;\r\n  animation-name: changeBackgroundColorBlue;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorRed {\r\n  from {\r\n    background-color: #ff1a1a;\r\n  }\r\n\r\n  to {\r\n    background-color: #ff9696;\r\n  }\r\n}\r\n\r\n.red-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorYellow {\r\n  from {\r\n    background-color: #fffb1a;\r\n  }\r\n\r\n  to {\r\n    background-color: #fdf4bd;\r\n  }\r\n}\r\n\r\n.yellow-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.5s;\r\n  animation-name: changeBackgroundColorYellow;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorGreen {\r\n  from {\r\n    background-color: #1aff2d;\r\n  }\r\n\r\n  to {\r\n    background-color: #a7ff96;\r\n  }\r\n}\r\n\r\n.green-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.9s;\r\n  animation-name: changeBackgroundColorGreen;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.card-header {\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.gray-box {\r\n  width: 250px;\r\n  height: 260px;\r\n  background-color: #e0e0e0;\r\n  border-radius: 0 0 0 40px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.small-red-circle {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 10px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.display-green {\r\n  width: 180px;\r\n  height: 180px;\r\n  background-color: #7ecc98;\r\n  border-radius: 0;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.medium-red-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 15px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.card-footer {\r\n  background-color: var(--main-bg-color);\r\n  border: none;\r\n}\r\n\r\n.name-pokemon {\r\n  height: 60px;\r\n  width: 210px;\r\n  background-color: #00cc5c;\r\n  border: solid 5px #000;\r\n}\r\n\r\n.gray-dark-circle-heart-button {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 30px;\r\n  border: 5px solid #000;\r\n  background-color: #424242;\r\n}\r\n\r\n.white-heart {\r\n  background-color: white;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin: 0 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 20px;\r\n}\r\n\r\n.white-heart::before,\r\n.white-heart::after {\r\n  content: \"\";\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  position: absolute;\r\n  width: 20px;\r\n}\r\n\r\n.white-heart::before {\r\n  top: -10px;\r\n  left: 0;\r\n}\r\n\r\n.white-heart::after {\r\n  left: 10px;\r\n  top: 0;\r\n}\r\n\r\n.red-heart {\r\n  background-color: red;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin: 0 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 20px;\r\n}\r\n\r\n.red-heart::before,\r\n.red-heart::after {\r\n  content: \"\";\r\n  background-color: red;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  position: absolute;\r\n  width: 20px;\r\n}\r\n\r\n.red-heart::before {\r\n  top: -10px;\r\n  left: 0;\r\n}\r\n\r\n.red-heart::after {\r\n  left: 10px;\r\n  top: 0;\r\n}\r\n\r\n.Comments-button {\r\n  width: 100%;\r\n  height: 60px;\r\n  border-radius: 30px;\r\n  border: 5px solid #000;\r\n  background-color: #424242;\r\n  color: white;\r\n}\r\n\r\n.modal-content {\r\n  border: solid 5px #000;\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.total-comments,\r\n.add-comment-heading {\r\n  text-align: center;\r\n  color: #bebebe;\r\n  margin: 30px 0;\r\n}\r\n\r\n.add-comment-heading {\r\n  margin-top: 50px;\r\n}\r\n\r\n.all-comments {\r\n  text-align: center;\r\n  font-size: 0.85rem;\r\n  color: white;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form > * {\r\n  margin-bottom: 1em;\r\n  padding: 1em;\r\n  border: 4px solid black;\r\n  border-radius: 6px;\r\n}\r\n\r\n.t-center {\r\n  text-align: center;\r\n  padding: 1.75em 0.5em;\r\n}\r\n\r\n.likes-box {\r\n  background-color: rgb(249, 238, 96);\r\n  border-radius: 0 0 0 40px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.pokemon-image {\r\n  width: 100%;\r\n}\r\n\r\n.pokemon-number {\r\n  background-color: rgb(0, 170, 247);\r\n  border-radius: 0 40px 0 0;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.spinner-center {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.page-link,\r\n.page-link:hover {\r\n  border: solid 5px #000;\r\n  background-color: #424242;\r\n  color: white;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n  font-family: 'pokemon-solid';\r\n  src: url('./assets/fonts/pokemon-solid.ttf') format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'pokemon-classic';\r\n  src: url('./assets/fonts/pokemon-classic.ttf') format('woff');\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  text-decoration: none;\r\n}\r\n\r\n:root {\r\n  --main-bg-color: #fe0065;\r\n}\r\n\r\nbody {\r\n  font-family: 'pokemon-classic', sans-serif;\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.nav-link {\r\n  font-family: 'pokemon-solid', sans-serif;\r\n  font-size: 18px;\r\n  letter-spacing: 4px;\r\n}\r\n\r\n.pokeball-logo {\r\n  width: 75px;\r\n  height: 75px;\r\n}\r\n\r\n.active {\r\n  text-decoration: underline;\r\n}\r\n\r\n.footer {\r\n  position: sticky;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n.card {\r\n  background-color: var(--main-bg-color);\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\r\n  padding: 20px;\r\n  margin: 20px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n@keyframes changeBackgroundColorBlue {\r\n  from {\r\n    background-color: #1eb8ff;\r\n  }\r\n\r\n  to {\r\n    background-color: #85fce8;\r\n  }\r\n}\r\n\r\n.big-blue-circle {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.7s;\r\n  animation-name: changeBackgroundColorBlue;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorRed {\r\n  from {\r\n    background-color: #ff1a1a;\r\n  }\r\n\r\n  to {\r\n    background-color: #ff9696;\r\n  }\r\n}\r\n\r\n.red-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorYellow {\r\n  from {\r\n    background-color: #fffb1a;\r\n  }\r\n\r\n  to {\r\n    background-color: #fdf4bd;\r\n  }\r\n}\r\n\r\n.yellow-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.5s;\r\n  animation-name: changeBackgroundColorYellow;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n@keyframes changeBackgroundColorGreen {\r\n  from {\r\n    background-color: #1aff2d;\r\n  }\r\n\r\n  to {\r\n    background-color: #a7ff96;\r\n  }\r\n}\r\n\r\n.green-circle {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.9s;\r\n  animation-name: changeBackgroundColorGreen;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.card-header {\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.gray-box {\r\n  width: 250px;\r\n  height: 260px;\r\n  background-color: #e0e0e0;\r\n  border-radius: 0 0 0 40px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.small-red-circle {\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 10px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.display-green {\r\n  width: 180px;\r\n  height: 180px;\r\n  background-color: #7ecc98;\r\n  border-radius: 0;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.medium-red-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 15px;\r\n  border: 5px solid #000;\r\n  animation-duration: 0.3s;\r\n  animation-name: changeBackgroundColorRed;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\r\n}\r\n\r\n.card-footer {\r\n  background-color: var(--main-bg-color);\r\n  border: none;\r\n}\r\n\r\n.name-pokemon {\r\n  height: 60px;\r\n  width: 210px;\r\n  background-color: #00cc5c;\r\n  border: solid 5px #000;\r\n}\r\n\r\n.gray-dark-circle-heart-button {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 30px;\r\n  border: 5px solid #000;\r\n  background-color: #424242;\r\n}\r\n\r\n.white-heart {\r\n  background-color: white;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin: 0 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 20px;\r\n}\r\n\r\n.white-heart::before,\r\n.white-heart::after {\r\n  content: \"\";\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  position: absolute;\r\n  width: 20px;\r\n}\r\n\r\n.white-heart::before {\r\n  top: -10px;\r\n  left: 0;\r\n}\r\n\r\n.white-heart::after {\r\n  left: 10px;\r\n  top: 0;\r\n}\r\n\r\n.red-heart {\r\n  background-color: red;\r\n  display: inline-block;\r\n  height: 20px;\r\n  margin: 0 6px;\r\n  position: relative;\r\n  top: 0;\r\n  transform: rotate(-45deg);\r\n  width: 20px;\r\n}\r\n\r\n.red-heart::before,\r\n.red-heart::after {\r\n  content: \"\";\r\n  background-color: red;\r\n  border-radius: 50%;\r\n  height: 20px;\r\n  position: absolute;\r\n  width: 20px;\r\n}\r\n\r\n.red-heart::before {\r\n  top: -10px;\r\n  left: 0;\r\n}\r\n\r\n.red-heart::after {\r\n  left: 10px;\r\n  top: 0;\r\n}\r\n\r\n.Comments-button {\r\n  width: 100%;\r\n  height: 60px;\r\n  border-radius: 30px;\r\n  border: 5px solid #000;\r\n  background-color: #424242;\r\n  color: white;\r\n}\r\n\r\n.modal-content {\r\n  border: solid 5px #000;\r\n  background-color: var(--main-bg-color);\r\n}\r\n\r\n.total-comments,\r\n.add-comment-heading {\r\n  text-align: center;\r\n  color: #bebebe;\r\n  margin: 30px 0;\r\n}\r\n\r\n.add-comment-heading {\r\n  margin-top: 50px;\r\n}\r\n\r\n.all-comments {\r\n  text-align: center;\r\n  font-size: 0.85rem;\r\n  color: white;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form > * {\r\n  margin-bottom: 1em;\r\n  padding: 1em;\r\n  border: 4px solid black;\r\n  border-radius: 6px;\r\n}\r\n\r\n.t-center {\r\n  text-align: center;\r\n  padding: 1.75em 0.5em;\r\n}\r\n\r\n.likes-box {\r\n  background-color: rgb(249, 238, 96);\r\n  border-radius: 0 0 0 40px;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.pokemon-image {\r\n  width: 100%;\r\n}\r\n\r\n.pokemon-number {\r\n  background-color: rgb(0, 170, 247);\r\n  border-radius: 0 40px 0 0;\r\n  border: 5px solid #000;\r\n}\r\n\r\n.spinner-center {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.page-link,\r\n.page-link:hover {\r\n  border: solid 5px #000;\r\n  background-color: #424242;\r\n  color: white;\r\n}\r\n"],"sourceRoot":""}]);
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
const addNewLike = async (itemId) => await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/edd97Eq6uvObdGmWlx62/likes/', {
  method: 'POST',
  body: JSON.stringify({ item_id: itemId }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewLike);


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
/* eslint-disable no-return-assign */
/* eslint-disable no-return-await */



const recievedLikes = async () => await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/edd97Eq6uvObdGmWlx62/likes/', {
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
/* harmony export */   "displayLikes": () => (/* binding */ displayLikes)
/* harmony export */ });
/* harmony import */ var _add_new_like_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-new-like.js */ "./src/add-new-like.js");
/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */



/* eslint-disable no-unused-vars */
const pokemonContainer = document.getElementById('pokemonContainer');
const spinner = document.getElementById('spinner');

const offset = 1;
const limit = 8;

let pokemon;

// eslint-disable-next-line no-return-await
/* const fetchPokemon = async (id) => await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then((response) => response.json())
  .then((data) => {
    createPokemon(data);
    addLikesListener();
    pokemon = data;
    spinner.classList.add('d-none');
  }); */

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

/* function fetchPokemon(offset, limit) {
  spinner.classList.add('d-none');
  for (let i = offset; i <= offset + limit; i += 1) {
    fetchPokemon(i);
  }
} */

function createPokemon(pokedex) {
  let page = 1;
  const indexerPokedex = indexer(pokedex);
  const getNumberAllPokemons = document.getElementById('getNumberAllPokemons');

  getNumberAllPokemons.textContent = indexerPokedex.length;

  const displayPage = (page) => {
    pokemonContainer.innerHTML = '';

    const end = page * 30;
    const start = end - 30;
    indexerPokedex.filter((item, i) => {
      if (i >= start && i < end) {
        return item;
      }
    }).forEach((pokemon) => {
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
  
            <button type="button" class="Comments-button mt-3" data-bs-toggle="modal" data-bs-target="#commentsModal">
              Comments
            </button>
  
            <div
                    class="modal fade"
                    id="commentsModal"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div
                          class="modal-header border-bottom border-dark border-5"
                        >
                          <div class="d-flex">
                            <div class="big-blue-circle me-3 mb-3"></div>
                            <div class="red-circle me-2"></div>
                            <div class="yellow-circle me-2"></div>
                            <div class="green-circle me-2"></div>
                          </div>
                          <div class="d-flex">
                            <button
                              type="button"
                              class="btn-close fs-1 me-4"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
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
                                <div
                                  class="
                                    display-green
                                    d-flex
                                    justify-content-center
                                    align-items-center
                                  "
                                  id="PokemonImageComments"
                                >
                                  <img
                                    src="https://i.pinimg.com/originals/0d/b1/0c/0db10c1dd328a29177abbd8d992a370f.gif"
                                    alt="pikachu-image"
                                    class="pokemon-image"
                                  />
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
                              <input
                                type="text"
                                placeholder="Your name"
                                id="username"
                              />
                              <textarea
                                name="comment"
                                id="comment"
                                cols="20"
                                rows="10"
                                placeholder="Your insights"
                              ></textarea>
                              <input
                                type="submit"
                                value="Comment"
                                class="btn btn-primary"
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
          </div>
        </div>
      </div>
      `;

      const spriteContainer = document.getElementById(`${pokemon.index}PokemonImageMain`);
      const sprite = document.createElement('img');
      sprite.className = 'pokemon-image';
      sprite.alt = 'pokemon-image';
      sprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png`;

      spriteContainer.appendChild(sprite);
    });
  };

  const previous = document.getElementById('previous');
  const next = document.getElementById('next');

  displayPage(page);

  previous.addEventListener('click', () => {
    if (page > 1) {
      page -= 1;
      displayPage(page);
    }
  });

  next.addEventListener('click', () => {
    if (page < indexerPokedex.length / 30) {
      page += 1;
      displayPage(page);
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

function addLikesListener(data) {
  const likeButtons = document.querySelectorAll('.like-btn');
  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', () => {
      (0,_add_new_like_js__WEBPACK_IMPORTED_MODULE_0__["default"])(likeButton.dataset.pokemonId).then(
        () => {
          window.location.reload();
        },
      );
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
/* harmony import */ var _get_comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-comments.js */ "./src/get-comments.js");
/* harmony import */ var _display_pokemon_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-pokemon-list.js */ "./src/display-pokemon-list.js");
/* harmony import */ var _display_likes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display-likes.js */ "./src/display-likes.js");
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */






const pokeballLogo = document.getElementById('pokeballLogo');
const allComments = document.querySelector('.all-comments');
const singleComment = document.createElement('p');

const getAllComments = async () => {
  const response = await (0,_get_comments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(1);
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

(0,_display_pokemon_list_js__WEBPACK_IMPORTED_MODULE_3__.fetchPokemons)((offset = 1), (limit = 8));

(0,_display_likes_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ087QUFDaEcsNENBQTRDLDZJQUFtRDtBQUMvRiw0Q0FBNEMsaUpBQXFEO0FBQ2pHLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0Esc0RBQXNELG1DQUFtQywwRUFBMEUsdUJBQXVCLHlCQUF5QixLQUFLLG9CQUFvQixxQ0FBcUMsMEVBQTBFLHVCQUF1Qix5QkFBeUIsS0FBSyxXQUFXLDZCQUE2QixpQkFBaUIsZ0JBQWdCLHVCQUF1Qiw0QkFBNEIsS0FBSyxlQUFlLCtCQUErQixLQUFLLGNBQWMsaURBQWlELDZDQUE2QyxLQUFLLG1CQUFtQiwrQ0FBK0Msc0JBQXNCLDBCQUEwQixLQUFLLHdCQUF3QixrQkFBa0IsbUJBQW1CLEtBQUssaUJBQWlCLGlDQUFpQyxLQUFLLGlCQUFpQix1QkFBdUIsZ0JBQWdCLGtCQUFrQixLQUFLLGVBQWUsNkNBQTZDLDBCQUEwQixnREFBZ0Qsb0JBQW9CLG1CQUFtQiw2QkFBNkIsS0FBSyw4Q0FBOEMsWUFBWSxrQ0FBa0MsT0FBTyxjQUFjLGtDQUFrQyxPQUFPLEtBQUssMEJBQTBCLG1CQUFtQixvQkFBb0IsMEJBQTBCLDZCQUE2QiwrQkFBK0IsZ0RBQWdELDBDQUEwQyxxQ0FBcUMsS0FBSyw2Q0FBNkMsWUFBWSxrQ0FBa0MsT0FBTyxjQUFjLGtDQUFrQyxPQUFPLEtBQUsscUJBQXFCLGtCQUFrQixtQkFBbUIsMEJBQTBCLDZCQUE2QiwrQkFBK0IsK0NBQStDLDBDQUEwQyxxQ0FBcUMsS0FBSyxnREFBZ0QsWUFBWSxrQ0FBa0MsT0FBTyxjQUFjLGtDQUFrQyxPQUFPLEtBQUssd0JBQXdCLGtCQUFrQixtQkFBbUIsMEJBQTBCLDZCQUE2QiwrQkFBK0Isa0RBQWtELDBDQUEwQyxxQ0FBcUMsS0FBSywrQ0FBK0MsWUFBWSxrQ0FBa0MsT0FBTyxjQUFjLGtDQUFrQyxPQUFPLEtBQUssdUJBQXVCLGtCQUFrQixtQkFBbUIsMEJBQTBCLDZCQUE2QiwrQkFBK0IsaURBQWlELDBDQUEwQyxxQ0FBcUMsS0FBSyxzQkFBc0IsNkNBQTZDLEtBQUssbUJBQW1CLG1CQUFtQixvQkFBb0IsZ0NBQWdDLGdDQUFnQyw2QkFBNkIsS0FBSywyQkFBMkIsa0JBQWtCLG1CQUFtQiwwQkFBMEIsNkJBQTZCLCtCQUErQiwrQ0FBK0MsMENBQTBDLHFDQUFxQyxLQUFLLHdCQUF3QixtQkFBbUIsb0JBQW9CLGdDQUFnQyx1QkFBdUIsNkJBQTZCLEtBQUssNEJBQTRCLGtCQUFrQixtQkFBbUIsMEJBQTBCLDZCQUE2QiwrQkFBK0IsK0NBQStDLDBDQUEwQyxxQ0FBcUMsS0FBSyxzQkFBc0IsNkNBQTZDLG1CQUFtQixLQUFLLHVCQUF1QixtQkFBbUIsbUJBQW1CLGdDQUFnQyw2QkFBNkIsS0FBSyx3Q0FBd0Msa0JBQWtCLG1CQUFtQiwwQkFBMEIsNkJBQTZCLGdDQUFnQyxLQUFLLHNCQUFzQiw4QkFBOEIsNEJBQTRCLG1CQUFtQixvQkFBb0IseUJBQXlCLGFBQWEsZ0NBQWdDLGtCQUFrQixLQUFLLHNEQUFzRCxvQkFBb0IsOEJBQThCLHlCQUF5QixtQkFBbUIseUJBQXlCLGtCQUFrQixLQUFLLDhCQUE4QixpQkFBaUIsY0FBYyxLQUFLLDZCQUE2QixpQkFBaUIsYUFBYSxLQUFLLG9CQUFvQiw0QkFBNEIsNEJBQTRCLG1CQUFtQixvQkFBb0IseUJBQXlCLGFBQWEsZ0NBQWdDLGtCQUFrQixLQUFLLGtEQUFrRCxvQkFBb0IsNEJBQTRCLHlCQUF5QixtQkFBbUIseUJBQXlCLGtCQUFrQixLQUFLLDRCQUE0QixpQkFBaUIsY0FBYyxLQUFLLDJCQUEyQixpQkFBaUIsYUFBYSxLQUFLLDBCQUEwQixrQkFBa0IsbUJBQW1CLDBCQUEwQiw2QkFBNkIsZ0NBQWdDLG1CQUFtQixLQUFLLHdCQUF3Qiw2QkFBNkIsNkNBQTZDLEtBQUssa0RBQWtELHlCQUF5QixxQkFBcUIscUJBQXFCLEtBQUssOEJBQThCLHVCQUF1QixLQUFLLHVCQUF1Qix5QkFBeUIseUJBQXlCLG1CQUFtQixLQUFLLGVBQWUsb0JBQW9CLDZCQUE2QixLQUFLLG1CQUFtQix5QkFBeUIsbUJBQW1CLDhCQUE4Qix5QkFBeUIsS0FBSyxtQkFBbUIseUJBQXlCLDRCQUE0QixLQUFLLG9CQUFvQiwwQ0FBMEMsZ0NBQWdDLDZCQUE2QixLQUFLLHdCQUF3QixrQkFBa0IsS0FBSyx5QkFBeUIseUNBQXlDLGdDQUFnQyw2QkFBNkIsS0FBSyx5QkFBeUIseUJBQXlCLGVBQWUsZ0JBQWdCLHVDQUF1QyxLQUFLLHlDQUF5Qyw2QkFBNkIsZ0NBQWdDLG1CQUFtQixLQUFLLFdBQVcsZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxxQ0FBcUMsbUNBQW1DLGtFQUFrRSx1QkFBdUIseUJBQXlCLEtB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QTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNxQjtBQUNpQztBQUNWO0FBQ2M7QUFDWDtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNERBQVc7QUFDcEM7QUFDQSxpQ0FBaUMsb0JBQW9CLEVBQUUsY0FBYyxJQUFJLGFBQWE7QUFDdEY7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxVQUFVLDBEQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQWE7QUFDYjtBQUNBLDZEQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vc3JjL2FkZC1uZXctbGlrZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9zcmMvZGlzcGxheS1saWtlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9zcmMvZGlzcGxheS1wb2tlbW9uLWxpc3QuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpLy4vc3JjL2dldC1jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS1wb2tlYXBpL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUtcG9rZWFwaS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLXBva2VhcGkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL3Bva2Vtb24tc29saWQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvcG9rZW1vbi1jbGFzc2ljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAncG9rZW1vbi1zb2xpZCc7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAncG9rZW1vbi1jbGFzc2ljJztcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLW1haW4tYmctY29sb3I6ICNmZTAwNjU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdwb2tlbW9uLWNsYXNzaWMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuICBmb250LWZhbWlseTogJ3Bva2Vtb24tc29saWQnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2ViYWxsLWxvZ28ge1xcclxcbiAgd2lkdGg6IDc1cHg7XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBtYXJnaW46IDIwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZUJhY2tncm91bmRDb2xvckJsdWUge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZWI4ZmY7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NWZjZTg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5iaWctYmx1ZS1jaXJjbGUge1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjdzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUJhY2tncm91bmRDb2xvckJsdWU7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JSZWQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjFhMWE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjk2OTY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5yZWQtY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yUmVkO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY2hhbmdlQmFja2dyb3VuZENvbG9yWWVsbG93IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYjFhO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmNGJkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ueWVsbG93LWNpcmNsZSB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUJhY2tncm91bmRDb2xvclllbGxvdztcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZUJhY2tncm91bmRDb2xvckdyZWVuIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFmZjJkO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdmZjk2O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ3JlZW4tY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuOXM7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yR3JlZW47XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JheS1ib3gge1xcclxcbiAgd2lkdGg6IDI1MHB4O1xcclxcbiAgaGVpZ2h0OiAyNjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgMCA0MHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNtYWxsLXJlZC1jaXJjbGUge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JSZWQ7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktZ3JlZW4ge1xcclxcbiAgd2lkdGg6IDE4MHB4O1xcclxcbiAgaGVpZ2h0OiAxODBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZWNjOTg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lZGl1bS1yZWQtY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yUmVkO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUtcG9rZW1vbiB7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICB3aWR0aDogMjEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjYzVjO1xcclxcbiAgYm9yZGVyOiBzb2xpZCA1cHggIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyYXktZGFyay1jaXJjbGUtaGVhcnQtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xcclxcbn1cXHJcXG5cXHJcXG4ud2hpdGUtaGVhcnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2hpdGUtaGVhcnQ6OmJlZm9yZSxcXHJcXG4ud2hpdGUtaGVhcnQ6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndoaXRlLWhlYXJ0OjpiZWZvcmUge1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi53aGl0ZS1oZWFydDo6YWZ0ZXIge1xcclxcbiAgbGVmdDogMTBweDtcXHJcXG4gIHRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1oZWFydCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgNnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWhlYXJ0OjpiZWZvcmUsXFxyXFxuLnJlZC1oZWFydDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1oZWFydDo6YmVmb3JlIHtcXHJcXG4gIHRvcDogLTEwcHg7XFxyXFxuICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWhlYXJ0OjphZnRlciB7XFxyXFxuICBsZWZ0OiAxMHB4O1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uQ29tbWVudHMtYnV0dG9uIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi50b3RhbC1jb21tZW50cyxcXHJcXG4uYWRkLWNvbW1lbnQtaGVhZGluZyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2JlYmViZTtcXHJcXG4gIG1hcmdpbjogMzBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnQtaGVhZGluZyB7XFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLWNvbW1lbnRzIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtID4gKiB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnQtY2VudGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEuNzVlbSAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzLWJveCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyMzgsIDk2KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDQwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbi1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2Vtb24tbnVtYmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNzAsIDI0Nyk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDQwcHggMCAwO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwaW5uZXItY2VudGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWxpbmssXFxyXFxuLnBhZ2UtbGluazpob3ZlciB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCAjMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QiwyREFBMkQ7RUFDM0QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QiwyREFBNkQ7RUFDN0QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsU0FBUztFQUNULGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2IsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFD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QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdwb2tlbW9uLXNvbGlkJztcXHJcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9wb2tlbW9uLXNvbGlkLnR0ZicpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ3Bva2Vtb24tY2xhc3NpYyc7XFxyXFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvcG9rZW1vbi1jbGFzc2ljLnR0ZicpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tbWFpbi1iZy1jb2xvcjogI2ZlMDA2NTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ3Bva2Vtb24tY2xhc3NpYycsIHNhbnMtc2VyaWY7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAncG9rZW1vbi1zb2xpZCcsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZWJhbGwtbG9nbyB7XFxyXFxuICB3aWR0aDogNzVweDtcXHJcXG4gIGhlaWdodDogNzVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIG1hcmdpbjogMjBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY2hhbmdlQmFja2dyb3VuZENvbG9yQmx1ZSB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlYjhmZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg1ZmNlODtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJpZy1ibHVlLWNpcmNsZSB7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuN3M7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yQmx1ZTtcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGNoYW5nZUJhY2tncm91bmRDb2xvclJlZCB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMWExYTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTY5NjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnJlZC1jaXJjbGUge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JSZWQ7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JZZWxsb3cge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZiMWE7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGY0YmQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi55ZWxsb3ctY2lyY2xlIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxyXFxuICBhbmltYXRpb24tbmFtZTogY2hhbmdlQmFja2dyb3VuZENvbG9yWWVsbG93O1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgY2hhbmdlQmFja2dyb3VuZENvbG9yR3JlZW4ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYWZmMmQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhN2ZmOTY7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5ncmVlbi1jaXJjbGUge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC45cztcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JHcmVlbjtcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5ncmF5LWJveCB7XFxyXFxuICB3aWR0aDogMjUwcHg7XFxyXFxuICBoZWlnaHQ6IDI2MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwIDQwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc21hbGwtcmVkLWNpcmNsZSB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcclxcbiAgYW5pbWF0aW9uLW5hbWU6IGNoYW5nZUJhY2tncm91bmRDb2xvclJlZDtcXHJcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcclxcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1ncmVlbiB7XFxyXFxuICB3aWR0aDogMTgwcHg7XFxyXFxuICBoZWlnaHQ6IDE4MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdlY2M5ODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVkaXVtLXJlZC1jaXJjbGUge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXHJcXG4gIGFuaW1hdGlvbi1uYW1lOiBjaGFuZ2VCYWNrZ3JvdW5kQ29sb3JSZWQ7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1wb2tlbW9uIHtcXHJcXG4gIGhlaWdodDogNjBweDtcXHJcXG4gIHdpZHRoOiAyMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNjNWM7XFxyXFxuICBib3JkZXI6IHNvbGlkIDVweCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JheS1kYXJrLWNpcmNsZS1oZWFydC1idXR0b24ge1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XFxyXFxufVxcclxcblxcclxcbi53aGl0ZS1oZWFydCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIG1hcmdpbjogMCA2cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi53aGl0ZS1oZWFydDo6YmVmb3JlLFxcclxcbi53aGl0ZS1oZWFydDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2hpdGUtaGVhcnQ6OmJlZm9yZSB7XFxyXFxuICB0b3A6IC0xMHB4O1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLndoaXRlLWhlYXJ0OjphZnRlciB7XFxyXFxuICBsZWZ0OiAxMHB4O1xcclxcbiAgdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWhlYXJ0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIG1hcmdpbjogMCA2cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWQtaGVhcnQ6OmJlZm9yZSxcXHJcXG4ucmVkLWhlYXJ0OjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWhlYXJ0OjpiZWZvcmUge1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5yZWQtaGVhcnQ6OmFmdGVyIHtcXHJcXG4gIGxlZnQ6IDEwcHg7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5Db21tZW50cy1idXR0b24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDYwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgIzAwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIGJvcmRlcjogc29saWQgNXB4ICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvdGFsLWNvbW1lbnRzLFxcclxcbi5hZGQtY29tbWVudC1oZWFkaW5nIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjYmViZWJlO1xcclxcbiAgbWFyZ2luOiAzMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudC1oZWFkaW5nIHtcXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5hbGwtY29tbWVudHMge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0gPiAqIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udC1jZW50ZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMS43NWVtIDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXMtYm94IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDIzOCwgOTYpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNDBweDtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5wb2tlbW9uLWltYWdlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZW1vbi1udW1iZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE3MCwgMjQ3KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgNDBweCAwIDA7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3Bpbm5lci1jZW50ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtbGluayxcXHJcXG4ucGFnZS1saW5rOmhvdmVyIHtcXHJcXG4gIGJvcmRlcjogc29saWQgNXB4ICMwMDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hd2FpdCAqL1xyXG5jb25zdCBhZGROZXdMaWtlID0gYXN5bmMgKGl0ZW1JZCkgPT4gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2VkZDk3RXE2dXZPYmRHbVdseDYyL2xpa2VzLycsIHtcclxuICBtZXRob2Q6ICdQT1NUJyxcclxuICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGl0ZW1JZCB9KSxcclxuICBoZWFkZXJzOiB7XHJcbiAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkTmV3TGlrZTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hc3NpZ24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcmV0dXJuLWF3YWl0ICovXHJcblxyXG5pbXBvcnQgeyBkaXNwbGF5TGlrZXMgfSBmcm9tICcuL2Rpc3BsYXktcG9rZW1vbi1saXN0LmpzJztcclxuXHJcbmNvbnN0IHJlY2lldmVkTGlrZXMgPSBhc3luYyAoKSA9PiBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvZWRkOTdFcTZ1dk9iZEdtV2x4NjIvbGlrZXMvJywge1xyXG4gIG1ldGhvZDogJ0dFVCcsXHJcbn0pXHJcbiAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAudGhlbigoanNvbikgPT4gZGlzcGxheUxpa2VzKGpzb24pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlY2lldmVkTGlrZXM7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJheS1jYWxsYmFjay1yZXR1cm4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cclxuXHJcbmltcG9ydCBhZGROZXdMaWtlIGZyb20gJy4vYWRkLW5ldy1saWtlLmpzJztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmNvbnN0IHBva2Vtb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9rZW1vbkNvbnRhaW5lcicpO1xyXG5jb25zdCBzcGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwaW5uZXInKTtcclxuXHJcbmNvbnN0IG9mZnNldCA9IDE7XHJcbmNvbnN0IGxpbWl0ID0gODtcclxuXHJcbmxldCBwb2tlbW9uO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJldHVybi1hd2FpdFxyXG4vKiBjb25zdCBmZXRjaFBva2Vtb24gPSBhc3luYyAoaWQpID0+IGF3YWl0IGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtpZH1gKVxyXG4gIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBjcmVhdGVQb2tlbW9uKGRhdGEpO1xyXG4gICAgYWRkTGlrZXNMaXN0ZW5lcigpO1xyXG4gICAgcG9rZW1vbiA9IGRhdGE7XHJcbiAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gIH0pOyAqL1xyXG5cclxuY29uc3QgZmV0Y2hQb2tlbW9ucyA9IGFzeW5jICgpID0+IHtcclxuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP29mZnNldD0wJmxpbWl0PTE1MDAnKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjcmVhdGVQb2tlbW9uKGRhdGEpO1xyXG4gICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgfSkudGhlbigoKSA9PiBhZGRMaWtlc0xpc3RlbmVyKCkpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5kZXhlcihwb2tlZGV4KSB7XHJcbiAgcG9rZWRleC5yZXN1bHRzLmZvckVhY2goKHBva2Vtb24sIGluZGV4KSA9PiB7XHJcbiAgICBwb2tlbW9uLmluZGV4ID0gaW5kZXggKyAxO1xyXG4gIH0pO1xyXG4gIHJldHVybiBwb2tlZGV4LnJlc3VsdHM7XHJcbn1cclxuXHJcbi8qIGZ1bmN0aW9uIGZldGNoUG9rZW1vbihvZmZzZXQsIGxpbWl0KSB7XHJcbiAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICBmb3IgKGxldCBpID0gb2Zmc2V0OyBpIDw9IG9mZnNldCArIGxpbWl0OyBpICs9IDEpIHtcclxuICAgIGZldGNoUG9rZW1vbihpKTtcclxuICB9XHJcbn0gKi9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBva2Vtb24ocG9rZWRleCkge1xyXG4gIGxldCBwYWdlID0gMTtcclxuICBjb25zdCBpbmRleGVyUG9rZWRleCA9IGluZGV4ZXIocG9rZWRleCk7XHJcbiAgY29uc3QgZ2V0TnVtYmVyQWxsUG9rZW1vbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0TnVtYmVyQWxsUG9rZW1vbnMnKTtcclxuXHJcbiAgZ2V0TnVtYmVyQWxsUG9rZW1vbnMudGV4dENvbnRlbnQgPSBpbmRleGVyUG9rZWRleC5sZW5ndGg7XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlQYWdlID0gKHBhZ2UpID0+IHtcclxuICAgIHBva2Vtb25Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29uc3QgZW5kID0gcGFnZSAqIDMwO1xyXG4gICAgY29uc3Qgc3RhcnQgPSBlbmQgLSAzMDtcclxuICAgIGluZGV4ZXJQb2tlZGV4LmZpbHRlcigoaXRlbSwgaSkgPT4ge1xyXG4gICAgICBpZiAoaSA+PSBzdGFydCAmJiBpIDwgZW5kKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgIH1cclxuICAgIH0pLmZvckVhY2goKHBva2Vtb24pID0+IHtcclxuICAgICAgcG9rZW1vbkNvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTYgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBkLWZsZXggYm9yZGVyLWJvdHRvbSBib3JkZXItNSBib3JkZXItZGFya1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmlnLWJsdWUtY2lyY2xlIG1lLTMgbWItM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVkLWNpcmNsZSBtZS0yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5ZWxsb3ctY2lyY2xlIG1lLTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyZWVuLWNpcmNsZSBtZS0yXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHkgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyYXktYm94XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic21hbGwtcmVkLWNpcmNsZSBtLTFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbWFsbC1yZWQtY2lyY2xlIG0tMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXktZ3JlZW4gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgaWQ9XCIke3Bva2Vtb24uaW5kZXh9UG9rZW1vbkltYWdlTWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBweC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaXVtLXJlZC1jaXJjbGUgbS0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cIm1lbnUtc2hhcnBcIiBjbGFzcz1cImZzLTFcIj48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZS1wb2tlbW9uIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHMtM1wiPiR7cG9rZW1vbi5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibGlrZS1idG4gZ3JheS1kYXJrLWNpcmNsZS1oZWFydC1idXR0b24gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgZGF0YS1wb2tlbW9uLWlkPSR7cG9rZW1vbi5pbmRleH0gaWQ9XCIke3Bva2Vtb24uaW5kZXh9X2xpa2VCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiJHtwb2tlbW9uLmluZGV4fV9jb2xvckhlYXJ0XCIgY2xhc3M9XCJ3aGl0ZS1oZWFydCBib3JkZXItNVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbXQtM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb2tlbW9uLW51bWJlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHBzLTIgcGUtM1wiPiMke3Bva2Vtb24uaW5kZXh9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpa2VzLWJveCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHBzLTNcIj48c3BhbiBjbGFzcz1cInBlLTJcIiBpZD1cIiR7cG9rZW1vbi5pbmRleH1fcG9rZW1vbkxpa2VzXCI+MDwvc3Bhbj5MaWtlczwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICBcclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJDb21tZW50cy1idXR0b24gbXQtM1wiIGRhdGEtYnMtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLWJzLXRhcmdldD1cIiNjb21tZW50c01vZGFsXCI+XHJcbiAgICAgICAgICAgICAgQ29tbWVudHNcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1vZGFsIGZhZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29tbWVudHNNb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1vZGFsLWhlYWRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIGJvcmRlci01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiaWctYmx1ZS1jaXJjbGUgbWUtMyBtYi0zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVkLWNpcmNsZSBtZS0yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieWVsbG93LWNpcmNsZSBtZS0yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JlZW4tY2lyY2xlIG1lLTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi1jbG9zZSBmcy0xIG1lLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyYXktYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbWFsbC1yZWQtY2lyY2xlIG0tMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbWFsbC1yZWQtY2lyY2xlIG0tMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheS1ncmVlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkLWZsZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50LWNlbnRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtcy1jZW50ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIlBva2Vtb25JbWFnZUNvbW1lbnRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy8wZC9iMS8wYy8wZGIxMGMxZGQzMjhhMjkxNzdhYmJkOGQ5OTJhMzcwZi5naWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwaWthY2h1LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwb2tlbW9uLWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWVkaXVtLXJlZC1jaXJjbGUgbS0xXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9XCJtZW51LXNoYXJwXCIgY2xhc3M9XCJmcy0xXCI+PC9pb24taWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidG90YWwtY29tbWVudHNcIj5Db21tZW50cyAoMik8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJhbGwtY29tbWVudHNcIj48L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImFkZC1jb21tZW50LWhlYWRpbmdcIj5BZGQgYSBjb21tZW50PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIiNcIiBjbGFzcz1cImZvcm1cIiBpZD1cImZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29tbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkNvbW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuXHJcbiAgICAgIGNvbnN0IHNwcml0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Bva2Vtb24uaW5kZXh9UG9rZW1vbkltYWdlTWFpbmApO1xyXG4gICAgICBjb25zdCBzcHJpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgc3ByaXRlLmNsYXNzTmFtZSA9ICdwb2tlbW9uLWltYWdlJztcclxuICAgICAgc3ByaXRlLmFsdCA9ICdwb2tlbW9uLWltYWdlJztcclxuICAgICAgc3ByaXRlLnNyYyA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vJHtwb2tlbW9uLmluZGV4fS5wbmdgO1xyXG5cclxuICAgICAgc3ByaXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwcml0ZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcmV2aW91cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aW91cycpO1xyXG4gIGNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG5cclxuICBkaXNwbGF5UGFnZShwYWdlKTtcclxuXHJcbiAgcHJldmlvdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAocGFnZSA+IDEpIHtcclxuICAgICAgcGFnZSAtPSAxO1xyXG4gICAgICBkaXNwbGF5UGFnZShwYWdlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChwYWdlIDwgaW5kZXhlclBva2VkZXgubGVuZ3RoIC8gMzApIHtcclxuICAgICAgcGFnZSArPSAxO1xyXG4gICAgICBkaXNwbGF5UGFnZShwYWdlKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUxpa2VzKGxpa2VzKSB7XHJcbiAgbGlrZXMuZm9yRWFjaCgobGlrZSkgPT4ge1xyXG4gICAgY29uc3QgcG9rZW1vbkxpa2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bGlrZS5pdGVtX2lkfV9wb2tlbW9uTGlrZXNgKTtcclxuICAgIGlmIChwb2tlbW9uTGlrZXMpIHtcclxuICAgICAgcG9rZW1vbkxpa2VzLnRleHRDb250ZW50ID0gbGlrZS5saWtlcztcclxuICAgICAgY29uc3QgY29sb3JIZWFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2xpa2UuaXRlbV9pZH1fY29sb3JIZWFydGApO1xyXG4gICAgICBjb2xvckhlYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ3doaXRlLWhlYXJ0Jyk7XHJcbiAgICAgIGNvbG9ySGVhcnQuY2xhc3NMaXN0LmFkZCgncmVkLWhlYXJ0Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZExpa2VzTGlzdGVuZXIoZGF0YSkge1xyXG4gIGNvbnN0IGxpa2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2UtYnRuJyk7XHJcbiAgbGlrZUJ1dHRvbnMuZm9yRWFjaCgobGlrZUJ1dHRvbikgPT4ge1xyXG4gICAgbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgYWRkTmV3TGlrZShsaWtlQnV0dG9uLmRhdGFzZXQucG9rZW1vbklkKS50aGVuKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGZldGNoUG9rZW1vbnMsIGRpc3BsYXlMaWtlcyB9OyIsIi8qIGVzbGludC1kaXNhYmxlIGxpbmVicmVhay1zdHlsZSAqL1xyXG5jb25zdCBJRCA9ICdzT0gzOVhXYTlnTUZWUExYSFUyRyc7XHJcbmNvbnN0IFVSTCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8ke0lEfS9jb21tZW50c2A7XHJcblxyXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpdGVtSWQpID0+IHtcclxuICBjb25zdCBmZXRjaENvbW1lbnRzID0gYCR7VVJMfT9pdGVtX2lkPWl0ZW0ke2l0ZW1JZH1gO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmV0Y2hDb21tZW50cywge1xyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICB9KTtcclxuICBjb25zdCBsaXN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiBsaXN0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29tbWVudHM7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiLyogZXNsaW50LWRpc2FibGUgbGluZWJyZWFrLXN0eWxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgcG9rZWJhbGwgZnJvbSAnLi9hc3NldHMvaW1nL3Bva2ViYWxsLWxvZ28ucG5nJztcclxuaW1wb3J0IGdldENvbW1lbnRzIGZyb20gJy4vZ2V0LWNvbW1lbnRzLmpzJztcclxuaW1wb3J0IHsgZmV0Y2hQb2tlbW9ucyB9IGZyb20gJy4vZGlzcGxheS1wb2tlbW9uLWxpc3QuanMnO1xyXG5pbXBvcnQgcmVjaWV2ZWRMaWtlcyBmcm9tICcuL2Rpc3BsYXktbGlrZXMuanMnO1xyXG5cclxuY29uc3QgcG9rZWJhbGxMb2dvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bva2ViYWxsTG9nbycpO1xyXG5jb25zdCBhbGxDb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY29tbWVudHMnKTtcclxuY29uc3Qgc2luZ2xlQ29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbmNvbnN0IGdldEFsbENvbW1lbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0Q29tbWVudHMoMSk7XHJcbiAgcmVzcG9uc2UuZm9yRWFjaCgocmVzcCkgPT4ge1xyXG4gICAgc2luZ2xlQ29tbWVudC5pbm5lckhUTUwgPSBgJHtyZXNwLmNyZWF0aW9uX2RhdGV9ICR7cmVzcC51c2VybmFtZX06ICR7cmVzcC5jb21tZW50fWA7XHJcbiAgICAvLyBhbGxDb21tZW50cy5hcHBlbmRDaGlsZChzaW5nbGVDb21tZW50KTtcclxuICB9KTtcclxufTtcclxuXHJcbmdldEFsbENvbW1lbnRzKCk7XHJcblxyXG5jb25zdCBwb2tlbW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bva2Vtb25Db250YWluZXInKTtcclxuXHJcbmxldCBvZmZzZXQ7XHJcbmxldCBsaW1pdDtcclxuXHJcbi8vIGFkZCBpY29uIHRvIHRoZSBwYWdlXHJcbmNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbmxpbmsucmVsID0gJ2ljb24nO1xyXG5saW5rLmhyZWYgPSBwb2tlYmFsbDtcclxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHJcbmNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5pbWcuc3JjID0gcG9rZWJhbGw7XHJcbmltZy5hbHQgPSAnUG9rZWJhbGwnO1xyXG5pbWcuY2xhc3NMaXN0LmFkZCgncG9rZWJhbGwtbG9nbycpO1xyXG5wb2tlYmFsbExvZ28uYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbmZldGNoUG9rZW1vbnMoKG9mZnNldCA9IDEpLCAobGltaXQgPSA4KSk7XHJcblxyXG5yZWNpZXZlZExpa2VzKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==