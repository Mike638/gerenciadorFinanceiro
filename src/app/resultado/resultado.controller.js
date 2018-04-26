(function () {
  'use strict';

  angular
    .module('app.resultado')
    .controller('ResultadoController', ResultadoController);

  /** @ngInject */
  function ResultadoController($state, LoadingService, $timeout) {
    var vm = this;

    vm.voltar = voltar;

    init();

    ////////////////

    function init() {
      $timeout(function () {
        LoadingService.remove();
      }, 500);
    }

    function voltar() {
      LoadingService.add();
      $state.go('calcular');
    }
  }
})();
