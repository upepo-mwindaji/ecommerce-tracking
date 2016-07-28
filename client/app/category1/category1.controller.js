'use strict';
(function(){

class Category1Component {
  constructor() {
    // this.message = 'Hello';
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

}

angular.module('fakeEcommerceApp')
  .component('category1', {
    templateUrl: 'app/category1/category1.html',
    controller: Category1Component
  });

})();
