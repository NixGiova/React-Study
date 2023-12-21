import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/user";
import { User } from "../types.d";

export const useUsers = () => {

  // 1. argumento del useQuery es la key de la información o de la query
  // 2. es cómo va a traer la información
  // 3. de donde va a sacar el nextValue de la pagination

  const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } =
    useInfiniteQuery<{ users: User[]; nextPage?: number }>(
      ['users'],
      fetchUsers,
      { getNextPageParam: (lastPage) => lastPage.nextPage }
    )

  return { isLoading, isError, users: data?.pages?.flatMap((page) => page.users) ?? [], refetch, fetchNextPage, hasNextPage }
}