const path = require('path')
const express = require('express')
const compression = require('compression')
const next = require('next')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const basicAuth = require('./users/basic_auth')
const errorHandler = require('./users/error_handler')
const routes = require('../routes')
const userController = require('./users/controller')
const notesController = require('./notes/controller')
const port = parseInt(process.env.PORT, 10) || 3100
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  server.use(helmet())
  server.use(compression())

  const staticPath = path.join(__dirname, '../static')
  server.use(
    '/static',
    express.static(staticPath, {
      maxAge: '30d',
      immutable: true
    })
  )

  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(bodyParser.json())
  server.use(cors())

  // use basic HTTP auth to secure the api
  // server.use(basicAuth);

  // api routes
  server.use('/users/authenticate', userController)
  server.use('/paynotes', basicAuth, notesController)

  server.get('*', (req, res) => {
    return handler(req, res)
  })

  // global error handler
  server.use(errorHandler)

  startServer()

  function startServer () {
    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
  }
})
