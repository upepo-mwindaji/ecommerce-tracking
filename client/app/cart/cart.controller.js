'use strict';
(function(){

class CartComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('fakeEcommerceApp')
  .component('cart', {
    templateUrl: 'app/cart/cart.html',
    controller: CartComponent
  });

})();
