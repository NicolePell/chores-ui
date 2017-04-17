import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import reducers from './reducers'

import App from './components/App'
import ChoresIndex from './components/ChoresIndex'

const createStoreWithMiddleware = applyMiddleware()(createStore);
const container = document.querySelector('.container')

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/chores' component={ChoresIndex} />
      </div>
    </Router>
  </Provider>,
  container
)
