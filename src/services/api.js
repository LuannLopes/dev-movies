import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'f78a526654745e2a317e382e7f0d889b',
    language: 'pt-BR',
    page: 1
  }
})

export default api
