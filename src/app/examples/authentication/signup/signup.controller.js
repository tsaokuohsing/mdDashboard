(function() {
    'use strict';

    angular
        .module('app.custom.examples.authentication')
        .controller('SignupController', SignupController);

    /* @ngInject */
    function SignupController($scope, $state, $mdToast, $http, $filter, mddSettings) {
        var vm = this;
        vm.mddSettings = mddSettings;
        vm.signupClick = signupClick;
        vm.user = {
            name: '',
            email: '',
            password: '',
            confirm: ''
        };

        ////////////////

        function signupClick() {
            $mdToast.show(
                $mdToast.simple()
                .content($filter('mddTranslate')('Confirmation sent'))
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
