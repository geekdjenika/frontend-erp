"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_entite_entite_module_ts"],{

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

/***/ 8375:
/*!*************************************************!*\
  !*** ./src/app/entite/entite-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntitePageRoutingModule": () => (/* binding */ EntitePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _entite_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entite.page */ 6106);




const routes = [
    {
        path: '',
        component: _entite_page__WEBPACK_IMPORTED_MODULE_0__.EntitePage
    }, {
        path: 'details-entite/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_details-entite_details-entite_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../details-entite/details-entite.module */ 5584)).then(m => m.DetailsEntitePageModule)
    },
];
let EntitePageRoutingModule = class EntitePageRoutingModule {
};
EntitePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EntitePageRoutingModule);



/***/ }),

/***/ 3716:
/*!*****************************************!*\
  !*** ./src/app/entite/entite.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntitePageModule": () => (/* binding */ EntitePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _entite_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entite-routing.module */ 8375);
/* harmony import */ var _entite_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entite.page */ 6106);
/* harmony import */ var _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cloche/cloche.component */ 7907);








let EntitePageModule = class EntitePageModule {
};
EntitePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _entite_routing_module__WEBPACK_IMPORTED_MODULE_0__.EntitePageRoutingModule
        ],
        declarations: [_entite_page__WEBPACK_IMPORTED_MODULE_1__.EntitePage, _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__.ClocheComponent]
    })
], EntitePageModule);



/***/ }),

/***/ 6106:
/*!***************************************!*\
  !*** ./src/app/entite/entite.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntitePage": () => (/* binding */ EntitePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _entite_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entite.page.html?ngResource */ 5418);
/* harmony import */ var _entite_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entite.page.scss?ngResource */ 667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_acceuil_accueilservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/acceuil/accueilservice.service */ 1859);
/* harmony import */ var _services_entite_entite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/entite/entite.service */ 6738);
/* harmony import */ var _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utilisateur/utilisateur.service */ 4996);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_detailsentit_detailentite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/detailsentit/detailentite.service */ 9358);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);










let EntitePage = class EntitePage {
    constructor(entitedetailservice, entiteService, acceuilService, userService, router, route) {
        this.entitedetailservice = entitedetailservice;
        this.entiteService = entiteService;
        this.acceuilService = acceuilService;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.alertTrue = false;
        this.alertFalse = false;
        //Methode permettant de d'afficher le popup modifier 
        this.isModalOpen = false;
    }
    ngOnInit() {
        this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
        console.log("recuperantion l'utilisateur" + this.Utilisateur);
        this.allEntite();
        //console.log(this.getAllEntite())
        this.userService.getActivesUsers(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            this.toutUtilisateur = data.data;
            console.log(data.data[1].nom);
        });
    }
    popUp() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            title: 'Félicitation !!',
            text: 'Entité créée avec succes',
            heightAuto: false,
            showConfirmButton: true,
            confirmButtonText: "D'accord",
            confirmButtonColor: '#FF7900',
            showDenyButton: false,
            showCancelButton: false,
            allowOutsideClick: false
        });
    }
    //Methode permettant de recuperer les entite
    getAllEntite() {
        this.entiteService.getAllEntites(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            if (data.message == 'ok') {
                this.entites = data.data;
                this.longueur = data.data.length;
                console.log(data.data);
            }
        });
    }
    recuperationImage(event) {
        this.imageentite = event.target["files"][0];
        console.log(this.imageentite);
    }
    recuperationImage1(event) {
        this.imageentite1 = event.target["files"][0];
        console.log(this.imageentite);
    }
    //Redirection voir +
    RedirigerEntite(id) {
        return this.router.navigate(['/dashboard/entite/details-entite', id]);
    }
    // methode permettant de creer une entite
    alet() {
        setTimeout(() => {
            this.getAllEntite();
        }, 1000);
    }
    postAllEntite() {
        // this.alertTrue = false
        // this.alertFalse = false
        console.log(this.imageentite + " libelleentite : " + this.libelleentite + "description : " + this.description + "responsable : " + this.responsableEntite);
        for (let i = 0; i < this.toutUtilisateur.length; i++) {
            const array = this.responsableEntite.split(' ');
            if (this.toutUtilisateur[i].prenom == array[0] && this.toutUtilisateur[i].nom == array[1]) {
                this.lead = this.toutUtilisateur[i];
            }
        }
        if (this.entites.length == 0) {
            this.entiteService.PostEntite(this.Utilisateur.login, this.Utilisateur.password, this.imageentite, this.libelleentite, this.description, this.Utilisateur, this.lead).subscribe(data => {
                console.log(data);
                this.donner = data;
                if (this.donner.message == 'ok') {
                    // this.alertTrue = true
                    // this.alertFalse = false
                    this.popUp();
                }
                else {
                    this.alertTrue = false;
                    this.alertFalse = true;
                }
            });
            this.alet();
        }
        else {
            for (let index = 0; index < this.entites.length; index++) {
                if (this.lead.nom == this.entites[index].gerant.nom && this.lead.prenom == this.entites[index].gerant.prenom) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
                        title: 'Alerte',
                        text: 'Cette personne est déjà responsable d\'une entité',
                        heightAuto: false,
                        showConfirmButton: true,
                        confirmButtonText: "OK",
                        confirmButtonColor: '#FF7900',
                        showDenyButton: false,
                        showCancelButton: false,
                        allowOutsideClick: false
                    });
                }
                else {
                    this.entiteService.PostEntite(this.Utilisateur.login, this.Utilisateur.password, this.imageentite, this.libelleentite, this.description, this.Utilisateur, this.lead).subscribe(data => {
                        console.log(data);
                        this.donner = data;
                        if (this.donner.message == 'ok') {
                            // this.alertTrue = true
                            // this.alertFalse = false
                            this.popUp();
                        }
                        else {
                            this.alertTrue = false;
                            this.alertFalse = true;
                        }
                    });
                    this.alet();
                }
            }
        }
        // this.presentAlert()
    }
    allEntite() {
        console.log("zzzz");
        this.entiteService.getAllEntites(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            if (data.message == 'ok') {
                this.entites = data.data;
                this.longueur = data.data.length;
                console.log("nos entites " + data.data);
            }
        });
    }
    setOpen(isOpen, id) {
        this.isModalOpen = isOpen;
        console.log("________________________");
        console.log(this.Utilisateur.login);
        console.log(id);
        // this.getEntiteParId(id);
        this.idEntite = id;
        this.entitedetailservice.voirdetailsEntiteid(this.Utilisateur.login, this.Utilisateur.password, id).subscribe(data => {
            this.entites = data.data;
            console.log(this.entites.libelleentite);
            this.libelleentiteMo = this.entites.libelleentite;
            // this.statusResponsable = this.entites.createur.role.libellerole
            this.descriptionMo = this.entites.description;
            console.log(this.descriptionEntite1);
            // this.nomResponsable = this.entites.gerant.nom
            // this.prenomResponsable = this.entites.gerant.prenom
            // this.imageEntite = this.entites.image
        });
    }
    setClose() {
        this.isModalOpen = false;
    }
    //Methode permettant de Modifier une entite
    modifierEntite() {
        for (let i = 0; i < this.toutUtilisateur.length; i++) {
            const array = this.responsableEntiteMo.split(' ');
            if (this.toutUtilisateur[i].prenom == array[0] && this.toutUtilisateur[i].nom == array[1]) {
                this.lead = this.toutUtilisateur[i];
            }
        }
        this.entiteService.updateEntiteById(this.Utilisateur.login, this.Utilisateur.password, this.idEntite, this.imageentite1, this.libelleentiteMo, this.descriptionMo, this.Utilisateur, this.lead).subscribe(data => {
            console.log(data);
        });
        this.alet();
    }
    supprimerEntite(id) {
        this.entiteService.deleteEntiteById(this.Utilisateur.login, this.Utilisateur.password, id).subscribe(data => {
            console.log("sssssssssssssssssssssssssssssss");
            console.log(data);
        });
    }
};
EntitePage.ctorParameters = () => [
    { type: _services_detailsentit_detailentite_service__WEBPACK_IMPORTED_MODULE_5__.DetailentiteService },
    { type: _services_entite_entite_service__WEBPACK_IMPORTED_MODULE_3__.EntiteService },
    { type: _services_acceuil_accueilservice_service__WEBPACK_IMPORTED_MODULE_2__.AccueilserviceService },
    { type: _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_4__.UtilisateurService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
EntitePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-entite',
        template: _entite_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_entite_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EntitePage);



/***/ }),

