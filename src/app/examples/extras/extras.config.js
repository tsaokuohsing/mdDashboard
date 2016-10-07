(function() {
    'use strict';

    angular
        .module('app.custom.examples.extras')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, mddMenuProvider) {

        $stateProvider
        .state('mdDashboard.extra-gallery', {
            url: '/extras/gallery',
            templateUrl: 'app/examples/extras/gallery.tmpl.html',
            controller: 'GalleryController',
            controllerAs: 'vm'
        })
        .state('mdDashboard.extra-avatars', {
            url: '/extras/avatars',
            templateUrl: 'app/examples/extras/avatars.tmpl.html',
            controller: 'AvatarsController',
            controllerAs: 'vm'
        })
        .state('mdDashboard.extra-blank', {
            url: '/extras/blank',
            templateUrl: 'app/examples/extras/blank.tmpl.html',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.extra-timeline', {
            url: '/extras/timeline',
            templateUrl: 'app/examples/extras/timeline.tmpl.html',
            controller: 'TimelineController',
            controllerAs: 'vm'
        });

        mddMenuProvider.addMenu({
            name: 'Extras',
            icon: 'zmdi zmdi-view-list-alt',
            type: 'dropdown',
            priority: 8.1,
            children: [{
                name: 'Gallery',
                state: 'mdDashboard.extra-gallery',
                type: 'link'
            },{
                name: 'Avatars',
                state: 'mdDashboard.extra-avatars',
                type: 'link'
            },{
                name: '404 Page',
                state: '404',
                type: 'link'
            },{
                name: '500 Page',
                state: '500',
                type: 'link'
            },{
                name: 'Blank Page',
                state: 'mdDashboard.extra-blank',
                type: 'link'
            },{
                name: 'Timeline',
                state: 'mdDashboard.extra-timeline',
                type: 'link'
            }]
        });
    }
})();
