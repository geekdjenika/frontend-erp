"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_salle_salle_module_ts"],{

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

/***/ 7222:
/*!***********************************************!*\
  !*** ./src/app/salle/salle-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SallePageRoutingModule": () => (/* binding */ SallePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _salle_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salle.page */ 2241);




const routes = [
    {
        path: '',
        component: _salle_page__WEBPACK_IMPORTED_MODULE_0__.SallePage
    },
    {
        path: 'creer-salle',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_creer-salle_creer-salle_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../creer-salle/creer-salle.module */ 7900)).then(m => m.CreerSallePageModule)
    },
    {
        path: 'modifier-salle/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_modifier-salle_modifier-salle_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../modifier-salle/modifier-salle.module */ 7768)).then(m => m.ModifierSallePageModule)
    }
];
let SallePageRoutingModule = class SallePageRoutingModule {
};
SallePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SallePageRoutingModule);



/***/ }),

/***/ 9557:
/*!***************************************!*\
  !*** ./src/app/salle/salle.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SallePageModule": () => (/* binding */ SallePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _salle_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salle-routing.module */ 7222);
/* harmony import */ var _salle_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salle.page */ 2241);
/* harmony import */ var _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cloche/cloche.component */ 7907);








let SallePageModule = class SallePageModule {
};
SallePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _salle_routing_module__WEBPACK_IMPORTED_MODULE_0__.SallePageRoutingModule
        ],
        declarations: [_salle_page__WEBPACK_IMPORTED_MODULE_1__.SallePage, _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__.ClocheComponent]
    })
], SallePageModule);



/***/ }),

/***/ 2241:
/*!*************************************!*\
  !*** ./src/app/salle/salle.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SallePage": () => (/* binding */ SallePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _salle_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salle.page.html?ngResource */ 5568);
/* harmony import */ var _salle_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salle.page.scss?ngResource */ 1135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_salles_salle_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/salles/salle-service.service */ 5778);
/* harmony import */ var _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utilisateur/utilisateur.service */ 4996);








let SallePage = class SallePage {
    constructor(userService, salleService, route, router) {
        this.userService = userService;
        this.salleService = salleService;
        this.route = route;
        this.router = router;
        this.url = "/modifier-salle";
        this.id = 0;
    }
    ngOnInit() {
        //  this.id =+this.route.snapshot.params['id']
        console.log(this.id);
        // this.id =+this.route.snapshot.params['id']
        this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
        //!::::::::::::total perso ::::::::::::
        this.callSalle();
    }
    callSalle() {
        this.salleService.getSalleDisponible(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            this.sallesDipo = data.data;
            this.sallesDipoLength = data.data.length;
            console.log(data.data);
        });
        this.salleService.getSallesIndispo(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            this.sallesIndispo = data.data;
            this.sallesIndispoLength = data.data.length;
            console.log(data.data);
        });
    }
    popDeleteSalle(idSalle) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            position: 'center',
            title: 'Voulez-vous supprimer ?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Oui',
            denyButtonText: `Non`,
            imageUrl: '../../assets/images/alert.gif',
            imageWidth: '100px',
            imageHeight: '100px',
            denyButtonColor: 'red',
            // cancelButtonText: 'Annuler',
            cancelButtonColor: 'red',
            confirmButtonColor: 'green',
            heightAuto: false,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                //Swal.fire('Saved!', '', 'success');
                this.salleService.deleteSalle(this.Utilisateur.login, this.Utilisateur.password, idSalle).subscribe(data => {
                    if (data.message == "ok") {
                        this.callSalle();
                    }
                });
            }
            else if (result.isDenied) {
                //Swal.fire('Changes are not saved', '', 'info');
                //  this.route.navigate(['tirage'])
            }
        });
    }
    ionViewWillEnter() {
        this.callSalle();
    }
};
SallePage.ctorParameters = () => [
    { type: _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_4__.UtilisateurService },
    { type: _services_salles_salle_service_service__WEBPACK_IMPORTED_MODULE_3__.SalleServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
SallePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-salle',
        template: _salle_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_salle_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SallePage);



/***/ }),

