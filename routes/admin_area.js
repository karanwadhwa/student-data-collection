const express = require('express');
const router = express.Router();

// Bring in Student Model
let Student = require('../models/student');

// Set userid and password
var user = {
  id: 'karan',
  password: 'xxxx'
}

function checkSignIn(req, res, next){
   if(req.session.user){
      next();     //If session exists, proceed to page
   } else {
       req.flash('alert red lighten-4 red-text text-darken-4', 'Admin login required!');
       res.redirect('/form');
   }
}

router.get('/student_list', checkSignIn, function(req, res,next){
  Student.find({}, function(err, students){
    if(err){
      console.log(err);
    }else{
      res.render('student_list',{
        students: students,
        id: req.session.user.id
      });
    }
  });
});

router.post('/login', function(req, res){
   if(user.id === req.body.adminName && user.password === req.body.pass){
     req.session.user = user;
     res.redirect('/admin_area/student_list');
   }
   else {
       req.flash('alert red lighten-4 red-text text-darken-4', 'You aint no admin bruh!');
       res.redirect('/form');
   }
});

router.get('/logout', function(req, res){
   req.session.destroy(function(){
    res.redirect('/form');
    console.log("user logged out.");
   });
});

router.use('/student_list', function(err, req, res, next){
console.log(err);
   //User should be authenticated! Redirect him to log in.
   res.redirect('/form');

});

module.exports = router;
