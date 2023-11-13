<template>
  <div class="main-layout">
    <MainHeader class="header" />
    <div class="wrapper">
      <MainSidebar class="sidebar" />
      <main class="main">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">

import MainHeader from "@/components/layouts/MainHeader.vue";
import MainSidebar from "@/components/layouts/MainSidebar.vue";
</script>

<style scoped lang="scss">
.main-layout {
  width: 100%;
  height: 100%;
  padding-bottom: 27px;
}

.sidebar {
  position: sticky;
  top: 0;
  left: 0;
}

.wrapper {
  display: flex;
  height: calc(100% - var(--header-max-height));
  width: var(--main-width);
  margin: 0 auto;
  box-shadow: 0 0 3px 1px var(--main-box-shadow);
  border-radius: 10px;
}

.main {
  width: calc(100% - var(--sidebar-max-width));
}
</style>