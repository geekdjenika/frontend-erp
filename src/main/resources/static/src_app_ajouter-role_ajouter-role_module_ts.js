"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ajouter-role_ajouter-role_module_ts"],{

/***/ 2384:
/*!*************************************************************!*\
  !*** ./src/app/ajouter-role/ajouter-role-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjouterRolePageRoutingModule": () => (/* binding */ AjouterRolePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ajouter_role_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajouter-role.page */ 816);




const routes = [
    {
        path: '',
        component: _ajouter_role_page__WEBPACK_IMPORTED_MODULE_0__.AjouterRolePage
    }
];
let AjouterRolePageRoutingModule = class AjouterRolePageRoutingModule {
};
AjouterRolePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AjouterRolePageRoutingModule);



/***/ }),

/***/ 6586:
/*!*****************************************************!*\
  !*** ./src/app/ajouter-role/ajouter-role.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjouterRolePageModule": () => (/* binding */ AjouterRolePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ajouter_role_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajouter-role-routing.module */ 2384);
/* harmony import */ var _ajouter_role_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajouter-role.page */ 816);
/* harmony import */ var _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cloche/cloche.component */ 7907);








let AjouterRolePageModule = class AjouterRolePageModule {
};
AjouterRolePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ajouter_role_routing_module__WEBPACK_IMPORTED_MODULE_0__.AjouterRolePageRoutingModule
        ],
        declarations: [_ajouter_role_page__WEBPACK_IMPORTED_MODULE_1__.AjouterRolePage, _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__.ClocheComponent]
    })
], AjouterRolePageModule);



/***/ }),

/***/ 816:
/*!***************************************************!*\
  !*** ./src/app/ajouter-role/ajouter-role.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AjouterRolePage": () => (/* binding */ AjouterRolePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ajouter_role_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajouter-role.page.html?ngResource */ 6211);
/* harmony import */ var _ajouter_role_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajouter-role.page.scss?ngResource */ 1172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_role_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/role/role.service */ 4001);





