"use strict";
(self["webpackChunkmasiceiu"] = self["webpackChunkmasiceiu"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/profile/profile.component */ 8220);
/* harmony import */ var _pages_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-not-found.component */ 6349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: 'auth',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("src_app_modules_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/auth/auth.module */ 3970)).then(m => m.AuthModule)
}, {
  path: 'my',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_one_one_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/one/one.module */ 9711)).then(m => m.OneModule),
  //loadChildren: () =>import("./modules/admin/admin.module").then(m => m.AdminModule),
  data: {
    title: "my"
  }
}, {
  path: 'zikr',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2020_forms_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_zikr_zikr_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/zikr/zikr.module */ 5739)).then(m => m.ZikrModule)
}, {
  path: 'profile',
  component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent
}, {
  path: '',
  redirectTo: '/my',
  pathMatch: 'full'
}, {
  path: '*',
  component: _pages_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundComponent
}, {
  path: '**',
  component: _pages_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bowser */ 3962);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ 900);
/* harmony import */ var _shared_models_global_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/models/global-data */ 1635);
/* harmony import */ var _http_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.loading */ 3717);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);

//import * as Bowser from "bowser";








function AppComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 2)(2, "div", 3)(3, "table")(4, "tr")(5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td")(8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("spinner", true);
  }
}
function AppComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_ng_container_0_div_1_Template, 10, 2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", 1);
  }
}
function AppComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_ng_container_1_Template_input_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.getA());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "is offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\nlast data (or error response) retrieved: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\nglobal data - cache and offline storage: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\n", ctx_r1.globalData.isOffline, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 3, ctx_r1.returnedData));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 5, ctx_r1.globalData));
  }
}
class AppComponent {
  constructor(router, tracking, globalData, cdRef, httpLoading) {
    this.router = router;
    this.tracking = tracking;
    this.globalData = globalData;
    this.cdRef = cdRef;
    this.httpLoading = httpLoading;
    this.title = 'masiceiu';
    this.baseUrl = '';
    this.payload = {
      current_url: "/",
      previous_url: "",
      app_nav_show: true
    };
    this.width = 250;
    this.height = 250;
    this.fixedHeight = 100;
    this.loading = true;
    this.subscriptions = [];
    this.httpLoading.onLoadingChanged.subscribe(isLoading => this.loading = isLoading);
    this.baseUrl = this.tracking.config.apiBaseUrl;
    this.tracking.data.subscribe(payload => {
      this.payload = Object.assign(this.payload, payload);
      switch (payload.switch_on) {
        case "user-agent-info":
          //console.log(this.payload.switch_on, this.payload);
          /*this.tracking.ipInfo().then((ip)=>{
            //console.log("ipInfo:", ip)
            Object.assign(this.payload, {ip:ip});
            let req = {
              json: this.payload,
              lang: "en",
              type_id: 1//"user-agent-info"
            }
            let url = `${this.baseUrl}api/qurn/json`;
            this.tracking.httpClient.post(url, req).subscribe((res: any) => {
              //console.log("api/qurn/json_post:", res);
              
            });
          }).catch((err)=>console.log(err)); */
          break;
        case "route-has-changed":
          //console.log(this.payload.switch_on, this.payload);
          break;
        default:
          //console.log('app-default:', this.payload,);
          break;
      }
    });
    /** Navigation Event************************/
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationStart) {
        // Show loading indicator
        //console.log('Route change detected');
      }
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
        // Hide loading indicator
        //console.log(event);
        this.tracking.update({
          current_url: event.url,
          previous_url: this.payload.current_url,
          switch_on: "route-has-changed"
        });
      }
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationError) {
        // Hide loading indicator
        // Present error to user
        //console.log(event.error);
      }
    });
    /** geolocation Event************************/
    /*
    const locations = new Observable((observer) => {
      let watchId: number;
      // Simple geolocation API check provides values to publish
      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition((position: GeolocationPosition) => {
          observer.next(position);
        }, (error: GeolocationPositionError) => {
          observer.error(error);
        });
      } else {
        observer.error('Geolocation not available');
      }
      // When the consumer unsubscribes, clean up data ready for next subscription.
      return {
        unsubscribe() {
          //console.log('watchId',watchId)
          navigator.geolocation.clearWatch(watchId);
        }
      };
    });
    // Call subscribe() to start listening for updates.
    const locationsSubscription = locations.subscribe({
      next(position) {
        console.log('Current Position: ', position);
        locationsSubscription.unsubscribe();
      },
      error(msg) {
        console.log('Error Getting Location: ', msg);
      }
    });
          // Stop listening for location after 10 seconds
    setTimeout(() => {
      locationsSubscription.unsubscribe();
    }, 10000);*/
    /*
    //console.log("AppComponent:",tracking.config);
    if(isDevMode()) {
      enableProdMode();
    }*/
    //hi();
  }

  ngOnInit() {
    Promise.resolve().then(() => this.loading = false);
    //console.log("sid:", this.tracking.config.sid);
    this.tracking.loadLoginInfo();
    this.tracking.sseStartSession();
    /** User Agent ************************/
    //let userAgent = parseBowser(window.navigator.userAgent);
    let userAgent = bowser__WEBPACK_IMPORTED_MODULE_0___default().parse(window.navigator.userAgent);
    const browsers = {
      Firefox: 'firefox',
      Opera: 'opera',
      Trident: 'ie',
      Edg: 'edge',
      Brave: 'brave',
      Chrome: 'chrome',
      Safari: 'safari'
    };
    let browserUrl = '';
    let browserName = browsers[userAgent.browser.name || ''];
    if (browserName) {
      browserUrl = `https://raw.githubusercontent.com/alrra/browser-logos/master/src/${browserName}/${browserName}_512x512.png`;
    }
    Object.assign(userAgent.browser, {
      pair: browsers,
      url: browserUrl || ''
    });
    this.tracking.update(Object.assign(userAgent, {
      switch_on: "user-agent-info"
    }));
    /*this.router.events.pipe(filter(
      (event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
      this.tracking.update(
        {
          current_url:event.url,
          previous_url:this.payload.current_url
        });
    });*/
    /*
    let url = `${this.baseUrl}api/qurn/json?type_id=1`;
    this.tracking.httpClient.get(url).subscribe((res: any) => {
      //console.log("api/qurn/json_get:", res);
    });*/
    this.subscriptions.push((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(window, 'online').subscribe(e => {
      console.log('Online...');
      this.globalData.isOffline = false;
    }));
    this.subscriptions.push((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(window, 'offline').subscribe(e => {
      console.log('Offline...');
      this.globalData.isOffline = true;
    }));
  }
  ngAfterViewInit() {
    Promise.resolve().then(() => this.loading = false);
  }
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
  getA() {
    //https://stackblitz.com/edit/angular-cache-and-offline-interceptor
    this.tracking.httpClient.get("https://jsonplaceholder.typicode.com/todos/1").subscribe({
      next: s => {
        this.returnedData = s;
      },
      error: e => {
        this.returnedData = e;
      },
      complete() {
        // Will not be called, even when cancelling subscription.
        console.log('completed!');
      }
    });
  }
  ngOnDestroy() {
    /**
    * Unsubscribe all subscriptions to avoid memory leak
    */
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_models_global_data__WEBPACK_IMPORTED_MODULE_2__.GlobalData), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_http_loading__WEBPACK_IMPORTED_MODULE_3__.HttpLoading));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 1,
  consts: [[4, "ngIf"], [3, "spinner", 4, "ngIf"], [1, "w3-display-container", "w3-green", 2, "height", "100vh"], [1, "w3-display-middle"], [1, "p-2", "w3-spin"], ["type", "button", "value", "get A", 3, "click"], ["for", "offline"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 17, 7, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "router-outlet");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.JsonPipe],
  styles: [".spinner[_ngcontent-%COMP%] {\r\n    \r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 1080;\r\n    cursor: pointer;\r\n    background-color: rgba(0,0,0,0.5);\r\n    opacity: .50;\r\n}\r\n.w3-spin[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_w3-spin 2s infinite linear;}\r\n@keyframes _ngcontent-%COMP%_w3-spin{\r\n    0%{transform:rotate(0deg)}\r\n    100%{transform:rotate(359deg)}\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCO0FBQ0EsU0FBUyxvQ0FBb0MsQ0FBQztBQUM5QztJQUNJLEdBQUcsc0JBQXNCO0lBQ3pCLEtBQUssd0JBQXdCO0FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXIge1xyXG4gICAgLypkaXNwbGF5OiBub25lOyovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAxMDgwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgb3BhY2l0eTogLjUwO1xyXG59XHJcbi53My1zcGlue2FuaW1hdGlvbjp3My1zcGluIDJzIGluZmluaXRlIGxpbmVhcjt9XHJcbkBrZXlmcmFtZXMgdzMtc3BpbntcclxuICAgIDAle3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9XHJcbiAgICAxMDAle3RyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKX1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "loadSettings": () => (/* binding */ loadSettings)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/profile/profile.component */ 8220);
/* harmony import */ var _pages_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-not-found.component */ 6349);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.service */ 900);
/* harmony import */ var _http_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.loading */ 3717);
/* harmony import */ var _site_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./site.interceptor */ 6815);
/* harmony import */ var _cache_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cache.interceptor */ 2070);
/* harmony import */ var _shared_models_global_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/models/global-data */ 1635);
















