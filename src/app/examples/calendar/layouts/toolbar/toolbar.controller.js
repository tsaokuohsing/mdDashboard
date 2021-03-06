(function() {
    'use strict';

    angular
        .module('app.custom.examples.calendar')
        .controller('CalendarToolbarController', CalendarToolbarController);

    /* @ngInject */
    function CalendarToolbarController($scope, $state, $element, $mdUtil, $mdSidenav, mddBreadcrumbsService, uiCalendarConfig) {
        var vm = this;
        vm.breadcrumbs = mddBreadcrumbsService.breadcrumbs;
        vm.changeMonth = changeMonth;
        vm.changeView = changeView;
        vm.openSideNav = openSideNav;
        vm.views = [{
            name: 'Month',
            icon: 'zmdi zmdi-view-module',
            viewName: 'month'
        },{
            name: 'Week',
            icon: 'zmdi zmdi-view-week',
            viewName: 'agendaWeek'
        },{
            name: 'Day',
            icon: 'zmdi zmdi-view-day',
            viewName: 'agendaDay'
        }];
        vm.currentView = vm.views[0];

        //////////////

        function changeMonth(direction) {
            uiCalendarConfig.calendars['mdDashboard-calendar'].fullCalendar(direction);
        }

        function changeView(view) {
            vm.currentView = view;
            uiCalendarConfig.calendars['mdDashboard-calendar'].fullCalendar('changeView', view.viewName);
        }

        function openSideNav(navID) {
            $mdUtil.debounce(function(){
                $mdSidenav(navID).toggle();
            }, 300)();
        }
    }
})();
