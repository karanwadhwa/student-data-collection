const express = require('express');
const router = express.Router();

let Student = require('../models/student.js');

//  Form Route
router.get('/form', function(req,res,next){
  res.render('index');
});

//  Post Form Route
router.post('/form', function(req, res, next){
let student = new Student();
student.name = req.body.name;
student.email = req.body.email;
student.branch = req.body.branch;
student.stream = req.body.stream;
student.ten = req.body.ten;
student.twelve = req.body.twelve;
student.jee = req.body.jee;
student.math1 = req.body.math1;
student.phy1 = req.body.phy1;
student.chem1 = req.body.chem1;
student.mech = req.body.mech;
student.bee = req.body.bee;
student.math2 = req.body.math2;
student.phy2 = req.body.phy2;
student.chem2 = req.body.chem2;
student.ed = req.body.ed;
student.spa = req.body.spa;

student.save(function(err){
  if(err){
    console.log(err);
  }else{
    console.log('Details Saved');
    res.send('Details Recorded Successfully');
  }
});
});

module.exports = router;
