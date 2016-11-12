var express =require("express");
var app = express();
var port = 3000;
var bodyParser = require("body-parser");
var Sequelize = require("Sequelize");

app.set("view engine", "ejs");
app.use(express.static("public"));

var sequelize = new Sequelize('myblog', 'root', null, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './myblog.db'
});

var postBlog = sequelize.define('blogs', {
  id:{type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
  title:Sequelize.STRING,
  msg:Sequelize.TEXT,
  createDate:Sequelize.DATE
});

sequelize.sync();


app.use(
  bodyParser.urlencoded({extended:true })
);

app.get('/blog', function (req, res){
res.render('index');

});
app.get('/posts', function (req, res){
  sequelize.sync().then(function(){
  postBlog.findAll({
    attributes:['title', 'msg'],
    // where:{
    //   id:1
    // }
    }).then(function(messages){
      for(var i = 0; i < messages.length; i++){ 
        var postToBlog=[];
        postToBlog.push(messages[i].dataValues);
      }
      res.render('blog', {blog:postToBlog});
    }); 
});

  });

app.get('/category/:posts', function (req, res){
  var page = req.params.posts;
  if(page == 'blog'){
    res.redirect('/posts');
  }
  else{
  res.render(page);
    }
});

app.post('/send', function(req, res){
  if (!req.body) return res.sendStatus(400);
  //form submission from blog form
  sequelize.sync().then(function(){
    postBlog.create({
      title:req.body.title,
      msg:req.body.message,
      createDate:new Date()
    }); 
  });

  res.redirect('/posts');
});

app.listen(port, function(){
var getTimeStamp = new Date();
console.log('Server Started');
});