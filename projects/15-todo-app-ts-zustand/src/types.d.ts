import { TODO_ACTION_TYPES, TODO_FILTERS } from "./consts"

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completes'>

export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]

export type ActionType = typeof TODO_ACTION_TYPES[keyof typeof TODO_ACTION_TYPES]