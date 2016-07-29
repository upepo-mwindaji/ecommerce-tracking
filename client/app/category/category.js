'use strict';

angular.module('fakeEcommerceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('category', {
        url: '/category/:name',
        template: '<category></category>'
      });
  });
