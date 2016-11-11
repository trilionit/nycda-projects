var express =require("express");
var app = express();
var port = 3000;
var bodyParser = require("body-parser");


app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(
  bodyParser.urlencoded({extended:true })
);

app.post('/send', function(req, res){
   if (!req.body) return res.sendStatus(400);
  //form submission from blog form
	var blog ={
	title:req.body.title,
	msg:req.body.message
	};

  res.render('blog', {blog:blog});
});

app.get('/blog', function (req, res){
  console.log("blog website started");
  res.render('index');

  });

app.get('/category/:posts', function (req, res){
	var page = req.params.posts;
  if(page =="blog"){
    page = "post";
  }
  console.log("blog website started");
  res.render(page);
});



app.listen(port, function(){
var getTimeStamp = new Date();
console.log('Server Started');
});