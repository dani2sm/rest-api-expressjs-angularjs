'use strict';

var baseUrl = ".";

var app = angular.module('app',
    [
        'ngCookies',
        'ngRoute',
        'app.services',
        'app.controllers',
        'app.directives',
        'ui.bootstrap'
    ]);

/* Controllers */
var controllers = angular.module('app.controllers', []);

var services = angular.module('app.services', []).value('version', '0.1').value('paginationSize', '10');

// configuration des appels Ajax
app.config(function($httpProvider, $routeProvider) {
    $httpProvider.defaults.transformRequest = function(data) {
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    };
});

// Configuration des routes
app.config(function($httpProvider, $routeProvider) {

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $routeProvider.when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'homeController'
    });
    $routeProvider.when('/login', {
        templateUrl: 'app/login/login.html',
        controller: 'loginController'
    });
    $routeProvider.when('/utilisateurs', {
        templateUrl: 'app/views/users/users.html',
        controller: 'userCtrl'
    });
  $routeProvider.when('/roles', {
    templateUrl: 'app/views/roles/roles.html',
    controller: 'roleCtrl'
  });

    $routeProvider.when('/page404', {
        templateUrl: 'js/home/page404.tpl.html'
    });
    $routeProvider.when('/page401', {
        templateUrl: 'js/home/page401.tpl.html'
    });
    $routeProvider.otherwise({
        redirectTo: '/page404'
    });
    $httpProvider.interceptors.push('app.httpinterceptor');
});


app.value({
    bodyClass: 'notAuthenticated'
});

app.controller('bodyController', function($scope, $location, $route) {
    $scope.$on('$routeChangeSuccess', function($currentRoute, $previousRoute) {
        console.log('Current route name: ' + $location.path());

        if ($location.path() == '/login') {
            $scope.bodyclass = "authentification";
        } else {
            $scope.bodyclass = "notAuthenticated";
        }
    });
});

//Intercepteur HTTP
app.factory('app.httpinterceptor', function($q, $rootScope, $location) {
    return {
        // optional method
        'request': function(config) {
            return config || $q.when(config);
        },
        // optional method
        'requestError': function(rejection) {
            return $q.reject(rejection);
        },
        // optional method
        'response': function(response) {
            return response || $q.when(response);
        },
        // optional method
        'responseError': function(rejection) {
            if (rejection.status === 403) {
                $rootScope.isAuthenticated = false;
                $location.path('/login');
            }
            return $q.reject(rejection);
        }
    };
});

var directives = angular.module('app.directives', []);