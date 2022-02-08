import { createStore } from 'vuex'

export default createStore({
  state: {
    foo: 'foo',
    totalExpenses: 0,
  },
  mutations: {
    UPDATE_FOO(state, payload) {
      state.foo = payload;
    },
    UPDATE_TOTAL_EXPENSES(state, payload) {
      state.totalExpenses = payload;
    },
  },
  actions: {
    updateFoo(context, payload) {
      context.commit('UPDATE_FOO', payload)
    },
    updateTotalExpenses(context, payload) {
      context.commit('UPDATE_TOTAL_EXPENSES', payload)
    },
  },
  getters: {
    getFoo: state => state.foo,
    getTotalExpenses: state => state.totalExpenses,
  },
  modules: {
  }
})
