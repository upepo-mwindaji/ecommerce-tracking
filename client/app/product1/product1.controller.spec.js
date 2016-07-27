'use strict';

describe('Component: Product1Component', function () {

  // load the controller's module
  beforeEach(module('fakeEcommerceApp'));

  var Product1Component, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    Product1Component = $componentController('Product1Component', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
