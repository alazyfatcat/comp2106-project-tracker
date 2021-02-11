// use express dependency and its Routing feature to parse url's
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Project Tracker' });
});

//get 
router.get('/about', (req, res, next)=> {
  res.render('about', { 
    title: 'About this Site', 
    pageText: 'Here is some dynamic info from the controller'
  })
})

//make the controller public, so the other files can access to it 
module.exports = router;
