angular.module('controladores')
    .controller('DosController',
        ['$scope', function ($scope) {
            $scope.init = function() {
                $scope.saludo = 'Chau';
            };

            $scope.init();
        }])
;
