'use strict';
(function(){

class ConfirmationComponent {
  constructor() {
    this.message = 'Hello';
    var dataLayer = window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'event': 'confirmation',
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
  .component('confirmation', {
    templateUrl: 'app/confirmation/confirmation.html',
    controller: ConfirmationComponent
  });

})();
