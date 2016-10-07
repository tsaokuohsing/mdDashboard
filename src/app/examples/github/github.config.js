(function() {
    'use strict';

    angular
        .module('app.custom.examples.github')
        .config(config);

    /* @ngInject */
    function config($stateProvider, mddMenuProvider) {
        $stateProvider
        .state('mdDashboard.github', {
            url: '/github',
            templateUrl: 'app/examples/github/github.tmpl.html',
            controller: 'GithubController',
            controllerAs: 'vm',
            data: {
                layout: {
                    contentClass: 'layout-column full-image-background mb-bg-fb-16 background-overlay-static',
                    innerContentClass: 'overlay-gradient-20'
                },
                permissions: {
                    only: ['viewGitHub']
                }
            }
        });

        mddMenuProvider.addMenu({
            name: 'GitHub',
            state: 'mdDashboard.github',
            type: 'link',
            icon: 'fa fa-github',
            priority: 2.2,
            permission: 'viewGitHub'
        });
    }
})();
