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
      } catch (error) {
        console.error(error)
      }
    },

    async handleCreateReceiver (receiver) {
      const promise = new api.Receivers()

      try {
        const res = await promise.createReceiver(receiver)

        if(res) {
          this.receivers = [...this.receivers, receiver]
        }
      } catch (error) {
        console.error(error)
      }
    },

    async handleUpdateReceiver (receiver) {
      const promise = new api.Receivers()

      try {
        const res = await promise.updateReceiver(receiver)
        this.setReceivers()
      } catch (error) {
        console.error(error)
      }
    },

    async handleDeleteReceiver (id) {
      const promise = new api.Receivers()

      try {
        const res = await promise.deleteReceiver(id)
        this.setReceivers()
      } catch (error) {
        console.error(error)
      }
    }
  }
})