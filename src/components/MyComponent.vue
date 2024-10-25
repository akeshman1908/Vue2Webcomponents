<!-- src/components/MyComponent.vue -->
<template>
  <div>Hello, {{ name }}!</div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    name: {
      type: String,
      default: 'World',
    },
  },
};
</script>

<style scoped>
/* Optional styles */
</style>
