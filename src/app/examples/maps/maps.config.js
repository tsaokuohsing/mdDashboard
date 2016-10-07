(function() {
    'use strict';

    angular
        .module('app.custom.examples.maps')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, uiGmapGoogleMapApiProvider, mddMenuProvider) {

        $stateProvider
        .state('mdDashboard.maps-fullwidth', {
            url: '/maps/fullwidth',
            templateUrl: 'app/examples/maps/maps-fullwidth.tmpl.html',
            controller: 'MapController',
            controllerAs: 'vm',
            data: {
                permissions: {
                    only: ['viewMaps']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.maps-demos', {
            url: '/maps/demos',
            templateUrl: 'app/examples/maps/maps-demo.tmpl.html',
            data: {
                permissions: {
                    only: ['viewMaps']
                }
            }
        });

        uiGmapGoogleMapApiProvider.configure({
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });

        mddMenuProvider.addMenu({
            name: 'Maps',
            icon: 'zmdi zmdi-pin',
            type: 'dropdown',
            priority: 7.1,
            permission: 'viewMaps',
            children: [{
                name: 'Fullwidth',
                state: 'mdDashboard.maps-fullwidth',
                type: 'link'
            },{
                name: 'Demos',
                state: 'mdDashboard.maps-demos',
                type: 'link'
            }]
        });
    }
})();
