const express = require('express')
const router = express.Router()

const service = require('./service')

router.route('/')
  .get(service.test)
  .post(service.postData)

router.route('/:jpgs_key')
  .get(service.readOne)


module.exports = router