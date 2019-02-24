const express = require('express')
const router = express.Router()
const userService = require('./service')

// routes
router.post('/', authenticate)

function authenticate (req, res, next) {
  userService
    .authenticate(req.body)
    .then(user =>
      user
        ? res.json({ status: true, user })
        : res.status(400).json({
          status: false,
          message: 'Username or password is incorrect'
        })
    )
    .catch(err => next(err))
}

module.exports = router
