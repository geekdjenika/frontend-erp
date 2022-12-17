"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_detail-taches_detail-taches_module_ts"],{

/***/ 8045:
/*!***************************************************************!*\
  !*** ./src/app/detail-taches/detail-taches-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailTachesPageRoutingModule": () => (/* binding */ DetailTachesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _detail_taches_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-taches.page */ 6930);




const routes = [
    {
        path: '',
        component: _detail_taches_page__WEBPACK_IMPORTED_MODULE_0__.DetailTachesPage
    }
];
let DetailTachesPageRoutingModule = class DetailTachesPageRoutingModule {
};
DetailTachesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailTachesPageRoutingModule);



/***/ }),

/***/ 2082:
/*!*******************************************************!*\
  !*** ./src/app/detail-taches/detail-taches.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailTachesPageModule": () => (/* binding */ DetailTachesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _detail_taches_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-taches-routing.module */ 8045);
/* harmony import */ var _detail_taches_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-taches.page */ 6930);







let DetailTachesPageModule = class DetailTachesPageModule {
};
DetailTachesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detail_taches_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailTachesPageRoutingModule
        ],
        declarations: [_detail_taches_page__WEBPACK_IMPORTED_MODULE_1__.DetailTachesPage]
    })
], DetailTachesPageModule);



/***/ }),

/***/ 6930:
/*!*****************************************************!*\
  !*** ./src/app/detail-taches/detail-taches.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailTachesPage": () => (/* binding */ DetailTachesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _detail_taches_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-taches.page.html?ngResource */ 6713);
/* harmony import */ var _detail_taches_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-taches.page.scss?ngResource */ 5594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let DetailTachesPage = class DetailTachesPage {
    constructor() { }
    ngOnInit() {
    }
};
DetailTachesPage.ctorParameters = () => [];
DetailTachesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-detail-taches',
        template: _detail_taches_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detail_taches_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailTachesPage);



/***/ }),

/***/ 5594:
/*!******************************************************************!*\
  !*** ./src/app/detail-taches/detail-taches.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtdGFjaGVzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6713:
/*!******************************************************************!*\
  !*** ./src/app/detail-taches/detail-taches.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>DetailTaches</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_detail-taches_detail-taches_module_ts.js.map