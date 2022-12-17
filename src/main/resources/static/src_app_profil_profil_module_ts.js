"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profil_profil_module_ts"],{

/***/ 7907:
/*!********************************************!*\
  !*** ./src/app/cloche/cloche.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClocheComponent": () => (/* binding */ ClocheComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cloche_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloche.component.html?ngResource */ 9956);
/* harmony import */ var _cloche_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cloche.component.scss?ngResource */ 7993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _popup_notification_popup_notification_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popup-notification/popup-notification.page */ 4459);
/* harmony import */ var _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/notification/notification.service */ 9317);








let ClocheComponent = class ClocheComponent {
    constructor(router, popoverCtrl, notificationService) {
        this.router = router;
        this.popoverCtrl = popoverCtrl;
        this.notificationService = notificationService;
    }
    ngOnInit() {
        this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
        this.notificationService.GetAllNotif(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour => {
            this.notif = retour.data;
            console.log(this.notif);
            this.notifTotal = retour.data.length;
            console.log(this.notif);
        });
    }
    OpenNotification(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // this.router.navigate((['tabs',"message",id]));
            const popover = yield this.popoverCtrl.create({
                component: _popup_notification_popup_notification_page__WEBPACK_IMPORTED_MODULE_2__.PopupNotificationPage,
                event: id,
                cssClass: "notif-popup"
            });
            yield popover.present();
        });
    }
};
ClocheComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController },
    { type: _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService }
];
ClocheComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-cloche',
        template: _cloche_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cloche_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClocheComponent);



/***/ }),

/***/ 2602:
/*!*************************************************!*\
  !*** ./src/app/profil/profil-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilPageRoutingModule": () => (/* binding */ ProfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _profil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil.page */ 9014);



// <<<<<<<< HEAD:PlatformErpOdc/src/app/profil/profil-routing.module.ts

// ========
// import { DetailtiragePage } from './detailtirage.page';
// >>>>>>>> af5c9fafd1ba1e5f7f56129c4793584f0bfdb3e8:PlatformErpOdc/src/app/detailtirage/detailtirage-routing.module.ts
const routes = [
    {
        path: '',
        // <<<<<<<< HEAD:PlatformErpOdc/src/app/profil/profil-routing.module.ts
        //     component: ProfilPage
        // ========
        component: _profil_page__WEBPACK_IMPORTED_MODULE_0__.ProfilPage
        // >>>>>>>> af5c9fafd1ba1e5f7f56129c4793584f0bfdb3e8:PlatformErpOdc/src/app/detailtirage/detailtirage-routing.module.ts
    }
];
let ProfilPageRoutingModule = class ProfilPageRoutingModule {
};
ProfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
    // <<<<<<<< HEAD:PlatformErpOdc/src/app/profil/profil-routing.module.ts
], ProfilPageRoutingModule);

// ========
// export class DetailtiragePageRoutingModule {}
// >>>>>>>> af5c9fafd1ba1e5f7f56129c4793584f0bfdb3e8:PlatformErpOdc/src/app/detailtirage/detailtirage-routing.module.ts


/***/ }),

/***/ 8718:
/*!*****************************************!*\
  !*** ./src/app/profil/profil.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilPageModule": () => (/* binding */ ProfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil-routing.module */ 2602);
/* harmony import */ var _profil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profil.page */ 9014);
/* harmony import */ var _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cloche/cloche.component */ 7907);








let ProfilPageModule = class ProfilPageModule {
};
ProfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profil_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilPageRoutingModule
        ],
        declarations: [_profil_page__WEBPACK_IMPORTED_MODULE_1__.ProfilPage, _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__.ClocheComponent]
    })
], ProfilPageModule);



/***/ }),

/***/ 9014:
/*!***************************************!*\
  !*** ./src/app/profil/profil.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilPage": () => (/* binding */ ProfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profil.page.html?ngResource */ 2090);
