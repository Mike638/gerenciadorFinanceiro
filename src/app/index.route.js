(function () {
  'use strict';

  angular
    .module('gerenciadorFinanceiro')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/calculadora/calcular');

    $stateProvider
      .state('calculadora', {
        abstract: true,
        templateUrl: 'app/main/main.html'
      });
  }

})();
