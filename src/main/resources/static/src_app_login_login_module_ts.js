"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 3947);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 3947);
/* harmony import */ var _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utilisateur/utilisateur.service */ 4996);







let LoginPage = class LoginPage {
    /////
    constructor(utilisateurService, router, spinner) {
        this.utilisateurService = utilisateurService;
        this.router = router;
        this.spinner = spinner;
    }
    logForm() {
        this.spinner.show();
        try {
            this.error = false;
            this.erreur = "";
            this.utilisateurService.login(this.login, this.password).subscribe(data => {
                //on vas recupere le message de retour et voir si tout ses bien passe
                if (data.message == "ok") {
                    //enregistrement de l'utilisateur dans le local storage
                    localStorage.setItem('utilisateur', JSON.stringify(data.data));
                    // if(data.data.role.libellerole=="ADMIN"){
                    //rediriger vers la page admin
                    this.router.navigate(['/dashboard']);
                    this.spinner.hide();
                    // }else if(data.data.role.libellerole=="RESPONSABLE"){
                    //rediriger vers la page responsable
                    // }else{
                    //rediriger vers la page du simple utilisateur
                    // }
                }
                else if (data.message == "error") {
                    this.error = true;
                    this.erreur = data.data;
                    this.spinner.hide();
                }
                else {
                    this.error = true;
                    this.erreur = "Erreur liée au serveur !";
                    this.spinner.hide();
                }
            });
        }
        catch (error) {
            this.error = true;
            this.erreur = "Erreur liée au serveur !";
            this.spinner.hide();
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_2__.UtilisateurService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 5921:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 2831);

function takeUntil(notifier) {
  return source => source.lift(new TakeUntilOperator(notifier));
}

class TakeUntilOperator {
  constructor(notifier) {
    this.notifier = notifier;
  }

  call(subscriber, source) {
    const takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
    const notifierSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(takeUntilSubscriber));

    if (notifierSubscription && !takeUntilSubscriber.seenValue) {
      takeUntilSubscriber.add(notifierSubscription);
      return source.subscribe(takeUntilSubscriber);
    }

    return takeUntilSubscriber;
  }

}

class TakeUntilSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
  constructor(destination) {
    super(destination);
    this.seenValue = false;
  }

  notifyNext() {
    this.seenValue = true;
    this.complete();
  }

  notifyComplete() {}

}

