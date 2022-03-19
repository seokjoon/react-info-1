import inAxios from '../helper/inAxios'

const userApi = {
  checkToken: () => inAxios.get('/api/usersCheckToken'),
  create: ({ password, username, }) => inAxios.post('/api/users', {
    password,
    username,
  }),
  createToken: ({ password, username, }) => inAxios.post('/api/usersCreateToken', {
    password,
    username,
  }),
  destroyToken: () => inAxios.post('/api/usersDestroyToken'),
}


export default userApi
