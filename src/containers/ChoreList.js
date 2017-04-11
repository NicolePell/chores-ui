import React from 'react'
import { connect } from 'react-redux'

export const ChoreList = ({chores}) => {
  if (!chores) {
    return <div>Loading...</div>
  }

  const choreListItems = chores.map(chore => <li key={chore}>{chore}</li>)

  return (
    <div className="chore-list">
      Chore List:
      <ul>
        {choreListItems}
      </ul>
    </div>
  )
}

export function mapStateToProps(state) {
  return state.chores
}

export default connect(mapStateToProps)(ChoreList)
