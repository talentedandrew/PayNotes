const express = require('express')
const router = express.Router()
const userService = require('./service')

// routes
router.post('/saveeditednote', saveEditedNote)
router.get('/getallnotes', getAllNotes)
router.post('/createnote', createNote)

function saveEditedNote (req, res, next) {
  const note = userService.saveEditedNote(req.body)
  if (note) {
    res.json({ status: true, note: note })
  } else {
    res.status(400).json({
      status: false,
      message: 'Note cannot be edited now. Please try again after sometime'
    })
  }
}

function createNote (req, res, next) {
  const note = userService.createNote(req.body)
  if (note) {
    res.json({ status: true, note: note })
  } else {
    res.status(400).json({
      status: false,
      message: 'Note cannot be added now. Please try again after sometime'
    })
  }
}

function getAllNotes (req, res, next) {
  userService
    .getAllNotes()
    .then(notes => res.json({ status: true, notes: notes }))
    .catch(err =>
      next({
        status: false,
        message: 'Note cannot be edited now. Please try again after sometime',
        error: err
      })
    )
}

module.exports = router
