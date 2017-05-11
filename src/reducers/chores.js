import ActionType from '~/actions/types/ActionType'

const INITIAL_STATE = {}

export default function chores(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionType.FETCH_CHORES_START: {
      return INITIAL_STATE
    }
    case ActionType.FETCH_CHORES_SUCCESS: {
      return action.payload.chores
    }
    case ActionType.FETCH_CHORES_FAILURE: {
      return { error: action.payload.error }
    }
    case ActionType.CREATE_CHORE: {
      return action.payload
    }
    default:
      return state
  }
}
