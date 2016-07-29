'use strict';
(function(){

class ProductComponent {
  constructor($http,$stateParams) {
    this.$http = $http;
    this.$stateParams = $stateParams;
    var dataLayer = window.dataLayer = window.dataLayer || [];
    dataLayer.push({
      'ecommerce': {
        'currencyCode': 'EUR',
        'detail': {
          'actionField': {'list': 'Apparel Gallery'},    // 'detail' actions have an optional list property.
          'products': [{
            'name': 'Triblend Android T-Shirt',         // Name or ID is required.
            'id': '12345',
            'price': '15.25',
            'brand': 'Google',
            'category': 'Apparel',
            'variant': 'Gray'
           }]
         }
       }
    });
  }

  $onInit() {
    this.$http.get('/api/products/'+ this.$stateParams.sku).then(response => {
      this.product = response.data[0];
      console.log(response.data);
    });
  }

}

angular.module('fakeEcommerceApp')
  .component('product', {
    templateUrl: 'app/product/product.html',
    controller: ProductComponent
  });

})();
