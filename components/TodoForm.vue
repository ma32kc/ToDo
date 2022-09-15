<template>
  <form @submit.prevent="submit">
    <input
      type="text"
      :placeholder="this.formPlaceholder"
      v-model="title"
      class="text-s md:text-2xl w-full focus:outline-none bg-transparent"
      @input="validateForm"
    >
  </form>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "TodoForm",
  data () {
    return {
      title: '',
      correctForm: true,
      formPlaceholder: 'добавить задачу'
    }
  },
  methods: {
    ...mapMutations (['createTodo']),
    validateForm () {
      if (this.title.length > 0) {
        this.correctForm = true
        this.$emit ('updateCorrect', this.correctForm)
      }
    },
    submit () {
      if (this.title) {
        this.createTodo ({
          userId: 1,
          id: Date.now (),
          title: this.title,
          completed: false
        })
        this.title = ""
        this.formPlaceholder = 'добавить задачу'
      } else {
        this.correctForm = false
        this.$emit ('updateCorrect', this.correctForm)
        this.formPlaceholder = 'пустая задача'
      }
    }
  },
  computed: {}
}
</script>

<style scoped>
</style>
