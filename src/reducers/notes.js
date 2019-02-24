import Immutable, { Map } from 'immutable'
import * as ActionType from 'actions/notes'

export const initialState = Immutable.fromJS({
  isLoading: false,
  message: '',
  notes: []
})

export default function (state = initialState, action) {
  switch (action.type) {
    // case ActionType.USER_LOGIN:
    //   return state.set("isLoading", true);

    case ActionType.SET_ALL_NOTES:
      return state.merge(
        Object.assign(
          {},
          {
            isLoading: false,
            message: '',
            notes: action.notes
          }
        )
      )

    case ActionType.ADD_NEW_NOTE:
      return state.set('notes', state.get('notes').push(Map(action.note)))
    // return state.updateIn(["notes"], notes => notes.push(action.note));
    case ActionType.EDIT_NOTE:
      const noteIndex = state.get('notes').findIndex(listItem => {
        return listItem.get('id') === action.note.id
      })
      return state
        .setIn(['notes', noteIndex, 'subject'], action.note.subject)
        .setIn(['notes', noteIndex, 'note'], action.note.note)
    case ActionType.ON_NOTE_ERROR:
      return state.setIn(['message'], action.message)
    default:
      return state
  }
}
