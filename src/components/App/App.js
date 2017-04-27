import React from 'react'
import PropTypes from 'prop-types'

import styles from './App.scss'

export const App = ({ children }) => (
  <div>
    <header className="top">
      <nav>
        <h1>Chores Schmores!</h1>
      </nav>
    </header>
    {children}
  </div>
)

App.propTypes = {
  children: PropTypes.node
}

export default App
