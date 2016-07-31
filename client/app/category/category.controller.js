'use strict';
(function(){

class CategoryComponent {
  constructor($stateParams) {
    this.$stateParams = $stateParams;
  }

  $onInit() {
  }

}

angular.module('fakeEcommerceApp')
  .component('category', {
    templateUrl: 'app/category/category.html',
    controller: CategoryComponent,
    bindings: {
      products: '<'
    }
  });

})();
