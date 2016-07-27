'use strict';

angular.module('fakeEcommerceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('category1', {
        url: '/category1',
        template: '<category-1></category-1>'
      });
  });
