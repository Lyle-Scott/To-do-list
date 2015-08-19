var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/*', function(request, response) {
  response.sendFile(path.join(__dirname, '/public/404.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
