import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import ChoresIndex from '../../../src/components/ChoresIndex'

describe('<ChoresIndex />', () => {
  it(`will say 'Your Chores'`, () => {
    const choresIndex = shallow(<ChoresIndex />)
    expect(choresIndex.find('h1').text()).to.contain('Your Chores')
  })
})
