import inAxios from '../helper/inAxios'


const infoApi = {
  deleteItem: (id) => inAxios.delete(`/api/info/${id}`),
  readCatItems: ({ ...rest }) => inAxios.get(`/api/infoCat`, { params: { ...rest } }),
  readItem: (id) => inAxios.get(`/api/info/${id}`),
  readItems: ({ ...rest }) => inAxios.get(`/api/info`, { params: { ...rest } }),
  updateItem: (id, { ...rest }) => inAxios.put(`/api/info/${id}`, { ...rest }),
}


export default infoApi
