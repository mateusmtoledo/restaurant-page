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
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-size: 16px;\n    overflow-y: scroll;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    background-color: #475569;\n    color: white;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    background-color: #f1f5f9;\n    min-height: 100vh;\n    color: #1e293b;\n}\n\nli {\n    list-style-type: none;\n    padding: 8px 32px;\n}\n\nh1 {\n    text-align: center;\n    font-size: 2.4rem;\n    padding-top: 32px;\n}\n\nnav > ul {\n    display: flex;\n    justify-content: center;\n    gap: 64px;\n    font-size: 1.2rem;\n}\n\nheader > *{\n    padding: 16px;\n}\n\n#content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n}\n\n#home-page {\n    display: grid;\n    grid-template-columns: 3fr 2fr;\n    grid-template-rows: 2fr 1fr;\n    gap: 48px;\n    width: 900px;\n    align-items: stretch;\n}\n\n#home-page > div {\n    background-color: white;\n    border-radius: 12px;\n    padding: 32px;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);\n    border: 1px solid #1e293b;\n}\n\n#home-page > div:nth-child(1) {\n    grid-row: 1 / -1;\n    padding: 0;\n}\n\n#home-page > div:nth-child(1) p {\n    margin: 16px 32px 32px 32px;\n}\n\n#home-page > div:nth-child(3) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n}\n\nh2 {\n    margin-bottom: 16px;\n    text-align: center;\n}\n\n#home-page .hours {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n}\n\n#home-page img {\n    margin-bottom: 32px;\n    width: 100%;\n    border-radius: 12px 12px 0 0;\n    border: 1px solid #1e293b;\n    box-sizing: border-box;\n    object-fit: cover;\n}\n\n.hours p {\n    margin-bottom: 8px;\n}\n\n#menu-page {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n    column-gap: 48px;\n    row-gap: 64px;\n    width: 1120px;\n    padding: 48px 16px 0 16px;\n}\n\n.card {\n    background-color: white;\n    border-radius: 12px;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    border: 1px solid #1e293b;\n}\n\n.card > h2 {\n    margin: 8px;\n}\n\n.card > p {\n    margin: 0 32px 32px;\n}\n\n.card > img {\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n    border-radius: 12px 12px 0 0;\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.05);\n    outline: 1px solid #1e293b;\n}\n\n#img-0 {\n    object-position: 50% 78%;\n}\n\n#img-2 {\n    object-position: 50% 65%;\n}\n\n#contact-page {\n    display: flex;\n    gap: 64px;\n    width: 900px;\n    justify-content: center;\n}\n\n#contact-page > div {\n    background: white;\n    border-radius: 12px;\n    padding: 32px;\n    border: 1px solid #1e293b;\n    flex: 1;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);\n}\n\n#contact-page p {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 16px;\n}\n\ninput,\ntextarea {\n    width: 100%;\n    border: none;\n    border-radius: 8px;\n    padding: 4px 5px;\n    outline: 1px solid #1e293b;\n    box-sizing: border-box;\n}\n\ninput:focus,\ntextarea:focus {\n    outline: 2px solid #1e293b;\n    box-sizing: border-box;\n}\n\ntextarea {\n    height: 200px;\n}\n\nbutton {\n    padding: 8px 24px;\n    border-radius: 32px;\n    border: none;\n    color: white;\n    background-color: #475569;\n    font-size: 1rem;\n    font-weight: 700;\n    box-shadow: 2px 2px 4px 0 rgb(0 0 0 / 50%)\n}\n\nbutton:active {\n    position: relative;\n    left: 2px;\n    top: 2px;\n    box-shadow: none;\n}\n\nli[data-active='1'] {\n    background-color: white;\n    border-radius: 12px;\n    color: #475569;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,OAAO;AACX;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,SAAS;IACT,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,uCAAuC;IACvC,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,4BAA4B;IAC5B,yBAAyB;IACzB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,uCAAuC;IACvC,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,4BAA4B;IAC5B,wCAAwC;IACxC,0BAA0B;AAC9B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,OAAO;IACP,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,0BAA0B;IAC1B,sBAAsB;AAC1B;;AAEA;;IAEI,0BAA0B;IAC1B,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,eAAe;IACf,gBAAgB;IAChB;AACJ;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;AAClB","sourcesContent":[":root {\n    font-size: 16px;\n    overflow-y: scroll;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    background-color: #475569;\n    color: white;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    background-color: #f1f5f9;\n    min-height: 100vh;\n    color: #1e293b;\n}\n\nli {\n    list-style-type: none;\n    padding: 8px 32px;\n}\n\nh1 {\n    text-align: center;\n    font-size: 2.4rem;\n    padding-top: 32px;\n}\n\nnav > ul {\n    display: flex;\n    justify-content: center;\n    gap: 64px;\n    font-size: 1.2rem;\n}\n\nheader > *{\n    padding: 16px;\n}\n\n#content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n}\n\n#home-page {\n    display: grid;\n    grid-template-columns: 3fr 2fr;\n    grid-template-rows: 2fr 1fr;\n    gap: 48px;\n    width: 900px;\n    align-items: stretch;\n}\n\n#home-page > div {\n    background-color: white;\n    border-radius: 12px;\n    padding: 32px;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);\n    border: 1px solid #1e293b;\n}\n\n#home-page > div:nth-child(1) {\n    grid-row: 1 / -1;\n    padding: 0;\n}\n\n#home-page > div:nth-child(1) p {\n    margin: 16px 32px 32px 32px;\n}\n\n#home-page > div:nth-child(3) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n}\n\nh2 {\n    margin-bottom: 16px;\n    text-align: center;\n}\n\n#home-page .hours {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n}\n\n#home-page img {\n    margin-bottom: 32px;\n    width: 100%;\n    border-radius: 12px 12px 0 0;\n    border: 1px solid #1e293b;\n    box-sizing: border-box;\n    object-fit: cover;\n}\n\n.hours p {\n    margin-bottom: 8px;\n}\n\n#menu-page {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n    column-gap: 48px;\n    row-gap: 64px;\n    width: 1120px;\n    padding: 48px 16px 0 16px;\n}\n\n.card {\n    background-color: white;\n    border-radius: 12px;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n    border: 1px solid #1e293b;\n}\n\n.card > h2 {\n    margin: 8px;\n}\n\n.card > p {\n    margin: 0 32px 32px;\n}\n\n.card > img {\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n    border-radius: 12px 12px 0 0;\n    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.05);\n    outline: 1px solid #1e293b;\n}\n\n#img-0 {\n    object-position: 50% 78%;\n}\n\n#img-2 {\n    object-position: 50% 65%;\n}\n\n#contact-page {\n    display: flex;\n    gap: 64px;\n    width: 900px;\n    justify-content: center;\n}\n\n#contact-page > div {\n    background: white;\n    border-radius: 12px;\n    padding: 32px;\n    border: 1px solid #1e293b;\n    flex: 1;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);\n}\n\n#contact-page p {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 16px;\n}\n\ninput,\ntextarea {\n    width: 100%;\n    border: none;\n    border-radius: 8px;\n    padding: 4px 5px;\n    outline: 1px solid #1e293b;\n    box-sizing: border-box;\n}\n\ninput:focus,\ntextarea:focus {\n    outline: 2px solid #1e293b;\n    box-sizing: border-box;\n}\n\ntextarea {\n    height: 200px;\n}\n\nbutton {\n    padding: 8px 24px;\n    border-radius: 32px;\n    border: none;\n    color: white;\n    background-color: #475569;\n    font-size: 1rem;\n    font-weight: 700;\n    box-shadow: 2px 2px 4px 0 rgb(0 0 0 / 50%)\n}\n\nbutton:active {\n    position: relative;\n    left: 2px;\n    top: 2px;\n    box-shadow: none;\n}\n\nli[data-active='1'] {\n    background-color: white;\n    border-radius: 12px;\n    color: #475569;\n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactContent.js":
/*!*******************************!*\
  !*** ./src/contactContent.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function displayContact() {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.id = 'contact-page';
    div.append(messageSection(), info());
    content.appendChild(div);
}

function messageSection() {
    const container = document.createElement('div');

    // Message form
    const form = document.createElement('form');
    const h2 = document.createElement('h2');
    h2.textContent = 'Send us a message';

    // Name input
    const nameField = document.createElement('p');
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.id = 'name';
    nameField.append(nameLabel, nameInput);

    // Email input
    const emailField = document.createElement('p');
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'E-mail:';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.id = 'email';
    emailField.append(emailLabel, emailInput);

    // Text input
    const textField = document.createElement('p');
    const textLabel = document.createElement('label');
    textLabel.setAttribute('for', 'message');
    textLabel.textContent = 'Message:';
    const textInput = document.createElement('textarea');
    textInput.id = 'message';
    textField.append(textLabel, textInput);

    // Submit button
    const button = document.createElement('button');
    button.textContent = 'Submit';
    button.setAttribute('type', 'button');

    // Append elements
    container.appendChild(form);
    form.append(h2, nameField, emailField, textField, button);
    
    return container;
}

function info() {
    const container = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = 'Contact Us';

    const email = document.createElement('p');
    email.textContent = 'E-mail: restaurant-email@restaurant.com';

    const address = document.createElement('p');
    address.textContent = 'Restaurant Street, 123';

    const phone = document.createElement('p');
    phone.textContent = '123-456-7890';

    container.append(h2, email, address, phone);

    return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayContact);

/***/ }),

