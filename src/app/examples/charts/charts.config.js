(function() {
    'use strict';

    angular
        .module('app.custom.examples.charts')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, mddMenuProvider) {

        $stateProvider
        .state('mdDashboard.charts-google-bar', {
            url: '/charts/google/bar',
            templateUrl: 'app/examples/charts/google-bar.tmpl.html',
            data: {
                permissions: {
                    only: ['viewCharts']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.charts-google-scatter', {
            url: '/charts/google/scatter',
            templateUrl: 'app/examples/charts/google-scatter.tmpl.html',
            data: {
                permissions: {
                    only: ['viewCharts']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.charts-google-line', {
            url: '/charts/google/line',
            templateUrl: 'app/examples/charts/google-line.tmpl.html',
            data: {
                permissions: {
                    only: ['viewCharts']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.charts-chartjs-bar', {
            url: '/charts/chartjs/bar',
            templateUrl: 'app/examples/charts/chartjs-bar.tmpl.html',
            data: {
                permissions: {
                    only: ['viewCharts']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.charts-chartjs-pie', {
            url: '/charts/chartjs/pie',
            templateUrl: 'app/examples/charts/chartjs-pie.tmpl.html',
            data: {
                permissions: {
                    only: ['viewCharts']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.charts-chartjs-ticker', {
            url: '/charts/chartjs/ticker',
            templateUrl: 'app/examples/charts/chartjs-ticker.tmpl.html',
            data: {
                permissions: {
                    only: ['viewCharts']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.charts-chartjs-line', {
            url: '/charts/chartjs/line',
            templateUrl: 'app/examples/charts/chartjs-line.tmpl.html',
            data: {
                permissions: {
                    only: ['viewCharts']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        });

        mddMenuProvider.addMenu({
            name: 'Charts',
            icon: 'zmdi zmdi-chart',
            type: 'dropdown',
            priority: 5.1,
            permission: 'viewCharts',
            children: [{
                name: 'Google',
                type: 'dropdown',
                children: [{
                    name: 'Bar',
                    state: 'mdDashboard.charts-google-bar',
                    type: 'link'
                },{
                    name: 'Scatter',
                    state: 'mdDashboard.charts-google-scatter',
                    type: 'link'
                },{
                    name: 'Line',
                    state: 'mdDashboard.charts-google-line',
                    type: 'link'
                }]
            },{
                name: 'Chart.js',
                type: 'dropdown',
                children: [{
                    name: 'Bar',
                    state: 'mdDashboard.charts-chartjs-bar',
                    type: 'link'
                },{
                    name: 'Line',
                    state: 'mdDashboard.charts-chartjs-line',
                    type: 'link'
                },{
                    name: 'Pie',
                    state: 'mdDashboard.charts-chartjs-pie',
                    type: 'link'
                },{
                    name: 'Ticker',
                    state: 'mdDashboard.charts-chartjs-ticker',
                    type: 'link'
                }]
            }]
        });
    }
})();
