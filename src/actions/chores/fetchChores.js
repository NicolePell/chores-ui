import fetch from 'isomorphic-fetch'

import config from '~/../config/environments'
import ActionType from '~/actions/types/ActionType'

const url = config[process.env.NODE_ENV].api + '/chores'

export function fetchChores() {
  return dispatch => {
    dispatch(fetchChoresStart())

    return fetch(url)
      .then(response => {
        if (response.status >= 400) {
          return dispatch(fetchChoresFailure(response))
        }
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

export function fetchChoresFailure(response) {
  return {
    type: ActionType.FETCH_CHORES_FAILURE,
    payload: {
      error: 'Oops, something went wrong.',
      response: {
        code: response.status,
        status: response.statusText
      }
    }
  }
}
