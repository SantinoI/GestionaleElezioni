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
            // InsertPage
            .when('/insertPage',{
                templateUrl : 'pages/insertPage.html',
                controller : 'insertPageController'
            })
            // adminPage
            .when('/adminPage',{
                templateUrl : 'pages/adminPage.html',
                controller : 'adminPageController'
            })
            // Contact Page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    GestionaleElezioni.controller('mainController', function($scope, $http, $location,$rootScope) {
        $http.get("api.php?api=controllo")
                .then(function(response){
                if(response.data.replace(/\r?\n/g,"") != "Errore"){
                    $rootScope.username = response.data;
                    $rootScope.loginUtente = true;
                }      
        });
    });

    GestionaleElezioni.controller('loginController', function($scope, $http, $location,$rootScope) {
        $scope.accedi=function(){
            if($scope.checkbox){
                $rootScope.admin = true;
                $rootScope.accesso = true;
                var tipoUtente = "loginAdmin";
            }
            else {
                $rootScope.admin = false;
                $rootScope.accesso = true;
                var tipoUtente = "loginUtente";
            }

            $http.get("api.php?api="+ tipoUtente +"&username="+ $scope.username +"&password="+ $scope.password)
                 .then(function(response) {                
                    if(response.data.replace(/\r?\n/g,"") != "Errore"){
                        $rootScope.username = response.data;
                        if($scope.checkbox) $rootScope.loginAdmin = true;
                        else  $rootScope.loginUtente = true;
                        $location.path('/');
                    }
                    else{
                        alert("Errore");
                    }
            });
        }
    });


    GestionaleElezioni.controller('contactController', function($scope) {
        $scope.message = 'Contatti';
    });

    GestionaleElezioni.controller('insertPageController',function($scope, $http, $location,$rootScope){
        if($rootScope.admin) $location.path('/');
    });

    GestionaleElezioni.controller('adminPageController',function($scope, $http, $location,$rootScope){
        if($rootScope.admin == false) $location.path('/');

    });
    

