<script src="./ListUsers.ts" lang="ts"></script>

<template>
  <VContainer fluid class="px-4">
    <VCard class="pa-4 elevation-2 mx-auto" width="1200" min-width="600" max-width="1200">
      <VRow no-gutters align="center">
        <VAvatar size="50" color="primary" tile>
          <VIcon dark>mdi-clipboard-text</VIcon>
        </VAvatar>
        <div class="ml-4 text-h5 font-weight-medium">
          {{ nameComponent }}
        </div>
        <VSpacer />
      </VRow>

      <VDivider class="my-4" />

      <VTable
        v-if="!isLoading"
        class="elevation-1"
        :height="users.length > 0 ? 'calc(100vh - 300px)' : 'auto'"
        fixed-header
      >
        <thead>
          <tr>
            <th class="text-center">ID</th>
            <th class="text-center">NOMBRE COMPLETO</th>
            <th class="text-center">USUARIO</th>
            <th class="text-center">EMAIL</th>
            <th class="text-center">TELÉFONO</th>
            <th class="text-center">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tempUser, index) in users" :key="index">
            <td class="text-center">{{ tempUser.id }}</td>
            <td class="text-center">{{ tempUser.name }}</td>
            <td class="text-center">{{ tempUser.username }}</td>
            <td class="text-center">{{ tempUser.email }}</td>
            <td class="text-center">{{ tempUser.phone }}</td>
            <td class="text-center">
              <div class="d-flex justify-center">
                <VTooltip text="Editar" top>
                  <template #activator="{ props }">
                    <VBtn color="info" variant="plain" size="x-small" v-bind="props">
                      <VIcon icon="mdi-account-edit" size="22" />
                    </VBtn>
                  </template>
                </VTooltip>
              </div>
            </td>
          </tr>
        </tbody>
      </VTable>

      <div v-else class="d-flex justify-center align-center" style="height: 200px">
        <div class="text-center">
          <VProgressCircular indeterminate color="primary" size="40" />
          <div class="mt-3">Cargando usuarios...</div>
        </div>
      </div>
    </VCard>
  </VContainer>
</template>

<style scoped></style>
