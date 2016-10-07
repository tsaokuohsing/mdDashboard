(function () {
    'use strict';

    angular
        .module('app.custom.examples.dashboards')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, mddMenuProvider) {
        $stateProvider
            .state('mdDashboard.sales-layout', {
                abstract: true,
                views: {
                    sidebarLeft: {
                        templateUrl: 'app/layouts/leftsidenav/leftsidenav.tmpl.html',
                        controller: 'MenuController',
                        controllerAs: 'vm'
                    },
                    content: {
                        template: '<div id="admin-panel-content-view" flex ui-view></div>'
                    },
                    belowContent: {
                        template: '<div ui-view="belowContent"></div>'
                    }
                }
            })
            .state('mdDashboard.dashboard-general', {
                url: '/dashboards/general',
                templateUrl: 'app/examples/dashboards/general/dashboard-general.tmpl.html'
            })
            .state('mdDashboard.dashboard-analytics', {
                url: '/dashboards/analytics',
                templateUrl: 'app/examples/dashboards/analytics/dashboard-analytics.tmpl.html',
                controller: 'DashboardAnalyticsController',
                controllerAs: 'vm'
            })
            .state('mdDashboard.dashboard-general2', {
                url: '/:siteName/dashboard-general',
                params: {
                    siteName: ''
                },
                templateProvider: ['pageData', 'customService', function (pageData, customService) {
                    return customService.compileAll(pageData.content);
                }],
                resolve: {
                    pageData: ['$lazyLoad', function ($lazyLoad) {
                        return $lazyLoad.load('page', 'dashboard-general');
                    }]
                }
                // templateUrl: 'app/examples/dashboards/general/dashboard-general.tmpl.html'
            })
            .state('mdDashboard.dashboard-analytics2', {
                params: {
                    siteName: ''
                },
                url: '/:siteName/dashboard-analytics',
                // templateUrl: 'app/examples/dashboards/analytics/dashboard-analytics.tmpl.html',
                controller: 'DashboardAnalyticsController',
                controllerAs: 'vm',
                templateProvider: ['pageData', 'customService', function (pageData, customService) {
                    return customService.compileAll(pageData.content);
                }],
                resolve: {
                    pageData: ['$lazyLoad', function ($lazyLoad) {
                        return $lazyLoad.load('page', 'dashboard-anlytics');
                    }]
                }
            })
            .state('mdDashboard.dashboard-server', {
                url: '/dashboards/server',
                templateUrl: 'app/examples/dashboards/server/dashboard-server.tmpl.html',
                controller: 'DashboardServerController',
                controllerAs: 'vm'
            })
            .state('mdDashboard.dashboard-widgets', {
                url: '/dashboards/widgets',
                templateUrl: 'app/examples/dashboards/widgets.tmpl.html'
            })
            .state('mdDashboard.dashboard-social', {
                url: '/dashboards/social',
                templateUrl: 'app/examples/dashboards/social/dashboard-social.tmpl.html',
                controller: 'DashboardSocialController',
                controllerAs: 'vm'
            })
            .state('mdDashboard.dashboard-sales', {
                url: '/dashboards/sales',
                data: {
                    layout: {
                        showToolbar: false
                    }
                },
                views: {
                    '': {
                        templateUrl: 'app/examples/dashboards/sales/dashboard-sales.tmpl.html',
                        controller: 'DashboardSalesController',
                        controllerAs: 'vm'
                    },
                    'belowContent': {
                        templateUrl: 'app/examples/dashboards/sales/fab-button.tmpl.html',
                        controller: 'SalesFabController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('mdDashboard.dashboard-draggable', {
                url: '/dashboards/draggable-widgets',
                templateUrl: 'app/examples/dashboards/dashboard-draggable.tmpl.html',
                controller: 'DashboardDraggableController',
                controllerAs: 'vm'
            });

        mddMenuProvider.addMenu({
            name: 'Dashboards',
            icon: 'zmdi zmdi-home',
            type: 'dropdown',
            priority: 1.1,
            children: [{
                name: 'Analytics',
                state: 'mdDashboard.dashboard-analytics',
                type: 'link'
            }, {
                name: 'General',
                state: 'mdDashboard.dashboard-general',
                type: 'link'
            }, {
                name: 'Sales',
                state: 'mdDashboard.dashboard-sales',
                type: 'link'
            }, {
                name: 'Server',
                state: 'mdDashboard.dashboard-server',
                type: 'link'
            }, {
                name: 'Social',
                state: 'mdDashboard.dashboard-social',
                type: 'link'
            }, {
                name: 'Widgets',
                state: 'mdDashboard.dashboard-widgets',
                type: 'link'
            }, {
                name: 'Draggable',
                state: 'mdDashboard.dashboard-draggable',
                type: 'link'
            }]
        });

    }
})();
