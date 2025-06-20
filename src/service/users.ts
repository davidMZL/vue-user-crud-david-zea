import axios from 'axios'
import type { UserModel } from '@/models/usersModel.ts'
const API_URL = 'https://jsonplaceholder.typicode.com/users'

const usersService = {
  getAll(): Promise<UserModel[]> {
    return axios.get<UserModel[]>(API_URL).then(res => res.data)
  },

  // otras peticiones posibles
  create(payload: Partial<UserModel>): Promise<UserModel> {
    return axios.post<UserModel>(API_URL, payload).then(res => res.data)
  },
  update(id: number, payload: Partial<UserModel>): Promise<UserModel> {
    return axios.put<UserModel>(`${API_URL}/${id}`, payload).then(res => res.data)
  },
  remove(id: number): Promise<void> {
    return axios.delete(`${API_URL}/${id}`).then(() => undefined)
  }
}
export default usersService
