import { combineReducers } from 'redux'

import user from './user'
import notes from './notes'

export default combineReducers({
  user,
  notes
})
