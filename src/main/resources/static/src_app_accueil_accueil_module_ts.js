"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_accueil_accueil_module_ts"],{

/***/ 2895:
/*!***************************************************!*\
  !*** ./src/app/accueil/accueil-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccueilPageRoutingModule": () => (/* binding */ AccueilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _accueil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accueil.page */ 5672);




const routes = [
    {
        path: '',
        component: _accueil_page__WEBPACK_IMPORTED_MODULE_0__.AccueilPage
    }
];
let AccueilPageRoutingModule = class AccueilPageRoutingModule {
};
AccueilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccueilPageRoutingModule);



/***/ }),

/***/ 8913:
/*!*******************************************!*\
  !*** ./src/app/accueil/accueil.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccueilPageModule": () => (/* binding */ AccueilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _accueil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accueil-routing.module */ 2895);
/* harmony import */ var _accueil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accueil.page */ 5672);
/* harmony import */ var _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cloche/cloche.component */ 7907);








let AccueilPageModule = class AccueilPageModule {
};
AccueilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _accueil_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccueilPageRoutingModule
        ],
        declarations: [_accueil_page__WEBPACK_IMPORTED_MODULE_1__.AccueilPage, _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__.ClocheComponent]
    })
], AccueilPageModule);



/***/ }),

/***/ 5672:
/*!*****************************************!*\
  !*** ./src/app/accueil/accueil.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccueilPage": () => (/* binding */ AccueilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _accueil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accueil.page.html?ngResource */ 1325);
/* harmony import */ var _accueil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accueil.page.scss?ngResource */ 4384);
/* harmony import */ var _services_acceuil_accueilservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/acceuil/accueilservice.service */ 1859);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/utilisateur/utilisateur.service */ 4996);



// import { Component, OnInit } from '@angular/core';





let AccueilPage = class AccueilPage {
    constructor(route, router, service, userService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.userService = userService;
        this.image = 'https://www.decome-store.fr/27073-thickbox_pbm/mini-voiture-laferrari-pour-enfant-50w.jpg';
        this.slideOpts = {
            speed: 10000
        };
    }
    ngOnInit() {
        this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
        console.log(this.Utilisateur.login);
        // ;:::::::::::total acTIVITE ::::::::::::
        this.service.GetActviteTotal(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            // ;:::::::::::total acTIVITE ::::::::::::
            this.totalactivite = data.data;
            console.log(data);
        });
        //!::::::::::::total perso ::::::::::::
        this.userService.getActivesUsers(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            this.personneActive = data.data.length;
            console.log(data.data);
        });
        //!::::::::::::total perso ::::::::::::
        this.service.GetParticipantTotal(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            this.participantsTotal = data.data.length;
            console.log(data.data);
        });
        //::::::::::::::: ::::::::::::::::::Activite en cour ::::::::::::::
        this.service.GetActiviteEncour(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            this.activiteEncours = data.data;
            this.enCourLong = data.data.length;
            console.log(data.data);
        });
        //::::::::::::::: ::::::::::::::::::Activite avenir ::::::::::::::
        this.service.GetActiviteAvenir(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            this.activiteAvenir = data.data;
            this.aVenirLong = data.data.length;
            console.log(data.data);
        });
        //TOUTES LES ACTIVITES :::::::::::::::::::::
        this.service.GetToutesActivites(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            this.touteactivite = data.data;
            console.log(this.touteactivite);
        });
        this.service.GetParticipantTotal(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            this.totlapostulant = data.data;
            console.log(data);
        });
        this.service.participantEnfants(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            this.participantEnfants = data.data.length;
            console.log(data);
        });
        this.service.participantFeminins(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
            this.participantFeminins = data.data.length;
            console.log(data);
        });
    }
    change() {
        var carousel = document.querySelector('.carousel'), figure = carousel.querySelector('figure'), nav = carousel.querySelector('nav'), numImages = figure.childElementCount, theta = 2 * Math.PI / numImages, currImage = 0;
        nav.addEventListener('click', onClick, true);
        function onClick(e) {
            e.stopPropagation();
            var t = e.target;
            if (t.tagName.toUpperCase() != 'BUTTON')
                return;
            if (t.classList.contains('suiv')) {
                currImage++;
            }
            else if (t.classList.contains('pre')) {
                currImage--;
            }
            figure.style.transform = `rotateY(${currImage * -theta}rad)`;
        }
    }
    //::::::::
    givesrc(id) {
        console.log(id);
        for (var i = 0; i < this.totalactivite.length; i++) {
            if (this.totalactivite[i].id == id) {
                return this.totalactivite.image;
            }
            return null;
        }
    }
};
AccueilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_acceuil_accueilservice_service__WEBPACK_IMPORTED_MODULE_2__.AccueilserviceService },
    { type: _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_3__.UtilisateurService }
];
AccueilPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonSlides,] }]
};
AccueilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-accueil',
        template: _accueil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_accueil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccueilPage);



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

