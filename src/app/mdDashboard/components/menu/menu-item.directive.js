(function() {
    'use strict';

    angular
        .module('mdDashboard.components')
        .directive('mddMenuItem', mddMenuItemDirective);

    /* @ngInject */
    function mddMenuItemDirective() {
        var directive = {
            restrict: 'E',
            require: '^mddMenu',
            scope: {
                item: '='
            },
            // replace: true,
            template: '<div ng-include="::mddMenuItem.item.template"></div>',
            controller: mddMenuItemController,
            controllerAs: 'mddMenuItem',
            bindToController: true
        };
        return directive;
    }

    /* @ngInject */
    function mddMenuItemController($scope, $injector, $mdSidenav, $state, $filter, $window, mddBreadcrumbsService) {
        var mddMenuItem = this;
        // load a template for this directive based on the type ( link | dropdown )
        mddMenuItem.item.template = 'app/mdDashboard/components/menu/menu-item-' + mddMenuItem.item.type + '.tmpl.html';

        switch(mddMenuItem.item.type) {
            case 'dropdown':
                // if we have kids reorder them by priority
                mddMenuItem.item.children = $filter('orderBy')(mddMenuItem.item.children, 'priority');
                mddMenuItem.toggleDropdownMenu = toggleDropdownMenu;
                // add a check for open event
                $scope.$on('toggleDropdownMenu', function(event, item, open) {
                    // if this is the item we are looking for
                    if(mddMenuItem.item === item) {
                        mddMenuItem.item.open = open;
                    }
                    else {
                        mddMenuItem.item.open = false;
                    }
                });
                // this event is emitted up the tree to open parent menus
                $scope.$on('openParents', function() {
                    // openParents event so open the parent item
                    mddMenuItem.item.open = true;
                    // also add this to the breadcrumbs
                    mddBreadcrumbsService.addCrumb(mddMenuItem.item);
                });
                break;
            case 'link':
                mddMenuItem.openLink = openLink;

                // on init check if this is current menu
                checkItemActive($state.current.name, $state.params);

                $scope.$on('$stateChangeSuccess', function(event, toState, toParams) {
                    checkItemActive(toState.name, toParams);
                });
                break;
        }

        function checkItemActive() {
            // first check if the state is the same
            mddMenuItem.item.active = $state.includes(mddMenuItem.item.state, mddMenuItem.item.params);
            // if we are now the active item reset the breadcrumbs and open all parent dropdown items
            if(mddMenuItem.item.active) {
                mddBreadcrumbsService.reset();
                mddBreadcrumbsService.addCrumb(mddMenuItem.item);
                $scope.$emit('openParents');
            }
        }

        function toggleDropdownMenu() {
            $scope.$parent.$parent.$broadcast('toggleDropdownMenu', mddMenuItem.item, !mddMenuItem.item.open);
        }

        function openLink() {
            if(angular.isDefined(mddMenuItem.item.click)) {
                $injector.invoke(mddMenuItem.item.click);
            }
            else {
                var params = angular.isUndefined(mddMenuItem.item.params) ? {} : mddMenuItem.item.params;
                if(angular.isDefined(mddMenuItem.item.openInNewTab) && mddMenuItem.item.openInNewTab === true) {
                    var url = $state.href(mddMenuItem.item.state, params);
                    $window.open(url, '_blank');
                }
                else {
                    $state.go(mddMenuItem.item.state, params);
                }
            }
            mddMenuItem.item.active = true;
            $mdSidenav('left').close();
        }
    }
})();
