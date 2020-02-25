(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-view-category-view-module"],{

/***/ "./src/app/category-view/category-view.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/category-view/category-view.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoryViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryViewPageModule", function() { return CategoryViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _category_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-view.page */ "./src/app/category-view/category-view.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");









var routes = [
    {
        path: '',
        component: _category_view_page__WEBPACK_IMPORTED_MODULE_6__["CategoryViewPage"]
    }
];
var CategoryViewPageModule = /** @class */ (function () {
    function CategoryViewPageModule() {
    }
    CategoryViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
            ],
            declarations: [_category_view_page__WEBPACK_IMPORTED_MODULE_6__["CategoryViewPage"]]
        })
    ], CategoryViewPageModule);
    return CategoryViewPageModule;
}());



/***/ }),

/***/ "./src/app/category-view/category-view.page.html":
/*!*******************************************************!*\
  !*** ./src/app/category-view/category-view.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <app-header [title]=\"'library.title'| translate\" [bg]=\"bgcolor\" [showMenu]=\"false\" [showBack]=\"true\" [isGoBack]=\"back\"\n    [noBorder]=\"false\">\n  </app-header>\n</ion-header>\n<ion-content class=\"ion-padding\" style=\"--background: rgb(247, 247, 247);\">\n  <div *ngIf=\"!showSkeleton\">\n    <ion-item class=\"search-bar-custom\" style=\"margin:19px 5px 15px 5px;\">\n      <ion-icon name=\"search\" item-left color=\"dark\"></ion-icon>\n      <ion-input type=\"text\" placeholder=\"{{'home.search' | translate }}\" [(ngModel)]=\"searchInput\"></ion-input>\n    </ion-item>\n    <ion-grid>\n      <ion-row class=\"category-box\">\n        <ion-col size=\"3\">\n          <img src=\"{{categoryHead?.icon}}\" class=\"cat-icon\">\n        </ion-col>\n        <ion-col size=\"9\">\n          <h4> {{categoryHead?.title}}</h4>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div *ngIf=\"catType === 'my_projects'\">\n      <div *ngFor=\"let projects of projects\">\n        <div *ngFor=\"let project of projects.projects | searchProjects: searchInput\">\n          <ion-card class=\"category-projects\"\n            *ngIf=\"(project.createdType == 'by self' || project.createdType == 'by reference') && !project.isDeleted\">\n            <ion-card-header>\n              <ion-row>\n                <ion-col size=\"4\" class=\"label-box\" (click)=\"projectView(project)\">\n                  {{'library_view.project_name'| translate}}\n                </ion-col>\n                <ion-col size=\"7\" class=\"val-box\" (click)=\"projectView(project)\" style=\"padding-left:0px;\">\n                  {{project.title}}\n                </ion-col>\n                <ion-col size=\"1\">\n                  <ion-icon *ngIf=\"catType === 'my_projects'\" name=\"more\" class=\"popover-menu\"\n                    (click)=\"showMenu($event, project)\">\n                  </ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-card-header>\n            <ion-card-content (click)=\"projectView(project)\">\n              <ion-row>\n                <ion-col size=\"4\" class=\"label-box\">\n                  {{'library_view.goal'| translate}}\n                </ion-col>\n                <ion-col size=\"8\" class=\"val-box\">\n                  {{project.goal}}\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n          <ion-card class=\"category-projects\" *ngIf=\"( projects.projects | searchProjects: searchInput).length == 0\">\n            <div class=\"no-results\">\n              No Projects available.\n            </div>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"catType != 'my_projects'\">\n      <ion-card class=\"category-projects\" *ngFor=\"let template of templates | searchProjects: searchInput\"\n        (click)=\"projectView(template)\">\n        <ion-card-header>\n          <ion-row>\n            <ion-col size=\"4\" class=\"label-box\">\n              {{'library_view.project_name'| translate}}\n            </ion-col>\n            <ion-col size=\"8\" class=\"val-box\" style=\"padding-left:0px;\">\n              {{template?.title}}\n            </ion-col>\n          </ion-row>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-row>\n            <ion-col size=\"4\" class=\"label-box\">\n              {{'library_view.goal'| translate}}\n            </ion-col>\n            <ion-col size=\"8\" class=\"val-box\">\n              {{template?.goal}}\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n      <ion-card class=\"category-projects\" *ngIf=\"( templates | searchProjects: searchInput).length == 0\">\n        <div class=\"no-results\">\n          No Projects available.\n        </div>\n      </ion-card>\n    </div>\n\n    <div style=\"height: 30px;\"> </div>\n  </div>\n  <!-- loader -->\n  <div *ngIf=\"showSkeleton\">\n    <ion-card>\n      <ion-card-content class=\"skeleton-card-content\">\n        <ion-card *ngFor=\"let skeleton of skeletons\">\n          <ion-card-content class=\"skeleton-card-content\">\n            <p>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <!-- loader ends here -->\n</ion-content>"

/***/ }),

