import { CREATE_CHORE } from '../types/ActionType'

export function createChore(chore) {
  return {
    type: CREATE_CHORE,
    payload: chore
  }
}
