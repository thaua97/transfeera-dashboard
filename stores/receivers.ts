import { defineStore } from 'pinia'
import api from '~/services/api'

export const useReceiversStore = defineStore('receivers', {
  state: () => ({
    receivers: [],
    totalPages: 0,
  }),
  getters: {
    getReceivers: (state) => state.receivers,
    getTotalPages: (state) => state.totalPages,
  },
  actions: {
    async setReceivers(page = 1) {
      const items = new api.Receivers();
      try {
        const res = await items.fetchReceivers(page)
        const totalCount = res.headers.get('x-total-count')
        this.receivers = res.data
        this.totalPages = Math.ceil(totalCount / 8)
        console.log(res)
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

    async handleUpdateReceiver (id, receiver) {
      const promise = new api.Receivers()
      console.log(id)
      try {
        const res = await promise.updateReceiver(id, receiver)
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