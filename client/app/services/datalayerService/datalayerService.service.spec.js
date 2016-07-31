'use strict';

describe('Service: datalayerService', function () {

  // load the service's module
  beforeEach(module('fakeEcommerceApp.datalayerService'));

  // instantiate service
  var datalayerService;
  beforeEach(inject(function (_datalayerService_) {
    datalayerService = _datalayerService_;
  }));

  it('should do something', function () {
    expect(!!datalayerService).to.be.true;
  });

});
