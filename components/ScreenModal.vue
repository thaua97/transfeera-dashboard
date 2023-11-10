<template>
  <div v-if="show" class="screen-modal">
    <header class="screen-modal__header">
      <button @click="$emit('close')">
        <img src="~assets/images/close.svg" alt="close">
      </button>
    </header>
    <section class="screen-modal__content">
      <slot></slot>
    </section>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: Boolean,
}>()
</script>