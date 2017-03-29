import React, { Component } from 'react'

import NewChoreForm from './NewChoreForm'

export default class ChoresIndex extends Component {
  render() {
    return (
      <div>
        <h1>Your Chores</h1>
        <NewChoreForm />
      </div>
    )
  }
}
