import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'

const container = document.querySelector('.container')

render(
  <Provider>
    <App />
  </Provider>,
  container
)
