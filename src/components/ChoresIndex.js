import React, { Component } from 'react'

import PropTypes from 'prop-types'

import NewChoreForm from '~/components/NewChoreForm'
import ChoreList from '~/containers/ChoreList'

export default class ChoresIndex extends Component {
  render() {
    const { chores } = this.props

    return (
      <div>
        <h1>Your Chores</h1>
        <NewChoreForm />
        <ChoreList chores={chores}/>
      </div>
    )
  }
}

ChoresIndex.prototypes = {
  chores: PropTypes.array
}