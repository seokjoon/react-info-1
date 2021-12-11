import inClient from '../helper/inClient'


const infoApi = {
  readCatList: ({ ...rest }) => inClient.get('/api/infoCats', { params: { ...rest } }),
  readList: ({ ...rest }) => inClient.get('/api/infos', { params: { ...rest } }),
}


export default infoApi