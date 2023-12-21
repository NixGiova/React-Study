import { createContext, useState } from 'react'

// 1. Create a context
export const FiltersContext = createContext()

// 2. Create a provider, to provide the context
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
