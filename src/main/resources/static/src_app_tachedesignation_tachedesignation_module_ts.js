"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tachedesignation_tachedesignation_module_ts"],{

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

/***/ 1579:
/*!*********************************************************************!*\
  !*** ./src/app/tachedesignation/tachedesignation-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TachedesignationPageRoutingModule": () => (/* binding */ TachedesignationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tachedesignation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tachedesignation.page */ 5943);




const routes = [
    {
        path: '',
        component: _tachedesignation_page__WEBPACK_IMPORTED_MODULE_0__.TachedesignationPage
    }
];
let TachedesignationPageRoutingModule = class TachedesignationPageRoutingModule {
};
TachedesignationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TachedesignationPageRoutingModule);



/***/ }),

/***/ 4592:
/*!*************************************************************!*\
  !*** ./src/app/tachedesignation/tachedesignation.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TachedesignationPageModule": () => (/* binding */ TachedesignationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tachedesignation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tachedesignation-routing.module */ 1579);
/* harmony import */ var _tachedesignation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tachedesignation.page */ 5943);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 7043);
/* harmony import */ var _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cloche/cloche.component */ 7907);









let TachedesignationPageModule = class TachedesignationPageModule {
};
TachedesignationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tachedesignation_routing_module__WEBPACK_IMPORTED_MODULE_0__.TachedesignationPageRoutingModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.NgxPaginationModule
        ],
        declarations: [_tachedesignation_page__WEBPACK_IMPORTED_MODULE_1__.TachedesignationPage, _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__.ClocheComponent]
    })
], TachedesignationPageModule);



/***/ }),

/***/ 5943:
/*!***********************************************************!*\
  !*** ./src/app/tachedesignation/tachedesignation.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TachedesignationPage": () => (/* binding */ TachedesignationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tachedesignation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tachedesignation.page.html?ngResource */ 2934);
/* harmony import */ var _tachedesignation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tachedesignation.page.scss?ngResource */ 9043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_tahedesignations_tachedesignation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tahedesignations/tachedesignation.service */ 5399);







let TachedesignationPage = class TachedesignationPage {
    constructor(route, tachedesignationService) {
        this.route = route;
        this.tachedesignationService = tachedesignationService;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
        this.callTaches();
        this.callTaches();
        this.tachedesignationService.getAlltaches(this.Utilisateur.login, this.Utilisateur.password, this.id).subscribe(retour => {
            this.taches = retour.data;
            console.log(this.taches);
        });
        this.tachedesignationService.getAlltaches(this.Utilisateur.login, this.Utilisateur.password, this.id).subscribe(retour => {
            this.taches = retour.data;
            console.log(this.taches);
        });
    }
    ionViewWillEnter() {
        this.callTaches();
    }
    popDeleteTache(id) {
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
                this.tachedesignationService.deleteTache(this.Utilisateur.login, this.Utilisateur.password, id).subscribe(data => {
                    // if(data.message=="ok"){
                    //   this.callTaches()
                    // }
                    this.callTaches();
                });
            }
            else if (result.isDenied) {
                //Swal.fire('Changes are not saved', '', 'info');
                //  this.route.navigate(['tirage'])
            }
        });
    }
    callTaches() {
        this.tachedesignationService.getAlltaches(this.Utilisateur.login, this.Utilisateur.password, this.id).subscribe(retour => {
            this.taches = retour.data;
            console.log(this.taches);
        });
    }
};
TachedesignationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _services_tahedesignations_tachedesignation_service__WEBPACK_IMPORTED_MODULE_3__.TachedesignationService }
];
TachedesignationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tachedesignation',
        template: _tachedesignation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tachedesignation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TachedesignationPage);



/***/ }),

