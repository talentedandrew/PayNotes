import Immutable from 'immutable'
import * as ActionType from 'actions/user'

export const initialState = Immutable.fromJS({
  isLoading: false,
  islogin: false,
  message: '',
  userInfo: {}
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.USER_LOGIN:
      return state.set('isLoading', true)

    case ActionType.USER_LOGIN_SUCCESS:
      return state.merge(
        Object.assign(
          {},
          {
            isLoading: false,
            islogin: true,
            message: '',
            userInfo: action.user
          }
        )
      )

    case ActionType.USER_LOGIN_FAILED:
      return state.merge(
        Object.assign(
          {},
          {
            isLoading: false,
            islogin: false,
            userInfo: {},
            message: action.message
          }
        )
      )

    default:
      return state
  }
}
