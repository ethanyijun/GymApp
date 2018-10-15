(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/customer-list/customer-list.component.ts");
/* harmony import */ var _customer_item_customer_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-item/customer-item.component */ "./src/app/customer-item/customer-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'customers', component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomerListComponent"] },
    { path: 'detail/:id', component: _customer_item_customer_item_component__WEBPACK_IMPORTED_MODULE_5__["CustomerItemComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: flex;\n    font-family: Arial, Helvetica, sans-serif;\n    min-height: 100%;\n  }\n  nav {\n    display: flex;\n    flex-direction: column;\n    width: 68px;\n    background-color: #53ace4;\n  }\n  nav .icon {\n    width: 48px;\n    height: 48px;\n    margin: 10px;\n  }\n  section {\n    width: 100%;\n    background-color: #32435b;\n  }\n  section > header {\n    color: #ffffff;\n    padding: 10px;\n  }\n  section > header > h1 {\n    font-size: 2em;\n  }\n  section > header .description {\n    font-style: italic;\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <nav>\n    <a routerLink=\"register\">Register your first account</a>\n    <a routerLink=\"login\">  Sign in</a>\n  </nav> -->\n  <nav>\n    <a routerLink=\"/lose_weight\">\n      <img src=\"../assets/media/1.png\" class=\"icon\" />\n    </a>\n    <a routerLink=\"/gain_weight\">\n      <img src=\"../assets/media/2.png\" class=\"icon\" />\n    </a>\n    <a routerLink=\"/yoga\">\n      <img src=\"../assets/media/3.png\" class=\"icon\" />\n    </a>\n  </nav>\n  <!-- <section>\n    <header>\n      <h1>Customer Watch List</h1>\n      <p class=\"description\">Keeping track of the customer.</p>\n    </header>\n  </section> -->\n<app-menu-bar></app-menu-bar>\n\n<!-- \n<app-menu-bar></app-menu-bar>\n<router-outlet></router-outlet> -->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gym';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/customer-list/customer-list.component.ts");
/* harmony import */ var _join_member_form_join_member_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./join-member-form/join-member-form.component */ "./src/app/join-member-form/join-member-form.component.ts");
/* harmony import */ var _customer_item_customer_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./customer-item/customer-item.component */ "./src/app/customer-item/customer-item.component.ts");
/* harmony import */ var ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-semantic-ui */ "./node_modules/ng2-semantic-ui/dist/public.js");
/* harmony import */ var _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu-bar/menu-bar.component */ "./src/app/menu-bar/menu-bar.component.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./authenticate.service */ "./src/app/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_8__["CustomerListComponent"],
                _join_member_form_join_member_form_component__WEBPACK_IMPORTED_MODULE_9__["JoinMemberFormComponent"],
                _customer_item_customer_item_component__WEBPACK_IMPORTED_MODULE_10__["CustomerItemComponent"],
                _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_12__["MenuBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng2_semantic_ui__WEBPACK_IMPORTED_MODULE_11__["SuiModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_customer_service__WEBPACK_IMPORTED_MODULE_13__["CustomerService"], _authenticate_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticateService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authenticate.service.ts":
/*!*****************************************!*\
  !*** ./src/app/authenticate.service.ts ***!
  \*****************************************/
/*! exports provided: AuthenticateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateService", function() { return AuthenticateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticateService = /** @class */ (function () {
    function AuthenticateService(router, http) {
        this.router = router;
        this.http = http;
        this.storageKey = 'authenticate-jwt';
        this.loginUrl = '/login';
    }
    AuthenticateService.prototype.getAuthorizationOptions = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            })
        };
    };
    AuthenticateService.prototype.post = function (user) {
        console.log('posting');
        console.log(user);
        return this.http.post(this.loginUrl, user);
    };
    AuthenticateService.prototype.setToken = function (token) {
        localStorage.setItem(this.storageKey, token);
    };
    AuthenticateService.prototype.getToken = function () {
        //console.log('getting token');
        return localStorage.getItem(this.storageKey);
    };
    AuthenticateService.prototype.isLoggedIn = function () {
        return this.getToken() != null;
    };
    AuthenticateService.prototype.isLoggedOut = function () {
        return this.getToken() == null;
    };
    AuthenticateService.prototype.logOut = function () {
        localStorage.removeItem(this.storageKey);
        console.log(this.storageKey);
        this.router.navigate(['/login']);
    };
    AuthenticateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticateService);
    return AuthenticateService;
}());



/***/ }),

