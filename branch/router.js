const express = require('express');
const fs = require('fs');
const branch = require('./branch');

const router = express.Router();
router.get('/index',function(req,res){
    /* branch.findAll(function(){

    }); */
  res.render('index.html');
});
router.get('/add',function(req,res){
    console.log(req.body);
})
module.exports = router;