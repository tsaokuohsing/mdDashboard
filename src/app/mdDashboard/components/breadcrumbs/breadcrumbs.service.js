(function() {
    'use strict';

    angular
        .module('mdDashboard.components')
        .factory('mddBreadcrumbsService', BreadcrumbsService);

    /* @ngInject */
    function BreadcrumbsService($rootScope) {
        var crumbs = [];

        return {
            breadcrumbs: {
                crumbs: crumbs
            },
            addCrumb: addCrumb,
            reset: reset
        };

        ////////////////

        function addCrumb(item) {
            this.breadcrumbs.crumbs.unshift(item);
            $rootScope.$emit('changeTitle');
        }

        function reset() {
            this.breadcrumbs.crumbs = [];
        }
    }
})();
