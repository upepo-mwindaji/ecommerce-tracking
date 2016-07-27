'use strict';

angular.module('fakeEcommerceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('payment', {
        url: '/payment',
        template: '<payment></payment>'
      });
  });