//const url = `/assets/json/config.json`
function loadSettings(settings) {
  return () => settings.load();
}
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService, _http_loading__WEBPACK_IMPORTED_MODULE_5__.HttpLoading, {
    provide: _shared_models_global_data__WEBPACK_IMPORTED_MODULE_8__.GlobalData,
    useValue: new _shared_models_global_data__WEBPACK_IMPORTED_MODULE_8__.GlobalData()
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
    useClass: _site_interceptor__WEBPACK_IMPORTED_MODULE_6__.SiteInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS,
    useClass: _cache_interceptor__WEBPACK_IMPORTED_MODULE_7__.CacheInterceptor,
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.APP_INITIALIZER,
    useFactory: loadSettings,
    deps: [_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService],
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule.register('ngsw-worker.js', {
    //environment.production 
    enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.isDevMode)(),
    // Register the ServiceWorker as soon as the application is stable
    // or after 30 seconds (whichever comes first).
    registrationStrategy: 'registerWhenStable:30000'
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent, _pages_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__.PageNotFoundComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 900:
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/base.service */ 2365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);





//interface Config { [key: string]: any }
class AppService extends _shared_services_base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor(zone, http, metaService, titleService) {
    super();
    this.zone = zone;
    this.http = http;
    this.metaService = metaService;
    this.titleService = titleService;
    //this.titleService.setTitle('মুসলিম জীবন');
    this.metaService.addTags([{
      name: 'author',
      content: 'Mr Abdus Sobahn'
    }, {
      name: 'description',
      content: '✸ Allah | আল্লাহ | الله নামের বিস্তারিত ব্যাখ্যা, Free largest source for Al-Quran with tafsir, Muslim life and Islamic Books, Bangla (বাংলা), English and Arabic with personal account for Favorite & Tag.'
    }, {
      name: 'keywords',
      content: 'muslim life database, muslim life software, hadis software, muslim life app download, bangla muslim life app, muslim life website, english muslim life website, bangla muslim life website, bangla islamic content'
    }, {
      name: 'robots',
      content: 'index, follow'
    }, {
      name: 'writer',
      content: 'Abdus Sobahn'
    }, {
      name: 'image',
      content: './assets/blog-image.png'
    }, {
      charset: 'UTF-8'
    }]);
    this.metaService.addTags([{
      property: 'og:type',
      content: 'article'
    }, {
      property: 'og:url',
      content: 'https://masiceiu.com/'
    }, {
      property: 'og:title',
      content: 'মুসলিম জীবন | search read and share authentic quran, tafsir, ebooks read online, free,আল্লাহ | الله নামের অর্থ ও ব্যাখ্যা'
    }, {
      property: 'og:description',
      content: 'Free largest source in for Quran, Muslim life and Islamic Books, Bangla (বাংলা), English and Arabic.'
    }, {
      property: 'og:image',
      content: 'https://docs.google.com/uc?export=open&id=1-WpKm7liWmvXYSoDF4P2l2vYNkDbvikT'
    }, {
      property: 'og:image:alt',
      content: 'https://masiceiu.com/favicon.ico'
    }, {
      property: 'og:image:width',
      content: '1200'
    }, {
      property: 'og:image:height',
      content: '630'
    }, {
      property: 'og:video',
      content: '?'
    }, {
      property: 'fb:app_id',
      content: '?'
    }]);
    this.data.subscribe(payload => {
      //console.log(payload);
    });
  }
  load() {
    const url = `/assets/json/config.json`;
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe({
        next: value => {
          this._config = value;
          let baseUrl = value.apiBaseUrl;
          const url2 = `${baseUrl}api/files/config`;
          this.http.get(url2).subscribe({
            next: res => {
              this._config['sid'] = res.sid;
              this._config['json'] = res.json;
              resolve();
            },
            error: err => {
              resolve();
            }
          });
        },
        error: err => {
          reject(`Could not load app configuration file '${url}': ${JSON.stringify(err)}`);
        }
      });
    });
  }
  loadNext() {
    return new Promise((resolve, reject) => {});
  }
  set Title(value) {
    let val = value + "-MyDiary";
    this.titleService.setTitle(val);
  }
  get httpClient() {
    return this.http;
  }
  get(url) {
    return this.http.get(url).subscribe(res => {
      return res;
    });
  }
  post_user_log(req) {
    let url = `${this.config.apiBaseUrl}api/account/user_log`;
    this.httpClient.post(url, req).subscribe(res => {});
  }
  ipInfo() {
    const url = 'https://jsonip.com';
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe({
        next: data => resolve(data.ip),
        error: err => reject(`Fail to find ip from '${url}'`)
      });
    });
  }
  fileLoad(fileJson) {
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', fileJson.url);
      request.responseType = 'blob';
      request.onload = function () {
        if (request.status == 200) {
          var res = [];
          res[0] = request.response;
          res[1] = fileJson;
          resolve(res);
        } else {
          reject(Error('Url didn\'t load successfully; error code:' + request.statusText));
        }
      };
      request.onerror = function () {
        reject(Error('There was a network error.'));
      };
      request.send();
    });
  }
  startListen(user, ev) {
    let baseUrl = this.config.apiBaseUrl;
    let sseUrl = `${baseUrl}sse.php?from=${user}&ev=${ev}`;
    new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(obs => {
      this.es = new EventSource(sseUrl);
      this.es.addEventListener('message', evt => {
        let res = {
          ev: 'message',
          data: evt.data
        };
        obs.next(res);
        //console.log(res);
      });

      this.es.addEventListener('ping', evt => {
        //console.log('es',evt);
        let res = {
          ev: 'ping',
          data: evt.data,
          id: evt.lastEventId
        };
        obs.next(res);
      }, false);
      this.es.addEventListener(user, evt => {
        let res = {
          ev: user,
          data: evt.data
        };
        obs.next(res);
        //console.log(res);
      });

      this.es.addEventListener('error', evt => {});
      return () => this.es.close();
    }).subscribe({
      next: res => {
        //console.log(res.ev);
        switch (res.ev) {
          case 'ping':
            let data = JSON.parse(res.data);
            let ulist1 = data.users;
            let ulist2 = this.userList;
            let ulist3 = [];
            ulist1.forEach(el1 => {
              let has = ulist2.some(function (el2) {
                return el1.user_name === el2.user_name;
              });
              if (has) {
                let it = this.userList.find(it => it.id === el1.id);
                it.online = el1.ping_second > 0;
                it.ping_second = el1.ping_second;
                //console.log(it.name, it.ping_second, el1.ping_second, it.online);
              } else {
                el1.online = el1.ping_second > 0;
                ulist3.push(el1);
              }
            });
            ulist3.forEach(el => {
              this.userList.push(el);
            });
            //console.log("ot:", data.msg,data.ping,data.ping_time);
            //console.log("users:", this.userList);
            break;
          case 'seen':
            console.log("res:", res);
            break;
          case 'error':
            //console.log("error:", res);
            break;
          case 'message':
            console.log("message:", res);
            break;
          default:
            //for login user
            let mlist = JSON.parse(res.data);
            let mlist1 = mlist;
            let mlist2 = this.userMessageList;
            let mlist3 = [];
            mlist1.forEach(el1 => {
              let has = mlist2.some(function (el2) {
                return el1.id === el2.id;
              });
              if (has) {} else {
                mlist3.push(el1);
              }
            });
            mlist3.forEach(el => {
              this.userMessageList.push(el);
            });
            //console.log("Messages:",this.userMessageList);
            break;
        }
      },
      error: err => {}
    });
  }
  sseStartSession() {
    if (this.sseState) {
      let name = this.loginInfo.name;
      if (name) {
        this.startListen(name, 'reg');
      }
    }
  }
  sseGet(from, to, message, ev) {
    let baseUrl = this.config.apiBaseUrl;
    let sseUrl = `${baseUrl}sse.php?from=${from}&to=${to}&msg=${message}&ev=${ev}`;
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(obs => {
      const es = new EventSource(sseUrl);
      es.addEventListener(ev, evt => {
        let res = {
          ev: ev,
          data: evt.data
        };
        obs.next(res);
        es.close();
      });
      return () => es.close();
    });
  }
  send(message, toUser) {
    let sseStream = this.sseGet(this.UserName, toUser, message, 'send').subscribe(res => {
      let item = JSON.parse(res.data);
      sseStream.unsubscribe();
    });
  }
  seen(id) {
    let sseStream = this.sseGet(this.UserName, '', id, 'seen').subscribe(res => {
      let item = JSON.parse(res.data);
      let index = this.userMessageList.findIndex(it => it.id === item.id);
      this.userMessageList.splice(index, 1);
      //console.log("seen->", res,item,index,this.userMessageList.length);
      sseStream.unsubscribe();
    });
  }
}
AppService.ɵfac = function AppService_Factory(t) {
  return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title));
};
AppService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AppService,
  factory: AppService.ɵfac
});

