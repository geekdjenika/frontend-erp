"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_nouveaupersonnel_nouveaupersonnel_module_ts"],{

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

/***/ 5357:
/*!*********************************************************************!*\
  !*** ./src/app/nouveaupersonnel/nouveaupersonnel-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NouveaupersonnelPageRoutingModule": () => (/* binding */ NouveaupersonnelPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _nouveaupersonnel_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nouveaupersonnel.page */ 7775);




const routes = [
    {
        path: '',
        component: _nouveaupersonnel_page__WEBPACK_IMPORTED_MODULE_0__.NouveaupersonnelPage
    }
];
let NouveaupersonnelPageRoutingModule = class NouveaupersonnelPageRoutingModule {
};
NouveaupersonnelPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NouveaupersonnelPageRoutingModule);



/***/ }),

/***/ 4462:
/*!*************************************************************!*\
  !*** ./src/app/nouveaupersonnel/nouveaupersonnel.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NouveaupersonnelPageModule": () => (/* binding */ NouveaupersonnelPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _nouveaupersonnel_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nouveaupersonnel-routing.module */ 5357);
/* harmony import */ var _nouveaupersonnel_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nouveaupersonnel.page */ 7775);
/* harmony import */ var _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cloche/cloche.component */ 7907);








let NouveaupersonnelPageModule = class NouveaupersonnelPageModule {
};
NouveaupersonnelPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _nouveaupersonnel_routing_module__WEBPACK_IMPORTED_MODULE_0__.NouveaupersonnelPageRoutingModule
        ],
        declarations: [_nouveaupersonnel_page__WEBPACK_IMPORTED_MODULE_1__.NouveaupersonnelPage, _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__.ClocheComponent]
    })
], NouveaupersonnelPageModule);



/***/ }),

/***/ 7775:
/*!***********************************************************!*\
  !*** ./src/app/nouveaupersonnel/nouveaupersonnel.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NouveaupersonnelPage": () => (/* binding */ NouveaupersonnelPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _nouveaupersonnel_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nouveaupersonnel.page.html?ngResource */ 3605);
/* harmony import */ var _nouveaupersonnel_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nouveaupersonnel.page.scss?ngResource */ 8814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_entite_entite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/entite/entite.service */ 6738);
/* harmony import */ var _services_role_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/role/role.service */ 4001);
/* harmony import */ var _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/utilisateur/utilisateur.service */ 4996);










