export const state = () => ({
  todos: []
})

export const mutations = {
  updateTodos(state, todos) {
    todos.forEach(el => el.modal = false)
    state.todos = todos
  },
  createTodo (state, newTodo) {
    state.todos.unshift(newTodo)
  },
  deleteTodo(state, todo) {
    state.todos = state.todos.filter(el => el.id !== todo.id)
  },
  checkTodo(state, todo) {
    state.todos.find(el => el.id === todo.id).completed = true
  }
}

export const actions = {
  async fetching(ctx) {
    const res = await fetch('http://jsonplaceholder.typicode.com/todos?_limit=4')
    const todos = await res.json()
    ctx.commit('updateTodos', todos)
  }
}

export const getters = {
  allTodos(state) {
    return state.todos
  },
  modal(state) {
    return state.modal
  }
}
