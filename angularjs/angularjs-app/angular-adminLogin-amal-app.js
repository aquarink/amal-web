var adminAmal = angular.module("adminAmalApp", ['ngRoute', 'ngResource','ui.bootstrap']);

adminAmal.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.

            when('/', {
              templateUrl: 'pages-admin/login.html',
              title: 'Login'
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

adminAmal.run(['$location', '$rootScope',
    function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            if (current.hasOwnProperty('$$route')) {
                $rootScope.title = current.$$route.title;
            }
        });
    }]);

adminAmal.controller('NavClass', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
