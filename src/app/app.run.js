(function() {
    'use strict';

    angular
        .module('app.custom')
        .run(runFunction);

    /* @ngInject */
    function runFunction($rootScope, $state,$trace) {
        //UI-Router 1.0 Trace service
        $trace.enable('TRANSITION');


        // default redirect if access is denied
        function redirectError() {
            $state.go('500');
        }

        // watches

        // redirect all errors to permissions to 500
        var errorHandle = $rootScope.$on('$stateChangeError', redirectError);

        // remove watch on destroy
        $rootScope.$on('$destroy', function() {
            errorHandle();
        });
        var viewRoot = document.getElementById('ui-view-root');
        viewRoot.className+=' layout-row';
    }
})();
