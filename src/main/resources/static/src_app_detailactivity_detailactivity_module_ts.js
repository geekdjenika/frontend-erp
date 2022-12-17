"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_detailactivity_detailactivity_module_ts"],{

/***/ 8457:
/*!*****************************************************************!*\
  !*** ./src/app/detailactivity/detailactivity-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailactivityPageRoutingModule": () => (/* binding */ DetailactivityPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _detailactivity_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailactivity.page */ 897);




const routes = [
    {
        path: '',
        component: _detailactivity_page__WEBPACK_IMPORTED_MODULE_0__.DetailactivityPage
    }
];
let DetailactivityPageRoutingModule = class DetailactivityPageRoutingModule {
};
DetailactivityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailactivityPageRoutingModule);



/***/ }),

/***/ 3464:
/*!*********************************************************!*\
  !*** ./src/app/detailactivity/detailactivity.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailactivityPageModule": () => (/* binding */ DetailactivityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _detailactivity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailactivity-routing.module */ 8457);
/* harmony import */ var _detailactivity_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailactivity.page */ 897);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 7043);
/* harmony import */ var _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cloche/cloche.component */ 7907);









let DetailactivityPageModule = class DetailactivityPageModule {
};
DetailactivityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _detailactivity_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailactivityPageRoutingModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.NgxPaginationModule
        ],
        declarations: [_detailactivity_page__WEBPACK_IMPORTED_MODULE_1__.DetailactivityPage, _cloche_cloche_component__WEBPACK_IMPORTED_MODULE_2__.ClocheComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.NO_ERRORS_SCHEMA]
    })
], DetailactivityPageModule);



/***/ }),

/***/ 897:
/*!*******************************************************!*\
  !*** ./src/app/detailactivity/detailactivity.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailactivityPage": () => (/* binding */ DetailactivityPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _detailactivity_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailactivity.page.html?ngResource */ 6938);
/* harmony import */ var _detailactivity_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailactivity.page.scss?ngResource */ 2166);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_activite_activite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/activite/activite.service */ 3277);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);









