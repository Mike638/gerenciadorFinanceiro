(function() {
  'use strict';

  angular
    .module('app.calculadora')
    .controller('CalculadoraController', CalculadoraController);

  /** @ngInject */
  function CalculadoraController($state, LoadingService, $timeout) {
    var vm = this;

    vm.calcular = calcular;
    vm.submitted = false;

    init();

    ////////////////

    function init() {
      $timeout(function () {
        LoadingService.remove();
      }, 500);
    }

    function calcular() {
      vm.submitted = true;
      if(vm.calcularForm.$valid){
        LoadingService.add();
        $state.go('calcular.resultado');
      }
    }
  }
})();
