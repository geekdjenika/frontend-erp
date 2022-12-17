"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_role_role_module_ts"],{

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

/***/ 1392:
/*!*********************************************!*\
  !*** ./src/app/role/role-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolePageRoutingModule": () => (/* binding */ RolePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _role_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role.page */ 2009);




const routes = [
    {
        path: '',
        component: _role_page__WEBPACK_IMPORTED_MODULE_0__.RolePage
    }
];
let RolePageRoutingModule = class RolePageRoutingModule {
};
RolePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RolePageRoutingModule);



/***/ }),

/***/ 7321:
/*!*************************************!*\
  !*** ./src/app/role/role.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolePageModule": () => (/* binding */ RolePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _role_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role-routing.module */ 1392);
/* harmony import */ var _role_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role.page */ 2009);
/* harmony import */ var _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cloche/cloche.component */ 7907);








let RolePageModule = class RolePageModule {
};
RolePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _role_routing_module__WEBPACK_IMPORTED_MODULE_0__.RolePageRoutingModule
        ],
        declarations: [_role_page__WEBPACK_IMPORTED_MODULE_1__.RolePage, _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__.ClocheComponent]
    })
], RolePageModule);



/***/ }),

/***/ 2009:
/*!***********************************!*\
  !*** ./src/app/role/role.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolePage": () => (/* binding */ RolePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _role_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role.page.html?ngResource */ 5281);
/* harmony import */ var _role_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role.page.scss?ngResource */ 3753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_role_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/role/role.service */ 4001);






let RolePage = class RolePage {
    constructor(seriveRole) {
        this.seriveRole = seriveRole;
        this.creation = 'Create';
        this.read = 'Read';
        this.update = 'Update';
        this.supprimer = 'Delete';
        //Variables utiliser lors de creation d'un role
        this.LibelleRoleLecture = new Array();
        this.LibelleRoleCreation = new Array();
        this.LibelleRoleUpdate = new Array();
        this.LibelleRoleSuppression = new Array();
        this.currentRoleCreate = [];
        this.currentRoleCreate2 = [];
        this.isModalOpen = false;
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    ngOnInit() {
        this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
        this.getAllRole();
        this.seriveRole.getAllDroit(this.Utilisateur.login, this.Utilisateur.password).subscribe(donne => {
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
    }
    getAllRole() {
        this.seriveRole.getAllRole(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            this.TousLesRole = data.data;
            console.log(this.TousLesRole);
        });
    }
    supprimerRole(idrole) {
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
                // this.salleService.deleteSalle(this.Utilisateur.login,this.Utilisateur.password,idSalle).subscribe(data=>{
                //   if(data.message=="ok"){
                //     this.callSalle()
                //   }
                // });
                this.seriveRole.deleteRole(this.Utilisateur.login, this.Utilisateur.password, idrole).subscribe(data => {
                    console.log(data);
                    if (data.message == "ok") {
                        this.getAllRole();
                    }
                });
            }
            else if (result.isDenied) {
                //Swal.fire('Changes are not saved', '', 'info');
                //  this.route.navigate(['tirage'])
            }
        });
    }
    //Le pop montrant la suppression du role
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
        //this.currentRoleCreate = ev.target.value;
        this.currentRoleCreate = this.currentRoleCreate.concat(ev.target.value);
        console.log(this.currentRoleCreate);
        for (let index = 0; index < this.currentRoleCreate.length; index++) {
            if (this.currentRoleCreate[index] != this.currentRoleCreate[0]) {
                this.currentRoleCreate3 = this.currentRoleCreate;
            }
        }
        console.log(this.currentRoleCreate3);
        // if(this.currentRoleCreate != null){
        //   // this.Valeur = JSON.stringify(JSON.parse(this.currentRoleCreate).concat(JSON.parse(ev.target.value)));
        //   this.Valeur = Object.assign(this.currentRoleCreate, ev.target.value)
        // }else{
        //   this.currentRoleCreate = ev.target.value;
        // }
        // console.log(this.Valeur)
    }
    handleChange11(ev) {
        this.currentRoleCreate1 = ev.target.value;
    }
    postRole() {
        if (this.libelleRole == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: 'Veuillez indiquer le nom du rôle',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#FF7900',
                heightAuto: false,
            });
        }
        else if (this.LibelleRoleCreation == null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: 'Veuillez Choisir au moins un droit',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#FF7900',
                heightAuto: false,
            });
        }
        else {
            this.seriveRole.postRole(this.Utilisateur.login, this.Utilisateur.password, this.libelleRole, this.currentRoleCreate).subscribe(data => {
                console.log(data);
                if (data.message = 'ok')
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                        position: 'center',
                        title: 'Rôle crée avec succes',
                        imageUrl: '../../assets/img/Yes_check.svg.png',
                        imageWidth: '100px',
                        imageHeight: '100px',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#FF7900',
                        heightAuto: false,
                    });
                this.getAllRole();
            });
        }
        this.currentRoleCreate = [];
    }
    setOpen(isOpen, idRole, libellerole) {
        this.isModalOpen = isOpen;
        this.idrole = idRole;
        this.libellerole = libellerole;
        console.log("mmmmmmmmmmmmmmmmmmmm");
        console.log(this.libellerole);
    }
    handleChange1(ev) {
        this.currentRoleCreate2 = this.currentRoleCreate2.concat(ev.target.value);
    }
    updateRole() {
        this.seriveRole.updateRole(this.Utilisateur.login, this.Utilisateur.password, this.libelleRole2, this.currentRoleCreate2, this.idrole).subscribe(data => {
            console.log(data);
        });
    }
    setClose(isOpen) {
        this.isModalOpen = isOpen;
    }
};
RolePage.ctorParameters = () => [
    { type: _services_role_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService }
];
RolePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-role',
        template: _role_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_role_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RolePage);



