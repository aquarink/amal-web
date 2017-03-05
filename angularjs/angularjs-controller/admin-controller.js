'use strict';

amal.controller('adminController', function ($scope, $http, $routeParams, $location) {

    //$scope.tanggal = [
    //    {val:'1'}, {val:'2'}, {val:'3'}, {val:'4'}, {val:'5'}, {val:'6'}, {val:'7'}, {val:'8'}, {val:'9'}, {val:'10'},
    //    {val:'11'}, {val:'12'}, {val:'13'}, {val:'14'}, {val:'15'}, {val:'16'}, {val:'17'}, {val:'18'}, {val:'19'}, {val:'20'},
    //    {val:'21'}, {val:'22'}, {val:'23'}, {val:'24'}, {val:'25'}, {val:'26'}, {val:'27'}, {val:'28'}, {val:'29'}, {val:'30'},
    //    {val:'31'}
    //];
    //
    //$scope.bulan = [
    //    {val:'1', bulan:'Januari'}, {val:'2', bulan:'Februari'}, {val:'3', bulan:'Maret'}, {val:'4', bulan:'April'},
    //    {val:'5', bulan:'Mei'}, {val:'6', bulan:'Juni'}, {val:'7', bulan:'Juli'}, {val:'8', bulan:'Agustus'},
    //    {val:'9', bulan:'September'}, {val:'10', bulan:'Oktober'}, {val:'11', bulan:'November'}, {val:'12', bulan:'Desember'}
    //];
    //
    //$scope.tahun = [
    //    {val:'2016', tahun:'2016'}, {val:'2017', tahun:'2017'}, {val:'2018', tahun:'2018'}, {val:'2019', tahun:'2019'}
    //];
    //
    //$scope.sts = [
    //    {val:'1', st:'Staff'}, {val:'2', st:'Supervisor'}, {val:'3', st:'Manager'}, {val:'4', st:'HRD'}
    //];

    $scope.loginAdmin = function () {
        $http({
            method  : "POST",
            url     : itv +'login',
            data    : $.param({email: $scope.email, password : $scope.password}),
            headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
        }).
            success(function (data) {

                var d = $scope.datanya = data;

                console.log(d);

                if (d.error === 1) {

                    if (typeof(Storage) !== "undefined") {
                        localStorage.setItem("token", d.meta.token);
                        localStorage.setItem("level", d.meta.level);

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
                    } else {
                        console.log('Sorry! No Web Storage support..');
                    }
                } else {
                    $scope.pesan = 'Nip atau Password Salah!';
                    $scope.passTxt = '';
                    document.getElementById("inputPassword").focus();
                }
            }).
            error(function (data, status, header, config) {
                console.log('D :' + data, 'S :' + status, 'H :' + header, 'C :' + config);
                //$location.path('/admin');
                $scope.apply();
            })
    }

    $scope.register = function (level) {
        $scope.loading = true;
        $http({
            method  : "POST",
            url     : itv +'register',
            data    : $.param({level: level, name: $scope.nama, email : $scope.email, password: $scope.password, no_telepon : $scope.telepon}),
            headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
        }).
            success(function (data) {
                $scope.loading = false;

                var d = $scope.datanya = data;

                console.log(level);

                if (d.error === 1) {

                    console.log('ok')
                } else {
                    $scope.pesan = data.result;
                    console.log(data.result);
                }
            }).
            error(function (data, status, header, config) {
                console.log('D :' + data, 'S :' + status, 'H :' + header, 'C :' + config);
                //$location.path('/admin');
                //$scope.apply();
                console.log(level);
            })
    }

    $scope.verify = function () {

        var url = $location.url();
        var urlSplit = url.split("?");
        var paramSplit = urlSplit[1].split('&');
        //console.log(paramSplit);

        $http({
            method  : "POST",
            url     : itv +'verifikasi-email',
            data    : $.param({email: paramSplit[0], token: paramSplit[1]}),
            headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
        }).
            success(function (data) {
                console.log(data);

                if (data.error == '1') {
                    $location.path('/admin-login');
                } else {
                    $scope.pesan = '<strong>Verifiasi Gagal!</strong> Harap ulangi langkah yang ada pada email anda.';
                }
            }).
            error(function (data, status, header, config) {
                console.log('D :' + data, 'S :' + status, 'H :' + header, 'C :' + config);
                //$location.path('/admin');
                //$scope.apply();
                console.log(level);
            })
    }
});
