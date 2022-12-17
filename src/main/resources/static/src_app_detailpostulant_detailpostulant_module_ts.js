"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_detailpostulant_detailpostulant_module_ts"],{

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

/***/ 698:
/*!*******************************************************************!*\
  !*** ./src/app/detailpostulant/detailpostulant-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailpostulantPageRoutingModule": () => (/* binding */ DetailpostulantPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _detailpostulant_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailpostulant.page */ 8166);




const routes = [
    {
        path: '',
        component: _detailpostulant_page__WEBPACK_IMPORTED_MODULE_0__.DetailpostulantPage
    },
    // {
    //   path: 'modifierpersonnel',
    //   component: ModifierpersonnelPage
    // }
];
let DetailpostulantPageRoutingModule = class DetailpostulantPageRoutingModule {
};
DetailpostulantPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailpostulantPageRoutingModule);



/***/ }),

/***/ 6140:
/*!***********************************************************!*\
  !*** ./src/app/detailpostulant/detailpostulant.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailpostulantPageModule": () => (/* binding */ DetailpostulantPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _detailpostulant_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailpostulant-routing.module */ 698);
/* harmony import */ var _detailpostulant_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailpostulant.page */ 8166);
/* harmony import */ var _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cloche/cloche.component */ 7907);








let DetailpostulantPageModule = class DetailpostulantPageModule {
};
DetailpostulantPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _detailpostulant_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailpostulantPageRoutingModule
        ],
        declarations: [_detailpostulant_page__WEBPACK_IMPORTED_MODULE_1__.DetailpostulantPage, _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__.ClocheComponent]
    })
], DetailpostulantPageModule);



/***/ }),

/***/ 8166:
/*!*********************************************************!*\
  !*** ./src/app/detailpostulant/detailpostulant.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailpostulantPage": () => (/* binding */ DetailpostulantPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _detailpostulant_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailpostulant.page.html?ngResource */ 1477);
/* harmony import */ var _detailpostulant_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailpostulant.page.scss?ngResource */ 5100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_role_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/role/role.service */ 4001);
/* harmony import */ var _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utilisateur/utilisateur.service */ 4996);
/* harmony import */ var _services_entite_entite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/entite/entite.service */ 6738);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);










let DetailpostulantPage = class DetailpostulantPage {
    constructor(alertController, modalController, entiteService, roleservice, userService, router, route) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.entiteService = entiteService;
        this.roleservice = roleservice;
        this.userService = userService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        //L'id recupérer depuis de navigateur
        this.idUser = this.route.snapshot.params['id'];
        console.log(this.idUser);
        //Fonction pour recupérer le user connecter
        this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
        console.log(this.Utilisateur);
        //Fonction pour actualisation
        this.getPersonneParId(this.idUser, this.Utilisateur);
        //Recuperation des entités
        this.entiteService.getAllEntites(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            if (data.message == 'ok') {
                this.Entites = data.data;
                console.log(this.Entites);
            }
        });
        //Recupération des rôles
        this.roleservice.getAllRole(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            if (data.message == "ok") {
                this.Roles = data.data;
                console.log(this.Roles);
            }
        });
        //Recupération des formats email
        this.roleservice.getListeFormatMail(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            if (data.message == "ok") {
                this.formatMailperonnel = data.data;
                console.log(this.formatMailperonnel);
            }
        });
    }
    back() {
        window.history.back();
    }
    //Pour récupérer le personnel par id
    getPersonneParId(id, utilisateur) {
        this.userService.DetailsUserById(utilisateur.login, utilisateur.password, id).subscribe(data => {
            this.users = data.data;
            console.log(this.users);
            this.nom = this.users.nom;
            this.prenom = this.users.prenom;
            this.genre = this.users.genre;
            this.email = this.users.email;
            this.image = this.users.image;
            this.nomEntite = this.users.monEntite.libelleentite;
            this.statusUser = this.users.role.libellerole;
        });
    }
    //Pour récupérer le personnel par id
    //  getIntervenantParId(id: any, utilisateur: any){
    //   this.userService.DetailsUserById(utilisateur.login, utilisateur.password, id).subscribe(data => {
    //     this.users = data.data
    //     console.log(this.users)
    //     this.nom = this.users.nom
    //     this.prenom = this.users.prenom
    //     this.genre = this.users.genre
    //     this.email = this.users.email
    //     this.numero = this.users.numero
    //   })
    // }
    //Methode de update du personnel
    UpdateUser() {
        for (let i = 0; i < this.Roles.length; i++) {
            if (this.Roles[i].libellerole == this.role) {
                this.RoleSelectionner = this.Roles[i];
            }
        }
        for (let i = 0; i < this.Entites.length; i++) {
            if (this.Entites[i].libelleentite == this.entite) {
                this.EntiteSelectionner = this.Entites[i];
            }
        }
        // for(let i=0; i<this.formatMailperonnel.length;i++){
        //   if(this.formatMailperonnel[i].libelle==this.email){
        //     this.EmailSelectionner=this.formatMailperonnel[i]
        //   }
        // }
        // for(let i=0; i<this.Roles.length;i++){
        //   if(this.Roles[i].libellerole==this.statusUser){
        //     this.RoleSelectionner2=this.statusUser
        //   }
        // }
        // console.log(this.RoleSelectionner2)
        console.log(this.RoleSelectionner);
        console.log(this.EntiteSelectionner);
        if (this.genre == 'Masculin') {
            this.Genre = 0;
        }
        else {
            this.Genre = 1;
        }
        console.log("immmmmmmmmmmmmmm");
        console.log(this.image1);
        this.userService.UpdateUser(this.Utilisateur.login, this.Utilisateur.password, this.nom, this.prenom, this.email + this.domaine, this.Genre, this.image1, this.EntiteSelectionner, this.RoleSelectionner, this.idUser).subscribe(retour => {
            console.log(retour);
            // this.presentAlert()
        });
        this.cancel();
        this.MessageSuccesUpdate();
        this.actualisePage(this.idUser, this.Utilisateur);
    }
    //Pop up apres suppression
    MessageDeleteUserEffectuer() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            title: "Attention vous etes sûr de vouloir SUPPRIMER le personnel",
            showConfirmButton: true,
            confirmButtonText: "Oui",
            confirmButtonColor: 'green',
            showCancelButton: true,
            cancelButtonText: "Non",
            cancelButtonColor: 'red',
            heightAuto: false
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    title: "Etes-vous vraiment sûr de vouloir supprimer le personnel ?",
                    showConfirmButton: true,
                    confirmButtonText: "Confirmer",
                    confirmButtonColor: 'green',
                    showCancelButton: true,
                    cancelButtonText: "Annuler",
                    cancelButtonColor: 'red',
                    heightAuto: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.userService.DeleteUser(this.Utilisateur.login, this.Utilisateur.password, this.RoleSelectionner, this.idUser).subscribe(retour => {
                            console.log(retour);
                        });
                        this.router.navigateByUrl('/dashboard/personnels', { skipLocationChange: true }).then(() => {
                            this.router.navigate(["/personnels"]);
                        });
                    }
                    else if (result.isDenied) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Suppression annuler !');
                    }
                });
            }
            else if (result.isDenied) {
                // Swal.fire('Annuler', '', 'info');
            }
        });
    }
    //Delete methode personnel
    // DeleteUser(){
    //   this.MessageDeleteUserEffectuer();
    //   this.userService.DeleteUser(this.Utilisateur.login,this.Utilisateur.password,this.RoleSelectionner,this.idUser).subscribe(retour=>{
    //     console.log(retour)
    //     // this.actualisePagApresSuppresion()
    //     // this.router.navigateByUrl('/dashboard/personnels')
    //   });
    //     // this.presentAlert()
    //   }
    //Desactiver methode
    DesactiverUser() {
        for (let i = 0; i < this.Roles.length; i++) {
            if (this.Roles[i].libellerole == this.role) {
                this.RoleSelectionner = this.Roles[i];
            }
        }
        console.log(this.RoleSelectionner);
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            title: "Attention vous etes sûr de vouloir DESACTIVER le personnel",
            showConfirmButton: true,
            confirmButtonText: "Oui",
            confirmButtonColor: 'green',
            showCancelButton: true,
            cancelButtonText: "Non",
            cancelButtonColor: 'red',
            heightAuto: false
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    title: "Etes-vous vraiment sûr de vouloir desactiver le personnel ?",
                    showConfirmButton: true,
                    confirmButtonText: "Oui",
                    confirmButtonColor: 'green',
                    showCancelButton: true,
                    cancelButtonText: "Non",
                    cancelButtonColor: 'red',
                    heightAuto: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.userService.DesactiverUser(this.Utilisateur.login, this.Utilisateur.password, this.RoleSelectionner, this.idUser).subscribe(retour => {
                            console.log(retour);
                        });
                        this.router.navigateByUrl('/dashboard/personnels', { skipLocationChange: true }).then(() => {
                            this.router.navigate(["/personnels"]);
                        });
                    }
                    else if (result.isDenied) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Desacivation annuler !');
                    }
                });
            }
            else if (result.isDenied) {
                // Swal.fire('Changes are not saved', '', 'info');
            }
        });
    }
    //Envoi de photo
    envoyerImage(event) {
        this.image = event.target["files"][0];
        console.log(this.image);
    }
    envoyerImage1(event) {
        this.image1 = event.target["files"][0];
        console.log(this.image);
    }
    //Pop up de update reçu
    MessageSuccesUpdate() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            title: "Personnel modifier avec succes",
            showConfirmButton: true,
            confirmButtonText: "Daccord",
            confirmButtonColor: 'green',
            heightAuto: false
        });
    }
    //Methode pour actualiser la page
    actualisePage(id, user) {
        setTimeout(() => {
            this.getPersonneParId(id, user);
        }, 1000);
    }
    ///Methode permettant de rediriger apres la suppression d'une personne
    // ActualisePage Apres suppression
    // actualisePagApresSuppresion(){
    //   setTimeout(() => {
    //     this.getAllUser()
    //   }, 1000);
    // }
    getAllUser() {
        this.userService.getAllUsers(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            this.users = data.data;
            console.log(data.data);
        });
    }
    // message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
    // name: string;
    cancel() {
        this.modal.dismiss(null, 'cancel');
    }
    confirm() {
        this.modal.dismiss(null, 'confirm');
    }
    confirmP() {
        this.modal.dismiss(null, 'confirm');
    }
    onWillDismiss(event) {
        // const ev = event as CustomEvent<OverlayEventDetail<string>>;
        // if (ev.detail.role === 'ConfirmVariale') {
        //   this.name = `${ev.detail.data}!`;
        //   console.log(this.name);
        // }
    }
};
DetailpostulantPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _services_entite_entite_service__WEBPACK_IMPORTED_MODULE_5__.EntiteService },
    { type: _services_role_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService },
    { type: _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_4__.UtilisateurService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
DetailpostulantPage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonModal,] }]
};
DetailpostulantPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-detailpostulant',
        template: _detailpostulant_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detailpostulant_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailpostulantPage);



