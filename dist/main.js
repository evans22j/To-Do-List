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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary: rgb(71, 69, 69);\n  --secondary: #ccc;\n  --border: rgb(221, 219, 219);\n  --background: rgb(243, 243, 243);\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.flex-center {\n  align-items: center;\n}\n\nbody {\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--background);\n  font-size: 1.4rem;\n}\n\ni {\n  cursor: pointer;\n  color: var(--secondary);\n}\n\nsection {\n  background-color: #fff;\n  width: 50%;\n  min-width: 300px;\n  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);\n  border-radius: 6px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.header {\n  border-bottom: 1px solid var(--border);\n  padding: 1.2rem 1.5rem;\n  color: var(--primary);\n  justify-content: space-between;\n}\n\nform button {\n  background-color: transparent;\n  border: none;\n  padding: 0.6rem;\n}\n\nform button i {\n  transform: rotate(90deg);\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.header i {\n  transform: rotate(90deg);\n  font-size: 18px;\n}\n\nform > div {\n  border-bottom: 1px solid var(--border);\n  padding: 0.7rem 1.5rem;\n  justify-content: space-between;\n  width: 100%;\n}\n\nform input {\n  border: none;\n  outline: none;\n  min-width: 250px;\n  padding: 0.8rem 0;\n  flex: 1;\n}\n\nform input,\nform input::-webkit-input-placeholder {\n  font-size: 1.2rem;\n  font-family: 'Roboto', sans-serif;\n  font-style: italic;\n  font-weight: 100;\n  color: rgb(131, 130, 130);\n}\n\n.tasks-list {\n  min-width: 100%;\n}\n\n.tasks-list li {\n  width: 100%;\n  list-style: none;\n  border-bottom: 1px solid var(--border);\n  padding: 0.7rem 1.2rem;\n}\n\n.task-container button i {\n  font-size: 1.2rem;\n}\n\n.tasks-list li label {\n  margin-left: 6px;\n  font-size: inherit;\n  color: var(--primary);\n  cursor: pointer;\n}\n\n/* .tasks-list li label.compeleted {\n  text-decoration: line-through;\n  font-style: italic;\n  color: var(--secondary);\n} */\n\n.tasks-list li i:hover {\n  color: var(--primary);\n  cursor: pointer;\n}\n\n.clear-btn button {\n  width: 100%;\n  font-size: inherit;\n  padding: 1.2rem;\n  border: none;\n  outline: none;\n  color: var(--secondary);\n  background-color: var(--background);\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  cursor: pointer;\n}\n\n.task-container .task-details {\n  flex: 1;\n  display: flex;\n  padding: 0 1rem;\n}\n\n.task-container .task-details span {\n  margin-left: 6px;\n  font-size: inherit;\n  color: var(--primary);\n}\n\n.task-container .task-details span.compeleted {\n  text-decoration: line-through;\n}\n\n.task-container .task-details input {\n  border: none;\n  font-size: inherit;\n  color: var(--primary);\n  outline: none;\n  flex: 1;\n  display: none;\n  background-color: transparent;\n}\n\n.task-container .task-action-btns button {\n  width: 2.2rem;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0.3rem 0;\n}\n\n.task-container .task-action-btns button i {\n  padding: 0.6rem;\n}\n\n.task-container .task-action-btns button:last-child {\n  display: none;\n}\n\n.edit-task-form {\n  flex: 1;\n  display: flex;\n}\n\n.task-container.edit-mode {\n  background-color: #faf3db;\n}\n\n.task-container.edit-mode .task-action-btns button:last-child {\n  display: block;\n}\n\n.task-details.completed span {\n  text-decoration: line-through;\n}\n\n.task-container.edit-mode .task-action-btns button:first-child {\n  display: none;\n}\n\n.task-container.edit-mode .task-details input {\n  display: block;\n}\n\n.task-container.edit-mode .task-details span {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,4BAA4B;EAC5B,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,gBAAgB;EAChB,uCAAuC;EACvC,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;;AAEA;EACE,sCAAsC;EACtC,sBAAsB;EACtB,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,sCAAsC;EACtC,sBAAsB;EACtB,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,OAAO;AACT;;AAEA;;EAEE,iBAAiB;EACjB,iCAAiC;EACjC,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,sCAAsC;EACtC,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;;;;GAIG;;AAEH;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mCAAmC;EACnC,8BAA8B;EAC9B,+BAA+B;EAC/B,eAAe;AACjB;;AAEA;EACE,OAAO;EACP,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,aAAa;EACb,OAAO;EACP,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,OAAO;EACP,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\n  --primary: rgb(71, 69, 69);\n  --secondary: #ccc;\n  --border: rgb(221, 219, 219);\n  --background: rgb(243, 243, 243);\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.flex-center {\n  align-items: center;\n}\n\nbody {\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--background);\n  font-size: 1.4rem;\n}\n\ni {\n  cursor: pointer;\n  color: var(--secondary);\n}\n\nsection {\n  background-color: #fff;\n  width: 50%;\n  min-width: 300px;\n  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);\n  border-radius: 6px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.header {\n  border-bottom: 1px solid var(--border);\n  padding: 1.2rem 1.5rem;\n  color: var(--primary);\n  justify-content: space-between;\n}\n\nform button {\n  background-color: transparent;\n  border: none;\n  padding: 0.6rem;\n}\n\nform button i {\n  transform: rotate(90deg);\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.header i {\n  transform: rotate(90deg);\n  font-size: 18px;\n}\n\nform > div {\n  border-bottom: 1px solid var(--border);\n  padding: 0.7rem 1.5rem;\n  justify-content: space-between;\n  width: 100%;\n}\n\nform input {\n  border: none;\n  outline: none;\n  min-width: 250px;\n  padding: 0.8rem 0;\n  flex: 1;\n}\n\nform input,\nform input::-webkit-input-placeholder {\n  font-size: 1.2rem;\n  font-family: 'Roboto', sans-serif;\n  font-style: italic;\n  font-weight: 100;\n  color: rgb(131, 130, 130);\n}\n\n.tasks-list {\n  min-width: 100%;\n}\n\n.tasks-list li {\n  width: 100%;\n  list-style: none;\n  border-bottom: 1px solid var(--border);\n  padding: 0.7rem 1.2rem;\n}\n\n.task-container button i {\n  font-size: 1.2rem;\n}\n\n.tasks-list li label {\n  margin-left: 6px;\n  font-size: inherit;\n  color: var(--primary);\n  cursor: pointer;\n}\n\n/* .tasks-list li label.compeleted {\n  text-decoration: line-through;\n  font-style: italic;\n  color: var(--secondary);\n} */\n\n.tasks-list li i:hover {\n  color: var(--primary);\n  cursor: pointer;\n}\n\n.clear-btn button {\n  width: 100%;\n  font-size: inherit;\n  padding: 1.2rem;\n  border: none;\n  outline: none;\n  color: var(--secondary);\n  background-color: var(--background);\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  cursor: pointer;\n}\n\n.task-container .task-details {\n  flex: 1;\n  display: flex;\n  padding: 0 1rem;\n}\n\n.task-container .task-details span {\n  margin-left: 6px;\n  font-size: inherit;\n  color: var(--primary);\n}\n\n.task-container .task-details span.compeleted {\n  text-decoration: line-through;\n}\n\n.task-container .task-details input {\n  border: none;\n  font-size: inherit;\n  color: var(--primary);\n  outline: none;\n  flex: 1;\n  display: none;\n  background-color: transparent;\n}\n\n.task-container .task-action-btns button {\n  width: 2.2rem;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0.3rem 0;\n}\n\n.task-container .task-action-btns button i {\n  padding: 0.6rem;\n}\n\n.task-container .task-action-btns button:last-child {\n  display: none;\n}\n\n.edit-task-form {\n  flex: 1;\n  display: flex;\n}\n\n.task-container.edit-mode {\n  background-color: #faf3db;\n}\n\n.task-container.edit-mode .task-action-btns button:last-child {\n  display: block;\n}\n\n.task-details.completed span {\n  text-decoration: line-through;\n}\n\n.task-container.edit-mode .task-action-btns button:first-child {\n  display: none;\n}\n\n.task-container.edit-mode .task-details input {\n  display: block;\n}\n\n.task-container.edit-mode .task-details span {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNjO0FBQ1E7QUFDaEI7QUFDRTs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixvREFBUTtBQUN4QixzQkFBc0IsdURBQVc7QUFDakM7QUFDQSwyQkFBMkIsb0RBQVE7QUFDbkMsSUFBSSwyREFBZTtBQUNuQixJQUFJO0FBQ0osSUFBSSx1REFBVztBQUNmLElBQUksMkRBQWU7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLCtEQUFtQjtBQUN2QyxFQUFFLG9EQUFRO0FBQ1YsZ0JBQWdCLG9EQUFRO0FBQ3hCLEVBQUUsMkRBQWU7QUFDakI7QUFDQSxDQUFDOztBQUVEO0FBQ0Esd0RBQVksQ0FBQyx1REFBVztBQUN4Qiw2REFBaUI7QUFDakIsOERBQWtCLENBQUMsZ0RBQUk7QUFDdkIsbUVBQXVCO0FBQ3ZCLGlFQUFxQjtBQUNyQixxRUFBeUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL1RvX0RvX0xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL1RvX0RvX0xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL1RvX0RvX0xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL1RvX0RvX0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL1RvX0RvX0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC8uL3NyYy9UYXNrLmpzIiwid2VicGFjazovL1RvX0RvX0xpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL1RvX0RvX0xpc3QvLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0Ly4vc3JjL3Rhc2tBY3Rpb25zLmpzIiwid2VicGFjazovL1RvX0RvX0xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RvX0RvX0xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXByaW1hcnk6IHJnYig3MSwgNjksIDY5KTtcXG4gIC0tc2Vjb25kYXJ5OiAjY2NjO1xcbiAgLS1ib3JkZXI6IHJnYigyMjEsIDIxOSwgMjE5KTtcXG4gIC0tYmFja2dyb3VuZDogcmdiKDI0MywgMjQzLCAyNDMpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZC1mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5mbGV4LWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG5pIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB3aWR0aDogNTAlO1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiKDAgMCAwIC8gMjAlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICBwYWRkaW5nOiAxLjJyZW0gMS41cmVtO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuXFxuZm9ybSBidXR0b24gaSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVhZGVyIGkge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5mb3JtID4gZGl2IHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgcGFkZGluZzogMC44cmVtIDA7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG5mb3JtIGlucHV0LFxcbmZvcm0gaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgY29sb3I6IHJnYigxMzEsIDEzMCwgMTMwKTtcXG59XFxuXFxuLnRhc2tzLWxpc3Qge1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza3MtbGlzdCBsaSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gIHBhZGRpbmc6IDAuN3JlbSAxLjJyZW07XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBidXR0b24gaSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgbGkgbGFiZWwge1xcbiAgbWFyZ2luLWxlZnQ6IDZweDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogLnRhc2tzLWxpc3QgbGkgbGFiZWwuY29tcGVsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn0gKi9cXG5cXG4udGFza3MtbGlzdCBsaSBpOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNsZWFyLWJ0biBidXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAxLjJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1kZXRhaWxzIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgLnRhc2stZGV0YWlscyBzcGFuIHtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1kZXRhaWxzIHNwYW4uY29tcGVsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIC50YXNrLWRldGFpbHMgaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1hY3Rpb24tYnRucyBidXR0b24ge1xcbiAgd2lkdGg6IDIuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC4zcmVtIDA7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1hY3Rpb24tYnRucyBidXR0b24gaSB7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1hY3Rpb24tYnRucyBidXR0b246bGFzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZWRpdC10YXNrLWZvcm0ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5lZGl0LW1vZGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjNkYjtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLmVkaXQtbW9kZSAudGFzay1hY3Rpb24tYnRucyBidXR0b246bGFzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stZGV0YWlscy5jb21wbGV0ZWQgc3BhbiB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLmVkaXQtbW9kZSAudGFzay1hY3Rpb24tYnRucyBidXR0b246Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLmVkaXQtbW9kZSAudGFzay1kZXRhaWxzIGlucHV0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuZWRpdC1tb2RlIC50YXNrLWRldGFpbHMgc3BhbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLE9BQU87QUFDVDs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7Ozs7R0FJRzs7QUFFSDtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUNBQW1DO0VBQ25DLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLE9BQU87RUFDUCxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wcmltYXJ5OiByZ2IoNzEsIDY5LCA2OSk7XFxuICAtLXNlY29uZGFyeTogI2NjYztcXG4gIC0tYm9yZGVyOiByZ2IoMjIxLCAyMTksIDIxOSk7XFxuICAtLWJhY2tncm91bmQ6IHJnYigyNDMsIDI0MywgMjQzKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmQtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYigwIDAgMCAvIDIwJSk7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgcGFkZGluZzogMS4ycmVtIDEuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjZyZW07XFxufVxcblxcbmZvcm0gYnV0dG9uIGkge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmhlYWRlciBpIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuZm9ybSA+IGRpdiB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIHBhZGRpbmc6IDAuOHJlbSAwO1xcbiAgZmxleDogMTtcXG59XFxuXFxuZm9ybSBpbnB1dCxcXG5mb3JtIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIGNvbG9yOiByZ2IoMTMxLCAxMzAsIDEzMCk7XFxufVxcblxcbi50YXNrcy1saXN0IHtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2tzLWxpc3QgbGkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICBwYWRkaW5nOiAwLjdyZW0gMS4ycmVtO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgYnV0dG9uIGkge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50YXNrcy1saXN0IGxpIGxhYmVsIHtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIC50YXNrcy1saXN0IGxpIGxhYmVsLmNvbXBlbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59ICovXFxuXFxuLnRhc2tzLWxpc3QgbGkgaTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGVhci1idG4gYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMS4ycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgLnRhc2stZGV0YWlscyB7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIC50YXNrLWRldGFpbHMgc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogNnB4O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgLnRhc2stZGV0YWlscyBzcGFuLmNvbXBlbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1kZXRhaWxzIGlucHV0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmbGV4OiAxO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgLnRhc2stYWN0aW9uLWJ0bnMgYnV0dG9uIHtcXG4gIHdpZHRoOiAyLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgLnRhc2stYWN0aW9uLWJ0bnMgYnV0dG9uIGkge1xcbiAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgLnRhc2stYWN0aW9uLWJ0bnMgYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmVkaXQtdGFzay1mb3JtIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuZWRpdC1tb2RlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWYzZGI7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5lZGl0LW1vZGUgLnRhc2stYWN0aW9uLWJ0bnMgYnV0dG9uOmxhc3QtY2hpbGQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWRldGFpbHMuY29tcGxldGVkIHNwYW4ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5lZGl0LW1vZGUgLnRhc2stYWN0aW9uLWJ0bnMgYnV0dG9uOmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5lZGl0LW1vZGUgLnRhc2stZGV0YWlscyBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLmVkaXQtbW9kZSAudGFzay1kZXRhaWxzIHNwYW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cblxuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza3M7XG4gIH1cblxuICBhZGQodGFzaykge1xuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgfVxuXG4gIHVwZGF0ZSh0YXNrSWQsIHRhc2spIHtcbiAgICB0aGlzLnRhc2tzW3Rhc2tJZF0gPSB0YXNrO1xuICB9XG5cbiAgcmVtb3ZlKHRhc2tJZCkge1xuICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pbmRleC50b1N0cmluZygpICE9PSB0YXNrSWQpO1xuICB9XG5cbiAgY2xlYXJDb21wbGV0ZWQoKSB7XG4gICAgY29uc3QgbmV3VGFza3MgPSB0aGlzLnRhc3RzLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGVkKTtcbiAgICB0aGlzLnRhc2tzID0gbmV3VGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgdGFzay5pbmRleCA9IGluZGV4ICsgMTtcbiAgICAgIHJldHVybiB0YXNrO1xuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IHRhc2sgPSBuZXcgVGFzaygpO1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrOyIsImltcG9ydCB0YXNrQWN0aW9ucyBmcm9tICcuL3Rhc2tBY3Rpb25zLmpzJztcblxuY29uc3QgdGFza3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWxpc3QnKTtcbmNvbnN0IGRvbSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNob3dUcmFzaEljb24gPSAoKSA9PiB7XG4gICAgY29uc3QgZWRpdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1lZGl0LWJ0bicpO1xuXG4gICAgZWRpdEJ0bnMuZm9yRWFjaCgoZWRpdEJ0bikgPT4ge1xuICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1jb250YWluZXInKTtcbiAgICAgICAgdGFza3NFbGVtZW50cy5mb3JFYWNoKCh0YXNrRWxtKSA9PiB7XG4gICAgICAgICAgdGFza0VsbS5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0LW1vZGUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnZWRpdC1tb2RlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJUYXNrcyA9ICh0YXNrcykgPT4ge1xuICAgIHRhc2tzTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICB0YXNrcy5tYXAoKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJywgJ2QtZmxleCcsICdmbGV4LWNlbnRlcicpO1xuICAgICAgdGFza0l0ZW0uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICR7XG4gIHRhc2suY29tcGxldGVkID8gJ2NoZWNrZWQnIDogJydcbiAgfSBkYXRhLXRhc2staWQ9XCIke3Rhc2suaW5kZXh9XCIgY2xhc3M9XCJ0YXNrLWNoZWNrYm94XCIvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7XG4gIHRhc2suY29tcGxldGVkID8gJ3Rhc2stZGV0YWlscyBjb21wbGV0ZWQnIDogJ3Rhc2stZGV0YWlscydcbiAgfVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPiR7dGFzay5kZXNjcmlwdGlvbn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJlZGl0LXRhc2stZm9ybVwiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pbmRleH1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHtcbiAgdGFzay5kZXNjcmlwdGlvblxuICB9XCIgY2xhc3M9XCJ0YXNrLWVkaXRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWFjdGlvbi1idG5zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhc2stZWRpdC1idG5cIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVsbGlwc2lzLXZcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRhc2stZGVsZXRlLWJ0blwiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pbmRleH1cIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgO1xuICAgICAgc2hvd1RyYXNoSWNvbigpO1xuICAgICAgZG9tLmRlbGV0ZVRhc2tIYW5kbGVyKCk7XG4gICAgICBkb20uZWRpdFRhc3RTdWJtaXQoKTtcbiAgICAgIGRvbS5jb21wbGV0ZVRhc2tIYW5kbGVyKCk7XG4gICAgICBkb20uY2xlYXJDb21wbGV0ZWRIYW5kbGVyKCk7XG4gICAgICByZXR1cm4gdGFza3NMaXN0LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBlZGl0VGFzdFN1Ym1pdCA9ICgpID0+IHtcbiAgICBjb25zdCBlZGl0VGFza0Zvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtdGFzay1mb3JtJyk7XG4gICAgZWRpdFRhc2tGb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdGFza0lkID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pZCcpO1xuICAgICAgICBpZiAoZm9ybS5lbGVtZW50c1swXS52YWx1ZS50cmltKCkgPT09ICcnKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHsgdGFza3MgfSA9IHRhc2tBY3Rpb25zLnVwZGF0ZVRhc2soXG4gICAgICAgICAgdGFza0lkLFxuICAgICAgICAgIGZvcm0uZWxlbWVudHNbMF0udmFsdWUsXG4gICAgICAgICk7XG4gICAgICAgIHJlbmRlclRhc2tzKHRhc2tzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBsZXRlVGFza0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWNoZWNrYm94Jyk7XG4gICAgY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2staWQnKTtcbiAgICAgICAgdGFza0FjdGlvbnMuY29tcGxldGVUYXNrKHRhc2tJZCwgZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1kZWxldGUtYnRuJyk7XG4gICAgZGVsZXRlQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0lkID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWlkJyk7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gdGFza0FjdGlvbnMuZGVsZXRlVGFzayh0YXNrSWQpO1xuICAgICAgICByZW5kZXJUYXNrcyh0YXNrcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjbGVhckNvbXBsZXRlZEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2xlYXJDb21wbGV0ZWRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXItY29tcGxldGVkLWJ0bicpO1xuICAgIGNsZWFyQ29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgdGFza3MgPSB0YXNrQWN0aW9ucy5jbGVhckNvbXBsZXRlZCgpO1xuICAgICAgcmVuZGVyVGFza3ModGFza3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVVJID0gKHRhc2tzKSA9PiB7XG4gICAgcmVuZGVyVGFza3ModGFza3MpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyVGFza3MsXG4gICAgZWRpdFRhc3RTdWJtaXQsXG4gICAgc2hvd1RyYXNoSWNvbixcbiAgICB1cGRhdGVVSSxcbiAgICBjb21wbGV0ZVRhc2tIYW5kbGVyLFxuICAgIGRlbGV0ZVRhc2tIYW5kbGVyLFxuICAgIGNsZWFyQ29tcGxldGVkSGFuZGxlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbTtcbiIsImNvbnN0IHN0b3JhZ2UgPSB7XG4gIGdldDogKGtleSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICByZXR1cm4gdmFsdWUgPyBKU09OLnBhcnNlKHZhbHVlKSA6IG51bGw7XG4gIH0sXG4gIHNldDogKGtleSwgdmFsdWUpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH0sXG4gIHJlbW92ZTogKGtleSkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTsiLCJpbXBvcnQgc3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuXG5jb25zdCB0YXNrQWN0aW9ucyA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFRhc2sgPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IHN0b3JhZ2UuZ2V0KCd0YXNrcycpO1xuICAgIGNvbnN0IHRhc2sgPSB7XG4gICAgICBpbmRleDogdGFza3MubGVuZ3RoICsgMSxcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICB9O1xuICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgc3RvcmFnZS5zZXQoJ3Rhc2tzJywgdGFza3MpO1xuICAgIHJldHVybiB0YXNrO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRhc2sgPSAoaW5kZXgsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBzdG9yYWdlLmdldCgndGFza3MnKTtcbiAgICBjb25zdCB0YXNrID0gdGFza3NbaW5kZXggLSAxXTtcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgc3RvcmFnZS5zZXQoJ3Rhc2tzJywgdGFza3MpO1xuICAgIHJldHVybiB7IHRhc2ssIHRhc2tzIH07XG4gIH07XG5cbiAgY29uc3QgY29tcGxldGVUYXNrID0gKGluZGV4LCBjaGVja2VkKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBzdG9yYWdlLmdldCgndGFza3MnKTtcbiAgICBjb25zdCB0YXNrID0gdGFza3NbaW5kZXggLSAxXTtcbiAgICB0YXNrLmNvbXBsZXRlZCA9IGNoZWNrZWQ7XG4gICAgc3RvcmFnZS5zZXQoJ3Rhc2tzJywgdGFza3MpO1xuICAgIHJldHVybiB7IHRhc2ssIHRhc2tzIH07XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9IChpbmRleCkgPT4ge1xuICAgIGxldCB0YXNrcyA9IHN0b3JhZ2UuZ2V0KCd0YXNrcycpO1xuICAgIHRhc2tzLnNwbGljZShpbmRleCAtIDEsIDEpO1xuICAgIHRhc2tzID0gdGFza3MubWFwKCh0YXNrLCBpKSA9PiB7XG4gICAgICB0YXNrLmluZGV4ID0gaSArIDE7XG4gICAgICByZXR1cm4gdGFzaztcbiAgICB9KTtcbiAgICBzdG9yYWdlLnNldCgndGFza3MnLCB0YXNrcyk7XG4gICAgcmV0dXJuIHRhc2tzO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQ29tcGxldGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gc3RvcmFnZS5nZXQoJ3Rhc2tzJyk7XG4gICAgbGV0IHVuQ29tcGxldGVkVGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlZCk7XG4gICAgdW5Db21wbGV0ZWRUYXNrcyA9IHVuQ29tcGxldGVkVGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgdGFzay5pbmRleCA9IGluZGV4ICsgMTtcbiAgICAgIHJldHVybiB0YXNrO1xuICAgIH0pO1xuICAgIHN0b3JhZ2Uuc2V0KCd0YXNrcycsIHVuQ29tcGxldGVkVGFza3MpO1xuICAgIHJldHVybiB1bkNvbXBsZXRlZFRhc2tzO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkVGFzayxcbiAgICB1cGRhdGVUYXNrLFxuICAgIGNvbXBsZXRlVGFzayxcbiAgICBkZWxldGVUYXNrLFxuICAgIGNsZWFyQ29tcGxldGVkLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdGFza0FjdGlvbnM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCB0YXNrQWN0aW9ucyBmcm9tICcuL3Rhc2tBY3Rpb25zLmpzJztcbmltcG9ydCBkb20gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHRhc2sgZnJvbSAnLi9UYXNrLmpzJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XG5jb25zdCB0b2RvVGV4dElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1ib29rJyk7XG5cbmNvbnN0IGdldERlZmF1bHRUYXNrcyA9ICgpID0+IHtcbiAgY29uc3QgdGFza3MgPSB0YXNrLmdldCgpO1xuICBjb25zdCBzdG9yZWRUYXNrcyA9IHN0b3JhZ2UuZ2V0KCd0YXNrcycpO1xuICBpZiAoc3RvcmVkVGFza3MpIHtcbiAgICBzdG9yZWRUYXNrcy5tYXAoKHQpID0+IHRhc2suYWRkKHQpKTtcbiAgICBkb20ucmVuZGVyVGFza3Moc3RvcmVkVGFza3MpO1xuICB9IGVsc2Uge1xuICAgIHN0b3JhZ2Uuc2V0KCd0YXNrcycsIHRhc2tzKTtcbiAgICBkb20ucmVuZGVyVGFza3ModGFza3MpO1xuICB9XG59O1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgc2F2ZWRUYXNrID0gdGFza0FjdGlvbnMuYWRkVGFzayh0b2RvVGV4dElucHV0LnZhbHVlKTtcbiAgdGFzay5hZGQoc2F2ZWRUYXNrKTtcbiAgY29uc3QgdGFza3MgPSB0YXNrLmdldCgpO1xuICBkb20ucmVuZGVyVGFza3ModGFza3MpO1xuICB0b2RvVGV4dElucHV0LnZhbHVlID0gJyc7XG59KTtcblxuZ2V0RGVmYXVsdFRhc2tzKCk7XG5kb20udXBkYXRlVUkoc3RvcmFnZS5nZXQoJ3Rhc2tzJykpO1xuZG9tLnNob3dUcmFzaEljb24oKTtcbmRvbS5lZGl0VGFzdFN1Ym1pdCh0YXNrKTtcbmRvbS5jb21wbGV0ZVRhc2tIYW5kbGVyKCk7XG5kb20uZGVsZXRlVGFza0hhbmRsZXIoKTtcbmRvbS5jbGVhckNvbXBsZXRlZEhhbmRsZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=