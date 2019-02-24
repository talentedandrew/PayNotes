import service from 'libs/notes'
// import Router from 'next/router'

export const SET_ALL_NOTES = Symbol('SET_ALL_NOTES')
export const ADD_NEW_NOTE = Symbol('ADD_NEW_NOTE')
export const EDIT_NOTE = Symbol('EDIT_NOTE')
export const ON_NOTE_ERROR = Symbol('EDIT_NOTE')

export function addNewNote ({ subject, note }) {
  return async dispatch => {
    const res = await service.createNewNote({ subject, note })
    if (res.status) {
      res.note && (await dispatch(addNoteAction({ ...res.note })))
    } else {
      await dispatch(setNoteError(res.message))
    }
  }
}

export function getAllNotes () {
  return async dispatch => {
    const res = await service.getallnotes()
    if (res.status) {
      res.notes && (await dispatch(setAllNotes([...res.notes])))
    } else {
      await dispatch(setAllNotes([]))
      await dispatch(setNoteError(res.message))
    }
  }
}

export function editNote ({ id, note, subject }) {
  return async dispatch => {
    const res = await service.editNote({ id, newNote: note, subject })
    if (res.status) {
      res.note && (await dispatch(editNoteAction({ ...res.note })))
    } else {
      await dispatch(setNoteError(res.message))
    }
  }
}

function setAllNotes (notes) {
  return {
    type: SET_ALL_NOTES,
    notes
  }
}
function addNoteAction (note) {
  return {
    type: ADD_NEW_NOTE,
    note
  }
}
function editNoteAction (note) {
  return {
    type: EDIT_NOTE,
    note
  }
}
function setNoteError (message) {
  return {
    type: ON_NOTE_ERROR,
    message
  }
}
