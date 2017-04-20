import React from 'react'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'

export const ChoreList = ({ chores }) => {
  if (isEmpty(chores)) {
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

export default connect(mapStateToProps)(ChoreList)
