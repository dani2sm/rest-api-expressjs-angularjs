'use strict';

controllers.controller('loginController', ['$rootScope', '$scope', '$location', 'userService', function($rootScope, $scope, $location, userService) {

		$scope.login = "admin";
		$scope.password = "admin";
	
		$scope.authenticate = function() {
			console.log($scope.login, $scope.password);

			userService.login($scope.login, $scope.password, loginSuccess, loginFailed);
		};
		
		function loginSuccess() {
			$rootScope.isAuthenticated = true;
			$location.path('/');
		}
		
		function loginFailed() {
			$scope.error = true;
		}
		
	}
]);