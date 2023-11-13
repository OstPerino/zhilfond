<template>
  <header class="header">
    <h1 class="header-text">Жилфонд</h1>
    <p class="header-subscription">Пользователь</p>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px 0 27px 0;
  height: var(--header-max-height);
  width: var(--main-width);
  margin: 0 auto;
}

.header-text {
  color: var(--main-red);
  font-size: var(--font-size-l);
  line-height: var(--font-line-l);
  font-weight: 700;
}

.header-subscription {
  font-size: var(--font-size-m);
  line-height: var(--font-line-m);
  color: var(--main-black);
  font-weight: 400;
}
</style>