/***/ }),

/***/ 2070:
/*!**************************************!*\
  !*** ./src/app/cache.interceptor.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheInterceptor": () => (/* binding */ CacheInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1203);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_models_global_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/models/global-data */ 1635);



class CacheInterceptor {
  constructor(globalData) {
    this.globalData = globalData;
  }
  intercept(req, next) {
    if (req.method !== "GET") {
      console.log("http CACHE interceptor - bypassing cache for url:", req.urlWithParams);
      return next.handle(req);
    }
    const key = req.urlWithParams;
    return next.handle(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.share)({
      resetOnError: false,
      resetOnComplete: false,
      resetOnRefCountZero: false
    }));
    /*
    if (this.globalData.cache[key]) {
      console.log("http CACHE interceptor - returning cached data");
      return this.globalData.cache[key];
    } else {
      console.log("http CACHE interceptor - fetch and store data");
      const storedRxjsReplaySubjectCache = next.handle(req).pipe(share({
        resetOnError: false,
        resetOnComplete: false,
        resetOnRefCountZero: false
      }));
      this.globalData.cache[key] = storedRxjsReplaySubjectCache;
      return storedRxjsReplaySubjectCache;
    }*/
  }
}

CacheInterceptor.ɵfac = function CacheInterceptor_Factory(t) {
  return new (t || CacheInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_models_global_data__WEBPACK_IMPORTED_MODULE_0__.GlobalData));
};
CacheInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CacheInterceptor,
  factory: CacheInterceptor.ɵfac
});

