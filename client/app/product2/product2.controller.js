'use strict';
(function(){

class Product2Component {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('fakeEcommerceApp')
  .component('product2', {
    templateUrl: 'app/product2/product2.html',
    controller: Product2Component
  });

})();
