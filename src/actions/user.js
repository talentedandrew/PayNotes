import service from 'libs/auth'
import Router from 'next/router'

export const USER_LOGIN = Symbol('USER_LOGIN')
export const USER_LOGIN_SUCCESS = Symbol('USER_LOGIN_SUCCESS')
export const USER_LOGIN_FAILED = Symbol('USER_LOGIN_FAILED')

export function login ({ email, password }) {
  return async dispatch => {
    await dispatch({
      type: USER_LOGIN
    })
    const res = await service.authenticate({ email, password })
    if (res.status) {
      res.user.authdata = window.btoa(email + ':' + password)
      window.localStorage.setItem('user', JSON.stringify(res.user))
      res.user && (await dispatch(onLoginSuccess({ ...res.user })))
      Router.push('/notes')
    } else {
      await dispatch(onLoginFail(res.message))
    }
  }
}

export function logout () {
  return async dispatch => {
    window.localStorage.removeItem('user')
    await dispatch(onLoginFail(''))
    Router.push('/')
  }
}

function onLoginSuccess (user) {
  return {
    type: USER_LOGIN_SUCCESS,
    user
  }
}
function onLoginFail (message = '') {
  return {
    type: USER_LOGIN_FAILED,
    message
  }
}