/***/ "./src/app/customer-item/customer-item.component.css":
/*!***********************************************************!*\
  !*** ./src/app/customer-item/customer-item.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer-item/customer-item.component.html":
/*!************************************************************!*\
  !*** ./src/app/customer-item/customer-item.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"ui container\">\n        <div *ngIf=\"customer\">\n            <h2> {{customer.firstName}} {{customer.lastName}} Details</h2>\n            <div>\n              <label>First name:\n                <input [(ngModel)]=\"customer.firstName\" placeholder=\"firstName\"/>\n              </label>\n            </div>\n            <div>\n                <label>Last name:\n                  <input [(ngModel)]=\"customer.lastName\" placeholder=\"lastName\"/>\n                </label>\n              </div>\n            <div>\n                <label>email:\n                  <input [(ngModel)]=\"customer.email\" placeholder=\"email\"/>\n                </label>\n            </div>\n\n            <button (click)=\"goBack()\">go back</button>\n            <button (click)=\"save()\">save</button>\n          </div>\n</div>\n      \n        "

/***/ }),

/***/ "./src/app/customer-item/customer-item.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/customer-item/customer-item.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomerItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerItemComponent", function() { return CustomerItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerItemComponent = /** @class */ (function () {
    function CustomerItemComponent(customers, route, location) {
        this.customers = customers;
        this.route = route;
        this.location = location;
        // @Output() deleted = new EventEmitter();
        this.columnClass = 'four wide column';
    }
    CustomerItemComponent.prototype.ngOnInit = function () {
        this.getCustomer();
    };
    CustomerItemComponent.prototype.getCustomer = function () {
        var _this = this;
        var id;
        this.route.params.subscribe(function (params) {
            id = params['id'];
            console.log(params['id']); //log the value of id
        });
        //  console.log("getting customer id: "+id);
        this.customers.getCustomer(id)
            .subscribe(function (customer) { return _this.customer = customer; });
    };
    CustomerItemComponent.prototype.goBack = function () {
        this.location.back();
    };
    CustomerItemComponent.prototype.save = function () {
        var _this = this;
        var id;
        this.route.params.subscribe(function (params) {
            id = params['id'];
            console.log(params['id']); //log the value of id
        });
        //console.log("customer to be updated: "+this.customer.firstName);
        this.customers.updateCustomer(this.customer, id)
            .subscribe(function () { return _this.goBack(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomerItemComponent.prototype, "customer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], CustomerItemComponent.prototype, "columnClass", void 0);
    CustomerItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./customer-item.component.html */ "./src/app/customer-item/customer-item.component.html"),
            styles: [__webpack_require__(/*! ./customer-item.component.css */ "./src/app/customer-item/customer-item.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], CustomerItemComponent);
    return CustomerItemComponent;
}());



/***/ }),

/***/ "./src/app/customer-list/customer-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/customer-list/customer-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 50px;\n}\n/* .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .customers {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .customers li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .customers li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .customers li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .customers .text {\n    position: relative;\n    top: -3px;\n  }\n  .customers .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  } */\n \n  "

/***/ }),

/***/ "./src/app/customer-list/customer-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/customer-list/customer-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui container\">\n    <div class=\"ui grid\">\n      <div *ngFor=\"let customer of customers\">         \n        <div class=\"ui cards\">\n          <div class=\"card\">\n            <div class=\"content\">\n                <div class=\"header\">\n                  {{customer.firstName}} {{customer.lastName}}\n                </div>\n                <div class=\"meta\">\n                  {{customer.firstName}} {{customer.lastName}}\n                </div>\n                <div class=\"description\">\n                  {{customer.email}}\n            </div>\n              <div class=\"extra content\" buttons>\n                <div class=\"ui three buttons\">\n                  <button class=\"ui basic green button\">Approve</button>\n                <a routerLink=\"/detail/{{customer._id}}\"><button class=\"ui basic blue button\">Modify</button></a>\n                  <button class=\"ui basic red button\" (click)=\"deleteCustomer(customer._id)\">Delete</button>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/customer-list/customer-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/customer-list/customer-list.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(customerService) {
        this.customerService = customerService;
    }
    CustomerListComponent.prototype.getCustomers = function () {
        var _this = this;
        console.log("getting customers!");
        this.customerService.getCustomers().subscribe(function (customers) { return _this.customers = customers; });
    };
    CustomerListComponent.prototype.ngOnInit = function () {
        this.getCustomers();
    };
    CustomerListComponent.prototype.deleteCustomer = function (id) {
        var _this = this;
        console.log("customer id: " + id);
        // this.customerService.deleteCustomer(id).subscribe();
        this.customerService.deleteCustomer(id).subscribe(function (data) {
            console.log("esdf");
            _this.getCustomers();
        });
        console.log("blabla");
    };
    CustomerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-list',
            template: __webpack_require__(/*! ./customer-list.component.html */ "./src/app/customer-list/customer-list.component.html"),
            styles: [__webpack_require__(/*! ./customer-list.component.css */ "./src/app/customer-list/customer-list.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/customer.service.ts":
/*!*************************************!*\
  !*** ./src/app/customer.service.ts ***!
  \*************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authenticate.service */ "./src/app/authenticate.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import 'rxjs/add/operator/map';import { catchError, map, tap } from 'rxjs/operators';
// import { Http, Response } from '@angular/http';
var CustomerService = /** @class */ (function () {
    function CustomerService(http, authenticate, messageService) {
        this.http = http;
        this.authenticate = authenticate;
        this.messageService = messageService;
        this.url = 'http://localhost:4200/customers';
        this.registerUrl = '/register';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    CustomerService.prototype.getCustomers = function () {
        return this.http.get(this.url, this.authenticate.getAuthorizationOptions());
    };
    CustomerService.prototype.postCustomers = function (customer) {
        return this.http.post(this.registerUrl, customer, this.httpOptions);
    };
    CustomerService.prototype.deleteCustomer = function (id) {
        var url = this.url + "/" + id; // DELETE api/heroes/42
        console.log(url);
        return this.http.delete(url, this.httpOptions);
        // .pipe(
        //   catchError(this.handleError('deleteHero'))
        // );
    };
    CustomerService.prototype.getCustomer = function (id) {
        var _this = this;
        var url = this.url + "/" + id;
        console.log("getting: " + url);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return _this.log("fetched customer id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("getCustomer id=" + id)));
    };
    CustomerService.prototype.updateCustomer = function (customer, id) {
        var _this = this;
        var url = this.url + "/" + id;
        console.log("======" + url);
        return this.http.put(url, customer, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_) { return _this.log("updated Customer"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('updateCustomer')));
    };
    CustomerService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    CustomerService.prototype.log = function (message) {
        this.messageService.add("HeroService: " + message);
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _authenticate_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"],
            _message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/join-member-form/join-member-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/join-member-form/join-member-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/join-member-form/join-member-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/join-member-form/join-member-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"join-container\">\n  <Form>\n    <div class=\"field\">\n      <label>First Name</label>\n      <input type=\"text\" name=\"firstName\" placeholder=\"First Name\" ngModel>\n    </div>\n    <div class=\"field\">\n      <label>Last Name</label>\n      <input type=\"text\" name=\"lastName\" placeholder=\"Last Name\" ngModel>\n    </div>\n    <div class=\"field\">\n      <label>Phone</label>\n      <input type=\"text\" name=\"Phone\" placeholder=\"Phone\" ngModel>\n    </div>\n    <div class=\"field\">\n      <label>Email</label>\n      <input type=\"text\" name=\"email\" placeholder=\"Email\" ngModel>\n    </div>\n    <div class=\"field\">\n      <label>Address</label>\n      <input type=\"text\" name=\"address\" placeholder=\"Address\" ngModel>\n    </div>\n    <div class=\"field\">\n      <label>Date of Birth</label>\n      <input type=\"text\" name=\"dob\" placeholder=\"DOB\" ngModel>\n    </div>\n\n    <button type=\"submit\" class=\"btn-success\">Regster</button>\n    \n  </Form>\n</div>"

/***/ }),

/***/ "./src/app/join-member-form/join-member-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/join-member-form/join-member-form.component.ts ***!
  \****************************************************************/
/*! exports provided: JoinMemberFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinMemberFormComponent", function() { return JoinMemberFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JoinMemberFormComponent = /** @class */ (function () {
    function JoinMemberFormComponent() {
    }
    JoinMemberFormComponent.prototype.ngOnInit = function () {
    };
    JoinMemberFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-join-member-form',
            template: __webpack_require__(/*! ./join-member-form.component.html */ "./src/app/join-member-form/join-member-form.component.html"),
            styles: [__webpack_require__(/*! ./join-member-form.component.css */ "./src/app/join-member-form/join-member-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JoinMemberFormComponent);
    return JoinMemberFormComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n    max-width: 500px;\n    margin: 50px auto;\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <form class=\"ui big form\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit(loginForm)\">\n    <div class=\"field\">\n    <label>Username</label>\n    <input type=\"text\" name=\"username\" placeholder=\"Enter your username\" ngModel>\n  </div>\n  <div class=\"field\">\n    <label>Password</label>\n    <input type=\"password\" name=\"password\" placeholder=\"Enter your password\" ngModel>\n  </div>\n  \n  <button type=\"submit\" class=\"ui primary button float right floated\">Login</button>\n  </form>\n  </div>\n  "

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authenticate.service */ "./src/app/authenticate.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticate, router) {
        this.authenticate = authenticate;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var input = form.value;
        console.log(input);
        var payload = {
            username: input.username,
            password: input.password
        };
        console.log('onSubmit');
        this.authenticate.post(payload)
            .subscribe(function (data) {
            console.log('subscribing');
            console.log(data);
            _this.authenticate.setToken(data.token);
            console.log(data.token);
            _this.router.navigate(['/customers']);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu-bar/menu-bar.component.css":
/*!*************************************************!*\
  !*** ./src/app/menu-bar/menu-bar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu-bar/menu-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/menu-bar/menu-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui menu header\">\n  <div class=\"ui container\">\n\n        <div class=\"item\">\n            <a routerLink=\"../customers\" aria-label=\"Customer Dashboard\">\n              <i class=\"icon users large blue\" aria-hidden=\"true\"></i>\n            </a>\n          </div>\n            <div class=\"header item\">\n              <h1>Customer Dashboard</h1>\n            </div>\n            <div class=\"item\" *ngIf=\"authenticate.isLoggedOut()\">\n              <a routerLink=\"../register\">\n              <button class=\"ui basic button\">\n                <i class=\"add user icon\" aria-hideen=\"true\">\n                  Sign Up\n                </i>\n              </button>\n              </a>\n              <!-- <div class=\"item\"> -->\n                <a routerLink=\"../login\">\n                <button class=\"ui basic button\">\n                  <i class=\"add user icon\" aria-hideen=\"true\">\n                    Sign In\n                  </i>\n                </button>\n                </a>\n            <!-- </div> -->\n          </div>\n          <div class=\"right menu\" *ngIf=\"authenticate.isLoggedIn()\">\n            <button class=\"ui primary button logout\" (click)=\"logout()\">logout</button>\n          </div>\n  \n\n  </div>\n\n   \n</div>\n\n<div class=\"ui container\">\n    <router-outlet></router-outlet> \n</div>\n\n"

/***/ }),

/***/ "./src/app/menu-bar/menu-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/menu-bar/menu-bar.component.ts ***!
  \************************************************/
/*! exports provided: MenuBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBarComponent", function() { return MenuBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authenticate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authenticate.service */ "./src/app/authenticate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuBarComponent = /** @class */ (function () {
    function MenuBarComponent(authenticate) {
        this.authenticate = authenticate;
    }
    MenuBarComponent.prototype.ngOnInit = function () {
    };
    MenuBarComponent.prototype.logout = function () {
        this.authenticate.logOut();
    };
    MenuBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-bar',
            template: __webpack_require__(/*! ./menu-bar.component.html */ "./src/app/menu-bar/menu-bar.component.html"),
            styles: [__webpack_require__(/*! ./menu-bar.component.css */ "./src/app/menu-bar/menu-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_authenticate_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticateService"]])
    ], MenuBarComponent);
    return MenuBarComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-container {\n    max-width: 500px;\n    margin: 50px auto;\n  }"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-container\">\n  <form name=\"registerForm\" class=\"ui big form\" #registerForm=\"ngForm\" (ngSubmit)=\"onSubmit(registerForm)\">\n    <div class=\"field\">\n      <label>First Name</label>\n      <input type=\"text\" name=\"firstName\" placeholder=\"First Name\" ngModel>\n    </div>\n    <div class=\"field\">\n      <label>Last Name</label>\n      <input type=\"text\" name=\"lastName\" placeholder=\"Last Name\" ngModel>\n    </div>\n    <div class=\"field\">\n      <label>Phone</label>\n      <input type=\"text\" name=\"phone\" placeholder=\"Phone\" ngModel>\n    </div>\n    <div class=\"field\">\n      <label>Email</label>\n      <input type=\"text\" name=\"email\" placeholder=\"Email\" ngModel email>\n      \n    </div>\n    <div class=\"inline fields\">\n        <label>Interested training plan:</label>\n          <input type=\"radio\" required name=\"type\" value=\"A\" ngModel> A-Slim<br>\n          <input type=\"radio\" required name=\"type\" value=\"B\" ngModel> B-Muscle<br>\n          <input type=\"radio\" required name=\"type\" value=\"C\" ngModel> C-Fitness<br>\n    </div>\n    <button type=\"submit\" class=\"ui primary button float right floated\">Register</button>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    // customers: Customer[];
    function RegisterComponent(customerService) {
        this.customerService = customerService;
        this.loading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.loading = true;
        var formInput = Object.assign({}, form.value);
        var customer = {
            firstName: formInput.firstName,
            lastName: formInput.lastName,
            phone: formInput.phone,
            email: formInput.email
        };
        this.customerService.postCustomers(customer)
            .subscribe(function (data) {
            console.log('posting new data');
            form.reset();
            _this.newCustomer = data;
            console.log('new data posted');
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    url: '/gym'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yijungai/Desktop/newAIP/AIP/NewAIP/aip/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map