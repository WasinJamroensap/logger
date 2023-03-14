const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

const jsonParser = bodyParser.json()

const logRequest = ({ method, originalUrl, query, body, param }) => {
  console.log(`======================== [${method}] ${originalUrl} ========================`)
  const log = {
    method,
    originalUrl,
    query,
    body,
    param
  }

  console.log(JSON.stringify(log))
}

app.get('', jsonParser,  (req, res) => {
  logRequest(req)
  res.send('Hello GET')
})

app.post('', jsonParser, (req, res) => {
  logRequest(req)
  res.send('Hello POST')
})

app.post('/create-order', jsonParser, (req, res) => {
  logRequest(req)
  res.send('Hello POST')
})

app.post('/multi-ready-to-fulfillment', jsonParser, (req, res) => {
  logRequest(req)
  res.send('Hello POST')
})

app.post('/ship-order-fulfillment', jsonParser, (req, res) => {
  logRequest(req)
  res.send('Hello POST')
})

app.post('/create-product', jsonParser, (req, res) => {
  logRequest(req)
  res.send('Hello POST')
})

app.post('/put-product', jsonParser, (req, res) => {
  logRequest(req)
  res.send('Hello POST')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})