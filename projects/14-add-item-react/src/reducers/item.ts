import { ITEM_ACTION_TYPES } from "../consts"
import { type Item } from "../types.d"

interface Action {
  type: string
  payload: Item
}

export const itemReducer = (state: Item[], action: Action) => {
  const { type, payload } = action

  switch (type) {
    case ITEM_ACTION_TYPES.ADD_ITEM:
      return [...state, payload]
    case ITEM_ACTION_TYPES.REMOVE_ITEM:
      return state.filter(item => item.id !== payload.id)
    default:
      return state
  }
}