let AjouterRolePage = class AjouterRolePage {
    constructor(serviceRole) {
        this.serviceRole = serviceRole;
        this.creation = 'Create';
        this.read = 'Read';
        this.update = 'Update';
        this.supprimer = 'Delete';
        // createEntite: any;
        // updateEntite: any;
        // readEntite: any;
        // deleteEntite: any;
        // createActivite: any;
        // updateActivite: any;
        // readActivite: any;
        // deleteActivite: any;
        // createSalle: any;
        // updateSalle: any;
        // readSalle: any;
        // deleteSalle: any;
        // createAouP: any;
        // updateAouP: any;
        // readAouP: any;
        // deleteAouP: any;
        // createDesignation: any;
        // updateDesignation: any;
        // readDesignation: any;
        // deleteDesignation: any;
        // createEtat: any;
        // updateEtat: any;
        // readEtat: any;
        // deleteEtat: any;
        // createFormatEmail: any;
        // updateFormatEmail: any;
        // readFormatEmail: any;
        // deleteFormatEmail: any;
        // createIntervenant: any;
        // updateIntervenant: any;
        // readIntervenant: any;
        // deleteIntervenant: any;
        // createListPostulant: any;
        // updateListPostulant: any;
        // readListPostulant: any;
        // deleteListPostulant: any;
        // createPostulant: any;
        // updatePostulant: any;
        // readPostulant: any;
        // deletePostulant: any;
        // createPresence: any;
        // updatePresence: any;
        // readPresence: any;
        // deletePresence: any;
        // createRole: any;
        // updateRole: any;
        // readRole: any;
        // deleteRole: any;
        // createTache: any;
        // updateTache: any;
        // readTache: any;
        // deleteTache: any;
        // createTirage: any;
        // updateTirage: any;
        // readTirage: any;
        // deleteTirage: any;
        // createUtilisateur: any;
        // updateUtilisateur: any;
        // readUtilisateur: any;
        // deleteUtilisateur: any;
        // createTypeActivite: any;
        // updateTypeActivite: any;
        // readTypeActivite: any;
        // deleteTypeActivite: any;
        // LibelleEntite: any;
        // LibelleEntiteLecture: any;
        this.LibelleRoleLecture = new Array();
        this.LibelleRoleCreation = new Array();
        this.LibelleRoleUpdate = new Array();
        this.LibelleRoleSuppression = new Array();
    }
    ngOnInit() {
        this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
        console.log(this.Utilisateur);
        this.serviceRole.getAllDroit(this.Utilisateur.login, this.Utilisateur.password).subscribe(donne => {
            this.TousLesDroits = donne.data;
            console.log(this.TousLesDroits);
            for (let i = 0; i < this.TousLesDroits.length; i++) {
                console.log(this.TousLesDroits[0]);
                if (this.TousLesDroits[i].libelle.split(' ')[0] == this.read) {
                    this.LibelleRoleLecture.push(this.TousLesDroits[i]);
                    console.log(this.LibelleRoleLecture);
                }
                else if (this.TousLesDroits[i].libelle.split(' ')[0] == this.creation) {
                    this.LibelleRoleCreation.push(this.TousLesDroits[i]);
                }
                else if (this.TousLesDroits[i].libelle.split(' ')[0] == this.update) {
                    this.LibelleRoleUpdate.push(this.TousLesDroits[i]);
                }
                else {
                    this.LibelleRoleSuppression.push(this.TousLesDroits[i]);
                    // console.log(this.LibelleRoleSuppression)
                }
            }
        });
        // console.log(this.TousLesDroits)
        // console.log(this.TousLesDroits)
        //     
        //     }
        // for(let i = 0; i< this.TousLesDroits.length; i++){
        //   const create = 'Create'
        //   const read = 'Read'
        //   const update = 'Update'
        //   const delete1 = 'Delete'
        //   if(this.TousLesDroits[i].libelle.split(' ')[0] == create){
        //     this.DroitCommencantParCreer = this.TousLesDroits[i]
        //   }else if(this.TousLesDroits[i].libelle.split(' ')[0] == update){
        //     this.DroitCommencantParUpdate =  this.TousLesDroits[i]
        //   }else if(this.TousLesDroits[i].libelle.split(' ')[0] == read){
        //     this.DroitCommencantParRead = this.TousLesDroits[i]
        //   }else if(this.TousLesDroits[i].libelle.split(' ')[0] == delete1){
        //     this.DroitCommencantParDelete = this.TousLesDroits[i]
        //   }
        // }
    }
    compareWith(o1, o2) {
        if (!o1 || !o2) {
            return o1 === o2;
        }
        if (Array.isArray(o2)) {
            return o2.some((o) => o.id === o1.id);
        }
        return o1.id === o2.id;
    }
    handleChange(ev) {
        this.currentRoleCreate = ev.target.value;
    }
    postRole() {
        this.serviceRole.postRole(this.Utilisateur.login, this.Utilisateur.password, this.libelleRole, this.currentRoleCreate).subscribe(data => {
            console.log(data);
        });
    }
};
AjouterRolePage.ctorParameters = () => [
    { type: _services_role_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService }
];
AjouterRolePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ajouter-role',
        template: _ajouter_role_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ajouter_role_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AjouterRolePage);



/***/ }),

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

/***/ 1172:
/*!****************************************************************!*\
  !*** ./src/app/ajouter-role/ajouter-role.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJham91dGVyLXJvbGUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7993:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "#notift {\n  font-size: 11px;\n  border-radius: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 12px;\n  right: 0px;\n  height: 11px;\n  width: 11px;\n  background-color: #fff;\n}\n\n.iconCloche {\n  border-radius: 15px;\n  border: #ff7900 2px solid;\n}\n\n.iconCloche:hover {\n  border-radius: 15px;\n  background-color: #ff7900;\n  color: #fff;\n  font-size: 25px !important;\n}\n\n.iconCloche:hover #notift {\n  background-color: #ffffff;\n  color: #ff7900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb2NoZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUdKIiwiZmlsZSI6ImNsb2NoZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZnR7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgd2lkdGg6IDExcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uaWNvbkNsb2NoZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6ICNmZjc5MDAgMnB4IHNvbGlkO1xyXG59XHJcblxyXG4uaWNvbkNsb2NoZTpob3ZlcntcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgI25vdGlmdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI2ZmNzkwMDtcclxuICB9XHJcbn1cclxuLy8gLmJ0bntcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC5idG46aG92ZXJ7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbi8vICAgY29sb3I6ICNGRjc5MDAgIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgLmJ0biA+IGk6aG92ZXJ7XHJcbi8vICAgICBjb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuICAiXX0= */";

/***/ }),

