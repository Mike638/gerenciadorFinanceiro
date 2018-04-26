(function () {
  'use strict';

  describe('controller calculadora', function () {
    var $controller;

    beforeEach(module('gerenciadorFinanceiro'));
    beforeEach(module('app.calculadora'));
    beforeEach(inject(function (_$controller_, _$state_, _LoadingService_, _$timeout_) {

      $controller = _$controller_('CalculadoraController', {
        $state: _$state_,
        LoadingService: _LoadingService_,
        $timeout: _$timeout_
      });
    }));

    it('should be defined', function () {
      expect($controller).toBeDefined();
    });
  });
})();
