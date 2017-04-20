import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import NewChoreForm from '~/components/NewChoreForm'

describe('<NewChoreForm />', () => {
  let newChoreForm

  beforeEach(() => {
    newChoreForm = shallow(<NewChoreForm />)
  })

  it('has a class name of "new-chore"', () => {
    expect(newChoreForm).to.have.className('new-chore')
  })

  it('renders a form', () => {
    expect(newChoreForm.find('.new-chore__form')).to.have.length(1)
    expect(newChoreForm.find('.new-chore__field')).to.have.length(1)
    expect(newChoreForm.find('.new-chore__button')).to.have.length(1)
  })

  it('has an "Add" button', () => {
    expect(newChoreForm.find('.new-chore__button')).to.have.text('Add')
  })

  it('renders with a property "chore" that is an empty string', () => {
    expect(newChoreForm.find('.new-chore__field').get(0).props.value).to.equal('')
  })

  it('has a property "chore" that updates the textarea', () => {
    newChoreForm.find('.new-chore__field').simulate('change', { target: { value: 'Hornswaggle Yellow Jack.' } })
    expect(newChoreForm.find('.new-chore__field')).to.have.value('Hornswaggle Yellow Jack.')
  })

  it('clears the text area once submitted', () => {
    newChoreForm.find('.new-chore__field').simulate('change', { target: { value: 'Hornswaggle Yellow Jack.' } })
    newChoreForm.find('.new-chore__form').simulate('submit', { preventDefault() {} })
    expect(newChoreForm.find('.new-chore__field')).to.have.value('')
  })
})