let NouveaupersonnelPage = class NouveaupersonnelPage {
    constructor(router, alertController, entiteService, roleservice, userService) {
        this.router = router;
        this.alertController = alertController;
        this.entiteService = entiteService;
        this.roleservice = roleservice;
        this.userService = userService;
    }
    ngOnInit() {
        this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
        console.log(this.Utilisateur);
        this.entiteService.getAllEntites(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            if (data.message == 'ok') {
                this.Entites = data.data;
                console.log(this.Entites);
            }
        });
        this.roleservice.getAllRole(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            if (data.message == "ok") {
                this.Roles = data.data;
                console.log(this.Roles);
            }
        });
        this.roleservice.getListeFormatMail(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            if (data.message == "ok") {
                this.formatMail = data.data;
                console.log(this.formatMail);
            }
        });
    }
    back() {
        window.history.back();
    }
    envoyerImage(event) {
        this.image = event.target["files"][0];
        console.log(this.image);
    }
    // async presentAlert() {
    //   const alert = await this.alertController.create({
    //     header: 'Validé!!!',
    //     subHeader: 'Personnel créée avec Succès!!',
    //     buttons: ['OK'],
    //   });
    //   await alert.present();
    // }
    // async notpresent() {
    //   const alert = await this.alertController.create({
    //     header: 'Personnel non créée!!!',
    //     subHeader: 'veuillez réessayer!!',
    //     buttons: ['OK'],
    //   });
    //   await alert.present();
    // }
    alertSiTousLesChampSonVide() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            title: "Tous les champs sont Obligatoires",
            showConfirmButton: true,
            confirmButtonText: "OK",
            confirmButtonColor: 'red',
            heightAuto: false
        });
    }
    alertSiTousLesChampSonBienRenseigner() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            title: "Personnel crée avec succès",
            showConfirmButton: true,
            confirmButtonText: "OK",
            confirmButtonColor: '#FF7900',
            heightAuto: false
        }).then((result) => {
            if (result.isConfirmed) {
                this.router.navigateByUrl('/dashboard/personnels', { skipLocationChange: true }).then(() => {
                    this.router.navigate(["/personnels"]);
                });
            }
            else if (result.isDenied) {
                this.router.navigateByUrl('/dashboard/personnels');
            }
        });
    }
    CreateUser() {
        for (let i = 0; i < this.Entites.length; i++) {
            if (this.Entites[i].libelleentite == this.entite) {
                this.EntiteSelectioner = this.Entites[i];
            }
        }
        for (let i = 0; i < this.Roles.length; i++) {
            if (this.Roles[i].libellerole == this.role) {
                this.RoleSelectionner = this.Roles[i];
            }
        }
        for (let i = 0; i < this.formatMail.length; i++) {
            if (this.formatMail[i].libelle == this.domaine) {
                this.formatMailSelectionner = this.formatMail[i];
            }
        }
        console.log(this.RoleSelectionner);
        console.log(this.EntiteSelectioner);
        console.log(this.formatMailSelectionner);
        if (this.genre == 'Masculin') {
            this.Genre = 0;
        }
        else {
            this.Genre = 1;
        }
        this.userService.CreateUser(this.Utilisateur.login, this.Utilisateur.password, this.nom, this.prenom, this.email + this.domaine, this.Genre, this.image, this.EntiteSelectioner, this.RoleSelectionner).subscribe(retour => {
            console.log(retour);
            this.alertSiTousLesChampSonBienRenseigner();
            // this.presentAlert()
        });
    }
};
NouveaupersonnelPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _services_entite_entite_service__WEBPACK_IMPORTED_MODULE_3__.EntiteService },
    { type: _services_role_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService },
    { type: _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_5__.UtilisateurService }
];
NouveaupersonnelPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-nouveaupersonnel',
        template: _nouveaupersonnel_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nouveaupersonnel_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NouveaupersonnelPage);



/***/ }),

/***/ 7993:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "#notift {\n  font-size: 11px;\n  border-radius: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 12px;\n  right: 0px;\n  height: 11px;\n  width: 11px;\n  background-color: #fff;\n}\n\n.iconCloche {\n  border-radius: 15px;\n  border: #ff7900 2px solid;\n}\n\n.iconCloche:hover {\n  border-radius: 15px;\n  background-color: #ff7900;\n  color: #fff;\n  font-size: 25px !important;\n}\n\n.iconCloche:hover #notift {\n  background-color: #ffffff;\n  color: #ff7900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb2NoZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUdKIiwiZmlsZSI6ImNsb2NoZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZnR7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgd2lkdGg6IDExcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uaWNvbkNsb2NoZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6ICNmZjc5MDAgMnB4IHNvbGlkO1xyXG59XHJcblxyXG4uaWNvbkNsb2NoZTpob3ZlcntcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgI25vdGlmdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI2ZmNzkwMDtcclxuICB9XHJcbn1cclxuLy8gLmJ0bntcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC5idG46aG92ZXJ7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbi8vICAgY29sb3I6ICNGRjc5MDAgIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgLmJ0biA+IGk6aG92ZXJ7XHJcbi8vICAgICBjb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuICAiXX0= */";

/***/ }),

