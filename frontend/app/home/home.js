'use strict';

controllers.controller('homeController', ['$rootScope', '$scope', '$location', function($rootScope, $scope, $location) {
	
	    if (!$rootScope.isAuthenticated) {
	        $location.path('/login');
	    }
	    
	}
]);