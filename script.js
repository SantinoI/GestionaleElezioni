// script.js

    var GestionaleElezioni = angular.module('GestionaleElezioni', ['ngRoute']);

    GestionaleElezioni.config(function($routeProvider) {
        $routeProvider

            // Home Page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // Login Page
            .when('/login', {
                templateUrl : 'pages/login.html',
                controller  : 'loginController'
            })

            // Contact Page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    GestionaleElezioni.controller('mainController', function($scope) {
        $scope.message = 'Sei nella home';
    });

    GestionaleElezioni.controller('loginController', function($scope) {
        $scope.message = 'Pagina Login..';
    });

    GestionaleElezioni.controller('contactController', function($scope) {
        $scope.message = 'Contatti';
    });

