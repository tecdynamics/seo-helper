<<<<<<< HEAD
(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(r=i.key,a=void 0,a=function(t,n){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,n||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(r,"string"),"symbol"===e(a)?a:String(a)),i)}var r,a}var n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$document=$(document)}var n,o,i;return n=e,i=[{key:"updateSEOTitle",value:function(e){e?($("#seo_title").val()||$(".page-title-seo").text(e),$(".default-seo-description").addClass("hidden"),$(".existed-seo-meta").removeClass("hidden")):($(".default-seo-description").removeClass("hidden"),$(".existed-seo-meta").addClass("hidden"))}},{key:"updateSEODescription",value:function(e){e&&($("#seo_description").val()||$(".page-description-seo").text(e))}}],(o=[{key:"handleMetaBox",value:function(){var t=this.$document.find("#sample-permalink a");t.length&&$(".page-url-seo p").text(t.prop("href").replace("?preview=true","")),this.$document.on("click",".btn-trigger-show-seo-detail",(function(e){e.preventDefault(),$(".seo-edit-section").toggleClass("hidden")})),this.$document.on("keyup","input[name=name]",(function(t){e.updateSEOTitle($(t.currentTarget).val())})),this.$document.on("keyup","input[name=title]",(function(t){e.updateSEOTitle($(t.currentTarget).val())})),this.$document.on("keyup","textarea[name=description]",(function(t){e.updateSEODescription($(t.currentTarget).val())})),this.$document.on("keyup","#seo_title",(function(e){if($(e.currentTarget).val())$(".page-title-seo").text($(e.currentTarget).val()),$(".default-seo-description").addClass("hidden"),$(".existed-seo-meta").removeClass("hidden");else{var t=$("input[name=name]");t.val()?$(".page-title-seo").text(t.val()):$(".page-title-seo").text($("input[name=title]").val())}})),this.$document.on("keyup","#seo_description",(function(e){$(e.currentTarget).val()?$(".page-description-seo").text($(e.currentTarget).val()):$(".page-description-seo").text($("textarea[name=description]").val())}))}}])&&t(n.prototype,o),i&&t(n,i),Object.defineProperty(n,"prototype",{writable:!1}),e}();$(document).ready((function(){(new n).handleMetaBox()}))})();
=======
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************************************************!*\
  !*** ./platform/packages/seo-helper/resources/assets/js/seo-helper.js ***!
  \************************************************************************/
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SEOHelperManagement = /*#__PURE__*/function () {
  function SEOHelperManagement() {
    _classCallCheck(this, SEOHelperManagement);
    this.$document = $(document);
  }
  _createClass(SEOHelperManagement, [{
    key: "handleMetaBox",
    value: function handleMetaBox() {
      var permalink = this.$document.find('#sample-permalink a');
      if (permalink.length) {
        $('.page-url-seo p').text(permalink.prop('href').replace('?preview=true', ''));
      }
      this.$document.on('click', '.btn-trigger-show-seo-detail', function (event) {
        event.preventDefault();
        $('.seo-edit-section').toggleClass('hidden');
      });
      this.$document.on('keyup', 'input[name=name]', function (event) {
        SEOHelperManagement.updateSEOTitle($(event.currentTarget).val());
      });
      this.$document.on('keyup', 'input[name=title]', function (event) {
        SEOHelperManagement.updateSEOTitle($(event.currentTarget).val());
      });
      this.$document.on('keyup', 'textarea[name=description]', function (event) {
        SEOHelperManagement.updateSEODescription($(event.currentTarget).val());
      });
      this.$document.on('keyup', '#seo_title', function (event) {
        if ($(event.currentTarget).val()) {
          $('.page-title-seo').text($(event.currentTarget).val());
          $('.default-seo-description').addClass('hidden');
          $('.existed-seo-meta').removeClass('hidden');
        } else {
          var $inputName = $('input[name=name]');
          if ($inputName.val()) {
            $('.page-title-seo').text($inputName.val());
          } else {
            $('.page-title-seo').text($('input[name=title]').val());
          }
        }
      });
      this.$document.on('keyup', '#seo_description', function (event) {
        if ($(event.currentTarget).val()) {
          $('.page-description-seo').text($(event.currentTarget).val());
        } else {
          $('.page-description-seo').text($('textarea[name=description]').val());
        }
      });
    }
  }], [{
    key: "updateSEOTitle",
    value: function updateSEOTitle(value) {
      if (value) {
        if (!$('#seo_title').val()) {
          $('.page-title-seo').text(value);
        }
        $('.default-seo-description').addClass('hidden');
        $('.existed-seo-meta').removeClass('hidden');
      } else {
        $('.default-seo-description').removeClass('hidden');
        $('.existed-seo-meta').addClass('hidden');
      }
    }
  }, {
    key: "updateSEODescription",
    value: function updateSEODescription(value) {
      if (value) {
        if (!$('#seo_description').val()) {
          $('.page-description-seo').text(value);
        }
      }
    }
  }]);
  return SEOHelperManagement;
}();
$(document).ready(function () {
  new SEOHelperManagement().handleMetaBox();
});
/******/ })()
;
>>>>>>> 0c457221b3151d1a64bab796ce52796ffb3adc9f
