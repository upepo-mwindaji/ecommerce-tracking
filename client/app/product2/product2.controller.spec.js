'use strict';

describe('Component: Product2Component', function () {

  // load the controller's module
  beforeEach(module('fakeEcommerceApp'));

  var Product2Component, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    Product2Component = $componentController('Product2Component', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
