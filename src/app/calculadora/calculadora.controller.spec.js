(function () {
  'use strict';

  describe('controller calculadora', function () {
    var vm;

    beforeEach(module('app.calculadora'));
    beforeEach(inject(function (_$controller_) {

      vm = _$controller_('CalculadoraController');
    }));

    it('should be defined', function () {
      expect(vm).toBeDefined();
    });
  });
})();
