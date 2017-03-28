import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import ChoresIndex from '../../../src/components/ChoresIndex'

describe('<ChoresIndex />', () => {
  it('renders a form', () => {
    const choresIndex = shallow(<ChoresIndex />)

    expect(choresIndex.find('textarea')).to.have.length(1)
    expect(choresIndex.find('button')).to.have.length(2)
  })
})
