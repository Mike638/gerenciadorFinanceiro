(function () {
  'use strict';

  angular
    .module('app.calculadora')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [{
        state: 'calcular',
        config: {
          parent: 'calculadora',
          url: '/calculadora/calcular',
          templateUrl: 'app/calculadora/calculadora.html',
          controller: 'CalculadoraController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'calcular.resultado',
        config: {
          url: '/calculadora/calcular',
          templateUrl: 'app/resultado/resultado.html',
          parent: 'calculadora',
          controller: 'ResultadoController',
          controllerAs: 'vm'
        }
      }
    ];
  }

})();
