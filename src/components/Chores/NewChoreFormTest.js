import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import NewChoreForm from '~/components/Chores/NewChoreForm'

describe('<NewChoreForm />', () => {
  let newChoreForm

  beforeEach(() => {
    newChoreForm = shallow(<NewChoreForm />)
  })

  it('has a class name of "NewChoreForm"', () => {
    expect(newChoreForm).to.have.className('NewChoreForm')
  })

  it('renders a form', () => {
    expect(newChoreForm.find('.NewChoreForm__form')).to.have.length(1)
  })

  it('has an "Add" button', () => {
    expect(newChoreForm.find('.NewChoreForm__button')).to.have.text('Add')
  })

  describe('using the input box', () => {
    it('renders with a property "chore" that is an empty string', () => {
      expect(newChoreForm.find('.NewChoreForm__input').get(0).props.value).to.equal('')
    })

    it('has a property "chore" that updates the textarea', () => {
      newChoreForm.find('.NewChoreForm__input').simulate('change', { target: { value: 'Hornswaggle Yellow Jack.' } })
      expect(newChoreForm.find('.NewChoreForm__input')).to.have.value('Hornswaggle Yellow Jack.')
    })

    it('clears the text area once submitted', () => {
      newChoreForm.find('.NewChoreForm__input').simulate('change', { target: { value: 'Hornswaggle Yellow Jack.' } })
      newChoreForm.find('.NewChoreForm__form').simulate('submit', { preventDefault() {} })
      expect(newChoreForm.find('.NewChoreForm__input')).to.have.value('')
    })
  })
})
