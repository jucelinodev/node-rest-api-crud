import 'dotenv/config'

import express from 'express'

import './database'

import routes from './routes'

class Server {
  constructor () {
    this.server = express()
    this.midlewares()
    this.routes()
  }

  midlewares () {
    this.server.use(express.json())
  }

  routes () {
    this.server.use(routes)
  }
}

export default new Server().server
