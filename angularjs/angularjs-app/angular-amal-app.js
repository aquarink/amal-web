var amal = angular.module("amalApp", ['ngRoute', 'ngResource']);

amal.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.

            when('/', {
                // resolve: {
                //     "check": function ($location) {
                //         if (localStorage.getItem('token') == null && localStorage.getItem('stat') == null){
                //             console.log('token kosong dan redirect login');
                //         } else {
                //             if(localStorage.getItem('stat') == '4') {
                //                 $location.path('/hrd');
                //             } else {
                //                 $location.path('/karyawan');
                //             }

                //         }

                //     }
                // },
                templateUrl: 'pages/landing.html',
                //controller: 'karyawanController',
                title: '#BeramalMembersihkanRezeki'
            }).

            when('/404', {
                templateUrl: 'View/404.html',
                title: 'Halaman Tidak Ditemukan Error 404'
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
                redirectTo: '/'
            });
    }]);

amal.run(['$location', '$rootScope',
    function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            if (current.hasOwnProperty('$$route')) {
                $rootScope.title = current.$$route.title;
            }
        });
    }]);

amal.controller('NavClass', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});