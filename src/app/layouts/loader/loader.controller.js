(function() {
    'use strict';

    angular
        .module('app.custom')
        .controller('LoaderController', LoaderController);

    /* @ngInject */
    function LoaderController(mddSettings) {
        var vm = this;

        vm.mddSettings = mddSettings;
    }
})();
