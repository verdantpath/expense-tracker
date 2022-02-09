import { createStore } from 'vuex'

export default createStore({
  state: {
    foo: 'foo',
    totalExpenses: 0,
    totalIncome: 0,
  },
  mutations: {
    UPDATE_FOO(state, payload) {
      state.foo = payload;
    },
    UPDATE_TOTAL_EXPENSES(state, payload) {
      state.totalExpenses = payload;
    },
    UPDATE_TOTAL_INCOME(state, payload) {
      state.totalIncome = payload;
    }
  },
  actions: {
    updateFoo(context, payload) {
      context.commit('UPDATE_FOO', payload)
    },
    updateTotalExpenses(context, payload) {
      context.commit('UPDATE_TOTAL_EXPENSES', payload)
    },
    updateTotalIncome(context, payload) {
      context.commit('UPDATE_TOTAL_INCOME', payload)
    }
  },
  getters: {
    getFoo: state => state.foo,
    getTotalExpenses: state => state.totalExpenses,
    getTotalIncome: state => state.totalIncome,
  },
  modules: {
  }
})
