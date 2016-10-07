(function() {
    'use strict';

    angular
        .module('app.custom.examples.ui')
        .controller('SkinsUIController', SkinsUIController);

    /* @ngInject */
    function SkinsUIController($cookies, $window, mddSkins, mddTheming) {
        var vm = this;
        vm.elementColors = {
            logo: '',
            sidebar: '',
            content: '',
            toolbar: ''
        };
        vm.skins = mddSkins.getSkins();
        vm.selectedSkin = mddSkins.getCurrent();
        vm.trySkin = trySkin;
        vm.updatePreview = updatePreview;

        //////////////////////

        function trySkin() {
            if(vm.selectedSkin !== mddSkins.getCurrent()) {
                $cookies.put('mdDashboard-skin',angular.toJson({
                    skin: vm.selectedSkin.id
                }));
                $window.location.reload();
            }
        }


        function updatePreview() {
            for(var element in vm.elementColors) {
                var theme = mddTheming.getTheme(vm.selectedSkin.elements[element]);
                var hue = angular.isUndefined(theme.colors.primary.hues.default) ? '500' : theme.colors.primary.hues.default;
                var color = mddTheming.getPaletteColor(theme.colors.primary.name, hue);
                vm.elementColors[element] = mddTheming.rgba(color.value);
            }
        }

        // init

        updatePreview();
    }
})();
