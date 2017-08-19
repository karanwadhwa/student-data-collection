const express = require('express');
const router = express.Router();

let Student = require('../models/student.js');

//  Form Route
router.get('/form', function(req,res,next){
  res.render('index');
});

//  Post Form Route
router.post('/form', function(req, res, next){
  req.checkBody('name','Enter your name bruh!').notEmpty();
  req.checkBody('email','Enter a valid email id').notEmpty().isEmail();
  req.checkBody('branch','Select your branch').notEmpty();
  req.checkBody('stream','Select your 12th regular/bifocal/vocational thingy').notEmpty();
  req.checkBody('ten','Enter your 10th grade marks').notEmpty().isInt();
  req.checkBody('twelve','Enter your 12th grade marks').notEmpty().isInt();
  req.checkBody('jee','Enter your JEE test scores').notEmpty().isInt();
  req.checkBody('math1','Enter the marks you scored in Applied Mathematics 1').notEmpty().isInt();
  req.checkBody('phy1','Enter the marks you scored in Applied Physics 1').notEmpty().isInt();
  req.checkBody('chem1','Enter the marks you scored in Applied Chemistry 1').notEmpty().isInt();
  req.checkBody('mech','Enter the marks you scored in Engineering Mechanics').notEmpty().isInt();
  req.checkBody('bee','Enter the marks you scored in Basic Electrical & Electronics Engg').notEmpty().isInt();
  req.checkBody('math2','Enter the marks you scored in Applied Mathematics 2').notEmpty().isInt();
  req.checkBody('phy2','Enter the marks you scored in Applied Physics 2').notEmpty().isInt();
  req.checkBody('chem2','Enter the marks you scored in Applied Chemistry 2').notEmpty().isInt();
  req.checkBody('ed','Enter the marks you scored in Engineering Drawing marks').notEmpty().isInt();
  req.checkBody('spa','Enter the marks you scored in Structured Programming Approach marks').notEmpty().isInt();

  //Get Errors
  let errors = req.validationErrors();

    if(errors){
      res.render('index', {
        errors:errors
      });
    }else{
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
          req.flash('green lighten-4 green-text text-darken-4', 'Your details were recorded successfully');
          res.redirect('/form');
        }
      });
    }
});

module.exports = router;