/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  position: absolute;\n}\n\n.imgsmall {\n  display: none;\n}\n\n.lienPass {\n  color: rgb(53, 32, 175);\n  display: flex;\n  font-size: 15px;\n  font-family: system-ui;\n  text-decoration: underline;\n  justify-content: center;\n  margin-top: 2%;\n}\n\n@media only screen and (max-width: 800px) {\n  .header {\n    display: flex;\n    margin: auto;\n  }\n  .header p {\n    padding-top: 50px;\n    font-size: 3rem;\n    text-align: center;\n    font-weight: 900px;\n    border-bottom: 4px solid orangered !important;\n    color: #FFF;\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n  .imgsmall {\n    display: flex !important;\n    margin-bottom: 5%;\n    justify-content: center;\n  }\n  .header img {\n    display: flex;\n    margin: auto !important;\n    width: 100px !important;\n  }\n  .image {\n    display: none;\n  }\n  .monform {\n    justify-content: center;\n    width: 100% !important;\n    margin: 0 !important;\n    height: 100%;\n    border-top-right-radius: 0px !important;\n    border-top-left-radius: 0px !important;\n    border-radius: 35px;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n  }\n  form {\n    width: 100% !important;\n    padding: 5% 15% !important;\n  }\n  input {\n    height: 40px !important;\n  }\n  #btnn {\n    height: 40px !important;\n    font-size: 1rem !important;\n    font-weight: bold;\n    color: #FFF;\n  }\n  .monform > p > b {\n    font-size: 25px !important;\n  }\n}\n\nform {\n  padding: 16px;\n  padding: 15% 10%;\n  margin: 0 auto;\n}\n\ninput {\n  height: 56px;\n}\n\n.header {\n  display: flex;\n  justify-content: space-around;\n  height: 100%;\n  position: relative;\n  background-size: cover;\n  padding: top 0;\n}\n\n.header p {\n  padding-top: 20%;\n  font-size: 3rem;\n  text-align: center;\n  font-weight: 900px;\n  border-bottom: 4px solid orangered;\n  color: #FFF;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n#btnn {\n  color: rgb(255, 255, 255);\n  background-color: orangered;\n  margin: auto;\n  width: 100%;\n  margin-top: 5px;\n  height: 46px;\n  font-weight: bold;\n  font-size: 1.5rem;\n}\n\n.header img {\n  position: absolute;\n  margin-top: 10%;\n  width: 500px;\n  margin-left: -171px;\n}\n\n.monform {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('animation.gif');\n  background-repeat: no-repeat;\n  padding-bottom: 0;\n  margin-right: -100px;\n  width: 60vh;\n  margin-top: 60px;\n  background-size: cover;\n  border-radius: 35px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n#erreur {\n  color: white;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  background-color: rgba(151, 45, 45, 0.5607843137);\n  border-radius: 5px;\n  text-align: center;\n  margin-bottom: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxhQUFBO0FBRUo7O0FBRUU7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0U7SUFDRSxhQUFBO0lBR0EsWUFBQTtFQURKO0VBS0U7SUFDRSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsNkNBQUE7SUFDQSxXQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtFQUhKO0VBT0U7SUFDRSx3QkFBQTtJQUNBLGlCQUFBO0lBQ0EsdUJBQUE7RUFMSjtFQU9FO0lBQ0UsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsdUJBQUE7RUFMSjtFQU9FO0lBQ0MsYUFBQTtFQUxIO0VBT0U7SUFDRSx1QkFBQTtJQUVBLHNCQUFBO0lBQ0Esb0JBQUE7SUFDQSxZQUFBO0lBRUEsdUNBQUE7SUFDQSxzQ0FBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7RUFQSjtFQVVFO0lBQ0Usc0JBQUE7SUFDQSwwQkFBQTtFQVJKO0VBWUU7SUFDRSx1QkFBQTtFQVZKO0VBYUU7SUFDRSx1QkFBQTtJQUNBLDBCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0VBWEo7RUFjRTtJQUNFLDBCQUFBO0VBWko7QUFDRjs7QUFnQkU7RUFFRSxhQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBZk47O0FBa0JFO0VBQ0UsWUFBQTtBQWZKOztBQW1CRTtFQUNFLGFBQUE7RUFFQSw2QkFBQTtFQUtBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQXJCSjs7QUErQkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBNUJKOztBQStCRTtFQUNNLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQTVCUjs7QUE4QkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUEzQko7O0FBOEJFO0VBQ0csK0ZBQUE7RUFFRCw0QkFBQTtFQUNBLGlCQUFBO0VBRUEsb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtBQTdCSjs7QUFpQ0U7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBL0JKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICAuaW1nc21hbGx7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAkcnVsZXI6IDE2cHg7XHJcblxyXG4gIC5saWVuUGFzc3tcclxuICAgIGNvbG9yOiByZ2IoNTMsIDMyLCAxNzUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIFxyXG4gICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5oZWFkZXIgcHtcclxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXdlaWdodDogOTAwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBvcmFuZ2VyZWQgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuaW1nc21hbGx7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlciBpbWd7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pbWFnZXtcclxuICAgICBkaXNwbGF5Om5vbmVcclxuICAgIH1cclxuICAgIC5tb25mb3Jte1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8vICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZm9ybXtcclxuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogNSUgMTUlICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgaW5wdXR7XHJcbiAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgI2J0bm57XHJcbiAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjRkZGO1xyXG4gIFxyXG4gICAgfVxyXG4gICAgLm1vbmZvcm0gPiBwID5ie1xyXG4gICAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgXHJcbiAgfVxyXG4gICAgXHJcbiAgZm9ybSB7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIHBhZGRpbmc6IDE1JSAxMCU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICBpbnB1dHtcclxuICAgIGhlaWdodDogNTZweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgLy8gYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIC8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIC8vICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLy8gIGhlaWdodDogODB2aDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwYWRkaW5nOiB0b3AgMDtcclxuICBcclxuICAgfVxyXG4gIC8vICAudGVzdHtcclxuICAvLyAgIHdpZHRoOiAtNTAlO1xyXG4gIC8vIH1cclxuICAvLyAuaW1hZ2V7XHJcbiAgLy8gICB3aWR0aDogLTQwJTtcclxuICAvLyB9XHJcbiAgXHJcbiAgLmhlYWRlciBwe1xyXG4gICAgcGFkZGluZy10b3A6IDIwJTtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBvcmFuZ2VyZWQ7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JSA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlIDtcclxuICAgIFxyXG4gIH1cclxuICAjYnRubntcclxuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbiAgLmhlYWRlciBpbWd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE3MXB4O1xyXG4gIH1cclxuICBcclxuICAubW9uZm9ybXtcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2IoMCAwIDAgLyA2MCUpLCByZ2IoMCAwIDAgLyA2MCUpKSxcclxuICAgICAgdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9hbmltYXRpb24uZ2lmXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAvL2hlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbi1yaWdodDogLTEwMHB4O1xyXG4gICAgd2lkdGg6IDYwdmg7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAjZXJyZXVye1xyXG5cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NzJkMmQ4ZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIH1cclxuICBcclxuICBcclxuIl19 */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Log In</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n<ngx-spinner bdColor = \"rgba(0, 0, 0, 0.8)\" size = \"medium\" color = \"#fff\" type = \"ball-scale-multiple\" [fullScreen] = \"true\"><p style=\"color: white\" > Veuillez patientez ... </p></ngx-spinner>\r\n<ion-content>\r\n  <div class=\"header\" >\r\n    <div class=\"image\">\r\n      <img  src=\"../../assets/icon/Orange.png\" alt=\"logoooo\">\r\n    </div>\r\n\r\n    <div class=\"monform\">\r\n      <div class=\"imgsmall\">\r\n        <img src=\"../../assets/icon/Orange.png\" alt=\"logo\">\r\n      </div>\r\n      <p> <b >Connexion</b></p>\r\n      <form id=\"login\" #f=\"ngForm\" (ngSubmit)=\"logForm()\">\r\n        <ion-label id=\"erreur\" *ngIf=\"error\">{{erreur}}</ion-label>\r\n        <div class=\"mb-3\">\r\n          <!-- <label for=\"exampleInputEmail1\" class=\"form-label\">Entrer votre nom d'utilisateur </label> -->\r\n          <ion-input type=\"email\" class=\"form-control\" [(ngModel)]=\"login\" name=\"login\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Pseudo\" ngModel required></ion-input>\r\n        </div>\r\n        <div class=\"mb-3\">\r\n          <!-- <label for=\"exampleInputPassword1\" class=\"form-label\">Entrer votre Mot de passe</label> -->\r\n          <ion-input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" id=\"exampleInputPassword1\" placeholder=\"Mot de passe\" ngModel required></ion-input>\r\n        </div>\r\n        <button type=\"submit\" id=\"btnn\" class=\"btn\" [disabled]=\"f.form.invalid\" style=\"background-color: #FF7900;\">Se connecter</button>\r\n\r\n        <a class=\"lienPass\" routerLink=\"/forgotpassword1\"  style=\"color: #FFF;\">Mot de passe oublié !</a>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n\r\n";

/***/ }),

