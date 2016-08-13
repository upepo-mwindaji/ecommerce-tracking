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
                  'products': [{                            // List of productFieldObjects.
                    'name': 'Triblend Android T-Shirt',     // Name or ID is required.
                    'id': '12345',
                    'price': '15.25',
                    'brand': 'Google2',
                    'category': 'Apparel',
                    'variant': 'Gray',
                    'quantity': 1,
                    'coupon': '',                            // Optional fields may be omitted or set to empty string.
                    'metric1':'20.25',  // original price
                    'metric2':'5.00'  // discount
                   },
                   {
                    'name': 'Donut Friday Scented T-Shirt',
                    'id': '67890',
                    'price': '33.75',
                    'brand': 'Google2',
                    'category': 'Apparel',
                    'variant': 'Black',
                    'quantity': 1,
                    'metric1':'33.75',  // original price
                    'metric2':'0.00'  // discount
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
                  'products': [{                            // List of productFieldObjects.
                    'name': 'Triblend Android T-Shirt',     // Name or ID is required.
                    'id': '12345',
                    'price': '15.25',
                    'brand': 'Google2',
                    'category': 'Apparel',
                    'variant': 'Gray',
                    'quantity': 1,
                    'coupon': '',                            // Optional fields may be omitted or set to empty string.
                    'metric1':'20.25',  // original price
                    'metric2':'5.00'  // discount
                   },
                   {
                    'name': 'Donut Friday Scented T-Shirt',
                    'id': '67890',
                    'price': '33.75',
                    'brand': 'Google2',
                    'category': 'Apparel',
                    'variant': 'Black',
                    'quantity': 1,
                    'metric1':'33.75',  // original price
                    'metric2':'0.00'  // discount
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
                  'actionField': {
                    'step': 3,
                    'option': 'Visa'
                  },
                  'products': [{                            // List of productFieldObjects.
                    'name': 'Triblend Android T-Shirt',     // Name or ID is required.
                    'id': '12345',
                    'price': '15.25',
                    'brand': 'Google2',
                    'category': 'Apparel',
                    'variant': 'Gray',
                    'quantity': 1,
                    'coupon': '',                            // Optional fields may be omitted or set to empty string.
                    'metric1':'20.25',  // original price
                    'metric2':'5.00'  // discount
                   },
                   {
                    'name': 'Donut Friday Scented T-Shirt',
                    'id': '67890',
                    'price': '33.75',
                    'brand': 'Google2',
                    'category': 'Apparel',
                    'variant': 'Black',
                    'quantity': 1,
                    'metric1':'33.75',  // original price
                    'metric2':'0.00'  // discount
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
                  'products': [{                            // List of productFieldObjects.
                    'name': 'Triblend Android T-Shirt',     // Name or ID is required.
                    'id': '12345',
                    'price': '15.25',
                    'brand': 'Google2',
                    'category': 'Apparel',
                    'variant': 'Gray',
                    'quantity': 1,
                    'coupon': '',                            // Optional fields may be omitted or set to empty string.
                    'metric1':'20.25',  // original price
                    'metric2':'5.00'  // discount
                   },
                   {
                    'name': 'Donut Friday Scented T-Shirt',
                    'id': '67890',
                    'price': '33.75',
                    'brand': 'Google2',
                    'category': 'Apparel',
                    'variant': 'Black',
                    'quantity': 1,
                    'metric1':'33.75',  // original price
                    'metric2':'0.00'  // discount
                   }]
                }
              }
            });
            datalayerService.pushToDataLayer(   //also push event ?
            { 'event': 'transaction',
              'page': {
                'dimension1': 'standardShipping2',
                'dimension2': 'Invoice2'
              },
              'ecommerce': {
                'currencyCode': 'EUR',
                'purchase': {
                  'actionField': {
                    'id': 'T'+Math.random()*100000,                         // Transaction ID. Required for purchases and refunds.
                    'affiliation': 'Online Store',
                    'revenue': '35.43',                     // Total transaction value (incl. tax and shipping)
                    'tax':'4.90',
                    'shipping': '5.99',
                    'coupon': 'SUMMER_SALE'
                  },
                  'products': [{                            // List of productFieldObjects.
                    'name': 'Triblend Android T-Shirt',     // Name or ID is required.
                    'id': '12345',
                    'price': '15.25',
                    'brand': 'Google2',
                    'category': 'Apparel',
                    'variant': 'Gray',
                    'quantity': 1,
                    'coupon': '',                            // Optional fields may be omitted or set to empty string.
                    'metric1':'20.25',  // original price
                    'metric2':'5.00'  // discount
                   },
                   {
                    'name': 'Donut Friday Scented T-Shirt',
                    'id': '67890',
                    'price': '33.75',
                    'brand': 'Google2',
                    'category': 'Apparel',
                    'variant': 'Black',
                    'quantity': 1,
                    'metric1':'33.75',  // original price
                    'metric2':'0.00'  // discount
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
