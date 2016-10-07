(function() {
    'use strict';

    angular
        .module('mdDashboard.directives')
        .directive('paletteBackground', paletteBackground);

    /* @ngInject */
    function paletteBackground(mddTheming) {
        // Usage:
        // ```html
        // <div palette-background="green:500">Coloured content</div>
        // ```
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link($scope, $element, attrs) {
            var splitColor = attrs.paletteBackground.split(':');
            var color = mddTheming.getPaletteColor(splitColor[0], splitColor[1]);

            if(angular.isDefined(color)) {
                $element.css({
                    'background-color': mddTheming.rgba(color.value),
                    'border-color': mddTheming.rgba(color.value),
                    'color': mddTheming.rgba(color.contrast)
                });
            }
        }
    }
})();