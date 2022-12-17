"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_forgetpassword1_forgetpassword1_module_ts"],{

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

/***/ 2948:
/*!*******************************************************************!*\
  !*** ./src/app/forgetpassword1/forgetpassword1-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Forgetpassword1PageRoutingModule": () => (/* binding */ Forgetpassword1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _forgetpassword1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgetpassword1.page */ 7050);




const routes = [
    {
        path: '',
        component: _forgetpassword1_page__WEBPACK_IMPORTED_MODULE_0__.Forgetpassword1Page
    }
];
let Forgetpassword1PageRoutingModule = class Forgetpassword1PageRoutingModule {
};
Forgetpassword1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Forgetpassword1PageRoutingModule);



/***/ }),

/***/ 4115:
/*!***********************************************************!*\
  !*** ./src/app/forgetpassword1/forgetpassword1.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Forgetpassword1PageModule": () => (/* binding */ Forgetpassword1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _forgetpassword1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgetpassword1-routing.module */ 2948);
/* harmony import */ var _forgetpassword1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgetpassword1.page */ 7050);
/* harmony import */ var _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cloche/cloche.component */ 7907);








let Forgetpassword1PageModule = class Forgetpassword1PageModule {
};
Forgetpassword1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _forgetpassword1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Forgetpassword1PageRoutingModule
        ],
        declarations: [_forgetpassword1_page__WEBPACK_IMPORTED_MODULE_1__.Forgetpassword1Page, _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__.ClocheComponent]
    })
], Forgetpassword1PageModule);



/***/ }),

/***/ 7050:
/*!*********************************************************!*\
  !*** ./src/app/forgetpassword1/forgetpassword1.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Forgetpassword1Page": () => (/* binding */ Forgetpassword1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forgetpassword1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgetpassword1.page.html?ngResource */ 8664);
/* harmony import */ var _forgetpassword1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgetpassword1.page.scss?ngResource */ 1727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_ForgetPass_forget_password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ForgetPass/forget-password.service */ 2297);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);







let Forgetpassword1Page = class Forgetpassword1Page {
    constructor(emailService, router) {
        this.emailService = emailService;
        this.router = router;
    }
    ngOnInit() {
    }
    sendMail() {
        this.error = false;
        this.emailService.SendEmail(this.email).subscribe(retour => {
            console.log(retour);
            if (retour.message == 'ok') {
                this.presentAlert();
            }
            else if (retour.message == "errorUser") {
                this.error = true;
                this.erreur = retour.data;
            }
            else {
                this.error = true;
                this.erreur = "Erreur du serveur !";
            }
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                title: 'Email envoyé !',
                text: 'Veuillez verifiez votre boite de reception !!',
                icon: 'success',
                heightAuto: false,
                confirmButtonColor: "#FF7900"
            });
        });
    }
};
Forgetpassword1Page.ctorParameters = () => [
    { type: _services_ForgetPass_forget_password_service__WEBPACK_IMPORTED_MODULE_2__.ForgetPasswordService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
Forgetpassword1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forgetpassword1',
        template: _forgetpassword1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgetpassword1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Forgetpassword1Page);



/***/ }),

/***/ 7993:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "#notift {\n  font-size: 11px;\n  border-radius: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 12px;\n  right: 0px;\n  height: 11px;\n  width: 11px;\n  background-color: #fff;\n}\n\n.iconCloche {\n  border-radius: 15px;\n  border: #ff7900 2px solid;\n}\n\n.iconCloche:hover {\n  border-radius: 15px;\n  background-color: #ff7900;\n  color: #fff;\n  font-size: 25px !important;\n}\n\n.iconCloche:hover #notift {\n  background-color: #ffffff;\n  color: #ff7900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb2NoZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUdKIiwiZmlsZSI6ImNsb2NoZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZnR7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgd2lkdGg6IDExcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uaWNvbkNsb2NoZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6ICNmZjc5MDAgMnB4IHNvbGlkO1xyXG59XHJcblxyXG4uaWNvbkNsb2NoZTpob3ZlcntcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgI25vdGlmdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI2ZmNzkwMDtcclxuICB9XHJcbn1cclxuLy8gLmJ0bntcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC5idG46aG92ZXJ7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbi8vICAgY29sb3I6ICNGRjc5MDAgIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgLmJ0biA+IGk6aG92ZXJ7XHJcbi8vICAgICBjb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuICAiXX0= */";

/***/ }),

