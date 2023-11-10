import { defineStore } from 'pinia'

export const useReceiversStore = defineStore('receivers', {
  state: () => ({
    receivers: [],
  }),
  getters: {
    getReceivers: (state) => state.receivers,
  },
  actions: {
    async getData() {
      try {
        
      } catch (error) {
        
      }
    }
  }
})