/***/ 3947:
/*!***********************************************************!*\
  !*** ./node_modules/ngx-spinner/fesm2015/ngx-spinner.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULTS": () => (/* binding */ DEFAULTS),
/* harmony export */   "LOADERS": () => (/* binding */ LOADERS),
/* harmony export */   "NgxSpinner": () => (/* binding */ NgxSpinner),
/* harmony export */   "NgxSpinnerComponent": () => (/* binding */ NgxSpinnerComponent),
/* harmony export */   "NgxSpinnerModule": () => (/* binding */ NgxSpinnerModule),
/* harmony export */   "NgxSpinnerService": () => (/* binding */ NgxSpinnerService),
/* harmony export */   "PRIMARY_SPINNER": () => (/* binding */ PRIMARY_SPINNER)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);








const _c0 = ["overlay"];

function NgxSpinnerComponent_div_0_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
  }
}

function NgxSpinnerComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxSpinnerComponent_div_0_div_2_div_1_Template, 1, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.spinner.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r2.spinner.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.spinner.divArray);
  }
}

function NgxSpinnerComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safeHtml");
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r3.template), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}

function NgxSpinnerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxSpinnerComponent_div_0_div_2_Template, 2, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxSpinnerComponent_div_0_div_3_Template, 2, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r0.spinner.bdColor)("z-index", ctx_r0.spinner.zIndex)("position", ctx_r0.spinner.fullScreen ? "fixed" : "absolute");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@.disabled", ctx_r0.disableAnimation)("@fadeIn", "in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("z-index", ctx_r0.spinner.zIndex);
  }
}

