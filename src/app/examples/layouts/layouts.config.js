(function() {
    'use strict';

    angular
        .module('app.custom.examples.layouts')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, mddMenuProvider) {

        $stateProvider
        .state('mdDashboard.standard-page',  {
            url: '/layouts/standard-page',
            templateUrl: 'app/examples/layouts/standard-page.tmpl.html',
            data: {
                layout: {
                    contentClass: 'layout-column'
                },
                permissions: {
                    only: ['viewLayouts']
                }
            }
        })
        .state('mdDashboard.no-scroll-page',  {
            url: '/layouts/no-scroll-page',
            templateUrl: 'app/examples/layouts/no-scroll-page.tmpl.html',
            data: {
                layout: {
                    contentClass: 'mdDashboard-non-scrolling'
                },
                permissions: {
                    only: ['viewLayouts']
                }
            }
        })
        .state('mdDashboard.layouts-composer', {
            url: '/layouts/composer',
            templateUrl: 'app/examples/layouts/composer.tmpl.html',
            controller: 'LayoutsComposerController',
            controllerAs: 'vm',
            data: {
                permissions: {
                    only: ['viewLayouts']
                }
            }
        })
        .state('mdDashboard.layouts-example-full-width', {
            url: '/layouts/full-width',
            templateUrl: 'app/examples/dashboards/general/dashboard-general.tmpl.html',
            data: {
                layout: {
                    sideMenuSize: 'hidden'
                },
                permissions: {
                    only: ['viewLayouts']
                }
            }
        })
        .state('mdDashboard.layouts-example-tall-toolbar', {
            url: '/layouts/tall-toolbar',
            templateUrl: 'app/examples/dashboards/server/dashboard-server.tmpl.html',
            controller: 'DashboardServerController',
            controllerAs: 'vm',
            data: {
                layout: {
                    toolbarSize: 'md-tall',
                    toolbarClass: 'md-warn'
                },
                permissions: {
                    only: ['viewLayouts']
                }
            }
        })
        .state('mdDashboard.layouts-example-icon-menu', {
            url: '/layouts/icon-menu',
            templateUrl: 'app/examples/dashboards/general/dashboard-general.tmpl.html',
            data: {
                layout: {
                    sideMenuSize: 'icon'
                },
                permissions: {
                    only: ['viewLayouts']
                }
            }
        });

        mddMenuProvider.addMenu({
            name: 'Layouts',
            icon: 'zmdi zmdi-view-module',
            type: 'dropdown',
            priority: 2.4,
            permission: 'viewLayouts',
            children: [{
                name: 'Standard Page',
                type: 'link',
                state: 'mdDashboard.standard-page'
            },{
                name: 'Non Scrolling Page',
                type: 'link',
                state: 'mdDashboard.no-scroll-page'
            },{
                name: 'Full Width Layout',
                type: 'link',
                state: 'mdDashboard.layouts-example-full-width'
            },{
                name: 'Icon Menu',
                type: 'link',
                state: 'mdDashboard.layouts-example-icon-menu'
            },{
                name: 'Tall Toolbar with background',
                type: 'link',
                state: 'mdDashboard.layouts-example-tall-toolbar'
            },{
                name: 'Composer',
                type: 'link',
                state: 'mdDashboard.layouts-composer'
            }]
        });
    }
})();
