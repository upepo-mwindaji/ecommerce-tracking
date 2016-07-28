'use strict';

(function() {

class MainController {

  constructor($http) {
    this.$http = $http;
    // this.$analytics = $analytics;
    // this.$location = $location;
    this.awesomeThings = [];
  }

  // constructor($http, $analytics, $location) {
  //   this.$http = $http;
  //   this.$analytics = $analytics;
  //   this.$location = $location;
  //   this.awesomeThings = [];
  // }

  $onInit() {
    this.$http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
    });
    // $analytics.pageTrack($location.absUrl());
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing });
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('fakeEcommerceApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
