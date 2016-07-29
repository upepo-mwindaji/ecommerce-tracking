'use strict';
(function(){

class CategoryComponent {
  constructor($http,$stateParams) {
    this.$http = $http;
    this.$stateParams = $stateParams;
    var dataLayer = window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'ecommerce': {
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
           'category': 'Apparel',
           'variant': 'Black',
           'list': 'Search Results',
           'position': 2
         }]
      }
    });
  }

  $onInit() {
    this.$http.get('/api/products/categories/'+ this.$stateParams.name).then(response => {
      this.products = response.data;
    });
  }

}

angular.module('fakeEcommerceApp')
  .component('category', {
    templateUrl: 'app/category/category.html',
    controller: CategoryComponent
  });

})();
