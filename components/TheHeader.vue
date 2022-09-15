<template>
  <nav class="p-2 bg-emerald-400">
    <div class="container max-w-5xl m-0 ml-auto mr-auto flex justify-between items-center">
      <span class="text-2xl">TODOS</span>
      <ul class="flex gap-3 text-xl">
        <li>
          <router-link class="hover:underline" to="/">Все задачи</router-link>
        </li>
        <li>
          <router-link class="hover:underline" to="completed">Выполненные</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>

</style>
