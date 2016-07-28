'use strict';
(function(){

class Product3Component {
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
  .component('product3', {
    templateUrl: 'app/product3/product3.html',
    controller: Product3Component
  });

})();
