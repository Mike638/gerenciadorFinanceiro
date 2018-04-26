(function() {
  'use strict';

  describe('directive loading', function() {
    // var vm;
    var el;

    beforeEach(module('app.loading'));
    beforeEach(inject(function($compile, $rootScope) {


      el = angular.element('<loading></loading>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      // vm = el.isolateScope().vm;
      // ctrl = el.controller('acmeNavbar');
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });
  });
})();
