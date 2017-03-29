import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import NewChoreForm from '../../../src/components/NewChoreForm'

describe('<NewChoreForm />', () => {
  let newChoreForm

  beforeEach(() => {
    newChoreForm = shallow(<NewChoreForm />)
  })

  it('has a class name of "new-chore-form"', () => {
    expect(newChoreForm).to.have.className('new-chore-form')
  })

  it('renders a form', () => {
    expect(newChoreForm.find('textarea')).to.have.length(1)
    expect(newChoreForm.find('button')).to.have.length(2)
  })
})
