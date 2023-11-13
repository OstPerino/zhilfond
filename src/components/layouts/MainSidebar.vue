<template>
  <aside class="sidebar">
    <div class="search-container">
      <h2 class="sidebar-header">Поиск сотрудников</h2>
      <UIInput placeholder="Введите Id или имя" v-model="searchValue"/>
      <h2 class="sidebar-header results-subscription">
        Результаты
      </h2>
    </div>
    <div class="results">
      <template v-if="usersList.length">
        <FoundUsersList :users="usersList"/>
      </template>
      <span class="empty-state-text" v-else-if="searchValue && !usersList.length">
        ничего не найдено
      </span>
      <span class="empty-state-text" v-else>
        начните поиск
      </span>
      <UILoader class="loader" :is-loading="isLoading"/>
    </div>
  </aside>
</template>

<script setup lang="ts">
import {computed, ref, watch} from "vue";
import {useStore} from "vuex";
import {debounce} from "@/helpers/debounce";
import UIInput from "@/components/ui/UIInput.vue";
import FoundUsersList from "@/components/user-search/FoundUsersList.vue";
import UILoader from "@/components/ui/UILoader.vue";

const store = useStore();

const searchValue = ref<string>("");
const isLoading = ref<boolean>(false);

const usersList = computed(() => store.state.userSearchStore.usersList);

watch(searchValue, debounce(async () => {
  isLoading.value = true;
  await store.dispatch("userSearchStore/fetchUsers", searchValue.value);
  isLoading.value = false;
}, 500));
</script>

<style scoped lang="scss">
.sidebar {
  width: var(--sidebar-max-width);
  background-color: var(--secondary-background);
  height: 100%;
  border-right: 1px solid var(--main-box-shadow);
  padding: 27px 23px;
  position: relative;
  overflow: scroll;

  &-header {
    font-size: var(--font-size-m);
    line-height: var(--font-line-m);
    color: var(--main-black);
    font-weight: 600;
    margin-bottom: 22px;
  }
}

.search-container {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: var(--secondary-background);
  padding-bottom: 5px;
}

.empty-state-text {
  font-weight: 400;
  font-size: var(--font-size-m);
  line-height: var(--font-line-m);
  color: var(--secondary-gray);
}

.loader {
  position: absolute;
  top: 0;
  left: 0;
}
</style>