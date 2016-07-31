'use strict';

angular.module('fakeEcommerceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cart', {
        url: '/cart',
        template: '<checkout cart="cart"></checkout>',
        resolve: {
          cart: function(cartService,datalayerService){
            datalayerService.pushToDataLayer(   //also push event ?
            {
              'event': 'checkout',
              'ecommerce': {
                'currencyCode': 'EUR',
                'checkout': {
                  'actionField': {'step': 1, 'option': 'Visa'},
                  'products': [{
                    'name': 'Triblend Android T-Shirt',
                    'id': '12345',
                    'price': '15.25',
                    'brand': 'Google',
                    'category': 'Apparel',
                    'variant': 'Gray',
                    'quantity': 1
                  }]
                }
              }
            });
            return cartService.getCart();
          }
        },
        controller: function($scope,cart){
            $scope.cart = cart;
        }
      })
      .state('login', {
        url: '/login',
        template: '<checkout cart="cart"></checkout>',
        resolve: {
          cart: function(cartService,datalayerService){
            datalayerService.pushToDataLayer(   //also push event ?
            {
              'event': 'checkout',
              'ecommerce': {
                'currencyCode': 'EUR',
                'checkout': {
                  'actionField': {'step': 2, 'option': 'Visa'},
                  'products': [{
                    'name': 'Triblend Android T-Shirt',
                    'id': '12345',
                    'price': '15.25',
                    'brand': 'Google',
                    'category': 'Apparel',
                    'variant': 'Gray',
                    'quantity': 1
                  }]
                }
              }
            });
            return cartService.getCart();
          }
        },
        controller: function($scope,cart){
            $scope.cart = cart;
        }
      })
      .state('payment', {
        url: '/payment',
        template: '<checkout cart="cart"></checkout>',
        resolve: {
          cart: function(cartService,datalayerService){
            datalayerService.pushToDataLayer(   //also push event ?
            {
              'event': 'checkout',
              'ecommerce': {
                'currencyCode': 'EUR',
                'checkout': {
                  'actionField': {'step': 3, 'option': 'Visa'},
                  'products': [{
                    'name': 'Triblend Android T-Shirt',
                    'id': '12345',
                    'price': '15.25',
                    'brand': 'Google',
                    'category': 'Apparel',
                    'variant': 'Gray',
                    'quantity': 1
                  }]
                }
              }
            });
            return cartService.getCart();
          }
        },
        controller: function($scope,cart){
            $scope.cart = cart;
        }
      })
      .state('confirmation', {
        url: '/confirmation',
        template: '<checkout cart="cart"></checkout>',
        resolve: {
          cart: function(cartService,datalayerService){
            datalayerService.pushToDataLayer(   //also push event ?
            {
              'event': 'checkout',
              'ecommerce': {
                'currencyCode': 'EUR',
                'checkout': {
                  'actionField': {'step': 4, 'option': 'Visa'},
                  'products': [{
                    'name': 'Triblend Android T-Shirt',
                    'id': '12345',
                    'price': '15.25',
                    'brand': 'Google',
                    'category': 'Apparel',
                    'variant': 'Gray',
                    'quantity': 1
                  }]
                }
              }
            });
            return cartService.getCart();
          }
        },
        controller: function($scope,cart){
            $scope.cart = cart;
        }
      });
  });
