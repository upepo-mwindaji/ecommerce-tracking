'use strict';

angular.module('fakeEcommerceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('product1', {
        url: '/product1',
        template: '<product-1></product-1>'
      });
  });
