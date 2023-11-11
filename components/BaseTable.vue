<template>
  <table class="base-table">
    <thead class="base-table__columns">
      <slot name="headers"></slot>
    </thead>
    <tbody class="base-table__rows">
      <slot name="rows"></slot>
    </tbody>
  </table>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.base-table {
  border-collapse: collapse;
  width: 100%;

  &__columns {
    color: $neutral-600;

    th {
      text-align: left;
      padding: 10px;
    }
  }
  &__rows {
    tr, th {
      padding: 20px 10px;
      font-weight: 400;
      text-align: left;
      color: $neutral-400;
    }
  }
}
</style>