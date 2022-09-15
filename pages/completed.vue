<template>
  <div class="container max-w-5xl m-0 ml-auto mr-auto flex justify-center">
    <ul class="mt-5">
      <todo-element
        v-for="todo in allTodos.filter(el => el.completed)"
        :todo="todo"
        :key="todo.id"
      ></todo-element>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "completed",
  computed: mapGetters (['allTodos'])
}
</script>

<style scoped>

</style>
