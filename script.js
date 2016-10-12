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

            // Contact Page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    GestionaleElezioni.controller('mainController', function($rootScope) {
         
    });

    GestionaleElezioni.controller('loginController', function($scope, $http, $location,$rootScope) {
        $scope.accedi=function(){   
            $http.get("api.php?api=loginAdmin&username="+ $scope.username +"&password="+ $scope.password)
                 .then(function(response) {                
                    if(response.data.replace(/\r?\n/g,"") != "Errore"){
                        $rootScope.username = response.data;
                        $rootScope.login = true;
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

            $http.get("api.php?api=controllo")
                 .then(function(response){
                   if(response.data.replace(/\r?\n/g,"") == "Errore") $location.path('/login');
                   else{
                    $rootScope.login = true;
                   }      
            });
    });
    

