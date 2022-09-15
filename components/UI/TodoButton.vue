<template>
  <button class="text-white p-1 pl-3 pr-3 rounded-3xl hover:brightness-75 transition duration-1000 ease-out">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "TodoButton"
}
</script>

<style scoped>

</style>
