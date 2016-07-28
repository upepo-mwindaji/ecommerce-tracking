'use strict';
(function(){

class Product1Component {
  constructor() {
    var dataLayer = window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'ecommerce': {
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
  }
}

angular.module('fakeEcommerceApp')
  .component('product1', {
    templateUrl: 'app/product1/product1.html',
    controller: Product1Component
  });

})();
