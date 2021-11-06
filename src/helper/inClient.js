import axios from 'axios'


const inClient = axios.create()
inClient.defaults.baseURL = process.env.REACT_APP_HOST_API_INFO
inClient.defaults.headers.common['Authorization'] = 'Bearer info'
inClient.defaults.withCredentials = true


inClient.interceptors.request.use(
  config => {
    // console.log('config req:', config)
    return config
  },
  err => {
    // console.log('err req:', err)
    return Promise.reject(err)
  },
)

inClient.interceptors.response.use(
  res => {
    // console.log('res:', res)
    return res
  },
  err => {
    // console.log('err:', err)
    return Promise.reject(err)
  },
)


export default inClient