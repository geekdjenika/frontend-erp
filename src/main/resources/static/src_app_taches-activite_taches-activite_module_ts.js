"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_taches-activite_taches-activite_module_ts"],{

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

/***/ 2636:
/*!*******************************************************************!*\
  !*** ./src/app/taches-activite/taches-activite-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TachesActivitePageRoutingModule": () => (/* binding */ TachesActivitePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _taches_activite_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taches-activite.page */ 3109);




const routes = [
    {
        path: '',
        component: _taches_activite_page__WEBPACK_IMPORTED_MODULE_0__.TachesActivitePage
    }
];
let TachesActivitePageRoutingModule = class TachesActivitePageRoutingModule {
};
TachesActivitePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TachesActivitePageRoutingModule);



/***/ }),

/***/ 533:
/*!***********************************************************!*\
  !*** ./src/app/taches-activite/taches-activite.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TachesActivitePageModule": () => (/* binding */ TachesActivitePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _taches_activite_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taches-activite-routing.module */ 2636);
/* harmony import */ var _taches_activite_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taches-activite.page */ 3109);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 7043);
/* harmony import */ var _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cloche/cloche.component */ 7907);









let TachesActivitePageModule = class TachesActivitePageModule {
};
TachesActivitePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _taches_activite_routing_module__WEBPACK_IMPORTED_MODULE_0__.TachesActivitePageRoutingModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.NgxPaginationModule,
        ],
        declarations: [_taches_activite_page__WEBPACK_IMPORTED_MODULE_1__.TachesActivitePage, _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__.ClocheComponent],
    })
], TachesActivitePageModule);



/***/ }),

/***/ 3109:
/*!*********************************************************!*\
  !*** ./src/app/taches-activite/taches-activite.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TachesActivitePage": () => (/* binding */ TachesActivitePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _taches_activite_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taches-activite.page.html?ngResource */ 6529);
/* harmony import */ var _taches_activite_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taches-activite.page.scss?ngResource */ 6622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let TachesActivitePage = class TachesActivitePage {
    constructor(router, popoverCtrl) {
        this.router = router;
        this.popoverCtrl = popoverCtrl;
        this.pages = 1;
        this.students = [
            {
                Designation: 'tache 1',
                Realisateur: 'Abdoulaye',
                Lieu: 'salle 1',
                Statut: 'encours',
                Dated: '01-6-2022',
                Datef: '01-12-2022'
            },
            {
                Designation: 'tache 2',
                Realisateur: 'Aboubacar',
                Lieu: 'salle 2',
                Statut: 'terminé',
                Dated: '01-6-2022',
                Datef: '01-7-2022'
            },
            {
                Designation: 'tache 3',
                Realisateur: 'Karim',
                Lieu: 'salle 2',
                Statut: 'encours',
                Dated: '01-6-2022',
                Datef: '01-12-2022'
            },
            {
                Designation: 'tache 4',
                Realisateur: 'Abdoulaye',
                Lieu: 'salle 1',
                Statut: 'terminé',
                Dated: '01-3-2022',
                Datef: '01-6-2022'
            },
            {
                Designation: 'tache 5',
                Realisateur: 'Ousmane',
                Lieu: 'salle 1',
                Statut: 'terminé',
                Dated: '01-8-2022',
                Datef: '01-9-2022'
            },
            {
                Designation: 'tache 6',
                Realisateur: 'Ousmane',
                Lieu: 'salle 1',
                Statut: 'terminé',
                Dated: '01-8-2022',
                Datef: '01-9-2022'
            },
            {
                Designation: 'tache 5',
                Realisateur: 'Ousmane',
                Lieu: 'salle 1',
                Statut: 'terminé',
                Dated: '01-8-2022',
                Datef: '01-9-2022'
            },
        ];
    }
    ngOnInit() {
    }
};
TachesActivitePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController }
];
TachesActivitePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-taches-activite',
        template: _taches_activite_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_taches_activite_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TachesActivitePage);



/***/ }),

/***/ 7993:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "#notift {\n  font-size: 11px;\n  border-radius: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 12px;\n  right: 0px;\n  height: 11px;\n  width: 11px;\n  background-color: #fff;\n}\n\n.iconCloche {\n  border-radius: 15px;\n  border: #ff7900 2px solid;\n}\n\n.iconCloche:hover {\n  border-radius: 15px;\n  background-color: #ff7900;\n  color: #fff;\n  font-size: 25px !important;\n}\n\n.iconCloche:hover #notift {\n  background-color: #ffffff;\n  color: #ff7900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb2NoZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUdKIiwiZmlsZSI6ImNsb2NoZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZnR7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgd2lkdGg6IDExcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uaWNvbkNsb2NoZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6ICNmZjc5MDAgMnB4IHNvbGlkO1xyXG59XHJcblxyXG4uaWNvbkNsb2NoZTpob3ZlcntcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgI25vdGlmdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI2ZmNzkwMDtcclxuICB9XHJcbn1cclxuLy8gLmJ0bntcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC5idG46aG92ZXJ7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbi8vICAgY29sb3I6ICNGRjc5MDAgIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgLmJ0biA+IGk6aG92ZXJ7XHJcbi8vICAgICBjb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuICAiXX0= */";

/***/ }),

