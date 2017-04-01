import { expect } from 'chai'
import { mount } from 'enzyme'
import React from 'react'
import { setupDOM } from '../helpers/dom'

import ChoresIndex from '../../../src/containers/ChoresIndex'

describe('<ChoresIndex />', () => {
  let choresIndex

  beforeEach(() => {
    choresIndex = mount(<ChoresIndex />)
  })

  it('will say "Your Chores"', () => {
    expect(choresIndex.find('h1').text()).to.contain('Your Chores')
  })

  it('show the "New Chore Form"', () => {
    expect(choresIndex.find('.new-chore')).to.exist
  })
})
