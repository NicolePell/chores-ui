import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import { ChoreList, mapStateToProps } from './ChoreList'

describe('<ChoreList />', () => {
  it('has a class name of "ChoreList"', () => {
    const chores = [
      { description: 'Prow scuttle' },
      { description: 'Sail ho shrouds' }
    ]
    const choreList = shallow(<ChoreList chores={chores} />)

    expect(choreList).to.have.className('ChoreList')
  })

  it('shows an <li> for each chore', () => {
    const chores = [
          { description: 'Prow scuttle' },
          { description: 'Sail ho shrouds' }
        ]
    const choreList = shallow(<ChoreList chores={chores} />)

    expect(choreList).to.contain('Prow scuttle')
    expect(choreList).to.contain('Sail ho shrouds')
  })

  it('maps chores from state to <ChoreList />', () => {
    const state = {
      chores: [
          { description: 'Prow Scuttle'},
          { description: 'Swab the deck!'}
        ]
    }
    const result = mapStateToProps(state)
    expect(result.chores).to.equal(state.chores)
  })
})
