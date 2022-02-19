import inClient from '../helper/inClient'

const userApi = {
  checkToken: () => inClient.get('/api/usersCheckToken'),
  create: ({ password, username, }) => inClient.post('/api/users', {
    password,
    username,
  }),
  createToken: ({ password, username, }) => inClient.post('/api/usersCreateToken', {
    password,
    username,
  }),
  destroyToken: () => inClient.post('/api/usersDestroyToken'),
}


export default userApi
