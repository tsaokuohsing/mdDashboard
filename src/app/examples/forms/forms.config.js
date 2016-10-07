(function() {
    'use strict';

    angular
        .module('app.custom.examples.forms')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, mddMenuProvider) {

        $stateProvider
        .state('mdDashboard.forms-inputs', {
            url: '/forms/inputs',
            templateUrl: 'app/examples/forms/inputs.tmpl.html',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.forms-binding', {
            url: '/forms/binding',
            templateUrl: 'app/examples/forms/binding.tmpl.html',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.forms-autocomplete', {
            url: '/forms/autocomplete',
            templateUrl: 'app/examples/forms/autocomplete.tmpl.html',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.forms-wizard', {
            url: '/forms/wizard',
            templateUrl: 'app/examples/forms/wizard.tmpl.html',
            controller: 'FormWizardController',
            controllerAs: 'wizardController',
            data: {
                layout: {
                    contentClass: 'layout-column full-image-background mb-bg-fb-02 background-overlay-static',
                    innerContentClass: 'overlay-gradient-20'
                }
            }
        })
        .state('mdDashboard.forms-validation', {
            url: '/forms/validation',
            templateUrl: 'app/examples/forms/validation.tmpl.html',
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            }
        });

        mddMenuProvider.addMenu({
            name: 'Forms',
            icon: 'zmdi zmdi-calendar-check',
            type: 'dropdown',
            priority: 3.3,
            children: [{
                name: 'Autocomplete',
                type: 'link',
                state: 'mdDashboard.forms-autocomplete'
            },{
                name: 'Data Binding',
                type: 'link',
                state: 'mdDashboard.forms-binding'
            },{
                name: 'Inputs',
                type: 'link',
                state: 'mdDashboard.forms-inputs'
            },{
                name: 'Wizard',
                type: 'link',
                state: 'mdDashboard.forms-wizard'
            },{
                name: 'Validation',
                type: 'link',
                state: 'mdDashboard.forms-validation'
            }]
        });
        mddMenuProvider.addMenu({
            type: 'divider',
            priority: 3.4
        });
    }
})();
