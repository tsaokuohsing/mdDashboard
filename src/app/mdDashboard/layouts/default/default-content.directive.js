(function() {
    'use strict';

    angular
        .module('mdDashboard.layouts')
        .directive('mddDefaultContent', mddDefaultContent);

    /* @ngInject */
    function mddDefaultContent ($rootScope, $compile, $templateRequest, mddLayout) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            replace: true,
            restrict: 'A'
        };
        return directive;

        function link($scope, $element) {
            // scroll page to the top when content is loaded (stops pages keeping scroll position even when they have changed url)
            $scope.$on('$stateChangeStart', scrollToTop);

            // when content view has loaded add footer if needed and send mdContentLoaded event
            $scope.$on('$viewContentLoaded', injectFooterUpdateContent);

            ////////////////////////

            function scrollToTop() {
                $element.scrollTop(0);
            }

            function injectFooterUpdateContent() {
                var contentView = $element.find('#admin-panel-content-view');
                var footerElem = contentView.find('#footer');
                if (footerElem.length === 0) {
                    // add footer to the content view
                    $templateRequest(mddLayout.layout.footerTemplateUrl)
                    .then(function(template) {
                        // compile template with current scope and add to the content
                        var linkFn = $compile(template);
                        var content = linkFn($scope);
                        contentView.append(content);
                    });

                }
            }
        }
    }
})();