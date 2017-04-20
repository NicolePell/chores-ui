import { expect } from 'chai'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { fetchAllChores } from '../../../../src/actions/chores/fetchChores'
import ActionType from '../../../../src/actions/types/ActionType'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions/chores/fetchChores', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  describe('success', () => {
    it('creates FETCH_ALL_CHORES_START when request to fetch chores starts', () => {
      const chores = [
        { description: 'Swab the deck!' },
        { description: 'Sail ho shrouds' }
      ]

      const request = nock('http://www.chores-api.com/')
      .get('/chores')
      .reply(200, chores)

      const expectedActions = [
        { type: ActionType.FETCH_ALL_CHORES_START }
      ]

      const store = mockStore({ chores: {} })

      return store.dispatch(fetchAllChores())
      .then(() => {
        expect(store.getActions()).to.deep.include.members(expectedActions)
      })
    })

    it('creates FETCH_ALL_CHORES_SUCCESS when chores have been fetched', () => {
      const chores = [
        { description: 'Swab the deck!' },
        { description: 'Sail ho shrouds' }
      ]

      const request = nock('http://www.chores-api.com/')
      .get('/chores')
      .reply(200, chores)

      const expectedActions = [
        {
          type: ActionType.FETCH_ALL_CHORES_SUCCESS,
          payload: {
            chores
          }
        }
      ]

      const store = mockStore({ chores: {} })

      return store.dispatch(fetchAllChores())
        .then(() => {
          expect(store.getActions()).to.deep.include.members(expectedActions)
        })
    })
  })
})