/***/ 8814:
/*!************************************************************************!*\
  !*** ./src/app/nouveaupersonnel/nouveaupersonnel.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: myfon;\n  src: url('Poppins-Light.ttf');\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: myfon;\n}\n#back {\n  cursor: pointer;\n}\n.firsttitle {\n  text-transform: uppercase;\n  font-size: 2rem;\n}\n.mail {\n  display: flex;\n  flex-direction: row;\n  color: #000;\n  background-color: #f8fafc;\n}\nion-title {\n  color: #FF7900;\n}\nion-content {\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\nh1 {\n  font-family: \"Poppins\", sans-serif;\n  margin: 15px;\n  font-size: 2rem;\n  font-weight: bold;\n  text-align: center;\n  padding: 3px 6px;\n  position: absolute;\n  top: 9%;\n  background-color: #FFF;\n  color: #FF7900;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.container {\n  max-width: 900px;\n  width: 100%;\n  padding: 25px 30px;\n  border-radius: 15px;\n  background: #fff;\n  margin: 20px auto;\n}\n.box {\n  width: 100%;\n  padding: 50px 30px;\n  border-radius: 15px;\n  border: #000 3px solid;\n  margin: 20px auto;\n}\n.mail {\n  position: relative;\n}\n#inp {\n  border-radius: 15px 0px 0px 15px;\n}\n.mailmodel {\n  color: #000;\n  background-color: #E9ECEF;\n  outline: none;\n  height: 40px;\n  width: 100%;\n  border-radius: 0px 15px 15px 0px;\n  border: 1px solid #ccc;\n  font-size: 12px;\n  border-bottom-width: 2px;\n  transition: all 0, 3s ease;\n  padding-left: 1px;\n  color: #000;\n  width: 100%;\n  padding: 3.25%;\n  align-items: center;\n}\ninput {\n  color: #000;\n  background-color: #f8fafc;\n}\n.container form .ajout {\n  color: #FF7900;\n  margin-top: 25px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 20px 0 12px 0;\n}\nform .ajout .input-box {\n  margin-bottom: 15px;\n  width: calc(50% - 20px);\n}\n.select {\n  color: #000;\n  width: 100%;\n  padding: 3.25%;\n  margin-top: 1px;\n  align-items: center;\n  border-radius: 15px;\n}\n.ajout .input-box .details {\n  display: block;\n  font-weight: 500;\n}\n#details {\n  border-radius: 15px;\n}\n.ajout .input-box input {\n  outline: none;\n  height: 40px;\n  width: 100%;\n  border-radius: 15px;\n  border: 1px solid #ccc;\n  padding-left: 15px;\n  font-size: 14px;\n  border-bottom-width: 2px;\n  transition: all 0, 3s ease;\n}\n.ajout .input-box input:focus,\n.ajout .input-box input:valid {\n  border-color: #ccc;\n}\nform .button {\n  height: 45px;\n  margin: 45px 0;\n  width: 100%;\n  display: flex;\n  justify-content: end;\n}\n.but {\n  border-radius: 15px;\n  padding: 8px;\n  background-color: #FF7900;\n  color: #FFF;\n  border: #FF7900 1px solid;\n  margin-right: 30px;\n}\n.but:hover {\n  background: #FFF;\n  color: #FF7900;\n}\nform .button .input {\n  height: 100%;\n  width: 45%;\n  color: white;\n  border: none;\n  font-size: 18px;\n  font-weight: 500;\n  border-radius: 15px;\n  letter-spacing: 1px;\n}\nform .button input:hover {\n  background: linear-gradient(135deg);\n}\ntextarea {\n  color: #000;\n}\n@media (max-width: 1010px) {\n  .mailmodel span {\n    font-size: 12px;\n  }\n  h1 {\n    font-size: 25px;\n  }\n}\n@media (max-width: 584px) {\n  h1 {\n    top: 11%;\n  }\n  .container {\n    max-width: 100%;\n  }\n  form .ajout .input-box {\n    margin-bottom: 15px;\n    width: 100%;\n  }\n  .container form .ajout {\n    max-height: 300px;\n    overflow-y: scroll;\n  }\n  h1 {\n    width: max-content;\n    font-size: 18px;\n  }\n  .ajout::-webkit-scrollbar {\n    width: 0;\n  }\n}\n@media (max-width: 390px) {\n  .mailmodel span {\n    font-size: 12px;\n  }\n  h1 {\n    font-size: 20px;\n    padding-right: 2rem;\n  }\n}\n@media (max-width: 316px) {\n  .select {\n    font-size: 15px;\n  }\n  .firsttitle {\n    margin-left: none;\n    font-size: 1rem;\n  }\n  #back {\n    top: 22px;\n    position: absolute;\n    font-size: 10px;\n  }\n  ion-title {\n    margin-left: 1em;\n  }\n  .col i {\n    margin-right: 1em;\n    margin-bottom: 1em;\n    font-size: 20px;\n  }\n  .buttom {\n    height: 25px;\n    margin: 30px 0;\n  }\n  .but {\n    font-size: 13px;\n  }\n  .details {\n    font-size: 14px;\n  }\n  .mailmodel span {\n    font-size: 10px;\n  }\n  h1 {\n    font-size: 16px;\n    padding-right: 2rem;\n    top: 8%;\n  }\n  .box {\n    padding: 6px;\n    border: #000 1px solid;\n  }\n  .container {\n    padding: 4%;\n  }\n  .ajout .input-box input {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdXZlYXVwZXJzb25uZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQ0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVBO0VBQ0ksZUFBQTtBQUNKO0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGVBQUE7QUFFSjtBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBRUo7QUFBQTtFQUNJLGNBQUE7QUFHSjtBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUdKO0FBQUE7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBR0o7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLGlCQUFBO0FBQ0o7QUFDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUVKO0FBQUE7RUFDSSxrQkFBQTtBQUdKO0FBREE7RUFDSSxnQ0FBQTtBQUlKO0FBRkE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBS0o7QUFGQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQUtKO0FBRkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFLSjtBQUZBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtBQUtKO0FBRkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUtKO0FBRkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFLSjtBQUZBO0VBQ0ksbUJBQUE7QUFLSjtBQUZBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUFLSjtBQUZBOztFQUVJLGtCQUFBO0FBS0o7QUFGQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUtKO0FBRkE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBS0o7QUFGQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQUtKO0FBRkE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUtKO0FBREE7RUFDSSxtQ0FBQTtBQUlKO0FBREE7RUFDSSxXQUFBO0FBSUo7QUFEQTtFQUNJO0lBQ0ksZUFBQTtFQUlOO0VBRkU7SUFDSSxlQUFBO0VBSU47QUFDRjtBQURBO0VBQ0k7SUFDSSxRQUFBO0VBR047RUFERTtJQUNJLGVBQUE7RUFHTjtFQURFO0lBQ0ksbUJBQUE7SUFDQSxXQUFBO0VBR047RUFERTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7RUFHTjtFQURFO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VBR047RUFERTtJQUNJLFFBQUE7RUFHTjtBQUNGO0FBREE7RUFDSTtJQUNJLGVBQUE7RUFHTjtFQURFO0lBQ0ksZUFBQTtJQUNBLG1CQUFBO0VBR047QUFDRjtBQURBO0VBQ0k7SUFDSSxlQUFBO0VBR047RUFERTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtFQUdOO0VBREU7SUFDSSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VBR047RUFERTtJQUNJLGdCQUFBO0VBR047RUFERTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VBR047RUFEQztJQUNDLFlBQUE7SUFDQSxjQUFBO0VBR0Y7RUFEQztJQUNDLGVBQUE7RUFHRjtFQURFO0lBQ0ksZUFBQTtFQUdOO0VBREU7SUFDSSxlQUFBO0VBR047RUFERTtJQUNJLGVBQUE7SUFDQSxtQkFBQTtJQUNBLE9BQUE7RUFHTjtFQURFO0lBQ0ksWUFBQTtJQUNBLHNCQUFBO0VBR047RUFERTtJQUNJLFdBQUE7RUFHTjtFQURFO0lBQ0ksZUFBQTtFQUdOO0FBQ0YiLCJmaWxlIjoibm91dmVhdXBlcnNvbm5lbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBteWZvbjtcclxuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udC9Qb3BwaW5zLUxpZ2h0LnR0ZicpO1xyXG59XHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LWZhbWlseTogbXlmb247XHJcbn1cclxuXHJcbiNiYWNre1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5maXJzdHRpdGxle1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLm1haWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcclxufVxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogI0ZGNzkwMDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzcHggNnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA5JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBjb2xvcjogI0ZGNzkwMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC8vIGJvcmRlcjogIzAwMCAzcHggc29saWQ7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG4uYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNTBweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlcjogIzAwMCAzcHggc29saWQ7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG4ubWFpbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4jaW5we1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAwcHggMHB4IDE1cHg7XHJcbn1cclxuLm1haWxtb2RlbHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RUNFRjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDE1cHggMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLCAzcyBlYXNlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMy4yNSU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XHJcbn1cclxuXHJcbi5jb250YWluZXIgZm9ybSAuYWpvdXQge1xyXG4gICAgY29sb3I6ICNGRjc5MDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbjogMjBweCAwIDEycHggMDtcclxufVxyXG5cclxuZm9ybSAuYWpvdXQgLmlucHV0LWJveCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDIgLSAyMHB4KTtcclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMy4yNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmFqb3V0IC5pbnB1dC1ib3ggLmRldGFpbHMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4jZGV0YWlscyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uYWpvdXQgLmlucHV0LWJveCBpbnB1dCB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLCAzcyBlYXNlO1xyXG59XHJcblxyXG4uYWpvdXQgLmlucHV0LWJveCBpbnB1dDpmb2N1cyxcclxuLmFqb3V0IC5pbnB1dC1ib3ggaW5wdXQ6dmFsaWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG5mb3JtIC5idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luOiA0NXB4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxufVxyXG5cclxuLmJ1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzkwMDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgYm9yZGVyOiAjRkY3OTAwIDFweCBzb2xpZDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmJ1dDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgY29sb3I6ICNGRjc5MDA7XHJcbn1cclxuXHJcbmZvcm0gLmJ1dHRvbiAuaW5wdXQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGNvbG9yOiAjRkZGRjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgXHJcbn1cclxuXHJcbmZvcm0gLmJ1dHRvbiBpbnB1dDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnKTtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDEwcHgpIHtcclxuICAgIC5tYWlsbW9kZWwgc3BhbntcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1ODRweCkge1xyXG4gICAgaDF7XHJcbiAgICAgICAgdG9wOiAxMSU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBmb3JtIC5ham91dCAuaW5wdXQtYm94IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciBmb3JtIC5ham91dCB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAuYWpvdXQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzkwcHgpIHtcclxuICAgIC5tYWlsbW9kZWwgc3BhbntcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICBoMXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMnJlbTtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMzE2cHgpIHtcclxuICAgIC5zZWxlY3R7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmZpcnN0dGl0bGV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgI2JhY2t7XHJcbiAgICAgICAgdG9wOiAyMnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIH1cclxuICAgIC5jb2wgaXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAuYnV0dG9te1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgIH1cclxuICAgLmJ1dHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgfVxyXG4gICAgLmRldGFpbHN7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLm1haWxtb2RlbCBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gICAgICAgIHRvcDogOCU7XHJcbiAgICB9XHJcbiAgICAuYm94e1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICBib3JkZXI6ICMwMDAgMXB4IHNvbGlkO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICBwYWRkaW5nOiA0JTtcclxuICAgIH1cclxuICAgIC5ham91dCAuaW5wdXQtYm94IGlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 9956:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\"\r\n    integrity=\"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==\"\r\n    crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n<!-- <div class=\"iconCloche\" (click)=\"OpenNotification($event)\">\r\n  <i class=\"fa-regular fa-bell\"></i><span>2</span>\r\n</div> -->\r\n<div class=\"col reporting\">\r\n  <button type=\"button\" class=\"btn buttonColor\"  class=\"iconCloche\" (click)=\"OpenNotification($event)\"><i class=\"fa-regular fa-bell\"></i><span id=\"notift\">{{this.notifTotal}}</span></button>\r\n</div>";

/***/ }),

