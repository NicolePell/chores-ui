import fetch from 'isomorphic-fetch'
import ActionType from '../types/ActionType'

export function fetchAllChores() {
  return dispatch => {
    dispatch(fetchAllChoresStart())

    return fetch('http://www.chores-api.com/chores')
      .then(response => {
        return response.json()
          .then(chores => dispatch(fetchAllChoresSuccess(chores)))
      })
  }
}

export function fetchAllChoresStart() {
  return {
    type: ActionType.FETCH_ALL_CHORES_START
  }
}

export function fetchAllChoresSuccess(chores) {
  return {
    type: ActionType.FETCH_ALL_CHORES_SUCCESS,
    payload: {
      chores
    }
  }
}
