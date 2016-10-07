(function() {
    'use strict';

    angular
        .module('mdDashboard', [
            'ngMaterial',
            'mdDashboard.layouts', 'mdDashboard.components', 'mdDashboard.themes', 'mdDashboard.directives', 'mdDashboard.router',
            // 'mdDashboard.profiler',
            // uncomment above to activate the speed profiler
            'ui.router'
        ]).run(run);

    /* @ngInject */
    function run($rootScope, $timeout, $window) {
        // add a class to the body if we are on windows
        if($window.navigator.platform.indexOf('Win') !== -1) {
            $rootScope.bodyClasses = ['os-windows'];
        }
    }
})();