/***/ "./src/homeContent.js":
/*!****************************!*\
  !*** ./src/homeContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant.jpg */ "./src/images/restaurant.jpg");


const displayHome = function() {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.id = 'home-page';
    div.append(about(), hours(), location());
    content.appendChild(div);
}

function hours() {
    const container = document.createElement('div');
    container.classList.add('hours');
    const h2 = document.createElement('h2');
    h2.textContent = 'Hours';

    const sunday = document.createElement('p');
    const monday = document.createElement('p');
    const tuesday = document.createElement('p');
    const wednesday = document.createElement('p');
    const thursday = document.createElement('p');
    const friday = document.createElement('p');
    const saturday = document.createElement('p');

    sunday.textContent = 'Sunday: 8am - 8pm';
    monday.textContent = 'Monday: 6am - 6pm';
    tuesday.textContent = 'Tuesday: 6am - 6pm';
    wednesday.textContent = 'Wednesday: 6am - 6pm';
    thursday.textContent = 'Thursday: 6am - 10pm';
    friday.textContent = 'Friday: 6am - 10pm';
    saturday.textContent = 'Saturday: 8am - 10pm';

    container.append(h2, sunday, monday, tuesday, wednesday, thursday, friday, saturday);

    return container;
}

function about() {
    const container = document.createElement('div');
    const img = document.createElement('img');
    img.src = _images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;
    const h2 = document.createElement('h2');
    h2.textContent = 'About us';
    const p = document.createElement('p');
    p.textContent = 'Maecenas vitae urna nec erat tempus pellentesque et sit amet ipsum. Sed tempus justo et risus porta condimentum. Vivamus finibus, risus eget vehicula posuere, ligula elit facilisis turpis, ut pellentesque massa elit et nisi. Pellentesque accumsan odio id nisi hendrerit imperdiet. Aliquam erat volutpat. Nunc quis lectus vel nunc consequat elementum. Phasellus volutpat mollis accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sem lacus, iaculis id metus vel, auctor consectetur nunc. Duis lacinia id libero scelerisque vulputate. Sed consequat tortor nec lobortis volutpat. Nunc consequat vulputate euismod. Praesent quis vehicula enim.';
    
    container.append(img, h2, p);

    return container;
}

