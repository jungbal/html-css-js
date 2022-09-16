const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
app.use(session({secret : 'jungbal4298', resave : true, saveUninitialized : false}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'))
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

app.post('/guestbook', function(req, res){
    res.redirect('/guest')
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

app.get('/guest', isLogin, function(req, res){
    db = client.db('todoapp');
    db.collection('guest').find().toArray(function(err, result){
        if(err) return console.log(err);
        console.log(result);
        res.render('guest.ejs', {gposts: result});
    })
})

app.get('/list', isLogin, function(req, res){
    db = client.db('todoapp');
    db.collection('post').find().toArray(function(err, result){
        if(err) return console.log(err);
        console.log(result);
        res.render('list.ejs', {posts: result});
    });
})

app.get('/search', function(req, res){
    db = client.db('todoapp');
    console.log(req.query.value)
    const searchCon = [
        {
            $search: {
                index: 'titlesearch',
                text: {
                    query:  req.query.value,
                    path: 'date',
                }
            }
        },
        { $sort : {title : 1}}
    ]
    db.collection('post').aggregate(searchCon).toArray(function(err, result){
        if(err) return console.log(err)
        console.log(result)
        res.render('search.ejs', {post: result})
    })
})

app.get('/detail/:id', isLogin, function(req, res){
    db = client.db('todoapp');
    db.collection('post').findOne({_id : parseInt(req.params.id)}, function(err, result){
        if(err){
            return console.log(err)
        }
        res.render('detail.ejs', { data : result})
    })
})

app.get('/edit/:id', isLogin, function(req, res){
    db = client.db('todoapp');
    db.collection('post').findOne({ _id : parseInt(req.params.id)}, function(err, result){
        console.log(result)
        res.render('edit.ejs', {post: result})
    })
})

app.put('/edit', function(req, res){
    db = client.db('todoapp');
    db.collection('post').updateOne({ _id : parseInt(req.body.id) }, { $set : {title: req.body.title, date: req.body.date}}, 
    function(err, result){
        console.log('수정완료')
        res.redirect('/list')
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


app.get('/login', function(req, res){
    res.render('login.ejs')
})

app.post('/login', passport.authenticate('local', {
    failureRedirect : 'login'
}), function(req, res){
    res.redirect('/')
});

app.get('/mypage', isLogin, function(req, res){
    console.log(req.user)
    res.render('mypage.ejs', {user : req.user})
})

app.get('/signup', function(req, res){
    res.render('signup.ejs')
})


function isLogin(req, res, next){
    if(req.user){
        next()
    }else{
        res.send('로그인을 해주세요')
    }
}

passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
    session: true,
    passReqToCallback: false,
}, function(iid, ipassword, done){
    console.log(iid, ipassword);
    db = client.db('todoapp')
    db.collection('login').findOne({id : iid}, function(err, result){
        if(err) return done(err)
        if(!result) return done(null, false, {message : '존재하지 않는 아이디입니다'})
        if(ipassword === result.password){
            return done(null, result)
        }else {
            return done(null, false, {message: '비밀번호가 틀렸습니다'})
        }
    })
}))

passport.serializeUser(function(user, done){
    done(null, user.id)
})

passport.deserializeUser(function(id, done){
    db = client.db('todoapp')
    db.collection('login').findOne({id : id}, function(err, result){
        done(null, result)
    })
})

app.post('/signup', function(req, res){
    db = client.db('todoapp')
    db.collection('login').insertOne({id : req.body.idw, password : req.body.pwd}, function(err, result){
        res.redirect('/login')
    })
})

app.post('/schedule', function(req, res){
    res.redirect('/write')
    db = client.db('todoapp');
    db.collection('counter').findOne({name : 'postCount'}, function(err, result){
        console.log(result.totalPost)
        const totalPosts = result.totalPost
        const saveIt = { _id: totalPosts + 1, title: req.body.title, date: req.body.date, writer: req.user._id}
        db.collection('post').insertOne(saveIt, function(err, result){
            console.log('저장완료')
            db.collection('counter').updateOne({name: 'postCount'}, {$inc: {totalPost: 1}}, function(err, result){
                if(err) {
                    return console.log(err)
                }
            })
        });
    });
})

app.delete('/delete', function(req, res){
    console.log(req.body)
    req.body._id = parseInt(req.body._id);
    const deleteData = { _id : req.body._id, writer : req.user._id}
    db.collection('post').deleteOne(deleteData, function(err, result){
        console.log('삭제완료');
        res.status(200).send({message: '삭제완료'});
    })
})

    app.get('/', function(req, res){
        res.render('index.ejs')
    });
    
    app.get('/write', isLogin, function(req, res){
        res.render('write.ejs')
    });

    app.listen(3000, function(){
        console.log('listening on 3000')
    });


})



