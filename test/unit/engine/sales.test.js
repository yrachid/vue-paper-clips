const test = require('ava')
const sinon = require('sinon')
const sales = require('../../../src/engine/sales')

test('Sales should trigger sellClip mutations when chances are sufficient', t => {
  const store = {commit: sinon.spy(), state: {publicDemand: 2}}
  const chances = sinon.stub().returns(3)

  sales(chances).start(store)

  t.true(store.commit.calledWith('sellClip'))
})
