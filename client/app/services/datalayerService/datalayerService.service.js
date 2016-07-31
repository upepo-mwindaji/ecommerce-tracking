'use strict';

angular.module('fakeEcommerceApp')
  .factory('datalayerService', function ($window) {

    return {
      pushToDataLayerProperty : function(obj){},
      pushToDataLayer : function(obj){
        var dataLayer = $window.dataLayer = $window.dataLayer || [];
        // dataLayer.forEach(function(dtobj, index){
        //   if dtobj.hasOwnProperty(obj.keys()[0]);
        // })[0];
        // if (obj) {
        //   dataLayer.splice()
        //   dataLayer.ecommerce.detail = {
        //     'actionField': {'list': 'Apparel Gallery'},    // 'detail' actions have an optional list property.
        //     'products': [{
        //       'name': 'Triblend Android T-Shirt',         // Name or ID is required.
        //       'id': '12345',
        //       'price': '15.25',
        //       'brand': 'Google',
        //       'category': 'Apparel',
        //       'variant': 'Gray'
        //     }]
        //   };
        // }
        // else {
          dataLayer.push(obj);
        // }
      },
      removeFromDataLayer : function(property){
        // flush datalayer ?
        // not needed: http://www.simoahava.com/gtm-tips/remember-to-flush-unused-data-layer-variables/
        // but Version 2 of data layer seems to keep: http://www.simoahava.com/gtm-tips/data-layer-variable-versions-explained/
        // http://www.simoahava.com/analytics/google-tag-manager-data-model/

        // if ($window.dataLayer) {
        //   console.log($window.dataLayer)
        //   var ecommerce = $window.dataLayer.filter(function(obj){
        //     return obj.hasOwnProperty('ecommerce');
        //   })[0];
        //   // console.log('ecommerce',ecommerce);
        //   console.log(ecommerce.ecommerce.hasOwnProperty('detail'));
        //   if (ecommerce && ecommerce.ecommerce.hasOwnProperty('detail')) {
        //     console.log('deleting');
        //     delete ecommerce.ecommerce.detail;
        //   }
        // }
      },
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
