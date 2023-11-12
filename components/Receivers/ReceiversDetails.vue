<template>
  <main class="receivers-details">
    <header class="receivers-details__header">
      <h1>Guilherme Damian Verdasca</h1>
      <span class="base-status base-status--rascunho">Rascunho</span>
    </header>
    <article class="receivers-details__content">
      <section class="receivers-details__row">
        <div>
          <p>CPF / CNPJ</p>
          <h1>067.956.219.28</h1>
        </div>
      </section>
      <section class="receivers-details__row">
        <div>
          <p>Banco</p>
          <h1>Santander</h1>
        </div>
        <div>
          <p>Agencia</p>
          <h1>0233</h1>
        </div>
      </section>
      <section class="receivers-details__row">
        <div>
          <p>Tipo de conta</p>
          <h1>Conta Poupança</h1>
        </div>
        <div>
          <p>Conta poupanca</p>
          <h1>01006822-1</h1>
        </div>
      </section>
      <section class="receivers-details__row">
        <UForm :schema="schema" :state="receiver" @submit="onSubmit">
          <UFormGroup name="email">
            <template #label>
              <p>E-mail do favorecido</p>
            </template>
            <template #default>
              <UInput v-model="receiver.email" type="email" />
            </template>
            
          </UFormGroup>
        </UForm>
      </section>
    </article>
  </main>
</template>

<script setup lang="ts">
// @ts-ignore
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const receiver = reactive({
  email: undefined,
})

const schema = object({
  email: string()
    .email('E-mail invalido')
    .required('Necessario preencher o campo E-mail'),
})

type Schema = InferType<typeof schema>

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}
</script>

<style lang="scss" scoped>
.receivers-details {
  &__header {
    width: 100%;
    margin-top: 0;
    padding-bottom: 2.25rem;

    h1 {
      color: $neutral-800;
      font-weight: 300;
      font-size: 1.5rem;
      padding-bottom: 1.5rem;
    }
  }

  &__footer {
    padding: 4rem 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__content {
    width: 100%;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  &__row {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 100px;

    p {
      color: $neutral-600;
      font-weight: 300;
      padding-bottom: .875rem;
    }
    
    h1 {
      color: $neutral-800;
      font-weight: 300;
      font-size: 1.5rem;
    }
  }
}
</style>