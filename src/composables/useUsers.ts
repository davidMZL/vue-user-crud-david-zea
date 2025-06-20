import { storeToRefs } from 'pinia'
import { useUsersStore } from '@/stores/usersStore.ts'

export const useUsers = () => {
  const usersStore = useUsersStore()

  const {
    users,
    isLoading
  } = storeToRefs(usersStore)

  return {
    users,
    isLoading,
    fetchUsers: () => usersStore.fetchUsers(),
  }
}