/***/ 7993:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "#notift {\n  font-size: 11px;\n  border-radius: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 12px;\n  right: 0px;\n  height: 11px;\n  width: 11px;\n  background-color: #fff;\n}\n\n.iconCloche {\n  border-radius: 15px;\n  border: #ff7900 2px solid;\n}\n\n.iconCloche:hover {\n  border-radius: 15px;\n  background-color: #ff7900;\n  color: #fff;\n  font-size: 25px !important;\n}\n\n.iconCloche:hover #notift {\n  background-color: #ffffff;\n  color: #ff7900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb2NoZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUdKIiwiZmlsZSI6ImNsb2NoZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZnR7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgd2lkdGg6IDExcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uaWNvbkNsb2NoZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6ICNmZjc5MDAgMnB4IHNvbGlkO1xyXG59XHJcblxyXG4uaWNvbkNsb2NoZTpob3ZlcntcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgI25vdGlmdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI2ZmNzkwMDtcclxuICB9XHJcbn1cclxuLy8gLmJ0bntcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC5idG46aG92ZXJ7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbi8vICAgY29sb3I6ICNGRjc5MDAgIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgLmJ0biA+IGk6aG92ZXJ7XHJcbi8vICAgICBjb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuICAiXX0= */";

/***/ }),

/***/ 9043:
/*!************************************************************************!*\
  !*** ./src/app/tachedesignation/tachedesignation.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: myfon2;\n  src: url('Poppins-Light.ttf');\n}\n* {\n  font-family: myfon2;\n}\n.entete {\n  background-color: #FF7900;\n  color: white;\n}\n.tache {\n  border: 1px solid #FF7900;\n  background-color: #FF7900;\n  border-radius: 15px;\n  color: white;\n  height: 38px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  margin-left: 80%;\n  width: 18%;\n  font-weight: 600;\n}\n.tache:hover {\n  color: white;\n  background-color: black;\n  border: 2px solid black;\n}\n.pagination ::ng-deep .ngx-pagination .current {\n  background-color: #FF7900;\n}\n.bi-pencil-square::before {\n  content: \"\\f4ca\";\n  margin-right: 20%;\n}\n.bi-trash3::before {\n  content: \"\\f78b\";\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhY2hlZGVzaWduYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQUNGO0FBRUE7RUFDRSxtQkFBQTtBQUFGO0FBR0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFBRjtBQUVBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUdBO0VBQ0EseUJBQUE7QUFBQTtBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQURGO0FBSUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFERiIsImZpbGUiOiJ0YWNoZWRlc2lnbmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBteWZvbjI7XHJcbiAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250L1BvcHBpbnMtTGlnaHQudHRmJyk7XHJcbn1cclxuXHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiBteWZvbjI7XHJcbn1cclxuXHJcbi5lbnRldGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzkwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnRhY2hle1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRjc5MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzkwMDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDM4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4MCU7XHJcbiAgd2lkdGg6IDE4JTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udGFjaGU6aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAvLyBmb250LWZhbWlseTogJ215Zm9uJztcclxufVxyXG5cclxuLnBhZ2luYXRpb24gOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNGRjc5MDA7XHJcbn1cclxuXHJcblxyXG4uYmktcGVuY2lsLXNxdWFyZTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcZjRjYVwiO1xyXG4gIG1hcmdpbi1yaWdodDogMjAlO1xyXG59XHJcblxyXG4uYmktdHJhc2gzOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxmNzhiXCI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59IFxyXG4iXX0= */";

/***/ }),

/***/ 9956:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\"\r\n    integrity=\"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==\"\r\n    crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n<!-- <div class=\"iconCloche\" (click)=\"OpenNotification($event)\">\r\n  <i class=\"fa-regular fa-bell\"></i><span>2</span>\r\n</div> -->\r\n<div class=\"col reporting\">\r\n  <button type=\"button\" class=\"btn buttonColor\"  class=\"iconCloche\" (click)=\"OpenNotification($event)\"><i class=\"fa-regular fa-bell\"></i><span id=\"notift\">{{this.notifTotal}}</span></button>\r\n</div>";

/***/ }),

