'use strict';

angular.module('fakeEcommerceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('product', {
        url: '/product/:sku',
        template: '<product-component product="product"></product-component>',
        onExit: function(datalayerService){
          // flush datalayer ?
          // not needed: http://www.simoahava.com/gtm-tips/remember-to-flush-unused-data-layer-variables/
          // datalayerService.removeFromDataLayer('detail');
        },
        resolve: {
          product: function($http,$stateParams,datalayerService){
            return $http.get('/api/products/'+ $stateParams.sku).then(response => {
              datalayerService.pushToDataLayer(   //also push event ?
                {'ecommerce': {
                    'currencyCode': 'EUR',
                    'detail': {
                      'actionField': {'list': 'Apparel Gallery'},    // 'detail' actions have an optional list property.
                      'products': [{
                        'name': 'Triblend Android T-Shirt',         // Name or ID is required.
                        'id': '12345',
                        'price': '15.25',
                        'brand': 'Google',
                        'category': 'Apparel',
                        'variant': 'Gray'
                       }]
                     }
                   }
                });
              return response.data[0];
            });
          }
        },
        controller: function($scope,product){
            $scope.product = product;
        }
      });
  });
