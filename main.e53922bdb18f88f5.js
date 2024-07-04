(self["webpackChunkapp_sealana"] = self["webpackChunkapp_sealana"] || []).push([
    ["main"], {

        /***/
        23966:
            /*!***************************************!*\
              !*** ./src/app/app-routing.module.ts ***!
              \***************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    AppRoutingModule: () => ( /* binding */ AppRoutingModule)
                    /* harmony export */
                });
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */ 27947);
                /* harmony import */
                var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/forms */ 28849);
                /* harmony import */
                var _components_language_language_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./components/language/language.component */ 95055);
                /* harmony import */
                var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./components/home/home.component */ 50159);
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */ 61699);






                const routes = [{
                    path: ':lang',
                    component: _components_language_language_component__WEBPACK_IMPORTED_MODULE_0__.LanguageComponent,
                    children: [{
                        path: '',
                        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
                    }]
                }, {
                    path: '**',
                    redirectTo: '/en',
                    pathMatch: 'full'
                }];
                class AppRoutingModule {
                    static ɵfac = function AppRoutingModule_Factory(t) {
                        return new(t || AppRoutingModule)();
                    };
                    static ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
                        type: AppRoutingModule
                    });
                    static ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
                        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
                            anchorScrolling: 'enabled'
                        }), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
                    });
                }

                (function() {
                    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
                        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
                        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
                    });
                })();

                /***/
            }),

        /***/
        66401:
            /*!**********************************!*\
              !*** ./src/app/app.component.ts ***!
              \**********************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    AppComponent: () => ( /* binding */ AppComponent),
                    /* harmony export */
                    selectedLang: () => ( /* binding */ selectedLang)
                    /* harmony export */
                });
                /* harmony import */
                var _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./shared/constants/app-enums */ 74276);
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */ 61699);
                /* harmony import */
                var _services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./services/event.service */ 91457);
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */ 27947);




                // import { getParam } from './shared/app-enums';
                var selectedLang;
                class AppComponent {
                    eventService;
                    constructor(eventService) {
                        this.eventService = eventService;
                        (0, _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_0__.getParam)('clickId');
                        (0, _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_0__.getParam)('source');
                        (0, _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_0__.getParam)('tid');
                        (0, _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_0__.getParam)('pid');
                        this.eventService.getLang().subscribe(val => {
                            selectedLang = val || 'en';
                        });
                    }
                    static ɵfac = function AppComponent_Factory(t) {
                        return new(t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService));
                    };
                    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
                        type: AppComponent,
                        selectors: [
                            ["app-root"]
                        ],
                        decls: 1,
                        vars: 0,
                        template: function AppComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
                            }
                        },
                        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
                        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
                    });
                }


                /***/
            }),

        /***/
        78629:
            /*!*******************************!*\
              !*** ./src/app/app.module.ts ***!
              \*******************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    AppModule: () => ( /* binding */ AppModule),
                    /* harmony export */
                    HttpLoaderFactory: () => ( /* binding */ HttpLoaderFactory)
                    /* harmony export */
                });
                /* harmony import */
                var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @angular/platform-browser/animations */ 24987);
                /* harmony import */
                var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! @ngx-translate/core */ 21916);
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! @angular/common/http */ 54860);
                /* harmony import */
                var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__( /*! @ngx-translate/http-loader */ 26930);
                /* harmony import */
                var angular_svg_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! angular-svg-icon */ 38848);
                /* harmony import */
                var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ngx-bootstrap/dropdown */ 16380);
                /* harmony import */
                var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ngx-bootstrap/modal */ 27269);
                /* harmony import */
                var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/forms */ 28849);
                /* harmony import */
                var ngx_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ngx-clipboard */ 94808);
                /* harmony import */
                var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! ngx-owl-carousel-o */ 99436);
                /* harmony import */
                var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! @swimlane/ngx-charts */ 48278);
                /* harmony import */
                var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! ngx-bootstrap/accordion */ 66140);
                /* harmony import */
                var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ngx-bootstrap/tooltip */ 13804);
                /* harmony import */
                var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./shared/shared.module */ 56208);
                /* harmony import */
                var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./app-routing.module */ 23966);
                /* harmony import */
                var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app.component */ 66401);
                /* harmony import */
                var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./components/header/header.component */ 6471);
                /* harmony import */
                var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./components/home/home.component */ 50159);
                /* harmony import */
                var _components_language_language_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./components/language/language.component */ 95055);
                /* harmony import */
                var _modals_connect_connect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./modals/connect/connect.component */ 39147);
                /* harmony import */
                var _components_swap_swap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./components/swap/swap.component */ 41838);
                /* harmony import */
                var _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./components/about/about.component */ 86352);
                /* harmony import */
                var _components_how_to_buy_how_to_buy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./components/how-to-buy/how-to-buy.component */ 41312);
                /* harmony import */
                var _components_buy_widget_buy_widget_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./components/buy-widget/buy-widget.component */ 3990);
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @angular/core */ 61699);






























                class AppModule {
                    static ɵfac = function AppModule_Factory(t) {
                        return new(t || AppModule)();
                    };
                    static ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
                        type: AppModule,
                        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
                    });
                    static ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
                        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, ngx_clipboard__WEBPACK_IMPORTED_MODULE_14__.ClipboardModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__.ModalModule.forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__.BsDropdownModule.forRoot(), angular_svg_icon__WEBPACK_IMPORTED_MODULE_17__.AngularSvgIconModule.forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__.TooltipModule.forRoot(), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_20__.NgxChartsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_21__.CarouselModule, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_22__.AccordionModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule.forRoot({
                            loader: {
                                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateLoader,
                                useFactory: HttpLoaderFactory,
                                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient]
                            }
                        })]
                    });
                }

                (function() {
                    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
                        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _components_language_language_component__WEBPACK_IMPORTED_MODULE_5__.LanguageComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _components_swap_swap_component__WEBPACK_IMPORTED_MODULE_7__.SwapComponent, _modals_connect_connect_component__WEBPACK_IMPORTED_MODULE_6__.ConnectComponent, _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__.AboutComponent, _components_how_to_buy_how_to_buy_component__WEBPACK_IMPORTED_MODULE_9__.HowToBuyComponent, _components_buy_widget_buy_widget_component__WEBPACK_IMPORTED_MODULE_10__.BuyWidgetComponent],
                        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, ngx_clipboard__WEBPACK_IMPORTED_MODULE_14__.ClipboardModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__.ModalModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__.BsDropdownModule, angular_svg_icon__WEBPACK_IMPORTED_MODULE_17__.AngularSvgIconModule, ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__.TooltipModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_20__.NgxChartsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_21__.CarouselModule, ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_22__.AccordionModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule]
                    });
                })();

                function HttpLoaderFactory(http) {
                    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_24__.TranslateHttpLoader(http, './assets/i18n/', '.json');
                }

                /***/
            }),

        /***/
        86352:
            /*!*****************************************************!*\
              !*** ./src/app/components/about/about.component.ts ***!
              \*****************************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    AboutComponent: () => ( /* binding */ AboutComponent)
                    /* harmony export */
                });
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ 61699);
                /* harmony import */
                var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @ngx-translate/core */ 21916);


                class AboutComponent {
                    static ɵfac = function AboutComponent_Factory(t) {
                        return new(t || AboutComponent)();
                    };
                    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: AboutComponent,
                        selectors: [
                            ["app-about"]
                        ],
                        decls: 13,
                        vars: 0,
                        consts: [
                            ["id", "about", 1, "about"],
                            [1, "container"],
                            [1, "wrapper"],
                            ["src", "/assets/images/about-thread.svg", 1, "img-fluid", "about-thread", "d-block"],
                            [1, "about-wrapper"],
                            [1, "about-frame"],
                            [1, "about-info"],
                            [1, "title-wrapper"],
                            ["translate", "", 1, "mb-0"],
                            ["src", "/assets/images/svg-icons/logo.svg", 1, "img-fluid", "mx-auto", "d-block", "mb-4"],
                            ["translate", ""]
                        ],
                        template: function AboutComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h2", 8);
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "about_title");
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "about_desc");
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
                            }
                        },
                        dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateDirective],
                        styles: [".about[_ngcontent-%COMP%] {\n  background: #E0DCC2 url(/assets/images/about.png) no-repeat 50% 50%/100%;\n  padding: 140px 0 250px;\n}\n@media screen and (max-width: 1508px) {\n  .about[_ngcontent-%COMP%] {\n    padding: 70px 0 140px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .about[_ngcontent-%COMP%] {\n    background: #E0DCC2;\n    padding: 60px 0;\n  }\n}\n.about[_ngcontent-%COMP%]   .about-wrapper[_ngcontent-%COMP%] {\n  box-shadow: -7px 9px 0px 0px rgba(0, 0, 0, 0.2509803922);\n  border-width: 4px;\n  border-style: solid;\n  border-color: #373737;\n}\n.about[_ngcontent-%COMP%]   .about-wrapper[_ngcontent-%COMP%]   .about-frame[_ngcontent-%COMP%] {\n  border: 10px solid #292929;\n}\n.about[_ngcontent-%COMP%]   .about-wrapper[_ngcontent-%COMP%]   .about-frame[_ngcontent-%COMP%]   .about-info[_ngcontent-%COMP%] {\n  border-width: 5px;\n  border-style: solid;\n  border-color: #373737;\n  background-color: white;\n  font-size: 28px;\n  padding: 50px 13px;\n}\n.about[_ngcontent-%COMP%]   .about-wrapper[_ngcontent-%COMP%]   .about-frame[_ngcontent-%COMP%]   .about-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  line-height: 0;\n}\n.about[_ngcontent-%COMP%]   .about-wrapper[_ngcontent-%COMP%]   .about-frame[_ngcontent-%COMP%]   .about-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 40px;\n  text-align: center;\n}\n.about[_ngcontent-%COMP%]   .about-wrapper[_ngcontent-%COMP%]   .about-frame[_ngcontent-%COMP%]   .about-info[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n  max-width: 350px;\n  margin: 0 auto;\n}\n@media screen and (max-width: 768px) {\n  .about[_ngcontent-%COMP%]   .about-wrapper[_ngcontent-%COMP%]   .about-frame[_ngcontent-%COMP%]   .about-info[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n    max-width: 250px;\n  }\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  max-width: 1050px;\n  margin: 0 auto;\n  transform: rotate(-2.75deg);\n}\n@media screen and (max-width: 768px) {\n  .wrapper[_ngcontent-%COMP%] {\n    transform: rotate(0deg);\n  }\n}\n\n.about-thread[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: -15px;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLHdFQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUdNO0VBSE47SUFJUSxxQkFBQTtFQUFOO0FBQ0Y7QUFDSTtFQU5KO0lBT1EsbUJBQUE7SUFDQSxlQUFBO0VBRU47QUFDRjtBQURJO0VBQ0ksd0RBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFHUjtBQUZRO0VBQ0UsMEJBQUE7QUFJVjtBQUhVO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFLWjtBQUpZO0VBQ0ksY0FBQTtBQU1oQjtBQUphO0VBQ0csZUFBQTtFQUNBLGtCQUFBO0FBTWhCO0FBSlk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFNaEI7QUFMZ0I7RUFISjtJQUlRLGdCQUFBO0VBUWxCO0FBQ0Y7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBQUtKO0FBSkk7RUFKSjtJQUtRLHVCQUFBO0VBT047QUFDRjs7QUFMQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBUUoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9yZXNwb25zaXZlXCI7XG5cbi5hYm91dHtcbiAgICBiYWNrZ3JvdW5kOiNFMERDQzIgdXJsKC9hc3NldHMvaW1hZ2VzL2Fib3V0LnBuZykgbm8tcmVwZWF0IDUwJSA1MCUvMTAwJTtcbiAgICBwYWRkaW5nOiAxNDBweCAwIDI1MHB4O1xuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxNTA4cHgpe1xuICAgICAgICBwYWRkaW5nOiA3MHB4IDAgMTQwcHg7XG4gICAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7XG4gICAgICAgIGJhY2tncm91bmQ6I0UwRENDMiA7XG4gICAgICAgIHBhZGRpbmc6IDYwcHggMCA7XG4gICAgfVxuICAgIC5hYm91dC13cmFwcGVye1xuICAgICAgICBib3gtc2hhZG93OiAtN3B4IDlweCAwcHggMHB4ICMwMDAwMDA0MDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA0cHg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzM3MzczNztcbiAgICAgICAgLmFib3V0LWZyYW1le1xuICAgICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCAjMjkyOTI5O1xuICAgICAgICAgIC5hYm91dC1pbmZve1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzczNzM3O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICBwYWRkaW5nOjUwcHggMTNweDtcbiAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGUtd3JhcHBlcntcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpe1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4ud3JhcHBlciB7XG4gICAgbWF4LXdpZHRoOiAxMDUwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIuNzVkZWcpO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpe1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgIFxuICAgIH1cbn1cbi5hYm91dC10aHJlYWR7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogLTE1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
                    });
                }


                /***/
            }),

        /***/
        3990:
            /*!***************************************************************!*\
              !*** ./src/app/components/buy-widget/buy-widget.component.ts ***!
              \***************************************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    BuyWidgetComponent: () => ( /* binding */ BuyWidgetComponent)
                    /* harmony export */
                });
                /* harmony import */
                var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
                /* harmony import */
                var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/environments/environment */ 20553);
                /* harmony import */
                var src_app_shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/shared/constants/app-enums */ 74276);
                /* harmony import */
                var src_app_modals_connect_connect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! src/app/modals/connect/connect.component */ 39147);
                /* harmony import */
                var src_app_components_swap_swap_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../swap/swap.component */ 41838);
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/core */ 61699);
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/common/http */ 54860);
                /* harmony import */
                var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @ngx-translate/core */ 21916);
                /* harmony import */
                var src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! src/app/services/popup.service */ 68394);
                /* harmony import */
                var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ngx-bootstrap/modal */ 27269);
                /* harmony import */
                var src_app_services_wallet_connect_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! src/app/services/wallet-connect.service */ 14052);
                /* harmony import */
                var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! src/app/services/event.service */ 91457);
                /* harmony import */
                var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @angular/common */ 26575);
                /* harmony import */
                var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ngx-bootstrap/dropdown */ 16380);
                /* harmony import */
                var angular_svg_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! angular-svg-icon */ 38848);
















                function BuyWidgetComponent_div_21_button_1_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 29);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BuyWidgetComponent_div_21_button_1_Template_button_click_0_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
                            const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
                            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.connectModal());
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 30);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "misc.connect_wallet");
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
                    }
                }

                function BuyWidgetComponent_div_21_button_2_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 29);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BuyWidgetComponent_div_21_button_2_Template_button_click_0_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
                            const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
                            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.connectBestWallet());
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 30);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "misc.connect_bw");
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
                    }
                }

                function BuyWidgetComponent_div_21_ul_10_li_1_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 33);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BuyWidgetComponent_div_21_ul_10_li_1_Template_li_click_0_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r13);
                            const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
                            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r12.changeChain("BNB"));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 34);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 35);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "a", 36);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, "widget.switch_to"), " BNB");
                    }
                }

                function BuyWidgetComponent_div_21_ul_10_li_2_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 33);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BuyWidgetComponent_div_21_ul_10_li_2_Template_li_click_0_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
                            const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
                            return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r14.changeChain("SOL"));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 34);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 37);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "a", 36);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, "widget.switch_to"), " SOL");
                    }
                }

                function BuyWidgetComponent_div_21_ul_10_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ul", 31);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, BuyWidgetComponent_div_21_ul_10_li_1_Template, 6, 3, "li", 32);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, BuyWidgetComponent_div_21_ul_10_li_2_Template, 6, 3, "li", 32);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.modeName != "BNB");
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.modeName != "SOL");
                    }
                }
                const _c0 = function() {
                    return {
                        "width.px": "12",
                        "height.px": 12
                    };
                };

                function BuyWidgetComponent_div_21_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, BuyWidgetComponent_div_21_button_1_Template, 3, 0, "button", 22);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, BuyWidgetComponent_div_21_button_2_Template, 3, 0, "button", 22);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 23)(4, "div", 24);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "img", 25);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "a", 26);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "svg-icon", 27);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, BuyWidgetComponent_div_21_ul_10_Template, 3, 2, "ul", 28);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
                    }
                    if (rf & 2) {
                        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.showBW);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.showBW);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dropup", true);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("src", "/assets/images/svg-icons/", ctx_r1.modeName, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 7, "widget.switch_to"), " ", ctx_r1.modeName, "");
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](9, _c0));
                    }
                }

                function BuyWidgetComponent_a_24_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 38);
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "widget.not_enough_eth ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                    }
                }
                const _c1 = function(a0) {
                    return {
                        "arabic": a0
                    };
                };
                const _c2 = function(a0) {
                    return {
                        "shimmer": a0
                    };
                };
                const _c3 = function(a0) {
                    return {
                        "cover": a0
                    };
                };
                const _c4 = function(a0) {
                    return {
                        "selected": a0
                    };
                };
                class BuyWidgetComponent {
                    http;
                    translate;
                    popupService;
                    modalService;
                    walletConnectService;
                    eventService;
                    renderer;
                    swapComp;
                    subscriptions = [];
                    lang = localStorage.getItem('currentlang');
                    isMobile = window.matchMedia && window.matchMedia('(max-device-width: 1024px)').matches || screen.width <= 1024;
                    modalRef;
                    emailId = '';
                    tokenSold = 0;
                    totalTokens = 0;
                    hashKey = '';
                    windowSize = 0;
                    usdRaised = 0;
                    currentStep = 0;
                    selectedLanguage;
                    userStaked = 0;
                    currentLanguage;
                    connectInterval;
                    usdtBal = 0;
                    ethBal = 0;
                    userClaimable = 0;
                    userEthClaimable = 0;
                    userBscClaimable = 0;
                    refreshId;
                    refreshRate = 1000;
                    dataLoaded = false;
                    oversale = false;
                    salePrice = 0.035;
                    liveCounter;
                    isLive = true;
                    claimMode = false;
                    swapMode = 'native';
                    isNative = true;
                    isWert = false;
                    SwapStatus = src_app_shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_2__.SwapStatus;
                    timeInterval;
                    showBW = false;
                    onResize(event) {
                        this.isMobile = window.matchMedia && window.matchMedia('(max-device-width: 1024px)').matches || screen.width <= 1024;
                    }
                    constructor(http, translate, popupService, modalService, walletConnectService, eventService, renderer) {
                        this.http = http;
                        this.translate = translate;
                        this.popupService = popupService;
                        this.modalService = modalService;
                        this.walletConnectService = walletConnectService;
                        this.eventService = eventService;
                        this.renderer = renderer;
                        this.eventService.getLang().subscribe(val => {
                            this.lang = val || 'en';
                        });
                    }
                    ngOnInit() {
                        setTimeout(() => this.getBalanceData(), this.refreshRate);
                    }
                    ngAfterViewInit() {
                        const bwUrl = (0, src_app_shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_2__.getParamWithoutCookie)('bwUrl');
                        if (bwUrl && bwUrl != '') this.showBW = true;
                    }
                    connectBestWallet() {
                        window.scroll({
                            top: 10
                        });
                        this.walletConnectService.connectWallet("bw");
                    }
                    getBalanceData() {
                        const balanceData = this.walletConnectService.balanceData;
                        this.ethBal = balanceData.nativeBal;
                        this.usdtBal = balanceData.usdtBal;
                        this.salePrice = balanceData.bnbUsdt;
                        this.dataLoaded = true;
                        if (this.refreshId) clearTimeout(this.refreshId);
                        this.refreshId = setTimeout(() => this.getBalanceData(), this.refreshRate);
                    }
                    connectModal() {
                        this.modalRef = this.modalService.show(src_app_modals_connect_connect_component__WEBPACK_IMPORTED_MODULE_3__.ConnectComponent, {
                            class: 'modal-min modal-dialog-centered',
                            backdrop: 'static'
                        });
                    }
                    convertNum(amount) {
                        return (0, src_app_shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_2__.convertNum)(amount);
                    }
                    openSwap(isNative = true, isWert = false) {
                        if (this.swapComp.wertMode) {
                            this.popupService.messagePopup("warning", "", this.translate.instant("popup.are_you_sure"), this.translate.instant("misc.Confirm"), this.translate.instant("misc.Cancel")).then(result => {
                                /* Read more about isConfirmed, isDenied below */
                                if (result.isConfirmed) {
                                    this.swapComp.wertMode = false;
                                    this.swapMode = isNative ? 'native' : isWert ? 'card' : 'usdt';
                                    this.isNative = isNative;
                                    this.isWert = isWert;
                                }
                            });
                        } else {
                            this.swapMode = isNative ? 'native' : isWert ? 'card' : 'usdt';
                            this.isNative = isNative;
                            this.isWert = isWert;
                        }
                        setTimeout(() => this.swapComp.max(), 1000);
                    }
                    changeChain(mode) {
                        if (mode == this.modeName) return;
                        if (mode == 'SOL') {
                            window.location.host = "solana." + window.location.host;
                            return;
                        }
                        let chain = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.bsc;
                        if (this.walletAddress) {
                            this.walletConnectService.switchNetwork(chain.chainIdInt);
                        } else {
                            this.walletConnectService.chainId = chain.chainIdInt;
                        }
                    }
                    get walletAddress() {
                        return this.walletConnectService.walletAddress;
                    }
                    get tokenName() {
                        return src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.tokenName;
                    }
                    ngOnDestroy() {
                        for (const subscription of this.subscriptions) {
                            subscription.unsubscribe();
                        }
                    }
                    get status() {
                        return this.walletConnectService.swapStatus;
                    }
                    get modeName() {
                        return this.walletConnectService.getChainData().purchaseToken;
                    }
                    copy() {
                        var _this = this;
                        return (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*() {
                            yield _this.popupService.messsageAlert('success', _this.translate.instant("misc.successCopy"));
                        })();
                    }
                    // get referUrl() {
                    //   return this.walletConnectService.referUrl;
                    // }
                    wertWidget(popup) {
                        this.modalRef = this.modalService.show(popup, {
                            class: 'modal-dialog-centered',
                            backdrop: 'static'
                        });
                    }
                    yourPurchasedInfo() {
                        this.popupService.messagePopup("info", this.translate.instant("popup.your_purchased_popup_info"));
                    }
                    changeToChain() {
                        this.popupService.messagePopup("info", this.translate.instant("popup.change_chain_info"));
                    }
                    navigateToSection(section) {
                        this.hashKey = section;
                        if (section) {
                            window.location.hash = section;
                            // window.location.pathname = '/' + this.currentLanguage;
                        }
                    }

                    static ɵfac = function BuyWidgetComponent_Factory(t) {
                        return new(t || BuyWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_5__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_wallet_connect_service__WEBPACK_IMPORTED_MODULE_6__.WalletConnectService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_7__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2));
                    };
                    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
                        type: BuyWidgetComponent,
                        selectors: [
                            ["app-buy-widget"]
                        ],
                        viewQuery: function BuyWidgetComponent_Query(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](src_app_components_swap_swap_component__WEBPACK_IMPORTED_MODULE_4__.SwapComponent, 5);
                            }
                            if (rf & 2) {
                                let _t;
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.swapComp = _t.first);
                            }
                        },
                        hostBindings: function BuyWidgetComponent_HostBindings(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resize", function BuyWidgetComponent_resize_HostBindingHandler($event) {
                                    return ctx.onResize($event);
                                }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveWindow"]);
                            }
                        },
                        decls: 29,
                        vars: 26,
                        consts: [
                            ["id", "home", 1, "banner", 3, "ngClass"],
                            [1, "rightSec"],
                            [1, "walletBox", "mt-lg-4"],
                            [1, "px-2", "px-lg-3", "w-100", "d-flex", "flex-column", "align-items-center", "justify-content-start", "text-center"],
                            [1, "font-34", "text-capitalize", "mb-2", "shadow-text"],
                            [1, "text-center", "fs-3", "mb-2", 3, "ngClass"],
                            [1, "px-2", "px-lg-3", "pb-3", "mt-3", "swapArea", 3, "ngClass"],
                            [1, "tab-container", "gap-2"],
                            [1, "btn", "text-uppercase", "d-flex", "align-items-center", "justify-content-center", "w-100", 3, "ngClass", "click"],
                            ["height", "26", "alt", "", 3, "src"],
                            [1, "ps-2"],
                            ["src", "/assets/images/svg-icons/usdt.svg", "height", "26", "alt", ""],
                            [3, "isNative", "isWert"],
                            ["swap", ""],
                            ["class", "d-flex align-items-center justify-content-center gap-2 mt-4", 4, "ngIf"],
                            [1, "mt-3"],
                            [1, "font-20", "text-center", "mb-1"],
                            ["class", "text-decoration-underline cursor-pointer text-secondary", "href", "https://widget.wert.io/default/widget/?commodity=ETH%3AEthereum", "target", "_blank", "translate", "", 4, "ngIf"],
                            ["translate", "", 1, "font-22", "text-center", "mb-0", "powered"],
                            ["href", "https://web3paymentsolutions.io/", "target", "_blank"],
                            ["src", "/assets/images/svg-icons/W3P_Black.svg", "alt", "", 1, "ms-1", "poweredByIcon", "text-tertiary", 2, "vertical-align", "middle"],
                            [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "mt-4"],
                            ["class", "btn btn-primary w-100 text-uppercase", 3, "click", 4, "ngIf"],
                            ["dropdown", "", "dropdownToggle", "", 1, "btn", "btn-secondary", "w-100", "buyWith", "btn-group", "position-relative", 3, "dropup"],
                            ["type", "button", 1, "dropdown-toggle", "d-flex", "align-items-center", "justify-content-between", "w-100"],
                            ["height", "22", "alt", "", 3, "src"],
                            [1, "text-decoration-none", "selectedMenu", "mx-2"],
                            ["src", "./assets/images/svg-icons/angle-down.svg", 1, "dropdown", 3, "svgStyle"],
                            ["class", "py-2 dropdown-menu dropdown-menu-right fixPos  px-3 ", "role", "menu", 4, "dropdownMenu"],
                            [1, "btn", "btn-primary", "w-100", "text-uppercase", 3, "click"],
                            ["translate", ""],
                            ["role", "menu", 1, "py-2", "dropdown-menu", "dropdown-menu-right", "fixPos", "px-3"],
                            ["class", "cursor-pointer", 3, "click", 4, "ngIf"],
                            [1, "cursor-pointer", 3, "click"],
                            ["type", "button", 1, "dropdown-toggle", "d-flex", "align-items-center", "w-100"],
                            ["src", "/assets/images/svg-icons/BNB.svg", "height", "22", "alt", ""],
                            [1, "text-decoration-none", "selectedMenu", "me-2"],
                            ["src", "/assets/images/svg-icons/SOL.svg", "height", "22", "alt", ""],
                            ["href", "https://widget.wert.io/default/widget/?commodity=ETH%3AEthereum", "target", "_blank", "translate", "", 1, "text-decoration-underline", "cursor-pointer", "text-secondary"]
                        ],
                        template: function BuyWidgetComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 5);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "button", 8);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BuyWidgetComponent_Template_button_click_11_listener() {
                                    return ctx.openSwap(true);
                                });
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "img", 9);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "span", 10);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "button", 8);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function BuyWidgetComponent_Template_button_click_15_listener() {
                                    return ctx.openSwap(false);
                                });
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "img", 11);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "span", 10);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "USDT");
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "app-swap", 12, 13);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, BuyWidgetComponent_div_21_Template, 11, 10, "div", 14);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 15)(23, "p", 16);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, BuyWidgetComponent_a_24_Template, 2, 0, "a", 17);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "p", 18);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "widget.powered_by ");
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "a", 19);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "img", 20);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
                            }
                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](16, _c1, ctx.lang === "ar"));
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 14, "widget.stage_title_otc"));
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](18, _c2, !ctx.salePrice || ctx.salePrice <= 0));
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("1 ", ctx.tokenName, " = $", ctx.salePrice, "");
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](20, _c3, ctx.status === ctx.SwapStatus.in_progess || ctx.status === ctx.SwapStatus.confirm_pending || ctx.status === ctx.SwapStatus.approval_pending));
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](22, _c4, ctx.swapMode === "native"));
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("src", "/assets/images/svg-icons/", ctx.modeName, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.modeName);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](24, _c4, ctx.swapMode === "usdt"));
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("isNative", ctx.isNative)("isWert", ctx.isWert);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.walletAddress);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
                                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.modeName == "ETH" && ctx.walletAddress);
                            }
                        },
                        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_13__.BsDropdownDirective, angular_svg_icon__WEBPACK_IMPORTED_MODULE_14__.SvgIconComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateDirective, src_app_components_swap_swap_component__WEBPACK_IMPORTED_MODULE_4__.SwapComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe],
                        styles: [".banner[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 40px 0;\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%] {\n  position: relative;\n}\n@media screen and (max-width: 576px) {\n  .banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  z-index: 1;\n  margin-left: auto;\n  position: relative;\n  background: #ffffff;\n  padding: 14px 7px;\n  border-radius: 0;\n  border: 25px solid #292929;\n}\n@media screen and (max-width: 576px) {\n  .banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%] {\n    border: 6px solid #292929;\n  }\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] {\n  background: #292929;\n  padding: 5px 15px;\n  border-radius: 4px;\n  width: 90%;\n  margin: 0 auto;\n}\n@media screen and (max-width: 375px) {\n  .banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   .time-card[_ngcontent-%COMP%] {\n  min-width: 60px;\n  padding: 0 12px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n}\n@media screen and (max-width: 375px) {\n  .banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   .time-card[_ngcontent-%COMP%] {\n    min-width: 55px;\n  }\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   .time-card[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 400;\n  line-height: 1;\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   .time-card[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 5px;\n}\n@media screen and (max-width: 375px) {\n  .banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   .time-card[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]   .btn-outline-tertiary[_ngcontent-%COMP%] {\n  min-height: 45px;\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  width: 90%;\n  border-radius: 0px;\n  height: 28px;\n  background: #292929;\n  border: 1px solid #ffffff;\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n}\n@media screen and (max-width: 576px) {\n  .banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  text-align: center;\n  line-height: 24px;\n  z-index: 1;\n  color: #ffffff;\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  background: #db4437;\n  color: #ffffff;\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]   .swapArea[_ngcontent-%COMP%] {\n  position: relative;\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]   .swapArea.cover[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0);\n  z-index: 1;\n  cursor: busy;\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]   .poweredByIcon[_ngcontent-%COMP%] {\n  height: 20px;\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]   .whitelist[_ngcontent-%COMP%] {\n  margin: 15px 0 0 0;\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]   .whitelist[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto 15px auto;\n  max-width: 105px;\n}\n@media screen and (max-width: 576px) {\n  .banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .walletBox[_ngcontent-%COMP%]::after {\n    left: unset;\n    right: -17px;\n    top: -22px;\n    width: 37px;\n    height: 44px;\n  }\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .hand-top[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -60px;\n  top: -70px;\n  width: 112px;\n  transform: rotate(15deg);\n  z-index: 1;\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   .hand-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -27px;\n  bottom: -26px;\n  width: 82px;\n  transform: rotate(0deg);\n  z-index: 1;\n}\n.banner[_ngcontent-%COMP%]   .rightSec[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  max-width: 220px;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: 12px;\n  opacity: 0;\n}\n.dropdown-toggle[_ngcontent-%COMP%]   .flag-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  overflow: hidden;\n  margin-right: 3px;\n  min-width: 20px;\n  width: 20px;\n  height: 20px;\n  object-fit: cover;\n}\n.dropdown-toggle[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: auto;\n  padding: 0;\n  border: 2px solid rgba(128, 128, 128, 0.1098039216);\n}\n.dropdown-menu[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  background-color: inherit !important;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #b9c3d6 !important;\n}\n@media screen and (max-width: 576px) {\n  .dropdown-menu[_ngcontent-%COMP%] {\n    max-height: 210px;\n  }\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid #ffffff;\n  overflow: hidden;\n  margin-right: 10px;\n  min-width: 20px;\n  height: 20px;\n  width: 20px;\n  object-fit: cover;\n}\n.dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.dropup[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.wp-btns[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  max-width: 260px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9idXktd2lkZ2V0L2J1eS13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvX3Jlc3BvbnNpdmUuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFGRjtBQUlFO0VBQ0Usa0JBQUE7QUFGSjtBQ2lCRTtFRGhCQTtJQU1JLGdCQUFBO0VBSEo7QUFDRjtBQUtJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkVYMEI7RUZZMUIsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBSE47QUNDRTtFRFBFO0lBWUkseUJBQUE7RUFGTjtBQUNGO0FBSU07RUFDRSxtQkUvQndCO0VGZ0N4QixpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFGUjtBQ2RFO0VEV0k7SUFRSSxXQUFBO0VBRFI7QUFDRjtBQUdRO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQURWO0FDNUJFO0VEc0JNO0lBVUksZUFBQTtFQUFWO0FBQ0Y7QUFFVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFBWjtBQUdVO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBRFo7QUMxQ0U7RUR5Q1E7SUFLSSxlQUFBO0VBQVo7QUFDRjtBQUtNO0VBQ0UsZ0JBQUE7QUFIUjtBQU1NO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CRS9Fd0I7RUZnRnhCLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQ3pERTtFRHFESTtJQVdJLFdBQUE7RUFIUjtBQUNGO0FBS1E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0V2RnNCO0FGb0ZoQztBQU1RO0VBQ0UsbUJFaEdzQjtFRmlHdEIsY0U1RnNCO0FGd0ZoQztBQVFNO0VBQ0Usa0JBQUE7QUFOUjtBQVFRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFOVjtBQVVNO0VBQ0UsWUFBQTtBQVJSO0FBV007RUFDRSxrQkFBQTtBQVRSO0FBV1E7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQVRWO0FDckdFO0VEbUhNO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFYUjtBQUNGO0FBZUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQWJOO0FBZ0JJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFFQSx1QkFBQTtFQUNBLFVBQUE7QUFmTjtBQWtCSTtFQUVFLFlBQUE7RUFDQSxnQkFBQTtBQWpCTjs7QUF1QkE7RUFDRSxXQUFBO0FBcEJGO0FBc0JFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQXBCSjtBQXVCRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBckJKO0FBd0JFO0VBQ0UsZUFBQTtBQXRCSjs7QUEwQkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsbURBQUE7QUF2QkY7QUEwQkU7RUFDRSxvQ0FBQTtBQXhCSjtBQTJCRTtFQUNFLFlBQUE7QUF6Qko7QUE0Qk07RUFDRSx5QkFBQTtBQTFCUjtBQ3ZLRTtFRGlMRjtJQXNCSSxpQkFBQTtFQTVCRjtBQUNGO0FBOEJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBNUJKO0FBOEJJO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQTVCTjtBQStCSTtFQUNFLGNFdE8wQjtBRnlNaEM7O0FBbUNFO0VBQ0UsVUFBQTtBQWhDSjs7QUFxQ0U7RUFDRSxnQkFBQTtBQWxDSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL3Jlc3BvbnNpdmVcIjtcblxuLmJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNDBweCAwO1xuXG4gIC5yaWdodFNlYyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzdGFydDtcblxuICAgIEBpbmNsdWRlIHNtLWRvd24ge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAud2FsbGV0Qm94IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiA1MjBweDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDE0cHggN3B4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGJvcmRlcjogMjVweCBzb2xpZCAkcHJpbWFyeTtcblxuICAgICAgQGluY2x1ZGUgc20tZG93biB7XG4gICAgICAgIGJvcmRlcjogNnB4IHNvbGlkICRwcmltYXJ5O1xuICAgICAgfVxuXG4gICAgICAuY291bnRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICAgICBAaW5jbHVkZSB4cy1kb3duIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aW1lLWNhcmQge1xuICAgICAgICAgIG1pbi13aWR0aDogNjBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDEycHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgQGluY2x1ZGUgeHMtZG93biB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDU1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW5kaWNhdG9yIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgICAgICAgICAgQGluY2x1ZGUgeHMtZG93biB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJ0bi1vdXRsaW5lLXRlcnRpYXJ5IHtcbiAgICAgICAgbWluLWhlaWdodDogNDVweDtcbiAgICAgIH1cblxuICAgICAgLnByb2dyZXNzIHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgQGluY2x1ZGUgc20tZG93biB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdHVzIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJGRhbmdlcjtcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zd2FwQXJlYSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmLmNvdmVyOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJHdoaXRlLCAwKTtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIGN1cnNvcjogYnVzeTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucG93ZXJlZEJ5SWNvbiB7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIH1cblxuICAgICAgLndoaXRlbGlzdCB7XG4gICAgICAgIG1hcmdpbjogMTVweCAwIDAgMDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDE1cHggYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwNXB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBpbmNsdWRlIHNtLWRvd24ge1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgICAgcmlnaHQ6IC0xN3B4O1xuICAgICAgICAgIHRvcDogLTIycHg7XG4gICAgICAgICAgd2lkdGg6IDM3cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhhbmQtdG9wIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAtNjBweDtcbiAgICAgIHRvcDogLTcwcHg7XG4gICAgICB3aWR0aDogMTEycHg7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7XG4gICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC5oYW5kLWJvdHRvbSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogLTI3cHg7XG4gICAgICBib3R0b206IC0yNnB4O1xuICAgICAgd2lkdGg6IDgycHg7XG5cbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkc2Vjb25kYXJ5O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWF4LXdpZHRoOiAyMjBweDtcbiAgICB9XG4gIH1cblxufVxuXG4uZHJvcGRvd24tdG9nZ2xlIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJjo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTJweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgLmZsYWctaWNvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgbWluLXdpZHRoOiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gIC5kcm9wZG93biB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MDgwODAxYztcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrICFpbXBvcnRhbnQ7XG5cbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBsaSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICR0ZXJ0aWFyeSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIHNtLWRvd24ge1xuICAgIG1heC1oZWlnaHQ6IDIxMHB4O1xuICB9XG5cbiAgbGkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkd2hpdGU7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgbWluLXdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG5cbiAgICBzcGFuIHtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbi5kcm9wdXAge1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi53cC1idG5zIHtcbiAgYSB7XG4gICAgbWF4LXdpZHRoOiAyNjBweDtcbiAgfVxufVxuIiwiQG1peGluIHhzLXVwIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc2cHgpIHsgQGNvbnRlbnQ7IH1cbn1cbkBtaXhpbiBzbS11cCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7IEBjb250ZW50OyB9XG59XG5AbWl4aW4gbWQtdXAge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgeyBAY29udGVudDsgfVxufVxuQG1peGluIGxnLXVwIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHsgQGNvbnRlbnQ7IH1cbn1cbkBtaXhpbiB4bC11cCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgeyBAY29udGVudDsgfVxufVxuQG1peGluIHh4bC11cCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0OTlweCkgeyBAY29udGVudDsgfVxufVxuXG5AbWl4aW4geHMtZG93biB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7IEBjb250ZW50OyB9XG59XG5AbWl4aW4gc20tZG93biB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7IEBjb250ZW50OyB9XG59XG5AbWl4aW4gbWQtZG93biB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7IEBjb250ZW50OyB9XG59XG5AbWl4aW4gbGctZG93biB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgeyBAY29udGVudDsgfVxufVxuQG1peGluIHhsLWRvd24ge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHsgQGNvbnRlbnQ7IH1cbn1cbkBtaXhpbiB4eGwtZG93biB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0OTlweCkgeyBAY29udGVudDsgfVxufVxuXG5AbWl4aW4gcmVzcG9uc2l2ZSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkgeyBAY29udGVudDsgfVxufVxuIiwiLy8gY29sb3JzXG4kcHJpbWFyeTogICAgICAgICAgICAgICAgICAgICAgICMyOTI5MjkgIWRlZmF1bHQ7XG4kc2Vjb25kYXJ5OiAgICAgICAgICAgICAgICAgICAgICMyZTM5NGQgIWRlZmF1bHQ7XG4kdGVydGlhcnk6ICAgICAgICAgICAgICAgICAgICAgICNiOWMzZDYgIWRlZmF1bHQ7XG5cblxuJGRhbmdlcjogICAgICAgICAgICAgICAgICAgICAgICAjZGI0NDM3ICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICAgICAgICAgICAgICAgICAjZTI4NTEzICFkZWZhdWx0O1xuJHN1Y2Nlc3M6ICAgICAgICAgICAgICAgICAgICAgICAjMDhiNjRkICFkZWZhdWx0O1xuXG4kYmxhY2s6ICAgICAgICAgICAgICAgICAgICAgICAgICMwMDAwMDAgIWRlZmF1bHQ7XG4kd2hpdGU6ICAgICAgICAgICAgICAgICAgICAgICAgICNmZmZmZmYgIWRlZmF1bHQ7XG4kbGlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICAgICNGRUZFRkUgIWRlZmF1bHQ7XG4kZ3JleTogICAgICAgICAgICAgICAgICAgICAgICAgICM4ODg4ODggIWRlZmF1bHQ7XG4kbGlnaHQtZ3JleTogICAgICAgICAgICAgICAgICAgICM5OTk5OTkgIWRlZmF1bHQ7IFxuJGRhcmstZ3JlZW46ICAgICAgICAgICAgICAgICAgICAjMGI1ZTQ2ICFkZWZhdWx0OyBcblxuXG5cblxuXG4vLyB0aGVtZSBjb2xvcnNyZ2JhKDAsIDAsIDAsIDAuNjApXG4kdGhlbWUtY29sb3JzOiAoXG4gICAgXCJwcmltYXJ5XCI6ICAgICAgJHByaW1hcnksXG4gICAgXCJzZWNvbmRhcnlcIjogICAgJHNlY29uZGFyeSwgICAgICAgXG4gICAgXCJ0ZXJ0aWFyeVwiOiAgICAgJHRlcnRpYXJ5LCAgICAgICBcbiAgIFxuXG4gICAgXCJkYW5nZXJcIjogICAgICAgJGRhbmdlcixcbiAgICBcIndhcm5pbmdcIjogICAgICAkd2FybmluZyxcbiAgICBcInN1Y2Nlc3NcIjogICAgICAkc3VjY2VzcyxcblxuICAgIFwiYmxhY2tcIjogICAgICAgICRibGFjaywgIFxuICAgIFwid2hpdGVcIjogICAgICAgICR3aGl0ZSxcbiAgICBcImxpZ2h0XCI6ICAgICAgICAkbGlnaHQsXG4gICAgXCJncmV5XCI6ICAgICAgICAgJGdyZXksXG4gICAgXCJsaWdodC1ncmV5XCI6ICAgJGxpZ2h0LWdyZXksXG4gICAgXCJkYXJrLWdyZWVuXCI6ICAgJGRhcmstZ3JlZW4sXG5cbikgIWRlZmF1bHQ7XG5cblxuLy8gZm9udCBzaXplXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgIDIuNXJlbSAhZGVmYXVsdDtcbiRoMi1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgMS43NXJlbSAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgMS4xMjVyZW0gIWRlZmF1bHQ7XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAgIDAuODc1cmVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS14czogICAgICAgICAgICAgICAgICAwLjc1cmVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZXM6IChcbiAgICAxOiAkaDEtZm9udC1zaXplLFxuICAgIDI6ICRoMi1mb250LXNpemUsXG4gICAgMzogJGgzLWZvbnQtc2l6ZSxcbiAgICA0OiAkaDQtZm9udC1zaXplLFxuICAgIDU6ICRoNS1mb250LXNpemUsXG4gICAgNjogJGg2LWZvbnQtc2l6ZSxcbiAgICA3OiAkZm9udC1zaXplLXNtLFxuICAgIDg6ICRmb250LXNpemUteHMsXG4pICFkZWZhdWx0O1xuXG4vLyBmb250IHdlaWdodFxuJGZvbnQtd2VpZ2h0LWxpZ2h0ZXI6IDIwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1saWdodDogMzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1tZWRpdW06IDUwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1zZW1pYm9sZDogNjAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGQ6IDcwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkZXI6IDgwMCAhZGVmYXVsdDtcblxuLy8gc3BhY2luZ1xuJHNwYWNlcjogICAgICAgICAgICAgICAgICAgICAgICAxcmVtO1xuJGhlYWRlckh0OiAgICAgICAgICAgICAgICAgICAgICAxMjVweDtcblxuLy8gY29udGFpbmVyIHdpZHRoXG4kY29udGFpbmVyLW1heC13aWR0aDogICAgICAgICAgIDE0NDBweDtcblxuLy8gYm9yZGVyIHJhZGl1c1xuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAkc3BhY2VyICogMC4zICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgICAkc3BhY2VyICogMC40ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgICAkc3BhY2VyICogMC41IWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy14bDogICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAgICAgICAgICAgICRzcGFjZXIgKiA1MCAhZGVmYXVsdDtcblxuLy8gRm9udHNcbiRmb250LWZhbWlseS1wcmltYXJ5OiAgICAgICAgICAgJ0Vhc3RTZWFEb2tkbycsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5OiAgICAgICAgICAgJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuXG5cblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgICAgIDAuODc1cmVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgICAxLjEyNXJlbSAhZGVmYXVsdDtcbiRmb250LXNpemUteGw6ICAgICAgICAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LWJhc2U6ICAgICAgICAgICAgICAxLjQ7XG4kZm9udC13ZWlnaHQtYmFzZTogICAgICAgICAgICAgICRmb250LXdlaWdodC1saWdodCAhZGVmYXVsdDtcblxuLy8gdHJhbnNpdGlvblxuJHRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgICBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG5cbi8vIGJyZWFrcG9pbnRzXG4kZ3JpZC1icmVha3BvaW50czogKFxuICB4eHM6ICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgbWluaTogICAgICAgICAgICAgICAgICAgICAgIDMwMHB4LFxuICBtaW46ICAgICAgICAgICAgICAgICAgICAgICAgMzYwcHgsXG4gIHhzOiAgICAgICAgICAgICAgICAgICAgICAgICA0MTBweCxcbiAgc206ICAgICAgICAgICAgICAgICAgICAgICAgIDU3NnB4LFxuICBtZDogICAgICAgICAgICAgICAgICAgICAgICAgNzY4cHgsXG4gIGxnOiAgICAgICAgICAgICAgICAgICAgICAgICAxMDI1cHgsXG4gIHhsOiAgICAgICAgICAgICAgICAgICAgICAgICAxMjAwcHgsXG4gIHh4bDogICAgICAgICAgICAgICAgICAgICAgICAxNDQwcHgsXG4pICFkZWZhdWx0O1xuXG4vLyBGb3Jtc1xuJGlucHV0LXBhZGRpbmcteTogICAgICAgICAgICAgICAkc3BhY2VyICogMC44NzUgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14OiAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1mYW1pbHk6ICAgICAgICAgICAgICRmb250LWZhbWlseS1wcmltYXJ5ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAkaDUtZm9udC1zaXplICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAxLjIgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgICRncmV5ICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJnOiAgICAgICAgICAgICAgICAkZ3JleSAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgJGdyZXkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kaW5wdXQtY29sb3I6ICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1jb2xvcjogICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci13aWR0aDogICAgICAgICAgICAycHggIWRlZmF1bHQ7XG4kaW5wdXQtYm94LXNoYWRvdzogICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICAgICAgICR0ZXJ0aWFyeSAhZGVmYXVsdDtcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWJvcmRlcjogICAgICAgICAgIDJweCAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXI6ICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgJGlucHV0LXBhZGRpbmcteSAqIDIpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1oYWxmOiAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjVlbSwgJGlucHV0LXBhZGRpbmcteSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXI6ICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuMjVlbSwgJGlucHV0LXBhZGRpbmcteSAqIC41KSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXkgKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cblxuLy8gYnRuXG4kYnRuLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICRzcGFjZXIgKiAwLjc1ICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAkc3BhY2VyICogMSAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgNXB4ICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAycHggIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAgIDAuNCAhZGVmYXVsdDtcblxuLy8gYm94IHNoYWFkb3dcbiRib3gtc2hhZG93LXhzOiAwcHggMnB4IDVweCByZ2JhKDcyLCAxMDEsIDEyOSwgMC4xKSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LXNtOiAwcHggNHB4IDEwcHggcmdiYSg3MSwgMTYzLCAyNDMsIDAuMTUpLCAwcHggMnB4IDExcHggcmdiYSgxNjMsIDE4MywgMjM2LCAwLjIxKSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LW1kOiAwcHggNHB4IDQ2cHggcmdiYSg3MSwgMTYzLCAyNDMsIDAuMTUpLCAwcHggMnB4IDExcHggcmdiYSgxNjMsIDE4MywgMjM2LCAwLjIxKSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAwcHggNHB4IDkxcHggcmdiYSgyNTUsIDEzOSwgOTEsIDAuMTUpLCAwcHggMnB4IDUwcHggcmdiYSgxMDcsIDMxLCAwLCAwLjA2KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LXhsOiAwcHggOHB4IDEwMHB4IHJnYmEoNzIsIDEwMSwgMTI5LCAwLjE1KSwgMHB4IDRweCA0NXB4IHJnYmEoNzIsIDEwMSwgMTI5LCAwLjA4KSAhZGVmYXVsdDtcblxuXG4vLyBvYmplY3Qgc3R5bGVcbiRtb2RhbC1iYWNrZHJvcC1iZzogJHNlY29uZGFyeTtcbiRvYmplY3Qtc2l6ZS1zdGFydDogNTtcbiRvYmplY3Qtc2l6ZS1lbmQ6IDEwMDA7XG4kb2JqZWN0LXNpemVzOiBcIlwiO1xuQGZvciAkaSBmcm9tICRvYmplY3Qtc2l6ZS1zdGFydCArIDUgdGhyb3VnaCAkb2JqZWN0LXNpemUtZW5kIHtcbiAgJG9iamVjdC1zaXplczogYXBwZW5kKCRvYmplY3Qtc2l6ZXMsICRpLCBjb21tYSk7XG4gICRvYmplY3Qtc2l6ZXM6IHNldC1udGgoJG9iamVjdC1zaXplcywgMSwgJG9iamVjdC1zaXplLXN0YXJ0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
                    });
                }


                /***/
            }),

        /***/
        6471:
            /*!*******************************************************!*\
              !*** ./src/app/components/header/header.component.ts ***!
              \*******************************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    HeaderComponent: () => ( /* binding */ HeaderComponent)
                    /* harmony export */
                });
                /* harmony import */
                var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../app.component */ 66401);
                /* harmony import */
                var _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../shared/constants/app-enums */ 74276);
                /* harmony import */
                var src_app_modals_connect_connect_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/modals/connect/connect.component */ 39147);
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/core */ 61699);
                /* harmony import */
                var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/common */ 26575);
                /* harmony import */
                var _services_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../services/event.service */ 91457);
                /* harmony import */
                var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @ngx-translate/core */ 21916);
                /* harmony import */
                var src_app_services_wallet_connect_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! src/app/services/wallet-connect.service */ 14052);
                /* harmony import */
                var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ngx-bootstrap/modal */ 27269);
                /* harmony import */
                var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ngx-bootstrap/dropdown */ 16380);
                /* harmony import */
                var angular_svg_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! angular-svg-icon */ 38848);
                /* harmony import */
                var _shared_pipes_trim_address_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../../shared/pipes/trim-address.pipe */ 97361);












                const _c0 = ["navigation"];

                function HeaderComponent_div_0_div_12_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_div_0_div_12_Template_div_click_0_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
                            const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
                            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.showWidget("home"));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " widget.buy_now");
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                    }
                }

                function HeaderComponent_div_0_div_13_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_div_0_div_13_Template_div_click_0_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
                            const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
                            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.disconnect());
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "trimAddress");
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r4.walletAddress));
                    }
                }

                function HeaderComponent_div_0_ul_20_li_1_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 30);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_div_0_ul_20_li_1_Template_li_click_0_listener() {
                            const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
                            const lang_r11 = restoredCtx.$implicit;
                            const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
                            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.changeLanguage(lang_r11.value));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 31);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 32);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
                    }
                    if (rf & 2) {
                        const lang_r11 = ctx.$implicit;
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("src", "./assets/images/flags/", lang_r11.flag, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](lang_r11.name);
                    }
                }

                function HeaderComponent_div_0_ul_20_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 28);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HeaderComponent_div_0_ul_20_li_1_Template, 4, 2, "li", 29);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.languagesList);
                    }
                }
                const _c1 = function(a0) {
                    return {
                        "scrolled": a0
                    };
                };
                const _c2 = function() {
                    return {
                        "width.px": "170",
                        "height.px": 33
                    };
                };

                function HeaderComponent_div_0_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5, 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_div_0_Template_div_click_3_listener($event) {
                            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
                            const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
                            ctx_r14.navigateToSection("home");
                            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.addActive($event));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "svg-icon", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 8)(7, "a", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_div_0_Template_a_click_7_listener($event) {
                            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
                            const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
                            ctx_r16.navigateToSection("about");
                            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.addActive($event));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "about");
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_div_0_Template_a_click_9_listener($event) {
                            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
                            const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
                            ctx_r17.navigateToSection("how_to");
                            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.addActive($event));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "how_to");
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, HeaderComponent_div_0_div_12_Template, 2, 0, "div", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, HeaderComponent_div_0_div_13_Template, 3, 3, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 13)(15, "div", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "img", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 16);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "svg-icon", 17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, HeaderComponent_div_0_ul_20_Template, 2, 1, "ul", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 19)(22, "a", 20);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "img", 21);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "a", 22);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "img", 23);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "a", 24);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "img", 25);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
                    }
                    if (rf & 2) {
                        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c1, ctx_r0.isScrolled));
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c2));
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", "about");
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", "how_to");
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.walletAddress);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.walletAddress);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("src", "./assets/images/flags/", ctx_r0.selectedLanguage == null ? null : ctx_r0.selectedLanguage.flag, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.selectedLanguage == null ? null : ctx_r0.selectedLanguage.value);
                    }
                }

                function HeaderComponent_div_1_div_8_a_7_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 44);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_div_1_div_8_a_7_Template_a_click_0_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
                            const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
                            ctx_r22.disconnect();
                            ctx_r22.showMenu = false;
                            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r22.openMenu = false);
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "trimAddress");
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", "how_to");
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx_r20.walletAddress));
                    }
                }

                function HeaderComponent_div_1_div_8_ul_14_li_1_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 30);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_div_1_div_8_ul_14_li_1_Template_li_click_0_listener() {
                            const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
                            const lang_r25 = restoredCtx.$implicit;
                            const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
                            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r26.changeLanguage(lang_r25.value));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 31);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 32);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
                    }
                    if (rf & 2) {
                        const lang_r25 = ctx.$implicit;
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("src", "./assets/images/flags/", lang_r25.flag, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](lang_r25.name);
                    }
                }

                function HeaderComponent_div_1_div_8_ul_14_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul", 53);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HeaderComponent_div_1_div_8_ul_14_li_1_Template, 4, 2, "li", 29);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r21.languagesList);
                    }
                }
                const _c3 = function(a0) {
                    return {
                        "open": a0
                    };
                };

                function HeaderComponent_div_1_div_8_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "div", 43)(3, "a", 44);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_div_1_div_8_Template_a_click_3_listener($event) {
                            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
                            const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
                            ctx_r28.navigateToSection("about");
                            ctx_r28.addActive($event);
                            ctx_r28.showMenu = false;
                            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r28.openMenu = false);
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "about");
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 44);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_div_1_div_8_Template_a_click_5_listener($event) {
                            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
                            const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
                            ctx_r30.navigateToSection("how_to");
                            ctx_r30.addActive($event);
                            ctx_r30.showMenu = false;
                            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r30.openMenu = false);
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "how_to");
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, HeaderComponent_div_1_div_8_a_7_Template, 3, 4, "a", 45);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 46)(9, "div", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 15);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 47);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "svg-icon", 17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, HeaderComponent_div_1_div_8_ul_14_Template, 2, 1, "ul", 48);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 49)(16, "a", 50);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "img", 21);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "a", 51);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "img", 23);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "a", 52);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "img", 25);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
                    }
                    if (rf & 2) {
                        const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c3, ctx_r19.openMenu));
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", "about");
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("title", "how_to");
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r19.walletAddress);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("src", "./assets/images/flags/", ctx_r19.selectedLanguage == null ? null : ctx_r19.selectedLanguage.flag, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r19.selectedLanguage == null ? null : ctx_r19.selectedLanguage.value);
                    }
                }
                const _c4 = function() {
                    return {
                        "max-width.px": 130,
                        "height.px": 33
                    };
                };
                const _c5 = function() {
                    return {
                        "width.px": 32,
                        "height.px": 32
                    };
                };

                function HeaderComponent_div_1_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "div", 35)(3, "div", 36, 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_div_1_Template_div_click_3_listener($event) {
                            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
                            const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
                            ctx_r31.navigateToSection("home");
                            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r31.addActive($event));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "svg-icon", 37);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 38);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HeaderComponent_div_1_Template_div_click_6_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
                            const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r33.openCloseMenu());
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "svg-icon", 39);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, HeaderComponent_div_1_div_8_Template, 22, 8, "div", 40);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
                    }
                    if (rf & 2) {
                        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c1, ctx_r1.isScrolled));
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c4));
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("src", "./assets/images/svg-icons/", ctx_r1.showMenu ? "burger-close" : "burger-icon", ".svg");
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c5));
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.showMenu);
                    }
                }
                class HeaderComponent {
                    location;
                    eventService;
                    translate;
                    walletConnectService;
                    modalService;
                    navigation;
                    isScrolled = false;
                    showMenu = false;
                    openMenu = false;
                    hashKey = '';
                    windowSize;
                    modalRef;
                    currentLanguage;
                    languagesList = _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.languages;
                    selectedLanguage;
                    isShimmer = true;
                    isMobile = window.matchMedia && window.matchMedia('(max-device-width: 575px)').matches || screen.width <= 575;
                    navigations = [{
                            routeName: 'how',
                            navName: 'nav_how'
                        }
                        // {
                        //   routeName:'platform',
                        //   navName:'platform_head'
                        // },
                    ];

                    constructor(location, eventService, translate, walletConnectService, modalService) {
                        this.location = location;
                        this.eventService = eventService;
                        this.translate = translate;
                        this.walletConnectService = walletConnectService;
                        this.modalService = modalService;
                        this.windowSize = window.screen.width;
                        this.eventService.getLang().subscribe(val => {
                            this.currentLanguage = val || 'en';
                            this.selectedLanguage = this.languagesList.filter(x => x.value === this.currentLanguage)[0];
                        });
                        this.selectedLanguage = this.languagesList.filter(x => x.value === this.currentLanguage)[0];
                        setTimeout(() => this.isShimmer = false, 2000);
                    }
                    ngOnInit() {
                        if (!this.currentLanguage) {
                            this.currentLanguage = _app_component__WEBPACK_IMPORTED_MODULE_0__.selectedLang;
                            this.selectedLanguage = this.languagesList.filter(x => x.value === this.currentLanguage)[0];
                        }
                    }
                    checkScroll() {
                        this.isScrolled = window.pageYOffset >= 50;
                    }
                    onResize(event) {
                        this.windowSize = event.target.innerWidth;
                        this.isMobile = window.matchMedia && window.matchMedia('(max-device-width: 575px)').matches || screen.width <= 575;
                    }
                    ngAfterViewInit() {
                        if (window.location.hash) {
                            setTimeout(() => {
                                this.hashKey = window.location.hash.substring(1, window.location.hash.length);
                                this.navigateToSection(this.hashKey);
                                this.addActive(this.navigation.nativeElement);
                            }, this.isShimmer ? 2500 : 500);
                        }
                    }
                    changeLanguage(requestLang) {
                        this.currentLanguage = requestLang;
                        this.translate.use(this.currentLanguage);
                        this.eventService.setLang(this.currentLanguage);
                        this.selectedLanguage = this.languagesList.filter(x => x.value === this.currentLanguage)[0];
                        this.replaceURL();
                    }
                    replaceURL() {
                        const current_url = this.location.path().split('/');
                        current_url.shift();
                        current_url.splice(0, 1, this.currentLanguage);
                        const new_url = current_url.join('/');
                        window.location.hash = this.hashKey;
                        // window.location.pathname = '/' + new_url;
                        this.location.replaceState("/" + new_url);
                        console.log('current_url =', current_url);
                        console.log('new_url =', new_url, this.hashKey);
                    }
                    navigateToSection(section) {
                        this.hashKey = section;
                        if (section) {
                            window.location.hash = section;
                            window.location.pathname = '/' + this.currentLanguage;
                        }
                    }
                    addActive(event) {
                        const target = event.currentTarget ? event.currentTarget : event;
                        let linkList = target.parentNode.querySelectorAll('a');
                        linkList.forEach(link => {
                            if (link === event.target || link.title === this.hashKey) {
                                link.classList.add('active');
                            } else {
                                link.classList.remove('active');
                            }
                        });
                    }
                    openCloseMenu() {
                        if (this.showMenu) {
                            this.openMenu = !this.openMenu;
                            setTimeout(() => this.showMenu = !this.showMenu, 200);
                        } else {
                            this.showMenu = !this.showMenu;
                            setTimeout(() => this.openMenu = !this.openMenu, 200);
                        }
                    }
                    get walletAddress() {
                        return this.walletConnectService.walletAddress;
                    }
                    showWidget(section) {
                        if (this.isMobile) {
                            this.eventService.showBuyWidget(section);
                            window.scroll({
                                top: 300
                            });
                        } else {
                            this.eventService.showBuyWidget(section);
                        }
                    }
                    connectModal(mode) {
                        this.modalRef = this.modalService.show(src_app_modals_connect_connect_component__WEBPACK_IMPORTED_MODULE_2__.ConnectComponent, {
                            class: 'modal-xs modal-dialog-centered',
                            backdrop: 'static'
                        });
                    }
                    disconnect() {
                        this.walletConnectService.disConnectWallet();
                    }
                    static ɵfac = function HeaderComponent_Factory(t) {
                        return new(t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_3__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_wallet_connect_service__WEBPACK_IMPORTED_MODULE_4__.WalletConnectService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.BsModalService));
                    };
                    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
                        type: HeaderComponent,
                        selectors: [
                            ["app-header"]
                        ],
                        viewQuery: function HeaderComponent_Query(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
                            }
                            if (rf & 2) {
                                let _t;
                                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.navigation = _t.first);
                            }
                        },
                        hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("resize", function HeaderComponent_resize_HostBindingHandler($event) {
                                    return ctx.onResize($event);
                                }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"])("scroll", function HeaderComponent_scroll_HostBindingHandler($event) {
                                    return ctx.checkScroll($event);
                                }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveWindow"]);
                            }
                        },
                        decls: 2,
                        vars: 2,
                        consts: [
                            ["class", "header desktop d-flex justify-content-between align-items-center", 3, "ngClass", 4, "ngIf"],
                            ["class", "header mobile", 3, "ngClass", 4, "ngIf"],
                            [1, "header", "desktop", "d-flex", "justify-content-between", "align-items-center", 3, "ngClass"],
                            [1, "w-100"],
                            [1, "header-wrap", "d-flex", "justify-content-between", "align-items-center", "w-100"],
                            [1, "cursor-pointer", 3, "click"],
                            ["navigation", ""],
                            ["src", "./assets/images/svg-icons/logo.svg", 3, "svgStyle"],
                            [1, "d-flex", "justify-content-center", "align-items-center"],
                            ["href", "javascript:void(0)", "translate", "", 1, "text-dark", "mx-3", "px-3", "text-center", 3, "title", "click"],
                            [1, "d-flex", "align-items-center"],
                            ["class", "btn btn-primary text-captlized", "translate", "", 3, "click", 4, "ngIf"],
                            ["class", "btn btn-primary text-captlized", 3, "click", 4, "ngIf"],
                            ["dropdown", "", 1, "btn-group", "language", "ms-3"],
                            ["dropdownToggle", "", "type", "button", 1, "dropdown-toggle", "amountType", "d-flex", "align-items-center"],
                            ["alt", "", 1, "flag-icon", 3, "src"],
                            [1, "ms-1", "font-18", "text-uppercase", "fw-bold"],
                            ["src", "./assets/images/svg-icons/angle-down.svg", 1, "dropdown"],
                            ["class", "dropdown-menu dropdown-menu-right bg-white", "role", "menu", 4, "dropdownMenu"],
                            [1, "social-icons", "d-flex", "align-items-center"],
                            ["href", "https://twitter.com/Sealana_Token", "target", "_blank", 1, "mx-2"],
                            ["src", "/assets/images/svg-icons/x.png", "alt", ""],
                            ["href", "https://t.me/Sealana_Token", "target", "_blank", 1, "mx-2"],
                            ["src", "/assets/images/svg-icons/telegram.svg", "alt", ""],
                            ["href", "https://www.dextools.io/app/en/bnb/pair-explorer/0x35f5387decce5a234da1a32ca3c9e338a48bcf37?t=1719925147430", "target", "_blank", 1, "mx-2"],
                            ["src", "/assets/images/svg-icons/dextools.svg", "alt", ""],
                            ["translate", "", 1, "btn", "btn-primary", "text-captlized", 3, "click"],
                            [1, "btn", "btn-primary", "text-captlized", 3, "click"],
                            ["role", "menu", 1, "dropdown-menu", "dropdown-menu-right", "bg-white"],
                            ["class", "p-2 cursor-pointer", "role", "menuitem", 3, "click", 4, "ngFor", "ngForOf"],
                            ["role", "menuitem", 1, "p-2", "cursor-pointer", 3, "click"],
                            ["alt", "", 3, "src"],
                            [1, "text-dark", "fw-bold"],
                            [1, "header", "mobile", 3, "ngClass"],
                            [1, "header-wrap", "w-100", "d-flex", "justify-content-be", "align-items-center"],
                            [1, "header-wrap", "w-100", "d-flex", "justify-content-between", "align-items-center"],
                            [1, "cursor-pointer", "flex-grow-1", 3, "click"],
                            ["src", "./assets/images/svg-icons/logo.svg", 1, "mobile-logo", 3, "svgStyle"],
                            [1, "me-2", 3, "click"],
                            [3, "src", "svgStyle"],
                            ["class", "menu-overlay", 4, "ngIf"],
                            [1, "menu-overlay"],
                            [1, "sub-menu", "d-flex", "flex-column", "justify-content-start", "align-items-center", "pull-left", 3, "ngClass"],
                            [1, "d-flex", "flex-column", "justify-content-start", "align-items-center", "h-100"],
                            ["href", "javascript:void(0)", "translate", "", 1, "text-dark", "text-center", 3, "title", "click"],
                            ["href", "javascript:void(0)", "class", "text-dark text-center", "translate", "", 3, "title", "click", 4, "ngIf"],
                            ["dropdown", "", 1, "btn-group", "language", "mx-2", "mt-3"],
                            [1, "ms-1", "font-14", "text-uppercase", "fw-bold"],
                            ["class", "dropdown-menu bg-white", "role", "menu", 4, "dropdownMenu"],
                            [1, "social-icons", "d-flex", "align-items-center", "mt-3"],
                            ["href", "https://twitter.com/Sealana_Token", "target", "_blank", 1, "mx-1", "border-0"],
                            ["href", "https://t.me/Sealana_Token", "target", "_blank", 1, "mx-1", "border-0"],
                            ["href", "https://www.dextools.io/app/en/bnb/pair-explorer/0x35f5387decce5a234da1a32ca3c9e338a48bcf37?t=1719925147430", "target", "_blank", 1, "mx-1", "border-0"],
                            ["role", "menu", 1, "dropdown-menu", "bg-white"]
                        ],
                        template: function HeaderComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, HeaderComponent_div_0_Template, 28, 11, "div", 0);
                                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HeaderComponent_div_1_Template, 9, 9, "div", 1);
                            }
                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.windowSize > 1024);
                                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.windowSize <= 1024);
                            }
                        },
                        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__.BsDropdownDirective, angular_svg_icon__WEBPACK_IMPORTED_MODULE_11__.SvgIconComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateDirective, _shared_pipes_trim_address_pipe__WEBPACK_IMPORTED_MODULE_5__.TrimAddressPipe],
                        styles: [".header[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  padding: 14px 30px;\n  background: #A4CBC8;\n  transition: all 0.3s linear;\n  z-index: 5;\n  color: white;\n}\n@media screen and (max-width: 576px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 14px 20px;\n  }\n}\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  padding: 10px 0;\n  color: black;\n  cursor: pointer;\n  text-decoration: none;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 24px;\n}\n.header[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: purple;\n}\n@media only screen and (min-width: 577px) and (max-width: 1024px) {\n  .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n.header[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  margin: 0;\n  border-radius: 32px;\n  font-size: 16px;\n  text-decoration: none;\n  letter-spacing: 0.02em;\n  text-transform: capitalize;\n  font-weight: 400;\n}\n.header[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.header[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: 12px;\n  opacity: 0;\n}\n.header[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .flag-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  overflow: hidden;\n  margin-right: 3px;\n  min-width: 20px;\n  width: 26px;\n  height: 26px;\n  object-fit: cover;\n}\n.header[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.header[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 250px;\n  overflow-y: auto;\n}\n.header[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  cursor: pointer;\n}\n.header[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid grey;\n  overflow: hidden;\n  margin-right: 10px;\n  min-width: 20px;\n  height: 20px;\n  width: 20px;\n  object-fit: cover;\n}\n.header[_ngcontent-%COMP%]   .menu-overlay[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.8);\n  position: fixed;\n  width: 100%;\n  height: calc(100vh - 60px);\n  -webkit-backdrop-filter: blur(50px);\n          backdrop-filter: blur(50px);\n  top: 60px;\n  left: 0;\n  display: flex;\n  justify-content: flex-end;\n}\n.header[_ngcontent-%COMP%]   .menu-overlay[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%] {\n  width: 60%;\n  min-width: 320px;\n  max-width: 320px;\n  height: 100%;\n  background: linear-gradient(112.62deg, rgba(164, 203, 200, 0.7) -10.65%, #a4cbc8 104.47%);\n  border-image-source: radial-gradient(121.49% 277.08% at 0% 0%, rgba(255, 255, 255, 0.44) 0%, rgba(255, 255, 255, 0.05) 100%);\n  padding: 20px;\n  position: relative;\n  transition: right 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);\n  right: -320px;\n}\n.header[_ngcontent-%COMP%]   .menu-overlay[_ngcontent-%COMP%]   .sub-menu.open[_ngcontent-%COMP%] {\n  right: 0;\n}\n.header[_ngcontent-%COMP%]   .menu-overlay[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 5px 10px;\n  cursor: pointer;\n  color: black;\n  border-bottom: 1px solid white;\n  text-decoration: none;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  font-weight: 400;\n}\n.header[_ngcontent-%COMP%]   .menu-overlay[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .menu-overlay[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: purple;\n}\n.header[_ngcontent-%COMP%]   .menu-overlay[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%] {\n  width: 100% !important;\n  padding: 10px;\n  margin: 0;\n  border: 1px solid white;\n  border-radius: 0;\n  text-decoration: none;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  font-weight: 400;\n}\n.header[_ngcontent-%COMP%]   .menu-overlay[_ngcontent-%COMP%]   .sub-menu[_ngcontent-%COMP%]   .language[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: 12px;\n}\n@media only screen and (max-width: 390px) {\n  .header[_ngcontent-%COMP%]   .mobile-logo[_ngcontent-%COMP%] {\n    width: 120px !important;\n  }\n}\n@media only screen and (min-width: 577px) and (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n\n.social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: auto;\n}\n@media only screen and (max-width: 768px) {\n  .social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL19yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFGRjtBQ2FFO0VEcEJGO0lBWUksa0JBQUE7RUFERjtBQUNGO0FBSUU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRko7QUFJSTtFQUVFLGFBQUE7QUFITjtBQU1JO0VBaEJGO0lBaUJJLGFBQUE7RUFISjtBQUNGO0FBTUU7RUFFRSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQUxKO0FBT0k7RUFDRSxXQUFBO0FBTE47QUFPTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFMUjtBQVFNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFOUjtBQVNNO0VBQ0UsZUFBQTtBQVBSO0FBV0k7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVROO0FBV007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVRSO0FBVVE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGlCQUFBO0FBVFY7QUFlRTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQWJKO0FBZUk7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5RkFBQTtFQUNBLDRIQUFBO0VBR0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMERBQUE7RUFDQSxhQUFBO0FBZk47QUFpQk07RUFDRSxRQUFBO0FBZlI7QUFrQk07RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQWhCUjtBQWtCUTtFQUVFLGlCQUFBO0VBQ0EsYUFBQTtBQWpCVjtBQXFCTTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFuQlI7QUFxQlE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFuQlY7QUEwQkU7RUFDRTtJQUNFLHVCQUFBO0VBeEJKO0FBQ0Y7QUEyQkU7RUEzS0Y7SUE0S0ksYUFBQTtFQXhCRjtBQUNGOztBQTRCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBekJKO0FBMkJJO0VBSkY7SUFLSSxXQUFBO0VBeEJKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9yZXNwb25zaXZlXCI7XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE0cHggMzBweDtcbiAgYmFja2dyb3VuZDogI0E0Q0JDODtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xuICB6LWluZGV4OiA1O1xuICBjb2xvcjogd2hpdGU7XG5cbiAgQGluY2x1ZGUgc20tZG93biB7XG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xuICB9XG5cblxuICBhIHtcbiAgICBtYXJnaW46IDAgMTVweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuXG4gICAgJi5hY3RpdmUsXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogcHVycGxlO1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc3cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICB9XG5cbiAgLmxhbmd1YWdlIHtcbiAgICAvLyB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgIC5kcm9wZG93bi10b2dnbGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTJweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cblxuICAgICAgLmZsYWctaWNvbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93biB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6MjBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBpbWcge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1lbnUtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSh3aGl0ZSwgMC44KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDUwcHgpO1xuICAgIHRvcDogNjBweDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgIC5zdWItbWVudSB7XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICAgIG1heC13aWR0aDogMzIwcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTEyLjYyZGVnLCByZ2JhKCNBNENCQzgsIDAuNykgLTEwLjY1JSwgcmdiYSgjQTRDQkM4LCAxKSAxMDQuNDclKTtcbiAgICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6IHJhZGlhbC1ncmFkaWVudCgxMjEuNDklIDI3Ny4wOCUgYXQgMCUgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkgMTAwJSlcbiAgICAgICAgLyogd2FybmluZzogZ3JhZGllbnQgdXNlcyBhIHJvdGF0aW9uIHRoYXQgaXMgbm90IHN1cHBvcnRlZCBieSBDU1MgYW5kIG1heSBub3QgYmVoYXZlIGFzIGV4cGVjdGVkICovXG4gICAgICA7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdHJhbnNpdGlvbjogcmlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbiAgICAgIHJpZ2h0OiAtMzIwcHg7XG5cbiAgICAgICYub3BlbiB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGNvbG9yOiBwdXJwbGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmxhbmd1YWdlIHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICAgIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkwcHgpIHtcbiAgICAubW9iaWxlLWxvZ28ge1xuICAgICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzdweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuXG4uc29jaWFsLWljb25zIHtcbiAgaW1nIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICB9XG5cbiAgfVxufSIsIkBtaXhpbiB4cy11cCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NnB4KSB7IEBjb250ZW50OyB9XG59XG5AbWl4aW4gc20tdXAge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkgeyBAY29udGVudDsgfVxufVxuQG1peGluIG1kLXVwIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHsgQGNvbnRlbnQ7IH1cbn1cbkBtaXhpbiBsZy11cCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7IEBjb250ZW50OyB9XG59XG5AbWl4aW4geGwtdXAge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHsgQGNvbnRlbnQ7IH1cbn1cbkBtaXhpbiB4eGwtdXAge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDk5cHgpIHsgQGNvbnRlbnQ7IH1cbn1cblxuQG1peGluIHhzLWRvd24ge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkgeyBAY29udGVudDsgfVxufVxuQG1peGluIHNtLWRvd24ge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkgeyBAY29udGVudDsgfVxufVxuQG1peGluIG1kLWRvd24ge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyBAY29udGVudDsgfVxufVxuQG1peGluIGxnLWRvd24ge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHsgQGNvbnRlbnQ7IH1cbn1cbkBtaXhpbiB4bC1kb3duIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7IEBjb250ZW50OyB9XG59XG5AbWl4aW4geHhsLWRvd24ge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDk5cHgpIHsgQGNvbnRlbnQ7IH1cbn1cblxuQG1peGluIHJlc3BvbnNpdmUge1xuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHsgQGNvbnRlbnQ7IH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
                    });
                }


                /***/
            }),

        /***/
        50159:
            /*!***************************************************!*\
              !*** ./src/app/components/home/home.component.ts ***!
              \***************************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    HomeComponent: () => ( /* binding */ HomeComponent)
                    /* harmony export */
                });
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/core */ 61699);
                /* harmony import */
                var _services_event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../services/event.service */ 91457);
                /* harmony import */
                var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/common */ 26575);
                /* harmony import */
                var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../header/header.component */ 6471);
                /* harmony import */
                var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../about/about.component */ 86352);
                /* harmony import */
                var _how_to_buy_how_to_buy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../how-to-buy/how-to-buy.component */ 41312);
                /* harmony import */
                var _buy_widget_buy_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../buy-widget/buy-widget.component */ 3990);







                const _c0 = function(a0) {
                    return {
                        "foreign-lang": a0
                    };
                };
                class HomeComponent {
                    eventService;
                    lang = localStorage.getItem('currentlang');
                    constructor(eventService) {
                        this.eventService = eventService;
                        this.eventService.getLang().subscribe(val => {
                            this.lang = val || 'en';
                        });
                    }
                    slideOption = {
                        loop: true,
                        autoplay: false,
                        mouseDrag: true,
                        touchDrag: true,
                        dots: false,
                        nav: false,
                        // autoplayTimeout: 2500,
                        center: false,
                        margin: 15,
                        responsive: {
                            0: {
                                items: 1.2
                                // margin:15,
                            },

                            400: {
                                items: 1.2
                            },
                            768: {
                                items: 1
                            }
                        }
                    };
                    langs() {
                        let langlist = ['bg', 'cz', 'de', 'el', 'hu', 'jp', 'kr', 'pl', 'ru', 'sk', 'vn', 'id', 'pt', 'fr', 'tr', 'it', 'ro'];
                        return langlist.includes(this.lang);
                    }
                    static ɵfac = function HomeComponent_Factory(t) {
                        return new(t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_0__.EventService));
                    };
                    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
                        type: HomeComponent,
                        selectors: [
                            ["app-home"]
                        ],
                        decls: 11,
                        vars: 3,
                        consts: [
                            ["id", "home", 1, "containerItem", 3, "ngClass"],
                            ["src", "/assets/images/svg-icons/logo.svg", "alt", "", 1, "img-fuid", "mx-auto", "d-block", "d-md-none", "mob-logo"],
                            [1, "content"],
                            [1, "container"],
                            [1, "row", "justify-content-end"],
                            [1, "col-lg-5"],
                            [1, "text"]
                        ],
                        template: function HomeComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header");
                                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
                                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6);
                                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-buy-widget");
                                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
                                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "app-about")(10, "app-how-to-buy");
                            }
                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c0, ctx.langs()));
                            }
                        },
                        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _how_to_buy_how_to_buy_component__WEBPACK_IMPORTED_MODULE_3__.HowToBuyComponent, _buy_widget_buy_widget_component__WEBPACK_IMPORTED_MODULE_4__.BuyWidgetComponent],
                        styles: [".containerItem[_ngcontent-%COMP%] {\n  background: url(\"/assets/images/bg_1.svg\") no-repeat 0 0/cover !important;\n  width: 100%;\n  height: 100%;\n  min-width: 98vw;\n  overflow: hidden;\n  min-height: 100vh;\n  font-family: \"EastSeaDokdo\";\n  padding-top: 140px;\n  margin-top: 40px;\n}\n@media screen and (max-width: 768px) {\n  .containerItem[_ngcontent-%COMP%] {\n    background: #2C3434 url(\"/assets/images/banner_mob.svg\") no-repeat 50% 0/cover !important;\n    padding-top: 50px;\n    min-height: 1000px;\n  }\n}\n\n.mob-logo[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.content[_ngcontent-%COMP%]   .frame-bg[_ngcontent-%COMP%] {\n  z-index: 2;\n  width: 100%;\n  position: relative;\n}\n@media screen and (max-width: 1440px) {\n  .content[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .content[_ngcontent-%COMP%]   .frame-bg[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    right: 5%;\n  }\n}\n@media screen and (max-width: 768px) {\n  .content[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    margin-top: -40px;\n  }\n  .content[_ngcontent-%COMP%]   .frame-bg[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    top: 54px;\n    left: 80px;\n    max-width: 260px;\n  }\n}\n@media screen and (max-width: 768px) and (max-width: 376px) {\n  .content[_ngcontent-%COMP%]   .frame-bg[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    left: 67px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5RUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQVNJO0VBbkJKO0lBb0JJLHlGQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQU5GO0FBQ0Y7O0FBUUE7RUFDSSxvQkFBQTtBQUxKOztBQU9BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFKSjtBQU9JO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUxSO0FBaUJJO0VBckJKO0lBc0JRLDJCQUFBO0VBZE47RUFnQlU7SUFDSSxTQUFBO0VBZGQ7QUFDRjtBQWtCSTtFQTlCSjtJQStCUSw4QkFBQTtJQUNBLGlCQUFBO0VBZk47RUFrQlU7SUFDSSxTQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0VBaEJkO0FBQ0Y7QUFrQmdCO0VBTko7SUFPUSxVQUFBO0VBZmxCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVySXRlbSB7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmdfMS5zdmdcIikgbm8tcmVwZWF0IDAgMC9jb3ZlciAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDk4dnc7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LWZhbWlseTogJ0Vhc3RTZWFEb2tkbyc7XG4gICAgcGFkZGluZy10b3A6IDE0MHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTc1MHB4KSB7XG4gICAgLy8gICAgIG1pbi1oZWlnaHQ6IDExMjBweDtcbiAgICAvLyB9XG4gICAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTc0MHB4KSB7XG4gICAgLy8gICAgIG1pbi1oZWlnaHQ6IDEwMDBweDtcbiAgICAvLyB9XG4gICAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTU5MHB4KSB7XG4gICAgLy8gICAgIG1pbi1oZWlnaHQ6IDg1N3B4O1xuICAgIC8vIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGJhY2tncm91bmQ6IzJDMzQzNCAgdXJsKFwiL2Fzc2V0cy9pbWFnZXMvYmFubmVyX21vYi5zdmdcIikgbm8tcmVwZWF0IDUwJSAwL2NvdmVyICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6NTBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDAwcHg7XG4gICAgfVxufVxuLm1vYi1sb2dve1xuICAgIHBhZGRpbmctYm90dG9tOjUwcHg7XG59XG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBcblxuICAgIC5mcmFtZS1iZyB7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLy8gLnRleHQge1xuICAgICAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAvLyAgICAgdG9wOiAxNDBweDtcbiAgICAgICAgLy8gICAgIHJpZ2h0OiAxNSU7XG4gICAgICAgIC8vICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgICAgICAvLyAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIC5mcmFtZS1iZyB7XG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDUlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcblxuICAgICAgICAuZnJhbWUtYmcge1xuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICAgIHRvcDogNTRweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA4MHB4O1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjYwcHg7XG5cbiAgICAgICAgICAgICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgzNTRkZWcpO1xuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NnB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDY3cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
                    });
                }


                /***/
            }),

        /***/
        41312:
            /*!***************************************************************!*\
              !*** ./src/app/components/how-to-buy/how-to-buy.component.ts ***!
              \***************************************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    HowToBuyComponent: () => ( /* binding */ HowToBuyComponent)
                    /* harmony export */
                });
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ 61699);
                /* harmony import */
                var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @ngx-translate/core */ 21916);


                class HowToBuyComponent {
                    static ɵfac = function HowToBuyComponent_Factory(t) {
                        return new(t || HowToBuyComponent)();
                    };
                    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                        type: HowToBuyComponent,
                        selectors: [
                            ["app-how-to-buy"]
                        ],
                        decls: 14,
                        vars: 0,
                        consts: [
                            ["id", "how_to", 1, "how-to-buy"],
                            [1, "container"],
                            [1, "row", "align-items-center"],
                            [1, "col-lg-6"],
                            ["translate", ""],
                            ["translate", "", 1, "mb-4"],
                            ["src", "/assets/images/how-to-img.png", 1, "img-fluid", "d-block"],
                            ["src", "/assets/images/how-to-mob.png", 1, "img-fluid", "d-block", "d-md-none"],
                            ["src", "/assets/images/how-to-bottom.png", 1, "img-fluid", "how-to-bottom", "d-block"]
                        ],
                        template: function HowToBuyComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "how_to_title");
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "how_to_para1_evm");
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "how_to_para2_evm");
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6)(12, "img", 7);
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                            }
                        },
                        dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateDirective],
                        styles: [".how-to-buy[_ngcontent-%COMP%] {\n  background: #2C3434 url(\"/assets/images/how-to-bg.svg\") no-repeat 0 0/cover;\n  padding: 100px 0;\n  position: relative;\n}\n@media screen and (max-width: 768px) {\n  .how-to-buy[_ngcontent-%COMP%] {\n    padding: 100px 0 0;\n  }\n}\n.how-to-buy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 50px;\n}\n.how-to-buy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #D0D0D0;\n  line-height: 50px;\n  font-size: 40px;\n  max-width: 593px;\n  word-break: break-word;\n}\n.how-to-buy[_ngcontent-%COMP%]   .how-to-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 80px;\n}\n@media screen and (max-width: 768px) {\n  .how-to-buy[_ngcontent-%COMP%]   .how-to-bottom[_ngcontent-%COMP%] {\n    position: relative;\n    left: 0;\n    max-width: 330px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob3ctdG8tYnV5L2hvdy10by1idXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSwyRUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUdJO0VBSko7SUFLSSxrQkFBQTtFQUFGO0FBQ0Y7QUFHSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBRFI7QUFJSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBRlI7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFIUjtBQUlRO0VBSko7SUFLUSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxnQkFBQTtFQURWO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL2Fzc2V0cy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9yZXNwb25zaXZlXCI7XG5cbi5ob3ctdG8tYnV5IHtcbiAgICBiYWNrZ3JvdW5kOiAjMkMzNDM0IHVybCgnL2Fzc2V0cy9pbWFnZXMvaG93LXRvLWJnLnN2ZycpIG5vLXJlcGVhdCAwIDAgLyBjb3ZlcjtcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcbiAgICBwYWRkaW5nOiAxMDBweCAwIDA7XG5cbiAgICB9XG5cbiAgICBoMyB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIGNvbG9yOiAjRDBEMEQwO1xuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDU5M3B4O1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIH1cblxuICAgIC5ob3ctdG8tYm90dG9tIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDgwcHg7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpe1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
                    });
                }


                /***/
            }),

        /***/
        95055:
            /*!***********************************************************!*\
              !*** ./src/app/components/language/language.component.ts ***!
              \***********************************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    LanguageComponent: () => ( /* binding */ LanguageComponent)
                    /* harmony export */
                });
                /* harmony import */
                var _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../shared/constants/app-enums */ 74276);
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */ 61699);
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */ 27947);
                /* harmony import */
                var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @ngx-translate/core */ 21916);
                /* harmony import */
                var _services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../../services/event.service */ 91457);





                // import { verifyLanguage } from '../../shared/app-enums';
                class LanguageComponent {
                    route;
                    translate;
                    eventService;
                    lang;
                    constructor(route, translate, eventService) {
                        this.route = route;
                        this.translate = translate;
                        this.eventService = eventService;
                        this.route.params.subscribe(params => {
                            const lang = params['lang'];
                            if (lang && (0, _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_0__.verifyLanguage)(lang)) {
                                this.lang = lang;
                            } else {
                                const localLang = localStorage.getItem('currentlang');
                                if (localLang && (0, _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_0__.verifyLanguage)(localLang)) {
                                    this.lang = localLang;
                                } else {
                                    const userLang = navigator.language ? .split('-')[0];
                                    this.lang = userLang && (0, _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_0__.verifyLanguage)(userLang) ? userLang : 'en';
                                }
                            }
                        });
                        this.translate.setDefaultLang('en');
                        this.translate.use(this.lang);
                        this.eventService.setLang(this.lang);
                    }
                    static ɵfac = function LanguageComponent_Factory(t) {
                        return new(t || LanguageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService));
                    };
                    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
                        type: LanguageComponent,
                        selectors: [
                            ["app-language"]
                        ],
                        decls: 1,
                        vars: 0,
                        template: function LanguageComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
                            }
                        },
                        dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
                        styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
                    });
                }


                /***/
            }),

        /***/
        41838:
            /*!***************************************************!*\
              !*** ./src/app/components/swap/swap.component.ts ***!
              \***************************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    SwapComponent: () => ( /* binding */ SwapComponent)
                    /* harmony export */
                });
                /* harmony import */
                var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/core */ 61699);
                /* harmony import */
                var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! rxjs */ 72513);
                /* harmony import */
                var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! rxjs */ 50655);
                /* harmony import */
                var src_app_shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! src/app/shared/constants/app-enums */ 74276);
                /* harmony import */
                var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/environments/environment */ 20553);
                /* harmony import */
                var src_app_services_wallet_connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! src/app/services/wallet-connect.service */ 14052);
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/common/http */ 54860);
                /* harmony import */
                var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! src/app/services/event.service */ 91457);
                /* harmony import */
                var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ngx-bootstrap/modal */ 27269);
                /* harmony import */
                var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @ngx-translate/core */ 21916);
                /* harmony import */
                var src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! src/app/services/popup.service */ 68394);
                /* harmony import */
                var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/router */ 27947);
                /* harmony import */
                var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! @angular/common */ 26575);
                /* harmony import */
                var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! @angular/forms */ 28849);
                /* harmony import */
                var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ngx-bootstrap/dropdown */ 16380);
                /* harmony import */
                var angular_svg_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! angular-svg-icon */ 38848);
                /* harmony import */
                var _shared_directives_two_decimal_number_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../shared/directives/two-decimal-number.directive */ 74032);


















                const _c0 = ["swapIn"];
                const _c1 = function(a0) {
                    return {
                        "selected": a0
                    };
                };

                function SwapComponent_div_1_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5)(1, "button", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SwapComponent_div_1_Template_button_click_1_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
                            const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.changeTab(true));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SwapComponent_div_1_Template_button_click_5_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
                            const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.changeTab(false));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "img", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "USDT");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
                    }
                    if (rf & 2) {
                        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c1, ctx_r0.isNative));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "/assets/images/svg-icons/", ctx_r0.modeName, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.modeName);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c1, !ctx_r0.isNative));
                    }
                }

                function SwapComponent_div_2_div_1_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"]("", ctx_r12.modeName, " ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 3, "balance"), " ", ctx_r12.convertNum(ctx_r12.nativeBal, 4), "");
                    }
                }

                function SwapComponent_div_2_div_2_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("USDT ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, "balance"), " ", ctx_r13.convertNum(ctx_r13.usdtBal, 4), "");
                    }
                }

                function SwapComponent_div_2_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SwapComponent_div_2_div_1_Template, 3, 5, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SwapComponent_div_2_div_2_Template, 3, 4, "div", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.isNative && !ctx_r1.isWert);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r1.isNative && !ctx_r1.isWert);
                    }
                }
                const _c2 = function(a0, a1) {
                    return {
                        gasFees: a0,
                        modeName: a1
                    };
                };

                function SwapComponent_div_3_div_25_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, "widget.gas_fees", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](4, _c2, ctx_r15.gasFees, ctx_r15.modeName)));
                    }
                }
                const _c3 = function(a0) {
                    return {
                        modeName: a0
                    };
                };

                function SwapComponent_div_3_div_26_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, "widget.low_gas_fees", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c3, ctx_r16.modeName)));
                    }
                }
                const _c4 = function(a0) {
                    return {
                        tokenName: a0
                    };
                };

                function SwapComponent_div_3_div_27_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r17.lowGas ? _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, "widget.low_gas_fees", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c3, ctx_r17.modeName)) : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 4, "widget.low_usdt", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c4, ctx_r17.tokenName)));
                    }
                }
                const _c5 = function(a0, a1) {
                    return {
                        minAmount: a0,
                        cryptoName: a1
                    };
                };

                function SwapComponent_div_3_div_28_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, "widget.min_crypto", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](4, _c5, ctx_r18.minAmount, ctx_r18.cryptoName)), " ");
                    }
                }
                const _c6 = function(a0, a1, a2) {
                    return {
                        gasFees: a0,
                        modeName: a1,
                        tokenName: a2
                    };
                };

                function SwapComponent_div_3_div_29_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, "widget.swap_error", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](4, _c6, ctx_r19.gasFees, ctx_r19.modeName, ctx_r19.tokenName)), " ");
                    }
                }

                function SwapComponent_div_3_div_30_div_1_ul_10_li_1_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 48);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SwapComponent_div_3_div_30_div_1_ul_10_li_1_Template_li_click_0_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
                            const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
                            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r25.changeChain("BNB"));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 49);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 50);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "a", 51);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 1, "widget.switch_to"), " BNB");
                    }
                }

                function SwapComponent_div_3_div_30_div_1_ul_10_li_2_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 48);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SwapComponent_div_3_div_30_div_1_ul_10_li_2_Template_li_click_0_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
                            const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
                            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r27.changeChain("SOL"));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 49);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 52);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "a", 51);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 1, "widget.switch_to"), " SOL");
                    }
                }

                function SwapComponent_div_3_div_30_div_1_ul_10_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 46);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SwapComponent_div_3_div_30_div_1_ul_10_li_1_Template, 6, 3, "li", 47);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SwapComponent_div_3_div_30_div_1_ul_10_li_2_Template, 6, 3, "li", 47);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r22.modeName != "BNB");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r22.modeName != "SOL");
                    }
                }
                const _c7 = function() {
                    return {
                        "width.px": "12",
                        "height.px": 12
                    };
                };

                function SwapComponent_div_3_div_30_div_1_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38)(1, "button", 39);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SwapComponent_div_3_div_30_div_1_Template_button_click_1_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r30);
                            const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
                            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r29.confirm());
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "widget.buy_now ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 40)(4, "div", 41);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "img", 42);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 43);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "svg-icon", 44);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, SwapComponent_div_3_div_30_div_1_ul_10_Template, 3, 2, "ul", 45);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
                    }
                    if (rf & 2) {
                        const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r21.isLowBalance && !ctx_r21.isWert || !ctx_r21.swapToken || ctx_r21.swapToken == 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dropup", true);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "/assets/images/svg-icons/", ctx_r21.modeName, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 6, "widget.switch_to"), " ", ctx_r21.modeName, "");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](8, _c7));
                    }
                }

                function SwapComponent_div_3_div_30_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 36);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SwapComponent_div_3_div_30_div_1_Template, 11, 9, "div", 37);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r20.isModal);
                    }
                }
                const _c8 = function(a0) {
                    return {
                        "mt-0": a0
                    };
                };
                const _c9 = function() {
                    return {
                        "width.px": 28,
                        "height.px": 28
                    };
                };
                const _c10 = function(a0) {
                    return {
                        cryptoName: a0
                    };
                };
                const _c11 = function() {
                    return {
                        "width.px": 32,
                        "height.px": 32
                    };
                };

                function SwapComponent_div_3_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17)(4, "label", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 19);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SwapComponent_div_3_Template_div_click_7_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
                            const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r31.max());
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 20)(11, "input", 21, 22);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SwapComponent_div_3_Template_input_ngModelChange_11_listener($event) {
                            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
                            const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r33.swapToken = $event);
                        })("ngModelChange", function SwapComponent_div_3_Template_input_ngModelChange_11_listener($event) {
                            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
                            const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r34.swapTokenUpdate.next($event));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 23);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "svg-icon", 24);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 25)(16, "div", 17)(17, "label", 26);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 27)(21, "input", 28);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SwapComponent_div_3_Template_input_ngModelChange_21_listener($event) {
                            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
                            const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r35.baseToken = $event);
                        })("ngModelChange", function SwapComponent_div_3_Template_input_ngModelChange_21_listener($event) {
                            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
                            const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r36.baseTokenUpdate.next($event));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 23);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "svg-icon", 29);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 30);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, SwapComponent_div_3_div_25_Template, 3, 7, "div", 31);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, SwapComponent_div_3_div_26_Template, 3, 6, "div", 31);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, SwapComponent_div_3_div_27_Template, 4, 11, "div", 31);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, SwapComponent_div_3_div_28_Template, 3, 7, "div", 32);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, SwapComponent_div_3_div_29_Template, 3, 8, "div", 32);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, SwapComponent_div_3_div_30_Template, 2, 1, "div", 33);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](25, _c8, ctx_r2.isModal));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](6, 17, "widget.pay_with", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](27, _c4, ctx_r2.tokenName)));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 20, "widget.max"));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("noDecimal", ctx_r2.isNative ? 10 : 6)("ngModel", ctx_r2.swapToken);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "./assets/images/svg-icons/", ctx_r2.isNative ? ctx_r2.modeName : ctx_r2.isWert ? "usd" : "usdt", ".svg");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](29, _c9));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](19, 22, "widget.amount_in", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](30, _c10, ctx_r2.cryptoName)));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("noDecimal", 0)("ngModel", ctx_r2.baseToken);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](32, _c11));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.isLowBalance && !ctx_r2.isWert && ctx_r2.walletAddress);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.isNative && ctx_r2.isLowBalance && !ctx_r2.isWert && ctx_r2.walletAddress);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.isNative && ctx_r2.isLowBalance && !ctx_r2.isWert && ctx_r2.walletAddress);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.baseToken && ctx_r2.baseToken < ctx_r2.minAmount && !ctx_r2.isWert && ctx_r2.walletAddress);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.baseToken && ctx_r2.baseToken >= ctx_r2.minAmount && ctx_r2.isLowBalance && !ctx_r2.isWert && ctx_r2.walletAddress);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.walletAddress);
                    }
                }
                const _c12 = function(a0, a1) {
                    return {
                        baseToken: a0,
                        cryptoName: a1
                    };
                };

                function SwapComponent_div_4_p_5_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 57);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, "widget.transction_info", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](4, _c12, ctx_r37.baseToken, ctx_r37.cryptoName)));
                    }
                }
                const _c13 = function(a0) {
                    return {
                        baseToken: a0
                    };
                };

                function SwapComponent_div_4_p_6_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 57);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, "staking.transction_info_stake", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c13, ctx_r38.baseToken)));
                    }
                }

                function SwapComponent_div_4_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 54);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 55);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SwapComponent_div_4_p_5_Template, 3, 7, "p", 56);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, SwapComponent_div_4_p_6_Template, 3, 6, "p", 56);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c8, ctx_r3.isModal));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 4, "widget.transaction_in_progress"));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r3.isStake);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.isStake);
                    }
                }
                const _c14 = function(a0, a1) {
                    return {
                        cryptoName: a0,
                        tokenName: a1
                    };
                };

                function SwapComponent_div_5_p_5_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 57);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, "widget.waiting_confirm", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](4, _c14, ctx_r39.cryptoName, ctx_r39.tokenName)));
                    }
                }

                function SwapComponent_div_5_p_6_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 57);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "staking.waiting_confirm_stake"));
                    }
                }

                function SwapComponent_div_5_p_7_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 57);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "staking.waiting_confirm_stake_2"));
                    }
                }

                function SwapComponent_div_5_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 54);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 58);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SwapComponent_div_5_p_5_Template, 3, 7, "p", 56);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, SwapComponent_div_5_p_6_Template, 3, 3, "p", 56);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, SwapComponent_div_5_p_7_Template, 3, 3, "p", 56);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c8, ctx_r4.isModal));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 5, "confirm"));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r4.isStake);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.isStake);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.isStake);
                    }
                }

                function SwapComponent_div_6_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 54);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 59);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 57);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
                    }
                    if (rf & 2) {
                        const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](8, _c8, ctx_r5.isModal));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 3, "widget.authorise"));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 5, "widget.waiting_approve", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](10, _c14, ctx_r5.cryptoName, ctx_r5.tokenName)));
                    }
                }

                function SwapComponent_div_7_p_5_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 65);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, "staking.transction_info_stake_success", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c13, ctx_r42.baseToken)));
                    }
                }

                function SwapComponent_div_7_p_6_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 65);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, "widget.transction_info", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](4, _c12, ctx_r43.baseToken, ctx_r43.cryptoName)));
                    }
                }

                function SwapComponent_div_7_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 60);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 61);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SwapComponent_div_7_p_5_Template, 3, 6, "p", 62);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, SwapComponent_div_7_p_6_Template, 3, 7, "p", 62);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 63)(8, "button", 64);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SwapComponent_div_7_Template_button_click_8_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45);
                            const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r44.viewUrl());
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 64);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SwapComponent_div_7_Template_button_click_11_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45);
                            const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r46.startAgain());
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
                    }
                    if (rf & 2) {
                        const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](12, _c8, ctx_r6.isModal));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 6, "widget.transaction_success"));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.isStake);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r6.isStake);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 8, "widget.view_transaction"));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 10, "widget.start_again"));
                    }
                }

                function SwapComponent_div_8_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 66);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 67);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 68);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 63)(9, "button", 64);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SwapComponent_div_8_Template_button_click_9_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48);
                            const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r47.viewUrl());
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 64);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SwapComponent_div_8_Template_button_click_12_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48);
                            const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r49.startAgain());
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
                    }
                    if (rf & 2) {
                        const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c8, ctx_r7.isModal));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 5, "widget.transaction_failed"));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 7, "widget.view_transaction_info"));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 9, "widget.view_transaction"));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 11, "widget.start_again"));
                    }
                }

                function SwapComponent_div_9_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 66);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 69);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 70)(6, "button", 71);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SwapComponent_div_9_Template_button_click_6_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
                            const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r50.startAgain());
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
                    }
                    if (rf & 2) {
                        const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c8, ctx_r8.isModal));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 3, "widget.transaction_rejected"));
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 5, "widget.start_again"));
                    }
                }
                const _c15 = function(a0) {
                    return {
                        "mt-4 mb-2": a0
                    };
                };
                class SwapComponent {
                    walletConnectService;
                    http;
                    eventService;
                    modalService;
                    translate;
                    popupService;
                    router;
                    isNative = false;
                    isWert = false;
                    isModal = false;
                    messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
                    swapIn = null;
                    subscriptions = [];
                    environtment = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment;
                    baseToken;
                    swapToken;
                    baseCurrencyValue;
                    swapTokenUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
                    baseTokenUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
                    contractData;
                    currentLang;
                    SwapStatus = src_app_shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus;
                    lblockPrice = 0;
                    isLowBalance = false;
                    inProgress = false;
                    isStake = false;
                    usdtBal = 0;
                    nativeBal = 0;
                    minAmount = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.minToken;
                    modalRef;
                    lowGas = false;
                    wertMode = false;
                    constructor(walletConnectService, http, eventService, modalService, translate, popupService, router) {
                        this.walletConnectService = walletConnectService;
                        this.http = http;
                        this.eventService = eventService;
                        this.modalService = modalService;
                        this.translate = translate;
                        this.popupService = popupService;
                        this.router = router;
                        this.currentLang = this.translate.currentLang;
                        this.translate.onLangChange.subscribe(params => {
                            this.currentLang = params.lang || 'en';
                        });
                        this.eventService.getNetwork().subscribe(val => {
                            this.getBal();
                            if (!this.isWert) this.max();
                        });
                        //to check the value of swap
                        this.subscriptions.push(this.swapTokenUpdate.pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(500)).subscribe(value => {
                            if (this.swapToken >= 0) {
                                this.calculateSwap();
                            } else {
                                this.baseToken = 0;
                            }
                        }));
                        this.subscriptions.push(this.baseTokenUpdate.pipe((0, rxjs__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(500)).subscribe(value => {
                            if (this.baseToken >= 0) {
                                this.calculateSwapReverse();
                            } else {
                                this.swapToken = 0;
                            }
                        }));
                    }
                    ngOnChanges() {
                        setTimeout(() => {
                            this.swapToken = undefined;
                            this.baseToken = undefined;
                            this.walletConnectService.swapStatus = src_app_shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.not_started;
                            this.isLowBalance = false;
                            this.lowGas = false;
                            this.getBal();
                            this.checkLowBalance();
                            if (!this.isWert) this.max();
                        }, 600);
                    }
                    ngOnInit() {
                        this.walletConnectService.swapStatus = src_app_shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.not_started;
                        this.isLowBalance = false;
                        setInterval(() => this.getBal(), 500);
                    }
                    max() {
                        var _this = this;
                        return (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*() {
                            let maxVal = _this.isNative ? yield _this.walletConnectService.getDynamicAmount(_this.maxTokensToBuy * 1.02041, 'getNativeAmount'): yield _this.walletConnectService.getDynamicAmount(_this.maxTokensToBuy, "getUSDTAmount");
                            _this.swapToken = +_this.floorString((_this.isNative ? _this.nativeBal - _this.gasFees > 0 ? _this.nativeBal - _this.gasFees : 0 : _this.usdtBal).toString());
                            if (maxVal < _this.swapToken) {
                                _this.swapToken = maxVal;
                            }
                            if (_this.isWert) _this.swapToken = 0;
                            if (_this.swapToken == 0) {
                                _this.swapToken = undefined;
                                _this.baseToken = 0;
                            }
                            _this.swapTokenUpdate.next(_this.swapToken);
                            setTimeout(() => _this.swapTokenUpdate.next(_this.swapToken), 200);
                        })();
                    }
                    getBal() {
                        this.nativeBal = this.allBalance.native;
                        this.usdtBal = this.allBalance.usdt;
                    }
                    get walletAddress() {
                        return this.walletConnectService.walletAddress;
                    }
                    get status() {
                        return this.walletConnectService.swapStatus;
                    }
                    get hash() {
                        return this.walletConnectService.swapHash;
                    }
                    get tokenName() {
                        return this.isNative ? this.modeName : this.isWert ? "USD" : "USDT";
                    }
                    get modeName() {
                        return this.walletConnectService.getChainData().purchaseToken;
                    }
                    get chainData() {
                        return this.walletConnectService.getChainData();
                    }
                    get gasFees() {
                        return src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc.gasFees;
                    }
                    get allBalance() {
                        return {
                            native: +this.walletConnectService.balanceData.nativeBal.toFixed(10).replace(/0{0,10}$/, ""),
                            usdt: this.walletConnectService.balanceData.usdtBal
                        };
                    }
                    get maxTokensToBuy() {
                        return 100000000000000000;
                    }
                    ngOnDestroy() {
                        for (const subscription of this.subscriptions) {
                            subscription.unsubscribe();
                        }
                    }
                    startAgain() {
                        this.getBal();
                        this.max();
                        this.walletConnectService.swapStatus = src_app_shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.not_started;
                    }
                    confirm(isBuyStake = false) {
                        if (this.swapToken !== 0 && this.baseToken >= this.minAmount) this.createSwap(isBuyStake);
                    }
                    calculateSwap = (() => {
                        var _this2 = this;
                        return (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*() {
                            _this2.checkLowBalance();
                            if (_this2.isNative) {
                                _this2.baseToken = yield _this2.walletConnectService.getNativeAmount(_this2.swapToken * 0.98);
                            } else {
                                _this2.baseToken = yield _this2.walletConnectService.getUSDTAmount(_this2.swapToken);
                            }
                            _this2.baseToken = +_this2.baseToken.toFixed(0).replace(/0{0,0}$/, "");
                            // console.log("calculateSwap here", this.isNative, this.swapToken, this.baseToken);
                        });
                    })();

                    calculateSwapReverse = (() => {
                        var _this3 = this;
                        return (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*() {
                            if (_this3.isNative) {
                                _this3.swapToken = yield _this3.walletConnectService.getDynamicAmount(_this3.baseToken, 'getNativeAmount');
                                _this3.swapToken = +(_this3.swapToken * 1.001).toFixed(10).replace(/0{0,10}$/, "");
                                console.log(_this3.swapToken);
                            } else {
                                _this3.swapToken = yield _this3.walletConnectService.getDynamicAmount(_this3.baseToken, 'getUSDTAmount');
                            }
                            _this3.checkLowBalance();
                            // console.log("calculateSwapReverse here", this.swapToken, this.baseToken);
                        });
                    })();

                    createSwap(isBuyStake = false) {
                        var _this4 = this;
                        return (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*() {
                            if (_this4.inProgress) return;
                            _this4.inProgress = true;
                            console.log('createSwap called', _this4.isNative, _this4.maxTokensToBuy);
                            if (_this4.baseToken <= _this4.maxTokensToBuy) {
                                _this4.walletConnectService.swapStatus = src_app_shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.not_started;
                                try {
                                    if (_this4.isNative) {
                                        if (_this4.nativeBal - _this4.gasFees >= _this4.swapToken) {
                                            _this4.isLowBalance = false;
                                            yield _this4.walletConnectService.swapNativeTokens(_this4.baseToken, _this4.swapToken, isBuyStake);
                                        } else {
                                            _this4.isLowBalance = true;
                                        }
                                    } else {
                                        if (_this4.usdtBal >= _this4.swapToken && _this4.nativeBal >= _this4.gasFees) {
                                            _this4.isLowBalance = false;
                                            yield _this4.walletConnectService.swapCryptoForUSDT(_this4.baseToken, _this4.swapToken, false, isBuyStake);
                                        } else {
                                            _this4.isLowBalance = true;
                                            if (_this4.nativeBal < _this4.gasFees) _this4.lowGas = true;
                                        }
                                    }
                                    _this4.inProgress = false;
                                } catch (err) {
                                    console.log('createSwap', err);
                                    if (err && err.code == 4001) {
                                        _this4.walletConnectService.swapStatus = src_app_shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.rejected;
                                    } else {
                                        _this4.walletConnectService.swapStatus = src_app_shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.failed;
                                    }
                                    _this4.inProgress = false;
                                }
                            } else {
                                _this4.popupService.messagePopup("warning", _this4.translate.instant('widget.max_token_exceed', {
                                    maxTokensToBuy: _this4.maxTokensToBuy
                                }), _this4.translate.instant('widget.max_token_title'));
                                _this4.walletConnectService.swapStatus = src_app_shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.not_started;
                                _this4.inProgress = false;
                            }
                        })();
                    }
                    viewUrl() {
                        const blkUrl = this.chainData.blockExplorerURL;
                        const urlWindow = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production ? blkUrl + this.hash : blkUrl + this.hash + '?cluster=devnet';
                        window.open(urlWindow, '_blank');
                    }
                    get cryptoName() {
                        return src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.tokenName;
                    }
                    checkLowBalance() {
                        if (this.isNative) {
                            if (this.nativeBal - this.gasFees >= this.swapToken) {
                                this.isLowBalance = false;
                            } else {
                                this.isLowBalance = true;
                            }
                        } else {
                            if (+this.usdtBal >= +this.swapToken && +this.nativeBal >= this.gasFees) {
                                this.isLowBalance = false;
                                this.lowGas = false;
                            } else {
                                this.isLowBalance = true;
                                if (this.nativeBal < this.gasFees) this.lowGas = true;
                            }
                        }
                    }
                    openWert() {
                        this.eventService.broadcastEvent("OPEN_WERT", true);
                    }
                    checkChain() {
                        return true;
                        // if (this.walletConnectService.chainId == this.chainData.chainIdInt) {
                        //   return true;
                        // } else {
                        //   if (this.walletConnectService.mode == "wallet") {
                        //     this.walletConnectService.switchNetwork(this.chainData.chainIdInt).then(() => {
                        //       return true;
                        //     })
                        //     return true;
                        //   } else {
                        //     this.popupService.messagePopup("info",
                        //       this.translate.instant('popup.wrong_chain', { chainName: this.chainData.chainName }),
                        //       this.translate.instant('popup.change_network'))
                        //       .then((res) => {
                        //         if (res.isConfirmed) {
                        //           this.walletConnectService.switchNetwork(this.chainData.chainIdInt);
                        //         }
                        //       });
                        //     return false;
                        //   }
                        // }
                    }

                    convertNum(amount, decimals = 2) {
                        return (0, src_app_shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.convertNum)(amount, decimals);
                    }
                    floorString(str) {
                        let pos = str.indexOf('.');
                        return pos >= 0 ? (str + '00').slice(0, pos + 6) : str + '.00';
                    }
                    changeChain(mode) {
                        if (mode == this.modeName) return;
                        if (mode == 'SOL') {
                            window.location.host = "solana." + window.location.host;
                            return;
                        }
                        let chain = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc;
                        if (this.walletAddress) {
                            this.walletConnectService.switchNetwork(chain.chainIdInt);
                        } else {
                            this.walletConnectService.chainId = chain.chainIdInt;
                        }
                    }
                    changeTab(isNative = true) {
                        this.isNative = isNative;
                        setTimeout(() => this.max(), 1000);
                    }
                    static ɵfac = function SwapComponent_Factory(t) {
                        return new(t || SwapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_wallet_connect_service__WEBPACK_IMPORTED_MODULE_3__.WalletConnectService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_popup_service__WEBPACK_IMPORTED_MODULE_5__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router));
                    };
                    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
                        type: SwapComponent,
                        selectors: [
                            ["app-swap"]
                        ],
                        viewQuery: function SwapComponent_Query(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
                            }
                            if (rf & 2) {
                                let _t;
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.swapIn = _t.first);
                            }
                        },
                        inputs: {
                            isNative: "isNative",
                            isWert: "isWert",
                            isModal: "isModal"
                        },
                        outputs: {
                            messageEvent: "messageEvent"
                        },
                        features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
                        decls: 10,
                        vars: 12,
                        consts: [
                            [1, "swapSection", 3, "ngClass"],
                            ["class", "tab-container gap-2 mb-3", 4, "ngIf"],
                            ["class", "text-center pb-2 font-20", 4, "ngIf"],
                            ["class", "body-section mt-2", 3, "ngClass", 4, "ngIf"],
                            ["class", "body-section mt-1 text-center", 3, "ngClass", 4, "ngIf"],
                            [1, "tab-container", "gap-2", "mb-3"],
                            [1, "btn", "btn-light", "text-uppercase", "d-flex", "align-items-center", "justify-content-center", 3, "ngClass", "click"],
                            ["height", "25", "alt", "", 3, "src"],
                            [1, "px-2"],
                            ["src", "/assets/images/svg-icons/usdt.svg", "height", "25", "alt", ""],
                            [1, "ps-2"],
                            [1, "text-center", "pb-2", "font-20"],
                            ["class", "ms-2 fw-semibold dashTitle ", 4, "ngIf"],
                            [1, "ms-2", "fw-semibold", "dashTitle"],
                            [1, "body-section", "mt-2", 3, "ngClass"],
                            [1, "row", "my-2"],
                            [1, "col-md-6", "pe-md-2"],
                            [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"],
                            [1, "d-block", "font-20"],
                            [1, "text-secondary", "cursor-pointer", "font-20", 3, "click"],
                            [1, "amountField", "d-flex", "align-items-start"],
                            ["type", "text", "appTwoDigitDecimalNumber", "", "placeholder", "0", 1, "form-control", "text-truncate", 3, "noDecimal", "ngModel", "ngModelChange"],
                            ["swapIn", ""],
                            [1, "amountType"],
                            [3, "src", "svgStyle"],
                            [1, "col-md-6", "ps-md-2", "mt-3", "mt-md-0"],
                            [1, "d-block", "font-20", "text-truncate"],
                            [1, "amountField"],
                            ["type", "text", "appTwoDigitDecimalNumber", "", "min", "minAmount", "pattern", "\\d*", "placeholder", "0", 1, "form-control", "text-truncate", 3, "noDecimal", "ngModel", "ngModelChange"],
                            ["src", "./assets/images/svg-icons/token.svg", 3, "svgStyle"],
                            [1, "col-12", "text-center", "fs-5"],
                            ["class", "lowBalance m-2 ", 4, "ngIf"],
                            ["class", "text-center mt-2 w-100 text-danger", 4, "ngIf"],
                            ["class", "d-flex flex-column align-items-center my-2", 4, "ngIf"],
                            [1, "lowBalance", "m-2"],
                            [1, "text-center", "mt-2", "w-100", "text-danger"],
                            [1, "d-flex", "flex-column", "align-items-center", "my-2"],
                            ["class", "d-flex align-items-center justify-content-between my-2 w-100 gap-2", 4, "ngIf"],
                            [1, "d-flex", "align-items-center", "justify-content-between", "my-2", "w-100", "gap-2"],
                            ["type", "button", "translate", "", 1, "btn", "btn-primary", "w-100", "text-uppercase", 3, "disabled", "click"],
                            ["dropdown", "", "dropdownToggle", "", 1, "btn", "btn-secondary", "w-100", "buyWith", "btn-group", "position-relative", 3, "dropup"],
                            ["type", "button", 1, "dropdown-toggle", "d-flex", "align-items-center", "justify-content-between", "w-100"],
                            ["height", "22", "alt", "", 3, "src"],
                            [1, "text-decoration-none", "selectedMenu", "mx-2", "text-white"],
                            ["src", "./assets/images/svg-icons/angle-down.svg", 1, "dropdown", 3, "svgStyle"],
                            ["class", "py-2 dropdown-menu dropdown-menu-right fixPos  px-3 ", "role", "menu", 4, "dropdownMenu"],
                            ["role", "menu", 1, "py-2", "dropdown-menu", "dropdown-menu-right", "fixPos", "px-3"],
                            ["class", "cursor-pointer", 3, "click", 4, "ngIf"],
                            [1, "cursor-pointer", 3, "click"],
                            ["type", "button", 1, "dropdown-toggle", "d-flex", "align-items-center", "w-100"],
                            ["src", "/assets/images/svg-icons/BNB.svg", "height", "22", "alt", ""],
                            [1, "text-decoration-none", "selectedMenu", "me-2"],
                            ["src", "/assets/images/svg-icons/SOL.svg", "height", "22", "alt", ""],
                            [1, "body-section", "mt-1", "text-center", 3, "ngClass"],
                            ["src", "./assets/images/svg-icons/token.svg", "alt", "loading", 1, "statusIcon", "loading"],
                            [1, "fw-normal", "fs-2", "px-2", "my-1", "text-uppercase", "text-center"],
                            ["class", "fs-3 mb-1 ", 4, "ngIf"],
                            [1, "fs-3", "mb-1"],
                            [1, "fw-normal", "fs-2", "my-1", "text-uppercase", "text-center", "text-secondary"],
                            [1, "fw-normal", "fs-2", "my-1", "text-uppercase", "text-secondary"],
                            ["src", "./assets/images/popup-icons/success.svg", "alt", "complete", 1, "statusIcon"],
                            [1, "fw-normal", "fs-2", "my-1", "text-uppercase", "text-success", "text-center"],
                            ["class", "fs-3 mb-1  mb-lg-4", 4, "ngIf"],
                            [1, "d-flex", "align-items-center", "justify-content-center", "gap-2"],
                            [1, "btn", "btn-primary", "w-50", "text-uppercase", 3, "click"],
                            [1, "fs-3", "mb-1", "mb-lg-4"],
                            ["src", "./assets/images/popup-icons/warning.svg", "alt", "failed", 1, "statusIcon"],
                            [1, "fw-normal", "fs-2", "my-1", "text-uppercase", "text-danger", "text-center"],
                            [1, "fs-3", "mb-1", "mb-lg-4", "text-danger", "mb-2"],
                            [1, "fw-normal", "fs-2", "text-uppercase", "text-danger", "my-1", "text-center"],
                            [1, "d-flex", "align-items-center", "justify-content-center", "gap-2", "mt-3"],
                            [1, "btn", "btn-primary", "w-100", "bg-secondary", "text-primary", "text-uppercase", "bg-xxl", 3, "click"]
                        ],
                        template: function SwapComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SwapComponent_div_1_Template, 9, 8, "div", 1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SwapComponent_div_2_Template, 3, 2, "div", 2);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, SwapComponent_div_3_Template, 31, 33, "div", 3);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, SwapComponent_div_4_Template, 7, 8, "div", 4);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SwapComponent_div_5_Template, 8, 9, "div", 4);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, SwapComponent_div_6_Template, 8, 13, "div", 4);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, SwapComponent_div_7_Template, 14, 14, "div", 4);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, SwapComponent_div_8_Template, 15, 15, "div", 4);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, SwapComponent_div_9_Template, 9, 9, "div", 4);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                            }
                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](10, _c15, !ctx.isModal));
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isModal);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.walletAddress);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.status === ctx.SwapStatus.not_started);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.status === ctx.SwapStatus.in_progess);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.status === ctx.SwapStatus.confirm_pending);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.status === ctx.SwapStatus.approval_pending);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.status === ctx.SwapStatus.complete);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.status === ctx.SwapStatus.failed);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.status === ctx.SwapStatus.rejected);
                            }
                        },
                        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__.BsDropdownMenuDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__.BsDropdownToggleDirective, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__.BsDropdownDirective, angular_svg_icon__WEBPACK_IMPORTED_MODULE_17__.SvgIconComponent, _shared_directives_two_decimal_number_directive__WEBPACK_IMPORTED_MODULE_6__.TwoDigitDecimaNumberDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
                        styles: [".swapSection[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n  color: #2e394d;\n}\n.swapSection[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .amountField[_ngcontent-%COMP%] {\n  position: relative;\n}\n.swapSection[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .amountField[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-height: 45px;\n  padding: 8px 15px;\n  font-size: 1.5rem;\n  font-weight: 400;\n  border-radius: 0;\n  border: 3px solid #292929;\n  color: #2e394d;\n  background: #b9c3d6;\n  box-shadow: 7px 7px rgba(96, 107, 135, 0.3490196078) inset;\n}\n.swapSection[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .amountField[_ngcontent-%COMP%]   .amountType[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 25px;\n  right: 0.8rem;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n}\n.swapSection[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .lowBalance[_ngcontent-%COMP%] {\n  line-height: 20px;\n  font-weight: 400;\n}\n.swapSection[_ngcontent-%COMP%]   .body-section[_ngcontent-%COMP%]   .statusIcon[_ngcontent-%COMP%] {\n  height: 55px;\n}\n.swapSection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.swapSection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: 12px;\n  opacity: 0;\n}\n.swapSection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .flag-icon[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  overflow: hidden;\n  margin-right: 3px;\n  min-width: 20px;\n  width: 20px;\n  height: 20px;\n  object-fit: cover;\n}\n.swapSection[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.swapSection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: auto;\n  padding: 0;\n  border: 2px solid rgba(128, 128, 128, 0.1098039216);\n}\n.swapSection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  background-color: inherit !important;\n}\n.swapSection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.swapSection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #b9c3d6 !important;\n}\n@media screen and (max-width: 576px) {\n  .swapSection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    max-height: 210px;\n  }\n}\n.swapSection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.swapSection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 1px solid #ffffff;\n  overflow: hidden;\n  margin-right: 10px;\n  min-width: 20px;\n  height: 20px;\n  width: 20px;\n  object-fit: cover;\n}\n.swapSection[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.swapSection[_ngcontent-%COMP%]   .dropup[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n@media screen and (max-width: 576px) {\n  .btn-primary[_ngcontent-%COMP%] {\n    max-width: 310px;\n  }\n  .btn-primary.bg-xxl-mob[_ngcontent-%COMP%] {\n    background: transparent url(/assets/images/svg-icons/primary-btn-big.png) no-repeat 50% 50%/100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zd2FwL3N3YXAuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL19yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUk7RUFDRSxtQkFBQTtFQUNBLGNDTjBCO0FEQ2hDO0FBUUk7RUFDRSxrQkFBQTtBQU5OO0FBUU07RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJDMEV3QjtFRHpFeEIsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0NuQndCO0VEb0J4QixtQkNuQndCO0VEb0J4QiwwREFBQTtBQU5SO0FBU007RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVlJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQVZOO0FBYUk7RUFDRSxZQUFBO0FBWE47QUFlRTtFQUNFLFdBQUE7QUFiSjtBQWVJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWJOO0FBZ0JJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFkTjtBQWlCSTtFQUNFLGVBQUE7QUFmTjtBQW1CRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxtREFBQTtBQWpCSjtBQW9CSTtFQUNFLG9DQUFBO0FBbEJOO0FBcUJJO0VBQ0UsWUFBQTtBQW5CTjtBQXNCUTtFQUNFLHlCQUFBO0FBcEJWO0FFNUNFO0VGZ0RBO0lBc0JJLGlCQUFBO0VBdEJKO0FBQ0Y7QUF3Qkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUF0Qk47QUF3Qk07RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBdEJSO0FBeUJNO0VBQ0UsY0NyR3dCO0FEOEVoQztBQTZCSTtFQUNFLFVBQUE7QUEzQk47O0FFckVFO0VGc0dGO0lBRUksZ0JBQUE7RUE5QkY7RUErQkU7SUFDRSwyR0FBQTtFQTdCSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvcmVzcG9uc2l2ZVwiO1xuXG4uc3dhcFNlY3Rpb24ge1xuXG4gIC5ib2R5LXNlY3Rpb24ge1xuICAgIGxhYmVsIHtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICBjb2xvcjogJHNlY29uZGFyeTtcbiAgICB9XG5cbiAgICAuYW1vdW50RmllbGQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQ1cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgJHByaW1hcnk7XG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkdGVydGlhcnk7XG4gICAgICAgIGJveC1zaGFkb3c6IDdweCA3cHggIzYwNmI4NzU5IGluc2V0O1xuICAgICAgfVxuXG4gICAgICAuYW1vdW50VHlwZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICByaWdodDogMC44cmVtO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAubG93QmFsYW5jZSB7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuXG4gICAgLnN0YXR1c0ljb24ge1xuICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgIH1cbiAgfVxuXG4gIC5kcm9wZG93bi10b2dnbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICBcbiAgICAmOjphZnRlciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTJweDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICBcbiAgICAuZmxhZy1pY29uIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICBcbiAgICAuZHJvcGRvd24ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuICBcbiAgLmRyb3Bkb3duLW1lbnUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODA4MDgwMWM7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrICFpbXBvcnRhbnQ7XG4gIFxuICAgIDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICBcbiAgICBsaSB7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAkdGVydGlhcnkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgQGluY2x1ZGUgc20tZG93biB7XG4gICAgICBtYXgtaGVpZ2h0OiAyMTBweDtcbiAgICB9XG4gIFxuICAgIGxpIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgICAgIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG4gIFxuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRyb3B1cCB7XG4gICAgJjpob3ZlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIEBpbmNsdWRlIHNtLWRvd24ge1xuICAgIG1heC13aWR0aDogMzEwcHg7XG4gICAgJi5iZy14eGwtbW9iIHtcbiAgICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQgdXJsKC9hc3NldHMvaW1hZ2VzL3N2Zy1pY29ucy9wcmltYXJ5LWJ0bi1iaWcucG5nKSBuby1yZXBlYXQgNTAlIDUwJS8xMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gIH1cblxufVxuXG4vLyAuYnRuLXNlY29uZGFyeSB7XG4vLyAgIEBpbmNsdWRlIHNtLWRvd24ge1xuLy8gICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnQgdXJsKC9hc3NldHMvaW1hZ2VzL3N2Zy1pY29ucy9zZWNvbmRhcnktYnRuLWJpZy5wbmcpIG5vLXJlcGVhdCA1MCUgNTAlLzEwMCUgIWltcG9ydGFudDtcbi8vICAgfVxuLy8gfSIsIi8vIGNvbG9yc1xuJHByaW1hcnk6ICAgICAgICAgICAgICAgICAgICAgICAjMjkyOTI5ICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICAgICAgICAgICAgICAgICAjMmUzOTRkICFkZWZhdWx0O1xuJHRlcnRpYXJ5OiAgICAgICAgICAgICAgICAgICAgICAjYjljM2Q2ICFkZWZhdWx0O1xuXG5cbiRkYW5nZXI6ICAgICAgICAgICAgICAgICAgICAgICAgI2RiNDQzNyAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAgICAgICAgICAgICAgICAgI2UyODUxMyAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAgICAgICAgICAgICAgICAgIzA4YjY0ZCAhZGVmYXVsdDtcblxuJGJsYWNrOiAgICAgICAgICAgICAgICAgICAgICAgICAjMDAwMDAwICFkZWZhdWx0O1xuJHdoaXRlOiAgICAgICAgICAgICAgICAgICAgICAgICAjZmZmZmZmICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAjRkVGRUZFICFkZWZhdWx0O1xuJGdyZXk6ICAgICAgICAgICAgICAgICAgICAgICAgICAjODg4ODg4ICFkZWZhdWx0O1xuJGxpZ2h0LWdyZXk6ICAgICAgICAgICAgICAgICAgICAjOTk5OTk5ICFkZWZhdWx0OyBcbiRkYXJrLWdyZWVuOiAgICAgICAgICAgICAgICAgICAgIzBiNWU0NiAhZGVmYXVsdDsgXG5cblxuXG5cblxuLy8gdGhlbWUgY29sb3JzcmdiYSgwLCAwLCAwLCAwLjYwKVxuJHRoZW1lLWNvbG9yczogKFxuICAgIFwicHJpbWFyeVwiOiAgICAgICRwcmltYXJ5LFxuICAgIFwic2Vjb25kYXJ5XCI6ICAgICRzZWNvbmRhcnksICAgICAgIFxuICAgIFwidGVydGlhcnlcIjogICAgICR0ZXJ0aWFyeSwgICAgICAgXG4gICBcblxuICAgIFwiZGFuZ2VyXCI6ICAgICAgICRkYW5nZXIsXG4gICAgXCJ3YXJuaW5nXCI6ICAgICAgJHdhcm5pbmcsXG4gICAgXCJzdWNjZXNzXCI6ICAgICAgJHN1Y2Nlc3MsXG5cbiAgICBcImJsYWNrXCI6ICAgICAgICAkYmxhY2ssICBcbiAgICBcIndoaXRlXCI6ICAgICAgICAkd2hpdGUsXG4gICAgXCJsaWdodFwiOiAgICAgICAgJGxpZ2h0LFxuICAgIFwiZ3JleVwiOiAgICAgICAgICRncmV5LFxuICAgIFwibGlnaHQtZ3JleVwiOiAgICRsaWdodC1ncmV5LFxuICAgIFwiZGFyay1ncmVlblwiOiAgICRkYXJrLWdyZWVuLFxuXG4pICFkZWZhdWx0O1xuXG5cbi8vIGZvbnQgc2l6ZVxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAyLjVyZW0gIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgIDEuMTI1cmVtICFkZWZhdWx0O1xuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAwLjg3NXJlbSAhZGVmYXVsdDtcbiRmb250LXNpemUteHM6ICAgICAgICAgICAgICAgICAgMC43NXJlbSAhZGVmYXVsdDtcbiRmb250LXNpemVzOiAoXG4gICAgMTogJGgxLWZvbnQtc2l6ZSxcbiAgICAyOiAkaDItZm9udC1zaXplLFxuICAgIDM6ICRoMy1mb250LXNpemUsXG4gICAgNDogJGg0LWZvbnQtc2l6ZSxcbiAgICA1OiAkaDUtZm9udC1zaXplLFxuICAgIDY6ICRoNi1mb250LXNpemUsXG4gICAgNzogJGZvbnQtc2l6ZS1zbSxcbiAgICA4OiAkZm9udC1zaXplLXhzLFxuKSAhZGVmYXVsdDtcblxuLy8gZm9udCB3ZWlnaHRcbiRmb250LXdlaWdodC1saWdodGVyOiAyMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6IDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1yZWd1bGFyOiA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbWVkaXVtOiA1MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDYwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiA3MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiA4MDAgIWRlZmF1bHQ7XG5cbi8vIHNwYWNpbmdcbiRzcGFjZXI6ICAgICAgICAgICAgICAgICAgICAgICAgMXJlbTtcbiRoZWFkZXJIdDogICAgICAgICAgICAgICAgICAgICAgMTI1cHg7XG5cbi8vIGNvbnRhaW5lciB3aWR0aFxuJGNvbnRhaW5lci1tYXgtd2lkdGg6ICAgICAgICAgICAxNDQwcHg7XG5cbi8vIGJvcmRlciByYWRpdXNcbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgJHNwYWNlciAqIDAuMyAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgJHNwYWNlciAqIDAuNCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgJHNwYWNlciAqIDAuNSFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMteGw6ICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtcGlsbDogICAgICAgICAgICAkc3BhY2VyICogNTAgIWRlZmF1bHQ7XG5cbi8vIEZvbnRzXG4kZm9udC1mYW1pbHktcHJpbWFyeTogICAgICAgICAgICdFYXN0U2VhRG9rZG8nLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LXNlY29uZGFyeTogICAgICAgICAgICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcblxuXG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAwLjg3NXJlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICAgMS4xMjVyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLXhsOiAgICAgICAgICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgICAgMS40O1xuJGZvbnQtd2VpZ2h0LWJhc2U6ICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbGlnaHQgIWRlZmF1bHQ7XG5cbi8vIHRyYW5zaXRpb25cbiR0cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICAgYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuXG4vLyBicmVha3BvaW50c1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHhzOiAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gIG1pbmk6ICAgICAgICAgICAgICAgICAgICAgICAzMDBweCxcbiAgbWluOiAgICAgICAgICAgICAgICAgICAgICAgIDM2MHB4LFxuICB4czogICAgICAgICAgICAgICAgICAgICAgICAgNDEwcHgsXG4gIHNtOiAgICAgICAgICAgICAgICAgICAgICAgICA1NzZweCxcbiAgbWQ6ICAgICAgICAgICAgICAgICAgICAgICAgIDc2OHB4LFxuICBsZzogICAgICAgICAgICAgICAgICAgICAgICAgMTAyNXB4LFxuICB4bDogICAgICAgICAgICAgICAgICAgICAgICAgMTIwMHB4LFxuICB4eGw6ICAgICAgICAgICAgICAgICAgICAgICAgMTQ0MHB4LFxuKSAhZGVmYXVsdDtcblxuLy8gRm9ybXNcbiRpbnB1dC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgJHNwYWNlciAqIDAuODc1ICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteDogICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAkZm9udC1mYW1pbHktcHJpbWFyeSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemU6ICAgICAgICAgICAgICAgJGg1LWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodDogICAgICAgICAgICAgMS4yICFkZWZhdWx0O1xuJGlucHV0LWRpc2FibGVkLWJnOiAgICAgICAgICAgICAkZ3JleSAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1iZzogICAgICAgICAgICAgICAgJGdyZXkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICRncmV5ICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICBub25lICFkZWZhdWx0O1xuJGlucHV0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtY29sb3I6ICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgMnB4ICFkZWZhdWx0O1xuJGlucHV0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAgICAgICAkdGVydGlhcnkgIWRlZmF1bHQ7XG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAycHggIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sICRpbnB1dC1wYWRkaW5nLXkgKiAyKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZjogICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC41ZW0sICRpbnB1dC1wYWRkaW5nLXkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1xdWFydGVyOiAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjI1ZW0sICRpbnB1dC1wYWRkaW5nLXkgKiAuNSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15ICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuXG5cbi8vIGJ0blxuJGJ0bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICogMC43NSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14OiAgICAgICAgICAgICAgICAgJHNwYWNlciAqIDEgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgIDVweCAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgMnB4ICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgICAwLjQgIWRlZmF1bHQ7XG5cbi8vIGJveCBzaGFhZG93XG4kYm94LXNoYWRvdy14czogMHB4IDJweCA1cHggcmdiYSg3MiwgMTAxLCAxMjksIDAuMSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1zbTogMHB4IDRweCAxMHB4IHJnYmEoNzEsIDE2MywgMjQzLCAwLjE1KSwgMHB4IDJweCAxMXB4IHJnYmEoMTYzLCAxODMsIDIzNiwgMC4yMSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1tZDogMHB4IDRweCA0NnB4IHJnYmEoNzEsIDE2MywgMjQzLCAwLjE1KSwgMHB4IDJweCAxMXB4IHJnYmEoMTYzLCAxODMsIDIzNiwgMC4yMSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1sZzogMHB4IDRweCA5MXB4IHJnYmEoMjU1LCAxMzksIDkxLCAwLjE1KSwgMHB4IDJweCA1MHB4IHJnYmEoMTA3LCAzMSwgMCwgMC4wNikgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy14bDogMHB4IDhweCAxMDBweCByZ2JhKDcyLCAxMDEsIDEyOSwgMC4xNSksIDBweCA0cHggNDVweCByZ2JhKDcyLCAxMDEsIDEyOSwgMC4wOCkgIWRlZmF1bHQ7XG5cblxuLy8gb2JqZWN0IHN0eWxlXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICRzZWNvbmRhcnk7XG4kb2JqZWN0LXNpemUtc3RhcnQ6IDU7XG4kb2JqZWN0LXNpemUtZW5kOiAxMDAwO1xuJG9iamVjdC1zaXplczogXCJcIjtcbkBmb3IgJGkgZnJvbSAkb2JqZWN0LXNpemUtc3RhcnQgKyA1IHRocm91Z2ggJG9iamVjdC1zaXplLWVuZCB7XG4gICRvYmplY3Qtc2l6ZXM6IGFwcGVuZCgkb2JqZWN0LXNpemVzLCAkaSwgY29tbWEpO1xuICAkb2JqZWN0LXNpemVzOiBzZXQtbnRoKCRvYmplY3Qtc2l6ZXMsIDEsICRvYmplY3Qtc2l6ZS1zdGFydCk7XG59XG4iLCJAbWl4aW4geHMtdXAge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzZweCkgeyBAY29udGVudDsgfVxufVxuQG1peGluIHNtLXVwIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHsgQGNvbnRlbnQ7IH1cbn1cbkBtaXhpbiBtZC11cCB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7IEBjb250ZW50OyB9XG59XG5AbWl4aW4gbGctdXAge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgeyBAY29udGVudDsgfVxufVxuQG1peGluIHhsLXVwIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7IEBjb250ZW50OyB9XG59XG5AbWl4aW4geHhsLXVwIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ5OXB4KSB7IEBjb250ZW50OyB9XG59XG5cbkBtaXhpbiB4cy1kb3duIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHsgQGNvbnRlbnQ7IH1cbn1cbkBtaXhpbiBzbS1kb3duIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHsgQGNvbnRlbnQ7IH1cbn1cbkBtaXhpbiBtZC1kb3duIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHsgQGNvbnRlbnQ7IH1cbn1cbkBtaXhpbiBsZy1kb3duIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7IEBjb250ZW50OyB9XG59XG5AbWl4aW4geGwtZG93biB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkgeyBAY29udGVudDsgfVxufVxuQG1peGluIHh4bC1kb3duIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ5OXB4KSB7IEBjb250ZW50OyB9XG59XG5cbkBtaXhpbiByZXNwb25zaXZlIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7IEBjb250ZW50OyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
                    });
                }


                /***/
            }),

        /***/
        39147:
            /*!*****************************************************!*\
              !*** ./src/app/modals/connect/connect.component.ts ***!
              \*****************************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    ConnectComponent: () => ( /* binding */ ConnectComponent)
                    /* harmony export */
                });
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ 61699);
                /* harmony import */
                var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ngx-bootstrap/modal */ 27269);
                /* harmony import */
                var src_app_services_wallet_connect_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! src/app/services/wallet-connect.service */ 14052);
                /* harmony import */
                var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/cdk/platform */ 73274);
                /* harmony import */
                var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common */ 26575);
                /* harmony import */
                var angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! angular-svg-icon */ 38848);
                /* harmony import */
                var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @ngx-translate/core */ 21916);







                const _c0 = function() {
                    return {
                        "width.px": 14,
                        "height.px": 14
                    };
                };

                function ConnectComponent_div_1_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "misc.connect_wallet");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg-icon", 6);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_div_1_Template_svg_icon_click_4_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
                            const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.modalRef.hide());
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
                    }
                }
                const _c1 = function() {
                    return {
                        "width.px": 32,
                        "height.px": 32
                    };
                };
                const _c2 = function() {
                    return {
                        "width.px": 20,
                        "height.px": 19,
                        "margin-right.px": 5
                    };
                };

                function ConnectComponent_div_2_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "button", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_div_2_Template_button_click_1_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
                            const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.connectWallet("wallet"));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "popup.wallet_connect");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "svg-icon", 10);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_div_2_Template_button_click_5_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
                            const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                            const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
                            ctx_r10.openBestWallet(_r4);
                            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.connectWallet("bw"));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "misc.best_wallet");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 11);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 12);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_div_2_Template_button_click_9_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
                            const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.connectWallet("metamask"));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "popup.metamask");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "svg-icon", 13);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_div_2_Template_button_click_13_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
                            const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.connectWallet("coinbase"));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 9);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "popup.coinbase_connect");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "svg-icon", 14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 15)(18, "button", 16);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "svg-icon", 17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "popup.no_wallet");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 19);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_div_2_Template_button_click_22_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
                            const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                            const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
                            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.openBestWallet(_r4));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "svg-icon", 17);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 18);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "popup.no_wallet");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c2));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c2));
                    }
                }
                const _c3 = function() {
                    return {
                        "width.px": 9,
                        "height.px": 16
                    };
                };

                function ConnectComponent_div_3_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "svg-icon", 20);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_div_3_Template_svg_icon_click_1_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
                            const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.step = 0);
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "popup.get_wallet");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg-icon", 21);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_div_3_Template_svg_icon_click_4_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);
                            const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.modalRef.hide());
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c3));
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
                    }
                }
                const _c4 = function() {
                    return {
                        "width.px": 13,
                        "height.px": 12
                    };
                };

                function ConnectComponent_div_4_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 22)(2, "div", 23)(3, "div", 24)(4, "div", 25)(5, "div", 26)(6, "div", 27)(7, "div", 28)(8, "div", 29);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "svg-icon", 30);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 24)(11, "div", 31)(12, "div", 32)(13, "div", 33)(14, "div", 34)(15, "div", 35);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "svg-icon", 36);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 24)(18, "div", 37)(19, "div", 38)(20, "div", 39)(21, "div", 40)(22, "div", 41);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "svg-icon", 42);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 24)(25, "div", 43)(26, "div", 44)(27, "div", 45)(28, "div", 46)(29, "div", 47);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "svg-icon", 48);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 24)(32, "div", 49)(33, "div", 50)(34, "div", 51)(35, "div", 52)(36, "div", 53);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "svg-icon", 54);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 55);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "svg-icon", 56);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 57)(41, "h5", 58);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "popup.exploring_web");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p", 59);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "popup.exploring_des");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 60)(46, "span", 61);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "popup.choose_first_wallet");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "svg-icon", 62);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](48);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c4));
                    }
                }

                function ConnectComponent_ng_template_5_Template(rf, ctx) {
                    if (rf & 1) {
                        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63)(1, "div", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 64);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "popup.need_wallet");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg-icon", 65);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_ng_template_5_Template_svg_icon_click_5_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
                            const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.modalRef.hide());
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 66)(7, "div", 67);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "popup.install_app");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 68);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "popup.install_app_mob");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 69)(12, "div", 70)(13, "div", 71);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 72);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 73)(16, "button", 74);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " popup.download_bw ");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 75);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "popup.already_have");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 76);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "popup.hit_btn_connect");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 77);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_ng_template_5_Template_button_click_22_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
                            const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.connectWallet("walletBW"));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 78);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "misc.connect_wallet");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 79);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_ng_template_5_Template_button_click_25_listener() {
                            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
                            const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
                            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.connectWallet("bw"));
                        });
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 78);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "misc.connect_wallet");
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
                    }
                }
                class ConnectComponent {
                    modalService;
                    modalRef;
                    walletConnectService;
                    platform;
                    step = 0;
                    isBsNetwork = false;
                    isAndroid = false;
                    isIos = false;
                    constructor(modalService, modalRef, walletConnectService, platform) {
                        this.modalService = modalService;
                        this.modalRef = modalRef;
                        this.walletConnectService = walletConnectService;
                        this.platform = platform;
                        this.isAndroid = this.platform.ANDROID;
                        this.isIos = this.platform.IOS;
                    }
                    ngOnInit() {}
                    connectWallet(mode) {
                        this.walletConnectService.connectWallet(mode, this.isBsNetwork);
                        this.modalRef.hide();
                    }
                    openBestWallet(template) {
                        this.modalRef.hide();
                        setTimeout(() => {
                            this.modalRef = this.modalService.show(template, {
                                class: 'modal-md modal-dialog-centered',
                                backdrop: 'static'
                            });
                        }, 500);
                    }
                    static ɵfac = function ConnectComponent_Factory(t) {
                        return new(t || ConnectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__.BsModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_wallet_connect_service__WEBPACK_IMPORTED_MODULE_0__.WalletConnectService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__.Platform));
                    };
                    static ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
                        type: ConnectComponent,
                        selectors: [
                            ["app-connect"]
                        ],
                        decls: 7,
                        vars: 4,
                        consts: [
                            [1, "p-4", "connect"],
                            ["class", "d-flex justify-content-between align-items-center", 4, "ngIf"],
                            ["class", "mt-4 content", 4, "ngIf"],
                            ["bestwallet", ""],
                            [1, "d-flex", "justify-content-between", "align-items-center"],
                            ["translate", "", 1, "text-center", "fs-3", "m-0", "text-white"],
                            ["src", "/assets/images/svg-icons/close-white.svg", 1, "cursor-pointer", 3, "svgStyle", "click"],
                            [1, "mt-4", "content"],
                            ["type", "button", 1, "btn", "btn-sm", "border-0", "rounded-1", "bg-tertiary", "py-2", "px-3", "btn-light", "w-100", "d-flex", "justify-content-between", "align-items-center", "mb-3", 3, "click"],
                            ["translate", "", 1, "fs-5", "d-inline-block", "text-black"],
                            ["src", "/assets/images/svg-icons/wallet.svg", 3, "svgStyle"],
                            ["src", "/assets/images/bw.png", "height", "32", "width", "32", "alt", ""],
                            ["type", "button", 1, "btn", "btn-sm", "border-0", "rounded-1", "bg-tertiary", "py-2", "px-3", "btn-light", "w-100", "d-none", "d-md-flex", "justify-content-between", "align-items-center", "mb-3", 3, "click"],
                            ["src", "/assets/images/svg-icons/metamask.svg", 3, "svgStyle"],
                            ["src", "/assets/images/svg-icons/coinbase.svg", 3, "svgStyle"],
                            ["href", "https://best.sng.link/Dnio2/z1mje?_smtype=3", "target", "_blank", 1, "d-block", "d-md-none"],
                            ["type", "button", 1, "btn", "btn-clear", "w-100", "d-flex", "justify-content-center", "align-items-center", "aniBtn"],
                            ["src", "/assets/images/svg-icons/ani-wallet.svg", 3, "svgStyle"],
                            ["translate", "", 1, "d-inline-block", "text-light"],
                            ["type", "button", 1, "d-none", "btn", "btn-clear", "w-100", "d-md-flex", "justify-content-center", "align-items-center", "aniBtn", 3, "click"],
                            ["src", "/assets/images/svg-icons/back.svg", 1, "cursor-pointer", "white", 3, "svgStyle", "click"],
                            ["src", "/assets/images/svg-icons/close-white.svg", 1, "cursor-pointer", "white", 3, "svgStyle", "click"],
                            [1, "hoHHXf"],
                            [1, "sc-fLcnxK", "fWzKsv"],
                            [1, "sc-ezOQGI", "cSaAIp"],
                            ["data-projection-id", "1250", 1, "sc-iveFHk", "jBAplQ"],
                            ["data-projection-id", "1251", 1, "sc-cwSeag", "fsywKZ"],
                            ["data-projection-id", "1252", 1, "sc-iJnaPW", "iUmxfL"],
                            ["data-projection-id", "1253", 1, "sc-gikAfH", "evkwbC"],
                            ["data-projection-id", "1254", 1, "sc-lllmON", "bPXKDV"],
                            ["src", "/assets/images/svg-icons/animated/1.svg"],
                            ["data-projection-id", "1256", 1, "sc-iveFHk", "jBAplQ"],
                            ["data-projection-id", "1257", 1, "sc-cwSeag", "fsywKZ"],
                            ["data-projection-id", "1258", 1, "sc-iJnaPW", "iUmxfL"],
                            ["data-projection-id", "1259", 1, "sc-gikAfH", "evkwbC"],
                            ["data-projection-id", "1260", 1, "sc-lllmON", "bPXKDV"],
                            ["src", "/assets/images/svg-icons/animated/2.svg"],
                            ["data-projection-id", "1262", 1, "sc-iveFHk", "jBAplQ"],
                            ["data-projection-id", "1263", 1, "sc-cwSeag", "fsywKZ"],
                            ["data-projection-id", "1264", 1, "sc-iJnaPW", "iUmxfL"],
                            ["data-projection-id", "1265", 1, "sc-gikAfH", "evkwbC"],
                            ["data-projection-id", "1266", 1, "sc-lllmON", "bPXKDV"],
                            ["src", "/assets/images/svg-icons/animated/3.svg"],
                            ["data-projection-id", "1268", 1, "sc-iveFHk", "jBAplQ"],
                            ["data-projection-id", "1269", 1, "sc-cwSeag", "fsywKZ"],
                            ["data-projection-id", "1270", 1, "sc-iJnaPW", "iUmxfL"],
                            ["data-projection-id", "1271", 1, "sc-gikAfH", "evkwbC"],
                            ["data-projection-id", "1272", 1, "sc-lllmON", "bPXKDV"],
                            ["src", "/assets/images/svg-icons/animated/4.svg"],
                            ["data-projection-id", "1274", 1, "sc-iveFHk", "jBAplQ"],
                            ["data-projection-id", "1275", 1, "sc-cwSeag", "fsywKZ"],
                            ["data-projection-id", "1276", 1, "sc-iJnaPW", "iUmxfL"],
                            ["data-projection-id", "1277", 1, "sc-gikAfH", "evkwbC"],
                            ["data-projection-id", "1278", 1, "sc-lllmON", "bPXKDV"],
                            ["src", "/assets/images/svg-icons/animated/5.svg"],
                            [1, "sc-bBABsx", "jLseHP"],
                            ["src", "/assets/images/svg-icons/animated/bg.svg"],
                            [1, "text-center"],
                            ["translate", "", 1, "text-light"],
                            ["translate", "", 1, "mt-3", "text-light"],
                            ["type", "button", "href", "https://ethereum.org/en/wallets/find-wallet/", "target", "_blank", 1, "btn", "btn-sm", "btn-secondary", "w-100", "d-flex", "justify-content-center", "align-items-center", "mt-4", "text-light"],
                            ["translate", "", 1, "d-inline-block", "me-2"],
                            ["src", "/assets/images/svg-icons/ani-arrow.svg", 1, "arrow", 3, "svgStyle"],
                            [1, "p-4", "connect", "text-light"],
                            ["translate", "", 1, "text-center", "fw-semibold", "font-28", "m-0"],
                            ["src", "/assets/images/svg-icons/close.svg", 1, "cursor-pointer", 3, "svgStyle", "click"],
                            [1, "mt-4", "content", "d-flex", "flex-column", "align-items-center", "justify-content-between"],
                            ["translate", "", 1, "text-center", "d-none", "d-md-block", "pb-2"],
                            ["translate", "", 1, "text-center", "d-block", "d-md-none", "pb-2"],
                            [1, "d-flex", "align-items-center", "justify-content-around"],
                            [1, "d-flex", "flex-column", "align-items-center", "mt-2"],
                            [1, "qr-div", "d-none", "d-md-flex", "flex-column", "align-items-center", "bg-white", "p-3"],
                            ["src", "/assets/images/qr.svg", "alt", "qr", "loading", "lazy", "height", "300", "width", "300", 1, "qr-img"],
                            ["href", "https://best.sng.link/Dnio2/z1mje?_smtype=3", "target", "_blank", 1, "mt-2", "d-md-none", "w-100", "d-flex", "align-items-center", "justify-content-center"],
                            ["type", "button", "translate", "", 1, "btn", "btn-secondary", "border-white", "py-2", "px-3", "w-50", "d-flex", "justify-content-center", "align-items-center", "d-block", "d-md-none"],
                            ["translate", "", 1, "text-center", "fw-semibold", "my-3", "fs-4"],
                            ["translate", "", 1, "text-center", "mb-3"],
                            ["type", "button", 1, "btn", "btn-secondary", "border-white", "py-2", "px-3", "w-50", "d-flex", "justify-content-center", "align-items-center", "mb-3", "d-none", "d-md-block", 3, "click"],
                            ["translate", "", 1, "d-inline-block"],
                            ["type", "button", 1, "btn", "btn-secondary", "border-white", "py-2", "px-3", "w-50", "d-flex", "justify-content-center", "align-items-center", "mb-3", "d-block", "d-md-none", 3, "click"]
                        ],
                        template: function ConnectComponent_Template(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ConnectComponent_div_1_Template, 5, 2, "div", 1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ConnectComponent_div_2_Template, 26, 10, "div", 2);
                                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ConnectComponent_div_3_Template, 5, 4, "div", 1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ConnectComponent_div_4_Template, 49, 2, "div", 2);
                                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ConnectComponent_ng_template_5_Template, 28, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
                            }
                            if (rf & 2) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step === 0);
                                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step === 0);
                                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step === 1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.step === 1);
                            }
                        },
                        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__.SvgIconComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateDirective],
                        styles: ["@keyframes _ngcontent-%COMP%_iJJxDF {\n  0% {\n    opacity: 0;\n    transform: scale(0) translateY(40%);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_fFCEAC {\n  0%, 100% {\n    transform: none;\n  }\n  50% {\n    transform: translateY(-10%);\n  }\n}\n@keyframes _ngcontent-%COMP%_hfwTSV {\n  0%, 100% {\n    transform: rotate(-3deg);\n  }\n  50% {\n    transform: rotate(3deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_FUkhV {\n  0% {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n  }\n}\n.content[_ngcontent-%COMP%] {\n  transition: all 0.6s ease-out;\n}\n.content[_ngcontent-%COMP%]   .aniBtn[_ngcontent-%COMP%] {\n  transition: color 200ms ease-out 0s, transform 200ms ease-out 0s;\n  color: #ffffff;\n  border: 1px solid rgba(255, 255, 255, 0.168627451);\n}\n.content[_ngcontent-%COMP%]   .aniBtn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: all 100ms ease-out 0s;\n  display: block;\n  position: relative;\n  top: 2px;\n  left: -1px;\n  transform: translateZ(0px);\n}\n.content[_ngcontent-%COMP%]   .aniBtn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:last-of-type {\n  transform-origin: 0px 0px;\n  transform: scaleX(1.3) skewY(-12deg);\n  opacity: 0;\n}\n.content[_ngcontent-%COMP%]   .aniBtn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .aniBtn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  transition: all 100ms ease-out 0s;\n}\n.content[_ngcontent-%COMP%]   .aniBtn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  transform: translate(20%, -15%);\n}\n.content[_ngcontent-%COMP%]   .aniBtn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .aniBtn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: none;\n}\n.content[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.content[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 16px auto 20px;\n  height: 190px;\n  max-width: 295px;\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0px;\n  z-index: 2;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0px;\n  animation: 750ms cubic-bezier(0.19, 1, 0.22, 1) 0s 1 normal both running _ngcontent-%COMP%_iJJxDF;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]   .sc-cwSeag[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%);\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]   .fsywKZ[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]   .jBAplQ[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0px;\n  animation-duration: 0s;\n  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);\n  animation-iteration-count: infinite;\n  animation-direction: normal;\n  animation-fill-mode: both;\n  animation-play-state: running;\n  animation-name: none;\n  animation-delay: inherit;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]   .iUmxfL[_ngcontent-%COMP%] {\n  position: relative;\n  animation: 3600ms cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite normal both running _ngcontent-%COMP%_fFCEAC;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]   .evkwbC[_ngcontent-%COMP%] {\n  position: relative;\n  animation: 3200ms cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s infinite normal both running _ngcontent-%COMP%_hfwTSV;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]   .bPXKDV[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  height: 58px;\n  width: 58px;\n  border-radius: 13.84px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.03) 0px 2px 20px 0px;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]   .bPXKDV[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(1) {\n  z-index: 2;\n  animation-delay: 0ms;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(1)   .sc-iveFHk[_ngcontent-%COMP%] {\n  transform: translate(50%, 50%);\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(1)   .sc-iveFHk[_ngcontent-%COMP%]   .sc-lllmON[_ngcontent-%COMP%] {\n  border-radius: 17.2px;\n  width: 72px;\n  height: 72px;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(1)   .sc-iJnaPW[_ngcontent-%COMP%] {\n  animation-delay: -200ms;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(1)   .sc-gikAfH[_ngcontent-%COMP%] {\n  animation-delay: 0ms;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(2) {\n  z-index: 1;\n  animation-delay: 60ms;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(2)   .sc-iveFHk[_ngcontent-%COMP%] {\n  transform: translate(21%, 21.5%);\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(2)   .sc-iJnaPW[_ngcontent-%COMP%] {\n  animation-delay: -600ms;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(2)   .sc-gikAfH[_ngcontent-%COMP%] {\n  animation-delay: -600ms;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(3) {\n  z-index: 1;\n  animation-delay: 30ms;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(3)   .sc-iveFHk[_ngcontent-%COMP%] {\n  transform: translate(78%, 14%);\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(3)   .sc-iJnaPW[_ngcontent-%COMP%] {\n  animation-delay: -800ms;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(3)   .sc-gikAfH[_ngcontent-%COMP%] {\n  animation-delay: -1200ms;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(4) {\n  z-index: 1;\n  animation-delay: 90ms;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(4)   .sc-iveFHk[_ngcontent-%COMP%] {\n  transform: translate(22.5%, 76%);\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(4)   .sc-iJnaPW[_ngcontent-%COMP%] {\n  animation-delay: -300ms;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(4)   .sc-gikAfH[_ngcontent-%COMP%] {\n  animation-delay: -1800ms;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(5) {\n  z-index: 1;\n  animation-delay: 120ms;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(5)   .sc-iveFHk[_ngcontent-%COMP%] {\n  transform: translate(76%, 80%);\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(5)   .sc-iJnaPW[_ngcontent-%COMP%] {\n  animation-delay: -3200ms;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .fWzKsv[_ngcontent-%COMP%]   .cSaAIp[_ngcontent-%COMP%]:nth-child(5)   .sc-gikAfH[_ngcontent-%COMP%] {\n  animation-delay: -2400ms;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .jLseHP[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  inset: -2px 0px 0px;\n  overflow: hidden;\n  animation: 1000ms ease 100ms 1 normal both running _ngcontent-%COMP%_FUkhV;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .jLseHP[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n.content[_ngcontent-%COMP%]   .hoHHXf[_ngcontent-%COMP%]   .jLseHP[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  background-size: 100%;\n  inset: 0px;\n}\n\n.connect[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kYWxzL2Nvbm5lY3QvY29ubmVjdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQ0FBQTtFQURGO0VBSUE7SUFDRSxVQUFBO0lBQ0EsZUFBQTtFQUZGO0FBQ0Y7QUFLQTtFQUVFO0lBRUUsZUFBQTtFQUxGO0VBUUE7SUFDRSwyQkFBQTtFQU5GO0FBQ0Y7QUFTQTtFQUVFO0lBRUUsd0JBQUE7RUFURjtFQVlBO0lBQ0UsdUJBQUE7RUFWRjtBQUNGO0FBYUE7RUFDRTtJQUNFLFVBQUE7SUFDQSxxQkFBQTtFQVhGO0VBY0E7SUFDRSxVQUFBO0lBQ0EsZUFBQTtFQVpGO0FBQ0Y7QUFlQTtFQUNFLDZCQUFBO0FBYkY7QUFlRTtFQUNFLGdFQUFBO0VBQ0EsY0M1QzRCO0VENkM1QixrREFBQTtBQWJKO0FBZUk7RUFDRSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUFiTjtBQWVNO0VBQ0UseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7QUFiUjtBQWdCTTs7RUFFRSxpQ0FBQTtBQWRSO0FBaUJNO0VBQ0UsK0JBQUE7QUFmUjtBQXNCTTs7RUFFRSxVQUFBO0VBQ0EsZUFBQTtBQXBCUjtBQXlCRTtFQUNFLGNDbkY0QjtBRDREaEM7QUEwQkU7RUFDRSxjQ3ZGNEI7QUQrRGhDO0FBMkJFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQXpCSjtBQTRCSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUExQk47QUE0Qk07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwrRUFBQTtBQTFCUjtBQTRCUTtFQUNFLGdDQUFBO0FBMUJWO0FBNkJRO0VBQ0Usa0JBQUE7QUEzQlY7QUE4QlE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtFQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0FBNUJWO0FBK0JRO0VBQ0Usa0JBQUE7RUFDQSxnR0FBQTtBQTdCVjtBQWdDUTtFQUNFLGtCQUFBO0VBQ0EsZ0dBQUE7QUE5QlY7QUFpQ1E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFGQUFBO0FBL0JWO0FBaUNVO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBL0JaO0FBcUNNO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0FBbkNSO0FBcUNRO0VBQ0UsOEJBQUE7QUFuQ1Y7QUFxQ1U7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBbkNaO0FBdUNRO0VBQ0UsdUJBQUE7QUFyQ1Y7QUF3Q1E7RUFDRSxvQkFBQTtBQXRDVjtBQTBDTTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQXhDUjtBQTBDUTtFQUNFLGdDQUFBO0FBeENWO0FBMkNRO0VBQ0UsdUJBQUE7QUF6Q1Y7QUE0Q1E7RUFDRSx1QkFBQTtBQTFDVjtBQThDTTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQTVDUjtBQThDUTtFQUNFLDhCQUFBO0FBNUNWO0FBK0NRO0VBQ0UsdUJBQUE7QUE3Q1Y7QUFnRFE7RUFDRSx3QkFBQTtBQTlDVjtBQWtETTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQWhEUjtBQWtEUTtFQUNFLGdDQUFBO0FBaERWO0FBbURRO0VBQ0UsdUJBQUE7QUFqRFY7QUFvRFE7RUFDRSx3QkFBQTtBQWxEVjtBQXNETTtFQUNFLFVBQUE7RUFDQSxzQkFBQTtBQXBEUjtBQXNEUTtFQUNFLDhCQUFBO0FBcERWO0FBdURRO0VBQ0Usd0JBQUE7QUFyRFY7QUF3RFE7RUFDRSx3QkFBQTtBQXREVjtBQTJESTtFQUVFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3REFBQTtBQTFETjtBQTRETTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTFEUjtBQTZETTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQVVBLHFCQUFBO0VBQ0EsVUFBQTtBQXBFUjs7QUEwRUE7RUFFRSxtQkFBQTtBQXhFRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvdmFyaWFibGVzXCI7XG5cbkBrZXlmcmFtZXMgaUpKeERGIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGVZKDQwJSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZGQ0VBQyB7XG5cbiAgMCUsXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgaGZ3VFNWIHtcblxuICAwJSxcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIEZVa2hWIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLmNvbnRlbnQge1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLW91dDtcblxuICAuYW5pQnRuIHtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLW91dCAwcywgdHJhbnNmb3JtIDIwMG1zIGVhc2Utb3V0IDBzO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjJiO1xuXG4gICAgc3ZnIHtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLW91dCAwcztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAycHg7XG4gICAgICBsZWZ0OiAtMXB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCk7XG5cbiAgICAgIHBhdGg6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMHB4IDBweDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4zKSBza2V3WSgtMTJkZWcpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuXG4gICAgICBwYXRoLFxuICAgICAgY2lyY2xlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2Utb3V0IDBzO1xuICAgICAgfVxuXG4gICAgICBjaXJjbGUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMCUsIC0xNSUpO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgLy8gY29sb3I6ICRzZWNvbmRhcnk7XG5cbiAgICAgIHN2ZyBwYXRoLFxuICAgICAgc3ZnIGNpcmNsZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAud2hpdGUge1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gIH1cblxuICAuYXJyb3cge1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gIH1cblxuICAuaG9ISFhmIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAxNnB4IGF1dG8gMjBweDtcbiAgICBoZWlnaHQ6IDE5MHB4O1xuICAgIG1heC13aWR0aDogMjk1cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLy8gYmFja2dyb3VuZDogJGxpZ2h0O1xuXG4gICAgLmZXektzdiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBpbnNldDogMHB4O1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgLmNTYUFJcCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaW5zZXQ6IDBweDtcbiAgICAgICAgYW5pbWF0aW9uOiA3NTBtcyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSkgMHMgMSBub3JtYWwgYm90aCBydW5uaW5nIGlKSnhERjtcblxuICAgICAgICAuc2MtY3dTZWFnIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mc3l3S1oge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5qQkFwbFEge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBpbnNldDogMHB4O1xuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMHM7XG4gICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzLCAwLjUxNSwgMC45NTUpO1xuICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBub25lO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogaW5oZXJpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pVW14Zkwge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBhbmltYXRpb246IDM2MDBtcyBjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMsIDAuNTE1LCAwLjk1NSkgMHMgaW5maW5pdGUgbm9ybWFsIGJvdGggcnVubmluZyBmRkNFQUM7XG4gICAgICAgIH1cblxuICAgICAgICAuZXZrd2JDIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYW5pbWF0aW9uOiAzMjAwbXMgY3ViaWMtYmV6aWVyKDAuNDU1LCAwLjAzLCAwLjUxNSwgMC45NTUpIDBzIGluZmluaXRlIG5vcm1hbCBib3RoIHJ1bm5pbmcgaGZ3VFNWO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJQWEtEViB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICAgIHdpZHRoOiA1OHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEzLjg0cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMHB4IDBweCAxcHgsIHJnYmEoMCwgMCwgMCwgMC4wMykgMHB4IDJweCAyMHB4IDBweDtcblxuICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jU2FBSXA6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwbXM7XG5cbiAgICAgICAgLnNjLWl2ZUZIayB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xuXG4gICAgICAgICAgLnNjLWxsbG1PTiB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNy4ycHg7XG4gICAgICAgICAgICB3aWR0aDogNzJweDtcbiAgICAgICAgICAgIGhlaWdodDogNzJweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2MtaUpuYVBXIHtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0yMDBtcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zYy1naWtBZkgge1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMG1zO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jU2FBSXA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA2MG1zO1xuXG4gICAgICAgIC5zYy1pdmVGSGsge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIxJSwgMjEuNSUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjLWlKbmFQVyB7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtNjAwbXM7XG4gICAgICAgIH1cblxuICAgICAgICAuc2MtZ2lrQWZIIHtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC02MDBtcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY1NhQUlwOm50aC1jaGlsZCgzKSB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMzBtcztcblxuICAgICAgICAuc2MtaXZlRkhrIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3OCUsIDE0JSk7XG4gICAgICAgIH1cblxuICAgICAgICAuc2MtaUpuYVBXIHtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC04MDBtcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zYy1naWtBZkgge1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTEyMDBtcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuY1NhQUlwOm50aC1jaGlsZCg0KSB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogOTBtcztcblxuICAgICAgICAuc2MtaXZlRkhrIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMi41JSwgNzYlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zYy1pSm5hUFcge1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTMwMG1zO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjLWdpa0FmSCB7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMTgwMG1zO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jU2FBSXA6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxMjBtcztcblxuICAgICAgICAuc2MtaXZlRkhrIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3NiUsIDgwJSk7XG4gICAgICAgIH1cblxuICAgICAgICAuc2MtaUpuYVBXIHtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0zMjAwbXM7XG4gICAgICAgIH1cblxuICAgICAgICAuc2MtZ2lrQWZIIHtcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0yNDAwbXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuakxzZUhQIHtcbiAgICAgIC8vIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBpbnNldDogLTJweCAwcHggMHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGFuaW1hdGlvbjogMTAwMG1zIGVhc2UgMTAwbXMgMSBub3JtYWwgYm90aCBydW5uaW5nIEZVa2hWO1xuXG4gICAgICBzdmcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWFnZXMvc3ZnLWljb25zL2FuaW1hdGVkL2NvdmVyLnBuZykgMCAwL2NvdmVyO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbi15OiA7XG4gICAgICAgIC8vIGJhY2tncm91bmQtcmVwZWF0LXg6IDtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1yZXBlYXQteTogO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IDtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1vcmlnaW46IDtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jbGlwOiA7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgICBpbnNldDogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY29ubmVjdCB7XG4gIC8vIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAvLyBib3JkZXI6M3B4IHNvbGlkICR0ZXJ0aWFyeTtcbn1cbiIsIi8vIGNvbG9yc1xuJHByaW1hcnk6ICAgICAgICAgICAgICAgICAgICAgICAjMjkyOTI5ICFkZWZhdWx0O1xuJHNlY29uZGFyeTogICAgICAgICAgICAgICAgICAgICAjMmUzOTRkICFkZWZhdWx0O1xuJHRlcnRpYXJ5OiAgICAgICAgICAgICAgICAgICAgICAjYjljM2Q2ICFkZWZhdWx0O1xuXG5cbiRkYW5nZXI6ICAgICAgICAgICAgICAgICAgICAgICAgI2RiNDQzNyAhZGVmYXVsdDtcbiR3YXJuaW5nOiAgICAgICAgICAgICAgICAgICAgICAgI2UyODUxMyAhZGVmYXVsdDtcbiRzdWNjZXNzOiAgICAgICAgICAgICAgICAgICAgICAgIzA4YjY0ZCAhZGVmYXVsdDtcblxuJGJsYWNrOiAgICAgICAgICAgICAgICAgICAgICAgICAjMDAwMDAwICFkZWZhdWx0O1xuJHdoaXRlOiAgICAgICAgICAgICAgICAgICAgICAgICAjZmZmZmZmICFkZWZhdWx0O1xuJGxpZ2h0OiAgICAgICAgICAgICAgICAgICAgICAgICAjRkVGRUZFICFkZWZhdWx0O1xuJGdyZXk6ICAgICAgICAgICAgICAgICAgICAgICAgICAjODg4ODg4ICFkZWZhdWx0O1xuJGxpZ2h0LWdyZXk6ICAgICAgICAgICAgICAgICAgICAjOTk5OTk5ICFkZWZhdWx0OyBcbiRkYXJrLWdyZWVuOiAgICAgICAgICAgICAgICAgICAgIzBiNWU0NiAhZGVmYXVsdDsgXG5cblxuXG5cblxuLy8gdGhlbWUgY29sb3JzcmdiYSgwLCAwLCAwLCAwLjYwKVxuJHRoZW1lLWNvbG9yczogKFxuICAgIFwicHJpbWFyeVwiOiAgICAgICRwcmltYXJ5LFxuICAgIFwic2Vjb25kYXJ5XCI6ICAgICRzZWNvbmRhcnksICAgICAgIFxuICAgIFwidGVydGlhcnlcIjogICAgICR0ZXJ0aWFyeSwgICAgICAgXG4gICBcblxuICAgIFwiZGFuZ2VyXCI6ICAgICAgICRkYW5nZXIsXG4gICAgXCJ3YXJuaW5nXCI6ICAgICAgJHdhcm5pbmcsXG4gICAgXCJzdWNjZXNzXCI6ICAgICAgJHN1Y2Nlc3MsXG5cbiAgICBcImJsYWNrXCI6ICAgICAgICAkYmxhY2ssICBcbiAgICBcIndoaXRlXCI6ICAgICAgICAkd2hpdGUsXG4gICAgXCJsaWdodFwiOiAgICAgICAgJGxpZ2h0LFxuICAgIFwiZ3JleVwiOiAgICAgICAgICRncmV5LFxuICAgIFwibGlnaHQtZ3JleVwiOiAgICRsaWdodC1ncmV5LFxuICAgIFwiZGFyay1ncmVlblwiOiAgICRkYXJrLWdyZWVuLFxuXG4pICFkZWZhdWx0O1xuXG5cbi8vIGZvbnQgc2l6ZVxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAyLjVyZW0gIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kaDMtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgIDEuMTI1cmVtICFkZWZhdWx0O1xuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAwLjg3NXJlbSAhZGVmYXVsdDtcbiRmb250LXNpemUteHM6ICAgICAgICAgICAgICAgICAgMC43NXJlbSAhZGVmYXVsdDtcbiRmb250LXNpemVzOiAoXG4gICAgMTogJGgxLWZvbnQtc2l6ZSxcbiAgICAyOiAkaDItZm9udC1zaXplLFxuICAgIDM6ICRoMy1mb250LXNpemUsXG4gICAgNDogJGg0LWZvbnQtc2l6ZSxcbiAgICA1OiAkaDUtZm9udC1zaXplLFxuICAgIDY6ICRoNi1mb250LXNpemUsXG4gICAgNzogJGZvbnQtc2l6ZS1zbSxcbiAgICA4OiAkZm9udC1zaXplLXhzLFxuKSAhZGVmYXVsdDtcblxuLy8gZm9udCB3ZWlnaHRcbiRmb250LXdlaWdodC1saWdodGVyOiAyMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6IDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1yZWd1bGFyOiA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbWVkaXVtOiA1MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDYwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiA3MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiA4MDAgIWRlZmF1bHQ7XG5cbi8vIHNwYWNpbmdcbiRzcGFjZXI6ICAgICAgICAgICAgICAgICAgICAgICAgMXJlbTtcbiRoZWFkZXJIdDogICAgICAgICAgICAgICAgICAgICAgMTI1cHg7XG5cbi8vIGNvbnRhaW5lciB3aWR0aFxuJGNvbnRhaW5lci1tYXgtd2lkdGg6ICAgICAgICAgICAxNDQwcHg7XG5cbi8vIGJvcmRlciByYWRpdXNcbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgJHNwYWNlciAqIDAuMyAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgJHNwYWNlciAqIDAuNCAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgJHNwYWNlciAqIDAuNSFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMteGw6ICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtcGlsbDogICAgICAgICAgICAkc3BhY2VyICogNTAgIWRlZmF1bHQ7XG5cbi8vIEZvbnRzXG4kZm9udC1mYW1pbHktcHJpbWFyeTogICAgICAgICAgICdFYXN0U2VhRG9rZG8nLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LXNlY29uZGFyeTogICAgICAgICAgICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcblxuXG5cbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgICAwLjg3NXJlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICAgMS4xMjVyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLXhsOiAgICAgICAgICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgICAgMS40O1xuJGZvbnQtd2VpZ2h0LWJhc2U6ICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbGlnaHQgIWRlZmF1bHQ7XG5cbi8vIHRyYW5zaXRpb25cbiR0cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICAgYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuXG4vLyBicmVha3BvaW50c1xuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgeHhzOiAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gIG1pbmk6ICAgICAgICAgICAgICAgICAgICAgICAzMDBweCxcbiAgbWluOiAgICAgICAgICAgICAgICAgICAgICAgIDM2MHB4LFxuICB4czogICAgICAgICAgICAgICAgICAgICAgICAgNDEwcHgsXG4gIHNtOiAgICAgICAgICAgICAgICAgICAgICAgICA1NzZweCxcbiAgbWQ6ICAgICAgICAgICAgICAgICAgICAgICAgIDc2OHB4LFxuICBsZzogICAgICAgICAgICAgICAgICAgICAgICAgMTAyNXB4LFxuICB4bDogICAgICAgICAgICAgICAgICAgICAgICAgMTIwMHB4LFxuICB4eGw6ICAgICAgICAgICAgICAgICAgICAgICAgMTQ0MHB4LFxuKSAhZGVmYXVsdDtcblxuLy8gRm9ybXNcbiRpbnB1dC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgJHNwYWNlciAqIDAuODc1ICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteDogICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtZmFtaWx5OiAgICAgICAgICAgICAkZm9udC1mYW1pbHktcHJpbWFyeSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemU6ICAgICAgICAgICAgICAgJGg1LWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodDogICAgICAgICAgICAgMS4yICFkZWZhdWx0O1xuJGlucHV0LWRpc2FibGVkLWJnOiAgICAgICAgICAgICAkZ3JleSAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1iZzogICAgICAgICAgICAgICAgJGdyZXkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAgICAgICRncmV5ICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICBub25lICFkZWZhdWx0O1xuJGlucHV0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtY29sb3I6ICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgMnB4ICFkZWZhdWx0O1xuJGlucHV0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAgICAgICAkdGVydGlhcnkgIWRlZmF1bHQ7XG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAycHggIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sICRpbnB1dC1wYWRkaW5nLXkgKiAyKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZjogICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC41ZW0sICRpbnB1dC1wYWRkaW5nLXkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1xdWFydGVyOiAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjI1ZW0sICRpbnB1dC1wYWRkaW5nLXkgKiAuNSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0OiAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15ICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuXG5cbi8vIGJ0blxuJGJ0bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICogMC43NSAhZGVmYXVsdDtcbiRidG4tcGFkZGluZy14OiAgICAgICAgICAgICAgICAgJHNwYWNlciAqIDEgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgIDVweCAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgMnB4ICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgICAwLjQgIWRlZmF1bHQ7XG5cbi8vIGJveCBzaGFhZG93XG4kYm94LXNoYWRvdy14czogMHB4IDJweCA1cHggcmdiYSg3MiwgMTAxLCAxMjksIDAuMSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1zbTogMHB4IDRweCAxMHB4IHJnYmEoNzEsIDE2MywgMjQzLCAwLjE1KSwgMHB4IDJweCAxMXB4IHJnYmEoMTYzLCAxODMsIDIzNiwgMC4yMSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1tZDogMHB4IDRweCA0NnB4IHJnYmEoNzEsIDE2MywgMjQzLCAwLjE1KSwgMHB4IDJweCAxMXB4IHJnYmEoMTYzLCAxODMsIDIzNiwgMC4yMSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1sZzogMHB4IDRweCA5MXB4IHJnYmEoMjU1LCAxMzksIDkxLCAwLjE1KSwgMHB4IDJweCA1MHB4IHJnYmEoMTA3LCAzMSwgMCwgMC4wNikgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy14bDogMHB4IDhweCAxMDBweCByZ2JhKDcyLCAxMDEsIDEyOSwgMC4xNSksIDBweCA0cHggNDVweCByZ2JhKDcyLCAxMDEsIDEyOSwgMC4wOCkgIWRlZmF1bHQ7XG5cblxuLy8gb2JqZWN0IHN0eWxlXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICRzZWNvbmRhcnk7XG4kb2JqZWN0LXNpemUtc3RhcnQ6IDU7XG4kb2JqZWN0LXNpemUtZW5kOiAxMDAwO1xuJG9iamVjdC1zaXplczogXCJcIjtcbkBmb3IgJGkgZnJvbSAkb2JqZWN0LXNpemUtc3RhcnQgKyA1IHRocm91Z2ggJG9iamVjdC1zaXplLWVuZCB7XG4gICRvYmplY3Qtc2l6ZXM6IGFwcGVuZCgkb2JqZWN0LXNpemVzLCAkaSwgY29tbWEpO1xuICAkb2JqZWN0LXNpemVzOiBzZXQtbnRoKCRvYmplY3Qtc2l6ZXMsIDEsICRvYmplY3Qtc2l6ZS1zdGFydCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
                    });
                }


                /***/
            }),

        /***/
        91457:
            /*!*******************************************!*\
              !*** ./src/app/services/event.service.ts ***!
              \*******************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    EventService: () => ( /* binding */ EventService)
                    /* harmony export */
                });
                /* harmony import */
                var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! rxjs */ 72513);
                /* harmony import */
                var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs */ 58071);
                /* harmony import */
                var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! rxjs */ 13379);
                /* harmony import */
                var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */ 74520);
                /* harmony import */
                var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! rxjs/operators */ 79736);
                /* harmony import */
                var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! rxjs/operators */ 20274);
                /* harmony import */
                var _modals_connect_connect_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../modals/connect/connect.component */ 39147);
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/core */ 61699);
                /* harmony import */
                var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @ngx-translate/core */ 21916);
                /* harmony import */
                var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ngx-bootstrap/modal */ 27269);
                // Start of Event Service code






                class EventService {
                    translate;
                    modalService;
                    isConnected = false;
                    eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
                    sessionCounter;
                    count = 0;
                    endValue = 60 * 15;
                    langUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
                    netWork = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(true);
                    selectedLanguage = "en";
                    currentLanguage;
                    ignoreList = ['api.moonpay', 'ramp_transaction', 'coingecko'];
                    daysCounter = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
                        _days: 0,
                        _hours: 0,
                        _minutes: 0,
                        _seconds: 0,
                        _diff: 0
                    });
                    stopper = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
                    constructor(translate, modalService) {
                        this.translate = translate;
                        this.modalService = modalService;
                    }
                    /*Method is responsible for Broadcast Event */
                    broadcastEvent(key, value) {
                        this.eventsSubject.next({
                            key,
                            value
                        });
                    }
                    /* Method is responsible for Get Event*/
                    getEvent(key) {
                        return this.eventsSubject.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(e => e.key === key), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(e => e.value));
                    }
                    checkList(url) {
                        const matched = this.ignoreList.filter(element => url.includes(element));
                        return matched.length > 0 ? false : true;
                    }
                    setNetwork() {
                        this.netWork.next(true);
                    }
                    getNetwork() {
                        return this.netWork.asObservable();
                    }
                    getLang() {
                        return this.langUpdated.asObservable();
                    }
                    setLang(lang) {
                        localStorage.setItem('currentlang', lang);
                        this.currentLanguage = lang;
                        this.langUpdated.next(lang ? lang : 'en');
                    }
                    setCounter(endDate) {
                        console.log('endDate', endDate);
                        let _diff;
                        (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.interval)(1000).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.stopper), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(x => {
                            _diff = endDate - Date.parse(new Date().toString());
                        })).subscribe(x => {
                            // console.log('_diff =', _diff)
                            if (_diff <= 0) {
                                this.broadcastEvent('PRESALE-END', true);
                                this.stopper.next(false);
                            } else {
                                const object = {
                                    _days: this.getDays(_diff) < 10 ? '0' + this.getDays(_diff) : this.getDays(_diff),
                                    _hours: this.getHours(_diff) < 10 ? '0' + this.getHours(_diff) : this.getHours(_diff),
                                    _minutes: this.getMinutes(_diff) < 10 ? '0' + this.getMinutes(_diff) : this.getMinutes(_diff),
                                    _seconds: this.getSeconds(_diff) < 10 ? '0' + this.getSeconds(_diff) : this.getSeconds(_diff),
                                    _diff
                                };
                                this.daysCounter.next(object);
                            }
                        });
                    }
                    getCounter() {
                        return this.daysCounter.asObservable();
                    }
                    getDays(t) {
                        return Math.floor(t / (1000 * 60 * 60 * 24));
                    }
                    getHours(t) {
                        return Math.floor(t / (1000 * 60 * 60) % 24);
                    }
                    getMinutes(t) {
                        return Math.floor(t / 1000 / 60 % 60);
                    }
                    getSeconds(t) {
                        return Math.floor(t / 1000 % 60);
                    }
                    scrollToFn(section) {
                        window.location.hash = section;
                        console.log(window.location.hash, "window.location.hash");
                        window.location.pathname = '/' + this.currentLanguage;
                    }
                    showBuyWidget(scrollTo = '') {
                        if (scrollTo && !this.isConnected) {
                            this.scrollToFn(scrollTo);
                            setTimeout(() => {
                                this.modalService.show(_modals_connect_connect_component__WEBPACK_IMPORTED_MODULE_0__.ConnectComponent, {
                                    class: 'modal-min modal-dialog-centered',
                                    backdrop: 'static'
                                });
                            }, 1000);
                        } else {
                            this.scrollToFn(scrollTo);
                        }
                    }
                    static ɵfac = function EventService_Factory(t) {
                        return new(t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__.BsModalService));
                    };
                    static ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
                        token: EventService,
                        factory: EventService.ɵfac,
                        providedIn: 'root'
                    });
                }


                /***/
            }),

        /***/
        68394:
            /*!*******************************************!*\
              !*** ./src/app/services/popup.service.ts ***!
              \*******************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    PopupService: () => ( /* binding */ PopupService)
                    /* harmony export */
                });
                /* harmony import */
                var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! sweetalert2 */ 27889);
                /* harmony import */
                var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ 61699);


                class PopupService {
                    constructor() {}
                    // error toast message
                    messsageAlert(icon, text) {
                        let backgroundClass;
                        if (icon === 'error') {
                            backgroundClass = 'bg-danger';
                        } else if (icon === 'success') {
                            backgroundClass = 'bg-success';
                        } else if (icon === 'info') {
                            backgroundClass = 'bg-info';
                        } else if (icon === 'warning') {
                            backgroundClass = 'bg-warning';
                        } else {
                            backgroundClass = 'bg-light';
                        }
                        const options = {
                            position: 'bottom-end',
                            timer: 40000000,
                            toast: true,
                            timerProgressBar: true,
                            showConfirmButton: false,
                            iconColor: '#fff',
                            icon: icon,
                            text: text,
                            customClass: {
                                popup: 'd-flex align-items-center rounded-sm ' + backgroundClass,
                                htmlContainer: 'fw-semibold fs-5 text-white'
                            }
                        };
                        return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire(options);
                    }
                    // message popup
                    messagePopup(icon, text, titleText, confirmBtnTxt, denyBtnTxt, cancelBtnTxt) {
                        const options = {
                            iconHtml: '<img src="./assets/images/popup-icons/' + icon + '.svg" alt="' + icon + '" height="80">',
                            titleText: titleText ? titleText : undefined,
                            text: text,
                            showDenyButton: denyBtnTxt ? true : false,
                            showCancelButton: cancelBtnTxt ? true : false,
                            confirmButtonText: confirmBtnTxt ? confirmBtnTxt : 'OK',
                            denyButtonText: denyBtnTxt,
                            cancelButtonText: cancelBtnTxt,
                            buttonsStyling: false,
                            customClass: {
                                icon: 'border-0',
                                popup: 'rounded-4 shadow-md',
                                title: 'fs-2 fw-semibold pt-4',
                                htmlContainer: 'fw-regular fs-3 my-3',
                                confirmButton: 'btn btn-sm btn-success w-100 py-2 px-3 rounded-1 border-0',
                                denyButton: 'btn btn-sm py-2 w-100 px-3 btn-tertiary mt-2',
                                cancelButton: 'btn btn-sm py-2 w-100 px-3 btn-warning'
                            }
                        };
                        return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire(options);
                    }
                    close() {
                        return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                    }
                    static ɵfac = function PopupService_Factory(t) {
                        return new(t || PopupService)();
                    };
                    static ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
                        token: PopupService,
                        factory: PopupService.ɵfac,
                        providedIn: 'root'
                    });
                }


                /***/
            }),

        /***/
        14052:
            /*!****************************************************!*\
              !*** ./src/app/services/wallet-connect.service.ts ***!
              \****************************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    WalletConnectService: () => ( /* binding */ WalletConnectService)
                    /* harmony export */
                });
                /* harmony import */
                var _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
                /* harmony import */
                var _wagmi_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @wagmi/core */ 99152);
                /* harmony import */
                var _wagmi_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @wagmi/core */ 34496);
                /* harmony import */
                var _wagmi_core_providers_public__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @wagmi/core/providers/public */ 51934);
                /* harmony import */
                var _wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @wagmi/core/providers/jsonRpc */ 31952);
                /* harmony import */
                var _wagmi_core_connectors_metaMask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @wagmi/core/connectors/metaMask */ 51122);
                /* harmony import */
                var _wagmi_core_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @wagmi/core/connectors/walletConnect */ 29304);
                /* harmony import */
                var _wagmi_core_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! @wagmi/core/connectors/coinbaseWallet */ 33882);
                /* harmony import */
                var viem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! viem */ 70149);
                /* harmony import */
                var viem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! viem */ 15781);
                /* harmony import */
                var viem_chains__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! viem/chains */ 19421);
                /* harmony import */
                var viem_chains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! viem/chains */ 71703);
                /* harmony import */
                var viem_chains__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! viem/chains */ 75384);
                /* harmony import */
                var _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../shared/constants/app-enums */ 74276);
                /* harmony import */
                var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/environments/environment */ 20553);
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! @angular/core */ 61699);
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! @angular/common/http */ 54860);
                /* harmony import */
                var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./event.service */ 91457);
                /* harmony import */
                var _popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./popup.service */ 68394);
                /* harmony import */
                var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! @ngx-translate/core */ 21916);
















                /**
                 * variable used for the presale smart contract
                 * of different network
                 */
                const presaleBsc = __webpack_require__( /*! src/assets/contracts/presaleBSC.json */ 27008);
                const bsc_usdt_token = __webpack_require__( /*! src/assets/contracts/bsc_usdt_token.json */ 40625);
                const token = __webpack_require__( /*! src/assets/contracts/token.json */ 75525);
                /**
                 * here the presale ABI and Address are set
                 * for read, write and prepair contract
                 */
                const presaleContractBsc = {
                    address: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc.presaleAddress,
                    abi: presaleBsc.abi
                };
                const bscUsdtContract = {
                    address: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc.usdTAddress,
                    abi: bsc_usdt_token.abi
                };
                const tokenContract = {
                    address: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.tokenAddress,
                    abi: token.abi
                };
                class WalletConnectService {
                    http;
                    appRef;
                    eventService;
                    popupService;
                    transletService;
                    swapStatus = _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.not_started;
                    walletAddress = '';
                    referUrl = '';
                    client;
                    wagmiData;
                    chainId;
                    mode;
                    presaleData;
                    swapHash = '';
                    refreshId;
                    refreshRate = 5000;
                    /* variables used for Wallet connection */
                    metaMaskConnector;
                    walletConnector;
                    walletConnectorBW;
                    uriConnector;
                    coinbaseConnector;
                    isBW = false;
                    /* predefined values of the essential variables */
                    balanceData = {
                        nativeBal: 0,
                        usdtBal: 0,
                        oneBnb: 0,
                        bnbUsdt: 0
                    };
                    /**
                     * Tokenomics data is defining the no of preslae stages,
                     * price of each token, minimum and maximum no of token
                     * for each stages. It is also defining the end date of each presale stages.
                     */
                    tokenomics = [{
                        minToken: 0,
                        maxToken: 1000000000,
                        maxAmount: 22000000,
                        tokenUSDT: 0.022,
                        title: 'widget.round_title',
                        endDate: 1706954399
                    }];
                    curWalletName = '';
                    price = 150;
                    constructor(http, appRef, eventService, popupService, transletService) {
                        this.http = http;
                        this.appRef = appRef;
                        this.eventService = eventService;
                        this.popupService = popupService;
                        this.transletService = transletService;
                        /**
                         * Wagmi Core chain, provider and connector configuration.
                         * If production mode then mainnet and paid RPC provider else
                         * testnet and publicProvider
                         */
                        //Solana stuff
                        this.http.get('https://api.diadata.org/v1/assetQuotation/Solana/0x0000000000000000000000000000000000000000').subscribe(res => {
                            console.log(res.Price);
                            this.price = res.Price;
                        });
                        let tempVar = JSON.stringify(this.tokenomics);
                        const currentChain = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production ? [_wagmi_core__WEBPACK_IMPORTED_MODULE_5__.mainnet, viem_chains__WEBPACK_IMPORTED_MODULE_6__.bsc] : [viem_chains__WEBPACK_IMPORTED_MODULE_7__.sepolia, viem_chains__WEBPACK_IMPORTED_MODULE_8__.bscTestnet];
                        const {
                            chains,
                            publicClient,
                            webSocketPublicClient
                        } = (0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.configureChains)(currentChain, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production ? [(0, _wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_10__.jsonRpcProvider)({
                            rpc: chain => ({
                                http: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc.rpcURL
                            })
                        }), (0, _wagmi_core_providers_jsonRpc__WEBPACK_IMPORTED_MODULE_10__.jsonRpcProvider)({
                            rpc: chain => ({
                                http: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc.backupRPC
                            })
                        })] : [(0, _wagmi_core_providers_public__WEBPACK_IMPORTED_MODULE_11__.publicProvider)()]);
                        /**
                         * Setup of Metamask connector which will work
                         * with metamask browser extension
                         */
                        this.metaMaskConnector = new _wagmi_core_connectors_metaMask__WEBPACK_IMPORTED_MODULE_12__.MetaMaskConnector({
                            chains: chains
                        });
                        /**
                         * Setup of wallet connector v2 which will work
                         * with mobile app like trustwallet, alphawallet app.
                         * the projectId is mandatory and can be generated from
                         * https://cloud.walletconnect.com/sign-in
                         */
                        this.walletConnector = new _wagmi_core_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_13__.WalletConnectConnector({
                            chains,
                            options: {
                                projectId: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.walletConnectId,
                                qrModalOptions: {
                                    explorerRecommendedWalletIds: ['fe68cea63541aa53ce020de7398968566dfe8f3725663a564cac89490247ed49', 'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0']
                                }
                            }
                        });
                        this.walletConnectorBW = new _wagmi_core_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_13__.WalletConnectConnector({
                            chains,
                            options: {
                                projectId: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.walletConnectId,
                                qrModalOptions: {
                                    explorerRecommendedWalletIds: ['fe68cea63541aa53ce020de7398968566dfe8f3725663a564cac89490247ed49']
                                }
                            }
                        });
                        this.coinbaseConnector = new _wagmi_core_connectors_coinbaseWallet__WEBPACK_IMPORTED_MODULE_14__.CoinbaseWalletConnector({
                            chains,
                            options: {
                                appName: '$SEAL',
                                appLogoUrl: 'https://sealanacoin.com/assets/images/svg-icons/logo.svg'
                            }
                        });
                        this.uriConnector = new _wagmi_core_connectors_walletConnect__WEBPACK_IMPORTED_MODULE_13__.WalletConnectConnector({
                            chains,
                            options: {
                                showQrModal: false,
                                projectId: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.walletConnectId,
                                qrModalOptions: {
                                    explorerRecommendedWalletIds: ['fe68cea63541aa53ce020de7398968566dfe8f3725663a564cac89490247ed49']
                                }
                            }
                        });
                        this.uriConnector.addListener('message', uri => {
                            if (uri.type === 'display_uri') {
                                const userAgent = window.navigator.userAgent.toLowerCase(),
                                    ios = /iphone|ipod|ipad/.test(userAgent);
                                const bwUrl = (0, _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.getParamWithoutCookie)('bwUrl');
                                console.log("bwUrl=========>", bwUrl);
                                let urlParams = uri.data + "&callbackUrl=" + window.location.href + "&browser=" + (0, _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.getBrowserName)();
                                console.log("url params=========>", urlParams);
                                console.log("wondow log params=========>", window.location.href);
                                if (ios) {
                                    const link = document.createElement('a');
                                    if (bwUrl && bwUrl != '') {
                                        link.href = bwUrl + urlParams;
                                        link.click();
                                        this.isBW = true;
                                    } else {
                                        // link.href = environment.bwUniversalLink + '/connect?' + urlParams;
                                        link.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bwDeepLink + urlParams;
                                        // link.target = '_blank';
                                        link.click();
                                        this.isBW = false;
                                    }
                                } else {
                                    if (bwUrl && bwUrl != '') {
                                        const link = document.createElement('a');
                                        link.href = bwUrl + urlParams;
                                        link.click();
                                        this.isBW = true;
                                    } else {
                                        const link = document.createElement('a');
                                        // link.href = environment.bwUniversalLink + "/connect?" + urlParams;
                                        link.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bwDeepLink + urlParams;
                                        // link.target = '_blank';
                                        link.click();
                                        this.isBW = false;
                                    }
                                }
                            }
                        });
                        /**
                         * wagmi createConfig setup for auto connect feature
                         * and available connectors of wagmi.
                         */
                        this.client = (0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.createConfig)({
                            autoConnect: true,
                            connectors: [this.metaMaskConnector, this.walletConnector, this.walletConnectorBW, this.uriConnector, this.coinbaseConnector],
                            publicClient,
                            webSocketPublicClient
                        });
                        /**
                         * watchNetwork function continuously monitors the userâ€™s
                         * connected network. Whenever user switched/changed its
                         * current network, this function keeps tracking that data
                         * and updates the current chain id accordingly.
                         */
                        (0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.watchNetwork)(network => {
                            this.chainId = network ? .chain ? .id;
                            this.getPresalesData();
                            setTimeout(() => this.eventService.setNetwork(), 2000);
                            this.appRef.tick();
                            // console.log('watchNetwork =', network);
                        });
                        /**
                         * This function continuously monitors the userâ€™s connected
                         * wallet account. Whenever user switched/changed its current account,
                         * this function updates the current wallet address accordingly.
                         */
                        (0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.watchAccount)(account => this.setData(account));
                    }
                    /**
                     * this is connect wallet function. The mode argument
                     * is actually providing a choice to the app user whether
                     * they want to connect via Metamask, WalletConnect V2 or web3Auth.
                     * This function is mainly called from connect modal component.
                     */
                    connectWallet(mode, isBsNetwork = false) {
                        var _this = this;
                        return (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*() {
                            console.log('connectWallet called', mode);
                            _this.mode = mode;
                            _this.windowDataLayer('connectWallet', 'start', 1, 1, 0, '', '', 0, 0);
                            yield(0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.connect)({
                                connector: mode === 'metamask' ? _this.metaMaskConnector : mode === 'wallet' ? _this.walletConnector : mode === 'walletBW' ? _this.walletConnectorBW : mode === 'coinbase' ? _this.coinbaseConnector : mode === 'bw' ? _this.uriConnector : _this.walletConnector,
                                chainId: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc.chainIdInt
                            }).then(success => {
                                console.log('\n==== wallet connected ====\n', _this.client, '\n====');
                                setTimeout(() => {
                                    _this.sendDashFx('', 0, 0, true);
                                    _this.windowDataLayer('connectWallet', 'successful', 2, 1, 0, '', '', 0, 0);
                                }, 2000);
                            }, err => {
                                console.log('\n==== wallet connection issue ====\n', err, '\n====');
                            });
                        })();
                    }
                    /**
                     * this is disconnect wallet function. After a successful disconnection
                     * a developer can reset the different variables values.
                     */
                    disConnectWallet() {
                        var _this2 = this;
                        return (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*() {
                            yield(0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.disconnect)().then(success => {
                                console.log('\n==== wallet disconnected ====\n', _this2.client);
                                localStorage.clear();
                                _this2.chainId = null;
                                _this2.walletAddress = '';
                                _this2.referUrl = '';
                                _this2.balanceData.nativeBal = 0;
                                _this2.balanceData.usdtBal = 0;
                                _this2.eventService.setNetwork();
                                _this2.eventService.isConnected = false;
                                _this2.getPresalesData();
                            }, err => {
                                console.log('\n==== wallet disconnect issue ====\n');
                                console.log('disconnect issue =', err);
                            });
                        })();
                    }
                    /**
                     * This function is getting called from watchAAccount.
                     * Here we are saving the wagmi wallet address and
                     * also calling the getPresale function for re-read
                     * the smart contract function with new wallet address
                     */
                    setData(account) {
                        this.wagmiData = account;
                        this.walletAddress = this.wagmiData.address ? .toLowerCase();
                        this.refreshRate = account.address ? 5000 : 50000;
                        this.eventService.isConnected = this.wagmiData ? .isConnected;
                        this.appRef.tick();
                        this.getPresalesData();
                    }
                    /**
                     * In thiss fnctiion we are calling the different method
                     * of smart contract to get different values
                     */
                    getPresalesData() {
                        var _this3 = this;
                        return (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*() {
                            // if (this.walletAddress && this.referUrl == '') this.refer();
                            const config = {
                                contracts: [{
                                    ...presaleContractBsc,
                                    functionName: 'fetchPrice',
                                    chainId: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc.chainIdInt,
                                    args: [100000]
                                }, {
                                    ...presaleContractBsc,
                                    functionName: 'getLatestPrice',
                                    chainId: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc.chainIdInt,
                                    args: []
                                }]
                            };
                            /**
                             * Above contracts are going to be read.
                             */
                            _this3.presaleData = yield(0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.readContracts)(config);
                            console.log('\n******presaleData =', _this3.presaleData, '\n******\n');
                            /* assigning the value of no of token sold va bsc and eth contract */
                            try {
                                /* assigning the value of total USDT raised via eth and bsc */
                                _this3.balanceData.bnbUsdt = Number(_this3.presaleData[0].result) / 100000;
                                let bnbPrice = +(0, viem__WEBPACK_IMPORTED_MODULE_15__.formatEther)(_this3.presaleData[1].result); // no of app tokens in exchange of 1 eth
                                _this3.balanceData.oneBnb = _this3.balanceData.bnbUsdt / bnbPrice;
                            } catch (e) {
                                console.log("Presale over.", e);
                            }
                            if (_this3.wagmiData ? .isConnected) _this3.getMetaData(); // if user is connected then call this function
                            if (_this3.refreshId) clearTimeout(_this3.refreshId);
                            _this3.refreshId = setTimeout(() => _this3.getPresalesData(), _this3.refreshRate); // Call the self method on each 5secs interval
                        })();
                    }
                    /**
                     * This method is used to fetch the native balance
                     * of the current account and network
                     */
                    getMetaData() {
                        var _this4 = this;
                        return (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*() {
                            const nativeBalance = yield(0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.fetchBalance)({
                                address: _this4.walletAddress,
                                formatUnits: 'ether'
                            });
                            const usdtBal = yield(0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.fetchBalance)({
                                address: _this4.walletAddress,
                                // formatUnits: 'mwei',
                                token: _this4.getChainData().usdTAddress,
                                chainId: _this4.getChainData().chainIdInt
                            });
                            /* user's Eth/Bnb and USDT balance */
                            _this4.balanceData.nativeBal = +nativeBalance.formatted;
                            _this4.balanceData.usdtBal = +usdtBal.formatted;
                        })();
                    }
                    /**
                     * switching the current network. If user is on wrong network
                     * and got error on switching then a popup
                     * will appear saying to connect correct chain
                     */
                    switchNetwork(chainId) {
                        var _this5 = this;
                        return (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*() {
                            yield(0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.switchNetwork)({
                                chainId: chainId
                            }).then(success => {
                                _this5.appRef.tick();
                            }, err => {
                                const chain = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc;
                                const chainName = chain.chainInfo.params[0].chainName;
                                _this5.popupService.messagePopup('info', _this5.transletService.instant('switchNetwork', {
                                    chain_name: chainName
                                }));
                            });
                        })();
                    }
                    /**
                     * calculating the available no of token in exchange of inserted Eth amount
                     */
                    getNativeAmount = (() => {
                        var _this6 = this;
                        return function() {
                            var _ref = (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*(amount) {
                                let singleAmount = 0;
                                switch (_this6.getChainData().chainIdInt) {
                                    case src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc.chainIdInt:
                                        singleAmount = _this6.balanceData.oneBnb;
                                        break;
                                    default:
                                        singleAmount = _this6.balanceData.oneBnb;
                                }
                                return Math.floor(+(amount / +singleAmount));
                            });
                            return function(_x) {
                                return _ref.apply(this, arguments);
                            };
                        }();
                    })();
                    /**
                     * calculating the available no of token in exchange of inserted Usdt amount
                     */
                    getUSDTAmount = (() => {
                        var _this7 = this;
                        return function() {
                            var _ref2 = (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*(amount) {
                                let singleAmount = 0;
                                switch (_this7.getChainData().chainIdInt) {
                                    case src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc.chainIdInt:
                                        singleAmount = _this7.balanceData.bnbUsdt;
                                        break;
                                        // case environment.poly.chainIdInt:
                                        //   singleAmount = this.balanceData.ethUsdt / Math.pow(10, 6);
                                        //   break;
                                    default:
                                        singleAmount = _this7.balanceData.bnbUsdt;
                                }
                                return Math.floor(+(amount / +singleAmount));
                            });
                            return function(_x2) {
                                return _ref2.apply(this, arguments);
                            };
                        }();
                    })();
                    /**
                     * reverse calculation required amount (eth/bnb/usdt)
                     * in exchange of inserted token
                     * @param amount : no of token
                     * @param mode : exchange mode
                     * @returns : required amount
                     */
                    getDynamicAmount = (() => {
                        var _this8 = this;
                        return function() {
                            var _ref3 = (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*(amount, mode) {
                                let singleAmount = 0;
                                switch (_this8.getChainData().chainIdInt) {
                                    case src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc.chainIdInt:
                                        if (mode === 'getNativeAmount') {
                                            singleAmount = _this8.balanceData.oneBnb;
                                        } else {
                                            singleAmount = _this8.balanceData.bnbUsdt;
                                        }
                                        break;
                                        // case environment.poly.chainIdInt:
                                        //   if (mode === 'getNativeAmount') {
                                        //     singleAmount = this.balanceData.onePoly;
                                        //   } else {
                                        //     singleAmount = this.balanceData.polyUsdt / Math.pow(10, 6)
                                        //   } break;
                                    default:
                                        if (mode === 'getNativeAmount') {
                                            singleAmount = _this8.balanceData.oneBnb;
                                        } else {
                                            singleAmount = _this8.balanceData.bnbUsdt;
                                        }
                                        break;
                                }
                                return +(amount * singleAmount);
                            });
                            return function(_x3, _x4) {
                                return _ref3.apply(this, arguments);
                            };
                        }();
                    })();
                    /**
                     * this function is swaping the native token with app token
                     * @param amount: app token amount
                     * @param value: eth token value
                     */
                    swapNativeTokens(amount, value, isBuyStake = false) {
                        var _this9 = this;
                        return (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*() {
                            // setting swapStatus to not started
                            _this9.swapStatus = _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.not_started;
                            /**
                             * preparing a contract for swaping via smart contract
                             * method of ethBuyHelper
                             */
                            const {
                                request
                            } = yield(0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.prepareWriteContract)({
                                ..._this9.getPresaleContract(),
                                functionName: _this9.getChainData().nativeFunction,
                                chainId: _this9.getChainData().chainIdInt,
                                args: [amount],
                                value: (0, viem__WEBPACK_IMPORTED_MODULE_16__.parseEther)(`${value}`),
                                account: _this9.walletAddress // Optional param. Not required!
                            });
                            // setting swapStatus to confirmation pending
                            _this9.swapStatus = _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.confirm_pending;
                            /**
                             * Writing contract for swap process
                             */
                            yield(0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.writeContract)(request).then(success => {
                                console.log('Eth write Contract success', success);
                                _this9.swapStatus = _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.in_progess;
                                _this9.windowDataLayer('swap', 'confirmTransaction', 2, 0, 0);
                                _this9.sendDashFx(_this9.getChainData().purchaseToken, amount, value);
                                _this9.checkTansaction(success.hash, _this9.getChainData().purchaseToken, amount, value);
                            }, err => {
                                console.log('swapNativeTokens Error =', err);
                                if (err.code === 4001) {
                                    _this9.swapStatus = _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.rejected;
                                } else {
                                    _this9.swapStatus = _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.failed;
                                }
                            });
                        })();
                    }
                    /**
                     * this function is checking allowence
                     * amount before swaping the usdt token with app token
                     * @param amount: app token amount
                     * @param value: usdt token value
                     * @param afterAllowance: checking whether allowence is granted or not
                     */
                    swapCryptoForUSDT(amount, value, afterAllowance = false, isBuyStake = false) {
                        var _this10 = this;
                        return (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*() {
                            /**
                             * preparing token contract with ABI
                             */
                            const usdtContract = _this10.getUSDTContract();
                            // set presale address based on current network
                            const presaleAdd = _this10.getChainData().presaleAddress;
                            /**
                             * reading allowence contract
                             */
                            const allowanceData = yield(0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.readContracts)({
                                contracts: [{
                                    ...usdtContract,
                                    functionName: 'allowance',
                                    chainId: _this10.chainId,
                                    args: [_this10.walletAddress, presaleAdd]
                                }]
                            });
                            //  checking provided allowence value in token contract
                            let allowanceValue = Number(allowanceData[0].result) / Math.pow(10, 6);
                            console.log('allowanceValue =', value, allowanceValue);
                            /**
                             * if inserted usdt value is larger than
                             * provided allowence value then it needs further approval.
                             * below we are preparing contract for allowence approval
                             */
                            if (+value > +allowanceValue) {
                                const {
                                    request
                                } = yield(0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.prepareWriteContract)({
                                    ...usdtContract,
                                    chainId: _this10.chainId,
                                    functionName: 'approve',
                                    args: [presaleAdd, afterAllowance || allowanceValue == 0 ? '100000000000000000000000000' : '0'],
                                    account: _this10.walletAddress // Optional param. Not required!
                                });
                                // setting swapStatus to approval pending
                                _this10.swapStatus = _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.approval_pending;
                                // fetching transaction hash key of writing contract
                                const {
                                    hash
                                } = yield(0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.writeContract)(request);
                                console.log('approve allowence hash key =', hash);
                                /**
                                 * checking the approval transaction status.
                                 * if success and the allowence is preapproved
                                 * then it will call the buyUSDT function, else
                                 * will again go through the starting steps but this time with
                                 * allowence approval true mode.
                                 */
                                yield(0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.waitForTransaction)({
                                    hash
                                }).then(success => {
                                    console.log('approve Config success', success);
                                    if (afterAllowance) {
                                        _this10.buyUSDT(amount, value, isBuyStake);
                                    } else {
                                        _this10.swapCryptoForUSDT(amount, value, true, isBuyStake);
                                    }
                                }, err => {
                                    console.log('approve Config error', err);
                                    _this10.swapStatus = _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.rejected;
                                });
                            } else {
                                /**
                                 * if inserted usdt value is smaller than
                                 * provided allowence value, then buyUSDT
                                 * function will be called and doesn't need
                                 * to check for allowence approval
                                 */
                                _this10.buyUSDT(amount, value, isBuyStake);
                            }
                        })();
                    }
                    /**
                     * this function is swaping the usdt token with app token
                     * @param amount: app token amount
                     * @param value: usdt token value
                     * @param afterAllowance: checking whether allowence is granted or not
                     */
                    buyUSDT(amount, value, isBuyStake = false) {
                        var _this11 = this;
                        return (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*() {
                            /**
                             * preparing a contract for swaping via smart contract
                             * method of buyWithUSDT
                             */
                            console.log('buyUSDT called', _this11.getChainData().hasStaking);
                            const contract = _this11.getPresaleContract();
                            yield(0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.prepareWriteContract)({
                                    ...contract,
                                    functionName: 'buyWithUSDTDynamic',
                                    chainId: _this11.chainId,
                                    args: _this11.getChainData().hasStaking ? [amount, isBuyStake] : [amount],
                                    account: _this11.walletAddress // Optional param. Not required!
                                })
                                // if prepare contract is success
                                .then( /*#__PURE__*/ function() {
                                        var _ref4 = (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*(request) {
                                            // setting swapStatus to confirmation pending
                                            console.log('usdtBuyHelper =', request);
                                            _this11.swapStatus = _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.confirm_pending;
                                            /**
                                             * Once confirmed startig write contract
                                             */
                                            yield(0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.writeContract)(request.request).then(success => {
                                                console.log('buyUSDT writeContract success', success);
                                                _this11.windowDataLayer('swap', 'confirmTransaction', 2, 0, 0); // setting windowdatalayer for analytics
                                                _this11.sendDashFx('usdt', amount, value); // updating dashFx data
                                                _this11.swapStatus = _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.in_progess; // setting swapStatus to inprogress mode
                                                _this11.checkTansaction(success.hash, 'usdt', amount, value); // checking transaction status
                                            }, err => {
                                                console.log('buyUSDT writeContract error', err);
                                                _this11.swapStatus = _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.failed;
                                            });
                                        });
                                        return function(_x5) {
                                            return _ref4.apply(this, arguments);
                                        };
                                    }(),
                                    /**
                                     * if there is any error while preparing contract
                                     * like requesting more than max-token buy limit
                                     * then a warning popup will appear saying that
                                     * the max-token limitation
                                     */
                                    err => {
                                        // this.popupService.messagePopup(
                                        //   'warning',
                                        //   this.transletService.instant('widget.max_token_exceed', {
                                        //     maxTokensToBuy: this.balanceData.maxTokensToBuy,
                                        //   }),
                                        //   this.transletService.instant('widget.max_token_title')
                                        // );
                                        _this11.swapStatus = _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.rejected;
                                        console.log(err.message);
                                    });
                        })();
                    }
                    /**
                     * this function is check the final
                     * status of the current transaction
                     * @param haskKey: transaction hash key
                     * @param mode: Eth/Bnb/Usdt transaction
                     * @param amount: no of tooken
                     * @param value:  amount of eth/bnb/usdt
                     */
                    checkTansaction(haskKey, mode, amount, value, isDatalayer = true) {
                        var _this12 = this;
                        return (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*() {
                            yield(0, _wagmi_core__WEBPACK_IMPORTED_MODULE_9__.waitForTransaction)({
                                hash: haskKey
                            }).then(response => {
                                console.log('checkTansaction success', response);
                                _this12.getMetaData(); // update the current native balance
                                _this12.swapStatus = _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.complete; // setting swapStatus to completed
                                _this12.swapHash = response.transactionHash; // assigning succes transaction hash id
                                _this12.sendBWData(mode, amount, value);
                                if (isDatalayer) _this12.windowDataLayer('swap', 'swapSuccessful', 3, 1, 0, mode, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.tokenName, value, amount);
                            }, err => {
                                console.log('checkTansaction error', err);
                                _this12.getMetaData(); // update the current native balance
                                _this12.swapStatus = _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.SwapStatus.failed; // setting swapStatus to failed
                            });
                        })();
                    }
                    /**
                     * function to update analytics data
                     * @param flowName: process name like swap/connectWallet
                     * @param stepName: swapSuccessful/confirmTransaction/successful
                     * @param stepNo: step no of process
                     * @param completeFlag: is omppletedd or not
                     * @param errorCode: if any error
                     * @param fromCurrency: ETH/BNB/USDT
                     * @param toCurrency : ICO/APP token
                     * @param fromVal: ETH/BNB/USDT value
                     * @param toVal: App token value
                     */
                    windowDataLayer(flowName, stepName, stepNo, completeFlag, errorCode, fromCurrency = '', toCurrency = '', fromVal = 0, toVal = 0) {
                        var _this13 = this;
                        return (0, _opt_atlassian_pipelines_agent_build_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function*() {
                            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
                                window.dataLayer = window.dataLayer || [];
                                window.dataLayer.push({
                                    event: 'workflowStep',
                                    walletAddress: _this13.walletAddress,
                                    workflowName: flowName,
                                    workflowStepNumber: stepNo,
                                    workflowStepName: stepName,
                                    workflowCompleteFlag: completeFlag,
                                    workflowErrorCode: errorCode,
                                    transactionId: completeFlag === 0 ? undefined : _this13.swapHash,
                                    swapFromValue: completeFlag === 0 ? undefined : fromVal,
                                    swapToValue: completeFlag === 0 ? undefined : toVal,
                                    swapFromCurrency: completeFlag === 0 ? undefined : fromCurrency,
                                    swapToCurrency: completeFlag === 0 ? undefined : toCurrency,
                                    presaleStage: completeFlag === 0 ? undefined : 0,
                                    stageTokenValue: completeFlag === 0 ? undefined : _this13.tokenomics[0].tokenUSDT,
                                    swapFromValueUsd: completeFlag === 0 ? undefined : yield _this13.getDynamicAmount(toVal, 'getUSDTAmount')
                                });
                            }
                        })();
                    }
                    /**
                     * DashFx is another analytics feature
                     * @param type : connect wallet/ETH/BNB/USDT
                     * @param toValue: App token value
                     * @param fromValue : ETH/BNB/USDT value
                     * @param connectMode: whether it is wallet connect or not
                     */
                    sendDashFx = (type, toValue, fromValue, connectMode = false) => {
                        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production && connectMode) {
                            const data = {
                                walletAddress: this.walletAddress,
                                iid: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.iidDashFx,
                                event: 'lead_success',
                                purchaseType: connectMode ? null : type,
                                purchaseTokens: +toValue,
                                purchaseTypeAmount: +fromValue,
                                purchaseUsdAmount: type === 'usdt' ? +fromValue : + +(toValue * this.tokenomics[0].tokenUSDT).toFixed(2),
                                ipAddress: '',
                                clickId: (0, _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.getParam)('clickId'),
                                source: (0, _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.getParam)('source'),
                                tid: (0, _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.getParam)('tid'),
                                pid: (0, _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.getParam)('pid')
                            };
                            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.urlDashFx, data).subscribe(res => {
                                console.log('DashFx success response', res);
                            }, err => {
                                console.log('DashFx error response', err);
                            });
                        }
                    };
                    /**
                     * BestWallet Data analytics
                     * @param type : connect wallet/ETH/BNB/USDT
                     * @param toValue: App token value
                     * @param fromValue : ETH/BNB/USDT value
                     * @param connectMode: whether it is wallet connect or not
                     */
                    sendBWData = (type, toValue, fromValue) => {
                        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
                            const data = {
                                publicAddress: this.walletAddress,
                                event: 'revenue',
                                purchaseType: type,
                                purchaseTokens: +toValue,
                                purchaseTypeAmount: +fromValue,
                                purchaseUsdAmount: type === 'usdt' ? +fromValue : + +(toValue * this.tokenomics[0].tokenUSDT).toFixed(2),
                                ipAddress: '',
                                clickId: (0, _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.getParam)('clickId'),
                                source: (0, _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.getParam)('source'),
                                hash: this.swapHash,
                                chainId: this.chainId,
                                presaleName: "$SEAL",
                                isBW: this.isBW,
                                rABsZdfEqoXvExie: (0, _shared_constants_app_enums__WEBPACK_IMPORTED_MODULE_1__.getParamWithoutCookie)('rABsZdfEqoXvExie') || undefined
                            };
                            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bwApiUrl, data).subscribe(res => {
                                console.log('BW success response', res);
                            }, err => {
                                console.log('BW error response', err);
                            });
                        }
                    };
                    getChainData() {
                        switch (this.chainId) {
                            case src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc.chainIdInt:
                                return src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc;
                                // case environment.poly.chainIdInt:
                                //   return environment.poly;
                            default:
                                return src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc;
                        }
                    }
                    getPresaleContract() {
                        switch (this.chainId) {
                            case src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc.chainIdInt:
                                return presaleContractBsc;
                                // case environment.poly.chainIdInt:
                                //   return presaleContractPoly;
                            default:
                                return presaleContractBsc;
                        }
                    }
                    getUSDTContract() {
                        switch (this.chainId) {
                            case src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.bsc.chainIdInt:
                                return bscUsdtContract;
                                // case environment.poly.chainIdInt:
                                //   return polyUsdtContract;
                            default:
                                return bscUsdtContract;
                        }
                    }
                    /**
                     * detect current window object
                     */
                    getWindowObject(walletName = '') {
                        switch (walletName !== '' ? walletName : this.curWalletName) {
                            case 'Phantom':
                                return window.solana;
                            case 'Solflare':
                                return window.solflare;
                                // case 'Coinbase': return window.coinbaseSolana;
                                // case 'Trust': return window.trustWallet.solana;
                            default:
                                return window.solana;
                        }
                    }
                    static ɵfac = function WalletConnectService_Factory(t) {
                        return new(t || WalletConnectService)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_17__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_event_service__WEBPACK_IMPORTED_MODULE_3__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_popup_service__WEBPACK_IMPORTED_MODULE_4__.PopupService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateService));
                    };
                    static ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjectable"]({
                        token: WalletConnectService,
                        factory: WalletConnectService.ɵfac,
                        providedIn: 'root'
                    });
                }


                /***/
            }),

        /***/
        74276:
            /*!***********************************************!*\
              !*** ./src/app/shared/constants/app-enums.ts ***!
              \***********************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    CTAStatus: () => ( /* binding */ CTAStatus),
                    /* harmony export */
                    SwapStatus: () => ( /* binding */ SwapStatus),
                    /* harmony export */
                    convertDecimal: () => ( /* binding */ convertDecimal),
                    /* harmony export */
                    convertNum: () => ( /* binding */ convertNum),
                    /* harmony export */
                    country_list: () => ( /* binding */ country_list),
                    /* harmony export */
                    getBrowserName: () => ( /* binding */ getBrowserName),
                    /* harmony export */
                    getParam: () => ( /* binding */ getParam),
                    /* harmony export */
                    getParamWithoutCookie: () => ( /* binding */ getParamWithoutCookie),
                    /* harmony export */
                    getPremiumTokenRef: () => ( /* binding */ getPremiumTokenRef),
                    /* harmony export */
                    getSOLRef: () => ( /* binding */ getSOLRef),
                    /* harmony export */
                    languages: () => ( /* binding */ languages),
                    /* harmony export */
                    timeSince: () => ( /* binding */ timeSince),
                    /* harmony export */
                    verifyLanguage: () => ( /* binding */ verifyLanguage)
                    /* harmony export */
                });
                var SwapStatus;
                (function(SwapStatus) {
                    SwapStatus[SwapStatus["not_started"] = 0] = "not_started";
                    SwapStatus[SwapStatus["in_progess"] = 1] = "in_progess";
                    SwapStatus[SwapStatus["complete"] = 2] = "complete";
                    SwapStatus[SwapStatus["failed"] = 3] = "failed";
                    SwapStatus[SwapStatus["rejected"] = 4] = "rejected";
                    SwapStatus[SwapStatus["approval_pending"] = 5] = "approval_pending";
                    SwapStatus[SwapStatus["confirm_pending"] = 6] = "confirm_pending";
                })(SwapStatus || (SwapStatus = {}));
                const languages = [{
                        name: "Arabic",
                        value: "ar",
                        country: "AR",
                        flag: "ar"
                    }, {
                        name: "Bulgarian",
                        value: "bg",
                        country: "BGR",
                        flag: "bg"
                    }, {
                        name: "English",
                        value: "en",
                        country: "US",
                        flag: "en"
                    }, {
                        name: "Chinese (simplified)",
                        value: "zh-hans",
                        country: "CHN",
                        flag: "cn"
                    }, {
                        name: "Chinese (traditional) ",
                        value: "zh-hant",
                        country: "CHN",
                        flag: "cn"
                    }, {
                        name: "Czech",
                        value: "cz",
                        country: "CZE",
                        flag: "cz"
                    }, {
                        name: "Dutch",
                        value: "nl",
                        country: "DT",
                        flag: "nl"
                    }, {
                        name: "French",
                        value: "fr",
                        country: "FR",
                        flag: "fr"
                    }, {
                        name: "German",
                        value: "de",
                        country: "DEU",
                        flag: "de"
                    }, {
                        name: "Greek",
                        value: "el",
                        country: "GRC",
                        flag: "el"
                    }, {
                        name: "Hungarian",
                        value: "hu",
                        country: "HUN",
                        flag: "hu"
                    }, {
                        name: "Indonesian",
                        value: "id",
                        country: "IND",
                        flag: "id"
                    }, {
                        name: "Italian",
                        value: "it",
                        country: "ITA",
                        flag: "it"
                    }, {
                        name: "Japanese",
                        value: "jp",
                        country: "JPN",
                        flag: "jp"
                    }, {
                        name: "Korean",
                        value: "kr",
                        country: "KOR",
                        flag: "kr"
                    },
                    // {
                    //   name: "Persian",
                    //   value: "fa",
                    //   country: "PER",
                    //   flag: "fa"
                    // },
                    {
                        name: "Polish",
                        value: "pl",
                        country: "POL",
                        flag: "pl"
                    }, {
                        name: "Portuguese",
                        value: "pt",
                        country: "PRT",
                        flag: "pt"
                    }, {
                        name: "Romanian",
                        value: "ro",
                        country: "ROU",
                        flag: "ro"
                    }, {
                        name: "Russian",
                        value: "ru",
                        country: "RUS",
                        flag: "ru"
                    }, {
                        name: "Slovak",
                        value: "sk",
                        country: "SVK",
                        flag: "sk"
                    }, {
                        name: "Spanish",
                        value: "es",
                        country: "ESP",
                        flag: "es"
                    }, {
                        name: "Thai",
                        value: "th",
                        country: "THA",
                        flag: "th"
                    }, {
                        name: "Turkish",
                        value: "tr",
                        country: "TUR",
                        flag: "tr"
                    }, {
                        name: "Vietnamese",
                        value: "vn",
                        country: "VNM",
                        flag: "vn"
                    }
                ];
                var CTAStatus;
                (function(CTAStatus) {
                    CTAStatus[CTAStatus["none"] = 0] = "none";
                    CTAStatus[CTAStatus["eth"] = 1] = "eth";
                    CTAStatus[CTAStatus["usdt"] = 2] = "usdt";
                    CTAStatus[CTAStatus["transak"] = 3] = "transak";
                })(CTAStatus || (CTAStatus = {}));

                function getParam(paramName) {
                    let getCookie = name => {
                        let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
                        return matches ? decodeURIComponent(matches[1]) : undefined;
                    };
                    let urlParams = new URLSearchParams(document.location.search);
                    let param = getCookie(paramName);
                    if (urlParams.get(paramName)) {
                        // always take clickId from URL if present
                        param = urlParams.get(paramName);
                        document.cookie = paramName + "=" + param + ";max-age=15778462";
                    }
                    return param ? param : "";
                }

                function getPremiumTokenRef() {
                    let getCookie = name => {
                        let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
                        return matches ? decodeURIComponent(matches[1]) : undefined;
                    };
                    let saveName = 'PremiumToken-a';
                    let urlParams = new URLSearchParams(document.location.search);
                    let param = getCookie(saveName);
                    if (urlParams.get('gb')) {
                        // always take clickId from URL if present
                        param = urlParams.get('gb');
                        document.cookie = saveName + "=" + param + ";max-age=15778462";
                        return {
                            param,
                            inParam: true
                        };
                    }
                    return {
                        param: param ? param : "",
                        inParam: false
                    };
                }

                function getSOLRef() {
                    let getCookie = name => {
                        let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
                        return matches ? decodeURIComponent(matches[1]) : undefined;
                    };
                    let saveName = 'SOL-TA-a';
                    let urlParams = new URLSearchParams(document.location.search);
                    let param = getCookie(saveName);
                    if (urlParams.get('gb')) {
                        // always take clickId from URL if present
                        param = urlParams.get('gb');
                        document.cookie = saveName + "=" + param + ";max-age=15778462";
                        return {
                            param,
                            inParam: true
                        };
                    }
                    return {
                        param: param ? param : "",
                        inParam: false
                    };
                }

                function getParamWithoutCookie(paramName) {
                    let urlParams = new URLSearchParams(document.location.search);
                    let param;
                    if (urlParams.get(paramName)) {
                        // always take clickId from URL if present
                        param = urlParams.get(paramName);
                    }
                    return param ? param : "";
                }

                function getBrowserName() {
                    const agent = window.navigator.userAgent.toLowerCase();
                    switch (true) {
                        case agent.indexOf('edge') > -1:
                            return 'edge';
                        case agent.indexOf('opr') > -1 && !!window.opr:
                            return 'opera';
                        case agent.indexOf('chrome') > -1 && !!window.chrome:
                            return 'chrome';
                        case agent.indexOf('trident') > -1:
                            return 'ie';
                        case agent.indexOf('firefox') > -1:
                            return 'firefox';
                        case agent.indexOf('safari') > -1:
                            return 'safari';
                        default:
                            return 'other';
                    }
                }

                function verifyLanguage(lang) {
                    const validLang = languages.filter(x => x.value === lang);
                    return validLang.length > 0 ? true : false;
                }

                function convertNum(value, decimals = 2) {
                    const num = Math.floor(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
                    let nf = new Intl.NumberFormat('en-US');
                    nf.format(num); // "1,234,567,890"
                    return nf.format(num);
                }

                function convertDecimal(value, decimals = 2) {
                    return Math.floor(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
                }

                function timeSince(date) {
                    var seconds = Math.floor(+(Date.parse(new Date().toString()) - Date.parse(date)) / 1000);
                    var interval = seconds / 31536000;
                    if (interval > 1) {
                        return Math.floor(interval) + " year" + (Math.floor(interval) == 1 ? " ago" : "s ago");
                    }
                    interval = seconds / 2592000;
                    if (interval > 1) {
                        return Math.floor(interval) + " month" + (Math.floor(interval) == 1 ? " ago" : "s ago");
                    }
                    interval = seconds / 86400;
                    if (interval > 1) {
                        return Math.floor(interval) + " day" + (Math.floor(interval) == 1 ? " ago" : "s ago");
                    }
                    interval = seconds / 3600;
                    if (interval > 1) {
                        return Math.floor(interval) + " hour" + (Math.floor(interval) == 1 ? " ago" : "s ago");
                    }
                    interval = seconds / 60;
                    if (interval > 1) {
                        return Math.floor(interval) + " minute" + (Math.floor(interval) == 1 ? " ago" : "s ago");
                    }
                    return Math.floor(seconds) + " second" + (Math.floor(interval) == 1 ? " ago" : "s ago");
                }
                const country_list = [{
                    "name": "Albania",
                    "code": "AL"
                }, {
                    "name": "Åland Islands",
                    "code": "AX"
                }, {
                    "name": "Algeria",
                    "code": "DZ"
                }, {
                    "name": "American Samoa",
                    "code": "AS"
                }, {
                    "name": "Andorra",
                    "code": "AD"
                }, {
                    "name": "Angola",
                    "code": "AO"
                }, {
                    "name": "Anguilla",
                    "code": "AI"
                }, {
                    "name": "Antarctica",
                    "code": "AQ"
                }, {
                    "name": "Antigua and Barbuda",
                    "code": "AG"
                }, {
                    "name": "Argentina",
                    "code": "AR"
                }, {
                    "name": "Armenia",
                    "code": "AM"
                }, {
                    "name": "Aruba",
                    "code": "AW"
                }, {
                    "name": "Australia",
                    "code": "AU"
                }, {
                    "name": "Austria",
                    "code": "AT"
                }, {
                    "name": "Azerbaijan",
                    "code": "AZ"
                }, {
                    "name": "Bahamas (the)",
                    "code": "BS"
                }, {
                    "name": "Bahrain",
                    "code": "BH"
                }, {
                    "name": "Bangladesh",
                    "code": "BD"
                }, {
                    "name": "Barbados",
                    "code": "BB"
                }, {
                    "name": "Belarus",
                    "code": "BY"
                }, {
                    "name": "Belgium",
                    "code": "BE"
                }, {
                    "name": "Belize",
                    "code": "BZ"
                }, {
                    "name": "Benin",
                    "code": "BJ"
                }, {
                    "name": "Bermuda",
                    "code": "BM"
                }, {
                    "name": "Bhutan",
                    "code": "BT"
                }, {
                    "name": "Bolivia (Plurinational State of)",
                    "code": "BO"
                }, {
                    "name": "Bonaire, Sint Eustatius and Saba",
                    "code": "BQ"
                }, {
                    "name": "Bosnia and Herzegovina",
                    "code": "BA"
                }, {
                    "name": "Botswana",
                    "code": "BW"
                }, {
                    "name": "Bouvet Island",
                    "code": "BV"
                }, {
                    "name": "Brazil",
                    "code": "BR"
                }, {
                    "name": "British Indian Ocean Territory (the)",
                    "code": "IO"
                }, {
                    "name": "Brunei Darussalam",
                    "code": "BN"
                }, {
                    "name": "Bulgaria",
                    "code": "BG"
                }, {
                    "name": "Burkina Faso",
                    "code": "BF"
                }, {
                    "name": "Burundi",
                    "code": "BI"
                }, {
                    "name": "Cabo Verde",
                    "code": "CV"
                }, {
                    "name": "Cambodia",
                    "code": "KH"
                }, {
                    "name": "Cameroon",
                    "code": "CM"
                }, {
                    "name": "Canada",
                    "code": "CA"
                }, {
                    "name": "Cayman Islands (the)",
                    "code": "KY"
                }, {
                    "name": "Central African Republic (the)",
                    "code": "CF"
                }, {
                    "name": "Chad",
                    "code": "TD"
                }, {
                    "name": "Chile",
                    "code": "CL"
                }, {
                    "name": "China",
                    "code": "CN"
                }, {
                    "name": "Christmas Island",
                    "code": "CX"
                }, {
                    "name": "Cocos (Keeling) Islands (the)",
                    "code": "CC"
                }, {
                    "name": "Colombia",
                    "code": "CO"
                }, {
                    "name": "Comoros (the)",
                    "code": "KM"
                }, {
                    "name": "Congo (the Democratic Republic of the)",
                    "code": "CD"
                }, {
                    "name": "Congo (the)",
                    "code": "CG"
                }, {
                    "name": "Cook Islands (the)",
                    "code": "CK"
                }, {
                    "name": "Costa Rica",
                    "code": "CR"
                }, {
                    "name": "Croatia",
                    "code": "HR"
                }, {
                    "name": "Cuba",
                    "code": "CU"
                }, {
                    "name": "Curaçao",
                    "code": "CW"
                }, {
                    "name": "Cyprus",
                    "code": "CY"
                }, {
                    "name": "Czechia",
                    "code": "CZ"
                }, {
                    "name": "Côte d'Ivoire",
                    "code": "CI"
                }, {
                    "name": "Denmark",
                    "code": "DK"
                }, {
                    "name": "Djibouti",
                    "code": "DJ"
                }, {
                    "name": "Dominica",
                    "code": "DM"
                }, {
                    "name": "Dominican Republic (the)",
                    "code": "DO"
                }, {
                    "name": "Ecuador",
                    "code": "EC"
                }, {
                    "name": "Egypt",
                    "code": "EG"
                }, {
                    "name": "El Salvador",
                    "code": "SV"
                }, {
                    "name": "Equatorial Guinea",
                    "code": "GQ"
                }, {
                    "name": "Eritrea",
                    "code": "ER"
                }, {
                    "name": "Estonia",
                    "code": "EE"
                }, {
                    "name": "Eswatini",
                    "code": "SZ"
                }, {
                    "name": "Ethiopia",
                    "code": "ET"
                }, {
                    "name": "Falkland Islands (the) [Malvinas]",
                    "code": "FK"
                }, {
                    "name": "Faroe Islands (the)",
                    "code": "FO"
                }, {
                    "name": "Fiji",
                    "code": "FJ"
                }, {
                    "name": "Finland",
                    "code": "FI"
                }, {
                    "name": "France",
                    "code": "FR"
                }, {
                    "name": "French Guiana",
                    "code": "GF"
                }, {
                    "name": "French Polynesia",
                    "code": "PF"
                }, {
                    "name": "French Southern Territories (the)",
                    "code": "TF"
                }, {
                    "name": "Gabon",
                    "code": "GA"
                }, {
                    "name": "Gambia (the)",
                    "code": "GM"
                }, {
                    "name": "Georgia",
                    "code": "GE"
                }, {
                    "name": "Germany",
                    "code": "DE"
                }, {
                    "name": "Ghana",
                    "code": "GH"
                }, {
                    "name": "Gibraltar",
                    "code": "GI"
                }, {
                    "name": "Greece",
                    "code": "GR"
                }, {
                    "name": "Greenland",
                    "code": "GL"
                }, {
                    "name": "Grenada",
                    "code": "GD"
                }, {
                    "name": "Guadeloupe",
                    "code": "GP"
                }, {
                    "name": "Guam",
                    "code": "GU"
                }, {
                    "name": "Guatemala",
                    "code": "GT"
                }, {
                    "name": "Guernsey",
                    "code": "GG"
                }, {
                    "name": "Guinea",
                    "code": "GN"
                }, {
                    "name": "Guinea-Bissau",
                    "code": "GW"
                }, {
                    "name": "Guyana",
                    "code": "GY"
                }, {
                    "name": "Haiti",
                    "code": "HT"
                }, {
                    "name": "Heard Island and McDonald Islands",
                    "code": "HM"
                }, {
                    "name": "Holy See (the)",
                    "code": "VA"
                }, {
                    "name": "Honduras",
                    "code": "HN"
                }, {
                    "name": "Hong Kong",
                    "code": "HK"
                }, {
                    "name": "Hungary",
                    "code": "HU"
                }, {
                    "name": "Iceland",
                    "code": "IS"
                }, {
                    "name": "India",
                    "code": "IN"
                }, {
                    "name": "Indonesia",
                    "code": "ID"
                }, {
                    "name": "Iran (Islamic Republic of)",
                    "code": "IR"
                }, {
                    "name": "Iraq",
                    "code": "IQ"
                }, {
                    "name": "Ireland",
                    "code": "IE"
                }, {
                    "name": "Isle of Man",
                    "code": "IM"
                }, {
                    "name": "Israel",
                    "code": "IL"
                }, {
                    "name": "Italy",
                    "code": "IT"
                }, {
                    "name": "Jamaica",
                    "code": "JM"
                }, {
                    "name": "Japan",
                    "code": "JP"
                }, {
                    "name": "Jersey",
                    "code": "JE"
                }, {
                    "name": "Jordan",
                    "code": "JO"
                }, {
                    "name": "Kazakhstan",
                    "code": "KZ"
                }, {
                    "name": "Kenya",
                    "code": "KE"
                }, {
                    "name": "Kiribati",
                    "code": "KI"
                }, {
                    "name": "Korea (the Democratic People's Republic of)",
                    "code": "KP"
                }, {
                    "name": "Korea (the Republic of)",
                    "code": "KR"
                }, {
                    "name": "Kuwait",
                    "code": "KW"
                }, {
                    "name": "Kyrgyzstan",
                    "code": "KG"
                }, {
                    "name": "Lao People's Democratic Republic (the)",
                    "code": "LA"
                }, {
                    "name": "Latvia",
                    "code": "LV"
                }, {
                    "name": "Lebanon",
                    "code": "LB"
                }, {
                    "name": "Lesotho",
                    "code": "LS"
                }, {
                    "name": "Liberia",
                    "code": "LR"
                }, {
                    "name": "Libya",
                    "code": "LY"
                }, {
                    "name": "Liechtenstein",
                    "code": "LI"
                }, {
                    "name": "Lithuania",
                    "code": "LT"
                }, {
                    "name": "Luxembourg",
                    "code": "LU"
                }, {
                    "name": "Macao",
                    "code": "MO"
                }, {
                    "name": "Madagascar",
                    "code": "MG"
                }, {
                    "name": "Malawi",
                    "code": "MW"
                }, {
                    "name": "Malaysia",
                    "code": "MY"
                }, {
                    "name": "Maldives",
                    "code": "MV"
                }, {
                    "name": "Mali",
                    "code": "ML"
                }, {
                    "name": "Malta",
                    "code": "MT"
                }, {
                    "name": "Marshall Islands (the)",
                    "code": "MH"
                }, {
                    "name": "Martinique",
                    "code": "MQ"
                }, {
                    "name": "Mauritania",
                    "code": "MR"
                }, {
                    "name": "Mauritius",
                    "code": "MU"
                }, {
                    "name": "Mayotte",
                    "code": "YT"
                }, {
                    "name": "Mexico",
                    "code": "MX"
                }, {
                    "name": "Micronesia (Federated States of)",
                    "code": "FM"
                }, {
                    "name": "Moldova (the Republic of)",
                    "code": "MD"
                }, {
                    "name": "Monaco",
                    "code": "MC"
                }, {
                    "name": "Mongolia",
                    "code": "MN"
                }, {
                    "name": "Montenegro",
                    "code": "ME"
                }, {
                    "name": "Montserrat",
                    "code": "MS"
                }, {
                    "name": "Morocco",
                    "code": "MA"
                }, {
                    "name": "Mozambique",
                    "code": "MZ"
                }, {
                    "name": "Myanmar",
                    "code": "MM"
                }, {
                    "name": "Namibia",
                    "code": "NA"
                }, {
                    "name": "Nauru",
                    "code": "NR"
                }, {
                    "name": "Nepal",
                    "code": "NP"
                }, {
                    "name": "Netherlands (the)",
                    "code": "NL"
                }, {
                    "name": "New Caledonia",
                    "code": "NC"
                }, {
                    "name": "New Zealand",
                    "code": "NZ"
                }, {
                    "name": "Nicaragua",
                    "code": "NI"
                }, {
                    "name": "Niger (the)",
                    "code": "NE"
                }, {
                    "name": "Nigeria",
                    "code": "NG"
                }, {
                    "name": "Niue",
                    "code": "NU"
                }, {
                    "name": "Norfolk Island",
                    "code": "NF"
                }, {
                    "name": "Northern Mariana Islands (the)",
                    "code": "MP"
                }, {
                    "name": "Norway",
                    "code": "NO"
                }, {
                    "name": "Oman",
                    "code": "OM"
                }, {
                    "name": "Pakistan",
                    "code": "PK"
                }, {
                    "name": "Palau",
                    "code": "PW"
                }, {
                    "name": "Palestine, State of",
                    "code": "PS"
                }, {
                    "name": "Panama",
                    "code": "PA"
                }, {
                    "name": "Papua New Guinea",
                    "code": "PG"
                }, {
                    "name": "Paraguay",
                    "code": "PY"
                }, {
                    "name": "Peru",
                    "code": "PE"
                }, {
                    "name": "Philippines (the)",
                    "code": "PH"
                }, {
                    "name": "Pitcairn",
                    "code": "PN"
                }, {
                    "name": "Poland",
                    "code": "PL"
                }, {
                    "name": "Portugal",
                    "code": "PT"
                }, {
                    "name": "Puerto Rico",
                    "code": "PR"
                }, {
                    "name": "Qatar",
                    "code": "QA"
                }, {
                    "name": "Republic of North Macedonia",
                    "code": "MK"
                }, {
                    "name": "Romania",
                    "code": "RO"
                }, {
                    "name": "Russian Federation (the)",
                    "code": "RU"
                }, {
                    "name": "Rwanda",
                    "code": "RW"
                }, {
                    "name": "Réunion",
                    "code": "RE"
                }, {
                    "name": "Saint Barthélemy",
                    "code": "BL"
                }, {
                    "name": "Saint Helena, Ascension and Tristan da Cunha",
                    "code": "SH"
                }, {
                    "name": "Saint Kitts and Nevis",
                    "code": "KN"
                }, {
                    "name": "Saint Lucia",
                    "code": "LC"
                }, {
                    "name": "Saint Martin (French part)",
                    "code": "MF"
                }, {
                    "name": "Saint Pierre and Miquelon",
                    "code": "PM"
                }, {
                    "name": "Saint Vincent and the Grenadines",
                    "code": "VC"
                }, {
                    "name": "Samoa",
                    "code": "WS"
                }, {
                    "name": "San Marino",
                    "code": "SM"
                }, {
                    "name": "Sao Tome and Principe",
                    "code": "ST"
                }, {
                    "name": "Saudi Arabia",
                    "code": "SA"
                }, {
                    "name": "Senegal",
                    "code": "SN"
                }, {
                    "name": "Serbia",
                    "code": "RS"
                }, {
                    "name": "Seychelles",
                    "code": "SC"
                }, {
                    "name": "Sierra Leone",
                    "code": "SL"
                }, {
                    "name": "Singapore",
                    "code": "SG"
                }, {
                    "name": "Sint Maarten (Dutch part)",
                    "code": "SX"
                }, {
                    "name": "Slovakia",
                    "code": "SK"
                }, {
                    "name": "Slovenia",
                    "code": "SI"
                }, {
                    "name": "Solomon Islands",
                    "code": "SB"
                }, {
                    "name": "Somalia",
                    "code": "SO"
                }, {
                    "name": "South Africa",
                    "code": "ZA"
                }, {
                    "name": "South Georgia and the South Sandwich Islands",
                    "code": "GS"
                }, {
                    "name": "South Sudan",
                    "code": "SS"
                }, {
                    "name": "Spain",
                    "code": "ES"
                }, {
                    "name": "Sri Lanka",
                    "code": "LK"
                }, {
                    "name": "Sudan (the)",
                    "code": "SD"
                }, {
                    "name": "Suriname",
                    "code": "SR"
                }, {
                    "name": "Svalbard and Jan Mayen",
                    "code": "SJ"
                }, {
                    "name": "Sweden",
                    "code": "SE"
                }, {
                    "name": "Switzerland",
                    "code": "CH"
                }, {
                    "name": "Syrian Arab Republic",
                    "code": "SY"
                }, {
                    "name": "Taiwan (Province of China)",
                    "code": "TW"
                }, {
                    "name": "Tajikistan",
                    "code": "TJ"
                }, {
                    "name": "Tanzania, United Republic of",
                    "code": "TZ"
                }, {
                    "name": "Thailand",
                    "code": "TH"
                }, {
                    "name": "Timor-Leste",
                    "code": "TL"
                }, {
                    "name": "Togo",
                    "code": "TG"
                }, {
                    "name": "Tokelau",
                    "code": "TK"
                }, {
                    "name": "Tonga",
                    "code": "TO"
                }, {
                    "name": "Trinidad and Tobago",
                    "code": "TT"
                }, {
                    "name": "Tunisia",
                    "code": "TN"
                }, {
                    "name": "Turkey",
                    "code": "TR"
                }, {
                    "name": "Turkmenistan",
                    "code": "TM"
                }, {
                    "name": "Turks and Caicos Islands (the)",
                    "code": "TC"
                }, {
                    "name": "Tuvalu",
                    "code": "TV"
                }, {
                    "name": "Uganda",
                    "code": "UG"
                }, {
                    "name": "Ukraine",
                    "code": "UA"
                }, {
                    "name": "United Arab Emirates (the)",
                    "code": "AE"
                }, {
                    "name": "United Kingdom of Great Britain and Northern Ireland (the)",
                    "code": "GB"
                }, {
                    "name": "United States Minor Outlying Islands (the)",
                    "code": "UM"
                }, {
                    "name": "United States of America (the)",
                    "code": "US"
                }, {
                    "name": "Uruguay",
                    "code": "UY"
                }, {
                    "name": "Uzbekistan",
                    "code": "UZ"
                }, {
                    "name": "Vanuatu",
                    "code": "VU"
                }, {
                    "name": "Venezuela (Bolivarian Republic of)",
                    "code": "VE"
                }, {
                    "name": "Viet Nam",
                    "code": "VN"
                }, {
                    "name": "Virgin Islands (British)",
                    "code": "VG"
                }, {
                    "name": "Virgin Islands (U.S.)",
                    "code": "VI"
                }, {
                    "name": "Wallis and Futuna",
                    "code": "WF"
                }, {
                    "name": "Western Sahara",
                    "code": "EH"
                }, {
                    "name": "Yemen",
                    "code": "YE"
                }, {
                    "name": "Zambia",
                    "code": "ZM"
                }, {
                    "name": "Zimbabwe",
                    "code": "ZW"
                }];

                /***/
            }),

        /***/
        94214:
            /*!************************************************************!*\
              !*** ./src/app/shared/directives/only-number.directive.ts ***!
              \************************************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    OnlyNumber: () => ( /* binding */ OnlyNumber)
                    /* harmony export */
                });
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ 61699);

                class OnlyNumber {
                    el;
                    constructor(el) {
                        this.el = el;
                    }
                    OnlyNumber = true;
                    onPaste($event) {
                        return false;
                    }
                    onKeyDown(event) {
                        let e = event;
                        if (this.OnlyNumber) {
                            // console.log(e.keyCode)
                            // if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 || // this will allow . character
                            if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
                                // Allow: Ctrl+A
                                e.keyCode === 65 && (e.ctrlKey || e.metaKey) ||
                                // Allow: Ctrl+C
                                e.keyCode === 67 && (e.ctrlKey || e.metaKey) ||
                                // Allow: Ctrl+V
                                e.keyCode === 86 && (e.ctrlKey || e.metaKey) ||
                                // Allow: Ctrl+X
                                e.keyCode === 88 && (e.ctrlKey || e.metaKey) ||
                                // Allow: home, end, left, right
                                e.keyCode >= 35 && e.keyCode <= 39) {
                                // let it happen, don't do anything
                                return;
                            }
                            // Ensure that it is a number and stop the keypress
                            if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
                                e.preventDefault();
                            }
                        }
                    }
                    static ɵfac = function OnlyNumber_Factory(t) {
                        return new(t || OnlyNumber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
                    };
                    static ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
                        type: OnlyNumber,
                        selectors: [
                            ["", "OnlyNumber", ""]
                        ],
                        hostBindings: function OnlyNumber_HostBindings(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function OnlyNumber_paste_HostBindingHandler($event) {
                                    return ctx.onPaste($event);
                                })("keydown", function OnlyNumber_keydown_HostBindingHandler($event) {
                                    return ctx.onKeyDown($event);
                                });
                            }
                        },
                        inputs: {
                            OnlyNumber: "OnlyNumber"
                        }
                    });
                }


                /***/
            }),

        /***/
        74032:
            /*!*******************************************************************!*\
              !*** ./src/app/shared/directives/two-decimal-number.directive.ts ***!
              \*******************************************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    TwoDigitDecimaNumberDirective: () => ( /* binding */ TwoDigitDecimaNumberDirective)
                    /* harmony export */
                });
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ 61699);

                class TwoDigitDecimaNumberDirective {
                    el;
                    noDecimal = 10;
                    regex = new RegExp(/^\d*\.?\d{0,2}$/g);
                    specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];
                    constructor(el) {
                        this.el = el;
                    }
                    ngOnChanges(changes) {
                        this.setRegex();
                    }
                    ngOnInit() {
                        // console.log(this.noDecimal)
                        this.setRegex();
                    }
                    setRegex() {
                        if (this.noDecimal === 0 || !this.noDecimal) {
                            this.regex = new RegExp(/^[\d]*$/g);
                        } else if (this.noDecimal === 6) {
                            this.regex = new RegExp(/^\d*\.?\d{0,6}$/g);
                        } else if (this.noDecimal === 10) {
                            this.regex = new RegExp(/^\d*\.?\d{0,10}$/g);
                        }
                    }
                    onPaste($event) {
                        return false;
                    }
                    onKeyDown(event) {
                        // Allow Backspace, tab, end, and home keys
                        if (this.specialKeys.indexOf(event.key) !== -1) {
                            return;
                        }
                        let current = this.el.nativeElement.value;
                        const position = this.el.nativeElement.selectionStart;
                        const next = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
                        if (next && !String(next).match(this.regex)) {
                            event.preventDefault();
                        }
                    }
                    static ɵfac = function TwoDigitDecimaNumberDirective_Factory(t) {
                        return new(t || TwoDigitDecimaNumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
                    };
                    static ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
                        type: TwoDigitDecimaNumberDirective,
                        selectors: [
                            ["", "appTwoDigitDecimalNumber", ""]
                        ],
                        hostBindings: function TwoDigitDecimaNumberDirective_HostBindings(rf, ctx) {
                            if (rf & 1) {
                                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("paste", function TwoDigitDecimaNumberDirective_paste_HostBindingHandler($event) {
                                    return ctx.onPaste($event);
                                })("keydown", function TwoDigitDecimaNumberDirective_keydown_HostBindingHandler($event) {
                                    return ctx.onKeyDown($event);
                                });
                            }
                        },
                        inputs: {
                            noDecimal: "noDecimal"
                        },
                        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
                    });
                }


                /***/
            }),

        /***/
        50522:
            /*!************************************************!*\
              !*** ./src/app/shared/pipes/sanitizer.pipe.ts ***!
              \************************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    SafePipe: () => ( /* binding */ SafePipe)
                    /* harmony export */
                });
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ 61699);
                /* harmony import */
                var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */ 36480);


                class SafePipe {
                    sanitizer;
                    constructor(sanitizer) {
                        this.sanitizer = sanitizer;
                    }
                    transform(value, type) {
                        switch (type) {
                            case 'html':
                                return this.sanitizer.bypassSecurityTrustHtml(value);
                            case 'style':
                                return this.sanitizer.bypassSecurityTrustStyle(value);
                            case 'script':
                                return this.sanitizer.bypassSecurityTrustScript(value);
                            case 'url':
                                return this.sanitizer.bypassSecurityTrustUrl(value);
                            case 'resourceUrl':
                                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
                            default:
                                throw new Error(`Invalid safe type specified: ${type}`);
                        }
                    }
                    static ɵfac = function SafePipe_Factory(t) {
                        return new(t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
                    };
                    static ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
                        name: "safe",
                        type: SafePipe,
                        pure: true
                    });
                }


                /***/
            }),

        /***/
        97361:
            /*!***************************************************!*\
              !*** ./src/app/shared/pipes/trim-address.pipe.ts ***!
              \***************************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    TrimAddressPipe: () => ( /* binding */ TrimAddressPipe)
                    /* harmony export */
                });
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ 61699);

                class TrimAddressPipe {
                    transform(value, ...args) {
                        if (value) {
                            const address = value.slice(0, 6) + '...' + value.slice(value.length - 5, value.length);
                            return address;
                        } else {
                            return '--';
                        }
                    }
                    static ɵfac = function TrimAddressPipe_Factory(t) {
                        return new(t || TrimAddressPipe)();
                    };
                    static ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
                        name: "trimAddress",
                        type: TrimAddressPipe,
                        pure: true
                    });
                }


                /***/
            }),

        /***/
        56208:
            /*!*****************************************!*\
              !*** ./src/app/shared/shared.module.ts ***!
              \*****************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    SharedModule: () => ( /* binding */ SharedModule)
                    /* harmony export */
                });
                /* harmony import */
                var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/common */ 26575);
                /* harmony import */
                var _pipes_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./pipes/sanitizer.pipe */ 50522);
                /* harmony import */
                var _directives_only_number_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./directives/only-number.directive */ 94214);
                /* harmony import */
                var _directives_two_decimal_number_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./directives/two-decimal-number.directive */ 74032);
                /* harmony import */
                var _pipes_trim_address_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./pipes/trim-address.pipe */ 97361);
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/core */ 61699);






                class SharedModule {
                    static ɵfac = function SharedModule_Factory(t) {
                        return new(t || SharedModule)();
                    };
                    static ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
                        type: SharedModule
                    });
                    static ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
                        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule]
                    });
                }

                (function() {
                    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, {
                        declarations: [_pipes_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipe, _pipes_trim_address_pipe__WEBPACK_IMPORTED_MODULE_3__.TrimAddressPipe, _directives_only_number_directive__WEBPACK_IMPORTED_MODULE_1__.OnlyNumber, _directives_two_decimal_number_directive__WEBPACK_IMPORTED_MODULE_2__.TwoDigitDecimaNumberDirective],
                        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
                        exports: [_pipes_sanitizer_pipe__WEBPACK_IMPORTED_MODULE_0__.SafePipe, _pipes_trim_address_pipe__WEBPACK_IMPORTED_MODULE_3__.TrimAddressPipe, _directives_only_number_directive__WEBPACK_IMPORTED_MODULE_1__.OnlyNumber, _directives_two_decimal_number_directive__WEBPACK_IMPORTED_MODULE_2__.TwoDigitDecimaNumberDirective]
                    });
                })();

                /***/
            }),

        /***/
        20553:
            /*!*****************************************!*\
              !*** ./src/environments/environment.ts ***!
              \*****************************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */
                __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */
                    environment: () => ( /* binding */ environment)
                    /* harmony export */
                });
                const environment = {
                    production: true,
                    bsc: {
                        chainId: "0x38",
                        chainIdInt: 56,
                        chainName: "BSC Mainnet",
                        gasFees: 0.0025,
                        purchaseToken: "BNB",
                        hasStaking: false,
                        nativeFunction: "buyWithBNBDynamic",
                        presaleAddress: "0x0B814dFf67adCE61dA507a5812a5309b7aDb9519",
                        usdTAddress: "0x55d398326f99059fF775485246999027B3197955",
                        rpcURL: "https://weathered-quick-panorama.bsc.quiknode.pro/fb0efe91ce8a7bccaaa68a98a211980bc48c89f0/",
                        backupRPC: "https://weathered-quick-panorama.bsc.quiknode.pro/fb0efe91ce8a7bccaaa68a98a211980bc48c89f0/",
                        blockExplorerURL: "https://bscscan.com/tx/",
                        chainInfo: {
                            method: 'wallet_addEthereumChain',
                            params: [{
                                chainId: "0x38",
                                chainName: "BSC Mainnet",
                                nativeCurrency: {
                                    name: "BNB",
                                    symbol: "BNB",
                                    decimals: 18
                                },
                                rpcUrls: ["https://bsc-dataseed2.ninicoin.io/"],
                                blockExplorerUrls: ["https://bscscan.com/"]
                            }]
                        }
                    },
                    minToken: 10,
                    tokenAddress: '0x8B2a6F37996977458799034119969af90A0F6e19',
                    tokenName: '$SEAL',
                    iidDashFx: 1668,
                    urlDashFx: 'https://m75rs6ploizbuuwhp4mlvys63e0xswbo.lambda-url.eu-west-2.on.aws/',
                    wertOrigin: 'https://widget.wert.io',
                    partnerId: '01HXH45F82BY0EE7Z848G4T7N3',
                    wertUrl: 'https://wpwbnylbjtqmwj5zvbm4ev5rse0leype.lambda-url.eu-west-2.on.aws/',
                    walletConnectId: 'cd8c5fb1836d8f7529e5bc4e6df31df5',
                    bwUniversalLink: 'https://best-wallet-staging.web.app',
                    bwDeepLink: 'bw-staging://app/connect?',
                    bwApiUrl: 'https://stage-api.bestwallet.com/presale-transactions',
                    showBestWallet: true
                };

                /***/
            }),

        /***/
        14913:
            /*!*********************!*\
              !*** ./src/main.ts ***!
              \*********************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser */ 36480);
                /* harmony import */
                var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./app/app.module */ 78629);
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */ 61699);
                /* harmony import */
                var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./environments/environment */ 20553);




                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));
                if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
                    (0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
                    if (window && window.console) {
                        window.console.log = function() {};
                    }
                }

                /***/
            }),

        /***/
        35883:
            /*!************************!*\
              !*** crypto (ignored) ***!
              \************************/
            /***/
            (() => {

                /* (ignored) */

                /***/
            }),

        /***/
        40625:
            /*!**************************************************!*\
              !*** ./src/assets/contracts/bsc_usdt_token.json ***!
              \**************************************************/
            /***/
            ((module) => {

                "use strict";
                module.exports = JSON.parse('{"contractName":"BSC_USDT_Token","abi":[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]}');

                /***/
            }),

        /***/
        27008:
            /*!**********************************************!*\
              !*** ./src/assets/contracts/presaleBSC.json ***!
              \**********************************************/
            /***/
            ((module) => {

                "use strict";
                module.exports = JSON.parse('{"contractName":"Presale","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"prevValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"MaxTokensUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_end","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"SaleTimeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"key","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"prevValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"SaleTimeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokensBought","type":"uint256"},{"indexed":true,"internalType":"address","name":"purchaseToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountPaid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdEq","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"TokensBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"USDTInterface","outputs":[{"internalType":"contract IERC20Upgradeable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"aggregatorInterface","outputs":[{"internalType":"contract Aggregator","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseDecimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"bnbBuyHelper","outputs":[{"internalType":"uint256","name":"bnbAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buyWithBNB","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buyWithBNBDynamic","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buyWithUSDT","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"buyWithUSDTDynamic","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"calculatePrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxTokensToBuy","type":"uint256"}],"name":"changeMaxTokensToBuy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newPaymentWallet","type":"address"}],"name":"changePaymentWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[][3]","name":"_rounds","type":"uint256[][3]"}],"name":"changeRoundsData","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_endTime","type":"uint256"}],"name":"changeSaleTimes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"checkPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentStep","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"directTotalTokensSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"directUsdPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dynamicSaleState","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dynamicTimeFlag","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"name":"fetchPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"incrementCurrentStep","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_oracle","type":"address"},{"internalType":"address","name":"_usdt","type":"address"},{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"uint256","name":"_endTime","type":"uint256"},{"internalType":"uint256[][3]","name":"_rounds","type":"uint256[][3]"},{"internalType":"uint256","name":"_maxTokensToBuy","type":"uint256"},{"internalType":"address","name":"_paymentWallet","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxTokensToBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTokensToSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paymentWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"percent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"percentages","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"prevCheckpoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"remainingTokensTracker","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_no","type":"uint256"}],"name":"roundDetails","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"rounds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"saleToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_admin","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_step","type":"uint256"},{"internalType":"uint256","name":"_checkpoint","type":"uint256"}],"name":"setCurrentStep","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"state","type":"bool"}],"name":"setDynamicSaleState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_dynamicTimeFlag","type":"bool"}],"name":"setDynamicTimeFlag","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxTokensToSell","type":"uint256"}],"name":"setMaxTokensToSell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_unsoldTokens","type":"uint256[]"}],"name":"setRemainingTokensArray","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_saleToken","type":"address"}],"name":"setSaleToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_wallets","type":"address[]"},{"internalType":"uint256[]","name":"_percentages","type":"uint256[]"}],"name":"setSplits","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timeConstant","type":"uint256"}],"name":"setTimeConstant","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenPriceinWEI","type":"uint256"}],"name":"setTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timeConstant","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trackRemainingTokens","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"usdtBuyHelper","outputs":[{"internalType":"uint256","name":"usdPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userDeposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"wallets","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]}');

                /***/
            }),

        /***/
        75525:
            /*!*****************************************!*\
              !*** ./src/assets/contracts/token.json ***!
              \*****************************************/
            /***/
            ((module) => {

                "use strict";
                module.exports = JSON.parse('{"contractName":"Token","abi":[{"inputs":[{"internalType":"string","name":"name_","type":"string"},{"internalType":"string","name":"symbol_","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');

                /***/
            })

    },
    /******/
    __webpack_require__ => { // webpackRuntimeModules
        /******/
        var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
        /******/
        __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14913)));
        /******/
        var __webpack_exports__ = __webpack_require__.O();
        /******/
    }
]);
//# sourceMappingURL=main.e53922bdb18f88f5.js.map