'use strict';

angular.module('fakeEcommerceApp', [
  'fakeEcommerceApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'angulartics',
  'angulartics.google.analytics',
  'angulartics.google.tagmanager'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
