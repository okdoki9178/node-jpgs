const _multiparty = require('./multiparty')

exports.uploadFile = (request, progress) => {
  let datePathString = datePath()
  let dateNameString = dateName()
  return new Promise((resolve, reject) => {
    _multiparty.parse(request, progress, datePathString, dateNameString)
      .then(fileInfo => {
        fileInfo.name = `${datePathString}/${dateNameString}.${fileInfo.type}`
        resolve(fileInfo)
      }).catch(reject)
  })
}

// YYYY/MM/DD
const datePath = () => {
  let today = new Date()
  let path = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`
  return path
}
// HH-mm-ss_SS
const dateName = () => {
  let today = new Date()
  return `${today.getHours()}-${today.getMinutes()}-${today.getSeconds()}_${today.getMilliseconds()}`
}