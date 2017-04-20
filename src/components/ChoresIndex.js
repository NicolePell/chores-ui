import React, { Component } from 'react'

import NewChoreForm from '~/components/NewChoreForm'
import ChoreList from '~/containers/ChoreList'

export default class ChoresIndex extends Component {
  render() {
    return (
      <div>
        <h1>Your Chores</h1>
        <NewChoreForm />
        <ChoreList chores={this.props.chores}/>
      </div>
    )
  }
}
