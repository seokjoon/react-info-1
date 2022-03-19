import axios from 'axios'


const inAxios = axios.create()
inAxios.defaults.baseURL = process.env.REACT_APP_HOST_API_INFO
inAxios.defaults.headers.common['Authorization'] = 'Bearer info'
inAxios.defaults.withCredentials = true


inAxios.interceptors.request.use(
  config => {
    // console.log('config req:', config)
    return config
  },
  err => {
    // console.log('err req:', err)
    return Promise.reject(err)
  },
)

inAxios.interceptors.response.use(
  res => {
    // console.log('res:', res)
    return res
  },
  err => {
    // console.log('err:', err)
    return Promise.reject(err)
  },
)


export default inAxios
