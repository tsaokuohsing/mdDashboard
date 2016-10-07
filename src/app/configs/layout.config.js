(function() {
    'use strict';

    angular
        .module('app.custom')
        .config(config);

    /* @ngInject */
    function config(mddLayoutProvider) {
        // set app templates (all in app/layouts folder so you can tailor them to your needs)

        // loader screen HTML & controller
        mddLayoutProvider.setDefaultOption('loaderTemplateUrl', 'app/layouts/loader/loader.tmpl.html');
        mddLayoutProvider.setDefaultOption('loaderController', 'LoaderController');

        // left sidemenu HTML and controller
        mddLayoutProvider.setDefaultOption('sidebarLeftTemplateUrl', 'app/layouts/leftsidenav/leftsidenav.tmpl.html');
        mddLayoutProvider.setDefaultOption('sidebarLeftController', 'LeftSidenavController');

        // right sidemenu HTML and controller
        mddLayoutProvider.setDefaultOption('sidebarRightTemplateUrl', 'app/layouts/rightsidenav/rightsidenav.tmpl.html');
        mddLayoutProvider.setDefaultOption('sidebarRightController', 'RightSidenavController');

        // top toolbar HTML and controller
        mddLayoutProvider.setDefaultOption('toolbarTemplateUrl', 'app/layouts/toolbar/toolbar.tmpl.html');
        mddLayoutProvider.setDefaultOption('toolbarController', 'ToolbarController');

        // footer HTML
        mddLayoutProvider.setDefaultOption('footerTemplateUrl', 'app/layouts/footer/footer.tmpl.html');

        mddLayoutProvider.setDefaultOption('toolbarSize', 'default');

        mddLayoutProvider.setDefaultOption('toolbarShrink', false);

        mddLayoutProvider.setDefaultOption('toolbarClass', '');

        mddLayoutProvider.setDefaultOption('contentClass', '');

        mddLayoutProvider.setDefaultOption('sideMenuSize', 'full');

        mddLayoutProvider.setDefaultOption('showToolbar', true);

        mddLayoutProvider.setDefaultOption('footer', true);
    }
})();