const _c1 = ["*"];
const LOADERS = {
  "ball-8bits": 16,
  "ball-atom": 4,
  "ball-beat": 3,
  "ball-circus": 5,
  "ball-climbing-dot": 4,
  "ball-clip-rotate": 1,
  "ball-clip-rotate-multiple": 2,
  "ball-clip-rotate-pulse": 2,
  "ball-elastic-dots": 5,
  "ball-fall": 3,
  "ball-fussion": 4,
  "ball-grid-beat": 9,
  "ball-grid-pulse": 9,
  "ball-newton-cradle": 4,
  "ball-pulse": 3,
  "ball-pulse-rise": 5,
  "ball-pulse-sync": 3,
  "ball-rotate": 1,
  "ball-running-dots": 5,
  "ball-scale": 1,
  "ball-scale-multiple": 3,
  "ball-scale-pulse": 2,
  "ball-scale-ripple": 1,
  "ball-scale-ripple-multiple": 3,
  "ball-spin": 8,
  "ball-spin-clockwise": 8,
  "ball-spin-clockwise-fade": 8,
  "ball-spin-clockwise-fade-rotating": 8,
  "ball-spin-fade": 8,
  "ball-spin-fade-rotating": 8,
  "ball-spin-rotate": 2,
  "ball-square-clockwise-spin": 8,
  "ball-square-spin": 8,
  "ball-triangle-path": 3,
  "ball-zig-zag": 2,
  "ball-zig-zag-deflect": 2,
  cog: 1,
  "cube-transition": 2,
  fire: 3,
  "line-scale": 5,
  "line-scale-party": 5,
  "line-scale-pulse-out": 5,
  "line-scale-pulse-out-rapid": 5,
  "line-spin-clockwise-fade": 8,
  "line-spin-clockwise-fade-rotating": 8,
  "line-spin-fade": 8,
  "line-spin-fade-rotating": 8,
  pacman: 6,
  "square-jelly-box": 2,
  "square-loader": 1,
  "square-spin": 1,
  timer: 1,
  "triangle-skew-spin": 1
};
const DEFAULTS = {
  BD_COLOR: "rgba(51,51,51,0.8)",
  SPINNER_COLOR: "#fff",
  Z_INDEX: 99999
};
const PRIMARY_SPINNER = "primary";

class NgxSpinner {
  constructor(init) {
    Object.assign(this, init);
  }