/* harmony import */ var _profil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profil.page.scss?ngResource */ 2540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ProfilPage = class ProfilPage {
    constructor() { }
    ngOnInit() {
        this.utilisateurencours = JSON.parse(localStorage.getItem('utilisateur'));
        console.log(this.utilisateurencours);
        if (this.utilisateurencours.image != null) {
            this.img = this.utilisateurencours.image;
        }
        // console.log(this.utilisateurencours.nom)
    }
};
ProfilPage.ctorParameters = () => [];
ProfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-profil',
        template: _profil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilPage);

// constructor() { }
// ngOnInit() {
// }


/***/ }),

/***/ 7993:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "#notift {\n  font-size: 11px;\n  border-radius: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 12px;\n  right: 0px;\n  height: 11px;\n  width: 11px;\n  background-color: #fff;\n}\n\n.iconCloche {\n  border-radius: 15px;\n  border: #ff7900 2px solid;\n}\n\n.iconCloche:hover {\n  border-radius: 15px;\n  background-color: #ff7900;\n  color: #fff;\n  font-size: 25px !important;\n}\n\n.iconCloche:hover #notift {\n  background-color: #ffffff;\n  color: #ff7900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb2NoZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUdKIiwiZmlsZSI6ImNsb2NoZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZnR7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgd2lkdGg6IDExcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uaWNvbkNsb2NoZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6ICNmZjc5MDAgMnB4IHNvbGlkO1xyXG59XHJcblxyXG4uaWNvbkNsb2NoZTpob3ZlcntcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgI25vdGlmdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI2ZmNzkwMDtcclxuICB9XHJcbn1cclxuLy8gLmJ0bntcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC5idG46aG92ZXJ7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbi8vICAgY29sb3I6ICNGRjc5MDAgIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgLmJ0biA+IGk6aG92ZXJ7XHJcbi8vICAgICBjb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuICAiXX0= */";

/***/ }),