/***/ 1727:
/*!**********************************************************************!*\
  !*** ./src/app/forgetpassword1/forgetpassword1.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: myfon;\n  src: url('Poppins-Black.ttf');\n}\n@font-face {\n  font-family: myfon2;\n  src: url('Poppins-Light.ttf');\n}\ninput#InputEmail, input#InputMdp, input#InputCmdp {\n  border-radius: 15px;\n  border: 1px solid black;\n  background: #F8FAFC;\n  box-shadow: none;\n}\n.first_row {\n  background: #FFFFFF;\n  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  padding-top: 30px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.container {\n  background-color: #F2EDED;\n}\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  text-align: center;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: myfon;\n}\np.texte {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  text-align: center;\n  font-size: 13px;\n  font-family: myfon2 !important;\n}\n.gauche {\n  margin-bottom: 15%;\n  margin-top: 10%;\n}\nlabel.form-label {\n  font-size: 14PX;\n  color: #FF7900;\n  font-family: myfon2;\n}\n.bouton {\n  background-color: #FF7900;\n  width: 135px;\n  border: none;\n  font-weight: bold;\n  margin-bottom: 10%;\n  border-radius: 15px;\n  letter-spacing: 0.03em;\n  font-family: myfon2;\n}\n.image {\n  display: flex;\n  max-width: 100%;\n  border: 0;\n  margin-top: 15%;\n}\n.imgsmall {\n  display: none;\n}\n@media only screen and (max-width: 400px) {\n  .imgsmall {\n    display: flex !important;\n    margin-bottom: 5%;\n    justify-content: center;\n  }\n  .header img {\n    display: flex;\n    margin: auto !important;\n    width: 100px !important;\n  }\n  .image {\n    display: none;\n  }\n}\n#erreur {\n  color: white;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  background-color: rgba(151, 45, 45, 0.5607843137);\n  border-radius: 5px;\n  text-align: center;\n  margin-bottom: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldHBhc3N3b3JkMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLDZCQUFBO0FBQ0o7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7QUFBSjtBQU1BO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUdBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVNBO0VBQ0ksbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTko7QUFXQTtFQUNJLHlCQUFBO0FBUko7QUFXQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFSSjtBQVVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFQSjtBQVNBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBTko7QUFRQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQVFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLHNCQUFBO0VBQ0EsbUJBQUE7QUFOSjtBQVVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQVBKO0FBV0E7RUFDSSxhQUFBO0FBUko7QUFVQTtFQUVJO0lBQ0ksd0JBQUE7SUFDQSxpQkFBQTtJQUNBLHVCQUFBO0VBUk47RUFVSTtJQUNFLGFBQUE7SUFDQSx1QkFBQTtJQUNBLHVCQUFBO0VBUk47RUFVRTtJQUNJLGFBQUE7RUFSTjtBQUNGO0FBVUE7RUFFSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBVEoiLCJmaWxlIjoiZm9yZ2V0cGFzc3dvcmQxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IG15Zm9uO1xyXG4gICAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udC9Qb3BwaW5zLUJsYWNrLnR0ZlwiKTtcclxuICB9XHJcblxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IG15Zm9uMjtcclxuICAgIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnQvUG9wcGlucy1MaWdodC50dGZcIik7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuaW5wdXQjSW5wdXRFbWFpbCxpbnB1dCNJbnB1dE1kcCxpbnB1dCNJbnB1dENtZHAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgLy8gd2lkdGg6IDgwJTtcclxuICAgIC8vIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQ6ICNGOEZBRkM7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uZmlyc3Rfcm93e1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA2cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuXHJcblxyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiA3JTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRURFRDtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1mYW1pbHk6IG15Zm9uO1xyXG59XHJcbnAudGV4dGV7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiBteWZvbjIgIWltcG9ydGFudDtcclxufVxyXG4uZ2F1Y2hle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTUlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbmxhYmVsLmZvcm0tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNFBYO1xyXG4gICAgY29sb3I6ICNGRjc5MDA7XHJcbiAgICBmb250LWZhbWlseTogbXlmb24yO1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmJvdXRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjc5MDA7XHJcbiAgICB3aWR0aDogMTM1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBteWZvbjI7XHJcblxyXG5cclxufVxyXG4uaW1hZ2V7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG5cclxufVxyXG5cclxuLmltZ3NtYWxse1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcblxyXG4gICAgLmltZ3NtYWxse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuaGVhZGVyIGltZ3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAuaW1hZ2V7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG4jZXJyZXVye1xyXG5cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NzJkMmQ4ZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 9956:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\"\r\n    integrity=\"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==\"\r\n    crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n<!-- <div class=\"iconCloche\" (click)=\"OpenNotification($event)\">\r\n  <i class=\"fa-regular fa-bell\"></i><span>2</span>\r\n</div> -->\r\n<div class=\"col reporting\">\r\n  <button type=\"button\" class=\"btn buttonColor\"  class=\"iconCloche\" (click)=\"OpenNotification($event)\"><i class=\"fa-regular fa-bell\"></i><span id=\"notift\">{{this.notifTotal}}</span></button>\r\n</div>";

/***/ }),

/***/ 8664:
/*!**********************************************************************!*\
  !*** ./src/app/forgetpassword1/forgetpassword1.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>forgotpassword</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n\r\n\r\n    <div class=\"row \">\r\n      <div class=\"col- col-lg-6\" >\r\n        <div class=\"image\">\r\n          <img  src=\"../../assets/icon/Orange.png\" alt=\"logoooo\">\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n      <div class=\"col col-lg-4  gauche\">\r\n\r\n        <div class=\"row imgsmall\">\r\n          <img src=\"../../assets/icon/Orange.png\" alt=\"logo\">\r\n        </div>\r\n        <div class=\"row\">\r\n          <p>Mot de passe oublié</p>\r\n        </div>\r\n\r\n\r\n         <div class=\"row first_row \">\r\n\r\n            <div class=\"input mb-3\">\r\n              <p class=\"texte\">Veuillez renseigner votre adresse email </p>\r\n            </div>\r\n\r\n            <ion-label id=\"erreur\" *ngIf=\"error\">{{erreur}}</ion-label>\r\n\r\n            <div class=\"input mb-3 form1\">\r\n              <label for=\"exampleInputNom\" class=\"form-label\">Email*</label>\r\n              <input [(ngModel)]=\"email\" name=\"email\" type=\"mail\" class=\"form-control\" id=\"InputMdp\">\r\n\r\n            </div>\r\n\r\n            <!-- <div class=\"input mb-3 form1\">\r\n              <label for=\"exampleInputNom\" class=\"form-label\">Numéro de téléphone*</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"InputCmdp\">\r\n\r\n            </div> -->\r\n            <div class=\"row  \">\r\n\r\n              <div class=\"col-lg-12 col-12 \">\r\n\r\n               <button type=\"button\" class=\"btn btn-primary  bouton\" (click)=\"sendMail()\">Valider</button>\r\n\r\n        </div>\r\n            </div>\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_forgetpassword1_forgetpassword1_module_ts.js.map