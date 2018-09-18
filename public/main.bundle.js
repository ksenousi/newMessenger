webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<flash-messages></flash-messages>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_chat_list_chat_list_component__ = __webpack_require__("../../../../../src/app/dashboard/chat-list/chat-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_chat_room_chat_room_component__ = __webpack_require__("../../../../../src/app/dashboard/chat-room/chat-room.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_chat_room_chat_bar_chat_bar_component__ = __webpack_require__("../../../../../src/app/dashboard/chat-room/chat-bar/chat-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_chat_room_message_message_component__ = __webpack_require__("../../../../../src/app/dashboard/chat-room/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_loggedIn_guard__ = __webpack_require__("../../../../../src/app/guards/loggedIn.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__contacts_search_contacts_search_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/search-contacts/search-contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__contacts_contact_requests_contact_requests_component__ = __webpack_require__("../../../../../src/app/contacts/contact-requests/contact-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ui_loading_spinner_loading_spinner_component__ = __webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_loggedIn_guard__["a" /* LoggedInGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_loggedIn_guard__["a" /* LoggedInGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_loggedIn_guard__["a" /* LoggedInGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_16__contacts_contacts_component__["a" /* ContactsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_chat_list_chat_list_component__["a" /* ChatListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_chat_room_chat_room_component__["a" /* ChatRoomComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_chat_room_chat_bar_chat_bar_component__["a" /* ChatBarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_chat_room_message_message_component__["a" /* MessageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__contacts_contacts_component__["a" /* ContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__contacts_search_contacts_search_contacts_component__["a" /* SearchContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__contacts_contact_requests_contact_requests_component__["a" /* ContactRequestsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__ui_loading_spinner_loading_spinner_component__["a" /* LoadingSpinnerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_18_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_20__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_loggedIn_guard__["a" /* LoggedInGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/contact-requests/contact-requests.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\n    border-radius: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contact-requests/contact-requests.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Contact requests</h3>\n      <table>\n        <tr *ngFor=\"let request of requests\">\n\n          <td> <p style=\"padding:1cm; font-size:12pt\">{{request.sender}}</p> </td>\n\n          <td>\n            <button \n              (click)=\"onAccept(request.sender)\"\n              class=\"btn btn-success\"\n            > Accept\n            </button>\n\n            <button \n              (click)=\"onReject(request.sender)\"\n              class=\"btn btn-danger\"\n            >Reject\n            </button>\n          </td>\n\n        </tr>\n      </table>"

/***/ }),

/***/ "../../../../../src/app/contacts/contact-requests/contact-requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactRequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactRequestsComponent = (function () {
    function ContactRequestsComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.requests = [];
    }
    ContactRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getContactRequests().subscribe(function (requests) {
            _this.requests = requests;
            console.log(_this.requests);
        });
    };
    ContactRequestsComponent.prototype.onAccept = function (contact) {
        var _this = this;
        this.authService.addContact(contact).subscribe(function (status) {
            if (status.success == false) {
                _this.flashMessage.show('Failed to add contact', { cssClass: 'alert-danger', timeout: 3000 });
            }
            var toDelete = new Set([contact]);
            _this.requests = _this.requests.filter(function (request) { return !toDelete.has(request.sender); });
        });
    };
    ContactRequestsComponent.prototype.onReject = function (contact) {
        var _this = this;
        this.authService.removeContactRequest(contact).subscribe(function (status) {
            if (status.success = false) {
                _this.flashMessage.show('Failed to remove request', { cssClass: 'alert-danger', timeout: 3000 });
            }
            var toDelete = new Set([contact]);
            _this.requests = _this.requests.filter(function (request) { return !toDelete.has(request.sender); });
        });
    };
    return ContactRequestsComponent;
}());
ContactRequestsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact-requests',
        template: __webpack_require__("../../../../../src/app/contacts/contact-requests/contact-requests.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contacts/contact-requests/contact-requests.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], ContactRequestsComponent);

var _a, _b;
//# sourceMappingURL=contact-requests.component.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <app-search-contacts></app-search-contacts>\n    </div>\n    <div class=\"col-md-4\">\n      <app-contact-requests></app-contact-requests>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contacts',
        template: __webpack_require__("../../../../../src/app/contacts/contacts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contacts/contacts.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactsComponent);

//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/search-contacts/search-contacts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#searchbar {\n    width:70%;\n    margin-bottom:20px;\n}\n\n#searchContactsHeader{\n    margin-bottom: 10px;\n}\n\n.btn {\n    float: right;\n    border-radius: 10px;\n    \n}\n\ninput {\n    border-radius: 10px;\n}\n\ntd {\n    padding-bottom: 7%;\n    padding: 20px;\n    \n}\n\ntable {\n    font-size: 12pt;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/search-contacts/search-contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 id=\"searchContactsHeader\">Search Contacts</h3>\n\n      <div id=\"searchbar\">\n        <form ng-submit=\"searchContact()\">\n\n          <div class=\"input-group\">\n            <input type=\"text\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"searchCriteria\"\n                    name=\"search-criteria\">\n            <span class=\"input-group-btn\">\n        <input type=\"submit\"\n              class=\"btn btn-primary\"\n              (click)=\"searchContact()\"\n              value=\"Search\"\n              [disabled] = \"messageInput === ''\"\n        >\n        </span>\n          </div>\n\n\n        </form>\n\n      </div>\n\n      <table>\n        <tr *ngFor=\"let result of results\">\n\n          <td style=\"padding-right:10%\"> <p>{{result.username}}</p> </td>\n\n          <td>\n            <button \n              *ngIf=\"result.type=='newUser'\"\n              (click)=\"addRequest(result)\" \n              class=\"btn btn-success\"\n            >Add to contacts\n            </button>\n\n            <button \n              *ngIf=\"result.type=='isContact'\"\n              (click)=\"removeContact(result)\" \n              class=\"btn btn-danger\"\n            >Remove from contacts\n            </button>\n\n            <button \n              *ngIf=\"result.type=='requestSent'\"\n              class=\"btn disabled\" \n            >Request Sent\n            </button>\n\n            <button \n            *ngIf=\"result.type=='requestReceived'\"\n            class=\"btn disabled\" \n          >Request Received\n          </button>\n\n          </td>\n\n        </tr>\n      </table>\n "

/***/ }),

