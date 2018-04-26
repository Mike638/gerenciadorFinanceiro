(function () {
  'use strict';

  angular
    .module('gerenciadorFinanceiro', [
      'ngAnimate',
      'ngCookies',
      'ngSanitize',
      'ui.router',
      'ui.utils.masks',
      'mgcrea.ngStrap',
      'app.components',
      'app.shared',
      'app.calculadora',
      'app.resultado'
    ]);

})();