/***/ }),

/***/ 7993:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "#notift {\n  font-size: 11px;\n  border-radius: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 12px;\n  right: 0px;\n  height: 11px;\n  width: 11px;\n  background-color: #fff;\n}\n\n.iconCloche {\n  border-radius: 15px;\n  border: #ff7900 2px solid;\n}\n\n.iconCloche:hover {\n  border-radius: 15px;\n  background-color: #ff7900;\n  color: #fff;\n  font-size: 25px !important;\n}\n\n.iconCloche:hover #notift {\n  background-color: #ffffff;\n  color: #ff7900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb2NoZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUdKIiwiZmlsZSI6ImNsb2NoZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZnR7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgd2lkdGg6IDExcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uaWNvbkNsb2NoZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6ICNmZjc5MDAgMnB4IHNvbGlkO1xyXG59XHJcblxyXG4uaWNvbkNsb2NoZTpob3ZlcntcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgI25vdGlmdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI2ZmNzkwMDtcclxuICB9XHJcbn1cclxuLy8gLmJ0bntcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC5idG46aG92ZXJ7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbi8vICAgY29sb3I6ICNGRjc5MDAgIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgLmJ0biA+IGk6aG92ZXJ7XHJcbi8vICAgICBjb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuICAiXX0= */";

/***/ }),

