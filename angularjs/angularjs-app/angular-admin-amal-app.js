amal.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.

        when('/admin-login', {
            resolve: {
                "check": function () {
                    if (localStorage.getItem('token') == null && localStorage.getItem('level') == null){
                        console.log('token kosong dan redirect login');
                    } else {
                        if(localStorage.getItem('level') == '1') {
                                //$location.path('/master');
                                console.log('Admin Master');
                            } else if(localStorage.getItem('level') == '2') {
                                //$location.path('/Admin Biasa');
                                console.log('Admin Biasa');
                            } else {
                                //$location.path('/Admin Biasa');
                                console.log('nulsss');
                            }
                        }

                    }
                },
                templateUrl: 'pages-admin/login.html',
                controller: 'adminController',
                title: 'Admin Login'
            }).

        when('/admin-register', {
            templateUrl: 'pages-admin/register.html',
            title: 'Register User'
        })
    }]);