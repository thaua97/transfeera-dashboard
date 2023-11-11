import axios from 'axios'

export default class useApi {
  constructor(instance, baseURL) {
    this[instance] = axios.create({ baseURL });
  }
}