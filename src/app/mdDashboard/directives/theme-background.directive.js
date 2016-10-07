(function() {
    'use strict';

    angular
        .module('mdDashboard.directives')
        .directive('themeBackground', themeBackground);

    /* @ngInject */
    function themeBackground($mdTheming, mddTheming) {
        // Usage:
        // ```html
        // <div md-theme="cyan" theme-background="primary|accent|warn|background:default|hue-1|hue-2|hue-3">Coloured content</div>
        // ```
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link($scope, $element, attrs) {
            $mdTheming($element);

            // make sure we have access to the theme - causes an eslint but nothing we can do about AM naming
            var $mdTheme = $element.controller('mdTheme'); //eslint-disable-line
            if(angular.isDefined($mdTheme)) {
                var intent = attrs.themeBackground;
                var hue = 'default';

                // check if we have a hue provided
                if(intent.indexOf(':') !== -1) {
                    var splitIntent = attrs.themeBackground.split(':');
                    intent = splitIntent[0];
                    hue = splitIntent[1];
                }
                // get the color and apply it to the element
                var color = mddTheming.getThemeHue($mdTheme.$mdTheme, intent, hue);
                if(angular.isDefined(color)) {
                    $element.css({
                        'background-color': mddTheming.rgba(color.value),
                        'border-color': mddTheming.rgba(color.value),
                        'color': mddTheming.rgba(color.contrast)
                    });
                }
            }
        }
    }
})();