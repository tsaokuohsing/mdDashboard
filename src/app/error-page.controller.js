(function() {
    angular
        .module('app.custom')
        .controller('ErrorPageController', ErrorPageController);

    /* @ngInject */
    function ErrorPageController($state) {
        var vm = this;

        vm.goHome = goHome;

        /////////

        function goHome() {
            $state.go('mdDashboard.dashboard-analytics');
        }
    }
})();
