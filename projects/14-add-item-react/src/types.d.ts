import { ITEM_ACTION_TYPES } from "./consts"

export type ItemId = `${string}-${string}-${string}-${string}-${string}`

export interface Item {
  id: ItemId
  timestamp: number
  text: string
}

export type ActionType = typeof ITEM_ACTION_TYPES[keyof typeof ITEM_ACTION_TYPES]