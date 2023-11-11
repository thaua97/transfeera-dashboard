<template>
  <section class="receivers-table">
    <UTable
      v-model="selected" 
      :rows="receivers"
      :columns="columns"
      :ui="{
        divide: 'divide-y-0 divide-x-0',
        thead: 'divide-y-0',
        tbody:'divide-y-0',
      }"
    >
      <template #name-data="{ row }">
        <span :class="[selected.find(person => person.id === row.id) && 'text-primary-500 dark:text-primary-400']">{{ row.name }}</span>
      </template>

      <template #status-data="{ row }">
        <span :class="`status status--${row.status}`">{{ row.status }}</span>
      </template>
    </UTable>
  </section>
  
</template>

<script setup>
  const items = (row) => [
    [{
      label: 'Edit',
      icon: 'i-heroicons-pencil-square-20-solid',
      click: () => console.log('Edit', row.id)
    }, {
      label: 'Duplicate',
      icon: 'i-heroicons-document-duplicate-20-solid'
    }], [{
      label: 'Archive',
      icon: 'i-heroicons-archive-box-20-solid'
    }, {
      label: 'Move',
      icon: 'i-heroicons-arrow-right-circle-20-solid'
    }], [{
      label: 'Delete',
      icon: 'i-heroicons-trash-20-solid'
    }]
  ]

  const columns = [
    {
      key: "name",
      label: "Favorecido"
    },
    {
      key: "tax_id",
      label: "CPF/CNPJ"
    },
    {
      key: "bank_name",
      label: "Banco"
    },
    {
      key: "branch",
      label: "Agencia"
    },
    {
      key: "account",
      label: "CC"
    },
    {
      key: "status",
      label: "Status do favorecido"
    },
  ]
  const receivers = [
  {
      id: "0accb825-db24-4288-9f29-c88b9ec656da",
      name: "Julia Silva",
      email: "julia.silva@exemplo.com",
      tax_id: "59738860000170",
      branch: null,
      account: null,
      account_type: null,
      bank_name: null,
      bank_code: null,
      pix_key: "9afe6a96-6b27-4acc-acf0-59159076c578",
      pix_key_type: "aleatoria",
      status: "rascunho",
      created_at: "2023-10-25 16:00:10-03",
      updated_at: "2023-10-25 16:00:10-03"
    },
    {
      id: "37f7e55c-b2a9-4cc6-a8fd-8062925f86c8",
      name: "Rafael Costa",
      email: "rafael.costa@exemplo.com",
      tax_id: "79915139000115",
      branch: "3402",
      account: "517638",
      account_type: "Conta Poupança",
      bank_name: "Santander",
      bank_code: "033",
      pix_key: "79915139000115",
      pix_key_type: "cnpj",
      status: "validado",
      created_at: "2023-10-25 16:01:10-03",
      updated_at: "2023-10-25 16:01:10-03"
    },
    {
      id: "4765673f-8a2f-4048-8ce9-e94da4adfe29",
      name: "Gabriela Santos",
      email: "gabriela.santos@exemplo.com",
      tax_id: "52654930009",
      branch: "5649",
      account: "216893",
      account_type: "Conta Poupança",
      bank_name: "Santander",
      bank_code: "033",
      pix_key: "52654930009",
      pix_key_type: "cpf",
      status: "validado",
      created_at: "2023-10-25 16:02:10-03",
      updated_at: "2023-10-25 16:02:10-03"
    },
    {
      id: "cd1cf409-7d28-444a-be68-8d51a0d752cb",
      name: "Guilherme Ferreira",
      email: "guilherme.ferreira@exemplo.com",
      tax_id: "32857141076",
      branch: "8537",
      account: "46597",
      account_type: "Conta Corrente",
      bank_name: "Itaú",
      bank_code: "341",
      pix_key: "6a75c5e8-996f-4499-ad76-1ddf23b1cf63",
      pix_key_type: "aleatoria",
      status: "validado",
      created_at: "2023-10-25 16:03:10-03",
      updated_at: "2023-10-25 16:03:10-03"
    },
  ]

  const selected = ref([receivers[1]])
</script>

<style lang="scss" scoped>
.receivers-table {
  width: 100%;
  height: 100vh; 
  padding: $layout-marge;
  background-color: $neutral;
}
</style>