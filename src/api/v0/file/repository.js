const model = require('../../../model')

exports.createOne = obj => model.Jpgs.create(obj)

exports.readOneByKey = key => model.Jpgs.findById(key)