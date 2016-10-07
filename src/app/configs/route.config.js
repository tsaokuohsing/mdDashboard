(function() {
    'use strict';

    angular
        .module('app.custom')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($locationProvider) {
        // Setup the apps routes
        $locationProvider.hashPrefix('!');

        // 404 & 500 pages
        // $stateProvider
        // .state('404', {
        //     url: '/404',
        //     views: {
        //         'root': {
        //             templateUrl: '404.tmpl.html',
        //             controller: 'ErrorPageController',
        //             controllerAs: 'vm'
        //         }
        //     }
        // })
        //
        // .state('401', {
        //     url: '/401',
        //     views: {
        //         'root': {
        //             templateUrl: '401.tmpl.html',
        //             controller: 'ErrorPageController',
        //             controllerAs: 'vm'
        //         }
        //     }
        // })
        //
        // .state('500', {
        //     url: '/500',
        //     views: {
        //         'root': {
        //             templateUrl: '500.tmpl.html',
        //             controller: 'ErrorPageController',
        //             controllerAs: 'vm'
        //         }
        //     }
        // });


        // set default routes when no path specified
        // $urlRouterProvider.when('', '/dashboards/analytics');
        // $urlRouterProvider.when('/', '/dashboards/analytics');

        // always goto 404 if route not found
        // $urlRouterProvider.otherwise(/* @ngInject */function($injector) {
        //     var $state = $injector.get('$state');
        //     $state.go('404');
        // });
    }
})();
