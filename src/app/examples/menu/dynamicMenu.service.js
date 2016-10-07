(function() {
    'use strict';

    angular
        .module('app.custom.examples.menu')
        .factory('dynamicMenuService', dynamicMenuService);

    /* @ngInject */
    function dynamicMenuService() {
        return {
            dynamicMenu: {
                showDynamicMenu: false
            }
        };
    }
})();