/***/ 7993:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "#notift {\n  font-size: 11px;\n  border-radius: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 12px;\n  right: 0px;\n  height: 11px;\n  width: 11px;\n  background-color: #fff;\n}\n\n.iconCloche {\n  border-radius: 15px;\n  border: #ff7900 2px solid;\n}\n\n.iconCloche:hover {\n  border-radius: 15px;\n  background-color: #ff7900;\n  color: #fff;\n  font-size: 25px !important;\n}\n\n.iconCloche:hover #notift {\n  background-color: #ffffff;\n  color: #ff7900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb2NoZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUdKIiwiZmlsZSI6ImNsb2NoZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZnR7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgd2lkdGg6IDExcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uaWNvbkNsb2NoZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6ICNmZjc5MDAgMnB4IHNvbGlkO1xyXG59XHJcblxyXG4uaWNvbkNsb2NoZTpob3ZlcntcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgI25vdGlmdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI2ZmNzkwMDtcclxuICB9XHJcbn1cclxuLy8gLmJ0bntcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC5idG46aG92ZXJ7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbi8vICAgY29sb3I6ICNGRjc5MDAgIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgLmJ0biA+IGk6aG92ZXJ7XHJcbi8vICAgICBjb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuICAiXX0= */";

/***/ }),

