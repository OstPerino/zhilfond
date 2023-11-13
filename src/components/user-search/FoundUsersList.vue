<template>
  <ul class="found-users-list">
    <FoundUserItem class="item" v-for="user in users" :key="user.id" :user="user"/>
  </ul>
</template>

<script setup lang="ts">
import FoundUserItem from "@/components/user-search/FoundUserItem.vue";
import {PropType} from "vue";
import {IUser} from "@/types/user.type";

// можно брать из стора, но так можно переиспользовать с другим массивом
const props = defineProps({
  users: {
    type: Object as PropType<IUser[]>,
    required: true
  }
});
</script>

<style scoped lang="scss">
.found-users-list {
  list-style-type: none;
}

.item {
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>