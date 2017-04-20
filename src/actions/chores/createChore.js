import { CREATE_CHORE } from '~/actions/types/ActionType'

export function createChore(description) {
  return {
    type: CREATE_CHORE,
    payload: {
      description
    }
  }
}
