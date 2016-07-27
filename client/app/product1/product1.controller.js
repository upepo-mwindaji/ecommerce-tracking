'use strict';
(function(){

class Product1Component {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('fakeEcommerceApp')
  .component('product1', {
    templateUrl: 'app/product1/product1.html',
    controller: Product1Component
  });

})();
