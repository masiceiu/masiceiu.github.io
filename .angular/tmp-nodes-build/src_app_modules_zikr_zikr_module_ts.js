"use strict";
(self["webpackChunkmasiceiu"] = self["webpackChunkmasiceiu"] || []).push([["src_app_modules_zikr_zikr_module_ts"],{

/***/ 308:
/*!*********************************************************!*\
  !*** ./src/app/modules/zikr/admin-members.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMembersComponent": () => (/* binding */ AdminMembersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _zikr_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zikr.service */ 7423);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




function AdminMembersComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminMembersComponent_button_29_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.cancelEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.saving);
  }
}
function AdminMembersComponent_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", role_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](role_r7);
  }
}
function AdminMembersComponent_p_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.error);
  }
}
function AdminMembersComponent_article_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 24)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminMembersComponent_article_44_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const member_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.edit(member_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const member_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r8.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", member_r8.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](member_r8.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.saving);
  }
}
function AdminMembersComponent_p_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No matching members found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AdminMembersComponent {
  constructor(zikrService) {
    this.zikrService = zikrService;
    this.members = [];
    this.filterText = '';
    this.roleFilter = 'all';
    this.loading = false;
    this.saving = false;
    this.status = 'Ready';
    this.error = '';
    this.editingMember = null;
    this.form = this.emptyForm();
  }
  ngOnInit() {
    this.load();
  }
  get roles() {
    return Array.from(new Set(this.members.map(member => member.role).filter(role => !!role))).sort();
  }
  get filteredMembers() {
    const query = this.filterText.trim().toLowerCase();
    return this.members.filter(member => {
      const matchesRole = this.roleFilter === 'all' || member.role === this.roleFilter;
      const haystack = [member.id, member.email, member.role].join(' ').toLowerCase();
      return matchesRole && (!query || haystack.includes(query));
    });
  }
  load() {
    this.loading = true;
    this.error = '';
    this.status = 'Loading members...';
    this.zikrService.getMembers().subscribe({
      next: response => {
        this.members = response.data || [];
        this.status = 'Loaded';
      },
      error: error => {
        this.error = this.formatError(error);
        this.status = 'Failed';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  edit(member) {
    this.editingMember = member;
    this.form = {
      email: member.email,
      role: member.role || 'user',
      password: ''
    };
  }
  cancelEdit() {
    this.editingMember = null;
    this.form = this.emptyForm();
    this.error = '';
  }
  saveMember() {
    if (!this.form.email.trim()) {
      this.error = 'Email is required';
      return;
    }
    if (!this.editingMember && !this.form.password) {
      this.error = 'Password is required for new members';
      return;
    }
    this.saving = true;
    this.error = '';
    this.status = this.editingMember ? 'Updating member...' : 'Creating member...';
    const request = {
      email: this.form.email.trim(),
      role: this.form.role,
      password: this.form.password || undefined
    };
    const request$ = this.editingMember?.id ? this.zikrService.updateMember(this.editingMember.id, request) : this.zikrService.createMember(request);
    request$.subscribe({
      next: () => {
        this.status = this.editingMember ? 'Member updated' : 'Member created';
        this.cancelEdit();
        this.load();
      },
      error: error => {
        this.error = this.formatError(error);
        this.status = 'Save failed';
        this.saving = false;
      },
      complete: () => {
        this.saving = false;
      }
    });
  }
  emptyForm() {
    return {
      email: '',
      password: '',
      role: 'user'
    };
  }
  formatError(error) {
    return error.error?.message || error.error?.error || error.message || 'Request failed';
  }
}
AdminMembersComponent.ɵfac = function AdminMembersComponent_Factory(t) {
  return new (t || AdminMembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_zikr_service__WEBPACK_IMPORTED_MODULE_0__.ZikrService));
};
AdminMembersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AdminMembersComponent,
  selectors: [["zikr-admin-members"]],
  decls: 46,
  vars: 19,
  consts: [[1, "members-page"], [1, "members-header"], ["type", "button", 1, "btn", "btn-outline-warning", 3, "disabled", "click"], [1, "members-form"], [1, "form-grid"], ["type", "email", "placeholder", "name@example.com", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], ["value", "user"], ["value", "admin"], ["type", "password", 3, "ngModel", "placeholder", "ngModelChange"], [1, "form-actions"], ["type", "button", "class", "btn btn-outline-secondary", 3, "disabled", "click", 4, "ngIf"], [1, "members-toolbar"], ["type", "search", "placeholder", "ID, email, role", 3, "ngModel", "ngModelChange"], ["value", "all"], [3, "value", 4, "ngFor", "ngForOf"], [1, "members-status"], ["class", "members-error", 4, "ngIf"], [1, "members-list"], ["class", "member-row", 4, "ngFor", "ngForOf"], ["class", "members-empty", 4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "disabled", "click"], [3, "value"], [1, "members-error"], [1, "member-row"], [1, "role"], [1, "members-empty"]],
  template: function AdminMembersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Members");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "/zikr/public/api/admin/members");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminMembersComponent_Template_button_click_7_listener() {
        return ctx.load();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "section", 3)(10, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4)(13, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminMembersComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.form.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Role ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminMembersComponent_Template_select_ngModelChange_18_listener($event) {
        return ctx.form.role = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "user");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminMembersComponent_Template_input_ngModelChange_25_listener($event) {
        return ctx.form.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10)(27, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AdminMembersComponent_Template_button_click_27_listener() {
        return ctx.saveMember();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, AdminMembersComponent_button_29_Template, 2, 1, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "section", 12)(31, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Search ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminMembersComponent_Template_input_ngModelChange_33_listener($event) {
        return ctx.filterText = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Role ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "select", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AdminMembersComponent_Template_select_ngModelChange_36_listener($event) {
        return ctx.roleFilter = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "All");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, AdminMembersComponent_option_39_Template, 2, 2, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, AdminMembersComponent_p_42_Template, 2, 1, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "section", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, AdminMembersComponent_article_44_Template, 10, 4, "article", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, AdminMembersComponent_p_45_Template, 2, 0, "p", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading || ctx.saving);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Loading..." : "Refresh", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.editingMember ? "Edit Member" : "Create Member");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form.role);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.form.password)("placeholder", ctx.editingMember ? "Leave blank to keep current" : "Required");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.saving || ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.saving ? "Saving..." : ctx.editingMember ? "Update" : "Create", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.editingMember);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.filterText);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.roleFilter);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.roles);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", ctx.filteredMembers.length, " / ", ctx.members.length, " members \u00B7 ", ctx.status, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredMembers);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.filteredMembers.length === 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
  styles: [".members-page[_ngcontent-%COMP%] {\r\n  max-width: 1040px;\r\n  margin: 0 auto;\r\n  padding: 24px 16px 40px;\r\n}\r\n\r\n.members-header[_ngcontent-%COMP%], .members-toolbar[_ngcontent-%COMP%], .form-actions[_ngcontent-%COMP%], .member-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 14px;\r\n}\r\n\r\n.members-header[_ngcontent-%COMP%] {\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.members-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .members-form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.members-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 4px 0 0;\r\n  color: #666;\r\n  font-family: Consolas, monospace;\r\n}\r\n\r\n.members-form[_ngcontent-%COMP%], .members-toolbar[_ngcontent-%COMP%], .member-row[_ngcontent-%COMP%] {\r\n  border: 1px solid #dedede;\r\n  border-radius: 6px;\r\n  background: #fff;\r\n}\r\n\r\n.members-form[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n}\r\n\r\n.form-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  gap: 12px;\r\n  margin: 12px 0;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 5px;\r\n  font-size: 14px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 8px 10px;\r\n  border: 1px solid #cfcfcf;\r\n  border-radius: 4px;\r\n  background: #fff;\r\n}\r\n\r\n.members-toolbar[_ngcontent-%COMP%] {\r\n  flex-wrap: wrap;\r\n  margin-top: 14px;\r\n  padding: 14px;\r\n}\r\n\r\n.members-toolbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  min-width: 180px;\r\n  flex: 1;\r\n}\r\n\r\n.members-status[_ngcontent-%COMP%], .role[_ngcontent-%COMP%] {\r\n  padding: 6px 10px;\r\n  color: #6a5215;\r\n  border: 1px solid #d4b25f;\r\n  border-radius: 4px;\r\n  background: #fff8df;\r\n}\r\n\r\n.members-error[_ngcontent-%COMP%], .members-empty[_ngcontent-%COMP%] {\r\n  margin-top: 16px;\r\n  padding: 12px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.members-error[_ngcontent-%COMP%] {\r\n  color: #8a1f11;\r\n  background: #ffe9e5;\r\n}\r\n\r\n.members-empty[_ngcontent-%COMP%] {\r\n  color: #555;\r\n  background: #f4f4f4;\r\n}\r\n\r\n.members-list[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 10px;\r\n  margin-top: 16px;\r\n}\r\n\r\n.member-row[_ngcontent-%COMP%] {\r\n  padding: 12px 14px;\r\n}\r\n\r\n.member-row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 2px;\r\n}\r\n\r\n.member-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.role) {\r\n  color: #666;\r\n  font-size: 13px;\r\n}\r\n\r\n@media (max-width: 680px) {\r\n  .members-header[_ngcontent-%COMP%], .members-toolbar[_ngcontent-%COMP%], .form-actions[_ngcontent-%COMP%], .member-row[_ngcontent-%COMP%] {\r\n    align-items: stretch;\r\n    flex-direction: column;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy96aWtyL2FkbWluLW1lbWJlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBOzs7O0VBSUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0NBQWdDO0FBQ2xDOztBQUVBOzs7RUFHRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsU0FBUztFQUNULGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE9BQU87QUFDVDs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFOzs7O0lBSUUsb0JBQW9CO0lBQ3BCLHNCQUFzQjtFQUN4QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbWJlcnMtcGFnZSB7XHJcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMjRweCAxNnB4IDQwcHg7XHJcbn1cclxuXHJcbi5tZW1iZXJzLWhlYWRlcixcclxuLm1lbWJlcnMtdG9vbGJhcixcclxuLmZvcm0tYWN0aW9ucyxcclxuLm1lbWJlci1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxNHB4O1xyXG59XHJcblxyXG4ubWVtYmVycy1oZWFkZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5tZW1iZXJzLWhlYWRlciBoMyxcclxuLm1lbWJlcnMtZm9ybSBoNCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubWVtYmVycy1oZWFkZXIgcCB7XHJcbiAgbWFyZ2luOiA0cHggMCAwO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4ubWVtYmVycy1mb3JtLFxyXG4ubWVtYmVycy10b29sYmFyLFxyXG4ubWVtYmVyLXJvdyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLm1lbWJlcnMtZm9ybSB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmZvcm0tZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luOiAxMnB4IDA7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuaW5wdXQsXHJcbnNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogOHB4IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NmY2ZjZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLm1lbWJlcnMtdG9vbGJhciB7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgcGFkZGluZzogMTRweDtcclxufVxyXG5cclxuLm1lbWJlcnMtdG9vbGJhciBsYWJlbCB7XHJcbiAgbWluLXdpZHRoOiAxODBweDtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4ubWVtYmVycy1zdGF0dXMsXHJcbi5yb2xlIHtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxuICBjb2xvcjogIzZhNTIxNTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDRiMjVmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmOGRmO1xyXG59XHJcblxyXG4ubWVtYmVycy1lcnJvcixcclxuLm1lbWJlcnMtZW1wdHkge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5tZW1iZXJzLWVycm9yIHtcclxuICBjb2xvcjogIzhhMWYxMTtcclxuICBiYWNrZ3JvdW5kOiAjZmZlOWU1O1xyXG59XHJcblxyXG4ubWVtYmVycy1lbXB0eSB7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxufVxyXG5cclxuLm1lbWJlcnMtbGlzdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLm1lbWJlci1yb3cge1xyXG4gIHBhZGRpbmc6IDEycHggMTRweDtcclxufVxyXG5cclxuLm1lbWJlci1yb3cgZGl2IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMnB4O1xyXG59XHJcblxyXG4ubWVtYmVyLXJvdyBzcGFuOm5vdCgucm9sZSkge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY4MHB4KSB7XHJcbiAgLm1lbWJlcnMtaGVhZGVyLFxyXG4gIC5tZW1iZXJzLXRvb2xiYXIsXHJcbiAgLmZvcm0tYWN0aW9ucyxcclxuICAubWVtYmVyLXJvdyB7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 774:
/*!*****************************************************!*\
  !*** ./src/app/modules/zikr/zikr-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZikrRoutingModule": () => (/* binding */ ZikrRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _admin_members_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-members.component */ 308);
/* harmony import */ var _auth_permission_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/permission.guard */ 1973);
/* harmony import */ var _zikr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zikr.component */ 3861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: '',
  component: _zikr_component__WEBPACK_IMPORTED_MODULE_2__.ZikrComponent,
  canActivate: [_auth_permission_guard__WEBPACK_IMPORTED_MODULE_1__.PermissionGuard],
  data: {
    permissions: ['zikr:save']
  }
}, {
  path: 'admin/members',
  component: _admin_members_component__WEBPACK_IMPORTED_MODULE_0__.AdminMembersComponent,
  canActivate: [_auth_permission_guard__WEBPACK_IMPORTED_MODULE_1__.PermissionGuard],
  data: {
    permissions: ['admin:members']
  }
}];
class ZikrRoutingModule {}
ZikrRoutingModule.ɵfac = function ZikrRoutingModule_Factory(t) {
  return new (t || ZikrRoutingModule)();
};
ZikrRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ZikrRoutingModule
});
ZikrRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ZikrRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 3861:
/*!************************************************!*\
  !*** ./src/app/modules/zikr/zikr.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZikrComponent": () => (/* binding */ ZikrComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _zikr_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zikr.service */ 7423);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 877);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function ZikrComponent_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const target_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", target_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](target_r2);
  }
}
function ZikrComponent_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", type_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](type_r3);
  }
}
class ZikrComponent {
  constructor(zikrService, authService, router) {
    this.zikrService = zikrService;
    this.authService = authService;
    this.router = router;
    this.targets = [3, 33, 99, 100];
    this.zikrTypes = ['SU', 'Allah', 'Astaghfirullah'];
    this.count = 0;
    this.countTarget = 3;
    this.zikrType = 'SU';
    this.saving = false;
    this.status = 'Ready';
  }
  get percent() {
    return Math.floor(this.count / this.countTarget * 100);
  }
  get circleBackground() {
    const degree = this.percent / 100 * 360;
    return `conic-gradient(green ${degree}deg, #d9d9d9 ${degree}deg)`;
  }
  confirmTargetChange() {
    if (this.count === 0 || this.count === this.countTarget) {
      return;
    }
    if (window.confirm('Confirm for reset?')) {
      this.resetCounter();
    }
  }
  increment() {
    if (this.count >= this.countTarget) {
      return;
    }
    this.count++;
    this.saveZikr();
  }
  resetCounter() {
    this.count = 0;
    this.status = 'Ready';
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
  saveZikr() {
    this.saving = true;
    this.status = 'Saving...';
    this.zikrService.save({
      date: this.today(),
      count: this.count
    }).subscribe({
      next: response => {
        this.status = response.success ? 'Saved' : response.error || 'Saved';
      },
      error: () => {
        this.status = 'Save failed';
        this.saving = false;
      },
      complete: () => {
        this.saving = false;
      }
    });
  }
  today() {
    return new Date().toISOString().split('T')[0];
  }
}
ZikrComponent.ɵfac = function ZikrComponent_Factory(t) {
  return new (t || ZikrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_zikr_service__WEBPACK_IMPORTED_MODULE_0__.ZikrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
ZikrComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ZikrComponent,
  selectors: [["app-zikr"]],
  decls: 36,
  vars: 17,
  consts: [[1, "zikr-page"], [1, "zikr-app"], [1, "top-controls"], [1, "control"], [3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "circle-wrapper"], [1, "circle"], [1, "circle-content"], ["type", "button", 1, "circle-btn", 3, "disabled", "click"], [1, "percent"], [1, "title"], [1, "zikr-type"], ["aria-hidden", "true", 1, "progress-container"], [1, "progress"], [1, "bottom"], ["type", "button", 3, "click"], [1, "counter"], [1, "count"], [1, "status"], ["type", "button", 1, "logout-btn", 3, "click"], [3, "ngValue"]],
  template: function ZikrComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Count: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ZikrComponent_Template_select_ngModelChange_5_listener($event) {
        return ctx.countTarget = $event;
      })("ngModelChange", function ZikrComponent_Template_select_ngModelChange_5_listener() {
        return ctx.confirmTargetChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ZikrComponent_option_6_Template, 2, 2, "option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Zikr: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "select", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ZikrComponent_Template_select_ngModelChange_9_listener($event) {
        return ctx.zikrType = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ZikrComponent_option_10_Template, 2, 2, "option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ZikrComponent_Template_button_click_14_listener() {
        return ctx.increment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "ZIKR");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 15)(24, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ZikrComponent_Template_button_click_24_listener() {
        return ctx.increment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Target");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17)(27, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ZikrComponent_Template_button_click_30_listener() {
        return ctx.resetCounter();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ZikrComponent_Template_button_click_34_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.countTarget);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.targets);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.zikrType);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.zikrTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", ctx.circleBackground);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.saving && ctx.count >= ctx.countTarget);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.percent, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.zikrType);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.percent, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.count);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx.count, "/", ctx.countTarget, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("busy", ctx.saving);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.status);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
  styles: [".zikr-page[_ngcontent-%COMP%] {\r\n  min-height: calc(100vh - 60px);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 32px 16px;\r\n  background: #efefef;\r\n}\r\n\r\n.zikr-app[_ngcontent-%COMP%] {\r\n  width: min(540px, 100%);\r\n}\r\n\r\n.top-controls[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 16px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.control[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  font-size: 26px;\r\n}\r\n\r\nselect[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  padding: 8px 12px;\r\n  font-size: 22px;\r\n  background: white;\r\n  border: 1px solid #aaa;\r\n}\r\n\r\n.circle-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.circle[_ngcontent-%COMP%] {\r\n  width: 360px;\r\n  height: 360px;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: relative;\r\n  transition: 0.3s;\r\n}\r\n\r\n.circle[_ngcontent-%COMP%]::before {\r\n  content: '';\r\n  width: 280px;\r\n  height: 280px;\r\n  background: #efefef;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n}\r\n\r\n.circle-content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  z-index: 1;\r\n  text-align: center;\r\n}\r\n\r\n.circle-btn[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  gap: 4px;\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  text-align: center;\r\n}\r\n\r\n.percent[_ngcontent-%COMP%] {\r\n  font-size: 50px;\r\n  font-weight: bold;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n}\r\n\r\n.zikr-type[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n}\r\n\r\n.progress-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 38px;\r\n  background: #ddd;\r\n  border: 1px solid #bbb;\r\n  overflow: hidden;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.progress[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  background: linear-gradient(to right, #7dff85, #00bb00);\r\n  transition: 0.3s;\r\n}\r\n\r\n.bottom[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  padding: 10px 24px;\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n}\r\n\r\n.counter[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n}\r\n\r\n.count[_ngcontent-%COMP%] {\r\n  color: #0055ff;\r\n}\r\n\r\n.status[_ngcontent-%COMP%] {\r\n  min-height: 24px;\r\n  margin-top: 16px;\r\n  text-align: center;\r\n}\r\n\r\n.status.busy[_ngcontent-%COMP%] {\r\n  color: #007000;\r\n}\r\n\r\n.logout-btn[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  background: #cc0000;\r\n  color: white;\r\n  border: none;\r\n}\r\n\r\n@media (max-width: 620px) {\r\n  .top-controls[_ngcontent-%COMP%], .bottom[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n  }\r\n\r\n  .control[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .circle[_ngcontent-%COMP%] {\r\n    width: min(320px, 86vw);\r\n    height: min(320px, 86vw);\r\n  }\r\n\r\n  .circle[_ngcontent-%COMP%]::before {\r\n    width: 76%;\r\n    height: 76%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy96aWtyL3ppa3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1REFBdUQ7RUFDdkQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0U7O0lBRUUsc0JBQXNCO0lBQ3RCLG9CQUFvQjtFQUN0Qjs7RUFFQTs7SUFFRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnppa3ItcGFnZSB7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMnB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLnppa3ItYXBwIHtcclxuICB3aWR0aDogbWluKDU0MHB4LCAxMDAlKTtcclxufVxyXG5cclxuLnRvcC1jb250cm9scyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5jb250cm9sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbn1cclxuXHJcbi5jaXJjbGUtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICB3aWR0aDogMzYwcHg7XHJcbiAgaGVpZ2h0OiAzNjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uY2lyY2xlOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiAyODBweDtcclxuICBoZWlnaHQ6IDI4MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmNpcmNsZS1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaXJjbGUtYnRuIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogNHB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wZXJjZW50IHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uemlrci10eXBlIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzhweDtcclxuICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3ZGZmODUsICMwMGJiMDApO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5ib3R0b20ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIHBhZGRpbmc6IDEwcHggMjRweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY291bnRlciB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY291bnQge1xyXG4gIGNvbG9yOiAjMDA1NWZmO1xyXG59XHJcblxyXG4uc3RhdHVzIHtcclxuICBtaW4taGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhdHVzLmJ1c3kge1xyXG4gIGNvbG9yOiAjMDA3MDAwO1xyXG59XHJcblxyXG4ubG9nb3V0LWJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjY2MwMDAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4gIC50b3AtY29udHJvbHMsXHJcbiAgLmJvdHRvbSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgfVxyXG5cclxuICAuY29udHJvbCxcclxuICBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY2lyY2xlIHtcclxuICAgIHdpZHRoOiBtaW4oMzIwcHgsIDg2dncpO1xyXG4gICAgaGVpZ2h0OiBtaW4oMzIwcHgsIDg2dncpO1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZTo6YmVmb3JlIHtcclxuICAgIHdpZHRoOiA3NiU7XHJcbiAgICBoZWlnaHQ6IDc2JTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5739:
/*!*********************************************!*\
  !*** ./src/app/modules/zikr/zikr.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZikrModule": () => (/* binding */ ZikrModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _zikr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zikr-routing.module */ 774);
/* harmony import */ var _admin_members_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-members.component */ 308);
/* harmony import */ var _zikr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zikr.component */ 3861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class ZikrModule {}
ZikrModule.ɵfac = function ZikrModule_Factory(t) {
  return new (t || ZikrModule)();
};
ZikrModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ZikrModule
});
ZikrModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _zikr_routing_module__WEBPACK_IMPORTED_MODULE_0__.ZikrRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ZikrModule, {
    declarations: [_zikr_component__WEBPACK_IMPORTED_MODULE_2__.ZikrComponent, _admin_members_component__WEBPACK_IMPORTED_MODULE_1__.AdminMembersComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _zikr_routing_module__WEBPACK_IMPORTED_MODULE_0__.ZikrRoutingModule]
  });
})();

