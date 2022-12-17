"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modifiertache_modifiertache_module_ts"],{

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

/***/ 6037:
/*!***************************************************************!*\
  !*** ./src/app/modifiertache/modifiertache-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModifiertachePageRoutingModule": () => (/* binding */ ModifiertachePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _modifiertache_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiertache.page */ 2464);




const routes = [
    {
        path: '',
        component: _modifiertache_page__WEBPACK_IMPORTED_MODULE_0__.ModifiertachePage
    }
];
let ModifiertachePageRoutingModule = class ModifiertachePageRoutingModule {
};
ModifiertachePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModifiertachePageRoutingModule);



/***/ }),

/***/ 9987:
/*!*******************************************************!*\
  !*** ./src/app/modifiertache/modifiertache.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModifiertachePageModule": () => (/* binding */ ModifiertachePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _modifiertache_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiertache-routing.module */ 6037);
/* harmony import */ var _modifiertache_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiertache.page */ 2464);
/* harmony import */ var _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cloche/cloche.component */ 7907);








let ModifiertachePageModule = class ModifiertachePageModule {
};
ModifiertachePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _modifiertache_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModifiertachePageRoutingModule
        ],
        declarations: [_modifiertache_page__WEBPACK_IMPORTED_MODULE_1__.ModifiertachePage, _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__.ClocheComponent]
    })
], ModifiertachePageModule);



/***/ }),

/***/ 2464:
/*!*****************************************************!*\
  !*** ./src/app/modifiertache/modifiertache.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModifiertachePage": () => (/* binding */ ModifiertachePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modifiertache_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifiertache.page.html?ngResource */ 1518);
/* harmony import */ var _modifiertache_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifiertache.page.scss?ngResource */ 4292);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_activite_activite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/activite/activite.service */ 3277);
/* harmony import */ var _services_entite_entite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/entite/entite.service */ 6738);
/* harmony import */ var _services_salles_salle_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/salles/salle-service.service */ 5778);
/* harmony import */ var _services_tahedesignations_tachedesignation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/tahedesignations/tachedesignation.service */ 5399);
/* harmony import */ var _services_statut_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/statut/status.service */ 6266);
/* harmony import */ var _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/utilisateur/utilisateur.service */ 4996);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);












