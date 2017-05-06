import React, { Component } from 'react'

import PropTypes from 'prop-types'

import NewChoreForm from './NewChoreForm'
import ChoreList from './ChoreList'

import styles from './Chores.scss'

export default class ChoresIndex extends Component {
  render() {
    const { chores } = this.props

    return (
      <div className="ChoresIndex">
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