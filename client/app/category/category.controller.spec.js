'use strict';

describe('Component: Category1Component', function () {

  // load the controller's module
  beforeEach(module('fakeEcommerceApp'));

  var CategoryComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CategoryComponent = $componentController('CategoryComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
