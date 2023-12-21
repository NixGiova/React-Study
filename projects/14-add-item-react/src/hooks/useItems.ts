import { useReducer } from "react"
import { type Item, type ItemId } from "../types.d"
import { itemReducer } from "../reducers/item"
import { ITEM_ACTION_TYPES } from "../consts"

export const useItems = () => {

  const [state, dispatch] = useReducer(itemReducer, [])

  const addItem = (text: string) => {
    dispatch({
      type: ITEM_ACTION_TYPES.ADD_ITEM, payload: {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        text: text
      }
    })
  }

  const removeItem = (id: ItemId) => {
    const item = state.find((item) => item.id === id) as Item
    dispatch({ type: ITEM_ACTION_TYPES.REMOVE_ITEM, payload: item })
  }

  return { items: state, addItem, removeItem }

}