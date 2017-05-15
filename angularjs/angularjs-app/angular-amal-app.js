var amal = angular.module("amalApp", ['ngRoute','ngResource','ngSanitize','flow']);

amal.config(['$routeProvider','$locationProvider',
    function ($routeProvider,$locationProvider) {
        $locationProvider.hashPrefix('!').html5Mode(true);
        $routeProvider.

            when('/', {
                templateUrl: '/amal-web/pages/landing.html',
                title: '#BeramalMembersihkanRezeki'
            }).

            when('/masjid', {
                templateUrl: '/amal-web/pages/masjid.html',
                title: 'Masjid | #BeramalMembersihkanRezeki'
            }).

            when('/404', {
                templateUrl: '/amal-web/pages/404.html',
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
                templateUrl: '/amal-web/pages/404.html',
                title: 'Halaman Tidak Ditemukan Error 404 | #BeramalMembersihkanRezeki'
            });
    }]);

amal.run(['$location', '$rootScope',
    function ($location, $rootScope) {

        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            if (current.hasOwnProperty('$$route')) {
                $rootScope.title = current.$$route.title;
            }
        });

        $rootScope.redirUrl = function (url) {
            var urlRed = "/" + url;
            $location.path(urlRed);
            location.reload();
            $location.path(urlRed);
        };

        $rootScope.currentPath = $location.path();
    }
]);

amal.controller('NavClass', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});
