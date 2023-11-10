<template>
  <UForm :schema="schema" :state="state" @submit="onSubmit">
      <h1>Quais os dados favorecido?</h1>
      <div class="grid grid-cols-2 gap-4">
        <UFormGroup class="" label="Qual o nome completo ou razão social do favorecido?" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>
        <UFormGroup label="Qual o CPF ou CNPJ?" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>
        <UFormGroup label="Qual o e-mail para o envio do comprovante?" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>
      </div>
      <h1>Qual a chave pix?</h1>
      <div class="grid grid-cols-2">
        <UFormGroup class="col-start-1 col-end-1" label="Tipo de chave" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>
        <UFormGroup class="col-start-1 col-end-1" label="Chave" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>
      </div>
      <footer>
        <button class="button button--fill">Cancelar</button>
        <button class="button button--confirm">Salvar</button>
      </footer>
    </UForm>
</template>

<script setup lang="ts">
  import { object, string, type InferType } from 'yup'
  import type { FormSubmitEvent } from '#ui/types'

  const isOpen = ref(false)

  const schema = object({
    email: string().email('Invalid email').required('Required'),
    password: string()
      .min(8, 'Must be at least 8 characters')
      .required('Required')
  })

  type Schema = InferType<typeof schema>

  const state = reactive({
    email: undefined,
    password: undefined
  })

  async function onSubmit (event: FormSubmitEvent<Schema>) {
    // Do something with event.data
    console.log(event.data)
  }
</script>