/***/ }),

/***/ 3717:
/*!*********************************!*\
  !*** ./src/app/http.loading.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpLoading": () => (/* binding */ HttpLoading)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


/*
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
*/
class HttpLoading {
  //loading: boolean = true;
  constructor() {
    this.onLoadingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Stores all currently active requests
     */
    this.requests = [];
    //this.loading = false;
  }
  /**
   * Adds request to the storage and notifies observers
   */
  onStarted(req) {
    this.requests.push(req);
    this.notify();
  }
  /**
   * Removes request from the storage and notifies observers
   */
  onFinished(req) {
    const index = this.requests.indexOf(req);
    if (index !== -1) {
      this.requests.splice(index, 1);
    }
    this.notify();
  }
  /**
   * Notifies observers about whether there are any requests on fly
   */
  notify() {
    this.onLoadingChanged.emit(this.requests.length !== 0);
  }
}
HttpLoading.ɵfac = function HttpLoading_Factory(t) {
  return new (t || HttpLoading)();
};
HttpLoading.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: HttpLoading,
  factory: HttpLoading.ɵfac
});

/***/ }),

/***/ 1181:
/*!**********************************************!*\
  !*** ./src/app/modules/auth/auth-storage.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authStorageKey": () => (/* binding */ authStorageKey)
