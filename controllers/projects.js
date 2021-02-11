// require express and enable express routing
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next)=> {
    res.render('projects/index', { 
      title: 'My Projects'
    })
  })

//make the controller public, so the other files can access to it 
module.exports = router;