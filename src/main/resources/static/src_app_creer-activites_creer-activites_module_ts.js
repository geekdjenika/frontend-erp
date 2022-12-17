"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_creer-activites_creer-activites_module_ts"],{

/***/ 4977:
/*!*******************************************************************!*\
  !*** ./src/app/creer-activites/creer-activites-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreerActivitesPageRoutingModule": () => (/* binding */ CreerActivitesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _creer_activites_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creer-activites.page */ 7280);




const routes = [
    {
        path: '',
        component: _creer_activites_page__WEBPACK_IMPORTED_MODULE_0__.CreerActivitesPage
    }
];
let CreerActivitesPageRoutingModule = class CreerActivitesPageRoutingModule {
};
CreerActivitesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreerActivitesPageRoutingModule);



/***/ }),

/***/ 9589:
/*!***********************************************************!*\
  !*** ./src/app/creer-activites/creer-activites.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreerActivitesPageModule": () => (/* binding */ CreerActivitesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _creer_activites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creer-activites-routing.module */ 4977);
/* harmony import */ var _creer_activites_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creer-activites.page */ 7280);







let CreerActivitesPageModule = class CreerActivitesPageModule {
};
CreerActivitesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _creer_activites_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreerActivitesPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule
        ],
        declarations: [_creer_activites_page__WEBPACK_IMPORTED_MODULE_1__.CreerActivitesPage]
    })
], CreerActivitesPageModule);



/***/ }),

/***/ 7280:
/*!*********************************************************!*\
  !*** ./src/app/creer-activites/creer-activites.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreerActivitesPage": () => (/* binding */ CreerActivitesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _creer_activites_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creer-activites.page.html?ngResource */ 436);
/* harmony import */ var _creer_activites_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creer-activites.page.scss?ngResource */ 8711);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_activite_activite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/activite/activite.service */ 3277);
/* harmony import */ var _services_entite_entite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/entite/entite.service */ 6738);
/* harmony import */ var _services_salles_salle_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/salles/salle-service.service */ 5778);
/* harmony import */ var _services_typeActivite_type_activite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/typeActivite/type-activite.service */ 8455);
/* harmony import */ var _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/utilisateur/utilisateur.service */ 4996);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ 598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);