let DetailactivityPage = class DetailactivityPage {
    //act a venir rediriger vers son detail()id
    constructor(activiteservice, navv, route, router) {
        this.activiteservice = activiteservice;
        this.navv = navv;
        this.route = route;
        this.router = router;
        this.salles = null;
        this.nombreLingne1 = 8;
        //l'id a appliquer au tableau
        this.id1 = "season-tble";
        this.name = 'ExcelSheet.xlsx';
    }
    ngOnInit() {
        const idactivite = this.route.snapshot.params['id'];
        this.id = idactivite;
        this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
        this.idact = idactivite;
        //console.log(idactivite)
        console.log("recuperation de l'utilisateur " + this.Utilisateur);
        this.activiteservice.getactivitybyId(this.Utilisateur.login, this.Utilisateur.password, idactivite).subscribe(r => {
            this.activite = r.data;
            console.log(this.activite);
            this.nom = this.activite.nom;
            this.description = this.activite.description;
            if (this.activite.salle != null) {
                this.salles = this.activite.salle.libelle;
                this.salleid = this.activite.salle.id;
            }
            this.leadnom = this.activite.leader.nom;
            this.leadprenom = this.activite.leader.prenom;
            this.image = this.activite.image;
            this.dateDebut = this.activite.dateDebut;
            this.dateFin = this.activite.dateFin;
            this.nomCreateur = this.activite.createur.nom;
            this.prenomCreateur = this.activite.createur.prenom;
            this.formateursExter = this.activite.intervenantExternes;
            this.formateursInter = this.activite.utilisateurs;
            console.log(this.activite.createur.nom);
        });
        this.activiteservice.GetActiviteStatut(this.Utilisateur.login, this.Utilisateur.password, idactivite).subscribe(r => {
            console.log(r);
            this.Status = r.message;
            console.log(this.Status);
        });
        this.activiteservice.getallpostulantsbyidact(this.Utilisateur.login, this.Utilisateur.password, idactivite).subscribe(r => {
            console.log(r);
            this.postulants = r.data;
            this.nombreLingne = this.postulants.length;
            console.log(this.postulants);
        });
        this.activiteservice.getactivitybyId(this.Utilisateur.login, this.Utilisateur.password, idactivite).subscribe(r => {
            console.log(r);
            this.byentity = r.message;
            console.log(this.byentity);
        });
    }
    envoyernombre() {
        this.nombreLingne1 = this.nombreLingne;
    }
    exportToExcel() {
        this.nombreLingne1 = this.nombreLingne;
        setTimeout(() => {
            let element = document.getElementById('season-tble');
            const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_4__.utils.table_to_sheet(element);
            const book = xlsx__WEBPACK_IMPORTED_MODULE_4__.utils.book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_4__.utils.book_append_sheet(book, worksheet, 'Sheet1');
            xlsx__WEBPACK_IMPORTED_MODULE_4__.writeFile(book, this.name);
            this.nombreLingne1 = 8;
        }, 1000);
    }
    succesImport() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
            title: "Attention vous etes sûr de vouloir SUPPRIMER cette activité",
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    title: " Suppression definitive?",
                    showConfirmButton: true,
                    confirmButtonText: "Confirmer",
                    confirmButtonColor: 'green',
                    showCancelButton: true,
                    cancelButtonText: "Annuler",
                    cancelButtonColor: 'red',
                    heightAuto: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.supprimeractivite();
                        this.router.navigateByUrl('/dashboard/allactivity', { skipLocationChange: true }).then(() => {
                            this.router.navigate(["/dashboard/allactivity"]);
                        });
                    }
                    else if (result.isDenied) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire('Suppression annuler !');
                    }
                });
            }
            else if (result.isDenied) {
                // Swal.fire('Changes are not saved', '', 'info');
            }
        });
    }
    supprimeractivite() {
        this.activiteservice.deletebyid(this.Utilisateur.login, this.Utilisateur.password, this.idact).subscribe(d => {
            console.log(d);
            this.suppvar = d.message;
            console.log(this.suppvar);
        });
    }
    //////////////////////////////supppostulant
    successsuppost() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
            title: "Attention vous etes sûr de vouloir SUPPRIMER cet postulant",
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                    title: " Suppression definitive?",
                    showConfirmButton: true,
                    confirmButtonText: "Confirmer",
                    confirmButtonColor: 'green',
                    showCancelButton: true,
                    cancelButtonText: "Annuler",
                    cancelButtonColor: 'red',
                    heightAuto: false
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.supppostulant();
                        // this.router.navigateByUrl('/dashboard/allactivity', {skipLocationChange: true}).then(() => {
                        //   this.router.navigate(["/allactivity"])
                        // })
                    }
                    else if (result.isDenied) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire('Suppression annuler !');
                    }
                });
            }
            else if (result.isDenied) {
                // Swal.fire('Changes are not saved', '', 'info');
            }
        });
    }
    supppostulant() {
        this.activiteservice.delpost(this.Utilisateur.login, this.Utilisateur.password, this.idact).subscribe(d => {
            console.log(d);
            this.delpost = d.message;
            console.log(this.delpost);
            //this.ngOnInit()
        });
    }
    update() {
        this.activiteservice.updatebyid(this.Utilisateur.login, this.Utilisateur.password, this.idact).subscribe(d => {
            console.log(d);
            this.updatevar = d.message;
            console.log(this.updatevar);
        });
    }
    ionViewWillEnter() {
        const idactivite = this.route.snapshot.params['id'];
        this.id = idactivite;
        this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
        this.idact = idactivite;
        console.log("recuperation de l'utilisateur " + this.Utilisateur);
        this.activiteservice.getactivitybyId(this.Utilisateur.login, this.Utilisateur.password, idactivite).subscribe(r => {
            this.activite = r.data;
            console.log(this.activite);
            this.nom = this.activite.nom;
            this.description = this.activite.description;
            if (this.activite.salle != null) {
                this.salles = this.activite.salle.libelle;
                this.salleid = this.activite.salle.id;
            }
            this.leadnom = this.activite.leader.nom;
            this.leadprenom = this.activite.leader.prenom;
            this.image = this.activite.image;
            this.dateDebut = this.activite.dateDebut;
            this.dateFin = this.activite.dateFin;
            this.nomCreateur = this.activite.createur.nom;
            this.prenomCreateur = this.activite.createur.prenom;
            console.log(this.activite.createur.nom);
        });
        this.activiteservice.GetActiviteStatut(this.Utilisateur.login, this.Utilisateur.password, idactivite).subscribe(r => {
            console.log(r);
            this.Status = r.message;
            console.log(this.Status);
        });
        this.activiteservice.getallpostulantsbyidact(this.Utilisateur.login, this.Utilisateur.password, idactivite).subscribe(r => {
            console.log(r);
            this.postulants = r.data;
            this.nombreLingne = this.postulants.length;
            console.log(this.postulants);
        });
        this.activiteservice.getactivitybyId(this.Utilisateur.login, this.Utilisateur.password, idactivite).subscribe(r => {
            console.log(r);
            this.byentity = r.message;
            console.log(this.byentity);
        });
    }
    //en attente back
    importerliste() {
    }
};
DetailactivityPage.ctorParameters = () => [
    { type: _services_activite_activite_service__WEBPACK_IMPORTED_MODULE_2__.ActiviteService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
DetailactivityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-detailactivity',
        template: _detailactivity_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detailactivity_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailactivityPage);



/***/ }),

