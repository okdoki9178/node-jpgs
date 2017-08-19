const app = require('./src')
const port = process.env.PORT || 7000

global.appRoot = __dirname

app.set('port', port)
app.listen(port, _ => {
  console.log(`server start => port : ${port}`)
})