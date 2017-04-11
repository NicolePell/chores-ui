import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import { ChoreList, mapStateToProps } from '../../../src/containers/ChoreList'

describe('<ChoreList />', () => {
  it('has a class name of "chore-list"', () => {
    const chores = ['Prow scuttle', 'Sail ho shrouds']
    const choreList = shallow(<ChoreList chores={chores} />)

    expect(choreList).to.have.className('chore-list')
  })

  it('shows an <li> for each chore', () => {
    const chores = ['Prow scuttle', 'Sail ho shrouds']
    const choreList = shallow(<ChoreList chores={chores} />)

    expect(choreList).to.contain('Prow scuttle')
    expect(choreList).to.contain('Sail ho shrouds')
  })

  it('maps chores from state to <ChoreList />', () => {
    const chores = ['Prow scuttle', 'Sail ho shrouds']
    const choreList = shallow(<ChoreList chores={chores} />)
    const state = {
      chores: ['Prow scuttle', 'Sail ho shrouds']
    }

    const result = mapStateToProps(state)
    expect(result).to.equal(state.chores)
  })
})
