import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { pirate } from './components/App'

const container = document.querySelector('.container').innerHTML = pirate()

render(
  <Provider>
    <App />
  </Provider>,
  container
)
