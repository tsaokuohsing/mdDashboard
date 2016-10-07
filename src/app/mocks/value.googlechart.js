
(function() {
    'use strict';

    angular
        .module('app.custom')
        .value('googleChartApiConfig', {
            version: '1.1',
            optionalSettings: {
                packages: ['line', 'bar', 'geochart', 'scatter'],
                language: 'en'
            }
        });
})();
