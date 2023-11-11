<template>
  <section class="receivers-table">
    <BaseTable>
      <template #headers>
        <tr>
          <th>
            <UCheckbox value="true" />
          </th>
          <th v-for="( header, index) in RECEIVERS_TABLE_HEADERS" :key="{index}">{{ header.label }}</th>
        </tr>
      </template>
      <template #rows>
        <tr v-for="(row, index) in receivers" v-bind:key="{index}">
          <th>
            <UCheckbox value="true" />
          </th>
          <th class="cursor-pointer" @click="receiverModal = true">{{ row.name }}</th>
          <th>{{ row.tax_id }}</th>
          <th>{{ row.bank_name }}</th>
          <th>{{ row.branch }}</th>
          <th>{{ row.account }}</th>
          <th>
            <span :class="`status status--${row.status}`">{{ row.status }}</span>
          </th>
        </tr>
      </template>
    </BaseTable>
  </section>
  <BaseModal :show="receiverModal" @close="receiverModal = false" >
    Teste
  </BaseModal>
</template>

<script setup>
  import { RECEIVERS_TABLE_HEADERS } from '~/constants/interface'
  import { useReceiversStore } from '~/stores/receivers'

  const receiversData = useReceiversStore()

  onMounted(async () => {
    await receiversData.setReceivers()
  })
  
  const receivers = computed(() => {
    return receiversData.getReceivers
  });

  const receiverModal = ref(false)
</script>

<style lang="scss" scoped>
.receivers-table {
  width: 100%;
  padding: $layout-marge;
  background-color: $neutral;
}
</style>