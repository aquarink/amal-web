amal.config(['$routeProvider','$locationProvider',
    function ($routeProvider,$locationProvider) {
        $locationProvider.hashPrefix('!').html5Mode(true);
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
            redirectTo: '/admin-login',
            controller: 'adminController',
            title: 'Admin Login'
        }).

        when('/admin-register', {
            resolve: {
                "check": function () {
                    if (localStorage.getItem('token') == null && localStorage.getItem('level') == null){
                        console.log('token kosong dan redirect register');
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
            redirectTo: '/admin-register',
            controller: 'adminController',
            title: 'Register User'
        }).

        // Route admin super
        when('/admin-user', {
            templateUrl: 'pages-admin/dataUser.html',
            title: 'User'
        }).

        when('/admin-dataArtikel', {
            templateUrl: 'pages-admin/dataArticle.html',
            title: 'Data Artikel'
        }).

        when('/admin-dataTempat', {
            templateUrl: 'pages-admin/dataBuilding.html',
            title: 'Data Artikel'
        }).

        when('/admin-admin2', {
            templateUrl: 'pages-admin/adminSuper.html',
            title: 'Data Artikel'
        }).

                  // Route Admin User
                  when('/admin-artikel', {
                      templateUrl: 'pages-admin/article.html',
                      title: 'Artikel'
                  }).

                  when('/admin-pengaturan', {
                      templateUrl: 'pages-admin/setting.html',
                      title: 'Pengaturan'
                  }).

                  when('/admin-detailArtikel1', {
                      templateUrl: 'pages-admin/detailArticle.html',
                      title: 'Data Artikel'
                  }).

                  when('/admin-admin1', {
                      templateUrl: 'pages-admin/adminUser.html',
                      title: 'Beranda'
                  }).

        when('/verify', {
            templateUrl: 'pages-admin/verify.html',
            title: 'Verifikasi Akun | #BeramalMembersihkanRezeki'
        })
    }]);
