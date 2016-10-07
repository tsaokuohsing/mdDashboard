(function() {
    'use strict';

    angular
        .module('app.custom.examples.forms')
        .controller('Binding1Controller', Binding1Controller);

    /* @ngInject */
    function Binding1Controller() {
        var vm = this;
        vm.user = {
            username: 'Morris',
            password: '',
            description: '',
            favouriteColor: ''
        };
    }
})();
