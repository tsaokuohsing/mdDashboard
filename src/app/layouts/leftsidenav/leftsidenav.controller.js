(function() {
    'use strict';

    angular
        .module('mdDashboard.components')
        .controller('LeftSidenavController', LeftSidenavController);

    /* @ngInject */
    function LeftSidenavController(mddSettings, mddLayout) {
        var vm = this;
        vm.layout = mddLayout.layout;
        vm.sidebarInfo = {
            appName: mddSettings.name,
            appLogo: mddSettings.logo
        };
        vm.toggleIconMenu = toggleIconMenu;

        ////////////

        function toggleIconMenu() {
            var menu = vm.layout.sideMenuSize === 'icon' ? 'full' : 'icon';
            mddLayout.setOption('sideMenuSize', menu);
        }
    }
})();
