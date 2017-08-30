/**
 * Created by yassine on 23/03/15.
 */
'use strict';

directives.directive("errorsDiv", function(){
    return {
        restrict: "E",
        scope: {
            errorMessages: "=errorMessages"
        },
        link: function($scope, element, attrs, ctrl) {
            console.log("link ", $scope.errorMessages);
            $scope.$watch("errorMessages", function() {
                console.log("watching errorMessages ", $scope.errorMessages)
            });
            console.log("loading errors div")
        },
        templateUrl: 'assets/templates/errors.html'
    }
});