import React from 'react'
import PropTypes from 'prop-types'

import styles from './App.scss'

export const AppIndex = ({ children }) => (
  <div className="AppIndex">
    <header>
      <nav>
        <h1>Chores Schmores!</h1>
      </nav>
    </header>
    {children}
  </div>
)

AppIndex.propTypes = {
  children: PropTypes.node
}

export default AppIndex
