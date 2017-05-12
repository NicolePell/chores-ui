import { expect } from 'chai'

import choresReducer from '~/reducers/chores'
import { fetchChoresSuccess, fetchChoresStart, fetchChoresFailure } from '~/actions/chores/fetchChores'
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
      const EXPECTED_STATE = [
        { description: 'Swab the deck!' },
        { description: 'Sail ho shrouds' }
      ]
      
      expect(
        choresReducer({}, fetchChoresSuccess(EXPECTED_STATE))
      ).to.deep.equal(EXPECTED_STATE)
    })

    it('sets error on chores for FETCH_CHORES_FAILURE', () => {
      const EXPECTED_STATE = {
        error: 'Oops, something went wrong.'
      }

      const fetchChoresFailureAction = fetchChoresFailure({ some: 'props' })

      expect(
        choresReducer({},fetchChoresFailureAction)
      ).to.deep.equal(EXPECTED_STATE)
    })
  })
})