/***/ }),

/***/ 7993:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "#notift {\n  font-size: 11px;\n  border-radius: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 12px;\n  right: 0px;\n  height: 11px;\n  width: 11px;\n  background-color: #fff;\n}\n\n.iconCloche {\n  border-radius: 15px;\n  border: #ff7900 2px solid;\n}\n\n.iconCloche:hover {\n  border-radius: 15px;\n  background-color: #ff7900;\n  color: #fff;\n  font-size: 25px !important;\n}\n\n.iconCloche:hover #notift {\n  background-color: #ffffff;\n  color: #ff7900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb2NoZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUdKIiwiZmlsZSI6ImNsb2NoZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZnR7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgd2lkdGg6IDExcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uaWNvbkNsb2NoZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6ICNmZjc5MDAgMnB4IHNvbGlkO1xyXG59XHJcblxyXG4uaWNvbkNsb2NoZTpob3ZlcntcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgI25vdGlmdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI2ZmNzkwMDtcclxuICB9XHJcbn1cclxuLy8gLmJ0bntcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC5idG46aG92ZXJ7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbi8vICAgY29sb3I6ICNGRjc5MDAgIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgLmJ0biA+IGk6aG92ZXJ7XHJcbi8vICAgICBjb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuICAiXX0= */";

/***/ }),

