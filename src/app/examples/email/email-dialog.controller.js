(function() {
    'use strict';

    angular
        .module('app.custom.examples.email')
        .controller('EmailDialogController', EmailDialogController);

    /* @ngInject */
    function EmailDialogController($timeout, $mdDialog, $filter, mddSkins, textAngularManager, title, email, contacts, getFocus) {
        var contactsData = contacts.data;

        var vm = this;
        vm.cancel = cancel;
        vm.email = email;
        vm.title = title;
        vm.send = send;
        vm.showCCSIcon = 'zmdi zmdi-account-add';
        vm.showCCS = false;
        vm.toggleCCS = toggleCCS;
        vm.mddSkin = mddSkins.getCurrent();
        vm.queryContacts = queryContacts;

        ///////////////

        function cancel() {
            $mdDialog.cancel();
        }

        function toggleCCS() {
            vm.showCCS = !vm.showCCS;
            vm.showCCSIcon = vm.showCCS ? 'zmdi zmdi-account' : 'zmdi zmdi-account-add';
        }

        function send() {
            $mdDialog.hide(vm.email);
        }

        function queryContacts($query) {
            var lowercaseQuery = angular.lowercase($query);
            return contactsData.filter(function(contact) {
                var lowercaseName = angular.lowercase(contact.name);
                if (lowercaseName.indexOf(lowercaseQuery) !== -1) {
                    return contact;
                }
            });
        }

        ////////////////
        if(getFocus) {
            $timeout(function() {
                // Retrieve the scope and trigger focus
                var editorScope = textAngularManager.retrieveEditor('emailBody').scope;
                editorScope.displayElements.text.trigger('focus');
            }, 500);
        }
    }
})();