/***/ 1135:
/*!**************************************************!*\
  !*** ./src/app/salle/salle.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: poppinsB;\n  src: url('Poppins-Black.ttf');\n}\n@font-face {\n  font-family: poppinsL;\n  src: url('Poppins-Light.ttf');\n}\n.cont {\n  padding-left: 3%;\n  padding-right: 3%;\n}\n@media screen and (max-width = 575) {\n  .cont {\n    padding-left: 5%;\n    padding-right: 5%;\n  }\n}\n/*button*/\n.ajout {\n  color: white;\n  background: #FF7900;\n  box-shadow: none;\n  width: 15%;\n  font-weight: 900;\n  border: 1px solid #FF7900;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  border-radius: 10px;\n}\n.ajout:hover {\n  border: 1px solid #FF7900 !important;\n  color: #FF7900 !important;\n  background: white !important;\n  box-shadow: none;\n}\n@media screen and (max-width: 814px) {\n  .ajout {\n    color: white;\n    background: #FF7900;\n    width: 35%;\n    font-weight: 900;\n    border: 1px solid #FF7900;\n    font-family: poppinsL;\n    font-size: 15;\n  }\n}\n.titlediv {\n  background-color: #D9D9D9;\n  height: 60px;\n  text-align: center;\n  margin-bottom: 10%;\n  margin-left: 0px !important;\n}\n.title {\n  margin-top: 18px;\n  font-family: poppinsB;\n  font-size: 20px;\n}\n.salles {\n  padding: 30px 15px 30px 15px;\n}\n.img {\n  margin-top: 10px;\n  margin-left: 10px;\n  width: 50%;\n}\n.icondiv {\n  margin-left: 3%;\n}\n.chaquesalle {\n  background: #FFFFFF;\n  border: 1px solid #FF7900;\n  box-shadow: 4px 4px 4px 2px #FF6200;\n  border-radius: 5px;\n  margin-bottom: 50px;\n}\n@media screen and (max-width: 767px) {\n  .separator1 {\n    display: none;\n  }\n  #titlediv {\n    margin-top: 15%;\n  }\n}\na:hover {\n  cursor: pointer;\n}\n.swal2-title {\n  position: relative;\n  max-width: 100%;\n  margin: 0;\n  padding: 0.8em 1em 0;\n  color: inherit;\n  font-size: 1rem !important;\n  font-weight: 600;\n  text-align: center;\n  text-transform: none;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsNkJBQUE7QUFDSjtBQUNBO0VBQ0kscUJBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFHQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtFQUFOO0FBQ0Y7QUFFQSxTQUFBO0FBRUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLFVBQUE7RUFFQSxnQkFBQTtFQUVDLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0QsbUJBQUE7QUFKSjtBQU9FO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQVNFO0VBQ0U7SUFDSSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0lBRUEsZ0JBQUE7SUFFQyx5QkFBQTtJQUVBLHFCQUFBO0lBQ0EsYUFBQTtFQVRQO0FBQ0Y7QUFhRTtFQUNFLHlCQUFBO0VBQ0QsWUFBQTtFQUNILGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQVhBO0FBY0U7RUFDSyxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQVhQO0FBY0U7RUFDRSw0QkFBQTtBQVhKO0FBYUE7RUFFSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQVhKO0FBZUE7RUFDUyxlQUFBO0FBWlQ7QUFlRTtFQUNFLG1CQUFBO0VBQ0oseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7QUFiQTtBQWVBO0VBRUk7SUFDSSxhQUFBO0VBYk47RUFnQkU7SUFDSSxlQUFBO0VBZE47QUFDRjtBQWtCQTtFQUNFLGVBQUE7QUFoQkY7QUFrQkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQWZGIiwiZmlsZSI6InNhbGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IHBvcHBpbnNCO1xyXG4gICAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udC9Qb3BwaW5zLUJsYWNrLnR0ZlwiKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zTDtcclxuICAgIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnQvUG9wcGlucy1MaWdodC50dGZcIik7XHJcbn1cclxuLmNvbnR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMyU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoPTU3NSkge1xyXG4gICAgLmNvbnR7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgIH1cclxufVxyXG4vKmJ1dHRvbiovXHJcblxyXG4uYWpvdXR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY3OTAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIFxyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIC8vIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAvLyBib3gtc2hhZG93OiAycHggMnB4IDJweCAjY2JjZWQxLCAtNnB4IC02cHggNnB4IHdoaXRlO1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjc5MDA7ICAgICBcclxuICAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gIH1cclxuICAuYWpvdXQ6aG92ZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDsgIFxyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG5cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjgxNHB4KSB7XHJcbiAgICAuYWpvdXR7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRjc5MDA7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAvLyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAvLyBib3gtc2hhZG93OiA2cHggNnB4IDZweCAjY2JjZWQxLCAtNnB4IC02cHggNnB4IHdoaXRlO1xyXG4gICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkY3OTAwOyAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zTDtcclxuICAgICAgICAgZm9udC1zaXplOiAxNTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC50aXRsZWRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEOUQ5RDk7XHJcbiAgIGhlaWdodDogNjBweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5tYXJnaW4tYm90dG9tOiAxMCU7XHJcbm1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxle1xyXG4gICAgICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zQjtcclxuICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIC8vICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIC5zYWxsZXN7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHggMzBweCAxNXB4O1xyXG4gIH1cclxuLmltZyB7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuIFxyXG59XHJcblxyXG4uaWNvbmRpdntcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgIH1cclxuXHJcbiAgLmNoYXF1ZXNhbGxle1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuYm9yZGVyOiAxcHggc29saWQgI0ZGNzkwMDtcclxuYm94LXNoYWRvdzogNHB4IDRweCA0cHggMnB4ICNGRjYyMDA7XHJcbmJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbm1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgfVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIFxyXG4gICAgLnNlcGFyYXRvcjF7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICB9XHJcbiAgICAjdGl0bGVkaXZ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuYTpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnN3YWwyLXRpdGxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAuOGVtIDFlbSAwO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vbGEgdmVyc2lvbiAyLy4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXk6NDAwLDYwMCcpO1xyXG4vLyAkd2h0OiAjZmZmO1xyXG4vLyAkYmxrOiAjMDAwO1xyXG4vLyAkZ3JlZW46ICMyM2I1YWY7XHJcbi8vICR5ZWxsb3c6ICNlZWJhNGM7XHJcbi8vICRib3JkZXI6IGxpZ2h0ZW4oJGJsayxcclxuLy8gODUpO1xyXG4vLyAkYmc6IGRhcmtlbigkd2h0LFxyXG4vLyAyKTtcclxuLy8gYm9keSB7XHJcbi8vICAgICBmb250LWZhbWlseTogcG9wcGluc0w7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAkYmc7XHJcbi8vIH1cclxuXHJcbi8vIGgxIHtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmc6IDMwcHggMCAwIDA7XHJcbi8vIH1cclxuXHJcbi8vIGg0IHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICBwYWRkaW5nOiAwIDAgMzBweCAwO1xyXG4vLyB9XHJcblxyXG4vLyAuaWNvbiB7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogNjAlO1xyXG4vLyB9XHJcblxyXG4vLyAubGlua2ljb24ge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4vLyB9XHJcblxyXG4vLyAudGltZWxpbmUge1xyXG4vLyAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuLy8gICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4O1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgJjpiZWZvcmUge1xyXG4vLyAgICAgICAgIHRvcDogMDtcclxuLy8gICAgICAgICBib3R0b206IDA7XHJcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vICAgICAgICAgd2lkdGg6IDNweDtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyO1xyXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMS41cHg7XHJcbi8vICAgICAgICAgbGVmdDogMjBweDtcclxuLy8gICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuLy8gICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgID5saSB7XHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICAgICAgcGFkZGluZy1sZWZ0OiA1NXB4O1xyXG4vLyAgICAgICAgICY6YWZ0ZXIsXHJcbi8vICAgICAgICAgJjphZnRlciB7XHJcbi8vICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4vLyAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgLnBhbmVsIHtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbi8vICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgICAgICAgICAgYmFja2dyb3VuZDogJHdodDtcclxuLy8gICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCA4MHB4IDAgcmdiYSgkYmxrLCAwLjEpO1xyXG4vLyAgICAgICAgICAgICBzdW1tYXJ5IHtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbi8vICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4vLyAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuLy8gICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XHJcbi8vICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtYXJnaW4sIGJhY2tncm91bmQ7XHJcbi8vICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgICAgICAgICAgICAgJjo6LXdlYmtpdC1kZXRhaWxzLW1hcmtlciB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGJsaywgMC4xKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICBwIHtcclxuLy8gICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweCAxMHB4O1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICZbb3Blbl0gc3VtbWFyeSB7XHJcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkYmxrLCAwLjEpO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4vLyAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuLy8gICAgICAgICAgICAgLnBhbmVsIHtcclxuLy8gICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgJjpub3QoOm50aC1jaGlsZChldmVuKSkge1xyXG4vLyAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogOTBweDtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XHJcbi8vICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbi8vICAgICAgICAgICAgICAgICA+IDpudGgtY2hpbGQoZXZlbikge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICA+IHtcclxuLy8gICAgICAgICAgICAgLmljb24ge1xyXG4vLyAgICAgICAgICAgICAgICAgY29sb3I6ICRib3JkZXI7XHJcbi8vICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuLy8gICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuLy8gICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcclxuLy8gICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XHJcbi8vICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbi8vICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XHJcbi8vICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk7XHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udCBBd2Vzb21lXFwgNSBGcmVlO1xyXG4vLyAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMTkyXCI7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAmLmRvbmUge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNGRjc5MDAgO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwNThcIjtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAmLndvcmtpbmcge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkeWVsbG93O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYwMTdcIjtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gLypidXR0b24qL1xyXG4vLyBidXR0b257XHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4vLyAgICAgYmFja2dyb3VuZDogI0ZGNzkwMDtcclxuLy8gICAgIGhlaWdodDogNDBweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbi8vICAgICBib3gtc2hhZG93OiA2cHggNnB4IDZweCAjY2JjZWQxLCAtNnB4IC02cHggNnB4IHdoaXRlO1xyXG4vLyAgICAgdHJhbnNpdGlvbjogMC41cztcclxuLy8gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRkY3OTAwO1xyXG4vLyAgICAgIHBhZGRpbmc6IDBweCAxMDBweCAwcHggMHB4O1xyXG4vLyAgICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zTDtcclxuICBcclxuLy8gICAgIHBhZGRpbmc6IDA7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIFxyXG4vLyAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9jc3MgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgXHJcblxyXG4gIFxyXG5cclxuLy8gQGZvbnQtZmFjZSB7XHJcbi8vICAgICBmb250LWZhbWlseTogcG9wcGluc0I7XHJcbi8vICAgICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250L1BvcHBpbnMtQmxhY2sudHRmXCIpO1xyXG4vLyB9XHJcbi8vIEBmb250LWZhY2Uge1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IHBvcHBpbnNMO1xyXG4vLyAgICAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udC9Qb3BwaW5zLUxpZ2h0LnR0ZlwiKTtcclxuLy8gfVxyXG4vLyAvKmJ1dHRvbiovXHJcbi8vIC5ham91dHtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNGRjc5MDA7XHJcbi8vICAgICB3aWR0aDogMTUlO1xyXG4vLyAgICAgLy8gY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuLy8gICAgIGJveC1zaGFkb3c6IDZweCA2cHggNnB4ICNjYmNlZDEsIC02cHggLTZweCA2cHggd2hpdGU7XHJcbi8vICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZGNzkwMDsgICAgIFxyXG4vLyAgICAgIG1hcmdpbi10b3A6IDIlO1xyXG4vLyAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuLy8gICB9XHJcblxyXG4vLyAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODE0cHgpIHtcclxuLy8gICAgIC5ham91dHtcclxuLy8gICAgICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogI0ZGNzkwMDtcclxuLy8gICAgICAgICB3aWR0aDogMjglO1xyXG4vLyAgICAgICAgIC8vIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDZweCA2cHggNnB4ICNjYmNlZDEsIC02cHggLTZweCA2cHggd2hpdGU7XHJcbi8vICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjc5MDA7ICAgICBcclxuLy8gICAgICAgICAgbWFyZ2luLXRvcDogMiU7XHJcbi8vICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4vLyAgICAgICAgICBmb250LWZhbWlseTogcG9wcGluc0w7XHJcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMTU7XHJcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuLy8gICAgICAgfVxyXG4vLyAgIH1cclxuXHJcblxyXG4vLyAgIC50aXRsZWRpdntcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNEOUQ5RDk7XHJcbi8vICAgIGhlaWdodDogNjBweDtcclxuLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbi8vIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgLnRpdGxle1xyXG4vLyAgICAgICAgbWFyZ2luLXRvcDogMThweDtcclxuLy8gICAgICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zQjtcclxuLy8gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICAgIC8vICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbi8vICAgfVxyXG4vLyAgIC5zYWxsZXN7XHJcbi8vICAgICBwYWRkaW5nOiAzMHB4IDE1cHggMzBweCAxNXB4O1xyXG4vLyAgIH1cclxuLy8gLmltZyB7XHJcblxyXG4vLyAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4vLyAgICAgd2lkdGg6IDUwJTtcclxuIFxyXG4vLyB9XHJcblxyXG4vLyAubGllckFjdHtcclxuLy8gIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gIHdpZHRoOiA5MCU7XHJcbi8vICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4vLyAgYm9yZGVyOiBub25lO1xyXG5cclxuLy8gfVxyXG4vLyAuaWNvbmRpdntcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuLy8gfVxyXG5cclxuXHJcbi8vICAgLmNoYXF1ZXNhbGxle1xyXG4vLyAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuLy8gYm9yZGVyOiAxcHggc29saWQgI0ZGNzkwMDtcclxuLy8gYm94LXNoYWRvdzogNHB4IDRweCA0cHggMnB4ICNGRjYyMDA7XHJcbi8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gIG1hcmdpbjogMyU7XHJcbi8vIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbi8vICAgfVxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIFxyXG4vLyAgICAgLnNlcGFyYXRvcjF7XHJcbi8vICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbi8vICAgICB9XHJcbi8vICAgICAjdGl0bGVkaXZ7XHJcbi8vICAgICAgICAgbWFyZ2luLXRvcDogMTUlO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gfSJdfQ== */";

/***/ }),