/* harmony export */ });
const authStorageKey = '8c1a202ba93f2b26_login';

/***/ }),

/***/ 877:
/*!**********************************************!*\
  !*** ./src/app/modules/auth/auth.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var _shared_services_api_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/api-endpoints */ 2807);
/* harmony import */ var _auth_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-storage */ 1181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ 900);






class AuthService {
  constructor(http, appService) {
    this.http = http;
    this.appService = appService;
  }
  login(request) {
    return this.postWithFallback('login', request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => this.toSession(request.email, response)), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(session => this.setSession(session)));
  }
  me() {
    return this.getWithFallback('me');
  }
  refreshAccessToken() {
    const session = this.session;
    if (!session?.refresh_token) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error('No refresh token available'));
    }
    return this.postWithFallback('refresh', {
      refresh_token: session.refresh_token
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(response => ({
      ...session,
      token: response.access_token,
      access_token: response.access_token,
      refresh_token: response.refresh_token || session.refresh_token
    })), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(updatedSession => this.setSession(updatedSession)));
  }
  logout() {
    localStorage.removeItem(_auth_storage__WEBPACK_IMPORTED_MODULE_1__.authStorageKey);
  }
  get session() {
    const value = localStorage.getItem(_auth_storage__WEBPACK_IMPORTED_MODULE_1__.authStorageKey);
    if (!value) {
      return null;
    }
    try {
      return JSON.parse(value);
    } catch {
      localStorage.removeItem(_auth_storage__WEBPACK_IMPORTED_MODULE_1__.authStorageKey);
      return null;
    }
  }
  get isLoggedIn() {
    return !!this.session?.token;
  }
  get role() {
    return this.session?.role || this.session?.user_role || '';
  }
  hasPermission(permission) {
    const session = this.session;
    if (!session) {
      return false;
    }
    if (this.role === 'admin') {
      return true;
    }
    return (session.permissions || []).includes(permission);
  }
  hasAnyPermission(permissions) {
    return permissions.length === 0 || permissions.some(permission => this.hasPermission(permission));
  }
  setSession(session) {
    localStorage.setItem(_auth_storage__WEBPACK_IMPORTED_MODULE_1__.authStorageKey, JSON.stringify(session));
    this.appService.loadLoginInfo();
  }
  toSession(email, response) {
    const role = response.role || 'user';
    return {
      email,
      name: email,
      token: response.access_token,
      access_token: response.access_token,
      refresh_token: response.refresh_token,
      role,
      user_role: role,
      permissions: this.permissionsForRole(role)
    };
  }
  permissionsForRole(role) {
    if (role === 'admin') {
      return ['admin:members', 'api:demo', 'zikr:save'];
    }
    return ['zikr:save'];
  }
  getWithFallback(route) {
    const urls = (0,_shared_services_api_endpoints__WEBPACK_IMPORTED_MODULE_0__.buildAuthApiUrls)(this.appService.config || {}, route);
    return this.tryGet(urls);
  }
  postWithFallback(route, request) {
    const urls = (0,_shared_services_api_endpoints__WEBPACK_IMPORTED_MODULE_0__.buildAuthApiUrls)(this.appService.config || {}, route);
    return this.tryPost(urls, request);
  }
  tryGet(urls) {
    const [url, ...fallbackUrls] = urls;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      if (fallbackUrls.length === 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
      }
      return this.tryGet(fallbackUrls);
    }));
  }
  tryPost(urls, request) {
    const [url, ...fallbackUrls] = urls;
    return this.http.post(url, request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      if (fallbackUrls.length === 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
      }
      return this.tryPost(fallbackUrls, request);
    }));
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6349:
/*!***************************************************!*\
  !*** ./src/app/pages/page-not-found.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PageNotFoundComponent {
  constructor() {}
  ngOnInit() {}
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
  return new (t || PageNotFoundComponent)();
};
PageNotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageNotFoundComponent,
  selectors: [["app-page-not-found"]],
  decls: 2,
  vars: 0,
  template: function PageNotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8220:
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class ProfileComponent {
  constructor() {
    this.title = "My Profile";
  }
  ngOnInit() {}
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)();
};
ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  decls: 68,
  vars: 1,
  consts: [[1, "d-flex", "flex-column", "flex-md-row", "p-3", "border-bottom", "shadow-sm", "align-items-center"], [1, "h5", "font-weight-normal", "mr-md-auto"], ["routerLink", "/", 1, "p-2", "text-dark"], ["routerLink", "/profile", 1, "p-2", "text-dark"], [1, "container"], [1, "page-header", "px-3", "py-3", "mx-auto", "text-center"], [1, "font-weight-normal", "text-center"], [1, "row"], [1, "col-xs-12", "col-md-9"], ["colspan", "3"], [1, "h3"], ["width", "58px"], ["width", "1%"], [2, "padding-right", "5px"], ["align", "center", 1, "col-xs-12", "col-md-3"], [2, "width", "150px", "height", "160px"], ["data-holder-rendered", "true", "src", "http://ictcarehome.com/uploads/profile_images/55c03b60d9be9.jpg", "data-src", "holder.js/200x200", "alt", "Photo", 1, "img-thumbnail", 2, "width", "150px", "height", "160px"], ["id", "change_photo2", "href", "http://ictcarehome.com/index.php/account/change_photo", 1, "change_photo"], [1, "fa", "fa-camera"], [1, "col-md-12", "col-md-12"], [1, "pull-right", "edit-profile"], ["id", "obj", "href", "#", 1, "edit"], [1, "view-obj", 2, "display", "none"], [1, "edit-obj"], [1, "col-md-12", "col-xs-12"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "h5", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Angular");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav")(4, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "main", 4)(9, "div", 5)(10, "h3", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "table")(15, "tbody")(16, "tr")(17, "td", 9)(18, "h3", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Md. Abdus Sobhan");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr")(21, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 12)(24, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "masiceiu@gmail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr")(29, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Mobile");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "01724299726");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr")(36, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr")(42, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "AToken");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, ":");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "344ee94b2768aec2121193d351c821e251ef8a29");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14)(49, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 17)(52, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Update Photo.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 19)(56, "span", 20)(57, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "fieldset")(60, "legend");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Objective");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 22)(63, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 24)(65, "fieldset")(66, "legend");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Employment History");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".change_photo[_ngcontent-%COMP%] {\r\n    \r\n     bottom: 28px;\r\n     color: white;\r\n     font-weight: bold;\r\n     \r\n     \r\n     position: relative;\r\n     text-shadow: 1px 1px #2EBDB6;\r\n }\r\n \r\n .img-thumbnail[_ngcontent-%COMP%]{ \r\n   padding: 7px;\r\n   border-radius: 0px;\r\n   background-color: #c1c1c1;\r\n }\r\n \r\n .h3[_ngcontent-%COMP%]{\r\n   font-size: 16px;\r\n   font-weight: bold;\r\n   text-transform: uppercase;\r\n }\r\n .edit-profile[_ngcontent-%COMP%]{\r\n   margin-top: 10px;\r\n   position: absolute;\r\n   right: 10px;\r\n }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0tBQ2IsWUFBWTtLQUNaLFlBQVk7S0FDWixpQkFBaUI7S0FDakIsc0JBQXNCO0tBQ3RCLHNCQUFzQjtLQUN0QixrQkFBa0I7S0FDbEIsNEJBQTRCO0NBQ2hDO0NBQ0E7Ozs7Ozs7O0dBUUU7Q0FDRjtHQUNFLFlBQVk7R0FDWixrQkFBa0I7R0FDbEIseUJBQXlCO0NBQzNCOztDQUVBO0dBQ0UsZUFBZTtHQUNmLGlCQUFpQjtHQUNqQix5QkFBeUI7Q0FDM0I7Q0FDQTtHQUNFLGdCQUFnQjtHQUNoQixrQkFBa0I7R0FDbEIsV0FBVztDQUNiIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYW5nZV9waG90byB7XHJcbiAgICAvKiBsZWZ0OiAzOCU7Ki9cclxuICAgICBib3R0b206IDI4cHg7XHJcbiAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIC8qbWFyZ2luLWxlZnQ6IC0zMHB4OyovXHJcbiAgICAgLypwb3NpdGlvbjogYWJzb2x1dGU7Ki9cclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggIzJFQkRCNjtcclxuIH1cclxuIC8qXHJcbiAucHJvZmlsZV9waG90byB7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIG1hcmdpbi1sZWZ0OiAtNTVweDtcclxuICAgbWFyZ2luLXRvcDogLTI4cHg7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgdGV4dC1zaGFkb3c6IDFweCAxcHggIzJFQkRCNjtcclxuIH0qL1xyXG4gLmltZy10aHVtYm5haWx7IFxyXG4gICBwYWRkaW5nOiA3cHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcclxuIH1cclxuIFxyXG4gLmgze1xyXG4gICBmb250LXNpemU6IDE2cHg7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gfVxyXG4gLmVkaXQtcHJvZmlsZXtcclxuICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICByaWdodDogMTBweDtcclxuIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1635:
/*!**********************************************!*\
  !*** ./src/app/shared/models/global-data.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalData": () => (/* binding */ GlobalData)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GlobalData {
  constructor() {
    this.title = 'masiceiu';
    this.isOffline = false;
    this.cache = {};
    this.offlineStore = {};
  }
}
GlobalData.ɵfac = function GlobalData_Factory(t) {
  return new (t || GlobalData)();
};
GlobalData.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: GlobalData,
  factory: GlobalData.ɵfac
});

