function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Router outlet to redirect to specified module on initialize-->\r\n<!--In this example, this outlet displays our layout module which has it's own router-outlet that displays it's children components within.-->\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/about-us/about-us.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/about-us/about-us.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAboutUsAboutUsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>about-us works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/authentication/logout/logout.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/authentication/logout/logout.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAuthenticationLogoutLogoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/404.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/404.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesError404ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\r\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\r\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/500.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/500.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesError500ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\r\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\r\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n\r\n<app-modal></app-modal>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/footer/footer.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/footer/footer.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesLayoutFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"bg-dark flex-shrink-0 bg-dark\">\r\n  <div class=\"container text-center\">\r\n    <a href=\"https://www.boltss.com\" class=\"text-muted\">Project layout, bolt 2020 all rights reserved.</a>\r\n  </div>\r\n</footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/header/header.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/header/header.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesLayoutHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Bootstrap Navigation Component-->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark justify-content-between\">\r\n  <!--Brand-->\r\n  <a class=\"navbar-brand\" routerLink=\"/reservation\"><img src=\"./assets/img/bolt.png\" alt=\"Bolt Solutions\" /></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button> \r\n\r\n  <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarSupportedContent\">\r\n    <form class=\"form-inline my-2 my-lg-0 mx-4\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\"  aria-label=\"Search\">\r\n      <!--<button class=\"btn btn-outline-primary my-2 my-sm-0\" type=\"submit\">Search</button>-->\r\n      <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n\r\n    </form>\r\n    <ul class=\"navbar-nav align-items-center\">\r\n      <li class=\"nav-item\">\r\n        <i class=\"fa fa-bell-o fa-lg mx-2\" aria-hidden=\"true\"></i>\r\n\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <i class=\"fa fa-cog fa-lg mx-2\" aria-hidden=\"true\"></i>\r\n\r\n        <!--<a class=\"nav-link disabled\" routerLink=\"/about-us\">Link</a>-->\r\n      </li>\r\n      <li class=\"nav-item  mr-5 initials\">\r\n        <a class=\"nav-link\" > {{initials }}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/layout/layout.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/layout/layout.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesLayoutLayoutLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Layout component includes Header, Footer, and router outlet (Component routing) selectors\r\n  (And any shared modules throughout the project's layout -depending on requirements\r\n  --->\r\n<!-- * Wrap layout within a flex box for design adjustments *-->\r\n<div class=\"d-flex flex-column min-vh-100\">\r\n  <!--Header-->\r\n  <app-header></app-header>\r\n\r\n  <!--Modules/Components-->\r\n  <router-outlet></router-outlet>\r\n\r\n\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-locations/service-locations.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-locations/service-locations.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesServiceLocationsServiceLocationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row servicesLocation\" *ngIf=\"!isMobile\">\r\n  <div class=\"col-lg-7 detailsSectionPC\"> <!--Details List (PC)-->\r\n    <div class=\"container-fluid\">\r\n      <h1>BOLT SALON Locations</h1>\r\n      <div class=\"searchContainer\">\r\n        <p>{{langVar.searchTitle}}</p>\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" [(ngModel)]=\"searchWords\" class=\"form-control\" (input)=\"SearchService()\" id=\"locationSearchBar\" placeholder=\"{{langVar.searchBarTitle}}\">\r\n          <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n        </div>\r\n        <div class=\"resultsSection\" (searchcriteria)=\"MatchString($event)\"> <!--Results Section-->\r\n          <div class=\"itemContainer mt-5\" *ngFor=\"let branch of branchsList; let i = index\" >\r\n            <div class=\"container\" (click)=\"ViewStoreMap(branch)\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <!--Store Details-->\r\n                  <h1 class=\"serviceHeader\">{{i+1}}-<span>{{branch.name}}</span></h1>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <!--Calculated Distance-->\r\n                  <h1 class=\"distance\">0.5KM</h1>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n\r\n                  <!--<p class=\"storeAvailabilityInfo\">Opens {{service.availability}}</p>-->\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-8\">\r\n                  <p class=\"storeAddressInfo\">{{branch.address}}</p>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n\r\n              <a style=\"background-color: transparent; border: none; color: #fff;background-color: transparent;border: none;color: #fff; text-align:center;\"\r\n                (click)=\"Reserve(branch)\">\r\n                 <!--href={{branch.webSiteLink}}>-->\r\n                reserve\r\n              </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-5 mapsSectionPC\">\r\n    <div #map class=\"googleMapsStyle\"></div>\r\n    <!--<agm-map [latitude]=\"selectedService.latitude\" [longitude]=\"selectedService.longitude\" [zoom]=\"zoom\">\r\n      <agm-marker [latitude]=\"selectedService.latitude\" [longitude]=\"selectedService.longitude\" [markerDraggable]=\"true\"></agm-marker>\r\n    </agm-map>-->\r\n    <!--<agm-map [latitude]=\"currentLatitude\" [longitude]=\"currentLongitude\" [zoom]=\"zoom\">\r\n\r\n    <agm-marker [latitude]=\"currentLatitude\" [longitude]=\"currentLongitude\" [markerDraggable]=\"true\"></agm-marker>\r\n\r\n  </agm-map>-->\r\n  </div>\r\n</div>\r\n\r\n<!--Mobile View-->\r\n<div class=\"row servicesLocation\" *ngIf=\"isMobile\">\r\n  <div class=\"container-fluid\">\r\n    <h1 style=\"color: #828282; font-weight: normal;\">{{servicesList[0].name}} Locations</h1>\r\n    <hr />\r\n    <div class=\"searchContainer\">\r\n      <p style=\"color: #4590f3;\" class=\"searchTitle\">{{langVar.searchTitle}}</p>\r\n      <div class=\"form-group\">\r\n        <input [(ngModel)]=\"searchWords\" type=\"text\" class=\"form-control\" (input)=\"SearchService()\" id=\"locationSearchBar\" placeholder=\"{{langVar.searchBarTitle}}\">\r\n        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n      </div>\r\n\r\n      <div class=\"resultsSection\" (searchcriteria)=\"MatchString($event)\">\r\n        <!--Results Section-->\r\n        <div class=\"itemContainer\" *ngFor=\"let service of servicesList; let i = index\" (click)=\"ViewStoreMap(service)\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <!--Store Details-->\r\n                <h1 >{{i+1}}- {{service.name}}</h1>\r\n              </div>\r\n              <div class=\"col-6\">\r\n                <!--Calculated Distance-->\r\n                <h1 class=\"distance\">{{service.distance}} KM</h1>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <p class=\"storeAvailabilityInfo\">Opens {{service.availability}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12\">\r\n                <p class=\"storeAddressInfo\">{{service.address}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12 text-center\">\r\n                <p class=\"viewButton\" *ngIf=\"selectedserviceMap != service.id\" style=\"color: #4590f3;\" (click)=\"ViewStoreMapResponsive(service)\">View In Map <i class=\"fas fa-arrow-alt-circle-down\"></i></p>\r\n                <p class=\"viewButton\" *ngIf=\"selectedserviceMap == service.id\" style=\"color: #4590f3;\" (click)=\"ViewLess(service.id)\">View Less<i class=\"fas fa-arrow-alt-circle-up\"></i></p>\r\n                <div class=\"mapView\" id=\"map{{service.id}}\" *ngIf=\"selectedserviceMap == service.id\">\r\n                  <agm-map [latitude]=\"service.latitude\" [longitude]=\"service.longitude\" [zoom]=\"15\"  class=\"googleMapsStyle\">\r\n                    <agm-marker [latitude]=\"service.latitude\" [longitude]=\"service.longitude\"></agm-marker>\r\n                  </agm-map>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/services/services.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/services/services.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesServicesServicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\" dir=\"{{direction}}\">\r\n  <header class=\"{{langVar.textAlign2}}\">\r\n    {{langVar.header}}\r\n  </header>\r\n  <hr class=\"headerLine\" />\r\n  <!--Settings Section-->\r\n  <div class=\"row serviceSettingsBar\">\r\n    <div class=\"col-lg-6 col-6 {{langVar.textAlign2}}\">\r\n      <label class=\"checkboxContainer\">\r\n        {{langVar.selectAll}}\r\n        <input type=\"checkbox\" [ngModel]=\"selectAllStatus\" (ngModelChange)=\"SelectAll($event)\"> <!--checked=\"checked\"-->\r\n        <span class=\"checkmark\"></span>\r\n      </label>\r\n    </div>\r\n    <div class=\"col-lg-6 col-6  {{langVar.textAlign1}}\">\r\n      <button type=\"button\" class=\"btn btn-lg multipleChoicesButton\" (click)=\"ToggleSelection()\">{{choiceButton}}</button>\r\n    </div>\r\n  </div>\r\n  <!--Services List Section-->\r\n  <div class=\"serviceMainContainer\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-12 serviceColumn\" dir=\"ltr\" *ngFor=\"let service of storesList; let i = index\">\r\n        <div class=\"serviceCard\" (click)=\"SelectService(service)\">\r\n          <h1>{{service.storeName}}</h1>\r\n        </div>\r\n        <label class=\"checkboxContainer mt-lg-3 mt-4\" *ngIf=\"isSelecting\">\r\n          {{langVar.select}}\r\n          <input type=\"checkbox\" id=\"checkbox{{service.id}}\" [ngModel]=\"service.isChecked\" (ngModelChange)=\"SetServiceCheckbox($event, service)\">\r\n          <span class=\"checkmark\"></span>\r\n        </label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!--End of Services List-->\r\n  <!--Settings Section-->\r\n  <div class=\"row serviceSettingsBar pt-lg-5\">\r\n    <div class=\"col-12 {{langVar.textAlign1}}\">\r\n      <button type=\"button\" class=\"btn btn-lg multipleChoicesButton\" (click)=\"ViewLocation()\">{{langVar.viewLocation}}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/modal/modal.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/modal/modal.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesSharedModalModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div bsModal #ChangeImg=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Change Image</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"ChangeImg.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"ChangeImg.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"myModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n\r\n<div bsModal #largeModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"largeModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"largeModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div> \r\n  </div> \r\n</div> \r\n\r\n<div bsModal #smallModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"smallModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"smallModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div> \r\n  </div> \r\n</div> \r\n\r\n\r\n<div bsModal #primaryModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-primary\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Modal title</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"primaryModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"primaryModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\r\n      </div>\r\n    </div> \r\n  </div>\r\n</div> \r\n\r\n\r\n<div bsModal #successModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-success\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Success</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"successModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>{{succesMsg}}</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"hideSuccessModal()\">Ok</button>\r\n      </div>\r\n    </div> \r\n  </div> \r\n</div> \r\n\r\n\r\n<div bsModal #warningModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-warning\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Warning</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"warningModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"warningModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-warning\">Save changes</button>\r\n      </div>\r\n    </div> \r\n  </div> \r\n</div> \r\n\r\n<div bsModal #dangerModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-danger\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Error</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"dangerModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>{{failmsg}}</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dangerModal.hide()\">Close</button>\r\n        <!--<button type=\"button\" class=\"btn btn-danger\">Save changes</button>-->\r\n      </div>\r\n    </div> \r\n  </div> \r\n</div> \r\n\r\n<div bsModal #infoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-info\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Info!</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"infoModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>One fine body&hellip;</p>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"infoModal.hide()\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-info\">Save changes</button>\r\n      </div>\r\n    </div> \r\n  </div> \r\n</div><!-- /.modal -->\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _modules_authentication_logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modules/authentication/logout/logout.component */
    "./src/app/modules/authentication/logout/logout.component.ts");
    /* harmony import */


    var _modules_error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modules/error/404.component */
    "./src/app/modules/error/404.component.ts");
    /* harmony import */


    var _modules_error_500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modules/error/500.component */
    "./src/app/modules/error/500.component.ts"); // Exported Routes for app-module router imports


    var routes = [{
      path: '404',
      component: _modules_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"]
    }, {
      path: '500',
      component: _modules_error_500_component__WEBPACK_IMPORTED_MODULE_5__["P500Component"]
    }, {
      path: 'logout',
      component: _modules_authentication_logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"]
    }, {
      path: 'reservation',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./modules/layout/layout.module */
        "./src/app/modules/layout/layout.module.ts")).then(function (m) {
          return m.LayoutModule;
        });
      }
    }, {
      path: 'auth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | modules-authentication-authentication-module */
        "modules-authentication-authentication-module").then(__webpack_require__.bind(null,
        /*! ./modules/authentication/authentication.module */
        "./src/app/modules/authentication/authentication.module.ts")).then(function (m) {
          return m.AuthenticationModule;
        });
      }
    }, {
      path: '',
      redirectTo: 'reservation',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _modules_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/shared-services/authentication.service */
    "./src/app/services/shared-services/authentication.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
        this.title = 'sample-structure';
        this.logged = false;
        this.model = null;
        this.webApiUrl = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          //get cuu
          this.subscription = this.authService.currentUser.subscribe(function (data) {
            if (data) {
              _this.model = data;
              _this.logged = true;
            } else {
              _this.model = null;
              _this.logged = false;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./modules/layout/layout.module */
    "./src/app/modules/layout/layout.module.ts");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js"); // Http client module import
    // FormGroup and Validation module import
    // Default Angular Routing module


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_6__["SlickCarouselModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["routes"], {
        useHash: true
      }), angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["SocialLoginModule"]],
      providers: [{
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [{
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["GoogleLoginProvider"]('926693855353-ph0i56aiitoq5gml5cgnnkdrrhoeaihb.apps.googleusercontent.com')
          }, {
            id: angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_10__["FacebookLoginProvider"]('1384323871904376|cc882c5dffcf6685be870940506620cf')
          }]
        }
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/models/request/getStoreIdsModel.ts":
  /*!****************************************************!*\
    !*** ./src/app/models/request/getStoreIdsModel.ts ***!
    \****************************************************/

  /*! exports provided: getStoreIdsModel */

  /***/
  function srcAppModelsRequestGetStoreIdsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getStoreIdsModel", function () {
      return getStoreIdsModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var getStoreIdsModel = function getStoreIdsModel() {
      _classCallCheck(this, getStoreIdsModel);

      this.storeIds = [];
    };
    /***/

  },

  /***/
  "./src/app/modules/about-us/about-us.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/modules/about-us/about-us.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAboutUsAboutUsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/about-us/about-us.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules/about-us/about-us.component.ts ***!
    \********************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppModulesAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutUsComponent =
    /*#__PURE__*/
    function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about-us',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./about-us.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/about-us/about-us.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./about-us.component.scss */
      "./src/app/modules/about-us/about-us.component.scss"))["default"]]
    })], AboutUsComponent);
    /***/
  },

  /***/
  "./src/app/modules/authentication/logout/logout.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/authentication/logout/logout.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAuthenticationLogoutLogoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aGVudGljYXRpb24vbG9nb3V0L2xvZ291dC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/authentication/logout/logout.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/authentication/logout/logout.component.ts ***!
    \*******************************************************************/

  /*! exports provided: LogoutComponent */

  /***/
  function srcAppModulesAuthenticationLogoutLogoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () {
      return LogoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/shared-services/authentication.service */
    "./src/app/services/shared-services/authentication.service.ts");

    var LogoutComponent =
    /*#__PURE__*/
    function () {
      function LogoutComponent(router, AuthService) {
        _classCallCheck(this, LogoutComponent);

        this.router = router;
        this.AuthService = AuthService;
      }

      _createClass(LogoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.Logout();
        }
      }, {
        key: "Logout",
        value: function Logout() {//this.AuthService.removeToken();
          //this.router.navigate(["auth"]);
        }
      }]);

      return LogoutComponent;
    }();

    LogoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    LogoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-logout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./logout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/authentication/logout/logout.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./logout.component.scss */
      "./src/app/modules/authentication/logout/logout.component.scss"))["default"]]
    })], LogoutComponent);
    /***/
  },

  /***/
  "./src/app/modules/error/404.component.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/error/404.component.ts ***!
    \************************************************/

  /*! exports provided: P404Component */

  /***/
  function srcAppModulesError404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P404Component", function () {
      return P404Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var P404Component = function P404Component() {
      _classCallCheck(this, P404Component);
    };

    P404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./404.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/404.component.html"))["default"]
    })], P404Component);
    /***/
  },

  /***/
  "./src/app/modules/error/500.component.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/error/500.component.ts ***!
    \************************************************/

  /*! exports provided: P500Component */

  /***/
  function srcAppModulesError500ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P500Component", function () {
      return P500Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var P500Component = function P500Component() {
      _classCallCheck(this, P500Component);
    };

    P500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./500.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/500.component.html"))["default"]
    })], P500Component);
    /***/
  },

  /***/
  "./src/app/modules/home/home.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/modules/home/home.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/home/home.component.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/home/home.component.ts ***!
    \************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppModulesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/home-service */
    "./src/app/services/home-service.ts");
    /* harmony import */


    var _shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/modal/modal.component */
    "./src/app/modules/shared/modal/modal.component.ts"); //View Child for accessing children components


    var HomeComponent =
    /*#__PURE__*/
    function () {
      //Declare services
      function HomeComponent(router, HomeService) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.HomeService = HomeService;
        this.contents = new Array();
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //Dummy Content Filled for static purposes
          this.content = {
            id: 0,
            title: 'Bolt Solutions Front-End Layout',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, suscipit, rerum quos facilis repellat architecto commodi officia atque nemo facere eum non illo voluptatem quae delectus odit vel itaque amet.'
          };
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"])], HomeComponent.prototype, "modal", void 0);
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/modules/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/modules/layout/footer/footer.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/modules/layout/footer/footer.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesLayoutFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer {\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  line-height: 60px;\n  background-color: #f5f5f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvZm9vdGVyL046XFxDb2RlXFxSZXBvc1xcUmVzZXJ2YXRpb24tU3lzdGVtXFxSZXNlcnZhdGlvbi1TeXN0ZW0vc3JjXFxhcHBcXG1vZHVsZXNcXGxheW91dFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuXHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcbiIsImZvb3RlciB7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/layout/footer/footer.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/layout/footer/footer.component.ts ***!
    \***********************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppModulesLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/footer/footer.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/modules/layout/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/modules/layout/header/header.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/modules/layout/header/header.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesLayoutHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg-dark {\n  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.35);\n  background-image: linear-gradient(to left, #0491ed, #0e64d8);\n  z-index: 99999999;\n  height: 10vh;\n}\n\n.nav-item {\n  color: #fff;\n  cursor: pointer;\n}\n\nform {\n  position: relative;\n}\n\nform input {\n  padding-left: 34px;\n  color: #fff;\n}\n\n.form-control {\n  background-color: transparent;\n  border: 2px solid #fff;\n  border-radius: 50px;\n  height: calc(1.5em + .45rem + 2px);\n}\n\n.fa-search {\n  position: absolute;\n  color: #fff;\n  left: 10px;\n}\n\n.initials {\n  background-color: #fff;\n  border-radius: 50px;\n  text-align: center;\n  width: 30px;\n  height: 30px;\n}\n\n.initials .nav-link {\n  color: #0b71de !important;\n  font-size: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvaGVhZGVyL046XFxDb2RlXFxSZXBvc1xcUmVzZXJ2YXRpb24tU3lzdGVtXFxSZXNlcnZhdGlvbi1TeXN0ZW0vc3JjXFxhcHBcXG1vZHVsZXNcXGxheW91dFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQ0FBQTtFQUNBLDREQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0VKOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QURERTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0dKOztBREFBO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7QUNHRjs7QUREQTtFQUNJLGtCQUFBO0VBQ0YsV0FBQTtFQUNBLFVBQUE7QUNJRjs7QURGQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDS0Y7O0FESEU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1kYXJrIHtcclxuICBib3gtc2hhZG93OiAwIDNweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMDQ5MWVkLCAjMGU2NGQ4KTtcclxuICB6LWluZGV4OiA5OTk5OTk5OTtcclxuICBoZWlnaHQ6IDEwdmg7XHJcbn1cclxuLm5hdi1pdGVte1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbmZvcm0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNHB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICB9XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGhlaWdodDogY2FsYygxLjVlbSArIC40NXJlbSArIDJweCk7XHJcbn1cclxuLmZhLXNlYXJjaHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgbGVmdDoxMHB4O1xyXG59XHJcbi5pbml0aWFscyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcblxyXG4gIC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogIzBiNzFkZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gIH1cclxufVxyXG4iLCIuYmctZGFyayB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMDQ5MWVkLCAjMGU2NGQ4KTtcbiAgei1pbmRleDogOTk5OTk5OTk7XG4gIGhlaWdodDogMTB2aDtcbn1cblxuLm5hdi1pdGVtIHtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmZvcm0gaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDM0cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIC40NXJlbSArIDJweCk7XG59XG5cbi5mYS1zZWFyY2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjZmZmO1xuICBsZWZ0OiAxMHB4O1xufVxuXG4uaW5pdGlhbHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uaW5pdGlhbHMgLm5hdi1saW5rIHtcbiAgY29sb3I6ICMwYjcxZGUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/layout/header/header.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/layout/header/header.component.ts ***!
    \***********************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppModulesLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var userName = 'yasmin ghazy';
          this.initials = userName.split(" ").map(function (n) {
            return n[0];
          }).join("").toUpperCase();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/header/header.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/modules/layout/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/modules/layout/layout-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/layout/layout-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: LayoutRoutingModule */

  /***/
  function srcAppModulesLayoutLayoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function () {
      return LayoutRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../about-us/about-us.component */
    "./src/app/modules/about-us/about-us.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../home/home.component */
    "./src/app/modules/home/home.component.ts");
    /* harmony import */


    var _service_locations_service_locations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service-locations/service-locations.component */
    "./src/app/modules/service-locations/service-locations.component.ts");
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/services.component */
    "./src/app/modules/services/services.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/modules/layout/layout/layout.component.ts");

    var routes = [{
      //Empty path will be automatically redirected to from app-routing module.
      //Children modules/components are declared here.
      path: 'reservation',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
      children: [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
      }, {
        path: 'about-us',
        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"]
      }, {
        path: 'services',
        component: _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"]
      }, {
        path: 'service-locations',
        component: _service_locations_service_locations_component__WEBPACK_IMPORTED_MODULE_5__["ServiceLocationsComponent"]
      }, {
        path: '',
        redirectTo: 'services',
        pathMatch: 'full'
      }]
    }];

    var LayoutRoutingModule = function LayoutRoutingModule() {
      _classCallCheck(this, LayoutRoutingModule);
    };

    LayoutRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LayoutRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/layout/layout.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/modules/layout/layout.module.ts ***!
    \*************************************************/

  /*! exports provided: LayoutModule */

  /***/
  function srcAppModulesLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../home/home.component */
    "./src/app/modules/home/home.component.ts");
    /* harmony import */


    var _service_locations_service_locations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service-locations/service-locations.component */
    "./src/app/modules/service-locations/service-locations.component.ts");
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/services.component */
    "./src/app/modules/services/services.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/modules/shared/shared.module.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/modules/layout/footer/footer.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/modules/layout/header/header.component.ts");
    /* harmony import */


    var _layout_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./layout-routing.module */
    "./src/app/modules/layout/layout-routing.module.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/modules/layout/layout/layout.component.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");

    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_11__["LayoutComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"], _service_locations_service_locations_component__WEBPACK_IMPORTED_MODULE_5__["ServiceLocationsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_10__["LayoutRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _agm_core__WEBPACK_IMPORTED_MODULE_12__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyDoAhMm8NbDXeVFeY_4OsvbDL3tuApVeVA',
        libraries: ['places']
      })]
    })], LayoutModule);
    /***/
  },

  /***/
  "./src/app/modules/layout/layout/layout.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/modules/layout/layout/layout.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesLayoutLayoutLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/layout/layout/layout.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/layout/layout/layout.component.ts ***!
    \***********************************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppModulesLayoutLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_utilities_LanguageHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/utilities/LanguageHelper */
    "./src/app/services/utilities/LanguageHelper.ts");

    var LayoutComponent =
    /*#__PURE__*/
    function () {
      function LayoutComponent(LanguageHelper) {
        _classCallCheck(this, LayoutComponent);

        this.LanguageHelper = LanguageHelper;
        this.LanguageHelper.ngOnInit();
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ctorParameters = function () {
      return [{
        type: _services_utilities_LanguageHelper__WEBPACK_IMPORTED_MODULE_2__["LanguageHelper"]
      }];
    };

    LayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-layout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/layout/layout/layout.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./layout.component.scss */
      "./src/app/modules/layout/layout/layout.component.scss"))["default"]]
    })], LayoutComponent);
    /***/
  },

  /***/
  "./src/app/modules/service-locations/service-locations.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/service-locations/service-locations.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesServiceLocationsServiceLocationsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  font-family: \"Roboto\", sans-serif;\n  overflow: hidden;\n}\n\n.servicesLocation {\n  height: 90vh;\n  overflow: hidden;\n  width: 100%;\n}\n\n.detailsSectionPC {\n  background-image: linear-gradient(to top, #0591ed, #0a74df);\n  box-shadow: 10px 0 5px -2px #888;\n  z-index: 9999;\n}\n\n.detailsSectionPC .container-fluid {\n  padding: 60px;\n  padding-top: 30px;\n}\n\n.detailsSectionPC .container-fluid h1 {\n  color: white;\n  font-size: 22px;\n}\n\n.detailsSectionPC .container-fluid .searchContainer {\n  padding: 30px;\n}\n\n.detailsSectionPC .container-fluid .searchContainer p {\n  color: white;\n  font-size: 21px;\n  font-weight: normal;\n}\n\n.detailsSectionPC .container-fluid .searchContainer .form-group {\n  position: relative;\n}\n\n.detailsSectionPC .container-fluid .searchContainer .form-control {\n  width: 95%;\n  color: #acaaaa;\n  border-radius: 8px;\n  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.21);\n  background-color: #f7f7f7;\n  height: 50px;\n  font-size: 21px;\n}\n\n.detailsSectionPC .container-fluid .searchContainer .fa-search {\n  position: absolute;\n  color: black;\n  right: 74px;\n  top: 10px;\n  z-index: 10;\n  font-size: 28px;\n  z-index: 10;\n}\n\n.detailsSectionPC .container-fluid .searchContainer .form-control::-moz-placeholder {\n  color: #acaaaa;\n}\n\n.detailsSectionPC .container-fluid .searchContainer .form-control::placeholder {\n  color: #acaaaa;\n}\n\n.detailsSectionPC .container-fluid .searchContainer .resultsSection {\n  max-height: 440px;\n  overflow-y: scroll;\n  scrollbar-width: thin;\n  scrollbar-base-color: wheat;\n}\n\n.detailsSectionPC .container-fluid .searchContainer .itemContainer {\n  border-radius: 8px;\n  border: solid 2px #f7f7f7;\n  width: 96%;\n  -webkit-transition: all 2s;\n  -moz-transition: all 2s;\n  -o-transition: all 2s;\n}\n\n.detailsSectionPC .container-fluid .searchContainer .itemContainer .container {\n  padding: 5px;\n}\n\n.detailsSectionPC .container-fluid .searchContainer .itemContainer .serviceHeader {\n  padding: 14px;\n  font-weight: normal;\n  font-size: 28px;\n  width: 400px;\n}\n\n.detailsSectionPC .container-fluid .searchContainer .itemContainer .serviceHeader span {\n  margin-left: 30px;\n  font-size: 23px;\n}\n\n.detailsSectionPC .container-fluid .searchContainer .itemContainer h1 {\n  font-size: 17px;\n}\n\n.detailsSectionPC .container-fluid .searchContainer .itemContainer .distance {\n  margin-left: 230px;\n  font-size: 23px;\n  font-weight: normal;\n  margin-top: 20px;\n}\n\n.detailsSectionPC .container-fluid .searchContainer .itemContainer .storeAvailabilityInfo {\n  font-size: 18px;\n  padding: 12px;\n  margin-left: 57px;\n  color: rgba(235, 235, 235, 0.92);\n}\n\n.detailsSectionPC .container-fluid .searchContainer .itemContainer .storeAddressInfo {\n  font-size: 18px;\n  margin-left: 69px;\n  color: rgba(235, 235, 235, 0.92);\n  margin-top: -3px;\n}\n\n.detailsSectionPC .container-fluid .searchContainer .itemContainer:hover {\n  cursor: pointer;\n  border: solid 2px #736026;\n  transition: all 0.5s;\n  -webkit-transition: all 2s;\n  -moz-transition: all 2s;\n  -o-transition: all 2s;\n}\n\n.mapsSectionPC .googleMapsStyle {\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n\n/*\n\n*/\n\n@media only screen and (max-device-width: 500px) {\n  .servicesLocation {\n    height: auto;\n    overflow: hidden;\n    width: 100%;\n    background-color: #fbfbfb !important;\n  }\n  .servicesLocation h1 {\n    font-size: 19px;\n    color: #4590f3;\n    padding: 15px;\n  }\n  .servicesLocation .searchContainer .searchTitle {\n    margin-bottom: -8px;\n  }\n  .servicesLocation .searchContainer p {\n    padding: 15px;\n    color: #afadad;\n  }\n  .servicesLocation .searchContainer .form-group {\n    position: relative;\n  }\n  .servicesLocation .searchContainer .form-control {\n    width: 90%;\n    color: #acaaaa;\n    border-radius: 8px;\n    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.21);\n    background-color: #f7f7f7;\n    margin: 0 auto;\n  }\n  .servicesLocation .searchContainer .fa-search {\n    position: absolute;\n    color: black;\n    right: 40px;\n    top: 14px;\n    z-index: 10;\n  }\n  .servicesLocation .searchContainer .form-control::-moz-placeholder {\n    color: #acaaaa;\n  }\n  .servicesLocation .searchContainer .form-control::placeholder {\n    color: #acaaaa;\n  }\n  .servicesLocation .resultsSection {\n    max-height: 80vh;\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n  .servicesLocation .itemContainer {\n    border-radius: 9px;\n    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n    background-color: #f7f7f7;\n    width: 334px;\n    height: auto;\n    margin-left: 18px;\n    -webkit-transition: all 0.5s;\n    -moz-transition: all 0.5s;\n    -o-transition: all 0.5s;\n    margin-top: 30px;\n  }\n  .servicesLocation .itemContainer .container .row:nth-child(1) h1 {\n    font-size: 16px;\n    width: 200px;\n  }\n  .servicesLocation .itemContainer .container .row:nth-child(1) .distance {\n    text-align: right;\n    width: auto;\n  }\n  .servicesLocation .itemContainer .container .row:nth-child(2) {\n    margin-top: -28px;\n  }\n  .servicesLocation .itemContainer .container .row:nth-child(3) {\n    margin-top: -40px;\n  }\n  .servicesLocation .itemContainer .container .row:nth-child(4) {\n    margin-top: -27px;\n  }\n  .servicesLocation .itemContainer .storeAvailabilityInfo {\n    margin-left: 18px;\n    font-size: 14px;\n  }\n  .servicesLocation .itemContainer .storeAddressInfo {\n    margin-left: 18px;\n    font-size: 14px;\n  }\n  .servicesLocation .itemContainer .mapView {\n    width: 100%;\n    height: 280px;\n  }\n  .servicesLocation .itemContainer .googleMapsStyle {\n    width: 100%;\n    height: 100%;\n  }\n  .servicesLocation .itemContainer .viewButton {\n    cursor: pointer;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXJ2aWNlLWxvY2F0aW9ucy9OOlxcQ29kZVxcUmVwb3NcXFJlc2VydmF0aW9uLVN5c3RlbVxcUmVzZXJ2YXRpb24tU3lzdGVtL3NyY1xcYXBwXFxtb2R1bGVzXFxzZXJ2aWNlLWxvY2F0aW9uc1xcc2VydmljZS1sb2NhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2VydmljZS1sb2NhdGlvbnMvc2VydmljZS1sb2NhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSwyREFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENDO0VBQ0csYUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0NOOztBREVJO0VBQ0UsYUFBQTtBQ0FOOztBREVNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0FSOztBREdNO0VBQ0Usa0JBQUE7QUNEUjs7QURJTTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNGUjs7QURLTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDSFI7O0FETU07RUFDRSxjQUFBO0FDSlI7O0FER007RUFDRSxjQUFBO0FDSlI7O0FET007RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQ0xSOztBRFFNO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNOUjs7QURRUTtFQUNFLFlBQUE7QUNOVjs7QURTUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDUFY7O0FEU1U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNQWjs7QURXUTtFQUNFLGVBQUE7QUNUVjs7QURZUTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNWVjs7QURhUTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQ1hWOztBRGNRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQ1pWOztBRGdCTTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FDZFI7O0FEcUJFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7QUNsQko7O0FEc0JBOztDQUFBOztBQUtBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0Esb0NBQUE7RUNyQkY7RUR1QkU7SUFDRSxlQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7RUNyQko7RUR5Qkk7SUFDSSxtQkFBQTtFQ3ZCUjtFRDBCSTtJQUNFLGFBQUE7SUFDQSxjQUFBO0VDeEJOO0VEMkJJO0lBQ0Usa0JBQUE7RUN6Qk47RUQ0Qkk7SUFDRSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsNENBQUE7SUFDQSx5QkFBQTtJQUNBLGNBQUE7RUMxQk47RUQ2Qkk7SUFDRSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUMzQk47RUQ4Qkk7SUFDRSxjQUFBO0VDNUJOO0VEMkJJO0lBQ0UsY0FBQTtFQzVCTjtFRGdDRTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUM5Qko7RURpQ0U7SUFDRSxrQkFBQTtJQUNBLDJDQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsNEJBQUE7SUFDQSx5QkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7RUMvQko7RURxQ1E7SUFDRSxlQUFBO0lBQ0EsWUFBQTtFQ25DVjtFRHNDUTtJQUNFLGlCQUFBO0lBQ0EsV0FBQTtFQ3BDVjtFRHdDTTtJQUNFLGlCQUFBO0VDdENSO0VEeUNNO0lBQ0UsaUJBQUE7RUN2Q1I7RUQwQ007SUFDRSxpQkFBQTtFQ3hDUjtFRDRDSTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQzFDTjtFRDZDSTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQzNDTjtFRDhDSTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VDNUNOO0VEK0NJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUM3Q047RURnREk7SUFDRSxlQUFBO0VDOUNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NlcnZpY2UtbG9jYXRpb25zL3NlcnZpY2UtbG9jYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zZXJ2aWNlc0xvY2F0aW9uIHtcclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRldGFpbHNTZWN0aW9uUEMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwNTkxZWQsICMwYTc0ZGYpO1xyXG4gIGJveC1zaGFkb3c6IDEwcHggMCA1cHggLTJweCAjODg4O1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcblxyXG4gLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nOiA2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6MzBweDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2hDb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nOiAzMHB4O1xyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIGNvbG9yOiAjYWNhYWFhO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIxKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mYS1zZWFyY2gge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgcmlnaHQ6IDc0cHg7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmZvcm0tY29udHJvbDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiAjYWNhYWFhXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yZXN1bHRzU2VjdGlvbiB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDQwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuICAgICAgICBzY3JvbGxiYXItYmFzZS1jb2xvcjogd2hlYXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pdGVtQ29udGFpbmVyIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggI2Y3ZjdmNztcclxuICAgICAgICB3aWR0aDogOTYlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDJzO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDJzO1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAycztcclxuXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VydmljZUhlYWRlciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kaXN0YW5jZSB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjMwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdG9yZUF2YWlsYWJpbGl0eUluZm8ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1N3B4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjM1LCAyMzUsIDIzNSwgMC45Mik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3RvcmVBZGRyZXNzSW5mbyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNjlweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDAuOTIpO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pdGVtQ29udGFpbmVyOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggIzczNjAyNjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAycztcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAycztcclxuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMnM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tYXBzU2VjdGlvblBDIHtcclxuICAuZ29vZ2xlTWFwc1N0eWxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcblxyXG4qL1xyXG5cclxuLy9HZW5lcmFsIFJlc3BvbnNpdmUgRGVzaWduXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDUwMHB4KSB7XHJcbiAgLnNlcnZpY2VzTG9jYXRpb24ge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYiAhaW1wb3J0YW50O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICBjb2xvcjogIzQ1OTBmMztcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoQ29udGFpbmVyIHtcclxuICAgICAgLnNlYXJjaFRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC04cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHAge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICNhZmFkYWQgLyojNDU5MGYzKi87XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgY29sb3I6ICNhY2FhYWE7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMjEpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mYS1zZWFyY2gge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgdG9wOiAxNHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9ybS1jb250cm9sOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6ICNhY2FhYWFcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yZXN1bHRzU2VjdGlvbiB7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDgwdmg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbUNvbnRhaW5lciB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgICAgd2lkdGg6IDMzNHB4O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcblxyXG4gICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAucm93Om50aC1jaGlsZCgxKSB7XHJcblxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZGlzdGFuY2Uge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucm93Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtMjhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yb3c6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvdzpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogLTI3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RvcmVBdmFpbGFiaWxpdHlJbmZvIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdG9yZUFkZHJlc3NJbmZvIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYXBWaWV3IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZ29vZ2xlTWFwc1N0eWxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC52aWV3QnV0dG9uIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2VydmljZXNMb2NhdGlvbiB7XG4gIGhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZXRhaWxzU2VjdGlvblBDIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzA1OTFlZCwgIzBhNzRkZik7XG4gIGJveC1zaGFkb3c6IDEwcHggMCA1cHggLTJweCAjODg4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuLmRldGFpbHNTZWN0aW9uUEMgLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmc6IDYwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuLmRldGFpbHNTZWN0aW9uUEMgLmNvbnRhaW5lci1mbHVpZCBoMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLmRldGFpbHNTZWN0aW9uUEMgLmNvbnRhaW5lci1mbHVpZCAuc2VhcmNoQ29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5kZXRhaWxzU2VjdGlvblBDIC5jb250YWluZXItZmx1aWQgLnNlYXJjaENvbnRhaW5lciBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uZGV0YWlsc1NlY3Rpb25QQyAuY29udGFpbmVyLWZsdWlkIC5zZWFyY2hDb250YWluZXIgLmZvcm0tZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGV0YWlsc1NlY3Rpb25QQyAuY29udGFpbmVyLWZsdWlkIC5zZWFyY2hDb250YWluZXIgLmZvcm0tY29udHJvbCB7XG4gIHdpZHRoOiA5NSU7XG4gIGNvbG9yOiAjYWNhYWFhO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cbi5kZXRhaWxzU2VjdGlvblBDIC5jb250YWluZXItZmx1aWQgLnNlYXJjaENvbnRhaW5lciAuZmEtc2VhcmNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIHJpZ2h0OiA3NHB4O1xuICB0b3A6IDEwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHotaW5kZXg6IDEwO1xufVxuLmRldGFpbHNTZWN0aW9uUEMgLmNvbnRhaW5lci1mbHVpZCAuc2VhcmNoQ29udGFpbmVyIC5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNhY2FhYWE7XG59XG4uZGV0YWlsc1NlY3Rpb25QQyAuY29udGFpbmVyLWZsdWlkIC5zZWFyY2hDb250YWluZXIgLnJlc3VsdHNTZWN0aW9uIHtcbiAgbWF4LWhlaWdodDogNDQwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICBzY3JvbGxiYXItYmFzZS1jb2xvcjogd2hlYXQ7XG59XG4uZGV0YWlsc1NlY3Rpb25QQyAuY29udGFpbmVyLWZsdWlkIC5zZWFyY2hDb250YWluZXIgLml0ZW1Db250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogc29saWQgMnB4ICNmN2Y3Zjc7XG4gIHdpZHRoOiA5NiU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAycztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDJzO1xufVxuLmRldGFpbHNTZWN0aW9uUEMgLmNvbnRhaW5lci1mbHVpZCAuc2VhcmNoQ29udGFpbmVyIC5pdGVtQ29udGFpbmVyIC5jb250YWluZXIge1xuICBwYWRkaW5nOiA1cHg7XG59XG4uZGV0YWlsc1NlY3Rpb25QQyAuY29udGFpbmVyLWZsdWlkIC5zZWFyY2hDb250YWluZXIgLml0ZW1Db250YWluZXIgLnNlcnZpY2VIZWFkZXIge1xuICBwYWRkaW5nOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHdpZHRoOiA0MDBweDtcbn1cbi5kZXRhaWxzU2VjdGlvblBDIC5jb250YWluZXItZmx1aWQgLnNlYXJjaENvbnRhaW5lciAuaXRlbUNvbnRhaW5lciAuc2VydmljZUhlYWRlciBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cbi5kZXRhaWxzU2VjdGlvblBDIC5jb250YWluZXItZmx1aWQgLnNlYXJjaENvbnRhaW5lciAuaXRlbUNvbnRhaW5lciBoMSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5kZXRhaWxzU2VjdGlvblBDIC5jb250YWluZXItZmx1aWQgLnNlYXJjaENvbnRhaW5lciAuaXRlbUNvbnRhaW5lciAuZGlzdGFuY2Uge1xuICBtYXJnaW4tbGVmdDogMjMwcHg7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5kZXRhaWxzU2VjdGlvblBDIC5jb250YWluZXItZmx1aWQgLnNlYXJjaENvbnRhaW5lciAuaXRlbUNvbnRhaW5lciAuc3RvcmVBdmFpbGFiaWxpdHlJbmZvIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogNTdweDtcbiAgY29sb3I6IHJnYmEoMjM1LCAyMzUsIDIzNSwgMC45Mik7XG59XG4uZGV0YWlsc1NlY3Rpb25QQyAuY29udGFpbmVyLWZsdWlkIC5zZWFyY2hDb250YWluZXIgLml0ZW1Db250YWluZXIgLnN0b3JlQWRkcmVzc0luZm8ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiA2OXB4O1xuICBjb2xvcjogcmdiYSgyMzUsIDIzNSwgMjM1LCAwLjkyKTtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cbi5kZXRhaWxzU2VjdGlvblBDIC5jb250YWluZXItZmx1aWQgLnNlYXJjaENvbnRhaW5lciAuaXRlbUNvbnRhaW5lcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzczNjAyNjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDJzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAycztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDJzO1xufVxuXG4ubWFwc1NlY3Rpb25QQyAuZ29vZ2xlTWFwc1N0eWxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdG9wOiAwO1xufVxuXG4vKlxuXG4qL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTAwcHgpIHtcbiAgLnNlcnZpY2VzTG9jYXRpb24ge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmIgIWltcG9ydGFudDtcbiAgfVxuICAuc2VydmljZXNMb2NhdGlvbiBoMSB7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGNvbG9yOiAjNDU5MGYzO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLnNlcnZpY2VzTG9jYXRpb24gLnNlYXJjaENvbnRhaW5lciAuc2VhcmNoVGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG4gIH1cbiAgLnNlcnZpY2VzTG9jYXRpb24gLnNlYXJjaENvbnRhaW5lciBwIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGNvbG9yOiAjYWZhZGFkO1xuICB9XG4gIC5zZXJ2aWNlc0xvY2F0aW9uIC5zZWFyY2hDb250YWluZXIgLmZvcm0tZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuc2VydmljZXNMb2NhdGlvbiAuc2VhcmNoQ29udGFpbmVyIC5mb3JtLWNvbnRyb2wge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgY29sb3I6ICNhY2FhYWE7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMjEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLnNlcnZpY2VzTG9jYXRpb24gLnNlYXJjaENvbnRhaW5lciAuZmEtc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHJpZ2h0OiA0MHB4O1xuICAgIHRvcDogMTRweDtcbiAgICB6LWluZGV4OiAxMDtcbiAgfVxuICAuc2VydmljZXNMb2NhdGlvbiAuc2VhcmNoQ29udGFpbmVyIC5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2FjYWFhYTtcbiAgfVxuICAuc2VydmljZXNMb2NhdGlvbiAucmVzdWx0c1NlY3Rpb24ge1xuICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuICAuc2VydmljZXNMb2NhdGlvbiAuaXRlbUNvbnRhaW5lciB7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgICB3aWR0aDogMzM0cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIC5zZXJ2aWNlc0xvY2F0aW9uIC5pdGVtQ29udGFpbmVyIC5jb250YWluZXIgLnJvdzpudGgtY2hpbGQoMSkgaDEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgLnNlcnZpY2VzTG9jYXRpb24gLml0ZW1Db250YWluZXIgLmNvbnRhaW5lciAucm93Om50aC1jaGlsZCgxKSAuZGlzdGFuY2Uge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5zZXJ2aWNlc0xvY2F0aW9uIC5pdGVtQ29udGFpbmVyIC5jb250YWluZXIgLnJvdzpudGgtY2hpbGQoMikge1xuICAgIG1hcmdpbi10b3A6IC0yOHB4O1xuICB9XG4gIC5zZXJ2aWNlc0xvY2F0aW9uIC5pdGVtQ29udGFpbmVyIC5jb250YWluZXIgLnJvdzpudGgtY2hpbGQoMykge1xuICAgIG1hcmdpbi10b3A6IC00MHB4O1xuICB9XG4gIC5zZXJ2aWNlc0xvY2F0aW9uIC5pdGVtQ29udGFpbmVyIC5jb250YWluZXIgLnJvdzpudGgtY2hpbGQoNCkge1xuICAgIG1hcmdpbi10b3A6IC0yN3B4O1xuICB9XG4gIC5zZXJ2aWNlc0xvY2F0aW9uIC5pdGVtQ29udGFpbmVyIC5zdG9yZUF2YWlsYWJpbGl0eUluZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuc2VydmljZXNMb2NhdGlvbiAuaXRlbUNvbnRhaW5lciAuc3RvcmVBZGRyZXNzSW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5zZXJ2aWNlc0xvY2F0aW9uIC5pdGVtQ29udGFpbmVyIC5tYXBWaWV3IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICB9XG4gIC5zZXJ2aWNlc0xvY2F0aW9uIC5pdGVtQ29udGFpbmVyIC5nb29nbGVNYXBzU3R5bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAuc2VydmljZXNMb2NhdGlvbiAuaXRlbUNvbnRhaW5lciAudmlld0J1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/service-locations/service-locations.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/service-locations/service-locations.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ServiceLocationsComponent */

  /***/
  function srcAppModulesServiceLocationsServiceLocationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceLocationsComponent", function () {
      return ServiceLocationsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _services_utilities_LanguageHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/utilities/LanguageHelper */
    "./src/app/services/utilities/LanguageHelper.ts");
    /* harmony import */


    var _services_Branch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/Branch-service */
    "./src/app/services/Branch-service.ts");
    /* harmony import */


    var _models_request_getStoreIdsModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/request/getStoreIdsModel */
    "./src/app/models/request/getStoreIdsModel.ts");
    /* harmony import */


    var _services_Reservation_History_Service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/Reservation-History-Service */
    "./src/app/services/Reservation-History-Service.ts");

    var services = function services() {
      _classCallCheck(this, services);

      this.distance = 50;
    };

    var ServiceLocationsComponent =
    /*#__PURE__*/
    function () {
      function ServiceLocationsComponent(branchService, router, languageHelper, mapsAPILoader, ngZone, reservationHistoryService) {
        _classCallCheck(this, ServiceLocationsComponent);

        this.branchService = branchService;
        this.router = router;
        this.languageHelper = languageHelper;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.reservationHistoryService = reservationHistoryService; //Models

        this.selectedStores = [];
        this.branchsList = new Array();
        this.isLoading = false;
        this.storeIdsModel = new _models_request_getStoreIdsModel__WEBPACK_IMPORTED_MODULE_6__["getStoreIdsModel"]();
        this.RHID = "";
        this.servicesList = new Array(); // Dummy Model

        this.servicesListSearchBackup = new Array();
        this.selectedserviceMap = null; //mobile view variable

        this.isMobile = false;
        this.searchcriteria = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.langVar = this.languageHelper.initializeMode().Services;
        this.direction = this.languageHelper.initializeMode().dir;
      }

      _createClass(ServiceLocationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (window.innerWidth < 991) {
            this.isMobile = true;
          }

          this.selectedStores = JSON.parse(localStorage.getItem('Selectedstores'));
          this.user = JSON.parse(localStorage.getItem('user'));
          console.log("token", this.user);

          for (var i = 0; i < this.selectedStores.length; i++) {
            this.storeIdsModel.storeIds.push(this.selectedStores[i].id);
          }

          this.branchService.GetAllStoresbranches(this.storeIdsModel).subscribe(function (stores) {
            _this2.branchsList = stores.data; //this.isLoading = false
          }, function (error) {
            //this.isLogging = false;
            console.log("error", error);
          });

          if (this.servicesList == null || this.servicesList == undefined) {
            this.router.navigate(['/reservation/services']);
          } else {
            this.servicesListSearchBackup = JSON.parse(localStorage.getItem('Selectedstores'));
            this.selectedService = this.servicesList[0]; //for testing purposes
            //this.selectedService.distance = 0.5;
          }

          setTimeout(function () {
            if (_this2.mapElement != undefined) {
              _this2.SetMap(_this2.selectedService);

              _this2.mapsAPILoader.load().then(function () {
                _this2.setCurrentLocation();

                _this2.geoCoder = new google.maps.Geocoder();
              });
            } else {
              _this2.mapsAPILoader.load().then(function () {
                _this2.setCurrentLocation();

                _this2.geoCoder = new google.maps.Geocoder();
              });
            }
          }, 2000);
        }
      }, {
        key: "SearchService",
        value: function SearchService() {
          //this.searchcriteria.emit(this.searchWords); // emit input
          this.MatchString(this.searchWords);
        } //Search services list from keyboard input

      }, {
        key: "MatchString",
        value: function MatchString(input) {
          if (input) {//Match name with input
            //this.branchsList = this.branchsList.filter(s => s.name.toLowerCase().includes(input.toLowerCase()) || s.address.toLowerCase().includes(input.toString().toLowerCase()));
          } else {
            this.servicesList = this.servicesListSearchBackup;
          }
        }
      }, {
        key: "ViewStoreMap",
        value: function ViewStoreMap(service) {
          this.SetMap(service);
        }
      }, {
        key: "ViewStoreMapResponsive",
        value: function ViewStoreMapResponsive(service) {
          this.selectedserviceMap = service.id;
        }
      }, {
        key: "ViewLess",
        value: function ViewLess(serviceId) {
          console.log(this.selectedserviceMap);
          this.selectedserviceMap = null;
          document.getElementById('map' + serviceId.toString()).style.display = 'none';
        }
      }, {
        key: "SetMap",
        value: function SetMap(selectedService) {
          var _this3 = this;

          setTimeout(function () {
            var mapProperties = {
              center: new google.maps.LatLng(selectedService.latitude, selectedService.longitude),
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this3.map = new google.maps.Map(_this3.mapElement.nativeElement, mapProperties);
          }, 500);
        }
      }, {
        key: "setCurrentLocation",
        value: function setCurrentLocation() {
          var _this4 = this;

          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
              _this4.currentLatitude = position.coords.latitude;
              _this4.currentLongitude = position.coords.longitude;
              _this4.zoom = 8;

              _this4.getAddress(_this4.currentLatitude, _this4.currentLongitude);
            });
          }
        }
      }, {
        key: "getAddress",
        value: function getAddress(latitude, longitude) {
          var _this5 = this;

          this.geoCoder.geocode({
            'location': {
              lat: latitude,
              lng: longitude
            }
          }, function (results, status) {
            if (status === 'OK') {
              if (results[0]) {
                _this5.zoom = 12;
                _this5.address = results[0].formatted_address;
              } else {
                window.alert('No results found');
              }
            } else {//window.alert('Geocoding Service: You must enable Billing on the Google Cloud Project at https://console.cloud.google.com/project/_/billing/enable Learn more at https://developers.google.com/maps/gmp-get-started');
            }
          });
        }
      }, {
        key: "Reserve",
        value: function Reserve(Branch) {
          var _this6 = this;

          var createReservationHistoryModel = {
            branchId: Branch.id,
            customerUserId: this.user.userId
          };
          console.log("createReservationHistoryModel", createReservationHistoryModel); //create reservation history record

          this.reservationHistoryService.CreateReservationRecord(createReservationHistoryModel).subscribe(function (res) {
            if (res.succeeded) {
              console.log("res", res.data, _this6.user); //window.location.href = Branch.webSiteLink + "RHID=" + res.data.id + "&Token=" + this.user.token;
            } //this.isLoading = false

          }, function (error) {
            //this.isLogging = false;
            console.log("error", error);
          });
        }
      }]);

      return ServiceLocationsComponent;
    }();

    ServiceLocationsComponent.ctorParameters = function () {
      return [{
        type: _services_Branch_service__WEBPACK_IMPORTED_MODULE_5__["BranchService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_utilities_LanguageHelper__WEBPACK_IMPORTED_MODULE_4__["LanguageHelper"]
      }, {
        type: _agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _services_Reservation_History_Service__WEBPACK_IMPORTED_MODULE_7__["ReservationHistoryService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map')], ServiceLocationsComponent.prototype, "mapElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ServiceLocationsComponent.prototype, "searchcriteria", void 0);
    ServiceLocationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-service-locations',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./service-locations.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-locations/service-locations.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./service-locations.component.scss */
      "./src/app/modules/service-locations/service-locations.component.scss"))["default"]]
    })], ServiceLocationsComponent);
    /***/
  },

  /***/
  "./src/app/modules/services/services.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/modules/services/services.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesServicesServicesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "header {\n  font-family: \"Roboto\", sans-serif;\n  color: #828282;\n  font-size: 1.2rem;\n  padding: 30px;\n}\n\n.headerLine {\n  background-color: #fbfbfb;\n  width: 100%;\n}\n\n.serviceSettingsBar {\n  padding: 15px;\n}\n\n.pcSelectButton {\n  display: block;\n}\n\n.checkboxContainer {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-family: \"Roboto\", sans-serif;\n  color: #acaaaa;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n/* Hide the browser's default checkbox */\n\n.checkboxContainer input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n/* Create a custom checkbox */\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 22px;\n  width: 22px;\n  border: solid 1px #c9c7c7;\n  border-radius: 8px;\n  background-color: rgba(245, 245, 245, 0.6);\n}\n\n/* On mouse-over, add a grey background color */\n\n.checkboxContainer:hover input ~ .checkmark {\n  background-color: whitesmoke;\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n\n.checkboxContainer input:checked ~ .checkmark:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n\n.checkboxContainer .checkmark:after {\n  left: 8px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid black;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.multipleChoicesButton {\n  background-image: linear-gradient(to left, #0491ed, #0e65d8);\n  box-shadow: 0 3px 22px 0 rgba(0, 0, 0, 0.22);\n  font-family: \"Lato\", sans-serif;\n  padding: 8px 23px 8px 26px;\n  border-radius: 32px;\n  line-height: 1.19;\n  font-weight: 900;\n  font-size: 14px;\n  color: white;\n}\n\n.serviceMainContainer {\n  margin-top: -60px;\n  margin-left: 80px;\n}\n\n.serviceColumn {\n  margin-top: 80px;\n}\n\n.serviceCard {\n  width: 305px;\n  height: 160px;\n  border-radius: 32px;\n  box-shadow: 0 3px 22px 0 rgba(0, 0, 0, 0.22);\n  background-color: #fcfcfc;\n  padding-top: 60px;\n  cursor: pointer;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  -o-transition: all 0.5s;\n}\n\n.serviceCard h1 {\n  font-family: Lato;\n  font-size: 24px;\n  font-weight: 900;\n  font-stretch: normal;\n  font-style: normal;\n  color: #4590f3;\n  text-align: center;\n}\n\n.serviceCard:hover, .serviceCard:active {\n  transform: scale(1.1);\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  -o-transition: all 0.5s;\n}\n\n.textAlignRight {\n  text-align: right;\n}\n\n.textAlignLeft {\n  text-align: left;\n}\n\n@media only screen and (max-device-width: 500px) {\n  header {\n    font-size: 1.1rem;\n    padding: 3px;\n  }\n\n  .pcSelectButton {\n    display: none;\n  }\n\n  .multipleChoicesButton {\n    font-size: 12px;\n  }\n\n  .serviceMainContainer {\n    margin-left: 45px;\n  }\n\n  .serviceCard {\n    width: 250px;\n    height: 155px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zZXJ2aWNlcy9OOlxcQ29kZVxcUmVwb3NcXFJlc2VydmF0aW9uLVN5c3RlbVxcUmVzZXJ2YXRpb24tU3lzdGVtL3NyY1xcYXBwXFxtb2R1bGVzXFxzZXJ2aWNlc1xcc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7QUNDRjs7QURFQSx3Q0FBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0NGOztBREVBLDZCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FDQ0Y7O0FERUEsK0NBQUE7O0FBQ0E7RUFDRSw0QkFBQTtBQ0NGOztBREVBLDZEQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBLG9DQUFBOztBQUNBO0VBQ0UsY0FBQTtBQ0NGOztBREVBLGtDQUFBOztBQUNBO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFHQSx3QkFBQTtBQ0NGOztBREdBO0VBQ0UsNERBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRElBO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQ0RGOztBRElBO0VBQ0UsaUJBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0FDREY7O0FESUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsWUFBQTtFQ0RGOztFRElBO0lBQ0UsYUFBQTtFQ0RGOztFRElBO0lBQ0UsZUFBQTtFQ0RGOztFRElBO0lBQ0UsaUJBQUE7RUNERjs7RURJQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzgyODI4MjtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyTGluZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlcnZpY2VTZXR0aW5nc0JhciB7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnBjU2VsZWN0QnV0dG9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4vL0N1c3RvbSBJbnB1dFxyXG4uY2hlY2tib3hDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjYWNhYWFhO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXHJcbi5jaGVja2JveENvbnRhaW5lciBpbnB1dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogMDtcclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXHJcbi5jaGVja21hcmsge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2M5YzdjNztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjYpO1xyXG59XHJcblxyXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cclxuLmNoZWNrYm94Q29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAxKTtcclxufVxyXG5cclxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cclxuLmNoZWNrbWFyazphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xyXG4uY2hlY2tib3hDb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xyXG4uY2hlY2tib3hDb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgbGVmdDogOHB4O1xyXG4gIHRvcDogNXB4O1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlcjogc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG4vL0VuZCBvZiBDdXN0b20gSW5wdXRcclxuXHJcbi5tdWx0aXBsZUNob2ljZXNCdXR0b24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMDQ5MWVkLCAjMGU2NWQ4KTtcclxuICBib3gtc2hhZG93OiAwIDNweCAyMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xyXG4gIHBhZGRpbmc6IDhweCAyM3B4IDhweCAyNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTk7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi8vU2VydmljZXMgU2VjdGlvblxyXG4uc2VydmljZU1haW5Db250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IC02MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG59XHJcblxyXG4uc2VydmljZUNvbHVtbiB7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG5cclxuLnNlcnZpY2VDYXJkIHsgLy9TZXJ2aWNlIENhcmRcclxuICB3aWR0aDogMzA1cHg7XHJcbiAgaGVpZ2h0OiAxNjBweDtcclxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDIycHggMCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XHJcbiAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzQ1OTBmMztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5zZXJ2aWNlQ2FyZDpob3ZlciwgLnNlcnZpY2VDYXJkOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG4vL0R5bmFtaWMgQWxpZ25tZW50IChsdHIvcnRsKVxyXG4udGV4dEFsaWduUmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udGV4dEFsaWduTGVmdCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4vL0dlbmVyYWwgUmVzcG9uc2l2ZSBEZXNpZ25cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNTAwcHgpIHtcclxuICBoZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgfVxyXG5cclxuICAucGNTZWxlY3RCdXR0b24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5tdWx0aXBsZUNob2ljZXNCdXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLnNlcnZpY2VNYWluQ29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gIH1cclxuXHJcbiAgLnNlcnZpY2VDYXJkIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMTU1cHg7XHJcbiAgfVxyXG59XHJcbiIsImhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5oZWFkZXJMaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXJ2aWNlU2V0dGluZ3NCYXIge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucGNTZWxlY3RCdXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNoZWNrYm94Q29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2FjYWFhYTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cbi5jaGVja2JveENvbnRhaW5lciBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuXG4vKiBDcmVhdGUgYSBjdXN0b20gY2hlY2tib3ggKi9cbi5jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMjJweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2M5YzdjNztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ1LCAyNDUsIDAuNik7XG59XG5cbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xuLmNoZWNrYm94Q29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi8qIENyZWF0ZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAoaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTaG93IHRoZSBjaGVja21hcmsgd2hlbiBjaGVja2VkICovXG4uY2hlY2tib3hDb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogU3R5bGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKi9cbi5jaGVja2JveENvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgbGVmdDogOHB4O1xuICB0b3A6IDVweDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXI6IHNvbGlkIGJsYWNrO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4ubXVsdGlwbGVDaG9pY2VzQnV0dG9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwNDkxZWQsICMwZTY1ZDgpO1xuICBib3gtc2hhZG93OiAwIDNweCAyMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiA4cHggMjNweCA4cHggMjZweDtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMTk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VydmljZU1haW5Db250YWluZXIge1xuICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG59XG5cbi5zZXJ2aWNlQ29sdW1uIHtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuLnNlcnZpY2VDYXJkIHtcbiAgd2lkdGg6IDMwNXB4O1xuICBoZWlnaHQ6IDE2MHB4O1xuICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICBib3gtc2hhZG93OiAwIDNweCAyMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLnNlcnZpY2VDYXJkIGgxIHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgY29sb3I6ICM0NTkwZjM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNlcnZpY2VDYXJkOmhvdmVyLCAuc2VydmljZUNhcmQ6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi50ZXh0QWxpZ25SaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dEFsaWduTGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDUwMHB4KSB7XG4gIGhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZzogM3B4O1xuICB9XG5cbiAgLnBjU2VsZWN0QnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm11bHRpcGxlQ2hvaWNlc0J1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLnNlcnZpY2VNYWluQ29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcbiAgfVxuXG4gIC5zZXJ2aWNlQ2FyZCB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMTU1cHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/services/services.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules/services/services.component.ts ***!
    \********************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppModulesServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_Branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/Branch-service */
    "./src/app/services/Branch-service.ts");
    /* harmony import */


    var _services_Store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/Store-service */
    "./src/app/services/Store-service.ts");
    /* harmony import */


    var _services_utilities_LanguageHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/utilities/LanguageHelper */
    "./src/app/services/utilities/LanguageHelper.ts"); //class services {
    //  id: number;
    //  name: string;
    //  redirectionLink: string;
    //  availability: string;
    //  address: string;
    //  longitude: number;
    //  latitude: number;
    //  isChecked: boolean;
    //}


    var ServicesComponent =
    /*#__PURE__*/
    function () {
      function ServicesComponent(router, languageHelper, branchService, storeService) {
        _classCallCheck(this, ServicesComponent);

        this.router = router;
        this.languageHelper = languageHelper;
        this.branchService = branchService;
        this.storeService = storeService; //

        this.isLoading = false; //Models

        this.storesList = new Array();
        this.Selectedstores = new Array(); //servicesList: Array<services> = new Array<services>(); //Dummy service model
        //selectedServices: Array<services> = new Array<services>();
        //Toggle Variables

        this.isSelecting = false;
        this.selectAllStatus = false;
        this.langVar = this.languageHelper.initializeMode().Services;
        this.direction = this.languageHelper.initializeMode().dir;
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          //activate loading svg
          this.isLoading = true;
          this.choiceButton = this.langVar.multipleChoicesButton; // Set default button translation
          //fetch branches info

          this.storeService.GetAllStores().subscribe(function (stores) {
            //this.servicesList = branches;
            _this7.storesList = stores.data;
            console.log(_this7.storesList);
            _this7.isLoading = false;
          }, function (error) {
            //this.isLogging = false;
            console.log("error", error);
          }); //Push dummy data model
          //this.servicesList.push(
          //  { id: 0, name: 'BOLT SALON', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', address: '24 St. 8 Blot, First floor, Mokattam, Egypt.', availability: '24 Hours', latitude: 29.973123315555732, longitude: 30.95099095982646, isChecked: false },
          //  { id: 1, name: 'BOLT DOCTOR', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', address: '24 St. 8 Blot, First floor, Mokattam, Egypt.', availability: '24 Hours', latitude: 29.94301828449303, longitude: 30.877321716930787, isChecked: false },
          //  { id: 2, name: 'BOLT RESTAURANT', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', address: '24 St. 8 Blot, First floor, Mokattam, Egypt.', availability: '24 Hours', latitude: 29.973123315555732, longitude: 30.95099095982646, isChecked: false },
          //  { id: 3, name: 'BOLT SALON', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', address: '24 St. 8 Blot, First floor, Mokattam, Egypt.', availability: '24 Hours', latitude: 29.973123315555732, longitude: 30.95099095982646, isChecked: false },
          //  { id: 4, name: 'BOLT DOCTOR', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', address: '24 St. 8 Blot, First floor, Mokattam, Egypt.', availability: '24 Hours', latitude: 29.973123315555732, longitude: 30.95099095982646, isChecked: false },
          //  { id: 5, name: 'BOLT RESTAURANT', redirectionLink: 'boltrestaurant.boltsmartsolutions.com/', address: '24 St. 8 Blot, First floor, Mokattam, Egypt.', availability: '24 Hours', latitude: 29.973123315555732, longitude: 30.95099095982646, isChecked: false },
          //  )
        } //Toggle isSelecting true/false for multiple service selection

      }, {
        key: "ToggleSelection",
        value: function ToggleSelection() {
          this.isSelecting = !this.isSelecting;

          if (this.choiceButton == this.langVar.multipleChoicesButton) {
            this.choiceButton = this.langVar.cancelButton;
          } else {
            this.choiceButton = this.langVar.multipleChoicesButton;
          }
        }
      }, {
        key: "SelectService",
        value: function SelectService(service) {
          if (this.isSelecting == false) {
            this.Selectedstores.push(service);
            localStorage.setItem('Selectedstores', JSON.stringify(this.Selectedstores));
            this.router.navigate(['/reservation/service-locations']);
          } else {
            this.SetServiceCheckbox(!service.isChecked, service);
          }
        } //Mark all services as checked / Unmark all services

      }, {
        key: "SelectAll",
        value: function SelectAll(event) {
          if (this.isSelecting) {
            // multiple selection toggled
            if (event == false) {
              this.ToggleSelection();
            }

            for (var i = 0; i < this.storesList.length; i++) {
              this.storesList[i].isChecked = event;
            }

            this.Selectedstores = this.storesList.filter(function (s) {
              return s.isChecked == true;
            }); // Re-set selected services List
          } else {
            // Multiple Selection not toggled
            this.ToggleSelection(); //Toggle multiple Selection

            this.SelectAll(event); //Re-call function
          }
        } //Set service isChecked

      }, {
        key: "SetServiceCheckbox",
        value: function SetServiceCheckbox(event, service) {
          service.isChecked = event;
          this.Selectedstores = this.storesList.filter(function (s) {
            return s.isChecked == true;
          }); // Re-set selected services List
        }
      }, {
        key: "ViewLocation",
        value: function ViewLocation() {
          if (this.Selectedstores.length > 0) {
            localStorage.setItem('Selectedstores', JSON.stringify(this.Selectedstores));
            this.router.navigate(['/reservation/service-locations']);
          }
        }
      }]);

      return ServicesComponent;
    }();

    ServicesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_utilities_LanguageHelper__WEBPACK_IMPORTED_MODULE_5__["LanguageHelper"]
      }, {
        type: _services_Branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"]
      }, {
        type: _services_Store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"]
      }];
    };

    ServicesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-services',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./services.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/services/services.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./services.component.scss */
      "./src/app/modules/services/services.component.scss"))["default"]]
    })], ServicesComponent);
    /***/
  },

  /***/
  "./src/app/modules/shared/modal/modal.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/shared/modal/modal.component.ts ***!
    \*********************************************************/

  /*! exports provided: ModalComponent */

  /***/
  function srcAppModulesSharedModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //Shared Modal component for displaying general popups in parent components.


    var ModalComponent =
    /*#__PURE__*/
    function () {
      function ModalComponent(formBuilder, router) {
        _classCallCheck(this, ModalComponent);

        this.formBuilder = formBuilder;
        this.router = router;
      }

      _createClass(ModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showSuccessModal",
        value: function showSuccessModal(msg) {
          this.succesMsg = msg;
          this.successModal.show();
        }
      }, {
        key: "showFailModal",
        value: function showFailModal(msg) {
          this.failmsg = msg;
          this.dangerModal.show();
        }
      }, {
        key: "hideSuccessModal",
        value: function hideSuccessModal() {
          this.successModal.hide(); // window.location.reload();
        }
      }, {
        key: "ChangeImgModalShow",
        value: function ChangeImgModalShow(image) {
          this.ChangeImg.show();
        }
      }]);

      return ModalComponent;
    }();

    ModalComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myModal')], ModalComponent.prototype, "myModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ChangeImg')], ModalComponent.prototype, "ChangeImg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('largeModal')], ModalComponent.prototype, "largeModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('smallModal')], ModalComponent.prototype, "smallModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('primaryModal')], ModalComponent.prototype, "primaryModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('successModal')], ModalComponent.prototype, "successModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('warningModal')], ModalComponent.prototype, "warningModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dangerModal')], ModalComponent.prototype, "dangerModal", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('infoModal')], ModalComponent.prototype, "infoModal", void 0);
    ModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/modal/modal.component.html"))["default"]
    })], ModalComponent);
    /***/
  },

  /***/
  "./src/app/modules/shared/shared.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/modules/shared/shared.module.ts ***!
    \*************************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppModulesSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/__ivy_ngcc__/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal/modal.component */
    "./src/app/modules/shared/modal/modal.component.ts"); //Shared Components and imported modules between the project are imported here
    //Components that shall be re-used between modules should be exported.


    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_3__["SlickCarouselModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot()],
      exports: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/services/Branch-service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/Branch-service.ts ***!
    \********************************************/

  /*! exports provided: BranchService */

  /***/
  function srcAppServicesBranchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BranchService", function () {
      return BranchService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_shared_services_api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/shared-services/api-constants */
    "./src/app/services/shared-services/api-constants.ts");
    /* harmony import */


    var _services_shared_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/shared-services/base-service */
    "./src/app/services/shared-services/base-service.ts");

    var BranchService =
    /*#__PURE__*/
    //Component Services inherit from Base service for HTTP CRUD operations
    // Observable functions call their corresponding End-Point API Constants
    function (_services_shared_serv) {
      _inherits(BranchService, _services_shared_serv);

      var _super = _createSuper(BranchService);

      function BranchService(httpClient) {
        var _this8;

        _classCallCheck(this, BranchService);

        _this8 = _super.call(this, httpClient);
        _this8.httpClient = httpClient;
        return _this8;
      }

      _createClass(BranchService, [{
        key: "GetAllstorebranches",
        value: function GetAllstorebranches(id) {
          return this.get(_services_shared_services_api_constants__WEBPACK_IMPORTED_MODULE_3__["API_CONSTANTS"].GetAllstorebranches + id);
        }
      }, {
        key: "GetAllStoresbranches",
        value: function GetAllStoresbranches(getStoresIDModel) {
          return this.post(_services_shared_services_api_constants__WEBPACK_IMPORTED_MODULE_3__["API_CONSTANTS"].GetAllStoresbranches, getStoresIDModel);
        }
      }]);

      return BranchService;
    }(_services_shared_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]);

    BranchService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    BranchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }) //Component Services inherit from Base service for HTTP CRUD operations
    // Observable functions call their corresponding End-Point API Constants
    ], BranchService);
    /***/
  },

  /***/
  "./src/app/services/Reservation-History-Service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/Reservation-History-Service.ts ***!
    \*********************************************************/

  /*! exports provided: ReservationHistoryService */

  /***/
  function srcAppServicesReservationHistoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReservationHistoryService", function () {
      return ReservationHistoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_shared_services_api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/shared-services/api-constants */
    "./src/app/services/shared-services/api-constants.ts");
    /* harmony import */


    var _services_shared_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/shared-services/base-service */
    "./src/app/services/shared-services/base-service.ts");

    var ReservationHistoryService =
    /*#__PURE__*/
    //Component Services inherit from Base service for HTTP CRUD operations
    // Observable functions call their corresponding End-Point API Constants
    function (_services_shared_serv2) {
      _inherits(ReservationHistoryService, _services_shared_serv2);

      var _super2 = _createSuper(ReservationHistoryService);

      function ReservationHistoryService(httpClient) {
        var _this9;

        _classCallCheck(this, ReservationHistoryService);

        _this9 = _super2.call(this, httpClient);
        _this9.httpClient = httpClient;
        return _this9;
      }

      _createClass(ReservationHistoryService, [{
        key: "GetReservationHistory",
        value: function GetReservationHistory(id) {
          return this.get(_services_shared_services_api_constants__WEBPACK_IMPORTED_MODULE_3__["API_CONSTANTS"].GetReservationRecordsByID + id);
        }
      }, {
        key: "CreateReservationRecord",
        value: function CreateReservationRecord(createReservationHistoryModel) {
          return this.post(_services_shared_services_api_constants__WEBPACK_IMPORTED_MODULE_3__["API_CONSTANTS"].CreateReservationRecord, createReservationHistoryModel);
        }
      }]);

      return ReservationHistoryService;
    }(_services_shared_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]);

    ReservationHistoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ReservationHistoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }) //Component Services inherit from Base service for HTTP CRUD operations
    // Observable functions call their corresponding End-Point API Constants
    ], ReservationHistoryService);
    /***/
  },

  /***/
  "./src/app/services/Store-service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/Store-service.ts ***!
    \*******************************************/

  /*! exports provided: StoreService */

  /***/
  function srcAppServicesStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreService", function () {
      return StoreService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_shared_services_api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/shared-services/api-constants */
    "./src/app/services/shared-services/api-constants.ts");
    /* harmony import */


    var _services_shared_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/shared-services/base-service */
    "./src/app/services/shared-services/base-service.ts");

    var StoreService =
    /*#__PURE__*/
    //Component Services inherit from Base service for HTTP CRUD operations
    // Observable functions call their corresponding End-Point API Constants
    function (_services_shared_serv3) {
      _inherits(StoreService, _services_shared_serv3);

      var _super3 = _createSuper(StoreService);

      function StoreService(httpClient) {
        var _this10;

        _classCallCheck(this, StoreService);

        _this10 = _super3.call(this, httpClient);
        _this10.httpClient = httpClient;
        return _this10;
      }

      _createClass(StoreService, [{
        key: "GetAllStores",
        value: function GetAllStores() {
          return this.get(_services_shared_services_api_constants__WEBPACK_IMPORTED_MODULE_3__["API_CONSTANTS"].GetAllStores);
        }
      }]);

      return StoreService;
    }(_services_shared_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]);

    StoreService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    StoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }) //Component Services inherit from Base service for HTTP CRUD operations
    // Observable functions call their corresponding End-Point API Constants
    ], StoreService);
    /***/
  },

  /***/
  "./src/app/services/home-service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/home-service.ts ***!
    \******************************************/

  /*! exports provided: HomeService */

  /***/
  function srcAppServicesHomeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeService", function () {
      return HomeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_shared_services_api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/shared-services/api-constants */
    "./src/app/services/shared-services/api-constants.ts");
    /* harmony import */


    var _services_shared_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/shared-services/base-service */
    "./src/app/services/shared-services/base-service.ts");

    var HomeService =
    /*#__PURE__*/
    //Component Services inherit from Base service for HTTP CRUD operations
    // Observable functions call their corresponding End-Point API Constants
    function (_services_shared_serv4) {
      _inherits(HomeService, _services_shared_serv4);

      var _super4 = _createSuper(HomeService);

      function HomeService(httpClient) {
        var _this11;

        _classCallCheck(this, HomeService);

        _this11 = _super4.call(this, httpClient);
        _this11.httpClient = httpClient;
        return _this11;
      }

      _createClass(HomeService, [{
        key: "GetHomePageContents",
        value: function GetHomePageContents() {
          return this.get(_services_shared_services_api_constants__WEBPACK_IMPORTED_MODULE_3__["API_CONSTANTS"].HOMEPAGE_GET_CONTENTS);
        }
      }]);

      return HomeService;
    }(_services_shared_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]);

    HomeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    HomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }) //Component Services inherit from Base service for HTTP CRUD operations
    // Observable functions call their corresponding End-Point API Constants
    ], HomeService);
    /***/
  },

  /***/
  "./src/app/services/shared-services/api-constants.ts":
  /*!***********************************************************!*\
    !*** ./src/app/services/shared-services/api-constants.ts ***!
    \***********************************************************/

  /*! exports provided: API_CONSTANTS */

  /***/
  function srcAppServicesSharedServicesApiConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "API_CONSTANTS", function () {
      return API_CONSTANTS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); //API End-Point links are defined here for http-services to call.


    var API_CONSTANTS = {
      //HomePage
      //Get
      HOMEPAGE_GET_CONTENTS: "GetHomeContents",
      //Gallery Items
      //Get
      GALLERY_GET_ITEMS: "GetGalleryItems",
      GALLERY_GET_ITEM_BY_ID: "GetGalleryItem/",
      //Post
      GALLERY_CREATE_GALLERY_ITEM: "CreateGalleryItem",
      //Image Handler
      IMAGE_HANDLER_UPLOAD_USER_IMAGE: "/UploadUserImage",
      IMAGE_HANDLER_UPLOAD_ADMIN_IMAGE: "/UploadAdminImage",
      IMAGE_HANDLER_REMOVE_USER_IMAGE: "/RemoveUserImage/",
      IMAGE_HANDLER_REMOVE_ADMIN_IMAGE: "/RemoveAdminImage/",
      //Login
      Login: "Users/Login",
      googleAuth: "Users/GoogleAuthenticate",
      facebookAuth: "Users/AuthenticateFacebookUserAsync",
      //customer
      CustomerRegister: "Customer/CreateCustomerAccount",
      EditCustomer: "Customer/EditCustomer",
      EditCustomerImg: "Customer/EditCustomerImg",
      //branches
      GetAllstorebranches: "Branch/GetStoreBranches/",
      GetAllStoresbranches: "Branch/GetStoresBranches",
      //stores
      GetAllStores: "Store/GetAllStores",
      //reservation
      GetReservationRecordsByID: "ReservationHistory/GetReservationRecords/",
      CreateReservationRecord: "ReservationHistory/CreateReservationRecord/",
      UpdateReservationRecord: "ReservationHistory/UpdateReservationRecord"
    };
    /***/
  },

  /***/
  "./src/app/services/shared-services/authentication.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/services/shared-services/authentication.service.ts ***!
    \********************************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesSharedServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./base-service */
    "./src/app/services/shared-services/base-service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _jwt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./jwt.service */
    "./src/app/services/shared-services/jwt.service.ts");
    /* harmony import */


    var _api_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./api-constants */
    "./src/app/services/shared-services/api-constants.ts");

    var AuthenticationService =
    /*#__PURE__*/
    function (_base_service__WEBPAC) {
      _inherits(AuthenticationService, _base_service__WEBPAC);

      var _super5 = _createSuper(AuthenticationService);

      function AuthenticationService(httpClient, jwtService) {
        var _this12;

        _classCallCheck(this, AuthenticationService);

        _this12 = _super5.call(this, httpClient);
        _this12.httpClient = httpClient;
        _this12.jwtService = jwtService;
        _this12.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        _this12.currentUser = _this12.currentUserSubject.asObservable();
        _this12.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](_this12.jwtService.getUser());
        _this12.currentUser = _this12.currentUserSubject.asObservable();
        return _this12;
      }

      _createClass(AuthenticationService, [{
        key: "googleLogin",
        value: function googleLogin(googleUser) {
          var _this13 = this;

          console.log(googleUser);
          return this.httpClient.post("".concat(this.apiUrl).concat(_api_constants__WEBPACK_IMPORTED_MODULE_7__["API_CONSTANTS"].googleAuth), googleUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (profile) {
            _this13.setAuth(profile);

            return profile;
          }));
        }
      }, {
        key: "FBLogin",
        value: function FBLogin(googleUser) {
          var _this14 = this;

          console.log(googleUser);
          return this.httpClient.post(_api_constants__WEBPACK_IMPORTED_MODULE_7__["API_CONSTANTS"].facebookAuth, googleUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (profile) {
            _this14.setAuth(profile);

            return profile;
          }));
        }
      }, {
        key: "login",
        value: function login(model) {
          return this.ionicPostRequest(_api_constants__WEBPACK_IMPORTED_MODULE_7__["API_CONSTANTS"].Login, model);
        }
      }, {
        key: "CustomerRegistration",
        value: function CustomerRegistration(model) {
          return this.post(_api_constants__WEBPACK_IMPORTED_MODULE_7__["API_CONSTANTS"].CustomerRegister, model);
        }
      }, {
        key: "setAuth",
        value: function setAuth(user) {
          console.log();
          this.jwtService.saveUser(user);
          this.currentUserSubject.next(user);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.purgeAuth();
        }
      }, {
        key: "purgeAuth",
        value: function purgeAuth() {
          this.jwtService.destroyUser();
          this.currentUserSubject.next(null);
        }
      }]);

      return AuthenticationService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]);

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _jwt_service__WEBPACK_IMPORTED_MODULE_6__["JwtService"]
      }];
    };

    AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/shared-services/base-service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/shared-services/base-service.ts ***!
    \**********************************************************/

  /*! exports provided: BaseService */

  /***/
  function srcAppServicesSharedServicesBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseService", function () {
      return BaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var BaseService =
    /*#__PURE__*/
    function () {
      function BaseService(http) {
        _classCallCheck(this, BaseService);

        this.http = http;
        this.ionicHTTPClient = new _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_1__["HTTP"]();
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiBaseUrl;
      }

      _createClass(BaseService, [{
        key: "get",
        value: function get(url, params) {
          this.httpOptions = {
            headers: this.httpHeaders,
            params: params,
            withCredentials: true
          };
          return this.http.get(this.apiUrl + url, this.httpOptions);
        }
      }, {
        key: "post",
        value: function post(url, data, params) {
          this.httpOptions = {
            headers: this.httpHeaders,
            params: params,
            withCredentials: true
          };
          return this.http.post(this.apiUrl + url, data, this.httpOptions);
        }
      }, {
        key: "ionicPostRequest",
        value: function ionicPostRequest(url, data, params) {
          this.httpOptions = {
            headers: this.httpHeaders,
            params: params,
            withCredentials: true
          }; //this.ionicHTTPClient.setHeader()

          return this.ionicHTTPClient.post(this.apiUrl + url, data, {});
        }
      }]);

      return BaseService;
    }();
    /***/

  },

  /***/
  "./src/app/services/shared-services/jwt.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/shared-services/jwt.service.ts ***!
    \*********************************************************/

  /*! exports provided: JwtService */

  /***/
  function srcAppServicesSharedServicesJwtServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtService", function () {
      return JwtService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var JwtService_1;

    var JwtService = JwtService_1 =
    /*#__PURE__*/
    function () {
      function JwtService() {
        _classCallCheck(this, JwtService);
      }

      _createClass(JwtService, [{
        key: "getUser",
        value: function getUser() {
          var user = localStorage.getItem(JwtService_1.TOKEN_KEY);
          if (user) return JSON.parse(user);else return null;
        }
      }, {
        key: "saveUser",
        value: function saveUser(user) {
          localStorage.setItem(JwtService_1.TOKEN_KEY, JSON.stringify(user));
        }
      }, {
        key: "destroyUser",
        value: function destroyUser() {
          localStorage.removeItem(JwtService_1.TOKEN_KEY);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          var user = this.getUser();
          if (user) return user.token;else return null;
        }
      }]);

      return JwtService;
    }();

    JwtService.TOKEN_KEY = 'user';
    JwtService = JwtService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], JwtService);
    /***/
  },

  /***/
  "./src/app/services/utilities/LanguageHelper.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/utilities/LanguageHelper.ts ***!
    \******************************************************/

  /*! exports provided: LanguageHelper */

  /***/
  function srcAppServicesUtilitiesLanguageHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageHelper", function () {
      return LanguageHelper;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LanguageHelper =
    /*#__PURE__*/
    function () {
      function LanguageHelper(router) {
        _classCallCheck(this, LanguageHelper);

        this.router = router; //Get current language variable from Local Storage

        this.currentLanguage = localStorage.getItem("Language");
      }

      _createClass(LanguageHelper, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //Define default language variable
          if (this.currentLanguage == null || this.currentLanguage != 'EN' && this.currentLanguage != 'AR') {
            localStorage.setItem("Language", "EN");
            setTimeout(function () {
              window.location.reload();
            }, 2000);
          } else //Fetch current language
            this.currentLanguage = localStorage.getItem("Language");
        } //Initialize language variables

      }, {
        key: "initializeMode",
        value: function initializeMode() {
          if (this.currentLanguage == 'EN') {
            //English Translations
            return {
              dir: 'ltr',
              Login: {
                formHeader: 'Fill the form below to get started.',
                formLoginHeader: 'Login below to get started.',
                userName: 'User Name',
                PhoneNumber: 'Phone Number',
                Password: 'Your Password',
                ConfirmPassword: 'Confirm Password',
                signUp: 'Sign up',
                login: 'Login',
                welcome: 'Welcome!',
                register: 'Register',
                here: 'here.',
                notUser: 'Not User?',
                keepMe: ' Keep me logged in',
                textAlign: 'text-left'
              },
              Services: {
                textAlign1: 'textAlignRight',
                textAlign2: 'textAlignLeft',
                header: 'Select The Service You Want From The Following List:',
                multipleChoicesButton: 'Multiple Choices',
                cancelButton: 'Cancel',
                select: 'Select',
                selectAll: 'Select All',
                viewLocation: 'View Location(s)',
                searchTitle: 'Search by Address, Province or City',
                searchBarTitle: 'Location or Address'
              }
            };
          } else if (this.currentLanguage == 'AR') {
            //Arabic Translations
            return {
              dir: 'rtl',
              Login: {
                formHeader: 'Fill the form below to get started.',
                formLoginHeader: 'Login below to get started.',
                userName: 'User Name',
                PhoneNumber: 'Phone Number',
                Password: 'Your Password',
                ConfirmPassword: 'Confirm Password',
                signUp: 'Sign up',
                login: 'Login',
                welcome: 'Welcome!',
                register: 'Register',
                here: 'here.',
                notUser: 'Not User?',
                keepMe: ' Keep me logged in',
                textAlign: 'text-right'
              },
              Services: {
                textAlign1: 'textAlignLeft',
                textAlign2: 'textAlignRight',
                header: 'حدد الخدمة التي تريدها من القائمة التالية:',
                multipleChoicesButton: 'خيارات متعددة',
                cancelButton: 'إلغاء',
                select: 'اختر',
                selectAll: 'اختر الكل',
                viewLocation: 'عرض الموقع ',
                searchTitle: 'البحث عن طريق العنوان أو المقاطعة أو المدينة',
                searchBarTitle: 'الموقع أو العنوان'
              }
            };
          }
        }
      }]);

      return LanguageHelper;
    }();

    LanguageHelper.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    LanguageHelper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LanguageHelper);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); //API and Image Server local ip configuration (Handled via base-service)


    var environment = {
      production: false,
      apiBaseUrl: "http://10.0.2.2:44309/api/",
      googleClientId: "926693855353-ph0i56aiitoq5gml5cgnnkdrrhoeaihb.apps.googleusercontent.com",
      FBClientId: "1384323871904376"
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! N:\Code\Repos\Reservation-System\Reservation-System\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map