(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-task-create-task-module"],{

/***/ "./src/app/create-task/create-task.module.ts":
/*!***************************************************!*\
  !*** ./src/app/create-task/create-task.module.ts ***!
  \***************************************************/
/*! exports provided: CreateTaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskPageModule", function() { return CreateTaskPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _create_task_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-task.page */ "./src/app/create-task/create-task.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _create_task_page__WEBPACK_IMPORTED_MODULE_7__["CreateTaskPage"]
    }
];
var CreateTaskPageModule = /** @class */ (function () {
    function CreateTaskPageModule() {
    }
    CreateTaskPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
            ],
            declarations: [_create_task_page__WEBPACK_IMPORTED_MODULE_7__["CreateTaskPage"]]
        })
    ], CreateTaskPageModule);
    return CreateTaskPageModule;
}());



/***/ }),

/***/ "./src/app/create-task/create-task.page.html":
/*!***************************************************!*\
  !*** ./src/app/create-task/create-task.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'add_task.title' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\"\n    [isParam]=\"parameter\" [noBorder]=\"false\">\n  </app-header>\n</ion-header>\n<ion-content>\n  <h4 style=\"padding: 10px 15px;\" *ngIf=\"!editTitle\" (click)=\"allowEdit('title')\">{{currentMyProject?.title}}</h4>\n  <ion-item class=\"custom-ion-item\" *ngIf=\"editTitle\" (mouseout)=\"blockEdit('title')\">\n    <ion-label class=\"custom-label\" position=\"floating\"\n      [ngClass]=\"{'required-field':markLabelsAsInvalid && !currentMyProject.title}\">\n      {{'create_project.title_of_project' | translate}}</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"currentMyProject.title\" name=\"title\"\n      placeholder=\"{{'create_project.placeholder_project_title'| translate}}\" maxlength=\"280\"></ion-input>\n  </ion-item>\n  <form [formGroup]=\"addTask\" class=\"create-project\">\n      <ion-label class=\"custom-label\" position=\"floating\" style=\"text-transform: none;padding-left: 15px; font-size: 20px;\"\n      [ngClass]=\"{'required-field':markLabelsAsInvalid}\">{{'add_task.add_a_task'| translate}}\n    </ion-label>\n    <ion-item class=\"custom-ion-item\">\n      <ion-input type=\"text\" [(ngModel)]=\"task.title\" name=\"title\" formControlName=\"title\"\n        placeholder=\"{{'add_task.placeholder_task_title'| translate}}\" style=\"border-top-right-radius: 0px;\n      border-bottom-right-radius: 0px;\"></ion-input>\n      <img src=\"assets/images/timetable.png\" slot=\"end\" class=\"right-icon\" (click)=\"setDate()\">\n    </ion-item>\n    <ion-button (click)=\"create()\" color=\"primary\"  slot=\"end\" class=\"add-btn\">\n      {{'button.add' | translate}}\n    </ion-button>\n  </form>\n  <!-- tasks list -->\n  <div class=\"tasks-container\">\n    <div *ngIf=\"currentMyProject?.tasks\">\n      <div *ngFor=\"let task of currentMyProject?.tasks\">\n      <ion-card  (click)=\"navigateTaskView(task)\" *ngIf=\"!task.isDeleted\">\n        <ion-card-header>\n          <h4>{{task?.title}}</h4>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"8\">\n              <img src=\"assets/images/timetable.png\">\n              <span style=\"font-size: 16px;\n            font-weight: 600;\">\n                {{task?.endDate | date : 'dd-MM-yyyy'}} </span>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div class=\"statusbar\" *ngIf=\"task?.status\"\n                [ngClass]=\"{'notyetstart': task.status == 'Not started','completed': task.status == 'Completed', 'inprogress': task.status == 'In Progress'}\">\n                <div class=\"status-plate\">{{'add_task.status' | translate}} </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n      </div>\n    </div>\n  </div>\n  <!-- Popup -->\n  <div *ngIf=\"showpopup\" class=\"custom-popup\">\n    <div class=\"pop-container\">\n      <div class=\"pop-ion\">\n        <ion-icon ios='ios-checkmark-circle' md='md-checkmark-circle' color='primary' style='font-size:60px;'>\n        </ion-icon>\n      </div>\n      <div class=\"pop-msg\">\n        <h5> {{'message.after_prject_create' | translate}}</h5>\n      </div>\n      <ion-row class=\"pop-btn\">\n        <ion-col size=\"6\">\n          <ion-button color=\"primary\" (click)=\"closepopup()\"> {{'button.continue' | translate}}</ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button color=\"primary\" (click)=\"navigateToProjectViewScreen()\"> {{'button.view_project' | translate}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n  <!-- Popup ends here -->\n  <div>\n    <ion-button (click)=\"save()\" color=\"secondary\" class=\"round-corner-btn\" expand=\"block\">\n      {{'button.save_and_view' | translate}}\n    </ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/create-task/create-task.page.scss":
/*!***************************************************!*\
  !*** ./src/app/create-task/create-task.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-icon {\n  margin: auto;\n  padding: 5px;\n  border: 1px solid #000;\n  border-left: none;\n  height: 3.3em;\n  width: 3.2em;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\n.add-btn {\n  text-transform: capitalize;\n  margin-right: 15px;\n  font-family: 'SourceSansPro-Bold';\n  font-size: 16px;\n  font-weight: 600;\n  float: right; }\n\nion-label {\n  font-family: 'SourceSansPro-Bold';\n  text-transform: uppercase;\n  font-size: 22px;\n  font-weight: 600; }\n\n.tasks-container {\n  margin-top: 55px;\n  min-height: 50%;\n  margin-bottom: 20px; }\n\n.tasks-container ion-card {\n    margin: 5px 0px;\n    padding: 5px;\n    border-radius: 0px; }\n\n.tasks-container ion-card ion-card-header {\n      padding: 5px 15px;\n      font-family: 'SourceSansPro-Bold' !important; }\n\n.tasks-container ion-card ion-card-header h4 {\n        margin: 0px;\n        color: #000; }\n\n.tasks-container ion-card ion-card-content {\n      padding: 0px; }\n\n.tasks-container ion-card ion-card-content img {\n        width: 30px;\n        float: left;\n        margin: 0px 10px; }\n\n.tasks-container ion-card ion-card-content .statusbar {\n        height: 5px;\n        width: 95%;\n        border-radius: 15px; }\n\n.tasks-container ion-card ion-card-content .statusbar .status-plate {\n          text-align: center;\n          text-transform: capitalize;\n          padding-top: 10px;\n          font-size: 16px;\n          font-weight: 600; }\n\n.tasks-container ion-card ion-card-content .notyetstart {\n        background: #e6e6e6; }\n\n.tasks-container ion-card ion-card-content .completed {\n        background: #66f271; }\n\n.tasks-container ion-card ion-card-content .inprogress {\n        background: #ed8e3b; }\n\n.custom-popup {\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 30%;\n  width: 100%;\n  height: 100%;\n  overflow: auto; }\n\n.custom-popup .pop-container {\n    margin: auto;\n    max-width: 80%;\n    box-shadow: 0px 3px 8px 4px #e2e2e2;\n    background: #fff;\n    padding: 10px; }\n\n.custom-popup .pop-container .pop-ion {\n      text-align: center; }\n\n.custom-popup .pop-container .pop-ion ion-icon {\n        font-size: 60px; }\n\n.custom-popup .pop-container .pop-msg {\n      margin: 0px 20px; }\n\n.custom-popup .pop-container .pop-btn {\n      margin: 0px 15px; }\n\n.custom-popup .pop-container .pop-btn ion-button {\n        text-transform: capitalize;\n        font-family: 'SourceSansPro-Bold' !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy91bm5hdGktbW9iaWxlLWFwcGxpY2F0aW9uL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9jcmVhdGUtdGFzay9jcmVhdGUtdGFzay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsK0JBQStCLEVBQUE7O0FBRW5DO0VBRUksMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRW5CO0VBQ0ksZ0JBQWU7RUFDZixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBSHZCO0lBS08sZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0IsRUFBQTs7QUFQekI7TUFVTyxpQkFBaUI7TUFDakIsNENBQTRDLEVBQUE7O0FBWG5EO1FBYVcsV0FBVztRQUNYLFdBQVcsRUFBQTs7QUFkdEI7TUFrQlEsWUFBWSxFQUFBOztBQWxCcEI7UUFxQlcsV0FBVztRQUFFLFdBQVc7UUFBRSxnQkFBZ0IsRUFBQTs7QUFyQnJEO1FBd0JXLFdBQVc7UUFDWCxVQUFVO1FBQ1YsbUJBQW1CLEVBQUE7O0FBMUI5QjtVQTRCVyxrQkFBa0I7VUFDbEIsMEJBQTBCO1VBQzFCLGlCQUFpQjtVQUNqQixlQUFlO1VBQ2YsZ0JBQ0EsRUFBQTs7QUFqQ1g7UUFxQ1csbUJBQW1CLEVBQUE7O0FBckM5QjtRQXlDVyxtQkFBbUIsRUFBQTs7QUF6QzlCO1FBNkNXLG1CQUFtQixFQUFBOztBQU0zQjtFQUVBLGVBQWU7RUFDZixVQUFVO0VBQ1YsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFSZDtJQVdJLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixhQUFhLEVBQUE7O0FBZmpCO01BaUJRLGtCQUFrQixFQUFBOztBQWpCMUI7UUFtQlksZUFBYyxFQUFBOztBQW5CMUI7TUF3QkksZ0JBQWdCLEVBQUE7O0FBeEJwQjtNQTJCUSxnQkFBZ0IsRUFBQTs7QUEzQnhCO1FBNkJZLDBCQUEwQjtRQUMxQiw0Q0FBNEMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS10YXNrL2NyZWF0ZS10YXNrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodC1pY29ue1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBoZWlnaHQ6IDMuM2VtO1xuICAgIHdpZHRoOiAzLjJlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG59XG4uYWRkLWJ0blxue1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBmb250LWZhbWlseTogJ1NvdXJjZVNhbnNQcm8tQm9sZCc7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuaW9uLWxhYmVse1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlU2Fuc1Byby1Cb2xkJztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gLnRhc2tzLWNvbnRhaW5lcntcbiAgICAgbWFyZ2luLXRvcDo1NXB4O1xuICAgICBtaW4taGVpZ2h0OiA1MCU7XG4gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgIGlvbi1jYXJke1xuICAgICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICBpb24tY2FyZC1oZWFkZXJcbiAgICAge1xuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdTb3VyY2VTYW5zUHJvLUJvbGQnICFpbXBvcnRhbnQ7XG4gICAgICAgIGg0e1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICB9XG4gICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBpbWdcbiAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7IGZsb2F0OiBsZWZ0OyBtYXJnaW46IDBweCAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0dXNiYXJ7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgLnN0YXR1cy1wbGF0ZXtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm5vdHlldHN0YXJ0XG4gICAgICAgIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbXBsZXRlZFxuICAgICAgICB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjZmMjcxO1xuICAgICAgICB9XG4gICAgICAgIC5pbnByb2dyZXNzXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZDhlM2I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgIH1cbiB9XG4gXG4gICAgLmN1c3RvbS1wb3B1cFxuICAgIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMzAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAucG9wLWNvbnRhaW5lclxuICAgIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA4cHggNHB4ICNlMmUyZTI7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIC5wb3AtaW9ue1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnBvcC1tc2dcbiAgICAgICAge1xuICAgICAgICBtYXJnaW46IDBweCAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wb3AtYnRue1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTVweDtcbiAgICAgICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTb3VyY2VTYW5zUHJvLUJvbGQnICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/create-task/create-task.page.ts":
/*!*************************************************!*\
  !*** ./src/app/create-task/create-task.page.ts ***!
  \*************************************************/
