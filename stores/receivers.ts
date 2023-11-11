import { defineStore } from 'pinia'
import api from '~/services/api'

export const useReceiversStore = defineStore('receivers', {
  state: () => ({
    receivers: [],
  }),
  getters: {
    getReceivers: (state) => state.receivers,
  },
  actions: {
    async setReceivers() {
      const items = new api.Receivers();
      try {
        const res = await items.fetchReceivers()
        this.receivers = res.data
        console.log(res)
      } catch (error) {
        console.error(error)
      }
    }
  }
})