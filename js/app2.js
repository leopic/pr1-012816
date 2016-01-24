angular.module('app2', ['persistencia'])
    .controller('App2Controller',
        function ($scope, App2Service) {
            $scope.init = function() {
                $scope.tareas = App2Service.tareas;
            };

            $scope.init();
        })
    .service('App2Service', function(PersistenciaService) {
        var interfaz = {
                tareas: {}
            },
            transformador = function(tareas) {
                var tareasTransformadas = {};
                angular.forEach(tareas, function(i, tarea) {
                    tareasTransformadas[tarea] = i.toUpperCase();
                });
                return tareasTransformadas;
            };

        interfaz.tareas = transformador(PersistenciaService.tareas);

        return interfaz;
    })
;

angular.module('persistencia', [])
    .service('PersistenciaService', function() {
        var interfaz = {
            tareas: []
        };

        interfaz.tareas = [
            'To Do', 'Leer'
        ];

        return interfaz;
    })
;
