import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',

  state: () => ({
    count: 0,
  }),

  actions:  {
    counterUp() {
      this.count++
    },

    counterDown() {
      this.count--
    }
  },

  getters: {
    doubleCount: (state) => state.count * 2,
  },

})
