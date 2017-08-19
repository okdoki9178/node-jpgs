const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const CURRENT_API_VERSION = '/v0'

const allowCORS = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  (req.method === 'OPTIONS') ? res.sendStatus(200) : next()
}

app.use('/', express.static('public'))
app.use(allowCORS)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(`${CURRENT_API_VERSION}/file`, require('./api/v0/file'))


module.exports = app