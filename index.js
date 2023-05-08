const { urlencoded } = require('express');
var express = require('express');
var path = require('path');
var port = 8081;
var server = express();
var db = require('./config/mongoose');

server.use(urlencoded());
server.use('/', require('./routes/blog'));
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));
server.use('/images', express.static(__dirname+'/images'));

server.listen(port, function(err){
    if(err){
        console.log("Server not running.");
        return false;
    }
    console.log("Server is running on port = "+port);
});
