import ActionType from '../actions/types/ActionType'

export default function chores(state = {}, action) {
  switch (action.type) {
    case ActionType.FETCH_ALL_CHORES: {
      return [
        { description: 'Prow Scuttle'},
        { description: 'Swab the deck!'}
      ]
    }
    case ActionType.CREATE_CHORE: {
      return action.payload
    }
    default:
      return state
  }
}
