'use strict';

angular.module('fakeEcommerceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('product2', {
        url: '/product2',
        template: '<product-2></product-2>'
      });
  });