/***/ "../../../../../src/app/contacts/search-contacts/search-contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchContactsComponent = (function () {
    function SearchContactsComponent(authService, flashMessage) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.results = [];
        this.contacts = [];
    }
    SearchContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.contacts = profile.user.contacts;
            _this.username = profile.user.username;
        });
    };
    SearchContactsComponent.prototype.searchContact = function () {
        var _this = this;
        this.results = [];
        this.authService.searchUsers(this.searchCriteria).subscribe(function (users) {
            if (users.error == 404) {
                _this.flashMessage.show('User not found', { cssClass: 'alert-danger', timeout: 3000 });
                return;
            }
            _this.results = users;
            console.log(JSON.stringify(users));
        });
    };
    SearchContactsComponent.prototype.addRequest = function (contact) {
        var _this = this;
        this.authService.addContactRequest(contact.username).subscribe(function (status) {
            if (status.success == true) {
                _this.flashMessage.show('Contact request has been sent', { cssClass: 'alert-success', timeout: 3000 });
                contact.type = 'requestSent';
            }
            else {
                _this.flashMessage.show('Failed to add contact', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    SearchContactsComponent.prototype.removeContact = function (contact) {
        var _this = this;
        this.authService.removeContact({ 'contact': contact.username }).subscribe(function (status) {
            if (status.success == true) {
                _this.flashMessage.show('Contact has been removed', { cssClass: 'alert-success', timeout: 3000 });
                contact.type = 'newUser';
            }
            else {
                _this.flashMessage.show('Failed to remove contact', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    SearchContactsComponent.prototype.isContact = function (contact) {
        return this.contacts.indexOf(contact) > -1;
    };
    return SearchContactsComponent;
}());
SearchContactsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-contacts',
        template: __webpack_require__("../../../../../src/app/contacts/search-contacts/search-contacts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contacts/search-contacts/search-contacts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], SearchContactsComponent);

var _a, _b;
//# sourceMappingURL=search-contacts.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/chat-list/chat-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#chatlist {\n  height: 80vh;\n  border: solid;\n  border-radius: 23px;\n  overflow: auto;\n  margin-bottom: 10px;\n}\n\n.badge {\n  background-color:#00b300;\n}\n\na {\n  cursor: pointer;\n}\n\n.active a{\n  background-color: rgb(78, 93, 108) !important;\n}\n\n@media (max-width: 767px) {\n  #chatlist {\n      height: 30vh;\n  } \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/chat-list/chat-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chatlist\">\n  <h3> &nbsp; Chat List</h3>\n  <ul class=\"nav nav-pills nav-stacked\">\n    <li *ngFor=\"let chatItem of chatlistData.chatlist\" [ngClass]=\" chatItem.chat == chatlistData.selectedChat  ? 'active' : ''\" >\n      <a (click)=\"onChatSelected(chatItem)\" >\n\n        {{chatItem.chat}} <span *ngIf=\"chatItem.badge != 0\" class=\"badge\">{{chatItem.badge}}</span>\n        \n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/chat-list/chat-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatListComponent = (function () {
    function ChatListComponent() {
        this.chatSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ChatListComponent.prototype.ngOnInit = function () {
    };
    ChatListComponent.prototype.onChatSelected = function (chatname) {
        this.chatSelected.emit(chatname);
    };
    return ChatListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('chatSelected'),
    __metadata("design:type", Object)
], ChatListComponent.prototype, "chatSelected", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChatListComponent.prototype, "chatlistData", void 0);
ChatListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat-list',
        template: __webpack_require__("../../../../../src/app/dashboard/chat-list/chat-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/chat-list/chat-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChatListComponent);

//# sourceMappingURL=chat-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/chat-room/chat-bar/chat-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#chatbar {\n  padding-top: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-bottom: 20px;\n}\n\n.btn {\n  border-radius:10px;\n}\n\ninput {\n  border-radius:5px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/chat-room/chat-bar/chat-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chatbar\">\n  <form ng-submit=\"sendMessage()\">\n\n    <div class=\"input-group\">\n      <input type=\"text\"\n             class=\"form-control\"\n             [(ngModel)]=\"messageInput\"\n              name=\"message\">\n      <span class=\"input-group-btn\">\n  <input type=\"submit\"\n         class=\"btn btn-primary\"\n         (click)=\"sendMessage()\"\n         value=\"Send\"\n         [disabled] = \"messageInput === ''\"\n  >\n  </span>\n    </div>\n\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/chat-room/chat-bar/chat-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatBarComponent = (function () {
    function ChatBarComponent() {
        this.messageEntered = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.messageInput = '';
    }
    ChatBarComponent.prototype.ngOnInit = function () {
    };
    ChatBarComponent.prototype.sendMessage = function () {
        this.messageEntered.emit({ content: this.messageInput,
            outgoing: true });
        this.messageInput = '';
    };
    return ChatBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('messageEntered'),
    __metadata("design:type", Object)
], ChatBarComponent.prototype, "messageEntered", void 0);
ChatBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat-bar',
        template: __webpack_require__("../../../../../src/app/dashboard/chat-room/chat-bar/chat-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/chat-room/chat-bar/chat-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChatBarComponent);

//# sourceMappingURL=chat-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/chat-room/chat-room.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#chatroom {\n  border: solid;\n  border-radius: 23px;\n}\n\n#chatBody {\n  overflow: auto;\n  height: 60vh;\n}\n\nhr {\n  border: none;\n  height: 1px;\n  /* Set the hr color */\n  color: white; /* old IE */\n  background-color:white; /* Modern Browsers */\n}\n\nh2 {\n  margin-left:20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/chat-room/chat-room.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"chatroom\" >\n<div id=\"chatHeader\">\n  <h2 >{{chatroomData.chatname}}</h2>\n  <hr>\n</div>\n\n<div id=\"chatBody\" #messageScroller > \n  <app-loading-spinner *ngIf=\"chatroomData.showSpinner\"></app-loading-spinner>\n  \n  <div id=\"messages\" *ngIf=\"!chatroomData.showSpinner\">\n    <app-message\n      *ngFor=\"let message of chatroomData.messages \"\n      [messageContent]=\"message\"\n    ></app-message>\n  </div>\n\n </div>\n</div>\n\n<app-chat-bar\n  (messageEntered)=\"onMessageEntered($event)\"\n></app-chat-bar>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/chat-room/chat-room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatRoomComponent = (function () {
    function ChatRoomComponent(chatService) {
        this.chatService = chatService;
    }
    ChatRoomComponent.prototype.ngOnInit = function () {
    };
    ChatRoomComponent.prototype.onMessageEntered = function (messageData) {
        this.chatroomData.messages.push(messageData);
        this.scrollToBottom();
        this.chatService.sendMessage({ messageData: messageData, 'chatname': this.chatroomData.chatname });
    };
    ChatRoomComponent.prototype.ngOnChanges = function (changes) {
        this.scrollToBottom();
        console.log('things changed');
    };
    ChatRoomComponent.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            try {
                _this.messageScroller.nativeElement.scrollTop = _this.messageScroller.nativeElement.scrollHeight;
            }
            catch (err) { }
        });
    };
    return ChatRoomComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('messageScroller'),
    __metadata("design:type", Object)
], ChatRoomComponent.prototype, "messageScroller", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ChatRoomComponent.prototype, "chatroomData", void 0);
ChatRoomComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat-room',
        template: __webpack_require__("../../../../../src/app/dashboard/chat-room/chat-room.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/chat-room/chat-room.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === "function" && _a || Object])
], ChatRoomComponent);

var _a;
//# sourceMappingURL=chat-room.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/chat-room/message/message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".outgoing {\n  background-color: cornflowerblue;\n  float: right;\n  clear: both;\n  border-radius:25px;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-right: 5px;\n  word-break: normal;\n}\n\n.incoming {\n  background-color: orangered;\n  float: left;\n  clear: both;\n  border-radius:25px;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-left: 5px;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/chat-room/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "  <p\n    [ngClass]=\"messageContent.outgoing  ? 'outgoing' : 'incoming'\"\n    \n  >\n  {{messageContent.content}}\n  </p>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/chat-room/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageComponent = (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    return MessageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MessageComponent.prototype, "messageContent", void 0);
MessageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-message',
        template: __webpack_require__("../../../../../src/app/dashboard/chat-room/message/message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/chat-room/message/message.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MessageComponent);

//# sourceMappingURL=message.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div id=\"chatlist\" class=\"col-md-2 col-sm-3\">\n      <app-chat-list\n        (chatSelected)=\"onChatSelected($event)\"\n        [chatlistData]=\"chatlistData\"\n      ></app-chat-list>\n    </div>\n    <div id=\"chatroom\" class=\"col-md-10 col-sm-9\">\n      <app-chat-room\n        [chatroomData]=\"chatroomData\"\n      ></app-chat-room>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(authService, chatService) {
        this.authService = authService;
        this.chatService = chatService;
        this.chatroomData = { chatname: '', messages: [], showSpinner: true };
        this.chatlistData = { chatlist: [{ chat: '', badge: 0 }], selectedChat: '' };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.chatlistData.chatlist = profile.user.contacts.map(function (chatItem) { return { chat: chatItem, badge: 0 }; });
            if (_this.chatlistData.chatlist.length > 0) {
                _this.onChatSelected(_this.chatlistData.chatlist[0]);
            }
            else {
                _this.chatroomData.showSpinner = false;
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        this.connection = this.chatService.getMessages().subscribe(function (incomingMessage) {
            var chatname = incomingMessage.chatname;
            var message = incomingMessage.messageData;
            if (chatname == _this.chatroomData.chatname) {
                _this.chatroomData.messages.push(message);
                _this.chatroomData = Object.assign({}, _this.chatroomData);
            }
            else {
                var index = _this.chatlistData.chatlist.findIndex(function (chatItem) { return chatItem.chat == chatname; });
                _this.chatlistData.chatlist[index].badge += 1;
            }
        });
    };
    DashboardComponent.prototype.onChatSelected = function (chatItem) {
        var _this = this;
        this.chatlistData.selectedChat = chatItem.chat;
        this.chatroomData.chatname = chatItem.chat;
        chatItem.badge = 0;
        this.chatroomData.showSpinner = true;
        if (typeof this.chatroomData.chatname != 'undefined') {
            this.authService.getChat(this.chatroomData.chatname).subscribe(function (chat) {
                _this.chatroomData.messages = chat.messages;
                _this.chatroomData.showSpinner = false;
                _this.chatroomData = Object.assign({}, _this.chatroomData);
            });
        }
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/loggedIn.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInGuard = (function () {
    function LoggedInGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function () {
        if (!this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    return LoggedInGuard;
}());
LoggedInGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoggedInGuard);

var _a, _b;
//# sourceMappingURL=loggedIn.guard.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn {\n  border-radius:5px;\n  margin: 5px;\n  margin-top: 50px;\n}\n\n.display-3 {\n  padding-top: 40px;\n  padding-bottom: 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-3 text-center\">New Messenger</h1>\n  <hr class=\"my-4\">\n  <p class=\"lead text-center\">\n    <a class=\"btn btn-success btn-lg\" routerLink=\"/login\" role=\"button\">Login</a>\n    <a class=\"btn btn-primary btn-lg\" routerLink=\"/register\" href=\"#\" role=\"button\">Register</a>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n    width:40%;\n    border-radius:10px;\n}\n\n.btn {\n    width:auto;\n}\n\nform {\n    margin-left: 2%;\n}\n\nh2 {\n    margin-left: 2%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  padding: 10px;\n}\na {\n  font-weight: bold;\n  font-size: small;\n}\n\n.navbar-brand {\n  font-size: large;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" routerLink=\"/\">New Messenger</a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li *ngIf=\"authService.loggedIn()\"  routerLinkActive=\"active\"><a routerLink=\"/dashboard\" href=\"#\">Dashboard</a></li>\n      <li *ngIf=\"!authService.loggedIn()\" routerLinkActive=\"active\"><a routerLink=\"/login\"    href=\"#\">Login</a></li>\n      <li *ngIf=\"!authService.loggedIn()\" routerLinkActive=\"active\"><a routerLink=\"/register\" href=\"#\">Register</a></li>\n      <li *ngIf=\"authService.loggedIn()\"  routerLinkActive=\"active\"><a routerLink=\"/contacts\" href=\"#\">Contacts</a></li>\n      <li *ngIf=\"authService.loggedIn()\"  routerLinkActive=\"active\"><a routerLink=\"/profile\" href=\"#\">Profile</a></li>\n      <li *ngIf=\"authService.loggedIn()\"  routerLinkActive=\"active\"><a (click)=\"onLogout()\" style=\"cursor:pointer\">Log out</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td {\n    font-size: 17pt;\n    padding-left: 30px;\n    padding-bottom: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\n  <tr>\n    <td>\n      Name:\n    </td>\n    <td>\n      {{user.name}}\n    </td>\n  </tr>\n  \n  <tr>\n    <td>\n      Username:\n    </td>\n    <td>\n      {{user.username}}\n    </td>\n  </tr>\n  \n  <tr>\n    <td>\n      Email:\n    </td>\n    <td>\n      {{user.email}}\n    </td>\n  </tr>\n  \n  <tr>\n    <td>\n      Contacts:\n    </td>\n    <td>\n      {{user.contacts}}\n    </td>\n  </tr>\n</table>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\n    width:40%;\n    border-radius:10px;\n}\n\n.btn {\n    width:auto;\n    \n}\n\nform {\n    margin-left: 2%;\n}\n\nh2 {\n    margin-left: 2%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getChat = function (chatname) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        headers.append('chatname', chatname);
        var ep = this.prepEndpoint('chats/getchat');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.searchUsers = function (searchCriteria) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        headers.append('searchcriteria', searchCriteria);
        var ep = this.prepEndpoint('users/search');
        var results = this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
        return results;
    };
    AuthService.prototype.addContact = function (contact) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('contacts/addcontact');
        return this.http.post(ep, { 'contact': contact }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.removeContact = function (contact) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('contacts/removecontact');
        return this.http.post(ep, contact, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getContactRequests = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('requests/getcontactrequests');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addContactRequest = function (contact) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('requests/addcontactrequest');
        return this.http.post(ep, { 'contact': contact }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.removeContactRequest = function (contact) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('requests/removecontactrequest');
        return this.http.post(ep, { 'contact': contact }, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return 'http://localhost:8080/' + ep;
        }
        else {
            return ep;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);


var ChatService = (function () {
    function ChatService() {
        this.isDev = true; // change to false before deployment
    }
    ChatService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', message);
    };
    ChatService.prototype.getMessages = function () {
        var _this = this;
        this.loadToken();
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"](function (observer) {
            if (_this.isDev) {
                _this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__('http://localhost:8080/', {
                    query: {
                        token: _this.authToken
                    }
                });
            }
            else {
                _this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__({
                    query: {
                        token: _this.authToken
                    }
                });
            }
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ChatService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    return ChatService;
}());

//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner {\n  margin: 100px auto;\n  width: 10vw;\n  height: 10vw;\n  max-height: 80px;\n  max-width: 80px;\n  position: relative;\n  text-align: center;\n  \n  -webkit-animation: sk-rotate 2.0s infinite linear;\n  animation: sk-rotate 2.0s infinite linear;\n}\n\n.dot1, .dot2 {\n  width: 60%;\n  height: 60%;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  background-color: white;\n  border-radius: 100%;\n  \n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out;\n}\n\n.dot2 {\n  top: auto;\n  bottom: 0;\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n@-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}\n@keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% { -webkit-transform: scale(0.0) }\n  50% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes sk-bounce {\n  0%, 100% { \n    transform: scale(0.0);\n    -webkit-transform: scale(0.0);\n  } 50% { \n    transform: scale(1.0);\n    -webkit-transform: scale(1.0);\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n    <div class=\"dot1\"></div>\n    <div class=\"dot2\"></div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingSpinnerComponent = (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    return LoadingSpinnerComponent;
}());
LoadingSpinnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loading-spinner',
        template: __webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoadingSpinnerComponent);

//# sourceMappingURL=loading-spinner.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map