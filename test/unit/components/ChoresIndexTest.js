import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import React from 'react'
import { setupDOM } from '../helpers/dom'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import ChoresIndex from '../../../src/components/ChoresIndex'
import ChoreList from '../../../src/containers/ChoreList'
import NewChoreForm from '../../../src/components/NewChoreForm'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('<ChoresIndex />', () => {
  it('has a heading "Chores', () => {
    const chores = []
    const choresIndex = shallow(
      <ChoresIndex chores={chores} />
    )
    expect(choresIndex.find('h1').text()).to.contain('Chores')
  })

  it('show the "New Chore Form"', () => {
    const chores = []
    const choresIndex = shallow(
      <ChoresIndex chores={chores} />
    )
    const childNewChoreForm = choresIndex.find(NewChoreForm)
    expect(
      childNewChoreForm
    ).to.exist
  })

  it('shows the "Chore List"', () => {
    const chores = []
    const choresIndex = shallow(
      <ChoresIndex chores={chores} />
    )

    const childChoreList = choresIndex.find(ChoreList)
    expect(
      childChoreList
    ).to.exist

    expect(
      childChoreList.props()
    ).to.deep.equal(
      { chores }
    )
  })
})
