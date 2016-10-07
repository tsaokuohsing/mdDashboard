(function() {
    'use strict';

    angular
        .module('app.custom.examples.elements')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, mddMenuProvider) {

        $stateProvider
        .state('mdDashboard.elements-buttons', {
            url: '/elements/buttons',
            templateUrl: 'app/examples/elements/buttons.tmpl.html',
            controller: 'ButtonsController',
            controllerAs: 'vm',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-icons', {
            url: '/elements/icons',
            templateUrl: 'app/examples/elements/icons.tmpl.html',
            controller: 'IconsController',
            controllerAs: 'vm',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            },
            resolve: {
                icons: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'elements/icons'
                    });
                },
                fa: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'elements/icons-fa'
                    });
                }
            }
        })
        .state('mdDashboard.elements-checkboxes', {
            url: '/elements/checkboxes',
            templateUrl: 'app/examples/elements/checkboxes.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-radios', {
            url: '/elements/radios',
            templateUrl: 'app/examples/elements/radios.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-toolbars', {
            url: '/elements/toolbars',
            templateUrl: 'app/examples/elements/toolbars.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-tooltips', {
            url: '/elements/tooltips',
            templateUrl: 'app/examples/elements/tooltips.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-whiteframes', {
            url: '/elements/whiteframes',
            templateUrl: 'app/examples/elements/whiteframes.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-sliders', {
            url: '/elements/sliders',
            templateUrl: 'app/examples/elements/sliders.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-toasts', {
            url: '/elements/toasts',
            templateUrl: 'app/examples/elements/toasts.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-progress', {
            url: '/elements/progress',
            templateUrl: 'app/examples/elements/progress.tmpl.html',
            controller: 'ProgressController',
            controllerAs: 'vm',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-switches', {
            url: '/elements/switches',
            templateUrl: 'app/examples/elements/switches.tmpl.html',
            controller: function() {
                this.toggleAll = function(data, value) {
                    for(var x in data) {
                        data[x] = value;
                    }
                };
            },
            controllerAs: 'vm',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-dialogs', {
            url: '/elements/dialogs',
            templateUrl: 'app/examples/elements/dialogs.tmpl.html',
            controller: 'DialogsController',
            controllerAs: 'vm',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.menus', {
            url: '/elements/menus',
            templateUrl: 'app/examples/elements/menus.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-tabs', {
            url: '/elements/tabs',
            templateUrl: 'app/examples/elements/tabs.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-sidebars', {
            url: '/elements/sidebars',
            templateUrl: 'app/examples/elements/sidebars.tmpl.html',
            controller: function($mdSidenav) {
                this.openSidebar = function(id) {
                    $mdSidenav(id).toggle();
                };
            },
            controllerAs: 'vm',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-grids', {
            url: '/elements/grids',
            templateUrl: 'app/examples/elements/grids.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.fab-speed', {
            url: '/elements/fab-speed',
            templateUrl: 'app/examples/elements/fab-speed.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.fab-toolbar', {
            url: '/elements/fab-toolbar',
            templateUrl: 'app/examples/elements/fab-toolbar.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-selects', {
            url: '/elements/selects',
            templateUrl: 'app/examples/elements/selects.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-tables', {
            url: '/elements/tables',
            templateUrl: 'app/examples/elements/tables.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-textangular', {
            url: '/elements/textangular',
            templateUrl: 'app/examples/elements/textangular.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-lists', {
            url: '/elements/lists',
            templateUrl: 'app/examples/elements/lists.tmpl.html',
            controller: function(emails) {
                this.emails = emails.data.splice(0, 5);
            },
            controllerAs: 'vm',
            resolve: {
                emails: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'email/inbox'
                    });
                }
            },
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-chips', {
            url: '/elements/chips',
            templateUrl: 'app/examples/elements/chips.tmpl.html',
            controller: 'ChipsController',
            controllerAs: 'vm',
            resolve: {
                contacts: function($http, API_CONFIG) {
                    return $http({
                        method: 'GET',
                        url: API_CONFIG.url + 'email/contacts'
                    });
                }
            },
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-cards', {
            url: '/elements/cards',
            templateUrl: 'app/examples/elements/cards.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-upload', {
            url: '/elements/upload',
            templateUrl: 'app/examples/elements/upload.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-loader', {
            url: '/elements/loader',
            templateUrl: 'app/examples/elements/loader.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        })
        .state('mdDashboard.elements-datepicker', {
            url: '/elements/datepicker',
            templateUrl: 'app/examples/elements/datepicker.tmpl.html',
            data: {
                permissions: {
                    only: ['viewElements']
                },
                layout: {
                    contentClass: 'layout-column'
                }
            }
        });

        mddMenuProvider.addMenu({
            name: 'Elements',
            icon: 'zmdi zmdi-graduation-cap',
            type: 'dropdown',
            priority: 3.1,
            permission: 'viewElements',
            children: [{
                name: 'Buttons',
                type: 'link',
                state: 'mdDashboard.elements-buttons'
            },{
                name: 'Cards',
                type: 'link',
                state: 'mdDashboard.elements-cards'
            },{
                name: 'Checkboxes',
                type: 'link',
                state: 'mdDashboard.elements-checkboxes'
            },{
                name: 'Chips',
                type: 'link',
                state: 'mdDashboard.elements-chips'
            },{
                name: 'Datepicker',
                type: 'link',
                state: 'mdDashboard.elements-datepicker'
            },{
                name: 'Dialogs',
                type: 'link',
                state: 'mdDashboard.elements-dialogs'
            },{
                name: 'FAB Speed Dial',
                type: 'link',
                state: 'mdDashboard.fab-speed'
            },{
                name: 'FAB Toolbar',
                type: 'link',
                state: 'mdDashboard.fab-toolbar'
            },{
                name: 'Grids',
                type: 'link',
                state: 'mdDashboard.elements-grids'
            },{
                name: 'Icons',
                type: 'link',
                state: 'mdDashboard.elements-icons'
            },{
                name: 'Lists',
                type: 'link',
                state: 'mdDashboard.elements-lists'
            },{
                name: 'Loader',
                type: 'link',
                state: 'mdDashboard.elements-loader'
            },{
                name: 'Menus',
                type: 'link',
                state: 'mdDashboard.menus'
            },{
                name: 'Progress',
                type: 'link',
                state: 'mdDashboard.elements-progress'
            },{
                name: 'Radios',
                type: 'link',
                state: 'mdDashboard.elements-radios'
            },{
                name: 'Selects',
                type: 'link',
                state: 'mdDashboard.elements-selects'
            },{
                name: 'Sidebars',
                type: 'link',
                state: 'mdDashboard.elements-sidebars'
            },{
                name: 'Sliders',
                type: 'link',
                state: 'mdDashboard.elements-sliders'
            },{
                name: 'Switches',
                type: 'link',
                state: 'mdDashboard.elements-switches'
            },{
                name: 'Tables',
                type: 'link',
                state: 'mdDashboard.elements-tables'
            },{
                name: 'Tabs',
                type: 'link',
                state: 'mdDashboard.elements-tabs'
            },{
                name: 'Textangular',
                type: 'link',
                state: 'mdDashboard.elements-textangular'
            },{
                name: 'Toasts',
                type: 'link',
                state: 'mdDashboard.elements-toasts'
            },{
                name: 'Toolbars',
                type: 'link',
                state: 'mdDashboard.elements-toolbars'
            },{
                name: 'Tooltips',
                type: 'link',
                state: 'mdDashboard.elements-tooltips'
            },{
                name: 'Whiteframes',
                type: 'link',
                state: 'mdDashboard.elements-whiteframes'
            },{
                name: 'Upload',
                type: 'link',
                state: 'mdDashboard.elements-upload'
            }]
        });
    }
})();
