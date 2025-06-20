import { defineStore } from 'pinia'
import usersService from '@/service/users.ts'
import type { UserModel } from '@/models/usersModel.ts'

export interface UserState {
  users: UserModel[]
  isLoading: boolean
}

export const useUsersStore = defineStore('usersStore', {
  state: (): UserState => ({
    users: [],
    isLoading: false,
  }),

  actions: {
    async fetchUsers(): Promise<void> {
      this.isLoading = true
      try {
        this.users = await usersService.getAll()
      } catch (error) {
        console.error('Error fetching users:', error)
      } finally {
        this.isLoading = false
      }
    },
  },
})

