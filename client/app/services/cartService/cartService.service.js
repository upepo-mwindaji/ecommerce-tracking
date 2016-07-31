'use strict';

angular.module('fakeEcommerceApp')
  .factory('cartService', function () {

    var cart = {
      products: [],
      paymentType: undefined,
      shippingOption: undefined,
    };


    // Public API here
    return {
      addToCart: function(product){
        cart.products.push(product);
      },
      removeFromCart: function(product){
        cart.products = cart.products.filter(function( obj ) {
          return obj.sku !== product.sku;
        });
      },
      getCart: function(){
        return cart;
      }
    };
  });
