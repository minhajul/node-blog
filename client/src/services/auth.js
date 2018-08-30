import api from '@/services/api'

export default {
  login (credentials) {
    return api().post('login', credentials)
  }
}
