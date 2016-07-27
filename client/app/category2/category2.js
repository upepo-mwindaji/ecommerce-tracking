'use strict';

angular.module('fakeEcommerceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('category2', {
        url: '/category2',
        template: '<category-2></category-2>'
      });
  });
