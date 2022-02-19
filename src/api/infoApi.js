import inClient from '../helper/inClient'


const infoApi = {
  deleteItem: (id) => inClient.delete('/api/infos/' + id),
  readCatList: ({ ...rest }) => inClient.get('/api/infoCats', { params: { ...rest } }),
  readItem: (id) => inClient.get('/api/infos/' + id),
  readList: ({ ...rest }) => inClient.get('/api/infos', { params: { ...rest } }),
  updateItem: (id, { ...rest }) => inClient.put('/api/infos/' + id, { ...rest }),
}


export default infoApi
