import { expect } from 'chai'
import { mount } from 'enzyme'
import React from 'react'
import { setupDOM } from '../helpers/dom'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import ChoresIndex from '../../../src/components/ChoresIndex'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('<ChoresIndex />', () => {
  let choresIndex

  beforeEach(() => {
    const chores = { chores: [] }
    choresIndex = mount(
      <Provider store={mockStore({ chores: chores })}>
        <ChoresIndex />
      </Provider>
    )
  })

  it('has a heading "Chores', () => {
    expect(choresIndex.find('h1').text()).to.contain('Chores')
  })

  it('show the "New Chore Form"', () => {
    expect(choresIndex.find('.new-chore')).to.exist
  })

  it('shows the "Chore List"', () => {
    expect(choresIndex.find('.chore-list')).to.exist
  })
})
