(function() {
    'use strict';

    angular
        .module('app.custom.examples.authentication')
        .controller('ForgotController', ForgotController);

    /* @ngInject */
    function ForgotController($scope, $state, $mdToast, $filter, $http, mddSettings) {
        var vm = this;
        vm.mddSettings = mddSettings;
        vm.user = {
            email: ''
        };
        vm.resetClick = resetClick;

        ////////////////

        function resetClick() {
            $mdToast.show(
                $mdToast.simple()
                .content($filter('mddTranslate')('Your new password has been mailed'))
                .position('bottom right')
                .action($filter('mddTranslate')('Login'))
                .highlightAction(true)
                .hideDelay(0)
            ).then(function() {
                $state.go('authentication.login');
            });
        }
    }
})();
