import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import App from '~/components/App/App'

describe('<App />', () => {
  it(`will say 'Chores Schmores!'`, () => {
    const app = shallow(<App />)
    expect(app.find('h1').text()).to.contain('Chores Schmores!')
  })
})
