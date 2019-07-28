(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo"],{

/***/ "./assets/js/demo.js":
/*!***************************!*\
  !*** ./assets/js/demo.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_betwiggy_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/betwiggy.scss */ "./assets/scss/betwiggy.scss");
/* harmony import */ var _scss_betwiggy_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_betwiggy_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rixbeck_be_twiggy_assets_js_Selectize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rixbeck/be-twiggy/assets/js/Selectize */ "./node_modules/@rixbeck/be-twiggy/assets/js/Selectize.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
// require('../css/app.css');
 // Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


document.addEventListener('DOMContentLoaded', function () {
  _rixbeck_be_twiggy_assets_js_Selectize__WEBPACK_IMPORTED_MODULE_1__["default"].init(document.querySelectorAll('.project-filters .selectize'));
});
console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ }),

/***/ "./assets/scss/betwiggy.scss":
/*!***********************************!*\
  !*** ./assets/scss/betwiggy.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@rixbeck/be-twiggy/assets/js/Base.js":
/*!***********************************************************!*\
  !*** ./node_modules/@rixbeck/be-twiggy/assets/js/Base.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
class Base {
    constructor(elComponent, componentHost) {
        Object.defineProperty(elComponent, '_component', {
            writable: false,
            value: this
        });

        this.host = componentHost || false;
        this.components = {};
        this.ready = false;
        this.rootElement = elComponent;
        this.eventChanges = new CustomEvent('changes');
        this.initialize.apply(this, arguments);
        this.changed = false;
        this.ready = true;
    }

    set changed(state) {
        if (state && !this._changed) {
            this.getsDirty();
        }
        this._changed = state;
        if (!this._ready) {
            return
        }
        this.rootElement.dispatchEvent(this.eventChanges);
        this.changes();
    }

    get changed() {
        return this._changed;
    }

    set ready(state) {
        this._ready = state;
    }

    get ready() {
        return this._ready;
    }

    reset() {
        this.setClean();
        this.changed = false;
        for (let component in this.components) {
            this.components[component].reset();
        }
    }

    setClean() {
        this.rootElement.classList.remove('has-changed');
    }

    setDirty() {
        this.rootElement.classList.add('has-changed');
    }

    getsDirty() {}

    changes() {
        if (this.host) {
            this.host.changed = this.changed;
        }
    }

    initialize() {}
}


/***/ }),

/***/ "./node_modules/@rixbeck/be-twiggy/assets/js/Dropdown.js":
/*!***************************************************************!*\
  !*** ./node_modules/@rixbeck/be-twiggy/assets/js/Dropdown.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dropdown; });
/* harmony import */ var _Toggler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toggler.js */ "./node_modules/@rixbeck/be-twiggy/assets/js/Toggler.js");


class Dropdown extends _Toggler_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    setToggler() {
        super.setToggler();
        if (this.menuElement) {
            this.menuElement.addEventListener('blur', this.onBlur.bind(this));
        }
    }

    get menuElement() {
        return this._menuElement || (this._menuElement = this.rootElement.querySelector('.dropdown-menu .is-focusable'));
    }

    onClick(evt) {
        super.onClick(evt);
        this.menuElement.focus();
    }

    onBlur(evt) {
        this.toggleElement.classList.toggle(this.classToggler);
    }

    static init(elComponents, classToggler, componentFactory) {
        componentFactory = componentFactory || ((elComponent) => new Dropdown(elComponent, classToggler));
        elComponents.forEach((elComponent) => (componentFactory(elComponent, classToggler)));
    }
}


/***/ }),

/***/ "./node_modules/@rixbeck/be-twiggy/assets/js/Select.js":
/*!*************************************************************!*\
  !*** ./node_modules/@rixbeck/be-twiggy/assets/js/Select.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Select; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./node_modules/@rixbeck/be-twiggy/assets/js/Base.js");


class Select extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    initialize() {
        this.selectElement.addEventListener('input', this.onChange.bind(this));
    }

    get selected() {
        return Array.from(this.selectedOptions)
            .map(option => option.value);
    }

    get selectedOptions() {
        return this.selectElement.selectedOptions;
    }

    get selectElement() {
        return this._selectElement || (this._selectElement = this.rootElement.querySelector('select'));
    }

    setOption(option, state) {
        for (let elOption of Array.from(this.selectElement.options)) {
            if (elOption.value === option) {
                elOption.selected = state;
                break;
            }
        }
        this.changed = true;
    }

    onChange() {
        this.changed = true;
    }

    static init(elComponents, componentFactory) {
        componentFactory = componentFactory || ((elComponent) => new Select(elComponent));
        elComponents.forEach((elComponent) => (componentFactory(elComponent)));
    }
}


/***/ }),

