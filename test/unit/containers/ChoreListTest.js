import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import ChoreList from '../../../src/containers/ChoreList'

describe('<ChoreList />', () => {
  let choreList

  beforeEach(() => {
    choreList = shallow(<ChoreList />)
  })

  it('has a class name of "chore-list"', () => {
    expect(choreList).to.have.className('chore-list')
  })

  
})
