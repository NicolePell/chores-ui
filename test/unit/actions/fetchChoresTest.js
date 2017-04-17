import { expect } from 'chai'

import { fetchAllChores } from '../../../src/actions/chores/fetchChores'
import ActionType from '../../../src/actions/types/ActionType'

describe('actions/chores/fetchChores', () => {
  it('creates FETCH_ALL_CHORES_START when fetching chores', () => {
    expect()
  })

  it('has the type FETCH_CHORES', () => {
    const action = fetchAllChores()
    expect(action.type).to.equal(ActionType.FETCH_ALL_CHORES)
  })
})
