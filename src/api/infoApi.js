import inAxios from '../helper/inAxios'


const infoApi = {
  deleteItem: (id) => inAxios.delete(`/api/infos/${id}`),
  readCatItems: ({ ...rest }) => inAxios.get(`/api/infoCats`, { params: { ...rest } }),
  readItem: (id) => inAxios.get(`/api/infos/${id}`),
  readItems: ({ ...rest }) => inAxios.get(`/api/infos`, { params: { ...rest } }),
  updateItem: (id, { ...rest }) => inAxios.put(`/api/infos/${id}`, { ...rest }),
}


export default infoApi
