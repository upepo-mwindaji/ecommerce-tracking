'use strict';

angular.module('fakeEcommerceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('confirmation', {
        url: '/confirmation',
        template: '<confirmation></confirmation>'
      });
  });
