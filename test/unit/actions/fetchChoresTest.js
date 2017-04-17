import { expect } from 'chai'

import { fetchAllChores } from '../../../src/actions/chores/fetchChores'
import { FETCH_ALL_CHORES } from '../../../src/actions/types/ActionType'

describe('actions/chores/fetchChores', () => {
  it('has the type FETCH_CHORES', () => {
    const action = fetchAllChores()
    expect(action.type).to.equal(FETCH_ALL_CHORES)
  })

  it('should fetch chores from FETCH_CHORES action', () => {
    const expectedChores = [
      { description: 'Prow Scuttle'},
      { description: 'Swab the deck!'}
    ]
  })
})
