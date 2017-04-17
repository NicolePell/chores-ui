import { expect } from 'chai'

import choresReducer from '../../../src/reducers/chores'
import { CREATE_CHORE, FETCH_ALL_CHORES } from '../../../src/actions/types/ActionType'

describe('reducers/chores', () => {
  it('initialises with an empty object', () => {
    const action = choresReducer(undefined, {})
    expect(action).to.be.eql({})
  })

  it('sets the chore from action of type CREATE_CHORE', () => {
    const chore = {
      description: 'Swab the deck!'
    }

    const action = { type: CREATE_CHORE, payload: chore }

    const expectedChore = {
      description: chore
    }

    expect(choresReducer({}, action)).to.deep.equal(chore)
  })

  it('returns the chores from the action of type FETCH_ALL_CHORES', () => {
    const action = { type: FETCH_ALL_CHORES }

    const expectedChores = [
      { description: 'Prow Scuttle'},
      { description: 'Swab the deck!'}
    ]

    expect(choresReducer({}, action)).to.deep.equal(expectedChores)
  })
})
