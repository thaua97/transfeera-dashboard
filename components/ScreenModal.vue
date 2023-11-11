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

<style lang="scss" scoped>
.screen-modal {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  background: $neutral;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-y: hidden;
  z-index: 50;
  -webkit-animation: fade .2s linear forwards;
  animation: fade .2s linear forwards;

  &__header {
    width: 100%;
    padding: $layout-marge;
    background-color: $green-300;
    color: $neutral;
    display: flex;
    justify-content: flex-end;
  }

  &__content {
    width: 100%;
    padding: $layout-marge;
  }
}

@-webkit-keyframes  fade {
	from { opacity: 0 }
  to { opacity: 1 }
}
@keyframes fade {
	from { opacity: 0 }
  to { opacity: 1 }
}
</style>