/***/ 3753:
/*!************************************************!*\
  !*** ./src/app/role/role.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Raleway:400,600\");\n@font-face {\n  font-family: poppinsB;\n  src: url('Poppins-Black.ttf');\n}\n@font-face {\n  font-family: poppinsL;\n  src: url('Poppins-Light.ttf');\n}\n/* ============= Begin Testimonial Flexbox ============ */\n* {\n  font-family: poppinsL;\n}\nlabel:hover {\n  opacity: 0.75;\n  cursor: pointer;\n}\n.button {\n  background: #ff7900;\n  border-radius: 15px;\n  width: 50px;\n}\n.buttonColor {\n  background: #ff7900;\n  border-radius: 15px;\n  color: #ffffff;\n}\n.buttonColor:hover {\n  border: 1px solid #ff7900 !important;\n  border-radius: 15px !important;\n  color: #ff7900 !important;\n  background-color: #fff !important;\n}\n.item1 {\n  height: 100em;\n}\n/* ============== End Testimonial Flexbox ============= */\n.btnn {\n  background: #ff7900;\n  border-radius: 15px;\n  width: 50px;\n  float: right;\n  width: 170px;\n  height: 50px;\n  position: relative;\n  z-index: 100;\n  bottom: 30px;\n  right: 20px;\n  color: #eee;\n}\nion-modal {\n  --height: auto !important;\n  --border-radius: 15px;\n  --width: auto;\n}\nion-menu-button {\n  background: inherit !important;\n  border-radius: 15px !important;\n}\nion-button {\n  background: inherit !important;\n}\n.card {\n  background: #FFFFFF;\n  box-shadow: 0px 6px 4px 6px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  margin-top: 10px !important;\n}\n.container {\n  font-family: myfon1 !important;\n  font-size: small !important;\n  font-weight: 800;\n  color: #FF7900;\n}\n.container h5 {\n  font-weight: bolder !important;\n  font-size: large !important;\n  margin-bottom: 15px !important;\n  color: black;\n}\n.colorbutton2 {\n  background-color: rgba(255, 121, 0, 0.85);\n  color: white;\n  padding: 5px;\n  border-radius: 10px;\n}\n.colorbutton2:hover {\n  background-color: rgba(255, 255, 255, 0.85);\n  color: #FF7900 !important;\n  border: 1px solid #FF7900 !important;\n}\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 52px;\n  height: 26px;\n}\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\ninput:checked + .slider {\n  background-color: #118023;\n}\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\ncaption {\n  background-color: #FF7900;\n  font-family: myfon2;\n  color: rgb(54, 49, 49) !important;\n  font-weight: 600;\n  font-size: 25px;\n  letter-spacing: 2px;\n  text-shadow: 1px 1px 2px whitesmoke;\n}\ntd {\n  font-family: myfon2;\n}\nth {\n  font-family: myfon2;\n  color: white !important;\n  font-weight: 600;\n  font-size: larger;\n}\nthead {\n  background-color: #FF7900;\n}\n.socials a {\n  width: 8%;\n  height: 8%;\n  display: inline-block;\n  cursor: pointer;\n  margin: 0 10px;\n}\n.socials a i {\n  color: #fff;\n  padding: 12px 0;\n}\n.styleAppliquerAuRole {\n  object-fit: cover;\n  height: 350px !important;\n  width: 100%;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);\n}\n@media screen and (max-width: 450px) {\n  .styleAppliquerAuRole {\n    object-fit: cover;\n    height: 300px;\n    width: 100%;\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);\n  }\n}\n.card {\n  background: #FFFFFF;\n  box-shadow: 0px 6px 4px 6px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  margin-bottom: 20px !important;\n}\n.container {\n  font-family: myfon1 !important;\n  font-size: small !important;\n  font-weight: 800;\n  color: #FF7900;\n}\n.container h5 {\n  font-weight: bolder !important;\n  font-size: large !important;\n  margin-bottom: 15px !important;\n  color: black;\n}\n.colorbutton2 {\n  background-color: rgba(255, 121, 0, 0.85);\n  color: white;\n  padding: 5px;\n  border-radius: 10px;\n}\n.colorbutton2:hover {\n  background-color: rgba(255, 255, 255, 0.85);\n  color: #FF7900 !important;\n  border: 1px solid #FF7900 !important;\n}\n.libellerole {\n  color: #000;\n  font-size: medium;\n}\nbody {\n  font-family: poppinsL;\n  background: #fafafa;\n}\nh1 {\n  text-align: center;\n  padding: 30px 0 0 0;\n}\nh4 {\n  font-size: 1.2em;\n  text-align: center;\n  padding: 0 0 30px 0;\n}\n.icon {\n  margin-left: 60%;\n}\n.linkicon {\n  display: flex;\n  justify-content: space-around;\n}\n.timeline {\n  list-style: none;\n  padding: 20px 0 20px;\n  position: relative;\n}\n.timeline:before {\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  content: \"\";\n  width: 3px;\n  background-color: #d9d9d9;\n  margin-left: -1.5px;\n  left: 20px;\n}\n@media (min-width: 576px) {\n  .timeline:before {\n    left: 50%;\n  }\n}\n.timeline > li {\n  margin-bottom: 20px;\n  position: relative;\n  padding-left: 55px;\n}\n.timeline > li:after, .timeline > li:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.timeline > li .panel {\n  width: 100%;\n  float: left;\n  border-radius: 3px;\n  overflow: hidden;\n  position: relative;\n  background: #fff;\n  box-shadow: 1px 2px 80px 0 rgba(0, 0, 0, 0.1);\n}\n.timeline > li .panel summary {\n  display: block;\n  -webkit-user-select: none;\n          user-select: none;\n  outline: none;\n  padding: 20px;\n  margin-bottom: 0px;\n  transition: all 600ms cubic-bezier(0.23, 1, 0.32, 1);\n  transition-property: margin, background;\n  font-weight: 600;\n}\n.timeline > li .panel summary::-webkit-details-marker {\n  display: none;\n}\n.timeline > li .panel summary:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n.timeline > li .panel p {\n  padding: 0 20px 10px;\n}\n.timeline > li .panel[open] summary {\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n@media (min-width: 576px) {\n  .timeline > li {\n    padding-left: 0px;\n  }\n  .timeline > li .panel {\n    width: 50%;\n  }\n  .timeline > li:not(:nth-child(even)) {\n    padding-right: 90px;\n  }\n  .timeline > li:nth-child(even) {\n    padding-left: 90px;\n  }\n  .timeline > li:nth-child(even) > :nth-child(even) {\n    float: right;\n  }\n}\n.timeline > li > .icon {\n  color: #d9d9d9;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  font-size: 2.5em;\n  text-align: center;\n  position: absolute;\n  left: 20px;\n  margin-left: -25px;\n  background-color: #fafafa;\n  z-index: 999;\n  border-radius: 50%;\n  font-family: Font Awesome\\ 5 Free;\n}\n.timeline > li > .icon:before {\n  content: \"\\f192\";\n}\n@media (min-width: 576px) {\n  .timeline > li > .icon {\n    left: 50%;\n  }\n}\n.timeline > li > .icon.done {\n  color: #FF7900;\n}\n.timeline > li > .icon.done:before {\n  content: \"\\f058\";\n}\n.timeline > li > .icon.working {\n  color: #eeba4c;\n}\n.timeline > li > .icon.working:before {\n  content: \"\\f017\";\n}\n/*button*/\n.btn-close {\n  cursor: pointer;\n  transition: 0.5s;\n}\nion-title {\n  font-size: large !important;\n}\n@media screen and (max-width: 450px) {\n  .styleLibelleRolle {\n    font-size: 10px;\n  }\n  th {\n    font-size: small;\n  }\n  .showImage {\n    display: none;\n  }\n  .socials a {\n    width: 16%;\n    height: 16%;\n    display: inline-block;\n    cursor: pointer;\n    margin: 0 5px;\n  }\n}\n/*button*/\n.ajout {\n  color: white;\n  background: #FF7900;\n  width: 15%;\n  font-weight: 900;\n  box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;\n  border: 2px solid #FF7900;\n  margin-top: 2%;\n  margin-bottom: 2%;\n  border-radius: 15px;\n}\n@media screen and (max-width: 814px) {\n  .ajout {\n    color: white;\n    background: #FF7900;\n    width: 28%;\n    font-weight: 900;\n    box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;\n    border: 2px solid #FF7900;\n    margin-top: 2%;\n    margin-bottom: 2%;\n    font-family: poppinsL;\n    font-size: 15;\n    border-radius: 15px;\n  }\n}\n.titlediv {\n  background-color: #D9D9D9;\n  height: 60px;\n  text-align: center;\n  margin-bottom: 10%;\n  margin-left: 0px !important;\n}\n.title {\n  margin-top: 18px;\n  font-family: poppinsB;\n  font-size: 20px;\n}\n.salles {\n  padding: 30px 15px 30px 15px;\n}\n.img {\n  margin-top: 10px;\n  margin-left: 10px;\n  width: 50%;\n}\n.lierAct {\n  font-size: 12px;\n  width: 90%;\n  background-color: #000;\n  border: none;\n}\n.icondiv {\n  margin-left: 3%;\n}\n.chaquesalle {\n  background: #FFFFFF;\n  border: 1px solid #FF7900;\n  box-shadow: 4px 4px 4px 2px #FF6200;\n  border-radius: 5px;\n  margin: 3%;\n  margin-bottom: 50px;\n}\n@media screen and (max-width: 767px) {\n  .separator1 {\n    display: none;\n  }\n  #titlediv {\n    margin-top: 15%;\n  }\n}\n.disabled-field {\n  pointer-events: none !important;\n  display: none !important;\n  color: #FF7900;\n}\n.list-md {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  background: none;\n}\nlabel {\n  left: 0px;\n  top: 0px;\n  margin: 0px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0px;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n          appearance: none;\n  outline: none;\n  display: flex;\n  align-items: center;\n  opacity: 1 !important;\n}\nion-title {\n  font-size: 26px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,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QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUE1RkY7QUErRkE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQTVGRjtBQWdHQTtFQUNFLDRCQUFBO0FBN0ZGO0FBZ0dBO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUE5RkY7QUFrR0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQS9GRjtBQW1HQTtFQUNFLGVBQUE7QUFoR0Y7QUFvR0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQWpHRjtBQW9HQTtFQUVFO0lBQ0UsYUFBQTtFQWxHRjtFQXNHQTtJQUNFLGVBQUE7RUFwR0Y7QUFDRjtBQXVHQTtFQUNFLCtCQUFBO0VBQ0Usd0JBQUE7RUFDQSxjQUFBO0FBckdKO0FBdUdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0MsZ0JBQUE7QUFwR0g7QUF1R0E7RUFDRSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO1VBQUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFwR0Y7QUF1R0E7RUFDRSwwQkFBQTtBQXBHRiIsImZpbGUiOiJyb2xlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zQjtcclxuICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250L1BvcHBpbnMtQmxhY2sudHRmXCIpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogcG9wcGluc0w7XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udC9Qb3BwaW5zLUxpZ2h0LnR0ZlwiKTtcclxufVxyXG4vKiA9PT09PT09PT09PT09IEJlZ2luIFRlc3RpbW9uaWFsIEZsZXhib3ggPT09PT09PT09PT09ICovXHJcblxyXG4qe1xyXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zTDtcclxufVxyXG5sYWJlbDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC43NTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4uYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiAjZmY3OTAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5idXR0b25Db2xvciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmNzkwMDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uYnV0dG9uQ29sb3I6aG92ZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjc5MDAgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZjc5MDAgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtMSB7XHJcbiAgaGVpZ2h0OiAxMDBlbTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT0gRW5kIFRlc3RpbW9uaWFsIEZsZXhib3ggPT09PT09PT09PT09PSAqL1xyXG4uYnRubiB7XHJcbiAgYmFja2dyb3VuZDogI2ZmNzkwMDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYm90dG9tOiAzMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjZWVlO1xyXG59XHJcblxyXG5cclxuLy8gY29kZSBDU1MgQVBQTElRVUVSIEFVIE1PREVMRSBQRVJNRVRUQU5UIEQnQUpPVVRFUiBVTkUgXHJcbmlvbi1tb2RhbCB7XHJcbiAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgLS13aWR0aDogYXV0bztcclxufVxyXG5cclxuaW9uLW1lbnUtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJveC1zaGFkb3c6IDBweCA2cHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBmb250LWZhbWlseTogbXlmb24xICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiBzbWFsbCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6ICNGRjc5MDA7XHJcblxyXG4gIGg1IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXIgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2UgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbn1cclxuXHJcbi5jb2xvcmJ1dHRvbjIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjRkY3OTAwLCAkYWxwaGE6IC44NSk7XHJcbiAgY29sb3I6ICNmZmZmO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5jb2xvcmJ1dHRvbjI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmZmZiwgJGFscGhhOiAuODUpO1xyXG4gIGNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyBzdHlsZSBhcHBsaXF1ZXIgYXUgbm90aWZpY2F0aW9uXHJcbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXHJcbi5zd2l0Y2gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDUycHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xyXG4uc3dpdGNoIGlucHV0IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuLyogVGhlIHNsaWRlciAqL1xyXG4uc2xpZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgYm90dG9tOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkKy5zbGlkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTgwMjM7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzKy5zbGlkZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyOmJlZm9yZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbn1cclxuXHJcblxyXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuLnNsaWRlci5yb3VuZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcclxufVxyXG5cclxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuY2FwdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzkwMDtcclxuICBmb250LWZhbWlseTogbXlmb24yO1xyXG4gIGNvbG9yOiByZ2IoNTQsIDQ5LCA0OSkgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgZm9udC1mYW1pbHk6IG15Zm9uMjtcclxufVxyXG5cclxudGgge1xyXG4gIGZvbnQtZmFtaWx5OiBteWZvbjI7XHJcbiAgY29sb3I6ICNmZmZmICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5cclxudGhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjc5MDA7XHJcbn1cclxuXHJcbi5zb2NpYWxzIGEge1xyXG4gIHdpZHRoOiA4JTtcclxuICBoZWlnaHQ6ICA4JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLnNvY2lhbHMgYSBpIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMnB4IDA7XHJcbn1cclxuXHJcbi5zdHlsZUFwcGxpcXVlckF1Um9sZSB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgaGVpZ2h0OiAzNTBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgLnN0eWxlQXBwbGlxdWVyQXVSb2xlIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vTWV0aG9kZSBBcHBsaXF1ZXIgQXUgYnV0dG9uIGQnYWpvdXQgZGUgcm9sZVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDZweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBteWZvbjEgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IHNtYWxsICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBjb2xvcjogI0ZGNzkwMDtcclxuXHJcbiAgaDUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlciAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbG9yYnV0dG9uMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNGRjc5MDAsICRhbHBoYTogLjg1KTtcclxuICBjb2xvcjogI2ZmZmY7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmNvbG9yYnV0dG9uMjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmZmLCAkYWxwaGE6IC44NSk7XHJcbiAgY29sb3I6ICNGRjc5MDAgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5saWJlbGxlcm9sZXtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IG1lZGl1bVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vL0NPREUgQVBQTElRVUVSIEFVIE5PVVZFTExFIFZFUlNJT04gREVTIFJPTEVTXHJcblxyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5OjQwMCw2MDAnKTtcclxuJHdodDogI2ZmZjtcclxuJGJsazogIzAwMDtcclxuJGdyZWVuOiAjMjNiNWFmO1xyXG4keWVsbG93OiAjZWViYTRjO1xyXG4kYm9yZGVyOiBsaWdodGVuKCRibGssXHJcbiAgICA4NSk7XHJcbiRiZzogZGFya2VuKCR3aHQsXHJcbiAgICAyKTtcclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBwb3BwaW5zTDtcclxuICBiYWNrZ3JvdW5kOiAkYmc7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMzBweCAwIDAgMDtcclxufVxyXG5cclxuaDQge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMCAzMHB4IDA7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBtYXJnaW4tbGVmdDogNjAlO1xyXG59XHJcblxyXG4ubGlua2ljb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi50aW1lbGluZSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAyMHB4IDAgMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJvcmRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMS41cHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA+bGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogNTVweDtcclxuXHJcbiAgICAmOmFmdGVyLFxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuXHJcbiAgICAucGFuZWwge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkd2h0O1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggMnB4IDgwcHggMCByZ2JhKCRibGssIDAuMSk7XHJcblxyXG4gICAgICBzdW1tYXJ5IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWFyZ2luLCBiYWNrZ3JvdW5kO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtZGV0YWlscy1tYXJrZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkYmxrLCAwLjEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZbb3Blbl0gc3VtbWFyeSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgkYmxrLCAwLjEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG5cclxuICAgICAgLnBhbmVsIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm5vdCg6bnRoLWNoaWxkKGV2ZW4pKSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogOTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOTBweDtcclxuXHJcbiAgICAgICAgPiA6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICA+IHtcclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIGNvbG9yOiAkYm9yZGVyO1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEZvbnQgQXdlc29tZVxcIDUgRnJlZTtcclxuXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcXGYxOTJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5kb25lIHtcclxuICAgICAgICAgIGNvbG9yOiAjRkY3OTAwO1xyXG5cclxuICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogXCJcXGYwNThcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYud29ya2luZyB7XHJcbiAgICAgICAgICBjb2xvcjogJHllbGxvdztcclxuXHJcbiAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMDE3XCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKmJ1dHRvbiovXHJcbi5idG4tY2xvc2Uge1xyXG4gIFxyXG4gIC8vIGJhY2tncm91bmQ6ICNGRjc5MDA7XHJcbiAgLy8gaGVpZ2h0OiA0MHB4O1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy8gZm9udC13ZWlnaHQ6IDkwMDtcclxuICAvLyBib3gtc2hhZG93OiA2cHggNnB4IDZweCAjY2JjZWQxLCAtNnB4IC02cHggNnB4IHdoaXRlO1xyXG4gICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIC8vIGJvcmRlcjogMnB4IHNvbGlkICNGRjc5MDA7XHJcbiAgLy8gcGFkZGluZzogMHB4IDEwMHB4IDBweCAwcHg7XHJcbiAgLy8gZm9udC1mYW1pbHk6IHBvcHBpbnNMO1xyXG5cclxuICAvLyBwYWRkaW5nOiAwO1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG59XHJcbmlvbi10aXRsZXtcclxuICBmb250LXNpemU6IGxhcmdlICFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpe1xyXG4gIC5zdHlsZUxpYmVsbGVSb2xsZXtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgdGh7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gIH1cclxuICAuc2hvd0ltYWdle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLnNvY2lhbHMgYSB7XHJcbiAgICB3aWR0aDogMTYlO1xyXG4gICAgaGVpZ2h0OiAgMTYlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIFxyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9jc3MgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qYnV0dG9uKi9cclxuLmFqb3V0IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogI0ZGNzkwMDtcclxuICB3aWR0aDogMTUlO1xyXG4gIC8vIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGJveC1zaGFkb3c6IDZweCA2cHggNnB4ICNjYmNlZDEsIC02cHggLTZweCA2cHggd2hpdGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGNzkwMDtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjgxNHB4KSB7XHJcbiAgLmFqb3V0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNGRjc5MDA7XHJcbiAgICB3aWR0aDogMjglO1xyXG4gICAgLy8gY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggNnB4ICNjYmNlZDEsIC02cHggLTZweCA2cHggd2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkY3OTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIGZvbnQtZmFtaWx5OiBwb3BwaW5zTDtcclxuICAgIGZvbnQtc2l6ZTogMTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi50aXRsZWRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q5RDlEOTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMThweDtcclxuICBmb250LWZhbWlseTogcG9wcGluc0I7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIC8vICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5zYWxsZXMge1xyXG4gIHBhZGRpbmc6IDMwcHggMTVweCAzMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5pbWcge1xyXG5cclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcblxyXG59XHJcblxyXG4ubGllckFjdCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG59XHJcblxyXG4uaWNvbmRpdiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMlO1xyXG59XHJcblxyXG5cclxuLmNoYXF1ZXNhbGxlIHtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRjc5MDA7XHJcbiAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggMnB4ICNGRjYyMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xyXG5cclxuICAuc2VwYXJhdG9yMSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICB9XHJcblxyXG4gICN0aXRsZWRpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgfVxyXG5cclxufVxyXG4uZGlzYWJsZWQtZmllbGR7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjRkY3OTAwO1xyXG59XHJcbi5saXN0LW1kIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgYmFja2dyb3VuZDogbm9uZVxyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgZm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */";

/***/ }),

