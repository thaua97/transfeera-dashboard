<template>
  <svg v-if="props.left" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 6.12119L2.03509 3.48476H2.01089L4.94151 0.878811L3.95321 0L0 3.51524H0.0927792L4.0117 7L5 6.12119Z" fill="#4285CC"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 6.12119L6.03509 3.48476H6.01089L8.94151 0.878811L7.95321 0L4 3.51524H4.09278L8.0117 7L9 6.12119Z" fill="#4285CC"/>
  </svg>
  <svg v-else-if="props.right" width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6.12119L2.96491 3.48476H2.98911L0.0584913 0.878811L1.04679 0L5 3.51524H4.90722L0.988302 7L0 6.12119Z" fill="#4285CC"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.12119L6.96491 3.48476H6.98911L4.05849 0.878811L5.04679 0L9 3.51524H8.90722L4.9883 7L4 6.12119Z" fill="#4285CC"/>
  </svg>


</template> 

<script setup lang="ts">
const props = defineProps<{
  left?: false,
  right?: false
}>()
</script>