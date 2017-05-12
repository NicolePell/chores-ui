import { expect } from 'chai'

import { createChore } from '~/actions/chores/createChore'
import { CREATE_CHORE } from '~/actions/types/ActionType'

describe('actions/chores/createChore', () => {
  it('has the type CREATE_CHORE', () => {
    const action = createChore()
    expect(action.type).to.equal(CREATE_CHORE)
  })

  it('creates an action to create a chore', () => {
    const description = 'Swab the deck!'
    expect(createChore(description)).to.deep.equal(
      {
        type: CREATE_CHORE,
        payload: { description }
      }
    )
  })
})
