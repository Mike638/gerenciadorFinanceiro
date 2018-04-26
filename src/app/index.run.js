(function() {
  'use strict';

  angular
    .module('gerenciadorFinanceiro')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
