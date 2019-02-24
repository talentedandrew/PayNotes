import axios from 'axios'
// import humps from 'humps'
import config from 'config'

const service = {
  authenticate ({ email = '', password = '' }) {
    return axios({
      method: 'post',
      url: `${config.baseUrl}/users/authenticate`,
      data: { email, password },
      config: { headers: { 'Content-Type': 'application/json' } }
    })
      .then(res => {
        return res.data
      })
      .catch(error => {
        return error.response.data
      })
  }
}

export default service
