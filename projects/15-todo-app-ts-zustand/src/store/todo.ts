
import { create } from 'zustand'
import { type TodoId, type TodoTitle, type Todo as TodoType } from '../types.d'
import { persist } from 'zustand/middleware'

interface State {
  todos: TodoType[]
  addTodo: ({ title }: TodoTitle) => void
  removeTodo: ({ id }: TodoId) => void
  toggleTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
  clearCompleted: () => void
}

export const useTodoStore = create<State>()(persist((set, get) => {
  return {
    todos: [],
    addTodo: ({ title }) => {
      const { todos } = get()
      const newTodo = {
        id: crypto.randomUUID(),
        title,
        completed: false
      }
      const newTodos = [...todos, newTodo]
      set({ todos: newTodos })
    },
    removeTodo: ({ id }) => {
      const { todos } = get()
      const newTodos = todos.filter((todo) => todo.id !== id)
      set({ todos: newTodos })
    },
    toggleTodo: ({ id, completed }) => {
      const { todos } = get()
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed
          }
        }
        return todo
      })
      set({ todos: newTodos })
    },
    clearCompleted: () => {
      const { todos } = get()
      const newTodos = todos.filter((todo) => !todo.completed)
      set({ todos: newTodos })
    }
  }
}, { name: 'todos' }))