const express = require('express');
const app = new express();
var path = require("path");

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/qrcode.js', function(request, response){
    response.sendFile(path.join(__dirname + '/qrcode.js'));
});

app.listen(8080, () => console.log('I just connected on port 8080!'));
