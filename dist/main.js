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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary: rgb(71, 69, 69);\n  --secondary: #ccc;\n  --border: rgb(221, 219, 219);\n  --background: rgb(243, 243, 243);\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.flex-center {\n  align-items: center;\n}\n\nbody {\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--background);\n  font-size: 1.4rem;\n}\n\ni {\n  cursor: pointer;\n  color: var(--secondary);\n}\n\nsection {\n  background-color: #fff;\n  width: 50%;\n  min-width: 300px;\n  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);\n  border-radius: 6px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.header {\n  border-bottom: 1px solid var(--border);\n  padding: 1.2rem 1.5rem;\n  color: var(--primary);\n  justify-content: space-between;\n}\n\nform button {\n  background-color: transparent;\n  border: none;\n  padding: 0.6rem;\n}\n\nform button i {\n  transform: rotate(90deg);\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.header i {\n  transform: rotate(90deg);\n  font-size: 18px;\n}\n\nform > div {\n  border-bottom: 1px solid var(--border);\n  padding: 0.7rem 1.5rem;\n  justify-content: space-between;\n  width: 100%;\n}\n\nform input {\n  border: none;\n  outline: none;\n  min-width: 250px;\n  padding: 0.8rem 0;\n  flex: 1;\n}\n\nform input,\nform input::-webkit-input-placeholder {\n  font-size: 1.2rem;\n  font-family: 'Roboto', sans-serif;\n  font-style: italic;\n  font-weight: 100;\n  color: rgb(131, 130, 130);\n}\n\n.tasks-list {\n  min-width: 100%;\n}\n\n.tasks-list li {\n  width: 100%;\n  list-style: none;\n  border-bottom: 1px solid var(--border);\n  padding: 0.7rem 1.2rem;\n}\n\n.task-container button i {\n  font-size: 1.2rem;\n}\n\n.tasks-list li label {\n  margin-left: 6px;\n  font-size: inherit;\n  color: var(--primary);\n  cursor: pointer;\n}\n\n.tasks-list li i:hover {\n  color: var(--primary);\n  cursor: pointer;\n}\n\n.clear-btn button {\n  width: 100%;\n  font-size: inherit;\n  padding: 1.2rem;\n  border: none;\n  outline: none;\n  color: var(--secondary);\n  background-color: var(--background);\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  cursor: pointer;\n}\n\n.task-container .task-details {\n  flex: 1;\n  display: flex;\n  padding: 0 1rem;\n}\n\n.task-container .task-details span {\n  margin-left: 6px;\n  font-size: inherit;\n  color: var(--primary);\n}\n\n.task-container .task-details span.compeleted {\n  text-decoration: line-through;\n}\n\n.task-container .task-details input {\n  border: none;\n  font-size: inherit;\n  color: var(--primary);\n  outline: none;\n  flex: 1;\n  display: none;\n  background-color: transparent;\n}\n\n.task-container .task-action-btns button {\n  width: 2.2rem;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0.3rem 0;\n}\n\n.task-container .task-action-btns button i {\n  padding: 0.6rem;\n}\n\n.task-container .task-action-btns button:last-child {\n  display: none;\n}\n\n.edit-task-form {\n  flex: 1;\n  display: flex;\n}\n\n.task-container.edit-mode {\n  background-color: #faf3db;\n}\n\n.task-container.edit-mode .task-action-btns button:last-child {\n  display: block;\n}\n\n.task-details.completed span {\n  text-decoration: line-through;\n}\n\n.task-container.edit-mode .task-action-btns button:first-child {\n  display: none;\n}\n\n.task-container.edit-mode .task-details input {\n  display: block;\n}\n\n.task-container.edit-mode .task-details span {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,4BAA4B;EAC5B,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,gBAAgB;EAChB,uCAAuC;EACvC,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;;AAEA;EACE,sCAAsC;EACtC,sBAAsB;EACtB,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,sCAAsC;EACtC,sBAAsB;EACtB,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,OAAO;AACT;;AAEA;;EAEE,iBAAiB;EACjB,iCAAiC;EACjC,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,sCAAsC;EACtC,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mCAAmC;EACnC,8BAA8B;EAC9B,+BAA+B;EAC/B,eAAe;AACjB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,aAAa;EACb,OAAO;EACP,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,OAAO;EACP,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\n  --primary: rgb(71, 69, 69);\n  --secondary: #ccc;\n  --border: rgb(221, 219, 219);\n  --background: rgb(243, 243, 243);\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.flex-center {\n  align-items: center;\n}\n\nbody {\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--background);\n  font-size: 1.4rem;\n}\n\ni {\n  cursor: pointer;\n  color: var(--secondary);\n}\n\nsection {\n  background-color: #fff;\n  width: 50%;\n  min-width: 300px;\n  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);\n  border-radius: 6px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.header {\n  border-bottom: 1px solid var(--border);\n  padding: 1.2rem 1.5rem;\n  color: var(--primary);\n  justify-content: space-between;\n}\n\nform button {\n  background-color: transparent;\n  border: none;\n  padding: 0.6rem;\n}\n\nform button i {\n  transform: rotate(90deg);\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.header i {\n  transform: rotate(90deg);\n  font-size: 18px;\n}\n\nform > div {\n  border-bottom: 1px solid var(--border);\n  padding: 0.7rem 1.5rem;\n  justify-content: space-between;\n  width: 100%;\n}\n\nform input {\n  border: none;\n  outline: none;\n  min-width: 250px;\n  padding: 0.8rem 0;\n  flex: 1;\n}\n\nform input,\nform input::-webkit-input-placeholder {\n  font-size: 1.2rem;\n  font-family: 'Roboto', sans-serif;\n  font-style: italic;\n  font-weight: 100;\n  color: rgb(131, 130, 130);\n}\n\n.tasks-list {\n  min-width: 100%;\n}\n\n.tasks-list li {\n  width: 100%;\n  list-style: none;\n  border-bottom: 1px solid var(--border);\n  padding: 0.7rem 1.2rem;\n}\n\n.task-container button i {\n  font-size: 1.2rem;\n}\n\n.tasks-list li label {\n  margin-left: 6px;\n  font-size: inherit;\n  color: var(--primary);\n  cursor: pointer;\n}\n\n.tasks-list li i:hover {\n  color: var(--primary);\n  cursor: pointer;\n}\n\n.clear-btn button {\n  width: 100%;\n  font-size: inherit;\n  padding: 1.2rem;\n  border: none;\n  outline: none;\n  color: var(--secondary);\n  background-color: var(--background);\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  cursor: pointer;\n}\n\n.task-container .task-details {\n  flex: 1;\n  display: flex;\n  padding: 0 1rem;\n}\n\n.task-container .task-details span {\n  margin-left: 6px;\n  font-size: inherit;\n  color: var(--primary);\n}\n\n.task-container .task-details span.compeleted {\n  text-decoration: line-through;\n}\n\n.task-container .task-details input {\n  border: none;\n  font-size: inherit;\n  color: var(--primary);\n  outline: none;\n  flex: 1;\n  display: none;\n  background-color: transparent;\n}\n\n.task-container .task-action-btns button {\n  width: 2.2rem;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0.3rem 0;\n}\n\n.task-container .task-action-btns button i {\n  padding: 0.6rem;\n}\n\n.task-container .task-action-btns button:last-child {\n  display: none;\n}\n\n.edit-task-form {\n  flex: 1;\n  display: flex;\n}\n\n.task-container.edit-mode {\n  background-color: #faf3db;\n}\n\n.task-container.edit-mode .task-action-btns button:last-child {\n  display: block;\n}\n\n.task-details.completed span {\n  text-decoration: line-through;\n}\n\n.task-container.edit-mode .task-action-btns button:first-child {\n  display: none;\n}\n\n.task-container.edit-mode .task-details input {\n  display: block;\n}\n\n.task-container.edit-mode .task-details span {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
  constructor() {
    this.tasks = [];
  }

  get() {
    return this.tasks;
  }

  add(task) {
    this.tasks.push(task);
  }

  update(taskId, task) {
    this.tasks[taskId] = task;
  }

  remove(taskId) {
    this.tasks = this.tasks.filter((task) => task.index.toString() !== taskId);
  }

  clearCompleted() {
    const newTasks = this.tasts.filter((task) => !task.completed);
    this.tasks = newTasks.map((task, index) => {
      task.index = index + 1;
      return task;
    });
  }
}

