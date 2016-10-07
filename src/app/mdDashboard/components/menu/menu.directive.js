(function() {
    'use strict';

    angular
        .module('mdDashboard.components')
        .directive('mddMenu', mddMenuDirective);

    /* @ngInject */
    function mddMenuDirective($location, $mdTheming, mddTheming) {
        var directive = {
            restrict: 'E',
            template: '<md-content><mdd-menu-item permission permission-only="item.permission" ng-repeat="item in mddMenuController.menu | orderBy:\'priority\'" item="::item"></mdd-menu-item></md-content>',
            scope: {},
            controller: mddMenuController,
            controllerAs: 'mddMenuController',
            link: link
        };
        return directive;

        function link($scope, $element) {
            $mdTheming($element);
            var $mdTheme = $element.controller('mdTheme'); //eslint-disable-line

            var menuColor = mddTheming.getThemeHue($mdTheme.$mdTheme, 'primary', 'default');
            var menuColorRGBA = mddTheming.rgba(menuColor.value);
            $element.css({ 'background-color': menuColorRGBA });
            $element.children('md-content').css({ 'background-color': menuColorRGBA });
        }
    }

    /* @ngInject */
    function mddMenuController(mddMenu) {
        var mddMenuController = this;
        // get the menu and order it
        mddMenuController.menu = mddMenu.menu;
    }
})();
