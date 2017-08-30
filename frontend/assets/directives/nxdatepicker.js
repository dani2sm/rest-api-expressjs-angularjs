/**
 * Created by yassine on 18/03/15.
 */
'use strict';

directives.directive("nxdatepicker", function(){
    return {
        restrict: "E",
        scope:{
            dateOptions: "=",
            opened: "=",
            dateModel: "=ngModel"
        },
        link: function($scope, element, attrs, ctrl) {
            //$scope.$watch($scope.dateModel, function(value) {
            //    console.log("$scope.dateModel value", value);
                //$scope.dtVar = parseDate($scope.dtVar)
            //});

            $scope.open = function(event){
                event.preventDefault();
                event.stopPropagation();
                $scope.opened = true;
                //console.log("$scope", $scope);
                //console.log("element", element);
                //console.log("attrs", attrs);
                //console.log("ctrl", ctrl);

                //$scope.$watch(attrs.dtVar, function(value) {
                //    console.log("dtVar value", value);
                //});
            }
        },
        templateUrl: 'assets/templates/nxdatepicker.html'
    }
});