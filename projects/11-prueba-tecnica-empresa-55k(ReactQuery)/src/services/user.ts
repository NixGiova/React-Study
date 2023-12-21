export const fetchUsers = ({ pageParam = 1 }: { pageParam?: number }) => {
  return fetch(
    `https://randomuser.me/api?results=10&seed=NixGiova&page=${pageParam}`
  )
    .then(async (res) => {
      if (!res.ok) throw new Error('Error al cargar los usuarios')
      return await res.json()
    })
    .then((data) => {
      const currentPage = data.info.page
      const nextPage = currentPage > 4 ? undefined : currentPage + 1

      return { users: data.results, nextPage: nextPage }
    })
}