/***/ 6622:
/*!**********************************************************************!*\
  !*** ./src/app/taches-activite/taches-activite.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "td {\n  font-family: myfon2;\n}\n\nth {\n  font-family: myfon2;\n  color: white !important;\n  font-weight: 600;\n}\n\nthead {\n  background-color: #FF7900;\n}\n\n@media screen and (max-width: 900px) {\n  .form-select {\n    font-size: medium;\n  }\n  .buttonColor {\n    font-size: medium;\n    text-align: center;\n  }\n  .hideColonneOder {\n    display: none;\n  }\n  th {\n    font-size: medium;\n  }\n  td {\n    font-size: small;\n  }\n}\n\n@media screen and (max-width: 450px) {\n  .buttonColor {\n    font-size: small;\n  }\n  .hideColonne {\n    display: none;\n  }\n  th {\n    font-size: medium;\n  }\n  td {\n    font-size: small;\n  }\n}\n\n.fa-bell:hover {\n  background-color: #FF7900;\n  color: #fff;\n  border-radius: 15px;\n}\n\n.fa-bell {\n  color: #FF7900;\n  border-radius: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhY2hlcy1hY3Rpdml0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxtQkFBQTtBQUFGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtBQUVGOztBQUNBO0VBQ0U7SUFDRSxpQkFBQTtFQUVGO0VBQUE7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VBRUY7RUFBQTtJQUNFLGFBQUE7RUFFRjtFQUFBO0lBQ0UsaUJBQUE7RUFFRjtFQUNBO0lBQ0UsZ0JBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBQTtFQUFGO0VBRUE7SUFDRSxhQUFBO0VBQUY7RUFFQTtJQUNFLGlCQUFBO0VBQUY7RUFFQTtJQUNFLGdCQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFBRiIsImZpbGUiOiJ0YWNoZXMtYWN0aXZpdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU3R5bGUgYXBwbGlxdWVyIGF1IHRhYmxlYXVcclxudGR7XHJcbiAgZm9udC1mYW1pbHk6IG15Zm9uMjtcclxufVxyXG50aHtcclxuICBmb250LWZhbWlseTogbXlmb24yO1xyXG4gIGNvbG9yOiAjZmZmZiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxudGhlYWR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzkwMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAuZm9ybS1zZWxlY3R7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICB9XHJcbiAgLmJ1dHRvbkNvbG9ye1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5oaWRlQ29sb25uZU9kZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICB0aHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cclxuICB9XHJcbiAgdGR7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gIH1cclxuXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAuYnV0dG9uQ29sb3J7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gIH1cclxuICAuaGlkZUNvbG9ubmV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICB0aHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIH1cclxuICB0ZHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgfVxyXG5cclxufVxyXG4uZmEtYmVsbDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5mYS1iZWxse1xyXG4gIGNvbG9yOiNGRjc5MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMCU7XHJcbn1cclxuXHJcblxyXG4iXX0= */";

/***/ }),

/***/ 9956:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\"\r\n    integrity=\"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==\"\r\n    crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n<!-- <div class=\"iconCloche\" (click)=\"OpenNotification($event)\">\r\n  <i class=\"fa-regular fa-bell\"></i><span>2</span>\r\n</div> -->\r\n<div class=\"col reporting\">\r\n  <button type=\"button\" class=\"btn buttonColor\"  class=\"iconCloche\" (click)=\"OpenNotification($event)\"><i class=\"fa-regular fa-bell\"></i><span id=\"notift\">{{this.notifTotal}}</span></button>\r\n</div>";

/***/ }),

/***/ 6529:
/*!**********************************************************************!*\
  !*** ./src/app/taches-activite/taches-activite.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\" integrity=\"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"11\">\r\n          <ion-title class=\"ion-align-self-start\">notification</ion-title>\r\n        </ion-col>\r\n        <ion-col size=\"1\">\r\n          <ion-title  class=\"ion-align-sef-end\"><div class=\"col\"><i class=\"fa-regular fa-bell\"></i></div></ion-title>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Modifier salle</ion-title>\r\n    <ion-button slot=\"end\" fill=\"clear\">\r\n            <app-cloche></app-cloche>\r\n\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\"\r\n  integrity=\"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==\"\r\n  crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n\r\n\r\n<ion-content>\r\n  <table class=\"table table-striped text-center\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">Désignation</th>\r\n        <th scope=\"col\">Réalisateur</th>\r\n        <th scope=\"col\" class=\"hideColonne hideColonneOder\">Lieu</th>\r\n        <th scope=\"col\">Statut</th>\r\n        <th scope=\"col\" class=\"hideColonne hideColonneOder\">Date début</th>\r\n        <th scope=\"col\" class=\"hideColonne\">Date fin</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let table of students | paginate: { itemsPerPage: 5, currentPage: pages}\">\r\n        <td> {{table.Designation}} </td>\r\n        <td> {{table.Realisateur}} </td>\r\n        <td class=\"hideColonne hideColonneOder\"> {{table.Lieu}} </td>\r\n        <td> {{table.Statut}} </td>\r\n        <td class=\"hideColonne hideColonneOder\"> {{table.Dated}} </td>\r\n        <td class=\"hideColonne\">{{table.Datef}}</td>\r\n      </tr>\r\n      <pagination-controls (pageChange)=\" pages = $event\"> </pagination-controls>\r\n    </tbody>\r\n\r\n  </table>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_taches-activite_taches-activite_module_ts.js.map