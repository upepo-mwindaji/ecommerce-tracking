'use strict';

describe('Component: Product3Component', function () {

  // load the controller's module
  beforeEach(module('fakeEcommerceApp'));

  var Product3Component, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    Product3Component = $componentController('Product3Component', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
