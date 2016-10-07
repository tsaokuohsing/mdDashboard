(function() {
    'use strict';

    angular
        .module('app.custom.examples.elements')
        .controller('Loader1Controller', Loader1Controller);

    /* @ngInject */
    function Loader1Controller($timeout, mddLoaderService) {
        var vm = this;

        vm.showLoader = showLoader;
        vm.time = 5;

        ////////////

        function showLoader() {
            // turn the loader on
            mddLoaderService.setLoaderActive(true);

            // wait for a while
            $timeout(function() {
                // now turn it off
                mddLoaderService.setLoaderActive(false);
            }, vm.time * 1000);
        }
    }
})();
