const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');
require('dotenv').config();
app.use('/public', express.static('public'))

var db;
MongoClient.connect(process.env.DATABASE_URL
, function(err, client){
    if(err){
        return console.log(err)
    }
app.post('/schedule', function(req, res){
    res.sendFile(__dirname + '/write.html')
    db = client.db('todoapp');
    db.collection('counter').findOne({name : 'postCount'}, function(err, result){
        console.log(result.totalPost)
        const totalPosts = result.totalPost
        db.collection('post').insertOne({ _id: totalPosts + 1, title: req.body.title, date: req.body.date, }, function(err, result){
            console.log('저장완료')
            db.collection('counter').updateOne({name: 'postCount'}, {$inc: {totalPost: 1}}, function(err, result){
                if(err) {
                    return console.log(err)
                }
            })
        });
    });
})
app.post('/guestbook', function(req, res){
    res.send('전송완료');
    db = client.db('todoapp');
    db.collection('gcounter').findOne({name : 'postGcount'}, function(err, result){
        console.log(result.totalGpost)
        const totalGposts = result.totalGpost
        db.collection('guest').insertOne({_id: totalGposts + 1, name: req.body.name, memo: req.body.memo}, function(err, result){
            console.log(req.body)
            console.log('저장완료')
            db.collection('gcounter').updateOne({name: 'postGcount'}, {$inc: {totalGpost: 1}}, function(err, result){
                if(err){
                    return console.log(err)
                    }
                })
            })
        })
    })

app.get('/guest', function(req, res){
    db = client.db('todoapp');
    db.collection('guest').find().toArray(function(err, result){
        if(err) return console.log(err);
        console.log(result);
        res.render('guest.ejs', {gposts: result});
    })
})

app.get('/list', function(req, res){
    db = client.db('todoapp');
    db.collection('post').find().toArray(function(err, result){
        if(err) return console.log(err);
        console.log(result);
        res.render('list.ejs', {posts: result});
    });
})

app.get('/detail/:id', function(req, res){
    db = client.db('todoapp');
    db.collection('post').findOne({_id : parseInt(req.params.id)}, function(err, result){
        if(err){
            return console.log(err)
        }
        res.render('detail.ejs', { data : result})
    })
})


app.delete('/delete', function(req, res){
    console.log(req.body)
    req.body._id = parseInt(req.body._id);
    db.collection('post').deleteOne(req.body, function(err, result){
        console.log('삭제완료');
        res.status(200).send({message: '삭제완료'});
    })
})

app.delete('/deleted', function(req, res){
    console.log(req.body)
    req.body._id = parseInt(req.body._id);
    db.collection('guest').deleteOne(req.body, function(err, result){
        console.log('삭제완료');
        res.status(200).send({message: '삭제완료'});
    })
})

    app.listen(3000, function(){
        console.log('listening on 3000')
    });
})


app.get('/', function(req, res){
    res.render('index.ejs')
});

app.get('/write', function(req, res){
    res.render('write.ejs')
});


