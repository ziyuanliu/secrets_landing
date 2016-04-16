
var express = require('express');
var app = express();

var oneDay = 86400000;


// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.use(express.static(__dirname + '/', { maxAge: oneDay }));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});