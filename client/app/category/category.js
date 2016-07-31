'use strict';

angular.module('fakeEcommerceApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('category', {
        url: '/category/:name',
        template: '<category products="products"></category>',
        resolve: {
          products: function($http,$stateParams,datalayerService){
            return $http.get('/api/products/categories/'+ $stateParams.name).then(response => {
              datalayerService.pushToDataLayer(   //also push event ?
                {'ecommerce': {
                    'currencyCode': 'EUR',                       // Local currency is optional.
                    'impressions': [
                     {
                       'name': 'Triblend Android T-Shirt',       // Name or ID is required.
                       'id': '12345',
                       'price': '15.25',
                       'brand': 'Google',
                       'category': 'Apparel',
                       'variant': 'Gray',
                       'list': 'Search Results',
                       'position': 1
                     },
                     {
                       'name': 'Donut Friday Scented T-Shirt',
                       'id': '67890',
                       'price': '33.75',
                       'brand': 'Google',
                       'products': 'Apparel',
                       'variant': 'Black',
                       'list': 'Search Results',
                       'position': 2
                     }]
                  }
                });
              return response.data;
            });
          }
        },
        controller: function($scope,products){
            $scope.products = products;
        }
      });
  });
