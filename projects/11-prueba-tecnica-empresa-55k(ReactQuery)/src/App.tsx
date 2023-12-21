import { useMemo, useState } from 'react'
import './App.css'
import { SortBy } from './types.d'
import { UsersList } from './components/UsersList'
import { useUsers } from './hooks/useUsers'

function App() {
  const { isLoading, isError, users, refetch, fetchNextPage, hasNextPage } =
    useUsers()

  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  // const originalUsers = useRef<User[]>([])

  const toogleColors = () => {
    setShowColors(!showColors)
  }

  const toogleSortByCountry = () => {
    const newSortingValue =
      sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorting(newSortingValue)
  }

  const handleDelete = (uuid: string) => {
    const filteredUsers = users.filter((user) => user.login.uuid !== uuid)
    // setUsers(filteredUsers)
  }

  const handleResest = async () => {
    await refetch
  }

  const handleChangeSort = (sort: SortBy) => {
    console.log(`Llego el sort: ${sort}`)

    setSorting(sort)
  }

  const filteredUsers = useMemo(() => {
    return filterCountry !== null && filterCountry.length > 0
      ? users.filter((user) => {
          return user.location.country
            .toLowerCase()
            .includes(filterCountry.toLowerCase())
        })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    switch (sorting) {
      case SortBy.NAME:
        return [...filteredUsers].sort((a, b) =>
          a.name.first.localeCompare(b.name.first)
        )
      case SortBy.LAST:
        return [...filteredUsers].sort((a, b) =>
          a.name.last.localeCompare(b.name.last)
        )
      case SortBy.COUNTRY:
        return [...filteredUsers].sort((a, b) =>
          a.location.country.localeCompare(b.location.country)
        )
      case SortBy.NONE:
        return filteredUsers
    }
  }, [filteredUsers, sorting])

  return (
    <>
      <h1>Prueba técnica 55k</h1>
      <header
        style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '16px'
        }}
      >
        <button onClick={toogleColors}>Colorear Filas</button>
        <button onClick={toogleSortByCountry}>
          {sorting === SortBy.COUNTRY
            ? 'No ordenar por país'
            : 'Ordenar por país'}
        </button>
        <button onClick={handleResest}>Reset estado</button>
        <input
          type='text'
          name='filterByCountry'
          id='filterByCountry'
          onChange={(event) => {
            setFilterCountry(event.target.value)
          }}
          placeholder='Filtra por país'
          style={{ borderRadius: '8px' }}
        />
      </header>
      <main>
        {users.length > 0 && (
          <UsersList
            showColors={showColors}
            users={sortedUsers}
            deleteUser={handleDelete}
            sortUser={handleChangeSort}
          />
        )}

        {isLoading && <p>Cargando...</p>}

        {isError && users.length === 0 && <p>Error al cargar los usuarios</p>}

        {!isLoading && users.length === 0 && <p>No hay usuarios</p>}

        {!isLoading && !isError && hasNextPage && (
          <button
            onClick={() => {
              fetchNextPage()
            }}
          >
            Cargar más resultados
          </button>
        )}
      </main>
    </>
  )
}

export default App