const task = new Task();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskActions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskActions.js */ "./src/taskActions.js");


const tasksList = document.querySelector('.tasks-list');
const dom = (() => {
  const showTrashIcon = () => {
    const editBtns = document.querySelectorAll('.task-edit-btn');

    editBtns.forEach((editBtn) => {
      editBtn.addEventListener('click', (e) => {
        const tasksElements = document.querySelectorAll('.task-container');
        tasksElements.forEach((taskElm) => {
          taskElm.classList.remove('edit-mode');
        });
        const parent = e.target.parentNode.parentNode.parentNode;
        parent.classList.add('edit-mode');
      });
    });
  };

  const renderTasks = (tasks) => {
    tasksList.innerHTML = '';
    tasks.map((task) => {
      const taskItem = document.createElement('li');
      taskItem.classList.add('task-container', 'd-flex', 'flex-center');
      taskItem.innerHTML = `
              <div class="">
                <input type="checkbox" ${
  task.completed ? 'checked' : ''
  } data-task-id="${task.index}" class="task-checkbox"/>
              </div>
              <div class="${
  task.completed ? 'task-details completed' : 'task-details'
  }">
                <span>${task.description}</span>
                <form class="edit-task-form" data-task-id="${task.index}">
                  <input type="text" value="${
  task.description
  }" class="task-edit" />
                </form>
              </div>
              <div class="task-action-btns">
                <button class="task-edit-btn">
                  <i class="fas fa-ellipsis-v"></i>
                </button>
                <button class="task-delete-btn" data-task-id="${task.index}">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            `;
      showTrashIcon();
      dom.deleteTaskHandler();
      dom.editTastSubmit();
      dom.completeTaskHandler();
      dom.clearCompletedHandler();
      return tasksList.appendChild(taskItem);
    });
  };

  const editTastSubmit = () => {
    const editTaskForms = document.querySelectorAll('.edit-task-form');
    editTaskForms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskId = form.getAttribute('data-task-id');
        if (form.elements[0].value.trim() === '') return;
        const { tasks } = _taskActions_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateTask(
          taskId,
          form.elements[0].value,
        );
        renderTasks(tasks);
      });
    });
  };

  const completeTaskHandler = () => {
    const checkboxes = document.querySelectorAll('.task-checkbox');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (e) => {
        const taskId = e.target.getAttribute('data-task-id');
        _taskActions_js__WEBPACK_IMPORTED_MODULE_0__["default"].completeTask(taskId, e.target.checked);
        window.location.reload();
      });
    });
  };

  const deleteTaskHandler = () => {
    const deleteBtns = document.querySelectorAll('.task-delete-btn');
    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const taskId = btn.getAttribute('data-task-id');
        const tasks = _taskActions_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTask(taskId);
        renderTasks(tasks);
      });
    });
  };

  const clearCompletedHandler = () => {
    const clearCompletedBtn = document.querySelector('.clear-completed-btn');
    clearCompletedBtn.addEventListener('click', () => {
      const tasks = _taskActions_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearCompleted();
      renderTasks(tasks);
    });
  };

  const updateUI = (tasks) => {
    renderTasks(tasks);
  };

  return {
    renderTasks,
    editTastSubmit,
    showTrashIcon,
    updateUI,
    completeTaskHandler,
    deleteTaskHandler,
    clearCompletedHandler,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const storage = {
  get: (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);

/***/ }),

