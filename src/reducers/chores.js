import { CREATE_CHORE, FETCH_ALL_CHORES } from '../actions/types/ActionType'

export default function chores(state = {}, action) {
  switch (action.type) {
    case FETCH_ALL_CHORES: {
      return [
        { description: 'Prow Scuttle'},
        { description: 'Swab the deck!'}
      ]
    }
    case CREATE_CHORE: {
      return action.payload
    }
    default:
      return state
  }
}
