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

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/platform.png */ "./src/images/platform.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
var gravity = 0.5;
var Palyer = /*#__PURE__*/function () {
  function Palyer() {
    _classCallCheck(this, Palyer);
    this.position = {
      x: 100,
      y: 100
    };
    this.width = 30;
    this.height = 30;
    this.color = "gold";
    this.velociity = {
      x: 0,
      y: 1
    };
  }
  _createClass(Palyer, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velociity.x;
      this.position.y += this.velociity.y;
      if (this.velociity.y + this.height + this.position.y <= canvas.height) {
        this.velociity.y += gravity;
      } else {
        this.velociity.y = 0;
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
var image = new Image();
image.src = _images_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"];
var player = new Palyer();
var platforms = [new Platform({
  x: -1,
  y: 475,
  image: image
}), new Platform({
  x: image.width - 3,
  y: 475,
  image: image
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;
function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();
  if (keys.right.pressed && player.position.x < 400) {
    player.velociity.x = 5;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velociity.x = -5;
  } else {
    player.velociity.x *= 0.9;
    if (keys.right.pressed) {
      scrollOffset += 5;
      platforms.forEach(function (platform) {
        platform.position.x -= 5;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= 5;
      platforms.forEach(function (platform) {
        platform.position.x += 5;
      });
    }
    if (scrollOffset > 2000) {
      console.log("You winn");
    }
  }

  //   player platform collision detection
  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velociity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velociity.y = 0;
    }
  });
}
animate();
window.addEventListener("keydown", function (_ref2) {
  var keyCode = _ref2.keyCode;
  switch (keyCode) {
    case 37:
      keys.left.pressed = true;
      break;
    case 38:
      player.velociity.y -= 20;
      break;
    case 39:
      keys.right.pressed = true;
      break;
    case 40:
      break;
  }
});
window.addEventListener("keyup", function (_ref3) {
  var keyCode = _ref3.keyCode;
  switch (keyCode) {
    case 37:
      keys.left.pressed = false;
      break;
    case 38:
      player.velociity.y += 20;
      break;
    case 39:
      keys.right.pressed = false;
      break;
    case 40:
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map