import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import isEmpty from 'lodash/isEmpty'
import PropType from 'prop-types'

import { fetchChores } from '~/actions/chores/fetchChores'

export const ChoreList = ({ chores, actions }) => {
  if (isEmpty(chores)) {
    actions.fetchChores()
    return <div>Loading...</div>
  }
  
  const choreList = chores.map(chore => (
    <li 
      key={chore.description}
      className="ChoreList_list-item">
      <div className="ChoreList_list-item-checkbox">
        <i className="fa fa-square-o" aria-hidden="true"></i>
      </div>
      <div className="ChoreList__list-item-description">
        <p className="ChoreList__list-item-description-text">
          {chore.description}
        </p>
      </div>
    </li>
  ))

  return (
    <div className="ChoreList">
      <ul className="ChoreList__list">
        {choreList}
      </ul>
    </div>
  )
}

ChoreList.proptypes = {
  chores: PropType.array,
  actions: PropType.object
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
