const express = require('express');
const bodyParser = require('body-parser');

promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route("/:promoID")
.all((req,res,next) =>{
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    next(); 
}) 
.get((req,res,next) => {
    res.end('Will send details of this promotion '  + req.params.promoID +  "!");
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('Post operation not supported on /promotions/' + req.params.promoID);
})
.put((req, res, next) => {
    res.write("Updating the promotion with ID as " + req.params.promoID + "\n");
    res.end('Will update the promotion: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting promotion: ' + req.params.promoID);
}); 

promoRouter.route('/')
.all(function(req,res,next) {
      res.statusCode = 200;
      res.setHeader("Content-Type","text/plain");
      next();
})

.get(function(req,res,next){
        res.end('Will send all the promotions to you!');
})

.post(function(req, res, next){
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);    
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete(function(req, res, next){
        res.end('Deleting all promotions');
});

module.exports = promoRouter;