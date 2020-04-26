const express = require('express');
const bodyParser = require('body-parser');

leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route("/:leaderID")
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    next(); 
}) 
.get((req,res,next) => {
    res.end('Will send details of this leader '  + req.params.leaderID +  "!");
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('Post operation not supported on /leaders/' + req.params.leaderID);
})
.put((req, res, next) => {
    res.write("Updating the leader with ID as " + req.params.leaderID + "\n");
    res.end('Will update the leader: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting leader: ' + req.params.leaderID);
}); 

leaderRouter.route('/')
.all(function(req,res,next) {
      res.statusCode = 200;
      res.setHeader("Content-Type","text/plain");
      next();
})

.get(function(req,res,next){
        res.end('Will send all the leaders to you!');
})

.post(function(req, res, next){
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);    
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete(function(req, res, next){
        res.end('Deleting all leaders');
});

module.exports = leaderRouter;