function location() {
    const container = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = 'Location';
    const p = document.createElement('p');
    p.textContent = 'Restaurant Street, 123, 12345'
    container.append(h2, p);

    return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);

/***/ }),

/***/ "./src/menuContent.js":
/*!****************************!*\
  !*** ./src/menuContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_0_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/0.jpg */ "./src/images/0.jpg");
/* harmony import */ var _images_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/1.jpg */ "./src/images/1.jpg");
/* harmony import */ var _images_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/2.jpg */ "./src/images/2.jpg");
/* harmony import */ var _images_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/3.jpg */ "./src/images/3.jpg");
/* harmony import */ var _images_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/4.jpg */ "./src/images/4.jpg");
/* harmony import */ var _images_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/5.jpg */ "./src/images/5.jpg");
/* harmony import */ var _images_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/6.jpg */ "./src/images/6.jpg");
/* harmony import */ var _images_7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/7.jpg */ "./src/images/7.jpg");
/* harmony import */ var _images_8_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/8.jpg */ "./src/images/8.jpg");









let imgs = [
    _images_0_jpg__WEBPACK_IMPORTED_MODULE_0__,
    _images_1_jpg__WEBPACK_IMPORTED_MODULE_1__,
    _images_2_jpg__WEBPACK_IMPORTED_MODULE_2__,
    _images_3_jpg__WEBPACK_IMPORTED_MODULE_3__,
    _images_4_jpg__WEBPACK_IMPORTED_MODULE_4__,
    _images_5_jpg__WEBPACK_IMPORTED_MODULE_5__,
    _images_6_jpg__WEBPACK_IMPORTED_MODULE_6__,
    _images_7_jpg__WEBPACK_IMPORTED_MODULE_7__,
    _images_8_jpg__WEBPACK_IMPORTED_MODULE_8__
];

function displayMenu() {
    const content = document.getElementById('content');
    const menuPage = menu();
    menuPage.id = 'menu-page';
    content.appendChild(menuPage);
}

function menu() {
    const container = document.createElement('div');
    const cards = [];

    for(let i = 0; i < 9; i++) {
        cards[i] = cardCreator('Menu item', i, 'Maecenas vitae urna nec erat tempus pellentesque et sit amet ipsum. Sed tempus justo et risus porta condimentum.');
        container.appendChild(cards[i].element);
    }

    return container;
}

function cardCreator(name, index, text) {
    const card = {};

    // Card div
    card.element = document.createElement('div');
    card.element.classList.add('card');

    // Card title
    card.name = document.createElement('h2');
    card.name.textContent = name;

    // Card picture
    card.image = document.createElement('img');
    card.image.src = imgs[index];
    card.image.id = `img-${index}`;

    // Card text
    card.text = document.createElement('p');
    card.text.textContent = text;

    // Append elements
    card.element.append(card.image, card.name, card.text);

    return card;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contactContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactContent */ "./src/contactContent.js");
/* harmony import */ var _homeContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeContent */ "./src/homeContent.js");
/* harmony import */ var _menuContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuContent */ "./src/menuContent.js");




const pageLoad = function() {
    const content = document.getElementById('content');
    const header = createHeader();
    document.body.insertBefore(header, content);
}

