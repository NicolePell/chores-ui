import fetch from 'isomorphic-fetch'
import ActionType from '../types/ActionType'

export function fetchAllChores() {
  return dispatch => {
    dispatch({
      type: ActionType.FETCH_ALL_CHORES_START
    })
    return fetch('http://www.example.com')
  }
}