/***/ "./src/app/category-view/category-view.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/category-view/category-view.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-box h4 {\n  text-transform: uppercase; }\n\n.category-box .cat-icon {\n  max-width: 60%; }\n\n.category-projects {\n  background: #fff; }\n\n.category-projects ion-card-header {\n    border-bottom: 2px solid #b23e33;\n    padding-bottom: 0px;\n    padding-top: 5px;\n    padding-right: 0px; }\n\n.category-projects .popover-menu {\n    margin-top: 0px;\n    float: right;\n    font-size: 26px;\n    z-index: 999;\n    color: #b23e33; }\n\n.category-projects .val-box {\n    font-family: 'SourceSansPro';\n    font-weight: 600;\n    font-size: 12px;\n    color: #000;\n    margin: auto; }\n\n.category-projects .label-box {\n    margin: auto;\n    font-family: 'SourceSansPro-Bold';\n    font-weight: 600;\n    color: #5a6779; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aXNod2FuYXRoYmFkaWdlci9Eb2N1bWVudHMvYXBwcy91bm5hdGktbW9iaWxlLWFwcGxpY2F0aW9uL3NsLXVubmF0aS1tb2JpbGUvc3JjL2FwcC9jYXRlZ29yeS12aWV3L2NhdGVnb3J5LXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEseUJBQXlCLEVBQUE7O0FBRmpDO0VBS1EsY0FBYyxFQUFBOztBQUd0QjtFQUNJLGdCQUFnQixFQUFBOztBQURwQjtJQUdRLGdDQUFnQztJQUNoQyxtQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBOztBQU4xQjtJQVNRLGVBQWU7SUFDZixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjLEVBQUE7O0FBYnRCO0lBZ0JRLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVU7SUFDVixZQUFZLEVBQUE7O0FBcEJwQjtJQXVCUSxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLGdCQUFnQjtJQUNoQixjQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yeS12aWV3L2NhdGVnb3J5LXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5LWJveHtcbiAgICBoNHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gICAgLmNhdC1pY29ue1xuICAgICAgICBtYXgtd2lkdGg6IDYwJTtcbiAgICB9XG59XG4uY2F0ZWdvcnktcHJvamVjdHN7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBpb24tY2FyZC1oZWFkZXJ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjIzZTMzOyBcbiAgICAgICAgcGFkZGluZy1ib3R0b206MHB4OyBcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIH1cbiAgICAucG9wb3Zlci1tZW51e1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4OyBcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICBjb2xvcjogI2IyM2UzMztcbiAgICB9XG4gICAgLnZhbC1ib3h7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU291cmNlU2Fuc1Bybyc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IzAwMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAubGFiZWwtYm94e1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU291cmNlU2Fuc1Byby1Cb2xkJztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IzVhNjc3OTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/category-view/category-view.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/category-view/category-view.page.ts ***!
  \*****************************************************/
/*! exports provided: CategoryViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryViewPage", function() { return CategoryViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _category_view_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.view.service */ "./src/app/category-view/category.view.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/api */ "./src/app/api/api.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popover/popover.component */ "./src/app/popover/popover.component.ts");