/*! exports provided: CreateTaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskPage", function() { return CreateTaskPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _create_task_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-task.service */ "./src/app/create-task/create-task.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");










var CreateTaskPage = /** @class */ (function () {
    function CreateTaskPage(formBuilder, router, datepipe, datePicker, storage, homeService, route, createTaskService, toastService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.datepipe = datepipe;
        this.datePicker = datePicker;
        this.storage = storage;
        this.homeService = homeService;
        this.route = route;
        this.createTaskService = createTaskService;
        this.toastService = toastService;
        this.today = new Date();
        this.task = {};
        this.markLabelsAsInvalid = false;
        this.editTitle = false;
        this.showpopup = false;
        route.params.subscribe(function (params) {
            _this.getCurrentProject(params.id);
            _this.from = params.from;
            if (params.from == 'cp') {
                _this.back = 'project-view/create-project';
            }
            else {
                _this.back = 'project-view/project-detail/';
                _this.parameter = 'my_projects';
            }
        });
    }
    CreateTaskPage.prototype.ionViewDidEnter = function () {
        this.showpopup = false;
        this.prepareForm();
        this.task = {};
        this.markLabelsAsInvalid = false;
    };
    CreateTaskPage.prototype.ngOnInit = function () {
        this.prepareForm();
        this.today = this.datepipe.transform(this.today, 'dd-MM-yyyy');
    };
    //Form preparing
    CreateTaskPage.prototype.prepareForm = function () {
        this.addTask = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CreateTaskPage.prototype.getCurrentProject = function (id) {
        var _this = this;
        this.storage.get('projects').then(function (projectList) {
            projectList[0].projects.forEach(function (project) {
                if (project._id == id) {
                    _this.currentMyProject = project;
                }
            });
        });
    };
    // set date
    CreateTaskPage.prototype.setDate = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
            _this.task.endDate = _this.datepipe.transform(new Date(date));
        }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    //  Create new Task
    //  Create new Task
    CreateTaskPage.prototype.create = function () {
        var _this = this;
        if (!this.task.title) {
            this.markLabelsAsInvalid = true;
        }
        else {
            this.markLabelsAsInvalid = false;
            this.task.status = "Not started";
            this.task.isSync = false;
            if (!this.task.subTasks) {
                this.task.subTasks = [];
            }
            this.task.isNew = true;
            if (this.currentMyProject.tasks) {
                // adding task id
                this.task._id = this.currentMyProject.tasks.length + 2;
            }
            else {
                this.task._id = 1;
            }
            this.task.projectId = this.currentMyProject._id;
            this.currentMyProject.lastUpdate = new Date();
            this.currentMyProject.tasks.push(this.task);
            this.currentMyProject.isEdited = true;
            this.storage.set('newcreatedproject', this.currentMyProject).then(function (cp) {
                _this.currentMyProject = cp;
                // if (this.currentMyProject.createdType) {
                _this.storage.get('projects').then(function (myProjects) {
                    if (myProjects) {
                        myProjects[0].projects.forEach(function (myProject, i) {
                            if (myProject._id == cp._id) {
                                myProjects[0].projects[i] = cp;
                            }
                        });
                        _this.storage.set('projects', myProjects).then(function (success) {
                            _this.toastService.successToast('message.task_is_created');
                            _this.homeService.loadActiveProjects();
                        });
                    }
                });
            });
            this.task = {};
            this.prepareForm();
        }
    };
    // save project
    CreateTaskPage.prototype.save = function () {
        if (this.from != 'pd') {
            this.showpopup = true;
        }
        else {
            this.navigateToProjectViewScreen();
        }
    };
    CreateTaskPage.prototype.closepopup = function () {
        this.showpopup = false;
    };
    // Navigate to project view screen
    CreateTaskPage.prototype.navigateToProjectViewScreen = function () {
        var _this = this;
        this.closepopup();
        this.storage.set('projectToBeView', this.currentMyProject).then(function (project) {
            _this.router.navigate(['/project-view/project-detail/my_projects']);
        });
    };
    // navigate to task detail screen
    CreateTaskPage.prototype.navigateTaskView = function (task) {
        var _this = this;
        this.storage.set('cTask', task).then(function (ct) {
            _this.router.navigate(['/project-view/current-task', task._id, _this.from]);
        });
    };
    // allow user to edit the values
    CreateTaskPage.prototype.allowEdit = function (field) {
        switch (field) {
            case 'title': {
                this.editTitle = true;
                break;
            }
        }
    };
    // disable the edit option, once user click outside the input field.
    CreateTaskPage.prototype.blockEdit = function (field) {
        switch (field) {
            case 'title': {
                if (this.currentMyProject.title) {
                    this.editTitle = false;
                    this.markLabelsAsInvalid = false;
                }
                else {
                    this.markLabelsAsInvalid = true;
                }
                this.updateProject();
                break;
            }
        }
    };
    // After editing update the project with new values.
    CreateTaskPage.prototype.updateProject = function () {
        var _this = this;
        this.currentMyProject.isEdited = true;
        this.currentMyProject.lastUpdate = new Date();
        this.storage.set('newcreatedproject', this.currentMyProject).then(function (cp) {
            _this.currentMyProject = cp;
            _this.storage.get('projects').then(function (myProjects) {
                if (myProjects) {
                    myProjects[0].projects.forEach(function (myProject) {
                        if (myProject._id == cp._id) {
                            myProject.title = cp.title;
                            myProject.tasks = cp.tasks;
                            _this.storage.set('projects', myProjects).then(function (success) {
                                _this.homeService.loadActiveProjects();
                            });
                        }
                    });
                }
            });
        });
    };
    CreateTaskPage.prototype.ngOnDestroy = function () {
        this.showpopup = false;
    };
    CreateTaskPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-task',
            template: __webpack_require__(/*! ./create-task.page.html */ "./src/app/create-task/create-task.page.html"),
            styles: [__webpack_require__(/*! ./create-task.page.scss */ "./src/app/create-task/create-task.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_4__["DatePicker"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
            _home_home_service__WEBPACK_IMPORTED_MODULE_7__["HomeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _create_task_service__WEBPACK_IMPORTED_MODULE_8__["CreateTaskService"],
            _toast_service__WEBPACK_IMPORTED_MODULE_9__["ToastService"]])
    ], CreateTaskPage);
    return CreateTaskPage;
}());



/***/ })

}]);
//# sourceMappingURL=create-task-create-task-module.js.map