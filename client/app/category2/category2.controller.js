'use strict';
(function(){

class Category2Component {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('fakeEcommerceApp')
  .component('category2', {
    templateUrl: 'app/category2/category2.html',
    controller: Category2Component
  });

})();
