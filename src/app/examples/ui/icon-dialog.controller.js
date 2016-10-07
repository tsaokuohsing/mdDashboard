(function() {
    'use strict';

    angular
        .module('app.custom.examples.ui')
        .controller('IconDialogController', IconDialogController);

    /* @ngInject */
    function IconDialogController($mdDialog) {
        var vm = this;
        vm.closeDialog = closeDialog;

        function closeDialog() {
            $mdDialog.hide();
        }
    }
})();
