<template>
  <table class="base-table">
    <thead class="base-table__columns">
      <slot name="headers"></slot>
    </thead>
    <tbody class="base-table__rows">
      <slot name="rows"></slot>
    </tbody>  
  </table>
  <footer class="base-table__footer">
    <slot name="footer"></slot>
    <IconLogoFooter />
  </footer>
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

  &__footer {
    padding: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem; 
    align-items: center;
    justify-content: center;
  }
}
</style>