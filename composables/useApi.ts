import axios from 'axios'

export default class useApi {
  const baseURL = 'localhost:3000'
  constructor(instance, baseURL) {
    this[instance] = axios.create({ baseURL });
  }
}