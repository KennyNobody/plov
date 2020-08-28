/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/faq-item/faq-item.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/faq-item/faq-item.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// modules.define('faq-item', ['i-bem-dom'], function(provide, bemDom) {
// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {
//             }
//         }
//     }
// }));
// });
(function () {
  function toggleFaqItem() {
    var items = document.querySelectorAll('.faq-item__header');

    if (items) {
      for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', toggle);
      }
    }

    function toggle() {
      this.parentNode.classList.toggle('faq-item--open');
    }
  }

  toggleFaqItem();
})();

/***/ }),

/***/ "./src/blocks/modules/file/file.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/file/file.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// modules.define('file', ['i-bem-dom'], function(provide, bemDom) {
// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {
//             }
//         }
//     }
// }));
// });
(function toggleFileInputs() {
  var block = document.querySelectorAll('.file');

  for (var i = 0; i < block.length; i++) {
    addListener(block[i]);
  }
})();

function addListener(block) {
  var text = block.querySelector('.file__text');
  var input = block.querySelector('.file__field');
  input.addEventListener('change', function () {
    changeState(text, input);
  });
}

function changeState(text, input) {
  var message = input.files[0].name;
  text.textContent = message; // console.dir(input);
}

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/gallery-item/gallery-item.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/gallery-item/gallery-item.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__);
// modules.define('gallery-item', ['i-bem-dom'], function(provide, bemDom) {
// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {
//             }
//         }
//     }
// }));
// });

$('[data-fancybox="gallery"]').fancybox({
  infobar: false,
  caption: function caption(instance, item) {
    var caption = $(this).data('link') || '';
    var title = $(this).data('title') || '';
    var tag = $(this).data('tag') || '';
    return '<div class="modal-discript"><p class="modal-discript__tag">' + tag + '</p><p class="modal-discript__link-wrapper"><a href="' + caption + '" class="modal-discript__link">' + title + '</a></p></div>';
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/mmenu/mmenu.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/mmenu/mmenu.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mmenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mmenu-js */ "./node_modules/mmenu-js/src/mmenu.js");
// modules.define('mmenu', ['i-bem-dom'], function(provide, bemDom) {
// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {
//             }
//         }
//     }
// }));
// });



(function initMmenu() {
  new mmenu_js__WEBPACK_IMPORTED_MODULE_1__["default"]("#mmenu", {
    "slidingSubmenus": false,
    "extensions": ["position-front", "pagedim-black"],
    "navbar": {
      "title": 'Меню'
    },
    "navbars": [{
      "position": "bottom",
      "content": mmenuBottomContent || undefined
    }]
  });
})();

/***/ }),

/***/ "./src/blocks/modules/slider-bottom/slider-bottom.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/slider-bottom/slider-bottom.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
// modules.define('slider-bottom', ['i-bem-dom'], function(provide, bemDom) {
// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {
//             }
//         }
//     }
// }));
// });

var sliderBottom3 = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider-bottom__container--3', {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.slider-bottom__link--next',
    prevEl: '.slider-bottom__link--prev',
    disabledClass: 'slider-bottom__link--disabled'
  },
  pagination: {
    clickable: true,
    el: '.slider-bottom__pagination',
    bulletClass: 'slider-bottom__bullet',
    bulletActiveClass: 'slider-bottom__bullet--active'
  }
});
var sliderBottom4 = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider-bottom__container--4', {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.slider-bottom__link--next',
    prevEl: '.slider-bottom__link--prev',
    disabledClass: 'slider-bottom__link--disabled'
  },
  pagination: {
    clickable: true,
    el: '.slider-bottom__pagination',
    bulletClass: 'slider-bottom__bullet',
    bulletActiveClass: 'slider-bottom__bullet--active'
  },
  on: {
    init: function init() {
      initTopButtons(this);
    }
  }
});

function initTopButtons(slider) {
  var btnPrev = document.querySelector('.slider-btn--prev');
  var btnNext = document.querySelector('.slider-btn--next');

  if (btnPrev && slider) {
    btnPrev.addEventListener('click', function () {
      slider.slidePrev();
    });
  }

  if (btnNext && slider) {
    btnNext.addEventListener('click', function () {
      slider.slideNext();
    });
  }
}

;

/***/ }),

/***/ "./src/blocks/modules/slider-main/slider-main.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/slider-main/slider-main.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
// modules.define('slider-main', ['i-bem-dom'], function(provide, bemDom) {
// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {
//             }
//         }
//     }
// }));
// });

var sliderMain = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider-main__container', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.slider-main__link--next',
    prevEl: '.slider-main__link--prev',
    disabledClass: 'slider-main__link--disabled'
  },
  pagination: {
    clickable: true,
    el: '.slider-main__pagination',
    bulletClass: 'slider-main__bullet',
    bulletActiveClass: 'slider-main__bullet--active'
  }
});

/***/ }),

/***/ "./src/blocks/modules/top-link/top-link.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/top-link/top-link.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// modules.define('top-link', ['i-bem-dom'], function(provide, bemDom) {
// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {
//             }
//         }
//     }
// }));
// });
(function toTop() {
  var link = document.querySelector('.top-link');

  if (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
})();

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_faq_item_faq_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/faq-item/faq-item */ "./src/blocks/modules/faq-item/faq-item.js");
/* harmony import */ var _modules_faq_item_faq_item__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_faq_item_faq_item__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_mmenu_mmenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/mmenu/mmenu */ "./src/blocks/modules/mmenu/mmenu.js");
/* harmony import */ var _modules_file_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/file/file */ "./src/blocks/modules/file/file.js");
/* harmony import */ var _modules_file_file__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_file_file__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_top_link_top_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/top-link/top-link */ "./src/blocks/modules/top-link/top-link.js");
/* harmony import */ var _modules_top_link_top_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_top_link_top_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_slider_main_slider_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/slider-main/slider-main */ "./src/blocks/modules/slider-main/slider-main.js");
/* harmony import */ var _modules_slider_bottom_slider_bottom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/slider-bottom/slider-bottom */ "./src/blocks/modules/slider-bottom/slider-bottom.js");
/* harmony import */ var _modules_gallery_item_gallery_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/gallery-item/gallery-item */ "./src/blocks/modules/gallery-item/gallery-item.js");

 // import "%modules%/slider-header/slider-header";









/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map