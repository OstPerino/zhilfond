<template>
  <li class="found-user-item" @click="toProfile">
    <div class="image-container">
      <img src="@/images/empty-image.png" alt="empty">
    </div>
    <div class="user-information" :class="isActive">
      <span class="name">{{ user.username }}</span>
      <span class="email">{{ user.email }}</span>
    </div>
  </li>
</template>

<script setup lang="ts">
import {computed, PropType} from "vue";
import {IUser} from "@/types/user.type";
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";

const router = useRouter();
const route = useRoute();
const store = useStore();

const props = defineProps({
  user: {
    type: Object as PropType<IUser>,
    required: true
  }
});

const isActive = computed(() => {
  // @ts-ignore
  return props.user?.id === route.params.id ? "active" : "";
});

const toProfile = async () => {
  store.commit("userSearchStore/setCurrentUser", props.user);
  await router.push({path: `/profile/${props.user.id}`});
}
</script>

<style scoped lang="scss">
.found-user-item {
  width: 100%;
  height: 70px;
  box-shadow: 0 0 3px 1px var(--main-box-shadow);
  display: flex;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
}

.user-information {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.name {
  margin-bottom: 5px;
}

.active {
  background-color: var(--main-black);
}
</style>