  static create(init) {
    if ((init === null || init === void 0 ? void 0 : init.type) == null || init.type.length === 0) {
      console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`);
    }

    return new NgxSpinner(init);
  }

}

class NgxSpinnerService {
  /**
   * Creates an instance of NgxSpinnerService.
   * @memberof NgxSpinnerService
   */
  constructor() {
    /**
     * Spinner observable
     *
     * @memberof NgxSpinnerService
     */
    // private spinnerObservable = new ReplaySubject<NgxSpinner>(1);
    this.spinnerObservable = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
  }
  /**
   * Get subscription of desired spinner
   * @memberof NgxSpinnerService
   **/


  getSpinner(name) {
    return this.spinnerObservable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(x => x && x.name === name));
  }
  /**
   * To show spinner
   *
   * @memberof NgxSpinnerService
   */


  show(name = PRIMARY_SPINNER, spinner) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        if (spinner && Object.keys(spinner).length) {
          spinner["name"] = name;
          this.spinnerObservable.next(new NgxSpinner(Object.assign(Object.assign({}, spinner), {
            show: true
          })));
          resolve(true);
        } else {
          this.spinnerObservable.next(new NgxSpinner({
            name,
            show: true
          }));
          resolve(true);
        }
      }, 10);
    });
  }
  /**
   * To hide spinner
   *
   * @memberof NgxSpinnerService
   */


  hide(name = PRIMARY_SPINNER, debounce = 10) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        this.spinnerObservable.next(new NgxSpinner({
          name,
          show: false
        }));
        resolve(true);
      }, debounce);
    });
  }

}

NgxSpinnerService.ɵfac = function NgxSpinnerService_Factory(t) {
  return new (t || NgxSpinnerService)();
};

NgxSpinnerService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgxSpinnerService,
  factory: NgxSpinnerService.ɵfac,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSpinnerService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function () {
    return [];
  }, null);
})();

const NGX_SPINNER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("NGX_SPINNER_CONFIG");

class SafeHtmlPipe {
  constructor(_sanitizer) {
    this._sanitizer = _sanitizer;
  }

  transform(v) {
    if (v) {
      return this._sanitizer.bypassSecurityTrustHtml(v);
    }
  }

}

SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
  return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer, 16));
};

SafeHtmlPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "safeHtml",
  type: SafeHtmlPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: "safeHtml"
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer
    }];
  }, null);
})();

class NgxSpinnerComponent {
  /**
   * Creates an instance of NgxSpinnerComponent.
   *
   * @memberof NgxSpinnerComponent
   */
  constructor(spinnerService, changeDetector, elementRef, globalConfig) {
    this.spinnerService = spinnerService;
    this.changeDetector = changeDetector;
    this.elementRef = elementRef;
    this.globalConfig = globalConfig;
    /**
     * To enable/disable animation
     *
     * @type {boolean}
     * @memberof NgxSpinnerComponent
     */

    this.disableAnimation = false;
    /**
     * Spinner Object
     *
     * @memberof NgxSpinnerComponent
     */

    this.spinner = new NgxSpinner();
    /**
     * Unsubscribe from spinner's observable
     *
     * @memberof NgxSpinnerComponent
     **/

    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /**
     * To set default ngx-spinner options
     *
     * @memberof NgxSpinnerComponent
     */

    this.setDefaultOptions = () => {
      var _a, _b;

      const {
        type
      } = (_a = this.globalConfig) !== null && _a !== void 0 ? _a : {};
      this.spinner = NgxSpinner.create({
        name: this.name,
        bdColor: this.bdColor,
        size: this.size,
        color: this.color,
        type: (_b = this.type) !== null && _b !== void 0 ? _b : type,
        fullScreen: this.fullScreen,
        divArray: this.divArray,
        divCount: this.divCount,
        show: this.show,
        zIndex: this.zIndex,
        template: this.template,
        showSpinner: this.showSpinner
      });
    };

    this.bdColor = DEFAULTS.BD_COLOR;
    this.zIndex = DEFAULTS.Z_INDEX;
    this.color = DEFAULTS.SPINNER_COLOR;
    this.size = "large";
    this.fullScreen = true;
    this.name = PRIMARY_SPINNER;
    this.template = null;
    this.showSpinner = false;
    this.divArray = [];
    this.divCount = 0;
    this.show = false;
  }

  handleKeyboardEvent(event) {
    if (this.spinnerDOM && this.spinnerDOM.nativeElement) {
      if (this.fullScreen || !this.fullScreen && this.isSpinnerZone(event.target)) {
        event.returnValue = false;
        event.preventDefault();
      }
    }
  }

  initObservable() {
    this.spinnerService.getSpinner(this.name).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.ngUnsubscribe)).subscribe(spinner => {
      this.setDefaultOptions();
      Object.assign(this.spinner, spinner);

      if (spinner.show) {
        this.onInputChange();
      }

      this.changeDetector.detectChanges();
    });
  }
  /**
   * Initialization method
   *
   * @memberof NgxSpinnerComponent
   */


  ngOnInit() {
    this.setDefaultOptions();
    this.initObservable();
  }
  /**
   * To check event triggers inside the Spinner Zone
   *
   * @param {*} element
   * @returns {boolean}
   * @memberof NgxSpinnerComponent
   */


  isSpinnerZone(element) {
    if (element === this.elementRef.nativeElement.parentElement) {
      return true;
    }

    return element.parentNode && this.isSpinnerZone(element.parentNode);
  }
  /**
   * On changes event for input variables
   *
   * @memberof NgxSpinnerComponent
   */


  ngOnChanges(changes) {
    for (const propName in changes) {
      if (propName) {
        const changedProp = changes[propName];

        if (changedProp.isFirstChange()) {
          return;
        } else if (typeof changedProp.currentValue !== "undefined" && changedProp.currentValue !== changedProp.previousValue) {
          if (changedProp.currentValue !== "") {
            this.spinner[propName] = changedProp.currentValue;

            if (propName === "showSpinner") {
              if (changedProp.currentValue) {
                this.spinnerService.show(this.spinner.name, this.spinner);
              } else {
                this.spinnerService.hide(this.spinner.name);
              }
            }

            if (propName === "name") {
              this.initObservable();
            }
          }
        }
      }
    }
  }
  /**
   * To get class for spinner
   *
   * @memberof NgxSpinnerComponent
   */


  getClass(type, size) {
    this.spinner.divCount = LOADERS[type];
    this.spinner.divArray = Array(this.spinner.divCount).fill(0).map((_, i) => i);
    let sizeClass = "";

    switch (size.toLowerCase()) {
      case "small":
        sizeClass = "la-sm";
        break;

      case "medium":
        sizeClass = "la-2x";
        break;

      case "large":
        sizeClass = "la-3x";
        break;

      default:
        break;
    }

    return "la-" + type + " " + sizeClass;
  }
  /**
   * Check if input variables have changed
   *
   * @memberof NgxSpinnerComponent
   */


  onInputChange() {
    this.spinner.class = this.getClass(this.spinner.type, this.spinner.size);
  }
  /**
   * Component destroy event
   *
   * @memberof NgxSpinnerComponent
   */


  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

NgxSpinnerComponent.ɵfac = function NgxSpinnerComponent_Factory(t) {
  return new (t || NgxSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NGX_SPINNER_CONFIG, 8));
};

NgxSpinnerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxSpinnerComponent,
  selectors: [["ngx-spinner"]],
  viewQuery: function NgxSpinnerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.spinnerDOM = _t.first);
    }
  },
  hostBindings: function NgxSpinnerComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgxSpinnerComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyboardEvent($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    bdColor: "bdColor",
    size: "size",
    color: "color",
    type: "type",
    fullScreen: "fullScreen",
    name: "name",
    zIndex: "zIndex",
    template: "template",
    showSpinner: "showSpinner",
    disableAnimation: "disableAnimation"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 1,
  consts: [["class", "ngx-spinner-overlay", 3, "background-color", "z-index", "position", 4, "ngIf"], [1, "ngx-spinner-overlay"], ["overlay", ""], [3, "class", "color", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [1, "loading-text"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]],
  template: function NgxSpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxSpinnerComponent_div_0_Template, 6, 12, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner.show);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, SafeHtmlPipe],
  styles: [".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)("fadeIn", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)("in", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
      opacity: 1
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(300)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(":leave", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(200, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
      opacity: 0
    })))])]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSpinnerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: "ngx-spinner",
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)("fadeIn", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)("in", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 1
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(300)]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(":leave", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)(200, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        opacity: 0
      })))])],
      template: "<div\n  [@.disabled]=\"disableAnimation\"\n  [@fadeIn]=\"'in'\"\n  *ngIf=\"spinner.show\"\n  class=\"ngx-spinner-overlay\"\n  [style.background-color]=\"spinner.bdColor\"\n  [style.z-index]=\"spinner.zIndex\"\n  [style.position]=\"spinner.fullScreen ? 'fixed' : 'absolute'\"\n  #overlay\n>\n  <div *ngIf=\"!template\" [class]=\"spinner.class\" [style.color]=\"spinner.color\">\n    <div *ngFor=\"let index of spinner.divArray\"></div>\n  </div>\n  <div *ngIf=\"template\" [innerHTML]=\"template | safeHtml\"></div>\n  <div class=\"loading-text\" [style.z-index]=\"spinner.zIndex\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
      styles: [".ngx-spinner-overlay{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay>div:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}\n"]
    }]
  }], function () {
    return [{
      type: NgxSpinnerService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [NGX_SPINNER_CONFIG]
      }]
    }];
  }, {
    bdColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fullScreen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showSpinner: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableAnimation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    spinnerDOM: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ["overlay"]
    }],
    handleKeyboardEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ["document:keydown", ["$event"]]
    }]
  });
})();

class NgxSpinnerModule {
  static forRoot(config) {
    return {
      ngModule: NgxSpinnerModule,
      providers: [{
        provide: NGX_SPINNER_CONFIG,
        useValue: config
      }]
    };
  }

}

NgxSpinnerModule.ɵfac = function NgxSpinnerModule_Factory(t) {
  return new (t || NgxSpinnerModule)();
};

NgxSpinnerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxSpinnerModule,
  declarations: [NgxSpinnerComponent, SafeHtmlPipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
  exports: [NgxSpinnerComponent]
});
NgxSpinnerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSpinnerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule],
      declarations: [NgxSpinnerComponent, SafeHtmlPipe],
      exports: [NgxSpinnerComponent]
    }]
  }], null, null);
})();
/*
 * Public API Surface of ngx-spinner
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map