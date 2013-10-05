var https = require('https');
var express = require('express');

var app = express();
app.use(express.logger());
app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
  response.sendfile(__dirname + '/public/index.html');
});

app.post('/', function (request, response) {
	// facebook sends a post here...
	// example: /?fb_source=bookmark_apps&amp;ref=bookmarks&amp;count=0&amp;fb_bmpos=3_0
	response.sendfile(__dirname + '/public/index.html');
});

var port = process.env.PORT || 5000;
app.listen(port);
//console.log('Listening on port 443');