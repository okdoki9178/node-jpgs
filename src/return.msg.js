// const slack = require('../src/util/slack')

exports.successJson = (res, obj) => res.status(200).json(obj)

exports.success = res => res.status(200).send()

exports.error = error => {
  // slack.sendLog(error)
  console.log(error)
}

/**
 * 401(권한 없음)
 */
exports.Unauthorized = res => res.status(401).send()

/**
 * 403(금지됨
 */
exports.Forbidden = req => res.status(403).send()
