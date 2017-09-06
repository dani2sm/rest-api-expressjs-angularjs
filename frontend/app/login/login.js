'use strict';

controllers.controller('loginController', ['$rootScope', '$scope', '$location', 'userService', function($rootScope, $scope, $location, userService) {

	$scope.authenticate = function(login, password) {
			console.log(login, password);
			var user = {
				username : login,
				password : password
			};
			userService.login(user, loginSuccess, loginFailed);
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