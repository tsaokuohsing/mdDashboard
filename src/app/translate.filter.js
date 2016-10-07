(function() {
    'use strict';

    angular
        .module('mdDashboard')
        .filter('mddTranslate', mddTranslateFilter);

    /* @ngInject */
    function mddTranslateFilter($injector, $filter) {
        return function(input) {
            // if angular translate installed this will return true
            // so we can translate
            if($injector.has('translateFilter')) {
                return $filter('translate')(input);
            }
            else {
                // no translation active so just return the same input
                return input;
            }
        };
    }
})();
