import fetch from 'isomorphic-fetch'

import config from '~/../config/environments'
import ActionType from '~/actions/types/ActionType'

const url = config[process.env.NODE_ENV].api + '/chores'

export function fetchChores() {
  return dispatch => {
    dispatch(fetchChoresStart())

    return fetch(url)
      .then(response => {
          return response.json()
            .then(chores => dispatch(fetchChoresSuccess(chores)))
            .catch(err => console.log(err))
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
