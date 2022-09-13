const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');
require('dotenv').config();

var db;
MongoClient.connect(process.env.DATABASE_URL
, function(err, client){
    if(err){
        return console.log(err)
    }
app.post('/memo', function(req, res){
    res.send('전송완료')
    db = client.db('todoapp');
    db.collection('post').insertOne({ title: req.body.title, date: req.body.date, }, function(err, result){
        console.log('저장완료')
    });
})
app.get('/list', function(req, res){
    db = client.db('todoapp');
    db.collection('post').find().toArray(function(err, result){
        if(err) return console.log(err);
        console.log(result);
        res.render('list.ejs', {posts: result});
    });
})

    app.listen(3000, function(){
        console.log('listening on 3000')
    });
})


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});

app.get('/write', function(req, res){
    res.sendFile(__dirname + '/write.html')
});


