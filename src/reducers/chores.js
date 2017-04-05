import { CREATE_CHORE } from '../actions/types/ActionType'

export default function chores(state = {}, action) {
  switch (action.type) {
    case CREATE_CHORE: {
      return action.payload
    }
    default:
      return state
  }
}