/***/ "./node_modules/@rixbeck/be-twiggy/assets/js/Selectize.js":
/*!****************************************************************!*\
  !*** ./node_modules/@rixbeck/be-twiggy/assets/js/Selectize.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Selectize; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./node_modules/@rixbeck/be-twiggy/assets/js/Base.js");
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tags */ "./node_modules/@rixbeck/be-twiggy/assets/js/Tags.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropdown */ "./node_modules/@rixbeck/be-twiggy/assets/js/Dropdown.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Select */ "./node_modules/@rixbeck/be-twiggy/assets/js/Select.js");





class Selectize extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {

    initialize() {
        const elSelect = this.rootElement.querySelector(`.select`);
        const elTags = this.rootElement.querySelector('.selectize-tags .tags');
        const elDropdown = this.rootElement.querySelector('.dropdown');

        this.components.dropdown = new _Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"](elDropdown, this, 'is-active');
        this.components.select = new Selectize.Select(elSelect, this);
        this.components.tags = new Selectize.Tags(elTags, this);
    }

    get options() {
        return this.components.select.selected;
    }

    get optionValues() {
        return this.options.map(elm => elm.value);
    }

    onChange() {}

    clear() {
        this.host.components.tags.clear();
    }

    static init(elComponents, componentFactory) {
        componentFactory = componentFactory || ((elComponent) => new Selectize(elComponent));
        elComponents.forEach((elComponent) => (componentFactory(elComponent)));
    }
}

Selectize.Tags = class extends _Tags__WEBPACK_IMPORTED_MODULE_1__["default"] {
    remove(tagValue) {
        super.remove(tagValue);
        this.host.components.select.setOption(tagValue, false);
    }

    add(tagValue) {
        super.add(tagValue);
        this.host.components.select.setOption(tagValue, true);
    }
}

Selectize.Select = class extends _Select__WEBPACK_IMPORTED_MODULE_3__["default"] {
    onChange(evt) {
        this.host.components.tags.clear();
        Array.from(this.selectElement.selectedOptions).map(opt => this.host.components.tags.add(opt.value));
        super.onChange(evt);
    }
}


/***/ }),

/***/ "./node_modules/@rixbeck/be-twiggy/assets/js/Tags.js":
/*!***********************************************************!*\
  !*** ./node_modules/@rixbeck/be-twiggy/assets/js/Tags.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tags; });
/* harmony import */ var _Base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.js */ "./node_modules/@rixbeck/be-twiggy/assets/js/Base.js");


class Tags extends _Base_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
    initialize() {
        if (Tags.prototype.tagElm == undefined) {
            Tags.prototype.tagElm = document.querySelector('#selectize-tag');
        }
        this.rootElement.querySelectorAll(`.js-selectize-tag`)
            .forEach((elTag) => (elTag.addEventListener('click', this.onChange.bind(this))));
    }

    clear() {
        this.rootElement.innerHTML = "";
        this.changed = true;

        return this;
    }

    get tagTemplate() {
        return Tags.prototype.tagElm.content;
    }

    get tags() {
        return Array.from(this.tagElements).map(tag => this.getValue(tag));
    }

    get tagElements() {
        return this.rootElement.querySelectorAll('.tag');
    }

    getValue(elTag) {
        return elTag.getAttribute('data-tagvalue');
    }

    remove(tagValue) {
        for (const el of this.tagElements) {
            if (this.getValue(el) === tagValue) {
                el.remove();
                break;
            }
        }
        this.changed = true;

        return this;
    }

    add(tagValue) {
        const tagContent = document.importNode(this.tagTemplate, true);
        const tag = tagContent.firstElementChild;
        tag.firstElementChild.textContent = tagValue;
        tag.setAttribute('data-tagvalue', tagValue);
        tag.querySelector('.button').addEventListener('click', this.onChange.bind(this));
        this.changed = true;

        return this.rootElement.appendChild(tagContent);
    }

    onChange(tagButton) {
        this.remove(this.getValue(tagButton.target.parentElement));
    }

    getsDirty() {
        super.getsDirty();
        this.setDirty();
    }

    static init(elComponents, componentFactory) {
        componentFactory = componentFactory || ((elComponent) => new Tags(elComponent));
        elComponents.forEach((elComponent) => (componentFactory(elComponent)));
    }
}