/***/ "./src/taskActions.js":
/*!****************************!*\
  !*** ./src/taskActions.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");


const taskActions = (() => {
  const addTask = (description) => {
    const tasks = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('tasks');
    const task = {
      index: tasks.length + 1,
      completed: false,
      description,
    };
    tasks.push(task);
    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('tasks', tasks);
    return task;
  };

  const updateTask = (index, description) => {
    const tasks = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('tasks');
    const task = tasks[index - 1];
    task.description = description;
    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('tasks', tasks);
    return { task, tasks };
  };

  const completeTask = (index, checked) => {
    const tasks = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('tasks');
    const task = tasks[index - 1];
    task.completed = checked;
    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('tasks', tasks);
    return { task, tasks };
  };

  const deleteTask = (index) => {
    let tasks = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('tasks');
    tasks.splice(index - 1, 1);
    tasks = tasks.map((task, i) => {
      task.index = i + 1;
      return task;
    });
    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('tasks', tasks);
    return tasks;
  };

  const clearCompleted = () => {
    const tasks = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('tasks');
    let unCompletedTasks = tasks.filter((task) => !task.completed);
    unCompletedTasks = unCompletedTasks.map((task, index) => {
      task.index = index + 1;
      return task;
    });
    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('tasks', unCompletedTasks);
    return unCompletedTasks;
  };

  return {
    addTask,
    updateTask,
    completeTask,
    deleteTask,
    clearCompleted,
  };
})();

// export const { addTask, deleteTask } = taskActions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskActions);

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _taskActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskActions.js */ "./src/taskActions.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");






