import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import NewChoreForm from '../../../src/components/NewChoreForm'

describe('<NewChoreForm />', () => {


  it('renders a form', () => {
    const newChoreForm = shallow(<NewChoreForm />)

    expect(newChoreForm.find('textarea')).to.have.length(1)
    expect(newChoreForm.find('button')).to.have.length(2)
  })
})