let CreerActivitesPage = class CreerActivitesPage {
    constructor(router, salleService, userService, typeActiviteService, activiteService, http, entiteService) {
        this.router = router;
        this.salleService = salleService;
        this.userService = userService;
        this.typeActiviteService = typeActiviteService;
        this.activiteService = activiteService;
        this.http = http;
        this.entiteService = entiteService;
    }
    ngOnInit() {
        this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
        console.log("recuperation de l'utilisateur " + this.Utilisateur);
        this.salleService.getSalleDisponible(this.Utilisateur.login, this.Utilisateur.password).subscribe(r => {
            this.SallesDisponibles = r.data;
            console.log(this.SallesDisponibles);
        });
        this.typeActiviteService.getListe(this.Utilisateur.login, this.Utilisateur.password).subscribe(r => {
            console.log(r);
            if (r.message == 'ok') {
                this.TypesActivites = r.data;
                console.log(this.TypesActivites);
            }
        });
        this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
        this.entiteService.getAllEntites(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour => {
            this.Entites = retour.data;
            console.log(this.Entites);
        });
        this.userService.getActivesUsers(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour => {
            this.PersonnelsActives = retour.data;
            console.log(this.PersonnelsActives);
        });
        this.userService.getActivesUsers(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour => {
            this.utilisateurs = retour.data;
            console.log(this.utilisateurs);
        });
        this.entiteService.getAllEntites(this.Utilisateur.login, this.Utilisateur.password).subscribe(r => {
            if (r.message == 'ok') {
                this.Entites = r.data;
                console.log(this.Entites);
            }
        });
        this.activiteService.getpersonnelsexternes(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour => {
            this.externes = retour.data;
            console.log(this.externes);
        });
    }
    // async presentAlert() {
    //   Swal.fire({
    //     title:'Validé!!!',
    //     text:'Activité créée avec Succès!!',
    //     icon:'success',
    //     heightAuto: false,
    //     confirmButtonColor:"#FF7900"
    // }).then((result) => {
    //   if(result.isConfirmed){
    //     this.router.navigateByUrl('/dashboard/allactivity', {skipLocationChange: true}).then(() =>{
    //       this.router.navigate(["/allactivity"])
    //     })
    //   }
    //   }
    // }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    ajoutactivite() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
            title: "Activité créee avec Succès",
            showConfirmButton: true,
            confirmButtonText: "OK",
            confirmButtonColor: 'green',
            // showCancelButton: true,
            // cancelButtonText: "Annuler",
            // cancelButtonColor: 'red',
            heightAuto: false
        }).then((result) => {
            if (result.isConfirmed) {
                this.router.navigate(["/dashboard/allactivity"]);
                // this.router.navigateByUrl('/dashboard/allactivity', {skipLocationChange: true}).then(() => {
                //   this.router.navigate(["/allactivity"])
                // })
            }
        });
    }
    notpresent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire({
                title: 'Désolé!!!\nActivité non créée',
                text: 'Veuillez réessayer',
                icon: 'error',
                heightAuto: false,
                confirmButtonColor: "#FF7900"
            });
        });
    }
    CreerActivite() {
        this.alertNomTrue = false;
        this.alertNomFalse = false;
        var idSalle = null;
        var idType = null;
        var identity = null;
        var iduser = 0;
        var idintervenant = null;
        var FormateursUsers = [];
        var FormateursExters = [];
        console.log(this.FormateursExternes);
        console.log(this.FormateursInternes);
        try {
            for (let i = 0; i < this.FormateursInternes.length; i++) {
                try {
                    const array = this.FormateursInternes[i].split(" ");
                    for (let j = 0; j < this.PersonnelsActives.length; j++) {
                        if (this.PersonnelsActives[j].nom == array[0] && this.PersonnelsActives[j].prenom == array[1]) {
                            console.log(this.PersonnelsActives[j]);
                            FormateursUsers.push(this.PersonnelsActives[j]);
                        }
                    }
                }
                catch (error) {
                }
            }
        }
        catch (error) {
        }
        try {
            for (let i = 0; i < this.FormateursExternes.length; i++) {
                try {
                    const array = this.FormateursExternes[i].split(" ");
                    for (let j = 0; j < this.externes.length; j++) {
                        if (this.externes[j].nom == array[0] && this.externes[j].prenom == array[1]) {
                            console.log(this.externes[j]);
                            FormateursExters.push(this.externes[j]);
                        }
                    }
                }
                catch (error) {
                }
            }
        }
        catch (error) {
        }
        console.log(FormateursUsers);
        console.log(FormateursExters);
        //recuperation de l'id l'entite
        for (let i = 0; i < this.Entites.length; i++) {
            if (this.Entites[i].libelleentite == this.typeentite) {
                identity = this.Entites[i];
            }
        }
        //recuperation de l'id dela salle
        for (let i = 0; i < this.SallesDisponibles.length; i++) {
            if (this.SallesDisponibles[i].libelle == this.libellesalle) {
                idSalle = this.SallesDisponibles[i];
            }
        }
        //recuperation de l'id du type de l'activite
        for (let i = 0; i < this.TypesActivites.length; i++) {
            if (this.TypesActivites[i].libelle == this.typeactivite) {
                idType = this.TypesActivites[i];
            }
        }
        //recuperation de l'id des formateurs
        for (let i = 0; i < this.utilisateurs.length; i++) {
            if (this.utilisateurs[i].libelle == this.utilisateurs) {
                iduser = this.utilisateurs[i];
                console.log(iduser);
            }
        }
        //recuperation de l'id du lead
        for (let i = 0; i < this.PersonnelsActives.length; i++) {
            console.log(this.leadNomPrenom);
            try {
                const array = this.leadNomPrenom.split(" ");
                if (this.PersonnelsActives[i].nom == array[0] && this.PersonnelsActives[i].prenom == array[1]) {
                    this.lead = this.PersonnelsActives[i];
                }
            }
            catch (error) {
            }
        }
        //creation de l'activite il manque lentite concernée dans la bdd//affaire de salles dispo a ala creation de lactivite
        //fitrage par statut et entity ne fonctionne pas en bdd 3 get deja fait
        //pour une entite recuperer tout les activites en fonction de identite (page detail entite)
        //avant la suppression afficher un message por expliquer la suppression
        var activite = [{
                "nom": this.nomActivite,
                "dateDebut": this.datedebut,
                "dateFin": this.dateFin,
                "description": this.description,
                "leader": this.lead,
                "utilisateurs": FormateursUsers,
                "salle": idSalle,
                "typeActivite": idType,
                "intervenantExternes": FormateursExters
            }];
        if (this.typeentite == null || this.typeentite == "Choisisez une entité") {
            this.alertNomTrue = true;
            this.alertNomFalse = false;
            this.messageerror = "  Veuillez definir une entité !";
        }
        else if (this.nomActivite == null) {
            this.alertNomTrue = true;
            this.alertNomFalse = false;
            this.messageerror = "  Veuillez donner un titre a l'activité !";
        }
        else if (this.typeactivite == null || this.typeActivite == "Choisir le type de  l'activité !") {
            this.alertNomTrue = true;
            this.alertNomFalse = false;
            this.messageerror = "  Veuillez donner un type à l'activité !";
        }
        else if (this.leadNomPrenom == null || this.leadNomPrenom == "Choisir un lead *") {
            this.alertNomTrue = true;
            this.alertNomFalse = false;
            this.messageerror = "  Veuillez  definir un lead pour l'activité !";
        }
        else if (this.datedebut == null || this.dateFin == null) {
            this.alertNomTrue = true;
            this.alertNomFalse = false;
            this.messageerror = "  Vous devez fournir les dates de debut et de fin !";
        }
        else if (this.image == null) {
            this.alertNomTrue = true;
            this.alertNomFalse = false;
            this.messageerror = "  Veuillez ajoutez une image !";
        }
        else if (this.description == null) {
            this.alertNomTrue = true;
            this.alertNomFalse = false;
            this.messageerror = "  Veuillez donner une description à l'activité !";
        }
        else {
            this.activiteService.Creer(this.Utilisateur.login, this.Utilisateur.password, this.fichier, activite).subscribe(data => {
                console.log(data);
                if (data.message == 'ok') {
                    this.ajoutactivite();
                    // this.alertTrue = true
                    // this.alertFalse = false
                    //this.router.navigateByUrl('/dashboard/allactivity', {skipLocationChange: true}).then(() => {
                    //})
                    // ;
                    // setTimeout(()=>{
                    //   window.location.reload()
                    // },1000)
                    //this.navParams.get("parentPage").someFnToUpdateParent();
                }
                else {
                    this.alertNomTrue = true;
                    this.alertNomFalse = false;
                    this.messageerror = data.data;
                }
            });
        }
    }
    //fichier selection
    selectFile(e) {
        //verification si une photo a été choisie ou pas
        if (!e.target.files[0] || e.target.files[0].length == 0) {
            this.message = "Vous devez choisir un fichier execel !";
            this.erreur = true;
            return;
        }
        //verification du type de fichier choisi pour recaler si ce n'est pas une photo
        var typeFichier = e.target.files[0].type;
        if (e.target.files) {
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (event) => {
                this.message = "";
                //this.fichier=event.target.result;
                this.fichier = e.target['files'][0];
            };
        }
    }
};
CreerActivitesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _services_salles_salle_service_service__WEBPACK_IMPORTED_MODULE_4__.SalleServiceService },
    { type: _services_utilisateur_utilisateur_service__WEBPACK_IMPORTED_MODULE_6__.UtilisateurService },
    { type: _services_typeActivite_type_activite_service__WEBPACK_IMPORTED_MODULE_5__.TypeActiviteService },
    { type: _services_activite_activite_service__WEBPACK_IMPORTED_MODULE_2__.ActiviteService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: _services_entite_entite_service__WEBPACK_IMPORTED_MODULE_3__.EntiteService }
];
CreerActivitesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-creer-activites',
        template: _creer_activites_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_creer_activites_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreerActivitesPage);



