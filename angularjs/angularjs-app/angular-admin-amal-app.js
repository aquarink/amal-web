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

        when('/admin-user', {
            templateUrl: 'pages-admin/dataUser.html',
            title: 'User'
        }).

        when('/admin-tambahArtikel', {
            templateUrl: 'pages-admin/addArticle.html',
            title: 'Tambah Artikel'
        }).

        when('/admin-profile', {
            templateUrl: 'pages-admin/profile.html',
            title: 'Profile'
        }).

        when('/verify', {
            templateUrl: 'pages-admin/verify.html',
            title: 'Verifikasi Akun | #BeramalMembersihkanRezeki'
        })
    }]);
