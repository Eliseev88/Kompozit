/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

/* Menu nav toggle */
$("#nav-toggle").on("click", function (event) {
  $("#nav-burger").toggleClass("active");
  $("#nav-toggle").toggleClass("active");
  $("body").toggleClass("no-scroll");
});
$("#nav-burger__close").on("click", function (event) {
  $("#nav-burger").removeClass("active");
  $("#nav-toggle").removeClass("active");
  $("body").removeClass("no-scroll");
});
/* Intro slider */

$(document).ready(function () {
  $(".slider").slick({
    appendArrows: $(".slick__arrows"),
    prevArrow: '<button id="prev" type="button" class="slick-arrow slick-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button id="next" type="button" class="slick-arrow slick-next"><i class="fas fa-arrow-right"></i></button>',
    appendDots: $(".slick__dots"),
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000
  });
});
/* Gallery slider */

$(document).ready(function () {
  $(".gallery__slider").slick({
    appendArrows: $(".gallery__arrows"),
    prevArrow: '<button id="prev" type="button" class="gallery__arrow gallery__arrow--left"><i class="fas fa-chevron-circle-right"></i></button>',
    nextArrow: '<button id="next" type="button" class="gallery__arrow gallery__arrow--right"><i class="fas fa-chevron-circle-left"></i></button>',
    centerMode: true,
    centerPadding: "40px",
    slidesToShow: 3,
    waitForAnimate: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: false,
        slidesToShow: 1
      }
    }]
  });
});
/* Change blocks in about section */
// 1

$("#appearance_btn").on("click", function (event) {
  $("#appearance_block").addClass("show");
  $("#hold_block").removeClass("show");
  $("#cage_block").removeClass("show");
  $("#mount_block").removeClass("show");
  $("#sum_block").removeClass("show");
  $("#appearance_btn").addClass("active");
  $("#hold_btn").removeClass("active");
  $("#cage_btn").removeClass("active");
  $("#mount_btn").removeClass("active");
  $("#sum_btn").removeClass("active");
}); // 2

$("#hold_btn").on("click", function (event) {
  $("#hold_block").addClass("show");
  $("#appearance_block").removeClass("show");
  $("#cage_block").removeClass("show");
  $("#mount_block").removeClass("show");
  $("#sum_block").removeClass("show");
  $("#hold_btn").addClass("active");
  $("#appearance_btn").removeClass("active");
  $("#cage_btn").removeClass("active");
  $("#mount_btn").removeClass("active");
  $("#sum_btn").removeClass("active");
}); // 3

$("#cage_btn").on("click", function (event) {
  $("#cage_block").addClass("show");
  $("#appearance_block").removeClass("show");
  $("#hold_block").removeClass("show");
  $("#mount_block").removeClass("show");
  $("#sum_block").removeClass("show");
  $("#cage_btn").addClass("active");
  $("#appearance_btn").removeClass("active");
  $("#hold_btn").removeClass("active");
  $("#mount_btn").removeClass("active");
  $("#sum_btn").removeClass("active");
}); // 4

$("#mount_btn").on("click", function (event) {
  $("#mount_block").addClass("show");
  $("#appearance_block").removeClass("show");
  $("#hold_block").removeClass("show");
  $("#cage_block").removeClass("show");
  $("#sum_block").removeClass("show");
  $("#mount_btn").addClass("active");
  $("#appearance_btn").removeClass("active");
  $("#hold_btn").removeClass("active");
  $("#cage_btn").removeClass("active");
  $("#sum_btn").removeClass("active");
}); // 5

$("#sum_btn").on("click", function (event) {
  $("#sum_block").addClass("show");
  $("#appearance_block").removeClass("show");
  $("#hold_block").removeClass("show");
  $("#cage_block").removeClass("show");
  $("#mount_block").removeClass("show");
  $("#sum_btn").addClass("active");
  $("#appearance_btn").removeClass("active");
  $("#hold_btn").removeClass("active");
  $("#mount_btn").removeClass("active");
  $("#cage_btn").removeClass("active");
});
/* Scroll to section */

$("[data-scroll]").on("click", function (event) {
  event.preventDefault();
  var $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top - 110;
  $("#nav a").removeClass("active");
  $this.addClass("active");
  $("html, body").animate({
    scrollTop: blockOffset
  }, 500);
  $("#nav-burger").removeClass("active");
  $("#nav-toggle").removeClass("active");
});
/* Calc */
// Скрываем (показываем блоки при изменении select)

