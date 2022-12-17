"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ 7043);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.NgxPaginationModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utilisateur/utilisateur.service */ 4996);






let HomePage = class HomePage {
    /////
    constructor(utilisateurService, router) {
        this.utilisateurService = utilisateurService;
        this.router = router;
    }
    logForm() {
        this.utilisateurService.login(this.login, this.password).subscribe(data => {
            //on vas recupere le message de retour et voir si tout ses bien passe
            console.log(data);
            if (data.message == "ok") {
                //enregistrement de l'utilisateur dans le local storage
                localStorage.setItem('utilisateur', data.data);
                console.log(data.data);
                if (data.data.role.libellerole == "ADMIN") {
                    //rediriger vers la page admin
                    this.router.navigate(['/accueil']);
                }
                else if (data.data.role.libellerole == "RESPONSABLE") {
                    //rediriger vers la page responsable
                }
                else {
                    //rediriger vers la page du simple utilisateur
                }
            }
            else if (data.message == "error") {
                console.log(data.data);
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_2__.UtilisateurService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".text {\n  font-family: myfon2;\n  font-size: 25px;\n  font-weight: 700;\n}\n\n.colorbutton1 {\n  background-color: rgba(0, 26, 255, 0.85);\n  color: white;\n  padding: 5px;\n  border-radius: 10px;\n}\n\n.colorbutton2 {\n  background-color: rgba(0, 158, 44, 0.85);\n  color: white;\n  padding: 5px;\n  border-radius: 10px;\n}\n\n.colorbutton3 {\n  background-color: rgba(255, 0, 0, 0.85);\n  color: white;\n  padding: 5px;\n  border-radius: 10px;\n}\n\n.colorbutton1:hover {\n  background-color: rgba(255, 255, 255, 0.85);\n  color: #001AFF;\n  border: 1px solid #001AFF;\n}\n\n.colorbutton2:hover {\n  background-color: rgba(255, 255, 255, 0.85);\n  color: #009E2C;\n  border: 1px solid #009E2C;\n}\n\n.colorbutton3:hover {\n  background-color: rgba(255, 255, 255, 0.85);\n  color: #FF0000;\n  border: 1px solid #FF0000;\n}\n\nion-modal {\n  --height:12em !important;\n  --border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQURGOztBQUdBO0VBQ0Usd0NBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLDJDQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQUE7RUFDRSwyQ0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUdGOztBQURBO0VBQ0UsMkNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFJRjs7QUFGQTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7QUFLRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBsZXMgc3R5bGUgYXBwbGlxdWVyIGF1IG1vZGFsIFxyXG4udGV4dHtcclxuICBmb250LWZhbWlseTogbXlmb24yO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIFxyXG59XHJcbi5jb2xvcmJ1dHRvbjF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDFBRkYsICRhbHBoYTogLjg1KTtcclxuICBjb2xvcjogI2ZmZmY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmNvbG9yYnV0dG9uMntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgkY29sb3I6ICMwMDlFMkMsICRhbHBoYTogLjg1KTtcclxuICBjb2xvcjogI2ZmZmY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmNvbG9yYnV0dG9uM3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgkY29sb3I6ICNGRjAwMDAsICRhbHBoYTogLjg1KTtcclxuICBjb2xvcjogI2ZmZmY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmNvbG9yYnV0dG9uMTpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZmYsICRhbHBoYTogLjg1KTtcclxuICBjb2xvcjogIzAwMUFGRjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAxQUZGO1xyXG59XHJcbi5jb2xvcmJ1dHRvbjI6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoJGNvbG9yOiAjZmZmZiwgJGFscGhhOiAuODUpO1xyXG4gIGNvbG9yOiAjMDA5RTJDO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDlFMkM7XHJcbn1cclxuLmNvbG9yYnV0dG9uMzpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgkY29sb3I6ICNmZmZmLCAkYWxwaGE6IC44NSk7XHJcbiAgY29sb3I6ICNGRjAwMDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGMDAwMDtcclxufVxyXG5pb24tbW9kYWx7XHJcbiAgLS1oZWlnaHQ6MTJlbSAhaW1wb3J0YW50O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAvLyAtLXdpZHRoOiAzMGVtO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Accueil</ion-title>\r\n    <!-- <ion-buttons slot=\"end\">\r\n      <img [src]=\"imag\" />\r\n    </ion-buttons> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-button id=\"open-modal\" expand=\"block\">Open Card Modal</ion-button>\r\n\r\n  <ion-modal #modal trigger=\"open-modal\">\r\n    <ng-template>\r\n      <div class=\"d-grid gap-2 m-2 d-md-flex justify-content-md-end\">\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"modal.dismiss()\">Close</ion-button>\r\n        </ion-buttons>\r\n      </div>\r\n      <ion-content>\r\n\r\n        <div class=\"text-center\">\r\n          <div class=\"text\">\r\n            Liste Importée avec succès !\r\n          </div>\r\n          <div class=\"text\">\r\n            Choissisez une action:\r\n          </div>\r\n        </div>\r\n        <div class=\"row mx-5 m-2\">\r\n          <div class=\"col\">\r\n            <button type=\"button\" class=\"btn colorbutton1 btn-sm\">Small button</button>\r\n          </div>\r\n          <div class=\"col\">\r\n            <button type=\"button\" class=\"btn colorbutton2 btn-sm\">Small button</button>\r\n          </div>\r\n          <div class=\"col\">\r\n            <button type=\"button\" class=\"btn colorbutton3 btn-sm\">Small button</button>\r\n          </div>\r\n        </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map