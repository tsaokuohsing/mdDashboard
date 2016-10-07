(function() {
    'use strict';

    angular
        .module('mdDashboard.router', []).run(run);

    /* @ngInject */
    function run($rootScope, $window, $state, $filter, $timeout, $injector, mddRoute, mddBreadcrumbsService) {
        var breadcrumbs = mddBreadcrumbsService.breadcrumbs;

        // change title when language changes - when a menu item is clicked - on app init
        var menuTitleHandler = $rootScope.$on('changeTitle', function(){
            setFullTitle();
        });

        $rootScope.$on('$destroy', function(){
            menuTitleHandler();
        });

        function setFullTitle() {
            $timeout(function(){
                var title = mddRoute.title;
                angular.forEach(breadcrumbs.crumbs, function(crumb){
                    var name = crumb.name;
                    if($injector.has('translateFilter')) {
                        name = $filter('translate')(crumb.name);
                    }
                    title +=' ' + mddRoute.separator + ' ' + name;
                });
                $window.document.title = title;
            });
        }
    }
})();