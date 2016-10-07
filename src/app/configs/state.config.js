(function() {
    'use strict';

    angular
        .module('app.custom')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('mdDashboard', {
            abstract: true,
            views: {
                'root': {
                    templateUrl: 'app/mdDashboard/layouts/states/mdDashboard/mdDashboard.tmpl.html',
                    controller: 'MDDashboardStateController',
                    controllerAs: 'stateController'
                },
                'sidebarLeft@mdDashboard': {
                    templateProvider: function($templateRequest, mddLayout) {
                        if(angular.isDefined(mddLayout.layout.sidebarLeftTemplateUrl)) {
                            return $templateRequest(mddLayout.layout.sidebarLeftTemplateUrl);
                        }
                    },
                    controllerProvider: function(mddLayout) {
                        return mddLayout.layout.sidebarLeftController;
                    },
                    controllerAs: 'vm'
                },
                'sidebarRight@mdDashboard': {
                    templateProvider: function($templateRequest, mddLayout) {
                        if(angular.isDefined(mddLayout.layout.sidebarRightTemplateUrl)) {
                            return $templateRequest(mddLayout.layout.sidebarRightTemplateUrl);
                        }
                    },
                    controllerProvider: function(mddLayout) {
                        return mddLayout.layout.sidebarRightController;
                    },
                    controllerAs: 'vm'
                },
                'toolbar@mdDashboard': {
                    templateProvider: function($templateRequest, mddLayout) {
                        if(angular.isDefined(mddLayout.layout.toolbarTemplateUrl)) {
                            return $templateRequest(mddLayout.layout.toolbarTemplateUrl);
                        }
                    },
                    controllerProvider: function(mddLayout) {
                        return mddLayout.layout.toolbarController;
                    },
                    controllerAs: 'vm'
                },
                'loader@mdDashboard': {
                    templateProvider: function($templateRequest, mddLayout) {
                        if(angular.isDefined(mddLayout.layout.loaderTemplateUrl)) {
                            return $templateRequest(mddLayout.layout.loaderTemplateUrl);
                        }
                    },
                    controllerProvider: function(mddLayout) {
                        return mddLayout.layout.loaderController;
                    },
                    controllerAs: 'loader'
                }
            }
        });
    }
})();
