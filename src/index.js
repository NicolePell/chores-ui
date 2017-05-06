import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import reducer from '~/reducers'
import styles from './index.scss'

import AppIndex from '~/components/App/AppIndex'
import ChoresIndex from '~/components/Chores/ChoresIndex'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
const container = document.getElementById('ROOT')

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route exact path='/' component={AppIndex} />
        <Route path='/chores' component={ChoresIndex} />
      </div>
    </Router>
  </Provider>,
  container
)
