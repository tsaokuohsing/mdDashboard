(function() {
    'use strict';

    angular
        .module('app.custom')
        .config(translateConfig);

    /* @ngInject */
    function translateConfig(mddSettingsProvider, mddRouteProvider) {
        var now = new Date();
        // set app name & logo (used in loader, sidemenu, footer, login pages, etc)
        mddSettingsProvider.setName('mdDashboard');
        mddSettingsProvider.setCopyright('&copy;' + now.getFullYear() + ' oxygenna.com');
        mddSettingsProvider.setLogo('assets/images/logo.png');
        // set current version of app (shown in footer)
        mddSettingsProvider.setVersion('2.10.1');
        // set the document title that appears on the browser tab
        mddRouteProvider.setTitle('MDDashboard');
        mddRouteProvider.setSeparator('|');
    }
})();
