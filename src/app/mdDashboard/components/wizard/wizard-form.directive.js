(function() {
    'use strict';

    angular
        .module('mdDashboard.components')
        .directive('mddWizardForm', WizardFormProgress);

    /* @ngInject */
    function WizardFormProgress() {
        // Usage:
        //  <div mdd-wizard>
        //      <form mdd-wizard-form>
        //      </form>
        //  </div>
        //
        var directive = {
            require: ['form', '^mddWizard'],
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, require) {
            var ngFormCtrl = require[0];
            var mddWizardCtrl = require[1];

            // register this form with the parent mddWizard directive
            mddWizardCtrl.registerForm(ngFormCtrl);

            // watch for form input changes and update the wizard progress
            element.on('input', function() {
                mddWizardCtrl.updateProgress();
            });
        }
    }
})();