/***/ 2166:
/*!********************************************************************!*\
  !*** ./src/app/detailactivity/detailactivity.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "@font-face {\n  font-family: myfon1;\n  src: url('Poppins-Light.ttf');\n}\nion-content {\n  font-family: myfon1 !important;\n}\n#image {\n  border-radius: 15px;\n  object-fit: fill;\n}\n.laLigne {\n  background-color: white;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5) !important;\n}\n.img {\n  width: 100% !important;\n}\nion-label {\n  background-color: white !important;\n}\n.item-native {\n  background: #fff !important;\n}\n.titre {\n  font-size: 18px;\n  font-weight: bold;\n}\n.contenu {\n  font-size: 16px;\n  font-weight: lighter;\n  text-align: left;\n}\n@media screen and (max-width: 600px) {\n  .titre {\n    font-size: medium;\n    font-weight: bold;\n  }\n  .contenu {\n    font-size: smaller;\n    font-weight: lighter;\n  }\n}\n.largerButton {\n  width: 320px;\n}\n@font-face {\n  font-family: myfon;\n  src: url('Poppins-Black.ttf');\n}\n@font-face {\n  font-family: myfon2;\n  src: url('Poppins-Light.ttf');\n}\n.form-select {\n  color: #FF7900;\n  border: 1px solid #FF7900;\n  border-radius: 15px;\n}\n.form-select:focus {\n  box-shadow: 0px 0px 0px;\n  font-family: myfon2;\n  color: #FF7900;\n}\n.buttonColor {\n  background-color: #FF7900;\n  color: white;\n  font-family: myfon2;\n  border-radius: 15px;\n}\n.buttonColor:hover {\n  border: 1px solid #FF7900 !important;\n  color: #FF7900 !important;\n  background-color: white !important;\n}\ntd {\n  font-family: myfon2;\n}\nth {\n  font-family: myfon2;\n  color: white !important;\n  font-weight: 600;\n}\nthead {\n  background-color: #FF7900;\n}\n.voirPlus {\n  background-color: #FF7900;\n  padding: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  border-radius: 15px;\n  color: white;\n}\nhr {\n  background-color: #FF7900 !important;\n  height: 5px;\n  width: 25%;\n}\n@media screen and (max-width: 900px) {\n  .form-select {\n    font-size: medium;\n  }\n  .buttonColor {\n    font-size: medium;\n    text-align: center;\n  }\n  .hideColonneOder {\n    display: none;\n  }\n  th {\n    font-size: medium;\n  }\n  td {\n    font-size: small;\n  }\n  .largerButton {\n    width: auto;\n  }\n}\n@media screen and (max-width: 450px) {\n  .styleText {\n    text-align: left;\n    margin-right: 20px;\n    font-size: small;\n  }\n  .titreStatus {\n    font-weight: bold;\n    font-size: 16px;\n  }\n  .titreEntite {\n    font-weight: bold;\n    font-size: 18px;\n  }\n  .buttonColor {\n    font-size: small;\n  }\n  .hideColonne {\n    display: none;\n  }\n  th {\n    font-size: medium;\n  }\n  td {\n    font-size: small;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbGFjdGl2aXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSEE7RUFDSSxtQkFBQTtFQUNBLDZCQUFBO0FBaEhKO0FBa0hBO0VBQ0ksOEJBQUE7QUFoSEo7QUFrSEE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBL0dGO0FBaUhBO0VBQ0ksdUJBQUE7RUFDQSxxREFBQTtBQTlHSjtBQWdIQTtFQUNJLHNCQUFBO0FBN0dKO0FBK0dBO0VBQ0ksa0NBQUE7QUE1R0o7QUE4R0E7RUFDSSwyQkFBQTtBQTNHSjtBQTZHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQTFHSjtBQTRHQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBekdKO0FBMkdBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLGlCQUFBO0VBeEdOO0VBMEdFO0lBQ0ksa0JBQUE7SUFDQSxvQkFBQTtFQXhHTjtBQUNGO0FBMkdBO0VBQ0ksWUFBQTtBQXpHSjtBQTRHQTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7QUF6R0o7QUE0R0U7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0FBMUdKO0FBNEdFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUExR0o7QUE0R0U7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXpHSjtBQTRHRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUF6R0o7QUE0R0U7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUF6R0o7QUE4R0E7RUFDSSxtQkFBQTtBQTNHSjtBQThHRTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQTNHSjtBQThHRTtFQUNFLHlCQUFBO0FBM0dKO0FBOEdFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQTNHSjtBQTZHRTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUExR0o7QUE4R0U7RUFDRTtJQUNFLGlCQUFBO0VBM0dKO0VBOEdFO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQTVHSjtFQStHRTtJQUNFLGFBQUE7RUE3R0o7RUFnSEU7SUFDRSxpQkFBQTtFQTlHSjtFQWtIRTtJQUNFLGdCQUFBO0VBaEhKO0VBa0hFO0lBQ0ksV0FBQTtFQWhITjtBQUNGO0FBb0hFO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7RUFsSEo7RUFvSEU7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUFsSEo7RUFvSEU7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUFsSEo7RUFvSEU7SUFDRSxnQkFBQTtFQWxISjtFQXFIRTtJQUNFLGFBQUE7RUFuSEo7RUFzSEU7SUFDRSxpQkFBQTtFQXBISjtFQXVIRTtJQUNFLGdCQUFBO0VBckhKO0FBQ0YiLCJmaWxlIjoiZGV0YWlsYWN0aXZpdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnRpdGxlIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbi8vICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4vLyB9XHJcblxyXG4vLyAuY2FyZC1ibG9jayB7XHJcbi8vICAgICBmb250LXNpemU6IDFlbTtcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgIG1hcmdpbjogMDtcclxuLy8gICAgIHBhZGRpbmc6IDFlbTtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDM0LCAzNiwgMzgsIC4xKTtcclxuLy8gICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbi8vIH1cclxuXHJcbi8vIC5jYXJkIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuLy8gICAgIHBhZGRpbmc6IDU7XHJcbi8vICAgICBib3JkZXI6IG5vbmU7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW07XHJcbi8vICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuLy8gfVxyXG5cclxuLy8gLmltZyB7XHJcbi8vICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbi8vICAgICBib3JkZXI6IDA7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgd2lkdGg6IGF1dG87XHJcbi8vICAgICBoZWlnaHQ6IDgwJTtcclxuLy8gfVxyXG5cclxuLy8gLmJ0biB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4vLyB9XHJcblxyXG4vLyAvLy8vLy8vLy8vLy8vLy86Ojpib3V0b25zXHJcbi8vIC5tZXNib3V0b24ge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuLy8gfVxyXG5cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy86VGFibGVhdVxyXG5cclxuLy8gLnRhaWxsZVRleHRlIHtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiBteWZvbjEgIWltcG9ydGFudDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAudGFibGVFbnRldGUge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjIwMDtcclxuLy8gICAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjJweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4vLyAgICAgLnRhaWxsZVRleHRlIHtcclxuLy8gICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbi8vICAgICAudGFpbGxlVGV4dGUge1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLmNhY2hlckNvbGUge1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIC52b2lyIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjYyMDA7XHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbi8vIH1cclxuXHJcbi8vIGlvbi1yb3c6bnRoLWNoaWxkKC1uKzMpIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuLy8gfVxyXG5cclxuLy8gaW9uLXJvdyB7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuLy8gfVxyXG5cclxuLy8gaW9uLXJvdzpudGgtY2hpbGQoZXZlbikge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjNGMztcclxuLy8gfVxyXG4vLyAgIC8qYnV0dG9uKi9cclxuLy8gICBidXR0b257XHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZDogI0ZGNzkwMDtcclxuLy8gICAgIGhlaWdodDogNDBweDtcclxuLy8gICAgIC8vYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuLy8gICAgIGJveC1zaGFkb3c6IDZweCA2cHggNnB4ICNjYmNlZDEsIC02cHggLTZweCA2cHggd2hpdGU7XHJcbi8vICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4vLyAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjc5MDA7XHJcbi8vICAgICAgcGFkZGluZzogMHB4IDEwMHB4IDBweCAwcHg7XHJcbi8vICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbi8vICAgICBwYWRkaW5nOiAwO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbi8vICAgfVxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBteWZvbjE7XHJcbiAgICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250L1BvcHBpbnMtTGlnaHQudHRmXCIpO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6IG15Zm9uMSAhaW1wb3J0YW50O1xyXG59XHJcbiNpbWFnZXtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG9iamVjdC1maXQ6IGZpbGw7XHJcbn1cclxuLmxhTGlnbmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xyXG59XHJcbi5pbWd7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1sYWJlbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLml0ZW0tbmF0aXZle1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi50aXRyZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jb250ZW51e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAudGl0cmV7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuY29udGVudXtcclxuICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICB9XHJcblxyXG59XHJcbi5sYXJnZXJCdXR0b257XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbn1cclxuLy8gc3R5bGUgYXBwcGxpcXVlciBhdSBidXR0b24gaG9yaXpvbnRhbFxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBteWZvbjtcclxuICAgIHNyYzogdXJsKFwiLi4vLi4vYXNzZXRzL2ZvbnQvUG9wcGlucy1CbGFjay50dGZcIik7XHJcbiAgfVxyXG5cclxuICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBteWZvbjI7XHJcbiAgICBzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250L1BvcHBpbnMtTGlnaHQudHRmXCIpO1xyXG4gIH1cclxuICAuZm9ybS1zZWxlY3R7XHJcbiAgICBjb2xvcjogI0ZGNzkwMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjc5MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuICAuZm9ybS1zZWxlY3Q6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHg7XHJcbiAgICBmb250LWZhbWlseTogbXlmb24yO1xyXG4gICAgY29sb3I6ICNGRjc5MDA7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uQ29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzkwMDtcclxuICAgIGNvbG9yOiAjZmZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBteWZvbjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbkNvbG9yOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjc5MDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjRkY3OTAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG4vLyBTdHlsZSBhcHBsaXF1ZXIgYXUgdGFibGVhdVxyXG50ZCB7XHJcbiAgICBmb250LWZhbWlseTogbXlmb24yO1xyXG4gIH1cclxuXHJcbiAgdGgge1xyXG4gICAgZm9udC1mYW1pbHk6IG15Zm9uMjtcclxuICAgIGNvbG9yOiAjZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIHRoZWFkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjc5MDA7XHJcbiAgfVxyXG5cclxuICAudm9pclBsdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzkwMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgY29sb3I6ICNmZmZmO1xyXG4gIH1cclxuICBocntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRjc5MDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuXHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gICAgLmZvcm0tc2VsZWN0IHtcclxuICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbkNvbG9yIHtcclxuICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaGlkZUNvbG9ubmVPZGVyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICB9XHJcbiAgICAubGFyZ2VyQnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAuc3R5bGVUZXh0IHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgfVxyXG4gICAgLnRpdHJlU3RhdHVze1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLnRpdHJlRW50aXRlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5idXR0b25Db2xvciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICB9XHJcblxyXG4gICAgLmhpZGVDb2xvbm5lIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4iXX0= */";

