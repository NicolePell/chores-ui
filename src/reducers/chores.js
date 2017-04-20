import ActionType from '~/actions/types/ActionType'

const initialState = {}

export default function chores(state = initialState, action) {
  switch (action.type) {
    case ActionType.FETCH_ALL_CHORES_START: {
      return initialState
    }
    case ActionType.FETCH_ALL_CHORES_SUCCESS: {
      return action.payload.chores
    }
    case ActionType.CREATE_CHORE: {
      return action.payload
    }
    default:
      return state
  }
}
