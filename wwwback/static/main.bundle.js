webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_page_register_page_component__ = __webpack_require__("./src/app/register-page/register-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__new_post_new_post_component__ = __webpack_require__("./src/app/new-post/new-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__show_post_show_post_component__ = __webpack_require__("./src/app/show-post/show-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__register_page_register_page_component__["a" /* RegisterPageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__new_post_new_post_component__["a" /* NewPostComponent */],
                __WEBPACK_IMPORTED_MODULE_13__show_post_show_post_component__["a" /* ShowPostComponent */],
                __WEBPACK_IMPORTED_MODULE_14__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatButtonModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_http_service__["a" /* HttpService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_page_register_page_component__ = __webpack_require__("./src/app/register-page/register-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_post_new_post_component__ = __webpack_require__("./src/app/new-post/new-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__show_post_show_post_component__ = __webpack_require__("./src/app/show-post/show-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");






var APP_ROUTES = [
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__register_page_register_page_component__["a" /* RegisterPageComponent */] },
    { path: 'profile/:username', component: __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'new_post', component: __WEBPACK_IMPORTED_MODULE_3__new_post_new_post_component__["a" /* NewPostComponent */] },
    { path: 'show_post/:username', component: __WEBPACK_IMPORTED_MODULE_4__show_post_show_post_component__["a" /* ShowPostComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".back-color {\n  background-color: #9ce1ff;\n  padding: 20px 50px;\n}\n\n.full-width {\n  max-width: 100%;\n  width: 100%;\n}\n\n.top-div {\n  margin-top: 50px;\n  margin-bottom: 20px;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\" class=\"top-div\">\n  <div fxFlex=\"30%\" fxFlexOffset=\"35%\" style=\"text-align: center; font-size: 1.6em\">\nبه صفحه ورود خوش آمدید\n  </div>\n</div>\n<form (ngSubmit)=\"submit()\" [formGroup]=\"login\">\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\">\n    <div fxFlex=\"40%\" fxFlexOffset=\"30%\" class=\"back-color\">\n      <mat-form-field class=\"full-width\" style=\"text-align: center\" [floatLabel]=\"'never'\">\n        <input matInput placeholder=\"نام کاربری\" formControlName=\"username\">\n        <mat-error *ngIf=\"login.controls['username'].hasError('required')\">نام کاربری الزامیست</mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\">\n    <div fxFlex=\"40%\" fxFlexOffset=\"30%\" class=\"back-color\">\n      <mat-form-field class=\"full-width\" style=\"text-align: center\" [floatLabel]=\"'never'\">\n        <input type=\"password\" matInput placeholder=\"رمز عبور\" formControlName=\"password\">\n        <mat-error *ngIf=\"login.controls['password'].hasError('error')\">گذر واژه باید حداقل 8 کاراکتر و شامل یک\n          کاراکتر ویژه، یک عدد و یک حرف باشد\n        </mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\">\n    <div fxFlex=\"40%\" fxFlexOffset=\"30%\" class=\"back-color\">\n      <button type=\"submit\" mat-button [disabled]=\"!login.valid\">ورود</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function LoginComponent(httpService, snackBar, router) {
        this.httpService = httpService;
        this.snackBar = snackBar;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    LoginComponent.prototype.initForm = function () {
        this.login = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]().group({
            username: [null, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required
                ]],
            password: [null, [
                    this.passwordValidator
                ]]
        });
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        var data = {
            username: this.login.controls['username'].value,
            password: this.login.controls['password'].value
        };
        this.httpService.post('login', data).subscribe(function (data) {
        }, function (err) {
            if (err.status == 200) {
                console.log("login successfully!");
                _this.router.navigate(["profile/" + data.username]);
            }
            else {
                _this.snackBar.open("اطلاعات نامعتبر است", null, { duration: 2000 });
            }
        });
    };
    LoginComponent.prototype.passwordValidator = function (input) {
        var v = input.value;
        var error = {
            error: true
        };
        if (!v) {
            return error;
        }
        var validChar = false, validNum = false, validSpc = false;
        for (var i = 0; i < v.length; i++) {
            var asc = v[i].charCodeAt(0);
            if (asc >= 97 && asc <= 122)
                validChar = true;
            if (asc >= 65 && asc <= 90)
                validChar = true;
            if (asc >= 48 && asc <= 57)
                validNum = true;
            if (asc < 48 || (asc > 57 && asc < 65) || (asc > 90 && asc < 97) || asc > 122)
                validSpc = true;
        }
        if (validChar && validNum && validSpc && v.length >= 8)
            return null;
        return error;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/new-post/new-post.component.css":
/***/ (function(module, exports) {

module.exports = ".back-color {\n  background-color: #9ce1ff;\n  padding: 20px 50px;\n}\n\n.full-width {\n  max-width: 100%;\n  width: 100%;\n}\n\n.top-div {\n  margin-top: 50px;\n  margin-bottom: 20px;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/new-post/new-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\" class=\"top-div\">\n  <div fxFlex=\"30%\" fxFlexOffset=\"35%\" style=\"text-align: center; font-size: 1.6em\">\nافزودن پست جدید\n  </div>\n</div>\n<form (ngSubmit)=\"submit()\" [formGroup]=\"postForm\">\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\">\n    <div fxFlex=\"40%\" fxFlexOffset=\"30%\" class=\"back-color\">\n      <mat-form-field class=\"full-width\" style=\"text-align: center\" [floatLabel]=\"'never'\">\n        <textarea matInput placeholder=\"متن پست\" formControlName=\"post\"></textarea>\n        <mat-error *ngIf=\"postForm.controls['post'].hasError('required')\">نوشتن متن الزامیست</mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\">\n    <div fxFlex=\"40%\" fxFlexOffset=\"30%\" class=\"back-color\">\n      <button type=\"submit\" mat-button [disabled]=\"!postForm.valid\">ثبت اطلاعات</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/new-post/new-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewPostComponent = (function () {
    function NewPostComponent(httpService, snackBar) {
        this.httpService = httpService;
        this.snackBar = snackBar;
    }
    NewPostComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    NewPostComponent.prototype.initForm = function () {
        this.postForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */]().group({
            post: [null, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required
                ]]
        });
    };
    NewPostComponent.prototype.submit = function () {
        var _this = this;
        var data = {
            text: this.postForm.controls['post'].value
        };
        this.httpService.post('new_post', data).subscribe(function (data) {
        }, function (err) {
            if (err.status == 200) {
                _this.snackBar.open("پست با موفقیت اضافه شد", null, { duration: 2000 });
            }
            else {
                _this.snackBar.open("متاسفانه پست ثبت نشد", null, { duration: 2000 });
            }
        });
    };
    NewPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-post',
            template: __webpack_require__("./src/app/new-post/new-post.component.html"),
            styles: [__webpack_require__("./src/app/new-post/new-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatSnackBar */]])
    ], NewPostComponent);
    return NewPostComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".card-view {\n  margin: 10px;\n  -webkit-box-shadow: 10px 10px 80px grey;\n          box-shadow: 10px 10px 80px grey;\n  border: 1px solid gray;\n}\n\n.profile-item {\n  text-align: center;\n}\n\n.profile-picture {\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  padding: 3px;\n  border-radius: 100%;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  margin: 20px 0 25px 0;\n  width: 160px;\n  height: 160px;\n  overflow: hidden;\n}\n\n.profile-picture img {\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n}\n\n.profile-name {\n  /*padding-top: 20px;*/\n  font-size: 2em !important;\n  font-weight: bold !important;\n  /*text-transform: capitalize;*/\n  /*margin-bottom: 40px;*/\n}\n\nmat-card {\n  margin: 10px 0;\n  width: 100%;\n  max-width: 100%;\n}\n\n.header-image {\n  /*background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');*/\n  width: 100px;\n  height: 100px;\n  background-size: cover;\n  margin: 10px 20px 5px 20%;\n}\n\n.header-image img {\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n}\n\n.sub-image {\n  width: 50px;\n  height: 50px;\n  background-size: cover;\n  margin: 10px 20px 10px 10px;\n}\n\n.sub-image img {\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n}\n\n.right-texts {\n  margin: 20px;\n}\n\n.sub-right-texts {\n  margin: 30px 20px 5px -20px;\n}\n\n.texts {\n  font-size: 1em;\n}\n\n.sub-texts {\n  font-size: 0.8em;\n}\n\n.main-post-text {\n  font-size: 1.2em;\n  direction: rtl;\n  text-align: right;\n  padding: 5px;\n}\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\" class=\"top-div\">\n  <div fxFlex=\"40%\" fxFlexOffset=\"30%\" style=\"text-align: center; font-size: 1.6em\">\n    اطلاعات کاربری شما\n  </div>\n</div>\n<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\">\n  <div fxFlex=\"40%\" fxFlexOffset=\"30%\" class=\"back-color\">\n    <mat-card>\n      <mat-card-header>\n        <div mat-card-avatar class=\"header-image\">\n          <img src=\"{{tempImageUrl}}\" alt=\"\">\n        </div>\n        <div class=\"right-texts\">\n          <mat-card-title class=\"texts\">@{{profile?.username}}</mat-card-title>\n          <mat-card-subtitle class=\"texts\">{{profile?.email}}</mat-card-subtitle>\n          <mat-card-subtitle class=\"texts\">{{profile?.field}}</mat-card-subtitle>\n        </div>\n      </mat-card-header>\n    </mat-card>\n    <mat-card *ngFor=\"let post of profile?.posts\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"sub-image\">\n          <img src=\"{{tempImageUrl}}\" alt=\"\">\n        </div>\n        <div class=\"sub-right-texts\">\n          <mat-card-title class=\"sub-texts\">@{{profile?.username}}</mat-card-title>\n        </div>\n      </mat-card-header>\n      <mat-card-content>\n        <p class=\"main-post-text\">\n          {{post.text}}\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button>{{post.likes}} Likes</button>\n        <button mat-button>{{post.dislikes}} Dislikes</button>\n        <button mat-button>{{post.comments}} Comments</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function ProfileComponent(httpService, route) {
        this.httpService = httpService;
        this.route = route;
        this.profile = {
            avatar: 'data:image/jpeg;base64,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',
            username: '',
            email: '',
            field: '',
            posts: []
        };
        this.tempImageUrl = 'data:image/jpeg;base64,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';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.username = params['username'] ? params['username'] : null;
            _this.httpService.get("profile/" + _this.username).subscribe(function (data) {
                data = data[0];
                // console.log(data);
                if (data['posts']) {
                    data['posts'].forEach(function (e, i) {
                        data['posts'][i]['text'] = data['posts'][i]['text'].substring(0, 30) + (data['posts'][i]['text'].length >= 30 ? '...' : '');
                    });
                }
                _this.profile = data;
                console.log("this profile", _this.profile);
            }, function (data) {
                // let posts = [
                //   {
                //     text: 'این اولین متن ما است.',
                //     likes: 3,
                //     dislikes: 2,
                //     comments: 1,
                //   }, {
                //     text: 'این دومین متن ما است و اندکی این طولانی تر است اما تقریبا شبیه به همان است :دی'.substring(0, 30) + '...',
                //     likes: 10,
                //     dislikes: 11,
                //     comments: 20,
                //   }
                // ];
                // this.profile = {
                //   avatar: 'data:image/jpeg;base64,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',
                //   username: "Iman",
                //   email: "iman@ut.ac.ir",
                //   field: 'CE',
                //   posts: posts
                // }
                // this.username = "iman";
                if (data['posts']) {
                    data['posts'].forEach(function (e, i) {
                        data['posts'][i]['text'] = data['posts'][i]['text'].substring(0, 30) + (data['posts'][i]['text'].length >= 30 ? '...' : '');
                    });
                }
                _this.profile = data;
            });
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register-page/register-page.component.css":
/***/ (function(module, exports) {

module.exports = ".back-color {\n  background-color: #9ce1ff;\n  padding: 20px 50px;\n}\n\n.full-width {\n  max-width: 100%;\n  width: 100%;\n}\n\n.top-div {\n  margin-top: 50px;\n  margin-bottom: 20px;\n  font-weight: bold;\n}\n"

/***/ }),

/***/ "./src/app/register-page/register-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\" class=\"top-div\">\n  <div fxFlex=\"30%\" fxFlexOffset=\"35%\" style=\"text-align: center; font-size: 1.6em\">\n    به صفحه ثبت نام خوش آمدید\n  </div>\n</div>\n<form (ngSubmit)=\"submit()\" [formGroup]=\"register\">\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\">\n    <div fxFlex=\"40%\" fxFlexOffset=\"30%\" class=\"back-color\">\n      <mat-form-field class=\"full-width\" style=\"text-align: center\" [floatLabel]=\"'never'\">\n        <input matInput placeholder=\"نام کاربری\" formControlName=\"username\">\n        <mat-error *ngIf=\"register.controls['username'].hasError('required')\">نام کاربری الزامیست</mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\">\n    <div fxFlex=\"40%\" fxFlexOffset=\"30%\" class=\"back-color\">\n      <mat-form-field class=\"full-width\" style=\"text-align: center\" [floatLabel]=\"'never'\">\n        <input matInput placeholder=\"ایمیل\" formControlName=\"email\">\n        <mat-error\n          *ngIf=\"register.controls['email'].hasError('email') || register.controls['email'].hasError('notUTAC')\">ایمیل\n          معتبر نیست\n        </mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\">\n    <div fxFlex=\"40%\" fxFlexOffset=\"30%\" class=\"back-color\">\n      <mat-form-field class=\"full-width\" style=\"text-align: center\" [floatLabel]=\"'never'\">\n        <input type=\"password\" matInput placeholder=\"رمز عبور\" formControlName=\"password\">\n        <mat-error *ngIf=\"register.controls['password'].hasError('error')\">گذر واژه باید حداقل 8 کاراکتر و شامل یک\n          کاراکتر ویژه، یک عدد و یک حرف باشد\n        </mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\">\n    <div fxFlex=\"40%\" fxFlexOffset=\"30%\" class=\"back-color\">\n      <mat-form-field class=\"full-width\" style=\"text-align: center\" [floatLabel]=\"'never'\">\n        <input type=\"password\" matInput placeholder=\"تکرار رمز عبور\" formControlName=\"password_confirm\">\n        <mat-error *ngIf=\"register.controls['password_confirm'].hasError('confirm')\">رمز وارد شده با رمز اولیه تطابق\n          ندارد\n        </mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\">\n    <div fxFlex=\"40%\" fxFlexOffset=\"30%\" class=\"back-color\">\n      <mat-form-field class=\"full-width\" style=\"text-align: center\" [floatLabel]=\"'never'\">\n        <input type=\"number\" matInput placeholder=\"شماره دانشجویی\" formControlName=\"student_id\">\n        <mat-error *ngIf=\"register.controls['student_id'].hasError('std')\">شماره دانشجویی باید یک عدد 9 رقمی باشد\n        </mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\">\n    <div fxFlex=\"40%\" fxFlexOffset=\"30%\" class=\"back-color\">\n      <mat-form-field class=\"full-width\" style=\"text-align: center\" [floatLabel]=\"'never'\">\n        <mat-select formControlName=\"fields\">\n          <mat-option *ngFor=\"let field of fields\" value=\"{{field}}\">{{field}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </div>\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\">\n    <div fxFlex=\"40%\" fxFlexOffset=\"30%\" class=\"back-color\">\n      <button type=\"submit\" mat-button [disabled]=\"!register.valid\">ثبت اطلاعات</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/register-page/register-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPageComponent = (function () {
    function RegisterPageComponent(httpService, snackBar) {
        this.httpService = httpService;
        this.snackBar = snackBar;
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
        this.snackBar.open("صفحه بارگذاری شد", null, { duration: 2000 });
        this.loadFields();
        this.initForm();
    };
    RegisterPageComponent.prototype.loadFields = function () {
        var _this = this;
        this.httpService.get('fields').subscribe(function (data) {
            // console.log("feilds received", data);
            _this.fields = data.fields;
        }, function (err) {
            console.log("error occurred loading from server");
        });
    };
    RegisterPageComponent.prototype.initForm = function () {
        this.register = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]().group({
            username: [null, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
                ]],
            email: [null, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email,
                    this.emailValidator
                ]],
            password: [null, [
                    this.passwordValidator
                ]],
            password_confirm: [null, [
                    this.confirmValidator
                ]],
            student_id: [null, [
                    this.studentValidator
                ]],
            fields: [null, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required
                ]]
        });
    };
    RegisterPageComponent.prototype.submit = function () {
        var _this = this;
        var data = {
            username: this.register.controls['username'].value,
            email: this.register.controls['email'].value,
            password: this.register.controls['password'].value,
            student_id: this.register.controls['student_id'].value,
            field: this.register.controls['fields'].value
        };
        console.log("data", data);
        this.httpService.post('register', data).subscribe(function (data) {
            // console.log("Da:ta", data);
        }, function (err) {
            // console.log("e:r", err);
            if (err.status == 200) {
                _this.snackBar.open("با موفقیت ثبت نام شدید", null, { duration: 2000 });
            }
            else {
                _this.snackBar.open("اطلاعات نامعتبر است", null, { duration: 2000 });
            }
        });
    };
    RegisterPageComponent.prototype.emailValidator = function (input) {
        var v = input.value;
        if (!v) {
            return {
                notUTAC: true
            };
        }
        if (v.includes("@ut.ac.ir"))
            return null;
        else
            return {
                notUTAC: true
            };
    };
    RegisterPageComponent.prototype.passwordValidator = function (input) {
        var v = input.value;
        var error = {
            error: true
        };
        if (!v) {
            return error;
        }
        var validChar = false, validNum = false, validSpc = false;
        for (var i = 0; i < v.length; i++) {
            var asc = v[i].charCodeAt(0);
            if (asc >= 97 && asc <= 122)
                validChar = true;
            if (asc >= 65 && asc <= 90)
                validChar = true;
            if (asc >= 48 && asc <= 57)
                validNum = true;
            if (asc < 48 || (asc > 57 && asc < 65) || (asc > 90 && asc < 97) || asc > 122)
                validSpc = true;
        }
        if (validChar && validNum && validSpc && v.length >= 8)
            return null;
        return error;
    };
    RegisterPageComponent.prototype.confirmValidator = function (input) {
        var v = input.value;
        var error = { confirm: true };
        var orig;
        if (input['parent'])
            orig = input['parent'].controls['password'].value;
        else
            return error;
        if (!v)
            return error;
        if (v === orig)
            return null;
        return error;
    };
    RegisterPageComponent.prototype.studentValidator = function (input) {
        var v = input.value;
        var error = { std: true };
        if (!v)
            return error;
        if (v.toString().length == 9)
            return null;
        return error;
    };
    RegisterPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-page',
            template: __webpack_require__("./src/app/register-page/register-page.component.html"),
            styles: [__webpack_require__("./src/app/register-page/register-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatSnackBar */]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.serverAddress = '/api/';
        this.tempServer = 'https://dceddbe3-7674-431a-aa5c-d861233e2197.mock.pstmn.io/api/';
    }
    HttpService.prototype.get = function (url) {
        return this.http.get(this.serverAddress + url, { observe: 'response' }).map(function (data) { return data.body; });
    };
    HttpService.prototype.put = function (url, values) {
        return this.http.put(this.serverAddress + url, values, { observe: 'response' }).map(function (data) { return data.body; });
    };
    HttpService.prototype.post = function (url, values) {
        return this.http.post(this.serverAddress + url, values, { observe: 'response' }).map(function (data) { return data.body; });
    };
    HttpService.prototype.delete = function (url) {
        return this.http.delete(this.serverAddress + url, { observe: 'response' }).map(function (data) { return data.body; });
    };
    HttpService.Host = 'http://localhost:8000';
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/show-post/show-post.component.css":
/***/ (function(module, exports) {

module.exports = ".back-color {\n  background-color: #9ce1ff;\n  padding: 20px 50px;\n}\n\n/*.full-width {*/\n\n/*max-width: 100%;*/\n\n/*width: 100%;*/\n\n/*}*/\n\n/*.top-div {*/\n\n/*margin-top: 50px;*/\n\n/*margin-bottom: 20px;*/\n\n/*font-weight: bold;*/\n\n/*}*/\n\n.main-post-text {\n  direction: rtl;\n  text-align: right;\n}\n\n.pointer {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/show-post/show-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\" class=\"top-div\">\n  <div fxFlex=\"40%\" fxFlexOffset=\"30%\" style=\"text-align: center; font-size: 1.6em\">\nنمایش پست\n  </div>\n</div>\n<div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"start center\">\n  <div fxFlex=\"40%\" fxFlexOffset=\"30%\" class=\"back-color\">\n    <mat-card>\n      <mat-card-header>\n        <div class=\"sub-right-texts\">\n          <mat-card-title class=\"sub-texts pointer\" (click)=\"goToProfilePage()\">@{{username}}</mat-card-title>\n        </div>\n      </mat-card-header>\n      <mat-card-content>\n        <p class=\"main-post-text\">\n          {{post?.text}}\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button (click)=\"addLikes(true)\">{{post?.likes}} Likes</button>\n        <button mat-button (click)=\"addLikes(false)\">{{post?.dislikes}} Dislikes</button>\n        <button mat-button>{{post?.comments}} Comments</button>\n      </mat-card-actions>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/show-post/show-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowPostComponent = (function () {
    function ShowPostComponent(route, httpService, router) {
        this.route = route;
        this.httpService = httpService;
        this.router = router;
        this.post = {
            text: '',
            likes: 0,
            dislikes: 0,
            comments: 0
        };
    }
    ShowPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.username = params['username'] ? params['username'] : 'iman';
            _this.httpService.get("profile/" + _this.username).subscribe(function (data) {
                data = data[0];
                console.log(data);
                if (data['posts'] && data['posts'].length > 0)
                    _this.post = data.posts[0];
                else {
                    _this.post = {
                        text: "این متن دلخواه برای این نوشته است.",
                        likes: 2,
                        dislikes: 3,
                        comments: 5
                    };
                    _this.username = "iman";
                }
            }, function (data) {
                if (data['posts'] && data['posts'].length > 0)
                    _this.post = data.posts[0];
                else {
                    _this.post = {
                        text: "این متن دلخواه برای این نوشته است.",
                        likes: 2,
                        dislikes: 3,
                        comments: 5
                    };
                    _this.username = "iman";
                    // this.post = {
                    //   text: "این متن دلخواه برای این نوشته است.",
                    //   likes: 2,
                    //   dislikes: 3,
                    //   comments: 5
                    // }
                    // this.username = "iman";
                }
            });
        });
    };
    ShowPostComponent.prototype.goToProfilePage = function () {
        this.router.navigate(["profile/" + this.username]);
    };
    ShowPostComponent.prototype.addLikes = function (likes) {
        var _this = this;
        if (likes === void 0) { likes = true; }
        var data = {
            id: this.post['id'],
            like: likes
        };
        this.httpService.post("like", data).subscribe(function (data) {
            console.log("here");
            _this.increment(likes);
        }, function (err) {
            console.log("there");
            _this.increment(likes);
        });
    };
    ShowPostComponent.prototype.increment = function (likes) {
        if (likes === void 0) { likes = true; }
        if (likes) {
            this.post['likes']++;
        }
        else {
            this.post['dislikes']++;
        }
    };
    ShowPostComponent.prototype.addDislikes = function () {
    };
    ShowPostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-show-post',
            template: __webpack_require__("./src/app/show-post/show-post.component.html"),
            styles: [__webpack_require__("./src/app/show-post/show-post.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ShowPostComponent);
    return ShowPostComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map