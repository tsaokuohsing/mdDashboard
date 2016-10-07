(function() {
    'use strict';

    angular
        .module('mdDashboard.components')
        .directive('mddLoader', TriLoader);

    /* @ngInject */
    function TriLoader () {
        var directive = {
            bindToController: true,
            controller: TriLoaderController,
            controllerAs: 'vm',
            template: '<div flex class="loader padding-100" ng-show="vm.isActive()" layout="column" layout-fill layout-align="center center"><h3 class="md-headline">{{vm.mddSettings.name}}</h3><md-progress-linear md-mode="indeterminate"></md-progress-linear></div>',
            restrict: 'E',
            replace: true,
            scope: {
            }
        };
        return directive;
    }

    /* @ngInject */
    function TriLoaderController ($rootScope, mddLoaderService, mddSettings) {
        var vm = this;
        vm.mddSettings = mddSettings;
        vm.isActive    = mddLoaderService.isActive;
    }
})();
