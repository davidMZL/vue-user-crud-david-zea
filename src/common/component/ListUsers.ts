import { defineComponent, onMounted } from 'vue'
import { useUsers } from '@/composables/useUsers.ts'

export default defineComponent({
  name: 'ListUsers',
  props:{
    title: {
      type: String,
      default: 'Listado',
      required: true,
    },
  },
  setup(props) {
    const { users, fetchUsers, isLoading } = useUsers()
    const nameComponent = props.title
    onMounted(async () => {
      await fetchUsers()
    })

    return {
      users,
      isLoading,
      nameComponent,
    }
  },
})
