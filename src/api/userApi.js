import inAxios from '../helper/inAxios'

const userApi = {
  checkToken: () => inAxios.get('/api/userCheckToken'),
  create: ({ password, username, }) => inAxios.post('/api/user', {
    password,
    username,
  }),
  createToken: ({ password, username, }) => inAxios.post('/api/userCreateToken', {
    password,
    username,
  }),
  destroyToken: () => inAxios.post('/api/userDestroyToken'),
}


export default userApi
