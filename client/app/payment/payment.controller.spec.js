'use strict';

describe('Component: PaymentComponent', function () {

  // load the controller's module
  beforeEach(module('fakeEcommerceApp'));

  var PaymentComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PaymentComponent = $componentController('PaymentComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