/***/ }),

/***/ 7423:
/*!**********************************************!*\
  !*** ./src/app/modules/zikr/zikr.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZikrService": () => (/* binding */ ZikrService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _shared_services_api_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services/api-endpoints */ 2807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ 900);





class ZikrService {
  constructor(http, appService) {
    this.http = http;
    this.appService = appService;
  }
  save(request) {
    const urls = this.urls('save-zikr');
    return this.postWithFallback(urls, request);
  }
  getMembers() {
    return this.getWithFallback(this.urls('admin/members'));
  }
  createMember(request) {
    return this.postWithFallback(this.urls('admin/members'), request);
  }
  updateMember(id, request) {
    return this.putWithFallback(this.urls(`admin/members/${id}`), request);
  }
  getWithFallback(urls) {
    const [url, ...fallbackUrls] = urls;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      if (fallbackUrls.length === 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
      }
      return this.getWithFallback(fallbackUrls);
    }));
  }
  postWithFallback(urls, request) {
    const [url, ...fallbackUrls] = urls;
    return this.http.post(url, request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      if (fallbackUrls.length === 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
      }
      return this.postWithFallback(fallbackUrls, request);
    }));
  }
  putWithFallback(urls, request) {
    const [url, ...fallbackUrls] = urls;
    return this.http.put(url, request).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      if (fallbackUrls.length === 0) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
      }
      return this.putWithFallback(fallbackUrls, request);
    }));
  }
  urls(route) {
    return (0,_shared_services_api_endpoints__WEBPACK_IMPORTED_MODULE_0__.buildZikrApiUrls)(this.appService.config || {}, route);
  }
}
ZikrService.ɵfac = function ZikrService_Factory(t) {
  return new (t || ZikrService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_app_service__WEBPACK_IMPORTED_MODULE_1__.AppService));
};
ZikrService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: ZikrService,
  factory: ZikrService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_zikr_zikr_module_ts.js.map