function createHeader() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Restaurant';
    header.appendChild(h1);

    function createNavBar() {
        // Navbar
        const nav = document.createElement('nav');
        const ul = document.createElement('ul');
    
        // Home 
        const homeNav = document.createElement('li');
        homeNav.textContent = 'Home';
        homeNav.setAttribute('data-active', '1');
        homeNav.addEventListener('click', () => {
            const content = document.getElementById('content');
            if (content.firstChild.id === 'home-page') return;
            contactNav.setAttribute('data-active', '0');
            menuNav.setAttribute('data-active', '0');
            homeNav.setAttribute('data-active', '1');
            content.removeChild(content.firstChild);
            (0,_homeContent__WEBPACK_IMPORTED_MODULE_1__["default"])();
        });
    
        // Menu
        const menuNav = document.createElement('li');
        menuNav.textContent = 'Menu';
        menuNav.setAttribute('data-active', '0');
        menuNav.addEventListener('click', () => {
            const content = document.getElementById('content');
            if (content.firstChild.id === 'menu-page') return;
            homeNav.setAttribute('data-active', '0');
            contactNav.setAttribute('data-active', '0');
            menuNav.setAttribute('data-active', '1');
            content.removeChild(content.firstChild);
            (0,_menuContent__WEBPACK_IMPORTED_MODULE_2__["default"])();
        });
    
        // Contact
        const contactNav = document.createElement('li');
        contactNav.textContent = 'Contact';
        contactNav.setAttribute('data-active', '0');
        contactNav.addEventListener('click', () => {
            const content = document.getElementById('content');
            if (content.firstChild.id === 'contact-page') return;
            menuNav.setAttribute('data-active', '0');
            homeNav.setAttribute('data-active', '0');
            contactNav.setAttribute('data-active', '1');
            content.removeChild(content.firstChild);
            (0,_contactContent__WEBPACK_IMPORTED_MODULE_0__["default"])();
        });

        // Append elements
        ul.appendChild(homeNav);
        ul.appendChild(menuNav);
        ul.appendChild(contactNav);
        nav.appendChild(ul);
    
        return nav;
    }

    header.appendChild(createNavBar());
    return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);

/***/ }),

/***/ "./src/images/0.jpg":
/*!**************************!*\
  !*** ./src/images/0.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "375e8e32eae77212e595.jpg";

/***/ }),

/***/ "./src/images/1.jpg":
/*!**************************!*\
  !*** ./src/images/1.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7c85bc550c8f18efdef.jpg";

/***/ }),

/***/ "./src/images/2.jpg":
/*!**************************!*\
  !*** ./src/images/2.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a97de3c5a411a4524e7d.jpg";

/***/ }),

/***/ "./src/images/3.jpg":
/*!**************************!*\
  !*** ./src/images/3.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6dc16f9fee22953add56.jpg";

/***/ }),

/***/ "./src/images/4.jpg":
/*!**************************!*\
  !*** ./src/images/4.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a8c44e19994a4811c83.jpg";

/***/ }),

/***/ "./src/images/5.jpg":
/*!**************************!*\
  !*** ./src/images/5.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce2e16c8e6182d8cc57d.jpg";

/***/ }),

/***/ "./src/images/6.jpg":
/*!**************************!*\
  !*** ./src/images/6.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43628d40b9ca5c65bb25.jpg";

/***/ }),

/***/ "./src/images/7.jpg":
/*!**************************!*\
  !*** ./src/images/7.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f00ff0ce6b52958a8c9.jpg";

/***/ }),

/***/ "./src/images/8.jpg":
/*!**************************!*\
  !*** ./src/images/8.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f94ccaa79945c0a15e35.jpg";

/***/ }),

/***/ "./src/images/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/images/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bc94a72e2d491cd1464.jpg";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ "./src/pageLoad.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _homeContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeContent.js */ "./src/homeContent.js");
/* harmony import */ var _menuContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuContent.js */ "./src/menuContent.js");
/* harmony import */ var _contactContent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactContent.js */ "./src/contactContent.js");






