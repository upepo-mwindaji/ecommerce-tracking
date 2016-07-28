'use strict';
(function(){

class LoginComponent {
  constructor() {
    this.message = 'Hello';
    var dataLayer = window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'event': 'login',
      'ecommerce': {
        'currencyCode': 'EUR',
        'checkout': {
          'actionField': {'step': 2, 'option': 'Visa'},
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
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent
  });

})();