/***/ 2540:
/*!****************************************************!*\
  !*** ./src/app/profil/profil.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: poppinsBlack;\n  src: url('Poppins-Black.ttf');\n}\n@font-face {\n  font-family: poppinsLight;\n  src: url('Poppins-Light.ttf');\n}\nion-content {\n  font-family: myfon;\n}\n.first_row {\n  background: #FFFFFF;\n  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  margin-bottom: 3%;\n  margin-right: 7%;\n}\n.second_row {\n  background: #FFFFFF;\n  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  margin-bottom: 5%;\n  margin-right: 7%;\n}\np {\n  font-weight: bold;\n  font-size: 22px;\n}\n.col_right {\n  margin-left: 5%;\n}\nlabel.form-label {\n  font-size: 14PX;\n  color: #FF7900;\n}\n.bi-toggle-on::before,\n.bi-toggle-off::before {\n  font-size: 35px;\n}\n.bi-toggle-on::before {\n  color: rgb(23, 150, 18);\n}\n.bi-toggle-off::before {\n  color: red;\n  margin-right: 12px;\n}\n.bi-toggle-off:hover,\n.bi-toggle-on:hover {\n  cursor: pointer;\n}\nlabel {\n  font-family: poppinsLight;\n  letter-spacing: 0.01em;\n}\n.gvNotifications {\n  font-family: poppinsBlack;\n  font-weight: bold;\n  font-size: 26px;\n}\n.icon_mail {\n  font-size: 14px;\n  margin-right: 50%;\n}\n.iconLabel {\n  margin-top: 10px;\n}\n.notification {\n  margin-bottom: 10px;\n  font-family: poppinsLight;\n  font-weight: bold;\n}\n.informerUser {\n  font-family: poppinsLight;\n  font-weight: 400;\n  letter-spacing: 0.01em;\n}\n#user {\n  clip-path: ellipse(50% 50%);\n  width: 100px;\n  height: 100px;\n  margin-left: 10%;\n  margin-bottom: 10%;\n}\n.container {\n  margin-left: 5%;\n  margin-right: 5%;\n}\ninput[type=text] {\n  font-family: poppinsLight;\n}\ninput#exampleInputNom {\n  border-radius: 15px;\n  border: 1px solid black;\n  width: 80%;\n  height: 35px;\n  background: #F8FAFC;\n  box-shadow: none;\n}\n.bouton {\n  background-color: #FF7900;\n  width: 135px;\n  border: 1px solid;\n  font-weight: bold;\n  margin-bottom: 10%;\n  border-radius: 15px;\n  letter-spacing: 0.03em;\n  color: white;\n}\n@media screen and (max-width: 600px) {\n  .bouton {\n    background-color: #FF7900;\n    width: auto;\n    border: none;\n    font-weight: bold;\n    margin-bottom: 10%;\n    border-radius: 15px;\n  }\n  input#exampleInputNom {\n    border-radius: 15px;\n    border: 1px solid black;\n    width: 100%;\n    height: 35px;\n    background: #F8FAFC;\n    box-shadow: none;\n  }\n  #user {\n    clip-path: ellipse(50% 50%);\n    width: 100px;\n    height: 100px;\n    margin-left: 30%;\n    margin-bottom: 10%;\n  }\n}\n.bouton:hover {\n  background-color: #ffffff;\n  border: #FF7900 1px solid !important;\n  color: #FF7900 !important;\n}\n.bbtn {\n  margin-right: 7% !important;\n}\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 26px;\n}\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\ninput:checked + .slider {\n  background-color: #118023;\n}\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,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I2V4YW1wbGVJbnB1dE5vbSAsI2V4YW1wbGVJbnB1dFJlc3BvbkVudGl0ZSwjZXhhbXBsZUlucHV0Tm9tRW50aXRle1xyXG4vLyAgICAgLy8gd2lkdGg6IDc0JTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuLy8gfVxyXG5cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnNCbGFjaztcclxuICAgIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnQvUG9wcGlucy1CbGFjay50dGZcIik7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnNMaWdodDtcclxuICAgIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnQvUG9wcGlucy1MaWdodC50dGZcIik7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIGZvbnQtZmFtaWx5OiBteWZvbjtcclxufVxyXG5cclxuLmZpcnN0X3JvdyB7XHJcblxyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA2cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3JTtcclxuXHJcbn1cclxuXHJcbi5zZWNvbmRfcm93IHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNyU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5jb2xfcmlnaHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMTUlO1xyXG59XHJcblxyXG5sYWJlbC5mb3JtLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRQWDtcclxuICAgIGNvbG9yOiAjRkY3OTAwO1xyXG59XHJcblxyXG4uYmktdG9nZ2xlLW9uOjpiZWZvcmUsXHJcbi5iaS10b2dnbGUtb2ZmOjpiZWZvcmUge1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcblxyXG4uYmktdG9nZ2xlLW9uOjpiZWZvcmUge1xyXG4gICAgY29sb3I6IHJnYigyMywgMTUwLCAxOCk7XHJcblxyXG59XHJcblxyXG4uYmktdG9nZ2xlLW9mZjo6YmVmb3JlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5iaS10b2dnbGUtb2ZmOmhvdmVyLFxyXG4uYmktdG9nZ2xlLW9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zTGlnaHQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG59XHJcblxyXG4uZ3ZOb3RpZmljYXRpb25zIHtcclxuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zQmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5cclxuLmljb25fbWFpbCB7XHJcblxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MCU7XHJcblxyXG5cclxufVxyXG5cclxuLmljb25MYWJlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogcG9wcGluc0xpZ2h0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbmZvcm1lclVzZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnNMaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG59XHJcblxyXG5cclxuXHJcbiN1c2VyIHtcclxuXHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjbGlwLXBhdGg6IGVsbGlwc2UoNTAlIDUwJSk7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBmb250LWZhbWlseTogcG9wcGluc0xpZ2h0O1xyXG5cclxufVxyXG5cclxuaW5wdXQjZXhhbXBsZUlucHV0Tm9tIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGQUZDO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmJvdXRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4gICAgd2lkdGg6IDEzNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xyXG4gICAgLmJvdXRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzkwMDtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlucHV0I2V4YW1wbGVJbnB1dE5vbSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0Y4RkFGQztcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICN1c2VyIHtcclxuXHJcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGNsaXAtcGF0aDogZWxsaXBzZSg1MCUgNTAlKTtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gLmNvbF9yaWdodCB7XHJcbiAgICAvLyAgICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIC8vICAgICAvLyBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbi5ib3V0b246aG92ZXIge1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6ICNGRjc5MDAgMXB4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLmJidG4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xyXG4uc3dpdGNoIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xyXG4uc3dpdGNoIGlucHV0IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxufVxyXG5cclxuLyogVGhlIHNsaWRlciAqL1xyXG4uc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgbGVmdDogNHB4O1xyXG4gICAgYm90dG9tOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkKy5zbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExODAyMztcclxufVxyXG5cclxuLy8gICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xyXG4vLyAgIH1cclxuXHJcbmlucHV0OmNoZWNrZWQrLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG59XHJcblxyXG5cclxuLyogUm91bmRlZCBzbGlkZXJzICovXHJcbi5zbGlkZXIucm91bmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcclxufVxyXG5cclxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59Il19 */";