/***/ }),

/***/ 2807:
/*!**************************************************!*\
  !*** ./src/app/shared/services/api-endpoints.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildAuthApiUrls": () => (/* binding */ buildAuthApiUrls),
/* harmony export */   "buildZikrApiUrls": () => (/* binding */ buildZikrApiUrls)
/* harmony export */ });
function buildZikrApiUrls(config, route) {
  const urls = [fromBase(config.apiBaseUrl, config.zikrApiPath || 'zikr/public/api/', route), fromBase(config.zikrApiBaseUrl, '', route)];
  return uniqueUrls(urls);
}
function buildAuthApiUrls(config, route) {
  const urls = [fromBase(config.authApiBaseUrl, '', route), fromBase(config.apiBaseUrl, 'api/', route), ...buildZikrApiUrls(config, route)];
  return uniqueUrls(urls);
}
function fromBase(baseUrl, path, route) {
  if (!baseUrl) {
    return '';
  }
  return `${withSlash(baseUrl)}${trimSlashes(path)}${route}`;
}
function withSlash(value) {
  return value.endsWith('/') ? value : `${value}/`;
}
function trimSlashes(value) {
  if (!value) {
    return '';
  }
  return `${value.replace(/^\/+|\/+$/g, '')}/`;
}
function uniqueUrls(urls) {
  return urls.filter((url, index) => !!url && urls.indexOf(url) === index);
}

