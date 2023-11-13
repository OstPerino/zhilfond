<template>
  <div class="ui-input-container">
    <input class="input" :type="type" :value="modelValue" :placeholder="placeholder" @input="onInputHandler">
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    required: true
  },
});

const onInputHandler = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits("update:modelValue", target.value);
}
</script>

<style scoped lang="scss">
.input {
  padding: 14.5px 1rem;
  color: var(--secondary-gray);
  font-size: var(--font-size-s);
  line-height: var(--font-line-s);
  border-radius: 8px;
  border: 1.5px solid var(--primary-gray);
  outline: none;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
}
</style>