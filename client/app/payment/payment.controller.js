'use strict';
(function(){

class PaymentComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('fakeEcommerceApp')
  .component('payment', {
    templateUrl: 'app/payment/payment.html',
    controller: PaymentComponent
  });

})();