/***/ }),

/***/ 2365:
/*!*************************************************!*\
  !*** ./src/app/shared/services/base.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseService": () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _modules_auth_auth_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/auth/auth-storage */ 1181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



const loginStorageKey = _modules_auth_auth_storage__WEBPACK_IMPORTED_MODULE_0__.authStorageKey;
class BaseService {
  get data() {
    return this._subject.asObservable();
  }
  update(obj) {
    this._subject.next(obj);
  }
  get lang() {
    if (!this._lang) {
      this._lang = this._config['lang'];
    }
    return this._lang;
  }
  set lang(lang) {
    if (lang.id !== this._lang.id) {
      this._lang = lang;
      this.update({
        lang: lang,
        switch_on: "lang-has-changed"
      });
    }
  }
  get config() {
    return this._config;
  }
  constructor() {
    this.es = null;
    this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({
      bismillah: {
        ar: '﷽',
        bn: 'বিসমিল্লাহির রাহমানির রাহীম',
        en: 'Bismillah Hir Rahman Nir Rahim'
      },
      alhamdulillah: {
        ar: 'ٱلْحَمْدُ لِلَّٰهِ',
        bn: 'আলহামদুলিল্লাহ',
        en: 'Alhamdulillah'
      }
    });
    this.userList = [];
    this.userMessageList = [];
    if (localStorage.getItem(loginStorageKey) != null) {}
  }
  loadLoginInfo() {
    if (localStorage.getItem(loginStorageKey) != null) {
      this._loginInfo = JSON.parse(localStorage.getItem(loginStorageKey) || "{}");
    } else {
      this._loginInfo = JSON.parse("{}");
    }
  }
  setLoginInfo(loginInfo) {
    this._loginInfo = loginInfo;
    localStorage.setItem(loginStorageKey, JSON.stringify(loginInfo));
  }
  stringifyLoginInfo() {
    localStorage.setItem(loginStorageKey, JSON.stringify(this._loginInfo));
  }
  get loginInfo() {
    return this._loginInfo;
  }
  get UserId() {
    return this._loginInfo.id;
  }
  get UserName() {
    return this._loginInfo.name;
  }
  get RoleId() {
    return this._loginInfo.user_role;
  }
  get RoleName() {
    //Role..User
    return this._loginInfo.user_role;
  }
  get IsLoggedIn() {
    return localStorage.getItem(loginStorageKey) != null;
  }
  get IsConnected() {
    return !(this.sseState > 0);
  }
  Logout() {
    localStorage.removeItem(loginStorageKey);
    this._loginInfo = JSON.parse("{}");
    if (this.IsConnected) {
      this.sseStop();
    }
  }
  sseStop() {
    let es = this.es;
    if (es) {
      es.close();
    }
  }
  get sseState() {
    if (this.es) {
      return this.es.readyState;
    }
    return 2;
  }
  get sseUsers() {
    return this.userList.filter(it => it.user_name != this.UserName);
  }
  get sseMessages() {
    return this.userMessageList;
  }
}
BaseService.ɵfac = function BaseService_Factory(t) {
  return new (t || BaseService)();
};
BaseService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: BaseService,
  factory: BaseService.ɵfac
});

