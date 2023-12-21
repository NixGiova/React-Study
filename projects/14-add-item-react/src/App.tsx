import { useState } from 'react'
import './App.css'
import { Item } from './components/Item'
import { useItems } from './hooks/useItems'
import { ItemId } from './types'
import { useSEO } from './hooks/useSEO'

function App() {
  const { items, addItem, removeItem } = useItems()
  useSEO({
    title: `[${items.length}] Prueba técnica React`,
    description: 'Añadir y eliminar elementos de una lista'
  })
  const [item, setItem] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // otra forma de hacer es con el form  --> Forma descontrolada
    // const { elements } = event.currentTarget
    // Estrategia 1
    // const item = elements.namedItem('item') as HTMLInputElement --> no recomendado
    // Estrategia 2
    // const input = elements.namedItem('item')
    // const isInput = input instanceof HTMLInputElement --> Javascript Puro
    // if (!isInput || input == null) return
    // const item = input.value
    // y se agrega ek item a la lista
    // Si se usa esta solución de debe quitar del input el onChange y el value
    // adicionalmente del useStateItem

    //Forma controlada de manejar inputs

    addItem(item)
    setItem('')
  }

  const createHandleRemoveItem = (id: ItemId) => () => {
    removeItem(id)
  }

  return (
    <main>
      <aside>
        <h1>Prueba Técnica React</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form onSubmit={handleSubmit} aria-label='añadir elementos a la lista'>
          <label>
            Elemento a agregar:
            <input
              type='text'
              name='item'
              required
              value={item}
              placeholder='VideoJuegos'
              onChange={(event) => {
                setItem(event?.target.value)
              }}
            />
          </label>
          <button>Añadir elemento a la lista</button>
        </form>
      </aside>

      <section>
        <h2>Lista de elementos</h2>
        <ul>
          {items.map((item) => {
            return (
              <Item
                {...item}
                key={item.id}
                handleClick={createHandleRemoveItem(item.id)}
              />
            )
          })}
        </ul>
        <p>Total de elementos: {items.length}</p>
      </section>
    </main>
  )
}

export default App
