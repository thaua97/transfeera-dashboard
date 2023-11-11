<template>
  <UModal class="base-modal" v-model="props.show">
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
<script setup lang="ts">
export interface Props {
  show: boolean
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
})
</script>
<style lang="scss" scoped>
.base-modal {
  width: 100%;

  svg {
    background: $neutral-900;
    color: $neutral-900;
  }
}
</style>