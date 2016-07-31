'use strict';
(function(){

class CheckoutComponent {
  constructor($state) {
    console.log($state)
    this.state = $state.current.name;
  }
}

angular.module('fakeEcommerceApp')
  .component('checkout', {
    templateUrl: 'app/checkout/checkout.html',
    controller: CheckoutComponent,
    bindings: {
      cart: '<'
    }
  });

})();