/***/ 9358:
/*!***************************************************************!*\
  !*** ./src/app/services/detailsentit/detailentite.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailentiteService": () => (/* binding */ DetailentiteService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




let DetailentiteService = class DetailentiteService {
    constructor(http) {
        this.http = http;
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment;
    }
    voirdetailsEntiteid(login, password, id) {
        const data = new FormData();
        const user = [
            {
                "login": login,
                "password": password
            }
        ];
        // const identite=[
        //   {
        //     "id":id,
        //   }]
        data.append('user', JSON.stringify(user).slice(1, JSON.stringify(user).lastIndexOf(']')));
        // data.append('id' , JSON.stringify(identite).slice(1,JSON.stringify(identite).lastIndexOf(']')));
        return this.http.post(`${this.env.api}/entite/get/entite/${id}`, data);
    }
};
DetailentiteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
DetailentiteService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DetailentiteService);



/***/ }),

/***/ 7993:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "#notift {\n  font-size: 11px;\n  border-radius: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 12px;\n  right: 0px;\n  height: 11px;\n  width: 11px;\n  background-color: #fff;\n}\n\n.iconCloche {\n  border-radius: 15px;\n  border: #ff7900 2px solid;\n}\n\n.iconCloche:hover {\n  border-radius: 15px;\n  background-color: #ff7900;\n  color: #fff;\n  font-size: 25px !important;\n}\n\n.iconCloche:hover #notift {\n  background-color: #ffffff;\n  color: #ff7900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb2NoZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUdKIiwiZmlsZSI6ImNsb2NoZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZnR7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgd2lkdGg6IDExcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uaWNvbkNsb2NoZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6ICNmZjc5MDAgMnB4IHNvbGlkO1xyXG59XHJcblxyXG4uaWNvbkNsb2NoZTpob3ZlcntcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgI25vdGlmdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI2ZmNzkwMDtcclxuICB9XHJcbn1cclxuLy8gLmJ0bntcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC5idG46aG92ZXJ7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbi8vICAgY29sb3I6ICNGRjc5MDAgIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgLmJ0biA+IGk6aG92ZXJ7XHJcbi8vICAgICBjb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuICAiXX0= */";

/***/ }),