/***/ 4384:
/*!******************************************************!*\
  !*** ./src/app/accueil/accueil.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: myfontLight;\n  src: url('Poppins-Light.ttf');\n}\n@font-face {\n  font-family: myfontBlack;\n  src: url('Poppins-Black.ttf');\n}\n.mere {\n  background-color: #F2EDED;\n  overflow-y: scroll;\n}\n::-webkit-scrollbar {\n  display: none;\n}\n.side_droite {\n  margin-left: 3%;\n}\n.side_gauche {\n  background-color: white;\n  border-radius: 15px;\n  height: 88%;\n  margin-left: 3%;\n  padding: 20px;\n}\n.image {\n  border-radius: 15px;\n  margin-bottom: 2%;\n}\n@media screen and (max-width: 990px) {\n  .side_gauche {\n    background-color: white;\n    border-radius: 5px;\n    margin: auto;\n    padding: 20px;\n  }\n}\n@media screen and (max-width: 574px) {\n  .side_gauche {\n    background-color: white;\n    border-radius: 15px;\n    margin-left: 2%;\n    margin-right: 15%;\n    padding: 15px;\n  }\n}\n.activite {\n  margin-bottom: 3%;\n  background-color: white;\n  border-radius: 15px;\n}\n.titre_inf {\n  font-weight: 700;\n  font-size: 26Px;\n  font-family: myfontBlack;\n  font-style: normal;\n  padding-top: 10%;\n}\ni {\n  font-size: 35px;\n}\n.icon2 {\n  color: #50BE87;\n}\n.icon3 {\n  color: #4BB4E6;\n}\n.icon4 {\n  color: #FFD200;\n}\n.icon5 {\n  color: #FF6200;\n}\n.reporting {\n  margin-top: 90%;\n  margin-bottom: 10%;\n}\n@media screen and (max-width: 990px) {\n  .reporting {\n    margin-top: 1%;\n    margin-left: 2%;\n    margin-bottom: 10%;\n  }\n}\n.text_info {\n  border-bottom: 3px solid black;\n  font-family: myfontLight;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 19px;\n  margin-bottom: 10%;\n}\n.nombre {\n  margin-top: 10px;\n  font-size: 26px;\n  font-weight: 700;\n  font-family: myfontBlack;\n}\n.venir {\n  margin-left: 10%;\n  margin-right: auto;\n}\n.AenCours {\n  font-weight: 700;\n  font-size: 26Px;\n  font-family: myfontBlack;\n  font-style: normal;\n  margin-left: 32%;\n  margin-bottom: 20px;\n}\n.AVenir {\n  font-weight: 700;\n  font-size: 26Px;\n  font-family: myfontBlack;\n  font-style: normal;\n  margin-left: -60%;\n}\n.ticketAvenir {\n  background-color: rgba(221, 215, 215, 0.6);\n  border-radius: 15px;\n  color: black;\n  width: 71%;\n  margin-left: 3% !important;\n  padding: 2% !important;\n  height: 40%;\n  font-family: myfontBlack;\n  font-size: 20px;\n  position: absolute;\n  top: 55%;\n}\n.content {\n  position: relative;\n  width: 100%;\n}\n@media screen and (max-width: 991px) {\n  .ticketAvenir {\n    background-color: rgba(221, 215, 215, 0.6);\n    border-radius: 15px;\n    color: black;\n    font-family: myfontLight;\n    width: 91%;\n    margin-left: 3%;\n    height: 40%;\n    position: absolute;\n    top: 55%;\n  }\n  .venir {\n    margin-left: 8%;\n    margin-right: auto;\n  }\n  .AenCours {\n    font-weight: 700;\n    font-size: 20px !important;\n    font-family: myfontBlack;\n    font-style: normal;\n    margin-left: 8% !important;\n    margin-bottom: 20px;\n  }\n  .AVenir {\n    margin-top: 5%;\n    font-weight: 700;\n    font-size: 20px !important;\n    font-family: myfontBlack;\n    font-style: normal;\n  }\n}\n#MiniLeftNav li {\n  list-style: outside none none;\n  margin: 20px 0;\n  padding: 0;\n  width: 48px;\n}\n#MiniLeftNav li a {\n  border: solid 1px #ff7900;\n  display: block;\n  padding: 7px;\n  position: relative;\n}\n#MiniLeftNav span {\n  font-family: myfontLight;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  bottom: 0;\n  left: 47px;\n  line-height: 38px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 0;\n  /* CSS3 Transition: */\n  /* Future proofing (these do not work yet): */\n  transition: 0.5s;\n}\n#MiniLeftNav a:hover span {\n  width: auto;\n  padding: 0 30px;\n  overflow: visible;\n}\n#MiniLeftNav a:hover {\n  text-decoration: none;\n}\n#MiniLeftNav a span {\n  background-color: #ff7900;\n  color: white;\n}\n@media screen and (max-width: 846px) {\n  ol, ul {\n    padding-left: 0rem;\n  }\n  dl, ol, ul {\n    margin-top: -6px;\n    margin-bottom: 1rem;\n  }\n}\n@media screen and (max-width: 991px) {\n  .desktop {\n    display: none;\n  }\n  .phone {\n    display: flex !important;\n  }\n}\n.phone {\n  display: none;\n}\n.phone {\n  background-color: #FF7900;\n  color: white;\n  font-weight: bold;\n  font-family: myfontLight;\n  font-style: normal;\n  border-radius: 15px;\n  width: 90%;\n  height: 50px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.phone:hover {\n  border-color: #FF7900 !important;\n  color: #FF7900 !important;\n  font-weight: bold;\n  font-family: myfontLight;\n}\n.phone > i:hover {\n  color: #FF7900 !important;\n}\n.desktop {\n  background-color: #FF7900;\n  color: white;\n  font-weight: bold;\n  font-family: myfontLight;\n  font-style: normal;\n  border-radius: 15px;\n  width: 90%;\n  height: 50px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.desktop:hover {\n  border-color: #FF7900 !important;\n  color: #FF7900 !important;\n  font-weight: bold;\n  font-family: myfontLight;\n}\n.desktop > i:hover {\n  color: #FF7900 !important;\n}\n.report {\n  background-color: #FF7900;\n  color: white;\n  font-weight: bold;\n  font-family: myfontLight;\n  font-style: normal;\n  border-radius: 15px;\n  width: 90%;\n  height: 50px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.report:hover {\n  border-color: #FF7900 !important;\n  color: #FF7900 !important;\n  font-weight: bold;\n  font-family: myfontLight;\n}\n.img_activite_avenir {\n  border-radius: 50%;\n  width: 30px;\n}\n.report > i:hover {\n  color: #FF7900 !important;\n}\n.nom_activite {\n  margin-top: 0%;\n  margin-left: 0px;\n}\n.side {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n.carousel-item {\n  height: 15rem;\n  background: #777;\n  position: relative;\n  color: white;\n}\n.carousel-control-prev-icon, .carousel-control-next-icon {\n  border-radius: 50%;\n  border: 1px solid red;\n}\n.carousel-control-prev-icon {\n  filter: invert(1) grayscale(100);\n  color: red !important;\n}\n.carousel-control-prev-icon, .carousel-control-next-icon {\n  height: 30px;\n  width: 30px;\n  outline: black;\n  background-color: black;\n  background-size: 100%, 100%;\n  border-radius: 50%;\n  border: 1px solid black;\n}\n.carousel-dark .carousel-caption {\n  color: white !important;\n}\n.carousel-caption {\n  background-color: rgba(221, 215, 215, 0.6);\n  border-radius: 15px;\n  width: 35%;\n  margin-left: auto;\n  margin-right: auto;\n}\nh5 {\n  color: black;\n  font-weight: 700;\n  font-family: myfontBlack;\n}\n.encours_ticket {\n  color: black;\n  font-weight: 700;\n  font-family: myfontLight;\n}\n.carousel-inner {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.carousel-item {\n  height: 25rem;\n  background: #777;\n  position: relative;\n  color: white;\n}\n@media screen and (max-width: 520px) {\n  .carousel-item {\n    height: 20%;\n    background: #777;\n    position: relative;\n    color: white;\n  }\n  .slide {\n    border-radius: 0px;\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n.activite {\n  padding-top: 6%;\n  padding-bottom: 5%;\n  font-family: myfontBlack;\n}\n.circleblack {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  background-color: black;\n  margin-bottom: 2px;\n}\n.circlewhite {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  border: 2px solid black;\n  background-color: rgb(255, 255, 255);\n  margin-bottom: 2px;\n}\n.circleorange {\n  height: 35px;\n  width: 35px;\n  border-radius: 50%;\n  background-color: #FF6200;\n  margin-bottom: 2px;\n}\n.image {\n  width: 193px;\n  height: 270px;\n}\n.nomActivite {\n  font-size: 12px;\n  font-weight: bold;\n}\n.Date {\n  font-size: 10px;\n  font-weight: bold;\n}\n.lblAucune {\n  display: flex;\n  justify-content: center;\n  font-size: 25px;\n  position: relative;\n  top: 50%;\n}\n.aucune {\n  display: flex;\n  justify-content: center;\n  font-family: myfontLight;\n}\n/*# sourceMappingURL=data:application/json;base64,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QTlHQTtBQWdIQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTdHQTtBQStHQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTVHQTtBQW1IQTtFQUNFLGFBQUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFoSEo7QUF1SEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQXBIRiIsImZpbGUiOiJhY2N1ZWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBteWZvbnRMaWdodDtcclxuXHJcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udC9Qb3BwaW5zLUxpZ2h0LnR0ZlwiKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZXtcclxuICBmb250LWZhbWlseTogbXlmb250QmxhY2s7XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi9hc3NldHMvZm9udC9Qb3BwaW5zLUJsYWNrLnR0ZlwiKTtcclxufVxyXG5cclxuXHJcbi5tZXJle1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNGMkVERUQ7XHJcbiBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbi8vIHNjcm9sbC1iZWhhdmlvcjogYXV0bztcclxuXHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG5kaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2lkZV9kcm9pdGV7XHJcbiAgbWFyZ2luLWxlZnQ6IDMlO1xyXG59XHJcbi8vIGlvbi1idXR0b246aG92ZXJ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XHJcbi8vICAgLnNpZGVfZHJvaXRle1xyXG5cclxuLy8gICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTEycHgpIHtcclxuLy8gICAuc2lkZV9kcm9pdGV7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMSU7XHJcbi8vICAgfVxyXG5cclxuICBcclxuXHJcbiBcclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcclxuLy8gICAuQWVuQ291cnN7XHJcbi8vICAgICBmb250LXdlaWdodDo3MDAgOyBcclxuLy8gICAgIGZvbnQtc2l6ZTogMjZQeDsgXHJcbi8vICAgICBmb250LWZhbWlseTogbXlmb250QmxhY2s7XHJcbi8vICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbi8vICAgIG1hcmdpbi1sZWZ0OjIwJSAhaW1wb3J0YW50IDtcclxuLy8gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5cclxuLnNpZGVfZ2F1Y2hle1xyXG5iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG5ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4vLyBtYXJnaW46IGF1dG87XHJcbmhlaWdodDogODglO1xyXG5cclxubWFyZ2luLWxlZnQ6IDMlO1xyXG5wYWRkaW5nOiAyMHB4O1xyXG5cclxufVxyXG5cclxuLmltYWdle1xyXG5ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5tYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcclxuLnNpZGVfZ2F1Y2hle1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgcGFkZGluZzogMjBweDtcclxuXHJcbn1cclxuXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc0cHgpIHtcclxuLnNpZGVfZ2F1Y2hle1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbiAgXHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxufVxyXG5cclxuLmFjdGl2aXRle1xyXG5cclxubWFyZ2luLWJvdHRvbTozJTtcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLnRpdHJlX2luZntcclxuZm9udC13ZWlnaHQ6NzAwIDsgXHJcbmZvbnQtc2l6ZTogMjZQeDsgXHJcbmZvbnQtZmFtaWx5OiBteWZvbnRCbGFjaztcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5wYWRkaW5nLXRvcDoxMCUgO1xyXG59XHJcblxyXG5pe1xyXG5mb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbi5pY29uMntcclxuY29sb3I6ICM1MEJFODc7XHJcbn1cclxuLmljb24ze1xyXG5jb2xvcjogIzRCQjRFNjtcclxufVxyXG5cclxuLmljb240e1xyXG5jb2xvcjogI0ZGRDIwMDtcclxufVxyXG4uaWNvbjV7XHJcbmNvbG9yOiAjRkY2MjAwO1xyXG59XHJcblxyXG4ucmVwb3J0aW5ne1xyXG5tYXJnaW4tdG9wOiA5MCU7XHJcbm1hcmdpbi1ib3R0b206MTAlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4ucmVwb3J0aW5ne1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBtYXJnaW4tYm90dG9tOjEwJTtcclxufVxyXG59XHJcbi50ZXh0X2luZm97XHJcbmJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcclxuZm9udC1mYW1pbHk6IG15Zm9udExpZ2h0O1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiA0MDA7XHJcbmZvbnQtc2l6ZTogMTlweDtcclxubWFyZ2luLWJvdHRvbTogMTAlO1xyXG5cclxufVxyXG5cclxuLm5vbWJyZXtcclxuXHJcbm1hcmdpbi10b3A6IDEwcHg7XHJcbmZvbnQtc2l6ZTogMjZweDtcclxuZm9udC13ZWlnaHQ6IDcwMDtcclxuZm9udC1mYW1pbHk6IG15Zm9udEJsYWNrO1xyXG59XHJcblxyXG5cclxuLnZlbmlye1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7IFxyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLkFlbkNvdXJze1xyXG4gIGZvbnQtd2VpZ2h0OjcwMCA7IFxyXG4gIGZvbnQtc2l6ZTogMjZQeDsgXHJcbiAgZm9udC1mYW1pbHk6IG15Zm9udEJsYWNrO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBtYXJnaW4tbGVmdDozMiUgO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgXHJcbiAgXHJcbiAgfVxyXG5cclxuICAuQVZlbmlye1xyXG5cclxuICAgIGZvbnQtd2VpZ2h0OjcwMCA7IFxyXG4gICAgZm9udC1zaXplOiAyNlB4OyBcclxuICAgIGZvbnQtZmFtaWx5OiBteWZvbnRCbGFjaztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIG1hcmdpbi1sZWZ0Oi02MCUgO1xyXG4gIH1cclxuXHJcbiAgLnRpY2tldEF2ZW5pcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMTUsIDIxNSwgMC42MCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDcxJTtcclxuICAgIG1hcmdpbi1sZWZ0OjMlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAyJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgICBmb250LWZhbWlseTpteWZvbnRCbGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjU1JTtcclxuXHJcbiAgICBcclxuICB9XHJcbiAgLmNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MXB4KSB7XHJcblxyXG4gIC50aWNrZXRBdmVuaXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjE1LCAyMTUsIDAuNjApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiBteWZvbnRMaWdodDtcclxuICAgIHdpZHRoOiA5MSU7XHJcbiAgICBtYXJnaW4tbGVmdDozJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6NTUlO1xyXG4gIH1cclxuICBcclxuLnZlbmlye1xyXG4gIG1hcmdpbi1sZWZ0OjglOyBcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiAgLkFlbkNvdXJze1xyXG4gICAgZm9udC13ZWlnaHQ6NzAwIDsgXHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDsgXHJcbiAgICBmb250LWZhbWlseTogbXlmb250QmxhY2s7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OjglICFpbXBvcnRhbnQgO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5BVmVuaXJ7XHJcbm1hcmdpbi10b3A6IDUlO1xyXG4gICAgICBmb250LXdlaWdodDo3MDAgOyBcclxuICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgICBmb250LWZhbWlseTogbXlmb250QmxhY2s7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgICAgXHJcbiAgICB9XHJcbiAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiNNaW5pTGVmdE5hdiBsaXtcclxuICBsaXN0LXN0eWxlOiBvdXRzaWRlIG5vbmUgbm9uZTtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG59XHJcblxyXG4jTWluaUxlZnROYXYgbGkgYXtcclxuICAgIGJvcmRlcjpzb2xpZCAxcHggI2ZmNzkwMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbiNNaW5pTGVmdE5hdiBzcGFuIHtcclxuICBmb250LWZhbWlseTogbXlmb250TGlnaHQ7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiA0N3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB3aWR0aDogMDtcclxuICBcclxuICAvKiBDU1MzIFRyYW5zaXRpb246ICovXHJcbi13ZWJraXQtdHJhbnNpdGlvbjogMC41MHM7XHJcbi8qIEZ1dHVyZSBwcm9vZmluZyAodGhlc2UgZG8gbm90IHdvcmsgeWV0KTogKi9cclxuLW1vei10cmFuc2l0aW9uOiAwLjUwcztcclxudHJhbnNpdGlvbjogMC41MHM7ICBcclxufVxyXG4jTWluaUxlZnROYXYgYTpob3ZlciBzcGFueyB3aWR0aDphdXRvOyBwYWRkaW5nOjAgMzBweDtvdmVyZmxvdzp2aXNpYmxlOyB9XHJcbiNNaW5pTGVmdE5hdiBhOmhvdmVye3RleHQtZGVjb3JhdGlvbjpub25lO31cclxuI01pbmlMZWZ0TmF2IGEgc3BhbntcclxuYmFja2dyb3VuZC1jb2xvcjojZmY3OTAwO1xyXG5jb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg0NnB4KSB7XHJcbiAgICAgIG9sLCB1bCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkbCwgb2wsIHVsIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTZweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkxcHgpIHtcclxuIFxyXG4gIC5kZXNrdG9we1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5waG9uZXtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG59XHJcblxyXG4ucGhvbmV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4ucGhvbmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzkwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6bXlmb250TGlnaHQgO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnBob25lOmhvdmVye1xyXG4gIGJvcmRlci1jb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG5jb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuZm9udC1mYW1pbHk6bXlmb250TGlnaHQgO1xyXG59XHJcblxyXG4ucGhvbmU+IGk6aG92ZXJ7XHJcbiAgY29sb3I6ICNGRjc5MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmRlc2t0b3B7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzkwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6bXlmb250TGlnaHQgO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmRlc2t0b3A6aG92ZXJ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbmNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5mb250LWZhbWlseTpteWZvbnRMaWdodCA7XHJcbn1cclxuXHJcbi5kZXNrdG9wPiBpOmhvdmVye1xyXG4gIGNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLnJlcG9ydHtcclxuYmFja2dyb3VuZC1jb2xvcjogI0ZGNzkwMDtcclxuY29sb3I6IHdoaXRlO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuZm9udC1mYW1pbHk6bXlmb250TGlnaHQgO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbndpZHRoOiA5MCU7XHJcbmhlaWdodDogNTBweDtcclxubWFyZ2luLWxlZnQ6IGF1dG87XHJcbm1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4ucmVwb3J0OmhvdmVye1xyXG5ib3JkZXItY29sb3I6ICNGRjc5MDAgIWltcG9ydGFudDtcclxuY29sb3I6ICNGRjc5MDAgIWltcG9ydGFudDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtZmFtaWx5Om15Zm9udExpZ2h0IDtcclxufVxyXG5cclxuLmltZ19hY3Rpdml0ZV9hdmVuaXJ7XHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxud2lkdGg6MzBweFxyXG59XHJcblxyXG4ucmVwb3J0ID4gaTpob3ZlcntcclxuICBjb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4ubm9tX2FjdGl2aXRle1xyXG5tYXJnaW4tdG9wOiAwJTtcclxuIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuLnNpZGV7XHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbmp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG5cclxuLmNhcm91c2VsLWl0ZW17XHJcbmhlaWdodDogMTVyZW07XHJcbmJhY2tncm91bmQ6ICM3Nzc7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5jb2xvcjogd2hpdGU7XHJcblxyXG5cclxuXHJcbn0gXHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24sIC5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XHJcblxyXG5cclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG5ib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XHJcbmZpbHRlcjogaW52ZXJ0KDEpIGdyYXlzY2FsZSgxMDApO1xyXG5jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xyXG5oZWlnaHQ6IDMwcHg7XHJcbndpZHRoOiAzMHB4O1xyXG5vdXRsaW5lOiBibGFjaztcclxuYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbmJhY2tncm91bmQtc2l6ZTogMTAwJSwgMTAwJTtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmNhcm91c2VsLWRhcmsgLmNhcm91c2VsLWNhcHRpb257XHJcbmNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5jYXJvdXNlbC1jYXB0aW9ue1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjE1LCAyMTUsIDAuNjApO1xyXG5ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG53aWR0aDogMzUlO1xyXG5tYXJnaW4tbGVmdDogYXV0bztcclxubWFyZ2luLXJpZ2h0OmF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuaDV7XHJcbmNvbG9yOiBibGFjazsgXHJcbmZvbnQtd2VpZ2h0OiA3MDA7XHJcbmZvbnQtZmFtaWx5Om15Zm9udEJsYWNrIDtcclxufVxyXG4uZW5jb3Vyc190aWNrZXR7XHJcbmNvbG9yOiBibGFjazsgXHJcbmZvbnQtd2VpZ2h0OiA3MDA7XHJcbmZvbnQtZmFtaWx5Om15Zm9udExpZ2h0IDtcclxufVxyXG4uY2Fyb3VzZWwtaW5uZXJ7XHJcblxyXG5wYWRkaW5nLWxlZnQ6MTBweCA7XHJcbiBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4uY2Fyb3VzZWwtaXRlbSB7XHJcblxyXG4gXHJcbiAgaGVpZ2h0OiAyNXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjNzc3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuLmNhcm91c2VsLWl0ZW0ge1xyXG5cclxuICBoZWlnaHQ6IDIwJTtcclxuICBiYWNrZ3JvdW5kOiAjNzc3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgXHJcbn1cclxuXHJcbi5zbGlkZXtcclxuYm9yZGVyLXJhZGl1czogMHB4O1xyXG5cclxucGFkZGluZy1sZWZ0OjEwcHggO1xyXG4gcGFkZGluZy1yaWdodDogMTBweDtcclxuXHJcbn1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4uYWN0aXZpdGV7XHJcbnBhZGRpbmctdG9wOjYlO1xyXG5wYWRkaW5nLWJvdHRvbTogNSU7XHJcbmZvbnQtZmFtaWx5OiBteWZvbnRCbGFjaztcclxufVxyXG5cclxuXHJcblxyXG4uY2lyY2xlYmxhY2sge1xyXG5oZWlnaHQ6IDM1cHg7XHJcbndpZHRoOiAzNXB4O1xyXG5ib3JkZXItcmFkaXVzOiA1MCU7XHJcbmJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5tYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi5jaXJjbGV3aGl0ZSB7XHJcbmhlaWdodDogMzVweDtcclxud2lkdGg6IDM1cHg7XHJcbmJvcmRlci1yYWRpdXM6IDUwJTtcclxuYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxubWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4uY2lyY2xlb3JhbmdlIHtcclxuaGVpZ2h0OiAzNXB4O1xyXG53aWR0aDogMzVweDtcclxuYm9yZGVyLXJhZGl1czogNTAlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjRkY2MjAwO1xyXG5tYXJnaW4tYm90dG9tOiAycHg7XHJcblxyXG59XHJcblxyXG4uaW1hZ2V7XHJcbndpZHRoOiAxOTNweDtcclxuaGVpZ2h0OiAyNzBweDtcclxufVxyXG4ubm9tQWN0aXZpdGV7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLkRhdGV7XHJcbmZvbnQtc2l6ZTogMTBweDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8vIC5kaXZBdmVjYmd7XHJcbi8vICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTogY292ZXI7IGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vIH1cclxuXHJcbi5sYmxBdWN1bmV7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1MCU7XHJcblxyXG59XHJcbi8vIC5mYS1wbHVzLWNpcmNsZTpiZWZvcmUge1xyXG4gXHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcbi5hdWN1bmV7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogbXlmb250TGlnaHQ7XHJcblxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 7993:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "#notift {\n  font-size: 11px;\n  border-radius: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 12px;\n  right: 0px;\n  height: 11px;\n  width: 11px;\n  background-color: #fff;\n}\n\n.iconCloche {\n  border-radius: 15px;\n  border: #ff7900 2px solid;\n}\n\n.iconCloche:hover {\n  border-radius: 15px;\n  background-color: #ff7900;\n  color: #fff;\n  font-size: 25px !important;\n}\n\n.iconCloche:hover #notift {\n  background-color: #ffffff;\n  color: #ff7900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb2NoZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUFFRjs7QUFERTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUdKIiwiZmlsZSI6ImNsb2NoZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3RpZnR7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBoZWlnaHQ6IDExcHg7XHJcbiAgd2lkdGg6IDExcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uaWNvbkNsb2NoZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3JkZXI6ICNmZjc5MDAgMnB4IHNvbGlkO1xyXG59XHJcblxyXG4uaWNvbkNsb2NoZTpob3ZlcntcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjc5MDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgI25vdGlmdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI2ZmNzkwMDtcclxuICB9XHJcbn1cclxuLy8gLmJ0bntcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICB3aWR0aDogMTAwJTtcclxuLy8gICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgfVxyXG4vLyAgIC5idG46aG92ZXJ7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbi8vICAgY29sb3I6ICNGRjc5MDAgIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgLmJ0biA+IGk6aG92ZXJ7XHJcbi8vICAgICBjb2xvcjogI0ZGNzkwMCAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuICAiXX0= */";

