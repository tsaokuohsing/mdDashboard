(function() {
    'use strict';

    angular
        .module('app.custom.examples.authentication')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController($state, mddSettings) {
        var vm = this;
        vm.loginClick = loginClick;
        vm.socialLogins = [{
            icon: 'fa fa-twitter',
            color: '#5bc0de',
            url: '#'
        },{
            icon: 'fa fa-facebook',
            color: '#337ab7',
            url: '#'
        },{
            icon: 'fa fa-google-plus',
            color: '#e05d6f',
            url: '#'
        },{
            icon: 'fa fa-linkedin',
            color: '#337ab7',
            url: '#'
        }];
        vm.mddSettings = mddSettings;
        // create blank user variable for login form
        vm.user = {
            email: '',
            password: ''
        };

        ////////////////

        function loginClick() {
            $state.go('mdDashboard.dashboard-analytics');
        }
    }
})();
