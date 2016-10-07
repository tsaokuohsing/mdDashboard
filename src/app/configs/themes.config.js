(function() {
    'use strict';

    angular
        .module('app.custom')
        .config(themesConfig);

    /* @ngInject */
    function themesConfig ($mdThemingProvider, mddThemingProvider, mddSkinsProvider) {
        /**
         *  PALETTES
         */
        $mdThemingProvider.definePalette('white', {
            '50': 'ffffff',
            '100': 'ffffff',
            '200': 'ffffff',
            '300': 'ffffff',
            '400': 'ffffff',
            '500': 'ffffff',
            '600': 'ffffff',
            '700': 'ffffff',
            '800': 'ffffff',
            '900': 'ffffff',
            'A100': 'ffffff',
            'A200': 'ffffff',
            'A400': 'ffffff',
            'A700': 'ffffff',
            'contrastDefaultColor': 'dark'
        });

        $mdThemingProvider.definePalette('black', {
            '50': 'e1e1e1',
            '100': 'b6b6b6',
            '200': '8c8c8c',
            '300': '646464',
            '400': '3a3a3a',
            '500': 'e1e1e1',
            '600': 'e1e1e1',
            '700': '232323',
            '800': '1a1a1a',
            '900': '121212',
            'A100': '3a3a3a',
            'A200': 'ffffff',
            'A400': 'ffffff',
            'A700': 'ffffff',
            'contrastDefaultColor': 'light'
        });

        var mddCyanMap = $mdThemingProvider.extendPalette('cyan', {
            'contrastDefaultColor': 'light',
            'contrastLightColors': '500 700 800 900',
            'contrastStrongLightColors': '500 700 800 900'
        });

        // Register the new color palette map with the name mddCyan
        $mdThemingProvider.definePalette('mddCyan', mddCyanMap);

        /**
         *  SKINS
         */

        // CYAN CLOUD SKIN
        mddThemingProvider.theme('cyan')
        .primaryPalette('mddCyan')
        .accentPalette('amber')
        .warnPalette('deep-orange');

        mddThemingProvider.theme('cyan-white')
        .primaryPalette('white')
        .accentPalette('mddCyan', {
            'default': '500'
        })
        .warnPalette('deep-orange');

        mddSkinsProvider.skin('cyan-cloud', 'Cyan Cloud')
        .sidebarTheme('cyan')
        .toolbarTheme('cyan-white')
        .logoTheme('cyan')
        .contentTheme('cyan');

        // RED DWARF SKIN
        mddThemingProvider.theme('red')
        .primaryPalette('red')
        .accentPalette('amber')
        .warnPalette('purple');

        mddThemingProvider.theme('white-red')
        .primaryPalette('white')
        .accentPalette('red', {
            'default': '500'
        })
        .warnPalette('purple');

        mddSkinsProvider.skin('red-dwarf', 'Red Dwarf')
        .sidebarTheme('red')
        .toolbarTheme('white-red')
        .logoTheme('red')
        .contentTheme('red');

        // PLUMB PURPLE SKIN
        mddThemingProvider.theme('purple')
        .primaryPalette('purple')
        .accentPalette('deep-orange')
        .warnPalette('amber');

        mddThemingProvider.theme('white-purple')
        .primaryPalette('white')
        .accentPalette('purple', {
            'default': '400'
        })
        .warnPalette('deep-orange');

        mddSkinsProvider.skin('plumb-purple', 'Plumb Purple')
        .sidebarTheme('purple')
        .toolbarTheme('white-purple')
        .logoTheme('purple')
        .contentTheme('purple');

        // DARK KNIGHT SKIN
        mddThemingProvider.theme('dark')
        .primaryPalette('black', {
            'default': '300',
            'hue-1': '400'
        })
        .accentPalette('amber')
        .warnPalette('deep-orange')
        .backgroundPalette('black')
        .dark();

        mddSkinsProvider.skin('dark-knight', 'Dark Knight')
        .sidebarTheme('dark')
        .toolbarTheme('dark')
        .logoTheme('dark')
        .contentTheme('dark');

        // BATTLESHIP GREY SKIN
        mddThemingProvider.theme('blue-grey')
        .primaryPalette('blue-grey')
        .accentPalette('amber')
        .warnPalette('orange');

        mddThemingProvider.theme('white-blue-grey')
        .primaryPalette('white')
        .accentPalette('blue-grey', {
            'default': '400'
        })
        .warnPalette('orange');

        mddSkinsProvider.skin('battleship-grey', 'Battleship Grey')
        .sidebarTheme('blue-grey')
        .toolbarTheme('white-blue-grey')
        .logoTheme('blue-grey')
        .contentTheme('blue-grey');

        // ZESTY ORANGE SKIN
        mddThemingProvider.theme('orange')
        .primaryPalette('orange' , {
            'default': '800'
        })
        .accentPalette('lime')
        .warnPalette('amber');

        mddThemingProvider.theme('white-orange')
        .primaryPalette('white')
        .accentPalette('orange', {
            'default': '500'
        })
        .warnPalette('lime');

        mddSkinsProvider.skin('zesty-orange', 'Zesty Orange')
        .sidebarTheme('orange')
        .toolbarTheme('white-orange')
        .logoTheme('orange')
        .contentTheme('orange');


        // INDIGO ISLAND SKIN
        mddThemingProvider.theme('indigo')
        .primaryPalette('indigo' , {
            'default': '600'
        })
        .accentPalette('red')
        .warnPalette('lime');

        mddSkinsProvider.skin('indigo-island', 'Indigo Island')
        .sidebarTheme('indigo')
        .toolbarTheme('indigo')
        .logoTheme('indigo')
        .contentTheme('indigo');

        // KERMIT GREEN SKIN
        mddThemingProvider.theme('light-green')
        .primaryPalette('light-green' , {
            'default': '400'
        })
        .accentPalette('amber')
        .warnPalette('deep-orange');

        mddThemingProvider.theme('white-light-green')
        .primaryPalette('white')
        .accentPalette('light-green', {
            'default': '400'
        })
        .warnPalette('deep-orange');

        mddSkinsProvider.skin('kermit-green', 'Kermit Green')
        .sidebarTheme('light-green')
        .toolbarTheme('white-light-green')
        .logoTheme('light-green')
        .contentTheme('light-green');


        /**
         *  FOR DEMO PURPOSES ALLOW SKIN TO BE SAVED IN A COOKIE
         *  This overrides any skin set in a call to mddSkinsProvider.setSkin if there is a cookie
         *  REMOVE LINE BELOW FOR PRODUCTION SITE
         */
        mddSkinsProvider.useSkinCookie(true);

        /**
         *  SET DEFAULT SKIN
         */
        mddSkinsProvider.setSkin('cyan-cloud');
    }
})();
