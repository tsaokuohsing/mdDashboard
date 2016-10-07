(function() {
    'use strict';

    angular
        .module('app.custom.examples.menu')
        .controller('MenuDynamicController', MenuDynamicController);

    /* @ngInject */
    function MenuDynamicController(dynamicMenuService, mddMenu) {
        var vm = this;
        // get dynamic menu service to store & keep track the state of the menu status
        vm.dynamicMenu = dynamicMenuService.dynamicMenu;
        // create toggle function
        vm.toggleExtraMenu = toggleExtraMenu;

        ////////////////

        function toggleExtraMenu(showMenu) {
            if(showMenu) {
                mddMenu.addMenu({
                    name: 'Dynamic Menu-MENU',
                    icon: 'zmdi zmdi-flower-alt',
                    type: 'link',
                    priority: 0.0,
                    state: 'mdDashboard.menu-dynamic-dummy-page'
                });
            }
            else {
                mddMenu.removeMenu('mdDashboard.menu-dynamic-dummy-page');
            }
        }
    }
})();
