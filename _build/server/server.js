const express = require('express')
const app = express()
const port = 4000
var ae = require("after-effects");


app.get('/clicked', (req, res) => {
  const data = {"msg":'hello!'}
  res.send('Hello World!')
  ae(() => alert(data.msg));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})