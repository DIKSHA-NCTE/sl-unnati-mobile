(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["files-files-module"],{

/***/ "./src/app/files/files.module.ts":
/*!***************************************!*\
  !*** ./src/app/files/files.module.ts ***!
  \***************************************/
/*! exports provided: FilesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesPageModule", function() { return FilesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _files_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./files.page */ "./src/app/files/files.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");









var routes = [
    {
        path: '',
        component: _files_page__WEBPACK_IMPORTED_MODULE_6__["FilesPage"]
    }
];
var FilesPageModule = /** @class */ (function () {
    function FilesPageModule() {
    }
    FilesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
            ],
            declarations: [_files_page__WEBPACK_IMPORTED_MODULE_6__["FilesPage"]]
        })
    ], FilesPageModule);
    return FilesPageModule;
}());



/***/ }),

/***/ "./src/app/files/files.page.html":
/*!***************************************!*\
  !*** ./src/app/files/files.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'file.title' | translate\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\"\n    [noBorder]=\"true\">\n  </app-header>\n</ion-header>\n<ion-content>\n  <div class=\"tabs-list\">\n    <div class=\"custom-tab\" (click)=\"selectTab('images')\" [ngClass]=\"{'active-tab': activeTab == 'images'}\">\n      {{ \"file.images\" | translate }}</div>\n    <div class=\"custom-tab\" (click)=\"selectTab('files')\" [ngClass]=\"{'active-tab':  activeTab == 'files'}\">\n      {{ \"file.files\" | translate }}\n    </div>\n  </div>\n  <div *ngIf=\"currentMyProject\" class=\"image-container\">\n    <div *ngFor=\"let task of currentMyProject.tasks\">\n      <ion-card *ngIf=\"activeTab == 'images' && (task.remarks || task.imageUrl)\">\n        <ion-card-header>\n          <h4> {{task.title}} </h4>\n        </ion-card-header>\n        <ion-card-content *ngIf=\"task.remarks && !task.imageUrl\">\n          {{task.remarks}}\n        </ion-card-content>\n        <ion-card-content *ngIf=\"task.remarks && task.imageUrl\">\n          <ion-row>\n            <ion-col size=\"6\">\n              {{task.remarks}}\n            </ion-col>\n            <ion-col size=\"6\">\n              <img src=\"{{task.imageUrl}}\">\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n        <ion-card-content *ngIf=\"!task.remarks && task.imageUrl\">\n            <ion-row>\n              <ion-col size=\"6\">\n                <img src=\"{{task.imageUrl}}\">\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n  <div *ngIf=\"currentMyProject\" class=\"file-container\">\n    <div *ngFor=\"let task of currentMyProject.tasks\">\n      <ion-card *ngIf=\"activeTab == 'files' && task.file\" style=\"border-radius: 4px;\">\n        <ion-card-header style=\"background: #e3e3e3; color: #000; padding: 10px;\">\n          <h5> {{task.title}} </h5>\n        </ion-card-header>\n        <ion-card-content style=\"padding: 0px;\">\n          <ion-card style=\"padding: 0px; border-radius: 0px;color: #000;\" (click)=\"downloadFile(task)\">\n            <ion-grid>\n              <ion-row>\n                <ion-col style=\"min-width: 85%; margin: auto;\n                          font-weight: 500; font-size: 1.2em;\">\n                  {{ task.file.name}}\n                </ion-col>\n                <ion-col class=\"arrow-mark\">\n                  <ion-icon name=\"ios-arrow-forward\"> </ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/files/files.page.scss":
/*!***************************************!*\
  !*** ./src/app/files/files.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabs-list {\n  position: fixed;\n  width: 100%;\n  z-index: 999; }\n\n.custom-card {\n  margin: 0px;\n  background: #fff; }\n\n.custom-card ion-card-content {\n    padding: 0px;\n    font-size: 16px;\n    color: #000; }\n\n.custom-tab {\n  width: 50%;\n  background: #fff;\n  color: #000;\n  float: left;\n  padding: 10px;\n  text-align: center;\n  font-size: 18px;\n  border-bottom: 2px solid #b23e33; }\n\n.active-tab {\n  background: #b23e33;\n  color: #fff; }\n\n.image-container {\n  margin-top: 60px; }\n\n.image-container ion-card {\n    border-radius: 1em;\n    color: #000; }\n\n.image-container ion-card ion-card-header {\n      border-bottom: 1px solid #000;\n      margin: 0px 10px;\n      padding: 10px; }\n\n.image-container ion-card ion-card-header h4 {\n        margin-top: 5px;\n        margin-bottom: 5px; }\n\n.image-container ion-card ion-card-content {\n      padding-top: 10px; }\n\n.file-container {\n  margin-top: 60px; }\n\n.file-container .arrow-mark {\n    margin: auto;\n    text-align: right;\n    font-size: 1.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy91bm5hdGktbW9iaWxlLWFwcGxpY2F0aW9uL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9maWxlcy9maWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFFZDtFQUVFLFdBQVc7RUFDWCxnQkFBZSxFQUFBOztBQUhqQjtJQUtFLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVyxFQUFBOztBQUdiO0VBQ0UsVUFBUztFQUNULGdCQUFlO0VBQ2YsV0FBVztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQ0FBZ0MsRUFBQTs7QUFFcEM7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsZ0JBQWUsRUFBQTs7QUFEakI7SUFHSSxrQkFBa0I7SUFDbEIsV0FBVyxFQUFBOztBQUpmO01BTVEsNkJBQTZCO01BQzdCLGdCQUFnQjtNQUNoQixhQUFhLEVBQUE7O0FBUnJCO1FBVVksZUFBZTtRQUNmLGtCQUFrQixFQUFBOztBQVg5QjtNQWVRLGlCQUFpQixFQUFBOztBQUl6QjtFQUVFLGdCQUFlLEVBQUE7O0FBRmpCO0lBSUksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZpbGVzL2ZpbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzLWxpc3R7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgfVxuICAuY3VzdG9tLWNhcmRcbiAge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICBpb24tY2FyZC1jb250ZW50e1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICB9XG4gIC5jdXN0b20tdGFie1xuICAgIHdpZHRoOjUwJTtcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2IyM2UzMztcbiAgfVxuICAuYWN0aXZlLXRhYntcbiAgICBiYWNrZ3JvdW5kOiAjYjIzZTMzO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgLmltYWdlLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOjYwcHg7XG4gICAgaW9uLWNhcmR7XG4gICAgICBib3JkZXItcmFkaXVzOiAxZW07XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIGlvbi1jYXJkLWhlYWRlcntcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4OztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmZpbGUtY29udGFpbmVyXG4gIHtcbiAgICBtYXJnaW4tdG9wOjYwcHg7XG4gICAgLmFycm93LW1hcmt7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/files/files.page.ts":
/*!*************************************!*\
  !*** ./src/app/files/files.page.ts ***!
  \*************************************/
