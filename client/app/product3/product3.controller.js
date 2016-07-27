'use strict';
(function(){

class Product3Component {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('fakeEcommerceApp')
  .component('product3', {
    templateUrl: 'app/product3/product3.html',
    controller: Product3Component
  });

})();