const form = document.getElementById('form');
const todoTextInput = document.getElementById('add-book');

const getDefaultTasks = () => {
  const tasks = _Task_js__WEBPACK_IMPORTED_MODULE_4__["default"].get();
  const storedTasks = _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('tasks');
  if (storedTasks) {
    storedTasks.map((t) => _Task_js__WEBPACK_IMPORTED_MODULE_4__["default"].add(t));
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderTasks(storedTasks);
  } else {
    _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].set('tasks', tasks);
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderTasks(tasks);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const savedTask = _taskActions_js__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(todoTextInput.value);
  _Task_js__WEBPACK_IMPORTED_MODULE_4__["default"].add(savedTask);
  const tasks = _Task_js__WEBPACK_IMPORTED_MODULE_4__["default"].get();
  _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderTasks(tasks);
  todoTextInput.value = '';
});

getDefaultTasks();
_dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateUI(_storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('tasks'));
_dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].showTrashIcon();
_dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].editTastSubmit(_Task_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
_dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].completeTaskHandler();
_dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].deleteTaskHandler();
_dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearCompletedHandler();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDYztBQUNRO0FBQ2hCO0FBQ0U7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isb0RBQVE7QUFDeEIsc0JBQXNCLHVEQUFXO0FBQ2pDO0FBQ0EsMkJBQTJCLG9EQUFRO0FBQ25DLElBQUksMkRBQWU7QUFDbkIsSUFBSTtBQUNKLElBQUksdURBQVc7QUFDZixJQUFJLDJEQUFlO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiwrREFBbUI7QUFDdkMsRUFBRSxvREFBUTtBQUNWLGdCQUFnQixvREFBUTtBQUN4QixFQUFFLDJEQUFlO0FBQ2pCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHdEQUFZLENBQUMsdURBQVc7QUFDeEIsNkRBQWlCO0FBQ2pCLDhEQUFrQixDQUFDLGdEQUFJO0FBQ3ZCLG1FQUF1QjtBQUN2QixpRUFBcUI7QUFDckIscUVBQXlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub19Eb19MaXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1RvX0RvX0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL1RvX0RvX0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL1RvX0RvX0xpc3QvLi9zcmMvVGFzay5qcyIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC8uL3NyYy90YXNrQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvX0RvX0xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RvX0RvX0xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1wcmltYXJ5OiByZ2IoNzEsIDY5LCA2OSk7XFxuICAtLXNlY29uZGFyeTogI2NjYztcXG4gIC0tYm9yZGVyOiByZ2IoMjIxLCAyMTksIDIxOSk7XFxuICAtLWJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYigwIDAgMCAvIDIwJSk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgcGFkZGluZzogMS4ycmVtIDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbmZvcm0gYnV0dG9uIGkge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlYWRlciBpIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuZm9ybSA+IGRpdiB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIHBhZGRpbmc6IDAuOHJlbSAwO1xcbiAgZmxleDogMTtcXG59XFxuXFxuZm9ybSBpbnB1dCxcXG5mb3JtIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGNvbG9yOiByZ2IoMTMxLCAxMzAsIDEzMCk7XFxufVxcblxcbi50YXNrcy1saXN0IHtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICBwYWRkaW5nOiAwLjdyZW0gMS4ycmVtO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgYnV0dG9uIGkge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50YXNrcy1saXN0IGxpIGxhYmVsIHtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrcy1saXN0IGxpIGk6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xlYXItYnRuIGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDEuMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIC50YXNrLWRldGFpbHMge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1kZXRhaWxzIHNwYW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDZweDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIC50YXNrLWRldGFpbHMgc3Bhbi5jb21wZWxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgLnRhc2stZGV0YWlscyBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIC50YXNrLWFjdGlvbi1idG5zIGJ1dHRvbiB7XFxuICB3aWR0aDogMi4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwLjNyZW0gMDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIC50YXNrLWFjdGlvbi1idG5zIGJ1dHRvbiBpIHtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIC50YXNrLWFjdGlvbi1idG5zIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5lZGl0LXRhc2stZm9ybSB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLmVkaXQtbW9kZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmM2RiO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuZWRpdC1tb2RlIC50YXNrLWFjdGlvbi1idG5zIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLmNvbXBsZXRlZCBzcGFuIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuZWRpdC1tb2RlIC50YXNrLWFjdGlvbi1idG5zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuZWRpdC1tb2RlIC50YXNrLWRldGFpbHMgaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5lZGl0LW1vZGUgLnRhc2stZGV0YWlscyBzcGFuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsT0FBTztBQUNUOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLE9BQU87RUFDUCxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wcmltYXJ5OiByZ2IoNzEsIDY5LCA2OSk7XFxuICAtLXNlY29uZGFyeTogI2NjYztcXG4gIC0tYm9yZGVyOiByZ2IoMjIxLCAyMTksIDIxOSk7XFxuICAtLWJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYigwIDAgMCAvIDIwJSk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgcGFkZGluZzogMS4ycmVtIDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbmZvcm0gYnV0dG9uIGkge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlYWRlciBpIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuZm9ybSA+IGRpdiB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIHBhZGRpbmc6IDAuOHJlbSAwO1xcbiAgZmxleDogMTtcXG59XFxuXFxuZm9ybSBpbnB1dCxcXG5mb3JtIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGNvbG9yOiByZ2IoMTMxLCAxMzAsIDEzMCk7XFxufVxcblxcbi50YXNrcy1saXN0IHtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICBwYWRkaW5nOiAwLjdyZW0gMS4ycmVtO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgYnV0dG9uIGkge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50YXNrcy1saXN0IGxpIGxhYmVsIHtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrcy1saXN0IGxpIGk6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2xlYXItYnRuIGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDEuMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIC50YXNrLWRldGFpbHMge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1kZXRhaWxzIHNwYW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDZweDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIC50YXNrLWRldGFpbHMgc3Bhbi5jb21wZWxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgLnRhc2stZGV0YWlscyBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIC50YXNrLWFjdGlvbi1idG5zIGJ1dHRvbiB7XFxuICB3aWR0aDogMi4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAwLjNyZW0gMDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIC50YXNrLWFjdGlvbi1idG5zIGJ1dHRvbiBpIHtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIC50YXNrLWFjdGlvbi1idG5zIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5lZGl0LXRhc2stZm9ybSB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLmVkaXQtbW9kZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmM2RiO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuZWRpdC1tb2RlIC50YXNrLWFjdGlvbi1idG5zIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLmNvbXBsZXRlZCBzcGFuIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuZWRpdC1tb2RlIC50YXNrLWFjdGlvbi1idG5zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuZWRpdC1tb2RlIC50YXNrLWRldGFpbHMgaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5lZGl0LW1vZGUgLnRhc2stZGV0YWlscyBzcGFuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgYWRkKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gIH1cblxuICB1cGRhdGUodGFza0lkLCB0YXNrKSB7XG4gICAgdGhpcy50YXNrc1t0YXNrSWRdID0gdGFzaztcbiAgfVxuXG4gIHJlbW92ZSh0YXNrSWQpIHtcbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaW5kZXgudG9TdHJpbmcoKSAhPT0gdGFza0lkKTtcbiAgfVxuXG4gIGNsZWFyQ29tcGxldGVkKCkge1xuICAgIGNvbnN0IG5ld1Rhc2tzID0gdGhpcy50YXN0cy5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlZCk7XG4gICAgdGhpcy50YXNrcyA9IG5ld1Rhc2tzLm1hcCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIHRhc2suaW5kZXggPSBpbmRleCArIDE7XG4gICAgICByZXR1cm4gdGFzaztcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCB0YXNrID0gbmV3IFRhc2soKTtcblxuZXhwb3J0IGRlZmF1bHQgdGFzazsiLCJpbXBvcnQgdGFza0FjdGlvbnMgZnJvbSAnLi90YXNrQWN0aW9ucy5qcyc7XG5cbmNvbnN0IHRhc2tzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1saXN0Jyk7XG5jb25zdCBkb20gPSAoKCkgPT4ge1xuICBjb25zdCBzaG93VHJhc2hJY29uID0gKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZWRpdC1idG4nKTtcblxuICAgIGVkaXRCdG5zLmZvckVhY2goKGVkaXRCdG4pID0+IHtcbiAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIHRhc2tzRWxlbWVudHMuZm9yRWFjaCgodGFza0VsbSkgPT4ge1xuICAgICAgICAgIHRhc2tFbG0uY2xhc3NMaXN0LnJlbW92ZSgnZWRpdC1tb2RlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2VkaXQtbW9kZScpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVGFza3MgPSAodGFza3MpID0+IHtcbiAgICB0YXNrc0xpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgdGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicsICdkLWZsZXgnLCAnZmxleC1jZW50ZXInKTtcbiAgICAgIHRhc2tJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke1xuICB0YXNrLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnXG4gIH0gZGF0YS10YXNrLWlkPVwiJHt0YXNrLmluZGV4fVwiIGNsYXNzPVwidGFzay1jaGVja2JveFwiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke1xuICB0YXNrLmNvbXBsZXRlZCA/ICd0YXNrLWRldGFpbHMgY29tcGxldGVkJyA6ICd0YXNrLWRldGFpbHMnXG4gIH1cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4ke3Rhc2suZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZWRpdC10YXNrLWZvcm1cIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaW5kZXh9XCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7XG4gIHRhc2suZGVzY3JpcHRpb25cbiAgfVwiIGNsYXNzPVwidGFzay1lZGl0XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1hY3Rpb24tYnRuc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrLWVkaXQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1lbGxpcHNpcy12XCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrLWRlbGV0ZS1idG5cIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaW5kZXh9XCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10cmFzaC1hbHRcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgIHNob3dUcmFzaEljb24oKTtcbiAgICAgIGRvbS5kZWxldGVUYXNrSGFuZGxlcigpO1xuICAgICAgZG9tLmVkaXRUYXN0U3VibWl0KCk7XG4gICAgICBkb20uY29tcGxldGVUYXNrSGFuZGxlcigpO1xuICAgICAgZG9tLmNsZWFyQ29tcGxldGVkSGFuZGxlcigpO1xuICAgICAgcmV0dXJuIHRhc2tzTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc3RTdWJtaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZWRpdFRhc2tGb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LXRhc2stZm9ybScpO1xuICAgIGVkaXRUYXNrRm9ybXMuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IGZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2staWQnKTtcbiAgICAgICAgaWYgKGZvcm0uZWxlbWVudHNbMF0udmFsdWUudHJpbSgpID09PSAnJykgcmV0dXJuO1xuICAgICAgICBjb25zdCB7IHRhc2tzIH0gPSB0YXNrQWN0aW9ucy51cGRhdGVUYXNrKFxuICAgICAgICAgIHRhc2tJZCxcbiAgICAgICAgICBmb3JtLmVsZW1lbnRzWzBdLnZhbHVlLFxuICAgICAgICApO1xuICAgICAgICByZW5kZXJUYXNrcyh0YXNrcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjb21wbGV0ZVRhc2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1jaGVja2JveCcpO1xuICAgIGNoZWNrYm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWlkJyk7XG4gICAgICAgIHRhc2tBY3Rpb25zLmNvbXBsZXRlVGFzayh0YXNrSWQsIGUudGFyZ2V0LmNoZWNrZWQpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zdCBkZWxldGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZGVsZXRlLWJ0bicpO1xuICAgIGRlbGV0ZUJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pZCcpO1xuICAgICAgICBjb25zdCB0YXNrcyA9IHRhc2tBY3Rpb25zLmRlbGV0ZVRhc2sodGFza0lkKTtcbiAgICAgICAgcmVuZGVyVGFza3ModGFza3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2xlYXJDb21wbGV0ZWRIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNsZWFyQ29tcGxldGVkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWNvbXBsZXRlZC1idG4nKTtcbiAgICBjbGVhckNvbXBsZXRlZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tzID0gdGFza0FjdGlvbnMuY2xlYXJDb21wbGV0ZWQoKTtcbiAgICAgIHJlbmRlclRhc2tzKHRhc2tzKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVVSSA9ICh0YXNrcykgPT4ge1xuICAgIHJlbmRlclRhc2tzKHRhc2tzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmRlclRhc2tzLFxuICAgIGVkaXRUYXN0U3VibWl0LFxuICAgIHNob3dUcmFzaEljb24sXG4gICAgdXBkYXRlVUksXG4gICAgY29tcGxldGVUYXNrSGFuZGxlcixcbiAgICBkZWxldGVUYXNrSGFuZGxlcixcbiAgICBjbGVhckNvbXBsZXRlZEhhbmRsZXIsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkb207XG4iLCJjb25zdCBzdG9yYWdlID0ge1xuICBnZXQ6IChrZXkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgcmV0dXJuIHZhbHVlID8gSlNPTi5wYXJzZSh2YWx1ZSkgOiBudWxsO1xuICB9LFxuICBzZXQ6IChrZXksIHZhbHVlKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICB9LFxuICByZW1vdmU6IChrZXkpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICB9LFxufTtcbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2U7IiwiaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJztcblxuY29uc3QgdGFza0FjdGlvbnMgPSAoKCkgPT4ge1xuICBjb25zdCBhZGRUYXNrID0gKGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBzdG9yYWdlLmdldCgndGFza3MnKTtcbiAgICBjb25zdCB0YXNrID0ge1xuICAgICAgaW5kZXg6IHRhc2tzLmxlbmd0aCArIDEsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgfTtcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgIHN0b3JhZ2Uuc2V0KCd0YXNrcycsIHRhc2tzKTtcbiAgICByZXR1cm4gdGFzaztcbiAgfTtcblxuICBjb25zdCB1cGRhdGVUYXNrID0gKGluZGV4LCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gc3RvcmFnZS5nZXQoJ3Rhc2tzJyk7XG4gICAgY29uc3QgdGFzayA9IHRhc2tzW2luZGV4IC0gMV07XG4gICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHN0b3JhZ2Uuc2V0KCd0YXNrcycsIHRhc2tzKTtcbiAgICByZXR1cm4geyB0YXNrLCB0YXNrcyB9O1xuICB9O1xuXG4gIGNvbnN0IGNvbXBsZXRlVGFzayA9IChpbmRleCwgY2hlY2tlZCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gc3RvcmFnZS5nZXQoJ3Rhc2tzJyk7XG4gICAgY29uc3QgdGFzayA9IHRhc2tzW2luZGV4IC0gMV07XG4gICAgdGFzay5jb21wbGV0ZWQgPSBjaGVja2VkO1xuICAgIHN0b3JhZ2Uuc2V0KCd0YXNrcycsIHRhc2tzKTtcbiAgICByZXR1cm4geyB0YXNrLCB0YXNrcyB9O1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgICBsZXQgdGFza3MgPSBzdG9yYWdlLmdldCgndGFza3MnKTtcbiAgICB0YXNrcy5zcGxpY2UoaW5kZXggLSAxLCAxKTtcbiAgICB0YXNrcyA9IHRhc2tzLm1hcCgodGFzaywgaSkgPT4ge1xuICAgICAgdGFzay5pbmRleCA9IGkgKyAxO1xuICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfSk7XG4gICAgc3RvcmFnZS5zZXQoJ3Rhc2tzJywgdGFza3MpO1xuICAgIHJldHVybiB0YXNrcztcbiAgfTtcblxuICBjb25zdCBjbGVhckNvbXBsZXRlZCA9ICgpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IHN0b3JhZ2UuZ2V0KCd0YXNrcycpO1xuICAgIGxldCB1bkNvbXBsZXRlZFRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpO1xuICAgIHVuQ29tcGxldGVkVGFza3MgPSB1bkNvbXBsZXRlZFRhc2tzLm1hcCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIHRhc2suaW5kZXggPSBpbmRleCArIDE7XG4gICAgICByZXR1cm4gdGFzaztcbiAgICB9KTtcbiAgICBzdG9yYWdlLnNldCgndGFza3MnLCB1bkNvbXBsZXRlZFRhc2tzKTtcbiAgICByZXR1cm4gdW5Db21wbGV0ZWRUYXNrcztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZFRhc2ssXG4gICAgdXBkYXRlVGFzayxcbiAgICBjb21wbGV0ZVRhc2ssXG4gICAgZGVsZXRlVGFzayxcbiAgICBjbGVhckNvbXBsZXRlZCxcbiAgfTtcbn0pKCk7XG5cbi8vIGV4cG9ydCBjb25zdCB7IGFkZFRhc2ssIGRlbGV0ZVRhc2sgfSA9IHRhc2tBY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgdGFza0FjdGlvbnM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCB0YXNrQWN0aW9ucyBmcm9tICcuL3Rhc2tBY3Rpb25zLmpzJztcbmltcG9ydCBkb20gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHRhc2sgZnJvbSAnLi9UYXNrLmpzJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XG5jb25zdCB0b2RvVGV4dElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1ib29rJyk7XG5cbmNvbnN0IGdldERlZmF1bHRUYXNrcyA9ICgpID0+IHtcbiAgY29uc3QgdGFza3MgPSB0YXNrLmdldCgpO1xuICBjb25zdCBzdG9yZWRUYXNrcyA9IHN0b3JhZ2UuZ2V0KCd0YXNrcycpO1xuICBpZiAoc3RvcmVkVGFza3MpIHtcbiAgICBzdG9yZWRUYXNrcy5tYXAoKHQpID0+IHRhc2suYWRkKHQpKTtcbiAgICBkb20ucmVuZGVyVGFza3Moc3RvcmVkVGFza3MpO1xuICB9IGVsc2Uge1xuICAgIHN0b3JhZ2Uuc2V0KCd0YXNrcycsIHRhc2tzKTtcbiAgICBkb20ucmVuZGVyVGFza3ModGFza3MpO1xuICB9XG59O1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgc2F2ZWRUYXNrID0gdGFza0FjdGlvbnMuYWRkVGFzayh0b2RvVGV4dElucHV0LnZhbHVlKTtcbiAgdGFzay5hZGQoc2F2ZWRUYXNrKTtcbiAgY29uc3QgdGFza3MgPSB0YXNrLmdldCgpO1xuICBkb20ucmVuZGVyVGFza3ModGFza3MpO1xuICB0b2RvVGV4dElucHV0LnZhbHVlID0gJyc7XG59KTtcblxuZ2V0RGVmYXVsdFRhc2tzKCk7XG5kb20udXBkYXRlVUkoc3RvcmFnZS5nZXQoJ3Rhc2tzJykpO1xuZG9tLnNob3dUcmFzaEljb24oKTtcbmRvbS5lZGl0VGFzdFN1Ym1pdCh0YXNrKTtcbmRvbS5jb21wbGV0ZVRhc2tIYW5kbGVyKCk7XG5kb20uZGVsZXRlVGFza0hhbmRsZXIoKTtcbmRvbS5jbGVhckNvbXBsZXRlZEhhbmRsZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=