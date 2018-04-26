(function () {
  'use strict';

  describe('controller resultado', function () {
    var $controller;

    beforeEach(module('gerenciadorFinanceiro'));
    beforeEach(module('app.resultado'));
    beforeEach(inject(function (_$controller_, _$state_, _LoadingService_, _$timeout_) {

      $controller = _$controller_('ResultadoController', {
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
