'use strict';

describe('Component: Category1Component', function () {

  // load the controller's module
  beforeEach(module('fakeEcommerceApp'));

  var Category1Component, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    Category1Component = $componentController('Category1Component', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
