import { expect } from 'chai'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { fetchAllChores } from '../../../src/actions/chores/fetchChores'
import ActionType from '../../../src/actions/types/ActionType'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions/chores/fetchChores', () => {
  it('creates FETCH_ALL_CHORES_START when fetching chores', () => {
    const chores = [
      { description: 'Swab the deck!' },
      { description: 'Sail ho shrouds' }
    ]

    const request = nock('https://chores-api.com/')
      .get('/chores')
      .reply(200, { body: chores })

    const expectedActions = [
      { type: ActionType.FETCH_ALL_CHORES_START }
    ]

    const store = mockStore({ chores: {} })

    return store.dispatch(fetchAllChores())
      .then(() => {
        expect(store.getActions()).to.deep.include.members(expectedActions)
      })
  })

  it('has the type FETCH_CHORES', () => {
    const action = fetchAllChores()
    expect(action.type).to.equal(ActionType.FETCH_ALL_CHORES)
  })
})