let ModifiertachePage = class ModifiertachePage {
    // if (etatselect = "Actif") {
    //   this.etat = true
    // } elsif (etatselect = "Inactif") {
    //   this.etat = false
    // }
    constructor(tachedesign, user, route, statut, activiteService, salleService, entiteService, modalController) {
        this.tachedesign = tachedesign;
        this.user = user;
        this.route = route;
        this.statut = statut;
        this.activiteService = activiteService;
        this.salleService = salleService;
        this.entiteService = entiteService;
        this.modalController = modalController;
        this.alertTrue = false;
        this.alertFalse = false;
    }
    ngOnInit() {
        this.idTache = this.route.snapshot.params['id'];
        this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
        this.tachedesign.RecupTacheById(this.Utilisateur.login, this.Utilisateur.password, this.idTache).subscribe(retour => {
            this.valeurTacheParId = retour.data;
            this.designation = this.valeurTacheParId.designation.libelle;
            this.datedebut = this.valeurTacheParId.datadebut;
            this.datefin = this.valeurTacheParId.datefin;
            this.salle = this.valeurTacheParId.salle.libelle;
            this.statut = this.valeurTacheParId.statut.libelle;
            this.porteurInterne = this.valeurTacheParId.porteurInterne.nom;
            this.porteurInternePrenom = this.valeurTacheParId.porteurInterne.prenom;
            this.porteurExterne = this.valeurTacheParId.porteurExterne.nom;
            this.porteurExternePrenom = this.valeurTacheParId.porteurExterne.prenom;
            this.commissionsInterne = this.valeurTacheParId.commissionsInterne;
            this.commissionsExterne = this.valeurTacheParId.commissionsExterne;
            console.log(this.valeurTacheParId);
        });
        //::::::::::::::recuperation de l'id de l'activité :::::::::::::::::::::::::::::::
        // this.idActivites = this.route.snapshot.params['id'];
        //::::::::::::::fin de recuperation :::::::::::::::::::::::::::::::
        //::::::::::::::recuperation du User qui se trouve dans le LocalStorage :::::::::::::::::::::::::::::::
        // this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
        // this.salleService.getSalleDisponible(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
        //   this.sallesDipo = data.data;
        //   this.sallesDipoLength = data.data.length
        //   console.log(data.data)
        // });
        // this.entiteService.getAllEntites(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour => {
        //   this.Entites = retour.data
        //   console.log(this.Entites)
        // });
        // this.tachedesign.getAlldesignation(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour => {
        //   this.designations = retour.data
        //   console.log(this.designations)
        // })
        //::::::::::::::::::::::::::::: getactivitybyId:::::::::::::::::::::::::::::::::::::::::::::::
        // this.activiteService.getactivitybyId(this.Utilisateur.login, this.Utilisateur.password, this.idActivites).subscribe(retour => {
        //   this.idActivites
        //   this.ActiviteCourant = retour.data
        //   console.log(this.ActiviteCourant)
        //   this.idRecuperer = this.ActiviteCourant.id;
        // })
        // this.statut.getStatut(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour => {
        //   this.Allstatut = retour.data
        //   console.log(this.Allstatut)
        // })
        // this.activiteService.getpersonnelsexternes(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour => {
        //   this.personEx = retour.data
        //   console.log(retour)
        // })
        //:::::::::::::::::::: get all User ::::::::::::::::::::::::::::::::::::::
        // this.user.getAllUsers(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour => {
        //   this.personIn = retour.data
        //   console.log(this.personIn)
        // });
        // for (let index = 0; index < this.personEx.length; index++) {
        //   this.personIn = this.personIn
        // }
    }
};
ModifiertachePage.ctorParameters = () => [
    { type: _services_tahedesignations_tachedesignation_service__WEBPACK_IMPORTED_MODULE_5__.TachedesignationService },
    { type: _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_7__.UtilisateurService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _services_statut_status_service__WEBPACK_IMPORTED_MODULE_6__.StatusService },
    { type: _services_activite_activite_service__WEBPACK_IMPORTED_MODULE_2__.ActiviteService },
    { type: _services_salles_salle_service_service__WEBPACK_IMPORTED_MODULE_4__.SalleServiceService },
    { type: _services_entite_entite_service__WEBPACK_IMPORTED_MODULE_3__.EntiteService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController }
];
ModifiertachePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-modifiertache',
        template: _modifiertache_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modifiertache_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModifiertachePage);



/***/ }),

/***/ 7993:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "#notift {\n  font-size: 11px;\n  border-radius: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 12px;\n  right: 0px;\n  height: 11px;\n  width: 11px;\n  background-color: #fff;\n}\n\n.iconCloche {\n  border-radius: 15px;\n  border: #ff7900 2px solid;\n}\n\n.iconCloche:hover {\n  border-radius: 15px;\n  background-color: #ff7900;\n  color: #fff;\n  font-size: 25px !important;\n}\n\n.iconCloche:hover #notift {\n  background-color: #ffffff;\n  color: #ff7900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb2NoZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUdKIiwiZmlsZSI6ImNsb2NoZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZnR7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgd2lkdGg6IDExcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uaWNvbkNsb2NoZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6ICNmZjc5MDAgMnB4IHNvbGlkO1xyXG59XHJcblxyXG4uaWNvbkNsb2NoZTpob3ZlcntcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgI25vdGlmdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI2ZmNzkwMDtcclxuICB9XHJcbn1cclxuLy8gLmJ0bntcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC5idG46aG92ZXJ7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbi8vICAgY29sb3I6ICNGRjc5MDAgIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgLmJ0biA+IGk6aG92ZXJ7XHJcbi8vICAgICBjb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuICAiXX0= */";

/***/ }),

