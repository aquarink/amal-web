var adminRegister = angular.module("adminRegisterApp", ['ngRoute', 'ngResource','ui.bootstrap']);

adminRegister.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.

            when('/', {
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
                templateUrl: 'pages-admin/register.html',
                // controller: 'adminController',
                title: 'Admin Register'
            }).

            when('/404', {
                templateUrl: 'pages/404.html',
                title: 'Halaman Tidak Ditemukan Error 404 | #BeramalMembersihkanRezeki'
            }).

            when('/out', {
                resolve: {
                    "check": function () {
                        localStorage.clear();
                    }
                },
                redirectTo: '/'
            }).

            otherwise({
                //redirectTo: '/'
                templateUrl: 'pages/404.html',
                title: 'Halaman Tidak Ditemukan Error 404 | #BeramalMembersihkanRezeki'
            });
    }]);

adminRegister.run(['$location', '$rootScope',
    function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            if (current.hasOwnProperty('$$route')) {
                $rootScope.title = current.$$route.title;
            }
        });
    }]);

adminRegister.controller('NavClass', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
