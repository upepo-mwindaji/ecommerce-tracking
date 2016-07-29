'use strict';
(function(){

class CartComponent {
  constructor() {
    var dataLayer = window.dataLayer = window.dataLayer || [];
    dataLayer.push({
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

  }
}

angular.module('fakeEcommerceApp')
  .component('cart', {
    templateUrl: 'app/cart/cart.html',
    controller: CartComponent
  });

})();