/***/ 5100:
/*!**********************************************************************!*\
  !*** ./src/app/detailpostulant/detailpostulant.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: myfon1;\n  src: url('Poppins-Light.ttf');\n}\n@font-face {\n  font-family: myfon3;\n  src: url('Poppins-Black.ttf');\n}\n#back {\n  display: none;\n}\nion-content {\n  font-family: myfon3;\n  --ion-background-color: #ffff;\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\nimg {\n  margin-top: 10px;\n  width: 36px;\n}\n.center {\n  display: block;\n  margin: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  height: 400px;\n  width: 420px;\n}\n.info {\n  text-align: center;\n}\nion-list {\n  padding: 0% 20% 0% 20%;\n}\n.taille1 {\n  font-weight: bolder;\n}\n.taille2 {\n  font-size: 18px;\n}\n.buttom {\n  padding: 0% 20% 0% 20%;\n  display: flex;\n  flex-direction: row;\n}\n.button1 {\n  display: flex;\n  flex-direction: row;\n  padding-bottom: 2em;\n}\n.but1, .but2 {\n  letter-spacing: 2px;\n  padding: 10px;\n  margin-right: 4em;\n  margin-top: 3em;\n  margin-bottom: 3em;\n  border: 1px solid #FF6200;\n  border-radius: 15px;\n  background-color: #FF6200;\n  font-size: 20px;\n  font-weight: 400;\n  color: white;\n}\n.but1:hover, .but2:hover {\n  background-color: white;\n  color: #FF6200;\n  border: 1px solid #FF6200;\n}\n.firsttitle {\n  font-size: 2rem;\n}\n.mail {\n  display: flex;\n  flex-direction: row;\n  color: #000;\n  background-color: #f8fafc;\n}\nion-title {\n  color: #FF7900;\n}\nh1 {\n  font-family: \"Poppins\", sans-serif;\n  margin: 15px;\n  font-size: 2rem;\n  font-weight: bold;\n  text-align: center;\n  padding: 3px 6px;\n  position: absolute;\n  top: 15%;\n  background-color: #FFF;\n  color: #FF7900;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.modal-wrapper {\n  transform: translate3d(0px, 40px, 0px);\n  opacity: 0.01;\n  height: 38rem;\n  overflow-y: scroll;\n  scrollbar-color: rebeccapurple green;\n  scrollbar-width: thin;\n  width: 45rem;\n}\n.container {\n  max-width: 900px;\n  padding: -1px 30px;\n  border-radius: 15px;\n  background: #fff;\n  height: 33rem;\n}\nion-modal {\n  --border-radius: 15px;\n  --width: 48em;\n  --height: 39em;\n}\n.box {\n  width: 80%;\n  padding: 80px 30px;\n  border-radius: 15px;\n  height: 33rem;\n}\n.mail {\n  position: relative;\n}\n#inp {\n  border-radius: 15px 0px 0px 15px;\n}\n.mailmodel {\n  color: #000;\n  background-color: #E9ECEF;\n  outline: none;\n  height: 40px;\n  width: 100%;\n  border-radius: 0px 15px 15px 0px;\n  border: 1px solid #ccc;\n  font-size: 12px;\n  border-bottom-width: 2px;\n  transition: all 0, 3s ease;\n  padding-left: 1px;\n  color: #000;\n  width: 100%;\n  padding: 3.25%;\n  align-items: center;\n}\ninput {\n  color: #000;\n  background-color: #f8fafc;\n}\n.container form .ajout {\n  color: #FF7900;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 4rem 0 12px 0;\n}\nform .ajout .input-box {\n  margin-bottom: 15px;\n  width: calc(50% - 20px);\n}\n.select {\n  color: #000;\n  width: 100%;\n  padding: 3.25%;\n  margin-top: 1px;\n  align-items: center;\n  border-radius: 15px;\n}\n.ajout .input-box .details {\n  display: block;\n  font-weight: 500;\n}\n#details {\n  border-radius: 15px;\n}\n.ajout .input-box input {\n  outline: none;\n  height: 40px;\n  width: 100%;\n  border-radius: 15px;\n  border: 1px solid #ccc;\n  padding-left: 15px;\n  font-size: 14px;\n  border-bottom-width: 2px;\n  transition: all 0, 3s ease;\n}\n.ajout .input-box input:focus,\n.ajout .input-box input:valid {\n  border-color: #ccc;\n}\nform .button {\n  height: 45px;\n  margin: 45px 0;\n  width: 100%;\n  display: flex;\n  justify-content: end;\n  margin-right: 10rem;\n}\n.but {\n  border-radius: 15px;\n  padding: 8px;\n  background-color: #FF7900;\n  color: #FFF;\n  border: #FF7900 1px solid;\n  margin-right: 30px;\n}\n.but:hover {\n  background: #FFF;\n  color: #FF7900;\n}\nform .button .input {\n  height: 100%;\n  width: 45%;\n  color: white;\n  border: none;\n  font-size: 18px;\n  font-weight: 500;\n  border-radius: 15px;\n  letter-spacing: 1px;\n}\nform .button input:hover {\n  background: linear-gradient(135deg);\n}\ntextarea {\n  color: #000;\n}\n@media only screen and (max-width: 1106px) {\n  ion-list {\n    padding: 0% 10% 0% 10%;\n  }\n}\n@media only screen and (max-width: 1024px) {\n  ion-list {\n    padding: 0% 20% 0% 20%;\n  }\n  ion-list {\n    padding: 0% 10% 0% 10%;\n  }\n  .but1, .but2 {\n    letter-spacing: 1px;\n    margin-right: 2em;\n    padding: 10px;\n  }\n}\n@media only screen and (max-width: 640px) {\n  .but1, .but2 {\n    margin-right: 1em;\n    padding: 6px;\n  }\n  ion-list {\n    padding: 0px;\n  }\n  .buttom {\n    padding: 0% 10% 0% 10%;\n  }\n  .taille2 {\n    font-size: 16px;\n  }\n  ion-label {\n    margin-right: 10px;\n  }\n}\n@media only screen and (max-width: 460px) {\n  .but1, .but2 {\n    margin-right: 6px;\n    padding: 6px;\n    font-size: 18px;\n  }\n  ion-list {\n    padding: 0px;\n  }\n  .buttom {\n    padding: 0% 5% 0% 5%;\n  }\n  .taille2 {\n    font-size: 13px;\n  }\n}\n@media only screen and (max-width: 414px) {\n  .buttom {\n    padding: 0% 5% 0% 5%;\n    display: flex;\n    flex-direction: row;\n  }\n  .buttom1 {\n    height: 20px;\n    margin-bottom: 2em;\n  }\n  .but1, .but2 {\n    padding: 10px;\n    font-size: 13px;\n  }\n}\n.buttonColor {\n  background: #ff7900;\n  border-radius: 15px;\n  color: #ffffff;\n}\n.buttonColor:hover {\n  border: 1px solid #ff7900 !important;\n  border-radius: 15px;\n  color: #ff7900 !important;\n}\n@media (max-width: 1010px) {\n  .mailmodel span {\n    font-size: 12px;\n  }\n  h1 {\n    font-size: 25px;\n  }\n}\n@media (max-width: 584px) {\n  h1 {\n    top: 11%;\n  }\n  .container {\n    max-width: 100%;\n  }\n  form .ajout .input-box {\n    margin-bottom: 15px;\n    width: 100%;\n  }\n  .container form .ajout {\n    max-height: 300px;\n    overflow-y: scroll;\n  }\n  h1 {\n    width: max-content;\n    font-size: 18px;\n  }\n  .ajout::-webkit-scrollbar {\n    width: 0;\n  }\n}\n@media (max-width: 390px) {\n  .mailmodel span {\n    font-size: 12px;\n  }\n  h1 {\n    font-size: 20px;\n    padding-right: 2rem;\n  }\n}\n@media (max-width: 316px) {\n  .select {\n    font-size: 15px;\n  }\n  .firsttitle {\n    margin-left: none;\n    font-size: 1rem;\n  }\n  ion-title {\n    margin-left: 1em;\n  }\n  .col i {\n    margin-right: 1em;\n    margin-bottom: 1em;\n    font-size: 20px;\n  }\n  .buttom {\n    height: 25px;\n    margin: 30px 0;\n  }\n  .but {\n    font-size: 13px;\n  }\n  .details {\n    font-size: 14px;\n  }\n  .mailmodel span {\n    font-size: 10px;\n  }\n  h1 {\n    margin-bottom: 2rem;\n    font-size: 16px;\n    padding-right: 2rem;\n    top: 6%;\n  }\n  .ajout {\n    height: 1000px;\n  }\n  .card {\n    height: 800px;\n  }\n  .box {\n    top: 9%;\n    padding: 6px;\n    width: 100%;\n    height: 420px;\n  }\n  .btn-close {\n    display: none;\n  }\n  .container {\n    height: 450px;\n  }\n  .ajout .input-box input {\n    font-size: 12px;\n  }\n  #back {\n    display: inline;\n    cursor: pointer;\n  }\n}\n.text {\n  font-family: myfon2;\n  font-size: 25px;\n  font-weight: 700;\n}\n.colorbutton1 {\n  background-color: rgba(0, 26, 255, 0.85);\n  color: white;\n  padding: 5px;\n  border-radius: 10px;\n}\n.colorbutton2 {\n  background-color: rgba(0, 158, 44, 0.85);\n  color: white;\n  padding: 5px;\n  border-radius: 10px;\n}\n.colorbutton3 {\n  background-color: rgba(255, 0, 0, 0.85);\n  color: white;\n  padding: 5px;\n  border-radius: 10px;\n}\n.colorbutton1:hover {\n  background-color: rgba(255, 255, 255, 0.85);\n  color: #001AFF;\n  border: 1px solid #001AFF;\n}\n.colorbutton2:hover {\n  background-color: rgba(255, 255, 255, 0.85);\n  color: #009E2C;\n  border: 1px solid #009E2C;\n}\n.colorbutton3:hover {\n  background-color: rgba(255, 255, 255, 0.85);\n  color: #FF0000;\n  border: 1px solid #FF0000;\n}\n.card {\n  width: 1000px;\n  height: 900px;\n}\n.container {\n  width: 2000px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHBvc3R1bGFudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLDZCQUFBO0FBQ0o7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsNkJBQUE7QUFDSjtBQUNBO0VBQ0ksYUFBQTtBQUNKO0FBQ0E7RUFDSSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUVKO0FBQ0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QUFFSjtBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBRUo7QUFDQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQUE7RUFDSSxrQkFBQTtBQUdKO0FBREE7RUFDSSxzQkFBQTtBQUlKO0FBR0E7RUFDSSxtQkFBQTtBQUFKO0FBRUE7RUFDSSxlQUFBO0FBQ0o7QUFHQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0E7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUVKO0FBQ0E7RUFFSSxlQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNKO0FBQ0E7RUFDSSxjQUFBO0FBRUo7QUFTQTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFOSjtBQVNBO0VBQ0ksc0NBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFOSjtBQVFBO0VBRUksZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFHQSxhQUFBO0FBVEo7QUFXQTtFQUVJLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFUSjtBQWFBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0FBWEo7QUFhQTtFQUNJLGtCQUFBO0FBVko7QUFZQTtFQUNJLGdDQUFBO0FBVEo7QUFXQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFSSjtBQVdBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBUko7QUFXQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFSSjtBQVdBO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtBQVJKO0FBV0E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVJKO0FBV0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFSSjtBQVlBO0VBQ0ksbUJBQUE7QUFUSjtBQVlBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUFUSjtBQVlBOztFQUVJLGtCQUFBO0FBVEo7QUFZQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBVEo7QUFZQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFUSjtBQVlBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBVEo7QUFZQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBVEo7QUFhQTtFQUNJLG1DQUFBO0FBVko7QUFhQTtFQUNJLFdBQUE7QUFWSjtBQWNBO0VBQ0k7SUFDSSxzQkFBQTtFQVhOO0FBQ0Y7QUFjQTtFQUNJO0lBQ0ksc0JBQUE7RUFaTjtFQWNFO0lBQ0ksc0JBQUE7RUFaTjtFQWNFO0lBQ0ksbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7RUFaTjtBQUNGO0FBY0E7RUFFSTtJQUNJLGlCQUFBO0lBQ0EsWUFBQTtFQWJOO0VBZUU7SUFDSSxZQUFBO0VBYk47RUFnQkU7SUFDSSxzQkFBQTtFQWROO0VBZ0JFO0lBQ0ksZUFBQTtFQWROO0VBaUJFO0lBQ0ksa0JBQUE7RUFmTjtBQUNGO0FBaUJBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VBZk47RUFpQkU7SUFDSSxZQUFBO0VBZk47RUFpQkU7SUFDSSxvQkFBQTtFQWZOO0VBaUJFO0lBQ0ksZUFBQTtFQWZOO0FBQ0Y7QUFrQkE7RUFDSTtJQUNJLG9CQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VBaEJOO0VBa0JFO0lBQ0ksWUFBQTtJQUNBLGtCQUFBO0VBaEJOO0VBa0JFO0lBQ0csYUFBQTtJQUNBLGVBQUE7RUFoQkw7QUFDRjtBQXNFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBcEVKO0FBdUVFO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBcEVKO0FBd0VBO0VBQ0k7SUFDSSxlQUFBO0VBckVOO0VBdUVFO0lBQ0ksZUFBQTtFQXJFTjtBQUNGO0FBd0VBO0VBQ0k7SUFDSSxRQUFBO0VBdEVOO0VBd0VFO0lBQ0ksZUFBQTtFQXRFTjtFQXdFRTtJQUNJLG1CQUFBO0lBQ0EsV0FBQTtFQXRFTjtFQXdFRTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7RUF0RU47RUF3RUU7SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUF0RU47RUF3RUU7SUFDSSxRQUFBO0VBdEVOO0FBQ0Y7QUF3RUE7RUFDSTtJQUNJLGVBQUE7RUF0RU47RUF3RUU7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7RUF0RU47QUFDRjtBQXdFQTtFQUNJO0lBQ0ksZUFBQTtFQXRFTjtFQXdFRTtJQUNJLGlCQUFBO0lBQ0EsZUFBQTtFQXRFTjtFQXdFRTtJQUNJLGdCQUFBO0VBdEVOO0VBd0VFO0lBQ0ksaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RUF0RU47RUF3RUM7SUFDQyxZQUFBO0lBQ0EsY0FBQTtFQXRFRjtFQXdFQztJQUNDLGVBQUE7RUF0RUY7RUF3RUU7SUFDSSxlQUFBO0VBdEVOO0VBd0VFO0lBQ0ksZUFBQTtFQXRFTjtFQXdFRTtJQUNJLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsT0FBQTtFQXRFTjtFQXdFRTtJQUNHLGNBQUE7RUF0RUw7RUF3RUU7SUFDSSxhQUFBO0VBdEVOO0VBd0VFO0lBQ0ksT0FBQTtJQUNBLFlBQUE7SUFFQSxXQUFBO0lBQ0EsYUFBQTtFQXZFTjtFQXlFQztJQUNDLGFBQUE7RUF2RUY7RUF5RUU7SUFDRyxhQUFBO0VBdkVMO0VBeUVFO0lBQ0ksZUFBQTtFQXZFTjtFQXlFRTtJQUNJLGVBQUE7SUFDQSxlQUFBO0VBdkVOO0FBQ0Y7QUFpRkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQS9FSjtBQWtGRTtFQUNFLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQS9FSjtBQWlGRTtFQUNFLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTlFSjtBQWdGRTtFQUNFLHVDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTdFSjtBQStFRTtFQUNFLDJDQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBNUVKO0FBOEVFO0VBQ0UsMkNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUEzRUo7QUE2RUU7RUFDRSwyQ0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQTFFSjtBQThFQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FBM0VKO0FBNkVBO0VBQ0ksYUFBQTtBQTFFSiIsImZpbGUiOiJkZXRhaWxwb3N0dWxhbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogbXlmb24xO1xyXG4gICAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udC9Qb3BwaW5zLUxpZ2h0LnR0ZlwiKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBteWZvbjM7XHJcbiAgICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250L1BvcHBpbnMtQmxhY2sudHRmXCIpO1xyXG59XHJcbiNiYWNre1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiBteWZvbjM7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogMzZweDtcclxufVxyXG5cclxuLmNlbnRlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHdpZHRoOiA0MjBweDtcclxufVxyXG4uaW5mb3tcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbmlvbi1saXN0e1xyXG4gICAgcGFkZGluZzogMCUgMjAlIDAlIDIwJTtcclxufVxyXG5cclxuLy8gaW9uLWxhYmVse1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuLy8gfVxyXG5cclxuLnRhaWxsZTF7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbi50YWlsbGUye1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcblxyXG4uYnV0dG9te1xyXG4gICAgcGFkZGluZzogMCUgMjAlIDAlIDIwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi5idXR0b24xe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4uYnV0MSwgLmJ1dDJ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNGVtO1xyXG4gICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGNjIwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2MjAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYnV0MTpob3ZlciwgLmJ1dDI6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcclxuICAgIGNvbG9yOiAjRkY2MjAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGNjIwMDtcclxufVxyXG5cclxuLmZpcnN0dGl0bGV7XHJcbiAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4ubWFpbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xyXG59XHJcbmlvbi10aXRsZXtcclxuICAgIGNvbG9yOiAjRkY3OTAwO1xyXG59XHJcblxyXG4vLyBpb24tY29udGVudCB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgaGVpZ2h0OiAxMDB2aDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vIH1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDNweCA2cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBjb2xvcjogI0ZGNzkwMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ubW9kYWwtd3JhcHBlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgNDBweCwgMHB4KTtcclxuICAgIG9wYWNpdHk6IDAuMDE7XHJcbiAgICBoZWlnaHQ6IDM4cmVtO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiByZWJlY2NhcHVycGxlIGdyZWVuO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gICAgd2lkdGg6IDQ1cmVtO1xyXG4gIH1cclxuLmNvbnRhaW5lciB7XHJcbiAgIFxyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogLTFweCAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAvLyBib3JkZXI6ICMwMDAgM3B4IHNvbGlkO1xyXG4gICAgLy8gbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IDMzcmVtO1xyXG59XHJcbmlvbi1tb2RhbHtcclxuICAgXHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAtLXdpZHRoOiA0OGVtO1xyXG4gICAgLS1oZWlnaHQ6IDM5ZW07XHJcbiAgfVxyXG5cclxuXHJcbi5ib3gge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDgwcHggMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAvLyBtYXJnaW46IDUlIGF1dG87XHJcbiAgICBoZWlnaHQ6IDMzcmVtO1xyXG59XHJcbi5tYWlse1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiNpbnB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAwcHggMTVweDtcclxufVxyXG4ubWFpbG1vZGVse1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFQ0VGO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE1cHggMTVweCAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAsIDNzIGVhc2U7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzLjI1JTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcclxufVxyXG5cclxuLmNvbnRhaW5lciBmb3JtIC5ham91dCB7XHJcbiAgICBjb2xvcjogI0ZGNzkwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDRyZW0gMCAxMnB4IDA7XHJcbn1cclxuXHJcbmZvcm0gLmFqb3V0IC5pbnB1dC1ib3gge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyIC0gMjBweCk7XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDMuMjUlO1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5ham91dCAuaW5wdXQtYm94IC5kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIFxyXG59XHJcblxyXG4jZGV0YWlscyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uYWpvdXQgLmlucHV0LWJveCBpbnB1dCB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLCAzcyBlYXNlO1xyXG59XHJcblxyXG4uYWpvdXQgLmlucHV0LWJveCBpbnB1dDpmb2N1cyxcclxuLmFqb3V0IC5pbnB1dC1ib3ggaW5wdXQ6dmFsaWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG5mb3JtIC5idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luOiA0NXB4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICAgIG1hcmdpbi1yaWdodDogMTByZW07XHJcbn1cclxuXHJcbi5idXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjc5MDA7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlcjogI0ZGNzkwMCAxcHggc29saWQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5idXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgIGNvbG9yOiAjRkY3OTAwO1xyXG59XHJcblxyXG5mb3JtIC5idXR0b24gLmlucHV0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBjb2xvcjogI0ZGRkY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgIFxyXG59XHJcblxyXG5mb3JtIC5idXR0b24gaW5wdXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZyk7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTA2cHgpIHtcclxuICAgIGlvbi1saXN0e1xyXG4gICAgICAgIHBhZGRpbmc6IDAlIDEwJSAwJSAxMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBpb24tbGlzdHtcclxuICAgICAgICBwYWRkaW5nOiAwJSAyMCUgMCUgMjAlO1xyXG4gICAgfVxyXG4gICAgaW9uLWxpc3R7XHJcbiAgICAgICAgcGFkZGluZzogMCUgMTAlIDAlIDEwJTtcclxuICAgIH1cclxuICAgIC5idXQxLCAuYnV0MntcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gICBcclxuICAgIC5idXQxLCAuYnV0MntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB9XHJcbiAgICBpb24tbGlzdHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIC5idXR0b217XHJcbiAgICAgICAgcGFkZGluZzogMCUgMTAlIDAlIDEwJTtcclxuICAgIH1cclxuICAgIC50YWlsbGUye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDsgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XHJcbiAgICAuYnV0MSwgLmJ1dDJ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIGlvbi1saXN0e1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC5idXR0b217XHJcbiAgICAgICAgcGFkZGluZzogMCUgNSUgMCUgNSU7XHJcbiAgICB9XHJcbiAgICAudGFpbGxlMntcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7IFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XHJcbiAgICAuYnV0dG9te1xyXG4gICAgICAgIHBhZGRpbmc6IDAlIDUlIDAlIDUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICAgIC5idXR0b20xe1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICB9XHJcbiAgICAuYnV0MSwgLmJ1dDJ7XHJcbiAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMxNnB4KSB7XHJcbi8vICAgICAuYnV0dG9te1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDAlIDUlIDAlIDUlO1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuLy8gICAgIH1cclxuLy8gICAgIC5idXR0b24xe1xyXG4vLyAgICAgICAgIGhlaWdodDogNTBweDtcclxuLy8gICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgIFxyXG4vLyAgICAgfVxyXG4vLyAgICAgLmJ1dHRvbjJ7XHJcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgXHJcbi8vICAgICB9XHJcbi8vICAgICAuYnV0MXtcclxuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbi8vICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4vLyAgICAgIH1cclxuLy8gICAgICAuYnV0MntcclxuLy8gICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbi8vICAgICAgICAgcGFkZGluZzogMTBweDtcclxuLy8gICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbi8vICAgICAgfVxyXG4vLyAgICAgLmluZm97XHJcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuLy8gICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuLy8gICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgICB9XHJcbi8vICAgICAudGFpbGxlMntcclxuLy8gICAgICAgICBmb250LXNpemU6IDEycHg7IFxyXG4vLyAgICAgfVxyXG4vLyAgICAgLnRhaWxsZTF7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgaW9uLWxhYmVse1xyXG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuLy8gICAgIH1cclxuLy8gICAgIGlvbi1saXN0e1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuLy8gICAgIH1cclxuIFxyXG4gICBcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBzdHlsZSBhcHBsaXF1ZXIgYXUgZGlmZmVyZW50IGJ1dHRvblxyXG5cclxuLmJ1dHRvbkNvbG9yIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjc5MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b25Db2xvcjpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY3OTAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY29sb3I6ICNmZjc5MDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMTBweCkge1xyXG4gICAgLm1haWxtb2RlbCBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU4NHB4KSB7XHJcbiAgICBoMXtcclxuICAgICAgICB0b3A6IDExJTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIGZvcm0gLmFqb3V0IC5pbnB1dC1ib3gge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIGZvcm0gLmFqb3V0IHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICB9XHJcbiAgICBoMSB7XHJcbiAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5ham91dDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzOTBweCkge1xyXG4gICAgLm1haWxtb2RlbCBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMTZweCkge1xyXG4gICAgLnNlbGVjdHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuZmlyc3R0aXRsZXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICBpb24tdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICAgIH1cclxuICAgIC5jb2wgaXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG4gICAuYnV0dG9te1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgIH1cclxuICAgLmJ1dHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgfVxyXG4gICAgLmRldGFpbHN7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLm1haWxtb2RlbCBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICAgIGgxe1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbiAgICAgICAgdG9wOiA2JTtcclxuICAgIH1cclxuICAgIC5ham91dHtcclxuICAgICAgIGhlaWdodDogMTAwMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIH1cclxuICAgIC5ib3h7XHJcbiAgICAgICAgdG9wOiA5JTtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAjMDAwIDFweCBzb2xpZDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQyMHB4O1xyXG4gICAgfVxyXG4gICAuYnRuLWNsb3Nle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgfVxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICB9XHJcbiAgICAuYWpvdXQgLmlucHV0LWJveCBpbnB1dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgI2JhY2t7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBsZXMgc3R5bGUgYXBwbGlxdWVyIGF1IG1vZGFsIFxyXG4udGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBteWZvbjI7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIFxyXG4gIH1cclxuICAuY29sb3JidXR0b24xe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDFBRkYsICRhbHBoYTogLjg1KTtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIC5jb2xvcmJ1dHRvbjJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgkY29sb3I6ICMwMDlFMkMsICRhbHBoYTogLjg1KTtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIC5jb2xvcmJ1dHRvbjN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgkY29sb3I6ICNGRjAwMDAsICRhbHBoYTogLjg1KTtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIC5jb2xvcmJ1dHRvbjE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZmYsICRhbHBoYTogLjg1KTtcclxuICAgIGNvbG9yOiAjMDAxQUZGO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMUFGRjtcclxuICB9XHJcbiAgLmNvbG9yYnV0dG9uMjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKCRjb2xvcjogI2ZmZmYsICRhbHBoYTogLjg1KTtcclxuICAgIGNvbG9yOiAjMDA5RTJDO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwOUUyQztcclxuICB9XHJcbiAgLmNvbG9yYnV0dG9uMzpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICByZ2JhKCRjb2xvcjogI2ZmZmYsICRhbHBoYTogLjg1KTtcclxuICAgIGNvbG9yOiAjRkYwMDAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGMDAwMDtcclxuICB9XHJcbiBcclxuXHJcbi5jYXJke1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGhlaWdodDogOTAwcHg7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAyMDAwcHg7XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 9956:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\"\r\n    integrity=\"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==\"\r\n    crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n<!-- <div class=\"iconCloche\" (click)=\"OpenNotification($event)\">\r\n  <i class=\"fa-regular fa-bell\"></i><span>2</span>\r\n</div> -->\r\n<div class=\"col reporting\">\r\n  <button type=\"button\" class=\"btn buttonColor\"  class=\"iconCloche\" (click)=\"OpenNotification($event)\"><i class=\"fa-regular fa-bell\"></i><span id=\"notift\">{{this.notifTotal}}</span></button>\r\n</div>";

/***/ }),

