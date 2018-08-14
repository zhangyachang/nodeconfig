var http = require('http'),
    express = require('express'),
    app = express();


app.use(express.static(__dirname+'/public'));

app.use('/',require('./router/index'));

http.createServer(app).listen(3000);