const multiparty = require('multiparty')
const mkdirp = require('mkdirp')
const fs = require('fs')

exports.parse = (req, progress, path, name) => {
  return new Promise((resolve, reject) => {
    var filename
    var size

    const form = new multiparty.Form()

    // HTML part가 들어왔을경우 실행
    form.on('part', function (part) {
      if (part.filename) {
        filename = part.filename
        size = part.byteCount
      } else {
        part.resume()
      }

      mkdirSync(`${global.appRoot}/assets/${path}/`)

      var writeStream = fs.createWriteStream(`${global.appRoot}/assets/${path}/${name}.${filename.split('.').pop()}`)
      writeStream.filename = filename
      part.pipe(writeStream)

      part.on('end', () => { writeStream.end() })

      // part.on('data', chunk => { console.log(`${filename} read ${chunk.length} bytes`) })
      
    })

    // 파일이 아닌 일반 필드가 들어올때 실행
    form.on('field', (name, value) => { console.log(`normal field / name = ${name}, value = ${value}`) })

    // all uploads are completed
    form.on('close', function () {
      resolve({
        originalName: filename,
        fileSize: size,
        type: filename.split('.').pop()
      })
    })

    form.on('progress', (read, expected) => { if(progress) progress(read / expected * 100) })

    form.parse(req)
  })
}

const mkdirSync = function (dirPath) {
  try {
    mkdirp.sync(dirPath)
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
}
