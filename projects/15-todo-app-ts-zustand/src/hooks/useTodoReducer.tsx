import { useReducer } from 'react'
import { type TodoId, type TodoTitle, type Todo as TodoType } from '../types.d'
import { todoInitialState, todoReducer } from '../reducers/todo'
import { TODO_ACTION_TYPES } from '../consts'

export function useTodoReducer() {
  const [state, dispatch] = useReducer(todoReducer, todoInitialState)

  const addTodo = ({ title }: TodoTitle) =>
    dispatch({
      type: TODO_ACTION_TYPES.ADD_TODO,
      payload: {
        id: crypto.randomUUID(),
        title,
        completed: false
      }
    })

  const removeTodo = ({ id }: TodoId) => {
    const todo = state.find((todo) => todo.id === id) as TodoType
    dispatch({ type: TODO_ACTION_TYPES.REMOVE_TODO, payload: todo })
  }

  const toggleTodo = ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => {
    const todo = state.find((todo) => todo.id === id) as TodoType
    dispatch({
      type: TODO_ACTION_TYPES.TOGGLE_COMPLETES,
      payload: { ...todo, completed }
    })
  }

  const clearCompleted = () => {
    const todo: TodoType = { id: '', title: '', completed: false }
    dispatch({
      type: TODO_ACTION_TYPES.REMOVE_ALL_COMPLETED,
      payload: todo
    })
  }

  return { todos: state, addTodo, removeTodo, toggleTodo, clearCompleted }
}
