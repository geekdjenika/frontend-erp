"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_editactivity_editactivity_module_ts"],{

/***/ 8090:
/*!*************************************************************!*\
  !*** ./src/app/editactivity/editactivity-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditactivityPageRoutingModule": () => (/* binding */ EditactivityPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _editactivity_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editactivity.page */ 6419);




const routes = [
    {
        path: '',
        component: _editactivity_page__WEBPACK_IMPORTED_MODULE_0__.EditactivityPage
    }
];
let EditactivityPageRoutingModule = class EditactivityPageRoutingModule {
};
EditactivityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditactivityPageRoutingModule);



/***/ }),

/***/ 9826:
/*!*****************************************************!*\
  !*** ./src/app/editactivity/editactivity.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditactivityPageModule": () => (/* binding */ EditactivityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _editactivity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editactivity-routing.module */ 8090);
/* harmony import */ var _editactivity_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editactivity.page */ 6419);







let EditactivityPageModule = class EditactivityPageModule {
};
EditactivityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editactivity_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditactivityPageRoutingModule
        ],
        declarations: [_editactivity_page__WEBPACK_IMPORTED_MODULE_1__.EditactivityPage]
    })
], EditactivityPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_editactivity_editactivity_module_ts.js.map