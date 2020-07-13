/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/burger.js":
/*!*****************************!*\
  !*** ./assets/js/burger.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function() {\t\r\n\tvar burger = document.querySelector(\".js-burger\");\r\n\tif (!burger) {\r\n\t\treturn;\r\n\t}\r\n\r\n\tvar menu = document.querySelector(\".js-menu\");\r\n\tif (!menu) {\r\n\t\treturn;\r\n\t}\r\n\r\n\tburger.addEventListener(\"click\", function() {\r\n\t\tvar ariaExpandedState = this.getAttribute(\"aria-expanded\") === \"true\" ? false : true;\r\n\t\tthis.setAttribute(\"aria-expanded\", ariaExpandedState);\r\n\t\tthis.classList.toggle(\"burger--is-active\");\r\n\t\tmenu.classList.toggle(\"header__nav--is-open\");\r\n\t});\r\n\t\r\n})();\n\n//# sourceURL=webpack:///./assets/js/burger.js?");

/***/ }),

/***/ "./assets/js/effect_logo.js":
/*!**********************************!*\
  !*** ./assets/js/effect_logo.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function() {\r\n\tlet logos = document.getElementsByClassName(\"js-logo\");\r\n\tif (logos.length === 0 || logos.length > 2) return;\r\n\r\n\tlet logo = logos.length === 1\r\n\t\t? logos[0]\r\n\t\t: (\r\n\t\t\t\twindow.getComputedStyle(logos[0].closest(\".header__responsive\")).display === 'none'\r\n\t\t\t\t? logos[1]\r\n\t\t\t\t: logos[0]\r\n\t\t\t);\r\n\r\n\tlet logoBox = logo.getBoundingClientRect();\r\n\tlet centerPoint = window.getComputedStyle(logo).transformOrigin;\r\n\tlet centers = centerPoint.split(\" \");\r\n\r\n\r\n\tfunction rotateLogo(e) {\r\n\t\tlet logoEvent = e;\r\n\t\tlet mouseX = 0;\r\n\t\tlet mouseY = 0;\r\n\r\n\t\tif (e.targetTouches && e.targetTouches[0]) {\r\n\t\t\t\t\t// e.preventDefault(); \r\n\t\t\t\t\tlogoEvent = e.targetTouches[0];\r\n\t\t\t\t\tmouseX = logoEvent.pageX;\r\n\t\t\t\t\tmouseY = logoEvent.pageY;\r\n\t\t} else {\r\n\t\t\t\t\tmouseX = e.clientX,\r\n\t\t\t\t\tmouseY = e.clientY;\r\n\t\t}\r\n\r\n\t\tlet centerY = logoBox.top + parseInt(centers[1]) - window.pageYOffset;\r\n\t\tlet centerX = logoBox.left + parseInt(centers[0]) - window.pageXOffset;\r\n\t\tlet radians = Math.atan2(mouseX - centerX, mouseY - centerY);\r\n\t\tlet degrees = (radians * (180 / Math.PI) * -1); \r\n\t\tlogo.style.transform = 'rotate('+degrees+'deg)';\r\n\t}\r\n\r\n\tfunction resetRotateLogo(e) {\r\n\t\tlogo.style.transform = 'rotate(0deg)';\r\n\t}\r\n\r\n\twindow.addEventListener('mousemove', rotateLogo);\r\n\twindow.addEventListener('mouseout', resetRotateLogo);\r\n\twindow.addEventListener('touchmove', rotateLogo);\r\n\twindow.addEventListener('touchstart', rotateLogo);\r\n\twindow.addEventListener('touchend', resetRotateLogo);\r\n});\n\n//# sourceURL=webpack:///./assets/js/effect_logo.js?");

/***/ }),

/***/ "./assets/js/effect_typing.js":
/*!************************************!*\
  !*** ./assets/js/effect_typing.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var TxtRotate = function(el, toRotate, period) {\r\n\tthis.toRotate = toRotate;\r\n  this.el = el;\r\n  this.loopNum = 0;\r\n  // this.period = parseInt(period, 10) || 2000;\r\n  this.period = 9999999999; // Stop\r\n  this.txt = '';\r\n  this.tick();\r\n  this.isDeleting = false;\r\n};\r\n\r\nTxtRotate.prototype.tick = function() {\r\n  var i = this.loopNum % this.toRotate.length;\r\n  var fullTxt = this.toRotate[i];\r\n\r\n  if (this.isDeleting) {\r\n    this.txt = fullTxt.substring(0, this.txt.length - 1);\r\n  } else {\r\n    this.txt = fullTxt.substring(0, this.txt.length + 1);\r\n  }\r\n\r\n  this.el.innerHTML = '<span class=\"wrap\">'+this.txt+'</span>';\r\n\r\n  var that = this;\r\n\t// var delta = 300 - Math.random() * 100;\r\n\tvar delta = 100;\r\n\r\n  if (this.isDeleting) { delta /= 2; }\r\n\r\n  if (!this.isDeleting && this.txt === fullTxt) {\r\n    delta = this.period;\r\n    this.isDeleting = true;\r\n  } else if (this.isDeleting && this.txt === '') {\r\n    this.isDeleting = false;\r\n    this.loopNum++;\r\n    delta = 500;\r\n  }\r\n\r\n  setTimeout(function() {\r\n    that.tick();\r\n  }, delta);\r\n};\r\n\r\nwindow.onload = function() {\r\n  var elements = document.getElementsByClassName('txt-rotate');\r\n  for (var i=0; i<elements.length; i++) {\r\n    var toRotate = elements[i].getAttribute('data-rotate');\r\n    var period = elements[i].getAttribute('data-period');\r\n    if (toRotate) {\r\n      new TxtRotate(elements[i], JSON.parse(toRotate), period);\r\n    }\r\n  }\r\n  // INJECT CSS\r\n  var css = document.createElement(\"style\");\r\n  css.type = \"text/css\";\r\n  let cssText = \".txt-rotate > .wrap { border-right: 0.08em solid transparent; animation: animated-cursor 600ms steps(17,end) 4 }\";\r\n  cssText += \"@keyframes animated-cursor{from{border-right-color: #666;} to{border-right-color: transparent;}}\";\r\n  css.innerHTML = cssText;\r\n  document.body.appendChild(css);\r\n};\n\n//# sourceURL=webpack:///./assets/js/effect_typing.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.js */ \"./assets/js/burger.js\");\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_burger_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _effect_logo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effect_logo.js */ \"./assets/js/effect_logo.js\");\n/* harmony import */ var _effect_logo_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_effect_logo_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _effect_typing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effect_typing.js */ \"./assets/js/effect_typing.js\");\n/* harmony import */ var _effect_typing_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_effect_typing_js__WEBPACK_IMPORTED_MODULE_2__);\n__webpack_require__(/*! ../scss/main.scss */ \"./assets/scss/main.scss\");\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/scss/main.scss?");

/***/ })

/******/ });