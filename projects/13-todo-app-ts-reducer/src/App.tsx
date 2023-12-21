import { useState } from 'react'
import { Todos } from './components/Todos'
import { type FilterValue } from './types.d'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { TODO_FILTERS } from './consts'
import { useTodoReducer } from './hooks/useTodoReducer'

const App = (): JSX.Element => {
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  )

  const { todos, addTodo, removeTodo, toggleTodo, clearCompleted } =
    useTodoReducer()

  const handleFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter)
  }

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount

  return (
    <>
      <div className='todoapp'>
        <Header onAddTodo={addTodo} />
        <Todos
          todos={filteredTodos}
          onRemoveTodo={removeTodo}
          onToggleCompleted={toggleTodo}
        />
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filterSelected={filterSelected}
          onClearCompleted={clearCompleted}
          handleFilterChange={handleFilterChange}
        />
      </div>
    </>
  )
}

export default App
