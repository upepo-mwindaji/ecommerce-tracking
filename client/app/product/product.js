'use strict';

angular.module('fakeEcommerceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('product', {
        url: '/product/:sku',
        template: '<product></product>',
      });
  });
