(function() {
    'use strict';

    angular
        .module('app.custom.examples.email')
        .config(moduleConfig)
        .constant('EMAIL_ROUTES', [{
            state: 'mdDashboard.email.inbox',
            name: 'Inbox',
            url: '/email/inbox'
        },{
            state: 'mdDashboard.email.trash',
            name: 'Trash',
            url: '/email/trash'
        },{
            state: 'mdDashboard.email.sent',
            name: 'Sent',
            url: '/email/sent'
        }]);

    /* @ngInject */
    function moduleConfig($stateProvider, mddMenuProvider, EMAIL_ROUTES) {

        $stateProvider
        .state('mdDashboard.email',  {
            abstract: true,
            views: {
                'toolbar@mdDashboard': {
                    templateUrl: 'app/examples/email/layout/toolbar/toolbar.tmpl.html',
                    controller: 'EmailToolbarController',
                    controllerAs: 'vm'
                }
            },
            data: {
                layout: {
                    footer: false,
                    contentClass: 'mdDashboard-non-scrolling'
                },
                permissions: {
                    only: ['viewEmail']
                }
            }
        });

        angular.forEach(EMAIL_ROUTES, function(route) {
            $stateProvider
            .state(route.state, {
                url: route.url,
                views: {
                    '@mdDashboard': {
                        templateUrl: 'app/examples/email/inbox.tmpl.html',
                        controller: 'InboxController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    emails: function($http, $q, API_CONFIG) {
                        return $http({
                            method: 'GET',
                            url: API_CONFIG.url + 'email/inbox'
                        });
                    },
                    contacts: function($http, API_CONFIG) {
                        return $http({
                            method: 'GET',
                            url: API_CONFIG.url + 'email/contacts'
                        });
                    }
                }
            });
        });

        angular.forEach(EMAIL_ROUTES, function(route) {
            $stateProvider
            .state(route.state + '.email', {
                url: '/mail/:emailID',
                templateUrl: 'app/examples/email/email.tmpl.html',
                controller: 'EmailController',
                controllerAs: 'vm',
                resolve: {
                    email: function($stateParams, emails) {
                        emails = emails.data;
                        var foundEmail = false;
                        for(var i = 0; i < emails.length; i++) {
                            if(emails[i].id === $stateParams.emailID) {
                                foundEmail = emails[i];
                                break;
                            }
                        }
                        return foundEmail;
                    }
                },
                onEnter: function($state, email){
                    if (false === email) {
                        $state.go(route.state);
                    }
                }
            });
        });

        var emailMenu = {
            name: 'Email',
            icon: 'zmdi zmdi-email',
            type: 'dropdown',
            priority: 2.1,
            permission: 'viewEmail',
            children: []
        };

        angular.forEach(EMAIL_ROUTES, function(route) {
            emailMenu.children.push({
                name: route.name,
                state: route.state,
                type: 'link',
                badge: Math.round(Math.random() * (20 - 1) + 1)
            });
        });

        mddMenuProvider.addMenu(emailMenu);

        mddMenuProvider.addMenu({
            type: 'divider',
            priority: 2.3
        });
    }
})();