/***/ 667:
/*!****************************************************!*\
  !*** ./src/app/entite/entite.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: myfon1;\n  src: url('Poppins-Light.ttf');\n}\nion-content {\n  font-family: myfon1;\n}\n/* ============= Begin Testimonial Flexbox ============ */\n#flex-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 500px !important;\n  height: 110vh;\n  max-width: 1000px;\n  margin: auto;\n  background-color: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  overflow: hidden;\n  flex-direction: column;\n  position: relative;\n}\n#left-zone {\n  height: 50%;\n  flex: 0 0 auto;\n  display: flex;\n  width: 100%;\n}\n#left-zone .list {\n  display: flex;\n  list-style: none;\n  align-content: stretch;\n  flex-direction: column;\n  flex: 1 1 auto;\n  margin: auto;\n  padding: 0;\n  box-sizing: border-box;\n}\n.item input {\n  display: none;\n}\nlabel {\n  display: block;\n  opacity: 0.5;\n  height: 50px;\n  text-align: center;\n  line-height: 50px;\n  position: relative;\n}\nlabel:hover {\n  opacity: 0.75;\n  cursor: pointer;\n}\n.content-test {\n  margin-bottom: 10px;\n  margin-top: 10px;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  transform: translateY(100%);\n  height: 50%;\n  width: 100%;\n  transition: 0.5s ease-out;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.content-test p {\n  max-width: 80%;\n  text-align: left;\n}\n#right-zone {\n  width: 100%;\n  flex: 1 0 auto;\n  height: 50%;\n}\ninput:checked ~ .content-test {\n  transform: translateY(0%);\n  transition: transform 1s;\n  opacity: 1;\n}\n@media (max-width: 480px) {\n  .hideInfo {\n    display: none;\n  }\n  label {\n    font-size: smaller;\n  }\n}\n@media (min-width: 480px) {\n  #flex-container {\n    flex-direction: row;\n    min-height: auto;\n    height: 400px;\n    /* position: absolute; */\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n  #left-zone .list {\n    border-right: 2px solid #cccccc;\n  }\n  .content-test {\n    width: 65%;\n    height: 100%;\n    pointer-events: auto;\n    transform: translateY(-100%);\n  }\n  #left-zone {\n    width: 35%;\n    padding-bottom: 9em;\n  }\n  #right-zone {\n    height: 100%;\n    width: 65%;\n  }\n  .content-test {\n    padding-bottom: 10em;\n  }\n}\n#right-zone {\n  height: 100%;\n  width: 65%;\n}\n.content-test {\n  padding-bottom: 8em;\n}\n.testimonials {\n  margin-top: 10px !important;\n}\nbutton:hover {\n  background-color: rgba(247, 28, 28, 0.979);\n}\n/* If the screen size is 480px or less */\n@media (max-width: 480px) {\n  .content_testimonial .picto {\n    padding-top: 20px;\n  }\n  .item > label {\n    font-size: 1.2rem;\n  }\n}\n.content_testimonial .picto {\n  height: 100px;\n  width: 100px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.content_testimonial h1 {\n  color: #ff7900;\n  text-align: center;\n}\n@media screen and (max-width: 450px) {\n  .content_testimonial h1 {\n    font-size: larger;\n  }\n  .content-test p {\n    max-width: 80%;\n    text-align: left;\n    font-size: small;\n  }\n}\n.content-test h1:first-letter {\n  text-transform: uppercase;\n}\ninput:checked ~ label {\n  opacity: 1;\n  animation: all 1s cubic-bezier(0.455, 0.03, 0.515, 0.955);\n}\ninput:checked ~ label.label_testimonial {\n  color: #f27935;\n  border-right: solid 4px #f27935;\n}\nlabel.label_testimonial:before {\n  display: block;\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  margin-left: 15px;\n  background-position: center;\n  background-size: 75% 75%;\n  background-repeat: no-repeat;\n  border-radius: 50%;\n}\nlabel:first-letter {\n  text-transform: uppercase;\n}\n.label_testimonial:hover {\n  background-image: linear-gradient(to right, #ffffff, rgba(242, 121, 53, 0.6392156863));\n  font-size: 1.2rem;\n  transition: font-size 0.5s;\n}\np.testimonialState {\n  margin-top: -5px;\n  font-size: 0.8rem;\n  font-style: italic;\n  color: rgba(128, 128, 128, 0.831372549);\n}\np.testimonialFrom {\n  margin-top: 5px;\n  font-weight: bold;\n  color: #33475c;\n}\n.button {\n  background: #ff7900;\n  border-radius: 15px;\n}\n.buttonColor {\n  background: #ff7900;\n  border-radius: 15px;\n  color: #ffffff;\n}\n.buttonColor:hover {\n  background-color: white !important;\n  border: 1px solid #ff7900 !important;\n  border-radius: 15px;\n  color: #ff7900 !important;\n  background-color: white !important;\n}\n.item1 {\n  height: 100em;\n}\n/* ============== End Testimonial Flexbox ============= */\n.btnn {\n  background: #ff7900;\n  border-radius: 15px;\n  width: 50px;\n  float: right;\n  width: 170px;\n  height: 50px;\n  position: relative;\n  z-index: 100;\n  bottom: 30px;\n  right: 20px;\n  color: #eee;\n}\n.text {\n  font-family: myfon2;\n  font-size: 25px;\n  font-weight: 700;\n}\n.colorbutton1 {\n  background-color: rgba(0, 26, 255, 0.85);\n  color: white;\n  padding: 5px;\n  border-radius: 10px;\n}\n.colorbutton2 {\n  background-color: rgba(255, 121, 0, 0.85);\n  color: white;\n  padding: 5px;\n  border-radius: 10px;\n}\n.colorbutton3 {\n  background-color: rgba(255, 0, 0, 0.85);\n  color: white;\n  padding: 5px;\n  border-radius: 10px;\n}\n.colorbutton1:hover {\n  background-color: rgba(255, 255, 255, 0.85);\n  color: #FF7900 !important;\n  border: 1px solid #FF7900 !important;\n}\n.colorbutton2:hover {\n  background-color: rgba(255, 255, 255, 0.85);\n  color: #FF7900 !important;\n  border: 1px solid #FF7900 !important;\n}\n.colorbutton3:hover {\n  background-color: rgba(255, 255, 255, 0.85);\n  color: #FF0000;\n  border: 1px solid #FF0000;\n}\nion-modal {\n  --height: 30em !important;\n  --border-radius: 15px;\n  --width: 30em;\n}\nion-content {\n  font-family: myfon1 !important;\n}\nion-menu-button {\n  background: inherit !important;\n  border-radius: 15px !important;\n}\nion-button {\n  background: inherit !important;\n}\n.card {\n  background: #FFFFFF;\n  box-shadow: 0px 6px 4px 6px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  margin-bottom: 10px !important;\n}\n.container {\n  font-family: myfon1 !important;\n  font-size: small !important;\n  font-weight: 800;\n  color: #FF7900;\n}\n.container h5 {\n  font-weight: bolder !important;\n  font-size: large !important;\n  margin-bottom: 15px !important;\n  color: black;\n}\n#flex-container {\n  flex-direction: row;\n  min-height: auto;\n  height: 400px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-radius: 15px !important;\n  height: 580px !important;\n}\n#flex-container {\n  flex-direction: row;\n  min-height: auto;\n  height: 400px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-radius: 15px !important;\n  height: 580px !important;\n  margin-bottom: 100px !important;\n}\n.lblAucune {\n  display: flex;\n  justify-content: center;\n  font-size: 25px;\n  position: relative;\n  top: 50%;\n}\nbody {\n  font-family: \"Lato\", sans-serif;\n  background-color: #f4b927;\n}\n.wrapper {\n  padding-top: 30px;\n}\n.card-img-top {\n  object-fit: cover;\n  height: 150px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);\n}\n.card-body {\n  text-align: center;\n  box-shadow: 0px 15px 15px -8px rgba(0, 0, 0, 0.5);\n}\n.card-body h6 {\n  font-size: 14px;\n  text-transform: uppercase;\n  color: black;\n}\n.card-title {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 24px;\n}\n.card-text {\n  color: black;\n}\n.laragerColonne {\n  height: 400px !important;\n}\n.socials a {\n  width: 20%;\n  height: 20%;\n  display: inline-block;\n  cursor: pointer;\n  margin: 0 10px;\n}\n@media screen and (max-width: 450px) {\n  .socials a {\n    width: 15%;\n    height: 15%;\n  }\n}\n.socials a i {\n  color: #fff;\n  padding: 12px 0;\n}\n@media (max-width: 800px) {\n  .mx-30 {\n    margin-bottom: 30px;\n  }\n}\nion-modal {\n  --height: auto !important;\n  --border-radius: 15px;\n  --width: 30em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0FBQ0Y7QUFFQTtFQUNFLG1CQUFBO0FBQUY7QUFHQSx5REFBQTtBQUdBO0VBR0UsYUFBQTtFQUVBLGVBQUE7RUFHQSx1QkFBQTtFQUdBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBR0Esd0VBQUE7RUFDQSxnQkFBQTtFQUlBLHNCQUFBO0VBQ0Esa0JBQUE7QUFIRjtBQU1BO0VBQ0UsV0FBQTtFQUdBLGNBQUE7RUFHQSxhQUFBO0VBQ0EsV0FBQTtBQUhGO0FBTUE7RUFHRSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSxzQkFBQTtFQUlBLHNCQUFBO0VBR0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBRUEsc0JBQUE7QUFIRjtBQU1BO0VBQ0UsYUFBQTtBQUhGO0FBTUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFIRjtBQU1BO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFIRjtBQU1BO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBR0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUdBLHlCQUFBO0VBR0EsYUFBQTtFQUdBLG1CQUFBO0VBR0EsdUJBQUE7RUFJQSxzQkFBQTtBQUhGO0FBT0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFKRjtBQU9BO0VBQ0UsV0FBQTtFQUdBLGNBQUE7RUFDQSxXQUFBO0FBSkY7QUFPQTtFQUdFLHlCQUFBO0VBSUEsd0JBQUE7RUFFQSxVQUFBO0FBSkY7QUFNQTtFQUNFO0lBQ0UsYUFBQTtFQUhGO0VBS0E7SUFDRSxrQkFBQTtFQUhGO0FBQ0Y7QUFLQTtFQUNFO0lBSUUsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSx3QkFBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7RUFIRjtFQU1BO0lBQ0UsK0JBQUE7RUFKRjtFQU9BO0lBQ0UsVUFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtJQUdBLDRCQUFBO0VBTEY7RUFRQTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQU5GO0VBU0E7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQVBGO0VBU0E7SUFDRSxvQkFBQTtFQVBGO0FBQ0Y7QUFVQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FBUkY7QUFVQTtFQUNFLG1CQUFBO0FBUEY7QUFTQTtFQUNFLDJCQUFBO0FBTkY7QUFTQTtFQUNFLDBDQUFBO0FBTkY7QUFTQSx3Q0FBQTtBQUNBO0VBQ0U7SUFDRSxpQkFBQTtFQU5GO0VBU0E7SUFDRSxpQkFBQTtFQVBGO0FBQ0Y7QUFVQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBUkY7QUFXQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQVJGO0FBYUE7RUFDRTtJQUNFLGlCQUFBO0VBVkY7RUFhQTtJQUNFLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBWEY7QUFDRjtBQWtCQTtFQUNFLHlCQUFBO0FBaEJGO0FBbUJBO0VBQ0UsVUFBQTtFQUVBLHlEQUFBO0FBaEJGO0FBbUJBO0VBQ0UsY0FBQTtFQUNBLCtCQUFBO0FBaEJGO0FBbUJBO0VBRUUsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBakJGO0FBb0JBO0VBQ0UseUJBQUE7QUFqQkY7QUFvQkE7RUFRRSxzRkFBQTtFQUNBLGlCQUFBO0VBR0EsMEJBQUE7QUFyQkY7QUF3QkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQXJCRjtBQXdCQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFyQkY7QUF3QkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FBckJGO0FBd0JBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFyQkY7QUF3QkE7RUFDRSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FBckJGO0FBMEJBO0VBQ0UsYUFBQTtBQXZCRjtBQTBCQSx5REFBQTtBQUNBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUF2QkY7QUE0QkE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXpCRjtBQTZCQTtFQUNFLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTFCRjtBQTZCQTtFQUNFLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTFCRjtBQTZCQTtFQUNFLHVDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTFCRjtBQTZCQTtFQUNFLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtBQTFCRjtBQTZCQTtFQUNFLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtBQTFCRjtBQTZCQTtFQUNFLDJDQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBMUJGO0FBOEJBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUEzQkY7QUE2QkE7RUFDRSw4QkFBQTtBQTFCRjtBQTZCQTtFQUNFLDhCQUFBO0VBQ0EsOEJBQUE7QUExQkY7QUE2QkE7RUFDRSw4QkFBQTtBQTFCRjtBQTZCQTtFQUNFLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBMUJGO0FBNkJBO0VBQ0UsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQTFCRjtBQTRCRTtFQUNFLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUExQko7QUE2QkE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0FBMUJGO0FBOEJBO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0FBM0JKO0FBOEJBO0VBQ0UsYUFBQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQTNCSjtBQWlDQTtFQUNFLCtCQUFBO0VBQ0EseUJBQUE7QUE5QkY7QUFnQ0M7RUFDQSxpQkFBQTtBQTdCRDtBQStCQztFQUNDLGlCQUFBO0VBQ0EsYUFBQTtFQUNELHlDQUFBO0FBNUJEO0FBOEJDO0VBQ0ksa0JBQUE7RUFDQSxpREFBQTtBQTNCTDtBQTZCQztFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUExQkQ7QUE0QkM7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQXpCRDtBQTJCQztFQUNDLFlBQUE7QUF4QkY7QUEyQkM7RUFDQyx3QkFBQTtBQXhCRjtBQTJCQztFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtBQXpCRDtBQTJCQztFQUVDO0lBQ0UsVUFBQTtJQUNBLFdBQUE7RUF6QkY7QUFDRjtBQTZCQztFQUNBLFdBQUE7RUFDQSxlQUFBO0FBM0JEO0FBd0NDO0VBQ0k7SUFDSSxtQkFBQTtFQXJDUDtBQUNGO0FBK0NBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUE3Q0YiLCJmaWxlIjoiZW50aXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBteWZvbjE7XHJcbiAgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250L1BvcHBpbnMtTGlnaHQudHRmJyk7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICBmb250LWZhbWlseTogbXlmb24xO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09IEJlZ2luIFRlc3RpbW9uaWFsIEZsZXhib3ggPT09PT09PT09PT09ICovXHJcblxyXG5cclxuI2ZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNTAwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDExMHZoO1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksXHJcbiAgICAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jbGVmdC16b25lIHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICAtd2Via2l0LWJveC1mbGV4OiAwO1xyXG4gIC1tcy1mbGV4OiAwIDAgYXV0bztcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jbGVmdC16b25lIC5saXN0IHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdHJldGNoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgLW1zLWZsZXg6IDEgMSBhdXRvO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uaXRlbSBpbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxubGFiZWw6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNzU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udGVudC10ZXN0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cyBlYXNlLW91dDtcclxuICAtby10cmFuc2l0aW9uOiAwLjVzIGVhc2Utb3V0O1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1vdXQ7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvLyBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmNvbnRlbnQtdGVzdCBwIHtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4jcmlnaHQtem9uZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAtbXMtZmxleDogMSAwIGF1dG87XHJcbiAgZmxleDogMSAwIGF1dG87XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWR+LmNvbnRlbnQtdGVzdCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAxcztcclxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAxcztcclxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcywgLXdlYmtpdC10cmFuc2Zvcm0gMXM7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuaGlkZUluZm97XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBsYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgI2ZsZXgtY29udGFpbmVyIHtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcclxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAjbGVmdC16b25lIC5saXN0IHtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNjY2NjY2M7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC10ZXN0IHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICB9XHJcblxyXG4gICNsZWZ0LXpvbmUge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA5ZW07XHJcbiAgfVxyXG5cclxuICAjcmlnaHQtem9uZSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gIH1cclxuICAuY29udGVudC10ZXN0e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwZW07XHJcbiAgfVxyXG59XHJcblxyXG4jcmlnaHQtem9uZSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA2NSU7XHJcbn1cclxuLmNvbnRlbnQtdGVzdHtcclxuICBwYWRkaW5nLWJvdHRvbTogOGVtO1xyXG59XHJcbi50ZXN0aW1vbmlhbHMge1xyXG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjgsIDI4LCAwLjk3OSk7XHJcbn1cclxuXHJcbi8qIElmIHRoZSBzY3JlZW4gc2l6ZSBpcyA0ODBweCBvciBsZXNzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5jb250ZW50X3Rlc3RpbW9uaWFsIC5waWN0byB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcblxyXG4gIC5pdGVtPmxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnRfdGVzdGltb25pYWwgLnBpY3RvIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uY29udGVudF90ZXN0aW1vbmlhbCBoMSB7XHJcbiAgY29sb3I6ICNmZjc5MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLy8gc3R5bGUgYXBwbGlxdWVyIGxvcnNxdWVyIGxhIHRhaWxsZSBkZSBsJ2VjcmFuIGVzdCBpbmZlcmlldXIgYSA1MDBweFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIC5jb250ZW50X3Rlc3RpbW9uaWFsIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtdGVzdCBwIHtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgfVxyXG5cclxuICAvLyAuY29udGVudC10ZXN0e1xyXG4gIC8vICAgbWFyZ2luLWJvdHRvbTogMTAwcHggIWltcG9ydGFudDtcclxuICAvLyB9XHJcbn1cclxuXHJcbi5jb250ZW50LXRlc3QgaDE6Zmlyc3QtbGV0dGVyIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkfmxhYmVsIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbGwgMXMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzLCAwLjUxNSwgMC45NTUpO1xyXG4gIGFuaW1hdGlvbjogYWxsIDFzIGN1YmljLWJlemllcigwLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1KTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZH5sYWJlbC5sYWJlbF90ZXN0aW1vbmlhbCB7XHJcbiAgY29sb3I6ICNmMjc5MzU7XHJcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCA0cHggI2YyNzkzNTtcclxufVxyXG5cclxubGFiZWwubGFiZWxfdGVzdGltb25pYWw6YmVmb3JlIHtcclxuICBcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDc1JSA3NSU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbmxhYmVsOmZpcnN0LWxldHRlciB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmxhYmVsX3Rlc3RpbW9uaWFsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhcixcclxuICAgICAgbGVmdCB0b3AsXHJcbiAgICAgIHJpZ2h0IHRvcCxcclxuICAgICAgZnJvbSgjZmZmZmZmKSxcclxuICAgICAgdG8oI2ZmNzkwMCkpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmZmZmYsICNmMjc5MzVhMyk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmZmZmYsICNmMjc5MzVhMyk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmZmZmLCAjZjI3OTM1YTMpO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZm9udC1zaXplIDAuNXM7XHJcbiAgLW8tdHJhbnNpdGlvbjogZm9udC1zaXplIDAuNXM7XHJcbiAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuNXM7XHJcbn1cclxuXHJcbnAudGVzdGltb25pYWxTdGF0ZSB7XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgY29sb3I6ICM4MDgwODBkNDtcclxufVxyXG5cclxucC50ZXN0aW1vbmlhbEZyb20ge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzMzNDc1YztcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogI2ZmNzkwMDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uQ29sb3Ige1xyXG4gIGJhY2tncm91bmQ6ICNmZjc5MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmJ1dHRvbkNvbG9yOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjc5MDAgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGNvbG9yOiAjZmY3OTAwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmYgIWltcG9ydGFudDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLml0ZW0xIHtcclxuICBoZWlnaHQ6IDEwMGVtO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PSBFbmQgVGVzdGltb25pYWwgRmxleGJveCA9PT09PT09PT09PT09ICovXHJcbi5idG5uIHtcclxuICBiYWNrZ3JvdW5kOiAjZmY3OTAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiAxNzBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBib3R0b206IDMwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICNlZWU7XHJcbn1cclxuXHJcblxyXG4vLyBsZXMgc3R5bGUgYXBwbGlxdWVyIGF1IG1vZGFsIFxyXG4udGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IG15Zm9uMjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbn1cclxuXHJcbi5jb2xvcmJ1dHRvbjEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAxQUZGLCAkYWxwaGE6IC44NSk7XHJcbiAgY29sb3I6ICNmZmZmO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY29sb3JidXR0b24yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI0ZGNzkwMCwgJGFscGhhOiAuODUpO1xyXG4gIGNvbG9yOiAjZmZmZjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNvbG9yYnV0dG9uMyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNGRjAwMDAsICRhbHBoYTogLjg1KTtcclxuICBjb2xvcjogI2ZmZmY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jb2xvcmJ1dHRvbjE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmZmZiwgJGFscGhhOiAuODUpO1xyXG4gIGNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sb3JidXR0b24yOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZmYsICRhbHBoYTogLjg1KTtcclxuICBjb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRjc5MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbG9yYnV0dG9uMzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmZmLCAkYWxwaGE6IC44NSk7XHJcbiAgY29sb3I6ICNGRjAwMDA7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGMDAwMDtcclxufVxyXG5cclxuLy8gY29kZSBDU1MgQVBQTElRVUVSIEFVIE1PREVMRSBQRVJNRVRUQU5UIEQnQUpPVVRFUiBVTkUgXHJcbmlvbi1tb2RhbCB7XHJcbiAgLS1oZWlnaHQ6IDMwZW0gIWltcG9ydGFudDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgLS13aWR0aDogMzBlbTtcclxufVxyXG5pb24tY29udGVudHtcclxuICBmb250LWZhbWlseTogbXlmb24xICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBib3gtc2hhZG93OiAwcHggNnB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6IG15Zm9uMSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogc21hbGwgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjRkY3OTAwO1xyXG5cclxuICBoNSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcbiNmbGV4LWNvbnRhaW5lcntcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbiNmbGV4LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDU4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGJsQXVjdW5le1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTAlO1xyXG5cclxufVxyXG5cclxuLy9sZXMgY29kZSBwZXJtZXR0YW50IGRlIGZhaXJlIGxhIGNhcmRlIGJvb3N0cmFwXHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGI5Mjc7XHJcbiB9XHJcbiAud3JhcHBlciB7XHJcbiBwYWRkaW5nLXRvcDogMzBweDtcclxuIH1cclxuIC5jYXJkLWltZy10b3Age1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwwLDAsMC41KTtcclxuIH1cclxuIC5jYXJkLWJvZHl7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIGJveC1zaGFkb3c6IDBweCAxNXB4IDE1cHggLThweCByZ2JhKDAsMCwwLDAuNSlcclxuIH1cclxuIC5jYXJkLWJvZHkgaDYge1xyXG4gZm9udC1zaXplOiAxNHB4O1xyXG4gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuIGNvbG9yOiBibGFjaztcclxuIH1cclxuIC5jYXJkLXRpdGxlIHtcclxuIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiBmb250LXdlaWdodDogYm9sZDtcclxuIGZvbnQtc2l6ZTogMjRweDtcclxuIH1cclxuIC5jYXJkLXRleHR7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gfVxyXG5cclxuIC5sYXJhZ2VyQ29sb25uZXtcclxuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5zb2NpYWxzIGEge1xyXG4gd2lkdGg6IDIwJTtcclxuIGhlaWdodDogMjAlO1xyXG4gZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gY3Vyc29yOiBwb2ludGVyO1xyXG4gXHJcbiBtYXJnaW46IDAgMTBweDtcclxuIH1cclxuIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcblxyXG4gIC5zb2NpYWxzIGEge1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIGhlaWdodDogMTUlO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgXHJcbiB9XHJcbiAuc29jaWFscyBhIGkge1xyXG4gY29sb3I6ICNmZmY7XHJcbiBwYWRkaW5nOiAxMnB4IDA7XHJcbiB9ICAgIFxyXG4gXHJcbi8vICAuc29jaWFscyBhOm50aC1jaGlsZCgxKSB7XHJcbi8vICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xyXG4vLyAgfS5zb2NpYWxzIGE6bnRoLWNoaWxkKDIpIHtcclxuLy8gIGJhY2tncm91bmQ6ICNmZjAwMDA7XHJcbi8vICB9LnNvY2lhbHMgYTpudGgtY2hpbGQoMykge1xyXG4vLyAgYmFja2dyb3VuZDogIzAwN2JiNTtcclxuLy8gIH0uc29jaWFscyBhOm50aC1jaGlsZCg0KSB7XHJcbi8vICBiYWNrZ3JvdW5kOiAjZWE0Yzg5O1xyXG4vLyAgfVxyXG4gXHJcbiBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgIC5teC0zMHtcclxuICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICB9XHJcbiB9XHJcblxyXG4vLyAucHtcclxuLy8gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgYm9yZGVyOiAycHggc29saWQgcmVkICFpbXBvcnRhbnQ7XHJcbi8vICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudDtcclxuLy8gIH1cclxuaW9uLW1vZGFsIHtcclxuICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAtLXdpZHRoOiAzMGVtO1xyXG59Il19 */";

