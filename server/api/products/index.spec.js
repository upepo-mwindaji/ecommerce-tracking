'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var productsCtrlStub = {
  index: 'productsCtrl.index',
  show: 'productsCtrl.show',
  create: 'productsCtrl.create',
  update: 'productsCtrl.update',
  destroy: 'productsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var productsIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './products.controller': productsCtrlStub
});

describe('Products API Router:', function() {

  it('should return an express router instance', function() {
    expect(productsIndex).to.equal(routerStub);
  });

  describe('GET /api/productss', function() {

    it('should route to products.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'productsCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/productss/:id', function() {

    it('should route to products.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'productsCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/productss', function() {

    it('should route to products.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'productsCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/productss/:id', function() {

    it('should route to products.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'productsCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/productss/:id', function() {

    it('should route to products.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'productsCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/productss/:id', function() {

    it('should route to products.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'productsCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
