import { expect } from 'chai'
import chores from '../../../src/reducers/chores'

describe('reducers/chores', () => {
  it('initialises with an empty array', () => {
    const result = chores(undefined, {})
    expect(result).to.be.eql([])
  })
})
