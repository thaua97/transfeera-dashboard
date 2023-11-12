<template>
  <main class="receivers-details">
    <header class="receivers-details__header">
      <h1>{{ receiverContext.name }}</h1>
      <span :class="`base-status base-status--${receiverContext.status}`">
        {{ receiverContext.status }}
      </span>
    </header>
    <article class="receivers-details__content">
      <section class="receivers-details__row">
        <div>
          <p>CPF / CNPJ</p>
          <h1>{{ receiverContext.tax_id  || '- / -' }}</h1>
        </div>
      </section>
      <section class="receivers-details__row">
        <div>
          <p>Banco</p>
          <h1>{{ receiverContext.bank_name || '- / -' }}</h1>
        </div>
        <div>
          <p>Agencia</p>
          <h1>{{ receiverContext.branch || '- / -' }}</h1>
        </div>
      </section>
      <section class="receivers-details__row">
        <div>
          <p>Tipo de conta</p>
          <h1>{{ receiverContext.account_type || '- / -' }}</h1>
        </div>
        <div>
          <p>{{ receiverContext.account_type || '- / -' }}</p>
          <h1>{{ receiverContext.account || '- / -' }}</h1>
        </div>
      </section>
      <section class="receivers-details__row">
        <UForm :schema="schema" :state="receiver" @submit="onSubmit">
          <UFormGroup name="email">
            <template #label>
              <p>E-mail do favorecido</p>
            </template>
            <template #default>
              <UInput v-model="receiverContext.email" type="email" />
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

defineProps<{
  receiverContext: {
    name: string,
    email: string,
    tax_id: string,
    bank_name: string,
    branch: string,
    account_type: string,
    account: string,
    status: string,
  }
}>()

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