$("#roof_type").change(function () {
  var roofType = $("#roof_type").val();
  $(".calc__box").removeClass("active");
  $(".calc__img").removeClass("active");
  $(".calc__inner").removeClass("active");
  $(".calc__error").text("");

  if (roofType == "double") {
    $("#double-roof").addClass("active");
    $("#img-double").addClass("active");
  } else if (roofType === "single") {
    $("#single-roof").addClass("active");
    $("#img-single").addClass("active");
  } else if (roofType === "hip") {
    $("#hip-roof").addClass("active");
    $("#img-hip").addClass("active");
  } else if (roofType === "tent") {
    $("#tent-roof").addClass("active");
    $("#img-tent").addClass("active");
  }
}); // Сам калькулятор

$("#calc_btn").on("click", function (event) {
  event.preventDefault();
  $(".calc__error").text("");
  var roofType = $("#roof_type").val();
  var arr = [];

  if (roofType === "double") {
    var a = +$("#double_a").val();
    var b = +$("#double_b").val();
    var c = +$("#double_c").val();

    if (validateValues(a, b, c)) {
      countDoubleRoof(a, b, c).forEach(function (el) {
        return arr.push(el);
      });
    } else return;
  } else if (roofType === "single") {
    var _a = +$("#single_a").val();

    var _b = +$("#single_b").val();

    var h = +$("#single_h").val();
    var d1 = +$("#single_d1").val();
    var d2 = +$("#single_d2").val();

    if (validateValues(_a, _b, h, d1, d2)) {
      countSingleRoof(_a, _b, h, d1, d2).forEach(function (el) {
        return arr.push(el);
      });
    } else return;
  } else if (roofType === "tent") {
    var _a2 = +$("#tent_a").val();

    var _b2 = +$("#tent_b").val();

    var _h = +$("#tent_h").val();

    var _d = +$("#tent_d1").val();

    var _d2 = +$("#tent_d2").val();

    if (validateValues(_a2, _b2, _h, _d, _d2)) {
      countTentRoof(_a2, _b2, _h, _d, _d2).forEach(function (el) {
        return arr.push(el);
      });
    } else return;
  } else if (roofType === "hip") {
    var _a3 = +$("#hip_a").val();

    var _b3 = +$("#hip_b").val();

    var _c = +$("#hip_c").val();

    var _h2 = +$("#hip_h").val();

    var _d3 = +$("#hip_d1").val();

    var _d4 = +$("#hip_d2").val();

    if (validateValues(_a3, _b3, _c, _h2, _d3, _d4)) {
      countHipRoof(_a3, _b3, _c, _h2, _d3, _d4).forEach(function (el) {
        return arr.push(el);
      });
    } else return;
  }

  $("#res-square").html(arr[0] + "м<sup>2</sup>");
  $("#res-kp").text(arr[1] + "шт.");
  $("#res-screw").text(arr[2] + "шт.");
  $("#res-skate").text(arr[3] + "шт.");
  $("#res-cornice").text(arr[4] + "шт.");
  $("#res-wind").text(arr[5] + "шт.");
  $(".calc__inner").addClass("active");
}); // Ф-ция валидации входных данных

function validateValues() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.includes(0, 0) || args.includes(NaN, 0)) {
    $(".calc__error").text("Неправильное значение длины");
    $(".calс__inner").removeClass("active");
    return false;
  }

  return true;
} // Двухскатная


function countDoubleRoof(a, b, c) {
  var roofSquare = ((a + b) * c).toFixed(2);
  var kpAmount = Math.ceil(roofSquare / 2);
  var screwAmount = kpAmount * 34;
  var skatePlank = Math.ceil(Math.round(c) / 2);
  var cornicePlank = skatePlank * 2;
  var windPlank = Math.ceil((a + b) / 2) * 2;

  if (roofSquare <= 1) {
    kpAmount = 1;
    screwAmount = 34;
    skatePlank = 1;
    cornicePlank = 2;
    windPlank = 2;
  }

  return [roofSquare, kpAmount, screwAmount, skatePlank, cornicePlank, windPlank];
} // Односкатная


function countSingleRoof(a, b, h, d1, d2) {
  var width = Math.sqrt(Math.pow(a, 2) + Math.pow(h, 2)).toFixed(2);
  width = +width + +d2 + +d2;

  var _long = b + d1 + d1;

  var roofSquare = (width * _long).toFixed(2);

  var kpAmount = Math.ceil(roofSquare / 2) + 1;
  var screwAmount = kpAmount * 34;
  var skatePlank = 0;
  var cornicePlank = Math.ceil(_long * 2);
  var windPlank = Math.ceil(width * 2);
  return [roofSquare, kpAmount, screwAmount, skatePlank, cornicePlank, windPlank];
} // Шатерная


