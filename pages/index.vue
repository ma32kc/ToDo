<template>
  <div class="app bg-green-50 min-h-screen">
    <div class="container max-w-5xl m-0 ml-auto mr-auto flex flex-col items-center">
      <h1 class="text-4xl text-center pt-5">Список задач</h1>
      <ul class="w-1/2 m-0 ml-auto mr-auto flex flex-col mt-10">
        <todo-element v-bind:class="{ correct: !this.correct}">
          <TodoForm @updateCorrect="onUpdateCorrect"></TodoForm>
        </todo-element>
        <p
          v-if="allTodos.filter(el => !el.completed).length === 0"
          class="text-2xl text-center pt-5">
          Список задач пуст! Создайте новую.</p>
        <transition-group name="list">
          <todo-element
            v-for="todo in allTodos.filter(el => !el.completed)"
            :todo="todo"
            :key="todo.id"
          ></todo-element>
        </transition-group>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import TodoButton from "@/components/UI/TodoButton";

export default {
  name: 'IndexPage',
  components: {TodoButton},
  data () {
    return {
      correct: true
    }
  },
  methods: {
    ...mapActions (['fetching']),
    onUpdateCorrect (correct) {
      this.correct = correct
    }
  },
  computed: mapGetters (['allTodos']),
  mounted () {
    if (this.allTodos.length === 0)
      this.fetching ()
  }
}
</script>
<style>
.list-item {
  display: inline-block;
  margin-right: 100px;
}

.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}

.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */
{
  opacity: 0;
  transform: translateX(30px);
}

.info-enter {
  transition: all 0.5s;
}

.info-enter-active {
  transition: all 0.5s;
}

.info-leave-active {
  transition: all 0.5s;
}

.info-enter, .info-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */
{
  transform: translateX(10px);
  opacity: 0;
}

.correct {
  border-color: red;
}
</style>