/***/ 4292:
/*!******************************************************************!*\
  !*** ./src/app/modifiertache/modifiertache.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: myfon2;\n  src: url('Poppins-Light.ttf');\n}\n.container {\n  max-width: 1000px;\n  width: 100%;\n  padding: 50px 30px;\n  border-radius: 15px;\n  background: #fff;\n  margin-top: 3%;\n  margin-bottom: 3%;\n  box-shadow: 0px 6px 4px 6px rgba(0, 0, 0, 0.1);\n}\n#inputs {\n  box-shadow: none;\n  outline: none;\n}\nlabel {\n  font-family: myfon2;\n}\ntextarea {\n  box-shadow: none;\n}\n#descriptiontextarea {\n  box-shadow: none;\n}\n.bouton {\n  background-color: #FF7900;\n  width: 135px;\n  font-weight: bold;\n  border-radius: 15px;\n  margin-top: 2%;\n  letter-spacing: 0.03em;\n  font-family: myfon2;\n  margin-left: 70%;\n  color: #fff;\n  --bs-btn-active-bg: white;\n  --bs-btn-active-border-color: #FF7900;\n}\n.bouton:hover {\n  background-color: #fff !important;\n  width: 135px;\n  border: 1px solid #FF7900 !important;\n  font-weight: bold;\n  border-radius: 15px;\n  color: #FF7900 !important;\n  letter-spacing: 0.03em;\n  font-family: myfon2;\n  margin-top: 2%;\n  margin-left: 70%;\n}\n@media screen and (max-width: 768px) {\n  .button_div {\n    margin-top: 8%;\n  }\n}\n@media screen and (max-width: 768px) {\n  .bouton {\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n.container {\n  max-width: 1000px;\n  width: 100%;\n  padding: 50px 30px 106px;\n  border-radius: 15px;\n  background: #fff;\n  margin-top: 3%;\n  margin-bottom: 3%;\n  box-shadow: 0px 6px 4px 6px rgba(0, 0, 0, 0.1);\n}\n.list-md {\n  background: none !important;\n}\n.item-native::after {\n  background: none !important;\n}\nlabel {\n  font-family: myfon2;\n  color: #FF7900;\n}\n.box {\n  width: 100%;\n  padding: 40px 30px 30px 30px;\n  border-radius: 15px;\n  border: #000 2px solid;\n  margin: 20px auto;\n}\nh1 {\n  font-family: \"Poppins\", sans-serif;\n  margin: 2px;\n  font-size: 32px;\n  font-weight: bold;\n  text-align: center;\n  padding: 3px 6px;\n  position: absolute;\n  top: 24% !important;\n  background-color: #FFF;\n  color: #000;\n  left: 50%;\n  transform: translate(-50%, -2%);\n}\nimg {\n  margin-top: 15%;\n}\n@media screen and (max-width: 767px) {\n  img {\n    margin-top: 0%;\n  }\n}\n#MiniLeftNav li {\n  list-style: outside none none;\n  margin: 20px 0;\n  padding: 0;\n  width: 48px;\n}\n#MiniLeftNav li a {\n  border: solid 1px #ff7900;\n  display: block;\n  padding: 7px;\n  position: relative;\n}\n#MiniLeftNav span {\n  font-family: myfon2;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  bottom: 0;\n  left: 47px;\n  line-height: 38px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 0;\n  /* CSS3 Transition: */\n  /* Future proofing (these do not work yet): */\n  transition: 0.5s;\n}\n#MiniLeftNav a:hover span {\n  width: auto;\n  padding: 0 30px;\n  overflow: visible;\n}\n#MiniLeftNav a:hover {\n  text-decoration: none;\n}\n#MiniLeftNav a span {\n  background-color: #ff7900;\n  color: white;\n}\n.btndesi {\n  background-color: #FF7900;\n  width: 135px;\n  font-weight: bold;\n  border-radius: 15px;\n  margin-top: 2%;\n  letter-spacing: 0.03em;\n  font-family: myfon2;\n  margin-left: 23%;\n  color: #fff;\n  --bs-btn-active-bg: white;\n  --bs-btn-active-border-color: #FF7900;\n}\n.btndesi:hover {\n  background-color: #fff !important;\n  width: 135px;\n  border: 1px solid #FF7900 !important;\n  font-weight: bold;\n  border-radius: 15px;\n  color: #FF7900 !important;\n  letter-spacing: 0.03em;\n  font-family: myfon2;\n  margin-top: 2%;\n  margin-left: 23%;\n}\n@media screen and (min-width: 560px) {\n  h1 {\n    position: absolute;\n    top: 13%;\n  }\n}\n@media screen and (max-width: 560px) {\n  h1 {\n    font-size: 20px;\n    position: absolute;\n    top: 15%;\n  }\n}\n@media screen and (max-width: 846px) {\n  ol, ul {\n    padding-left: 0rem;\n  }\n  dl, ol, ul {\n    margin-top: -6px;\n    margin-bottom: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGlmaWVydGFjaGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSw2QkFBQTtBQUNKO0FBR0U7RUFDRyxpQkFBQTtFQUNELFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtBQURKO0FBUUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFMSjtBQU9FO0VBQ0EsbUJBQUE7QUFKRjtBQU9FO0VBQ0UsZ0JBQUE7QUFKSjtBQU1FO0VBRUUsZ0JBQUE7QUFKSjtBQU9FO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtBQUpKO0FBUUU7RUFDRSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFMSjtBQVVFO0VBQ0E7SUFDTSxjQUFBO0VBUE47QUFDRjtBQVdFO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VBVEo7QUFDRjtBQWlCRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0FBZko7QUFrQkU7RUFDRSwyQkFBQTtBQWZKO0FBbUJFO0VBQ0UsMkJBQUE7QUFoQko7QUFvQkU7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFqQk47QUFxQk07RUFDRSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFsQlI7QUF1Qkk7RUFDRSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtBQXBCTjtBQXdCRTtFQUVFLGVBQUE7QUF0Qko7QUF5QkU7RUFDRTtJQUVFLGNBQUE7RUF2Qko7QUFDRjtBQTJCRTtFQUNFLDZCQUFBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBekJOO0FBNEJFO0VBQ0kseUJBQUE7RUFDRixjQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBekJOO0FBNkJFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUVBLHFCQUFBO0VBRUYsNkNBQUE7RUFFQSxnQkFBQTtBQTVCRjtBQThCRTtFQUEyQixXQUFBO0VBQVksZUFBQTtFQUFlLGlCQUFBO0FBeEJ4RDtBQXlCRTtFQUFxQixxQkFBQTtBQXJCdkI7QUFzQkU7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFuQkY7QUFzQkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0FBbkJKO0FBc0JFO0VBQ0UsaUNBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBbkJKO0FBd0JFO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFFBQUE7RUFyQko7QUFDRjtBQXdCSTtFQUNFO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtFQXRCSjtBQUNGO0FBMEJNO0VBQ0U7SUFDRSxrQkFBQTtFQXhCUjtFQTJCSTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUF6Qk47QUFDRiIsImZpbGUiOiJtb2RpZmllcnRhY2hlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IG15Zm9uMjtcclxuICAgIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udC9Qb3BwaW5zLUxpZ2h0LnR0ZicpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNTBweCAzMHB4IDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDozJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDZweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMCk7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgI2lucHV0c3tcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgfVxyXG4gIGxhYmVse1xyXG4gIGZvbnQtZmFtaWx5OiBteWZvbjI7XHJcbiAgfVxyXG4gIFxyXG4gIHRleHRhcmVhe1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbiAgI2Rlc2NyaXB0aW9udGV4dGFyZWF7XHJcbiAgXHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuYm91dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzkwMDtcclxuICAgIHdpZHRoOiAxMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBteWZvbjI7XHJcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICAtLWJzLWJ0bi1hY3RpdmUtYmc6IHdoaXRlO1xyXG4gICAgLS1icy1idG4tYWN0aXZlLWJvcmRlci1jb2xvcjogI0ZGNzkwMDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmJvdXRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMzVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjc5MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGNvbG9yOiNGRjc5MDAgIWltcG9ydGFudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgICBmb250LWZhbWlseTogbXlmb24yO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tbGVmdDogNzAlO1xyXG4gICAgXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xyXG4gIC5idXR0b25fZGl2e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDglO1xyXG4gIFxyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmJvdXRvbntcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDphdXRvIDtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogMTAwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHggMTA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDRweCA2cHggcmdiKDAgMCAwIC8gMTAlKTtcclxuICB9XHJcbiAgXHJcbiAgLmxpc3QtbWR7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5pdGVtLW5hdGl2ZTo6YWZ0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGxhYmVse1xyXG4gICAgICBmb250LWZhbWlseTogbXlmb24yO1xyXG4gICAgICBjb2xvcjogI0ZGNzkwMDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICBcclxuICAgICAgLmJveCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlcjogIzAwMCAycHggc29saWQ7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDNweCA2cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAyNCUgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIlKVxyXG4gIH1cclxuICAgIFxyXG4gIFxyXG4gIGltZ3tcclxuICBcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgaW1ne1xyXG4gIFxyXG4gICAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgI01pbmlMZWZ0TmF2IGxpe1xyXG4gICAgbGlzdC1zdHlsZTogb3V0c2lkZSBub25lIG5vbmU7XHJcbiAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB3aWR0aDogNDhweDtcclxuICB9XHJcbiAgXHJcbiAgI01pbmlMZWZ0TmF2IGxpIGF7XHJcbiAgICAgIGJvcmRlcjpzb2xpZCAxcHggI2ZmNzkwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgI01pbmlMZWZ0TmF2IHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6IG15Zm9uMjtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgLy8gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDQ3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgXHJcbiAgICAvKiBDU1MzIFRyYW5zaXRpb246ICovXHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjUwcztcclxuICAvKiBGdXR1cmUgcHJvb2ZpbmcgKHRoZXNlIGRvIG5vdCB3b3JrIHlldCk6ICovXHJcbiAgLW1vei10cmFuc2l0aW9uOiAwLjUwcztcclxuICB0cmFuc2l0aW9uOiAwLjUwczsgIFxyXG4gIH1cclxuICAjTWluaUxlZnROYXYgYTpob3ZlciBzcGFueyB3aWR0aDphdXRvOyBwYWRkaW5nOjAgMzBweDtvdmVyZmxvdzp2aXNpYmxlOyB9XHJcbiAgI01pbmlMZWZ0TmF2IGE6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7fVxyXG4gICNNaW5pTGVmdE5hdiBhIHNwYW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZmY3OTAwO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuICBcclxuICAuYnRuZGVzaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4gICAgd2lkdGg6IDEzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gICAgZm9udC1mYW1pbHk6IG15Zm9uMjtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMyU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIC0tYnMtYnRuLWFjdGl2ZS1iZzogd2hpdGU7XHJcbiAgICAtLWJzLWJ0bi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAjRkY3OTAwO1xyXG4gIH1cclxuICBcclxuICAuYnRuZGVzaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTM1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjb2xvcjojRkY3OTAwICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gICAgZm9udC1mYW1pbHk6IG15Zm9uMjtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIzJTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1NjBweCkge1xyXG4gICAgaDEge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTMlO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NjBweCkge1xyXG4gICAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDE1JTtcclxuICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICBcclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4NDZweCkge1xyXG4gICAgICAgIG9sLCB1bCB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDByZW07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGRsLCBvbCwgdWwge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gICJdfQ== */";

