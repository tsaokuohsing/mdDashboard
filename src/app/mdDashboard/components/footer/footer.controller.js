(function() {
    'use strict';

    angular
        .module('mdDashboard.components')
        .controller('FooterController', FooterController);

    /* @ngInject */
    function FooterController(mddSettings, mddLayout) {
        var vm = this;
        vm.name = mddSettings.name;
        vm.copyright = mddSettings.copyright;
        vm.layout = mddLayout.layout;
        vm.version = mddSettings.version;
    }
})();