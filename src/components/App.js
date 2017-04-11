import React from 'react'


export const App = ({ children }) => (
  <div>
    <h1>Chores Schmores!</h1>
    {children}
  </div>
)

App.propTypes = {
  children: React.PropTypes.node
}

export default App
