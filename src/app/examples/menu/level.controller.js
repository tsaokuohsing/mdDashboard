(function() {
    'use strict';

    angular
        .module('app.custom.examples.menu')
        .controller('LevelController', LevelController);

    /* @ngInject */
    function LevelController($stateParams) {
        var vm = this;
        vm.level = $stateParams.level;
    }
})();
