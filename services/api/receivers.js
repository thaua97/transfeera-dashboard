
const API_URL = 'http://localhost:3001'

export default class Receivers extends useApi {
  constructor() {
    super('api', API_URL);
  }

  fetchReceivers() {
    return this.api.get('/receivers?_page=1&_limit=10')
  }
}