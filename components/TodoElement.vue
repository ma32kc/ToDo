<template>
  <li v-if="todo" class="flex justify-between items-center gap-1 border-2 border-green-700 p-2 mb-3 rounded">
    <h2 class="text-2xl text-center">{{ todo.title }}</h2>
    <div v-if="todo.completed === false">
      <todo-button class="bg-emerald-600" @click.native="checking(todo)">check</todo-button>
      <todo-button class="bg-red-600" @click.native="deleting(todo)">delete</todo-button>
    </div>
  </li>
  <li v-else class="flex justify-between items-center gap-1 border-2 border-green-700 p-2 border-b-2 mb-3">
    <slot></slot>
  </li>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import TodoButton from "@/components/UI/TodoButton";

export default {
  name: "TodoElement",
  components: {TodoButton},
  props: {
    todo: Object
  },
  methods: {
    ...mapMutations(['deleteTodo','checkTodo']),
    deleting(todo) {
      this.deleteTodo(todo)
    },
    checking(todo) {
      this.checkTodo(todo)
    }
  },
  computed: mapGetters (['allTodos'])
}
</script>

<style scoped>

</style>
