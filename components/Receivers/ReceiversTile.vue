<template>
  <section class="receivers-tile">
    <div class="receivers-tile__label">
      <h1 class="receivers-tile__title">Seus Favorecidos</h1>
      <button class="base-button base-button--round" @click="isOpen = true" >
        <IconPlus />
      </button>
    </div>
    <UInput
      icon="i-heroicons-magnifying-glass-20-solid"
      size="lg"
      color="white"
      trailing
      placeholder="Nome, CPF/CNPJ, Agencia ou conta"
    />
  </section>
  <BaseScreenModal :show="isOpen" @close="isOpen = false">
    <ReceiversForm />
  </BaseScreenModal>
      
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>

<style lang="scss">
  .receivers-tile {
    width: 100%;
    padding: 2.8125rem 3.125rem;
    display: flex;
    justify-content: space-between;

    &__label {
      display: flex;
      width: 100%;
      gap: 1rem;
    }

    &__title {
      font-size: 1.75rem;
      color: $neutral-600;
      font-weight: 300;
    }
  }
</style>