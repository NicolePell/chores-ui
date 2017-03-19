import { expect } from 'chai'
import { pirate } from '../../src/components/ChoresIndex'

describe('Index page renders', () => {

  it('should say Yar Pirate!', () => {
    expect(pirate()).to.equal('Yar Pirate!')
  })

})
