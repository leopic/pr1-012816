angular.module('controladores', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/generico.html',
                controller: 'UnoController'
            })
            .when('/dos', {
                templateUrl: 'partials/generico.html',
                controller: 'DosController'
            })
            .otherwise({
                templateUrl: 'partials/404.html'
            })
    })
;
