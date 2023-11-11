<template>
  <UModal v-model="isOpen">
    <UCard :ui="{ ring: '', divide: '' }">
      <template #header>
        <button @click="$emit('close')">
          <img src="~assets/images/close.svg" alt="close">
        </button>
      </template>

      <slot></slot>
    </UCard>
  </UModal>
</template>
<style lang="scss" scoped>
.receivers-modal {
  width: 100%;
}
</style>
<script>

</script>