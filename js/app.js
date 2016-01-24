angular.module('controladores', [])
    .controller('UnoController',
        ['$scope', function ($scope) {
            $scope.init = function() {
                $scope.saludo = 'Hola';
            };

            $scope.init();
        }])
    .controller('DosController',
        ['$scope', function ($scope) {
            $scope.init = function() {
                $scope.saludo = 'Chau';
            };

            $scope.init();
        }])
;
