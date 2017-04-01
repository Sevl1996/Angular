var routerApp = angular.module('routerApp', ['ui.router','ngTable']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'dataController'
        })

        .state('auth', {
            url: '/auth',
            templateUrl: 'login.html'
        })

        .state('register', {
            url: '/register',
            templateUrl: 'register.html',
        })

        .state('addition', {
            url: '/addition',
            templateUrl: 'addition.html',
        })
        
});

routerApp.controller('selectController', ['$scope', 
    function(){
        $scope.types = [
            { Type:"apartment"},
            { Type:"cotagge" }
        ];  

        var $types = $scope.types; 
    }
])

routerApp.controller('dataController', ['$scope', '$filter', 'NgTableParams', 
    function($scope, $filter, NgTableParams) {
        $scope.tr = '';
        $scope.scotches = [
            {
                Title:"Apartment in a high-rise building",
                Address:"9512 Ilene Way",
                Type:"apartment",
                Cost:40000,
                Square:65
            },
            {
                Title:"Cool apartment",
                Address:"2035 Brovki Street",
                Type:"apartment",
                Cost:45000,
                Square:62
            },
            {
                Title:"Apartment in a high-rise building",
                Address:"7452 Lenina Street",
                Type:"apartment",
                Cost:39000,
                Square:34
            }
        ];   

        

        var $data = $scope.scotches;
        $scope.usersTable = new NgTableParams({
                }, {dataset: $data});

        $scope.select = function(item){
                if ($scope.scotches.selected){
                    $scope.scotches.selected.rowCss = '';
                    
                    if ($scope.scotches.selected == item){
                        $scope.scotches.selected = null;
                        return
                    }
                }
                $scope.scotches.selected = item;
                $scope.scotches.selected.rowCss = 'success';
            };
}]);