/***/ }),

/***/ 9956:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\"\r\n    integrity=\"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==\"\r\n    crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n<!-- <div class=\"iconCloche\" (click)=\"OpenNotification($event)\">\r\n  <i class=\"fa-regular fa-bell\"></i><span>2</span>\r\n</div> -->\r\n<div class=\"col reporting\">\r\n  <button type=\"button\" class=\"btn buttonColor\"  class=\"iconCloche\" (click)=\"OpenNotification($event)\"><i class=\"fa-regular fa-bell\"></i><span id=\"notift\">{{this.notifTotal}}</span></button>\r\n</div>";

/***/ }),

/***/ 2090:
/*!****************************************************!*\
  !*** ./src/app/profil/profil.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Profil</ion-title>\r\n    <ion-button slot=\"end\" fill=\"clear\">\r\n      <app-cloche></app-cloche>\r\n\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <form>\r\n<div class=\"container\">\r\n\r\n\r\n<div class=\"row first_row\">\r\n\r\n\r\n<div class=\"col- col-sm- col-md-4 col-lg-2 col-xl-4 col-xxl-4  \">\r\n\r\n\r\n<div class=\"col\">\r\n\r\n  <img *ngIf=\"utilisateurencours.image!=null\" id=\"user\"src={{utilisateurencours.image}} alt=\"image de l'utilisateur\">\r\n  <img *ngIf=\"utilisateurencours.image==null\" id=\"user\"src=\"assets\\avatar.png\" alt=\"image de l'utilisateur\">\r\n\r\n</div>\r\n\r\n<div class=\"col\">\r\n\r\n  <div class=\"input mb-3\">\r\n    <label for=\"exampleInputNom\" class=\"form-label\">Nom*</label>\r\n    <input type=\"text\" value={{utilisateurencours.nom}} class=\"form-control\" id=\"exampleInputNom\">\r\n\r\n  </div>\r\n\r\n  <div class=\"input mb-3 form1\">\r\n    <label for=\"exampleInputNom\" class=\"form-label\">Prenom*</label>\r\n    <input type=\"text\" value={{utilisateurencours.prenom}} class=\"form-control\" id=\"exampleInputNom\">\r\n\r\n  </div>\r\n\r\n  <div class=\"input mb-3 form1\">\r\n    <label for=\"exampleInputNom\" class=\"form-label\">Nom de l'entité*</label>\r\n    <input type=\"text\" value={{utilisateurencours.monEntite}} class=\"form-control\" id=\"exampleInputNom\">\r\n\r\n  </div>\r\n\r\n  <div class=\"input mb-3 form1\">\r\n\r\n    <label for=\"exampleInputNom\" class=\"form-label\">Responsable de l'entité*</label>\r\n    <input type=\"text\" value=\"Hamadoun Kaou Diallo\" class=\"form-control\" id=\"exampleInputNom\">\r\n\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n<div class=\"col- col-sm- col-md-4 col-lg-2 col-xl-4 col-xxl-4 col_right\">\r\n  <p class=\"gvNotifications\">Gerer vos notifications</p>\r\n\r\n\r\n<!--\r\n  <div class=\"notification\">Activité créée\r\n    <div class=\"row\">\r\n      <div class=\"col \"><i class=\"bi bi-toggle-off\"></i>  <i class=\"bi bi-toggle-on\"></i>\r\n      </div>\r\n      <div class=\"col icon_mail\">par mail </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"notification\">Entité créée\r\n    <div class=\"row\">\r\n      <div class=\"col \"><i class=\"bi bi-toggle-off\"></i>  <i class=\"bi bi-toggle-on\"></i>\r\n      </div>\r\n      <div class=\"col icon_mail\">par mail </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"notification\">Activité modifiée\r\n    <div class=\"row\">\r\n      <div class=\"col \"><i class=\"bi bi-toggle-off\"></i>  <i class=\"bi bi-toggle-on\"></i>\r\n      </div>\r\n      <div class=\"col icon_mail\">par mail </div>\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n\r\n\r\n  <div class=\"notification\">Activité créée\r\n    <div class=\"row iconLabel\">\r\n\r\n      <div class=\"col\"> <label class=\"switch\">\r\n        <input type=\"checkbox\">\r\n        <span class=\"slider round\"></span>\r\n      </label>\r\n      </div>\r\n      <div class=\"col icon_mail\">par mail </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div></div>\r\n  <div></div>\r\n  <div></div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"col- col-sm- col-md-4 col-lg-4 col-xl-4 col-xxl-4\"></div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col m-2 informerUser\" >\r\n  Pour changer le mot de passe, tapez votre mot de passe actuel.\r\n\r\n</div>\r\n</div>\r\n\r\n\r\n<div class=\"row second_row\">\r\n\r\n\r\n  <div class=\"col- col-sm- col-md-4 col-lg-4 col-xl-4 col-xxl-4 ff_col\">\r\n        <div class=\"input mb-3\">\r\n            <label for=\"exampleInputNom\" class=\"form-label\">Mot de passe actuel</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"exampleInputNom\" >\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"col- col-sm- col-md-4 col-lg-4 col-xl-4 col-xxl-4\">\r\n\r\n    <div class=\"input mb-3\">\r\n      <label for=\"exampleInputNom\" class=\"form-label\">Nouveau mot de passe </label>\r\n      <input type=\"text\" class=\"form-control\" id=\"exampleInputNom\">\r\n</div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"col- col-sm- col-md-4 col-lg-4 col-xl-4 col-xxl-4\">\r\n\r\n    <div class=\"input mb-3\">\r\n      <label for=\"exampleInputNom\" class=\"form-label\">Confirmer mot de passe </label>\r\n      <input type=\"text\" class=\"form-control\" id=\"exampleInputNom\">\r\n</div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n<div class=\"row  \">\r\n\r\n<div class=\"col-lg-12 col-12 \">\r\n  <div class=\" d-grid d-md-flex gap-2 justify-content-md-end bbtn\">\r\n <button type=\"button\" class=\"btn bouton\">Annuler</button>\r\n<button type=\"button\" class=\"btn bouton\">Enregistrer</button>\r\n  </div>\r\n  <!-- <button class=\"btn btn-primary bouton\" type=\"reset\"> Annuler</button>\r\n  <button class=\"btn btn-primary bouton\" type=\"submit\">Enregistrer</button> -->\r\n</div>\r\n</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</form>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_profil_profil_module_ts.js.map