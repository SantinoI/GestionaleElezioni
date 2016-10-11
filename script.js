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

    GestionaleElezioni.controller('loginController', function($scope,$http) {
        $scope.accedi=function(){
            console.log("test");    
            $http.get("api.php?api=loginAdmin&username="+ $scope.username +"&password="+ $scope.password)
                 .then(function(response) {
                    if(response.data!= "Errore")
                        alert("Login Effettuato");
            });
        }

    });

    GestionaleElezioni.controller('contactController', function($scope) {
        $scope.message = 'Contatti';
    });

