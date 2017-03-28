import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import ChoresIndex from '../../../src/components/ChoresIndex'

describe('<ChoresIndex />', () => {
  it('shows a textarea', () => {
    const choresIndex = shallow(<ChoresIndex />)
    expect(choresIndex.find('textarea')).to.exist
  })
})
