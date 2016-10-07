(function() {
    'use strict';

    angular
        .module('app.custom.examples.ui')
        .controller('ColorDialogController', ColorDialogController);

    /* @ngInject */
    function ColorDialogController($scope, name, palette, mddTheming) {
        var vm = this;
        vm.itemStyle = itemStyle;
        vm.name = name;
        vm.palette = [];

        ///////////

        function itemStyle(palette) {
            return {
                'background-color': mddTheming.rgba(palette.value),
                'color': mddTheming.rgba(palette.contrast)
            };
        }

        // init

        for(var code in palette) {
            vm.palette.push({
                code: code,
                palette: palette[code]
            });
        }
    }
})();