/***/ }),

/***/ "./node_modules/@rixbeck/be-twiggy/assets/js/Toggler.js":
/*!**************************************************************!*\
  !*** ./node_modules/@rixbeck/be-twiggy/assets/js/Toggler.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toggler; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./node_modules/@rixbeck/be-twiggy/assets/js/Base.js");


class Toggler extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    initialize(elComponent, host, classToggler) {
        this.classToggler = classToggler;
        this.toggleElement = this.rootElement.classList.contains('js-toggle-element')
            ? this.rootElement
            : this.rootElement.querySelector('.js-toggle-element');
        this.setToggler(elComponent);
    }

    setToggler() {
        const elClose = this.rootElement.querySelector('.js-toggle-trigger');
        if (elClose) {
            elClose.addEventListener('click', this.onClick.bind(this));
        }
    }

    onClick(evt) {
        this.toggleElement.classList.toggle(this.classToggler);
    }

    static init(elComponents, classToggler, componentFactory) {
        componentFactory = componentFactory || ((elComponent) => new Toggler(elComponent, classToggler));
        elComponents.forEach((elComponent) => (componentFactory(elComponent, classToggler)));
    }
}


/***/ })

},[["./assets/js/demo.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZGVtby5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9iZXR3aWdneS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acml4YmVjay9iZS10d2lnZ3kvYXNzZXRzL2pzL0Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0ByaXhiZWNrL2JlLXR3aWdneS9hc3NldHMvanMvRHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0ByaXhiZWNrL2JlLXR3aWdneS9hc3NldHMvanMvU2VsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acml4YmVjay9iZS10d2lnZ3kvYXNzZXRzL2pzL1NlbGVjdGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJpeGJlY2svYmUtdHdpZ2d5L2Fzc2V0cy9qcy9UYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Acml4YmVjay9iZS10d2lnZ3kvYXNzZXRzL2pzL1RvZ2dsZXIuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiU2VsZWN0aXplIiwiaW5pdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7QUFDQTtDQUdBO0FBQ0E7O0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoREMsZ0ZBQVMsQ0FBQ0MsSUFBVixDQUFlSCxRQUFRLENBQUNJLGdCQUFULENBQTBCLDZCQUExQixDQUFmO0FBQ0gsQ0FGRDtBQUlBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtREFBWixFOzs7Ozs7Ozs7OztBQ25CQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQUE7QUFBQTtBQUFtQzs7QUFFcEIsdUJBQXVCLG1EQUFPO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQTBCOztBQUVYLHFCQUFxQiw2Q0FBSTtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBCO0FBQ0E7QUFDUTtBQUNKOztBQUVmLHdCQUF3Qiw2Q0FBSTs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLGlEQUFRO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQiw2Q0FBSTtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQywrQ0FBTTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFBQTtBQUFBO0FBQTZCOztBQUVkLG1CQUFtQixnREFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFBQTtBQUFBO0FBQTBCOztBQUVYLHNCQUFzQiw2Q0FBSTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuLy8gcmVxdWlyZSgnLi4vY3NzL2FwcC5jc3MnKTtcbmltcG9ydCBcIi4uL3Njc3MvYmV0d2lnZ3kuc2Nzc1wiO1xuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIHJlcXVpcmUgaXQuXG4vLyBjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5pbXBvcnQgU2VsZWN0aXplIGZyb20gXCJAcml4YmVjay9iZS10d2lnZ3kvYXNzZXRzL2pzL1NlbGVjdGl6ZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIFNlbGVjdGl6ZS5pbml0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWZpbHRlcnMgLnNlbGVjdGl6ZScpKTtcbn0pO1xuXG5jb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gYXNzZXRzL2pzL2FwcC5qcycpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG4gICAgY29uc3RydWN0b3IoZWxDb21wb25lbnQsIGNvbXBvbmVudEhvc3QpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsQ29tcG9uZW50LCAnX2NvbXBvbmVudCcsIHtcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaG9zdCA9IGNvbXBvbmVudEhvc3QgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICB0aGlzLnJlYWR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm9vdEVsZW1lbnQgPSBlbENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5ldmVudENoYW5nZXMgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZXMnKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXQgY2hhbmdlZChzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUgJiYgIXRoaXMuX2NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0c0RpcnR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2hhbmdlZCA9IHN0YXRlO1xuICAgICAgICBpZiAoIXRoaXMuX3JlYWR5KSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3RFbGVtZW50LmRpc3BhdGNoRXZlbnQodGhpcy5ldmVudENoYW5nZXMpO1xuICAgICAgICB0aGlzLmNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBnZXQgY2hhbmdlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5nZWQ7XG4gICAgfVxuXG4gICAgc2V0IHJlYWR5KHN0YXRlKSB7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gc3RhdGU7XG4gICAgfVxuXG4gICAgZ2V0IHJlYWR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZHk7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuc2V0Q2xlYW4oKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGNvbXBvbmVudCBpbiB0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tjb21wb25lbnRdLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDbGVhbigpIHtcbiAgICAgICAgdGhpcy5yb290RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtY2hhbmdlZCcpO1xuICAgIH1cblxuICAgIHNldERpcnR5KCkge1xuICAgICAgICB0aGlzLnJvb3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hhcy1jaGFuZ2VkJyk7XG4gICAgfVxuXG4gICAgZ2V0c0RpcnR5KCkge31cblxuICAgIGNoYW5nZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmhvc3QpIHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5jaGFuZ2VkID0gdGhpcy5jaGFuZ2VkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHt9XG59XG4iLCJpbXBvcnQgVG9nZ2xlciBmcm9tICcuL1RvZ2dsZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93biBleHRlbmRzIFRvZ2dsZXIge1xuICAgIHNldFRvZ2dsZXIoKSB7XG4gICAgICAgIHN1cGVyLnNldFRvZ2dsZXIoKTtcbiAgICAgICAgaWYgKHRoaXMubWVudUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMubWVudUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMub25CbHVyLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IG1lbnVFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWVudUVsZW1lbnQgfHwgKHRoaXMuX21lbnVFbGVtZW50ID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tbWVudSAuaXMtZm9jdXNhYmxlJykpO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZXZ0KSB7XG4gICAgICAgIHN1cGVyLm9uQ2xpY2soZXZ0KTtcbiAgICAgICAgdGhpcy5tZW51RWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIG9uQmx1cihldnQpIHtcbiAgICAgICAgdGhpcy50b2dnbGVFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUodGhpcy5jbGFzc1RvZ2dsZXIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbml0KGVsQ29tcG9uZW50cywgY2xhc3NUb2dnbGVyLCBjb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICAgIGNvbXBvbmVudEZhY3RvcnkgPSBjb21wb25lbnRGYWN0b3J5IHx8ICgoZWxDb21wb25lbnQpID0+IG5ldyBEcm9wZG93bihlbENvbXBvbmVudCwgY2xhc3NUb2dnbGVyKSk7XG4gICAgICAgIGVsQ29tcG9uZW50cy5mb3JFYWNoKChlbENvbXBvbmVudCkgPT4gKGNvbXBvbmVudEZhY3RvcnkoZWxDb21wb25lbnQsIGNsYXNzVG9nZ2xlcikpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEJhc2Uge1xuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGVkT3B0aW9ucylcbiAgICAgICAgICAgIC5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkT3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0RWxlbWVudC5zZWxlY3RlZE9wdGlvbnM7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RFbGVtZW50IHx8ICh0aGlzLl9zZWxlY3RFbGVtZW50ID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSk7XG4gICAgfVxuXG4gICAgc2V0T3B0aW9uKG9wdGlvbiwgc3RhdGUpIHtcbiAgICAgICAgZm9yIChsZXQgZWxPcHRpb24gb2YgQXJyYXkuZnJvbSh0aGlzLnNlbGVjdEVsZW1lbnQub3B0aW9ucykpIHtcbiAgICAgICAgICAgIGlmIChlbE9wdGlvbi52YWx1ZSA9PT0gb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgZWxPcHRpb24uc2VsZWN0ZWQgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbml0KGVsQ29tcG9uZW50cywgY29tcG9uZW50RmFjdG9yeSkge1xuICAgICAgICBjb21wb25lbnRGYWN0b3J5ID0gY29tcG9uZW50RmFjdG9yeSB8fCAoKGVsQ29tcG9uZW50KSA9PiBuZXcgU2VsZWN0KGVsQ29tcG9uZW50KSk7XG4gICAgICAgIGVsQ29tcG9uZW50cy5mb3JFYWNoKChlbENvbXBvbmVudCkgPT4gKGNvbXBvbmVudEZhY3RvcnkoZWxDb21wb25lbnQpKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZVwiO1xuaW1wb3J0IFRhZ3MgZnJvbSBcIi4vVGFnc1wiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuL0Ryb3Bkb3duXCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuL1NlbGVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RpemUgZXh0ZW5kcyBCYXNlIHtcblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IGVsU2VsZWN0ID0gdGhpcy5yb290RWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuc2VsZWN0YCk7XG4gICAgICAgIGNvbnN0IGVsVGFncyA9IHRoaXMucm9vdEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGl6ZS10YWdzIC50YWdzJyk7XG4gICAgICAgIGNvbnN0IGVsRHJvcGRvd24gPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpO1xuXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5kcm9wZG93biA9IG5ldyBEcm9wZG93bihlbERyb3Bkb3duLCB0aGlzLCAnaXMtYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zZWxlY3QgPSBuZXcgU2VsZWN0aXplLlNlbGVjdChlbFNlbGVjdCwgdGhpcyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy50YWdzID0gbmV3IFNlbGVjdGl6ZS5UYWdzKGVsVGFncywgdGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuc2VsZWN0LnNlbGVjdGVkO1xuICAgIH1cblxuICAgIGdldCBvcHRpb25WYWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubWFwKGVsbSA9PiBlbG0udmFsdWUpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKCkge31cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmhvc3QuY29tcG9uZW50cy50YWdzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXQoZWxDb21wb25lbnRzLCBjb21wb25lbnRGYWN0b3J5KSB7XG4gICAgICAgIGNvbXBvbmVudEZhY3RvcnkgPSBjb21wb25lbnRGYWN0b3J5IHx8ICgoZWxDb21wb25lbnQpID0+IG5ldyBTZWxlY3RpemUoZWxDb21wb25lbnQpKTtcbiAgICAgICAgZWxDb21wb25lbnRzLmZvckVhY2goKGVsQ29tcG9uZW50KSA9PiAoY29tcG9uZW50RmFjdG9yeShlbENvbXBvbmVudCkpKTtcbiAgICB9XG59XG5cblNlbGVjdGl6ZS5UYWdzID0gY2xhc3MgZXh0ZW5kcyBUYWdzIHtcbiAgICByZW1vdmUodGFnVmFsdWUpIHtcbiAgICAgICAgc3VwZXIucmVtb3ZlKHRhZ1ZhbHVlKTtcbiAgICAgICAgdGhpcy5ob3N0LmNvbXBvbmVudHMuc2VsZWN0LnNldE9wdGlvbih0YWdWYWx1ZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGFkZCh0YWdWYWx1ZSkge1xuICAgICAgICBzdXBlci5hZGQodGFnVmFsdWUpO1xuICAgICAgICB0aGlzLmhvc3QuY29tcG9uZW50cy5zZWxlY3Quc2V0T3B0aW9uKHRhZ1ZhbHVlLCB0cnVlKTtcbiAgICB9XG59XG5cblNlbGVjdGl6ZS5TZWxlY3QgPSBjbGFzcyBleHRlbmRzIFNlbGVjdCB7XG4gICAgb25DaGFuZ2UoZXZ0KSB7XG4gICAgICAgIHRoaXMuaG9zdC5jb21wb25lbnRzLnRhZ3MuY2xlYXIoKTtcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLnNlbGVjdEVsZW1lbnQuc2VsZWN0ZWRPcHRpb25zKS5tYXAob3B0ID0+IHRoaXMuaG9zdC5jb21wb25lbnRzLnRhZ3MuYWRkKG9wdC52YWx1ZSkpO1xuICAgICAgICBzdXBlci5vbkNoYW5nZShldnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhZ3MgZXh0ZW5kcyBCYXNlIHtcbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoVGFncy5wcm90b3R5cGUudGFnRWxtID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgVGFncy5wcm90b3R5cGUudGFnRWxtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbGVjdGl6ZS10YWcnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5qcy1zZWxlY3RpemUtdGFnYClcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbFRhZykgPT4gKGVsVGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpKSkpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnJvb3RFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IHRhZ1RlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4gVGFncy5wcm90b3R5cGUudGFnRWxtLmNvbnRlbnQ7XG4gICAgfVxuXG4gICAgZ2V0IHRhZ3MoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMudGFnRWxlbWVudHMpLm1hcCh0YWcgPT4gdGhpcy5nZXRWYWx1ZSh0YWcpKTtcbiAgICB9XG5cbiAgICBnZXQgdGFnRWxlbWVudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWcnKTtcbiAgICB9XG5cbiAgICBnZXRWYWx1ZShlbFRhZykge1xuICAgICAgICByZXR1cm4gZWxUYWcuZ2V0QXR0cmlidXRlKCdkYXRhLXRhZ3ZhbHVlJyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKHRhZ1ZhbHVlKSB7XG4gICAgICAgIGZvciAoY29uc3QgZWwgb2YgdGhpcy50YWdFbGVtZW50cykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0VmFsdWUoZWwpID09PSB0YWdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGVsLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkKHRhZ1ZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHRhZ0NvbnRlbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRoaXMudGFnVGVtcGxhdGUsIHRydWUpO1xuICAgICAgICBjb25zdCB0YWcgPSB0YWdDb250ZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICB0YWcuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSB0YWdWYWx1ZTtcbiAgICAgICAgdGFnLnNldEF0dHJpYnV0ZSgnZGF0YS10YWd2YWx1ZScsIHRhZ1ZhbHVlKTtcbiAgICAgICAgdGFnLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQodGFnQ29udGVudCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodGFnQnV0dG9uKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlKHRoaXMuZ2V0VmFsdWUodGFnQnV0dG9uLnRhcmdldC5wYXJlbnRFbGVtZW50KSk7XG4gICAgfVxuXG4gICAgZ2V0c0RpcnR5KCkge1xuICAgICAgICBzdXBlci5nZXRzRGlydHkoKTtcbiAgICAgICAgdGhpcy5zZXREaXJ0eSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbml0KGVsQ29tcG9uZW50cywgY29tcG9uZW50RmFjdG9yeSkge1xuICAgICAgICBjb21wb25lbnRGYWN0b3J5ID0gY29tcG9uZW50RmFjdG9yeSB8fCAoKGVsQ29tcG9uZW50KSA9PiBuZXcgVGFncyhlbENvbXBvbmVudCkpO1xuICAgICAgICBlbENvbXBvbmVudHMuZm9yRWFjaCgoZWxDb21wb25lbnQpID0+IChjb21wb25lbnRGYWN0b3J5KGVsQ29tcG9uZW50KSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9nZ2xlciBleHRlbmRzIEJhc2Uge1xuICAgIGluaXRpYWxpemUoZWxDb21wb25lbnQsIGhvc3QsIGNsYXNzVG9nZ2xlcikge1xuICAgICAgICB0aGlzLmNsYXNzVG9nZ2xlciA9IGNsYXNzVG9nZ2xlcjtcbiAgICAgICAgdGhpcy50b2dnbGVFbGVtZW50ID0gdGhpcy5yb290RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXRvZ2dsZS1lbGVtZW50JylcbiAgICAgICAgICAgID8gdGhpcy5yb290RWxlbWVudFxuICAgICAgICAgICAgOiB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10b2dnbGUtZWxlbWVudCcpO1xuICAgICAgICB0aGlzLnNldFRvZ2dsZXIoZWxDb21wb25lbnQpO1xuICAgIH1cblxuICAgIHNldFRvZ2dsZXIoKSB7XG4gICAgICAgIGNvbnN0IGVsQ2xvc2UgPSB0aGlzLnJvb3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10b2dnbGUtdHJpZ2dlcicpO1xuICAgICAgICBpZiAoZWxDbG9zZSkge1xuICAgICAgICAgICAgZWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2soZXZ0KSB7XG4gICAgICAgIHRoaXMudG9nZ2xlRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuY2xhc3NUb2dnbGVyKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW5pdChlbENvbXBvbmVudHMsIGNsYXNzVG9nZ2xlciwgY29tcG9uZW50RmFjdG9yeSkge1xuICAgICAgICBjb21wb25lbnRGYWN0b3J5ID0gY29tcG9uZW50RmFjdG9yeSB8fCAoKGVsQ29tcG9uZW50KSA9PiBuZXcgVG9nZ2xlcihlbENvbXBvbmVudCwgY2xhc3NUb2dnbGVyKSk7XG4gICAgICAgIGVsQ29tcG9uZW50cy5mb3JFYWNoKChlbENvbXBvbmVudCkgPT4gKGNvbXBvbmVudEZhY3RvcnkoZWxDb21wb25lbnQsIGNsYXNzVG9nZ2xlcikpKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9