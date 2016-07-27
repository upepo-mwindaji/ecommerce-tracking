'use strict';
(function(){

class LoginComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('fakeEcommerceApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent
  });

})();