/***/ }),

/***/ 1325:
/*!******************************************************!*\
  !*** ./src/app/accueil/accueil.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Accueil</ion-title>\r\n    <ion-button slot=\"end\" fill=\"clear\">\r\n      <app-cloche></app-cloche>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- <div *ngIf=\"totalactivite==0\" class=\"container-fluid mere\" style=\"height: 100%;\">\r\n  <ion-label class=\"lblAucune\">  Aucune activite\r\n  </ion-label>\r\n</div> -->\r\n\r\n\r\n  <div class=\"container-fluid mere\" style=\"height: 100%;\">\r\n\r\n\r\n\r\n    <div class=\"row gy-3 my-3\">\r\n\r\n      <div class=\"col- col-sm-10 col-md-10 col-lg-3 col-xl-3 col-xxl-3 side_gauche\">\r\n\r\n        <div class=\"col side\">\r\n\r\n\r\n\r\n          <div class=\"col\">\r\n\r\n            <div class=\"titre_inf\">\r\n              Statistiques\r\n            </div>\r\n\r\n\r\n\r\n             <div class=\"col\" style=\"margin-top: 5%;\">\r\n\r\n\r\n              <div class=\"col\">\r\n\r\n                <div class=\"row\" >\r\n\r\n                  <div class=\"col\"><i class=\"bi bi-activity icon1\"></i></div>\r\n                  <div class=\"col nombre\" >{{totalactivite}}</div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col text_info\">\r\n                  Activités Totales\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"col\">\r\n\r\n                <div class=\"row\" >\r\n\r\n                  <div class=\"col\"><i class=\"bi bi-people-fill icon2\"></i></div>\r\n                  <div class=\"col nombre\" >{{personneActive}}</div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col text_info\">\r\n                  Personnels actifs\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n              <div class=\"col\">\r\n\r\n                <div class=\"row\" >\r\n\r\n                  <div class=\"col\"> <i class=\"fa fa-users icon3\" aria-hidden=\"true\"></i></div>\r\n                  <div class=\"col nombre\" >{{participantsTotal}}</div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col text_info\">\r\n                  Participants Totals\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n\r\n\r\n\r\n              <div class=\"col\">\r\n\r\n                <div class=\"row\" >\r\n\r\n                  <div class=\"col\"><i class=\"fa fa-female icon4\" aria-hidden=\"true\"></i></div>\r\n                  <div class=\"col nombre\" >{{participantFeminins}}</div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col text_info\">\r\n                  Participants feminins\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n\r\n\r\n\r\n              <div class=\"col\">\r\n\r\n                <div class=\"row\" >\r\n\r\n                  <div class=\"col\"><i class=\"fa fa-child icon5\" aria-hidden=\"true\"></i></div>\r\n                  <div class=\"col nombre\" >{{participantEnfants}}</div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col text_info\">\r\n                  Participants enfants\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n             </div>\r\n\r\n          </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"col reporting\">\r\n          <button type=\"button\" class=\"btn buttonColor report\" [routerLink]=\"['/dashboard/reporting']\" routerLinkActive=\"router-link-active\" >Reporting</button>\r\n        </div>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col- col-sm-10 col-md-10 col-lg-8 col-xl-8 col-xxl-8 side_droite\">\r\n\r\n\r\n\r\n        <div class=\"col activite\">\r\n\r\n\r\n          <span class=\"AenCours\">Activités en cours</span>\r\n\r\n          <div *ngIf=\"enCourLong==0\" >\r\n            <div class=\"aucune\">Aucune activité en cours</div>\r\n          </div>\r\n\r\n          <div *ngIf=\"enCourLong!=0\"  id=\"carouselExampleDark\" class=\"carousel carousel-dark slide\" data-bs-ride=\"carousel\">\r\n            <div class=\"carousel-indicators\">\r\n              <button type=\"button\" data-bs-target=\"#carouselExampleDark\" data-bs-slide-to=\"0\" class=\"active\" aria-current=\"true\" aria-label=\"Slide 1\"></button>\r\n              <button type=\"button\" data-bs-target=\"#carouselExampleDark\" data-bs-slide-to=\"1\" aria-label=\"Slide 2\"></button>\r\n              <button type=\"button\" data-bs-target=\"#carouselExampleDark\" data-bs-slide-to=\"2\" aria-label=\"Slide 3\"></button>\r\n            </div>\r\n            \r\n            <div class=\"carousel-inner\">\r\n\r\n              <div class=\"carousel-item active\" data-bs-interval=\"2000\" *ngFor=\"let activiteEncour of activiteEncours | slice:0:3 let i=index\">\r\n                <img *ngIf=\"i<3\" src={{activiteEncour.image}}  class=\"d-block w-100\" alt=\"...\">\r\n                \r\n\r\n\r\n                <div *ngIf=\"i<3\" class=\"carousel-caption d-none d-md-block\" [routerLink]=\"['/dashboard/detailactivite',activiteEncour.id]\">\r\n                    <h5 class=\"nom_activite\">{{activiteEncour.nom}}</h5>\r\n                    <span class=\"encours_ticket\">{{activiteEncour.dateDebut | date }}</span> \r\n                    <span  *ngIf=\"activiteEncour.salle!=null\" class=\"encours_ticket\"> -- {{activiteEncour.salle.libelle}}</span><br>\r\n                    <img src=\"../../assets/A (2).jpg\" class=\"img_activite_avenir\" alt=\"\" srcset=\"\">{{activiteEncour.createur.nom}} {{activiteEncour.createur.prenom}}\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#carouselExampleDark\" data-bs-slide=\"prev\">\r\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n              <span class=\"visually-hidden\">Previous</span>\r\n            </button>\r\n            <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#carouselExampleDark\" data-bs-slide=\"next\">\r\n              <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n              <span class=\"visually-hidden\">Next</span>\r\n            </button>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"col activite\" style=\"margin-top: 3%; padding-right: 11px;  background-color:white; border-radius: 15px;\">\r\n  \r\n        \r\n          <div class=\"row\" style=\"margin-bottom: 3%\">\r\n            <div class=\"col\">\r\n\r\n              <ul id=\"MiniLeftNav\" [routerLink]=\"['/dashboard/allactivity/creer-activites']\">\r\n                <li >\r\n                    <a class=\"navtext\"  id=\"open-modal\"><i class=\"bi bi-plus-square\" style=\"color:#FF7900; font-size: 15px; margin-left: 25%;\"></i> <span>Activité</span></a>\r\n                </li>\r\n              </ul>\r\n\r\n            </div>\r\n            <div class=\"col\" style=\"margin-top: 2%;\">\r\n              <p class=\"AVenir\"> Activités à venir</p>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"row\"></div>\r\n          \r\n        \r\n\r\n          \r\n\r\n          <div class=\"row align-items-center venir\"  >\r\n\r\n         \r\n\r\n            <div  *ngIf=\"aVenirLong==0\" >\r\n              <div class=\"\">Aucune activité à venir</div>\r\n            </div>\r\n \r\n          \r\n            <div class=\"col- col-sm- col-lg-4\" *ngFor= \"let activiteAveni of activiteAvenir | slice:0:3\">\r\n              \r\n              <div class=\"content\" >\r\n                <img src={{activiteAveni.image}} class=\"image\" alt=\"\">\r\n\r\n                <a href=\"\">\r\n\r\n\r\n\r\n\r\n                  <div class=\"ticketAvenir\" [routerLink]=\"['/dashboard/detailactivite',activiteAveni.id]\">\r\n                    <span class=\"nomActivite\">\r\n                      {{activiteAveni.nom}}\r\n                    </span>\r\n     \r\n                   <br>\r\n                   <span class=\"Date\">\r\n                    {{activiteAveni.dateDebut  | date}}\r\n                   </span>\r\n     \r\n                     <br>\r\n               <img src=\"../../assets/avatar.png\" style=\"border-radius: 50%; width:30px\" alt=\"\" srcset=\"\"> <span\r\n                 class=\"nomLead\" style=\"font-size:10px ;\"> {{activiteAveni.createur.nom}}   {{activiteAveni.createur.prenom}}</span>\r\n \r\n                  </div>\r\n\r\n \r\n\r\n\r\n\r\n\r\n                 </a>\r\n              </div>\r\n           </div>\r\n            \r\n            <!-- <div class=\"col- col-sm- col-lg-4\" ><img src=\"../../assets/images/odcTalk.jpg\" class=\"image\" alt=\"\"></div> -->\r\n            <!-- <div class=\"col- col-sm- col-lg-4\" >\r\n              \r\n              <div class=\"content\">\r\n                <img src=\"../../assets/images/odcTalk.jpg\" class=\"image\" alt=\"\">\r\n\r\n                <a href=\"\">\r\n\r\n\r\n\r\n\r\n                  <div class=\"ticketAvenir\">\r\n                    <span class=\"nomActivite\">\r\n                     Nom Activité\r\n                    </span>\r\n     \r\n                   <br>\r\n                   <span class=\"Date\">\r\n                     Status\r\n                   </span>\r\n     \r\n                     <br>\r\n               <img src=\"../../assets/avatar.png\" style=\"border-radius: 50%; width:30px\" alt=\"\" srcset=\"\"> <span\r\n                 class=\"nomLead\" style=\"font-size:10px ;\">  BALLO Ibrahima</span>\r\n \r\n                  </div>\r\n\r\n \r\n\r\n\r\n\r\n\r\n                 </a>\r\n              </div>\r\n           </div> -->\r\n            <!-- <div class=\"col- col-sm- col-lg-4\" ><img src=\"../../assets/images/odcTalk.jpg\" class=\"image\" alt=\"\"></div> -->\r\n\r\n            <!-- <div class=\"col- col-sm- col-lg-4\" >\r\n              \r\n              <div class=\"content\">\r\n                <img src=\"../../assets/images/odcTalk.jpg\" class=\"image\" alt=\"\">\r\n\r\n                 <a href=\"\">\r\n\r\n\r\n\r\n\r\n                  <div class=\"ticketAvenir\">\r\n                    <span class=\"nomActivite\">\r\n                     Nom Activité\r\n                    </span>\r\n     \r\n                   <br>\r\n                   <span class=\"Date\">\r\n                     Status\r\n                   </span>\r\n     \r\n                     <br>\r\n               <img src=\"../../assets/avatar.png\" style=\"border-radius: 50%; width:30px\" alt=\"\" srcset=\"\"> <span\r\n                 class=\"nomLead\" style=\"font-size:10px ;\">  BALLO Ibrahima</span>\r\n \r\n                  </div>\r\n\r\n \r\n\r\n\r\n\r\n\r\n                 </a>\r\n              </div>\r\n           </div> -->\r\n\r\n\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\"\r\n  integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js\"\r\n  integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\r\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js\"\r\n  integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\r\n";

/***/ }),

/***/ 9956:
/*!*********************************************************!*\
  !*** ./src/app/cloche/cloche.component.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css\"\r\n    integrity=\"sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==\"\r\n    crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\r\n<!-- <div class=\"iconCloche\" (click)=\"OpenNotification($event)\">\r\n  <i class=\"fa-regular fa-bell\"></i><span>2</span>\r\n</div> -->\r\n<div class=\"col reporting\">\r\n  <button type=\"button\" class=\"btn buttonColor\"  class=\"iconCloche\" (click)=\"OpenNotification($event)\"><i class=\"fa-regular fa-bell\"></i><span id=\"notift\">{{this.notifTotal}}</span></button>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_accueil_accueil_module_ts.js.map