angular.module('controladores')
    .controller('UnoController',
        ['$scope', function ($scope) {
            $scope.init = function() {
                $scope.saludo = 'Hola';
            };

            $scope.init();
        }])
;
