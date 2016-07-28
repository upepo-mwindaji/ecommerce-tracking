'use strict';
(function(){

class Category2Component {
  constructor() {
    this.message = 'Hello';
    var dataLayer = window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'ecommerce': {
        'currencyCode': 'EUR',                       // Local currency is optional.
        'impressions': [
         {
           'name': 'Triblend Android T-Shirt 2',       // Name or ID is required.
           'id': '12345_2',
           'price': '15.25',
           'brand': 'Google',
           'category': 'Apparel',
           'variant': 'Gray',
           'list': 'Search Results',
           'position': 1
         },
         {
           'name': 'Donut Friday Scented T-Shirt',
           'id': '67890_2',
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
}

angular.module('fakeEcommerceApp')
  .component('category2', {
    templateUrl: 'app/category2/category2.html',
    controller: Category2Component
  });

})();
