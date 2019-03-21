import axios from 'axios'

const instance = axios.create({
  baseURL: `http://${process.env.HOST || '192.168.1.144'} : ${process.env.POST || 8080}`,
  timeout: 1000,
  headers: {
  }
})

export default instance