/***/ 9956:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\"\r\n    integrity=\"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==\"\r\n    crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n<!-- <div class=\"iconCloche\" (click)=\"OpenNotification($event)\">\r\n  <i class=\"fa-regular fa-bell\"></i><span>2</span>\r\n</div> -->\r\n<div class=\"col reporting\">\r\n  <button type=\"button\" class=\"btn buttonColor\"  class=\"iconCloche\" (click)=\"OpenNotification($event)\"><i class=\"fa-regular fa-bell\"></i><span id=\"notift\">{{this.notifTotal}}</span></button>\r\n</div>";

/***/ }),

/***/ 5281:
/*!************************************************!*\
  !*** ./src/app/role/role.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Rôle</ion-title>\r\n    <ion-button slot=\"end\" fill=\"clear\">\r\n      <app-cloche></app-cloche>\r\n\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <!-- <div class=\"col-sm-7 mx-auto\">\r\n    <header class=\"section-header text-center\">\r\n      <span class=\"h1 d-block\">\r\n        <span>❝</span>\r\n      </span>\r\n      <h2>Les Roles</h2>\r\n    </header>\r\n  </div> -->\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"d-grid m-2 gap-2 d-md-flex justify-content-md-end\">\r\n        <button class=\"btn buttonColor\" type=\"button\" id=\"open-modal\">+ &nbsp; Nouveau\r\n          Role</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <div id=\"flex-container\" class=\"testimonials\">\r\n    <div id=\"left-zone\">\r\n      <ul class=\"list\">\r\n        <li class=\"item\" *ngFor=\"let inf of TousLesRole; let i = index\">\r\n          <input type=\"radio\" id=\"{{i}}\" name=\"basic_carousel\" checked />\r\n          <label class=\"label_testimonial\" class=\"{{i}}\" for=\"{{i}}\">{{inf.libellerole}} </label>\r\n          <div class=\"content-test content_testimonial\">\r\n\r\n            <!-- <h1>{{inf.entite}}</h1>\r\n            <p>{{inf.descrription}}</p>\r\n            <p class=\"testimonialFrom\">{{inf.status}}</p>\r\n            <p class=\"testimonialState\"> {{inf.nom}} </p>\r\n            <br> \r\n            <p class=\"testimonialState\"><button class=\"button\">Voir+</button></p>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div id=\"right-zone\"></div>\r\n  </div> -->\r\n\r\n  <div class=\"row mx-2\">\r\n    <div class=\"col-lg-3 col-12 p-3 showImage\">\r\n      <img src=\"../../assets/icon/icon/loi (1).png\" class=\"styleAppliquerAuRole\" alt=\"\" srcset=\"\">\r\n    </div>\r\n    <div class=\"col\">\r\n      <table class=\"table table-striped text-center mx-auto caption-top\">\r\n        <caption class=\"text-center\"> Les rôles de ODC </caption>\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\"> Titre </th>\r\n            <th scope=\"col\"> Nombre de droits </th>\r\n            <th scope=\"col\"> Action </th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let inf of TousLesRole; let i = index\">\r\n            <td class=\"styleLibelleRolle\"> {{inf.libellerole}} </td>\r\n            <td class=\"styleLibelleRolle\">{{inf.droits.length}}</td>\r\n            <td>\r\n              <div class=\"socials\">\r\n                <a title=\"Voir plus de detail sur l'entité\"><img src=\"../../assets/icon/voir.png\" alt=\"\" srcset=\"\"></a>\r\n                <a title=\"cliquer ici pour modifier l'entité\" (click)=\"setOpen(true,inf.id, inf.libellerole)\"><img\r\n                    src=\"../../assets/icon/modifier-le-fichier.png\" alt=\"\" srcset=\"\"></a>\r\n                <a title=\"cliquer ici pour supprimer l'entité\" (click)=\"supprimerRole(inf.id)\"><img\r\n                    src=\"../../assets/icon/supprimer.png\" alt=\"\" srcset=\"\"></a>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <ion-modal #modal trigger=\"open-modal\" backdropDismiss=\"false\">\r\n\r\n    <ng-template>\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-title>Création et attribution des droits au rôle</ion-title>\r\n          <ion-buttons slot=\"end\">\r\n            <button type=\"button\" class=\"btn-close\" (click)=\"modal.dismiss()\" data-bs-dismiss=\"modal\"\r\n              aria-label=\"Close\"> </button>\r\n\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n\r\n      <div class=\"container\">\r\n\r\n        <div class=\"card\">\r\n          <div class=\"card-body text-start\">\r\n            <form>\r\n\r\n              <div class=\"row mb-3\">\r\n                <div class=\"col-12 col-lg-6\">\r\n                  <div for=\"exampleFormControlInput1\" class=\"libellerole\">Libelle role *</div>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"libelleRole\" name=\"libelleRole\"\r\n                    id=\"exampleFormControlInput1\" placeholder=\"Orange digital kalanso\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <ion-list>\r\n                    <ion-item>\r\n                      <ion-select [compareWith]=\"compareWith\" placeholder=\"Droit de Lecture\"\r\n                        (ionChange)=\"handleChange($event)\" [multiple]=\"true\">\r\n                        <ion-select-option *ngFor=\"let food of LibelleRoleLecture\" [value]=\"food\">\r\n                          {{ food.libelle }}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                    </ion-item>\r\n\r\n                  </ion-list>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <ion-list>\r\n                    <ion-item>\r\n                      <ion-select [compareWith]=\"compareWith\" placeholder=\"Droit de creation\"\r\n                        (ionChange)=\"handleChange($event)\" [multiple]=\"true\">\r\n                        <ion-select-option *ngFor=\"let creat of LibelleRoleCreation\" [value]=\"creat\">\r\n                          {{ creat.libelle }}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                    </ion-item>\r\n\r\n                  </ion-list>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <ion-list>\r\n                    <ion-item>\r\n                      <ion-select [compareWith]=\"compareWith\" placeholder=\"Droits de mise à jours\"\r\n                        (ionChange)=\"handleChange($event)\" [multiple]=\"true\">\r\n                        <ion-select-option *ngFor=\"let upd of LibelleRoleUpdate\" [value]=\"upd\">\r\n                          {{ upd.libelle }}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                    </ion-item>\r\n\r\n                  </ion-list>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <ion-list>\r\n                    <ion-item>\r\n                      <ion-select [compareWith]=\"compareWith\" placeholder=\"Droits Suppression\"\r\n                        (ionChange)=\"handleChange11($event)\" [multiple]=\"true\">\r\n                        <ion-select-option *ngFor=\"let sup of LibelleRoleSuppression\" [value]=\"sup\">\r\n                          {{ sup.libelle }}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                    </ion-item>\r\n\r\n                  </ion-list>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"d-grid gap-2 col-6 text-center mx-auto mt-2\">\r\n                <button type=\"button\" class=\"btn colorbutton2 btn-sm\"\r\n                  (click)=\"postRole();modal.dismiss()\">Enregistrer</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </ng-template>\r\n  </ion-modal>\r\n\r\n\r\n\r\n  <!-- methode permettant de mettre en jour le role -->\r\n\r\n  <ion-modal [isOpen]=\"isModalOpen\" backdropDismiss=\"false\">\r\n\r\n    <ng-template>\r\n\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-title>Mise à jour et attribution des droits au rôle</ion-title>\r\n          <ion-buttons slot=\"end\">\r\n            <button type=\"button\" class=\"btn-close\" (click)=\"setClose(false);\" data-bs-dismiss=\"modal\"\r\n              aria-label=\"Close\"> </button>\r\n\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n\r\n\r\n      <div class=\"container\">\r\n\r\n        <div class=\"card\">\r\n          <div class=\"card-body text-start\">\r\n            <form>\r\n\r\n              <div class=\"row mb-3\">\r\n                <div class=\"col-12 col-lg-6\">\r\n                  <div for=\"exampleFormControlInput1\" class=\"libellerole\">Libelle role *</div>\r\n                  <input type=\"text\" class=\"form-control\" [value]=\"this.libellerole\" [(ngModel)]=\"libelleRole2\"\r\n                    name=\"libelleRole2\" id=\"exampleFormControlInput1\" placeholder=\"Orange digital kalanso\">\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <ion-list>\r\n                    <ion-item>\r\n                      <ion-select [compareWith]=\"compareWith\" placeholder=\"Droit de Lecture\"\r\n                        (ionChange)=\"handleChange1($event)\" [multiple]=\"true\">\r\n                        <ion-select-option *ngFor=\"let food of LibelleRoleLecture\" [value]=\"food\">\r\n                          {{ food.libelle }}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                    </ion-item>\r\n\r\n                  </ion-list>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <ion-list>\r\n                    <ion-item>\r\n                      <ion-select [compareWith]=\"compareWith\" placeholder=\"Droit de creation\"\r\n                        (ionChange)=\"handleChange1($event)\" [multiple]=\"true\">\r\n                        <ion-select-option *ngFor=\"let creat of LibelleRoleCreation\" [value]=\"creat\">\r\n                          {{ creat.libelle }}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                    </ion-item>\r\n\r\n                  </ion-list>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <ion-list>\r\n                    <ion-item>\r\n                      <ion-select [compareWith]=\"compareWith\" placeholder=\"Droits de mise à jours\"\r\n                        (ionChange)=\"handleChange1($event)\" [multiple]=\"true\">\r\n                        <ion-select-option *ngFor=\"let upd of LibelleRoleUpdate\" [value]=\"upd\">\r\n                          {{ upd.libelle }}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                    </ion-item>\r\n\r\n                  </ion-list>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <ion-list>\r\n                    <ion-item>\r\n                      <ion-select [compareWith]=\"compareWith\" placeholder=\"Droits Suppression\"\r\n                        (ionChange)=\"handleChange1($event)\" [multiple]=\"true\">\r\n                        <ion-select-option *ngFor=\"let sup of LibelleRoleSuppression\" [value]=\"sup\">\r\n                          {{ sup.libelle }}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                    </ion-item>\r\n\r\n                  </ion-list>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"d-grid gap-2 col-6 text-center mx-auto mt-2\">\r\n                <button type=\"button\" class=\"btn colorbutton2 btn-sm\" (click)=\"updateRole()\">Enregistrer</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </ng-template>\r\n  </ion-modal>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_role_role_module_ts.js.map