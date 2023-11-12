<template>
  <UModal 
    class="base-modal" 
    v-model="props.show" 
    :ui="{
      margin: 'sm:my-16',
      container: 'flex min-h-full items-start sm:items-start justify-center text-center',
      overlay: {
        background: 'bg-slate-300/60'
      }
    }"
  >
    <UCard :ui="{ ring: '', divide: '' }">
      <template #header>
        <div class="flex justify-end">
          <IconClose @click="$emit('close')"/>
        </div>
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
    cursor: pointer;
    fill: $neutral-900;
  }
}
</style>