/***/ }),

/***/ 9956:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\"\r\n    integrity=\"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==\"\r\n    crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n<!-- <div class=\"iconCloche\" (click)=\"OpenNotification($event)\">\r\n  <i class=\"fa-regular fa-bell\"></i><span>2</span>\r\n</div> -->\r\n<div class=\"col reporting\">\r\n  <button type=\"button\" class=\"btn buttonColor\"  class=\"iconCloche\" (click)=\"OpenNotification($event)\"><i class=\"fa-regular fa-bell\"></i><span id=\"notift\">{{this.notifTotal}}</span></button>\r\n</div>";

/***/ }),

/***/ 5418:
/*!****************************************************!*\
  !*** ./src/app/entite/entite.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Entité</ion-title>\r\n    <ion-button slot=\"end\" fill=\"clear\">\r\n      <app-cloche></app-cloche>\r\n\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <!-- <div class=\"col-sm-7 mx-auto\">\r\n    <header class=\"section-header text-center\">\r\n      <span class=\"h1 d-block\">\r\n        <span>❝</span>\r\n      </span>\r\n      <h2>Nos Entités</h2>\r\n    </header>\r\n  </div> -->\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"d-grid m-2 gap-2 d-md-flex justify-content-md-end\">\r\n        <button class=\"btn buttonColor\" type=\"button\" id=\"open-modal\">+ &nbsp; ajouter entité</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"cat\">\r\n    <div class=\"box\">\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"longueur ==0\" id=\"flex-container\" class=\"testimonials\">\r\n    <div class=\"container-fluid mere\" style=\"height: 100%;\">\r\n      <ion-label class=\"lblAucune\"> Aucune entite\r\n      </ion-label>\r\n    </div>\r\n  </div>\r\n  <!-- <div *ngIf=\"longueur!==0\" id=\"flex-container\" class=\"testimonials\">\r\n    <div id=\"left-zone\">\r\n      <ul class=\"list item1\">\r\n\r\n        <li class=\"item\" *ngFor=\"let inf of entites\">\r\n          <input type=\"radio\" id=\"{{inf.libelleentite}}\" name=\"basic_carousel\" checked />\r\n          <label class=\"label_testimonial\" class=\"{{inf.libelleentite}}\"\r\n            for=\"{{inf.libelleentite}}\">{{inf.libelleentite}}</label>\r\n          <div class=\"content-test content_testimonial\">\r\n            <img width=\"100\" src={{inf.image}} alt=\"\">\r\n            <h1>{{inf.libelleentite}}</h1>\r\n            <p class=\"desc\">{{inf.description}}</p>\r\n            <p class=\"testimonialFrom hideInfo\">Gerant</p>\r\n            <p class=\"testimonialState hideInfo\">{{inf.gerant.prenom}} {{inf.gerant.nom}} </p>\r\n            <p class=\"testimonialState\"><button class=\"btn button\" (click)=\"RedirigerEntite(inf.id)\">Voir+</button></p>\r\n          </div>\r\n        </li>\r\n\r\n      </ul>\r\n    </div>\r\n    <div id=\"right-zone\"></div>\r\n  </div> -->\r\n\r\n\r\n  <!-- code permettant d'ajouter une nouvelle encours -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <ion-modal #modal trigger=\"open-modal\" backdropDismiss=\"false\">\r\n\r\n    <ng-template>\r\n      <!-- <div class=\"d-grid gap-2 m-2 d-md-flex justify-content-md-end\">\r\n        <!-- <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"modal.dismiss()\">Close</ion-button>\r\n        </ion-buttons> \r\n      </div> -->\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-title>Ajouter entité</ion-title>\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"modal.dismiss()\"><span aria-hidden=\"true\" style=\"font-size: 30px;\">&times;</span></ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n\r\n      <div class=\"container\">\r\n        <!-- <button type=\"button\" class=\"btn-close\"  (click)=\"modal.dismiss()\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button> -->\r\n        <!-- <h5 class=\"card-title text-center\">Nouvelle entité</h5> -->\r\n        <div class=\"card\">\r\n\r\n          <div class=\"card-body text-start\">\r\n            <!-- <div class=\"alert alert-success mb-3\" role=\"alert\" *ngIf=\"alertTrue\">\r\n              L'entite Creer avec succes\r\n            </div>\r\n            <div class=\"alert alert-danger mb-3\" role=\"alert\" *ngIf=\"alertFalse\">\r\n              ERREUR LORS DE CREATION DE L'ENTITE\r\n            </div> -->\r\n            <form>\r\n              <div for=\"libelleEntite\" class=\"\">Nom entité *</div>\r\n              <input type=\"text\" name=\"libelleentite\" [(ngModel)]=\"libelleentite\" class=\"form-control\"\r\n                id=\"libelleEntite\" placeholder=\"Orange digital kalanso\">\r\n              <div for=\"responsableEntite\" class=\"\">Responsable de l'entité *</div>\r\n              <select class=\"form-select form-select-sm\" name=\"responsableEntite\" [(ngModel)]=\"responsableEntite\">\r\n                <option selected>--selectionner un responsable</option>\r\n                <option *ngFor=\"let user of toutUtilisateur \">{{user.prenom}} {{user.nom}}</option>\r\n\r\n              </select>\r\n              <div for=\"imageEntite\" class=\"\">Image entite *</div>\r\n              <input type=\"file\" (change)=\"recuperationImage($event)\" class=\"form-control\" id=\"imageEntite\"\r\n                placeholder=\"selectionner une image\">\r\n\r\n              <div for=\"description\" class=\"\">Description de l'entité *</div>\r\n              <textarea class=\"form-control\" id=\"description\" name=\"description\" [(ngModel)]=\"description\"\r\n                rows=\"3\"></textarea>\r\n\r\n              <div class=\"d-grid gap-2 col-6 text-center mx-auto mt-2\">\r\n                <button type=\"button\" class=\"btn colorbutton2 btn-sm\" id=\"open-modal1\"\r\n                  (click)=\"postAllEntite();modal.dismiss();\">Enregistrer</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </ng-template>\r\n  </ion-modal>\r\n  <!-- methode permettant de modifier l'entite -->\r\n\r\n  <ion-modal [isOpen]=\"isModalOpen\" backdropDismiss=\"false\">\r\n\r\n    <ng-template>\r\n      <div class=\"d-grid gap-2 m-2 d-md-flex justify-content-md-end\">\r\n        <!-- <ion-buttons slot=\"end\">\r\n        <ion-button (click)=\"modal.dismiss()\">Close</ion-button>\r\n      </ion-buttons> -->\r\n      </div>\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-title>Modifier entité</ion-title>\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"setClose()\">Close</ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n\r\n      <div class=\"container\">\r\n        <!-- <button type=\"button\" class=\"btn-close\"  (click)=\"modal.dismiss()\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n      <h5 class=\"card-title text-center\">Nouvelle entité</h5> -->\r\n        <div class=\"card\">\r\n\r\n          <div class=\"card-body text-start\">\r\n            <!-- <div class=\"alert alert-success mb-3\" role=\"alert\" *ngIf=\"alertTrue\">\r\n              Entité modifier avec succès\r\n            </div>\r\n            <div class=\"alert alert-danger mb-3\" role=\"alert\" *ngIf=\"alertFalse\">\r\n              Erreur, Veuillez verfier tous les champs\r\n            </div> -->\r\n            <form>\r\n              <div for=\"libelleEntite\" class=\"\">Nom entité *</div>\r\n              <input type=\"text\" name=\"libelleentiteMo\" [(ngModel)]=\"libelleentiteMo\" class=\"form-control\"\r\n                id=\"libelleEntite\" [value]=\"libelleentiteMo\">\r\n              <div for=\"responsableEntite\" class=\"\">Responsable de l'entité *</div>\r\n              <select class=\"form-select form-select-sm\" name=\"responsableEntiteMo\" [(ngModel)]=\"responsableEntiteMo\">\r\n                <option selected>--selectionner un responsable</option>\r\n                <option *ngFor=\"let user of toutUtilisateur \">{{user.prenom}} {{user.nom}}</option>\r\n\r\n              </select>\r\n              <div for=\"imageEntite\" class=\"\">Image entite *</div>\r\n              <input type=\"file\" (change)=\"recuperationImage1($event)\" class=\"form-control\" id=\"imageEntite\"\r\n                placeholder=\"selectionner une image\">\r\n\r\n              <div for=\"description\" class=\"\">Description de l'entité *</div>\r\n              <textarea class=\"form-control\" id=\"description\" name=\"descriptionMo\" [(ngModel)]=\"descriptionMo\" rows=\"3\"\r\n                ></textarea>\r\n\r\n              <div class=\"d-grid gap-2 col-6 text-center mx-auto mt-2\">\r\n                <button type=\"button\" class=\"btn colorbutton2 btn-sm\" id=\"open-modal1\"\r\n                  (click)=\"modifierEntite();setClose()\">Modifier</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </ng-template>\r\n  </ion-modal>\r\n\r\n\r\n  <div class=\"wrapper\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 col-lg-4 col position-relative\" *ngFor=\"let inf of entites\">\r\n          <div class=\"card mx-30 laragerColonne\">\r\n            <img src={{inf.image}} class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n              <h4 class=\"card-title\">{{inf.libelleentite}}</h4>\r\n              <h6 class=\"card-title\">\r\n                Responsable <br>{{inf.gerant.prenom}} {{inf.gerant.nom}}</h6>\r\n              <h6>\r\n              </h6>\r\n              <p class=\"card-text\">{{inf.description | slice:0:50}}...</p> \r\n              \r\n                <div class=\"position-absolute bottom-0 start-50 translate-middle-x mb-2\">\r\n                  <div class=\"socials\">\r\n                    <a (click)=\"RedirigerEntite(inf.id)\" title=\"Voir plus de detail sur l'entité\"><img\r\n                        src=\"../../assets/icon/voir.png\" alt=\"\" srcset=\"\"></a>\r\n                    <a (click)=\"setOpen(true,inf.id)\" title=\"cliquer ici pour modifier l'entité\"><img\r\n                        src=\"../../assets/icon/modifier-le-fichier.png\" alt=\"\" srcset=\"\"></a>\r\n                    <a (click)=\"supprimerEntite(inf.id)\" title=\"cliquer ici pour supprimer l'entité\"><img src=\"../../assets/icon/supprimer.png\" alt=\"\"\r\n                        srcset=\"\"></a>\r\n                  </div>\r\n                </div>\r\n              \r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_entite_entite_module_ts.js.map