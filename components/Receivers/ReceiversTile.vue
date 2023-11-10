<template>
  <section class="receivers-tile">
    <div class="receivers-tile__label">
      <h1 class="receivers-tile__title">Seus Favorecidos</h1>
      <button class="button button--round" @click="isOpen = true" >
        <img src="~assets/images/plus.svg" alt="plus">
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
  <ScreenModal :show="isOpen" @close="isOpen = false">
    <ReceiversForm />
  </ScreenModal>
      
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>