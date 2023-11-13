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
          <th class="cursor-pointer" @click="(receiverModal = true, context = row)">{{ row.name }}</th>
          <th>{{ formatTaxId(row.tax_id) }}</th>
          <th><IconBanks :name="row.bank_name" /></th>
          <th>{{ row.branch || '-/-' }}</th>
          <th>{{ row.account || '-/-' }}</th>
          <th>
            <span :class="`base-status base-status--${row.status}`">
              {{ RECEIVERS_STATUS[row.status] }}
            </span>
          </th>
        </tr>
      </template>

      <template #footer>
        <footer class="base-paginate">
          <button class="base-paginate__action base-paginate__action--left"  @click="prevPage" :disabled="currentPage === 1"><IconArrow left/></button>
          <span v-for="(n, index ) in totalPages" :key="index">{{ n }}</span>
          <button class="base-paginate__action base-paginate__action--right" @click="nextPage" :disabled="currentPage === totalPages"><IconArrow right/></button>
        </footer>
      </template>
    </BaseTable>
  </section>

  <BaseModal :show="receiverModal" :modalWidth="setModalWidth(context.status)" @close="receiverModal = false" >
    <article v-if="deleteContent" class="delete-content">
      <h1>Excluir favorecido</h1>
      <h3>Você confirma a exclusão do favorecido {{ context.name }}?</h3>
      <p>O Histórico de pagamentos para este favorecido será mantido, mas ele será removido da sua lista de favorecidos.</p>
    </article>

    <ReceiversForm
      v-if="context.status === 'rascunho'"
      :receiverContext="context"
      edit
      @finally="receiverModal = false"
    >
      <template #footer>
        <footer class="flex justify-between pt-12 pb-0">
          <button class="base-button base-button--fill" @click="receiverModal = false">Voltar</button>
          <div class="flex justify-between gap-2">
            <button class="base-button base-button--delete" @click="deleteContent = true"><IconTrash /></button>
            <button class="base-button base-button--confirm">Salvar</button>
          </div>
        </footer>
      </template>
    </ReceiversForm>

    <ReceiversDetails 
      v-if="context.status === 'validado' && !deleteContent" 
      :receiverContext="context"
    />

    <template  v-if="deleteContent" #footer>
      <button class="base-button base-button--fill" @click="deleteContent = false">Voltar</button>
      <button class="base-button base-button--delete" @click="deleteAction(context.id)">Confirmar exclusão</button>  
    </template>
     
    <template v-else-if="context.status === 'validado'" #footer>
      <button class="base-button base-button--fill" @click="receiverModal = false">Voltar</button>
      <div class="flex justify-between gap-2">
        <button class="base-button base-button--delete" @click="deleteContent = true"><IconTrash /></button>
        <button class="base-button base-button--confirm">Salvar</button>
      </div>
    </template>
  </BaseModal>
</template>

<script setup>
  import { RECEIVERS_TABLE_HEADERS, RECEIVERS_STATUS } from '~/constants/interface'
  import { useReceiversStore } from '~/stores/receivers'

  const receiversData = useReceiversStore()

  onMounted(async () => {
    await receiversData.setReceivers()
  })

  const context = ref({})
  const receiverModal = ref(false)
  const deleteContent = ref(false)

  const currentPage = ref(1);

  const totalPages = computed(() => {
    return receiversData.getTotalPages
  });

  const receivers = computed(() => {
    return receiversData.getReceivers
  });

  function setModalWidth (status){
    return status === 'rascunho' ? 'sm:max-w-4xl' : 'sm:max-w-xl'
  };

  async function deleteAction (id) {
    await receiversData.handleDeleteReceiver(id)
    this.receiverModal = false
    this.deleteContent = false
  }

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };
  
  watch(currentPage, () => {
    receiversData.setReceivers(currentPage.value)
  });
</script>

<style lang="scss" scoped>
.receivers-table {
  width: 100%;
  padding: $layout-marge;
  background-color: $neutral;

  footer {
    padding-top: 1.5rem;
  }
}

.delete-content {
  p {
    color: $neutral-600;
    font-weight: 300;
    padding-bottom: .875rem;
  }
  
  h1 {
    color: $neutral-800;
    font-weight: 400;
    font-size: 1.5rem;
    padding-bottom: 2rem;
  }

} 
</style>