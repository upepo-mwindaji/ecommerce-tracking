'use strict';
(function(){

class Category1Component {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('fakeEcommerceApp')
  .component('category1', {
    templateUrl: 'app/category1/category1.html',
    controller: Category1Component
  });

})();
