'use strict';
(function(){

class PaymentComponent {
  constructor() {
    this.message = 'Hello';
    var dataLayer = window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'event': 'payment',
      'ecommerce': {
        'currencyCode': 'EUR',
        'checkout': {
          'actionField': {'step': 3, 'option': 'Visa'},
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
  .component('payment', {
    templateUrl: 'app/payment/payment.html',
    controller: PaymentComponent
  });

})();