/***/ }),

/***/ 6938:
/*!********************************************************************!*\
  !*** ./src/app/detailactivity/detailactivity.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Detail activités</ion-title>\r\n      <ion-button slot=\"end\" fill=\"clear\">\r\n        <app-cloche></app-cloche>\r\n\r\n      </ion-button>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n\r\n<ion-content>\r\n\r\n    <div class=\"row laLigne mx-3 my-3\">\r\n        <div class=\"col-lg-5 col-12 text-center\">\r\n            <img class=\"img mt-1\" src=\"{{image}}\" alt=\"\" id=\"image\">\r\n\r\n        </div>\r\n        <div class=\"col-lg-6 col-12 colonne\">\r\n            <div  class=\"item-native my-3\">\r\n                <ion-label class=\"titre m-3\">Créer par</ion-label>\r\n                <ion-label class=\"contenu\">{{nomCreateur}} {{prenomCreateur}}</ion-label>\r\n            </div>\r\n            <div class=\"item-native my-3\" >\r\n                <ion-label class=\"titre m-3\">Titre</ion-label>\r\n                <ion-label class=\"contenu ml-5\" slot=\"end\">{{nom}} </ion-label>\r\n            </div>\r\n            <div class=\"item-native my-3\">\r\n                <ion-label class=\"titre m-3\">Status</ion-label>\r\n                <ion-label class=\"contenu\">{{Status}}</ion-label>\r\n            </div>\r\n            <!-- <div class=\"item-native my-3\">\r\n                <ion-label class=\"titre m-3\">Durée</ion-label>\r\n                <ion-label class=\"contenu\">Awesome Label</ion-label>\r\n            </div> -->\r\n            <div class=\"item-native my-3\">\r\n                <ion-label class=\"titre m-3\">Lead</ion-label>\r\n                <ion-label class=\"contenu\">{{leadnom}}  {{leadprenom}}</ion-label>\r\n            </div>\r\n            <div class=\"item-native my-3\">\r\n                <ion-label class=\"titre m-3\">Salle</ion-label>\r\n                <ion-label *ngIf=\"salles!=null\" class=\"contenu\">{{salles}} </ion-label>\r\n                <button style=\"color:#FF7900\" type=\"button\" *ngIf=\"salles == null\" [routerLink]=\"['/dashboard/salle']\" > Associer une salle </button>\r\n              </div>\r\n            <div class=\"item-native my-3\">\r\n              <ion-label class=\"titre m-3\">Date début</ion-label>\r\n              <ion-label class=\"contenu\">{{dateDebut  | date: 'dd MMMM yyyy à hh:mm'}}</ion-label>\r\n          </div>\r\n          <div class=\"item-native my-3\">\r\n            <ion-label class=\"titre m-3\">Date Fin</ion-label>\r\n            <ion-label class=\"contenu\">{{dateFin | date: 'dd MMMM yyyy à hh:mm'}}</ion-label>\r\n        </div>\r\n        <div class=\"item-native my-3\">\r\n          <ion-label class=\"titre m-3\">Formateurs Internes</ion-label>\r\n          <ion-label class=\"contenu\" *ngFor=\"let form of formateursInter\">{{form.nom}} {{form.prenom}}</ion-label>\r\n      </div>\r\n\r\n      <div class=\"item-native my-3\">\r\n        <ion-label class=\"titre m-3\">Formateurs Externes</ion-label>\r\n        <ion-label class=\"contenu\" *ngFor=\"let form of formateursExter\">{{form.nom}} {{form.prenom}}</ion-label>\r\n    </div>\r\n        <div class=\"item-native my-3\">\r\n          <ion-label class=\"titre m-3\">Description</ion-label>\r\n          <ion-label class=\"contenu\">{{description}}</ion-label>\r\n      </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <div class=\"row container\">\r\n\r\n            <div class=\"col-lg-12 col-12\">\r\n              <div class=\"d-grid m-2 gap-2 d-md-flex\">\r\n                <button class=\"btn buttonColor largerButton\" type=\"button\" [routerLink]=\"['/dashboard/importer-participant',idact]\"> Importer  liste Participant</button>\r\n                <button class=\"btn buttonColor largerButton\" type=\"button\" (click)=\"exportToExcel()\"> Exporter liste</button>\r\n                <button class=\"btn buttonColor largerButton\" type=\"button\" [routerLink]=\"['/dashboard/ajoutparticipant',idact]\" >+ &nbsp; Ajouter participant</button>\r\n                <button class=\"btn buttonColor largerButton\" type=\"button\" [routerLink]=\"['/dashboard/tachedesignation',idact]\"> Tâche</button>\r\n                <button class=\"btn buttonColor largerButton\" type=\"button\"  (click)=\"succesImport()\"> Supprimer</button>\r\n                <!-- <button class=\"btn buttonColor largerButton\" type=\"button\"  [routerLink]=\"['/dashboard/editactivity',idact]\" > Editer</button> -->\r\n\r\n            </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n    <table class=\"table caption-top\" id=\"season-tble\" >\r\n      <caption>\r\n        <!-- <input type=\"number\" [(ngModel)]=\"nombreLingne\" /> -->\r\n\r\n        <!-- <button class=\"btn buttonColor largerButton\" type=\"submit\" (click)=\"envoyernombre()\">Afficher toute la liste</button> -->\r\n      </caption>\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <!-- <th scope=\"col\">Id</th> -->\r\n          <th scope=\"col\">Nom</th>\r\n          <th scope=\"col\">Prenom</th>\r\n          <th scope=\"col\">email</th>\r\n          <th scope=\"col\">Date de naissance</th>\r\n          <th scope=\"col\">Genre</th>\r\n          <th scope=\"col\">Numero</th>\r\n          <!-- <th scope=\"col\">Action</th> -->\r\n\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <!-- <tr>\r\n          <td>bonj</td>\r\n          <td>bonj</td>\r\n          <td>bonj</td>\r\n\r\n          <td>bonj</td>\r\n\r\n          <td>bonj</td>\r\n          <td><button (click)=\"successsuppost()\" style=\"background-color: #FF7900; border-radius: 5px;\" >  <i class=\"bi bi-trash\"></i></button></td>\r\n\r\n\r\n        </tr> -->\r\n\r\n        <tr *ngFor=\"let p of postulants  | paginate: {itemsPerPage:nombreLingne1, currentPage: pages} ; let i= index\">\r\n          <!-- <th scope=\"row\">{{p.postulant.id}}</th> -->\r\n          <td>{{p.postulant.nom}}</td>\r\n          <td>{{p.postulant.prenom}}</td>\r\n          <td>{{p.postulant.email}}</td>\r\n          <td>{{p.postulant.dateNaissance | date: 'dd/MM/YYYY'}}</td>\r\n          <td>{{p.postulant.genre}}</td>\r\n          <td>{{p.postulant.numero}}</td>\r\n          <!-- <td><button (click)=\"successsuppost()\" style=\"background-color: #FF7900; border-radius: 5px;\" >  <i class=\"bi bi-trash\"></i></button></td> -->\r\n        </tr>\r\n\r\n\r\n\r\n      </tbody>\r\n    </table>\r\n      <div class=\"position-relative\">\r\n        <div class=\"position-absolute top-0 end-0 mt-4\">\r\n          <pagination-controls previousLabel=\"Prev\" nextLabel=\"Next\"\r\n            (pageChange)=\" pages = $event\"> </pagination-controls>\r\n        </div>\r\n      </div>\r\n    <!-- <div class=\"liste\">\r\n\r\n        <ion-grid class=\"ion-margin text-center tailleTexte\">\r\n            <ion-row class=\"tableEntete \">\r\n                <ion-col>Nom</ion-col>\r\n                <ion-col>Prenom</ion-col>\r\n                <ion-col class=\"cacherCole\">Genre</ion-col>\r\n                <ion-col>Contact</ion-col>\r\n                <ion-col class=\"cacherCole\">Email</ion-col>\r\n                <ion-col>Presence</ion-col>\r\n            </ion-row>\r\n            <ion-row *ngFor=\"let student of students; index as i\">\r\n\r\n                <ion-col>{{ student.name }}</ion-col>\r\n                <ion-col>{{ student.prenom }}</ion-col>\r\n                <ion-col class=\"cacherCole\">{{ student.genre }}</ion-col>\r\n                <ion-col>{{student.contact}}</ion-col>\r\n                <ion-col class=\"cacherCole\">{{ student.email }}</ion-col>\r\n                <ion-col>\r\n                    <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\r\n                    <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n                </ion-col>\r\n\r\n            </ion-row>\r\n            <div class=\"position-relative\">\r\n                <div class=\"position-absolute top-0 end-0 mt-4\">\r\n                    <pagination-controls (pageChange)=\"a = $event\" nextLabel=\"Suivants\" previousLabel=\"Précédents\">\r\n\r\n                    </pagination-controls>\r\n                </div>\r\n            </div> -->\r\n            <!-- <div class=\"pagibottom\" style=\"margin-left: 200px;\"></div> -->\r\n        <!-- </ion-grid>\r\n    </div> -->\r\n    <!-- <div class=\"4\">\r\n        <button><a href=\"#\" class=\"btn btn-primary btn-sm\"\r\n                style=\"margin-top: 20px;background-color:#FF7900;\">Supprimer</a> </button>\r\n    </div> -->\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_detailactivity_detailactivity_module_ts.js.map