/***/ 6211:
/*!****************************************************************!*\
  !*** ./src/app/ajouter-role/ajouter-role.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Ajouter rôle</ion-title>\r\n    <ion-button slot=\"end\" fill=\"clear\">\r\n      <app-cloche></app-cloche>\r\n\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<!-- code html permettant d'ajouer une nouvelle role -->\r\n<ion-content>\r\n  <div class=\"container\">\r\n    <h5 class=\"card-title text-center\"> Création de role et attribution des droits </h5>\r\n    <div class=\"card\">\r\n      <div class=\"card-body text-start\">\r\n        <form>\r\n\r\n          <div class=\"row mb-3\">\r\n            <div class=\"col-12 col-lg-6 mx-auto\">\r\n              <div for=\"exampleFormControlInput1\" class=\"\">Libelle role *</div>\r\n              <input type=\"email\" class=\"form-control\" [(ngModel)]=\"libelleRole\" name=\"libelleRole\"\r\n                id=\"exampleFormControlInput1\" placeholder=\"Orange digital kalanso\" autocomplete=\"off\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-select [compareWith]=\"compareWith\" placeholder=\"Droit de Lecture\"\r\n                    (ionChange)=\"handleChange($event)\" [multiple]=\"true\">\r\n                    <ion-select-option *ngFor=\"let food of LibelleRoleLecture\" [value]=\"food\">\r\n                      {{ food.libelle }}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n                <!-- <ion-item lines=\"none\">\r\n                  <ion-label>Current value: {{ currentRoleCreate | json }}</ion-label>\r\n                </ion-item> -->\r\n              </ion-list>\r\n            </div>\r\n            <div class=\"col\">\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-select [compareWith]=\"compareWith\" placeholder=\"Droit de creation\"\r\n                    (ionChange)=\"handleChange($event)\" [multiple]=\"true\">\r\n                    <ion-select-option *ngFor=\"let creat of LibelleRoleCreation\" [value]=\"creat\">\r\n                      {{ creat.libelle }}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n                <!-- <ion-item lines=\"none\">\r\n                  <ion-label>Current value: {{ currentRoleCreate | json }}</ion-label>\r\n                </ion-item> -->\r\n              </ion-list>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-select [compareWith]=\"compareWith\" placeholder=\"Droits de mise à jours\"\r\n                    (ionChange)=\"handleChange($event)\" [multiple]=\"true\">\r\n                    <ion-select-option *ngFor=\"let upd of LibelleRoleUpdate\" [value]=\"upd\">\r\n                      {{ upd.libelle }}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n                <!-- <ion-item lines=\"none\">\r\n                  <ion-label>Current value: {{ currentRoleCreate | json }}</ion-label>\r\n                </ion-item> -->\r\n              </ion-list>\r\n            </div>\r\n            <div class=\"col\">\r\n              <ion-list>\r\n                <ion-item>\r\n                  <ion-select [compareWith]=\"compareWith\" placeholder=\"Droits Suppression\"\r\n                    (ionChange)=\"handleChange($event)\" [multiple]=\"true\">\r\n                    <ion-select-option *ngFor=\"let sup of LibelleRoleSuppression\" [value]=\"sup\">\r\n                      {{ sup.libelle }}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n                <!-- <ion-item lines=\"none\">\r\n                  <ion-label>Current value: {{ currentRoleCreate | json }}</ion-label>\r\n                </ion-item> -->\r\n              </ion-list>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"d-grid gap-2 col-6 text-center mx-auto mt-2\">\r\n            <button type=\"button\" class=\"btn colorbutton2 btn-sm\" (click)=\"postRole()\">Enregistrer</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <!--SECONDS METHODE PERMETTANT DE RECUPERER TOUTES LES DROITS-->\r\n  <!--  -->\r\n</ion-content>";

/***/ }),

/***/ 9956:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\"\r\n    integrity=\"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==\"\r\n    crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n<!-- <div class=\"iconCloche\" (click)=\"OpenNotification($event)\">\r\n  <i class=\"fa-regular fa-bell\"></i><span>2</span>\r\n</div> -->\r\n<div class=\"col reporting\">\r\n  <button type=\"button\" class=\"btn buttonColor\"  class=\"iconCloche\" (click)=\"OpenNotification($event)\"><i class=\"fa-regular fa-bell\"></i><span id=\"notift\">{{this.notifTotal}}</span></button>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_ajouter-role_ajouter-role_module_ts.js.map