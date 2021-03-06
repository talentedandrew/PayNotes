import axios from 'axios'
// import humps from 'humps'
import config from 'config'

function authHeader () {
  let user
  try {
    user = typeof window !== 'undefined' && JSON.parse(window.localStorage.getItem('user')) || {}
  } catch (e) {
    user = {}
  }

  if (user && user.authdata) {
    return { Authorization: 'Basic ' + user.authdata }
  } else {
    return {}
  }
}
const service = {
  getallnotes (dummyAuth) {
    const auth = dummyAuth || authHeader()
    return axios
      .get(`${config.baseUrl}/paynotes/getallnotes`, {
        headers: {
          'Content-Type': 'application/json',
          ...auth
        }
      })
      .then(res => {
        return res
      })
      .catch(error => {
        return error.response
      })
  },
  createNewNote ({ subject, note }) {
    const auth = authHeader()
    return axios
      .post(
        `${config.baseUrl}/paynotes/createnote`,
        { subject, note },
        {
          headers: {
            'Content-Type': 'application/json',
            ...auth
          }
        }
      )
      .then(res => {
        return res.data
      })
      .catch(error => {
        return error.response.data
      })
  },
  editNote ({ id, newNote, subject }) {
    const auth = authHeader()
    return axios
      .post(
        `${config.baseUrl}/paynotes/saveeditednote`,
        { id, newNote, subject },
        {
          headers: {
            'Content-Type': 'application/json',
            ...auth
          }
        }
      )
      .then(res => {
        return res.data
      })
      .catch(error => {
        return error.response.data
      })
  }
}

export default service
