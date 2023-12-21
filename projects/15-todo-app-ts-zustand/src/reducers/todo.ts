import { TODO_ACTION_TYPES } from "../consts";
import { type ActionType, type Todo as TodoType } from "../types.d";

export const todoInitialState = [
  {
    id: '1',
    title: 'Learn React',
    completed: true
  },
  {
    id: '2',
    title: 'Learn TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Learn Redux',
    completed: false
  }
]

interface Action {
  type: ActionType
  payload: TodoType
}

export const todoReducer = (state: TodoType[], action: Action) => {
  const { type, payload } = action

  switch (type) {
    case TODO_ACTION_TYPES.ADD_TODO:
      return [...state, payload]
    case TODO_ACTION_TYPES.REMOVE_TODO:
      return state.filter((todo) => todo.id !== payload.id)
    case TODO_ACTION_TYPES.REMOVE_ALL_COMPLETED:
      return state.filter((todo) => !todo.completed)
    case TODO_ACTION_TYPES.TOGGLE_COMPLETES:
      const completed = payload.completed
      return state.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            completed
          }
        }
        return todo
      })
    default:
      return state
  }

}
