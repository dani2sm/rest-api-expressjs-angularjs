/**
 * Created by yassine on 23/03/15.
 */


controllers.controller('menuController', ['$rootScope', '$scope', '$location', 'bootstrapModal', 'userService', function ($rootScope, $scope, $location, bootstrapModal, userService) {

    $scope.disconnect = function() {
        userService.logout(function(data) {
            logout()
        }, function() {
            logout()
        })
    }

    function logout() {
        $rootScope.isAuthenticated = false
        $location.path("/login")
    }

    getCurrentUser()

    function getCurrentUser() {
        userService.get(function(data) {
            $scope.currentUser = data
        }, function() {

        })
    }

}]);