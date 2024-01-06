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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/background-naruto.png":
/*!******************************************!*\
  !*** ./src/images/background-naruto.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f6091cd8b4bcbe35e4a03ce99c153bc3.png");

/***/ }),

/***/ "./src/images/platform.png":
/*!*********************************!*\
  !*** ./src/images/platform.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/images/platformSmallTall.png":
/*!******************************************!*\
  !*** ./src/images/platformSmallTall.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/images/ramen-shop.png":
/*!***********************************!*\
  !*** ./src/images/ramen-shop.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "893625d5833a2535965ff457f1cf1ef3.png");

/***/ }),

/***/ "./src/images/spriteRunLeft.png":
/*!**************************************!*\
  !*** ./src/images/spriteRunLeft.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/images/spriteRunRight.png":
/*!***************************************!*\
  !*** ./src/images/spriteRunRight.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/images/spriteStandLeft.png":
/*!****************************************!*\
  !*** ./src/images/spriteStandLeft.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/images/spriteStandRight.png":
/*!*****************************************!*\
  !*** ./src/images/spriteStandRight.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sounds_bgm_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sounds/bgm.mp3 */ "./src/sounds/bgm.mp3");
/* harmony import */ var _images_platform_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/platform.png */ "./src/images/platform.png");
/* harmony import */ var _images_ramen_shop_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/ramen-shop.png */ "./src/images/ramen-shop.png");
/* harmony import */ var _images_background_naruto_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/background-naruto.png */ "./src/images/background-naruto.png");
/* harmony import */ var _images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/platformSmallTall.png */ "./src/images/platformSmallTall.png");
/* harmony import */ var _images_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/spriteRunLeft.png */ "./src/images/spriteRunLeft.png");
/* harmony import */ var _images_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/spriteRunRight.png */ "./src/images/spriteRunRight.png");
/* harmony import */ var _images_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/spriteStandLeft.png */ "./src/images/spriteStandLeft.png");
/* harmony import */ var _images_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/spriteStandRight.png */ "./src/images/spriteStandRight.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// 111:37:51 / 2:11:02
// 7535 x 591









var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
var gravity = 0.5;
var Palyer = /*#__PURE__*/function () {
  function Palyer() {
    _classCallCheck(this, Palyer);
    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    };
    this.width = 46;
    this.height = 100;
    this.color = "gold";
    this.velociity = {
      x: 0,
      y: 1
    };
    this.image = createImage(_images_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
  }
  _createClass(Palyer, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, 0, 0, 177, 400, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velociity.x;
      this.position.y += this.velociity.y;
      if (this.velociity.y + this.height + this.position.y <= canvas.height) {
        this.velociity.y += gravity;
      }
    }
  }]);
  return Palyer;
}();
var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
      y = _ref.y,
      image = _ref.image;
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = this.image.width;
    this.height = this.image.height;
  }
  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return Platform;
}();
var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
      y = _ref2.y,
      image = _ref2.image;
    _classCallCheck(this, GenericObject);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = this.image.width;
    this.height = this.image.height;
  }
  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return GenericObject;
}();
function createImage(src) {
  var image = new Image();
  image.src = src;
  return image;
}
var platformImage = createImage(_images_platform_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
var platformSmallTallImage = createImage(_images_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
var player = new Palyer();
var platforms = [];
var genericObjects = [];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;
var backgroundImage = createImage(_images_background_naruto_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
function init() {
  platformImage = createImage(_images_platform_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  player = new Palyer();
  platforms = [new Platform({
    x: platformImage.width * 4 + 300 - 2 + platformImage.width - platformSmallTallImage.width,
    y: 325,
    image: platformSmallTallImage
  }), new Platform({
    x: -1,
    y: 475,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 3,
    y: 475,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: 475,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 300,
    y: 475,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 300 - 2,
    y: 475,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 5 + 750,
    y: 475,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 6 + 750,
    y: 375,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 7 + 750 - 3,
    y: 375,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 8 + 1050,
    y: 475,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 9 + 1050 - 2,
    y: 475,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 10 + 1050 - 2,
    y: 475,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 11 + 1050 - 2,
    y: 475,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 12 + 1050 - 2,
    y: 475,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 13 + 1050 - 2,
    y: 475,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 14 + 1050 - 2,
    y: 475,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 15 + 1050 - 2,
    y: 475,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: backgroundImage
  }), new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_images_ramen_shop_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  })];
  scrollOffset = 0;
}
function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();
  if (player.position.y < 1) {
    player.position.y = 0;
    player.velociity.y = 0;
    // init()
  }
  if (keys.right.pressed && player.position.x < 400) {
    player.velociity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velociity.x = -player.speed;
  } else {
    player.velociity.x *= 0.9;

    // keep player on screen
    if (keys.right.pressed) {
      scrollOffset += player.speed;

      // move hills when going right slightly slower than background
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * 0.66;
      });
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;

      // move hills when going left slightly slower than background
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.speed * 0.66;
      });
    }

    // win condition
    if (scrollOffset > platformImage.width * 15 + 1050) {
      console.log("You winn");
    }

    // lose condition
    if (player.position.y > canvas.height) {
      console.log("You lose");
      init();
    }
  }

  //   player platform collision detection
  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velociity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velociity.y = 0;
    }
  });
}
init();
animate();
window.addEventListener("keydown", function (_ref3) {
  var keyCode = _ref3.keyCode;
  switch (keyCode) {
    case 37:
      keys.left.pressed = true;
      break;
    case 38:
      player.velociity.y -= 12;
      break;
    case 39:
      keys.right.pressed = true;
      break;
    case 40:
      break;
  }
});
window.addEventListener("keyup", function (_ref4) {
  var keyCode = _ref4.keyCode;
  switch (keyCode) {
    case 37:
      keys.left.pressed = false;
      break;
    case 38:
      // player.velociity.y += 15;
      break;
    case 39:
      keys.right.pressed = false;
      break;
    case 40:
      break;
  }
});
var myAudio = new Audio(_sounds_bgm_mp3__WEBPACK_IMPORTED_MODULE_0__["default"]);
myAudio.play();

/***/ }),

/***/ "./src/sounds/bgm.mp3":
/*!****************************!*\
  !*** ./src/sounds/bgm.mp3 ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a803e56fe3cf1f3c1f13d1bcbdd2d472.mp3");

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map