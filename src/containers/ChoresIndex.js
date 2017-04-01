import React, { Component } from 'react'

import NewChoreForm from '../components/NewChoreForm'

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
