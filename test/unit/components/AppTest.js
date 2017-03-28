import { expect } from 'chai'
import { pirate } from '../../../src/components/App'

describe('App', () => {
  it(`will say 'Yar Pirate!'`, () => {
    expect(pirate()).to.equal('Yar Pirate!')
  })
})
