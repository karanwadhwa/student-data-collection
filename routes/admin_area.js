const express = require('express');
const router = express.Router();

// Bring in Student Model
let Student = require('../models/student');

router.get('/', function(req, res,next){
  Student.find({}, function(err, students){
    if(err){
      console.log(err);
    }else{
      res.render('student_list',{
        students: students
      });
    }
  });
});

module.exports = router;
