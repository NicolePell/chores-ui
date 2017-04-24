import fetch from 'isomorphic-fetch'
import ActionType from '~/actions/types/ActionType'

export function fetchChores() {
  return dispatch => {
    dispatch(fetchChoresStart())

    return fetch('http://www.chores-api.com/chores')
      .then(response => {
        return response.json()
          .then(chores => dispatch(fetchChoresSuccess(chores)))
      })
  }
}

export function fetchChoresStart() {
  return {
    type: ActionType.FETCH_CHORES_START
  }
}

export function fetchChoresSuccess(chores) {
  return {
    type: ActionType.FETCH_CHORES_SUCCESS,
    payload: {
      chores
    }
  }
}