var CategoryViewPage = /** @class */ (function () {
    function CategoryViewPage(rout, categaryService, storage, apiProvider, router, popoverController) {
        var _this = this;
        this.rout = rout;
        this.categaryService = categaryService;
        this.storage = storage;
        this.apiProvider = apiProvider;
        this.router = router;
        this.popoverController = popoverController;
        this.back = 'project-view/library';
        this.showSkeleton = false;
        this.skeletons = [{}, {}, {}, {}, {}, {}];
        this.bgcolor = '#f7f7f7';
        categaryService.deleteEvent.subscribe(function (value) {
            if (_this.catType == 'my_projects') {
                _this.categaryService.getMyProjects().then(function (myProjects) {
                    if (myProjects) {
                        myProjects = _this.getSortData(myProjects);
                        myProjects.forEach(function (element) {
                        });
                        _this.projects = myProjects;
                    }
                }, function (error) {
                    _this.showSkeleton = false;
                });
            }
        });
        rout.params.subscribe(function (param) {
            _this.catType = param.cat;
            if (param.from) {
                _this.from = param.from;
                if (_this.from == 'home') {
                    _this.back = 'project-view/home';
                }
            }
            switch (param.cat) {
                case 'my_projects': {
                    _this.categoryHead = {
                        icon: 'assets/images/libraryTiles/myprojects.png',
                        title: 'my projects'
                    };
                    _this.getMyProjects();
                    break;
                }
                case 'teacher': {
                    _this.categoryHead = {
                        icon: 'assets/images/libraryTiles/teacher.png',
                        title: 'teacher'
                    };
                    _this.getTemplates('Teacher');
                    break;
                }
                case 'students': {
                    _this.categoryHead = {
                        icon: 'assets/images/libraryTiles/students.png',
                        title: 'students'
                    };
                    _this.getTemplates('Student');
                    break;
                }
                case 'community': {
                    _this.categoryHead = {
                        icon: 'assets/images/libraryTiles/community.png',
                        title: 'community'
                    };
                    _this.getTemplates('Community');
                    //statements; 
                    break;
                }
                case 'school_process': {
                    //statements; 
                    _this.categoryHead = {
                        icon: 'assets/images/libraryTiles/sp.png',
                        title: 'school process'
                    };
                    _this.getTemplates('SchoolProcess');
                    break;
                }
                case 'infrastructure': {
                    _this.categoryHead = {
                        icon: 'assets/images/libraryTiles/infrastructure.png',
                        title: 'infrastructure'
                    };
                    _this.getTemplates('infrastructure');
                    //statements; 
                    break;
                }
                case 'education_leader': {
                    _this.categoryHead = {
                        icon: 'assets/images/libraryTiles/el.png',
                        title: 'education leader'
                    };
                    _this.getTemplates('EducationLeader');
                    break;
                }
                case 'other': {
                    _this.categoryHead = {
                        icon: 'assets/images/libraryTiles/others.png',
                        title: 'others'
                    };
                    _this.getTemplates('Other');
                    break;
                }
            }
        });
    }
    CategoryViewPage.prototype.getMyProjects = function () {
        var _this = this;
        this.showSkeleton = true;
        this.storage.get('projects').then(function (projects) {
            if (projects) {
                // projects = projects[0].projects.sort((a, b) => {
                //   <any>new Date(b.lastUpdate) - <any>new Date(a.lastUpdate);
                // });
                _this.projects = projects;
                _this.showSkeleton = false;
            }
            _this.showSkeleton = false;
        }, function (error) {
            _this.showSkeleton = false;
        });
    };
    CategoryViewPage.prototype.getSortData = function (myProjects) {
        return myProjects.sort(function (a, b) {
            return new Date(b.lastUpdate) - new Date(a.lastUpdate);
        });
    };
    CategoryViewPage.prototype.projectView = function (project) {
        var _this = this;
        this.storage.set('projectToBeView', project).then(function (project) {
            _this.router.navigate(['/project-view/project-detail', _this.catType]);
        });
    };
    CategoryViewPage.prototype.getTemplates = function (type) {
        var _this = this;
        this.showSkeleton = true;
        this.categaryService.getTemplates(type).then(function (templates) {
            if (templates) {
                _this.templates = templates;
            }
            _this.showSkeleton = false;
        }, function (error) {
            _this.showSkeleton = false;
        });
    };
    CategoryViewPage.prototype.showMenu = function (ev, project) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var pro, popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pro = project;
                        pro.share = true;
                        return [4 /*yield*/, this.popoverController.create({
                                component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_7__["PopoverComponent"],
                                componentProps: { project: pro },
                                event: ev,
                                translucent: true
                            })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CategoryViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-view',
            template: __webpack_require__(/*! ./category-view.page.html */ "./src/app/category-view/category-view.page.html"),
            styles: [__webpack_require__(/*! ./category-view.page.scss */ "./src/app/category-view/category-view.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _category_view_service__WEBPACK_IMPORTED_MODULE_3__["CategoryViewService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _api_api__WEBPACK_IMPORTED_MODULE_5__["ApiProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"]])
    ], CategoryViewPage);
    return CategoryViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=category-view-category-view-module.js.map