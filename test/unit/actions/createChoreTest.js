import { expect } from 'chai'

import { createChore } from '../../../src/actions/chores/createChore'
import { CREATE_CHORE } from '../../../src/actions/types/ActionType'

describe('actions/chores/createChore', () => {
  it('has the type CREATE_CHORE', () => {
    const action = createChore()
    expect(action.type).to.equal(CREATE_CHORE)
  })
})
