<template>
  <div class="main-page page">
    <span class="main-page-text">
      Выберите сотрудника, чтобы посмотреть его профиль
    </span>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.main-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-page-text {
  color: var(--secondary-gray);
  font-size: var(--font-size-m);
  line-height: var(--font-line-m);
  font-weight: 400;
}
</style>