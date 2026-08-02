"use strict";
(self["webpackChunkmasiceiu"] = self["webpackChunkmasiceiu"] || []).push([["common"],{

/***/ 1973:
/*!**************************************************!*\
  !*** ./src/app/modules/auth/permission.guard.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PermissionGuard": () => (/* binding */ PermissionGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 877);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class PermissionGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    return this.check(route, state.url);
  }
  canActivateChild(route, state) {
    return this.check(route, state.url);
  }
  check(route, returnUrl) {
    const permissions = this.requiredPermissions(route);
    const roles = this.requiredRoles(route);
    if (permissions.length === 0 && roles.length === 0) {
      return true;
    }
    if (!this.authService.isLoggedIn) {
      return this.router.createUrlTree(['/auth/login'], {
        queryParams: {
          returnUrl
        }
      });
    }
    if (roles.length > 0 && !roles.includes(this.authService.role)) {
      return this.router.createUrlTree(['/auth/forbidden']);
    }
    if (!this.authService.hasAnyPermission(permissions)) {
      return this.router.createUrlTree(['/auth/forbidden']);
    }
    return true;
  }
  requiredPermissions(route) {
    return this.collectData(route, 'permissions');
  }
  requiredRoles(route) {
    return this.collectData(route, 'roles');
  }
  collectData(route, key) {
    const values = [];
    let current = route;
    while (current) {
      const routeValue = current.data[key];
      if (Array.isArray(routeValue)) {
        values.push(...routeValue);
      }
      current = current.parent;
    }
    return values;
  }
}
PermissionGuard.ɵfac = function PermissionGuard_Factory(t) {
  return new (t || PermissionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
PermissionGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: PermissionGuard,
  factory: PermissionGuard.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=common.js.map