/***/ 3605:
/*!************************************************************************!*\
  !*** ./src/app/nouveaupersonnel/nouveaupersonnel.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Ajouter personnel</ion-title>\r\n    <ion-button slot=\"end\" fill=\"clear\">\r\n      <app-cloche></app-cloche>\r\n\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <form action=\"#\" #f=\"ngForm\" autocomplete=\"off\">\r\n      <a (click)=\"back()\" id=\"back\"> <p><i class=\"fa fa-hand-o-left\" style=\"font-size:20px\"></i> Retour</p></a> \r\n      <div class=\"box\">\r\n        <h1>Nouveau personnel</h1>\r\n        <div class=\"ajout\">\r\n          <div class=\"input-box\">\r\n            <span class=\"details\">Nom *</span>\r\n            <input type=\"text\" [(ngModel)]=\"nom\" class=\"form-control\" placeholder=\"Nom du personnel\" name=\"nom\" required>\r\n          </div>\r\n          <div class=\"input-box\">\r\n            <span class=\"details\">Email *</span>\r\n            <div class=\"mail\">\r\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"personnel...\" id=\"inp\" required>\r\n              <!-- <span class=\"input-group-text\" aria-label=\"fin de mail\">@orangemali.com</span> -->\r\n              <div style=\"width: 270px;\">\r\n                <select name=\"domaine\" class=\"mailmodel\" class=\"form-control\" [(ngModel)]=\"domaine\">\r\n                  <option selected>--Choisisez un domaine--</option>\r\n                  <option *ngFor=\"let d of formatMail\" >{{d.libelle}}</option>\r\n                  <!-- <option value=\"\">@orangefablab.com</option>\r\n                  <option value=\"\">@orangemali.com</option>\r\n                  <option value=\"\">@orangedigitalcenter.com</option> -->\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"input-box\">\r\n            <span class=\"details\">Prénom *</span>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"prenom\" placeholder=\"Prénom du personnel\" name=\"prenom\" required>\r\n          </div>\r\n          <!-- <div class=\"input-box\">\r\n            <span class=\"details\">Date de naissance *</span>\r\n            <input type=\"date\" [(ngModel)]=\"datenaissance\" placeholder=\"La date de naissance\" name=\"datenaissance\">\r\n          </div> -->\r\n          <!-- <div class=\"input-box\">\r\n            <span class=\"details\">Telephone *</span>\r\n            <input type=\"text\" [(ngModel)]=\"telephone\" placeholder=\"Numéro de telephone\" name=\"telephone\">\r\n          </div> -->\r\n          <div class=\"input-box\">\r\n            <span class=\"details\">Genre *</span>\r\n            <select name=\"genre\" class=\"form-control\" [(ngModel)]=\"genre\" class=\"select\" required>\r\n              <option selected>--Votre genre--</option>\r\n              <option >Masculin</option>\r\n              <option >Feminin</option>\r\n              <!-- <option *ngFor=\"let entite of Entites\" >{{entite.libelleentite}}</option> -->\r\n              \r\n            </select>\r\n        </div>\r\n<!-- \r\n        <div class=\"input-box\">\r\n          <span class=\"details\">Lieu de nanissance *</span>\r\n          <select name=\"lieunaissance\" class=\"form-control\" [(ngModel)]=\"lieunaissance\" class=\"select\" required>\r\n            <option selected>Bamako</option>\r\n            <option >Kayes</option>\r\n            <option >Koulikoro</option>\r\n            <option >Sikasso</option>\r\n            <option >Segou</option>\r\n            <option >Mopti</option>\r\n            <option >Tombouctou</option>\r\n            <option >Gao</option>\r\n            <option >Kidal</option>\r\n              <option >Tadoudeni</option>\r\n            <option >Menaca</option>\r\n            \r\n          </select>\r\n      </div> -->\r\n\r\n      <!-- <div class=\"input-box\">\r\n        <span class=\"details\" for=\"phone\">Numéro de telephone *</span>\r\n        <input type=\"tel\"  id=\"phone\" name=\"contact\"  [(ngModel)]=\"contact\" placeholder=\"70000000\" pattern=\"[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}\" required>\r\n\r\n      </div> -->\r\n\r\n          <div class=\"input-box\">\r\n            <span class=\"details\">Entité *</span>\r\n            <select class=\"select\" class=\"form-control\" [(ngModel)]=\"entite\" name=\"entite\" required>\r\n              <option >--Choisisez une entité--</option>\r\n              <option *ngFor=\"let entite of Entites\" required=\"required\">{{entite.libelleentite}}</option>\r\n              <!-- <option value=\"\">Orange Digital Kalanso</option>\r\n              <option value=\"\">Orange FabLab</option> -->\r\n            </select>\r\n          </div>\r\n        \r\n\r\n          <div class=\"input-box\">\r\n            <span class=\"details\">Rôle *</span>\r\n            <select class=\"select\" class=\"form-control\" [(ngModel)]=\"role\" name=\"role\">\r\n              <option value=\"\">--Choisisez un role--</option>\r\n              <option *ngFor=\"let role of Roles\" >{{role.libellerole}}</option>\r\n            </select>\r\n          </div>\r\n  \r\n          <div class=\"input-box\">\r\n            <span class=\"details\">Ajouter image *</span>\r\n            <input type=\"file\" class=\"form-control\" class=\"form-control\" placeholder=\"Logo.jpg\" id=\"logo\"\r\n              accept=\"image/png, image/jpeg, image/jpg\" (change)=\"envoyerImage($event)\">\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n      <div class=\"button\">\r\n        <button [disabled]=\"f.form.invalid\" [style.backgroundColor]=\"'#FF7900'\"type=\"button\" class=\"but\" (click)=\"CreateUser()\" class=\"btn btn-outline-dark bouton\">Ajouter</button>\r\n        \r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_nouveaupersonnel_nouveaupersonnel_module_ts.js.map