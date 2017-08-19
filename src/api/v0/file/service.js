const model = require('../../../model')
const fs = require('fs')
const { returnMsg } = require('../../util')
const { uploadFile } = require('../../../util/file')
const repo = require('./repository')

exports.test = (req, res) => { 
  returnMsg.successJson(res, {message: 'works!'})
}

exports.postData = (req, res) => {
  uploadFile(req)
    .then(modelBind)
    .then(repo.createOne)
    .then(result => {
      res.json({url:`http://${req.headers.host}/v0/file/${result.jpgs_key}`})
    })
}

exports.readOne = (req, res) => {
  repo.readOneByKey(req.params.jpgs_key)
    .then(jpgsObj => {
      fs.readFile(`${global.appRoot}/assets/${jpgsObj.real_path}`, (err, data) => {
        res.end(data)
      })
    })
}

const modelBind = obj => {
  return {
    original_name: obj.originalName,
    real_path: obj.name,
    size: obj.fileSize,
    type: obj.type
  }
}