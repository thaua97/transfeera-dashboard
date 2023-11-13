<template>
  <UModal 
    class="base-modal" 
    v-model="props.show" 
    :ui="{
      width: props.modalWidth,
      margin: 'sm:my-16',
      container: 'flex min-h-full items-start sm:items-start justify-center text-center',
      overlay: {
        background: 'bg-slate-300/60'
      }
    }"
  >
    <UCard :ui="{ 
      ring: '',
      divide: '',
      header: {
        padding: 'px-4 py-0 sm:pt-4 sm:pb-0 sm:px-6'
      },
    }">
      <template #header>
        <div class="flex justify-end">
          <IconClose @click="$emit('close')"/>
        </div>
      </template>
      <slot></slot>
      <template #footer>
        <div class="flex justify-between" >
          <slot class="base-modal__footer" name="footer"></slot>
        </div>
      </template>
    </UCard>
  </UModal>
</template>
<script setup lang="ts">

export interface Props {
  show: boolean,
  modalWidth: string,
}

const props = withDefaults(defineProps<Props>(), {
  show: false,
  modalWidth: 'sm:max-w-xl',
})

</script>
<style lang="scss" scoped>
.base-modal {
  svg {
    cursor: pointer;
    fill: $neutral-900;
  }
}
</style>