/***/ }),

/***/ 6815:
/*!*************************************!*\
  !*** ./src/app/site.interceptor.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteInterceptor": () => (/* binding */ SiteInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var _modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth/auth.service */ 877);
/* harmony import */ var _modules_auth_auth_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/auth/auth-storage */ 1181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _http_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.loading */ 3717);
/* harmony import */ var _shared_models_global_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/models/global-data */ 1635);









const loginStorageKey = _modules_auth_auth_storage__WEBPACK_IMPORTED_MODULE_1__.authStorageKey;
class SiteInterceptor {
  constructor(router, httpLoading, globalData, injector) {
    //constructor(private router: Router, private httpLoading: HttpLoading, private injector: Injector) {
    this.router = router;
    this.httpLoading = httpLoading;
    this.globalData = globalData;
    this.injector = injector;
  }
  intercept(req, next) {
    //https://stackblitz.com/edit/angular-cache-and-offline-interceptor
    const key = req.urlWithParams;
    this.httpLoading.onStarted(req);
    // emit onStarted event before request execution
    // console.log(key);
    switch (key) {
      //http://api.masiceiu.com:8000/sse.php?from=masiceiu&ev=reg
      case "/api/v1/generate_uid":
        //console.log('HTTP Request for ' + req.urlWithParams + ' is being responded to locally.');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({
          body: {
            "items": ["hi there! I'm in your app intercepting your requests"]
          },
          status: 200
        }));
      //case"/assets/json/config.json":
      default:
        if (localStorage.getItem(loginStorageKey) != null) {
          let login = JSON.parse(localStorage.getItem(loginStorageKey) || "{}");
          const clonedReq = this.withAuthHeader(req, login);
          const handler = next.handle(clonedReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => this.handleAuthError(err, req, next)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => {
            //console.log("finalize1:",req.url);
            setTimeout(() => {}, 100);
            this.httpLoading.onFinished(req);
          }));
          return handler;
        } else {
          //emit onFinished event after request execution
          const handler = next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => {
            //console.log("finalize2:",req.url);
            setTimeout(() => {}, 100);
            this.httpLoading.onFinished(req);
          }));
          return handler;
          //return this.newMethod(req,handler,this.httpLoading,key);
        }
    }
    // Or if you wanted to go to the network:
    // return next.handle(req);
  }

  handleAuthError(err, req, next) {
    if (!(err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) || err.status !== 401) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(() => err);
    }
    if (this.isAuthRoute(req.url)) {
      this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(() => err);
    }
    const authService = this.injector.get(_modules_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
    return authService.refreshAccessToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(session => next.handle(this.withAuthHeader(req, session))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(refreshError => {
      this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(() => refreshError);
    }));
  }
  withAuthHeader(req, session) {
    const token = session.token || session.access_token;
    if (!token) {
      return req;
    }
    return req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token)
    });
  }
  isAuthRoute(url) {
    return /\/api\/(login|refresh)$/.test(url);
  }
  logout() {
    localStorage.removeItem(loginStorageKey);
    this.router.navigateByUrl('/auth/login');
  }
}
SiteInterceptor.ɵfac = function SiteInterceptor_Factory(t) {
  return new (t || SiteInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_http_loading__WEBPACK_IMPORTED_MODULE_2__.HttpLoading), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_shared_models_global_data__WEBPACK_IMPORTED_MODULE_3__.GlobalData), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injector));
};
SiteInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
  token: SiteInterceptor,
  factory: SiteInterceptor.ɵfac
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  myAry: ['سُبْحَانَ اللهِ', 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ']
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map