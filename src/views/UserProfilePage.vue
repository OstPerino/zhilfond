<template>
  <div class="user-profile-page page">
    <div class="image-container">
      <img src="@/images/empty-profile-page.png" alt="empty">
    </div>
    <div class="user-info">
      <h1 class="user-info-title">{{ currentUser?.name }}</h1>
      <p class="user-info-item">
        <span class="item-subscription">email:</span>
        <span class="item-info">{{ currentUser?.email }}</span>
      </p>
      <p class="user-info-item">
        <span class="item-subscription">phone:</span>
        <span class="item-info">{{ currentUser?.email }}</span>
      </p>
      <h2>О себе</h2>
      <p class="self-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import {computed, onMounted} from "vue";
import {IUser} from "@/types/user.type";
import {Nullable} from "@/types/types";
import router from "@/router";

const route = useRoute();
const store = useStore();

const currentUser = computed<Nullable<IUser>>(() => store.state.userSearchStore.currentUser);

onMounted(async () => {
  if (!currentUser.value) {
    await router.push({ path: "/" });
  }
});
</script>

<style scoped lang="scss">
.user-profile-page {
  display: flex;
  padding: 31px 21px;
}

.image-container {
  margin-right: 61px;
}

.item-subscription {
  font-weight: 700;
  margin-right: 0.5rem;
}

.user-info-title {
  font-size: var(--font-size-m);
  line-height: var(--font-line-m);
  color: black;
  margin-bottom: 10px;
}

.item-info {
  color: var(--main-black);
  font-weight: 400;
}

.user-info-item {
  font-size: var(--font-size-m);
  line-height: var(--font-line-m);
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
}

.self-description {
  color: var(--secondary-gray);
  max-width: 440px;
  margin-top: 25px;
  font-size: var(--font-size-m);
  line-height: var(--font-line-m);
}
</style>