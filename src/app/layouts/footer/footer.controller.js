(function() {
    'use strict';

    angular
        .module('app.custom')
        .controller('AppFooterController', FooterController);

    /* @ngInject */
    function FooterController(mddLayout, mddSettings) {
        var vm = this;

        vm.layout = mddLayout;
        vm.settings = mddSettings;
    }
})();
