(function () {
  'use strict';

  angular
    .module('app.loading')
    .service('LoadingService', LoadingService);

  /** @ngInject */
  function LoadingService() {
    this.total = 0;

    this.add = add;
    this.isLoading = isLoading;
    this.remove = remove;

    ////////////////

    function add() {
      this.total++;
      return this;
    }

    function remove() {
      if (this.total !== 0) {
        this.total--;
      }
      return this;
    }

    function isLoading() {
      return this.total !== 0;
    }
  }
})();
