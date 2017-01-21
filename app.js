"use strict"
let express =require("express");
let app = express();
let port = 3030;

let userInput = require('./userInput');

let bodyParser = require('body-parser');
app.use(express.static('public'));

let Sequelize = require('sequelize');
let sequelize = new Sequelize('blog', 'postgres', '123456', {
  host: 'localhost',
  port:'5432',
  dialect:'postgres'
});


let Users = require("./models/Users");
let Blog = require("./models/Blog");
let Comments = require("./models/Comments");

Blog.belongsTo(Users);
Comments.belongsTo(Users);
Comments.belongsTo(Blog);

sequelize.sync();

app.use(
	bodyParser.urlencoded({extended:true })
);

app.get('/', function (req, res){

	Blog.findAll().then(function (data){

		 let response={
				title:data[0].title,
				story:data[0].story
			}
			console.log("Response from /" + response.title);
		
		res.json(response);
		
	});

})

app.post('/', function (req, res){
let reqTitle=req.body.title;
let story = req.body.story;
let responseData;

	Blog.count({
		where: {title: reqTitle},
		order:['id', 'DESC']
	}).then(function (count){
		if(count ==0){
			Blog.create({
				title:reqTitle,
				story:story,
				userId:1
			}).then(function (data){
				console.log("returned data: " + data.dataValues.title);
			 responseData={
				title:data.dataValues.title,
				story:data.dataValues.story
			 }
			 res.json(responseData);
			})
		}
		else{
				responseData={
				title:reqTitle,
				story:story
			}
			res.send(responseData);

		}
		
	});

	
});




app.listen(port, function(){
console.log('server started on port '+ port);
});