const userService = require('./service')

async function basicAuth (req, res, next) {
  // make authenticate path public
  if (req.path === '/users/authenticate') {
    return next()
  }

  // check for basic auth header
  if (
    !req.headers.authorization ||
    req.headers.authorization.indexOf('Basic ') === -1
  ) {
    return res
      .status(401)
      .json({ status: false, message: 'Missing Authorization Header' })
  }

  // verify auth credentials
  const base64Credentials = req.headers.authorization.split(' ')[1]
  const credentials = Buffer.from(base64Credentials, 'base64').toString(
    'ascii'
  )
  const [email, password] = credentials.split(':')
  const user = await userService.authenticate({ email, password })
  if (!user) {
    return res
      .status(401)
      .json({ status: false, message: 'Invalid Authentication Credentials' })
  }

  // attach user to request object
  req.user = user

  next()
}
module.exports = basicAuth
