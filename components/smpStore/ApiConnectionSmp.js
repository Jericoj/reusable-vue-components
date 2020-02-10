import axios from 'axios'

const axiosConfig = {
  baseURL: 'http://localhost:9990',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}
const $axios = axios.create(axiosConfig)
$axios.defaults.timeout = 20000
$axios.interceptors.request.use(config => {
// perform a task before the request is sent
  console.log('ApiConectionSmp: Request was sent')
  return config
}, error => {
// handle the error
  return Promise.reject(error)
})
export default $axios
