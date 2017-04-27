import React from 'react'

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
  children: React.PropTypes.node
}

export default App
