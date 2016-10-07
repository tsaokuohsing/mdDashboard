(function() {
    'use strict';

    angular
        .module('app.custom.examples.ui')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, mddMenuProvider) {

        $stateProvider
        .state('mdDashboard.ui-typography', {
            url: '/ui/typography',
            controller: 'TypographyController',
            controllerAs: 'vm',
            templateUrl: 'app/examples/ui/typography.tmpl.html'
        })
        .state('mdDashboard.ui-colors', {
            url: '/ui/colors',
            controller: 'ColorsController',
            controllerAs: 'vm',
            templateUrl: 'app/examples/ui/colors.tmpl.html'
        })
        .state('mdDashboard.ui-material-icons', {
            url: '/ui/material-icons',
            controller: 'MaterialIconsController',
            controllerAs: 'vm',
            templateUrl: 'app/examples/ui/material-icons.tmpl.html',
            resolve: {
                icons: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'elements/icons'
                    });
                }
            }
        })
        .state('mdDashboard.ui-weather-icons', {
            url: '/ui/weather-icons',
            controller: 'WeatherIconsController',
            controllerAs: 'vm',
            templateUrl: 'app/examples/ui/weather-icons.tmpl.html'
        })
        .state('mdDashboard.ui-fa-icons', {
            url: '/ui/fa-icons',
            controller: 'FaIconsController',
            controllerAs: 'vm',
            templateUrl: 'app/examples/ui/fa-icons.tmpl.html',
            resolve: {
                icons: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'elements/icons-fa'
                    });
                }
            }
        })

        .state('mdDashboard.ui-toolbar', {
            url: '/ui/toolbars/:extraClass/:background/:shrink',
            controller: 'ToolbarsUIController',
            controllerAs: 'vm',
            templateUrl: 'app/examples/ui/toolbars.tmpl.html'
        })

        .state('mdDashboard.ui-skins', {
            url: '/ui/skins',
            controller: 'SkinsUIController',
            controllerAs: 'vm',
            templateUrl: 'app/examples/ui/skins.tmpl.html'
        });

        mddMenuProvider.addMenu({
            name: 'UI',
            icon: 'zmdi zmdi-ruler',
            type: 'dropdown',
            priority: 3.2,
            children: [{
                name: 'Colors',
                state: 'mdDashboard.ui-colors',
                type: 'link'
            },{
                name: 'Font Awesome',
                state: 'mdDashboard.ui-fa-icons',
                type: 'link'
            },{
                name: 'Material Icons',
                state: 'mdDashboard.ui-material-icons',
                type: 'link'
            },{
                name: 'Skins',
                state: 'mdDashboard.ui-skins',
                type: 'link'
            },{
                name: 'Typography',
                state: 'mdDashboard.ui-typography',
                type: 'link'
            },{
                name: 'Weather Icons',
                state: 'mdDashboard.ui-weather-icons',
                type: 'link'
            }]
        });
    }
})();
