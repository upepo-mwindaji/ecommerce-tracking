'use strict';

angular.module('fakeEcommerceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('product3', {
        url: '/product3',
        template: '<product-3></product-3>'
      });
  });
