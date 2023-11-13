
const API_URL = 'http://localhost:3001'

export default class Receivers extends useApi {
  constructor() {
    super('api', API_URL);
  }

  fetchReceivers(page) {
    return this.api.get(`/receivers?_page=${page}&_limit=8`)
  }

  createReceiver(receiver) {
    return this.api.post('/receivers', receiver)
  }
  
  updateReceiver(id, receiver) {
    return this.api.put(`/receivers/${id}`, receiver)
  }

  deleteReceiver(receiverId) {
    return this.api.delete(`/receivers/${receiverId}`)
  }
}