/***/ 9956:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\"\r\n    integrity=\"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==\"\r\n    crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n<!-- <div class=\"iconCloche\" (click)=\"OpenNotification($event)\">\r\n  <i class=\"fa-regular fa-bell\"></i><span>2</span>\r\n</div> -->\r\n<div class=\"col reporting\">\r\n  <button type=\"button\" class=\"btn buttonColor\"  class=\"iconCloche\" (click)=\"OpenNotification($event)\"><i class=\"fa-regular fa-bell\"></i><span id=\"notift\">{{this.notifTotal}}</span></button>\r\n</div>";

/***/ }),

/***/ 5568:
/*!**************************************************!*\
  !*** ./src/app/salle/salle.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Salles</ion-title>\r\n        <ion-button slot=\"end\" fill=\"clear\">\r\n            <app-cloche></app-cloche>\r\n\r\n        </ion-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n    <div class=\"container cont\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"row justify-content-center\">\r\n                <button type=\"button\" class=\"btn ajout\" routerLink=\"/dashboard/salle/creer-salle\">Ajouter Salle</button>\r\n            </div>\r\n\r\n            <div class=\"col- col-sm-12 col-md-5 col-lg-5 col-xl-5 \">\r\n\r\n                <div class=\"row \">\r\n\r\n                    <div class=\"row titlediv \">\r\n\r\n                        <div class=\"title\"> Salles Disponibles</div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col salles\" style=\"background-color: #D9D9D9;\">\r\n                        <div *ngIf=\"sallesDipoLength == 0\">Aucune salle disponible</div>\r\n\r\n\r\n                        <div class=\"col chaquesalle\" *ngFor=\"let salle of sallesDipo\">\r\n                            <div class=\"row\" *ngIf=\"sallesDipoLength!=0\">\r\n                                <div class=\"col \">\r\n                                    <img class=\"img\" src=\"../../assets/salle.png\" alt=\"\">\r\n                                </div>\r\n                                <div  class=\"col\" style=\" margin-top: 10px;\r\n                                    margin-left: 10px;\r\n                                    width: 50%;\">\r\n                                    <div class=\"col\">{{salle.libelle}}</div>\r\n                                    <div class=\"col\">{{salle.etage}}</div>\r\n                                </div>\r\n                                <div class=\"col justify-content-end\" style=\" margin-top: 10px;\r\n                                    margin-left: 10px;\r\n                                    width: 50%;\">\r\n                                    <div class=\"col\">\r\n\r\n                                        <button type=\"button\" class=\"btn btn-outline-dark\" [routerLink]=\"['/dashboard/liaisonsalle',salle.id]\">Lier Activité</button>\r\n\r\n                                    </div>\r\n                                    <div class=\"row icondiv\" style=\" margin-top: 10px;\">\r\n                                        <div class=\"col\"><a [routerLink]=\"['/dashboard/salle/modifier-salle',salle.id]\"><i class=\"bi bi-pencil-square\"\r\n                                            style=\"color: green; font-size:20px;\" ></i></a></div>\r\n                                        <div class=\"col\">\r\n                                             <a (click)=\"popDeleteSalle(salle.id)\">\r\n                                            <i class=\"bi bi-trash3\"\r\n                                                style=\"color: red; font-size:20px;\"></i>\r\n                                            </a>\r\n                                            </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            <div class=\"col- col-sm-12 col-md-2 col-lg-2 col-xl-2 \">\r\n\r\n                <div class=\"d-flex justify-content-center  \" style=\"height: 100%;\">\r\n                    <div class=\"vr separator1\" style=\"width: 4px\"></div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"col- col-sm-12 col-md-5 col-lg-5 col-xl-5 \">\r\n\r\n                <div class=\"row \">\r\n\r\n                    <div class=\"row titlediv \" id=\"titlediv\">\r\n\r\n                        <div class=\"title\"> Salles Occupées</div>\r\n                    </div>\r\n\r\n                    <!-- les salle occuper -->\r\n\r\n                    <div class=\"col salles\" style=\"background-color: #D9D9D9;\">\r\n\r\n                        <div *ngIf=\"sallesIndispoLength==0\">Aucune salle Occupée</div>\r\n\r\n\r\n                        <div  class=\"col chaquesalle\" *ngFor=\"let salle of sallesIndispo\">\r\n                            <div class=\"row\" *ngIf=\"sallesIndispoLength!=0\">\r\n                                <div class=\"col \">\r\n                                    <img class=\"img\" src=\"../../assets/salle.png\" alt=\"\">\r\n                                </div>\r\n\r\n                                <div  class=\"col\" style=\" margin-top: 10px;\r\n                                    margin-left: 10px;\r\n                                    width: 50%;\">\r\n                                    <div class=\"col\">{{salle.libelle}}</div>\r\n                                    <div class=\"col\">{{salle.etage}}</div>\r\n                                </div>\r\n                                <div class=\"col justify-content-end\" style=\" margin-top: 10px;\r\n                                        margin-left: 10px;\r\n                                        width: 50%;\">\r\n                                    <div class=\"col\">\r\n\r\n                                        <button type=\"button\" class=\"btn btn-outline-dark\" disabled >Lier Activité</button>\r\n\r\n                                    </div>\r\n                                    <div class=\"row icondiv\" style=\" margin-top: 10px;\">\r\n                                        <div class=\"col\"><a [routerLink]=\"['/dashboard/salle/modifier-salle',salle.id]\"><i class=\"bi bi-pencil-square\"\r\n                                                style=\"color: green; font-size:20px;\" ></i></a></div>\r\n\r\n                                        <div class=\"col\">\r\n\r\n                                            <a (click)=\"popDeleteSalle(salle.id)\">\r\n                                            <i class=\"bi bi-trash3\"\r\n                                                style=\"color: red; font-size:20px;\"></i>\r\n                                            </a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- ##################################la version 2##############################################\"\"\"\" -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <ion-header>\r\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\" integrity=\"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"\r\n  />\r\n  <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n          <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <div class=\"row\">\r\n          <div class=\"col\">\r\n              <ion-title style=\"color: #FF7900;margin-top: 7px; margin-left: 10px;\">Salles</ion-title>\r\n          </div>\r\n          <div class=\"col\"></div>\r\n          <div class=\"col\"></div>\r\n          <div class=\"col\"></div>\r\n          <div class=\"col\"></div>\r\n          <div class=\"col\" style=\"width: 100%; color:#FF7900; font-size: 30px;\"><i class=\"fa-regular fa-bell\"></i></div>\r\n      </div>\r\n       <div>\r\n          <button> Ajouter une Salle</button>\r\n      </div> -->\r\n<!-- </ion-toolbar>\r\n\r\n\r\n</ion-header> -->\r\n<!--\r\n<ion-content>\r\n\r\n  <div class=\"row justify-content-center\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark ajout \">Ajouter Salle</button>\r\n   </div>\r\n\r\n\r\n   <div class=\"container\">\r\n    <h1 style=\" color:#FF7900;\">Orange Digital Center</h1>\r\n\r\n    <ul class=\"timeline\">\r\n\r\n        <li class=\"timeline\">\r\n            <div class=\"icon done\"></div>\r\n            <details class=\"panel\">\r\n\r\n                <summary>Salle Disponible</summary>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                <div class=\"col chaquesalle\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col \">\r\n                          <img class=\"img\" src=\"../../assets/salle.png\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"col\" style=\" margin-top: 20px;\r\n                      margin-left: 10px;\r\n                      width: 50%;\">\r\n                              <div class=\"col\">Nom Salle</div>\r\n                              <div class=\"col\">1ere etage</div>\r\n                      </div>\r\n                      <div class=\"col justify-content-end\" style=\" margin-top: 10px;\r\n                      margin-left: 10px;\r\n                      width: 100%;\" >\r\n                          <div class=\"col\">\r\n\r\n                              <button type=\"button\" class=\"btn lierAct \">Lier Activité</button>\r\n\r\n                          </div>\r\n                          <div class=\"row icondiv\" style=\" margin-top: 10px;\">\r\n\r\n                              <div class=\"col\"><i class=\"bi bi-pencil-square\" style=\"color: green; font-size:20px;\"></i></div>\r\n                              <div class=\"col\"><i class=\"bi bi-trash3\" style=\"color: red; font-size:20px;\"></i></div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n              <div class=\"col chaquesalle\">\r\n                <div class=\"row\">\r\n                    <div class=\"col \">\r\n                        <img class=\"img\" src=\"../../assets/salle.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"col\" style=\" margin-top: 20px;\r\n                    margin-left: 10px;\r\n                    width: 50%;\">\r\n                            <div class=\"col\">Nom Salle</div>\r\n                            <div class=\"col\">1ere etage</div>\r\n                    </div>\r\n                    <div class=\"col justify-content-end\" style=\" margin-top: 10px;\r\n                    margin-left: 10px;\r\n                    width: 100%;\" >\r\n                        <div class=\"col\">\r\n\r\n                            <button type=\"button\" class=\"btn lierAct \">Lier Activité</button>\r\n\r\n                        </div>\r\n                        <div class=\"row icondiv\" style=\" margin-top: 10px;\">\r\n\r\n                            <div class=\"col\"><i class=\"bi bi-pencil-square\" style=\"color: green; font-size:20px;\"></i></div>\r\n                            <div class=\"col\"><i class=\"bi bi-trash3\" style=\"color: red; font-size:20px;\"></i></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            <div class=\"col chaquesalle\">\r\n              <div class=\"row\">\r\n                  <div class=\"col \">\r\n                      <img class=\"img\" src=\"../../assets/salle.png\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col\" style=\" margin-top: 20px;\r\n                  margin-left: 10px;\r\n                  width: 50%;\">\r\n                          <div class=\"col\">Nom Salle</div>\r\n                          <div class=\"col\">1ere etage</div>\r\n                  </div>\r\n                  <div class=\"col justify-content-end\" style=\" margin-top: 10px;\r\n                  margin-left: 10px;\r\n                  width: 100%;\" >\r\n                      <div class=\"col\">\r\n\r\n                          <button type=\"button\" class=\"btn lierAct \">Lier Activité</button>\r\n\r\n                      </div>\r\n                      <div class=\"row icondiv\" style=\" margin-top: 10px;\">\r\n\r\n                          <div class=\"col\"><i class=\"bi bi-pencil-square\" style=\"color: green; font-size:20px;\"></i></div>\r\n                          <div class=\"col\"><i class=\"bi bi-trash3\" style=\"color: red; font-size:20px;\"></i></div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"col chaquesalle\">\r\n            <div class=\"row\">\r\n                <div class=\"col \">\r\n                    <img class=\"img\" src=\"../../assets/salle.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"col\" style=\" margin-top: 20px;\r\n                margin-left: 10px;\r\n                width: 50%;\">\r\n                        <div class=\"col\">Nom Salle</div>\r\n                        <div class=\"col\">1ere etage</div>\r\n                </div>\r\n                <div class=\"col justify-content-end\" style=\" margin-top: 10px;\r\n                margin-left: 10px;\r\n                width: 100%;\" >\r\n                    <div class=\"col\">\r\n\r\n                        <button type=\"button\" class=\"btn lierAct \">Lier Activité</button>\r\n\r\n                    </div>\r\n                    <div class=\"row icondiv\" style=\" margin-top: 10px;\">\r\n\r\n                        <div class=\"col\"><i class=\"bi bi-pencil-square\" style=\"color: green; font-size:20px;\"></i></div>\r\n                        <div class=\"col\"><i class=\"bi bi-trash3\" style=\"color: red; font-size:20px;\"></i></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </details>\r\n\r\n\r\n        </li>\r\n\r\n        <li class=\"timeline\">\r\n            <div class=\"icon done\"></div>\r\n            <details class=\"panel\">\r\n                <summary>Salles Occupées</summary>\r\n\r\n\r\n\r\n\r\n                <div class=\"col chaquesalle\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col \">\r\n                          <img class=\"img\" src=\"../../assets/salle.png\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"col\" style=\" margin-top: 20px;\r\n                      margin-left: 10px;\r\n                      width: 50%;\">\r\n                              <div class=\"col\">Nom Salle</div>\r\n                              <div class=\"col\">1ere etage</div>\r\n                      </div>\r\n                      <div class=\"col justify-content-end\" style=\" margin-top: 10px;\r\n                      margin-left: 10px;\r\n                      width: 100%;\" >\r\n                          <div class=\"col\">\r\n\r\n                              <button type=\"button\" class=\"btn lierAct \">Lier Activité</button>\r\n\r\n                          </div>\r\n                          <div class=\"row icondiv\" style=\" margin-top: 10px;\">\r\n\r\n                              <div class=\"col\"><i class=\"bi bi-pencil-square\" style=\"color: green; font-size:20px;\"></i></div>\r\n                              <div class=\"col\"><i class=\"bi bi-trash3\" style=\"color: red; font-size:20px;\"></i></div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n              <div class=\"col chaquesalle\">\r\n                <div class=\"row\">\r\n                    <div class=\"col \">\r\n                        <img class=\"img\" src=\"../../assets/salle.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"col\" style=\" margin-top: 20px;\r\n                    margin-left: 10px;\r\n                    width: 50%;\">\r\n                            <div class=\"col\">Nom Salle</div>\r\n                            <div class=\"col\">1ere etage</div>\r\n                    </div>\r\n                    <div class=\"col justify-content-end\" style=\" margin-top: 10px;\r\n                    margin-left: 10px;\r\n                    width: 100%;\" >\r\n                        <div class=\"col\">\r\n\r\n                            <button type=\"button\" class=\"btn lierAct \">Lier Activité</button>\r\n\r\n                        </div>\r\n                        <div class=\"row icondiv\" style=\" margin-top: 10px;\">\r\n\r\n                            <div class=\"col\"><i class=\"bi bi-pencil-square\" style=\"color: green; font-size:20px;\"></i></div>\r\n                            <div class=\"col\"><i class=\"bi bi-trash3\" style=\"color: red; font-size:20px;\"></i></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n            <div class=\"col chaquesalle\">\r\n              <div class=\"row\">\r\n                  <div class=\"col \">\r\n                      <img class=\"img\" src=\"../../assets/salle.png\" alt=\"\">\r\n                  </div>\r\n                  <div class=\"col\" style=\" margin-top: 20px;\r\n                  margin-left: 10px;\r\n                  width: 50%;\">\r\n                          <div class=\"col\">Nom Salle</div>\r\n                          <div class=\"col\">1ere etage</div>\r\n                  </div>\r\n                  <div class=\"col justify-content-end\" style=\" margin-top: 10px;\r\n                  margin-left: 10px;\r\n                  width: 100%;\" >\r\n                      <div class=\"col\">\r\n\r\n                          <button type=\"button\" class=\"btn lierAct \">Lier Activité</button>\r\n\r\n                      </div>\r\n                      <div class=\"row icondiv\" style=\" margin-top: 10px;\">\r\n\r\n                          <div class=\"col\"><i class=\"bi bi-pencil-square\" style=\"color: green; font-size:20px;\"></i></div>\r\n                          <div class=\"col\"><i class=\"bi bi-trash3\" style=\"color: red; font-size:20px;\"></i></div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"col chaquesalle\">\r\n            <div class=\"row\">\r\n                <div class=\"col \">\r\n                    <img class=\"img\" src=\"../../assets/salle.png\" alt=\"\">\r\n                </div>\r\n                <div class=\"col\" style=\" margin-top: 20px;\r\n                margin-left: 10px;\r\n                width: 50%;\">\r\n                        <div class=\"col\">Nom Salle</div>\r\n                        <div class=\"col\">1ere etage</div>\r\n                </div>\r\n                <div class=\"col justify-content-end\" style=\" margin-top: 10px;\r\n                margin-left: 10px;\r\n                width: 100%;\" >\r\n                    <div class=\"col\">\r\n\r\n                        <button type=\"button\" class=\"btn lierAct \">Lier Activité</button>\r\n\r\n                    </div>\r\n                    <div class=\"row icondiv\" style=\" margin-top: 10px;\">\r\n\r\n                        <div class=\"col\"><i class=\"bi bi-pencil-square\" style=\"color: green; font-size:20px;\"></i></div>\r\n                        <div class=\"col\"><i class=\"bi bi-trash3\" style=\"color: red; font-size:20px;\"></i></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n              </details>\r\n        </li>\r\n\r\n\r\n\r\n\r\n\r\n    </ul>\r\n</div>\r\n\r\n</ion-content> -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_salle_salle_module_ts.js.map