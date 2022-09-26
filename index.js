const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

const jsonParser = bodyParser.json()

app.get('', jsonParser,  (req, res) => {
  console.log('---- Start GET ----')
  console.log(req.body)
  console.log('---- End GET ----')
  res.send('Hello GET')
})

app.post('', jsonParser, (req, res) => {
  console.log('---- Start POST ----')
  console.log(req.body)
  console.log('---- End POST ----')
  res.send('Hello POST')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})