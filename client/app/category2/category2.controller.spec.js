'use strict';

describe('Component: Category2Component', function () {

  // load the controller's module
  beforeEach(module('fakeEcommerceApp'));

  var Category2Component, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    Category2Component = $componentController('Category2Component', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
