(function () {
  'use strict';

  angular
    .module('app.loading')
    .directive('loading', loading);

  /** @ngInject */
  function loading() {
    var directive = {
      bindToController: true,
      templateUrl: 'app/components/loading/loading.html',
      controller: LoadingController,
      controllerAs: 'ctrl',
      restrict: 'E'
    };

    return directive;

  }
  /* @ngInject */
  function LoadingController(LoadingService) {
    var ctrl = this;

    init();

    /////////////////

    function init() {
      ctrl.loader = LoadingService;
    }
  }
})();
