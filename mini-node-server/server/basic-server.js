const http = require('http');
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json({strict: false}))
const PORT = 4999;
const ip = 'localhost';
app.use(express.static('client'))

const myLogger = function(request, next){
  console.log(`http request method is ${request.method}, url is ${request.url}`)
  next();
}
app.use(myLogger)
app.post('/upper', function(request, response) {
  console.log(request.body)

  let result = request.body;
  result = result.toUpperCase();
  console.log(result);

  response.json(result)
})
app.post('/lower', function(request, response){
  console.log(request.body)

  let result = request.body;
  result = result.toLowerCase();
  console.log(result);
  response.json(result)
})

app.listen(PORT, ip, () => {
  console.log(`http server listen on ${ip}:${PORT}`);
});


const defaultCorsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Accept',
  'Access-Control-Max-Age': 10
};