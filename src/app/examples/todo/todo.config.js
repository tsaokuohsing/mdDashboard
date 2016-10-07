(function() {
    'use strict';

    angular
        .module('app.custom.examples.todo')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, mddMenuProvider) {

        $stateProvider
        .state('mdDashboard.todo', {
            url: '/todo',
            views: {
                '': {
                    templateUrl: 'app/examples/todo/todo.tmpl.html',
                    controller: 'TodoController',
                    controllerAs: 'vm'
                },
                'belowContent': {
                    templateUrl: 'app/examples/todo/fab-button.tmpl.html',
                    controller: 'TodoFabController',
                    controllerAs: 'vm'
                }
            },
            data: {
                layout: {
                    contentClass: 'layout-column full-image-background mb-bg-fb-08 background-overlay-static',
                    innerContentClass: 'overlay-gradient-20'
                },
                permissions: {
                    only: ['viewTodo']
                }
            }
        });

        mddMenuProvider.addMenu({
            id: 'todo',
            name: 'To do',
            icon: 'zmdi zmdi-check',
            state: 'mdDashboard.todo',
            type: 'link',
            permission: 'viewTodo',
            badge: '',
            priority: 2.4
        });
    }
})();
