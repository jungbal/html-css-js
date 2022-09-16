const express = require('express');
const path = require('path');
const app = express();

app.listen(4000, function () {
  console.log('listening on 4000')
}); 

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
})
