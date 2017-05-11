import { expect } from 'chai'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { fetchChores } from '~/actions/chores/fetchChores'
import ActionType from '~/actions/types/ActionType'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions/chores/fetchChores', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  describe('success', () => {
    it('creates FETCH_CHORES_START when request to fetch chores starts', () => {
      const chores = [
        { description: 'Swab the deck!' },
        { description: 'Sail ho shrouds' }
      ]

      nock('http://localhost:8082')
        .get('/chores')
        .reply(200, chores)

      const expectedActions = [
        { type: ActionType.FETCH_CHORES_START }
      ]

      const store = mockStore({ chores: {} })

      return store.dispatch(fetchChores())
      .then(() => {
        expect(store.getActions()).to.deep.include.members(expectedActions)
      })
    })

    it('creates FETCH_CHORES_SUCCESS when chores have been fetched', () => {
      const chores = [
          { "id": 1, "description": "Swab the deck!" },
          { "id": 2, "description": "Prow Scuttle" }
        ]

      nock('http://localhost:8082')
        .get('/chores')
        .reply(200, chores)

      const expectedActions = [
        {
          type: ActionType.FETCH_CHORES_SUCCESS,
          payload: {
            chores
          }
        }
      ]

      const store = mockStore({ chores: {} })

      return store.dispatch(fetchChores())
      .then(() => {
        expect(store.getActions()).to.deep.include.members(expectedActions)
      })
    })
  })

  describe('failure', () => {
    it('creates FETCH_CHORES_FAILURE when fetch fails', () => {
      nock('http://localhost:8082')
        .get('/chores')
        .reply(400, 'BAD REQUEST')

      const expectedActions = [
        {
          type: ActionType.FETCH_CHORES_FAILURE,
          payload: {
            error: 'Oops, something went wrong.',
            response: {
              code: 400,
              status: 'Bad Request'
            }
          }
        }
      ]

      const store = mockStore({ chores: {} })

      return store.dispatch(fetchChores())
        .then(() => {
          expect(store.getActions()).to.deep.include.members(expectedActions)
      })
    })
  })
})
