<template>
  <UForm :schema="schema" :state="receiver" @submit="onSubmit">
      <h1 class="text-3xl font-light py-14">Quais os dados favorecido?</h1>
      <div class="grid grid-cols-2 gap-y-10 gap-x-8">

        <UFormGroup class="font-light" name="name">
          <template #label>
            <label class="font-light py-" for="name">
              Qual o nome completo ou razão social do favorecido?
            </label>
          </template>
          <template #default>
            <UInput v-model="receiver.name" />
          </template>
        </UFormGroup>

        <UFormGroup name="tax_id">
          <template #label>
            <label class="font-light py-7" for="name">
              Qual o CPF ou CNPJ?
            </label>
          </template>
          <template #default>
            <UInput v-model="receiver.tax_id" />
          </template>
          
        </UFormGroup>
        <UFormGroup label="Qual o e-mail para o envio do comprovante?" name="email">
          <UInput v-model="receiver.email" type="email" />
        </UFormGroup>
      </div>
      
      <h1 class="text-3xl font-light py-14">Qual a chave pix?</h1>
      <div class="grid grid-cols-2 gap-y-8">
        <UFormGroup class="col-start-1 col-end-1" label="Tipo de chave" name="pix_key_type">
          <USelect v-model="receiver.pix_key_type" :options="PIX_KEY_OPTINOS" option-attribute="name" />
        </UFormGroup>
        <UFormGroup class="col-start-1 col-end-1" label="Chave" name="pix_key">
          <UInput v-model="receiver.pix_key" />
        </UFormGroup>
      </div>

      <footer class="flex justify-between pt-24">
        <button class="base-button base-button--fill">Cancelar</button>
        <button class="base-button base-button--confirm">Salvar</button>
      </footer>
    </UForm>
</template>

<script setup lang="ts">
  // @ts-ignore
  import { object, string, type InferType } from 'yup'
  import type { FormSubmitEvent } from '#ui/types'
  import { PIX_KEY_OPTINOS } from '~/constants/financial'

  const schema = object({
    email: string()
      .email('E-mail invalido')
      .required('Necessario preencher o campo E-mail'),
    name: string()
      .required('Necessario preencher o campo Nome'),
    tax_id: string()
      .min(11)
      .required('Necessario preencher o campo CPF/CNPJ'),
    pix_key: string()
      .required('Necessario preencher o campo  Chave pix'),
    pix_key_type: string()
      .required('Necessario preencher o campo Tipo de chave pix'),
  })

  type Schema = InferType<typeof schema>

  const receiver = reactive({
    name: undefined,
    tax_id: undefined,
    email: undefined,
    pix_key: undefined,
    pix_key_type: undefined
  })

  async function onSubmit (event: FormSubmitEvent<Schema>) {
    // Do something with event.data
    console.log(event.data)
  }
</script>