function countTentRoof(a, b, h, d1, d2) {
  var height1 = d1 + Math.sqrt(Math.pow(h, 2) + Math.pow(a / 2, 2));
  var height2 = d2 + Math.sqrt(Math.pow(h, 2) + Math.pow(b / 2, 2));
  var a1 = b * height1 / (height1 - d1);
  var a2 = a * height2 / (height2 - d2);
  var roofSquare = (height1 * a1 + height2 * a2).toFixed(2);
  var kpAmount = Math.ceil(roofSquare / 2);
  var screwAmount = kpAmount * 34;
  var skatePlank = Math.ceil((height1 + height1 + height2 + height2) / 2);
  var cornicePlank = Math.ceil((a + a + b + b + d1 + d1 + d2 + d2 + d1 + d1 + d2 + d2) / 2);
  var windPlank = 0;
  return [roofSquare, kpAmount, screwAmount, skatePlank, cornicePlank, windPlank];
} // Вальмовая


function countHipRoof(a, b, c, h, d1, d2) {
  var heightTrap = Math.sqrt(Math.pow(h, 2) + Math.pow(a / 2, 2)) + d2;
  var heightTri = Math.sqrt(Math.pow(h, 2) + Math.pow(c, 2)) + d1;
  var cSmall = a * ((Math.sqrt(Math.pow(h, 2) + Math.pow(c, 2)) + d1) / Math.sqrt(Math.pow(h, 2) + Math.pow(c, 2)));
  var triSquare = 0.5 * heightTri * cSmall;
  var triSide = Math.sqrt(Math.pow(heightTri, 2) + Math.pow(cSmall, 2) / 4);
  var trapSquare = (Math.sqrt(Math.pow(h, 2) + Math.pow(a / 2, 2)) + d2) * (b - 2 * c + Math.sqrt(Math.pow(triSide, 2) - Math.pow(heightTrap, 2)));
  var roofSquare = (2 * (triSquare + trapSquare)).toFixed(2);
  var kpAmount = Math.ceil(roofSquare / 2);
  var screwAmount = kpAmount * 34;
  var skatePlank = Math.ceil((b - c - c) / 2);
  var cornicePlank = Math.ceil((a + a + b + b + d1 + d1 + d2 + d2 + d1 + d1 + d2 + d2) / 2);
  var windPlank = 0;
  return [roofSquare, kpAmount, screwAmount, skatePlank, cornicePlank, windPlank]; //    let baseTrap = b + d1 + d1;
  //    let skat = b - c - c;
  //    let baseTri = a + d2 + d2;
  //
  //    let triSide = Math.sqrt(Math.pow(baseTri, 2) + Math.pow(h, 2))
  //
  //    if (skat > 0) {
  //        let heightTrap = Math.sqrt(Math.pow(triSide, 2) - (Math.pow((baseTrap - skat), 2) / 4 ));
  //        let heightTri = Math.sqrt(Math.pow(triSide, 2) - (Math.pow(baseTri, 2) / 4));
  //
  //        let squareTri = 0.5 * baseTri * heightTri;
  //
  //        let squareTrap = ((skat + baseTrap) / 2) * heightTrap;
  //
  //        let roofSquare = 2 * (squareTri + squareTrap);
  //            console.log(roofSquare.toFixed(2))
  //    }
}

$("#modal-appearance").on("click", function () {
  $(".modal-appearance").removeClass("modal-visible");
  $("body").css("overflow", "hidden");
});
$("#modal-mount").on("click", function () {
  $(".modal-mount").toggleClass("modal-visible");
  $("body").css("overflow", "hidden");
});
$("#modal-sum").on("click", function () {
  $(".modal-sum").toggleClass("modal-visible");
  $("body").css("overflow", "hidden");
});
$(".close").on("click", function () {
  $(".modals").addClass("modal-visible");
  $("body").css("overflow", "");
});
/* Slider open BIG image */

$('.gallery__image').on('click', function (event) {
  event.preventDefault();
  var $this = $(this);

  if ($this.hasClass('slick-center')) {
    var $img = $this.attr('src');
    $("#gallery-modal").toggleClass("modal-visible");
    $('body').css('overflow', 'hidden');
    $('#gallery-modal-content').html('<img src="' + $img + '" alt="photo" width="100%" />');
  }
});

/***/ }),

/***/ "./resources/less/style.less":
/*!***********************************!*\
  !*** ./resources/less/style.less ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/style": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/style"], () => (__webpack_require__("./resources/less/style.less")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;