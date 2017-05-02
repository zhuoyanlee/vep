var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/about', function(request, response) {
  response.render('pages/about');
});

app.get('/contact', function(request, response) {
  response.render('pages/contact');
});

app.get('/home', function(request, response) {
  response.render('pages/home');
});

app.get('/resources', function(request, response) {
  response.render('pages/resources');
});

app.get('/awards', function(request, response) {
  response.render('pages/awards');
});

app.get('/iac', function(request, response){
	response.render('pages/iac');
});




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
