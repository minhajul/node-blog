import axios from 'axios'
import store from '@/store/index'

const BASE_URL = 'http://localhost:3000/';
const API_VERSION = 'api/v1/';

export default () => {
  return axios.create({
    baseURL: BASE_URL + API_VERSION,
    // headers: {
    //   Authorization: `Bearer ${store.state.token}`
    // }
  })
}
