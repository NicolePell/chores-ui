import ActionType from '../types/ActionType'

export function fetchAllChores() {
  return {
    type: ActionType.FETCH_ALL_CHORES
  }
}
