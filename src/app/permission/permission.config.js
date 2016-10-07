(function() {
    'use strict';

    angular
        .module('app.custom.permission')
        .config(permissionConfig);

    /* @ngInject */
    function permissionConfig($stateProvider, mddMenuProvider) {
        $stateProvider
        .state('mdDashboard.permission', {
            url: '/permission',
            templateUrl: 'app/permission/pages/permission.tmpl.html',
            controller: 'PermissionController',
            controllerAs: 'vm',
            resolve: {
                users: ['UserService', function(UserService) {
                    return UserService.getUsers();
                }]
            },
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.permission-define', {
            url: '/permission/define',
            templateUrl: 'app/permission/pages/permission-define.tmpl.html',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.permission-routes', {
            url: '/permission/routes',
            templateUrl: 'app/permission/pages/permission-routes.tmpl.html',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.permission-views', {
            url: '/permission/views',
            templateUrl: 'app/permission/pages/permission-views.tmpl.html',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        });

        mddMenuProvider.addMenu({
            name: 'Permissions',
            icon: 'zmdi zmdi-lock',
            type: 'dropdown',
            priority: 4.1,
            children: [{
                name: 'Permissions',
                state: 'mdDashboard.permission',
                type: 'link'
            },{
                name: 'Define Permissions & Roles',
                state: 'mdDashboard.permission-define',
                type: 'link'
            },{
                name: 'Routes',
                state: 'mdDashboard.permission-routes',
                type: 'link'
            },{
                name: 'Views',
                state: 'mdDashboard.permission-views',
                type: 'link'
            }]
        });
    }
})();
