<template>
  <UForm
    class="receivers-form"
    :schema="schema" 
    :state="receiver" 
    @submit="onSubmit"
  >
    <header 
      v-if=props.receiverContext 
      class="receivers-form__header"
    >
      <h1>{{ props.receiverContext.name }}</h1>
      <span :class="`base-status base-status--${props.receiverContext.status}`">
        {{ RECEIVERS_STATUS[props.receiverContext.status] }}
      </span>
    </header>
    <h1 class="receivers-form__heading">Quais os dados favorecido?</h1>
    <div class="grid grid-cols-2 gap-x-12 gap-y-12">
      <UFormGroup name="name">
        <template #label>
          <label class="font-light" for="name">
            Qual o nome completo ou razão social do favorecido?
          </label>
        </template>
        <template #default>
          <UInput class="py-2" v-model="receiver.name" />
        </template>
      </UFormGroup>

      <UFormGroup class="" name="tax_id">
        <template #label>
          <label class="font-light" for="name">
            Qual o CPF ou CNPJ?
          </label>
        </template>
        <template #default>
          <UInput class="py-2" v-model="receiver.tax_id" />
        </template>
        
      </UFormGroup>

      <UFormGroup name="email">
        <template #label>
          <label class="font-light" for="name">
            Qual o e-mail para o envio do comprovante?
          </label>
        </template>
        <template #default>
          <UInput class="py-2" v-model="receiver.email" type="email" />
        </template>
      </UFormGroup>
    </div>
    
    <h1 class="receivers-form__heading">Qual a chave pix?</h1>
    <div class="grid grid-cols-2 gap-y-8 sm:mb-7">
      <UFormGroup class="col-start-1 col-end-1 font-light" name="pix_key_type">
        <template #label>
          <label class="font-light" for="pix_key_type">
            Tipo de chave
          </label>
        </template>
        <template #default>
          <USelect 
            class="py-2"
            v-model="receiver.pix_key_type" 
            :options="PIX_KEY_OPTINOS" 
            option-attribute="name" 
          />
        </template>
      </UFormGroup>
      <UFormGroup class="col-start-1 col-end-1" name="pix_key">
        <template #label>
          <label class="font-light" for="pix_key_type">
            Chave
          </label>
        </template>
        <template #default>
          <UInput class="py-2" v-model="receiver.pix_key" />
        </template>
      </UFormGroup>
    </div>
    <slot name="footer"></slot>
  </UForm>
</template>

<script setup lang="ts">
  // @ts-ignore
  import { object, string, type InferType } from 'yup'
  import type { FormSubmitEvent } from '#ui/types'

  import { PIX_KEY_OPTINOS } from '~/constants/financial'
  import { RECEIVERS_STATUS } from '~/constants/interface'
  import { useReceiversStore } from '~/stores/receivers'
  
  const receiversData = useReceiversStore()
  const emit = defineEmits(['finally'])
  const props = defineProps<{
    edit?: boolean,
    receiverContext?: {
      id: string,
      name: string,
      email: string,
      tax_id: string,
      bank_name: string,
      branch: string,
      account_type: string,
      account: string,
      pix_key: string,
      pix_key_type: string,
      status: string,
    },
  }>()

  

  const schema = object({
    name: string()
      .required('Necessario preencher o campo Nome'),
    email: string()
      .email('E-mail invalido')
      .required('Necessario preencher o campo E-mail'),
    tax_id: string()
      .min(11)
      .max(14)
      .required('Necessario preencher o campo CPF/CNPJ'),
    pix_key: string()
      .required('Necessario preencher o campo  Chave pix'),
    pix_key_type: string()
      .required('Necessario preencher o campo Tipo de chave pix'),
  })

  type Schema = InferType<typeof schema>

  const receiver = reactive({
    name: props.receiverContext?.name || undefined,
    tax_id: props.receiverContext?.tax_id || undefined,
    email: props.receiverContext?.email || undefined,
    pix_key: props.receiverContext?.pix_key || undefined,
    pix_key_type: props.receiverContext?.pix_key_type || undefined,
    status: props.receiverContext?.status || 'rascunho'
  })

  async function onSubmit (event: FormSubmitEvent<Schema>) {
    console.log(props.receiverContext?.id)
    if(props.edit === true) {
      await receiversData.handleUpdateReceiver(props.receiverContext?.id, event.data)
      emit('finally')
    } else {
      await receiversData.handleCreateReceiver(event.data)
    }
    console.log(event.data)
  }
</script>

<style lang="scss" scoped>
.receivers-form {
  &__heading {
    font-size: 28px;
    padding: 2rem 0 1rem;
    font-weight: 300;
  }

  &__container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 10%;
    align-items: center;
    
    label {
      padding-bottom: 20px;
    }
  }

  &__header {
    padding-bottom: 3rem;

    h1 {
      padding-bottom: 1rem;
      font-size: 1.75rem;
      font-weight: 300;
    }
  }
}
</style>