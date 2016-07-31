'use strict';

angular.module('fakeEcommerceApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        template: '<main categories="categories"></main>',
        resolve: {
          categories: function($http){
            return $http.get('/api/products/categories').then(response => {
              return response.data;
            });
          }
        },
        controller: function($scope,categories){
            $scope.categories = categories;
        }
      });
  });
