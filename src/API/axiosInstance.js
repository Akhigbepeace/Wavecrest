import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://wave-crest-backend.herokuapp.com/'
})