/***/ 1477:
/*!**********************************************************************!*\
  !*** ./src/app/detailpostulant/detailpostulant.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Detail personnels</ion-title>\r\n    <ion-button slot=\"end\" fill=\"clear\">\r\n      <app-cloche></app-cloche>\r\n\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <a (click)=\"back()\" id=\"back\"> <p><i class=\"fa fa-hand-o-left\" style=\"font-size:20px\"></i> Retour</p></a> \r\n  <img *ngIf=\"image!=null\" src={{image}} class=\"center\" alt=\"Image du personnel\">\r\n  <img *ngIf=\"image==null\" src=\"assets/images/profile.png\" class=\"center\" alt=\"Image du personnel\">\r\n\r\n  <!-- <img\r\n    src=\"https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\"\r\n    class=\"center\"> -->\r\n  <!-- <h3 class=\"ion-text-center\">{{detailpostulant.name.title}} {{detailpostulant.name.first}}</h3> -->\r\n\r\n  <ion-item lines=\"none\" color=\"background-color: #FF6200;\" style=\"background-color: #FF6200;\">\r\n    <ion-label class=\"info\" style=\"color: white;\">Plus d'information sur la personne</ion-label>\r\n  </ion-item>\r\n\r\n\r\n  <ion-list>\r\n    <ion-item lines=\"none\">\r\n      <ion-label slot=\"start\" style=\"color: black;\" class=\"taille1\">Nom:</ion-label>\r\n      <ion-label style=\"color: black;\" class=\"taille2\">{{ nom }}</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-label slot=\"start\" style=\"color: black;\" class=\"taille1\">Prenom:</ion-label>\r\n      <ion-label slot=\"\" style=\"color: black;\" class=\"taille2\">{{ prenom }}</ion-label>\r\n    </ion-item>\r\n    <!-- <ion-item lines=\"none\">\r\n      <ion-label slot=\"start\" style=\"color: black;\" class=\"taille1\">Date de naissance:</ion-label>\r\n      <ion-label slot=\"\" style=\"color: black;\" class=\"taille2\">12/12/1999</ion-label>\r\n\r\n [(ngModel)]=\"name\"\r\n\r\n    </ion-item> -->\r\n    <!-- <ion-item lines=\"none\">\r\n      <ion-label slot=\"start\" style=\"color: black;\" class=\"taille1\">Lieu de naissance:</ion-label>\r\n      <ion-label slot=\"\" style=\"color: black;\" class=\"taille2\">{{ lieunaissance }}</ion-label>\r\n    </ion-item> -->\r\n    <ion-item lines=\"none\">\r\n      <ion-label slot=\"start\" style=\"color: black;\" class=\"taille1\">Genre:</ion-label>\r\n      <ion-label slot=\"\" style=\"color: black;\" class=\"taille2\" >{{ genre }}</ion-label>\r\n    </ion-item>\r\n    <!-- <ion-item lines=\"none\">\r\n      <ion-label slot=\"start\" style=\"color: black;\" class=\"taille1\">Contact:</ion-label>\r\n      <ion-label slot=\"\" style=\"color: black;\" class=\"taille2\">{{ contact }}</ion-label>\r\n    </ion-item> -->\r\n    <ion-item lines=\"none\">\r\n      <ion-label slot=\"start\" style=\"color: black;\" class=\"taille1\">Email:</ion-label>\r\n      <ion-label slot=\"\" style=\"color: black;\" class=\"taille2\">{{ email }}</ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-label slot=\"start\" style=\"color: black;\" class=\"taille1\">Entite:</ion-label>\r\n      <ion-label slot=\"\" style=\"color: black;\" class=\"taille2\">{{nomEntite}}</ion-label>\r\n      <!-- <ion-label slot=\"\" style=\"color: black;\" class=\"taille2\" *ngIf=\"nomEntite!=null\">{{nomEntite}}</ion-label>\r\n      <ion-label slot=\"\" style=\"color: black;\" class=\"taille2\" *ngIf=\"nomEntite==null\">Entite non specifié</ion-label> -->\r\n    </ion-item>\r\n    <ion-item lines=\"none\">\r\n      <ion-label slot=\"start\" style=\"color: black;\" class=\"taille1\">Role:</ion-label>\r\n      <ion-label slot=\"\" style=\"color: black;\" class=\"taille2\">{{statusUser}}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <!-- <div class=\"buttom\">\r\n    <div class=\"button1\">\r\n\r\n    \r\n       \r\n        <button class=\"btn buttonColor\"  class=\"but1\"  type=\"button\"  >+ &nbsp; Modifier</button> \r\n        <input class=\"but1\" type=\"submit\" value=\"Supprimer\" >\r\n\r\n      <input class=\"but1\" type=\"reset\" value=\"MODIFIER\" (click)=\"ModifierPersonnel()\" data-bs-toggle=\"modal\"\r\n        data-bs-target=\"#staticBackdrop\">\r\n      \r\n    </div>\r\n    <div class=\"button2\">\r\n      <input class=\"but2\" type=\"submit\" value=\"DESACTIVER\" (click)=\"DesactiverPersonnel()\">\r\n      <input class=\"but2\" type=\"submit\" value=\"Desactiver\" \">\r\n    </div>\r\n  </div>  -->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-9 col-12\">\r\n      <div class=\"d-grid m-2 gap-2 d-md-flex justify-content-md-center\">\r\n        <button class=\"btn buttonColor\" id=\"open-modal\" type=\"button\">+ &nbsp; Modifier</button>\r\n        <button class=\"btn buttonColor\" (click)=\"MessageDeleteUserEffectuer()\" type=\"button\">+ &nbsp; Supprimer</button>\r\n        <button class=\"btn buttonColor\" (click)=\"DesactiverUser()\" type=\"button\">+ &nbsp; Desactiver</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div>\r\n    <p>{{ message }}</p>\r\n  </div> -->\r\n \r\n\r\n  <!-- (click)=\"ModifierPersonnel()\" -->\r\n  \r\n  <ion-modal trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\">\r\n    <ng-template>\r\n      <!-- <ion-header class=\"ion-padding\">\r\n        <ion-toolbar>\r\n        \r\n          <ion-title>Modification du personnel</ion-title>\r\n          \r\n        </ion-toolbar>\r\n      </ion-header> -->\r\n      \r\n<div class=\"container\">\r\n  <form action=\"#\">\r\n    <div class=\"box\">\r\n      <button type=\"button\" class=\"btn-close\"  (click)=\"cancel()\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\r\n      <h1>Modifier personnel</h1>\r\n          <div class=\"ajout\">\r\n              <div class=\"input-box\">\r\n                  <span class=\"details\">Nom *</span>\r\n                  <input type=\"text\" name=\"nom\" [(ngModel)]=\"nom\" [value]=\"nom\" placeholder=\"Nom du personnel\" required>\r\n              </div>\r\n              <div class=\"input-box\">\r\n                <span class=\"details\">Email *</span>\r\n                <div class=\"mail\"   *ngFor=\"let d of formatMailperonnel\">\r\n                  <input type=\"email\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"loremipsun\" id=\"inp\" [value]=\"email\" required>\r\n                  <div style=\"width: 270px;\">\r\n                  <select name=\"domaine\" [(ngModel)]=\"domaine\" class=\"mailmodel\" required>\r\n                    <!-- <option >--Choisisez un domaine--</option> -->\r\n                    <option *ngFor=\"let d of formatMailperonnel\" >{{d.libelle}}</option>\r\n                    <!-- formatMail\r\n                    <option value=\"\">@orangefablab.com</option>\r\n                    <option value=\"\">@orangemali.com</option>\r\n                    <option value=\"\">@orangedigitalcenter.com</option> -->\r\n                  </select>\r\n                </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"input-box\">\r\n                <span class=\"details\">Prénom *</span>\r\n                <input type=\"text\" name=\"prenom\" [(ngModel)]=\"prenom\" [value]=\"prenom\" placeholder=\"Prénom du personnel\" required>\r\n              </div>\r\n              \r\n              <!-- <div class=\"input-box\">\r\n                <span class=\"details\">Telephone *</span>\r\n                <input type=\"text\" placeholder=\"Numéro de telephone\" required>\r\n              </div>\r\n              <div class=\"input-box\">\r\n                <span class=\"details\">Lieu de naissance *</span>\r\n                <select name=\"tchoixsalle\" class=\"select\" required>\r\n                  <option value=\"\">Bamako</option>\r\n                  <option value=\"\">Sikasso</option>\r\n                  <option value=\"\">Segou</option>\r\n                  <option value=\"\">Mopti</option>\r\n                  <option value=\"\">Kayes</option>\r\n                  <option value=\"\">Koulikoro</option>\r\n                  <option value=\"\">Gao</option>\r\n                  <option value=\"\">Kidal</option>\r\n                </select>\r\n             </div> -->\r\n              <div class=\"input-box\">\r\n                  <span class=\"details\">Entité *</span>\r\n                  <select name=\"entite\" [(ngModel)]=\"entite\" class=\"select\"  required>\r\n                    <!-- <option>--Choisisez une entité--</option> -->\r\n                    <option *ngFor=\"let entite of Entites\" >{{entite.libelleentite}}</option>\r\n                  </select>\r\n              </div>\r\n              <div class=\"input-box\">\r\n                <span class=\"details\">Votre genre </span>\r\n                <select name=\"idGenre\" [(ngModel)]=\"genre\" class=\"select\" required>\r\n                  <!-- <option>--Votre genre--</option> -->\r\n                  <option >Masculin</option>\r\n                    <option >Feminin</option>\r\n                </select>\r\n                <!-- <select name=\"tchoixsalle\" class=\"select\" required>\r\n                    <option >--Votre genre--</option>\r\n                    <option *ngFor=\"let g of genre\" >{{g.genre}}</option>\r\n                </select> -->\r\n            </div>\r\n\r\n            <!-- <div class=\"input-box\">\r\n              <span class=\"details\">Lieu de nanissance *</span>\r\n              <select name=\"lieunaissance\" class=\"form-control\" [(ngModel)]=\"lieunaissance\" class=\"select\" required>\r\n                <option selected>Bamako</option>\r\n                <option >Kayes</option>\r\n                <option >Koulikoro</option>\r\n                <option >Sikasso</option>\r\n                <option >Segou</option>\r\n                <option >Mopti</option>\r\n                <option >Tombouctou</option>\r\n                <option >Gao</option>\r\n                <option >Kidal</option>\r\n                  <option >Tadoudeni</option>\r\n                <option >Menaca</option>\r\n                \r\n              </select>\r\n          </div> -->\r\n    \r\n          <!-- <div class=\"input-box\">\r\n            <span class=\"details\" for=\"phone\">Numéro de telephone *</span>\r\n            <input type=\"tel\"  id=\"phone\" name=\"contact\"  [(ngModel)]=\"contact\" [value]=\"contact\" placeholder=\"70000000\" pattern=\"[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}\" required>\r\n    \r\n          </div> -->\r\n\r\n            <div class=\"input-box\">\r\n              <span class=\"details\">Rôle *</span>\r\n              <select name=\"role\" [(ngModel)]=\"role\" class=\"select\" required >\r\n                <!-- <option selected>{{statusUser}}</option> -->\r\n                <option *ngFor=\"let role of Roles\" >{{role.libellerole}}</option>\r\n              </select>\r\n          </div>\r\n          <div class=\"input-box\">\r\n            <span class=\"details\">Ajouter image *</span>\r\n            <input type=\"file\" class=\"form-control\" placeholder=\"Logo.jpg\" id=\"logo\"\r\n              accept=\"image/png, image/jpeg, image/jpg\" (change)=\"envoyerImage1($event)\">\r\n          </div>\r\n\r\n          </div>\r\n    </div>\r\n    <br><br>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-9 col-12\">\r\n        <div class=\"d-grid m-2 gap-2 d-md-flex justify-content-md-center\">\r\n          <button class=\"btn buttonColor\" (click)=\"UpdateUser()\" type=\"button\">Modifier</button>\r\n          <button class=\"btn buttonColor\" (click)=\"cancel()\" type=\"button\">Annuler</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"button\">\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button (click)=\"UpdateUser()\" class=\"but\">Modifier</ion-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"cancel()\" class=\"but\">Annuler</ion-button>\r\n    \r\n    </div> -->\r\n\r\n    \r\n  </form>\r\n</div> \r\n        <!-- <ion-item>\r\n          <ion-label position=\"stacked\">Enter your name</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Your name\"></ion-input>\r\n        </ion-item> -->\r\n    </ng-template>\r\n  </ion-modal>\r\n\r\n\r\n\r\n\r\n<!-- \r\n<ion-content class=\"ion-padding\">\r\n  <ion-button id=\"open-modal\" expand=\"block\">Open</ion-button>\r\n  <p>{{ message }}</p>\r\n  <ion-modal trigger=\"open-modal\" (willDismiss)=\"onWillDismiss($event)\">\r\n    <ng-template>\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-buttons slot=\"start\">\r\n            <ion-button (click)=\"cancel()\">Cancel</ion-button>\r\n          </ion-buttons>\r\n          <ion-title>Welcome</ion-title>\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"confirm()\" [strong]=\"true\">Confirm</ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content class=\"ion-padding\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Enter your name</ion-label>\r\n          <ion-input type=\"text\" placeholder=\"Your name\" [(ngModel)]=\"name\"></ion-input>\r\n        </ion-item>\r\n      </ion-content>\r\n    </ng-template>\r\n  </ion-modal>\r\n</ion-content>   -->\r\n\r\n\r\n\r\n\r\n  <!-- <ion-modal #modal trigger=\"open-modal\">\r\n    <ng-template>\r\n      <div class=\"container\">\r\n        <h5 class=\"card-title text-center\"> Création de role et attribution des droits </h5>\r\n        <div class=\"card\">\r\n          <div class=\"card-body text-start\">\r\n            <div class=\"box\">\r\n              <div class=\"ajout\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <div class=\"input-box\">\r\n                      <span class=\"details\">Nom *</span>\r\n                      <input type=\"text\" placeholder=\"Nom du personnel\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <div class=\"input-box\">\r\n                      <span class=\"details\">Email *</span>\r\n                      <div class=\"mail\">\r\n                        <input type=\"text\" placeholder=\"loremipsun\" id=\"inp\"> -->\r\n                        <!-- <span class=\"input-group-text\" aria-label=\"fin de mail\">@orangemali.com</span> -->\r\n                        <!-- <div style=\"width: 270px;\">\r\n                          <select name=\"tchoixsalle\" class=\"mailmodel\">\r\n                            <option value=\"\">@orangefablab.com</option>\r\n                            <option value=\"\">@orangemali.com</option>\r\n                            <option value=\"\">@orangedigitalcenter.com</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <div class=\"input-box\">\r\n                      <span class=\"details\">Prénom *</span>\r\n                      <input type=\"text\" placeholder=\"Prénom du personnel\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <div class=\"input-box\">\r\n                      <span class=\"details\">Date de naissance *</span>\r\n                      <input type=\"date\" placeholder=\"La date de naissance\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <div class=\"input-box\">\r\n                      <span class=\"details\">Contact *</span>\r\n                      <input type=\"text\" placeholder=\"Numéro du personnel\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <div class=\"input-box\">\r\n                      <span class=\"details\">Lieu de naissance *</span>\r\n                      <select name=\"tchoixsalle\" class=\"select\">\r\n                        <option value=\"\">Bamako</option>\r\n                        <option value=\"\">Sikasso</option>\r\n                        <option value=\"\">Segou</option>\r\n                        <option value=\"\">Mopti</option>\r\n                        <option value=\"\">Kayes</option>\r\n                        <option value=\"\">Koulikoro</option>\r\n                        <option value=\"\">Gao</option>\r\n                        <option value=\"\">Kidal</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <div class=\"input-box\">\r\n                      <span class=\"details\">Entité *</span>\r\n                      <select name=\"tchoixsalle\" class=\"select\">\r\n                        <option value=\"\">Orange Digital Kalanso</option>\r\n                        <option value=\"\">Orange FabLab</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <div class=\"input-box\">\r\n                      <span class=\"details\">Genre *</span>\r\n                      <select name=\"tchoixsalle\" class=\"select\">\r\n                        <option value=\"\">Homme</option>\r\n                        <option value=\"\">Femme</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-6\">\r\n                    <div class=\"input-box\">\r\n                      <span class=\"details\">Rôle *</span>\r\n                      <select name=\"tchoixsalle\" class=\"select\">\r\n                        <option value=\"\">Administrateur</option>\r\n                        <option value=\"\">Responsable</option>\r\n                        <option value=\"\">Utilisateur</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </ion-modal> -->\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_detailpostulant_detailpostulant_module_ts.js.map