/***/ 2934:
/*!************************************************************************!*\
  !*** ./src/app/tachedesignation/tachedesignation.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Liste des tâches</ion-title>\r\n      <ion-button slot=\"end\" fill=\"clear\">\r\n        <app-cloche></app-cloche>\r\n  \r\n      </ion-button>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n  \r\n  \r\n   \r\n    <!-- <div class=\"header\">\r\n   -->\r\n  \r\n      <!-- <div class=\"headerContent\">\r\n      \r\n        <button  class=\"tache\" routerLink=\"\">Ajouter tâche</button>\r\n      </div>\r\n    </div> -->\r\n   \r\n    <div class=\"container\">\r\n        <div> \r\n            <button  class=\"tache\" [routerLink]=\"['/dashboard/creertachesdesignation',id]\">Ajouter tâche</button>\r\n        </div>\r\n        <table class=\"table table-striped\"  >\r\n            <thead class=\"thead entete\" >\r\n              <tr>\r\n                <th>N°</th>\r\n                <th>Désignation</th>\r\n                <th>Réalisateur</th>\r\n                <th>Lieu</th>\r\n                <th>Statut</th>\r\n                <th>Date début</th>\r\n                <th>Date fin</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody >\r\n              <tr *ngFor=\"let tache of taches\">\r\n\r\n                <td>{{tache.id}}</td>\r\n                <td>{{tache.designation.libelle}}</td>\r\n                <td> {{tache.porteurInterne.nom}} {{tache.porteurInterne.prenom}}</td>\r\n                <td>{{tache.salle.libelle}}</td>\r\n                <td>{{tache.statut.libelle}}</td>\r\n                <td>{{tache.datedebut | date: \"dd MMMM yyyy\"}}</td>\r\n                <td>{{tache.datefin | date: \"dd MMMM yyyy\"}}</td>\r\n                <td> \r\n                  <!-- <a [routerLink]=\"['/dashboard/modifiertache/',tache.id ]\"><i class=\"bi bi-pencil-square\"\r\n                      style=\"color: green; font-size:20px;\" ></i>\r\n                    </a>  -->\r\n                    <a (click)=\"popDeleteTache(tache.id)\">\r\n                      <i class=\"bi bi-trash3\"\r\n                           style=\"color: red; font-size:20px;\"></i>\r\n                    </a>\r\n                </td>\r\n              </tr>    \r\n              </tbody>\r\n          </table>\r\n        </div>\r\n    \r\n      <!-- <button  class=\"tache\" routerLink=\"\">Ajouter tâche</button>\r\n    </div>\r\n  </div> -->\r\n \r\n  <!-- <div class=\"container\">\r\n      <div> \r\n          <button  class=\"tache\" [routerLink]=\"['/dashboard/creertachesdesignation',id]\">Ajouter tâche</button>\r\n      </div>\r\n      <table class=\"table table-striped\"  >\r\n          <thead class=\"thead entete\" >\r\n            <tr>\r\n              <th>Désignation</th>\r\n              <th>Réalisateur</th>\r\n              <th>Lieu</th>\r\n              <th>Statut</th>\r\n              <th>Date début</th>\r\n              <th>Date fin</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngFor=\"let tache of taches\">\r\n            <tr >\r\n              {{tache.designation.libelle}}\r\n              {{tache.porteur}} -->\r\n              <!-- <td>{{tache.designation.libelle}}</td>\r\n              <td> {{tache.porteurInterne.nom}} {{tache.porteurInterne.prenom}}</td>\r\n              <td>{{tache.salle.libelle}}</td>\r\n              <td>{{tache.statut.libelle}}</td>\r\n              <td>{{tache.datedebut | date: \"dd MMMM yyyy\"}}</td>\r\n              <td>{{tache.datefin | date: \"dd MMMM yyyy\"}}</td>\r\n            </tr>    \r\n            </tbody>\r\n        </table>\r\n      </div> -->\r\n  \r\n\r\n\r\n  <!-- <div class=\"header\">\r\n\r\n    <div class=\"headerContent\">\r\n      <button  class=\"filtre2\" ><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Télécharger </button>\r\n      <pagination-controls (pageChange)=\"a = $event\" nextLabel=\"Suivants\" previousLabel=\"Précédents\" ></pagination-controls>\r\n\r\n    </div>\r\n  </div>  -->\r\n\r\n  <div class=\"pagination\">\r\n    <pagination-controls (pageChange)=\"p=$event\" nextLabel=\"Suivants\" previousLabel=\"Précédents\"></pagination-controls>\r\n</div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_tachedesignation_tachedesignation_module_ts.js.map