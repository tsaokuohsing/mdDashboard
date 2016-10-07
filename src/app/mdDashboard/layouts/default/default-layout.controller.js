'use strict';

/**
 * @ngdoc function
 * @name AdminController
 * @module mddAngular
 * @kind function
 *
 * @description
 *
 * Handles the admin view
 */
(function() {
    'use strict';

    angular
        .module('mdDashboard.layouts')
        .controller('DefaultLayoutController', DefaultLayoutController);

    /* @ngInject */
    function DefaultLayoutController($scope, $element, $timeout, $window, mddLayout) {
        // we need to use the scope here because otherwise the expression in md-is-locked-open doesnt work
        $scope.layout = mddLayout.layout; //eslint-disable-line
        var vm = this;

        vm.activateHover = activateHover;
        vm.removeHover  = removeHover;

        ////////////////

        function activateHover() {
            if(mddLayout.layout.sideMenuSize === 'icon') {
                $element.find('.admin-sidebar-left').addClass('hover');
                $timeout(function(){
                    $window.dispatchEvent(new Event('resize'));
                },300);
            }
        }

        function removeHover () {
            if(mddLayout.layout.sideMenuSize === 'icon') {
                $element.find('.admin-sidebar-left').removeClass('hover');
                $timeout(function(){
                    $window.dispatchEvent(new Event('resize'));
                },300);
            }
        }
    }
})();