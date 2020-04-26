const express = require('express');
const http = require('http');
const morgan = require('morgan')
const bodyParser = require('body-parser');

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan('dev')); //Morgan will log the essential information to track the request 
app.use(bodyParser.json()) //Will parse the request body to json
app.use(express.static(__dirname + '/static'));

app.all("/dishes/:dishID",(req,res,next) =>{
    req.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    next()
});

app.get("/dishes/:dishID",(req,res,next) =>{
    res.write("Current Dish is " + req.params.dishID + "\n");
    res.end("Sending you all the dishes");
});

app.post("/dishes/:dishID",(req,res,next) => {
    console.log(req.params.name);
    console.log(req.params.description);
    res.write("Updating the dish with id as" + req.params.dishID + "\n");
    res.end("Creating a new dish with name " + req.body.name + " and description as " + req.body.description); 
});

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