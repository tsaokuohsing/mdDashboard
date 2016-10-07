(function() {
    'use strict';

    angular
        .module('app.custom.examples.ui')
        .factory('TypographySwitcherService', TypographySwitcher);

    /* @ngInject */
    function TypographySwitcher($window, $cookies, $log, UI_FONTS) {
        return {
            changeFont: changeFont,
            getCurrentFont: getCurrentFont,
            init: init
        };

        //////////////////

        function init() {
            // if we arent using the default font then change it
            var currentFont = getCurrentFont();
            if(currentFont.name !== 'Roboto Draft') {
                changeFont(currentFont);
            }
        }

        function getCurrentFont() {
            // if we have no current font set, set it to first font (Roboto)
            var fontCookie = $cookies.get('mdd-typography-font');
            if(angular.isUndefined(fontCookie)) {
                $cookies.put('mdd-typography-font', angular.toJson(UI_FONTS[0]));
            }

            return angular.fromJson($cookies.get('mdd-typography-font'));
        }

        function changeFont(font) {
            $window.WebFont.load({
                google: {
                    families: [font.google]
                },
                active: function() {
                    angular.element('button,select,html,textarea,input').css({'font-family': font.family});
                    $cookies.put('mdd-typography-font', angular.toJson(font));
                },
                inactive: function() {
                    $log.error('Font ' + font.name + ' could not be loaded');
                }
            });
        }
    }
})();
