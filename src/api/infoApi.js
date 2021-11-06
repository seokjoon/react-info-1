import inClient from '../helper/inClient'


const infoApi = {
  readList: ({ ...rest }) => inClient.get('/api/infos', { params: { ...rest } }),
}


export default infoApi