/***/ }),

/***/ 8711:
/*!**********************************************************************!*\
  !*** ./src/app/creer-activites/creer-activites.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n\nion-content {\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\nh1 {\n  font-family: \"Poppins\", sans-serif;\n  margin: 2px;\n  font-size: 32px;\n  font-weight: bold;\n  text-align: center;\n  padding: 3px 6px;\n  position: absolute;\n  top: 7%;\n  background-color: #FFF;\n  color: #000;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.box {\n  width: 100%;\n  padding: 25px 30px;\n  border: #000 3px solid;\n  margin: 20px auto;\n}\n\n.container {\n  max-width: 700px;\n  width: 100%;\n  padding: 25px 30px;\n  border-radius: 15px;\n  background: #fff;\n  margin: auto;\n  height: auto !important;\n}\n\n#mere {\n  overflow-y: scroll;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\ninput {\n  color: #000;\n}\n\n.container form .activite-details {\n  color: #FF7900;\n  margin-top: 25px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\nform .activite-details .input-box {\n  margin-bottom: 15px;\n  width: calc(50% - 20px);\n}\n\n.select {\n  color: #000;\n  width: 100%;\n  padding: 3.25%;\n  margin-top: 1px;\n  align-items: center;\n  border-radius: 15px;\n}\n\n.activite-details .input-box .details {\n  display: block;\n  font-weight: 500;\n}\n\n#details {\n  border-radius: 15px;\n}\n\n.activite-details .input-box input {\n  outline: none;\n  height: 40px;\n  width: 100%;\n  border: 1px solid #ccc;\n  padding-left: 15px;\n  font-size: 16px;\n  border-bottom-width: 2px;\n  transition: all 0, 3s ease;\n}\n\n.activite-details .input-box input:focus,\n.activite-details .input-box input:valid {\n  border-color: #ccc;\n}\n\nform .button {\n  margin: 45px 0;\n  width: 100%;\n  display: flex;\n  justify-content: end;\n}\n\n.but {\n  border-radius: 15px;\n  padding: 8px;\n  background-color: #FF7900;\n  color: #FFF;\n  border: #FF7900 1px solid;\n}\n\n.but:hover {\n  background: #FFF;\n  color: #FF7900;\n}\n\nform .button .input {\n  height: 100%;\n  color: white;\n  border: none;\n  font-size: 18px;\n  font-weight: 500;\n  border-radius: 15px;\n  letter-spacing: 1px;\n}\n\nform .button input:hover {\n  background: linear-gradient(135deg);\n}\n\ntextarea {\n  color: #000;\n  padding: 5px !important;\n}\n\n@media (max-width: 584px) {\n  .container {\n    max-width: 100%;\n    height: 100%;\n    background: white;\n    padding: 5% 7%;\n  }\n  form .activite-details .input-box {\n    margin-bottom: 15px;\n    width: 100%;\n  }\n  .container form .activite-details {\n    overflow-y: scroll;\n  }\n  .activite-details::-webkit-scrollbar {\n    width: 0;\n  }\n  form .button {\n    padding: 5%;\n  }\n  .title {\n    margin-top: 5%;\n  }\n  input[type=submit] {\n    border-radius: 10px;\n    padding: 7px 10px;\n    background-color: #FF7900;\n    color: white;\n    margin-bottom: 3%;\n  }\n  input[type=reset] {\n    border-radius: 5px;\n    padding: 7px 10px;\n    background-color: #FF7900;\n    color: white;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWVyLWFjdGl2aXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUVBLHNCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUhKOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFLQTtFQUNFLGFBQUE7QUFGRjs7QUFNQTtFQUNJLFdBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUFISjs7QUFNQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFNQTtFQUNJLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7QUFKSjs7QUFVQTs7RUFFSSxrQkFBQTtBQVBKOztBQVVBO0VBRUksY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFSSjs7QUFXQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBUko7O0FBV0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFSSjs7QUFXQTtFQUNJLFlBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFZQTtFQUNJLG1DQUFBO0FBVEo7O0FBWUE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7QUFUSjs7QUFZQTtFQUNJO0lBQ0ksZUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUFUTjtFQVlFO0lBQ0ksbUJBQUE7SUFDQSxXQUFBO0VBVk47RUFhRTtJQUNJLGtCQUFBO0VBWE47RUFjRTtJQUNJLFFBQUE7RUFaTjtFQWVFO0lBQ0ksV0FBQTtFQWJOO0VBaUJFO0lBQ0ksY0FBQTtFQWZOO0VBa0JFO0lBQ0ksbUJBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VBaEJOO0VBb0JFO0lBQ0ksa0JBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUFsQk47QUFDRiIsImZpbGUiOiJjcmVlci1hY3Rpdml0ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogM3B4IDZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDI1cHggMzBweDtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXI6ICMwMDAgM3B4IHNvbGlkO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcblxyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4jbWVyZXtcclxuICBvdmVyZmxvdy15OnNjcm9sbDtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5pbnB1dCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciBmb3JtIC5hY3Rpdml0ZS1kZXRhaWxzIHtcclxuICAgIGNvbG9yOiAjRkY3OTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbmZvcm0gLmFjdGl2aXRlLWRldGFpbHMgLmlucHV0LWJveCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDIgLSAyMHB4KTtcclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMy4yNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLmFjdGl2aXRlLWRldGFpbHMgLmlucHV0LWJveCAuZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbiNkZXRhaWxzIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5hY3Rpdml0ZS1kZXRhaWxzIC5pbnB1dC1ib3ggaW5wdXQge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMCwgM3MgZWFzZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmFjdGl2aXRlLWRldGFpbHMgLmlucHV0LWJveCBpbnB1dDpmb2N1cyxcclxuLmFjdGl2aXRlLWRldGFpbHMgLmlucHV0LWJveCBpbnB1dDp2YWxpZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbmZvcm0gLmJ1dHRvbiB7XHJcbiAgICAvLyBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW46IDQ1cHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG59XHJcblxyXG4uYnV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXI6ICNGRjc5MDAgMXB4IHNvbGlkO1xyXG59XHJcblxyXG4uYnV0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBjb2xvcjogI0ZGNzkwMDtcclxufVxyXG5cclxuZm9ybSAuYnV0dG9uIC5pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyB3aWR0aDogNDUlO1xyXG4gICAgY29sb3I6ICNGRkZGO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5mb3JtIC5idXR0b24gaW5wdXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZyk7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzo1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU4NHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGO1xyXG4gICAgICAgIHBhZGRpbmc6IDUlIDclO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0gLmFjdGl2aXRlLWRldGFpbHMgLmlucHV0LWJveCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyIGZvcm0gLmFjdGl2aXRlLWRldGFpbHMge1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZpdGUtZGV0YWlsczo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0gLmJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogNSU7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNzkwMDtcclxuICAgICAgICBjb2xvcjogI0ZGRkY7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT1yZXNldF0ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3OTAwO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 436:
/*!**********************************************************************!*\
  !*** ./src/app/creer-activites/creer-activites.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Créer activité</ion-title>\r\n    <!-- <ion-button slot=\"end\" fill=\"clear\">\r\n      <app-cloche></app-cloche>\r\n\r\n    </ion-button> -->\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div class=\"container\" id=\"mere\">\r\n    <form (ngSubmit)=\"CreerActivite()\" autocomplete=\"off\" >\r\n\r\n      <div class=\"box\">\r\n        <h1>Nouvelle Activité</h1>\r\n\r\n        <!-- <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"alertFalse\">\r\n          <i class=\"fa fa-ban\" aria-hidden=\"true\" style=\"color: red;\"></i>  Erreur survenue l'or de la création de l'activité\r\n        </div> -->\r\n\r\n        <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"alertTrue\">\r\n          <i class=\"fa fa-check-circle-o\" aria-hidden=\"true\" style=\"color: green;\"></i>  Activité créée avec succès.\r\n\r\n        </div>\r\n\r\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"alertNomTrue\">\r\n          <i class=\"fa fa-ban\" aria-hidden=\"true\" style=\"color: red;\"></i>{{messageerror}}\r\n        </div>\r\n        <div class=\"activite-details\">\r\n          <div class=\"input-box mb-3\">\r\n            <span class=\"details\">Entité *</span>\r\n\r\n            <select name=\"typeentite\" [(ngModel)]=\"typeentite\" class=\"form-select\" required>\r\n              <option>Choisisez une entité</option>\r\n              <option *ngFor=\"let entite of Entites\">{{entite.libelleentite}}</option>\r\n              <!--pour recuperer l'id de lentite<option *ngFor=\"let entite of Entites\" >{{entite.id}}</option> -->\r\n\r\n            </select>\r\n          </div>\r\n\r\n\r\n          <div class=\"input-box mb-3\">\r\n            <Label for=\"inputs\" >Titre Activité *</Label>\r\n            <input type=\"text\" [(ngModel)]=\"nomActivite\"  id=\"inputs\" name=\"nomActivite\" placeholder=\"Nom de l'activité\" class=\"form-control\" autocomplete=\"off\"  required>\r\n          </div>\r\n\r\n          <div class=\"input-box mb-3\">\r\n            <Label for=\"inputs\" >Type d'activité *</Label>\r\n            <select name=\"typeactivite\" id=\"inputs\" [(ngModel)]=\"typeactivite\" class=\"form-select\" required>\r\n                <option>Choisir le type de  l'activité</option>\r\n              <option *ngFor=\"let type of TypesActivites\">{{type.libelle}}</option>\r\n            </select>\r\n          </div>\r\n\r\n\r\n          <div class=\"input-box mb-3\">\r\n            <span class=\"details\">Lead Activité *</span>\r\n            <select name=\"leadNomPrenom\" [(ngModel)]=\"leadNomPrenom\" class=\"form-select\" required>\r\n              <option>Choisir un lead *</option>\r\n              <option *ngFor=\"let user of PersonnelsActives\">{{user.nom}} {{user.prenom}}</option>\r\n\r\n            </select>\r\n          </div>\r\n\r\n          <!-- <div class=\"input-box mb-3\">\r\n            <span class=\"details\">Date debut *</span>\r\n            <input name=\"datedebut\" [(ngModel)]=\"datedebut\" type=\"datetime-local\" required />\r\n          </div> -->\r\n\r\n    <div class=\"input-box mb-3\">\r\n      <label for=\"inputs\" class=\"form-label\"> Date début *</label>\r\n      <input type=\"date\" id=\"inputs\" class=\"form-control\" name=\"datedebut\"  [(ngModel)]=\"datedebut\"  required>\r\n    </div>\r\n\r\n    <div class=\"input-box mb-3\">\r\n      <label for=\"inputs\" class=\"form-label\"> Date fin *</label>\r\n      <input type=\"date\" id=\"inputs\" class=\"form-control\" name=\"dateFin\"  [(ngModel)]=\"dateFin\"  required>\r\n    </div>\r\n\r\n\r\n\r\n          <!-- <div class=\"input-box mb-3\">\r\n\r\n            <span class=\"details\">Date fin *</span>\r\n            <input type=\"datetime-local\" name=\"dateFin\" [(ngModel)]=\"dateFin\" class=\"form-control\" required />\r\n          </div> -->\r\n\r\n\r\n\r\n          <!-- <div class=\"input-box\">\r\n                      <span class=\"details\">Formateurs </span>\r\n                      <select name=\"utilisateurs\" [(ngModel)]=\"utilisateurs\" class=\"select\" >\r\n                        <option selected>Choisir des formateurs</option>\r\n                      <option   *ngFor=\"let u of utilisateurs\">{{u.nom}}  {{u.prenom}}</option>\r\n\r\n                      </select>\r\n                  </div> -->\r\n          <div class=\"input-box\">\r\n            <span class=\"details\">Formateurs </span>\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-select placeholder=\"Selectionner les formateurs\" [multiple]=\"true\" [(ngModel)]=\"FormateursInternes\"  name=\"FormateursInternes\">\r\n                  <ion-select-option *ngFor=\"let u of utilisateurs\">{{u.nom}} {{u.prenom}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-list>\r\n\r\n          </div>\r\n\r\n          <div class=\"input-box\">\r\n            <span class=\"details\">Formateurs Externes</span>\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-select placeholder=\"Selectionner les formateurs\" [multiple]=\"true\" [(ngModel)]=\"FormateursExternes\" name=\"FormateursExternes\">\r\n                  <ion-select-option *ngFor=\"let u of externes\">{{u.nom}} {{u.prenom}}</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-list>\r\n\r\n          </div>\r\n\r\n\r\n          <!-- <div class=\"input-box\">\r\n            <span class=\"details\">Salle </span>\r\n            <select name=\"libellesalle\" [(ngModel)]=\"libellesalle\" class=\"select\">\r\n                <option>Choisir une salle</option>\r\n              <option *ngFor=\"let s of SallesDisponibles\">{{s.libelle}}</option>\r\n            </select>\r\n          </div> -->\r\n\r\n\r\n        <div class=\"input-box mb-3\">\r\n             <label for=\"inputs\" class=\"form-label\">\r\n              Salle\r\n             </label>\r\n            <select name=\"libellesalle\"  [(ngModel)]=\"libellesalle\"  class=\"form-select\" aria-label=\"Default select exemple\"  reqiuired>\r\n              <option>Choisir une salle *</option>\r\n              <option *ngFor=\"let s of SallesDisponibles\">{{s.libelle}}</option>\r\n           </select>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n          <div class=\"input-box\">\r\n            <Label >Ajouter image *</Label>\r\n            <input type=\"file\" [(ngModel)]=\"image\" placeholder=\"Logo.jpg\" id=\"logo\" name=\"file\" class=\"form-control\"\r\n              (change)=\"selectFile($event)\" accept=\"image/png, image/jpeg, image/jpg\" required />\r\n          </div>\r\n          <div class=\"input-box\">\r\n            <span > Description   *</span>\r\n            <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"description\" id=\"details\"\r\n              placeholder=\"Donner une description de l'activité\"></textarea>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"button\">\r\n        <input class=\"but\" type=\"submit\" value=\"Enregistrer\">\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_creer-activites_creer-activites_module_ts.js.map