(function () {
  'use strict';

  describe('controller resultado', function () {
    var vm;

    beforeEach(module('app.resultado'));
    beforeEach(inject(function (_$controller_) {

      vm = _$controller_('ResultadoController');
    }));

    it('should be defined', function () {
      expect(vm).toBeDefined();
    });
  });
})();
