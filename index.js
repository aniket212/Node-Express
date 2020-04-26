const express = require('express');
const http = require('http');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter.js');
const promoRouter = require("./routes/promoRouter.js");
const leaderRouter = require("./routes/leaderRouter.js");
const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan('dev')); //Morgan will log the essential information to track the request 
app.use(bodyParser.json()) //Will parse the request body to json
app.use(express.static(__dirname + '/static'));

app.use('/dishes',dishRouter);
app.use('/promotions',promoRouter);
app.use('/leaders',leaderRouter);

app.use((req,res,next) => {
    //console.log(req.headers);
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.end("<html><body><h1>Testing Express Server</h1></body></html>");      
});

const server = http.createServer(app);
server.listen(port,hostname,() => {
    console.log(`Server Started at http://${hostname}:${port}`);
} );