/*! exports provided: FilesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesPage", function() { return FilesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _create_task_create_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-task/create-task.service */ "./src/app/create-task/create-task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/base64/ngx */ "./node_modules/@ionic-native/base64/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-chooser/ngx */ "./node_modules/@ionic-native/file-chooser/ngx/index.js");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");











var FilesPage = /** @class */ (function () {
    function FilesPage(createTaskService, route, platform, transfer, base64, fileChooser, file, fileOpener, storage) {
        var _this = this;
        this.createTaskService = createTaskService;
        this.route = route;
        this.platform = platform;
        this.transfer = transfer;
        this.base64 = base64;
        this.fileChooser = fileChooser;
        this.file = file;
        this.fileOpener = fileOpener;
        this.storage = storage;
        this.activeTab = 'images';
        this.back = 'project-view/project-detail/my_projects';
        route.params.subscribe(function (params) {
            _this.getCurrentProject(params.id);
        });
    }
    FilesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.isIos = _this.platform.is('ios') ? true : false;
            _this.appFolderPath = _this.isIos ? _this.file.documentsDirectory : _this.file.externalApplicationStorageDirectory;
        });
    };
    FilesPage.prototype.getCurrentProject = function (id) {
        var _this = this;
        this.storage.get('projects').then(function (projectList) {
            projectList[0].projects.forEach(function (project) {
                if (project.tasks && project.tasks.length > 0) {
                    project.tasks.forEach(function (task) {
                        if (task.imageUrl) {
                            task.imageUrl = 'data:image/jpeg;base64,' + task.imageUrl;
                        }
                    });
                }
                if (project._id == id) {
                    _this.currentMyProject = project;
                }
            });
        });
    };
    FilesPage.prototype.selectTab = function (type) {
        this.activeTab = type;
    };
    FilesPage.prototype.downloadFile = function (task) {
        var _this = this;
        fetch(task.file.url, {
            method: "GET"
        }).then(function (res) { return res.blob(); }).then(function (blob) {
            _this.appFolderPath = decodeURIComponent(_this.appFolderPath);
            task.file.name = decodeURIComponent(task.file.name);
            _this.file.writeFile(_this.appFolderPath, task.file.name, blob, { replace: true }).then(function (res) {
                _this.fileOpener.open(res.toInternalURL(), 'application/pdf').then(function (res) {
                    console.log(res, 'sucess');
                }).catch(function (err) {
                    console.log(err, 'error');
                });
            }).catch(function (err) {
                console.log('error in catch');
            });
        }).catch(function (err) {
            console.log('error');
        });
    };
    FilesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-files',
            template: __webpack_require__(/*! ./files.page.html */ "./src/app/files/files.page.html"),
            styles: [__webpack_require__(/*! ./files.page.scss */ "./src/app/files/files.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_create_task_create_task_service__WEBPACK_IMPORTED_MODULE_2__["CreateTaskService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"],
            _ionic_native_base64_ngx__WEBPACK_IMPORTED_MODULE_6__["Base64"],
            _ionic_native_file_chooser_ngx__WEBPACK_IMPORTED_MODULE_8__["FileChooser"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"],
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_9__["FileOpener"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["Storage"]])
    ], FilesPage);
    return FilesPage;
}());



/***/ })

}]);
//# sourceMappingURL=files-files-module.js.map