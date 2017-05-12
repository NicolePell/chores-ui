import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import AppIndex from '~/components/App/AppIndex'

describe('<AppIndex />', () => {
  it(`will say 'Chores Schmores!'`, () => {
    const appIndex = shallow(<AppIndex />)
    expect(appIndex.find('h1').text()).to.contain('Chores Schmores!')
  })
})