/***/ }),

/***/ 9956:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\"\r\n    integrity=\"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==\"\r\n    crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n<!-- <div class=\"iconCloche\" (click)=\"OpenNotification($event)\">\r\n  <i class=\"fa-regular fa-bell\"></i><span>2</span>\r\n</div> -->\r\n<div class=\"col reporting\">\r\n  <button type=\"button\" class=\"btn buttonColor\"  class=\"iconCloche\" (click)=\"OpenNotification($event)\"><i class=\"fa-regular fa-bell\"></i><span id=\"notift\">{{this.notifTotal}}</span></button>\r\n</div>";

/***/ }),

/***/ 1518:
/*!******************************************************************!*\
  !*** ./src/app/modifiertache/modifiertache.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Modifier tâche</ion-title>\r\n    <ion-button slot=\"end\" fill=\"clear\">\r\n      <app-cloche></app-cloche>\r\n\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<ion-content>\r\n\r\n\r\n\r\n\r\n  <div class=\"container\">\r\n\r\n\r\n\r\n\r\n    <form #f=\"ngForm\" class=\"formilaire\">\r\n      <!-- <a class=\"btnLink\">\r\n\r\n      <i class=\"bi bi-plus-square\" style=\"color:#FF7900; font-size: 25px;\"></i> <span class=\"button_de\"> Désignation</span> \r\n      \r\n    </a> -->\r\n\r\n\r\n      <ul id=\"MiniLeftNav\">\r\n        <li>\r\n          <a class=\"navtext\" id=\"open-modal\"><i class=\"bi bi-plus-square\"\r\n              style=\"color:#FF7900; font-size: 15px; margin-left: 25%;\"></i> <span>Désignation</span></a>\r\n        </li>\r\n      </ul>\r\n      <div class=\"box\">\r\n        <h1>Créer une tâche</h1>\r\n\r\n\r\n\r\n\r\n        <div class=\"row\">\r\n\r\n\r\n          <div class=\"col- col-sm- col-md-6 col-lg-6 col-xl-6\">\r\n\r\n\r\n            <img src=\"../../assets/images/task.gif\" alt=\"\">\r\n\r\n\r\n\r\n          </div>\r\n\r\n\r\n          <div class=\"col- col-sm- col-md-6 col-lg-6 col-xl-6\">\r\n\r\n\r\n            <div class=\"input mb-3\">\r\n\r\n              <label for=\"inputs\" class=\"form-label\">Nom (Désignation) *</label>\r\n              <select id=\"inputs\" [(ngModel)]=\"libelleDesignation\" [value]=\"designation\" name=\"designations\"\r\n                class=\"form-select\" aria-label=\"Default select exemple\" name=\"entiteNom\" required>\r\n\r\n                <option selected>Choisisez une designation</option>\r\n                <option *ngFor=\"let desi of designations\">{{desi.libelle}}</option>\r\n\r\n              </select>\r\n            </div>\r\n\r\n\r\n            <div class=\"input mb-3\">\r\n              <label for=\"inputs\" class=\"form-label\">Date début *</label>\r\n              <input id=\"inputs\" [(ngModel)]=\"datedebut\" [value]=\"datedebut\" name=\"datedebut\" type=\"date\"\r\n                class=\"form-control\" id=\"inputs\" ngModel required>\r\n\r\n            </div>\r\n\r\n            <div class=\"input mb-3\">\r\n              <label for=\"inputs\" class=\"form-label\">Date fin *</label>\r\n              <input id=\"inputs\" [(ngModel)]=\"datefin\" [value]=\"datefin\" name=\"datefin\" type=\"date\" class=\"form-control\"\r\n                id=\"inputs\" ngModel required>\r\n\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"input mb-3\">\r\n\r\n              <label for=\"inputs\" class=\"form-label\">Statut *</label>\r\n              <select id=\"inputs\" [(ngModel)]=\"libelleStatut\" name=\" statuts\" class=\"form-select\"\r\n                aria-label=\"Default select exemple\" name=\"libelleStatut\" required>\r\n\r\n                <option selected>Choisisez une entité</option>\r\n\r\n                <option [value]=\"statut\" *ngFor=\"let statut of Allstatut\">{{statut.libelle}}</option> -->\r\n\r\n              </select>\r\n            </div>\r\n\r\n\r\n            <div class=\"input mb-3\">\r\n\r\n              <label for=\"inputs\" class=\"form-label\">Salle *</label>\r\n              <select id=\"inputs\" [(ngModel)]=\"libelleSalle\" class=\"form-select\" aria-label=\"Default select exemple\"\r\n                name=\"libelleSalle\" required>\r\n\r\n                <option selected>Choisisez une salle</option>\r\n                <!-- <option *ngFor=\"let salle of salles \">  {{salle.libelle}} </option> -->\r\n                <option [value]=\"salle\" *ngFor=\"let salle of sallesDipo\"> {{salle.libelle}} </option>\r\n              </select>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"input mb-3\">\r\n\r\n              <label for=\"inputs\" class=\"form-label\">Réalisateur *</label>\r\n              <select id=\"inputs\" class=\"form-select\" aria-label=\"Default select exemple\" name=\"entiteNom\" required>\r\n                <option selected>Choisisez un réalisateur</option>\r\n                <option [value]=\"porteurExterne \" [value]=\"porteurExternePrenom \" *ngFor=\"let pex of personEx\">\r\n                  {{pex.nom}} {{pex.prenom}}</option>\r\n                <option [value]=\"porteurInterne \" [value]=\"porteurInternePrenom \" *ngFor=\"let pin of personIn\">\r\n                  {{pin.nom}} {{pin.prenom}}</option>\r\n                <option></option>\r\n              </select>\r\n            </div>\r\n\r\n\r\n            <div class=\"input-box\">\r\n              <span class=\"details\">Comission *</span>\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-select placeholder=\"Selectionner les formateurs\" [multiple]=\"true\" [(ngModel)]=\"Commissions\"\r\n                    name=\"Commissions\">\r\n                    <ion-select-option [value]=\"porteurExterne \" [value]=\"porteurExternePrenom \"\r\n                      *ngFor=\"let pex of personEx\">{{pex.nom}} {{pex.prenom}}</ion-select-option>\r\n                    <ion-select-option [value]=\"porteurInterne \" [value]=\"porteurInternePrenom \"\r\n                      *ngFor=\"let pin of personIn\">{{pin.nom}} {{pin.prenom}}</ion-select-option>\r\n\r\n                  </ion-select>\r\n                </ion-item>\r\n              </ion-list>\r\n            </div>\r\n          </div>\r\n          <div class=\"col button_div\">\r\n            <button type=\"button\" class=\"btn bouton\" [disabled]=\"f.form.invalid\">Enregistrer</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <ion-modal #modal trigger=\"open-modal\" backdropDismiss=\"false\">\r\n\r\n    <ng-template>\r\n      <div class=\"d-grid gap-2 m-2 d-md-flex justify-content-md-end\">\r\n        <!-- <ion-buttons slot=\"end\">\r\n        <ion-button (click)=\"modal.dismiss()\">Close</ion-button>\r\n      </ion-buttons> -->\r\n      </div>\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-title>Créer une désignation</ion-title>\r\n          <ion-buttons slot=\"end\">\r\n            <button type=\"button\" class=\"btn-close\" (click)=\"modal.dismiss()\" data-bs-dismiss=\"modal\"\r\n              aria-label=\"Close\"></button>\r\n\r\n            <!-- <ion-button (click)=\"modal.dismiss()\">Close</ion-button> -->\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n\r\n      <div class=\"container\">\r\n        <!-- <button type=\"button\" class=\"btn-close\"  (click)=\"modal.dismiss()\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button> -->\r\n        <!-- <h5 class=\"card-title text-center\">Créer une désignation</h5> -->\r\n        <div class=\"card\">\r\n\r\n          <div class=\"card-body text-start\">\r\n\r\n\r\n            <!-- <div class=\"alert alert-success mb-3\" role=\"alert\" >\r\n            L'entite Creer avec succes\r\n          </div>\r\n          <div class=\"alert alert-danger mb-3\" role=\"alert\" >\r\n            ERREUR LORS DE CREATION DE L'ENTITE\r\n          </div> -->\r\n\r\n            <!-- <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"alertFalse\">\r\n            <i class=\"fa fa-ban\" aria-hidden=\"true\" style=\"color: red;\"></i>  Impossible de créer une désignation.\r\n          </div>\r\n\r\n          <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"alertTrue\">\r\n            <i class=\"fa fa-check-circle-o\" aria-hidden=\"true\" style=\"color: green;\"></i>  Désignation créée avec succès.\r\n            \r\n          </div> -->\r\n\r\n\r\n            <form #f=\"ngForm\" class=\"formulaire\">\r\n              <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"alertFalse\">\r\n                <i class=\"fa fa-ban\" aria-hidden=\"true\" style=\"color: red;\"></i> Impossible de créer une désignation.\r\n              </div>\r\n\r\n              <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"alertTrue\">\r\n                <i class=\"fa fa-check-circle-o\" aria-hidden=\"true\" style=\"color: green;\"></i> Désignation créée avec\r\n                succès.\r\n\r\n              </div>\r\n\r\n\r\n              <div class=\"input mb-3\">\r\n                <label for=\"inputs\" class=\"form-label\">Libelle *</label>\r\n                <input id=\"inputs\" name=\"libelle\" [(ngModel)]=\"libelleDesignation\" type=\"text\" class=\"form-control\"\r\n                  id=\"inputs\" min=\"0\" max=\"4\" ngModel required>\r\n              </div>\r\n\r\n              <!--             \r\n                    <div class=\"input mb-3\">\r\n                                \r\n                    <label for=\"inputs\" class=\"form-label\">Lieu *</label>\r\n                        <select id=\"inputs\"  [(ngModel)]=\"lieu\" class=\"form-select\" aria-label=\"Default select exemple\" name=\"entiteNom\" ngModel required>\r\n                            <option selected>Choisisez un lieu</option>\r\n                            <option *ngFor=\"let lieu of sallesDipo \">  {{lieu.libelle}} </option>\r\n                        </select>\r\n                </div> -->\r\n\r\n\r\n              <div class=\"d-grid gap-2 col-6 text-center mx-auto mt-2\">\r\n                <button type=\"button\" class=\"btn colorbutton2 btn-sm btndesi\" id=\"open-modal1\"\r\n                  [disabled]=\"f.form.invalid\">\r\n                  Enregistrer\r\n                </button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </ng-template>\r\n  </ion-modal>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_modifiertache_modifiertache_module_ts.js.map