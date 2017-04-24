import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import isEmpty from 'lodash/isEmpty'

import { fetchChores } from '~/actions/chores/fetchChores'

export const ChoreList = ({ chores, actions }) => {
  if (isEmpty(chores)) {
    actions.fetchChores()
    return <div>Loading...</div>
  }
  
  const choreList = chores.map(chore => <li key={chore.description}>{chore.description}</li>)

  return (
    <div className="chore-list">
      Chore List:
      <ul>
        {choreList}
      </ul>
    </div>
  )
}

export function mapStateToProps(state) {
  return {
    chores:  state.chores
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ fetchChores }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoreList)
