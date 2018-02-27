/**
 * Created by kylescagnelli on 2/26/18.
 */
var express = require('express');
var app = express();  //use express js module

// Static files to not be parsed by Node
app.use('/files', express.static(__dirname + '/files'));

//add handlebars view engine
var handlebars = require('express3-handlebars')
	.create({defaultLayout: 'main'});  //default handlebars layout page

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars'); //sets express view engine to handlebars


app.set('port', process.env.PORT || 8080);  //sets port 8080

app.get('/', function(req,res){ 
	res.render('index');  //respond with homepage
});
app.get('/event', function(req,res){ 
	res.render('event');  //respond with event page
});

app.use(function(req,res){  //express catch middleware if page doesn't exist
	res.status(404);  //respond with status code
	res.render('404'); //respond with 404 page
});

app.listen(app.get('port'), function(){ //start express server
	console.log( 'Express Server Started on http://localhost:8080');
});