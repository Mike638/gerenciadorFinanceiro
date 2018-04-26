(function() {
  'use strict';

  /**
   * @todo Complete the test
   * This example is not perfect.
   * Test should check if MomentJS have been called
   */
  describe('directive navbar', function() {
    // var $window;
    var el;

    beforeEach(module('gerenciadorFinanceiro'));
    beforeEach(inject(function($compile, $rootScope) {
      // spyOn(_$window_, 'moment').and.callThrough();
      // $window = _$window_;

      el = angular.element('<acme-navbar></acme-navbar>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      // ctrl = el.controller('acmeNavbar');
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

    // it('should call Moment', function() {
    //   console.log($window.moment)
    //   expect($window.moment).toHaveBeenCalled();
    // });
  });
})();
