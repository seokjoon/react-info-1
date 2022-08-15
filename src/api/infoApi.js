import inAxios from '../helper/inAxios'


const infoApi = {
  deleteItem: (id) => inAxios.delete(`/info/${id}`),
  readCatItems: ({ ...rest }) => inAxios.get(`/infoCat`, { params: { ...rest } }),
  readItem: (id) => inAxios.get(`/info/${id}`),
  readItems: ({ ...rest }) => inAxios.get(`/info`, { params: { ...rest } }),
  updateItem: (id, { ...rest }) => inAxios.put(`/info/${id}`, { ...rest }),
}


export default infoApi
