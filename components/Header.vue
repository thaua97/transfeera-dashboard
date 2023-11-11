<template>
  <header class="header">
    <div class="header__brand">
      <img src="~assets/images/logo.svg" alt="logo">
    </div>
    <nav class="header__navigation">
      <nuxt-link class="header__link" to="/favorecidos">Seus Favorecidos</nuxt-link>
    </nav>
  </header>
</template>

<script lang="ts">
export default {

}
</script >

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: $neutral;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  &__brand {
    padding: $layout-marge;

    svg {
      height: 1.5rem;
      width: 8rem;
    }
  }

  &__navigation {
    width: 100%;
    padding: $layout-marge;
    background-color: $green-300;
    color: $neutral;
  }

  &__link {
    padding: .6875rem 0;
    border-bottom: 3px solid $neutral
  }
}
</style>