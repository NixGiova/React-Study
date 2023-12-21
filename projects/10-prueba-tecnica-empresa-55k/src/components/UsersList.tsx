import { useEffect } from 'react'
import { SortBy, type User } from '../types.d'

interface Props {
  showColors: boolean
  users: User[]
  deleteUser: (uuid: string) => void
  sortUser: (sort: SortBy) => void
}

export function UsersList({ showColors, users, deleteUser, sortUser }: Props) {
  return (
    <>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Foto</th>
            <th onClick={() => sortUser(SortBy.NAME)}>Nombre</th>
            <th onClick={() => sortUser(SortBy.LAST)}>Apellido</th>
            <th onClick={() => sortUser(SortBy.COUNTRY)}>País</th>
            <th> Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            const backgroundColor = index % 2 === 0 ? '#333' : '#555'
            const color = showColors ? backgroundColor : 'transparent'
            return (
              <tr key={user.login.uuid} style={{ backgroundColor: color }}>
                <td>
                  <img src={user.picture.thumbnail} alt='' />
                </td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
                <td>
                  <button
                    onClick={() => deleteUser(user.login.uuid)}
                    style={{ marginRight: '1rem' }}
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
