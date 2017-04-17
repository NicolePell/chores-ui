import { expect } from 'chai'

import choresReducer from '../../../src/reducers/chores'
import ActionType from '../../../src/actions/types/ActionType'

describe('reducers/chores', () => {
  it('initialises with an empty object', () => {
    const action = choresReducer(undefined, {})
    expect(action).to.be.eql({})
  })

  it('sets the chore from action of type CREATE_CHORE', () => {
    const chore = {
      description: 'Swab the deck!'
    }

    const action = { type: ActionType.CREATE_CHORE, payload: chore }

    const expectedChore = {
      description: chore
    }

    expect(choresReducer({}, action)).to.deep.equal(chore)
  })

  it('returns the chores from the action of type FETCH_ALL_CHORES', () => {
    const action = { type: ActionType.FETCH_ALL_CHORES }

    const expectedChores = [
      { description: 'Prow Scuttle'},
      { description: 'Swab the deck!'}
    ]

    expect(choresReducer({}, action)).to.deep.equal(expectedChores)
  })
})
