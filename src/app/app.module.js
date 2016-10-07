(function() {
    'use strict';

    angular
        .module('app.custom', [
            'ui.router',
            'ui.router.state.events',
            'mdDashboard',
            'ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngMaterial',
            'googlechart', 'chart.js', 'linkify', 'ui.calendar', 'angularMoment', 'textAngular', 'uiGmapgoogle-maps', 'hljs', 'md.data.table', angularDragula(angular), 'ngFileUpload',
            // 'seed-module',
            // uncomment above to activate the example seed module
            'app.custom.translate',
            // only need one language?  if you want to turn off translations
            // comment out or remove the 'app.translate', line above
            'app.custom.permission',
            // dont need permissions?  if you want to turn off permissions
            // comment out or remove the 'app.custom.permission', line above
            // also remove 'permission' from the first line of dependencies
            // https://github.com/Narzerus/angular-permission see here for why
            'app.custom.examples'
        ])

        // set a constant for the API we are connecting to
        .constant('API_CONFIG', {
            'url':  'http://mdDashboard-api.oxygenna.com/'
        });
    // angular.element(document).ready(function() {
    //     angular.bootstrap(document, ['app.custom']);
    // });
})();
