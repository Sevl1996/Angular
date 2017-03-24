(
	function(){
	angular.module('App', ['ngTable'])
        .controller('tableController', function ($scope, $filter, NgTableParams) {
 			
        	$scope.users = [{"Title":"Apartment in a high-rise building",
        					 "Address":"9512 Ilene Way",
        					 "Type":"apartment",
        					 "Cost":40000,
        					 "Square":65}];
 			
            $scope.usersTable = new NgTableParams({
                /*page: 1,
                count: 5*/
            }, {dataset: $scope.users}
                /*total: $scope.users.length, 
                getData: function ($defer, params) {
                    $scope.data = $scope.users.slice((params.page() - 1) * params.count(), params.page() * params.count());
                    $defer.resolve($scope.data);
                }
            }*/);

            });
})();

            
        