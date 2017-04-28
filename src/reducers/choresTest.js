import { expect } from 'chai'

import choresReducer from '~/reducers/chores'
import { fetchChoresSuccess, fetchChoresStart } from '~/actions/chores/fetchChores'
import ActionType from '~/actions/types/ActionType'

describe('reducers/chores', () => {
  it('initialises with an empty object', () => {
    const action = choresReducer(undefined, {})
    expect(action).to.be.eql({})
  })

  describe('creating chores', () => {
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
  })

  describe('fetching chores', () => {
    it('sets initial state on FETCH_CHORES_START action', () => {
      const INITIAL_STATE = [
        { description: 'Prow Scuttle'},
        { description: 'Swab the deck!'}
      ]

      expect(
        choresReducer(INITIAL_STATE, fetchChoresStart())).to.be.empty
    })

    it('sets chores on FETCH_CHORES_SUCCESS action', () => {
      const expectedChores = [
        { description: 'Swab the deck!' },
        { description: 'Sail ho shrouds' }
      ]
      
      expect(
        choresReducer({}, fetchChoresSuccess(expectedChores))
      ).to.deep.equal(expectedChores)
    })
  })
})