(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_homeContent_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7O0FDN0V1Qjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsbURBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlEUTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDbEM7QUFDQSxJQUFJLDBDQUFJO0FBQ1IsSUFBSSwwQ0FBSTtBQUNSLElBQUksMENBQUk7QUFDUixJQUFJLDBDQUFJO0FBQ1IsSUFBSSwwQ0FBSTtBQUNSLElBQUksMENBQUk7QUFDUixJQUFJLDBDQUFJO0FBQ1IsSUFBSSwwQ0FBSTtBQUNSLElBQUksMENBQUk7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFb0I7QUFDTjtBQUNBOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFXO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFXO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFjO0FBQzFCLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVFdkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUM7QUFDaEI7QUFDc0I7QUFDQTtBQUNNOztBQUVqRCx3REFBUTtBQUNSLDJEQUFXLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3RDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lQ29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTU2OTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgY29sb3I6ICMxZTI5M2I7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBwYWRkaW5nOiA4cHggMzJweDtcXG59XFxuXFxuaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcXG59XFxuXFxubmF2ID4gdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA2NHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuaGVhZGVyID4gKntcXG4gICAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuI2hvbWUtcGFnZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbiAgICBnYXA6IDQ4cHg7XFxuICAgIHdpZHRoOiA5MDBweDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbiNob21lLXBhZ2UgPiBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgcGFkZGluZzogMzJweDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWUyOTNiO1xcbn1cXG5cXG4jaG9tZS1wYWdlID4gZGl2Om50aC1jaGlsZCgxKSB7XFxuICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNob21lLXBhZ2UgPiBkaXY6bnRoLWNoaWxkKDEpIHAge1xcbiAgICBtYXJnaW46IDE2cHggMzJweCAzMnB4IDMycHg7XFxufVxcblxcbiNob21lLXBhZ2UgPiBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNob21lLXBhZ2UgLmhvdXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2hvbWUtcGFnZSBpbWcge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFlMjkzYjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5ob3VycyBwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4jbWVudS1wYWdlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjgwcHgsIDFmcikpO1xcbiAgICBjb2x1bW4tZ2FwOiA0OHB4O1xcbiAgICByb3ctZ2FwOiA2NHB4O1xcbiAgICB3aWR0aDogMTEyMHB4O1xcbiAgICBwYWRkaW5nOiA0OHB4IDE2cHggMCAxNnB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZTI5M2I7XFxufVxcblxcbi5jYXJkID4gaDIge1xcbiAgICBtYXJnaW46IDhweDtcXG59XFxuXFxuLmNhcmQgPiBwIHtcXG4gICAgbWFyZ2luOiAwIDMycHggMzJweDtcXG59XFxuXFxuLmNhcmQgPiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4wNSk7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjMWUyOTNiO1xcbn1cXG5cXG4jaW1nLTAge1xcbiAgICBvYmplY3QtcG9zaXRpb246IDUwJSA3OCU7XFxufVxcblxcbiNpbWctMiB7XFxuICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDY1JTtcXG59XFxuXFxuI2NvbnRhY3QtcGFnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNjRweDtcXG4gICAgd2lkdGg6IDkwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhY3QtcGFnZSA+IGRpdiB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWUyOTNiO1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuNSk7XFxufVxcblxcbiNjb250YWN0LXBhZ2UgcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgIzFlMjkzYjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgIzFlMjkzYjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggMCByZ2IoMCAwIDAgLyA1MCUpXFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDJweDtcXG4gICAgdG9wOiAycHg7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbmxpW2RhdGEtYWN0aXZlPScxJ10ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgY29sb3I6ICM0NzU1Njk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsT0FBTztBQUNYOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLHdDQUF3QztJQUN4QywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsT0FBTztJQUNQLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLDBCQUEwQjtJQUMxQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NTU2OTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgY29sb3I6ICMxZTI5M2I7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBwYWRkaW5nOiA4cHggMzJweDtcXG59XFxuXFxuaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcXG59XFxuXFxubmF2ID4gdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA2NHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuaGVhZGVyID4gKntcXG4gICAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuI2hvbWUtcGFnZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbiAgICBnYXA6IDQ4cHg7XFxuICAgIHdpZHRoOiA5MDBweDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbiNob21lLXBhZ2UgPiBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgcGFkZGluZzogMzJweDtcXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWUyOTNiO1xcbn1cXG5cXG4jaG9tZS1wYWdlID4gZGl2Om50aC1jaGlsZCgxKSB7XFxuICAgIGdyaWQtcm93OiAxIC8gLTE7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNob21lLXBhZ2UgPiBkaXY6bnRoLWNoaWxkKDEpIHAge1xcbiAgICBtYXJnaW46IDE2cHggMzJweCAzMnB4IDMycHg7XFxufVxcblxcbiNob21lLXBhZ2UgPiBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNob21lLXBhZ2UgLmhvdXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2hvbWUtcGFnZSBpbWcge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFlMjkzYjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5ob3VycyBwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4jbWVudS1wYWdlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjgwcHgsIDFmcikpO1xcbiAgICBjb2x1bW4tZ2FwOiA0OHB4O1xcbiAgICByb3ctZ2FwOiA2NHB4O1xcbiAgICB3aWR0aDogMTEyMHB4O1xcbiAgICBwYWRkaW5nOiA0OHB4IDE2cHggMCAxNnB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxZTI5M2I7XFxufVxcblxcbi5jYXJkID4gaDIge1xcbiAgICBtYXJnaW46IDhweDtcXG59XFxuXFxuLmNhcmQgPiBwIHtcXG4gICAgbWFyZ2luOiAwIDMycHggMzJweDtcXG59XFxuXFxuLmNhcmQgPiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4wNSk7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjMWUyOTNiO1xcbn1cXG5cXG4jaW1nLTAge1xcbiAgICBvYmplY3QtcG9zaXRpb246IDUwJSA3OCU7XFxufVxcblxcbiNpbWctMiB7XFxuICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDY1JTtcXG59XFxuXFxuI2NvbnRhY3QtcGFnZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNjRweDtcXG4gICAgd2lkdGg6IDkwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhY3QtcGFnZSA+IGRpdiB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAzMnB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWUyOTNiO1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuNSk7XFxufVxcblxcbiNjb250YWN0LXBhZ2UgcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiA0cHggNXB4O1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgIzFlMjkzYjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgIzFlMjkzYjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzU1Njk7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggMCByZ2IoMCAwIDAgLyA1MCUpXFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDJweDtcXG4gICAgdG9wOiAycHg7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbmxpW2RhdGEtYWN0aXZlPScxJ10ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgY29sb3I6ICM0NzU1Njk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gZGlzcGxheUNvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlkID0gJ2NvbnRhY3QtcGFnZSc7XG4gICAgZGl2LmFwcGVuZChtZXNzYWdlU2VjdGlvbigpLCBpbmZvKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbn1cblxuZnVuY3Rpb24gbWVzc2FnZVNlY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyBNZXNzYWdlIGZvcm1cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdTZW5kIHVzIGEgbWVzc2FnZSc7XG5cbiAgICAvLyBOYW1lIGlucHV0XG4gICAgY29uc3QgbmFtZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZTonO1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmFtZUlucHV0LmlkID0gJ25hbWUnO1xuICAgIG5hbWVGaWVsZC5hcHBlbmQobmFtZUxhYmVsLCBuYW1lSW5wdXQpO1xuXG4gICAgLy8gRW1haWwgaW5wdXRcbiAgICBjb25zdCBlbWFpbEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGVtYWlsTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZW1haWwnKTtcbiAgICBlbWFpbExhYmVsLnRleHRDb250ZW50ID0gJ0UtbWFpbDonO1xuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2VtYWlsJyk7XG4gICAgZW1haWxJbnB1dC5pZCA9ICdlbWFpbCc7XG4gICAgZW1haWxGaWVsZC5hcHBlbmQoZW1haWxMYWJlbCwgZW1haWxJbnB1dCk7XG5cbiAgICAvLyBUZXh0IGlucHV0XG4gICAgY29uc3QgdGV4dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRleHRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGV4dExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ21lc3NhZ2UnKTtcbiAgICB0ZXh0TGFiZWwudGV4dENvbnRlbnQgPSAnTWVzc2FnZTonO1xuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGV4dElucHV0LmlkID0gJ21lc3NhZ2UnO1xuICAgIHRleHRGaWVsZC5hcHBlbmQodGV4dExhYmVsLCB0ZXh0SW5wdXQpO1xuXG4gICAgLy8gU3VibWl0IGJ1dHRvblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cbiAgICAvLyBBcHBlbmQgZWxlbWVudHNcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZm9ybS5hcHBlbmQoaDIsIG5hbWVGaWVsZCwgZW1haWxGaWVsZCwgdGV4dEZpZWxkLCBidXR0b24pO1xuICAgIFxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGluZm8oKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XG5cbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9ICdFLW1haWw6IHJlc3RhdXJhbnQtZW1haWxAcmVzdGF1cmFudC5jb20nO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ1Jlc3RhdXJhbnQgU3RyZWV0LCAxMjMnO1xuXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmUudGV4dENvbnRlbnQgPSAnMTIzLTQ1Ni03ODkwJztcblxuICAgIGNvbnRhaW5lci5hcHBlbmQoaDIsIGVtYWlsLCBhZGRyZXNzLCBwaG9uZSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29udGFjdDsiLCJpbXBvcnQgcmVzdGF1cmFudEltZyBmcm9tICcuL2ltYWdlcy9yZXN0YXVyYW50LmpwZyc7XG5cbmNvbnN0IGRpc3BsYXlIb21lID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlkID0gJ2hvbWUtcGFnZSc7XG4gICAgZGl2LmFwcGVuZChhYm91dCgpLCBob3VycygpLCBsb2NhdGlvbigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRpdik7XG59XG5cbmZ1bmN0aW9uIGhvdXJzKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdIb3Vycyc7XG5cbiAgICBjb25zdCBzdW5kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbW9uZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHR1ZXNkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3Qgd2VkbmVzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRodXJzZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGZyaWRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBzYXR1cmRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIHN1bmRheS50ZXh0Q29udGVudCA9ICdTdW5kYXk6IDhhbSAtIDhwbSc7XG4gICAgbW9uZGF5LnRleHRDb250ZW50ID0gJ01vbmRheTogNmFtIC0gNnBtJztcbiAgICB0dWVzZGF5LnRleHRDb250ZW50ID0gJ1R1ZXNkYXk6IDZhbSAtIDZwbSc7XG4gICAgd2VkbmVzZGF5LnRleHRDb250ZW50ID0gJ1dlZG5lc2RheTogNmFtIC0gNnBtJztcbiAgICB0aHVyc2RheS50ZXh0Q29udGVudCA9ICdUaHVyc2RheTogNmFtIC0gMTBwbSc7XG4gICAgZnJpZGF5LnRleHRDb250ZW50ID0gJ0ZyaWRheTogNmFtIC0gMTBwbSc7XG4gICAgc2F0dXJkYXkudGV4dENvbnRlbnQgPSAnU2F0dXJkYXk6IDhhbSAtIDEwcG0nO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZChoMiwgc3VuZGF5LCBtb25kYXksIHR1ZXNkYXksIHdlZG5lc2RheSwgdGh1cnNkYXksIGZyaWRheSwgc2F0dXJkYXkpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYWJvdXQoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNyYyA9IHJlc3RhdXJhbnRJbWc7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLnRleHRDb250ZW50ID0gJ0Fib3V0IHVzJztcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAudGV4dENvbnRlbnQgPSAnTWFlY2VuYXMgdml0YWUgdXJuYSBuZWMgZXJhdCB0ZW1wdXMgcGVsbGVudGVzcXVlIGV0IHNpdCBhbWV0IGlwc3VtLiBTZWQgdGVtcHVzIGp1c3RvIGV0IHJpc3VzIHBvcnRhIGNvbmRpbWVudHVtLiBWaXZhbXVzIGZpbmlidXMsIHJpc3VzIGVnZXQgdmVoaWN1bGEgcG9zdWVyZSwgbGlndWxhIGVsaXQgZmFjaWxpc2lzIHR1cnBpcywgdXQgcGVsbGVudGVzcXVlIG1hc3NhIGVsaXQgZXQgbmlzaS4gUGVsbGVudGVzcXVlIGFjY3Vtc2FuIG9kaW8gaWQgbmlzaSBoZW5kcmVyaXQgaW1wZXJkaWV0LiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuIE51bmMgcXVpcyBsZWN0dXMgdmVsIG51bmMgY29uc2VxdWF0IGVsZW1lbnR1bS4gUGhhc2VsbHVzIHZvbHV0cGF0IG1vbGxpcyBhY2N1bXNhbi4gT3JjaSB2YXJpdXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gTnVuYyBzZW0gbGFjdXMsIGlhY3VsaXMgaWQgbWV0dXMgdmVsLCBhdWN0b3IgY29uc2VjdGV0dXIgbnVuYy4gRHVpcyBsYWNpbmlhIGlkIGxpYmVybyBzY2VsZXJpc3F1ZSB2dWxwdXRhdGUuIFNlZCBjb25zZXF1YXQgdG9ydG9yIG5lYyBsb2JvcnRpcyB2b2x1dHBhdC4gTnVuYyBjb25zZXF1YXQgdnVscHV0YXRlIGV1aXNtb2QuIFByYWVzZW50IHF1aXMgdmVoaWN1bGEgZW5pbS4nO1xuICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmQoaW1nLCBoMiwgcCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBsb2NhdGlvbigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSAnTG9jYXRpb24nO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC50ZXh0Q29udGVudCA9ICdSZXN0YXVyYW50IFN0cmVldCwgMTIzLCAxMjM0NSdcbiAgICBjb250YWluZXIuYXBwZW5kKGgyLCBwKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlIb21lOyIsImltcG9ydCBpbWcwIGZyb20gJy4vaW1hZ2VzLzAuanBnJztcbmltcG9ydCBpbWcxIGZyb20gJy4vaW1hZ2VzLzEuanBnJztcbmltcG9ydCBpbWcyIGZyb20gJy4vaW1hZ2VzLzIuanBnJztcbmltcG9ydCBpbWczIGZyb20gJy4vaW1hZ2VzLzMuanBnJztcbmltcG9ydCBpbWc0IGZyb20gJy4vaW1hZ2VzLzQuanBnJztcbmltcG9ydCBpbWc1IGZyb20gJy4vaW1hZ2VzLzUuanBnJztcbmltcG9ydCBpbWc2IGZyb20gJy4vaW1hZ2VzLzYuanBnJztcbmltcG9ydCBpbWc3IGZyb20gJy4vaW1hZ2VzLzcuanBnJztcbmltcG9ydCBpbWc4IGZyb20gJy4vaW1hZ2VzLzguanBnJztcbmxldCBpbWdzID0gW1xuICAgIGltZzAsXG4gICAgaW1nMSxcbiAgICBpbWcyLFxuICAgIGltZzMsXG4gICAgaW1nNCxcbiAgICBpbWc1LFxuICAgIGltZzYsXG4gICAgaW1nNyxcbiAgICBpbWc4XG5dO1xuXG5mdW5jdGlvbiBkaXNwbGF5TWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBtZW51UGFnZSA9IG1lbnUoKTtcbiAgICBtZW51UGFnZS5pZCA9ICdtZW51LXBhZ2UnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVBhZ2UpO1xufVxuXG5mdW5jdGlvbiBtZW51KCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNhcmRzID0gW107XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgIGNhcmRzW2ldID0gY2FyZENyZWF0b3IoJ01lbnUgaXRlbScsIGksICdNYWVjZW5hcyB2aXRhZSB1cm5hIG5lYyBlcmF0IHRlbXB1cyBwZWxsZW50ZXNxdWUgZXQgc2l0IGFtZXQgaXBzdW0uIFNlZCB0ZW1wdXMganVzdG8gZXQgcmlzdXMgcG9ydGEgY29uZGltZW50dW0uJyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkc1tpXS5lbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjYXJkQ3JlYXRvcihuYW1lLCBpbmRleCwgdGV4dCkge1xuICAgIGNvbnN0IGNhcmQgPSB7fTtcblxuICAgIC8vIENhcmQgZGl2XG4gICAgY2FyZC5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuICAgIC8vIENhcmQgdGl0bGVcbiAgICBjYXJkLm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNhcmQubmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICAvLyBDYXJkIHBpY3R1cmVcbiAgICBjYXJkLmltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2FyZC5pbWFnZS5zcmMgPSBpbWdzW2luZGV4XTtcbiAgICBjYXJkLmltYWdlLmlkID0gYGltZy0ke2luZGV4fWA7XG5cbiAgICAvLyBDYXJkIHRleHRcbiAgICBjYXJkLnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2FyZC50ZXh0LnRleHRDb250ZW50ID0gdGV4dDtcblxuICAgIC8vIEFwcGVuZCBlbGVtZW50c1xuICAgIGNhcmQuZWxlbWVudC5hcHBlbmQoY2FyZC5pbWFnZSwgY2FyZC5uYW1lLCBjYXJkLnRleHQpO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlNZW51OyIsImltcG9ydCBkaXNwbGF5Q29udGFjdCBmcm9tIFwiLi9jb250YWN0Q29udGVudFwiO1xuaW1wb3J0IGRpc3BsYXlIb21lIGZyb20gXCIuL2hvbWVDb250ZW50XCI7XG5pbXBvcnQgZGlzcGxheU1lbnUgZnJvbSBcIi4vbWVudUNvbnRlbnRcIjtcblxuY29uc3QgcGFnZUxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShoZWFkZXIsIGNvbnRlbnQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ1Jlc3RhdXJhbnQnO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVOYXZCYXIoKSB7XG4gICAgICAgIC8vIE5hdmJhclxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIFxuICAgICAgICAvLyBIb21lIFxuICAgICAgICBjb25zdCBob21lTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaG9tZU5hdi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICAgICAgaG9tZU5hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJzEnKTtcbiAgICAgICAgaG9tZU5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnQuZmlyc3RDaGlsZC5pZCA9PT0gJ2hvbWUtcGFnZScpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnRhY3ROYXYuc2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2ZScsICcwJyk7XG4gICAgICAgICAgICBtZW51TmF2LnNldEF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnLCAnMCcpO1xuICAgICAgICAgICAgaG9tZU5hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJzEnKTtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIGRpc3BsYXlIb21lKCk7XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICAvLyBNZW51XG4gICAgICAgIGNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBtZW51TmF2LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgICAgICBtZW51TmF2LnNldEF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnLCAnMCcpO1xuICAgICAgICBtZW51TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgICAgICAgICBpZiAoY29udGVudC5maXJzdENoaWxkLmlkID09PSAnbWVudS1wYWdlJykgcmV0dXJuO1xuICAgICAgICAgICAgaG9tZU5hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJzAnKTtcbiAgICAgICAgICAgIGNvbnRhY3ROYXYuc2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2ZScsICcwJyk7XG4gICAgICAgICAgICBtZW51TmF2LnNldEF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnLCAnMScpO1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgZGlzcGxheU1lbnUoKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIC8vIENvbnRhY3RcbiAgICAgICAgY29uc3QgY29udGFjdE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnRhY3ROYXYudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgICAgIGNvbnRhY3ROYXYuc2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2ZScsICcwJyk7XG4gICAgICAgIGNvbnRhY3ROYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgIGlmIChjb250ZW50LmZpcnN0Q2hpbGQuaWQgPT09ICdjb250YWN0LXBhZ2UnKSByZXR1cm47XG4gICAgICAgICAgICBtZW51TmF2LnNldEF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnLCAnMCcpO1xuICAgICAgICAgICAgaG9tZU5hdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJzAnKTtcbiAgICAgICAgICAgIGNvbnRhY3ROYXYuc2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2ZScsICcxJyk7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICBkaXNwbGF5Q29udGFjdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBcHBlbmQgZWxlbWVudHNcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQoaG9tZU5hdik7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKG1lbnVOYXYpO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChjb250YWN0TmF2KTtcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIG5hdjtcbiAgICB9XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKCkpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHBhZ2VMb2FkIGZyb20gJy4vcGFnZUxvYWQuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZGlzcGxheUhvbWUgZnJvbSAnLi9ob21lQ29udGVudC5qcyc7XG5pbXBvcnQgZGlzcGxheU1lbnUgZnJvbSAnLi9tZW51Q29udGVudC5qcyc7XG5pbXBvcnQgZGlzcGxheUNvbnRhY3QgZnJvbSAnLi9jb250YWN0Q29udGVudC5qcyc7XG5cbnBhZ2VMb2FkKCk7XG5kaXNwbGF5SG9tZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==