import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import { ChoreList, mapStateToProps } from '../../../src/containers/ChoreList'

describe('<ChoreList />', () => {
  let choreList

  beforeEach(() => {
    const chores = { chores: ['Prow scuttle', 'Sail ho shrouds']}
    choreList = shallow(<ChoreList chores={chores} />)
  })

  it('has a class name of "chore-list"', () => {
    expect(choreList).to.have.className('chore-list')
  })

  it('shows an <li> for each chore', () => {
    expect(choreList).to.contain('Prow scuttle')
    expect(choreList).to.contain('Sail ho shrouds')
  })

  it('maps chores from state to <ChoreList />', () => {
    const state = {
      chores: ['Prow scuttle', 'Sail ho shrouds']
    }

    const result = mapStateToProps(state)
    expect(result.chores).to.equal(state.chores)
  })
})
